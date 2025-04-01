import deleteIcon from "../assets/images/icon-delete.svg"

export default function Cart({item, quantity, setOpenCart}){
    let discountCost = item.discount/100 * item.cost
    let total = discountCost * item.quantity    
    
    function deleteItem() {
        quantity = 0
        item.quantity = 0
        setOpenCart(false)
    }
    
    return(
        <section className="cart-body">
         <div className="cart-heading">
             <p>Cart</p>
             </div>          
        {quantity === 0 ? <p className="empty-cart">Your cart is empty</p> :
         <>
            <div className="cart-details">
             <img src={item.images[0].thumbnail} alt="" className="item-img" />
             <span className="item-details">
                 <p className="item-name">
                 {item.category}
                 </p>
                 <p className="item-cost">
                 ${discountCost.toFixed(2)} x {item.quantity} <strong>${total.toFixed(2)} </strong>
                 </p>
             </span>
             <img src={deleteIcon} alt="" onClick={deleteItem} className="delete-item" />
             </div>
             
             <button className="checkout-btn">
                 Checkout
             </button>
        </> }
        </section>

    )
}