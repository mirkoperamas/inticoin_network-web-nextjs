import Image from "next/image";
import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./inicio.module.scss";

export const Inicio = () => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}>
        <section className={classes.inicio}>
          <div>
            <div className={classes.inicio__content}>
              <div className={classes.inicio__content__text}>
                <h1>{t.inicio.title}</h1>
                <h3>{t.inicio.text}</h3>
                <h2>{t.inicio.commingSoon}</h2>
              </div>
              <div className={classes.inicio__content__button}>
                <button>Video</button>
              </div>
            </div>
            <div className={classes.inicio__image}>
              <div>
                <Image
                  src="/img/home/inicio/sun.png"
                  layout="responsive"
                  width={20}
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
