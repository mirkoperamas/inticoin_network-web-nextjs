import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import classes from "./select-lang.module.scss";

export const SelectLang = () => {
  const [lang, setLang] = useState("");
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLang = () => {
    if (router.locale === "en") {
      setLang("English");
    } else if (router.locale === "es") {
      setLang("Español");
    }
  };

  useEffect(() => {
    handleLang();
  }, [lang, handleLang]);

  return (
    <div className={classes.selectlang}>
      <div className={classes.selectlang__view}>
        <div className={classes.selectlang__viewFlag}>
          {lang === "English" && (
            <Image
              src="/img/header/en.png"
              layout="responsive"
              width={100}
              height={60}
              alt="es-flag"
            />
          )}
          {lang === "Español" && (
            <Image
              src="/img/header/es.png"
              layout="responsive"
              width={100}
              height={60}
              alt="es-flag"
            />
          )}
        </div>
        <div className={classes.selectlang__viewArrow}>
          <Image
            src="/img/header/arrow.png"
            layout="responsive"
            width={80}
            height={50}
            alt="arrow"
          />
        </div>
        <div className={classes.selectlang__viewSelect}>
          {lang === "English" && (
            <Link href={router.asPath} locale="es">
              <div>
                <Image
                  src="/img/header/es.png"
                  layout="responsive"
                  width={100}
                  height={60}
                  alt="es-flag"
                />
              </div>
            </Link>
          )}
          {lang === "Español" && (
            <Link href={router.asPath} locale="en">
              <div>
                <Image
                  src="/img/header/en.png"
                  layout="responsive"
                  width={100}
                  height={60}
                  alt="en-flag"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
