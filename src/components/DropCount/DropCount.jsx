import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./DropCount.scss";

const DropCount = () => {
  const { t } = useTranslation();

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
    return <div className="dropcountdown__end">{t("New drop is available!")}</div>;
  }

  return (
    <div className="dropcountdown">
      <h2 className="dropcountdown__title">{t("New drop is coming soon!")}</h2>
      <div className="dropcountdown__timer">
        <div className="dropcountdown__item">
          <span>{timeLeft.days}</span>
          <p>{t("days")}</p>
        </div>
        <div className="dropcountdown__item">
          <span>{timeLeft.hours}</span>
          <p>{t("hours")}</p>
        </div>
        <div className="dropcountdown__item">
          <span>{timeLeft.minutes}</span>
          <p>{t("minutes")}</p>
        </div>
        <div className="dropcountdown__item">
          <span>{timeLeft.seconds}</span>
          <p>{t("seconds")}</p>
        </div>
      </div>
    </div>
  );
};

export default DropCount;
