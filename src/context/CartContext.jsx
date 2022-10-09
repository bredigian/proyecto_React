import React, { useState } from "react"
export const CartContext = React.createContext([])
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addToCart = (data, quantity) => {
    console.log(data)
    if (isInCart(data.id)) {
      console.log("UPDATED PRODUCT!!!")
      setCart(
        cart.map((product) => {
          return product.id === data.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        })
      )
    } else {
      console.log("NEW PRODUCT IN CART!!!")
      setCart([...cart, { ...data, quantity }])
    }
  }
  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false
  }

  const removeProduct = (id) => {
    setCart(cart.reduce((item) => item.id == id))
  }
  const clearCart = () => {
    setCart([])
  }
  console.log("Cart: ", cart)
  return (
    <CartContext.Provider
      value={{ addToCart, isInCart, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
