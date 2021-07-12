'use strict';




function menu() {
  var body = document.body;


  var burgerNav = document.getElementsByClassName('b-nav')[0];
  var logo = document.getElementsByClassName("logo")[0];
 

  [body, burgerNav, logo].forEach(function (el) {
    el.classList.toggle('open');
  });

}

