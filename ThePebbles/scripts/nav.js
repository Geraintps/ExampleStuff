'use strict';




function menu() {
  var body = document.body;


  var nav = document.getElementsByClassName('nav')[0];
  var logo = document.getElementsByClassName("logo")[0];
 

  [body, nav, logo].forEach(function (el) {
    el.classList.toggle('open');
  });

}

