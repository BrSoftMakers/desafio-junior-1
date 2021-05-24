import { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';

import {
  CloseModalButton,
  ModalContent,
  ModalWrapper,
  Background,
  ModalImg
} from './style';

export const Modal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef();
  const router = useRouter();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={children.img_url} />
              <ModalContent>
                <h1>{children.name}</h1>
                <p>
                  {children.specie}: {children.breed}
                </p>
                <h4>Idade</h4>
                <p>
                  {children.age} {children.age > 1 ? 'anos' : 'ano'}
                </p>
                <h4>Dados do dono</h4>
                <p>{children.owner}</p>
                <p>{children.phone}</p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal(prev => !prev)}
              >
                <h2>x</h2>
              </CloseModalButton>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
