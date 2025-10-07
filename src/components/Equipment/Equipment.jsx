import { Link } from "react-router-dom";
import "./Equipment.scss";

const Equipment = () => {
  return (
    <>
      <div className="equipment">
        <div className="container">
          <div className="equipment__wrapper">
            <div className="equipment__content">
              <div className="equipment__line-flex">
                <div className="equipment__line"></div>
                <p>EQUIPMENT GUIDE</p>
              </div>
              <h1>
                PERFORMANCE <br /> EQUIPMENT
              </h1>
              <p>
                Match your sport with the right equipment for optimal <br />{" "}
                performance – from beginners to professionals.
              </p>
              <div className="equipment__btn-flex">
                <Link>
                  <button className="equipment__btn">
                    SHOP NOW
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
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.15363 3.58374L12.8203 8.25041L8.15363 12.9171"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </Link>
                <Link className="equipment__learn">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="equipment__block">
        <h1>SPORTS TEAMS</h1>
      </div>
    </>
  );
};

export default Equipment;
