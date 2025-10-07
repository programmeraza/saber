import { useEffect, useState } from "react";
import "./DropCount.scss";

const DropCount = () => {
  const dropDate = new Date();
  dropDate.setDate(dropDate.getDate() + 10);

  const calculateTimeLeft = () => {
    const difference = dropDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div className="dropcountdown__end">Новый дроп уже доступен!</div>;
  }

  return (
    <>
      <div className="dropcountdown">
        <h2 className="dropcountdown__title">Новый дроп уже скоро!</h2>
        <div className="dropcountdown__timer">
          <div className="dropcountdown__item">
            <span>{timeLeft.days}</span>
            <p>дней</p>
          </div>
          <div className="dropcountdown__item">
            <span>{timeLeft.hours}</span>
            <p>часов</p>
          </div>
          <div className="dropcountdown__item">
            <span>{timeLeft.minutes}</span>
            <p>минут</p>
          </div>
          <div className="dropcountdown__item">
            <span>{timeLeft.seconds}</span>
            <p>секунд</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropCount;
