import { useState } from "react"
import PropTypes from "prop-types"
import api, { BASE_URL } from "../../api"
import { toast } from "react-toastify"

const CartItem = ({ item, setCartTotal, setCartItems, cartitems, setNumberCartItems }) => {
  const [quantity, setQuantity] = useState(item.quantity)
  const [loading, setLoading] = useState(false)

  const itemData = { quantity: quantity, item_id: item.id }
  const itemID = { item_id: item.id }

  function deleteCartitem() {
    const confirmDelete = window.confirm("Are you sure you want to delete this cart item?")
    if (!confirmDelete) return

    api.post("delete_cartitem/", itemID)
      .then(res => {
        toast.success("Cart item deleted successfully")
        const updatedCart = cartitems.filter(cartitem => cartitem.id !== item.id)
        setCartItems(updatedCart)
        setCartTotal(updatedCart.reduce((acc, curr) => acc + curr.total, 0))
        setNumberCartItems(updatedCart.reduce((acc, curr) => acc + curr.quantity, 0))
      })
      .catch(err => console.log(err.message))
  }

  function updateCartitem() {
    setLoading(true)
    api.patch("update_quantity/", itemData)
      .then(res => {
        setLoading(false)
        toast.success("Cart item updated successfully")
        const updatedCart = cartitems.map(cartitem => cartitem.id === item.id ? res.data.data : cartitem)
        setCartTotal(updatedCart.reduce((acc, curr) => acc + curr.total, 0))
        setNumberCartItems(updatedCart.reduce((acc, curr) => acc + curr.quantity, 0))
      })
      .catch(err => { console.log(err.message); setLoading(false) })
  }

  return (
    <div className="col-md-12">
      <div className="cart-item d-flex align-items-center mb-3 p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <img src={`${BASE_URL}${item.product.image}`} alt={item.product.name} className="img-fluid" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} />
        <div className="ms-3 flex-grow-1">
          <h5 className="mb-1">{item.product.name}</h5>
          <p className="mb-0 text-muted">{`$${item.product.price}`}</p>
        </div>
        <div className="d-flex align-items-center">
          <input type="number" min="1" className="form-control me-3" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} style={{ width: '70px' }} />
          <button className="btn btn-sm mx-2" onClick={updateCartitem} style={{ backgroundColor: "#4b3bcb", color: "white" }} disabled={loading}>
            {loading ? "Updating" : "Update"}
          </button>
          <button className="btn btn-danger btn-sm" onClick={deleteCartitem}>Remove</button>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  setCartTotal: PropTypes.func.isRequired,
  setCartItems: PropTypes.func.isRequired,
  cartitems: PropTypes.array.isRequired,
  setNumberCartItems: PropTypes.func.isRequired
}

export default CartItem
