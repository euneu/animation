import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// Variants은 컴포넌트가 가질 수 있는 미리 정의된 시각적 state
// start/ end 일수도 있고 다른 이름을 가질 수도 있음
// props를 넣어서 쓰기 때문에 내 코드를 깔금하게 정리 가능
// spring이라는 튕기는 요소가 기본적으로 들어있음
// initial 초기값 에니메이션의 초기 스타일
// animate 최종 스타일

// 자식요소의 딜레이까지 조절할 수 있음
// delayChildren :  딜레이 시간(초) 후에 하위 애니메이션이 시작
// staggerChildren : 하위 컴포넌트의 애니메이션에 지속 시간(초)만큼 시차를 둘 수 있다
// 예를 들어, staggerChildren이 0.01이면 첫 번째 자식은 0초, 두 번째 자식은 0.01초, 세 번째 자식은 0.02초 지연되는 식
const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};

//x,y는 motion에서만 사용 되고 좌표를 나타냄

//varuants는 부모가 가진 motion을 자식들에게도 복붙해줌
// 현재 자식과 부모는 같은 start, end를 가지고 있음
// 자식들은 부모의 intial 값과 animate 값을 상속함

//whileHover 호버 제스처가 인식되는 동안 애니메이션할 속성 또는 변형 레이블
// whileTap 컴포넌트를 누르고 있는 동안 애니메이션할 속성 또는 변형 레이블
// drag 끌기를 활성화
// whileDrag 드래그 제스처가 인식되는 동안 애니메이션할 속성 또는 변형 레이블

//drag = x ,y 하면 x 축으로만 움직이고 y축으로만 움직임

//dragConstraints
// 허용된 드래그 가능 영역에 제약 조건을 적용

// ref 이용
// dragSnapToOrigin 드래그 놓으면 가운데로 돌아감
// dragElastic: DragElastic
// 외부 제약 조건에서 허용되는 이동 정도. 0 = 움직임 없음, 1 = 전체 움직임. 기본 0.5

// MotionValue 애니메이션 값의 상태와 속도를 추적
// style x 좌표가 바뀔 떄마다 Motionvalue x 값 업데이트됨
// motionvalue는 state가 아니다 값이 바뀌어도 재랜더링 되지 않음
// x.set(값)-> useMotionValue을 업데이트, x.get()-> useMotionValue 읽어 옴
function App() {
  const x = useMotionValue(0);
  return (
    <Wrapper>
      <Box style={{ x: x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
