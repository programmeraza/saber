import { Link } from "react-router-dom";
import "./Link.scss";

import "swiper/css";
const Links = () => {
  return (
    <>
      <div className="link">
        <div className="link__wrapper">
          <div className="link__card">
            <Link>MEN'S SPORT</Link>
          </div>
          <div className="link__card">
            <Link>WOMEN'S SPORT</Link>
          </div>
          <div className="link__card">
            <Link>KIDS SPORT</Link>
          </div>
          <div className="link__card">
            <Link>OUTDOOR SPORTS</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
