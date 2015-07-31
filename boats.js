'use strict';

var LOG = $( "#log" );

/////////////////////////////////////////////////////////////////////
// Data ---

// Images 
var oldman_img = new Image();

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

var coins_img = new Image();

var apple_img = new Image();
var bananas_img = new Image();
var berries_img = new Image();
var coconuts_img = new Image();
var lemons_img = new Image();
var limes_img = new Image();
var mangoes_img = new Image();
var passionfruit_img = new Image();
var peach_img = new Image();
var pineapple_img = new Image();

var carrots_img = new Image();
var corn_img = new Image();
var eggplants_img = new Image();
var onions_img = new Image();
var peanuts_img = new Image();
var peppers_img = new Image();
var potatoes_img = new Image();
var rice_img = new Image();
var tomatoes_img = new Image();
var wheat_img = new Image();

var chickens_img = new Image();
var cow_img = new Image();
var crabs_img = new Image();
var ducks_img = new Image();
var fish_img = new Image();
var monkeys_img = new Image();
var penguins_img = new Image();
var pigs_img = new Image();
var seals_img = new Image();
var sheep_img = new Image();
var turkeys_img = new Image();
var turtles_image = new Image();

var softwood_img = new Image();
var hardwood_img = new Image();
var burlap_img = new Image();
var cotton_img = new Image();
var wool_img = new Image();
var silk_img = new Image();
var salt_img = new Image();

var stone_img = new Image();
var pavingstone_img = new Image();
var granite_img = new Image();
var obsidian_img = new Image();
var coal_img = new Image();
var copper_img = new Image();
var tin_img = new Image();
var bronze_img = new Image();
var iron_img = new Image();
var steel_img = new Image();

var stonetools_img = new Image();

var doll_img = new Image();

// Cargo
var cargo_index = {
   coins: { name:'coins', image:coins_img, price:1, novelty:1.0,
      desc:'cash money', weight:0.01 },
   // Fruits
   apples: { name:'apples', image:apple_img, price:3, novelty:2.8,
      desc:'a strangely crunchy red fruit', weight:1, foodvalue:2 },
   bananas: { name:'bananas', image:bananas_img, price:7, novelty:4.0,
      desc:'a strangely shaped fruit', weight:2, foodvalue:4 },
   berries: { name:'berries', image:berries_img, price:2, novelty:2.4,
      desc:'strange tiny fruits', weight:1, foodvalue:2 },
   coconuts: { name:'coconuts', image:coconuts_img, price:7, novelty:3.4,
      desc:'a strange fruit full of milk', weight:2, foodvalue:4 },
   lemons: { name:'lemons', image:lemons_img, price:3, novelty:2.8,
      desc:'a strangely tart yellow fruit', weight:1, foodvalue:2 },
   limes: { name:'limes', image:limes_img, price:3, novelty:3.0,
      desc:'a strangely sour green fruit', weight:1, foodvalue:2 },
   mangoes: { name:'mangoes', image:mangoes_img, price:4, novelty:3.1,
      desc:'a perfectly normal fruit', weight:1, foodvalue:2 },
   passionfruit: { name:'passionfruit', image:passionfruit_img, price:5, novelty:3.0,
      desc:'a stange fruit full of seeds', weight:1, foodvalue:2 },
   peaches: { name:'peaches', image:peach_img, price:3, novelty:2.5,
      desc:'a stange fuzzy fruit', weight:1, foodvalue:2 },
   pineapples: { name:'pineapples', image:pineapple_img, price:8, novelty:3.7,
      desc:'a stange spiky fruit', weight:2, foodvalue:4 },
   // Vegetables
   carrots: { name:'carrots', image:carrots_img, price:3, novelty:2.5,
      desc:'a phallic root vegetable', weight:1, foodvalue:2 },
   corn: { name:'corn', image:corn_img, price:3, novelty:2.8,
      desc:'a truly a-maize-ing vegetable', weight:1, foodvalue:2 },
   eggplants: { name:'eggplant', image:eggplants_img, price:5, novelty:3.4,
      desc:'what the heck is this thing', weight:1, foodvalue:2 },
   onions: { name:'onions', image:onions_img, price:2, novelty:2.0,
      desc:'many-layered like a parfait', weight:1, foodvalue:2 },
   peanuts: { name:'peanuts', image:peanuts_img, price:4, novelty:3.4,
      desc:'sort of resembles a pea, i guess', weight:1, foodvalue:2 },
   peppers: { name:'peppers', image:peppers_img, price:3, novelty:3.2,
      desc:'a bright crunchy vegetable', weight:1, foodvalue:2 },
   potatoes: { name:'potatoes', image:potatoes_img, price:2, novelty:1.9,
      desc:'a lumpy root vegetable', weight:1, foodvalue:2 }, 
   rice: { name:'rice', image:rice_img, price:2, novelty:2.2,
      desc:"or 'Condy' as I call her", weight:1, foodvalue:2 }, 
   tomatoes: { name:'tomatoes', image:tomatoes_img, price:4, novelty:2.9,
      desc:'a squishy red vegetable, or fruit maybe', weight:1, foodvalue:2 },
   wheat: { name:'wheat', image:wheat_img, price:2, novelty:2.4,
      desc:'amber waves of grain', weight:1, foodvalue:2 },
   // Animals
   chickens: { name:'chickens', image:chickens_img, price:30, novelty:3.0,
      desc:'cluck cluck', weight:4, foodvalue: 7 },
   cows: { name:'cows', image:cow_img, price:3000, novelty:2.7,
      desc:'moooo', weight:350, foodvalue:500 },
   crabs: { name:'crabs', image:crabs_img, price:14, novelty:3.0,
      desc:'scuttle', weight:2, foodvalue:4 },
   ducks: { name:'ducks', image:ducks_img, price:32, novelty:3.2,
      desc:'quack', weight:4, foodvalue: 7 },
   fish: { name:'fish', image:fish_img, price:16, novelty:1.8,
      desc:'blub', weight:5, foodvalue:9 },
   monkeys: { name:'monkeys', image:monkeys_img, price:185, novelty:3.4,
      desc:'ook ook', weight:22, foodvalue:28 },
   penguins: { name:'penguins', image:penguins_img, price:90, novelty:3.8,
      desc:'squaaawk', weight:9, foodvalue:15 },
   pigs: { name:'pigs', image:pigs_img, price:820, novelty:3.0,
      desc:'oink', weight:110, foodvalue:170 },
   seals: { name:'seals', image:seals_img, price:1700, novelty:3.3,
      desc:'ark ark ark', weight:215, foodvalue:310 },
   sheep: { name:'sheep', image:sheep_img, price:940, novelty:2.4,
      desc:'baaaa', weight:110, foodvalue:120 },
   turkeys: { name:'turkeys', image:turkeys_img, price:85, novelty:2.8,
      desc:'gobble gobble', weight:14, foodvalue:22 },
   turtles: { name:'turtles', image:turtles_image, price:13, novelty:2.9,
      desc:'*silence*', weight:2, foodvalue:4 },

   // Various resources
   softwood: { name:'softwood', image:softwood_img, price:22, novelty:2.4,
      desc:"don't knock it", weight:8 },
   hardwood: { name:'hardwood', image:hardwood_img, price:32, novelty:2.8,
      desc:'if you know what I mean', weight:12 },
   burlap: { name:'burlap', image:burlap_img, price:1, novelty:2.0,
      desc:"not the softest, I'll admit", weight:1 },
   cotton: { name:'cotton', image:cotton_img, price:3, novelty:2.9,
      desc:'this stuff is pretty soft wow', weight:1 },
   wool: { name:'wool', image:wool_img, price:3, novelty:2.7,
      desc:'great for sweaters, but there are no sweaters in this game...', weight:1 },
   silk: { name:'silk', image:silk_img, price:8, novelty:3.1,
      desc:'woven from butterfly wings and maybe rainbows', weight:1 },
   salt: { name:'salt', image:salt_img, price:23, novelty:3.4,
      desc:"great for curing meat, but meat doesn't spoil in this game...", weight:1 },
   spices: { name:'spices', image:salt_img, price:24, novelty:3.6,
      desc:"that is after all a spicy meatball", weight:1 },
   // Stone/metal
   stone: { name:'stone', image:stone_img, price:5, novelty:2.2,
      desc:'I want a rock! (Rock!)', weight:6 },
   pavingstone: { name:'paving stone', image:pavingstone_img, price:9, novelty:2.5,
      desc:'We built this city / On paving stone', weight:6 },
   granite: { name:'granite', image:granite_img, price:19, novelty:2.8,
      desc:'level up your kitchen', weight:8 },
   obsidian: { name:'obsidian', image:obsidian_img, price:22, novelty:3.3,
      desc:'frozen fire, in the tongue of old Valyria', weight:2 },
   coal: { name:'coal', image:coal_img, price:10, novelty:2.8,
      desc:'I think I have the black lung', weight:2 },
   copper: { name:'copper', image:copper_img, price:27, novelty:3.0,
      desc:'great for electrical wiring', weight:6 },
   tin: { name:'tin', image:tin_img, price:26, novelty:3.0,
      desc:'you know, the metal', weight:6 },
   bronze: { name:'bronze', image:bronze_img, price:40, novelty:3.3,
      desc:'a new age is upon us', weight:6 },
   iron: { name:'iron', image:iron_img, price:75, novelty:3.4,
      desc:"the workhorse of the iron age, unsurprisingly", weight:10 },
   steel: { name:'steel', image:steel_img, price:160, novelty:4.0,
      desc:"pretty much the best metal you could ask for", weight:12 },
   // Usable Resources
   stonetools: { name:'stone tools', image:stonetools_img, price:24, novelty:2.8,
      desc:'hammers and axes and the like', weight:7 },
   bronzetools: { name:'bronze tools', image:bananas_img, price:45, novelty:3.5,
      desc:'fancy stuff like sickles', weight:6 },
   irontools: { name:'iron tools', image:bananas_img, price:85, novelty:3.7,
      desc:'better than bronze (?)', weight:8 },
   // Crafted Items
   chairs: { name:'chairs', image:bananas_img, price:80, novelty:2.8,
      desc:"for sitting", weight:24 },
   tables: { name:'tables', image:bananas_img, price:165, novelty:3.0,
      desc:"for putting things on", weight:56 },
   beds: { name:'beds', image:bananas_img, price:245, novelty:3.2,
      desc:"for sleeping", weight:140 },
   desks: { name:'desks', image:bananas_img, price:450, novelty:3.4,
      desc:"for sitting at", weight:260 },
   figurines: { name:'figurines', image:bananas_img, price:32, novelty:3.8,
      desc:"an adult's plaything", weight:2 },
   dolls: { name:'dolls', image:doll_img, price:16, novelty:3.4,
      desc:"a child's plaything", weight:1 },
   shirts: { name:'shirts', image:bananas_img, price:18, novelty:2.6,
      desc:'gird your pecs', weight:1 },
   pants: { name:'pants', image:bananas_img, price:35, novelty:2.7,
      desc:'gird your loins', weight:2 },
   dresses: { name:'dresses', image:bananas_img, price:54, novelty:3.1,
      desc:'I feel pretty', weight:2.5 },
   fancydresses: { name:'fancy dresses', image:bananas_img, price:175, novelty:3.8,
      desc:'for high society lasses', weight:4 },
   fancysuits: { name:'fancy suits', image:bananas_img, price:85, novelty:3.4,
      desc:'for high society chappies', weight:2 },
   pillows: { name:'pillows', image:bananas_img, price:11, novelty:2.8,
      desc:'downy, or cottony, depends how you make them', weight:1 },
}

// Type lists
var food_list = [ 'apples', 'bananas', 'berries', 'coconuts', 'lemons', 'limes', 'mangoes', 'passionfruit', 'peaches', 'pineapples', 'carrots', 'corn', 'eggplants', 'onions', 'peanuts', 'peppers', 'potatoes', 'rice', 'tomatoes', 'wheat', 'fish' ];
var animal_list = [ 'chickens', 'cows', 'crabs', 'ducks', 'monkeys', 'penguins', 'pigs', 'seals', 'sheep', 'turkeys', 'turtles' ];
var big_animal_list = [ 'cows', 'pigs', 'seals', 'sheep' ];
//var farming_list = 
//[ 'apples', 'bananas', 'berries', 'coconuts', 'lemons', 'limes', 'mangoes', 'passionfruit', 'peaches', 'pineapples', 'carrots', 'corn', 'eggplants', 'onions', 'peanuts', 'peppers', 'potatoes', 'rice', 'tomatoes', 'wheat', 'fish', 'chickens', 'cows', 'crabs', 'ducks', 'monkeys', 'penguins', 'pigs', 'seals', 'sheep', 'turkeys', 'turtles', 'burlap', 'cotton', 'silk' ];
var mining_list = [ 'stone', 'pavingstone', 'granite', 'obsidian', 'coal', 'copper', 'tin', 'iron' ];

// Places
var places = [];
var place_id_gen = 0;
var TOWN_MAX_SIZE = 25;

// Boats
var boat_canvas = $('#boat_canvas')[0]
boat_canvas.onselectstart = function () { return false; }
var boat_context = boat_canvas.getContext('2d');
var BOAT_WIDTH = 550, BOAT_HEIGHT = 429;
var BOAT_SCROLLBAR_WIDTH = 15;
var BOAT_HEADER_HEIGHT = 22;
var BOAT_INNER_X = BOAT_SCROLLBAR_WIDTH + 65, BOAT_INNER_Y = BOAT_HEADER_HEIGHT + 5;
var BOAT_INNER_WIDTH = BOAT_WIDTH - (BOAT_INNER_X + 5);
var BOAT_INNER_X_MID = BOAT_INNER_X + (BOAT_INNER_WIDTH / 2);
var BOAT_INNER_HEIGHT = BOAT_HEIGHT - (BOAT_INNER_Y + 5);
var BOAT_NAV_CENTER_X = 90, BOAT_NAV_CENTER_Y = 130;

var boat_menu = 1; // 1 = boats, 3 = cargo, 2 = sail, 5 = city, 4 = market
var boat_scroll = 0;
var boat_selection = 0;

var boats = [];
var my_boats = [];
var other_boats = [];
var boat_id_gen = 0;

var destination_list = [];
var destination_selection = null;
var destination_scroll = 0;

// Map
var map_canvas = $('#map_canvas')[0]
map_canvas.onselectstart = function () { return false; }
var map_context = map_canvas.getContext('2d');
var MAP_DRAW_DIM = 405, MAP_SQUARE_DIM = 45, MAP_DRAW_EDGE = 2, MAP_FULL_DIM = MAP_DRAW_DIM + (2 * MAP_DRAW_EDGE);
var MAP_CONTROLS_WIDTH = 40;
var MAP_CONTROLS_HEIGHT = 20;
var MAP_GRID_SIZE = 9, MAP_ZOOM_RATIO = 3;
var MAP_HEIGHT = 400, MAP_WIDTH = 400;

var map;
var map_zoom_level = 0; // 1 tick = GRID_SIZE ^ zoom_level
var map_center_x = 300, map_center_y = 300; 
var shift_down = false;

// Generation
var GEN_NUM_ISLANDS = 200, GEN_NUM_BIG_ISLANDS = 15;
var GEN_HEIGHT_MIN = 5, GEN_WIDTH_MIN = 5;
var GEN_HEIGHT_DIFF = 10, GEN_WIDTH_DIFF = 10;
var GEN_MIN_ADJ = 3;
var GEN_CITY_LAND_MIN = 30;
var GEN_CITY_CHANCE_DENOM = 150;
 
// Controls
var mapDrag = false;
var mapDragBase_x = -1, mapDragBase_y = -1;
var mapDragLast_dx = 0, mapDragLast_dy = 0;
var mapMouseDown = false;
var mapMouseDownTime = null;
var mapMouseDownPix_x = -1, mapMouseDownPix_y = -1;
var shift_down = false;

// General
var discovery_fog_on = true;

var text_box_selection = '';

var quest_status = 0;
var quest_goals = [ 'q0', 'q1', 'q2', 'q3', 'q4' ];

/////////////////////////////////////////////////////////////////////
// Misc ---

String.prototype.width = function(font) {
  var f = font || '12px arial',
      o = $('<div>' + this + '</div>')
            .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
            .appendTo($('body')),
      w = o.width();

  o.remove();

  return w;
}
   
function fitText( context, text, x_min, x_max, y_min, font_size, font, centered, first_line_offset )
{
   var text_split = text.split(' ');
   var text_bit = '', text_bit_temp = '';
   var text_width = 0;
   var y = y_min + font_size;

   context.font = font;

   for (var i = 0; i < text_split.length; ++i) {
      text_bit_temp += text_split[i];
      text_width = text_bit_temp.width( font );
      if (text_width + x_min > x_max) { // Can't add that bit
         if (centered) context.fillText( text_bit, (x_min + x_max - text_bit.width( font )) / 2 , y );
         else context.fillText( text_bit, x_min, y );

         text_bit = text_bit_temp = text_split[i] + ' ';
         y += font_size;
      } else {
         text_bit_temp += ' ';
         text_bit = text_bit_temp;
      }
   }
   if (text_bit) {
      if (centered) context.fillText( text_bit, (x_min + x_max - text_bit.width( font )) / 2 , y );
      else context.fillText( text_bit, x_min, y );

      return y;
   }
   return y - font_size;
}

