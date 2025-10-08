import { Link } from "react-router-dom";
import "./Equipment.scss";
import { useTranslation } from "react-i18next";

const Equipment = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="equipment">
        <div className="container">
          <div className="equipment__wrapper">
            <div className="equipment__content">
              <div className="equipment__line-flex">
                <div className="equipment__line"></div>
                <p>{t("EQUIPMENT GUIDE")}</p>
              </div>
              <h1>
                {t("PERFORMANCE EQUIPMENT")}
              </h1>
              
              <p>
                {t(
                  "Match your sport with the right equipment for optimal performance – from beginners to professionals."
                )}
              </p>
              <div className="equipment__btn-flex">
                <Link>
                  <button className="equipment__btn">
                    {t("SHOP NOW")}
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.48694 8.25049H12.8203"
                        stroke="white"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.15363 3.58374L12.8203 8.25041L8.15363 12.9171"
                        stroke="white"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Link>
                <Link className="equipment__learn">{t("Learn more")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="equipment__block">
        <h1>{t("SPORTS TEAMS")}</h1>
      </div>
    </>
  );
};

export default Equipment;
