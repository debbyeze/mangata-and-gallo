// hamburger
var closeMenu = document.getElementById("close");
var menu = document.getElementById("menu");
var navList = document.getElementsByClassName('nav-list');
var cartAside = document.getElementById("cart-aside");
var navBody = document.getElementById("nav");

menu.addEventListener("click", () => {
    menu.style.display = "none";
    cartAside.style.display = "none";
    closeMenu.style.display = "block";
    navBody.style.display = "block";

    for (i = 0; i < navList.length; i++) {
        navList[i].style.display = "block";
        
    }
},[5]);

closeMenu.addEventListener("click", () => {
    closeMenu.style.display = "none";
       navBody.style.display = "flex";
    menu.style.display = "block";
    cartAside.style.display = "block";

    for (i = 0; i < navList.length; i++) {
        navList[i].style.display = "none";


    }

});


// modal
var modal = document.getElementById('modal');

function showModal() {
 modal.style.display = "flex"; 

};

function closeModal () {
  modal.style.display = "none";
};