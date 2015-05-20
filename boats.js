'use strict';

var LOG = $( "#log" );

String.prototype.width = function(font) {
  var f = font || '12px arial',
      o = $('<div>' + this + '</div>')
            .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
            .appendTo($('body')),
      w = o.width();

  o.remove();

  return w;
}

/////////////////////////////////////////////////////////////////////
// Data ---

// Images 
var boat_1_sz5_img = new Image();
var boat_2_sz5_img = new Image();
var boat_3_sz5_img = new Image();
var boat_4_sz5_img = new Image();

var rowboat_sz60_img = new Image();
var rowboat_sz45_img = new Image();
var rowboat_sz15_img = new Image();

var west_arrow_img = new Image();
var west_arrow_selected_img = new Image();
var anchor_img = new Image();
var anchor_selected_img = new Image();
var island_nav_c_img = new Image();
var island_nav_cc_img = new Image();

var bananas_img = new Image();
var peanuts_img = new Image();
var cotton_img = new Image();
var silk_img = new Image();

// Terrain
var TER_MAX = 100;

// Cargo
var cargo_index = {
   // Fruits
   bananas: { name:'bananas', image:bananas_img, desc:'a strangely shaped fruit', foodvalue:2 },
   // Vegetables
   splitpeas: { name:'split peas', image:bananas_img, foodvalue:2 },
   peanuts: { name:'peanuts', image:peanuts_img, foodvalue:3 },
   // Raw Resources
   softwood: { name:'soft wood', image:bananas_img },
   hardwood: { name:'hard wood', image:bananas_img },
   burlap: { name:'burlap', image:bananas_img },
   cotton: { name:'cotton', image:cotton_img },
   silk: { name:'silk', image:silk_img },
   // Intermediate Resources
   nails: { name:'box of nails', image:bananas_img },
   // Crafted Items
   dolls: { name:'dolls', image:bananas_img },
   dresses: { name:'dresses', image:bananas_img },
   fancydresses: { name:'fancy dresses', image:bananas_img }
}
var cargo_selected = '';

// Places
var places = [];

// Boats
var boat_canvas = $('#boat_canvas')[0]
boat_canvas.onselectstart = function () { return false; }
var boat_context = boat_canvas.getContext('2d');
var BOAT_WIDTH = 550, BOAT_HEIGHT = 409;
var BOAT_SCROLLBAR_WIDTH = 15;
var BOAT_HEADER_HEIGHT = 22;
var BOAT_INNER_X = BOAT_SCROLLBAR_WIDTH + 65, BOAT_INNER_Y = BOAT_HEADER_HEIGHT + 5;
var BOAT_INNER_WIDTH = BOAT_WIDTH - (BOAT_INNER_X + 5);
var BOAT_INNER_HEIGHT = BOAT_HEIGHT - (BOAT_INNER_Y + 5);
var BOAT_NAV_CENTER_X = 90, BOAT_NAV_CENTER_Y = 130;

var boat_menu = 1; // 1 = boats, 2 = cargo, 3 = sail, 4 = city, 5 = market
var boat_scroll = 0;
var boat_selection = 0;

var boats = [];
var my_boats = [];
var other_boats = [];
var boat_id_gen = 0;

// Map
var map_canvas = $('#map_canvas')[0]
map_canvas.onselectstart = function () { return false; }
var map_context = map_canvas.getContext('2d');
var MAP_DRAW_DIM = 405, MAP_SQUARE_DIM = 45, MAP_DRAW_EDGE = 2, MAP_FULL_DIM = MAP_DRAW_DIM + (2 * MAP_DRAW_EDGE);
var MAP_CONTROLS_WIDTH = 80;
var MAP_GRID_SIZE = 9, MAP_ZOOM_RATIO = 3;
var MAP_HEIGHT = 1000, MAP_WIDTH = 1000;

var map;
var map_zoom_level = 0; // 1 tick = GRID_SIZE ^ zoom_level
var map_center_x = 500, map_center_y = 500; 
var shift_down = false;

// Generation
var GEN_NUM_ISLANDS = 600, GEN_NUM_BIG_ISLANDS = 30;
var GEN_HEIGHT_MIN = 5, GEN_WIDTH_MIN = 5;
var GEN_HEIGHT_DIFF = 10, GEN_WIDTH_DIFF = 10;
var GEN_MIN_ADJ = 3;
 
// Controls
var mapDrag = false;
var mapDragBase_x = -1, mapDragBase_y = -1;
var mapDragLast_dx = 0, mapDragLast_dy = 0;
var mapMouseDown = false;
var mapMouseDownTime = null;
var mapMouseDownPix_x = -1, mapMouseDownPix_y = -1;
var shift_down = false;

// General
var discovery_fog_on = false;

/////////////////////////////////////////////////////////////////////
// Terrain ---

/* first bit === 0 -> full water
 * otherwise it's land
 *
 * Then, 3 bits each for the start and end direction of the land, moving clockwise
 *
 * Then, 8 bits, for possible rivers in any of the 8 directions
 *
 * Directions:
 * 1 2 3
 *  \|/
 * 0-o-4
 *  /|\
 * 7 6 5
 */

function constructTerrain( start_dir, end_dir, river_bits ) { // Goes Clockwise
   return 1 + (start_dir << 1) + (end_dir << 4) + (river_bits << 7);
}

function terGetStart( terrain ) {
   return (terrain >> 1) & 7;
}

function terGetEnd( terrain ) {
   return (terrain >> 4) & 7; 
}

function terGetRivers( terrain ) {
   return (terrain >> 7) & 0xFF;
}

function addDirection( x, y, dir )
{
   if (dir === 0) return [ x-1, y ];
   if (dir === 1) return [ x-1, y-1 ];
   if (dir === 2) return [ x, y-1 ];
   if (dir === 3) return [ x+1, y-1 ];
   if (dir === 4) return [ x+1, y ];
   if (dir === 5) return [ x+1, y+1 ];
   if (dir === 6) return [ x, y+1 ];
   if (dir === 7) return [ x-1, y+1 ];

   return [x, y]
}


/////////////////////////////////////////////////////////////////////
// Places ---

function Place( type, name )
{
   this.type = type;
   if (type === "town") {
      this.name = name;
      this.techlevel = 0;
      this.tech = {};
      this.stock = {};

   }
}

/////////////////////////////////////////////////////////////////////
// Boats ---

function genBoatName()
{
   return "Mini boatster";
}

function Boat( type )
{
   this.type = type;

   switch (type) {
      case 1:
         this.maxcargo = 50;
         this.name = "Mini boatster";
         this.typename = "Rowboat";
         this.maxhealth = 80;
         this.speed = 30;
         break;
      case 2:
         this.maxcargo = 120;
         this.name = genBoatName();
         this.typename = "Raft";
         this.maxhealth = 200;
         this.speed = 42;
         break;
      case 3:
         this.maxcargo = 120;
         this.name = genBoatName();
         this.typename = "Sailboat";
         this.maxhealth = 120;
         this.speed = 24;
         break;
   }

   this.id = boat_id_gen++;
   this.alive = true;

   this.cargo = {};
   this.cargocnt = 0;
   this.health = this.maxhealth;
   this.x = 0;
   this.y = 0;

   // Sailing
   this.direction = -1; // for exploration; -1 = anchored
   this.sail_style = 0; // 0 = sail direction; 1 = explore island; 2 = journey
   this.next_direction = -1;
   this.journey_x = -1;
   this.journey_y = -1;
   this.nav_islands_clockwise = true;
   this.sailing_progress = 0;
   this.blocked = false;
   this.block_x = -1;
   this.block_y = -1;
}

