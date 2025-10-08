import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Scan.scss";

const Scan = () => {
  const { t } = useTranslation();

  return (
    <div className="scan">
      <div className="scan__container">
        <div className="scan__wrapper">
          <div className="scan__content">
            <h1>{t("CREATE THE FUTURE OF SPORT")}</h1>
            <p>
              {t(
                "Welcome to the future of sport: SEVEN SPORT COLLECTIONS. Where innovation meets passion, and every athlete becomes a creator of tomorrow's achievements. Our cutting-edge equipment, revolutionary gear, and performance-driven apparel are designed for those who dare to shape the future of sports. From football and basketball to volleyball, boxing, and judo - we provide the tools to build tomorrow's champions. Experience the fusion of technology and tradition, where every piece of equipment is crafted to help you create, innovate, and dominate your chosen sport. The future of sport is here – are you ready to create it?"
              )}
            </p>
          </div>
          <div className="scan__image">
            <img src="./scan.png" alt="" />
            <Link>{t("Scan to create your sporting future")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
