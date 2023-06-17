export const QuantitySelect = ({ quantity }) => {
  return (
    <select
      name="quantity"
      id="quantity"
      className="product-card--mini__quantity"
    >
      <option value={quantity}>{quantity}</option>
    </select>
  );
};