Boat.prototype.decideNext = function ()
{
   if (this.sail_style === 0 || this.sail_style === 1) {
      if (this.direction === -1) {
         this.next_direction = -1;
         this.blocked = false;
         return;
      }

      var loc = map[this.x][this.y];
      var ter = loc.terrain;

      if (ter !== 0) {
         var block = false;
         var start = terGetStart( ter ), end = terGetEnd( ter );
         if (this.blocked) {
            // Check if we've made it around the island
            var made_it = false;
            var dx = this.x - this.block_x;
            var dy = this.y - this.block_y;

            if (this.direction === 0 && dy === 0 && dx < 0) made_it = true;
            else if (this.direction === 4 && dy === 0 && dx > 0) made_it = true;
            else if (this.direction === 2 && dx === 0 && dy < 0) made_it = true;
            else if (this.direction === 6 && dx === 0 && dy > 0) made_it = true;
            else if (this.direction === 1 && dx < 0 && dy < 0) {
               if (this.nav_islands_clockwise && dy <= dx) made_it = true;
               else if (!this.nav_islands_clockwise && dy >= dx) made_it = true;
            }
            else if (this.direction === 5 && dx > 0 && dy > 0) {
               if (this.nav_islands_clockwise && dy >= dx) made_it = true;
               else if (!this.nav_islands_clockwise && dy <= dx) made_it = true;
            }
            else if (this.direction === 3 && dx > 0 && dy < 0) {
               if (this.nav_islands_clockwise && -dy <= dx) made_it = true;
               else if (!this.nav_islands_clockwise && -dy >= dx) made_it = true;
            }
            else if (this.direction === 7 && dx < 0 && dy > 0) {
               if (this.nav_islands_clockwise && dy <= -dx) made_it = true;
               else if (!this.nav_islands_clockwise && dy >= -dx) made_it = true;
            }

            if (made_it) {
               // We made it!
               this.blocked = false;
               this.next_direction = this.direction;
            } else { 
               if (this.nav_islands_clockwise)
                  this.next_direction = start;
               else
                  this.next_direction = end;
            }
         } else {
            if (this.sail_style === 1) {
               block = true;
            } else if (end > start) {
               if (this.direction > start && this.direction < end)
                  block = true;
            } else {
               if (this.direction < end || this.direction > start)
                  block = true;
            }

            if (block) {
               this.blocked = true;
               this.block_x = this.x;
               this.block_y = this.y;
               if (this.nav_islands_clockwise)
                  this.next_direction = start;
               else
                  this.next_direction = end;
            } 
            else 
            {
               this.blocked = false;
               this.next_direction = this.direction;
            }
         }
      } 
      else 
      {
         // Check for diagonal access to land locations
         var next = addDirection( this.x, this.y, this.direction );
         var next_ter = map[next[0]][next[1]].terrain;
         if (next_ter !== 0 && terGetStart( next_ter ) === terGetEnd( next_ter )) {
            // Our worst fears have been realized
            this.blocked = true;
            this.block_x = this.x;
            this.block_y = this.y;
            if (this.nav_islands_clockwise)
               this.next_direction = (this.direction + 7) % 8;
            else
               this.next_direction = (this.direction + 1) % 8;
         }
         else this.next_direction = this.direction;
      }
         

   } else if (this.sail_style === 2) {
      this.next_direction = -1;
   }
}

Boat.prototype.changeDirection = function ( dir )
{
   this.direction = dir;

   this.blocked = false;

   this.sailing_progress = 0;
   this.decideNext();
}

Boat.prototype.sail = function ()
{
   var new_loc = addDirection( this.x, this.y, this.next_direction );
   this.x = new_loc[0];
   this.y = new_loc[1];

   this.sailing_progress = 0;
   this.decideNext();
}

Boat.prototype.update = function ()
{
   if (this.next_direction === -1) return;

   this.sailing_progress++;

   if ((this.next_direction % 2 === 0 && this.sailing_progress >= this.speed)
         || this.next_direction % 2 === 1 && this.sailing_progress >= (this.speed * 1.4))
      this.sail();
}

function updateBoats()
{
   for( var i = 0; i < boats.length; ++i)
      boats[i].update();
}

function initBoats()
{
   var b = new Boat( 1 );
   //b.setPosition( 391, 391 );
   b.x = 391;
   b.y = 391;
   b.cargo.bananas = 3;
   b.cargo.cotton = 19;
   b.cargo.silk = 5;
   b.cargo.peanuts = 21;
   b.cargocnt = 48;
   boats.push( b );
   my_boats.push( b.id );
   var b2 = new Boat( 1 );
   //b2.setPosition( 391, 391 );
   b2.x = 392;
   b2.y = 392;
   b2.maxcargo = 999;
   b2.cargocnt = 999
   boats.push( b2 );
   my_boats.push( b2.id );
}

function changeBoatMenu( new_menu )
{
   if (new_menu < 1) new_menu = 1;
   if (new_menu > 5) new_menu = 5;

   boat_menu = new_menu;
   refresh();
}

// Drawing

function drawBoatScrollbar()
{
   // TODO

}

