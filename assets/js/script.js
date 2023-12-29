/**
 * Creater By 
 * Date:
 * Uses: Main Script (JS)
*/

/** Seach Modal **/
document.addEventListener('DOMContentLoaded', function(){
  const openSearchBtn = document.getElementById('searchBtn');
  const closeSearchBtn = document.getElementById('closeSearch');
  const searchModal = document.getElementById('searchModal');

  openSearchBtn.addEventListener('click', function() {
      searchModal.style.display = "flex";
    });
  closeSearchBtn.addEventListener('click', function(){
      searchModal.style.display = "none";
    });
  window.addEventListener('click', function(event) {
    if (event.target === searchModal) {
      searchModal.style.dislay = "none";
    }
  });
});

/** Cart Modal **/
document.addEventListener('DOMContentLoaded',
function(){
  const openCartBtn = document.getElementById('cartBtn');
  const closeCartBtn = document.getElementById('');
  const cartModal = document.getElementById('cartModal');
  
  openCartBtn.addEventListener('click', function(){
    cartModal.style.display = "block";
  });
  closeCartBtn.addEventListener('click', function(){
    cartModal.style.display = "none";
  });
  window.addEventListener('click', function(event){
    if(event.target === cartModal){
      cartModal.style.dislay = "none";
    }
  });
});