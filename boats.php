<?php
session_start();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 5.01//EN" "http://www.w3.org/TR/html5/strict.dtd">
<html unselectable="on" onselectstart="return false" onmousedown="return false">
<head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="content-type"><title>Trade Winds</title>
<style rel="stylesheet" type="text/css" href="boats.css" media="screen"></style>
</head>
<body>
   <noscript>This game uses Javascript. Your browser either
   doesn't support Javascript or you have it turned off.
   To play this game, please use
   a Javascript enabled browser.</noscript>
   <div id="header_div"><a href="http://www.cgmorton.com/holygophergames/?page=etc">Back</a><center><h2>Trade Winds</h2></center></div>
<center>
   <div id="game_div">
   <canvas id="boat_canvas" width="550" height="429"></canvas>
   <canvas id="map_canvas" width="449" height="429"></canvas>
   </div>
</center>
   <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
   <script type="text/javascript" src="../.libraries/heap.js"></script>
   <script src="boats.js" type="text/javascript"></script>
   </body>
</html>
