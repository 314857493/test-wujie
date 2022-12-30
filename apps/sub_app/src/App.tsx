import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window?.$wujie?.bus?.$emit("loglog", count);
  }, [count]);
  return (
    <>
      <div>wujie props:{JSON.stringify(window?.$wujie?.props)}</div>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