function drawBoatContent()
{
   var num_boats = my_boats.length;
   var grid_x = BOAT_SCROLLBAR_WIDTH, grid_y = BOAT_HEADER_HEIGHT + 10;
   for (var i = 0; i < 5; ++i){
      var index = i + boat_scroll;
      if (index >= num_boats) break;

      var b = boats[ my_boats[index] ];
      var b_img;
      if (b.type === 1) b_img = rowboat_sz60_img;

      if (boat_selection === index) {
         boat_context.fillStyle = "rgba(185,185,185,255)";
         boat_context.fillRect( grid_x, grid_y, BOAT_WIDTH - (2 * BOAT_SCROLLBAR_WIDTH), 60 );
      }

      boat_context.drawImage( b_img, grid_x, grid_y );
      if (boat_menu === 1){
         // Draw boat information
         boat_context.font = "16pt serif";
         boat_context.fillStyle = "black";
         boat_context.fillText("\"" + b.name + "\"", grid_x + 65, grid_y + 24);
         boat_context.font = "14pt serif";
         boat_context.fillText(b.typename, grid_x + 85, grid_y + 50);

         boat_context.font = "14pt serif";
         var dur_string = b.health + "\/" + b.maxhealth;
         var width = dur_string.width("14pt serif");
         boat_context.fillText("Dur: ", grid_x + 280, grid_y + 24);
         boat_context.fillText(dur_string, BOAT_WIDTH - (100 + width), grid_y + 24);
         var cargo_string = b.cargocnt + "\/" + b.maxcargo;
         width = cargo_string.width("14pt serif");
         boat_context.fillText("Cargo: ", grid_x + 280, grid_y + 50);
         boat_context.fillText(cargo_string, BOAT_WIDTH - (100 + width), grid_y + 50);

         // Goto Button
         boat_context.fillStyle = "white";
         boat_context.strokeStyle = "rgba(85,85,85,255)";
         boat_context.lineWidth = '3';
         boat_context.beginPath();
         boat_context.moveTo( BOAT_WIDTH - 75, grid_y + 17 );
         boat_context.lineTo( BOAT_WIDTH - 43, grid_y + 17 );
         boat_context.lineTo( BOAT_WIDTH - 43, grid_y + 7 );
         boat_context.lineTo( BOAT_WIDTH - 20, grid_y + 30 );
         boat_context.lineTo( BOAT_WIDTH - 43, grid_y + 53 );
         boat_context.lineTo( BOAT_WIDTH - 43, grid_y + 43 );
         boat_context.lineTo( BOAT_WIDTH - 75, grid_y + 43 );
         boat_context.fill();
         boat_context.stroke();
      }
      grid_y += 70;
   }

   if (boat_menu > 1) {
      boat_context.fillStyle = "rgba(185,185,185,255)";
      boat_context.fillRect( BOAT_INNER_X, BOAT_INNER_Y, BOAT_INNER_WIDTH, BOAT_INNER_HEIGHT);
      boat_context.fillStyle = "rgba(235,235,235,255)";
      boat_context.fillRect( BOAT_INNER_X + 5, BOAT_INNER_Y + 5, BOAT_INNER_WIDTH - 10, BOAT_INNER_HEIGHT - 10);
   }

   var boat = boats[ my_boats[boat_selection] ];

   if (boat_menu === 2) {
      // Cargo menu
      var x = BOAT_INNER_X + 15, y = BOAT_INNER_Y + 15;
      for (var cargo_id in boat.cargo) {
         var count = boat.cargo[cargo_id];
         if (count === 0) continue;

         var name = cargo_index[cargo_id].name;

         if (name === cargo_selected) {
            boat_context.fillStyle = "rgba(185,185,185,255)";
            boat_context.fillRect( x, y, 60, 60 );
         }
         boat_context.strokeStyle = "rgba(85,85,85,255)";
         boat_context.lineWidth = '2';
         boat_context.strokeRect( x, y, 60, 60 );

         // Draw image
         var img = cargo_index[cargo_id].image;
         if (img)
            boat_context.drawImage( img, x, y );

         // Draw count
         var count_str = String(count);
         var count_width = count_str.width("14pt sans-serif");
            
         boat_context.fillStyle = 'white';
         boat_context.fillRect( x + 58 - count_width, y + 62 - 18, count_width + 4, 18 )
         boat_context.strokeRect( x + 58 - count_width, y + 62 - 18, count_width + 4, 18 )

         boat_context.fillStyle = 'black';
         boat_context.font = '14pt sans-serif';
         boat_context.fillText( count_str, x + 60 - count_width, y + 60 );

         x += 70;
         if (x + 50 > BOAT_INNER_X + BOAT_INNER_WIDTH - 20) {
            x = BOAT_INNER_X + 10;
            y += 70;
         }
      }


   } else if (boat_menu === 3) {
      // Sailing menu
      // Split it up first
      boat_context.fillStyle = "rgba(185,185,185,255)";
      boat_context.fillRect( BOAT_INNER_X + (BOAT_INNER_WIDTH / 2), BOAT_INNER_Y, 5, BOAT_INNER_HEIGHT );


      // Titles
      boat_context.font = "16pt sans-serif";
      boat_context.fillStyle = "black";
      boat_context.fillText("Explore", BOAT_INNER_X + 80, BOAT_INNER_Y + 26);
      boat_context.fillText("Journey", BOAT_INNER_X + 80 + (BOAT_INNER_WIDTH / 2), BOAT_INNER_Y + 26);

      // Exploration
      // Arrows
      boat_context.save();
      boat_context.translate( BOAT_INNER_X + BOAT_NAV_CENTER_X, BOAT_INNER_Y + BOAT_NAV_CENTER_Y );

      for (var i = 0; i < 8; ++i) {
         if (boat.direction === i)
            boat_context.drawImage( west_arrow_selected_img, -75, -18 );
         else boat_context.drawImage( west_arrow_img, -75, -18 );

         boat_context.rotate( Math.PI / 4 );
      }

      // Anchor
      boat_context.restore();
      if (boat.direction === -1)
         boat_context.drawImage( anchor_selected_img, BOAT_INNER_X + BOAT_NAV_CENTER_X - 25, BOAT_INNER_Y + BOAT_NAV_CENTER_Y - 25 );
      else boat_context.drawImage( anchor_img, BOAT_INNER_X + BOAT_NAV_CENTER_X - 25, BOAT_INNER_Y + BOAT_NAV_CENTER_Y - 25 );

      // Island navigation style
      boat_context.strokeStyle = "rgba(85,85,85,255)";
      boat_context.lineWidth = '3';
      if (boat.nav_islands_clockwise === true)
         boat_context.strokeRect( BOAT_INNER_X + (BOAT_INNER_WIDTH/2) - 59, BOAT_INNER_Y + 80, 50, 50 ); 
      else 
         boat_context.strokeRect( BOAT_INNER_X + (BOAT_INNER_WIDTH/2) - 59, BOAT_INNER_Y + 135, 50, 50 ); 

      boat_context.drawImage( island_nav_c_img, BOAT_INNER_X + (BOAT_INNER_WIDTH/2) - 60, BOAT_INNER_Y + 80 );
      boat_context.drawImage( island_nav_cc_img, BOAT_INNER_X + (BOAT_INNER_WIDTH/2) - 60, BOAT_INNER_Y + 135 );


      // Journey
      // TODO: Basic seek->direction strategy similar to explore
      // TODO: Better, A* sort of strategy


   } else if (boat_menu === 4) {

   } else if (boat_menu === 5) {

   }
}

function drawBoatHeader()
{
   var header_index = 1;
   for (var x = 0; x < 550; x += 110) {
      // 0 - Options
      boat_context.beginPath();
      boat_context.moveTo( x, BOAT_HEADER_HEIGHT );
      boat_context.lineTo( x+10, 2 );
      boat_context.lineTo( x+100, 2 );
      boat_context.lineTo( x+110, BOAT_HEADER_HEIGHT );
      if (header_index !== boat_menu)
         boat_context.lineTo( x, BOAT_HEADER_HEIGHT );
      boat_context.strokeStyle = "black";
      boat_context.lineWidth = '1';
      boat_context.stroke();
      boat_context.fillStyle = "rgba(205,205,205,255)";
      if (header_index === boat_menu)
         boat_context.fillStyle = "rgba(235,235,235,255)";
      boat_context.fill();
      header_index++;
   }

   boat_context.fillStyle = "black";
   boat_context.font = "12pt sans-serif";
   boat_context.fillText( "1 - Boats", 10, BOAT_HEADER_HEIGHT - 4 );
   boat_context.fillText( "2 - Cargo", 120, BOAT_HEADER_HEIGHT - 4 );
   boat_context.fillText( "3 - Sail", 230, BOAT_HEADER_HEIGHT - 4 );
   boat_context.fillText( "4 - Town", 340, BOAT_HEADER_HEIGHT - 4 );
   boat_context.fillText( "5 - Market", 450, BOAT_HEADER_HEIGHT - 4 );

}

function clearBoats()
{
   boat_context.clearRect( 0, 0, BOAT_WIDTH, BOAT_HEIGHT );
   boat_context.fillStyle = "rgba(235,235,235,255)";
   boat_context.fillRect( 0, 0, BOAT_WIDTH, BOAT_HEIGHT );
}

function drawBoats()
{
   clearBoats();
   drawBoatHeader();
   drawBoatContent();
}

