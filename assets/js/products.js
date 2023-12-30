const product = [
  {
    id: 0,
    brand: 'HP',
    product_img: 'assets/img/product/laptop.png',
    title: 'HP 120GB, Silver',
    price: '120',
    available: '100+',
  },
];

const categories = [...new Set(product.map((item) => { return item }))]
let i=0;
document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchData)
    )
  })
  displayItem(filteredData)
});

const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
    var { brand, fav_icon, product_img, title, price, available } = item;
    return (
      `<div class="card">
    <div class="top-area">
      <div class="brand">${brand}</div>
      <img src="./assets/img/icons/heart.png" alt="fav">
    </div> 
      <div class = "product-img-area" >
      <img src="${product_img}">
    </div>
    <div class="info">
      <div class="title">${title}</div>
      <div class="price">${price}</div>
    </div>
    <div class="bcs">
      <button onclick='addtocart("+(i++)+")'>Add to cart</button>
      <img src="./assets/img/icons/buy.jpg">
    </div>
    <div class="end-area">
      <p class=available>Available: ${available}</p>
      <p class="review">&#9733;&#9733;&#9733;&#9734;&#9734;</p>
    </div>
  </div>`)
  }).join('')
};
var cart =[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
displayItem(categories);