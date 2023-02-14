import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";

const Button = styled.div.attrs({
  role: "button",
})`
  background-color: red;
`;

const MyButton = styled(Button)`
  color: blue;
`;

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window?.$wujie?.bus?.$emit("loglog", count);
  }, [count]);
  return (
    <>
      <div>wujie props:{JSON.stringify(window?.$wujie?.props)}</div>
      <div className="card">
        <MyButton
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </MyButton>
      </div>
    </>
  );
}

export default App;
