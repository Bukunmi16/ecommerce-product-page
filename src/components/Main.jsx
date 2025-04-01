import Header from "./Header"
import Body from "./Body"
import Cart from "./Cart"
import { useState } from "react"

import shoe1 from "../assets/images/image-product-1.jpg"
import shoe1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg"

import shoe2 from "../assets/images/image-product-2.jpg"
import shoe2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg"

import shoe3 from "../assets/images/image-product-3.jpg"
import shoe3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg"

import shoe4 from "../assets/images/image-product-4.jpg"
import shoe4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg"

export default function Main() {

    const [openCart, setOpenCart] = useState(false)
    const [sideBarOpen, setSideBarOpen] = useState(false)   
    const [count, setCount] = useState(0)
    const [quantityCount, setQuantityCount] = useState(0)
    const [cart, setCart] = useState([])

    
    // Arrow Functions (Previous/Next)
    function next() {
        setOpenCart(false)
        if (count < 3) {
            setCount( prev => prev + 1)    
        }else if (count === 3) {
            setCount(1)
        }
    } 
    
    function previous() {
        setOpenCart(false)
        if (count > 0) {
        setCount(prev => prev - 1)
    }
        if (count === 0){
        setCount(3)
    }
}
    const item = {
        companyName: "SNEAKER COMPANY",
        category: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", 
        cost: 250,
        discount: 50,
        quantity: quantityCount,
        images: [
                {
                    id: 0,
                    image: shoe1,
                    thumbnail: shoe1Thumbnail,
                },
                {
                    id: 1,
                    image: shoe2,
                    thumbnail: shoe2Thumbnail,
                },
                {
                    id: 2,
                    image: shoe3,
                    thumbnail: shoe3Thumbnail,
                },
                {
                    id: 3,
                    image: shoe4,
                    thumbnail: shoe4Thumbnail,
                }
            ]
        }
    


    return(
        <>
        <Header
        setOpenCart={setOpenCart}
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
        openCart={openCart}
        cartItem={cart}
        quantity={quantityCount}
        />

        <Body
        item={item}
        next={next}
        previous={previous}
        count={count}
        setCount={setCount}
        quantityCount={quantityCount}
        setQuantityCount={setQuantityCount}
        setCart={setCart}
        setOpenCart={setOpenCart}
        openCart={openCart}
        />
        </>
    )
}