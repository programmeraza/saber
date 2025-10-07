import "./Header.scss";
import { Link } from "react-router-dom";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuTarget } from "react-icons/lu";
import SelectLan from "../SelectLan/SelectLan";

const categories = [
  {
    name: "Men's Sport",
    sub: [
      ["Shoes", "Running", "Basketball", "Lifestyle"],
      ["Clothing", "Tops", "Hoodies", "Pants", "Shorts"],
      ["Accessories", "Bags", "Socks", "Hats"]
    ]
  },
  {
    name: "Women's Sport",
    sub: [
      ["Shoes", "Running", "Training", "Lifestyle"],
      ["Clothing", "Tops", "Leggings", "Jackets"],
      ["Accessories", "Bags", "Socks", "Hats"]
    ]
  },
  {
    name: "Kids Sport",
    sub: [
      ["Shoes", "Boys", "Girls"],
      ["Clothing", "Tops", "Pants", "Hoodies"],
      ["Accessories", "Socks", "Bags"]
    ]
  },
  {
    name: "Outdoor Sports",
    sub: [
      ["Camping", "Tents", "Sleeping Bags"],
      ["Hiking", "Boots", "Backpacks"],
      ["Fishing", "Rods", "Accessories"]
    ]
  }
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <img src="./logo.png" alt="logo" className="header__logo" />

          <nav className="header__nav">
            <ul className="header__ul">
              {categories.map((cat, i) => (
                <li key={i} className="header__li">
                  <Link to="#">{cat.name}</Link>
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
                                {item}
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
              <input type="text" placeholder="Search sevensport.uz" />
              <img src="./search.png" alt="search" />
            </div>
            <Link><img src="./cart.svg" alt="cart" /></Link>
            <Link><img src="./account.svg" alt="account" /></Link>
            <Link className="header__charity"><FaHandHoldingDollar /></Link>
            <Link><LuTarget /></Link>
            <SelectLan />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
