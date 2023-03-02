import { useState } from 'react';
import styled from 'styled-components';

import productImg from '../assets/images/jam_12.jpeg';

function Detail() {
  const [amount, setAmount] = useState(0);
  const [index, setTabIndex] = useState('1');
  const price = 3880;
  const TAB_LIST = [
    { id: '1', name: '상품 상세', content: '' },
    { id: '2', name: '상품 후기', content: '' },
    { id: '3', name: '문의', content: '' },
    { id: '4', name: '배송/교환/반품', content: '' },
  ];
  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  const clickTab = (e: React.MouseEvent) => {
    setTabIndex(e.currentTarget.id);
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
            <input type="number" min="0" max="10" defaultValue="0" className="number" onChange={changeAmount} />
            <span>최대 구매 수량 10개</span>
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
      <section className="tab">
        <ul>
          {TAB_LIST.map((data) => {
            return (
              <li id={data.id} key={data.id} className={index === data.id ? 'active' : undefined} onClick={clickTab}>
                {data.name}
              </li>
            );
          })}
        </ul>
        <div className="content"></div>
      </section>
    </DetailContainer>
  );
}
const DetailContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  .wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
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
    span {
      margin-left: 10px;
      font-size: 12px;
      color: #999;
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
      flex: 1 1 50%;
      flex: 1 1 50%;
      padding: 10px;
      border-radius: 3px;
      border: none;
      font-size: 20px;
      text-align: center;
      background: transparent;
    }
    .cart {
      border: 1px solid rgb(200, 200, 200);
      color: ${({ theme }) => theme.colors.darkGray};
    }
    .buy {
      color: #fff;
      background: ${({ theme }) => theme.colors.mainBrown};
    }
  }
  .tab {
    overflow: hidden;
    ul {
      display: flex;
    }
    li {
      flex: 1 1 25%;
      padding: 15px 10px;
      text-align: center;
      background: ${({ theme }) => theme.colors.lightGray};
      cursor: pointer;
    }
    .content {
      min-height: 500px;
      border: 1px solid ${({ theme }) => theme.colors.lightGray};
      border-top: 0px;
    }
  }
  .active {
    font-weight: bold;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-bottom: 0px;
    background: #fff !important;
  }
`;

export default Detail;
