import styled from 'styled-components';

import StepIcon from '../components/signup/StepIcon';

function SignUpForm() {
  const NUMBER_OPTIONS = [
    { id: 1, num: '010' },
    { id: 2, num: '011' },
    { id: 3, num: '016' },
    { id: 4, num: '017' },
    { id: 5, num: '018' },
    { id: 6, num: '019' },
    { id: 7, num: '02' },
  ];
  return (
    <SignUpFormContainer className="container">
      <StepIcon />
      <form>
        <fieldset>
          <legend>
            정보 입력 <span className="cr_red"> &nbsp;&nbsp; * 표시는 필수 항목입니다.</span>
          </legend>
          <ul className="join_box">
            <li className="form-element">
              <label>
                아이디 <span className="cr_red">*</span>
              </label>
              <div>
                <input type="text" className="mr-10" />
                <button className="button">중복확인</button>
              </div>
            </li>
            <li className="form-element">
              <label>
                비밀번호 <span className="cr_red">*</span>
              </label>
              <input type="password" />
            </li>
            <li className="form-element">
              <label>
                비밀번호 확인 <span className="cr_red">*</span>
              </label>
              <input type="text" />
            </li>
            <li className="form-element">
              <label>주소</label>
            </li>
            <li className="form-element">
              <label>
                휴대폰 <span className="cr_red">*</span>
              </label>
              <div className="phone-num-area">
                <select className="mr-10">
                  {NUMBER_OPTIONS.map((data) => {
                    return <option key={data.id}>{data.num}</option>;
                  })}
                </select>
                <input type="text" className="mr-10" />
                <input type="text" />
              </div>
            </li>
            <li className="form-element">
              <label>이메일</label>
              <div>
                <input type="text" /> @ <input type="text" />
              </div>
            </li>
          </ul>
        </fieldset>
        <div className="button-area">
          <button className="button">회원가입</button>
        </div>
      </form>
    </SignUpFormContainer>
  );
}
const SignUpFormContainer = styled.div`
  .mr-10 {
    margin-right: 10px;
  }
  form {
    width: 40%;
    margin: 50px auto;
  }
  fieldset {
    border: none;
  }
  label {
    font-size: 14px;
  }
  input,
  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  legend {
    padding-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
    color: rgb(153, 150, 144);
  }
  .form-element {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-bottom: 10px;
  }
  .phone-num-area {
    input {
      width: 33%;
    }
  }
  .button {
    padding: 10px;
    border: none;
    background: rgb(123, 95, 60);
    border-radius: 5px;
    text-align: center;
    color: #fff;
  }
  .cr_red {
    font-size: 10px;
    color: rgb(190, 20, 30);
  }

  .button-area {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;
export default SignUpForm;
