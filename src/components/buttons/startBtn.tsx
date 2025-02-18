import { useState } from "react";
import startBtn from "../../assets/btns/startBtn.svg";
import startBtnPress from "../../assets/btns/startBtnPress.svg";

export default function StartBtn({ onClick }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button onClick={onClick}>
      <div
        className="cursor-pointer"
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        {isPressed ? (
          <img src={startBtnPress} alt="Start Button Pressed" />
        ) : (
          <img src={startBtn} alt="Start Button" />
        )}
      </div>
    </button>
  );
}
