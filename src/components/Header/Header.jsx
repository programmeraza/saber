import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__wrapper">
            <img src="./logo.png" alt="" />
            <ul className="header__ul">
              <Link>Men's Sport</Link>
              <Link>Women's Sport</Link>
              <Link>Kids Sport</Link>
              <Link>Outdoor Sports</Link>
            </ul>
            <div className="header__icon-flex">
              <div className="header__inp-flex">
                <input type="text" placeholder="Search sevensport.uz" />
                <img src="./search.png" alt="search" />
              </div>
              <Link><img src="./cart.svg" alt="" /></Link>
              <Link><img src="./account.svg" alt="" /></Link>
              <Link className="header__globe-icon"><img src="./globe.svg" alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
