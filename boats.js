'use strict';

var LOG = $("#log");

/////////////////////////////////////////////////////////////////////
// Data ---

// Images 
var backarrow_img = new Image();

var oldman_img = new Image();
var mapman_img = new Image();
var boatman_img = new Image();
var bankman_img = new Image();
var guildlady_img = new Image();

var maps_closed_img1 = new Image();
var maps_closed_img2 = new Image();
var maps_open_img1 = new Image();
var maps_open_img2 = new Image();
var boats_closed_img1 = new Image();
var boats_closed_img2 = new Image();
var boats_open_img1 = new Image();
var boats_open_img2 = new Image();
var bank_closed_img1 = new Image();
var bank_closed_img2 = new Image();
var bank_open_img1 = new Image();
var bank_open_img2 = new Image();
var guild_closed_img1 = new Image();
var guild_closed_img2 = new Image();
var guild_open_img1 = new Image();
var guild_open_img2 = new Image();

var dirt_road_img = new Image();
var stone_road_img = new Image();

var boat_1_sz5_img = new Image();
var boat_2_sz5_img = new Image();
var boat_3_sz5_img = new Image();
var boat_4_sz5_img = new Image();

var rowboat_sz60_img = new Image();
var rowboat_sz45_img = new Image();
var rowboat_sz15_img = new Image();

var canoe_sz60_img = new Image();
var canoe_sz45_img = new Image();
var canoe_sz15_img = new Image();

var sailboat_sz60_img = new Image();
var sailboat_sz45_img = new Image();
var sailboat_sz15_img = new Image();

var schooner_sz60_img = new Image();
var schooner_sz45_img = new Image();
var schooner_sz15_img = new Image();

var yacht_sz60_img = new Image();
var yacht_sz45_img = new Image();
var yacht_sz15_img = new Image();

var galleon_sz60_img = new Image();
var galleon_sz45_img = new Image();
var galleon_sz15_img = new Image();

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
var spices_img = new Image();
var glass_img = new Image();

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
var bronzetools_img = new Image();
var irontools_img = new Image();

var chairs_img = new Image();
var tables_img = new Image();
var beds_img = new Image();
var desks_img = new Image();
var figurines_img = new Image();
var doll_img = new Image();
var shirt_img = new Image();
var pants_img = new Image();
var dress_img = new Image();
var fancydress_img = new Image();
var fancysuit_img = new Image();
var pillows_img = new Image();

var cargo_unknown_img = new Image();

// Cargo
var cargo_index = {
   coins: { name:'coins', image:coins_img, price:1, novelty:1.0,
      desc:'cash money', weight:0.01 },
   // Fruits
   apples: { name:'apples', image:apple_img, price:3, novelty:2.8,
      desc:'a strangely crunchy red fruit', weight:1, foodvalue:2, generated:0 },
   bananas: { name:'bananas', image:bananas_img, price:7, novelty:4.0,
      desc:'a strangely shaped fruit', weight:2, foodvalue:4 },
   berries: { name:'berries', image:berries_img, price:2, novelty:2.4,
      desc:'strange tiny fruits', weight:1, foodvalue:2, generated:0 },
   coconuts: { name:'coconuts', image:coconuts_img, price:7, novelty:3.4,
      desc:'a strange fruit full of milk', weight:2, foodvalue:4, generated:0 },
   lemons: { name:'lemons', image:lemons_img, price:3, novelty:2.8,
      desc:'a strangely tart yellow fruit', weight:1, foodvalue:2, generated:0 },
   limes: { name:'limes', image:limes_img, price:3, novelty:3.0,
      desc:'a strangely sour green fruit', weight:1, foodvalue:2, generated:0 },
   mangoes: { name:'mangoes', image:mangoes_img, price:4, novelty:3.1,
      desc:'a perfectly normal fruit', weight:1, foodvalue:2, generated:0 },
   passionfruit: { name:'passionfruit', image:passionfruit_img, price:5, novelty:3.0,
      desc:'a stange fruit full of seeds', weight:1, foodvalue:2, generated:0 },
   peaches: { name:'peaches', image:peach_img, price:3, novelty:2.5,
      desc:'a stange fuzzy fruit', weight:1, foodvalue:2, generated:0 },
   pineapples: { name:'pineapples', image:pineapple_img, price:8, novelty:3.7,
      desc:'a stange spiky fruit', weight:2, foodvalue:4, generated:0 },
   // Vegetables
   carrots: { name:'carrots', image:carrots_img, price:3, novelty:2.5,
      desc:'a phallic root vegetable', weight:1, foodvalue:2, generated:0 },
   corn: { name:'corn', image:corn_img, price:3, novelty:2.8,
      desc:'a truly a-maize-ing vegetable', weight:1, foodvalue:2, generated:0 },
   eggplants: { name:'eggplant', image:eggplants_img, price:5, novelty:3.4,
      desc:'what the heck is this thing', weight:1, foodvalue:2, generated:0 },
   onions: { name:'onions', image:onions_img, price:2, novelty:2.0,
      desc:'many-layered like a parfait', weight:1, foodvalue:2, generated:0 },
   peanuts: { name:'peanuts', image:peanuts_img, price:4, novelty:3.4,
      desc:'sort of resembles a pea, i guess', weight:1, foodvalue:2, generated:0 },
   peppers: { name:'peppers', image:peppers_img, price:3, novelty:3.2,
      desc:'a bright crunchy vegetable', weight:1, foodvalue:2, generated:0 },
   potatoes: { name:'potatoes', image:potatoes_img, price:2, novelty:1.9,
      desc:'a lumpy root vegetable', weight:1, foodvalue:2, generated:0 }, 
   rice: { name:'rice', image:rice_img, price:2, novelty:2.2,
      desc:"or 'Condy' as I call her", weight:1, foodvalue:2, generated:0 }, 
   tomatoes: { name:'tomatoes', image:tomatoes_img, price:4, novelty:2.9,
      desc:'a squishy red vegetable, or fruit maybe', weight:1, foodvalue:2, generated:0 },
   wheat: { name:'wheat', image:wheat_img, price:2, novelty:2.4,
      desc:'amber waves of grain', weight:1, foodvalue:2, generated:0 },
   // Animals
   chickens: { name:'chickens', image:chickens_img, price:30, novelty:3.0,
      desc:'cluck cluck', weight:4, foodvalue: 7, generated:0 },
   cows: { name:'cows', image:cow_img, price:3000, novelty:2.7,
      desc:'moooo', weight:350, foodvalue:500, generated:0 },
   crabs: { name:'crabs', image:crabs_img, price:14, novelty:3.0,
      desc:'scuttle', weight:2, foodvalue:4, generated:0 },
   ducks: { name:'ducks', image:ducks_img, price:32, novelty:3.2,
      desc:'quack', weight:4, foodvalue: 7, generated:0 },
   fish: { name:'fish', image:fish_img, price:16, novelty:1.8,
      desc:'blub', weight:5, foodvalue:9, generated:0 },
   monkeys: { name:'monkeys', image:monkeys_img, price:185, novelty:3.4,
      desc:'ook ook', weight:22, foodvalue:28, generated:0 },
   penguins: { name:'penguins', image:penguins_img, price:90, novelty:3.8,
      desc:'squaaawk', weight:9, foodvalue:15, generated:0 },
   pigs: { name:'pigs', image:pigs_img, price:820, novelty:3.0,
      desc:'oink', weight:110, foodvalue:170, generated:0 },
   seals: { name:'seals', image:seals_img, price:1700, novelty:3.3,
      desc:'ark ark ark', weight:215, foodvalue:310, generated:0 },
   sheep: { name:'sheep', image:sheep_img, price:940, novelty:2.4,
      desc:'baaaa', weight:110, foodvalue:120, generated:0 },
   turkeys: { name:'turkeys', image:turkeys_img, price:85, novelty:2.8,
      desc:'gobble gobble', weight:14, foodvalue:22, generated:0 },
   turtles: { name:'turtles', image:turtles_image, price:13, novelty:2.9,
      desc:'*silence*', weight:2, foodvalue:4, generated:0 },

   // Various resources
   softwood: { name:'softwood', image:softwood_img, price:22, novelty:2.4,
      desc:"don't knock it", weight:8, generated:0 },
   hardwood: { name:'hardwood', image:hardwood_img, price:32, novelty:2.8,
      desc:'if you know what I mean', weight:12, generated:0 },
   burlap: { name:'burlap', image:burlap_img, price:1, novelty:2.0,
      desc:"not the softest, I'll admit", weight:1, generated:0 },
   cotton: { name:'cotton', image:cotton_img, price:3, novelty:2.9,
      desc:'this stuff is pretty soft wow', weight:1, generated:0 },
   wool: { name:'wool', image:wool_img, price:3, novelty:2.7,
      desc:'great for sweaters, but there are no sweaters in this game...', weight:1 },
   silk: { name:'silk', image:silk_img, price:8, novelty:3.1,
      desc:'woven from butterfly wings and maybe rainbows', weight:1, generated:0 },
   salt: { name:'salt', image:salt_img, price:23, novelty:3.4,
      desc:"great for curing meat, but meat doesn't spoil in this game...", weight:1, generated:0 },
   spices: { name:'spices', image:spices_img, price:24, novelty:3.6,
      desc:"that's a spicy meat-a-ball", weight:1, generated:0 },
   glass: { name:'glass', image:glass_img, price:76, novelty:3.1,
      desc:"woah it's like see-through and shit", weight:1, generated:0 },
   // Stone/metal
   stone: { name:'stone', image:stone_img, price:5, novelty:2.2,
      desc:'I want a rock! (Rock!)', weight:6, generated:0 },
   pavingstone: { name:'paving stone', image:pavingstone_img, price:9, novelty:2.5,
      desc:'We built this city / On paving stone', weight:6 },
   granite: { name:'granite', image:granite_img, price:19, novelty:2.8,
      desc:'level up your kitchen', weight:8, generated:0 },
   obsidian: { name:'obsidian', image:obsidian_img, price:22, novelty:3.3,
      desc:'frozen fire, in the tongue of old Valyria', weight:2, generated:0 },
   coal: { name:'coal', image:coal_img, price:10, novelty:2.8,
      desc:'I think I have the black lung', weight:2, generated:0 },
   copper: { name:'copper', image:copper_img, price:27, novelty:3.0,
      desc:'great for electrical wiring', weight:6, generated:0 },
   tin: { name:'tin', image:tin_img, price:26, novelty:3.0,
      desc:'you know, the metal', weight:6, generated:0 },
   bronze: { name:'bronze', image:bronze_img, price:40, novelty:3.3,
      desc:'a new age is upon us', weight:6 },
   iron: { name:'iron', image:iron_img, price:75, novelty:3.4,
      desc:"great for getting rid of wrinkles", weight:10, generated:0 },
   steel: { name:'steel', image:steel_img, price:160, novelty:4.0,
      desc:"pretty much the best metal you could ask for", weight:12 },
   // Usable Resources
   stonetools: { name:'stone tools', image:stonetools_img, price:24, novelty:2.8,
      desc:'hammers and axes and stuff', weight:7 },
   bronzetools: { name:'bronze tools', image:bronzetools_img, price:45, novelty:3.5,
      desc:'useful stuff for doing stuff', weight:6 },
   irontools: { name:'iron tools', image:irontools_img, price:85, novelty:3.7,
      desc:'just super useful stuff', weight:8 },
   // Crafted Items
   chairs: { name:'chairs', image:chairs_img, price:80, novelty:2.8,
      desc:"for sitting", weight:24 },
   tables: { name:'tables', image:tables_img, price:165, novelty:3.0,
      desc:"for putting things on", weight:56 },
   beds: { name:'beds', image:beds_img, price:245, novelty:3.2,
      desc:"for sleeping", weight:140 },
   desks: { name:'desks', image:desks_img, price:450, novelty:3.4,
      desc:"for sitting at", weight:260 },
   figurines: { name:'figurines', image:figurines_img, price:32, novelty:3.8,
      desc:"an adult's plaything", weight:2},
   dolls: { name:'dolls', image:doll_img, price:16, novelty:3.4,
      desc:"a child's plaything", weight:1},
   shirts: { name:'shirts', image:shirt_img, price:18, novelty:2.6,
      desc:'gird your pecs', weight:1},
   pants: { name:'pants', image:pants_img, price:35, novelty:2.7,
      desc:'gird your loins', weight:2},
   dresses: { name:'dresses', image:dress_img, price:54, novelty:3.1,
      desc:'I feel pretty', weight:2.5},
   fancydresses: { name:'fancy dresses', image:fancydress_img, price:175, novelty:3.8,
      desc:'for high society lasses', weight:4},
   fancysuits: { name:'fancy suits', image:fancysuit_img, price:85, novelty:3.4,
      desc:'for high society chappies', weight:2},
   pillows: { name:'pillows', image:pillows_img, price:11, novelty:2.8,
      desc:'downy (or cottony, depends how you make them hint hint)', weight:1},
}

// Type lists
var food_list = [ 'apples', 'berries', 'coconuts', 'lemons', 'limes', 'mangoes', 'passionfruit', 'peaches', 'pineapples', 'carrots', 'corn', 'eggplants', 'onions', 'peanuts', 'peppers', 'potatoes', 'rice', 'tomatoes', 'wheat', 'fish' ];
var animal_list = [ 'chickens', 'cows', 'crabs', 'ducks', 'monkeys', 'penguins', 'pigs', 'seals', 'sheep', 'turkeys', 'turtles' ];
var small_animal_list = [ 'chickens', 'crabs', 'ducks', 'monkeys', 'penguins', 'turkeys', 'turtles' ];
var big_animal_list = [ 'cows', 'pigs', 'seals', 'sheep' ];

var grassland_full_list = [ 'apples', 'lemons', 'limes', 'peaches', 'potatoes', 'carrots', 'corn', 'onions', 'rice', 'wheat', 'chickens', 'turkeys', 'ducks', 'sheep', 'cows', 'fish', 'softwood', 'hardwood', 'cotton', 'burlap', 'silk', 'stone' ];
var jungle_full_list = [ 'mangoes', 'passionfruit', 'berries', 'eggplants', 'tomatoes', 'peanuts', 'peppers', 'turkeys', 'ducks', 'pigs', 'turtles', 'fish', 'monkeys', 'softwood', 'hardwood', 'cotton', 'burlap', 'stone' ];
var lightstone_full_list = [ 'berries', 'potatoes', 'onions', 'chickens', 'sheep', 'crabs', 'fish', 'stone', 'coal', 'copper', 'iron', 'granite' ];
var darkstone_full_list = [ 'berries', 'potatoes', 'onions', 'chickens', 'sheep', 'crabs', 'fish', 'stone', 'coal', 'tin', 'iron', 'obsidian' ];
var desert_full_list = [ 'coconuts', 'pineapples', 'fish', 'softwood', 'glass', 'copper', 'tin' ];
var tundra_full_list = [ 'potatoes', 'onions', 'fish', 'penguins', 'seals', 'crabs', 'hardwood', 'iron', 'salt' ];

var plant_grassland_list = [ 'apples', 'lemons', 'limes', 'peaches', 'potatoes', 'carrots', 'corn', 'onions', 'rice', 'wheat' ];
var plant_jungle_list = [ 'mangoes', 'passionfruit', 'berries', 'eggplants', 'tomatoes', 'peppers' ];
var plant_stone_list = [ 'berries', 'potatoes', 'onions' ];
var plant_desert_list = [ 'coconuts', 'pineapples' ];

// Upgrade lists
var farming_upgrade_list = [ { stonetools: 2 },
                             { stonetools: 12 },
                             { bronzetools: 2 },
                             { bronzetools: 12 },
                             { irontools: 2 },
                             { irontools: 12 } ];
var carpentry_upgrade_list = [ { hardwood: 5 },
                               { hardwood: 10, softwood: 5 },
                               { hardwood: 15, softwood: 10, bronzetools: 3 },
                               { hardwood: 20, softwood: 20, irontools: 3 } ];
var masonry_upgrade_list = [ { stone: 6 },
                             { stone: 14, granite: 3 },
                             { stone: 22, obsidian: 3 },
                             { stone: 30, irontools: 3, coal: 10 } ];
var smithing_upgrade_list = [ { copper: 6, tin: 6 },
                              { bronze: 6, coal: 6 },
                              { iron: 6, coal: 6 },
                              { iron: 20 } ];
var weaving_upgrade_list = [ { burlap: 5 },
                             { cotton: 5 },
                             { wool: 5 },
                             { silk: 5 } ];
var boatcraft_upgrade_list = [ { softwood: 5 },
                               { hardwood: 12, burlap: 10 },
                               { hardwood: 24, iron: 5, burlap: 20 },
                               { iron: 10, steel: 10, irontools: 8 },
                               { hardwood: 80, iron: 30, burlap: 60 } ];

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
var BOAT_SCROLLBAR_HEIGHT = 30;
var BOAT_HEADER_HEIGHT = 22;
var BOAT_INNER_X = BOAT_SCROLLBAR_WIDTH + 65, BOAT_INNER_Y = BOAT_HEADER_HEIGHT + 5;
var BOAT_INNER_WIDTH = BOAT_WIDTH - (BOAT_INNER_X + 5);
var BOAT_INNER_X_MID = BOAT_INNER_X + (BOAT_INNER_WIDTH / 2);
var BOAT_INNER_HEIGHT = BOAT_HEIGHT - (BOAT_INNER_Y + 5);
var BOAT_NAV_CENTER_X = 90, BOAT_NAV_CENTER_Y = 130;

var boat_menu = 5; // 1 = boats, 3 = cargo, 2 = sail, 5 = city, 4 = market
var boat_scroll = 0;
var boat_selection = 0;

var boats = [];
var my_boats = [];
var other_boats = [];
var boat_id_gen = 0;

var destination_list = [];
var destination_selection = null;
var destination_scroll = 0;

var building_hover = 0;

// Map
var map_canvas = $('#map_canvas')[0]
map_canvas.onselectstart = function () { return false; }
var map_context = map_canvas.getContext('2d');
var MAP_DRAW_DIM = 405, MAP_SQUARE_DIM = 45, MAP_DRAW_EDGE = 2, MAP_FULL_DIM = MAP_DRAW_DIM + (2 * MAP_DRAW_EDGE);
var MAP_CONTROLS_WIDTH = 40;
var MAP_CONTROLS_HEIGHT = 20;
var MAP_GRID_SIZE = 9, MAP_ZOOM_RATIO = 3;
var MAP_HEIGHT = 300, MAP_WIDTH = 300;