// Controls
function onClickBoats( e )
{
   var x_pix = e.pageX - boat_canvas.offsetLeft;
   var y_pix = e.pageY - boat_canvas.offsetTop;

   if (y_pix < BOAT_HEADER_HEIGHT) {
      changeBoatMenu( Math.ceil(x_pix / 110) );
   } 
   else if (x_pix > BOAT_SCROLLBAR_WIDTH &&
         (x_pix < BOAT_SCROLLBAR_WIDTH + 90 || (boat_menu === 1 && x_pix < BOAT_WIDTH - 80))
         && y_pix > BOAT_HEADER_HEIGHT + 10)
   { // Select a boat
      var selection = Math.floor((y_pix - (BOAT_HEADER_HEIGHT + 10) ) / 70) + boat_scroll;
      if (selection < my_boats.length) {
         boat_selection = selection + boat_scroll;
         refresh();
      }
   }
   else if (boat_menu === 1 && x_pix > BOAT_WIDTH - 80)
   { // Find boat
      var selection = Math.floor((y_pix - BOAT_HEADER_HEIGHT - 10) / 70);
      if ((selection + boat_scroll) < my_boats.length) {
         boat_selection = selection + boat_scroll;
         findSelectedBoat();
         refresh();
      }
   }
   else if (boat_menu === 3) {
      var boat = boats[ my_boats[boat_selection] ];
      var nav_x = x_pix - (BOAT_INNER_X + BOAT_NAV_CENTER_X);
      var nav_y = y_pix - (BOAT_INNER_Y + BOAT_NAV_CENTER_Y);
      if ( (nav_x * nav_x) + (nav_y * nav_y) < 625 ) {
         boat.changeDirection( -1 );
      } else if ( nav_x < -28 && nav_x > -76 && nav_y < 18 && nav_y > -18 ) {
         boat.changeDirection( 0 );
      } else if ( nav_x < 76 && nav_x > 28 && nav_y < 18 && nav_y > -18 ) {
         boat.changeDirection( 4 );
      } else if ( nav_x < 18 && nav_x > -18 && nav_y < -28 && nav_y > -76 ) {
         boat.changeDirection( 2 );
      } else if ( nav_x < 18 && nav_x > -18 && nav_y < 76 && nav_y > 28 ) {
         boat.changeDirection( 6 );
      } else if ( (nav_x + nav_y) > -105 && (nav_x + nav_y) < -40
               && (nav_x - nav_y) < 25 && (nav_x - nav_y) > -25) {
         boat.changeDirection( 1 );
      } else if ( (nav_x + nav_y) > 40 && (nav_x + nav_y) < 105
               && (nav_x - nav_y) < 25 && (nav_x - nav_y) > -25) {
         boat.changeDirection( 5 );
      } else if ( (nav_x + nav_y) > -25 && (nav_x + nav_y) < 25
               && (nav_x - nav_y) < 105 && (nav_x - nav_y) > 40) {
         boat.changeDirection( 3 );
      } else if ( (nav_x + nav_y) > -25 && (nav_x + nav_y) < 25
               && (nav_x - nav_y) < -40 && (nav_x - nav_y) > -105) {
         boat.changeDirection( 7 );
      } else if ( x_pix > (BOAT_INNER_X + (BOAT_INNER_WIDTH/2) - 59) 
               && x_pix < (BOAT_INNER_X + (BOAT_INNER_WIDTH/2) - 9) 
               && y_pix > (BOAT_INNER_Y + 80) && y_pix < (BOAT_INNER_Y + 130) ) {
         boat.nav_islands_clockwise = true;
         boat.decideNext();
      } else if ( x_pix > (BOAT_INNER_X + (BOAT_INNER_WIDTH/2) - 59) 
               && x_pix < (BOAT_INNER_X + (BOAT_INNER_WIDTH/2) - 9) 
               && y_pix > (BOAT_INNER_Y + 135) && y_pix < (BOAT_INNER_Y + 185) ) {
         boat.nav_islands_clockwise = false;
         boat.decideNext();
      }

         boat_context.strokeRect( BOAT_INNER_X + (BOAT_INNER_WIDTH/2) - 59, BOAT_INNER_Y + 135, 50, 50 ); 


      refresh();
   }
}
$('#boat_canvas').click( onClickBoats ); 

/////////////////////////////////////////////////////////////////////
// Map ---

// Functionality --

function validatePlace( place ) {
   // Relies on place map - see above

   return 0;
}

function validateTerrain( terrain ) {
   if ( terrain >= 0 && terrain <= TER_MAX )
      return terrain;

   return 0;
}

function MapLoc( ter, place )
{
   this.terrain = validateTerrain( ter );
   this.place = validatePlace( place );
   this.discovered = false;
}

function loadMap( descriptor )
{

}

function moveMap( x_cent, y_cent, zoom )
{
   if (x_cent < 0) x_cent = 0;
   if (y_cent < 0) y_cent = 0;
   if (x_cent >= MAP_WIDTH) x_cent = MAP_WIDTH - 1;
   if (y_cent >= MAP_HEIGHT) y_cent = MAP_HEIGHT - 1;
   if (zoom < 0) zoom = 0;
   if (zoom > 4) zoom = 4;

   map_center_x = x_cent;
   map_center_y = y_cent;
   map_zoom_level = zoom;
}

function plusZoom()
{
   moveMap( map_center_x, map_center_y, map_zoom_level - 1 );
}

function minusZoom()
{
   moveMap( map_center_x, map_center_y, map_zoom_level + 1 );
}

function findSelectedBoat()
{
   var b = boats[ my_boats[boat_selection] ];
   if (b !== undefined)
      moveMap( b.x, b.y, map_zoom_level );
}

// Generation --

function countAdjacencies( x, y )
{
   var adj_count = 0;
   if (map[x-1][y-1].terrain !== 0) adj_count++;
   if (map[x][y-1].terrain !== 0) adj_count++;
   if (map[x+1][y-1].terrain !== 0) adj_count++;
   if (map[x-1][y+1].terrain !== 0) adj_count++;
   if (map[x][y+1].terrain !== 0) adj_count++;
   if (map[x+1][y+1].terrain !== 0) adj_count++;
   if (map[x-1][y].terrain !== 0) adj_count++;
   if (map[x+1][y].terrain !== 0) adj_count++;

   return adj_count;
}

function countOrthoganolAdjacencies( x, y )
{
   var adj_count = 0;
   if (map[x][y-1].terrain !== 0) adj_count++;
   if (map[x][y+1].terrain !== 0) adj_count++;
   if (map[x-1][y].terrain !== 0) adj_count++;
   if (map[x+1][y].terrain !== 0) adj_count++;

   return adj_count;
}

function checkIfJoin( x, y )
{
   var o_adj = countOrthoganolAdjacencies( x, y );

   if (o_adj === 2) {
      // Can't be opposite ortho adjacencies
      if (map[x][y-1].terrain !== 0 && map[x][y+1].terrain !== 0) return true;
      if (map[x-1][y].terrain !== 0 && map[x+1][y].terrain !== 0) return true;

      // If adjacent, the opposing corner can't be land
      if (map[x][y-1].terrain !== 0 && map[x-1][y].terrain !== 0
            && map[x+1][y+1].terrain !== 0) return true;
      if (map[x][y+1].terrain !== 0 && map[x-1][y].terrain !== 0
            && map[x+1][y-1].terrain !== 0) return true;
      if (map[x][y-1].terrain !== 0 && map[x+1][y].terrain !== 0
            && map[x-1][y+1].terrain !== 0) return true;
      if (map[x][y+1].terrain !== 0 && map[x+1][y].terrain !== 0
            && map[x-1][y-1].terrain !== 0) return true;

   }

   if (o_adj === 1) {
      // Can't be any corner adjacencies not touching the ortho adjacency
      if (map[x][y-1].terrain !== 0 && 
            (map[x-1][y+1].terrain !== 0 || map[x+1][y+1].terrain !== 0)) return true;
      if (map[x][y+1].terrain !== 0 && 
            (map[x-1][y-1].terrain !== 0 || map[x+1][y-1].terrain !== 0)) return true;
      if (map[x-1][y].terrain !== 0 && 
            (map[x+1][y-1].terrain !== 0 || map[x+1][y+1].terrain !== 0)) return true;
      if (map[x+1][y].terrain !== 0 && 
            (map[x-1][y-1].terrain !== 0 || map[x-1][y+1].terrain !== 0)) return true;

   }

   return false;
}