function textButton( context, x_mid, y_mid, text, font_size, font, pressed )
{
   var width = text.width( font );
   if (pressed) {
      var x_min = x_mid - (width / 2) - 1;
      var y_min = y_mid - (font_size / 2) - 5;
      context.fillStyle = "rgba(45,45,45,1)";
      context.fillRect( x_min, y_min, width + 14, font_size + 16 );
      context.fillStyle = "white";
      context.fillRect( x_min + 3, y_min + 3, width + 8, font_size + 10 );
   } else {
      var x_min = x_mid - (width / 2);
      var y_min = y_mid - (font_size / 2) - 4;
      context.fillStyle = "rgba(45,45,45,1)";
      context.fillRect( x_min, y_min, width + 12, font_size + 14 );
      context.fillStyle = "white";
      context.fillRect( x_min + 2, y_min + 2, width + 8, font_size + 10 );
   }
   context.fillStyle = "black";
   context.font = font;
   context.fillText( text, x_min + 6, y_min + font_size + 6 );
}

function updateTextBox( char_code )
{
   if (text_box_selection === 'coords E' || text_box_selection === 'coords S') {
      if (char_code === 9) { // tab
         if (text_box_selection === 'coords E') {
            text_box_selection = 'coords S';
            boats[my_boats[boat_selection]].journey_y = -1;
         } else if (text_box_selection === 'coords S') {
            text_box_selection = 'coords E';
            boats[my_boats[boat_selection]].journey_x = -1;
         }

         selectDestination( -1 );
         return;
      }
      var boat = boats[ my_boats[boat_selection] ];
      var member_name = (text_box_selection === 'coords E')?'journey_x':'journey_y';
      var cur_str = '' + boat[member_name];
      var new_val = -1;
      if (boat[member_name] === -1)
         cur_str = '';

      if (char_code === 46 /*delete*/ || char_code === 8 /*backspace*/) {
         cur_str = cur_str.slice(0, -1);

         if (cur_str === '')
            new_val = -1;
         else 
            new_val = Number( cur_str );
      }
      else if (char_code >= 48 && char_code <= 57)
      {
         cur_str += (char_code - 48);
         new_val = Number( cur_str );
      } 
      else if (char_code >= 96 && char_code <= 105)
      {
         cur_str += (char_code - 96);
         new_val = Number( cur_str );
      }
      if (new_val < -1) new_val = -1;
      if (new_val >= MAP_WIDTH) return;

      boat[member_name] = new_val;
   }

}

/////////////////////////////////////////////////////////////////////
// Quests ---

function payForQuest( cargo, cargo_num )
{
   for (var i = 0; i < my_boats.length; ++i) {
      var boat = boats[ my_boats[ i ] ];
      if (map[ boat.x ][ boat.y ].place === 0) {
         var b_num = boat.cargo[cargo];
         if (b_num) {
            if (b_num < cargo_num) {
               cargo_num -= b_num;
               boat.cargo[cargo] = 0;
            } else {
               boat.cargo[cargo] -= cargo_num;
               cargo_num = 0;
            }
         }
      }
      if (cargo_num === 0)
         break;
   } 
}

function testQuest()
{
   var cargo_at_home = {};
   for (var i = 0; i < my_boats.length; ++i) {
      var boat = boats[ my_boats[ i ] ];
      if (map[ boat.x ][ boat.y ].place === 0) {
         for (var cargo_id in boat.cargo) {
            cargo_at_home[cargo_id] = 
               (cargo_at_home[cargo_id] === undefined)?
                  (boat.cargo[cargo_id]):
                  (cargo_at_home[cargo_id] + boat.cargo[cargo_id]);
         }
      }
   }

   if (quest_status === 0) {
      if (cargo_at_home.softwood >= 2) {
         payForQuest( 'softwood', 2 );
         quest_status = 1;
         map[199][212].place = 0;
      }
   } else if (quest_status === 1) {
      var foods = [];
      for (var cargo in cargo_at_home) {
         if (cargo != 'bananas' && $.inArray (cargo, food_list ) !== -1) {
            foods.push( cargo );
         }
      }
      if (foods.length >= 5) {
         for (var i = 0; i < 5; ++i)
            payForQuest( foods[i], 1 );
         
         quest_status = 2;
         map[199][213].place = 0;
      }
   } else if (quest_status === 2) {
      if (cargo_at_home.stonetools >= 3) {
         payForQuest( 'stonetools', 3 );
         quest_status = 3;
         map[201][213].place = 0;
      } else if (cargo_at_home.bronzetools >= 1) {
         payForQuest( 'bronzetools', 1 );
         quest_status = 3;
         map[201][213].place = 0;
      } else if (cargo_at_home.irontools >= 1) {
         payForQuest( 'irontools', 1 );
         quest_status = 3;
         map[201][213].place = 0;
      }
   } else if (quest_status === 3) {
      var animals = [];
      for (var cargo in cargo_at_home) {
         if ($.inArray (cargo, animal_list ) !== -1) {
            if (cargo_at_home[cargo] >= 2)
               animals.push( cargo );
         }
      }
      if (animals.length >= 2) {
         for (var i = 0; i < 2; ++i)
            payForQuest( animals[i], 2 );
         
         quest_status = 4;
         map[201][214].place = 0;
      }
   } else if (quest_status === 4) {
      if (cargo_at_home.beds >= 1 && cargo_at_home.pillows >= 2) {
         payForQuest( 'beds', 1 );
         payForQuest( 'pillows', 2 );
         
         quest_status = 5;
         quest_goals = selectNResources( 5, food_list.slice() );
         map[198][213].place = 0;
      }
   } else if (quest_status === 5) {
      if (cargo_at_home[quest_goals[0]] >= 5 &&
          cargo_at_home[quest_goals[1]] >= 5 &&
          cargo_at_home[quest_goals[2]] >= 5 &&
          cargo_at_home[quest_goals[3]] >= 5 &&
          cargo_at_home[quest_goals[4]] >= 5) {
         payForQuest( quest_goals[0], 5 );
         payForQuest( quest_goals[1], 5 );
         payForQuest( quest_goals[2], 5 );
         payForQuest( quest_goals[3], 5 );
         payForQuest( quest_goals[4], 5 );

         quest_status = 6;
         map[200][214].place = 0;
      }
   } else if (quest_status === 6) {
      if (cargo_at_home.chairs >= 4 && cargo_at_home.tables >= 1 &&
          cargo_at_home.granite >= 4) {
         if (cargo_at_home.bronzetools >= 2) {
            payForQuest( 'chairs', 4 );
            payForQuest( 'tables', 1 );
            payForQuest( 'granite', 4 );
            payForQuest( 'bronzetools', 2 );

            quest_status = 7
            map[200][215].place = 0;
         } else if (cargo_at_home.irontools >= 2) {
            payForQuest( 'chairs', 4 );
            payForQuest( 'tables', 1 );
            payForQuest( 'granite', 4 );
            payForQuest( 'irontools', 2 );

            quest_status = 7
            map[200][215].place = 0;
         }
      }
   } else if (quest_status === 7) {
      if (cargo_at_home.pants >= 2 && cargo_at_home.shirts >= 2 &&
          cargo_at_home.fancysuits >= 1 && cargo_at_home.figurines >= 3) {
         payForQuest( 'pants', 2 );
         payForQuest( 'shirts', 2 );
         payForQuest( 'fancysuits', 1 );
         payForQuest( 'figurines', 3 );
         
         quest_status = 8;
         map[199][214].place = 0;
         quest_goals = selectNResources( 5, food_list.slice() );
         quest_goals.push.apply( selectNResources( 2, animal_list.slice() ) );
         quest_goals.push.apply( selectNResources( 2, big_animal_list.slice() ) );
      }
   } else if (quest_status === 8) {
      if (cargo_at_home[quest_goals[0]] >= 10 &&
          cargo_at_home[quest_goals[1]] >= 10 &&
          cargo_at_home[quest_goals[2]] >= 10 &&
          cargo_at_home[quest_goals[3]] >= 10 &&
          cargo_at_home[quest_goals[4]] >= 10 &&
          cargo_at_home[quest_goals[5]] >= 4 &&
          cargo_at_home[quest_goals[6]] >= 4 &&
          cargo_at_home[quest_goals[7]] >= 4 &&
          cargo_at_home[quest_goals[8]] >= 4 &&
          cargo_at_home.salt >= 5 && cargo_at_home.spices >= 5) {
         payForQuest( quest_goals[0], 10 );
         payForQuest( quest_goals[1], 10 );
         payForQuest( quest_goals[2], 10 );
         payForQuest( quest_goals[3], 10 );
         payForQuest( quest_goals[4], 10 );
         payForQuest( quest_goals[5], 4 );
         payForQuest( quest_goals[6], 4 );
         payForQuest( quest_goals[7], 4 );
         payForQuest( quest_goals[8], 4 );
         payForQuest( 'salt', 5 );
         payForQuest( 'spices', 5 );

         quest_status = 9;
         map[198][214].place = 0;
      }
   }
}

/////////////////////////////////////////////////////////////////////
// Terrain ---

/* First we have bits to describe the kind of terrain.
 * 0 -> full water
 * 1 -> green grass
 * 2 -> green jungle
 * 3 -> light stone
 * 4 -> dark stone
 * 5 -> yellow desert
 * 6 -> icy stone
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

function constructTerrain( start_dir, end_dir, river_bits, ter_type ) { // Goes Clockwise
   var ter = ter_type || 1;
   return ter + (start_dir << 3) + (end_dir << 6) + (river_bits << 9);
}

function terGetType( terrain ) {
   return terrain & 7;
}

function terGetStart( terrain ) {
   return (terrain >> 3) & 7;
}

function terGetEnd( terrain ) {
   return (terrain >> 6) & 7; 
}

/*
function terGetRivers( terrain ) {
   return (terrain >> 9) & 0xFF;
}

function terGetRiver( terrain, dir ) {
   return (terrain >> (9 + dir)) & 0x1;
}

function terToggleRiver( terrain, dir ) {
   var flipmask = 0x1 << (9 + dir);
   terrain = terrain ^ flipmask;
   return terrain;
}
*/

function terSetColor( terrain, context ) {
   switch (terGetType( terrain )) {
      case 1:
         context.fillStyle = "rgba(0,185,0,1)"; // green plains
         break;
      case 2:
         context.fillStyle = "rgba(0,135,0,1)"; // green jungle
         break;
      case 3:
         map_context.fillStyle = "rgba(155,155,155,1)"; // light stone
         break;
      case 4:
         map_context.fillStyle = "rgba(115,115,115,1)"; // dark stone
         break;
      case 5:
         map_context.fillStyle = "rgba(195,155,105,1)"; // sandy desert
         break;
      case 6:
         map_context.fillStyle = "rgba(175,225,235,1)"; // icy desert
         break;
   }
}

function addDirection( x, y, dir, toadd )
{
   var d = toadd || 1;
   if (dir === 0) return [ x-d, y ];
   if (dir === 1) return [ x-d, y-d ];
   if (dir === 2) return [ x, y-d ];
   if (dir === 3) return [ x+d, y-d ];
   if (dir === 4) return [ x+d, y ];
   if (dir === 5) return [ x+d, y+d ];
   if (dir === 6) return [ x, y+d ];
   if (dir === 7) return [ x-d, y+d ];

   return [x, y]
}

function getDirection( x1, y1, x2, y2 )
{
   if (x1 === x2) {
      if (y1 === y2) return -1;
      if (y1 < y2) return 6;
      if (y1 > y2) return 2;
   } else if (x1 < x2) {
      if (y1 > y2) return 3;
      if (y1 === y2) return 4;
      if (y1 < y2) return 5;
   } else if (x1 > x2) {
      if (y1 > y2) return 1;
      if (y1 === y2) return 0;
      if (y1 < y2) return 7;
   }
}

/////////////////////////////////////////////////////////////////////
// Places ---

/* So, let's talk about how towns work.
 *
 * First, they have certain natural resources, which are regularly harvested
 * to produce raw goods.
 *
 * Second, they have 
 */

function Place( type, name )
{
   this.type = type;
   if (type === "town") {
      this.name = name;
      this.id = place_id_gen++;
      this.x = -1;
      this.y = -1;

      this.discovered = false;

      this.color = "rgba(255,55,55,1)";

      this.update_tick = 0;
      this.upgrade_frequency = 500; // # of ticks
      this.resources = {};
      this.industries = {
         // Pure resource gen
         farming: 0,
         mining: 0,
         // Crafting
         woodcraft: 0,
         stonecraft: 0,
         metalcraft: 0,
         weaving: 0,
         boatcraft: 0
      };
      this.stock = {};
      this.stock_selected = '';
      this.industry_randomizer1 = Math.random();
      this.industry_randomizer2 = Math.random();
   }
}

var name_count = 0;
function townNameGen()
{
   return 'Praetoria ' + name_count++;
}

function selectNResources( n, resources )
{
   var retval = [];
   while (retval.length < n && resources.length > 0) {
      var rand = Math.floor( Math.random() * resources.length );
      var val = resources.splice( rand, 1 );
      retval.push( val[0] );
   }
   return retval;
}

function generateResources( ter_type )
{
   var resources = [];

   if (ter_type === 1) {
      /* Green Grass
       * Possible resources:
       *
       * fruits: apples, lemons, limes, peaches
       * veggies: potatoes, carrots, corn, onions, rice, wheat
       * animals: chickens, turkeys, ducks, sheep, cows, fish
       * resources: softwood, hardwood, cotton, burlap, silk
       * stone: stone
       */
      // Plants
      var res = selectNResources( Math.round( Math.random() * 3 ) + 2,
            [ 'apples', 'lemons', 'limes', 'peaches', 'potatoes', 'carrots', 'corn', 'onions', 'rice', 'wheat' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 3),
            [ 'chickens', 'turkeys', 'ducks', 'sheep', 'cows', 'fish' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 2),
            [ 'softwood', 'hardwood', 'cotton', 'burlap', 'silk' ] );
      Array.prototype.push.apply( resources, res );
      if (Math.random() > 0.5) resources.push( 'stone' );

   } else if (ter_type === 2) {
      /* Jungle
       * Possible resources:
       *
       * fruits: mangoes, passionfruit, berries
       * veggies: eggplants, tomatoes, peppers
       * animals: turkeys, ducks, pigs, turtles, fish, monkeys
       * resources: softwood, hardwood, cotton, burlap
       * stone: stone
       */
      var res = selectNResources( Math.round( Math.random() * 3 ) + 1,
            [ 'mangoes', 'passionfruit', 'lemons', 'limes', 'eggplants', 'tomatoes', 'peppers' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 3),
            [ 'pigs', 'turkeys', 'ducks', 'turtles', 'fish', 'monkeys' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 2),
            [ 'softwood', 'hardwood', 'cotton', 'burlap' ] );
      Array.prototype.push.apply( resources, res );
      if (Math.random() > 0.5) resources.push( 'stone' );

   } else if (ter_type === 3) {
      /* Light stone
       * Possible resources:
       *
       * fruits: berries
       * veggies: potatoes, onions
       * animals: chickens, sheep, fish
       * resources: 
       * stone: stone, coal, copper, iron
       */
      var res = selectNResources( 1,
            [ 'berries', 'potatoes', 'onions' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 1),
            [ 'chickens', 'sheep', 'fish' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 2) + 1,
            [ 'stone', 'coal', 'copper', 'iron' ] );
      Array.prototype.push.apply( resources, res );
   } else if (ter_type === 4) {
      /* Dark stone
       * Possible resources:
       *
       * fruits: berries
       * veggies: potatoes, onions
       * animals: chickens, sheep, fish
       * resources: 
       * stone: stone, coal, tin, iron, granite, obsidian
       */
      var res = selectNResources( 1,
            [ 'berries', 'potatoes', 'onions' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 1),
            [ 'chickens', 'sheep', 'fish' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 2) + 1,
            [ 'stone', 'coal', 'tin', 'iron', 'granite', 'obsidian' ] );
      Array.prototype.push.apply( resources, res );
   } else if (ter_type === 5) {
      /* Yellow desert
       * Possible resources:
       *
       * fruits: coconuts, pineapples
       * veggies: 
       * animals: fish
       * resources: softwood, glass
       * stone: copper, tin
       */
      var res = selectNResources( 1,
            [ 'coconuts', 'pineapples' ] );
      Array.prototype.push.apply( resources, res );
      if (Math.random() > 0.5) resources.push( 'fish' );
      res = selectNResources( Math.round( Math.random() * 1) + 1,
            [ 'softwood', 'glass', 'tin', 'copper' ] );
      Array.prototype.push.apply( resources, res );
   } else if (ter_type === 6) {
      /* Icy tundra
       * Possible resources:
       *
       * fruits:
       * veggies: potatoes, onions
       * animals: fish, penguins, seals
       * resources: hardwood
       * stone: iron
       */
      var res = selectNResources( Math.round( Math.random() * 2) + 1,
            [ 'potatoes', 'onions', 'fish', 'penguins', 'seals' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 1),
            [ 'hardwood', 'iron', 'granite' ] );
      Array.prototype.push.apply( resources, res );
      if (Math.random() > 0.7) resources.push( 'salt' );
   }

   return resources;
}

