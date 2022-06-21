import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./unique-value.module.scss";

const Fade = require("react-reveal/Fade");

export const UniqueValue = () => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}>
        <div className={classes.layer}></div>
        <section className={classes.uniquevalue}>
          <div>
            <div className={classes.uniquevalue__content}>
              <Fade right big cascade>
                <h1>{t.uniqueValue.title}</h1>
              </Fade>
              <div className={classes.uniquevalue__contentSubtitle}>
                <h3>{t.uniqueValue.subtitle}</h3>
              </div>
              <div className={classes.uniquevalue__contentBox}>
                <Fade bottom cascade>
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
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
