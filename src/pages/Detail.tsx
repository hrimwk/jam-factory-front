import { useState } from 'react';
import styled from 'styled-components';

import productImg from '../assets/images/jam_12.jpeg';
import theme from '../assets/styles/theme';

function Detail() {
  const [amount, setAmount] = useState(0);
  const price = 3880;
  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  return (
    <DetailContainer className="container">
      <div className="wrap">
        <div className="product-img">
          <img src={productImg} alt="" />
        </div>

        <div className="product-info">
          <p className="title">[복음자리] 딸기잼 230g </p>
          <p className="price">3,880원</p>
          <p className="delivery-fee">배송비 3,000원 (30,000원 이상 구매시 무료)</p>
          <div className="amount">
            <label>수량</label>
            <input type="number" min="0" defaultValue="0" className="number" onChange={changeAmount} />
          </div>
          <div className="total">
            <p>총 상품 금액</p>
            <p className="total-amount">{price * amount}원</p>
          </div>

          <div className="button-area">
            <button className="cart">장바구니</button>
            <button className="buy">구매하기</button>
          </div>
        </div>
      </div>
    </DetailContainer>
  );
}
const DetailContainer = styled.div`
  .wrap {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto;
    overflow: hidden;
  }
  .product-img {
    width: 40%;
    margin-left: -20px;
  }
  .product-info {
    width: 60%;
    .title {
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: bold;
    }
    .price {
      margin-bottom: 20px;
      font-size: 20px;
    }
    .delivery-fee {
      margin-bottom: 30px;
      font-size: 12px;
    }
  }
  .amount {
    label {
      display: block;
      margin-bottom: 10px;
    }
    .number {
      width: 60px;
      padding: 8px;
      margin-bottom: 30px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      text-align: center;
      outline: none;
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    p {
      font-size: 20px;
    }
    .total-amount {
      font-weight: 700;
    }
  }

  .button-area {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    button {
      padding: 10px;
      border-radius: 3px;
      border: none;
      font-size: 20px;
      text-align: center;
      background: transparent;
    }
    .cart {
      flex: 1 1 50%;
      border: 1px solid rgb(200, 200, 200);
      color: ${({ theme }) => theme.colors.darkGray};
    }
    .buy {
      flex: 1 1 50%;
      color: #fff;
      background: ${({ theme }) => theme.colors.mainBrown};
    }
  }
`;

export default Detail;