function growTown( town, inland )
{
   if (town.size >= TOWN_MAX_SIZE)
      return false;

   var town_center = map[town.x][town.y];
   // Strategy: expand orthoganally or down the coast

   // First find coastal expansion
   var start_extremety = town_center, start_distance = 0;
   var s_e_x = town.x, s_e_y = town.y;
   while (start_extremety.place === town.id) {
      var move = addDirection( s_e_x, s_e_y, terGetStart( start_extremety.terrain ) );
      s_e_x = move[0];
      s_e_y = move[1];
      start_extremety = map[s_e_x][s_e_y];
      start_distance++;
      if (s_e_x === town.x && s_e_y === town.y) {
         // Made a full circle
         return false;
      }
   }
   var end_extremety = town_center, end_distance = 0;
   var e_e_x = town.x, e_e_y = town.y;
   while (end_extremety.place === town.id) {
      var move = addDirection( e_e_x, e_e_y, terGetEnd( end_extremety.terrain ) );
      e_e_x = move[0];
      e_e_y = move[1];
      end_extremety = map[e_e_x][e_e_y];
      end_distance++;
   }

   // Decide which way we're going
   var decision_cap = (1.5 / start_distance) + (1.5 / end_distance) + 1;
   if (inland === false)
      decision_cap = (1.5 / start_distance) + (1.5 / end_distance);
   var decision = Math.random() * decision_cap;

   if (decision < (1.5 / start_distance) && start_extremety.place === undefined) { // Expand start-ward
      // If start_extremety is orthogonal to last town, just do it
      var connect_dir = terGetEnd( start_extremety.terrain );
      if (connect_dir % 2 === 0) {
         map[s_e_x][s_e_y].place = town.id;
      }
      else
      {
         // Otherwise, go through the orthoganal connector
         move = addDirection( s_e_x, s_e_y, (connect_dir + 7) % 8 );
         if (map[move[0]][move[1]].place === town.id)
            map[s_e_x][s_e_y].place = town.id;
         else
            map[move[0]][move[1]].place = town.id;
      }

   } else if (decision < (1.5 / start_distance) + (1.5 / end_distance) && end_extremety.place === undefined) { // Expand end-ward
      // If end_extremety is orthogonal to last town, just do it
      var connect_dir = terGetStart( end_extremety.terrain );
      if (connect_dir % 2 === 0) {
         map[e_e_x][e_e_y].place = town.id;
      }
      else
      {
         // Otherwise, go through the orthoganal connector
         move = addDirection( e_e_x, e_e_y, (connect_dir + 1) % 8 );
         if (map[move[0]][move[1]].place === town.id)
            map[e_e_x][e_e_y].place = town.id;
         else
            map[move[0]][move[1]].place = town.id;
      }

   } else { // expand inland
      // Select a piece of coast to expand from
      decision_cap = start_distance + end_distance - 1;
      decision = Math.random() * decision_cap;

      var x = town.x, y = town.y, expand_spot = town_center;
      if (decision < start_distance - 1) {
         // Move start-wise
         while( decision > 0 ) {
            move = addDirection( x, y, terGetStart( expand_spot.terrain ) );
            x = move[0];
            y = move[1];
            expand_spot = map[x][y];
            decision--;
         }
      } else if (decision < start_distance + end_distance - 2) {
         // Move end-wise
         decision -= start_distance - 1;
         while( decision > 0 ) {
            move = addDirection( x, y, terGetEnd( expand_spot.terrain ) );
            x = move[0];
            y = move[1];
            expand_spot = map[x][y];
            decision--;
         }
      }

      // Select a direction to expand
      // Choose randomly from all orthagonal directions between start and end
      // Then just go that way
      // If it fails - start growTown over again
      var start = terGetStart( expand_spot.terrain ), end = terGetEnd( expand_spot.terrain ), dir = -1;
      if ((start + 1) % 8 === end) {
         // Too small, fail
         dir = -1;
      } else if ((start + 2) % 8 === end) {
         dir = (start + 1) % 8;
      } else {
         var dif = ((end - start + 8) % 8), options = 1;
         if (start % 2 === 0) {
            if (dif <= 4) options = 1;
            else if (dif <= 6) options = 2;
            else options = 3;
            dir = (start + (2 * Math.ceil(Math.random() * options)));
         } else {
            if (dif <= 3) options = 1;
            else if (dif <= 5) options = 2;
            else options = 3;
            dir = (start + (2 * Math.ceil(Math.random() * options))) - 1;
         }
      }
      dir = dir % 8;

      if (dir === -1) {
         // Failure
         return growTown( town, false );
      }

      while( expand_spot.place === town.id ) {
         move = addDirection( x, y, dir );
         x = move[0];
         y = move[1];
         expand_spot = map[x][y];
      }
      if (expand_spot.terrain === 0) {
         // Fell off the island!
         return growTown( town, false );
      } else if (expand_spot.place !== undefined) {
         // Something else is here
         return growTown( town, false );
      } else {
         map[x][y].place = town.id;
      }
   }
   // Success
   town.size++;
   for (var res in town.resources) {
      if ($.inArray(res, animal_list ) === -1) { // SKIP non-animals - they are not resources
         if ($.inArray (res, food_list ) !== -1)
            town.resources[res] += 3; // Add lots to food
         else
            town.resources[res]++;
      }
   }
   return true;
}

function buildTown( center_x, center_y, island_resources )
{
   var new_town = new Place( 'town', townNameGen() );

   // Add it to the map
   map[center_x][center_y].place = new_town.id;
   new_town.x = center_x;
   new_town.y = center_y;
   new_town.size = 1;

   for (var i = 0; i < island_resources.length; ++i) {
      var res = island_resources[i];
      if ($.inArray( res, food_list ) !== -1)
         new_town.resources[res] = Math.ceil( Math.random() * 9 ) + 4;
      else if ($.inArray( res, big_animal_list ) !== -1)
         new_town.stock[res] = Math.ceil(Math.random() * 3 + 2);
      else if ($.inArray( res, animal_list ) !== -1)
         new_town.stock[res] = Math.ceil(Math.random() * 9 + 8);
      else
         new_town.resources[res] = Math.ceil( Math.random() * 4 ) + 1;
   }
   new_town.upgrade();

   places.push( new_town );
}

Place.prototype.getPrice = function( cargo_id )
{
   // Strategy:
   // 1- Get base price
   // 2- Multiply by a factor of novelty based on how many you have
   // 3- Multiply by 1.5 if it's the last thing needed for an upgrade
   var price = cargo_index[ cargo_id ].price;
   if (this.stock[ cargo_id ] === undefined || this.stock[ cargo_id ] < 15) {
      var count = this.stock[ cargo_id ] || 0;

      // TODO: Fancier math?
      // Linear version
      var multiplier = 1 + (((15 - count) / 15) * (cargo_index[ cargo_id ].novelty - 1));

      price *= multiplier;
   }
   // TODO: Check if needed for upgrade
   return price;
}

Place.prototype.attemptEat = function( food_target ) {
   // First check if we have enough
   var total = 0;
   for( var stock in this.stock ) {
      if ($.inArray( stock, animal_list ) !== -1 ||
          $.inArray( stock, food_list ) !== -1)
         total += (cargo_index[ stock ].foodvalue * this.stock[ stock ]);
   }

   if (total < food_target) return false; // Starvation

   for( var stock in this.stock ) {
      if (food_target <= 0) break;

      var limit = 10 + Math.round(Math.random() * 10);
      if ($.inArray( stock, animal_list ) !== -1) {
         if( this.stock[stock] > limit) {
            total = (this.stock[stock] - limit) * cargo_index[ stock ].foodvalue;
            if (total < food_target) {
               this.stock[stock] = limit;
               food_target -= total;
            } else {
               total = Math.ceil( food_target / cargo_index[ stock ].foodvalue );
               this.stock[stock] -= total; 
               return true;
            }
         }
      }
   }
   for( var stock in this.stock ) {
      if (food_target <= 0) break;

      var limit = 10 + Math.round(Math.random() * 10);
      if ($.inArray( stock, food_list ) !== -1) {
         if( this.stock[stock] > limit) {
            total = (this.stock[stock] - limit) * cargo_index[ stock ].foodvalue;
            if (total < food_target) {
               this.stock[stock] = limit;
               food_target -= total;
            } else {
               total = Math.ceil( food_target / cargo_index[ stock ].foodvalue );
               this.stock[stock] -= total; 
               return true;
            }
         }
      }
   }
   for( var stock in this.stock ) {
      if (food_target <= 0) break;

      var limit = 3 + Math.round(Math.random() * 4);
      if ($.inArray( stock, animal_list ) !== -1) {
         if( this.stock[stock] > limit) {
            total = (this.stock[stock] - limit) * cargo_index[ stock ].foodvalue;
            if (total < food_target) {
               this.stock[stock] = limit;
               food_target -= total;
            } else {
               total = Math.ceil( food_target / cargo_index[ stock ].foodvalue );
               this.stock[stock] -= total; 
               return true;
            }
         }
      }
   }
   for( var stock in this.stock ) {
      if (food_target <= 0) break;

      var limit = 3 + Math.round(Math.random() * 4);
      if ($.inArray( stock, food_list ) !== -1) {
         if( this.stock[stock] > limit) {
            total = (this.stock[stock] - limit) * cargo_index[ stock ].foodvalue;
            if (total < food_target) {
               this.stock[stock] = limit;
               food_target -= total;
            } else {
               total = Math.ceil( food_target / cargo_index[ stock ].foodvalue );
               this.stock[stock] -= total; 
               return true;
            }
         }
      }
   }
   for( var stock in this.stock ) {
      if (food_target <= 0) break;

      var limit = 2; // Always leave a breeding pair
      if ($.inArray( stock, animal_list ) !== -1) {
         if( this.stock[stock] > limit) {
            total = (this.stock[stock] - limit) * cargo_index[ stock ].foodvalue;
            if (total < food_target) {
               this.stock[stock] = limit;
               food_target -= total;
            } else {
               total = Math.ceil( food_target / cargo_index[ stock ].foodvalue );
               this.stock[stock] -= total; 
               return true;
            }
         }
      }
   }
   for( var stock in this.stock ) {
      if (food_target <= 0) break;

      if ($.inArray( stock, food_list ) !== -1) {
         if( this.stock[stock] > 0) {
            total = this.stock[stock] * cargo_index[ stock ].foodvalue;
            if (total < food_target) {
               this.stock[stock] = 0;
               food_target -= total;
            } else {
               total = Math.ceil( food_target / cargo_index[ stock ].foodvalue );
               this.stock[stock] -= total; 
               return true;
            }
         }
      }
   }

   return true;
}

Place.prototype.upgrade = function() {
   // Strategy:
   // 1- Gather resources
   // 1.2- Resource loss
   // 1.5- Eat food, if not enough food then NO UPGRADE FOR YOU
   // 2- Craft resources
   // 3- Attempt to upgrade industries
   // 4- Attempt to grow the town

   // 1- Gather
   for(var res in this.resources) {
      var cur = this.stock[res];
      if (!cur) cur = 0;
      var income = this.resources[res] + Math.floor( Math.random() * 3 ) - 1;

      cur = Math.round(cur + income);
      this.stock[res] = cur;
   }

   // 1.2
   for (var stock in this.stock) {
      // Animal breeding
      if ($.inArray( stock, animal_list ) !== -1) {
         var breed_power = 0.5 + (0.03 * this.industries.farming);
         var gain = Math.floor( Math.pow( this.stock[stock] * Math.random(), breed_power ) );
         // TODO: Calculate more e.g. Population bounds
         this.stock[stock] += gain;
      }
      // Random loss
      var size_factor = 0.04 * this.size;
      var loss = (Math.random() * size_factor) + 0.9 - size_factor;
      this.stock[stock] = Math.ceil( this.stock[stock] * loss );
   }

   // 1.5- Eat
   if (this.attemptEat( Math.round( Math.pow(this.size, 1.5) * 50 )) === false)
      return;

   // 2- Craft
   // TODO: More?
   var craft_count = 0;
   if (this.industries.woodcraft > 0) {
      // Furniture
      if (this.stock.hardwood) {
         craft_count = Math.floor( this.stock.hardwood / 4 );
         if (craft_count > this.industries.woodcraft)
            craft_count = this.industries.woodcraft;
         craft_count -= (craft_count % 2);
         if (craft_count > 15 && this.industries.woodcraft >= 3) {
            this.stock.desks++;
            craft_count -= 16;
            this.stock.hardwood -= 16;
         }
         if (craft_count > 6 && this.industries.woodcraft >= 2) {
            this.stock.beds++;
            craft_count -= 7;
            this.stock.hardwood -= 7;
         }
         if (craft_count > 3) {
            this.stock.tables++;
            craft_count -= 4;
            this.stock.hardwood -= 4;
         }

         this.stock.chairs += (craft_count / 2);
         this.stock.hardwood -= craft_count;
      }
      // Wooden utensils

   }
   if (this.industries.stonecraft > 0) {
      // Stone tools
      if (this.stock.stone && this.stock.hardwood) {
         craft_count = Math.floor( Math.min( this.stock.stone, this.stock.hardwood ) / 4 );
         if (craft_count > this.industries.stonecraft)
            craft_count = this.industries.stonecraft;
         this.stock.stone -= craft_count;
         this.stock.hardwood -= craft_count;
         this.stock.stonetools += craft_count;
      }
      // Paving stone - used for growth
      if (this.stock.stone && this.industries.stonecraft > 1) {
         craft_count = Math.floor( this.stock.stone / 4 );
         if (craft_count > this.industries.stonecraft)
            craft_count = this.industries.stonecraft;
         this.stock.stone -= craft_count;
         this.stock.pavingstone += craft_count;
      }
      // Obsidian figurines
      if (this.stock.obsidian && this.industries.stonecraft > 3) {
         craft_count = Math.floor( this.stock.obsidian / 4 );
         if (craft_count > this.industries.stonecraft)
            craft_count = this.industries.stonecraft;
         this.stock.obsidian -= craft_count;
         this.stock.figurines += craft_count;
      }
   }
   if (this.industries.metalcraft > 0 &&
         (this.stock['stonetools'] > 0 || this.stock['bronzetools'] > 0 || this.stock['irontools'] > 0)) {
      // Smelt bronze
      if (this.stock.tin && this.stock.copper && this.stock.coal) {
         craft_count = Math.floor( Math.min( this.stock.tin, this.stock.copper, this.stock.coal ) / 4 );
         if (craft_count > this.industries.metalcraft)
            craft_count = this.industries.metalcraft;
         this.stock.tin -= craft_count;
         this.stock.copper -= craft_count;
         this.stock.coal -= craft_count;
         this.stock.bronze += 2 * craft_count;
      }
      // Smelt steel
      if (this.stock.iron && this.stock.coal && this.industries.metalcraft > 4) {
         craft_count = Math.floor( Math.min( this.stock.iron / 2, this.stock.coal ) / 4 );
         if (craft_count > this.industries.metalcraft)
            craft_count = this.industries.metalcraft;
         this.stock.iron -= 2 * craft_count;
         this.stock.coal -= craft_count;
         this.stock.steel += craft_count;
      }
      // Bronze tools
      if (this.stock.bronze && this.industries.metalcraft > 1) {
         craft_count = Math.floor( this.stock.bronze / 4 );
         if (craft_count > this.industries.metalcraft)
            craft_count = this.industries.metalcraft;
         this.stock.bronze -= craft_count;
         this.stock.bronzetools += craft_count;
      }
      // Iron tools
      if (this.stock.iron && this.industries.metalcraft > 2) {
         craft_count = Math.floor( this.stock.iron / 4 );
         if (craft_count > this.industries.metalcraft)
            craft_count = this.industries.metalcraft;
         this.stock.iron -= craft_count;
         this.stock.irontools += craft_count;
      }

   }
   if (this.industries.weaving > 0) {
      // First things first: shear some sheep
      if (this.stock.sheep) {
         craft_count = Math.floor( this.stock.sheep / 4 );
         if (craft_count > this.industries.weaving)
            craft_count = this.industries.weaving;
         this.stock.wool += craft_count;
      }
      // Other weaving resources are grown naturally
      // Clothing - wool/cotton interchangeable
      if (this.stock.wool || this.stock.cotton) {
         craft_count = Math.floor( (this.stock.wool + this.stock.cotton) / 4 );
         if (craft_count > this.industries.weaving)
            craft_count = this.industries.weaving;

         var r1 = Math.round( craft_count * this.industry_randomizer1 );
         var r2 = Math.round( craft_count * this.industry_randomizer2 );
         if (r1 + r2 > craft_count) r2 = craft_count - r1;
         this.stock.pants += r1;
         this.stock.shirts += r2;
         this.stock.dresses += craft_count - r1 - r2;

         while (craft_count-- > 0) {
            if (this.stock.wool > this.stock.cotton) this.stock.wool--;
            else this.stock.cotton--;
         }
      }
      // Pillows wool/cotton outside, down filling
      if ((this.stock.wool || this.stock.cotton) && this.industries.weaving > 1) {
         craft_count = Math.min( Math.floor( (this.stock.wool + this.stock.cotton) / 4 ),
            Math.floor( (this.stock.chickens + this.stock.ducks + this.stock.penguins) / 8 ) );
         if (craft_count > this.industries.weaving)
            craft_count = this.industries.weaving;

         this.stock.pillows += craft_count;
         while (craft_count-- > 0) {
            if (this.stock.wool > this.stock.cotton) this.stock.wool--;
            else this.stock.cotton--;
         }
         // Down is free if you have the poultry
      }
      // Dolls wool/cotton outside, wool/cotton filling
      if ((this.stock.wool || this.stock.cotton) && this.industries.weaving > 1) {
         craft_count = Math.floor( (this.stock.wool + this.stock.cotton) / 12 ); 
         if (craft_count > this.industries.weaving)
            craft_count = this.industries.weaving;

         this.stock.dolls += craft_count;
         craft_count *= 3;
         while (craft_count-- > 0) {
            if (this.stock.wool > this.stock.cotton) this.stock.wool--;
            else this.stock.cotton--;
         }
      }
      // Fancy Clothing
      if (this.stock.silk && this.industries.weaving > 2) {
         craft_count = Math.floor( this.stock.silk / 4 );
         if (craft_count > this.industries.weaving)
            craft_count = this.industries.weaving;

         var r1 = Math.round( craft_count * this.industry_randomizer1 );
         this.stock.fancydresses += r1;
         this.stock.fancyshirts += craft_count - r1;

         this.stock.silk -= craft_count;
      }
   }

   // 3- Upgrade industry
   this.attemptUpgrades();

   // 4- Grow town
   this.attemptGrowth();
}

