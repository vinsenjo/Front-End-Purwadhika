import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { decrement, increment,reset ,incrementBy} from "./store/counterSlice";
import DisplayCounter from "./component/displayCounter";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <DisplayCounter  />
      <button onClick={() => dispatch(incrementBy(5))}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
