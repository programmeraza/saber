import { Link } from "react-router-dom";
import "./Cards.scss";

const category = [
  {
    image: "./football.png",
    title: "FOOTBALL",
    btn: 'SHOP FOOTBALL'
  },
  {
    image: "./basketball.png",
    title: "BASKETBALL",
    btn: 'SHOP BASKETBALL'
  },
  {
    image: "./voleball.png",
    title: "VOLLEYBALL",
    btn: 'SHOP VOLLEYBALL'
  },
];

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            {category.map((item, index) => (
              <div className="cards__item" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="cards__image"
                />
                <h3 className="cards__title">{item.title}</h3>
                <Link>
                    <button className="cards__btn">{item.btn}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