Place.prototype.upgradeFarming = function()
{
   for (var res in resources) {
      if ($.inArray( res, food_list ) !== -1)
         resources[res] += 2;
   }
}

Place.prototype.upgradeMining = function()
{
   for (var res in resources) {
      if ($.inArray( res, mining_list ) !== -1)
         resources[res] += 2;
   }
}

Place.prototype.upgradeWoodcraft = function()
{
   for (var res in resources) {
      if (res === 'hardwood' || res === 'softwood')
         resources[res] += 2;
   }
}

Place.prototype.upgradeStonecraft = function()
{
   for (var res in resources) {
      if (res === 'stone' || res === 'granite' || res === 'obsidian' || res === 'coal')
         resources[res]++;
   }
}

Place.prototype.upgradeMetalcraft = function()
{
   for (var res in resources) {
      if (res === 'copper' || res === 'tin' || res === 'iron')
         resources[res]++;
   }
}

Place.prototype.upgradeWeaving = function()
{
   for (var res in resources) {
      if (res === 'burlap' || res === 'cotton' || res === 'silk' || res === 'sheep')
         resources[res] += 2;
   }
}

Place.prototype.attemptUpgrades = function() {
   // TODO
   /* Industies:
         farming
         mining
         woodcraft
         stonecraft
         metalcraft
         weaving
         boatcraft
         */

   // Farming - mostly you need better tools I guess
   if (this.farming === 0) {
      var tools = (this.stock.stonetools || 0) + (this.stock.bronzetools || 0) + (this.stock.irontools || 0);
      if (tools > 1) {
         tools = 2;
         while( tools > 0 ) {
            if (this.stock.stonetools && this.stock.stonetools > 0) this.stock.stonetools--;
            else if (this.stock.bronzetools && this.stock.bronzetools > 0) this.stock.bronzetools--;
            else if (this.stock.irontools && this.stock.irontools > 0) this.stock.irontools--;
            tools--;
         }
         this.upgradeFarming();
      }
   } else if (this.farming === 1) {
      var tools = (this.stock.stonetools || 0) + (this.stock.bronzetools || 0) + (this.stock.irontools || 0);
      if (tools > 8) {
         tools = 9;
         while( tools > 0 ) {
            if (this.stock.stonetools && this.stock.stonetools > 0) this.stock.stonetools--;
            else if (this.stock.bronzetools && this.stock.bronzetools > 0) this.stock.bronzetools--;
            else if (this.stock.irontools && this.stock.irontools > 0) this.stock.irontools--;
            tools--;
         }
         this.upgradeFarming();
      }
   } else if (this.farming === 2) {
      var tools = (this.stock.bronzetools || 0) + (this.stock.irontools || 0);
      if (tools > 4) {
         tools = 5;
         while( tools > 0 ) {
            if (this.stock.bronzetools && this.stock.bronzetools > 0) this.stock.bronzetools--;
            else if (this.stock.irontools && this.stock.irontools > 0) this.stock.irontools--;
            tools--;
         }
         this.upgradeFarming();
      }
   } else if (this.farming === 3) {
      var tools = (this.stock.irontools || 0);
      if (tools > 4) {
         this.stock.irontools -= 5;
         this.upgradeFarming();
      }
   } else if (this.farming === 4) {
      var tools = (this.stock.irontools || 0);
      if (tools > 29) {
         this.stock.irontools -= 30;
         this.upgradeFarming();
      }
   }

   // TODO: Mining
   // TODO: woodcraft
   // TODO: stonecraft
   if (this.stonecraft === 0) {
      if (this.stock.stone && this.stock.stone > 11) {
         this.stock.stone -= 12;
         this.upgradeStonecraft();
      }
   } else if (this.stonecraft === 1) {
      if (this.stock.stone && this.stock.stone > 19
         && this.stock.stonetools && this.stock.stonetools > 3) {
         this.stock.stone -= 20;
         this.stock.stonetools -= 4;
         this.upgradeStonecraft();
      }
   }
   // TODO: metalcraft
   // TODO: weaving
   // TODO: boatcraft
}

Place.prototype.attemptGrowth = function() {
   if (this.size < 4) {
      // Only need sufficient food
      var food_req = (this.size * 400) + 200;

      if (this.attemptEat( food_req ) === true) {
         growTown( this, true );
         return true;
      }
   } else if (this.size < 7) {
      // Need tools and decent clothing
      var food_req = (this.size * 450) + 300;
      var tool_req = (this.size * 4) + 8;
      var clothing_req = (this.size * 6) + 5;

      var tools = (this.stock.stonetools || 0) + (this.stock.bronzetools || 0) + (this.stock.irontools || 0);
      if (tools >= tool_req &&
          (this.stock.pants || 0) >= clothing_req && 
          (this.stock.shirts || 0) >= clothing_req && 
          (this.stock.dresses || 0) >= clothing_req) {
         if (this.attemptEat( food_req ) === true) {
            this.stock.pants -= clothing_req;
            this.stock.shirts -= clothing_req;
            this.stock.dresses -= clothing_req;
            tools = tool_req;
            while( tools > 0 ) {
               if (this.stock.stonetools && this.stock.stonetools > 0) this.stock.stonetools--;
               else if (this.stock.bronzetools && this.stock.bronzetools > 0) this.stock.bronzetools--;
               else if (this.stock.irontools && this.stock.irontools > 0) this.stock.irontools--;
               tools--;
            }
            growTown( this, true );
            return true;
         }
      }
   } else if (this.size < 10) {
      // Need paving stone, furniture, and better tools
      var food_req = (this.size * 500) + 300;
      var tool_req = (this.size * 4) + 3;
      var clothing_req = (this.size * 7) + 5;
      var paving_req = (this.size * 15) + 40;
      var furniture_req = (this.size * 2) + 2;

      var tools = (this.stock.bronzetools || 0) + (this.stock.irontools || 0);
      if (tools >= tool_req &&
          (this.stock.pants || 0) >= clothing_req && 
          (this.stock.shirts || 0) >= clothing_req && 
          (this.stock.dresses || 0) >= clothing_req &&
          (this.stock.pavingstone || 0) >= paving_req &&
          (this.stock.chairs || 0) >= (furniture_req * 4) && 
          (this.stock.tables || 0) >= (furniture_req * 2) && 
          (this.stock.desks || 0) >= furniture_req && 
          (this.stock.pillows || 0) >= (furniture_req * 2) && 
          (this.stock.beds || 0) >= furniture_req) {
         if (this.attemptEat( food_req ) === true) {
            this.stock.desks -= furniture_req;
            this.stock.beds -= furniture_req;
            this.stock.tables -= 2 * furniture_req;
            this.stock.chairs -= 4 * furniture_req;
            this.stock.pavingstone -= paving_req;
            this.stock.pants -= clothing_req;
            this.stock.shirts -= clothing_req;
            this.stock.dresses -= clothing_req;
            tools = tool_req;
            while( tools > 0 ) {
               if (this.stock.bronzetools && this.stock.bronzetools > 0) this.stock.bronzetools--;
               else if (this.stock.irontools && this.stock.irontools > 0) this.stock.irontools--;
               tools--;
            }
            growTown( this, true );
            return true;
         }
      }
   } else {
      // Need the best tools and fancy clothing
      var food_req = (this.size * 500) + 400;
      var tool_req = (this.size * 5) + 2;
      var clothing_req = (this.size * 8) + 4;
      var paving_req = (this.size * 15) + 40;
      var furniture_req = (this.size * 2) + 2;

      if ((this.stock.irontools || 0) >= tool_req &&
          (this.stock.fancyshirts || 0) >= clothing_req && 
          (this.stock.fancydresses || 0) >= clothing_req &&
          (this.stock.pavingstone || 0) >= paving_req &&
          (this.stock.chairs || 0) >= (furniture_req * 4) && 
          (this.stock.tables || 0) >= (furniture_req * 2) && 
          (this.stock.desks || 0) >= furniture_req && 
          (this.stock.pillows || 0) >= (furniture_req * 4) && 
          (this.stock.beds || 0) >= furniture_req) {
         if (this.attemptEat( food_req ) === true) {
            this.stock.desks -= furniture_req;
            this.stock.beds -= furniture_req;
            this.stock.tables -= 2 * furniture_req;
            this.stock.chairs -= 4 * furniture_req;
            this.stock.pavingstone -= paving_req;
            this.stock.pants -= clothing_req;
            this.stock.shirts -= clothing_req;
            this.stock.dresses -= clothing_req;
            this.stock.irontools -= tool_req;
            growTown( this, true );
            return true;
         }
      }
   }

   return false;
}

Place.prototype.update = function() {
   this.update_tick++;
   if (this.update_tick >= this.upgrade_frequency) {
      this.upgrade();
      this.update_tick = 0;
   }
}

function updatePlaces()
{
   for( var i = 0; i < places.length; ++i)
      places[i].update();
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
         this.maxcargo = 15;
         this.name = genBoatName();
         this.typename = "Canoe";
         this.maxhealth = 50;
         this.speed = 24;
         break;
      case 4:
         this.maxcargo = 120;
         this.name = genBoatName();
         this.typename = "Sailboat";
         this.maxhealth = 120;
         this.speed = 24;
         break;
   }

   this.id = boat_id_gen++;
   this.alive = true;
   this.mine = false;

   this.cargo = { coins: 0 };
   this.cargoweight = 0;
   this.cargo_selected = '';
   this.health = this.maxhealth;
   this.x = 0;
   this.y = 0;

   // Sailing
   this.direction = -1; // for exploration; -1 = anchored
   this.sail_style = 0; // 0 = sail direction; 1 = explore island; 2 = journey; 3 = blind journey; 4 = sail error
   this.explore_mod = 0;
   this.next_direction = -1;
   this.nav_islands_clockwise = true;
   this.sailing_progress = 0;
   this.sail_complete = 10000;
   this.blocked = false;
   this.block_x = -1;
   this.block_y = -1;

   this.journey_x = -1;
   this.journey_y = -1;
   this.journey_path = [];
}

function calculateDistanceMetric( dx, dy )
{
   if (dx > dy)
      return (dy * 0.4) + dx; // === (dx - dy) + (dy * 1.4)
   else
      return (dx * 0.4) + dy; // === (dx - dy) + (dy * 1.4)
}

Boat.prototype.calculateJourney = function()
{
   if (this.journey_x === -1 || this.journey_y === -1) {
      this.sail_style = -1;
   } else if (!map[this.journey_x][this.journey_y].discovered) {
      this.calculateBlindJourney();
   } else {
      var path = astar( this.x, this.y, this.journey_x, this.journey_y );

      if (path.length === 0) {
         // Couldn't find a way there
         this.calculateBlindJourney();
      } else {
         this.journey_path = path;
      }
   }
}

Boat.prototype.calculateBlindJourney = function()
{
   var fin_x = this.journey_x, fin_y = this.journey_y;
   while( true ) {
      // Find a destination that is not inland
      var ter = map[fin_x][fin_y].terrain;
      if (ter !== 0 && terGetStart( ter ) === terGetEnd( ter )) {
         var dir = getDirection( fin_x, fin_y, this.x, this.y );
         var next = addDirection( fin_x, fin_y, dir );
         fin_x = next[0];
         fin_y = next[1];
      } else
         break;
   }

   this.journey_path = [ [ fin_x, fin_y ] ];
   this.sail_style = 3;
}

