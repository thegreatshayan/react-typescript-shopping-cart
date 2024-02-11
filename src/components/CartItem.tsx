import { Button, Stack } from "react-bootstrap";

import { useCartContext } from "../context/CartContext";

import productItems from "../data/products.json";

type CartItemProps = {
  id: number;
  qty: number;
};

function CartItem({ id, qty }: CartItemProps) {
  const { removeItem } = useCartContext();

  const product = productItems.find((item) => item.id === id);

  if (!product) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={product.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto text-dark">
        {product.title}
        {" - "}
        {qty >= 1 && (
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
            Quantity: {qty}
          </span>
        )}
      </div>
      <div>{product.price * qty}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeItem(id)}>
        &times;
      </Button>
    </Stack>
  );
}

export default CartItem;
