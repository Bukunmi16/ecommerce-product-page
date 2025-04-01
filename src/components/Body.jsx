import Cart from "./Cart"
import img from "../assets/images/image-product-3.jpg"
import nextArrow from "../assets/images/icon-next.svg"
import previousArrow from "../assets/images/icon-previous.svg"
import plus from "../assets/images/icon-plus.svg"
import minus from "../assets/images/icon-minus.svg"
import cartIcon from "../assets/images/icon-cart.svg"
import cancelIcon from "../assets/images/icon-close.svg"
import { useState } from "react"

export default function Body({item, quantityCount, setCart, setOpenCart, openCart, setCount, setQuantityCount, count, previous, next}) {
    
    
    const shoes = item.images
    const [newCount, setNewCount] = useState(count)
    const [selectedShoe, setSelectedShoe] = useState(shoes[newCount].image)
    const [imgDisplay, setImgDisplay] = useState(false)
    const discountPrice = item.discount/100 * item.cost

    function quantityToZero() {
        console.log(item.quantity);
    }

    

    const thumbElements = shoes.map((shoe,index) => {
        // console.log(shoe);
        return(
            <img 
            key={index}
            src={shoe.thumbnail}
            onClick={() => setSelectedShoe(shoe.image)}
            alt={`shoe-thumbnail${index}`}
            className={`thumbnail ${shoe.image === selectedShoe ? "active" : "inactive"}`}
            />
        )
    })

    function closeCart() {
        setOpenCart(false)
    }
    
    return(
        <section onClick={openCart && closeCart} className="body">
        <div className="slider">
        <img src={item.images[count].image} alt="img" />
        <div className="arrow-container">
        <span onClick={previous}>
        <img src={previousArrow} className="arrows" alt="" />
        </span>
        <span onClick={next} >
        <img src={nextArrow} className="arrows" alt="" />
        </span>
        </div>
        </div>

        <div className="view-sneaker-desktop">
            <div className="shoe-display">
            <div className="main-image">
                <img src={selectedShoe} onClick={() => setImgDisplay(true)} alt="" />
            </div>
            <div className="thumbs">
            {thumbElements}
            </div>
            </div>
        </div>

        <div className="sneaker-details">
        <div>
        <p className="company-name">{item.companyName}</p>
        <h2>{item.category}</h2>
        <p className="item-description">{item.description}</p>

        <div className="price-container">
        <div className="discounts">
        <span className="cost">${discountPrice.toFixed(2)}</span>
        <span className="percentage">{item.discount}%</span>
        </div>
        <span className="original-cost">${item.cost.toFixed(2)}</span>
        </div>
        
        <div className="quantity-and-add-to-cart">

        <div className="quantity-container">
        <span className="minus" onClick={item.quantity === 0 ? () => console.log("Increase Quantity") : () => setQuantityCount(prevCount => prevCount - 1) }>
        <img src={minus} alt="" />
        </span>

        <span className="quantity">{item.quantity}</span>
        
        <span className="plus" onClick={() => setQuantityCount(prevCount => prevCount + 1)}>
        <img src={plus} alt=""/>
        </span>
        </div>

        <button onClick={item.quantity === 0 ? quantityToZero : () => setCart(item)} className="add-to-cart">
            <img src={cartIcon} alt="cart-icon" />
            <span>Add to cart</span>
        </button>
        </div>
        </div>
        </div>

        {imgDisplay && <div className="display-overlay">
        <div className="image-display">
        <img src={cancelIcon} className="cancel-icon" onClick={() => setImgDisplay(false)} alt="" />
        <img className="big-image" src={selectedShoe} alt="img" />
        
        <div className="arrow-container2">
        <span
        //  onClick={previous2}
        >
        <img src={previousArrow} className="arrows" alt="" />
        </span>
        <span
        //  onClick={next2}
         >
        <img src={nextArrow} className="arrows" alt="" />
        </span>
        </div>
        <div className="thumbs">
        {thumbElements}
        </div>
        </div>
        </div>}
        </section>
    )
}