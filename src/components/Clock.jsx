import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let inervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(inervalId);
    };
  }, []);
  function timeFormat() {
    let hours = time.getHours();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const meirdiem = time.getHours() >= 12 ? "PM" : "AM";

    hours = time.getHours() % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meirdiem}`;
  }
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div className="clock-container">
      <p>{timeFormat()}</p>
    </div>
  );
}