Boat.prototype.decideNext = function ()
{
   if (this.sail_style === -1)
      this.next_direction = -1;
   else if (this.sail_style === 0 || this.sail_style === 1 || this.sail_style === 3) { 
      if (this.sail_style === 3) {
         if (this.x === this.journey_path[0][0] && this.y === this.journey_path[0][1]) {
            this.sail_style = -1;
            this.next_direction = -1;
            this.direction = -1;
            this.blocked = false;
            return;
         }

         this.direction = getDirection( this.x, this.y, this.journey_path[0][0], this.journey_path[0][1]);
      }

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
            if (this.explore_mod & 1) {
               // TODO: Make this work
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
      var cur_move = this.journey_path[0];
      var next_move = this.journey_path[1];
      if (this.x === next_move[0] && this.y === next_move[1]) {
         this.journey_path.shift(); // removes first element

         cur_move = this.journey_path[0];
      }

      if (this.journey_path.length === 1) {
         // Destination reached
         this.next_direction = -1;
         this.direction = -1;
         this.sail_style = -1;
      } else {
         this.next_direction = cur_move[2];
         this.direction = this.next_direction;
      }
   }
   if (this.next_direction === -1)
      this.sail_complete = 10000; 
   else if (this.next_direction % 2 === 0)
      this.sail_complete = this.speed;
   else if (this.next_direction % 2 === 1)
      this.sail_complete = this.speed * 1.4;
}

Boat.prototype.changeDirection = function ( dir )
{
   this.direction = dir;

   this.blocked = false;

   this.sailing_progress = 0;
   this.decideNext();
}

Boat.prototype.changeSailStyle = function ( style )
{
   this.sail_style = style;

   if (this.sail_style === 2)
      this.calculateJourney();

   this.blocked = false;

   this.sailing_progress = 0;
   this.decideNext();
}

Boat.prototype.sail = function ()
{
   var new_loc = addDirection( this.x, this.y, this.next_direction );
   this.x = new_loc[0];
   this.y = new_loc[1];

   if (this.explore_mod & 2 && map[this.x][this.y].place !== undefined) {
      // Found a city, so stop
      this.sail_style = -1
   }

   this.sailing_progress = 0;
   this.decideNext();
}

Boat.prototype.update = function ()
{
   if (this.next_direction === -1) return;

   this.sailing_progress++;
   var new_draw_loc = addDirection( this.x, this.y, this.next_direction, (this.sailing_progress / this.sail_complete) );

   if (this.sailing_progress >= this.sail_complete)
      this.sail();
}

Boat.prototype.addCargo = function ( cargo_id, count )
{
   var add_weight = cargo_index[cargo_id].weight * count;

   if (this.cargoweight + add_weight > this.maxcargo)
      return false;

   var cur_cargo = this.cargo[cargo_id];
   if (!cur_cargo)
      cur_cargo = 0;
   cur_cargo += count;
   if (cur_cargo < 0)
      return false;

   this.cargo[cargo_id] = cur_cargo;
   this.cargoweight += add_weight;
   return true;
}

Boat.prototype.sellCargo = function ( cargo_id, count )
{
   var place = map[this.x][this.y].place;
   if (place !== undefined) {
      if (this.addCargo( cargo_id, -count )) {
         var price = Math.round( places[place].getPrice( cargo_id ) );
         if (places[place].stock[ cargo_id ]) places[place].stock[ cargo_id ] += count;
         else places[place].stock[ cargo_id ] = count;
         this.addCargo( 'coins', (count * price) );
      }
   }
}

Boat.prototype.buyCargo = function ( cargo_id, count )
{
   var place = map[this.x][this.y].place;
   if (place !== undefined) {
      var price = Math.round( places[place].getPrice( cargo_id ) * 1.2); // 20% Markup
      if (this.cargo[ 'coins' ] >= price * count) {
         if (this.addCargo( cargo_id, count )) {
            places[place].stock[ cargo_id ] -= count;
            this.addCargo( 'coins', -(count * price) );
         }
      }
   }
}

function selectBoat( selection )
{
   if (selection < 0) selection = 0;
   boat_selection = selection;
   initDestinations();
}

function updateBoats()
{
   for( var i = 0; i < boats.length; ++i)
      boats[i].update();
}

function initBoats()
{
   var b = new Boat( 1 );
   b.mine = true;
   b.x = 200;
   b.y = 213;
   b.addCargo( 'bananas', 5 );
   boats.push( b );
   my_boats.push( b.id );
   var b2 = new Boat( 1 );
   b2.mine = true;
   b2.x = 200;
   b2.y = 213;
   b2.name = "Secret Test Boat";
   b2.speed = 0.1;
   b2.maxhealth = 9999;
   b2.health = 9999;
   b2.maxcargo = 9999;
   b2.addCargo( 'softwood', 2 );
   b2.addCargo( 'apples', 1 );
   b2.addCargo( 'coconuts', 1 );
   b2.addCargo( 'peppers', 1 );
   b2.addCargo( 'peaches', 1 );
   b2.addCargo( 'wheat', 1 );
   b2.addCargo( 'stonetools', 3 );
   b2.addCargo( 'chickens', 2 );
   b2.addCargo( 'turtles', 2 );
   b2.addCargo( 'beds', 1 );
   b2.addCargo( 'pillows', 2 );
   boats.push( b2 );
   my_boats.push( b2.id );
}

function changeBoatMenu( new_menu )
{
   if (new_menu < 1) new_menu = 1;
   if (new_menu > 9) new_menu = 9;

   if (new_menu === 2)
      initDestinations();

   if (new_menu >= 5)
      testQuest();

   boat_menu = new_menu;
   refresh();
}

function initDestinations()
{
   destination_list = [];
   destination_selection = null;
   destination_scroll = 0;

   for (var i = 0; i < places.length; ++i) {
      if (places[i].discovered)
         destination_list.push( i );
   }

   destination_list.sort( function(a, b) {
      var boat = boats[ my_boats[boat_selection] ];
      var place_a = places[a];
      var place_b = places[b];
      var dist_a = calculateDistanceMetric( boat.x - place_a.x, boat.y - place_a.y );
      var dist_b = calculateDistanceMetric( boat.x - place_b.x, boat.y - place_b.y );

      return dist_a - dist_b;
   });
}

function selectDestination( index )
{
   index += destination_scroll;
   if (index >= destination_list.length || index < 0) {
      destination_selection = null;
   } else {
      destination_selection = index;
      var place = places[destination_list[index]];
      var boat = boats[ my_boats[boat_selection] ];
      boat.journey_x = place.x;
      boat.journey_y = place.y;
   }
}

function scrollDestinations( dy )
{
   // Box is 12 entries high
   var new_scroll = destination_scroll + dy;

   if (new_scroll < 0) 
      new_scroll = 0;

   if (new_scroll >= (destination_list.length - 12))
      new_scroll = (destination_list.length - 12);

   destination_scroll = new_scroll;
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
   for (var i = 0; i < 5; ++i) {
      var index = i + boat_scroll;
      if (index >= num_boats) break;

      var b = boats[ my_boats[index] ];
      var b_img;
      if (b.type === 1) b_img = rowboat_sz60_img;

      if (boat_selection === index) {
         boat_context.fillStyle = "rgba(185,185,185,1)";
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
         var dur_string = Math.ceil(b.health) + "\/" + b.maxhealth;
         var width = dur_string.width("14pt serif");
         boat_context.fillText("Dur: ", grid_x + 280, grid_y + 24);
         boat_context.fillText(dur_string, BOAT_WIDTH - (82 + width), grid_y + 24);
         var cargo_string = Math.ceil(b.cargoweight) + "\/" + b.maxcargo;
         width = cargo_string.width("14pt serif");
         boat_context.fillText("Cargo: ", grid_x + 280, grid_y + 50);
         boat_context.fillText(cargo_string, BOAT_WIDTH - (82 + width), grid_y + 50);

         // Goto Button
         boat_context.fillStyle = "white";
         boat_context.strokeStyle = "rgba(85,85,85,1)";
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
      boat_context.fillStyle = "rgba(185,185,185,1)";
      boat_context.fillRect( BOAT_INNER_X, BOAT_INNER_Y, BOAT_INNER_WIDTH, BOAT_INNER_HEIGHT);
      boat_context.fillStyle = "rgba(235,235,235,1)";
      boat_context.fillRect( BOAT_INNER_X + 5, BOAT_INNER_Y + 5, BOAT_INNER_WIDTH - 10, BOAT_INNER_HEIGHT - 10);
   }

   var boat = boats[ my_boats[boat_selection] ];
   var place = map[boat.x][boat.y].place;
   if ((boat_menu === 4 || boat_menu === 5) && place === undefined) {
      // Draw 'At Sea'
      boat_context.fillStyle = "rgba(155,155,255,1)";
      fitText( boat_context, "At Sea", BOAT_INNER_X, BOAT_INNER_X + BOAT_INNER_WIDTH, BOAT_INNER_Y + (BOAT_INNER_HEIGHT / 2) - 30, 40, '40px arial', true );

   } else if (boat_menu === 3 || boat_menu === 4) {
      // Cargo menu
      var x = BOAT_INNER_X + 10, y = BOAT_INNER_Y + 10;
      var x_divider = BOAT_INNER_X + 10 + (70 * 4) + BOAT_SCROLLBAR_WIDTH;
      var relevant_cargo = boat.cargo;
      if (boat_menu === 4) relevant_cargo = places[ place ].stock;
      var selection = boat.cargo_selected;
      if (boat_menu === 4) selection = places[place].stock_selected;

      for (var cargo_id in relevant_cargo) {
         var count = boat.cargo[cargo_id];
         if (boat_menu === 4) count = places[place].stock[cargo_id];

         if (count === 0 || !count) continue;

         var name = cargo_index[cargo_id].name;


         if (cargo_id === selection) {
            boat_context.fillStyle = "rgba(185,185,185,1)";
            boat_context.fillRect( x, y, 60, 60 );
         }
         boat_context.strokeStyle = "rgba(85,85,85,1)";
         boat_context.lineWidth = '2';
         boat_context.strokeRect( x, y, 60, 60 );

         // Draw image
         var img = cargo_index[cargo_id].image;
         if (img)
            boat_context.drawImage( img, x, y );

         // Draw count
         var count_str = String(count);
         var count_width = count_str.width("14pt arial");
            
         boat_context.fillStyle = 'white';
         boat_context.fillRect( x + 58 - count_width, y + 62 - 18, count_width + 4, 18 )
         boat_context.strokeRect( x + 58 - count_width, y + 62 - 18, count_width + 4, 18 )

         boat_context.fillStyle = 'black';
         boat_context.font = '14pt arial';
         boat_context.fillText( count_str, x + 60 - count_width, y + 60 );

         x += 70;
         if (x + 60 > x_divider) {
            x = BOAT_INNER_X + 10;
            y += 70;
         }
      }

      // Info pane
      boat_context.fillStyle = 'rgba(185,185,185,1)';
      boat_context.fillRect( x_divider, BOAT_INNER_Y, 5, BOAT_INNER_HEIGHT );

      if (selection) {
         var the_cargo = cargo_index[selection];
         if (the_cargo) {
            var img = the_cargo.image;
            if (img)
               boat_context.drawImage( img, ((x_divider + BOAT_INNER_X + BOAT_INNER_WIDTH) / 2) - 30, BOAT_INNER_Y + 10 );

            boat_context.fillStyle = 'black';
            fitText( boat_context, the_cargo.name, x_divider + 10, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, BOAT_INNER_Y + 70, 20, '16pt arial', true );

            var y = fitText( boat_context, the_cargo.desc, x_divider + 10, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, BOAT_INNER_Y + 100, 20, '12pt serif', true );
            y += 10;

            // Properties
            if (the_cargo.foodvalue) {
               boat_context.fillStyle = 'green';
               y = fitText( boat_context, 'edible', x_divider + 10, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y, 20, 'Bold 12pt serif', true );
            }
            y += 10;
            // Weigh-in
            boat_context.fillStyle = 'rgba(85,85,85,1)';
            var weight_str = 'Weight: ' + Math.floor(the_cargo.weight) + '.' + Math.floor((the_cargo.weight * 10) % 10) + ' lb';
            if (selection === 'coins') weight_str = 'Weight: 0.01 lb';
            y = fitText( boat_context, weight_str, x_divider + 10, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y, 20, '12pt serif', true );

            // Actions
            boat_context.fillStyle = 'rgba(85,85,85,1)';
            if (boat_menu === 3)
               boat_context.fillRect( x_divider + 15, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 39, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 30, 28 );
            boat_context.fillRect( x_divider + 15, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 75, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 30, 28 );
            if (boat_menu === 3 && place !== undefined && selection !== 'coins')
               boat_context.fillRect( x_divider + 15, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 111, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 30, 28 );


            boat_context.fillStyle = 'white';
            if (boat_menu === 3)
               boat_context.fillRect( x_divider + 17, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 37, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 34, 24 );
            boat_context.fillRect( x_divider + 17, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 73, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 34, 24 );
            if (boat_menu === 3 && place !== undefined && selection !== 'coins')
               boat_context.fillRect( x_divider + 17, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 109, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 34, 24 );

            boat_context.fillStyle = 'black';
            if (boat_menu === 3) {
               if (place !== undefined && selection !== 'coins') {
                  var sell_price = Math.round( places[place].getPrice( selection ) );
                  var sell_str = 'Sell (' + sell_price + ')';
                  fitText( boat_context, sell_str, x_divider + 18, BOAT_INNER_X + BOAT_INNER_WIDTH - 18, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 110, 20, '20px arial', true);
               }

               fitText( boat_context, 'Discard 1', x_divider + 18, BOAT_INNER_X + BOAT_INNER_WIDTH - 18, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 74, 20, '20px arial', true);
               fitText( boat_context, 'Discard All', x_divider + 18, BOAT_INNER_X + BOAT_INNER_WIDTH - 18, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 38, 20, '20px arial', true);
            } else {
               boat_context.fillStyle = 'black';

               var buy_price = Math.round( places[place].getPrice( selection ) * 1.2 );
               var buy_str = 'Buy (' + buy_price + ')';
               fitText( boat_context, buy_str, x_divider + 18, BOAT_INNER_X + BOAT_INNER_WIDTH - 18, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 74, 20, '20px arial', true);
               if (boat.cargo['coins'] < buy_price) {
                  boat_context.strokeStyle = 'rgba(85,85,85,1)';
                  boat_context.beginPath();
                  boat_context.moveTo( x_divider + 16, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 74 );
                  boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 16, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 48 );
                  boat_context.moveTo( x_divider + 16, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 48 );
                  boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 16, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 74 );
                  boat_context.stroke();

                  boat_context.fillStyle = 'rgba(235,0,0,1)';
                  //boat_context.fillRect( x_divider + 30, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 62, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 60, 2 );
               }
               fitText( boat_context, 'Coins: ' + boat.cargo['coins'], x_divider + 18, BOAT_INNER_X + BOAT_INNER_WIDTH - 18, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 39, 20, '20px arial', true);
            }
         }
      }

   } else if (boat_menu === 2) {
      // Sailing menu
      // Split it up first
      boat_context.fillStyle = "rgba(185,185,185,1)";
      boat_context.fillRect( BOAT_INNER_X_MID, BOAT_INNER_Y + 30, 5, BOAT_INNER_HEIGHT - 30);
      boat_context.fillRect( BOAT_INNER_X_MID - 21, BOAT_INNER_Y, 47, 40);
      boat_context.fillStyle = "rgba(235,235,235,1)";
      boat_context.fillRect( BOAT_INNER_X_MID - 16, BOAT_INNER_Y + 5, 37, 30);
      // Goto Button
      boat_context.fillStyle = "white";
      boat_context.strokeStyle = "rgba(85,85,85,1)";
      boat_context.lineWidth = '3';
      boat_context.beginPath();
      boat_context.moveTo( BOAT_INNER_X_MID - 13, BOAT_INNER_Y + 13 );
      boat_context.lineTo( BOAT_INNER_X_MID + 6, BOAT_INNER_Y + 13 );
      boat_context.lineTo( BOAT_INNER_X_MID + 6, BOAT_INNER_Y + 9 );
      boat_context.lineTo( BOAT_INNER_X_MID + 17, BOAT_INNER_Y + 20 );
      boat_context.lineTo( BOAT_INNER_X_MID + 6, BOAT_INNER_Y + 31 );
      boat_context.lineTo( BOAT_INNER_X_MID + 6, BOAT_INNER_Y + 27 );
      boat_context.lineTo( BOAT_INNER_X_MID - 13, BOAT_INNER_Y + 27 );
      boat_context.fill();
      boat_context.stroke();


      // Titles
      boat_context.font = "16pt arial";
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
      boat_context.strokeStyle = "rgba(85,85,85,1)";
      boat_context.lineWidth = '3';
      if (boat.nav_islands_clockwise === true)
         boat_context.strokeRect( BOAT_INNER_X_MID - 59, BOAT_INNER_Y + 80, 50, 50 ); 
      else 
         boat_context.strokeRect( BOAT_INNER_X_MID - 59, BOAT_INNER_Y + 135, 50, 50 ); 
      boat_context.drawImage( island_nav_c_img, BOAT_INNER_X_MID - 60, BOAT_INNER_Y + 80 );
      boat_context.drawImage( island_nav_cc_img, BOAT_INNER_X_MID - 60, BOAT_INNER_Y + 135 );

      boat_context.fillStyle = 'black';
      fitText( boat_context, 'Fully Explore Islands', 
            BOAT_INNER_X + 15, BOAT_INNER_X_MID - 45, 
            BOAT_INNER_Y + 240, 17, '17px arial', false );

      fitText( boat_context, 'Stop at Next Town', 
            BOAT_INNER_X + 15, BOAT_INNER_X_MID - 45, 
            BOAT_INNER_Y + 285, 17, '17px arial', false );

      boat_context.fillStyle = 'white';
      boat_context.strokeStyle = 'black';
      boat_context.lineWidth = '2';
      boat_context.fillRect( BOAT_INNER_X_MID - 35, BOAT_INNER_Y + 240, 20, 20 );
      boat_context.strokeRect( BOAT_INNER_X_MID - 35, BOAT_INNER_Y + 240, 20, 20 );
      if (boat.explore_mod & 1) {
         boat_context.beginPath();
         boat_context.moveTo( BOAT_INNER_X_MID - 35, BOAT_INNER_Y + 240 );
         boat_context.lineTo( BOAT_INNER_X_MID - 15, BOAT_INNER_Y + 260 );
         boat_context.moveTo( BOAT_INNER_X_MID - 35, BOAT_INNER_Y + 260 );
         boat_context.lineTo( BOAT_INNER_X_MID - 15, BOAT_INNER_Y + 240 );
         boat_context.stroke();
      }
      boat_context.fillStyle = 'white';
      boat_context.fillRect( BOAT_INNER_X_MID - 35, BOAT_INNER_Y + 285, 20, 20 );
      boat_context.strokeRect( BOAT_INNER_X_MID - 35, BOAT_INNER_Y + 285, 20, 20 );
      if (boat.explore_mod & 2) {
         boat_context.beginPath();
         boat_context.moveTo( BOAT_INNER_X_MID - 35, BOAT_INNER_Y + 285 );
         boat_context.lineTo( BOAT_INNER_X_MID - 15, BOAT_INNER_Y + 305 );
         boat_context.moveTo( BOAT_INNER_X_MID - 35, BOAT_INNER_Y + 305 );
         boat_context.lineTo( BOAT_INNER_X_MID - 15, BOAT_INNER_Y + 285 );
         boat_context.stroke();
      }

      var button_str = 'Explore';
      var button_pressed = false;
      if (boat.sail_style === 0 || boat.sail_style === 1) {
         button_str = 'Exploring...';
         button_pressed = true;
      }
      textButton( boat_context, 
            BOAT_INNER_X + (BOAT_INNER_WIDTH / 4), BOAT_INNER_Y + BOAT_INNER_HEIGHT - 40, 
            button_str, 18, '18pt arial', button_pressed );

      // Journey

      // Write out destination_list, and highlight the selected one
      fitText( boat_context, 'Destinations:',
         BOAT_INNER_X_MID + 10, BOAT_INNER_X + BOAT_INNER_WIDTH,
         BOAT_INNER_Y + 47, 13, '13pt arial', false );

      var y = BOAT_INNER_Y + 69;
      boat_context.fillStyle = "rgba(215,215,215,1)";
      boat_context.fillRect( BOAT_INNER_X_MID + 20, y - 3, (BOAT_INNER_WIDTH / 2) - 40, 19 * 12 );

      boat_context.fillStyle = 'black';
      for( var i = 0; i < destination_list.length && i < 12; ++i ) {
         var place_num = destination_list[i + destination_scroll];
         if (i + destination_scroll === destination_selection) {
            boat_context.fillStyle = "rgba(200,200,200,1)";
            boat_context.fillRect( BOAT_INNER_X_MID + 20, y - 3, (BOAT_INNER_WIDTH / 2) - 40, 19 );
            boat_context.fillStyle = 'black';
         }
         fitText( boat_context, places[place_num].name,
            BOAT_INNER_X_MID + 24, BOAT_INNER_X + BOAT_INNER_WIDTH,
            y, 12, '12pt arial', false );
         y += 19;
      }

      if (destination_list.length > 12) {
         // Draw scrollbar
         boat_context.fillStyle = "rgba(175,175,175,1)";
         boat_context.fillRect( BOAT_INNER_X + BOAT_INNER_WIDTH - 36, BOAT_INNER_Y + 66, 16, 19 * 12 );

         // Arrows
         boat_context.fillStyle = "rgba(235,235,235,1)";
         boat_context.beginPath();
         boat_context.moveTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 36 + 2, BOAT_INNER_Y + 66 + 14 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 36 + 14, BOAT_INNER_Y + 66 + 14 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 36 + 8, BOAT_INNER_Y + 66 + 2 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 36 + 2, BOAT_INNER_Y + 66 + 14 );
         boat_context.fill();

         boat_context.beginPath();
         boat_context.moveTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 36 + 2, BOAT_INNER_Y + 66 + (19 * 12) - 14 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 36 + 14, BOAT_INNER_Y + 66 + (19 * 12) - 14 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 36 + 8, BOAT_INNER_Y + 66 + (19 * 12) - 2 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 36 + 2, BOAT_INNER_Y + 66 + (19 * 12) - 14 );
         boat_context.fill();

         // Bar
         var bar_slots = ( destination_list.length - 11 );
         var bar_size = (( 19 * 12 ) - ( 2 * 18 )) / bar_slots;
         var bar_position_y = (destination_scroll * bar_size) + BOAT_INNER_Y + 66 + 18;
         boat_context.fillRect( BOAT_INNER_X + BOAT_INNER_WIDTH - 36 + 3, bar_position_y, 10, bar_size );
      }

      // Manual coordinate entry
      // E
      boat_context.fillStyle = "black";
      boat_context.fillRect( BOAT_INNER_X_MID + 20, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 90, 60, 26 );
      boat_context.fillStyle = "white";
      boat_context.fillRect( BOAT_INNER_X_MID + 22, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 88, 56, 22 );
      if (text_box_selection === 'coords E') {
         boat_context.fillStyle = "red";
         boat_context.fillRect( BOAT_INNER_X_MID + 22, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 88, 7, 22 );
         boat_context.fillRect( BOAT_INNER_X_MID + 71, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 88, 7, 22 );
      }

      boat_context.fillStyle = "black";
      var journey_x_str = (boat.journey_x === -1)?'?':'' + boat.journey_x;
      fitText( boat_context, journey_x_str,
         BOAT_INNER_X_MID + 20, BOAT_INNER_X_MID + 80, 
         BOAT_INNER_Y + BOAT_INNER_HEIGHT - 86, 16, '16pt arial', true );
      boat_context.fillText( "E", BOAT_INNER_X_MID + 83,
                                  BOAT_INNER_Y + BOAT_INNER_HEIGHT - 70 );
      // S
      boat_context.fillStyle = "black";
      boat_context.fillRect( BOAT_INNER_X_MID + 106, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 90, 60, 26 );
      boat_context.fillStyle = "white";
      boat_context.fillRect( BOAT_INNER_X_MID + 108, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 88, 56, 22 );
      if (text_box_selection === 'coords S') {
         boat_context.fillStyle = "red";
         boat_context.fillRect( BOAT_INNER_X_MID + 108, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 88, 7, 22 );
         boat_context.fillRect( BOAT_INNER_X_MID + 157, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 88, 7, 22 );
      }
      boat_context.fillStyle = "black";
      var journey_y_str = (boat.journey_y === -1)?'?':'' + boat.journey_y;
      fitText( boat_context, journey_y_str,
         BOAT_INNER_X_MID + 106, BOAT_INNER_X_MID + 166, 
         BOAT_INNER_Y + BOAT_INNER_HEIGHT - 86, 16, '16pt arial', true );
      boat_context.fillText( "S", BOAT_INNER_X_MID + 169,
                                  BOAT_INNER_Y + BOAT_INNER_HEIGHT - 70 );

      button_pressed = false;
      button_str = 'Sail';
      if (boat.sail_style === 2 || boat.sail_style === 3) {
         button_str = 'Sailing...';
         button_pressed = true;
      } else if (boat.sail_style === 4) {
         button_str = 'Sail Where?';
      }
      textButton( boat_context, 
            BOAT_INNER_X + (3 * (BOAT_INNER_WIDTH / 4)), BOAT_INNER_Y + BOAT_INNER_HEIGHT - 40, 
            button_str, 18, '18pt arial', button_pressed );
      
      // Goto Button
      boat_context.fillStyle = "white";
      boat_context.strokeStyle = "rgba(85,85,85,1)";
      boat_context.lineWidth = '3';
      boat_context.beginPath();
      boat_context.moveTo( BOAT_INNER_X_MID + 203 - 13, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 97 + 13 );
      boat_context.lineTo( BOAT_INNER_X_MID + 203 + 6, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 97 + 13 );
      boat_context.lineTo( BOAT_INNER_X_MID + 203 + 6, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 97 + 9 );
      boat_context.lineTo( BOAT_INNER_X_MID + 203 + 17, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 97 + 20 );
      boat_context.lineTo( BOAT_INNER_X_MID + 203 + 6, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 97 + 31 );
      boat_context.lineTo( BOAT_INNER_X_MID + 203 + 6, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 97 + 27 );
      boat_context.lineTo( BOAT_INNER_X_MID + 203 - 13, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 97 + 27 );
      boat_context.fill();
      boat_context.stroke();

   } else if (boat_menu >= 5) {
      if (place === 0) {
         // Special 'talk to dad' section, wherein plot + goals

         // Draw yer old man
         boat_context.drawImage( oldman_img, BOAT_INNER_X + 20, BOAT_INNER_Y + 90 );
         boat_context.fillStyle = "black";
         fitText( boat_context, 'The Old Man', BOAT_INNER_X + 20, BOAT_INNER_X + 162, BOAT_INNER_Y + 260, 26, '22pt arial', true );

         // Quest text
         // TODO: Images of quest goals
         if (quest_status === 0) {

            var quest_text = "Ah my child, just who I was looking for! I'm getting a bit old now, so it's up to you to take our bananas to market.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 80, 18, '13pt arial', true );

            quest_text = "Use the 'Sail' menu to navigate to Market Town, and then sell the bananas from the 'Cargo' menu. Then maybe buy two softwood from the 'Market' so I can fix that hole in our roof.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            y = fitText( boat_context, "Hurry back!", BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 1) {
            var quest_text = "Hoho! Well done kiddo!";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 70, 18, '13pt arial', true );
            quest_text = "You're a pretty savvy trader. You know you can make good money by buying goods where they're abundant and then selling them where they're lacking. The cartographer in Market Town can tell you where to find other towns.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "Here, take some more bananas and bring back five different kinds of food. We'll have a proper meal for a change!";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 2) {
            var quest_text = "Ah that was delicious. But we can't rest on our laurels.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 70, 18, '13pt arial', true );
            quest_text = "There's a lot of work to be done to fix this place up. I think there are some towns that produce tools, if not you'll have to stimulate their economy until they learn how.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "I think three stone tools will do it, or a single metal tool if you can find one.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 3) {
            var quest_text = "Oh this is perfect! Thanks kiddo.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 70, 18, '13pt arial', true );
            quest_text = "What would really improve our situation though: some animals. If you bring me a pair of animals, I'll get them to start breeding. Though you may need a bigger boat if you want to carry a big animal.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "I think two breeding pairs of animals should be enough to get us started. Get to it!";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 4) {
            var quest_text = "Hey, nice. We'll have a proper farm soon at this rate.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 70, 18, '13pt arial', true );
            quest_text = "Though, to be honest, all this work is taking its toll on me. I'd really appreciate if you could find me a nice bed. A town with decent carpenters should be able to make one. Oh, and how about a couple of downy pillows?";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "I'm counting on you - I'm an old man after all.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 5) {
            var quest_text = "Great, great, just what I needed.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 70, 18, '13pt arial', true );
            quest_text = "Hey listen, you're something of a traveller now right? Well I've heard tell of some interesting foods I'd like to try. What do you say?";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "Can you could find me five each of " + quest_goals[0] + ", " + quest_goals[1] + ", " + quest_goals[2] + ", " + quest_goals[3] + ", and " + quest_goals[4] + "? We'll have a bit of a feast, it'll be fun.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 6) {
            var quest_text = "Ah that hit the spot. Good work kiddo.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 70, 18, '13pt arial', true );
            quest_text = "I'm getting to know my way around these foreign foods pretty well, but to tell the truth the kitchen here is pretty lousy. Hey, why don't you bring some stuff to spruce it up?";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "A nice new table with four chairs to start, I think. Oh, and you know what would be perfect - a granite countertop. Bring me four slabs of granite and a two sets of metal tools and I'll handle the rest.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 7) {
            var quest_text = "That's great, thanks. I'll just get some of the servants to refurbish the kitchen, you'll love what we're doing with the place.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 60, 18, '13pt arial', true );
            quest_text = "There's one problem though. The house is looking great, but I'm embarrassed to have people over looking the way I do. Could you go get a me a new wardrobe?";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "I think two pairs of pants, two shirts, and a nice suit should be sufficient. Oh, and while you're at it a few obsidian figurines would be great - a house isn't a house without some art to spice it up.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 8) {
            var quest_text = "Ah I look fantastic! This calls for a celebration.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 70, 18, '13pt arial', true );
            quest_text = "I trust I can rely on you to get what we need. Food-wise, I think ten each of " + quest_goals[0] + ", " + quest_goals[1] + ", " + quest_goals[2] + ", " + quest_goals[3] + ", and " + quest_goals[4] + ". And for meat we'll need four each of " + quest_goals[5] + ", " + quest_goals[6] + ", " + quest_goals[7] + ", and " + quest_goals[8] + ". Also five bags of salt and spice.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "Well? What are you waiting for?";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 9) {
            var quest_text = "Finally, you're here. The guests are waiting, you know. Did you bring everything? Yes?";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 70, 18, '13pt arial', true );
            quest_text = "Look, just give it to the servants, and try to stay out of the way. The kids' table is over there.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "Don't worry, there's plenty of juice to go around.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            y = fitText( boat_context, "THE END", BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 20, '15pt arial', true );

         }
      } else {
         // TODO: Town menu
         // Should be mostly information and some services
         // Information:
         // - Town name
         // - Size of various industries
         // - What sort of things they need to upgrade those industries
         // - Locations of nearby towns
         // - Flavor stuff
         // Possible Services:
         // - Buy a boat (boat_menu === 6)
         // - Rename a boat (boat_menu === 7)
         // - Buy map (boat_menu === 8)

      }
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
      boat_context.fillStyle = "rgba(205,205,205,1)";
      if (header_index === boat_menu)
         boat_context.fillStyle = "rgba(235,235,235,1)";
      boat_context.fill();
      header_index++;
   }

   boat_context.fillStyle = "black";
   boat_context.font = "12pt arial";
   boat_context.fillText( "1 - Boats", 10, BOAT_HEADER_HEIGHT - 4 );
   boat_context.fillText( "2 - Sail", 120, BOAT_HEADER_HEIGHT - 4 );
   boat_context.fillText( "3 - Cargo", 230, BOAT_HEADER_HEIGHT - 4 );
   boat_context.fillText( "4 - Market", 340, BOAT_HEADER_HEIGHT - 4 );
   boat_context.fillText( "5 - Town", 450, BOAT_HEADER_HEIGHT - 4 );

}

