import { useEffect, useRef } from 'react';
import styled from 'styled-components';

type propsType = {
  visible: boolean;
  modalIn?: JSX.Element;
  setVisible: (data: boolean) => void;
};
function Modal({ visible, modalIn, setVisible }: propsType) {
  // const [modal, setModal] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (visible && node.current && !node.current.contains(target)) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [visible]);

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper visible={visible}>
        <ModalInner ref={node}>{modalIn}</ModalInner>
        <div className="close">x</div>
      </ModalWrapper>
    </>
  );
}

const ModalOverlay = styled.div`
  display: ${({ visible }: { visible: boolean }) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  display: ${({ visible }: { visible: boolean }) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    color: ${(props) => props.theme.colors.mainBrown};
  }
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
