import { useState, useEffect } from "react"
import api from "../api"

function useCartData() {
  const cart_code = localStorage.getItem("cart_code")
  const [cartitems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0.0)
  const [productCount, setProductCount] = useState(0)
  const tax = 4.0
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!cart_code) {
      setCartItems([])
      setCartTotal(0)
      setProductCount(0)
      return
    }

    setLoading(true)
    api.get(`get_cart?cart_code=${cart_code}`)
      .then(res => {
        setCartItems(res.data.items || [])
        setCartTotal(res.data.sum_total || 0)
        setProductCount(res.data.num_of_product || 0)
        setLoading(false)
      })
      .catch(err => {
        console.log("Cart fetch error:", err.message)
        setCartItems([]) // always safe
        setCartTotal(0)
        setProductCount(0)
        setLoading(false)
      })
  }, [cart_code])

  return { cartitems, productCount, setCartItems, cartTotal, setCartTotal, loading, tax }
}

export default useCartData
