import Image from "next/image";
import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./latest-updates.module.scss";

const Fade = require("react-reveal/Fade");
const Zoom = require("react-reveal/Zoom");

export const LatestUpdates = ({ setPaper }: any) => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}>
        <div className={classes.layer}></div>
        <section className={classes.updates}>
          <div>
            <div className={classes.updates__content}>
              <div className={classes.updates__content__text}>
                <div className={classes.updates__content__textMain}>
                  <Fade right big cascade>
                    <h1>{t.latestUpdates.title}</h1>
                  </Fade>
                  <h3>{t.latestUpdates.subtitle}</h3>
                </div>
              </div>
              <div className={classes.updates__content__button}>
                <Zoom top>
                  <button onClick={() => setPaper(true)}>
                    {t.latestUpdates.button}
                  </button>
                </Zoom>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