var map;
var map_zoom_level = 0; // 1 tick = GRID_SIZE ^ zoom_level
var map_center_x = 300, map_center_y = 300; 
var shift_down = false;

// Generation
var GEN_NUM_ISLANDS = 130, GEN_NUM_BIG_ISLANDS = 15;
var GEN_HEIGHT_MIN = 6, GEN_WIDTH_MIN = 6;
var GEN_HEIGHT_DIFF = 7, GEN_WIDTH_DIFF = 7;
var GEN_MIN_ADJ = 3;
var GEN_CITY_LAND_MIN = 15;
var GEN_CITY_CHANCE_DENOM = 75;
 
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

var guild_req = '';
var guild_industry = '';

var LOCAL_MAP_PRICE = 30;
var FOREIGN_MAP_PRICE = 60;
var DEFAULT_MAP_RADIUS = 11;

// Save game

function serializeGameState() {
   var serial_object = {
      ser_places: places,
      ser_place_id_gen: place_id_gen,
      ser_boats: boats,
      ser_my_boats: my_boats,
      ser_other_boats: other_boats,
      ser_boat_id_gen: boat_id_gen,
      ser_map: map,
      ser_quest_status: quest_status,
      ser_quest_goals: quest_goals
   };
   var result = JSON.stringify( serial_object ); //"";

   return result;
}

function loadFromSerial( serial ) {
   var serial_object = JSON.parse( serial );

   var i;
   places = serial_object.ser_places;
   for(i = 0; i < places.length; ++i) {
      var realplace = new Place( '' );
      realplace.copy( places[i] );
      places[i] = realplace;
   }
   place_id_gen = serial_object.ser_place_id_gen;
   boats = serial_object.ser_boats;
   for(i = 0; i < boats.length; ++i) {
      var realboat = new Boat();
      realboat.copy( boats[i] );
      boats[i] = realboat;
   }
   my_boats = serial_object.ser_my_boats;
   other_boats = serial_object.ser_other_boats;
   boat_id_gen = serial_object.ser_boat_id_gen;
   map = serial_object.ser_map;
   loadMap();
   quest_status = serial_object.ser_quest_status;
   quest_goals = serial_object.ser_quest_goals;
}

function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

function saveGame() {
   if (storageAvailable('localStorage')) {
      var serial = serializeGameState();
      window.localStorage.setItem( 'tradeWindsSave', serial );
      setLog( "Game saved" );
   }
   else {
      setLog( "Can't access local storage" );
   }
}

function loadGame() {
   if (storageAvailable('localStorage')) {
      var serial = window.localStorage.getItem( 'tradeWindsSave', serial );
      if (serial) {
         loadFromSerial( serial );
         setLog( "Loaded from save file" );
      } else {
         setLog( "No save file" );
      }
   }
   else {
      setLog( "Can't access local storage" );
   }
}

function Cargo() {
   this.coins = 0;
}

Cargo.prototype.toJSON = function () {
   var real_contents = {};

   for( var cargo_id in this ) {
      if (cargo_id === 'toJSON') continue;
      if (this[cargo_id] && this[cargo_id] !== 0)
         real_contents[ cargo_id ] = this[ cargo_id ];
   }
   return real_contents;
}

function copyCargo( oldcargo ) {
   var newcargo = new Cargo();
   for (var cargo in oldcargo)
      newcargo[ cargo ] = oldcargo[ cargo ];
   return newcargo;
}

/////////////////////////////////////////////////////////////////////
// Misc ---

var log_fade = 0;
function setLog( text, fade ) {
   log_fade = fade || 100;

   LOG.css( "color", "black" );
   LOG.html( text );
}

function fadeLog() {
   if (log_fade > 0) {
      log_fade--;
      if (log_fade <= 51) {
         var fade = 51 - log_fade;
         var colorstr = 'rgb(' + (fade * 5) + ','+ (fade * 5) + ','  + (fade * 5) + ')';
         LOG.css( "color", colorstr );
      }
      if (log_fade === 0)
         LOG.html( '' );
   }
}

String.prototype.width = function(font) {
  var f = font || '12px arial',
      o = $('<div>' + this + '</div>')
            .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
            .appendTo($('body')),
      w = o.width();

  o.remove();

  return w;
}
   
