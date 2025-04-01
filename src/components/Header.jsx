import { useState } from "react"
import Cart from "./Cart"
import sideBarIcon from "../assets/images/icon-menu.svg"
import logo from "../assets/images/logo.svg"
import avatar from "../assets/images/image-avatar.png"
import cart from "../assets/images/icon-cart.svg"
import closeSideBar from "../assets/images/icon-close.svg"


export default function Header({setOpenCart, sideBarOpen, cartItem, quantity, setSideBarOpen, openCart}) {
    
    const [navList, setNavList] = useState(["Collections", "Men", "Women", "About", "Contact"])   

    const navElements = navList.map((nav, index) => {
        return(
            <li key={index}>{nav}</li>
        )
    })
    
    // console.log(cartItem);
    
    function closeCart() {
        setOpenCart(false)
    }
        
    return(
        <>
        <header onClick={openCart && closeCart}>
        {openCart && <Cart
        item={cartItem}
        quantity={quantity}
        setOpenCart={setOpenCart}
        />}
        <div className={`overlay ${sideBarOpen ? "show" : ""}`} onClick={() => setSideBarOpen(false)}></div>

            <aside className={`sidebar ${sideBarOpen ? "open" : "closed"}`}>
                <div>
                <button className="close" onClick={() => setSideBarOpen(false)}>
                    <img src={closeSideBar} alt="" className="sidebar-close" />
                </button>
                    <ul className="nav-list">
                        {navElements}
                    </ul>
                </div>
            </aside>

            <nav className="header-container-1">
                <button className="sidebar-open" onClick={() => setSideBarOpen(true)}>
                <img src={sideBarIcon} alt="side-bar" />
                </button>
                <img src={logo} alt="sneaker-logo" className="logo" />
                <ul className="nav-bar">
                       {navElements}
                    </ul>
            </nav>

            <div className="header-container-2">
            <div className="cart-container">
            <img onClick={() => setOpenCart(prevState => !prevState)} src={cart} alt="cart" className="cart" />
            {cartItem.quantity > 0 ? <span className="items-quantity">{cartItem.quantity}</span> : '' }
            </div>
            <img src={avatar} alt="avatar" className="avatar"/>
            </div>
        </header>
        </>
    )
}