function smoothIsland( x_min, y_min, x_max, y_max )
{
   // Cleaning sweep - from the outside in
   var clean_repeat = Math.floor(3 + ((x_max - x_min) / 20) + ((y_max - y_min) / 20));
   var peel_width = Math.floor( Math.min( x_max - x_min, y_max - y_min ) / 2);
   for (var repeat = 0; repeat < clean_repeat; ++repeat) {
      for (var peel = 0; peel <= peel_width; ++peel) {
         for (var x = x_min + peel; x <= x_max - peel; ++x) {
            if (map[x][y_min + peel].terrain !== 0) {
               var adj_count = countAdjacencies( x, y_min + peel );
               if (adj_count < GEN_MIN_ADJ || checkIfJoin( x, y_min + peel ))
                  map[x][y_min + peel].terrain = 0;
            }
         }
         for (var x = x_max - peel; x >= x_min + peel; --x) {
            if (map[x][y_max - peel].terrain !== 0) {
               var adj_count = countAdjacencies( x, y_max - peel );
               if (adj_count < GEN_MIN_ADJ || checkIfJoin( x, y_max - peel ))
                  map[x][y_max - peel].terrain = 0;
            }
         }
         for (var y = y_min + peel; y <= y_max - peel; ++y) {
            if (map[x_min + peel][y].terrain !== 0) {
               var adj_count = countAdjacencies( x_min + peel, y );
               if (adj_count < GEN_MIN_ADJ || checkIfJoin( x_min + peel, y ))
                  map[x_min + peel][y].terrain = 0;
            }
         }
         for (var y = y_max - peel; y >= y_min + peel; --y) {
            if (map[x_max - peel][y].terrain !== 0) {
               var adj_count = countAdjacencies( x_max - peel, y );
               if (adj_count < GEN_MIN_ADJ || checkIfJoin( x_max - peel, y ))
                  map[x_max - peel][y].terrain = 0;
            }
         }
      }
   }

   // Formatting sweep
   for (var x = x_min; x <= x_max; ++x) {
      for (var y = y_min; y <= y_max; ++y) {
         if (map[x][y].terrain !== 0) {
            var adj_count = countAdjacencies( x, y );
            if (adj_count === 8)
               continue;

            var adj_count2 = countOrthoganolAdjacencies( x, y );
            if (adj_count2 === 4)
               continue;

            var start = -1, end = -1, cur2 = 0;
            var in_land = -1;
            var land_count = 0;
            while (end === -1 && cur2 < 24) {
               var cur = cur2 % 8;
               var adj = addDirection( x, y, cur );
               if (map[adj[0]][adj[1]].terrain !== 0) { // Land
                  land_count++;
                  if (in_land === 0) {
                     in_land = 1;
                     start = cur;
                     land_count = 1;
                  } else if (in_land === 2)
                     in_land = 1;
               } else { // Water
                  if (in_land === -1)
                     in_land = 0;
                  else if (in_land === 1 || in_land === 2) {
                     if (cur % 2 === 0) {
                        // See if we're done
                        if (land_count === adj_count) {
                           // done
                           end = (cur + 8 - in_land) % 8;
                           break;
                        }
                        else
                        {
                           // start over, searching from here
                           start = -1;
                           end = -1;
                           in_land = 0;
                           land_count = 0;
                        }
                     } else {
                        in_land = 2;
                     }
                  }
               }
               cur2++;
            }
            map[x][y].terrain = constructTerrain( start, end, 0 );
         }
      }
   }
}

function createIsland( x_min, y_min, x_max, y_max, technique )
{
   if (technique === -1)
      technique = 1;

   if (technique === 1) {
      // Algorithm 1: Random walk edge mutations
      for (var x = x_min; x <= x_max; ++x) {
         for (var y = y_min; y <= y_max; ++y) {
            map[x][y].terrain = 1;
            map[x][y].discovered = true;
         }
      }
      var x_mid = (x_min + x_max) / 2;
      var y_mid = (y_min + y_max) / 2;
      var half_height = Math.floor(y_max - y_min);
      var half_width = Math.floor(x_max - x_min);
      var x_in_top = half_height / 4;
      var x_in_bot = half_height / 4;
      var y_in_top = half_width / 4;
      var y_in_bot = half_width / 4;

      for (var x = x_min; x <= x_max; ++x) {
         if (x < x_mid) {
            x_in_top += 2 - Math.round(Math.random() * 5);
            x_in_bot += 2 - Math.round(Math.random() * 5);
         } else {
            x_in_top += 3 - Math.round(Math.random() * 5);
            x_in_bot += 3 - Math.round(Math.random() * 5);
         }
         if (x_in_top < 0) x_in_top = -x_in_top;
         if (x_in_top >= half_height) x_in_top = half_height - 1;
         if (x_in_bot < 0) x_in_bot = -x_in_bot;
         if (x_in_bot >= half_height) x_in_bot = half_height - 1;

         for (var y = y_min; y < y_min + x_in_top; ++y)
            map[x][y].terrain = 0;
         for (var y = y_max; y > y_max - x_in_bot; --y)
            map[x][y].terrain = 0;
      }
      for (var y = y_min; y <= y_max; ++y) {
         if (y < y_mid) {
            y_in_top += 2 - Math.round(Math.random() * 5);
            y_in_bot += 2 - Math.round(Math.random() * 5);
         } else {
            y_in_top += 3 - Math.round(Math.random() * 5);
            y_in_bot += 3 - Math.round(Math.random() * 5);
         }
         if (y_in_top < 0) y_in_top = -y_in_top;
         if (y_in_top >= half_width) y_in_top = half_width - 1;
         if (y_in_bot < 0) y_in_bot = -y_in_bot;
         if (y_in_bot >= half_width) y_in_bot = half_width - 1;

         for (var x = x_min; x < x_min + y_in_top; ++x)
            map[x][y].terrain = 0;
         for (var x = x_max; x > x_max - y_in_bot; --x)
            map[x][y].terrain = 0;
      }
      // clean it up
      smoothIsland( x_min, y_min, x_max, y_max );
      
      // TODO: river generation

      // TODO: city generation

   } else if (technique === 2) {
      // Algorithm 2: Crescent moon with inner city

      smoothIsland( x_min, y_min, x_max, y_max );
   }
}

