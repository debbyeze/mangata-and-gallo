var cartImg = document.getElementsByClassName("cart-img");
var countcart = document.getElementById("count");

// Increment cart by clicking

function clickedCart() {
  for (i = 0; i < cartImg.length; i++) {
    const eachcart = cartImg[i];
    eachcart.addEventListener("click", () => {

      if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
          sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
          eachcart.innerText = "Added to cart";
          countcart.innerHTML = sessionStorage.clickcount;
          eachcart.style.pointerEvents = "none";
          alert("Added to cart");
          addItem();
        } else {
          sessionStorage.clickcount = 1;
        }

      }
      else {
        document.getElementById("result").innerText = "Sorry, your browser does not support web storage...";
      }

    });
  }
          addItem();


};


//Add item to cart
function addItem() {
  var noItem = document.getElementById("no-item");

  noItem.innerHTML = "come";
  eachcart.style.display = "none";

}

clickedCart();