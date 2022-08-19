import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  top: 100px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

//custom
//variants를 다르게 적용하고 싶을 때 사용

// exitBeforeEnter
// true로 설정하면 AnimatePresence는 한 번에 하나의 컴포넌트만 랜더링합니다.
// exiting중인 컴포넌트는 entering하는 컴포넌트가 렌더링되기 전에 exit 애니메이션을 완료합니다.
// 사용하지 않으면 entry와 exit가 동시에 움직임

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((current) => (current === 10 ? 10 : current + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((current) => (current === 1 ? 1 : current - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App;
