import Image from "next/image";
import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./definition.module.scss";

export const Definition = () => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}>
        <div className={classes.opacy}></div>
        <section className={classes.definition}>
          <div>
            <div className={classes.definition__content}>
              <p>{t.definition.peru}</p>
              <h1>{t.definition.title}</h1>
              <h3>{t.definition.subtitle}</h3>
              <div>
                <div className={classes.definition__contentBox}>
                  <div className={classes.definition__contentBox__card}>
                    <div className={classes.definition__contentBox__cardNumber}>
                      1
                    </div>
                    <div className={classes.definition__contentBox__cardText}>
                      <p>{t.definition.card._01}</p>
                    </div>
                  </div>
                  <div className={classes.definition__contentBox__card}>
                    <div className={classes.definition__contentBox__cardNumber}>
                      2
                    </div>
                    <div className={classes.definition__contentBox__cardText}>
                      <p>{t.definition.card._02}</p>
                    </div>
                  </div>
                  <div className={classes.definition__contentBox__card}>
                    <div className={classes.definition__contentBox__cardNumber}>
                      3
                    </div>
                    <div className={classes.definition__contentBox__cardText}>
                      <p>{t.definition.card._03}</p>
                    </div>
                  </div>
                  <div className={classes.definition__contentBox__card}>
                    <div className={classes.definition__contentBox__cardNumber}>
                      4
                    </div>
                    <div className={classes.definition__contentBox__cardText}>
                      <p>{t.definition.card._04}</p>
                    </div>
                  </div>
                </div>
                <div className={classes.definition__contentCoin}>
                  <div>
                    <Image
                      src="/img/home/definition/coin.png"
                      width={180}
                      height={180}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div className={classes.definition__contentIcon}>
                  <div>
                    <Image
                      src="/img/footer/icon.png"
                      layout="responsive"
                      width={23}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
