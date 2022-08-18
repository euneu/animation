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
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// Variants은 컴포넌트가 가질 수 있는 미리 정의된 시각적 state
// start/ end 일수도 있고 다른 이름을 가질 수도 있음
// props를 넣어서 쓰기 때문에 내 코드를 깔금하게 정리 가능
// spring이라는 튕기는 요소가 기본적으로 들어있음
// initial 초기값 에니메이션의 초기 스타일
// animate 최종 스타일

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// 자식요소의 딜레이까지 조절할 수 있음
// delayChildren :  딜레이 시간(초) 후에 하위 애니메이션이 시작
// staggerChildren : 하위 컴포넌트의 애니메이션에 지속 시간(초)만큼 시차를 둘 수 있다
// 예를 들어, staggerChildren이 0.01이면 첫 번째 자식은 0초, 두 번째 자식은 0.01초, 세 번째 자식은 0.02초 지연되는 식
const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

//x,y는 motion에서만 사용 되고 좌표를 나타냄

//varuants는 부모가 가진 motion을 자식들에게도 복붙해줌
// 현재 자식과 부모는 같은 start, end를 가지고 있음
// 자식들은 부모의 intial 값과 animate 값을 상속함
function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} whileHover="hover" whileTap="click" />
    </Wrapper>
  );
}

export default App;
