import styled from 'styled-components';
import mockImg from '../../assets/images/jam_12.jpeg';

function Product() {
  return (
    <ProductContainer>
      <div>
        <div className="img-wrap">
          <img src={mockImg} />
        </div>
        <p className="product-name">[복음자리] 딸기잼 230g </p>
        <p className="price">3,880원</p>
      </div>
    </ProductContainer>
  );
}
const ProductContainer = styled.div`
  .img-wrap {
    margin-bottom: 20px;
  }
  .product-name {
    margin-bottom: 10px;
  }
  .price {
    font-size: 14px;
  }
`;
export default Product;
