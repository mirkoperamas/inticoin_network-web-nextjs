import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./header-mobile.module.scss";
import { Informative } from "../modals/Informative/Informative";
import { SelectLang } from "../SelectLang/SelectLang";
import { Toolbar } from "./components/Toolbar/Toolbar";

export const HeaderMobile = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<any>(null);
  const [paper, setPaper] = useState(false);

  useEffect(() => {
    isMounted
      ? ref.current?.classList.add(classes.visible)
      : ref.current?.classList.remove(classes.visible);
  }, [isMounted]);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__menu}>
          <div>
            <div className={classes.header__menuMenuIcon}>
              <Image
                src="/img/header/header-icon.svg"
                alt="logo"
                width={5}
                height={5}
                layout="responsive"
                onClick={() => setIsMounted((vis) => !vis)}
              />
            </div>

            <div className={classes.header__menuLogoIcon}>
              <Link href="/">
                <a>
                  <Image
                    src="/img/header/inticoin-network.png"
                    alt="inticoin-network"
                    width={90}
                    height={10}
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className={classes.header__menuLangPosition}>
            <SelectLang />
          </div>
        </div>

        <div ref={ref} className={classes.header__links}>
          <Toolbar setPaper={setPaper} />
        </div>
      </header>
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