function clearBoats()
{
   boat_context.clearRect( 0, 0, BOAT_WIDTH, BOAT_HEIGHT );
   boat_context.fillStyle = "rgba(235,235,235,1)";
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

   text_box_selection = '';
   var boat = boats[ my_boats[boat_selection] ];
   var place = map[boat.x][boat.y].place;

   if (y_pix < BOAT_HEADER_HEIGHT) {
      changeBoatMenu( Math.ceil(x_pix / 110) );
   } 
   else if (x_pix > BOAT_SCROLLBAR_WIDTH &&
         (x_pix < BOAT_SCROLLBAR_WIDTH + 90 || (boat_menu === 1 && x_pix < BOAT_WIDTH - 80))
         && y_pix > BOAT_HEADER_HEIGHT + 10)
   { // Select a boat
      var selection = Math.floor((y_pix - (BOAT_HEADER_HEIGHT + 10) ) / 70) + boat_scroll;
      if (selection < my_boats.length) {
         selectBoat( selection + boat_scroll );
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
   else if ((boat_menu === 4 || boat_menu === 5) && place === undefined) {
      // Maybe some splash effects here
   }
   else if (boat_menu === 3 || boat_menu === 4)
   {
      var x_divider = BOAT_INNER_X + 10 + (70 * 4) + BOAT_SCROLLBAR_WIDTH;
      if (x_pix > x_divider + 18 && x_pix < BOAT_INNER_X + BOAT_INNER_WIDTH - 18) {
         // In info pane
         if (boat_menu === 3) {
            if (boat.cargo_selected !== '') {
               if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 110 
                && y_pix < BOAT_INNER_Y + BOAT_INNER_HEIGHT - 110 + 28 
                && place !== undefined) {
                  boat.sellCargo( boat.cargo_selected, 1 );
                  if (boat.cargo[ boat.cargo_selected ] === 0)
                     boat.cargo_selected = '';
                  refresh();
               } else if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 75 
                && y_pix < BOAT_INNER_Y + BOAT_INNER_HEIGHT - 75 + 28 ) {
                  boat.addCargo( boat.cargo_selected, -1 ); // discard 1
                  if (boat.cargo[ boat.cargo_selected ] === 0)
                     boat.cargo_selected = '';
                  refresh();
               } else if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 39 
                     && y_pix < BOAT_INNER_Y + BOAT_INNER_HEIGHT - 39 + 28 ) {
                  boat.addCargo( boat.cargo_selected, -boat.cargo[boat.cargo_selected] ); // discard all
                  boat.cargo_selected = '';
                  refresh();
               }
            }
         } else {
            if (places[place].stock_selected !== '') {
               if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 75 
                && y_pix < BOAT_INNER_Y + BOAT_INNER_HEIGHT - 75 + 28) {
                  boat.buyCargo( places[place].stock_selected, 1 );
                  if (places[place].stock[ places[place].stock_selected ] === 0)
                     places[place].stock_selected = '';
                  refresh();
               }
            }
         }
      } else {
         var x_box = Math.floor((x_pix - (BOAT_INNER_X + 5)) / 70);
         var y_box = Math.floor((y_pix - (BOAT_INNER_Y + 5)) / 70);
         if (x_box >= 0 && x_box < 4 && y_box >= 0 && y_box < 5) {
            var index = x_box + (4 * y_box);
            var i = 0;
            var cargo = boat.cargo;
            if (boat_menu === 4) cargo = places[place].stock;
            for (var cargo_id in cargo) {
               if (!cargo[cargo_id] || cargo[cargo_id] === 0)
                  continue;

               if (i === index) {
                  if (boat_menu === 3) boat.cargo_selected = cargo_id;
                  else if (boat_menu === 4) places[place].stock_selected = cargo_id;
                  refresh();
                  break;
               }
               else
               {
                  ++i;
               }
            }
         }
      }

   }
   else if (boat_menu === 2)
   {
      var nav_x = x_pix - (BOAT_INNER_X + BOAT_NAV_CENTER_X);
      var nav_y = y_pix - (BOAT_INNER_Y + BOAT_NAV_CENTER_Y);
      if ( x_pix > ( BOAT_INNER_X_MID - 20 ) &&
           x_pix < ( BOAT_INNER_X_MID + 20 ) &&
           y_pix > ( BOAT_INNER_Y + 5 ) &&
           y_pix < ( BOAT_INNER_Y + 35 ) ) {
         moveMap( boat.x, boat.y, map_zoom_level );
      } else if ( (nav_x * nav_x) + (nav_y * nav_y) < 625 ) {
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
      } else if ( x_pix > (BOAT_INNER_X_MID - 59) 
               && x_pix < (BOAT_INNER_X_MID - 9) 
               && y_pix > (BOAT_INNER_Y + 80) && y_pix < (BOAT_INNER_Y + 130) ) {
         boat.nav_islands_clockwise = true;
         boat.decideNext();
      } else if ( x_pix > (BOAT_INNER_X_MID - 59) 
               && x_pix < (BOAT_INNER_X_MID - 9) 
               && y_pix > (BOAT_INNER_Y + 135) && y_pix < (BOAT_INNER_Y + 185) ) {
         boat.nav_islands_clockwise = false;
         boat.decideNext();
      } else if ( x_pix >= BOAT_INNER_X + 30 && x_pix <= BOAT_INNER_X + 200 &&
                  y_pix >= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 50 &&
                  y_pix <= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 20) {
         if (boat.sail_style === 0 || boat.sail_style === 1)
            boat.changeSailStyle( -1 );
         else
            boat.changeSailStyle( 0 );
      } else if ( x_pix >= BOAT_INNER_X_MID - 35 &&
                  x_pix <= BOAT_INNER_X_MID - 15 &&
                  y_pix >= BOAT_INNER_Y + 240 && y_pix <= BOAT_INNER_Y + 260) {
         if (boat.explore_mod & 1)
            boat.explore_mod &= 0xe;
         else
            boat .explore_mod|= 0x1;
      } else if ( x_pix >= BOAT_INNER_X_MID - 35 &&
                  x_pix <= BOAT_INNER_X_MID - 15 &&
                  y_pix >= BOAT_INNER_Y + 285 && y_pix <= BOAT_INNER_Y + 305) {
         if (boat.explore_mod & 2)
            boat.explore_mod &= 0xd;
         else
            boat.explore_mod |= 0x2;
      } else if ( x_pix >= BOAT_INNER_X_MID + 35 && 
                  x_pix <= BOAT_INNER_X_MID + 195 &&
                  y_pix >= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 50 &&
                  y_pix <= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 20) {
         if (boat.sail_style >= 2)
            boat.changeSailStyle( -1 );
         else {
            if (boat.journey_x !== -1 && boat.journey_y !== -1)
               boat.changeSailStyle( 2 );
            else
               boat.changeSailStyle( 4 );
         }
      } else if ( x_pix > ( BOAT_INNER_X_MID + 20 ) &&
                  x_pix < ( BOAT_INNER_X_MID + 80 ) &&
                  y_pix > ( BOAT_INNER_Y + BOAT_INNER_HEIGHT - 90 ) &&
                  y_pix < ( BOAT_INNER_Y + BOAT_INNER_HEIGHT - 64 ) ) {
         text_box_selection = 'coords E';
         boat.journey_x = -1;
         boat.changeSailStyle( -1 );
         selectDestination( -1 );
      } else if ( x_pix > ( BOAT_INNER_X_MID + 106 ) &&
                  x_pix < ( BOAT_INNER_X_MID + 166 ) &&
                  y_pix > ( BOAT_INNER_Y + BOAT_INNER_HEIGHT - 90 ) &&
                  y_pix < ( BOAT_INNER_Y + BOAT_INNER_HEIGHT - 64 ) ) {
         text_box_selection = 'coords S';
         boat.journey_y = -1;
         boat.changeSailStyle( -1 );
         selectDestination( -1 );
      } else if ( x_pix > ( BOAT_INNER_X_MID + 20 ) &&
                  x_pix < ( BOAT_INNER_X + BOAT_INNER_WIDTH - 20 ) &&
                  y_pix > ( BOAT_INNER_Y + 66 ) &&
                  y_pix < ( BOAT_INNER_Y + 66 + (19 * 12)) ) {
         if (destination_list.length > 12 &&
               x_pix > ( BOAT_INNER_X + BOAT_INNER_WIDTH - 36)) {
            // Scrollbar
            if (y_pix < ( BOAT_INNER_Y + 66 + 18 )) {
               scrollDestinations( -1 );
            } else if (y_pix > ( BOAT_INNER_Y + 66 + (19 * 12) - 18)) {
               scrollDestinations( 1 );
            } else {
               var bar_slots = ( destination_list.length - 11 );
               var bar_size = (( 19 * 12 ) - ( 2 * 18 )) / bar_slots;
               var selected_scroll = Math.floor((y_pix - (BOAT_INNER_Y + 66 + 18)) / bar_size);
               destination_scroll = selected_scroll;
            }

         } else {
            var index = Math.floor( (y_pix - (BOAT_INNER_Y + 66)) / 19 );
            selectDestination( index );
         }
      } else if ( x_pix > ( BOAT_INNER_X_MID + 190 ) &&
                  x_pix < ( BOAT_INNER_X_MID + 220 ) &&
                  y_pix > ( BOAT_INNER_Y + BOAT_INNER_HEIGHT - 90 ) &&
                  y_pix < ( BOAT_INNER_Y + BOAT_INNER_HEIGHT - 64 ) ) {
         if (boat.journey_x !== -1 && boat.journey_y !== -1)
            moveMap( boat.journey_x, boat.journey_y, map_zoom_level );
      }


      refresh();
   }
}
$('#boat_canvas').click( onClickBoats ); 

