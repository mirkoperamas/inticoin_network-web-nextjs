import Image from "next/image";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useTranslate } from "../../hooks/useTranslate";
import classes from "./footer.module.scss";

export const Footer = () => {
  const { t } = useTranslate();

  const initialForm = { email: "" };
  const [sendErrs, setSendErrs] = useState(true);
  const [msj, setMsj] = useState({ email: "" });

  const validationForm = (form: any) => {
    const emailRegEx = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.email.trim() || !emailRegEx.test(form.email.trim())) {
      setSendErrs(true);
      if (!form.email.trim()) {
        msj.email = "The EMAIL field is required";
      } else if (!emailRegEx.test(form.email.trim())) {
        msj.email = "The EMAIL field is incorrect";
      }
    } else {
      setSendErrs(false);
      setMsj({ email: "" });
    }
  };

  const { form, handleBlur, handleChange, handleSubmit } = useForm(
    initialForm,
    validationForm,
    sendErrs
  );

  return (
    <>
      <div className={classes.background}>
        <section className={classes.footer}>
          <div>
            <div className={classes.footer__content}>
              <div className={classes.footer__content__text}>
                <div>
                  <strong>{t.footer.about.title}</strong>
                  <p>{t.footer.about._01}</p>
                  <p>{t.footer.about._02}</p>
                  <p>{t.footer.about._03}</p>
                  <p>{t.footer.about._04}</p>
                  <p>{t.footer.about._05}</p>
                  <p>{t.footer.about._06}</p>
                </div>
                <div>
                  <strong>{t.footer.product.title}</strong>
                  <p>{t.footer.product._01}</p>
                  <p>{t.footer.product._02}</p>
                  <p>{t.footer.product._03}</p>
                </div>
                <div className={classes.footer__content__textDiferent}>
                  <strong>{t.footer.community.title}</strong>
                  <p>{t.footer.community._01}</p>
                  <p>{t.footer.community._02}</p>
                  <p>{t.footer.community._03}</p>
                  <p>{t.footer.community._04}</p>
                </div>
                <div className={classes.footer__content__textDiferent}>
                  <strong>{t.footer.languages.title}</strong>
                  <p>{t.footer.languages.en}</p>
                  <p>{t.footer.languages.es}</p>
                </div>
              </div>
              <span />
              <div className={classes.footer__content__main}>
                <div className={classes.footer__content__mainLogo}>
                  <div>
                    <Image
                      src="/img/footer/icon.png"
                      layout="responsive"
                      width={200}
                      height={23}
                      alt="icon"
                    />
                  </div>
                </div>
                <div className={classes.footer__content__mainSubscribe}>
                  <strong>{t.footer.subscribe}</strong>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        onBlur={handleBlur}
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                      <button>{t.footer.button}</button>
                      <p>{msj.email}</p>
                    </form>
                  </div>
                </div>
                <div className={classes.footer__content__mainFollow}>
                  <strong>{t.footer.follow}</strong>
                  <div>
                    <a
                      href="https://www.facebook.com/inticoinofficial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          src="/img/footer/fb-icon.png"
                          width={35}
                          height={35}
                          alt="facebook icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/inticoinperu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          src="/img/footer/twitter-icon.png"
                          width={35}
                          height={35}
                          alt="twitter icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/inticoinofficial/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          src="/img/footer/inst-icon.png"
                          width={35}
                          height={35}
                          alt="instagram icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://t.me/inticoin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          src="/img/footer/telegram-icon.png"
                          width={35}
                          height={35}
                          alt="telegram icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://discord.gg/usCCHykVSS"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          src="/img/footer/discord-icon.png"
                          width={35}
                          height={35}
                          alt="discord icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCMA9VsokOHD05j6mxyGFvRA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          src="/img/footer/youtube-icon.png"
                          width={35}
                          height={35}
                          alt="youtube icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.reddit.com/user/IntiCoin/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          src="/img/footer/reddit-icon.png"
                          width={35}
                          height={35}
                          alt="reddit icon"
                        />
                      </div>
                    </a>
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
