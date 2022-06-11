import React, { useEffect, useState } from "react";
import classes from "./toolbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Informative } from "../../../modals/Informative/Informative";

export const Toolbar = () => {
  const router = useRouter();
  const [paper, setPaper] = useState(false);
  const [lang, setLang] = useState("");

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
    <>
      <div className={classes.toolbar}>
        <ul>
          <Link href="/">
            <a className={router.pathname == "/" ? classes.active : ""}>
              <li>
                <p>Inicio</p>
              </li>
            </a>
          </Link>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>Desarrollador</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>Producto</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>Ultimas noticias</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>Comunidad</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>Acerca de</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>Formularios</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>Actualizacion</p>
            </li>
          </a>
          {/* <a
            onClick={handleLang}
            className={`${classes.active} ${classes.langStyle}`}
          >
            <li>
              <p>{lang}</p>
            </li>

            <div className={classes.translatorBox}>
              <Link href={router.asPath} locale="es">
                <div>
                  <p>Español</p>
                </div>
              </Link>
              <Link href={router.asPath} locale="en">
                <div>
                  <p>English</p>
                </div>
              </Link>
            </div>
          </a> */}

          {/* <div className={classes.langs}>
            {router?.locales?.map((loc: any) => (
              <Link href={router.asPath} locale={loc} key={loc}>
                {loc}
              </Link>
            ))}
          </div> */}
        </ul>
      </div>

      {paper && (
        <Informative handleClose={() => setPaper(false)}>
          <span>
            <h2>Proximamente...</h2>
          </span>
        </Informative>
      )}
    </>
  );
};
function e(e: any) {
  throw new Error("Function not implemented.");
}
