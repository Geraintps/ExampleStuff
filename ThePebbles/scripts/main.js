var itemID


function loaded(){
    console.log("Loaded");
    resized();
}
function resized(){
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    
    if (isMobile) {
        document.getElementById("logo").removeEventListener("mouseover", increaseScale);
        document.getElementById("logo").removeEventListener("mouseleave", decreaseScale);
        console.log("Mobile Device");
    } else {
        document.getElementById("logo").addEventListener("mouseover", increaseScale);
        document.getElementById("logo").addEventListener("mouseleave", decreaseScale);
    }
}

function increaseScale(){
    var logo = document.getElementById("logo");
    logo.style.height = "19em";
}

function decreaseScale(){
    var logo = document.getElementById("logo");
    logo.style.height = "17em";
}

function addToCart(){
    $('#addtocart').on('click',function(){
      
      var button = $(this);
      var cart = $('#cart');
      var cartTotal = cart.attr('data-totalitems');
      var newCartTotal = parseInt(cartTotal) + 1;
      
      button.addClass('sendtocart');
      setTimeout(function(){
        button.removeClass('sendtocart');
        cart.addClass('shake').attr('data-totalitems', newCartTotal);
        setTimeout(function(){
          cart.removeClass('shake');
        },500)
      },1000)
    })
}
