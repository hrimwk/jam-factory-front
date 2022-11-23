import styled from 'styled-components';

interface propsType {
  visible: boolean;
  modalIn?: JSX.Element;
}
function Modal({ visible, modalIn }: propsType) {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper visible={visible}>
        <ModalInner>{modalIn}</ModalInner>
      </ModalWrapper>
    </>
  );
}

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props: propsType) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props: propsType) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;
const ModalInner = styled.div`
  position: relative;
  width: fit-content;
  background-color: ${(props) => props.theme.colors.subIvory};
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 30px;
  box-shadow: 0, 0, 0, 8px rgba(0, 0, 0, 0.25);
`;
export default Modal;
