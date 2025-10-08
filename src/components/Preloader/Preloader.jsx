import { useEffect, useState } from "react";
import "./Preloader.scss";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && (
        <div className="preloader">
          <div className="preloader__logo">
            <svg
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6" clip-path="url(#clip0_2_422)">
                <g clip-path="url(#clip1_2_422)">
                  <g clip-path="url(#clip2_2_422)">
                    <path
                      d="M19.6931 4.7726C15.6025 4.87317 12.3173 8.21951 12.3173 12.3343C12.3175 16.4495 15.6034 19.7947 19.6947 19.8945V23.4226C13.6581 23.3223 8.79638 18.3983 8.79622 12.339C8.79622 9.5635 9.81702 7.02485 11.5033 5.07963L11.7728 4.7687H0.661865V1.24214L19.6985 1.2312L19.6931 4.7726Z"
                      fill="white"
                      fill-opacity="0.98"
                      stroke="white"
                      stroke-width="0.376173"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_2_422">
                  <rect
                    width="20"
                    height="24"
                    fill="white"
                    transform="translate(0.473633 0.290527)"
                  />
                </clipPath>
                <clipPath id="clip1_2_422">
                  <rect
                    width="20"
                    height="24"
                    fill="white"
                    transform="translate(0.473633 0.290527)"
                  />
                </clipPath>
                <clipPath id="clip2_2_422">
                  <rect
                    width="20"
                    height="24"
                    fill="white"
                    transform="translate(0.473633 0.290527)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="preloader__bar">
            <div className="preloader__progress"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
