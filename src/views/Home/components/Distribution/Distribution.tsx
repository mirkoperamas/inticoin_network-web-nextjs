import Image from "next/image";
import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./distribution.module.scss";

export const Distribution = () => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}>
        <section className={classes.inicio}>
          <div>
            <div className={classes.inicio__content}>
              <div className={classes.inicio__content__text}>
                <div className={classes.inicio__content__textImage}>
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
                <div className={classes.inicio__content__textMain}>
                  <h1>{t.distribution.title}</h1>
                  <h3>{t.distribution.subtitle}</h3>
                  <h2>1267</h2>
                </div>
              </div>
            </div>
            <div className={classes.inicio__image}>
              <div>
                <Image
                  src="/img/home/distribution/map.png"
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
