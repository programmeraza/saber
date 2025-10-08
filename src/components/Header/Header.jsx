import "./Header.scss";
import { Link } from "react-router-dom";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuTarget } from "react-icons/lu";
import SelectLan from "../SelectLan/SelectLan";
import { useTranslation } from "react-i18next";

const categories = [
  {
    key: "Men's Sport",
    sub: [
      ["Shoes", "Running", "Basketball", "Lifestyle"],
      ["Clothing", "Tops", "Hoodies", "Pants", "Shorts"],
      ["Accessories", "Bags", "Socks", "Hats"],
    ],
  },
  {
    key: "Women's Sport",
    sub: [
      ["Shoes", "Running", "Training", "Lifestyle"],
      ["Clothing", "Tops", "Leggings", "Jackets"],
      ["Accessories", "Bags", "Socks", "Hats"],
    ],
  },
  {
    key: "Saber",
    sub: [
      ["Shoes", "Boys", "Girls"],
      ["Clothing", "Tops", "Pants", "Hoodies"],
      ["Accessories", "Socks", "Bags"],
    ],
  },
];

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <Link to={'/'}>
            <img src="./logo.png" alt="logo" className="header__logo" />
          </Link>

          <nav className="header__nav">
            <ul className="header__ul">
              {categories.map((cat, i) => (
                <li key={i} className="header__li">
                  <Link to="#">{t(cat.key)}</Link>
                  {cat.sub && (
                    <div className="header__dropdown">
                      <div className="header__dropdown-inner">
                        {cat.sub.map((col, j) => (
                          <div className="header__dropdown-column" key={j}>
                            {col.map((item, k) => (
                              <Link
                                to="#"
                                key={k}
                                className="header__dropdown-link"
                              >
                                {t(item)}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__icon-flex">
            <div className="header__inp-flex">
              <input type="text" placeholder={t("Search sevensport.uz")} />
              <img src="./search.png" alt="search" />
            </div>
            <Link to={'/cart'}>
              <img src="./cart.svg" alt="cart" />
            </Link>
            <Link to={'/profile'}>
              <img src="./account.svg" alt="account" />
            </Link>
            <Link to={'/charity'} className="header__charity">
              <FaHandHoldingDollar />
            </Link>
            <Link to={"/target"}>
              <LuTarget />
            </Link>
            <SelectLan />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