function generateMap()
{
   // Create all locations, mark not discovered
   map = new Array( MAP_WIDTH );
   for (var x = 0; x < MAP_WIDTH ; ++x) {
      map[x] = new Array( MAP_HEIGHT );
      for (var y = 0; y < MAP_HEIGHT ; ++y) {
         map[x][y] = new MapLoc( 0, 0 );
      }
   }
   map_zoom_level = 1;

   map_center_x = 400;
   map_center_y = 400;

   /* custom testing
   map[400][400].terrain = 1;
   map[400][401].terrain = 1;
   map[400][402].terrain = 1;
   map[401][400].terrain = 1;
   map[401][401].terrain = 1;
   map[401][402].terrain = 1;
   map[402][402].terrain = 1;
   map[402][403].terrain = 1;
   map[402][404].terrain = 1;
   map[403][402].terrain = 1;
   map[403][403].terrain = 1;
   map[403][404].terrain = 1;

   smoothIsland( 398, 398, 410, 410 );
   return;
   */

   // Select randomly sized areas of the map to put islands in,
   // then randomly generate islands there
   for (var i = 0; i < GEN_NUM_ISLANDS; ++i) 
   {
      var x_center = Math.floor(Math.random() * MAP_WIDTH);
      var y_center = Math.floor(Math.random() * MAP_HEIGHT);
      if (map[x_center][y_center].discovered) {
         --i;
         continue;
      }

      if (i < GEN_NUM_BIG_ISLANDS) {
         var x_width = Math.floor(Math.random() * GEN_WIDTH_DIFF * 2.5) + (GEN_WIDTH_MIN * 2);
         var y_height = Math.floor(Math.random() * GEN_HEIGHT_DIFF * 2.5) + (GEN_HEIGHT_MIN * 2);
      } else {
         var x_width = Math.floor(Math.random() * GEN_WIDTH_DIFF) + GEN_WIDTH_MIN;
         var y_height = Math.floor(Math.random() * GEN_HEIGHT_DIFF) + GEN_HEIGHT_MIN;
      }

      // Check for conflicts, if so then shrink island
      // Check from the middle going out
      var x_min_diff = x_width, x_max_diff = x_width,
          y_min_diff = y_height, y_max_diff = y_height;
      var radius_max = Math.max( x_width, y_height );
      for (var radius = 1; radius <= radius_max; ++radius) {
         var x_min = Math.max( x_center - Math.min( radius, x_min_diff ), 0 );
         var x_max = Math.min( x_center + Math.min( radius, x_max_diff ), MAP_WIDTH - 1);
         var y_min = Math.max( y_center - Math.min( radius, y_min_diff ), 0 );
         var y_max = Math.min( y_center + Math.min( radius, y_max_diff ), MAP_HEIGHT - 1);
         // Check x_min
         if (x_center - radius >= x_min) {
            for (var y = y_min; y <= y_max; ++y) {
               if (map[x_min][y].discovered) {
                  x_min_diff = radius - 1;
                  break;
               }
            }
         }
         // Check x_max
         if (x_center + radius <= x_max) {
            for (var y = y_min; y <= y_max; ++y) {
               if (map[x_max][y].discovered) {
                  x_max_diff = radius - 1;
                  break;
               }
            }
         }
         // Check y_min
         if (y_center - radius >= y_min) {
            for (var x = x_min; x <= x_max; ++x) {
               if (map[x][y_min].discovered) {
                  y_min_diff = radius - 1;
                  break;
               }
            }
         }
         // Check y_max
         if (y_center + radius <= y_max) {
            for (var x = x_min; x <= x_max; ++x) {
               if (map[x][y_max].discovered) {
                  y_max_diff = radius - 1;
                  break;
               }
            }
         }
      }

      var x_min = Math.max(x_center - x_min_diff, 0) + 1;
      var x_max = Math.min(x_center + x_max_diff, MAP_WIDTH - 1) - 1;
      var y_min = Math.max(y_center - y_min_diff, 0) + 1;
      var y_max = Math.min(y_center + y_max_diff, MAP_HEIGHT - 1) - 1;

      if ( (x_max - x_min) < (2 * GEN_WIDTH_MIN) || (y_max - y_min) < (2 * GEN_WIDTH_MIN) ) {
         --i;
         continue;
      }

      createIsland( x_min, y_min, x_max, y_max, -1 );

   }



   /* Custom

   map = new Array( MAP_WIDTH );
   for (var x = 0; x < MAP_WIDTH ; ++x) {
      map[x] = new Array( MAP_HEIGHT );
      for (var y = 0; y < MAP_HEIGHT ; ++y) {
         map[x][y] = new MapLoc( 0, 0 );
      }
   }

   map_zoom_level = 0;
   map_center_x = 400;
   map_center_y = 400;

   for (var x = 396; x < 410 ; ++x) {
      for (var y = 397; y < 405 ; ++y) {
         map[x][y].terrain = 1;
      }
   }
   map[395][398].terrain = constructTerrain( 3, 4, 0 );
   map[395][399].terrain = constructTerrain( 3, 6, 0 );
   map[395][400].terrain = constructTerrain( 2, 6, 0 );
   map[395][401].terrain = constructTerrain( 2, 5, 0 );
   map[396][398].terrain = constructTerrain( 0, 7, 0 );
   map[396][397].terrain = constructTerrain( 3, 7, 0 );
   map[397][396].terrain = constructTerrain( 5, 7, 0 );
   map[398][397].terrain = constructTerrain( 3, 1, 0 );
   map[399][396].terrain = constructTerrain( 4, 7, 0 );
   map[400][396].terrain = constructTerrain( 4, 0, 0 );
   map[401][396].terrain = constructTerrain( 5, 0, 0 );
   map[396][404].terrain = 0;
   map[409][397].terrain = 0;
   map[409][404].terrain = 0;
   */
}

// Draw --

function clearMap() {
   // Draw border
   map_context.clearRect( 0, 0, MAP_FULL_DIM + MAP_CONTROLS_WIDTH, MAP_FULL_DIM );
   map_context.fillStyle = "black";
   map_context.fillRect( 0, 0, MAP_FULL_DIM, MAP_FULL_DIM );
   map_context.fillStyle = "rgba(85,205,255,255)";
   map_context.fillRect( MAP_DRAW_EDGE, MAP_DRAW_EDGE, MAP_DRAW_DIM, MAP_DRAW_DIM );
}

function drawMapGridLines()
{
   // Draw grid lines
   map_context.fillStyle = "black";
   for (var x = MAP_SQUARE_DIM + MAP_DRAW_EDGE; x < MAP_DRAW_DIM; x += MAP_SQUARE_DIM) {
      map_context.fillRect( x, 0, 1, MAP_DRAW_DIM + 4 );
   }
   for (var y = MAP_SQUARE_DIM + MAP_DRAW_EDGE; y < MAP_DRAW_DIM; y += MAP_SQUARE_DIM) {
      map_context.fillRect( 0, y, MAP_DRAW_DIM + 4, 1 );
   }
}

function drawOffTheMap( grid_x, grid_y, dimension )
{
   map_context.fillStyle = "gray";
   map_context.fillRect( grid_x, grid_y, dimension, dimension );
}

function getOffset( direction, dimension )
{
   if (direction === 0) return [ 0, dimension / 2 ];
   if (direction === 1) return [ 0, 0 ];
   if (direction === 2) return [ dimension / 2, 0 ];
   if (direction === 3) return [ dimension, 0 ];
   if (direction === 4) return [ dimension, dimension / 2 ];
   if (direction === 5) return [ dimension, dimension ];
   if (direction === 6) return [ dimension / 2, dimension ];
   if (direction === 7) return [ 0, dimension ];
}

