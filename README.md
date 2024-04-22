<!DOCTYPE HTML>
<html lang="en">
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1">

<title>untitled document</title>

<!--<link rel="stylesheet" href="screen.css" media="screen">-->

<style media="screen">

body {
    background-color: #f9f9f9;
    font: 100% / 162% BlinkMacSystemFont, -apple-system, 'Segoe UI', roboto, helvetica, arial, sans-serif;
 }

.hide_input {
     display:none;
 }

.hide_type {
     display:none;
 }
</style>

</head>
<body> 
<p>Select the number of inputs on your interface. (max. 8)</p>
 <form id="num_inputs" action="#">
  <select id="number-of-inputs">
   <option value="">0</option>
   <option value="1">1</option> 
   <option value="2">2</option>
   <option value="3">3</option>
   <option value="4">4</option>
   <option value="5">5</option>
   <option value="6">6</option>
   <option value="7">7</option>
   <option value="8">8</option>
  </select>
 </form>

  <div class="hide_input">
    <h2>Input 1</h2> <p id="input_1"></p>
<p>How would you like the first input to function?</p>

<form id="type_inputs" action="#">
    <input type="radio" id="keyboard" name="type_of_interface" value="Keyboard">
    <label for="keyboard">Keyboard</label><br>
    <input type="radio" id="mouse" name="type_of_interface" value="Mouse">
    <label for="mouse">Mouse</label><br>
    <input type="radio" id="both" name="type_of_interface" value="Keyboard and Mouse">
    <label for="both">Keyboard and Mouse</label><br><br>
</form>

<p class="hide_type">Press a key on the keyboard in the input field.</p>

<input class="hide_type" type="text" id="text1" value="" size="40" onkeydown="myFunction(event)">
<p id="demo"></p>
<input class="hide_type" id="btnDel" type="button" value="Clear" onclick="del();" />
  </div>


  <div class="hide_input">
    <h2>Input 2</h2> <p id="input_2"></p>
    <p>How would you like the second input to function?</p>

    <form id="type_inputs" action="#">
        <input type="radio" id="keyboard" name="type_of_interface" value="Keyboard">
        <label for="keyboard">Keyboard</label><br>
        <input type="radio" id="mouse" name="type_of_interface" value="Mouse">
        <label for="mouse">Mouse</label><br>
        <input type="radio" id="both" name="type_of_interface" value="Keyboard and Mouse">
        <label for="both">Keyboard and Mouse</label><br><br>
    </form></div>
  <div class="hide_input">Input 3</div>
  <div class="hide_input">Input 4</div>
  <div class="hide_input">Input 5</div>
  <div class="hide_input">Input 6</div>
  <div class="hide_input">Input 7</div>
  <div class="hide_input">Input 8</div>
<script>
( function( d ) {
  'use strict';

   var c, inputs = d.querySelectorAll( '.hide_input' );
   d.querySelector( '#num_inputs' ).reset();

   d.querySelector( '#number-of-inputs' ).addEventListener( 'change',
      function() {
        for( c = 0; c < inputs.length; c ++ ) {
              inputs[ c ].classList.add( 'hide_input' );
         }
        for ( c = 0; c < this.value; c ++ ) {
              inputs[ c ].classList.remove( 'hide_input' );
         }
      },false );
}(document));
    (function (d) {
        'use strict';

        var c, inputs = d.querySelectorAll('.hide_type');
        d.querySelector('#type_inputs').reset();

        d.querySelector('#type_inputs').addEventListener('change',
            function () {
                for (c = 0; c < inputs.length; c++) {
                    inputs[c].classList.add('hide_type');
                }
                for (c = 0; c < this.value; c++) {
                    inputs[c].classList.remove('hide_type');
                }
            }, false);
 }( document ));
        
 
 const keys= [];
        function myFunction(event) {
            let key = event.code;
        let key_up = key.toUpperCase();
        keys.push(key_up);
        document.getElementById("demo").innerHTML = "The keys list is: " + keys;
        console.log(keys);
}

        function del() {
    var demo_text = document.getElementById("text1");
        keys.length = 0;
        document.getElementById("demo").innerHTML = ""
        demo_text.value = "";
        console.log(keys);
}

</script>  

</body>
</html>
