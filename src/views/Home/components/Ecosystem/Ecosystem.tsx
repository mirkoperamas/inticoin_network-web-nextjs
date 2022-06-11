import Image from "next/image";
import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./ecosystem.module.scss";

export const Ecosystem = () => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}>
        <section className={classes.ecosystem}>
          <div>
            <div className={classes.ecosystem__content}>
              <div className={classes.ecosystem__content__text}>
                <h1>{t.ecosystem.title}</h1>
                <h3>{t.ecosystem.text}</h3>
                <span>{t.ecosystem.desktop}</span>
                <span>{t.ecosystem.web}</span>
              </div>
              <div className={classes.ecosystem__content__button}>
                <button>{t.ecosystem.button}</button>
              </div>
            </div>
            <div className={classes.ecosystem__image}>
              <div>
                <Image
                  src="/img/home/ecosystem/pc.png"
                  layout="responsive"
                  width={35}
                  height={20}
                  alt="intichain-coin"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