function drawTerrain( terrain, grid_x, grid_y, dimension )
{
   if ((terrain & 1) === 0) return;

   map_context.fillStyle = "green";
   var start_dir = terGetStart( terrain ),
       end_dir = terGetEnd( terrain );
   var octants = (start_dir - end_dir) % 8;
   if (octants === 0 || dimension < 5) {
      map_context.fillRect( grid_x, grid_y, dimension, dimension );
   } else {
      /* Draw with images
      var fromcorner = (terGetStart( terrain ) % 2 === 1);
      var img = getTerrainImage( octants, fromcorner, dimension );
      if (img !== null) {
         map_context.drawImage( img, grid_x, grid_y );
      }
      */
      // Draw as an arc
      var start_off = getOffset( start_dir, dimension );
      var end_off = getOffset( end_dir, dimension );
      map_context.beginPath();
      map_context.moveTo( grid_x + start_off[0], grid_y + start_off[1] );
      map_context.bezierCurveTo( 
                   grid_x + (dimension / 2), grid_y + (dimension / 2),
                   grid_x + (dimension / 2), grid_y + (dimension / 2),
                   grid_x + end_off[0], grid_y + end_off[1] );
      // Connect back up through corners
      if (end_dir < start_dir) end_dir += 8;
      for (var dir = end_dir - 1; dir > start_dir; --dir) {
         if (dir % 2 === 1) {
            var off = getOffset( dir % 8, dimension );
            map_context.lineTo( grid_x + off[0], grid_y + off[1] );
         }
      }
      map_context.fill();
      //
   }
}

function drawPlace( place, grid_x, grid_y )
{
}

function drawMapSquare( grid_x, grid_y, map_x, map_y, step )
{
   if (step === 1) {
      if (map_y < 0 || map_y >= MAP_HEIGHT || map_x < 0 || map_x >= MAP_WIDTH) {
         drawOffTheMap( grid_x, grid_y, MAP_SQUARE_DIM );
      } else {
         var loc = map[map_x][map_y];
         if (discovery_fog_on && !loc.discovered) {
            map_context.fillStyle = "gray";
            map_context.fillRect( grid_x, grid_y, MAP_SQUARE_DIM, MAP_SQUARE_DIM );
         } else {
            drawTerrain( loc.terrain, grid_x, grid_y, MAP_SQUARE_DIM );
            drawPlace( loc.place, grid_x, grid_y );
         }
      }
   }
   else if (step === MAP_ZOOM_RATIO) {
      var g_x = grid_x;
      var draw_step = MAP_SQUARE_DIM / MAP_ZOOM_RATIO;
      for (var x = map_x - 1; x <= map_x + 1; ++x) {
         var g_y = grid_y;
         for (var y = map_y - 1; y <= map_y + 1; ++y) {
            if (y < 0 || y >= MAP_HEIGHT || x < 0 || x >= MAP_WIDTH) {
               drawOffTheMap( g_x, g_y, draw_step );
               g_y += draw_step;
               continue;
            }

            var loc = map[x][y];
            if (discovery_fog_on && !loc.discovered) {
               map_context.fillStyle = "gray";
               map_context.fillRect( g_x, g_y, draw_step, draw_step );
            } else {
               drawTerrain( loc.terrain, g_x, g_y, draw_step );
               drawPlace( loc.place, g_x, g_y );
            }
            g_y += draw_step;
         }
         g_x += draw_step;
      }
   }
   else
   {
      var g_x = grid_x;
      var draw_step = MAP_SQUARE_DIM / (Math.pow(MAP_ZOOM_RATIO,2));
      var map_step = step / Math.pow(MAP_ZOOM_RATIO,2);

      for (var x = map_x - (4*map_step); x <= map_x + (4*map_step); x += map_step) {
         var g_y = grid_y;
         for (var y = map_y - (4*map_step); y <= map_y + (4*map_step); y += map_step) {
            if (y < 0 || y >= MAP_HEIGHT || x < 0 || x >= MAP_WIDTH) {
               drawOffTheMap( g_x, g_y, draw_step );
               g_y += draw_step;
               continue;
            }

            if (map_step === 1) {
               if (discovery_fog_on && !map[x][y].discovered) {
                  map_context.fillStyle = "gray";
                  map_context.fillRect( g_x, g_y, draw_step, draw_step );
               } else {
                  drawTerrain( map[x][y].terrain, g_x, g_y, draw_step );
               }
            } else {
               // TODO: Make this look better
               // Attempt 1: if sum in area is > half, draw green
               var land_count = 0;
               var area_discovered = false;
               for (var i = Math.max(0, x - Math.floor(map_step / 2)); 
                        i <= Math.min(MAP_WIDTH - 1, x + Math.floor(map_step / 2)); 
                        ++i) {
                  for (var j = Math.max(0, y - Math.floor(map_step / 2)); 
                           j <= Math.min(MAP_WIDTH - 1, y + Math.floor(map_step / 2));
                           ++j) {
                     if (map[i][j].terrain !== 0)
                        land_count++;
                     if (map[i][j].discovered === true)
                        area_discovered = true;
                  }
               }
               if (discovery_fog_on && !area_discovered) {
                  map_context.fillStyle = "gray";
                  map_context.fillRect( g_x, g_y, draw_step, draw_step );
               } else if (land_count > (map_step * map_step) / 3) {
                  map_context.fillStyle = "green";
                  map_context.fillRect( g_x, g_y, draw_step, draw_step );
               }
            }

            // TODO: Draw places on zoomed out map

            g_y += draw_step;
         }
         g_x += draw_step;
      }
   }
}

function drawMapContents()
{
   var step = Math.pow(MAP_ZOOM_RATIO, map_zoom_level);

   var x, y, grid_x, grid_y;
   grid_x = MAP_DRAW_EDGE;
   for (x = map_center_x - (4 * step); x <= map_center_x + (4 * step); x += step) {
      grid_y = MAP_DRAW_EDGE;
      for (y = map_center_y - (4 * step); y <= map_center_y + (4 * step); y += step) {
         drawMapSquare( grid_x, grid_y, x, y, step );

         grid_y += MAP_SQUARE_DIM;
      }
      grid_x += MAP_SQUARE_DIM;
   }


   // Draw any visible boats
   if (map_zoom_level <= 2) {
      var min_x = map_center_x - (4 * step), max_x = map_center_x + (4 * step), 
          min_y = map_center_y - (4 * step), max_y = map_center_y + (4 * step);
      if (map_zoom_level === 1) {
         min_x -= 1;
         min_y -= 1;
         max_x += 1;
         max_y += 1;
      } else if (map_zoom_level === 2) {
         min_x -= 4;
         min_y -= 4;
         max_x += 4;
         max_y += 4;
      }

      var num_boats = my_boats.length;
      var num_other_boats = other_boats.length;
      for (var i = 0; i < num_boats + num_other_boats; ++i) {
         var b;
         if (i < num_boats) b = boats[ my_boats[i] ];
         else b = boats[ other_boats[i] ];

         if (b !== undefined && b.alive) {
            if (b.x >= min_x && b.x <= max_x && b.y >= min_y && b.y <= max_y) {
               // Okay it's on the map
               if (map_zoom_level === 0) {
                  var g_x = MAP_DRAW_EDGE + ((b.x - min_x) * MAP_SQUARE_DIM);
                  var g_y = MAP_DRAW_EDGE + ((b.y - min_y) * MAP_SQUARE_DIM);
                  map_context.drawImage( rowboat_sz45_img, g_x, g_y );

               } else if (map_zoom_level === 1) {
                  var g_x = MAP_DRAW_EDGE + ((b.x - min_x) * MAP_SQUARE_DIM / 3);
                  var g_y = MAP_DRAW_EDGE + ((b.y - min_y) * MAP_SQUARE_DIM / 3);
                  map_context.drawImage( rowboat_sz15_img, g_x, g_y );

               } else if (map_zoom_level === 2) {
                  var g_x = MAP_DRAW_EDGE + ((b.x - min_x) * MAP_SQUARE_DIM / 9);
                  var g_y = MAP_DRAW_EDGE + ((b.y - min_y) * MAP_SQUARE_DIM / 9);
                  map_context.drawImage( boat_1_sz5_img, g_x, g_y );

               }
            }
         }
      }
   }
}

