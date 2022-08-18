import styled from "styled-components";
import { motion } from "framer-motion";

//framer motion 설치
// npm i framer-motion
// import { motion } from "framer-motion";
// <div></div> 이렇게 사용하면 안 되고 <motion.div></motion.div> 이렇게 사용해야 함

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 애니메이트 된 스타일 컴포넌트를 어떻게 가지냐면
// 이렇게 바꿉니다
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// Variants은 컴포넌트가 가질 수 있는 미리 정의된 시각적 state
// start/ end 일수도 있고 다른 이름을 가질 수도 있음
// props를 넣어서 쓰기 때문에 내 코드를 깔금하게 정리 가능
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

// spring이라는 튕기는 요소가 기본적으로 들어있음
// initial 초기값 에니메이션의 초기 스타일
// animate 최종 스타일

function App() {
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end" />
    </Wrapper>
  );
}

export default App;
