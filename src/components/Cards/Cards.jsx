import { Link } from "react-router-dom";
import "./Cards.scss";
import { useTranslation } from "react-i18next";

const category = [
  {
    image: "./football.png",
    titleKey: "FOOTBALL",
    btnKey: "SHOP FOOTBALL"
  },
  {
    image: "./basketball.png",
    titleKey: "BASKETBALL",
    btnKey: "SHOP BASKETBALL"
  },
  {
    image: "./voleball.png",
    titleKey: "VOLLEYBALL",
    btnKey: "SHOP VOLLEYBALL"
  },
];

const Cards = () => {
  const { t } = useTranslation();

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          {category.map((item, index) => (
            <div className="cards__item" key={index}>
              <img
                src={item.image}
                alt={t(item.titleKey)}
                className="cards__image"
              />
              <h3 className="cards__title">{t(item.titleKey)}</h3>
              <Link>
                  <button className="cards__btn">{t(item.btnKey)}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
