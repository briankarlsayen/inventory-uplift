import React, {useState} from 'react'
import InventoryCheckoutItem from './InventoryCheckoutItem'
import '../styling/InventoryCheckout.css'

function InventoryCheckout() {
  const [checkoutItem, setCheckoutItem] = useState({
    item: [
      {
        title: "Puppy",
        price: "1000",
        count: "12",
        image: "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg",
        isChecked: false
      },
      {
        title: "Poodle",
        price: "3000",
        count: "5",
        image: "https://a-z-animals.com/media/Poodle-Canis-familiaris-white.jpg",
        isChecked: false
      },
      {
        title: "German Sheperd",
        price: "5000",
        count: "1",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B1060%2C626%5D&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F02%2F25%2Fgerman-shepherd-head-tilt-201535197-2000.jpg",
        isChecked: false
      }
  ]
  })
  return (
    <div className="inventory__checkout">
      <h2 className="subtitle">Checkout Page</h2>
      <div className="inventoryCheckout__items">
        {checkoutItem.item.map((item) => (
          <InventoryCheckoutItem item={item} />
        ))}
      </div>
      <button className="checkout__btn">Checkout</button>
    </div>
  )
}

export default InventoryCheckout
