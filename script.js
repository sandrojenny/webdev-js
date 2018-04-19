"use strict";

window.addEventListener("load", function(){

  let box1 = document.getElementById('box_1');
  let box2 = document.getElementById('box_2');
  let btn = document.getElementById('btn');
  let thing = document.createElement('p');
  thing.innerHTML = "This is a new Element";

  box1.addEventListener('click', function(){
    box2.classList.toggle('hidden');
  });

  btn.addEventListener('click', function(){
    box2.appendChild(thing);
  });

});
