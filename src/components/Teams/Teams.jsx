import React from 'react';
import './Teams.scss';
import { useTranslation } from 'react-i18next';

const Teams = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="teams">
        <div className="teams__container">
          <div className="teams__wrapper">
            <div className="teams__content">
              <h1>{t("NATIONAL SPORTS TEAMS")}</h1>
              <p>
                {t(
                  "Gear up for competition with professional-grade equipment worn by your favourite athletes."
                )}
              </p>
            </div>
            <img src="./player.jpg" alt={t("NATIONAL SPORTS TEAMS")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
