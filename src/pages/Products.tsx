import styled from 'styled-components';
import Product from '../components/products/Product';

function Products() {
  const mockList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <ProductsContainer className="container">
      <p className="mall_title">제품</p>
      <div className="wrap">
        {mockList.map((data) => {
          return <Product key={data} />;
        })}
      </div>
    </ProductsContainer>
  );
}
const ProductsContainer = styled.div`
  .mall_title {
    margin-bottom: 50px;
    font-size: 20px;
    text-align: center;
    color: gray;
  }
  .wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px 10px;
    margin: 0 auto;
    width: 60%;
  }
`;

export default Products;
