import Image from "next/image";
import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./ecosystem.module.scss";

const Fade = require("react-reveal/Fade");
const Bounce = require("react-reveal/Bounce");
const Zoom = require("react-reveal/Zoom");

export const Ecosystem = ({ setPaper }: any) => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}>
        <div className={classes.layer}></div>
        <section className={classes.ecosystem}>
          <div>
            <div className={classes.ecosystem__content}>
              <div className={classes.ecosystem__content__text}>
                <Fade right big cascade>
                  <h1>{t.ecosystem.title}</h1>
                </Fade>
                <h3>{t.ecosystem.text}</h3>
                <span style={{ marginRight: "2rem" }}>
                  {t.ecosystem.desktop}
                </span>
                <span>{t.ecosystem.web}</span>
              </div>
              <div className={classes.ecosystem__content__button}>
                <Zoom top>
                  <button onClick={() => setPaper(true)}>
                    {t.ecosystem.button}
                  </button>
                </Zoom>
              </div>
            </div>
            <div className={classes.ecosystem__image}>
              <Bounce>
                <div>
                  <Image
                    src="/img/home/ecosystem/pc.png"
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
