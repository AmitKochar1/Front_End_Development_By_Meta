import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/BouttonBox";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";

const btnValues =[
  ["c", '+-', '%', '/'],
  [7,8,9, "x"],
  [4,5,6, "-"],
  [1,2,3, "+"],
  [0,".", "="],
];

export default function App(){
  return (
    <CalcProvider>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnValues.flat().map((btn, i) =>(
            <Button
            value={btn}
            key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  )
}