function drawMapControls()
{
   map_context.fillStyle = "rgba(235,235,235,255)";
   map_context.fillRect( MAP_FULL_DIM, 0, MAP_CONTROLS_WIDTH, MAP_HEIGHT );

   map_context.font = "36pt sans-serif";
   map_context.fillStyle = "black";
   map_context.fillText("+", MAP_DRAW_DIM + 6, 100);
   map_context.fillText("-", MAP_DRAW_DIM + 10, 150);

   map_context.font = "14pt sans-serif";
   map_context.fillText(map_center_x + "E", MAP_FULL_DIM + 5, 364);
   map_context.fillText(map_center_y + "S", MAP_FULL_DIM + 15, 390);
}

function drawMap() {
   clearMap();
   drawMapContents();
   drawMapGridLines();
   drawMapControls();
}

function onClickMap( e ) {
   var x_pix = e.pageX - map_canvas.offsetLeft;
   var y_pix = e.pageY - map_canvas.offsetTop;

   if (x_pix > MAP_FULL_DIM) {
      if (y_pix > 60 && y_pix < 100) {
         plusZoom();
         refresh();
      } else if (y_pix > 110 && y_pix < 150) {
         minusZoom();
         refresh();
      }
   }
}
$('#map_canvas').click( onClickMap ); 

function onMouseDownMap( e ) {
   var x_pix = e.pageX - map_canvas.offsetLeft;
   var y_pix = e.pageY - map_canvas.offsetTop;

   mapMouseDown = true;
   mapMouseDownTime = new Date();
   mapMouseDownPix_x = x_pix;
   mapMouseDownPix_y = y_pix;

   if (x_pix > MAP_DRAW_EDGE && x_pix < MAP_DRAW_EDGE + MAP_DRAW_DIM
         && y_pix > MAP_DRAW_EDGE && y_pix < MAP_DRAW_EDGE + MAP_DRAW_DIM) {
      mapDrag = true;
      mapDragBase_x = map_center_x;
      mapDragBase_y = map_center_y;
      mapDragLast_dx = 0;
      mapDragLast_dy = 0;
   }
}
$('#map_canvas').mousedown( onMouseDownMap ); 

function onMouseUpMap( e ) {
   var x_pix = e.pageX - map_canvas.offsetLeft;
   var y_pix = e.pageY - map_canvas.offsetTop;

   mapDrag = false;
   mapMouseDown = false;
}
$('#map_canvas').mouseup( onMouseUpMap ); 

function onMouseMoveMap( e ) {
   if (!mapDrag) return; 

   var x_pix = e.pageX - map_canvas.offsetLeft;
   var y_pix = e.pageY - map_canvas.offsetTop;

   // Translate difference to map coordinates
   var dx = mapMouseDownPix_x - x_pix;
   var dy = mapMouseDownPix_y - y_pix;

   var step = MAP_SQUARE_DIM / (Math.pow(MAP_ZOOM_RATIO,map_zoom_level));
   var map_dx = Math.round(dx / step);
   var map_dy = Math.round(dy / step);

   if (map_dx != mapDragLast_dx || map_dy != mapDragLast_dy) {
      moveMap( mapDragBase_x + map_dx, mapDragBase_y + map_dy, map_zoom_level );
      mapDragLast_dx = map_dx;
      mapDragLast_dy = map_dy;
      refresh();
   }
}
$('#map_canvas').mousemove( onMouseMoveMap );


/////////////////////////////////////////////////////////////////////
// General controls ---

function onMouseUp( e ) {
   mapDrag = false;
   mapMouseDown = false;

}
$('html').mouseup( onMouseUp );

function onKeyDown( e ) {
   LOG.html( "DOWN: " + e.which );

   switch( e.which ) {
      case 16: // Shift
         shift_down = true;
         break;
      case 49: // 1 key
         changeBoatMenu( 1 );
         break;
      case 50: // 2 key
         changeBoatMenu( 2 );
         break;
      case 51: // 3 key
         changeBoatMenu( 3 );
         break;
      case 52: // 4 key
         changeBoatMenu( 4 );
         break;
      case 53: // 5 key
         changeBoatMenu( 5 );
         break;
      case 70: // f key
         if (shift_down)
            discovery_fog_on = !discovery_fog_on;
         break;
   }
}
$('html').keydown( onKeyDown );

function onKeyUp( e ) {
   LOG.html( "UP: " + e.which );

   if ( e.which === 16 )
      shift_down = false;
}
$('html').keyup( onKeyUp );

function refresh()
{
   drawMap();
   drawBoats();
}

function update()
{
   updateBoats();

   refresh();
}

function start() {
   LOG.append(" Start");
   generateMap();
   initBoats();
   refresh();

   setInterval(update, 500); // .5 sec
}

// Load images
var images_ready = 0;
var total_images = 17;

function addReadyImage() {
   images_ready++;
   if (images_ready === total_images) {
      start();
   }
}

boat_1_sz5_img.onload = addReadyImage;
boat_1_sz5_img.src = 'Boat_image_1_5px.png';
boat_2_sz5_img.onload = addReadyImage;
boat_2_sz5_img.src = 'Boat_image_2_5px.png';
boat_3_sz5_img.onload = addReadyImage;
boat_3_sz5_img.src = 'Boat_image_3_5px.png';
boat_4_sz5_img.onload = addReadyImage;
boat_4_sz5_img.src = 'Boat_image_4_5px.png';

rowboat_sz15_img.onload = addReadyImage;
rowboat_sz15_img.src = 'Rowboat_15px.png';
rowboat_sz45_img.onload = addReadyImage;
rowboat_sz45_img.src = 'Rowboat_45px.png';

rowboat_sz60_img.onload = addReadyImage;
rowboat_sz60_img.src = 'Rowboat_60px.png';

west_arrow_img.onload = addReadyImage;
west_arrow_img.src = 'NavArrow.png';
west_arrow_selected_img.onload = addReadyImage;
west_arrow_selected_img.src = 'NavArrowSelected.png';
anchor_img.onload = addReadyImage;
anchor_img.src = 'Anchor.png';
anchor_selected_img.onload = addReadyImage;
anchor_selected_img.src = 'AnchorSelected.png';
island_nav_c_img.onload = addReadyImage;
island_nav_c_img.src = 'IslandNavC.png';
island_nav_cc_img.onload = addReadyImage;
island_nav_cc_img.src = 'IslandNavCC.png';

bananas_img.onload = addReadyImage;
bananas_img.src = 'Bananas.png';
peanuts_img.onload = addReadyImage;
peanuts_img.src = 'Peanuts.png';
cotton_img.onload = addReadyImage;
cotton_img.src = 'Cotton.png';
silk_img.onload = addReadyImage;
silk_img.src = 'Silk.png';
