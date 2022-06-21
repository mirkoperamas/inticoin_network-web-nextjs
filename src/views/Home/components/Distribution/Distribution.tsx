import Image from "next/image";
import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./distribution.module.scss";

const Fade = require("react-reveal/Fade");
const Bounce = require("react-reveal/Bounce");

export const Distribution = () => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}>
        <div className={classes.layer}></div>
        <section className={classes.distribution}>
          <div>
            <div className={classes.distribution__content}>
              <div className={classes.distribution__content__text}>
                <div className={classes.distribution__content__textImage}>
                  <div>
                    <Image
                      src="/img/coin.png"
                      layout="responsive"
                      width={5}
                      height={5}
                      alt="inticoin-coin"
                    />
                  </div>
                </div>
                <div className={classes.distribution__content__textMain}>
                  <Fade right big cascade>
                    <h1>{t.distribution.title}</h1>
                  </Fade>
                  <h3>{t.distribution.subtitle}</h3>
                  <h2>1267</h2>
                </div>
              </div>
            </div>
            <div className={classes.distribution__image}>
              <Bounce>
                <div>
                  <Image
                    src="/img/home/distribution/map.png"
                    layout="responsive"
                    width={35}
                    height={20}
                    alt="intichain-coin"
                  />
                </div>
              </Bounce>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
