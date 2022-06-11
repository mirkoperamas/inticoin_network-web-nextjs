import Image from "next/image";
import { Footer } from "../../../../components/Footer/Footer";
import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./latest-updates.module.scss";

export const LatestUpdates = () => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}>
        <section className={classes.inicio}>
          <div>
            <div className={classes.inicio__content}>
              <div className={classes.inicio__content__text}>
                <div className={classes.inicio__content__textMain}>
                  <h1>{t.latestUpdates.title}</h1>
                  <h3>{t.latestUpdates.subtitle}</h3>
                </div>
              </div>
              <div className={classes.inicio__content__button}>
                <button>{t.latestUpdates.button}</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