function onMouseWheelBoats( e ) {
   var delta = 0;
   if (!e) /* For IE. */
      e = window.e;
   if (e.wheelDelta) { /* IE/Opera. */
      delta = e.wheelDelta/120;
   } else if (e.detail) { /** Mozilla case. */
      /** In Mozilla, sign of delta is different than in IE.
       * Also, delta is multiple of 3.
       */
       delta = -e.detail/3;
   }

   var x_pix = e.pageX - boat_canvas.offsetLeft;
   var y_pix = e.pageY - boat_canvas.offsetTop;
   if ( x_pix > ( BOAT_INNER_X_MID + 20 ) &&
        x_pix < ( BOAT_INNER_X + BOAT_INNER_WIDTH - 20 ) &&
        y_pix > ( BOAT_INNER_Y + 66 ) &&
        y_pix < ( BOAT_INNER_Y + 66 + (19 * 12)) &&
        destination_list.length > 12) {
      scrollDestinations( -delta );
      refresh();
   }
}
if (boat_canvas.addEventListener) {
	// IE9, Chrome, Safari, Opera
	boat_canvas.addEventListener("mousewheel", onMouseWheelBoats, false);
	// Firefox
	boat_canvas.addEventListener("DOMMouseScroll", onMouseWheelBoats, false);
}
// IE 6/7/8
else boat_canvas.attachEvent("onmousewheel", onMouseWheelBoats);

/////////////////////////////////////////////////////////////////////
// Map ---

// Functionality --

function validatePlace( place ) {
   // Relies on place map - see above

   return 0;
}

function MapLoc( ter )
{
   this.terrain = ter;
   this.discovered = false;
   this.visible = false;
}

function loadMap( map_str )
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

function addBoatVision( x, y )
{
   for (var i = x - 4; i <= x + 4; ++i) {
      if (i < 0) continue;
      if (i >= MAP_WIDTH) break;
      for (var j = y - 4; j <= y + 4; ++j) {
         if (j < 0) continue;
         if (j >= MAP_WIDTH) break;
         if ((j === y - 4 || j === y + 4) && (i === x - 4 || i === x + 4)) continue; // skip corners
         map[i][j].discovered = true;
         map[i][j].visible = true;
         if (map[i][j].place !== undefined)
            places[map[i][j].place].discovered = true;
      }
   }
}

function updateVision()
{
   for (var x = 0; x < MAP_WIDTH; ++x) {
      for (var y = 0; y < MAP_HEIGHT; ++y) {
         map[x][y].visible = false;
      }
   }

   for (var i = 0; i < my_boats.length; ++i)
      addBoatVision( boats[my_boats[i]].x, boats[my_boats[i]].y );
}

var astar_map = [];
function astar( x1, y1, x2, y2 )
{
   astar_map = new Array( MAP_WIDTH );
   for (var x = 0; x < MAP_WIDTH ; ++x) {
      astar_map[x] = new Array( MAP_HEIGHT );
      for (var y = 0; y < MAP_HEIGHT ; ++y) {
         var closeness = calculateDistanceMetric( x2 - x, y2 - y );
         astar_map[x][y] = { heur: closeness, dist: -1, dir: -1, vis: false };
      }
   }
   astar_map[x1][y1].dist = 0;
   astar_map[x1][y1].dir = -2;

   var openNodes = new Heap( function( node1, node2 ) {
      return ( (astar_map[node1[0]][node1[1]].heur + astar_map[node1[0]][node1[1]].dist) - 
               (astar_map[node2[0]][node2[1]].heur + astar_map[node2[0]][node2[1]].dist) );
   });
   openNodes.push( [ x1, y1 ] );

   var complete = false;
   while( !openNodes.empty() ) {
      var node = openNodes.pop();
      var data = astar_map[node[0]][node[1]];

      if (data.vis)
         continue; // Skip already visited nodes

      data.vis = true;

      if (node[0] === x2 && node[1] === y2) {
         // Destination reached
         complete = true;
         break;
      }

      var node_ter = map[node[0]][node[1]].terrain;
      var ter_start = terGetStart( node_ter ), ter_end = terGetEnd( node_ter );
      for (var dir = 0; dir <= 7; ++dir) {
         if ( (dir > ter_start && dir < ter_end) ||
              (dir > ter_start && ter_end < ter_start) ||
              (dir < ter_end && ter_end < ter_start) )
            continue; // Inland movement

         var neighbor = addDirection( node[0], node[1], dir );
         if (neighbor[0] < 0 || neighbor[0] >= MAP_WIDTH || neighbor[1] < 0 || neighbor[1] >= MAP_HEIGHT)
            continue;

         if ( dir % 2 === 1) {
            var neighbor_ter = map[neighbor[0]][neighbor[1]].terrain;
            if (neighbor_ter !== 0 && terGetStart( neighbor_ter ) === terGetEnd( neighbor_ter ))
               continue; // Diagonal movement into full land - hard to detect
         }

         if ( !map[neighbor[0]][neighbor[1]].discovered )
            continue; // Can't plan movement through undiscovered areas

         var neighbor_data = astar_map[neighbor[0]][neighbor[1]];
         if (neighbor_data.vis)
            continue; // Already visited

         var new_distance;
         if (dir % 2 === 0)
            new_distance = data.dist + 1;
         else
            new_distance = data.dist + 1.4;

         if (neighbor_data.dist === -1 || neighbor_data.dist > new_distance) {
            neighbor_data.dist = new_distance;
            neighbor_data.dir = (dir + 4) % 8; // dir to prev
            astar_map[neighbor[0]][neighbor[1]] = neighbor_data;
            openNodes.push( neighbor );
         }
      }

      astar_map[node[0]][node[1]] = data;
   }

   if (complete === false) return [];
   else {
      // Construct path
      var path = [ ];
      var node = [ x2, y2 ];

      var cur_dir = -1;
      while ( node[0] !== x1 || node[1] !== y1 ) {
         var dir = astar_map[node[0]][node[1]].dir;

         if (dir != cur_dir) {
            path.unshift( node );
            cur_dir = dir;
         }

         node = addDirection( node[0], node[1], dir );
         node.push( (dir + 4) % 8 );
      }

      path.unshift( node );

      return path;
   }
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

function smoothIsland( x_min, y_min, x_max, y_max, ter_type )
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

   // Fill accidental holes
   for (var x = x_min; x <= x_max; ++x) {
      for (var y = y_min; y <= y_max; ++y) {
         if (map[x][y].terrain === 0) {
            var adj_count = countAdjacencies( x, y );
            if (adj_count >= 7)
               map[x][y].terrain === ter_type;
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
            map[x][y].terrain = constructTerrain( start, end, 0, terGetType(map[x][y].terrain) );
         }
      }
   }
   // TODO: Get rid of those 2x2 little islands
}