function fitText( context, text, x_min, x_max, y_min, font_size, font, centered, first_line_offset, stroke )
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
         if (centered) {
            if (stroke)
               context.strokeText( text_bit, (x_min + x_max - text_bit.width( font )) / 2 , y );
            context.fillText( text_bit, (x_min + x_max - text_bit.width( font )) / 2 , y );
         } else {
            if (stroke)
               context.strokeText( text_bit, x_min, y );
            context.fillText( text_bit, x_min, y );
         }

         text_bit = text_bit_temp = text_split[i] + ' ';
         y += font_size;
      } else {
         text_bit_temp += ' ';
         text_bit = text_bit_temp;
      }
   }
   if (text_bit) {
      if (centered) {
         if (stroke)
            context.strokeText( text_bit, (x_min + x_max - text_bit.width( font )) / 2 , y );
         context.fillText( text_bit, (x_min + x_max - text_bit.width( font )) / 2 , y );
      } else {
         if (stroke)
            context.strokeText( text_bit, x_min, y );
         context.fillText( text_bit, x_min, y );
      }

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
   } else if (boat_menu === 17) {
      // Allow alphanumerics, space, '-', "'", del/backspace, enter
      var boat = boats[ my_boats[boat_selection] ];
      var place = map[boat.x][boat.y].place;
      var ren_str = places[place].rename_string;
      if (char_code === 46 /*delete*/ || char_code === 8 /*backspace*/) {
         places[place].rename_string = ren_str.slice( 0, -1 );
      } else if (char_code === 13 /*enter*/) {
         renameBoat();
      } else if (ren_str.length >= 20) {
         return;
      } else if (char_code >= 65 /*a*/ && char_code <= 90 /*z*/) {
         var char_str = String.fromCharCode( char_code );
         if (ren_str.length === 0 || ren_str.charAt( ren_str.length - 1 ) === " ")
            char_str = char_str.toUpperCase();
         else
            char_str = char_str.toLowerCase();

         places[place].rename_string += char_str;
      } else if (char_code >= 48 && char_code <= 57) { // Numbers pt 1
         places[place].rename_string += (char_code - 48);
      } else if (char_code >= 96 && char_code <= 105) { // Numbers pt 2
         places[place].rename_string += (char_code - 96);
      } else if (char_code === 189 /*-*/ || char_code === 109 /*-*/) {
         places[place].rename_string += '-';
      } else if (char_code === 222 /*'*/) {
         places[place].rename_string += "'";
      } else if (char_code === 32 /* */) {
         places[place].rename_string += " ";
      }
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
               boat.addCargo( cargo, -b_num );
               cargo_num -= b_num;
            } else {
               boat.addCargo( cargo, -cargo_num );
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
            if (cargo_id === 'toJSON') continue;
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
         map[149][162].place = 0;
      }
   } else if (quest_status === 1) {
      var foods = [];
      for (var cargo in cargo_at_home) {
         if (cargo === 'toJSON') continue;
         if ($.inArray (cargo, food_list ) !== -1) {
            foods.push( cargo );
         }
      }
      if (foods.length >= 4) {
         for (var i = 0; i < 4; ++i)
            payForQuest( foods[i], 1 );
         
         quest_status = 2;
         map[149][163].place = 0;
      }
   } else if (quest_status === 2) {
      if (cargo_at_home.stonetools >= 3) {
         payForQuest( 'stonetools', 3 );
         quest_status = 3;
         map[151][163].place = 0;
      }
   } else if (quest_status === 3) {
      var animals = [];
      for (var cargo in cargo_at_home) {
         if (cargo === 'toJSON') continue;
         if ($.inArray (cargo, animal_list ) !== -1) {
            if (cargo_at_home[cargo] >= 2)
               animals.push( cargo );
         }
      }
      if (animals.length >= 2) {
         for (var i = 0; i < 2; ++i)
            payForQuest( animals[i], 2 );
         
         quest_status = 4;
         map[151][164].place = 0;
      }
   } else if (quest_status === 4) {
      if (cargo_at_home.beds >= 1 && cargo_at_home.pillows >= 2) {
         payForQuest( 'beds', 1 );
         payForQuest( 'pillows', 2 );
         
         quest_status = 5;
         quest_goals = selectNResources( 5, food_list.slice() );
         map[148][163].place = 0;
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
         map[150][164].place = 0;
      }
   } else if (quest_status === 6) {
      if (cargo_at_home.chairs >= 4 && cargo_at_home.tables >= 1 &&
          cargo_at_home.granite >= 4 && cargo_at_home.irontools >= 2) {
         payForQuest( 'chairs', 4 );
         payForQuest( 'tables', 1 );
         payForQuest( 'granite', 4 );
         payForQuest( 'irontools', 2 );

         quest_status = 7
         map[150][165].place = 0;
      }
   } else if (quest_status === 7) {
      if (cargo_at_home.pants >= 2 && cargo_at_home.shirts >= 2 &&
          cargo_at_home.fancysuits >= 1 && cargo_at_home.figurines >= 3) {
         payForQuest( 'pants', 2 );
         payForQuest( 'shirts', 2 );
         payForQuest( 'fancysuits', 1 );
         payForQuest( 'figurines', 3 );
         
         quest_status = 8;
         map[149][164].place = 0;
         quest_goals = selectNResources( 5, food_list.slice() );
         quest_goals = quest_goals.concat( selectNResources( 2, small_animal_list.slice() ) );
         quest_goals = quest_goals.concat( selectNResources( 2, big_animal_list.slice() ) );
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
         map[148][164].place = 0;
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

function constructTerrain( start_dir, end_dir, ter_type ) { // Goes Clockwise
   var ter = ter_type || 1;
   return ter + (start_dir << 3) + (end_dir << 6);
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

function terSetColor( terrain, context ) {
   switch (terGetType( terrain )) {
      case 1:
         context.fillStyle = "rgba(0,185,0,1)"; // green plains
         break;
      case 2:
         context.fillStyle = "rgba(0,135,0,1)"; // green jungle
         break;
      case 3:
         context.fillStyle = "rgba(155,155,155,1)"; // light stone
         break;
      case 4:
         context.fillStyle = "rgba(115,115,115,1)"; // dark stone
         break;
      case 5:
         context.fillStyle = "rgba(195,155,105,1)"; // sandy desert
         break;
      case 6:
         context.fillStyle = "rgba(175,225,235,1)"; // icy desert
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

function Place( name )
{
   this.name = name;
   this.id = place_id_gen++;
   this.x = -1;
   this.y = -1;
   this.size = 1;

   this.discovered = false;

   this.color = "rgba(" + Math.round(195 + (Math.random() * 60)) + "," 
                        + Math.round(35 + (Math.random() * 40)) + "," 
                        + Math.round(35 + (Math.random() * 40)) + ",1)";

   this.update_tick = 0;
   this.upgrade_frequency = 475 + Math.round( Math.random() * 50 ); // # of ticks
   this.resources = {};
   this.industries = {
      // Pure resource gen
      farming: 0,
      // Crafting
      carpentry: 0,
      masonry: 0,
      smithing: 0,
      weaving: 0,
      boatcraft: 0
   };
   this.stock = new Cargo();
   this.stock_selected = '';
   this.bank = new Cargo();
   this.industry_randomizer1 = Math.random();
   this.industry_randomizer2 = Math.random();
   this.population = 5;

   this.rename_string = "";

   this.connected_towns = [];
}

Place.prototype.copy = function ( other ) {
   this.name = other.name;
   this.id = other.id;
   this.x = other.x;
   this.y = other.y;

   this.discovered = other.discovered;

   this.color = other.color;

   this.upgrade_frequency = other.upgrade_frequency;
   this.resources = other.resources;
   this.industries = other.industries;
   this.stock = copyCargo( other.stock );
   this.bank = copyCargo( other.bank );
   this.industry_randomizer1 = other.industry_randomizer1;
   this.industry_randomizer2 = other.industry_randomizer2;
   this.population = other.population;
   this.size = other.size;

   this.connected_towns = other.connected_towns;
}

var town_names = [ 'Abu Dhabi', 'Agrabah', 'Alexandria', 'Alubarna', 'Anchorage', 'Angband', 'Ankh', 'Arkadia', 'Arkham', 'Ascalon', 'Asshai', 'Astapor', 'Atlantis', 'Avalon', "Baldur's Gate", 'Barad-dur', 'Barbados', 'Bikini Bottom', 'Bombay', 'Braavos', 'Bratislava', 'Bree', 'Brno', 'Brunei', 'Burmecia', 'Camelot', 'Cinnabar', 'Cleyra', 'Clock Town', 'Cocoyashi', 'Coldchester', 'Columbia', 'Crickhollow', 'Daguerreo', 'Dale', 'Dali', 'Damascus', 'Darnassus', 'Detroit', 'Digitopolis', 'Dollet', 'Dorino', 'Dragonstone', 'Dressrosa', 'Duckburg', 'Dunwall', 'Dusseldorf', 'Edoras', 'El Dorado', 'Elbaf', 'Erumalu', 'Falujah', 'Fourside', 'Funkytown', 'Gadgetzan', 'Giza', 'Gondor', 'Gotham', 'Grandia', 'Gravity Falls', 'Guadalupe', 'Guantanamo', 'Hardhome', 'Harrenhal', 'Havana', 'Hicksville', 'Highgarden', 'Hobbiton', 'Hogsmeade', 'Hylia', 'Innsmouth', 'Ippswich', 'Isengard', 'Jakarta', 'Jamestown', 'Jericho', 'Kabul', 'Kakariko', 'Katorea', 'Kharbranth', 'Khazad-dum', 'Kholinar', 'Kodiak', 'Konoha', 'Lannisport', 'Lawenilothehl', 'Libreville', 'Lindblum', 'Loguetown', 'Lorath', 'Lorien', 'Lys', 'Manila', 'Mariejois', 'Marineford', 'Marrakesh', 'Meereen', 'Mecca', 'Megatokyo', 'Metropolis', 'Midgar', 'Minas Tirith', 'Minsk', 'Mmbutu', 'Mock Town', 'Mombasa', 'Morpork', 'Mos Eisley', 'Myr', 'Nanohana', 'Neotokyo', 'Neverwinter', 'New Dehli', 'Nibelheim', 'Nome', 'Nova Prospekt', 'Nowhere', 'Ohara', 'Onett', 'Orleans', 'Osgiliath', 'Oto', 'Pallet Town', 'Pandemonium', 'Pentos', 'Phronten', 'Porre', 'Portland', 'Praetoria', 'Pride Rock', 'Pyke', 'Pyongyang', 'Qarth', 'Quahog', 'Quito', "R'lyeh", 'Raftel', 'Rainbase', 'Rapture', 'Ravenholm', 'Risembool', 'Rivendell', 'Robotropolis', 'Rockville', 'Rogueport', 'Sabaody', 'Salem', 'Saskatoon', 'Scrabble', 'Shangri-la', 'Shelbyville', 'Silent Hill', 'Skagway', 'Sleepy Hollow', 'Smallville', 'Springfield', 'Stepford', 'Stormwind', 'Suez', 'Sunnydale', 'Sunspear', 'Tackleford', 'Terinyo', 'Terris', 'Threed', 'Timbuktu', 'Townsville', 'Treno', 'Truce', 'Twoson', 'Urithiru', 'Valyria', 'Vancouver', 'Varrock', 'Vector', 'Vedenar', 'Volantis', 'Walla Walla', 'Wano', 'Whiskey Peak', 'Winterfell', 'Whoville', 'Xanadu', 'Yunkai', 'Zanarkand', 'Zion' ];

var name_count = 0;
function townNameGen()
{
   if (town_names.length === 0)
      return 'Praetoria ' + name_count++;

   var index = Math.floor(Math.random() * town_names.length);

   return town_names.splice( index, 1 )[0];
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
            [ 'apples', 'lemons', 'limes', 'peaches', 'potatoes', 'carrots', 'corn', 'onions', 'rice', 'wheat', 'fish' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 2) + 1,
            [ 'chickens', 'turkeys', 'ducks', 'sheep', 'cows' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.floor( Math.random() * 2),
            [ 'cotton', 'burlap', 'silk' ] );
      Array.prototype.push.apply( resources, res );
      if (Math.random() > 0.5) resources.push( 'stone' );
      if (Math.random() > 0.6) resources.push( 'hardwood' )
      else if (Math.random() > 0.4) resources.push( 'softwood' );

   } else if (ter_type === 2) {
      /* Jungle
       * Possible resources:
       *
       * fruits: mangoes, passionfruit, berries
       * veggies: eggplants, tomatoes, peanuts, peppers
       * animals: turkeys, ducks, pigs, turtles, fish, monkeys
       * resources: softwood, hardwood, cotton, burlap
       * stone: stone
       */
      var res = selectNResources( Math.round( Math.random() * 3 ) + 1,
            [ 'mangoes', 'passionfruit', 'lemons', 'limes', 'eggplants', 'tomatoes', 'peanuts', 'peppers', 'fish' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 2) + 1,
            [ 'pigs', 'turkeys', 'ducks', 'turtles', 'monkeys' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 1),
            [ 'cotton', 'burlap' ] );
      Array.prototype.push.apply( resources, res );
      if (Math.random() > 0.5) resources.push( 'stone' );
      if (Math.random() > 0.5) resources.push( 'hardwood' )
      else resources.push( 'softwood' );

   } else if (ter_type === 3) {
      /* Light stone
       * Possible resources:
       *
       * fruits: berries
       * veggies: potatoes, onions
       * animals: chickens, sheep, fish, crabs
       * resources: 
       * stone: stone, coal, copper, iron, granite
       */
      var res = selectNResources( 1,
            [ 'berries', 'potatoes', 'onions', 'fish' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 1),
            [ 'chickens', 'sheep', 'crabs' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 2) + 1,
            [ 'coal', 'copper', 'iron', 'granite' ] );
      Array.prototype.push.apply( resources, res );
      resources.push( 'stone' );
   } else if (ter_type === 4) {
      /* Dark stone
       * Possible resources:
       *
       * fruits: berries
       * veggies: potatoes, onions
       * animals: chickens, sheep, fish, crabs
       * resources: 
       * stone: stone, coal, tin, iron, obsidian
       */
      var res = selectNResources( 1,
            [ 'berries', 'potatoes', 'onions', 'fish' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 1),
            [ 'chickens', 'sheep', 'crabs' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 2) + 1,
            [ 'coal', 'tin', 'iron', 'obsidian' ] );
      Array.prototype.push.apply( resources, res );
      resources.push( 'stone' );
   } else if (ter_type === 5) {
      /* Yellow desert
       * Possible resources:
       *
       * fruits: coconuts, pineapples
       * veggies: 
       * animals: fish
       * resources: softwood, glass, spices
       * stone: copper, tin
       */
      var res = selectNResources( 1,
            [ 'coconuts', 'pineapples' ] );
      Array.prototype.push.apply( resources, res );
      if (Math.random() > 0.5) resources.push( 'fish' );
      res = selectNResources( Math.round( Math.random() * 1) + 1,
            [ 'softwood', 'glass', 'tin', 'copper' ] );
      Array.prototype.push.apply( resources, res );
      if (cargo_index[ 'spices' ].generated ===0 || Math.random() > 0.4) resources.push( 'spices' );
   } else if (ter_type === 6) {
      /* Icy tundra
       * Possible resources:
       *
       * fruits:
       * veggies: potatoes, onions
       * animals: fish, penguins, seals, crabs
       * resources: hardwood, salt
       * stone: iron
       */
      var res = selectNResources( Math.round( Math.random() * 2) + 1,
            [ 'potatoes', 'onions', 'fish', 'penguins', 'seals', 'crabs' ] );
      Array.prototype.push.apply( resources, res );
      res = selectNResources( Math.round( Math.random() * 1),
            [ 'hardwood', 'iron', 'granite' ] );
      Array.prototype.push.apply( resources, res );
      if (cargo_index[ 'salt' ].generated ===0 || Math.random() > 0.4) resources.push( 'salt' );
   }

   for (var i = 0; i < resources.length; ++i) {
      if (cargo_index[ resources[ i ] ].generated)
         cargo_index[ resources[ i ] ].generated++;
      else
         cargo_index[ resources[ i ] ].generated = 1;
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
      if (res === 'toJSON') continue;
      if ($.inArray(res, animal_list ) === -1) { // SKIP non-animals - they are not resources
         if ($.inArray (res, food_list ) !== -1)
            town.resources[res] += 2; // Add more to food
         else
            town.resources[res]++;
      }
   }
   town.linkTowns();
   return true;
}

function buildTown( center_x, center_y, island_resources )
{
   var new_town = new Place( townNameGen() );

   // Add it to the map
   map[center_x][center_y].place = new_town.id;
   new_town.x = center_x;
   new_town.y = center_y;

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
   var count = this.stock[ cargo_id ] || 0;
   if (count < 15) {
      // Linear version
      //var multiplier = 1 + (((15 - count) / 15) * (cargo_index[ cargo_id ].novelty - 1));
      // Witch of Agnesi version
      var multiplier = 1 + 
         ((1 / (Math.pow( (count / 4), 2 ) + 1)) * (cargo_index[ cargo_id ].novelty - 1));

      price *= multiplier;
   }
   // Check if needed for upgrade
   if ( farming_upgrade_list[ this.industries.farming ][ cargo_id ] != undefined ) price *= 1.1;
   if ( carpentry_upgrade_list[ this.industries.carpentry ][ cargo_id ] != undefined ) price *= 1.1;
   if ( masonry_upgrade_list[ this.industries.masonry ][ cargo_id ] != undefined ) price *= 1.1;
   if ( smithing_upgrade_list[ this.industries.smithing ][ cargo_id ] != undefined ) price *= 1.1;
   if ( weaving_upgrade_list[ this.industries.weaving ][ cargo_id ] != undefined ) price *= 1.1;
   if ( boatcraft_upgrade_list[ this.industries.boatcraft ][ cargo_id ] != undefined ) price *= 1.1;

   return Math.floor( price );
}

var found_place;
Place.prototype.linkTowns = function() {
   var link_radius = 22 + (6 * this.size);

   var found = {};
   for (var x = Math.max(0,this.x-link_radius); x < Math.min(MAP_WIDTH,this.x+link_radius); ++x) {
      for (var y = Math.max(0,this.y-link_radius); y < Math.min(MAP_WIDTH,this.y+link_radius); ++y) {
         if (map[x][y].place && map[x][y].place != this.id) {
            var p = places[map[x][y].place];
            var dist_sq = ((p.x - this.x) * (p.x - this.x)) + ((p.y - this.y) * (p.y - this.y));
            if (dist_sq <= link_radius * link_radius)
               found[ p.id ] = true;
         }
      }
   }

   var found2 = [];
   for (var f in found)
      found2.push( f );

   found_place = this;
   found2.sort( function ( a, b ) {
      var place_a = places[a];
      var place_b = places[b];
      var dist_a = calculateDistanceMetric( found_place.x - place_a.x, found_place.y - place_a.y );
      var dist_b = calculateDistanceMetric( found_place.x - place_b.x, found_place.y - place_b.y );

      return dist_a - dist_b;
   });

   this.connected_towns = [];
   for (var i = 0; i < found2.length; i += 2)
      this.connected_towns.push( found2[i] );

   this.connected_towns = this.connected_towns.slice(0, 6);
}

Place.prototype.sumFood = function() {
   var total = 0;
   for( var stock in this.stock ) {
      if (stock === 'toJSON') continue;
      if (this.stock[ stock ]) {
         if ($.inArray( stock, animal_list ) !== -1)
            total += (cargo_index[ stock ].foodvalue * (this.stock[ stock ] - 3));
         else if ($.inArray( stock, food_list ) !== -1 || stock === 'bananas')
            total += (cargo_index[ stock ].foodvalue * (this.stock[ stock ] - 1));
      }
   }
   return total;
}

Place.prototype.attemptEat = function( food_target ) {
   var total;
   for( var stock in this.stock ) {
      if (stock === 'toJSON') continue;
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
      if (stock === 'toJSON') continue;
      if (food_target <= 0) break;

      var limit = 10 + Math.round(Math.random() * 10);
      if ($.inArray( stock, food_list ) !== -1 || stock === 'bananas') {
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
      if (stock === 'toJSON') continue;
      if (food_target <= 0) break;

      var limit = 4 + Math.round(Math.random() * 4);
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
      if (stock === 'toJSON') continue;
      if (food_target <= 0) break;

      var limit = 4 + Math.round(Math.random() * 4);
      if ($.inArray( stock, food_list ) !== -1 || stock === 'bananas') {
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
      if (stock === 'toJSON') continue;
      if (food_target <= 0) break;

      var limit = 3; // Always leave at least a breeding pair
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
      if (stock === 'toJSON') continue;
      if (food_target <= 0) break;

      var limit = 1; // Always leave something for people to buy
      if ($.inArray( stock, food_list ) !== -1 || stock === 'bananas') {
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

   return true;
}

Place.prototype.upgrade = function() {
   // Strategy:
   // 1.2- Resource loss
   // 1.3- Gather resources
   // 1.5- Eat food, if not enough food then drop pop otherwise grow it
   // 2- Craft resources
   // 2.5- Build boats
   // 3- Attempt to upgrade industries
   // 4- Attempt to grow the town

   // 1.2 - Breeding/loss
   for (var stock in this.stock) {
      if (stock === 'toJSON') continue;
      // Animal breeding
      if ($.inArray( stock, animal_list ) !== -1) {
         // Simulation results (stable population w/o consumption):
         // Small animals, 0 farming -> 10 
         // Small animals, 6 farming -> 50 
         // Large animals, 0 farming -> 6 
         // Large animals, 6 farming -> 20 
         if (this.stock[stock] && this.stock[stock] > 1) {
            var breed_power = 0.6 + (0.015 * this.industries.farming);
            var gain = Math.ceil( Math.pow( this.stock[stock] * Math.random(), breed_power ) );
            this.stock[stock] += gain;
            var death_rate = 0.9 + (0.01 * this.industries.farming);
            if ($.inArray( stock, big_animal_list ) !== -1)
               death_rate -= 0.03;
            this.stock[stock] = Math.ceil( Math.pow( this.stock[stock], death_rate ) );
         }
      } else {
         // Random loss
         var size_factor = 0.2 + (0.01 * this.size)
         var loss = 0.7 - (Math.random() * size_factor);
         this.stock[stock] = Math.round( this.stock[stock] * loss );
      }
   }

   // 1.3 - Gather
   for(var res in this.resources) {
      var cur = this.stock[res];
      if (!cur) cur = 0;
      var income = this.resources[res] + Math.floor( Math.random() * 3 ) - 1;

      cur = Math.round(cur + income);
      this.stock[res] = cur;
   }

   // 1.5- Eat
   var food_value = this.sumFood();
   var pop_requirements = this.population * 9;
   if (food_value >= pop_requirements) {
      this.attemptEat( pop_requirements );
      this.population += 1 + Math.round( Math.random() * 2 );
      if (this.population > this.size * 100) this.population = this.size * 120;
   } else if (food_value >= pop_requirements * 2 / 3) {
      this.attemptEat( pop_requirements * 2 / 3 );
      this.population -= 2 + Math.round( Math.random() * 2 );
   } else {
      this.attemptEat( pop_requirements / 3 );
      this.population = Math.round( this.population * 0.8 );
   }

   // 2- Craft
   // TODO: More?
   var craft_count = 0;
   if (this.industries.carpentry > 0) {
      // Furniture
      if (this.stock.hardwood) {
         craft_count = Math.floor( this.stock.hardwood / 4 );
         if (craft_count > this.industries.carpentry)
            craft_count = this.industries.carpentry;
         craft_count -= (craft_count % 2);
         if (craft_count > 15 && this.industries.carpentry >= 3) {
            this.stock.desks++;
            craft_count -= 16;
            this.stock.hardwood -= 16;
         }
         if (craft_count > 6 && this.industries.carpentry >= 2) {
            this.stock.beds = (this.stock.beds + 1 || 1);
            craft_count -= 7;
            this.stock.hardwood -= 7;
         }
         if (craft_count > 3) {
            this.stock.tables = (this.stock.tables + 1 || 1);
            craft_count -= 4;
            this.stock.hardwood -= 4;
         }

         this.stock.chairs = (this.stock.chairs + (craft_count / 2) || (craft_count / 2));
         this.stock.hardwood -= craft_count;
      }
      // Wooden utensils

   }
   if (this.industries.masonry > 0) {
      // Stone tools
      if (this.stock.stone) {
         craft_count = Math.floor( this.stock.stone / 4 );
         if (craft_count > this.industries.masonry)
            craft_count = this.industries.masonry;
         this.stock.stone -= craft_count;
         this.stock.stonetools = (this.stock.stonetools + craft_count || craft_count);
      }
      // Paving stone - used for growth
      if (this.stock.stone && this.industries.masonry > 1) {
         craft_count = Math.floor( this.stock.stone / 4 );
         if (craft_count > this.industries.masonry)
            craft_count = this.industries.masonry;
         this.stock.stone -= craft_count;
         this.stock.pavingstone = (this.stock.pavingstone + craft_count || craft_count);
      }
      // Obsidian figurines
      if (this.stock.obsidian && this.industries.masonry > 2) {
         craft_count = Math.floor( this.stock.obsidian / 4 );
         if (craft_count > this.industries.masonry)
            craft_count = this.industries.masonry;
         this.stock.obsidian -= craft_count;
         this.stock.figurines = (this.stock.figurines + craft_count || craft_count);
      }
   }
   if (this.industries.smithing > 0 &&
         (this.stock['stonetools'] > 0 || this.stock['bronzetools'] > 0 || this.stock['irontools'] > 0)) {
      // Smelt bronze
      if (this.stock.tin && this.stock.copper && this.stock.coal) {
         craft_count = Math.floor( Math.min( this.stock.tin, this.stock.copper, this.stock.coal ) / 4 );
         if (craft_count > this.industries.smithing)
            craft_count = this.industries.smithing;
         this.stock.tin -= craft_count;
         this.stock.copper -= craft_count;
         this.stock.coal -= craft_count;
         this.stock.bronze = (this.stock.bronze + (2*craft_count) || (2*craft_count));
      }
      // Smelt steel
      if (this.stock.iron && this.stock.coal && this.industries.smithing > 3) {
         craft_count = Math.floor( Math.min( this.stock.iron / 2, this.stock.coal ) / 4 );
         if (craft_count > this.industries.smithing)
            craft_count = this.industries.smithing;
         this.stock.iron -= 2 * craft_count;
         this.stock.coal -= craft_count;
         this.stock.steel = (this.stock.steel + craft_count || craft_count);
      }
      // Bronze tools
      if (this.stock.bronze && this.industries.smithing > 1) {
         craft_count = Math.floor( this.stock.bronze / 4 );
         if (craft_count > this.industries.smithing)
            craft_count = this.industries.smithing;
         this.stock.bronze -= craft_count;
         this.stock.bronzetools = (this.stock.bronzetools + craft_count || craft_count);
      }
      // Iron tools
      if (this.stock.iron && this.industries.smithing > 2) {
         craft_count = Math.floor( this.stock.iron / 4 );
         if (craft_count > this.industries.smithing)
            craft_count = this.industries.smithing;
         this.stock.iron -= craft_count;
         this.stock.irontools = (this.stock.irontools + craft_count || craft_count);
      }

   }
   if (this.industries.weaving > 0) {
      // First things first: shear some sheep
      if (this.stock.sheep) {
         craft_count = Math.floor( this.stock.sheep / 4 );
         if (craft_count > this.industries.weaving)
            craft_count = this.industries.weaving;
         this.stock.wool = (this.stock.wool + craft_count || craft_count);
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
         this.stock.pants = (this.stock.pants + r1 || r1);
         this.stock.shirts = (this.stock.shirts + r2 || r2);
         this.stock.shirts = (this.stock.shirts + (craft_count - r1 - r2) || (craft_count - r1 - r2));

         while (craft_count-- > 0) {
            if (this.stock.wool > this.stock.cotton) this.stock.wool--;
            else this.stock.cotton--;
         }
      }
      // Pillows wool/cotton outside, down filling
      if ((this.stock.wool || this.stock.cotton) && this.industries.weaving > 2) {
         craft_count = Math.min( Math.floor( (this.stock.wool + this.stock.cotton) / 4 ),
            Math.floor( (this.stock.chickens + this.stock.ducks + this.stock.penguins) / 8 ) );
         if (craft_count > this.industries.weaving)
            craft_count = this.industries.weaving;

         this.stock.pillows = (this.stock.pillows + craft_count || craft_count);
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

         this.stock.dolls = (this.stock.dolls + craft_count || craft_count);
         craft_count *= 3;
         while (craft_count-- > 0) {
            if (this.stock.wool > this.stock.cotton) this.stock.wool--;
            else this.stock.cotton--;
         }
      }
      // Fancy Clothing
      if (this.stock.silk && this.industries.weaving > 3) {
         craft_count = Math.floor( this.stock.silk / 4 );
         if (craft_count > this.industries.weaving)
            craft_count = this.industries.weaving;

         var r1 = Math.round( craft_count * this.industry_randomizer1 );
         this.stock.fancydresses = (this.stock.fancydresses + r1 || r1);
         this.stock.fancysuits = (this.stock.fancysuits + craft_count - r1 || craft_count - r1);

         this.stock.silk -= craft_count;
      }
   }

   // 2.5
   if (this.building_boat_time !== undefined) {
      this.building_boat_time--;
      if (this.building_boat_time === 0) {
         var new_boat = new Boat( this.building_boat_type );
         new_boat.mine = true;
         new_boat.x = this.x;
         new_boat.y = this.y;
         boats.push( new_boat );
         my_boats.push( new_boat.id );
         this.building_boat_type = undefined;
         this.building_boat_time = undefined;
      }
   }

   // 3- Upgrade industry
   this.attemptUpgrades();

   // 4- Grow town
   this.attemptGrowth();
}

Place.prototype.upgradeFarming = function()
{
   for (var res in this.resources) {
      if ($.inArray( res, food_list ) !== -1)
         this.resources[res] += 2;
   }
   this.industries.farming++;
}

Place.prototype.upgradeCarpentry = function()
{
   for (var res in this.resources) {
      if (res === 'hardwood' || res === 'softwood')
         this.resources[res] += 2;
   }
   this.industries.carpentry++;
}

Place.prototype.upgradeMasonry = function()
{
   for (var res in this.resources) {
      if (res === 'stone' || res === 'granite' || res === 'obsidian' || res === 'coal')
         this.resources[res]++;
   }
   this.industries.masonry++;
}

Place.prototype.upgradeSmithing = function()
{
   for (var res in this.resources) {
      if (res === 'copper' || res === 'tin' || res === 'iron')
         this.resources[res]++;
   }
   this.industries.smithing++;
}

Place.prototype.upgradeWeaving = function()
{
   for (var res in this.resources) {
      if (res === 'burlap' || res === 'cotton' || res === 'silk' || res === 'sheep')
         this.resources[res] += 2;
   }
   this.industries.weaving++;
}

Place.prototype.attemptUpgrades = function() {
   // Farming
   var reqs = farming_upgrade_list[this.industries.farming];
   if (reqs) {
      var up = true;
      for (var req in reqs) {
         if ((!this.stock[req]) || this.stock[req] < reqs[req])
            up = false;
      }
      if (up) {
         for (var req in reqs)
            this.stock[req] -= reqs[req];
         this.upgradeFarming();
      }
   }
   // Carpentry
   var reqs = carpentry_upgrade_list[this.industries.carpentry];
   if (reqs) {
      var up = true;
      for (var req in reqs) {
         if ((!this.stock[req]) || this.stock[req] < reqs[req])
            up = false;
      }
      if (up) {
         for (var req in reqs)
            this.stock[req] -= reqs[req];
         this.upgradeCarpentry();
      }
   }
   // Masonry
   var reqs = masonry_upgrade_list[this.industries.masonry];
   if (reqs) {
      var up = true;
      for (var req in reqs) {
         if ((!this.stock[req]) || this.stock[req] < reqs[req])
            up = false;
      }
      if (up) {
         for (var req in reqs)
            this.stock[req] -= reqs[req];
         this.upgradeMasonry();
      }
   }
   // Smithing
   var reqs = smithing_upgrade_list[this.industries.smithing];
   if (reqs) {
      var up = true;
      for (var req in reqs) {
         if ((!this.stock[req]) || this.stock[req] < reqs[req])
            up = false;
      }
      if (up) {
         for (var req in reqs)
            this.stock[req] -= reqs[req];
         this.upgradeSmithing();
      }
   }
   // Weaving
   var reqs = weaving_upgrade_list[this.industries.weaving];
   if (reqs) {
      var up = true;
      for (var req in reqs) {
         if ((!this.stock[req]) || this.stock[req] < reqs[req])
            up = false;
      }
      if (up) {
         for (var req in reqs)
            this.stock[req] -= reqs[req];
         this.upgradeWeaving();
      }
   }
   // Boatcraft
   var reqs = boatcraft_upgrade_list[this.industries.boatcraft];
   if (reqs) {
      var up = true;
      for (var req in reqs) {
         if ((!this.stock[req]) || this.stock[req] < reqs[req])
            up = false;
      }
      if (up) {
         for (var req in reqs)
            this.stock[req] -= reqs[req];
         this.industries.boatcraft++;
      }
   }

}

Place.prototype.attemptGrowth = function() {
   if (this.size < 4) {
      // Only need sufficient population
      var pop_req = this.size * 20;

      if (this.population >= pop_req) {
         growTown( this, true );
         return true;
      }
   } else if (this.size < 7) {
      // Need decent clothing
      var pop_req = this.size * 20;
      var clothing_req = (this.size * 3) + 1;
      if ((this.stock.pants || 0) >= clothing_req && 
          (this.stock.shirts || 0) >= clothing_req && 
          (this.stock.dresses || 0) >= clothing_req) {
         if (this.population >= pop_req) {
            this.stock.pants -= clothing_req;
            this.stock.shirts -= clothing_req;
            this.stock.dresses -= clothing_req;
            growTown( this, true );
            return true;
         }
      }
   } else if (this.size < 10) {
      // Need paving stone, furniture
      var pop_req = this.size * 20;
      var clothing_req = (this.size * 3) + 1;
      var paving_req = (this.size * 10) + 30;
      var furniture_req = this.size + 2;

      if ((this.stock.pants || 0) >= clothing_req && 
          (this.stock.shirts || 0) >= clothing_req && 
          (this.stock.dresses || 0) >= clothing_req &&
          (this.stock.pavingstone || 0) >= paving_req &&
          (this.stock.chairs || 0) >= (furniture_req * 4) && 
          (this.stock.tables || 0) >= (furniture_req * 2) && 
          (this.stock.desks || 0) >= furniture_req && 
          (this.stock.pillows || 0) >= (furniture_req * 2) && 
          (this.stock.beds || 0) >= furniture_req) {
         if (this.population >= pop_req) {
            this.stock.desks -= furniture_req;
            this.stock.beds -= furniture_req;
            this.stock.tables -= 2 * furniture_req;
            this.stock.chairs -= 4 * furniture_req;
            this.stock.pavingstone -= paving_req;
            this.stock.pants -= clothing_req;
            this.stock.shirts -= clothing_req;
            this.stock.dresses -= clothing_req;
            growTown( this, true );
            return true;
         }
      }
   } else {
      // Need the fanciest clothing
      var pop_req = this.size * 20;
      var clothing_req = (this.size * 2) + 1;
      var paving_req = (this.size * 10) + 30;
      var furniture_req = (this.size * 2) + 2;

      if ((this.stock.fancysuits || 0) >= clothing_req && 
          (this.stock.fancydresses || 0) >= clothing_req &&
          (this.stock.pavingstone || 0) >= paving_req &&
          (this.stock.chairs || 0) >= (furniture_req * 4) && 
          (this.stock.tables || 0) >= (furniture_req * 2) && 
          (this.stock.desks || 0) >= furniture_req && 
          (this.stock.pillows || 0) >= (furniture_req * 4) && 
          (this.stock.beds || 0) >= furniture_req) {
         if (this.population >= pop_req) {
            this.stock.desks -= furniture_req;
            this.stock.beds -= furniture_req;
            this.stock.tables -= 2 * furniture_req;
            this.stock.chairs -= 4 * furniture_req;
            this.stock.pavingstone -= paving_req;
            this.stock.fancysuits -= clothing_req;
            this.stock.fancydresses -= clothing_req;
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

var boat_names = [ "African Queen", "SS Anne", "Argo", "Barracuda", "Batavia Queen", "Batboat", "Bebop", "Belafonte", "Bismarck", "Black Pearl", "Black Wind", "Borealis", "Borneo Prince", "Calypso", "HMS Cutlass", "Darkstar", "Dawn Treader", "HMS Defiant", "Eagle's Shadow", "Empress", "Enterprise", "Flying Dutchman", "Gankplank Galleon", "Ghost", "Going Merry", "Heart of Gold", "Henrietta", "Hispaniola", "Hyperion", "Interceptor", "Iron Wind", "The Jackdaw", "Jenny", "Jeroboam", "Jolly Roger", "Leviathan", "USS Liberty", "Libra", "Lusitania", "Maria Elena", "Moby Dick", "Nagifar", "Nautilus", "Nina", "Old Ironsides", "Oro Jackson", "Over the Rainbow", "Pequod", "HMS Pinafore", "Pinta", "Poseidon", "Queen's Gambit", "Ragnarok", "Red Dragon", "Red October", "Salty Hippo", "Santa Maria", "Silence", "SS Naked Sun", "Starfish", "Super 99", "Tempest Junior", "Thousand Sunny", "Thunderbird 4", "Titanic", "Ulysses", "USS Harry Truman", "HMS Victory", "The Walrus", "The Wanderer", "White Star", "White Widow", "X-2" ];

function boatNameGen()
{
   if (boat_names.length === 0)
      return 'Boat ' + name_count++;

   var index = Math.floor(Math.random() * boat_names.length);

   return boat_names.splice( index, 1 )[0];
}

function Boat( type )
{
   this.type = type;

   switch (type) {
      case 0:
         this.maxcargo = 50;
         this.name = "Old Faithful";
         this.typename = "Shitty Rowboat";
         this.maxhealth = 80;
         this.speed = 28;
         break;
      case 1:
         this.maxcargo = 60;
         this.name = boatNameGen();
         this.typename = "Canoe";
         this.maxhealth = 100;
         this.speed = 21;
         break;
      case 2:
         this.maxcargo = 240;
         this.name = boatNameGen();
         this.typename = "Sailboat";
         this.maxhealth = 225;
         this.speed = 16;
         break;
      case 3:
         this.maxcargo = 700;
         this.name = boatNameGen();
         this.typename = "Schooner";
         this.maxhealth = 340;
         this.speed = 12;
         break;
      case 4:
         this.maxcargo = 1500;
         this.name = boatNameGen();
         this.typename = "Yacht";
         this.maxhealth = 450;
         this.speed = 8;
         break;
      case 5:
         this.maxcargo = 7000;
         this.name = boatNameGen();
         this.typename = "Galleon";
         this.maxhealth = 660;
         this.speed = 8;
         break;
   }

   this.id = boat_id_gen++;
   this.alive = true;
   this.mine = false;

   this.cargo = new Cargo();
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

Boat.prototype.copy = function( other_boat )
{
   this.type = other_boat.type;
   this.maxcargo = other_boat.maxcargo;
   this.name = other_boat.name;
   this.typename = other_boat.typename;
   this.maxhealth = other_boat.maxhealth;
   this.speed = other_boat.speed;
   this.id = other_boat.id;
   this.alive = other_boat.alive;
   this.mine = other_boat.mine;

   this.cargo = copyCargo( other_boat.cargo );
   this.cargoweight = other_boat.cargoweight;
   this.health = this.maxhealth;
   this.x = other_boat.x;
   this.y = other_boat.y;
}

Boat.prototype.getImage = function( size )
{
   if (this.type === 0) {
      if (size === 5) return boat_1_sz5_img;
      if (size === 15) return rowboat_sz15_img;
      if (size === 45) return rowboat_sz45_img;
      return rowboat_sz60_img;

   } else if (this.type === 1) {
      if (size === 5) return boat_1_sz5_img;
      if (size === 15) return canoe_sz15_img;
      if (size === 45) return canoe_sz45_img;
      return canoe_sz60_img;

   } else if (this.type === 2) {
      if (size === 5) return boat_2_sz5_img;
      if (size === 15) return sailboat_sz15_img;
      if (size === 45) return sailboat_sz45_img;
      return sailboat_sz60_img;

   } else if (this.type === 3) {
      if (size === 5) return boat_3_sz5_img;
      if (size === 15) return schooner_sz15_img;
      if (size === 45) return schooner_sz45_img;
      return schooner_sz60_img;

   } else if (this.type === 4) {
      if (size === 5) return boat_3_sz5_img;
      if (size === 15) return yacht_sz15_img;
      if (size === 45) return yacht_sz45_img;
      return yacht_sz60_img;

   } else if (this.type === 5) {
      if (size === 5) return boat_4_sz5_img;
      if (size === 15) return galleon_sz15_img;
      if (size === 45) return galleon_sz45_img;
      return galleon_sz60_img;

   }

}

function calculateDistanceMetric( dx, dy )
{
   if (Math.abs(dx) > Math.abs(dy))
      return Math.abs(dy * 0.4) + Math.abs(dx); // === (dx - dy) + (dy * 1.4)
   else
      return Math.abs(dx * 0.4) + Math.abs(dy); // === (dx - dy) + (dy * 1.4)
}

Boat.prototype.calculateJourney = function()
{
   if (this.journey_x === -1 || this.journey_y === -1) {
      this.sail_style = -1;
   } else if (!map[this.journey_x][this.journey_y].discovered) {
      this.calculateBlindJourney();
   } else {
      var path = astar( this.x, this.y, this.journey_x, this.journey_y, true );

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
   // 0 = sail direction; 1 = explore island; 2 = journey; 3 = blind journey; 4 = sail error
   if (this.sail_style === -1)
      this.next_direction = -1;
   else if (this.sail_style === 0 || this.sail_style === 1 || this.sail_style === 3) { 
      if (this.sail_style === 3) {
         if (this.x === this.journey_path[0][0] && this.y === this.journey_path[0][1]) {
            // Destination
            this.sail_style = -1;
            this.next_direction = -1;
            this.direction = -1;
            this.blocked = false;
            return;
         }

         if (this.blocked === false)
            this.direction = getDirection( this.x, this.y, this.journey_path[0][0], this.journey_path[0][1]);
         // TODO: test if this works now - UPDATE: still breaks sometimes for some reason
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

            if (this.explore_mod & 1 && this.exploring_island !== undefined ) {
               if (this.x === this.exploring_island_x && this.y === this.exploring_island_y)
                  made_it = true;
            } else if (this.direction === 0 && dy === 0 && dx < 0) made_it = true;
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
               if (this.explore_mod & 1 && this.exploring_island === undefined) {
                  this.exploring_island = true;
                  this.exploring_island_x = this.x;
                  this.exploring_island_y = this.y;
                  this.blocked = true;
                  if (this.nav_islands_clockwise)
                     this.next_direction = start;
                  else
                     this.next_direction = end;
               } else {
                  this.blocked = false;
                  this.next_direction = this.direction;
                  this.exploring_island = undefined;
                  this.exploring_island_x = undefined;
                  this.exploring_island_y = undefined;
               }
            } else { 
               if (this.nav_islands_clockwise)
                  this.next_direction = start;
               else
                  this.next_direction = end;
            }
         } else {
            if (end > start) {
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

   if (this.sail_style === -1)
      this.sail_style = 0;

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
         else {
            places[place].stock[ cargo_id ] = count;
            // Plant food
            var place_ter = map[ places[place].x ][ places[place].y ].ter;
            if ( place_ter === 1 && $.inArray( cargo_id, plant_grassland_list )
                     && places[place].resources[ cargo_id ] === 0) {
                 places[place].resources[ cargo_id ] = 
                            (places[place].industries.farming + places[place].size) * 2;
            } else if ( place_ter === 2 && $.inArray( cargo_id, plant_jungle_list )
                     && places[place].resources[ cargo_id ] === 0) {
                 places[place].resources[ cargo_id ] = 
                            (places[place].industries.farming + places[place].size) * 2;
            } else if ( place_ter === 5 && $.inArray( cargo_id, plant_desert_list )
                     && places[place].resources[ cargo_id ] === 0) {
                 places[place].resources[ cargo_id ] = 
                            (places[place].industries.farming + places[place].size) * 2;
            } else if ( $.inArray( cargo_id, plant_stone_list )
                     && places[place].resources[ cargo_id ] === 0) {
                 places[place].resources[ cargo_id ] = 
                            (places[place].industries.farming + places[place].size) * 2;
            }
         }
         this.addCargo( 'coins', (count * price) );
      }
   }
}

Boat.prototype.bankCargo = function ( cargo_id, count )
{
   var place = map[this.x][this.y].place;
   if (place !== undefined) {
      if (this.addCargo( cargo_id, -count )) {
         if (places[place].bank[ cargo_id ]) places[place].bank[ cargo_id ] += count;
         else places[place].bank[ cargo_id ] = count;
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
   if (boat_menu > 5) boat_menu = 5;
}

function updateBoats()
{
   for( var i = 0; i < boats.length; ++i)
      boats[i].update();
}

function initBoats()
{
   var b = new Boat( 0 );
   b.mine = true;
   b.x = 150;
   b.y = 163;
   b.addCargo( 'bananas', 5 );
   boats.push( b );
   my_boats.push( b.id );
   /*
   var b2 = new Boat( 1 );
   b2.mine = true;
   b2.x = places[1].x;
   b2.y = places[1].y;
   b2.name = "Secret Test Boat";
   b2.maxhealth = 9999;
   b2.health = 9999;
   b2.maxcargo = 9999;
   b2.addCargo( 'coins', 2000 );
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
   var b3 = new Boat( 2 );
   b3.mine = true;
   b3.x = 152;
   b3.y = 163;
   boats.push( b3 );
   my_boats.push( b3.id );
   var b4 = new Boat( 3 );
   b4.mine = true;
   b4.x = 153;
   b4.y = 163;
   boats.push( b4 );
   my_boats.push( b4.id );
   var b5 = new Boat( 4 );
   b5.mine = true;
   b5.x = 154;
   b5.y = 163;
   boats.push( b5 );
   my_boats.push( b5.id );
   var b6 = new Boat( 5 );
   b6.mine = true;
   b6.x = 155;
   b6.y = 163;
   boats.push( b6 );
   my_boats.push( b6.id );
   */
}

function getGuildReqs()
{
   var boat = boats[ my_boats[boat_selection] ];
   var place = map[boat.x][boat.y].place;
   var town = places[ place ];
   if (guild_industry === 'town') {
      guild_req = [];
      if (town.size < 4) return;
      var clothing_req = (town.size * 3) + 1;
      if (town.size > 10) clothing_req = (town_size * 2) + 1;
      var paving_req = (town.size * 10) + 30;
      var furniture_req = (town.size * 2) + 2;
      if (town.size < 10 && 
            (town.stock.pants === undefined || town.stock.pants < clothing_req)) 
         guild_req.push( 'pants' );
      if (town.size < 10 && 
            (town.stock.shirts === undefined || town.stock.shirts < clothing_req)) 
         guild_req.push( 'shirts' );
      if (town.size < 10 && 
            (town.stock.dresses === undefined || town.stock.dresses < clothing_req)) 
         guild_req.push( 'dresses' );
      if (town.size >= 4 && 
            (town.stock.pavingstone === undefined || town.stock.pavingstone < paving_req)) 
         guild_req.push( 'pavingstone' );
      if (town.size >= 7 && 
            (town.stock.beds === undefined || town.stock.beds < furniture_req)) 
         guild_req.push( 'beds' );
      if (town.size >= 7 && 
            (town.stock.pillows === undefined || town.stock.pillows < furniture_req * 2)) 
         guild_req.push( 'pillows' );
      if (town.size >= 7 && 
            (town.stock.desks === undefined || town.stock.desks < furniture_req)) 
         guild_req.push( 'desks' );
      if (town.size >= 7 && 
            (town.stock.tables === undefined || town.stock.tables < furniture_req * 2)) 
         guild_req.push( 'tables' );
      if (town.size >= 7 && 
            (town.stock.chairs === undefined || town.stock.chairs < furniture_req * 4)) 
         guild_req.push( 'chairs' );
      if (town.size >= 10 && 
            (town.stock.fancydresses === undefined || town.stock.fancydresses < clothing_req)) 
         guild_req.push( 'fancydresses' );
      if (town.size >= 10 && 
            (town.stock.fancysuits === undefined || town.stock.fancysuits < clothing_req)) 
         guild_req.push( 'fancysuits' );
   } else {
      var reqs;
      if (guild_industry === 'farming') reqs = farming_upgrade_list[town.industries.farming];
      if (guild_industry === 'carpentry') reqs = carpentry_upgrade_list[town.industries.carpentry];
      if (guild_industry === 'masonry') reqs = masonry_upgrade_list[town.industries.masonry];
      if (guild_industry === 'smithing') reqs = smithing_upgrade_list[town.industries.smithing];
      if (guild_industry === 'weaving') reqs = weaving_upgrade_list[town.industries.weaving];
      if (guild_industry === 'boatcraft') reqs = boatcraft_upgrade_list[town.industries.boatcraft];

      guild_req = [];
      for (var req in reqs) {
         if (!town.stock[req] || town.stock[req] < reqs[req])
            guild_req.push( req );
      }
   }
}

function changeBoatMenu( new_menu )
{
   var boat = boats[ my_boats[boat_selection] ];
   var place = map[boat.x][boat.y].place;

   if (new_menu < 1) new_menu = 1;
   if (new_menu > 9 && new_menu !== 17) new_menu = 9;

   if (new_menu === 2)
      initDestinations();

   if (new_menu >= 5)
      testQuest();

   if (new_menu === 8) {
      guild_industry = '';
      guild_req = [];
   }

   if (new_menu === 17) {
      places[place].rename_string = "";
   }

   boat_menu = new_menu;
   refresh();
}

function renameBoat() {
   var boat = boats[ my_boats[boat_selection] ];
   var place = map[boat.x][boat.y].place;

   if (boat.cargo.coins < 25) return -1;

   boat.addCargo( 'coins', -25 );
   boat.name = places[place].rename_string;
   places[place].rename_string = "";
   boat_menu = 7;
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
   if (my_boats.length > 5) {
      if (boat_scroll > 0) {
         // Draw scroll up button
         boat_context.fillStyle = 'rgba(145,195,255,1)';
         boat_context.beginPath();
         boat_context.moveTo( BOAT_SCROLLBAR_WIDTH + 5, BOAT_HEADER_HEIGHT + 25 );
         boat_context.lineTo( BOAT_SCROLLBAR_WIDTH + 30, BOAT_HEADER_HEIGHT + 7 );
         boat_context.lineTo( BOAT_SCROLLBAR_WIDTH + 55, BOAT_HEADER_HEIGHT + 25 );
         boat_context.fill();
      }
      if (boat_scroll < my_boats.length - 5) {
         // Draw scroll down button
         boat_context.fillStyle = 'rgba(145,195,255,1)';
         boat_context.beginPath();
         boat_context.moveTo( BOAT_SCROLLBAR_WIDTH + 5, BOAT_HEIGHT - 25 );
         boat_context.lineTo( BOAT_SCROLLBAR_WIDTH + 30, BOAT_HEIGHT - 7 );
         boat_context.lineTo( BOAT_SCROLLBAR_WIDTH + 55, BOAT_HEIGHT - 25 );
         boat_context.fill();
      }
   }
}

function drawBoatContent()
{
   var num_boats = my_boats.length;
   var grid_x = BOAT_SCROLLBAR_WIDTH, grid_y = BOAT_HEADER_HEIGHT + BOAT_SCROLLBAR_HEIGHT + 5;
   for (var i = 0; i < 5; ++i) {
      var index = i + boat_scroll;
      if (index >= num_boats) break;

      var b = boats[ my_boats[index] ];
      var b_img = b.getImage( 60 );

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
         /*
         var dur_string = Math.ceil(b.health) + "\/" + b.maxhealth;
         var width = dur_string.width("14pt serif");
         boat_context.fillText("Dur: ", grid_x + 280, grid_y + 24);
         boat_context.fillText(dur_string, BOAT_WIDTH - (82 + width), grid_y + 24);
         */
         var cargo_string = Math.ceil(b.cargoweight) + "\/" + b.maxcargo;
         var width = cargo_string.width("14pt serif");
         boat_context.fillText("Cargo: ", grid_x + 330, grid_y + 24);
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
      var x_divider = BOAT_INNER_X + 10 + (70 * 4);
      var relevant_cargo = boat.cargo;
      if (boat_menu === 4) relevant_cargo = places[ place ].stock;
      var selection = boat.cargo_selected;
      if (boat_menu === 4) selection = places[place].stock_selected;

      // Draw cargo
      boat_context.strokeStyle = "rgba(85,85,85,1)";
      boat_context.lineWidth = '2';
      for (var cargo_id in relevant_cargo) {
         if ( cargo_id === 'toJSON') continue;
         var count = boat.cargo[cargo_id];
         if (boat_menu === 4) count = places[place].stock[cargo_id];

         if (count === 0 || !count) continue;

         var name = cargo_index[cargo_id].name;

         if (cargo_id === selection) {
            boat_context.fillStyle = "rgba(185,185,185,1)";
            boat_context.fillRect( x, y, 60, 60 );
         }
         boat_context.strokeRect( x, y, 60, 60 );

         // Draw image
         var img = cargo_index[cargo_id].image;
         if (img)
            boat_context.drawImage( img, x, y );

         // Draw count
         if (!(place === 0 && boat_menu === 4)) {
            var count_str = String(count);
            var count_width = count_str.width("14pt arial");
               
            boat_context.fillStyle = 'white';
            boat_context.fillRect( x + 58 - count_width, y + 62 - 18, count_width + 4, 18 )
            boat_context.strokeRect( x + 58 - count_width, y + 62 - 18, count_width + 4, 18 )

            boat_context.fillStyle = 'black';
            boat_context.font = '14pt arial';
            boat_context.fillText( count_str, x + 60 - count_width, y + 60 );
         }

         x += 70;
         if (x + 60 > x_divider) {
            x = BOAT_INNER_X + 10;
            y += 70;
         }
      }

      // Empty boxes
      while ( y + 40 < BOAT_INNER_Y + BOAT_INNER_HEIGHT ) {
         boat_context.strokeRect( x, y, 60, 60 );

         x += 70;
         if (x + 60 > x_divider) {
            x = BOAT_INNER_X + 10;
            y += 70;
         }
      }

      // Write cargo count
      boat_context.fillStyle = "black";
      var cargo_text = "Cargo: " + Math.ceil(boat.cargoweight) + "/" + boat.maxcargo;
      fitText( boat_context, cargo_text, BOAT_INNER_X, x_divider, y, 20, '16pt arial', true );

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
            boat_context.fillRect( x_divider + 15, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 39, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 30, 28 );
            if (boat_menu === 3 && place !== undefined && place !== 0 && selection !== 'coins') {
               boat_context.fillRect( x_divider + 15, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 75, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 30, 28 );
               boat_context.fillRect( x_divider + 15, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 111, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 30, 28 );
            }


            boat_context.fillStyle = 'white';
            boat_context.fillRect( x_divider + 17, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 37, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 34, 24 );
            if (boat_menu === 3 && place !== undefined && place !== 0 && selection !== 'coins') {
               boat_context.fillRect( x_divider + 17, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 73, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 34, 24 );
               boat_context.fillRect( x_divider + 17, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 109, BOAT_INNER_X + BOAT_INNER_WIDTH - x_divider - 34, 24 );
            }

            boat_context.fillStyle = 'black';
            if (boat_menu === 3) {
               if (place !== undefined && place !== 0 && selection !== 'coins') {
                  var sell_price = Math.round( places[place].getPrice( selection ) );
                  var sell_str = 'Sell (' + sell_price + ')';
                  fitText( boat_context, 'Bank', x_divider + 18, BOAT_INNER_X + BOAT_INNER_WIDTH - 18, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 74, 20, '20px arial', true);
                  fitText( boat_context, sell_str, x_divider + 18, BOAT_INNER_X + BOAT_INNER_WIDTH - 18, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 110, 20, '20px arial', true); 
               }

               fitText( boat_context, 'Discard', x_divider + 18, BOAT_INNER_X + BOAT_INNER_WIDTH - 18, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 38, 20, '20px arial', true);
            } else {
               boat_context.fillStyle = 'black';

               var buy_price = Math.round( places[place].getPrice( selection ) * 1.2 );
               var buy_str = 'Buy (' + buy_price + ')';
               if (place === 0)
                  buy_str = 'Stock Up';
               else if (boat.maxcargo - boat.cargoweight < cargo_index[selection].weight)
                  buy_str = 'Cargo Full';

               fitText( boat_context, buy_str, x_divider + 18, BOAT_INNER_X + BOAT_INNER_WIDTH - 18, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 38, 20, '20px arial', true);
               if ((place === 0 && boat.cargo.bananas && boat.cargo.bananas >= 5) ||
                   (place !== 0 && (boat.cargo['coins'] < buy_price))) {
                  boat_context.strokeStyle = 'rgba(85,85,85,1)';
                  boat_context.beginPath();
                  boat_context.moveTo( x_divider + 16, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 38 );
                  boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 16, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 12 );
                  boat_context.moveTo( x_divider + 16, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 12 );
                  boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 16, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 38 );
                  boat_context.stroke();

                  boat_context.fillStyle = 'rgba(235,0,0,1)';
               }
               if (place !== 0)
                  fitText( boat_context, 'Coins: ' + boat.cargo['coins'], x_divider + 18, BOAT_INNER_X + BOAT_INNER_WIDTH - 18, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 75, 20, '20px arial', true);
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
      fitText( boat_context, 'Explore Islands', 
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
         boat_context.strokeStyle = "rgba(85,85,85,1)";
         boat_context.lineWidth = '2';
         var x_mid = (BOAT_INNER_X + 180 + BOAT_INNER_X + BOAT_INNER_WIDTH - 20) / 2;
         if (quest_status === 0) {

            var quest_text = "Kid, I'm getting a bit old now, so it's up to you to take our bananas to market.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 45, 18, '13pt arial', true );

            quest_text = "Use the 'Sail' menu to navigate to Market Town, just north of here. You can sell bananas from your 'Cargo'. Then buy two SOFTWOOD at the 'Market' so I can fix that hole in our roof.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            y = fitText( boat_context, "That's enough tutorializing for now. Hurry back!", BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

            var x = x_mid - 30;
            y += 10;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['softwood'].image, x, y );

         } else if (quest_status === 1) {
            var quest_text = "Hoho! Well done kiddo!";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 80, 18, '13pt arial', true );
            quest_text = "You know you can make good money by trading between towns. You can buy maps in Town or just explore to find other settlements.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "Here, take some more bananas from our Market and bring back four DIFFERENT KINDS OF FOOD. We'll have a proper meal for a change!";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 2) {
            var quest_text = "Ah that was delicious. But we can't rest on our laurels.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 50, 18, '13pt arial', true );
            quest_text = "There's a lot of work to be done to fix this place up. I think there are some towns that produce tools, if not you'll have to stimulate their economy until they learn how.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "I think three STONE TOOLS will do it.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

            var x = x_mid - 30;
            y += 10;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['stonetools'].image, x, y );

         } else if (quest_status === 3) {
            var quest_text = "This is perfect! Thanks kiddo.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 80, 18, '13pt arial', true );
            quest_text = "What would really improve our situation though: some animals. If you bring me a pair of animals, I'll get them to start breeding. Though you may need a bigger boat if you want to carry a big animal.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "I think two breeding PAIRS OF ANIMALS should be enough to get us started. Get to it!";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 4) {
            var quest_text = "Hey, nice. We'll have a proper farm soon at this rate.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 50, 18, '13pt arial', true );
            quest_text = "Though, to be honest, all this work is taking its toll on me. I'd really appreciate if you could find me a nice BED. A town with decent carpenters should be able to make one. Oh, and how about a couple of downy PILLOWS?";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "I'm counting on you - I'm an old man after all.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

            var x = x_mid - 65;
            y += 10;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['beds'].image, x, y );
            x += 70;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['pillows'].image, x, y );

         } else if (quest_status === 5) {
            var quest_text = "Great, great, just what I needed.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 70, 18, '13pt arial', true );
            quest_text = "Hey listen, you're something of a traveller now right? Well I've heard tell of some interesting foods I'd like to try. What do you say?";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "Can you could find me five each of " + quest_goals[0].toUpperCase() + ", " + quest_goals[1].toUpperCase() + ", " + quest_goals[2].toUpperCase() + ", " + quest_goals[3].toUpperCase() + ", and " + quest_goals[4].toUpperCase() + "? We'll have a bit of a feast, it'll be fun.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

         } else if (quest_status === 6) {
            var quest_text = "Ah that hit the spot.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 30, 18, '13pt arial', true );
            quest_text = "I'm getting to know my way around these foreign foods pretty well, but honestly the kitchen here is pretty lousy. Why don't you bring some stuff to spruce it up?";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "A nice new TABLE with four CHAIRS to start. Oh, and how about a GRANITE countertop - bring me four slabs of GRANITE and a two sets of IRON TOOLS and I'll handle the rest.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

            var x = x_mid - 135;
            y += 10
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['tables'].image, x, y );
            x += 70;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['chairs'].image, x, y );
            x += 70;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['granite'].image, x, y );
            x += 70;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['irontools'].image, x, y );

         } else if (quest_status === 7) {
            var quest_text = "That's great, thanks. I'll just get some servants to refurbish the kitchen, you'll love what we're doing with the place.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 20, 18, '13pt arial', true );
            quest_text = "Now, the house is looking great, but I just can't have people over looking the way I do. Could you get a me a new wardrobe?";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "I think two PANTS, two SHIRTS, and a nice SUIT should be sufficient. And maybe get a few obsidian FIGURINES - you know, to spice the place up.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );

            var x = x_mid - 135;
            y += 10;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['shirts'].image, x, y );
            x += 70;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['pants'].image, x, y );
            x += 70;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['fancysuits'].image, x, y );
            x += 70;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['figurines'].image, x, y );

         } else if (quest_status === 8) {
            var quest_text = "Haha, I look fantastic! This calls for a celebration.";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 50, 18, '13pt arial', true );
            quest_text = "I hope I can rely on you to get what we need. Food-wise, I think ten each of " + quest_goals[0].toUpperCase() + ", " + quest_goals[1].toUpperCase() + ", " + quest_goals[2].toUpperCase() + ", " + quest_goals[3].toUpperCase() + ", and " + quest_goals[4].toUpperCase() + " should do it. And for meat we'll need four each of " + quest_goals[5].toUpperCase() + ", " + quest_goals[6].toUpperCase() + ", " + quest_goals[7].toUpperCase() + ", and " + quest_goals[8].toUpperCase() + ". Also five bags of SALT and SPICE.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "Well? What are you waiting for?";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 170, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 10, 18, '13pt arial', true );

            var x = x_mid - 65;
            y += 10;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['salt'].image, x, y );
            x += 70;
            boat_context.strokeRect( x, y, 60, 60 );
            boat_context.drawImage( cargo_index['spices'].image, x, y );

         } else if (quest_status === 9) {
            var quest_text = "Finally, you're here. The guests are waiting, you know. Did you bring everything? Yes?";
            var y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, BOAT_INNER_Y + 80, 18, '13pt arial', true );
            quest_text = "Look, just leave it with the servants, and please try to stay out of the way.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            quest_text = "The kids' table is over there. Don't worry, there's plenty of JUICE to go around.";
            y = fitText( boat_context, quest_text, BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 18, '13pt arial', true );
            y = fitText( boat_context, "THE END", BOAT_INNER_X + 180, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 10, 20, '15pt arial', true );

         }
      } else if (boat_menu === 5) {
         // Backdrop
         boat_context.fillStyle = "rgba(85,205,255,1)";
         boat_context.fillRect( BOAT_INNER_X + 5, BOAT_INNER_Y + 5, BOAT_INNER_WIDTH - 10, 300 );

         var ter_type = map[boat.x][boat.y].terrain;
         terSetColor( ter_type, boat_context );
         boat_context.beginPath();
         boat_context.moveTo( BOAT_INNER_X + 5, BOAT_INNER_Y + 125 );
         boat_context.bezierCurveTo( 
                  BOAT_INNER_X + (BOAT_INNER_WIDTH / 2), BOAT_INNER_Y + 80,
                  BOAT_INNER_X + (BOAT_INNER_WIDTH / 2), BOAT_INNER_Y + 80,
                  BOAT_INNER_X + BOAT_INNER_WIDTH - 5, BOAT_INNER_Y + 125 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 5, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 5 );
         boat_context.lineTo( BOAT_INNER_X + 5, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 5 );
         boat_context.lineTo( BOAT_INNER_X + 5, BOAT_INNER_Y + 125 );
         boat_context.fill();

         // - Town name
         boat_context.fillStyle = 'Black';
         fitText( boat_context, "Welcome to " + places[place].name, BOAT_INNER_X, BOAT_INNER_X + BOAT_INNER_WIDTH, BOAT_INNER_Y + 25, 28, '22pt arial', true );
         fitText( boat_context, "Population: " + places[place].population, BOAT_INNER_X, BOAT_INNER_X + BOAT_INNER_WIDTH, BOAT_INNER_Y + 56, 22, '15pt arial', true );

         // Path
         var town_size = places[place].size;

         if (town_size <= 3)
            boat_context.drawImage( dirt_road_img, BOAT_INNER_X + Math.floor(BOAT_INNER_WIDTH / 2) - 150, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 305 );
         else //if (town_size <= 6)
            boat_context.drawImage( stone_road_img, BOAT_INNER_X + Math.floor(BOAT_INNER_WIDTH / 2) - 150, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 305 );



         // Buildings:
         // - Maps (6): Reveal surrounding, or location of other towns
         // - Boats (7): Buy new boat or rename your boat
         // - Guild hall (8): information about what's needed for upgrades
         // - Bank (9): Store and retrieve stuff
         if (building_hover === 6) {
            if (town_size <= 4)
               boat_context.drawImage( maps_open_img1, BOAT_INNER_X + 77, BOAT_INNER_Y + 110 );
            else
               boat_context.drawImage( maps_open_img2, BOAT_INNER_X + 77, BOAT_INNER_Y + 110 );
         } else {
            if (town_size <= 4)
               boat_context.drawImage( maps_closed_img1, BOAT_INNER_X + 77, BOAT_INNER_Y + 110 );
            else
               boat_context.drawImage( maps_closed_img2, BOAT_INNER_X + 77, BOAT_INNER_Y + 110 );
         }

         if (building_hover === 7) {
            if (town_size <= 4)
               boat_context.drawImage( boats_open_img1, BOAT_INNER_X + 20, BOAT_INNER_Y + 200 );
            else
               boat_context.drawImage( boats_open_img2, BOAT_INNER_X + 20, BOAT_INNER_Y + 200 );
         } else {
            if (town_size <= 4)
               boat_context.drawImage( boats_closed_img1, BOAT_INNER_X + 20, BOAT_INNER_Y + 200 );
            else
               boat_context.drawImage( boats_closed_img2, BOAT_INNER_X + 20, BOAT_INNER_Y + 200 );
         }

         if (building_hover === 8) {
            if (town_size <= 4)
               boat_context.drawImage( guild_open_img1, BOAT_INNER_X + 267, BOAT_INNER_Y + 110 );
            else
               boat_context.drawImage( guild_open_img2, BOAT_INNER_X + 267, BOAT_INNER_Y + 110 );
         } else {
            if (town_size <= 4)
               boat_context.drawImage( guild_closed_img1, BOAT_INNER_X + 267, BOAT_INNER_Y + 110 );
            else
               boat_context.drawImage( guild_closed_img2, BOAT_INNER_X + 267, BOAT_INNER_Y + 110 );
         }

         if (building_hover === 9) {
            if (town_size <= 4)
               boat_context.drawImage( bank_open_img1, BOAT_INNER_X + 324, BOAT_INNER_Y + 200 );
            else
               boat_context.drawImage( bank_open_img2, BOAT_INNER_X + 324, BOAT_INNER_Y + 200 );
         } else {
            if (town_size <= 4)
               boat_context.drawImage( bank_closed_img1, BOAT_INNER_X + 324, BOAT_INNER_Y + 200 );
            else
               boat_context.drawImage( bank_closed_img2, BOAT_INNER_X + 324, BOAT_INNER_Y + 200 );
         }

      } else if (boat_menu === 6) {
         // Maps (6): Reveal surrounding, or location of other towns

         // Back button
         boat_context.drawImage( backarrow_img, BOAT_INNER_X + 20, BOAT_INNER_Y + 20 );

         // Draw map man
         boat_context.drawImage( mapman_img, BOAT_INNER_X + 15, BOAT_INNER_Y + 80 );

         // Text
         boat_context.fillStyle = "black";
         var coins = boat.cargo['coins'] || 0;
         var coin_text = "Coins: " + coins;
         fitText( boat_context, coin_text, BOAT_INNER_X + 10, BOAT_INNER_X + 190, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 50, 18, '16pt arial', true);

         var town_text = "You want maps? I have maps!";
         var y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, BOAT_INNER_Y + 30, 18, '13pt arial', true);
         town_text = "This is great nobody ever wants maps.";
         y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 20, 18, '13pt arial', true);
         town_text = "Okay, so I've got pretty good maps of these places:";
         y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 20, 18, '13pt arial', true);
         
         // Reveal surrounding area
         y = BOAT_INNER_Y + 170;
         boat_context.fillStyle = "rgba(55,55,55,1)";
         boat_context.fillRect( BOAT_INNER_X + 210, y, BOAT_INNER_WIDTH - 270, 27 );
         boat_context.fillStyle = "white";
         boat_context.fillRect( BOAT_INNER_X + 212, y + 2, BOAT_INNER_WIDTH - 274, 23 );
         boat_context.fillStyle = "black";
         town_text = places[place].name + " (" + LOCAL_MAP_PRICE + ")";
         fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 50, y, 20, '13pt arial', true);

         // Goto Button
         boat_context.fillStyle = "white";
         boat_context.strokeStyle = "rgba(85,85,85,1)";
         boat_context.lineWidth = '3';
         boat_context.beginPath();
         boat_context.moveTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 - 13, y - 5 + 13 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 + 6, y - 5 + 13 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 + 6, y - 5 + 9 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 + 17, y - 5 + 20 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 + 6, y - 5 + 31 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 + 6, y - 5 + 27 );
         boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 - 13, y - 5 + 27 );
         boat_context.fill();
         boat_context.stroke();

         if ( coins < 30 ) {
            // Cross out box
            boat_context.strokeStyle = 'rgba(85,85,85,1)';
            boat_context.lineWidth = '2';
            boat_context.moveTo( BOAT_INNER_X + 212, BOAT_INNER_Y + 172 );
            boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 62, BOAT_INNER_Y + 195 );
            boat_context.moveTo( BOAT_INNER_X + 212, BOAT_INNER_Y + 195 );
            boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 62, BOAT_INNER_Y + 172 );

            boat_context.stroke();
         }

         for (var t = 0; t < places[place].connected_towns.length; ++t) {

            var town = places[ places[place].connected_towns[t] ];

            y += 30;
            boat_context.fillStyle = "rgba(55,55,55,1)";
            boat_context.fillRect( BOAT_INNER_X + 210, y, BOAT_INNER_WIDTH - 270, 27 );
            boat_context.fillStyle = "white";
            boat_context.fillRect( BOAT_INNER_X + 212, y + 2, BOAT_INNER_WIDTH - 274, 23 );
            boat_context.fillStyle = "black";
            town_text = town.name + " (" + FOREIGN_MAP_PRICE + ")";
            fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 50, y, 20, '13pt arial', true);

            // Goto Button
            boat_context.fillStyle = "white";
            boat_context.strokeStyle = "rgba(85,85,85,1)";
            boat_context.lineWidth = '3';
            boat_context.beginPath();
            boat_context.moveTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 - 13, y - 5 + 13 );
            boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 + 6, y - 5 + 13 );
            boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 + 6, y - 5 + 9 );
            boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 + 17, y - 5 + 20 );
            boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 + 6, y - 5 + 31 );
            boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 + 6, y - 5 + 27 );
            boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 35 - 13, y - 5 + 27 );
            boat_context.fill();
            boat_context.stroke();

            if ( coins < 60 ) {
               // Cross out box
               boat_context.strokeStyle = 'rgba(85,85,85,1)';
               boat_context.lineWidth = '2';
               boat_context.moveTo( BOAT_INNER_X + 212, y + 2 );
               boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 62, y + 25 );
               boat_context.moveTo( BOAT_INNER_X + 212, y + 25 );
               boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 62, y + 2 );

               boat_context.stroke();
            }
         }

         // Buttons
      } else if (boat_menu === 7 || boat_menu === 17) {
         // Boats (7): Buy new boat or rename your boat

         // Back button
         boat_context.drawImage( backarrow_img, BOAT_INNER_X + 20, BOAT_INNER_Y + 20 );

         // Draw boat man
         boat_context.drawImage( boatman_img, BOAT_INNER_X + 15, BOAT_INNER_Y + 120 );

         boat_context.fillStyle = "black";
         var coins = boat.cargo['coins'] || 0;
         var coin_text = "Coins: " + coins;
         fitText( boat_context, coin_text, BOAT_INNER_X + 10, BOAT_INNER_X + 190, BOAT_INNER_Y + BOAT_INNER_HEIGHT - 50, 18, '16pt arial', true);

         var boat_text = "Welcome to my boat shop!";
         var y = fitText( boat_context, boat_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, BOAT_INNER_Y + 50, 18, '13pt arial', true);
         if (boat_menu === 17)
            boat_text = "What name do you want?";
         else
            boat_text = "Here's what I can do:";
         y = fitText( boat_context, boat_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 20, 18, '13pt arial', true);

         // Rename a boat
         y = 150;
         if (boat_menu === 17) {
            // Renaming interface
            boat_context.fillRect( BOAT_INNER_X + 210, y, BOAT_INNER_WIDTH - 230, 24 );
            boat_context.fillStyle = "white";
            boat_context.fillRect( BOAT_INNER_X + 212, y + 2, BOAT_INNER_WIDTH - 234, 20 );
            boat_context.fillStyle = "black";
            fitText( boat_context, places[place].rename_string, BOAT_INNER_X + 214, 10000, y, 18, '13pt arial', false);

            y += 30;
            // Rename Button
            boat_context.fillRect( BOAT_INNER_X + 280, y, 100, 24 );
            boat_context.fillStyle = "white";
            boat_context.fillRect( BOAT_INNER_X + 282, y + 2, 96, 20 );
            boat_context.fillStyle = "black";
            fitText( boat_context, "Rename", BOAT_INNER_X + 280, BOAT_INNER_X + 380, y, 18, '13pt arial', true);
         } else {
            boat_context.fillRect( BOAT_INNER_X + 210, y, BOAT_INNER_WIDTH - 230, 24 );
            boat_context.fillStyle = "white";
            boat_context.fillRect( BOAT_INNER_X + 212, y + 2, BOAT_INNER_WIDTH - 234, 20 );
            boat_context.fillStyle = "black";
            boat_text = "Rename your boat (25)";
            fitText( boat_context, boat_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y, 18, '13pt arial', true);

            if (coins < 25) {
               boat_context.strokeStyle = 'rgba(85,85,85,1)';
               boat_context.lineWidth = '2';
               boat_context.moveTo( BOAT_INNER_X + 212, y + 2 );
               boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 22, y + 22 );
               boat_context.moveTo( BOAT_INNER_X + 212, y + 22 );
               boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 22, y + 2 );

               boat_context.stroke();
            }

            // Build a boat
            y = 170;
            if (places[place].building_boat_time !== undefined) {
               boat_text = "My guys are working on the boat you ordered.";
               y = fitText( boat_context, boat_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 20, 18, '13pt arial', true);
               boat_text = "Should only take " + places[place].building_boat_time + " more days, I reckon.";
               y = fitText( boat_context, boat_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 20, 18, '13pt arial', true);

            } else {
               boat_text = "Build a new boat:";
               y = fitText( boat_context, boat_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 20, 18, '13pt arial', true);

               var boat_style = 1, boat_price = 0;

               y += 10;
               while (boat_style <= places[place].industries.boatcraft) {
                  boat_context.fillRect( BOAT_INNER_X + 210, y, BOAT_INNER_WIDTH - 230, 24 );
                  boat_context.fillStyle = "white";
                  boat_context.fillRect( BOAT_INNER_X + 212, y + 2, BOAT_INNER_WIDTH - 234, 20 );
                  boat_context.fillStyle = "black";
                  switch( boat_style ) {
                     case 1:
                        boat_text = "Canoe (400)";
                        boat_price = 400;
                        break;
                     case 2:
                        boat_text = "Sailboat (2700)";
                        boat_price = 2700;
                        break;
                     case 3:
                        boat_text = "Schooner (9500)";
                        boat_price = 9500;
                        break;
                     case 4:
                        boat_text = "Yacht (22000)";
                        boat_price = 22000;
                        break;
                     case 5:
                        boat_text = "Galleon (48000)";
                        boat_price = 48000;
                        break;
                  }
                  fitText( boat_context, boat_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y, 18, '13pt arial', true);

                  if (coins < boat_price) {
                     boat_context.strokeStyle = 'rgba(85,85,85,1)';
                     boat_context.lineWidth = '2';
                     boat_context.moveTo( BOAT_INNER_X + 212, y + 2 );
                     boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 22, y + 22 );
                     boat_context.moveTo( BOAT_INNER_X + 212, y + 22 );
                     boat_context.lineTo( BOAT_INNER_X + BOAT_INNER_WIDTH - 22, y + 2 );

                     boat_context.stroke();
                  }

                  y += 30;
                  boat_style++;
               }
            }
         }

      } else if (boat_menu === 8) {
         // Guild hall (8): information about what's needed for upgrades

         // Select a trade with buttons, display what's needed for that trade

         // Back button
         boat_context.drawImage( backarrow_img, BOAT_INNER_X + 20, BOAT_INNER_Y + 20 );

         var town = places[place];

         // Draw guild lady
         boat_context.drawImage( guildlady_img, BOAT_INNER_X + 15, BOAT_INNER_Y + 120 );

         boat_context.fillStyle = "black";
         var y;
         if (guild_industry === '') {
            var town_text = town.name + " is a town on the rise. We've got plenty of growing industries."
            y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, BOAT_INNER_Y + 80, 18, '13pt arial', true);
            town_text = "I can tell you about any of them. Go ahead, try me.";
            y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 10, 18, '13pt arial', true);

         } else if (guild_industry === 'town') {
            var town_text = "You want to know how to grow our town?";
            y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, BOAT_INNER_Y + 80, 18, '13pt arial', true);

            if (town.size === 20) {
               town_text = "Honestly our town's about as big as it could possibly be.";
            } else {
               town_text = "I figure we could expand with more";
               if (town.population < town.size * 20)
                  town_text += " POPULATION";

               if (guild_req.length === 1 && town.population >= town.size * 20)
                  town_text += " " + cargo_index[guild_req[0]].name.toUpperCase();
               else if (guild_req.length === 1 && town.population < town.size * 20)
                  town_text += " and " + cargo_index[guild_req[0]].name.toUpperCase();
               else if (guild_req.length > 1) {
                  if (town.population < town.size * 20)
                     town_text += ", " + cargo_index[guild_req[0]].name.toUpperCase();
                  else
                     town_text += " " + cargo_index[guild_req[0]].name.toUpperCase();

                  for (var i = 1; i < guild_req.length; ++i) {
                     if (i === guild_req.length - 1)
                        town_text += ", and " + cargo_index[guild_req[i]].name.toUpperCase();
                     else
                        town_text += ", " + cargo_index[guild_req[i]].name.toUpperCase();
                  }
               }
               town_text += ".";
            }
            y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 10, 18, '13pt arial', true);

         } else {
            var town_text = "You want to know how to improve " + guild_industry + "?";
            y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, BOAT_INNER_Y + 80, 18, '13pt arial', true);
            town_text = "It's currently at Level " + town.industries[ guild_industry ] + ".";
            y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 10, 18, '13pt arial', true);
            town_text = "To improve we need more";

            if (guild_req.length >= 1) {
               town_text += " " + cargo_index[guild_req[0]].name.toUpperCase();

               for (var i = 1; i < guild_req.length; ++i) {
                  if (i === guild_req.length - 1) {
                     if (i === 1)
                        town_text += " and " + cargo_index[guild_req[i]].name.toUpperCase();
                     else
                        town_text += ", and " + cargo_index[guild_req[i]].name.toUpperCase();
                  } else
                     town_text += ", " + cargo_index[guild_req[i]].name.toUpperCase();
               }
            } else {
               town_text = "Actually we've pretty much mastered that industry"
            }

            town_text += ".";
            y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 10, 18, '13pt arial', true);

         }

         // Draw buttons
         boat_context.fillStyle = "black";
         var x = BOAT_INNER_X + 200;
         var y = BOAT_INNER_Y + BOAT_INNER_HEIGHT - 140;
         boat_context.fillRect( x, y, 115, 24 );
         boat_context.fillStyle = "white";
         boat_context.fillRect( x + 2, y + 2, 111, 20 );
         boat_context.fillStyle = "black";
         fitText( boat_context, "Farming", x + 4, x + 111, y, 18, '13pt arial', true);
         y += 30;
         boat_context.fillRect( x, y, 115, 24 );
         boat_context.fillStyle = "white";
         boat_context.fillRect( x + 2, y + 2, 111, 20 );
         boat_context.fillStyle = "black";
         fitText( boat_context, "Weaving", x + 4, x + 111, y, 18, '13pt arial', true);
         y += 30;
         boat_context.fillRect( x, y, 115, 24 );
         boat_context.fillStyle = "white";
         boat_context.fillRect( x + 2, y + 2, 111, 20 );
         boat_context.fillStyle = "black";
         fitText( boat_context, "Carpentry", x + 4, x + 111, y, 18, '13pt arial', true);
         x += 130;
         y -= 60;
         boat_context.fillRect( x, y, 115, 24 );
         boat_context.fillStyle = "white";
         boat_context.fillRect( x + 2, y + 2, 111, 20 );
         boat_context.fillStyle = "black";
         fitText( boat_context, "Masonry", x + 4, x + 111, y, 18, '13pt arial', true);
         y += 30;
         boat_context.fillRect( x, y, 115, 24 );
         boat_context.fillStyle = "white";
         boat_context.fillRect( x + 2, y + 2, 111, 20 );
         boat_context.fillStyle = "black";
         fitText( boat_context, "Smithing", x + 4, x + 111, y, 18, '13pt arial', true);
         y += 30;
         boat_context.fillRect( x, y, 115, 24 );
         boat_context.fillStyle = "white";
         boat_context.fillRect( x + 2, y + 2, 111, 20 );
         boat_context.fillStyle = "black";
         fitText( boat_context, "Boatcraft", x + 4, x + 111, y, 18, '13pt arial', true);
         x = BOAT_INNER_X + 265;
         y += 30;
         boat_context.fillRect( x, y, 115, 24 );
         boat_context.fillStyle = "white";
         boat_context.fillRect( x + 2, y + 2, 111, 20 );
         boat_context.fillStyle = "black";
         fitText( boat_context, "Grow Town", x + 4, x + 111, y, 18, '13pt arial', true);
      } else if (boat_menu === 9) {
         // Bank (9): Store stuff, so as to retrieve it with other boats

         // Back button
         boat_context.drawImage( backarrow_img, BOAT_INNER_X + 20, BOAT_INNER_Y + 20 );

         // Draw town man
         boat_context.drawImage( bankman_img, BOAT_INNER_X + 10, BOAT_INNER_Y + 100 );
         boat_context.fillStyle = "black";
         var town_text = "Bring me some stuff and I'll hold onto it for you.";
         for (var cargo_id in places[place].bank) {
            if ( cargo_id === 'toJSON') continue;
            if (places[place].bank[ cargo_id ] && places[place].bank[ cargo_id ] > 0)
               town_text = "Here's your stuff. I've been taking great care of it.";
         }
         var y = fitText( boat_context, town_text, BOAT_INNER_X + 15, BOAT_INNER_X + BOAT_INNER_WIDTH - (70 * 4) - 25, BOAT_INNER_Y + 300, 18, '13pt arial', true);

         var divider = BOAT_INNER_X + BOAT_INNER_WIDTH - (70 * 4) - 10;

         // Bank divider
         boat_context.fillStyle = "rgba(185,185,185,1)";
         boat_context.fillRect(divider, BOAT_INNER_Y, 5, BOAT_INNER_HEIGHT);

         // Bank title
         boat_context.fillStyle = "black";
         town_text = "'Bank' of " + places[place].name;
         fitText( boat_context, town_text, divider, BOAT_INNER_X + BOAT_INNER_WIDTH, BOAT_INNER_Y + 5, 24, '20px arial', true);

         // Bank contents 
         var x = divider + 10, y = BOAT_INNER_Y + 36;
         var x_edge = BOAT_INNER_X + BOAT_INNER_WIDTH;
         var relevant_cargo = places[place].bank;

         boat_context.strokeStyle = "rgba(85,85,85,1)";
         boat_context.lineWidth = '2';

         for (var cargo_id in relevant_cargo) {
            if ( cargo_id === 'toJSON') continue;
            var count = places[place].bank[cargo_id];

            if (count === 0 || !count) continue;

            var name = cargo_index[cargo_id].name;


            if (cargo_id === selection) {
               boat_context.fillStyle = "rgba(185,185,185,1)";
               boat_context.fillRect( x, y, 60, 60 );
            }
            boat_context.strokeRect( x, y, 60, 60 );

            // Draw image
            var img = cargo_index[cargo_id].image;
            if (img)
               boat_context.drawImage( img, x, y );

            // Draw count
            if (!(place === 0 && boat_menu === 4)) {
               var count_str = String(count);
               var count_width = count_str.width("14pt arial");
                  
               boat_context.fillStyle = 'white';
               boat_context.fillRect( x + 58 - count_width, y + 62 - 18, count_width + 4, 18 )
               boat_context.strokeRect( x + 58 - count_width, y + 62 - 18, count_width + 4, 18 )

               boat_context.fillStyle = 'black';
               boat_context.font = '14pt arial';
               boat_context.fillText( count_str, x + 60 - count_width, y + 60 );
            }

            x += 70;
            if (x + 60 > x_edge) {
               x = BOAT_INNER_X + BOAT_INNER_WIDTH - (70 * 4);
               y += 70;
            }
         }

         while ( y + 40 < BOAT_INNER_Y + BOAT_INNER_HEIGHT ) {
            boat_context.strokeRect( x, y, 60, 60 );

            x += 70;
            if (x + 60 > x_edge) {
               x = BOAT_INNER_X + BOAT_INNER_WIDTH - (70 * 4);
               y += 70;
            }
         }

         // Info section

         // Town info
         /* 'Town' menu - GONE
         var town_text = "You want to know about " + places[place].name + "?";
         var y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, BOAT_INNER_Y + 80, 18, '13pt arial', true);
         if (places[place].industry_randomizer1 < 0.333)
            town_text = "It's difficult to get across a true sense of our town using mere words, but we do have some cold hard stats:";
         else if (places[place].industry_randomizer1 < 0.677)
            town_text = "I'm pretty clueless about that stuff, but my secretary made this cheat sheet for me:"
         else
            town_text = "That's no problem. Please feel free to access the town files. Well, really just the one file:";
         y = fitText( boat_context, town_text, BOAT_INNER_X + 200, BOAT_INNER_X + BOAT_INNER_WIDTH - 10, y + 10, 18, '13pt arial', true);

         // Info
         boat_context.fillStyle = "rgba(55,55,55,1)";
         boat_context.fillRect( BOAT_INNER_X + 210, y + 20, BOAT_INNER_WIDTH - 230, 140 );
         boat_context.fillStyle = "white";
         boat_context.fillRect( BOAT_INNER_X + 212, y + 22, BOAT_INNER_WIDTH - 234, 136 );
         boat_context.fillStyle = "black";
         town_text = "Population: " + places[place].population;
         y = fitText( boat_context, town_text, BOAT_INNER_X + 210, BOAT_INNER_X + BOAT_INNER_WIDTH - 20, y + 20, 18, '13pt arial', true);
         */

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
   drawBoatScrollbar();
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
         && y_pix > BOAT_HEIGHT - BOAT_SCROLLBAR_HEIGHT)
   { // Scroll boats down
      if (my_boats.length - boat_scroll > 5)
         boat_scroll++;
   } 
   else if (x_pix > BOAT_SCROLLBAR_WIDTH &&
         (x_pix < BOAT_SCROLLBAR_WIDTH + 90 || (boat_menu === 1 && x_pix < BOAT_WIDTH - 80))
         && y_pix > BOAT_HEADER_HEIGHT && y_pix <= BOAT_HEADER_HEIGHT + BOAT_SCROLLBAR_HEIGHT)
   { // Scroll boats down
      if (boat_scroll > 0)
         boat_scroll--;
   } 
   else if (x_pix > BOAT_SCROLLBAR_WIDTH &&
         (x_pix < BOAT_SCROLLBAR_WIDTH + 90 || (boat_menu === 1 && x_pix < BOAT_WIDTH - 80))
         && y_pix > BOAT_HEADER_HEIGHT + BOAT_SCROLLBAR_HEIGHT)
   { // Select a boat
      var selection = Math.floor((y_pix - (BOAT_HEADER_HEIGHT + BOAT_SCROLLBAR_HEIGHT + 5) ) / 70) + boat_scroll;
      if (selection < my_boats.length) {
         selectBoat( selection );
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
   else if (boat_menu >= 4 && place === undefined) {
      // TODO: Maybe some splash effects here
   }
   else if (boat_menu === 3 || boat_menu === 4)
   {
      var x_divider = BOAT_INNER_X + 10 + (70 * 4);
      if (x_pix > x_divider + 18 && x_pix < BOAT_INNER_X + BOAT_INNER_WIDTH - 18) {
         // In info pane
         if (boat_menu === 3) {
            if (boat.cargo_selected !== '') {
               if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 111 
                && y_pix < BOAT_INNER_Y + BOAT_INNER_HEIGHT - 111 + 28
                && place !== undefined) {
                  boat.sellCargo( boat.cargo_selected, 1 );
                  if (boat.cargo[ boat.cargo_selected ] === 0)
                     boat.cargo_selected = '';
                  refresh();
               } else if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 75 
                && y_pix < BOAT_INNER_Y + BOAT_INNER_HEIGHT - 75 + 28 
                && place !== undefined) {
                  boat.bankCargo( boat.cargo_selected, 1 );
                  if (boat.cargo[ boat.cargo_selected ] === 0)
                     boat.cargo_selected = '';
                  refresh();
               } else if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 39 
                && y_pix < BOAT_INNER_Y + BOAT_INNER_HEIGHT - 39 + 28 ) {
                  boat.addCargo( boat.cargo_selected, -1 ); // discard 1
                  if (boat.cargo[ boat.cargo_selected ] === 0)
                     boat.cargo_selected = '';
                  refresh();
               }
            }
         } else {
            if (places[place].stock_selected !== '') {
               if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 39 
                && y_pix < BOAT_INNER_Y + BOAT_INNER_HEIGHT - 39 + 28) {
                  if (place === 0) {
                     // Acquire bananas
                     var to_add = 5 - (boat.cargo.bananas || 0);
                     boat.addCargo( 'bananas', to_add );
                  } else {
                     boat.buyCargo( places[place].stock_selected, 1 );
                     if (places[place].stock[ places[place].stock_selected ] === 0)
                        places[place].stock_selected = '';
                     refresh();
                  }
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
               if ( cargo_id === 'toJSON') continue;
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
   else if (boat_menu === 5 && place !== 0) {
      if (x_pix > BOAT_INNER_X + 20 && x_pix <= BOAT_INNER_X + 120 &&
            y_pix > BOAT_INNER_Y + 200 && y_pix <= BOAT_INNER_Y + 390)
         changeBoatMenu( 7 );
      else if (x_pix > BOAT_INNER_X + 77 && x_pix <= BOAT_INNER_X + 197 &&
            y_pix > BOAT_INNER_Y + 110 && y_pix <= BOAT_INNER_Y + 300)
         changeBoatMenu( 6 );
      else if (x_pix > BOAT_INNER_X + 344 && x_pix <= BOAT_INNER_X + 444 &&
            y_pix > BOAT_INNER_Y + 200 && y_pix <= BOAT_INNER_Y + 390)
         changeBoatMenu( 9 );
      else if (x_pix > BOAT_INNER_X + 267 && x_pix <= BOAT_INNER_X + 387 &&
            y_pix > BOAT_INNER_Y + 110 && y_pix <= BOAT_INNER_Y + 300)
         changeBoatMenu( 8 );
   }
   else if (boat_menu >= 6 
         && x_pix >= BOAT_INNER_X + 20 && x_pix <= BOAT_INNER_X + 70
         && y_pix >= BOAT_INNER_Y + 20 && y_pix <= BOAT_INNER_Y + 70) {
      changeBoatMenu( 5 );
   }
   else if (boat_menu === 6) {
      // Maps
      if (x_pix > BOAT_INNER_X + 220 && x_pix <= BOAT_INNER_X + BOAT_INNER_WIDTH - 50) {
         var y = BOAT_INNER_Y + 170;
         if (y_pix > y && y_pix <= y + 27) {
            if (boat.cargo.coins >= LOCAL_MAP_PRICE) {
               boat.cargo.coins -= LOCAL_MAP_PRICE;
               revealArea( places[place].x, places[place].y );
            }
         }
         for (var t = 0; t < places[place].connected_towns.length; ++t) {
            var town = places[ places[place].connected_towns[t] ];
            y += 30;
            if (y_pix > y && y_pix <= y + 27) {
               if (boat.cargo.coins >= FOREIGN_MAP_PRICE) {
                  boat.cargo.coins -= FOREIGN_MAP_PRICE;
                  revealPath( places[place].x, places[place].y, town.x, town.y );
               }
            }
         }
      }
      else if (x_pix > BOAT_INNER_X + BOAT_INNER_WIDTH - 48 && x_pix <= BOAT_INNER_X + BOAT_INNER_WIDTH - 18) {
         var y = BOAT_INNER_Y + 170;
         if (y_pix > y && y_pix <= y + 27) {
            moveMap( places[place].x, places[place].y, map_zoom_level );
         }
         for (var t = 0; t < places[place].connected_towns.length; ++t) {
            var town = places[ places[place].connected_towns[t] ];
            y += 30;
            if (y_pix > y && y_pix <= y + 27) {
               moveMap( town.x, town.y, map_zoom_level );
            }
         }
      }
   }
   else if (boat_menu === 7 || boat_menu === 17) {
      // Boats
      if (x_pix > BOAT_INNER_X + 210 && x_pix <= BOAT_INNER_X + BOAT_INNER_WIDTH - 20) {
         if (boat_menu === 17 && y_pix >= 180 && y_pix < 204 
               && x_pix > BOAT_INNER_X + 280 && x_pix < BOAT_INNER_X + 380) {
            renameBoat();
         } else if (boat_menu === 7 && y_pix >= 150 && y_pix < 174) {
            changeBoatMenu( 17 );
         } else {
            var y = 220;
            for (var bt = 1; bt <= places[place].industries.boatcraft; bt++) {
               if (y_pix >= y && y_pix < y + 24) {
                  // initiate boat building
                  var coins = (boat.cargo.coins || 0);
                  if (bt === 1 && coins >= 400) {
                     boat.addCargo( 'coins', -400 );
                  } else if (bt === 2 && coins >= 2700) {
                     boat.addCargo( 'coins', -2700 );
                  } else if (bt === 3 && coins >= 9500) {
                     boat.addCargo( 'coins', -9500 );
                  } else if (bt === 4 && coins >= 22000) {
                     boat.addCargo( 'coins', -22000 );
                  } else if (bt === 5 && coins >= 48000) {
                     boat.addCargo( 'coins', -48000 );
                  } else {
                     y+= 30;
                     continue;
                  }
                  places[place].building_boat_time = bt;
                  places[place].building_boat_type = bt;
               }
               y += 30;
            }
         }
      }
   }
   else if (boat_menu === 8) {
      // Guild Hall
      if (x_pix > BOAT_INNER_X + 265 && x_pix <= BOAT_INNER_X + 380
            && y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 50 && y_pix <= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 26) {
            guild_industry = "town";
            getGuildReqs();
      } else if (x_pix > BOAT_INNER_X + 200 && x_pix <= BOAT_INNER_X + 315) {
         if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 140 && y_pix <= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 116) {
            guild_industry = "farming";
            getGuildReqs();
         } else if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 110 && y_pix <= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 86) {
            guild_industry = "weaving";
            getGuildReqs();
         } else if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 80 && y_pix <= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 56) {
            guild_industry = "carpentry";
            getGuildReqs();
         }
      } else if (x_pix > BOAT_INNER_X + 330 && x_pix <= BOAT_INNER_X + 445) {
         if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 140 && y_pix <= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 116) {
            guild_industry = "masonry";
            getGuildReqs();
         } else if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 110 && y_pix <= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 86) {
            guild_industry = "smithing";
            getGuildReqs();
         } else if (y_pix > BOAT_INNER_Y + BOAT_INNER_HEIGHT - 80 && y_pix <= BOAT_INNER_Y + BOAT_INNER_HEIGHT - 56) {
            guild_industry = "boatcraft";
            getGuildReqs();
         }
      }
   }
   else if (boat_menu === 9) {
      // Bank
      if (x_pix > BOAT_INNER_X + BOAT_INNER_WIDTH - (70 * 4)) {
         var x_box = Math.floor((x_pix - (BOAT_INNER_X + BOAT_INNER_WIDTH - (70 * 4))) / 70);
         var y_box = Math.floor((y_pix - (BOAT_INNER_Y + 36)) / 70);
         if (x_box >= 0 && x_box < 4 && y_box >= 0 && y_box < 5) {
            var index = x_box + (4 * y_box);
            var i = 0;
            var bank = places[place].bank;
            for (var cargo_id in bank) {
               if ( cargo_id === 'toJSON') continue;
               if (!bank[cargo_id] || bank[cargo_id] === 0)
                  continue;

               if (i === index) {
                  boat.addCargo( cargo_id, 1 );
                  bank[ cargo_id ]--;
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
}
$('#boat_canvas').click( onClickBoats ); 

function onMouseMoveBoats( e ) {
   if (boat_menu === 5) {
      var x_pix = e.pageX - boat_canvas.offsetLeft;
      var y_pix = e.pageY - boat_canvas.offsetTop;

      if (x_pix > BOAT_INNER_X + 20 && x_pix <= BOAT_INNER_X + 120 &&
            y_pix > BOAT_INNER_Y + 200 && y_pix <= BOAT_INNER_Y + 390)
         building_hover = 7;
      else if (x_pix > BOAT_INNER_X + 77 && x_pix <= BOAT_INNER_X + 197 &&
            y_pix > BOAT_INNER_Y + 110 && y_pix <= BOAT_INNER_Y + 300)
         building_hover = 6;
      else if (x_pix > BOAT_INNER_X + 344 && x_pix <= BOAT_INNER_X + 444 &&
            y_pix > BOAT_INNER_Y + 200 && y_pix <= BOAT_INNER_Y + 390)
         building_hover = 9;
      else if (x_pix > BOAT_INNER_X + 267 && x_pix <= BOAT_INNER_X + 387 &&
            y_pix > BOAT_INNER_Y + 110 && y_pix <= BOAT_INNER_Y + 300)
         building_hover = 8;
      else
         building_hover = 0;
   }
}
$('#boat_canvas').mousemove( onMouseMoveBoats );

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

   delta = Math.floor( delta );

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

function MapLoc( ter )
{
   this.terrain = ter;
   this.discovered = false;
   this.visible = false;
}

MapLoc.prototype.toJSON = function() {
   return "" + this.terrain + (this.discovered?"T":"F") + (this.place !== undefined?this.place:"");
}

function loadMap()
{
   for (var x = 0; x < MAP_WIDTH; ++x) {
      for (var y = 0; y < MAP_HEIGHT; ++y) {
         var mapstr = map[x][y];
         var disc = true;
         var disc_index = mapstr.indexOf("T");
         if (disc_index === -1) {
            disc_index = mapstr.indexOf("F");
            disc = false;
         }

         var ter = parseInt( mapstr.slice(0, disc_index) );
         var result = new MapLoc( ter );
         result.discovered = disc;

         if (mapstr.length - 1 > disc_index) {
            result.place = parseInt( mapstr.slice( disc_index + 1 ) );
         }
         map[x][y] = result;
      }
   }
}

function moveMap( x_cent, y_cent, zoom )
{
   if (x_cent < 0) x_cent = 0;
   if (y_cent < 0) y_cent = 0;
   if (x_cent >= MAP_WIDTH) x_cent = MAP_WIDTH - 1;
   if (y_cent >= MAP_HEIGHT) y_cent = MAP_HEIGHT - 1;
   if (zoom < 0) zoom = 0;
   if (zoom > 3) zoom = 3;

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

function revealArea( x_mid, y_mid, r )
{
   var radius = r || DEFAULT_MAP_RADIUS;

   for (var x = Math.max(0,x_mid-radius); x <= Math.min(MAP_WIDTH,x_mid+radius); ++x) {
      for (var y = Math.max(0,y_mid-radius); y <= Math.min(MAP_WIDTH,y_mid+radius); ++y) {
         var dist_sq = ((x_mid - x) * (x_mid - x)) + ((y_mid - y) * (y_mid - y));
         if (dist_sq < radius * radius) {
            map[x][y].discovered = true;
            if (map[x][y].place)
               places[map[x][y].place].discovered = true;
         }
      }
   }

   moveMap( x_mid, y_mid, map_zoom_level );
}

function revealPath( a_x, a_y, b_x, b_y )
{
   var path = astar( a_x, a_y, b_x, b_y, false );

   for (var i = 0; i < path.length - 1; ++i) {
      var x1 = path[i][0];
      var y1 = path[i][1];
      var x2 = path[i+1][0];
      var y2 = path[i+1][1];

      var dir = path[i][2];

      while ( x1 !== x2 || y1 !== y2 ) {
         // Custom small revealArea
         for (var x = Math.max(0,x1-1); x <= Math.min(MAP_WIDTH,x1+1); ++x) {
            for (var y = Math.max(0,y1-1); y <= Math.min(MAP_WIDTH,y1+1); ++y) {
               map[x][y].discovered = true;
               if (map[x][y].place)
                  places[map[x][y].place].discovered = true;
            }
         }
         var next = addDirection( x1, y1, dir );
         x1 = next[0];
         y1 = next[1];
      }
   }
   revealArea( b_x, b_y, 2 );
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
function astar( x1, y1, x2, y2, fog )
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
               continue; // Diagonal movement into full land

            var neighbor_dir = (dir + 4) % 8; // Reverse direction check
            var neighbor_ter_start = terGetStart( neighbor_ter ), neighbor_ter_end = terGetEnd( neighbor_ter );
            if ( (neighbor_dir > neighbor_ter_start && neighbor_dir < neighbor_ter_end) ||
                 (neighbor_dir > neighbor_ter_start && neighbor_ter_end < neighbor_ter_start) ||
                 (neighbor_dir < neighbor_ter_end && neighbor_ter_end < neighbor_ter_start) )
               continue;
         }

         if ( !map[neighbor[0]][neighbor[1]].discovered && fog )
            continue; // Can't plan movement through undiscovered areas (if fog on)

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
   if (x === 0 || y === 0 || map[x-1][y-1].terrain !== 0) adj_count++;
   if (y === 0 || map[x][y-1].terrain !== 0) adj_count++;
   if (x === MAP_WIDTH - 1 || y === 0 || map[x+1][y-1].terrain !== 0) adj_count++;
   if (x === 0 || y === MAP_HEIGHT - 1 || map[x-1][y+1].terrain !== 0) adj_count++;
   if (y === MAP_HEIGHT - 1 || map[x][y+1].terrain !== 0) adj_count++;
   if (x === MAP_WIDTH - 1 || y === MAP_HEIGHT - 1 || map[x+1][y+1].terrain !== 0) adj_count++;
   if (x === 0 || map[x-1][y].terrain !== 0) adj_count++;
   if (x === MAP_WIDTH - 1 || map[x+1][y].terrain !== 0) adj_count++;

   return adj_count;
}

function countOrthoganolAdjacencies( x, y )
{
   var adj_count = 0;
   if (y === 0 || map[x][y-1].terrain !== 0) adj_count++;
   if (y === MAP_HEIGHT - 1 || map[x][y+1].terrain !== 0) adj_count++;
   if (x === 0 || map[x-1][y].terrain !== 0) adj_count++;
   if (x === MAP_WIDTH - 1 || map[x+1][y].terrain !== 0) adj_count++;

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

function formattingSweep( x_min, y_min, x_max, y_max )
{
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
               if (adj[0] === -1 || adj[1] === -1 || adj[0] === MAP_WIDTH || adj[1] === MAP_HEIGHT
                     || map[adj[0]][adj[1]].terrain !== 0) { // Land
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
            map[x][y].terrain = constructTerrain( start, end, terGetType(map[x][y].terrain) );
         }
      }
   }
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
               map[x][y].terrain = ter_type;
         }
      }
   }

   // Formatting sweep
   formattingSweep( x_min, y_min, x_max, y_max );

   // Get rid of those 2x2 little islands
   for (var x = x_min; x < x_max; ++x) {
      for (var y = y_min; y < y_max; ++y) {
         if (terGetStart( map[x][y].terrain ) === 4 &&
             terGetStart( map[x+1][y].terrain ) === 6 &&
             terGetStart( map[x+1][y+1].terrain ) === 0 &&
             terGetStart( map[x][y+1].terrain ) === 2) {
            map[x][y].terrain = 0;
            map[x+1][y].terrain = 0;
            map[x+1][y+1].terrain = 0;
            map[x][y+1].terrain = 0;
         }
      }
   }
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

      // Strategy: pick a spot on the coast
      var num_towns = 0;
      if (specify && specify[0] !== undefined)
         num_towns = specify[0];
      else
      {
         var city_chance = (real_island_size - GEN_CITY_LAND_MIN) / GEN_CITY_CHANCE_DENOM;

         if (Math.random() < city_chance) {
            num_towns++;
            city_chance = (city_chance - 1) / 8;
            if (ter_type <= 4 && Math.random() < city_chance) {
               num_towns++;
         } }
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
         /* no 3-town islands, it's silly */
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
            if (in_big && t1 + t2 > 0.7) {// fuzzy edges
               in_big = (Math.random() < 0.7);
            }
            if (in_big) {
               t1 = (Math.pow((x-inner_center_x),2) / (inner_width * inner_width));
               t2 = (Math.pow((y-inner_center_y),2) / (inner_height * inner_height));
               var in_inner = (t1 + t2 <= 1);
               if (in_inner && t1 + t2 > 0.7) // fuzzy edges
                  in_inner = (Math.random() < 0.7);
               if (!in_inner) {
                  map[x][y].terrain = ter_type;
               }
            }
         }
      }

      smoothIsland( x_min, y_min, x_max, y_max, ter_type );

      // Optional second town on other side
      var num_towns = 1;
      if (x_max + y_max - x_min - y_min > 40 && Math.random() > 0.3) 
         num_towns = 2;

      while (num_towns > 0) {
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
         // Fix case where town is fully inland/unreachable
         if (terGetStart( map[x][y].terrain ) === terGetEnd( map[x][y].terrain )) {
            shoot_start = addDirection( x, y, (shoot_dir + 3) % 8, 1 );
            x = shoot_start[0];
            y = shoot_start[1];
         }
         // Land found!
         var island_resources = generateResources( ter_type );
         buildTown( x, y, island_resources );
         num_towns--;
         shift_dir += 3;
      }
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

   map_center_x = 150;
   map_center_y = 160;

   // Oh wait first we build the ring of land encircling this inland sea
   var x = 20, y = 20;
   var shift_chance;
   // Top left corner
   for (var j = 0; j <= 20; ++j) {
      for (var k = 0; k <= 20; ++k) {
         map[j][k].terrain = 4;
         map[j][k].discovered = true;
      }
   }
   // Top
   for( ; x < MAP_WIDTH / 2; ++x ) {
      var shift_chance = y / 60;
      if (Math.random() < shift_chance)
         y--;

      for (var j = 0; j <= y; ++j) {
         map[x][j].terrain = 4;
         map[x][j].discovered = true;
      }
   }
   for( ; x < MAP_WIDTH - 20; ++x ) {
      var shift_chance = (2 + (y * 0.8)) / 60;
      if (Math.random() < shift_chance)
         y++;

      for (var j = 0; j <= y; ++j) {
         map[x][j].terrain = 4;
         map[x][j].discovered = true;
      }
   }
   // Top right
   for (var j = x; j < MAP_WIDTH; ++j) {
      for (var k = 0; k <= y; ++k) {
         map[j][k].terrain = 4;
         map[j][k].discovered = true;
      }
   }
   // Right
   for( ; y < MAP_HEIGHT / 2; ++y ) {
      var shift_chance = (MAP_WIDTH - 1 - x) / 60;
      if (Math.random() < shift_chance)
         x++;

      for (var j = x; j < MAP_WIDTH; ++j) {
         map[j][y].terrain = 4;
         map[j][y].discovered = true;
      }
   }
   for( ; y < MAP_HEIGHT - 20; ++y ) {
      var shift_chance = (2 + ((MAP_WIDTH - 1 - x) * 0.8)) / 60;
      if (Math.random() < shift_chance)
         x--

      for (var j = x; j < MAP_WIDTH; ++j) {
         map[j][y].terrain = 4;
         map[j][y].discovered = true;
      }
   }
   // Bottom right
   for (var j = x; j < MAP_WIDTH; ++j) {
      for (var k = y; k < MAP_HEIGHT; ++k) {
         map[j][k].terrain = 4;
         map[j][k].discovered = true;
      }
   }
   // Bottom
   for( ; x > MAP_WIDTH / 2; --x ) {
      var shift_chance = (MAP_HEIGHT - 1 - y) / 60;
      if (Math.random() < shift_chance)
         y++;

      for (var j = y; j < MAP_HEIGHT; ++j) {
         map[x][j].terrain = 4;
         map[x][j].discovered = true;
      }
   }
   for( ; x >= 20; --x ) {
      var shift_chance = (2 + ((MAP_HEIGHT - 1 - y) * 0.8)) / 60;
      if (Math.random() < shift_chance)
         y--;

      for (var j = y; j < MAP_HEIGHT; ++j) {
         map[x][j].terrain = 4;
         map[x][j].discovered = true;
      }
   }
   // Bottom left
   for (var j = 0; j <= x; ++j) {
      for (var k = y; k < MAP_HEIGHT; ++k) {
         map[j][k].terrain = 4;
         map[j][k].discovered = true;
      }
   }
   // Left
   for( ; y > MAP_HEIGHT / 2; --y ) {
      var shift_chance = x / 60;
      if (Math.random() < shift_chance)
         x--;

      for (var j = 0; j <= x; ++j) {
         map[j][y].terrain = 4;
         map[j][y].discovered = true;
      }
   }
   for( ; map[x][y].terrain === 0; --y ) {
      var shift_chance = (2 + (x * 0.8)) / 60;
      if (Math.random() < shift_chance)
         x++;

      for (var j = 0; j <= x; ++j) {
         map[j][y].terrain = 4;
         map[j][y].discovered = true;
      }
   }
   formattingSweep( 0, 0, MAP_WIDTH - 1, MAP_HEIGHT - 1 );

   // Start by custom building the home island
   for (var x = 146; x <= 154; ++x) {
      for (var y = 161; y <= 166; ++y) {
         map[x][y].discovered = true;
      }
   }
   map[148][163].terrain = 1;
   map[148][164].terrain = 1;
   map[149][162].terrain = 1;
   map[149][163].terrain = 1;
   map[149][164].terrain = 1;
   map[150][163].terrain = 1;
   map[150][164].terrain = 1;
   map[150][165].terrain = 1;
   map[151][163].terrain = 1;
   map[151][164].terrain = 1;
   smoothIsland( 148, 161, 152, 165, 1 );
   // Manually set up town
   var hometown = new Place( 'Home' );
   map[150][163].place = hometown.id;
   hometown.x = 150;
   hometown.y = 163;
   hometown.size = 1;
   hometown.color = 'white';
   places.push( hometown );

   places[0].discovered = true;
   places[0].stock.bananas = 1;

   // Then make the first major island
   createIsland( 140, 140, 160, 160, 2, 1, [1, 6] );
   places[1].discovered = true;
   places[1].resources = {};
   places[1].stock = new Cargo();
   places[1].resources.softwood = 5;
   places[1].resources.apples = 5;
   places[1].resources.corn = 5;
   places[1].stock.chickens = 4;
   places[1].stock.sheep = 3;
   places[1].name = "Market Town";
   places[1].upgrade();

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
         if (randomizer < 30 + (30 * tropicality)) {
            ter_type = (Math.random() < (tropicality - 0.5) * 2)?2:1; // Can't be jungle outside 50 degrees
         } else if (randomizer > 80) {
            if (tropicality < 0.2) ter_type = 6;
            else if (tropicality > 0.5) ter_type = 5;
            else ter_type = ((Math.random() * 0.3)< (tropicality - 0.2))?5:6;
         } else {
            ter_type = (Math.random() < 0.4)?4:3; // More likely light stone
         }
      }
      createIsland( x_min, y_min, x_max, y_max, -1, ter_type );

   }

   for (var x = 0; x < MAP_WIDTH ; ++x) {
      for (var y = 0; y < MAP_HEIGHT ; ++y) {
         map[x][y].discovered = false;
      }
   }

   for (var t = 1; t < places.length; ++t) {
      places[t].linkTowns();
   }
   
   for (var repeat = 0; repeat < 5000; ++repeat) {
      updatePlaces();
   }
   // Make sure every kind of resource has been generated
   for (var resource in cargo_index) {
      if (cargo_index[resource].generated !== undefined && cargo_index[resource].generated === 0) {
         var tar_ter = -1;
         if ($.inArray( resource, grassland_full_list )) tar_ter = 1;
         else if ($.inArray( resource, jungle_full_list )) tar_ter = 2;
         else if ($.inArray( resource, lightstone_full_list )) tar_ter = 3;
         else if ($.inArray( resource, darkstone_full_list )) tar_ter = 4;
         else if ($.inArray( resource, desert_full_list )) tar_ter = 5;
         else if ($.inArray( resource, tundra_full_list )) tar_ter = 6;

         // Find a town on that terrain
         for (var i = 1; i < places.length; ++i) {
            var i_ter = map[places[i].x][places[i].y].terrain;

            if (i_ter === tar_ter) {
               if ($.inArray( resource, food_list ) !== -1)
                  places[i].resources[resource] = Math.ceil( Math.random() * 9 ) + 4;
               else if ($.inArray( resource, big_animal_list ) !== -1)
                  places[i].stock[resource] = Math.ceil(Math.random() * 3 + 2);
               else if ($.inArray( resource, animal_list ) !== -1)
                  places[i].stock[resource] = Math.ceil(Math.random() * 9 + 8);
               else
                  places[i].resources[resource] = Math.ceil( Math.random() * 4 ) + 1;

               break;
            }
         }
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
            if (!loc.visible)
               drawFog( grid_x, grid_y, MAP_SQUARE_DIM );
            drawPlace( loc.place, grid_x, grid_y, MAP_SQUARE_DIM );
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
               if (!loc.visible)
                  drawFog( g_x, g_y, draw_step );
               drawPlace( loc.place, g_x, g_y, draw_step );
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
                  if (!map[x][y].visible)
                     drawFog( g_x, g_y, draw_step );
                  drawPlace( place, g_x, g_y, draw_step );
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
                  map_context.drawImage( b.getImage( 45 ), g_x, g_y );

                  // draw boat progress bar
                  var progress = b.sailing_progress / b.sail_complete;
                  map_context.fillStyle = 'white';
                  map_context.fillRect( g_x + 9, g_y + 40, 27 * progress, 2 );
               } else if (map_zoom_level === 1) {
                  var g_x = MAP_DRAW_EDGE + ((b.x - min_x) * MAP_SQUARE_DIM / 3);
                  var g_y = MAP_DRAW_EDGE + ((b.y - min_y) * MAP_SQUARE_DIM / 3);
                  map_context.drawImage( b.getImage( 15 ), g_x, g_y );

               } else if (map_zoom_level === 2) {
                  var g_x = MAP_DRAW_EDGE + ((b.x - min_x) * MAP_SQUARE_DIM / 9);
                  var g_y = MAP_DRAW_EDGE + ((b.y - min_y) * MAP_SQUARE_DIM / 9);
                  map_context.drawImage( b.getImage( 5 ), g_x, g_y );

               }
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
   for (var i = 0; i <= 3; ++i) {
      if (map_zoom_level === i) {
         fitText( map_context, '=', MAP_FULL_DIM, MAP_FULL_DIM + MAP_CONTROLS_WIDTH, 65 + (i * 20), 20, '20pt arial', true);
      } else {
         fitText( map_context, '-', MAP_FULL_DIM, MAP_FULL_DIM + MAP_CONTROLS_WIDTH, 65 + (i * 20), 20, '20pt arial', true);
      }
   }
   fitText( map_context, '-', MAP_FULL_DIM, MAP_FULL_DIM + MAP_CONTROLS_WIDTH, 145, 40, '60pt arial', true);

   var cur_place = map[map_center_x][map_center_y].place;
   if (cur_place !== undefined && places[cur_place].discovered)
      fitText( map_context, places[cur_place].name, 24, MAP_FULL_DIM / 2, MAP_FULL_DIM + 1, 16, '14pt arial', false);

   fitText( map_context, map_center_x + "E - " + map_center_y + "S", MAP_FULL_DIM - 130, MAP_FULL_DIM, MAP_FULL_DIM + 1, 16, '14pt arial', true);

   // Sail to here button
   map_context.fillStyle = "white";
   map_context.strokeStyle = "rgba(85,85,85,1)";
   map_context.lineWidth = '3';
   map_context.beginPath();
   map_context.moveTo( 22, MAP_FULL_DIM + 5);
   map_context.lineTo( 10, MAP_FULL_DIM + 5);
   map_context.lineTo( 10, MAP_FULL_DIM + 2);
   map_context.lineTo( 2, MAP_FULL_DIM + 10);
   map_context.lineTo( 10, MAP_FULL_DIM + 18);
   map_context.lineTo( 10, MAP_FULL_DIM + 15);
   map_context.lineTo( 22, MAP_FULL_DIM + 15);
   map_context.fill();
   map_context.stroke();
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
      } else if (y_pix > 145 && y_pix < 185) {
         minusZoom();
         refresh();
      } else if (y_pix > 65 && y_pix < 145) {
         var new_zoom = Math.floor((y_pix - 65) / 20);
         moveMap( map_center_x, map_center_y, new_zoom );
         refresh();
      }
   } else if (y_pix > MAP_FULL_DIM && x_pix < 24) {
      changeBoatMenu( 2 );
      var boat = boats[ my_boats[boat_selection] ];
      boat.journey_x = map_center_x;
      boat.journey_y = map_center_y;
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

   delta = Math.floor( delta );

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
   if (e.which === 8 || e.which === 9) {
      e.preventDefault();
   }

   if (text_box_selection !== '' || boat_menu === 17) {
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
   if ( e.which === 16 )
      shift_down = false;
}
$(document).keyup( onKeyUp );

$("#save_button").click( function () {
   saveGame();
} );
$("#load_button").click( function () {
   loadGame();
} );

function refresh()
{
   drawMap();
   drawBoats();
}

var catchup = 0;

function update()
{
   updateBoats();
   updatePlaces();
   updateVision();
   fadeLog();

   refresh();
   ++catchup;
}

// setInterval doesn't really work when tabbed away - 1000 ms is min that works
function catchupUpdate()
{
   while (catchup < 40) {
      updateBoats();
      updatePlaces();
      catchup++;
   }
   updateVision();
   refresh();

   catchup = 0;
}

function start() {
   generateMap();
   initBoats();
   updateVision();
   refresh();

   setInterval(update, 25); // .025 sec
   //setInterval(catchupUpdate, 1000); // 1 sec
}

// Load images
var images_ready = 0;
var total_images = 104;

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

loadImage( backarrow_img, 'BackArrow.png' );

loadImage( oldman_img, 'OldMan.png' );
loadImage( mapman_img, 'MapMan.png' );
loadImage( boatman_img, 'BoatMan.png' );
loadImage( bankman_img, 'TownMan.png' );
loadImage( guildlady_img, 'GuildLady.png' );

loadImage( maps_closed_img1, 'MapStoreClosed1.png' );
loadImage( maps_closed_img2, 'MapStoreClosed2.png' );
loadImage( maps_open_img1, 'MapStoreOpen1.png' );
loadImage( maps_open_img2, 'MapStoreOpen2.png' );
loadImage( boats_closed_img1, 'BoatStoreClosed1.png' );
loadImage( boats_closed_img2, 'BoatStoreClosed2.png' );
loadImage( boats_open_img1, 'BoatStoreOpen1.png' );
loadImage( boats_open_img2, 'BoatStoreOpen2.png' );
loadImage( bank_closed_img1, 'BankClosed1.png' );
loadImage( bank_closed_img2, 'BankClosed2.png' );
loadImage( bank_open_img1, 'BankOpen1.png' );
loadImage( bank_open_img2, 'BankOpen2.png' );
loadImage( guild_closed_img1, 'GuildClosed1.png' );
loadImage( guild_closed_img2, 'GuildClosed2.png' );
loadImage( guild_open_img1, 'GuildOpen1.png' );
loadImage( guild_open_img2, 'GuildOpen2.png' );

loadImage( dirt_road_img, 'DirtPath.png' );
loadImage( stone_road_img, 'StonePath.png' );
//loadImage( paved_road_img, 'PavedPath.png' );

loadImage( boat_1_sz5_img, 'Boat_image_1_5px.png' );
loadImage( boat_2_sz5_img, 'Boat_image_2_5px.png' );
loadImage( boat_3_sz5_img, 'Boat_image_3_5px.png' );
loadImage( boat_4_sz5_img, 'Boat_image_4_5px.png' );

loadImage( rowboat_sz15_img, 'Rowboat_15px.png' );
loadImage( rowboat_sz45_img, 'Rowboat_45px.png' );
loadImage( rowboat_sz60_img, 'Rowboat_60px.png' );
loadImage( canoe_sz15_img, 'Canoe_15px.png' );
loadImage( canoe_sz45_img, 'Canoe_45px.png' );
loadImage( canoe_sz60_img, 'Canoe_60px.png' );
loadImage( sailboat_sz15_img, 'Sailboat_15px.png' );
loadImage( sailboat_sz45_img, 'Sailboat_45px.png' );
loadImage( sailboat_sz60_img, 'Sailboat_60px.png' );
loadImage( yacht_sz15_img, 'Yacht_15px.png' );
loadImage( yacht_sz45_img, 'Yacht_45px.png' );
loadImage( yacht_sz60_img, 'Yacht_60px.png' );
loadImage( schooner_sz15_img, 'Schooner_15px.png' );
loadImage( schooner_sz45_img, 'Schooner_45px.png' );
loadImage( schooner_sz60_img, 'Schooner_60px.png' );
loadImage( galleon_sz15_img, 'Galleon_15px.png' );
loadImage( galleon_sz45_img, 'Galleon_45px.png' );
loadImage( galleon_sz60_img, 'Galleon_60px.png' );

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
loadImage( spices_img, 'Spices.png' );
loadImage( glass_img, 'Glass.png' );

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
loadImage( bronzetools_img, 'Bronzetools.png' );
loadImage( irontools_img, 'Irontools.png' );

loadImage( chairs_img, 'Chairs.png' );
loadImage( tables_img, 'Tables.png' );
loadImage( beds_img, 'Beds.png' );
loadImage( desks_img, 'Desks.png' );
loadImage( figurines_img, 'Figurines.png' );
loadImage( doll_img, 'Doll.png' );
loadImage( shirt_img, 'Shirt.png' );
loadImage( pants_img, 'Pants.png' );
loadImage( dress_img, 'Dress.png' );
loadImage( fancydress_img, 'FancyDress.png' );
loadImage( fancysuit_img, 'FancySuit.png' );
loadImage( pillows_img, 'Pillows.png' );

loadImage( cargo_unknown_img, 'CargoUnknown.png' );
