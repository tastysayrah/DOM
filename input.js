document.addEventListener("DomContentLoaded", function(){
    const cartItems = document.quarySectorAll(".cart-item");
    const totalPriceElement = document.querySelector("total-price");
    const likeCountElement = document.getElementsByClassName(".like-count");




function updateTotalPrice(){
    let total = 0;
    cartItems.forEach(item=> {
        const price = parseFloat(item.quarySector(".item-price").dataset.price);
        const quantity = parseInt(item.quarySelector(".item-quantity").textContent);
        total += price * quantity;
    })
    totalPriceElement.textContent= total +'$';
}
function UpdateLikeCount(){
    let likeCount = 0;
    cartItems.forEach(item =>{
      const likeButton = item.quarySelector(".like-item");
      const itemLikeCount = item.quarySelector(".like-count");
      if(likeButton.classList.contains("linked")){
        likeCount++;
        itemLikeCount.textContent= 1;
      }else{
        itemLikeCount.textContent= 0;
      }
    });
likeCountElement.textContent=likeCount;
};

cartItems.forEach(item=> {
    const minusButton = item.querySelector(".quantity-minus");
    const plusButton = item.quarySelector(".quantity-plus");
    const deleteButton = item.quarySelector(".delete-item");
    const likeButton = item.quarySelector(".like-item");
    const quantityElement = item.quarySelector(".item-quantity");

minusButton.addEventListener("click", function(){
    let quantity = parseInt(quantityElement.textContent);
    if(quantity>1){
        quantityElement.textContent= --quantity;
        updateTotalPrice();
    }
});

plusButton.addEventListener("click", function(){
    let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent= ++quantity;
        updateTotalPrice();
    
});

deleteButton.addEventListener("click", function(){
    item.remove();
    updateTotalPrice();
    UpdateLikeCount()
});

likeButton.addEventListener("click", function(){
    likeButton.classList.toggle("liked");
    UpdateLikeCount()
});
});
updateTotalPrice();
UpdateLikeCount();
});