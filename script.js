let totalAmount=0;
let totalDiscount=0;
function addToCart(button){
    let productElement=button.parentElement;
    let price=parseInt(productElement.getAttribute('price'));
    let discount=parseInt(productElement.getAttribute('dis'));
    totalAmount+=price;
    totalDiscount+=discount;
    document.getElementById('total-amt').innerText=`₹${totalAmount}`;
    document.getElementById('total-dis').innerText=`₹${totalDiscount}`;
    let finalAmount=totalAmount-totalDiscount;
    document.getElementById('final-amt').innerText=`₹${finalAmount}`;
}
function placeOrder(){
    alert("Order placed!");
}