function createIsland( x_min, y_min, x_max, y_max, technique, ter_type, specify )
{
   if (technique === -1) {
      if (x_max + y_max - x_min - y_min > 40 && Math.random() > 0.7)
         technique = 2;
      else
         technique = 1;
   }

   if (x_min < 0) x_min = 0;
   if (y_min < 0) y_min = 0;
   if (x_max >= MAP_WIDTH) x_max = MAP_WIDTH - 1;
   if (y_max >= MAP_HEIGHT) y_max = MAP_HEIGHT - 1;

   if (technique === 1) {
      // Algorithm 1: Random walk edge mutations
      for (var x = x_min; x <= x_max; ++x) {
         for (var y = y_min; y <= y_max; ++y) {
            map[x][y].terrain = ter_type;
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
      smoothIsland( x_min, y_min, x_max, y_max, ter_type );
      
      // Enhance it:
      var real_island_size = 0;
      for (var x = x_min; x <= x_max; ++x) {
         for (var y = y_min; y <= y_max; ++y) {
            if (map[x][y].terrain !== 0)
               real_island_size++;
         }
      }

      // Strategy: pick a spot on the coast,
      // make an oblong shape and city-fy any land in that shape
      var num_towns = 0;
      if (specify && specify[0] !== undefined)
         num_towns = specify[0];
      else
      {
         var city_chance = (real_island_size - GEN_CITY_LAND_MIN) / GEN_CITY_CHANCE_DENOM;

         if (Math.random() < city_chance) {
            num_towns++;
            city_chance = (city_chance - 1) / 5;
            if (ter_type <= 4 && Math.random() < city_chance) {
               num_towns++;
               city_chance = (city_chance - 1) / 5;
               if (ter_type <= 2 && Math.random() < city_chance) {
                  num_towns++;
         } } }
      }

      // Find the coast, and map it
      var found = false;
      var coast_x, coast_y, coast_length = 0;
      for (x = x_min; !found && x <= x_max; ++x) {
         for (y = y_min; !found && y <= y_max; ++y) {
            if (map[x][y].terrain !== 0) {
               coast_x = x;
               coast_y = y;
               found = true;
      } } }

      if (coast_x === undefined || coast_y === undefined)
         return -5; // No land remains

      x = coast_x;
      y = coast_y;
      do {
         var next_coast = addDirection( x, y, terGetStart( map[x][y].terrain ) );
         x = next_coast[0];
         y = next_coast[1];
         coast_length++;
      } while ( !( x === coast_x && y === coast_y ) );

      var island_resources = generateResources( ter_type );
      if (num_towns === 1) {
         var coast_distance = Math.floor(Math.random() * coast_length), coast_traversed = 0;
         while (coast_traversed < coast_distance) {
            var next_coast = addDirection( x, y, terGetStart( map[x][y].terrain ) );
            x = next_coast[0];
            y = next_coast[1];
            coast_traversed++;
         }

         buildTown( x, y, island_resources );
      } else if (num_towns === 2) {
         var coast_distance1 = Math.floor(Math.random() * coast_length), 
             coast_distance2 = Math.floor(Math.random() * coast_length / 3) + (coast_length / 3), 
             coast_traversed = 0;
         while (coast_traversed < coast_distance1) {
            var next_coast = addDirection( x, y, terGetStart( map[x][y].terrain ) );
            x = next_coast[0];
            y = next_coast[1];
            coast_traversed++;
         }
         buildTown( x, y, island_resources );
         while (coast_traversed < coast_distance1 + coast_distance2) {
            var next_coast = addDirection( x, y, terGetStart( map[x][y].terrain ) );
            x = next_coast[0];
            y = next_coast[1];
            coast_traversed++;
         }
         buildTown( x, y, island_resources );
      } else if (num_towns === 3) {
         var coast_distance1 = Math.floor(Math.random() * coast_length), 
             coast_distance2 = coast_distance1 + 
                Math.floor(Math.random() * coast_length / 5) + (coast_length / 5), 
             coast_distance3 = coast_distance2 + 
                Math.floor(Math.random() * coast_length / 5) + (coast_length / 5), 
             coast_traversed = 0;
         while (coast_traversed < coast_distance1) {
            var next_coast = addDirection( x, y, terGetStart( map[x][y].terrain ) );
            x = next_coast[0];
            y = next_coast[1];
            coast_traversed++;
         }
         buildTown( x, y, island_resources );
         while (coast_traversed < coast_distance2) {
            var next_coast = addDirection( x, y, terGetStart( map[x][y].terrain ) );
            x = next_coast[0];
            y = next_coast[1];
            coast_traversed++;
         }
         buildTown( x, y, island_resources );
         while (coast_traversed < coast_distance3) {
            var next_coast = addDirection( x, y, terGetStart( map[x][y].terrain ) );
            x = next_coast[0];
            y = next_coast[1];
            coast_traversed++;
         }
         buildTown( x, y, island_resources );
      }



   } else if (technique === 2) {
      // Algorithm 2: Crescent moon with inner city
      for (var x = x_min; x <= x_max; ++x) {
         for (var y = y_min; y <= y_max; ++y) {
            map[x][y].discovered = true;
         }
      }

      // Define big ellipse and small ellipse
      var big_center_x = Math.round( (x_min + x_max) / 2 );
      var big_center_y = Math.round( (y_min + y_max) / 2 );
      var big_width = (x_max - x_min) / 2;
      var big_height = (y_max - y_min) / 2;

      var inner_width = big_width * 3 / 5;
      var inner_height = big_height * 3 / 5;
      // specify[1], if it exists, contains the direction of the opening
      var shift_dir = Math.floor( Math.random() * 8 );
      if (specify && specify[1] !== undefined)
         shift_dir = specify[1];

      var shift_amount = 0;
      if (shift_dir === 0 || shift_dir === 4)
         shift_amount = big_width / 3;
      else if (shift_dir === 2 || shift_dir === 6)
         shift_amount = big_height / 3;
      else
         shift_amount = (big_height + big_width) / 6;
      var shift_center = addDirection( big_center_x, big_center_y, shift_dir, shift_amount);
      var inner_center_x = Math.round( shift_center[0] );
      var inner_center_y = Math.round( shift_center[1] );

      // For each point in the area, check if it's in the big ellipse and not in the small one
      for (var x = x_min; x <= x_max; ++x) {
         for (var y = y_min; y <= y_max; ++y) {
            // ((x - w)^2 / (r_x)^2) + ((y - h)^2 / (r_y)^2) <= 1
            var t1 = (Math.pow((x-big_center_x),2) / (big_width * big_width));
            var t2 = (Math.pow((y-big_center_y),2) / (big_height * big_height));
            var in_big = (t1 + t2 <= 1);
            if (in_big && t1 + t2 > 0.8) {// fuzzy edges
               in_big = (Math.random() < 0.7);
            }
            if (in_big) {
               t1 = (Math.pow((x-inner_center_x),2) / (inner_width * inner_width));
               t2 = (Math.pow((y-inner_center_y),2) / (inner_height * inner_height));
               var in_inner = (t1 + t2 <= 1);
               if (in_inner && t1 + t2 > 0.8) // fuzzy edges
                  in_inner = (Math.random() < 0.7);
               if (!in_inner) {
                  map[x][y].terrain = ter_type;
               }
            }
         }
      }

      smoothIsland( x_min, y_min, x_max, y_max, ter_type );

      // Place town by shooting into the island from a direction, and stopping at first land
      var shoot_start = addDirection( big_center_x, big_center_y, shift_dir, Math.ceil(Math.min(big_width, big_height) ) );
      var shoot_dir = (shift_dir + 4) % 8;
      x = shoot_start[0];
      y = shoot_start[1];
      // Get in area
      while( x < x_min || x > x_max || y < y_min || y > y_max ) {
         shoot_start = addDirection( x, y, shoot_dir, 1 );
         x = shoot_start[0];
         y = shoot_start[1];
      }
      x = x;
      // Find land
      while( map[x][y].terrain === 0 ) {
         shoot_start = addDirection( x, y, shoot_dir, 1 );
         x = shoot_start[0];
         y = shoot_start[1];
         if ( x < x_min || x > x_max || y < y_min || y > y_max ) {
            // Error, no land encountered??
            return;
         }
      }
      // Land found!
      var island_resources = generateResources( ter_type );
      buildTown( x, y, island_resources );
   }
}

function generateMap()
{
   // Create all locations, mark not discovered
   map = new Array( MAP_WIDTH );
   for (var x = 0; x < MAP_WIDTH ; ++x) {
      map[x] = new Array( MAP_HEIGHT );
      for (var y = 0; y < MAP_HEIGHT ; ++y) {
         map[x][y] = new MapLoc( 0 );
      }
   }
   map_zoom_level = 1;

   map_center_x = 200;
   map_center_y = 210;

   // Start by custom building the home island
   for (var x = 196; x <= 204; ++x) {
      for (var y = 211; y <= 216; ++y) {
         map[x][y].discovered = true;
      }
   }
   map[198][213].terrain = 1;
   map[198][214].terrain = 1;
   map[199][212].terrain = 1;
   map[199][213].terrain = 1;
   map[199][214].terrain = 1;
   map[200][213].terrain = 1;
   map[200][214].terrain = 1;
   map[200][215].terrain = 1;
   map[201][213].terrain = 1;
   map[201][214].terrain = 1;
   smoothIsland( 198, 211, 202, 215, 1 );
   // Manually set up town
   var hometown = new Place( 'town', 'Home' );
   map[200][213].place = hometown.id;
   hometown.x = 200;
   hometown.y = 213;
   hometown.size = 1;
   hometown.color = 'white';
   places.push( hometown );

   // Then make the first major island
   createIsland( 190, 190, 210, 210, 2, 1, [1, 6] );
   places[0].discovered = true;
   places[1].discovered = true;
   // Customized
   places[1].resources.softwood = 5;
   places[1].name = "Market Town";

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
         var x_width = Math.floor(Math.random() * GEN_WIDTH_DIFF * 2) + (GEN_WIDTH_MIN * 2);
         var y_height = Math.floor(Math.random() * GEN_HEIGHT_DIFF * 2) + (GEN_HEIGHT_MIN * 2);
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

      var ter_type;
      var tropicality = (Math.min( y_center, MAP_HEIGHT - y_center ) * 2) / MAP_HEIGHT; 
      if (i < GEN_NUM_BIG_ISLANDS) {
         ter_type = (Math.random() < (tropicality - 0.5))?2:1; // Can't be jungle outside 50 degrees
      } else {
         var randomizer = Math.random() * 100;
         var tropicality = (Math.min( y_center, MAP_HEIGHT - y_center ) * 2) / MAP_HEIGHT; 
         // 0.0 (frozen) - 1.0 (tropical)
         if (randomizer < 35 + (40 * tropicality)) {
            ter_type = (Math.random() < (tropicality - 0.5))?2:1; // Can't be jungle outside 50 degrees
         } else if (randomizer > 85 + Math.min( tropicality * 5, (1 - tropicality) * 5)) {
            if (tropicality < 0.2) ter_type = 6;
            else if (tropicality > 0.5) ter_type = 5;
            else ter_type = ((Math.random() * 0.3)< (tropicality - 0.2))?5:6;
         } else {
            ter_type = (Math.random() < 0.3)?4:3; // More likely light stone
         }
      }
      createIsland( x_min, y_min, x_max, y_max, -1, ter_type );

   }



   /* Custom

   map = new Array( MAP_WIDTH );
   for (var x = 0; x < MAP_WIDTH ; ++x) {
      map[x] = new Array( MAP_HEIGHT );
      for (var y = 0; y < MAP_HEIGHT ; ++y) {
         map[x][y] = new MapLoc( 0 );
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
   for (var x = 0; x < MAP_WIDTH ; ++x) {
      for (var y = 0; y < MAP_HEIGHT ; ++y) {
         map[x][y].discovered = false;
      }
   }
}

// Draw --

function clearMap() {
   // Draw border
   map_context.clearRect( 0, 0, MAP_FULL_DIM + MAP_CONTROLS_WIDTH, MAP_FULL_DIM + MAP_CONTROLS_HEIGHT );
   map_context.fillStyle = "black";
   map_context.fillRect( 0, 0, MAP_FULL_DIM, MAP_FULL_DIM );
   map_context.fillStyle = "rgba(85,205,255,1)";
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
   if ((terrain & 7) === 0) return;

   terSetColor( terrain, map_context );

   var start_dir = terGetStart( terrain ),
       end_dir = terGetEnd( terrain );
   var octants = (start_dir - end_dir) % 8;
   if (octants === 0 || dimension < 5) {
      map_context.fillRect( grid_x, grid_y, dimension, dimension );
   } else {
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
   }
}

function drawPlace( place, grid_x, grid_y, dimension )
{
   if (place !== undefined) {
      map_context.fillStyle = places[place].color;
      map_context.strokeStyle = places[place].color;
      map_context.lineWidth = "" + (dimension / 10);
      map_context.beginPath();
      map_context.moveTo( grid_x + (dimension / 3), grid_y + (dimension * 4 / 5) );
      map_context.lineTo( grid_x + (dimension * 2 / 3), grid_y + (dimension * 4 / 5) );
      map_context.lineTo( grid_x + (dimension * 2 / 3), grid_y + (dimension * 2 / 5) );
      map_context.lineTo( grid_x + (dimension * 7 / 9), grid_y + (dimension * 2 / 5) );
      map_context.lineTo( grid_x + (dimension / 2), grid_y + (dimension * 1 / 5) );
      map_context.lineTo( grid_x + (dimension * 2 / 9), grid_y + (dimension * 2 / 5) );
      map_context.lineTo( grid_x + (dimension * 7 / 9), grid_y + (dimension * 2 / 5) );
      map_context.lineTo( grid_x + (dimension / 3), grid_y + (dimension * 2 / 5) );
      map_context.lineTo( grid_x + (dimension / 3), grid_y + (dimension * 4 / 5) );
      map_context.lineTo( grid_x + (dimension / 2), grid_y + (dimension * 4 / 5) );
      map_context.lineTo( grid_x + (dimension / 2), grid_y + (dimension * 3 / 5) );
      map_context.stroke();
      if (dimension === 5)
         map_context.fill();
   }
}

function drawFog( grid_x, grid_y, dimension )
{
   if (discovery_fog_on) {
      map_context.fillStyle = 'rgba(85,85,85,0.5)';
      map_context.fillRect( grid_x, grid_y, dimension, dimension );
   }
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
            if (loc.place && places[loc.place].discovered)
               drawPlace( loc.place, grid_x, grid_y, MAP_SQUARE_DIM );
         } else {
            drawTerrain( loc.terrain, grid_x, grid_y, MAP_SQUARE_DIM );
            drawPlace( loc.place, grid_x, grid_y, MAP_SQUARE_DIM );
            if (!loc.visible)
               drawFog( grid_x, grid_y, MAP_SQUARE_DIM );
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
               if (loc.place && places[loc.place].discovered)
                  drawPlace( loc.place, g_x, g_y, draw_step );
            } else {
               drawTerrain( loc.terrain, g_x, g_y, draw_step );
               drawPlace( loc.place, g_x, g_y, draw_step );
               if (!loc.visible)
                  drawFog( g_x, g_y, draw_step );
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
               var place = map[x][y].place;
               if (discovery_fog_on && !map[x][y].discovered) {
                  map_context.fillStyle = "gray";
                  map_context.fillRect( g_x, g_y, draw_step, draw_step );
                  if (place && places[place].discovered)
                     drawPlace( place, g_x, g_y, draw_step );
               } else {
                  drawTerrain( map[x][y].terrain, g_x, g_y, draw_step );
                  drawPlace( place, g_x, g_y, draw_step );
                  if (!map[x][y].visible)
                     drawFog( g_x, g_y, draw_step );
               }
            } else {
               // Attempt 1: if sum in area is > half, draw green
               var land_count = 0, sample_terrain = 0;
               var area_discovered = false, area_visible = 0;
               var place_here = undefined;
               for (var i = Math.max(0, x - Math.floor(map_step / 2)); 
                        i <= Math.min(MAP_WIDTH - 1, x + Math.floor(map_step / 2)); 
                        ++i) {
                  for (var j = Math.max(0, y - Math.floor(map_step / 2)); 
                           j <= Math.min(MAP_WIDTH - 1, y + Math.floor(map_step / 2));
                           ++j) {
                     if (map[i][j].terrain !== 0) {
                        land_count++;
                        sample_terrain = map[i][j].terrain;
                     }
                     if (map[i][j].discovered === true)
                        area_discovered = true;
                     if (map[i][j].visible === true)
                        area_visible = true;
                     if (map[i][j].place !== undefined)
                        place_here = map[i][j].place;
                  }
               }
               if (discovery_fog_on && !area_discovered) {
                  map_context.fillStyle = "gray";
                  map_context.fillRect( g_x, g_y, draw_step, draw_step );
               } else if (land_count > (map_step * map_step) / 3) {
                  terSetColor( sample_terrain, map_context );
                  map_context.fillRect( g_x, g_y, draw_step, draw_step );
                  if (!area_visible)
                     drawFog( g_x, g_y, draw_step );
               } else if (!area_visible)
                  drawFog( g_x, g_y, draw_step );

               if (place_here !== undefined &&
                     !(discovery_fog_on && places[place_here].discovered === false))
                  drawPlace( place_here, g_x, g_y, draw_step );
            }
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
         else b = boats[ other_boats[i - num_boats] ];

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
               // TODO: draw boat progress bar
            }
         }
      }
   }
}

function drawMapControls()
{
   map_context.fillStyle = "rgba(235,235,235,1)";
   map_context.fillRect( MAP_FULL_DIM, 0, MAP_CONTROLS_WIDTH, MAP_FULL_DIM + MAP_CONTROLS_HEIGHT );
   map_context.fillRect( 0, MAP_FULL_DIM, MAP_FULL_DIM + MAP_CONTROLS_WIDTH, MAP_CONTROLS_HEIGHT );

   map_context.fillStyle = "black";
   fitText( map_context, '+', MAP_FULL_DIM, MAP_FULL_DIM + MAP_CONTROLS_WIDTH, 20, 40, '36pt arial', true);
   for (var i = 0; i <= 4; ++i) {
      if (map_zoom_level === i) {
         fitText( map_context, '=', MAP_FULL_DIM, MAP_FULL_DIM + MAP_CONTROLS_WIDTH, 65 + (i * 20), 20, '20pt arial', true);
      } else {
         fitText( map_context, '-', MAP_FULL_DIM, MAP_FULL_DIM + MAP_CONTROLS_WIDTH, 65 + (i * 20), 20, '20pt arial', true);
      }
   }
   fitText( map_context, '-', MAP_FULL_DIM, MAP_FULL_DIM + MAP_CONTROLS_WIDTH, 165, 40, '60pt arial', true);

   var cur_place = map[map_center_x][map_center_y].place;
   if (cur_place !== undefined)
      fitText( map_context, "> " + places[cur_place].name, 5, MAP_FULL_DIM / 2, MAP_FULL_DIM + 1, 16, '14pt arial', false);

   fitText( map_context, map_center_x + "E - " + map_center_y + "S", MAP_FULL_DIM - 130, MAP_FULL_DIM, MAP_FULL_DIM + 1, 16, '14pt arial', true);
}

function drawMap() {
   clearMap();
   drawMapContents();
   drawMapGridLines();
   drawMapControls();
}

// Controls --

function onClickMap( e ) {
   var x_pix = e.pageX - map_canvas.offsetLeft;
   var y_pix = e.pageY - map_canvas.offsetTop;

   text_box_selection = '';

   if (x_pix > MAP_FULL_DIM) {
      if (y_pix > 20 && y_pix < 60) {
         plusZoom();
         refresh();
      } else if (y_pix > 165 && y_pix < 205) {
         minusZoom();
         refresh();
      } else if (y_pix > 65 && y_pix < 165) {
         var new_zoom = Math.floor((y_pix - 65) / 20);
         moveMap( map_center_x, map_center_y, new_zoom );
         refresh();
      }
   } else if (y_pix > MAP_FULL_DIM) {
      if (x_pix < MAP_FULL_DIM / 2) {
         var center_place = map[map_center_x][map_center_y].place;
         if (center_place !== undefined)
            changeBoatMenu( 5 );
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

   if (map_zoom_level === 3) {
      map_dx -= map_dx % 3;
      map_dy -= map_dy % 3;
   }
   if (map_zoom_level === 4) {
      map_dx -= map_dx % 9;
      map_dy -= map_dy % 9;
   }


   if (map_dx != mapDragLast_dx || map_dy != mapDragLast_dy) {
      moveMap( mapDragBase_x + map_dx, mapDragBase_y + map_dy, map_zoom_level );
      mapDragLast_dx = map_dx;
      mapDragLast_dy = map_dy;
      refresh();
   }
}
$('#map_canvas').mousemove( onMouseMoveMap );

function onMouseWheelMap( e ) {
   var delta = 0;
   if (!e) /* For IE. */
      e = window.e;
   if (e.wheelDelta) { /* IE/Opera. */
      delta = e.wheelDelta/120;
   } else if (e.detail) { /** Mozilla case. */
      /** In Mozilla, sign of delta is different than in IE.
       * Also, delta is multiple of 3.
       */
       delta = -e.detail/3;
   }

   moveMap( map_center_x, map_center_y, map_zoom_level - delta );
   refresh();
}
if (map_canvas.addEventListener) {
	// IE9, Chrome, Safari, Opera
	map_canvas.addEventListener("mousewheel", onMouseWheelMap, false);
	// Firefox
	map_canvas.addEventListener("DOMMouseScroll", onMouseWheelMap, false);
}
// IE 6/7/8
else map_canvas.attachEvent("onmousewheel", onMouseWheelMap);

/////////////////////////////////////////////////////////////////////
// General controls ---

function onMouseUp( e ) {
   mapDrag = false;
   mapMouseDown = false;

}
$(document).mouseup( onMouseUp );

function onKeyDown( e ) {
   LOG.html( "DOWN: " + e.which );

   if (e.which === 8 || e.which === 9) {
      e.preventDefault();
   }

   if (text_box_selection !== '') {
      updateTextBox( e.which );

      refresh();
      return;
   }

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
      case 71: // g key
         growTown( places[0], true );
         refresh();
         break;
   }
}
$(document).keydown( onKeyDown );

function onKeyUp( e ) {
   LOG.html( "UP: " + e.which );

   if ( e.which === 16 )
      shift_down = false;
}
$(document).keyup( onKeyUp );

function refresh()
{
   drawMap();
   drawBoats();
}

function update()
{
   updateBoats();
   updatePlaces();
   updateVision();

   refresh();
}

function start() {
   LOG.append(" Start");
   generateMap();
   initBoats();
   updateVision();
   refresh();

   setInterval(update, 200); // .2 sec
}

// Load images
var images_ready = 0;
var total_images = 45;

function addReadyImage() {
   images_ready++;
   if (images_ready === total_images) {
      start();
   }
}

function loadImage( img, src ) {
   img.onload = addReadyImage;
   img.src = src;
}

loadImage( oldman_img, 'OldMan.png' );

loadImage( boat_1_sz5_img, 'Boat_image_1_5px.png' );
loadImage( boat_2_sz5_img, 'Boat_image_2_5px.png' );
loadImage( boat_3_sz5_img, 'Boat_image_3_5px.png' );
loadImage( boat_4_sz5_img, 'Boat_image_4_5px.png' );

loadImage( rowboat_sz15_img, 'Rowboat_15px.png' );
loadImage( rowboat_sz45_img, 'Rowboat_45px.png' );

loadImage( rowboat_sz60_img, 'Rowboat_60px.png' );

loadImage( west_arrow_img, 'NavArrow.png' );
loadImage( west_arrow_selected_img, 'NavArrowSelected.png' );
loadImage( anchor_img, 'Anchor.png' );
loadImage( anchor_selected_img, 'AnchorSelected.png' );
loadImage( island_nav_c_img, 'IslandNavC.png' );
loadImage( island_nav_cc_img, 'IslandNavCC.png' );

loadImage( coins_img, 'Coins.png' );

loadImage( apple_img, 'Apple.png' );
loadImage( bananas_img, 'Bananas.png' );
loadImage( berries_img, 'Berries.png' );
loadImage( coconuts_img, 'Coconuts.png' );
loadImage( lemons_img, 'Lemons.png' );
loadImage( limes_img, 'Limes.png' );
loadImage( mangoes_img, 'Mangoes.png' );
loadImage( passionfruit_img, 'Passionfruit.png' );
loadImage( peach_img, 'Peach.png' );
loadImage( pineapple_img, 'Pineapple.png' );

loadImage( carrots_img, 'Carrots.png' );
loadImage( corn_img, 'Corn.png' );
loadImage( eggplants_img, 'Eggplant.png' );
loadImage( onions_img, 'Onions.png' );
loadImage( peanuts_img, 'Peanuts.png' );
loadImage( peppers_img, 'Peppers.png' );
loadImage( potatoes_img, 'Potatoes.png' );
loadImage( rice_img, 'Rice.png' );
loadImage( tomatoes_img, 'Tomatoes.png' );
loadImage( wheat_img, 'Wheat.png' );

loadImage( chickens_img, 'Chicken.png' );
loadImage( cow_img, 'Cow.png' );
loadImage( crabs_img, 'Crabs.png' );
loadImage( ducks_img, 'Duck.png' );
loadImage( fish_img, 'Fish.png' );
loadImage( monkeys_img, 'Monkey.png' );
loadImage( penguins_img, 'Penguin.png' );
loadImage( pigs_img, 'Pig.png' );
loadImage( seals_img, 'Seal.png' );
loadImage( sheep_img, 'Sheep.png' );
loadImage( turkeys_img, 'Turkey.png' );
loadImage( turtles_image, 'Turtle.png' );

loadImage( softwood_img, 'Softwood.png' );
loadImage( hardwood_img, 'Hardwood.png' );
loadImage( burlap_img, 'Burlap.png' );
loadImage( cotton_img, 'Cotton.png' );
loadImage( wool_img, 'Wool.png' );
loadImage( silk_img, 'Silk.png' );
loadImage( salt_img, 'Salt.png' );

loadImage( stone_img, 'Stone.png' );
loadImage( pavingstone_img, 'PavingStone.png' );
loadImage( granite_img, 'Granite.png' );
loadImage( obsidian_img, 'Obsidian.png' );
loadImage( coal_img, 'Coal.png' );
loadImage( copper_img, 'Copper.png' );
loadImage( tin_img, 'Tin.png' );
loadImage( bronze_img, 'Bronze.png' );
loadImage( iron_img, 'Iron.png' );
loadImage( steel_img, 'Steel.png' );

loadImage( stonetools_img, 'Stonetools.png' );

loadImage( doll_img, 'Doll.png' );
