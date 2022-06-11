import Image from "next/image";
import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./unique-value.module.scss";

export const UniqueValue = () => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}>
        <section className={classes.uniquevalue}>
          <div>
            <div className={classes.uniquevalue__content}>
              <h1>{t.uniqueValue.title}</h1>
              <div className={classes.uniquevalue__contentSubtitle}>
                <h3>{t.uniqueValue.subtitle}</h3>
              </div>
              <div className={classes.uniquevalue__contentBox}>
                <div className={classes.uniquevalue__contentBox__card}>
                  <div className={classes.uniquevalue__contentBox__cardText}>
                    <strong>{t.uniqueValue.card._01.title}</strong>
                    <p>{t.uniqueValue.card._01.text}</p>
                  </div>
                </div>
                <div className={classes.uniquevalue__contentBox__card}>
                  <div className={classes.uniquevalue__contentBox__cardText}>
                    <strong>{t.uniqueValue.card._02.title}</strong>
                    <p>{t.uniqueValue.card._02.text}</p>
                  </div>
                </div>
                <div className={classes.uniquevalue__contentBox__card}>
                  <div className={classes.uniquevalue__contentBox__cardText}>
                    <strong>{t.uniqueValue.card._03.title}</strong>
                    <p>{t.uniqueValue.card._03.text}</p>
                  </div>
                </div>
                <div className={classes.uniquevalue__contentBox__card}>
                  <div className={classes.uniquevalue__contentBox__cardText}>
                    <strong>{t.uniqueValue.card._04.title}</strong>
                    <p>{t.uniqueValue.card._04.text}</p>
                  </div>
                </div>
                <div className={classes.uniquevalue__contentBox__card}>
                  <div className={classes.uniquevalue__contentBox__cardText}>
                    <strong>{t.uniqueValue.card._05.title}</strong>
                    <p>{t.uniqueValue.card._05.text}</p>
                  </div>
                </div>
                <div className={classes.uniquevalue__contentBox__card}>
                  <div className={classes.uniquevalue__contentBox__cardText}>
                    <strong>{t.uniqueValue.card._06.title}</strong>
                    <p>{t.uniqueValue.card._06.text}</p>
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
