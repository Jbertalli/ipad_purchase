import AddProductToCart from './AddProductToCart';

function ProductSummary({ _id, user }) {
  return <AddProductToCart user={user} productId={_id} />;
}

export default ProductSummary;
