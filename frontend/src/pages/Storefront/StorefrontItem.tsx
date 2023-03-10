import { useRef } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import axios from "../../api/axios";
import { Item } from "./Storefront";

function StorefrontItem({
  name,
  itemId,
  // image,
  price,
  quantity,
}: Item) {
  const ADD_CART_ITEM_URL = "/user/items";
  let quantityRef = useRef<HTMLInputElement>(null);

  async function handleAdd() {
    const request_data = {
      inventoryItemId: itemId,
      quantity: Number(quantityRef.current?.value).valueOf(),
    };
    await axios.post(ADD_CART_ITEM_URL, JSON.stringify(request_data), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  }

  return (
    <div
      className="item-card-container d-flex flex-column gap-1 shadow p-2 rounded-3 bg-white text-break"
      style={{ width: "225px" }}
    >
      {/* <div className="item-image-container rounded-2 p-1 overflow-hidden">
        <img
          src={image}
          alt="Item"
          style={{
            width: "100%",
            height: "10em",
            objectFit: "cover",
          }}
        />
      </div> */}
      <h3 className="item-title mb-0 fs-4 d-inline-block px-1">{name}</h3>
      <div className="item-details px-1">
        <div className="item-price fw-light fs-6 m-0">${price.toFixed(2)}</div>
        {/* TODO: Add item measurements and price per unit */}
      </div>
      <div className="item-interactions d-flex flex-row justify-content-end mt-1 gap-2 p-1">
        <input
          className="item-quantity"
          defaultValue="1"
          ref={quantityRef}
          onKeyDown={(e) => {
            if (e.key !== "Tab") {
              e.preventDefault();
            }
          }}
          type="number"
          min="1"
          max={quantity}
        ></input>
        <Button
          onClick={handleAdd}
          className="add-item-to-cart mt-0 rounded-5"
          variant="dark"
        >
          Add +
        </Button>
      </div>
    </div>
  );
}

export default StorefrontItem;
