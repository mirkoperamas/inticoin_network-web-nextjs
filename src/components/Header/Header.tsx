import classes from "./header.module.scss";
import Image from "next/image";
import { Toolbar } from "./components/Toolbar/Toolbar";
import Link from "next/link";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SelectLang } from "../SelectLang/SelectLang";

export const Header = () => {
  const router = useRouter();

  useEffect(() => {
    let ubic = window.pageYOffset;
    window.onscroll = function () {
      const onUbic = window.pageYOffset;
      const test = document.getElementById("navbar");
      if (test) {
        if (ubic >= onUbic) {
          test.style.top = "0";
        } else {
          test.style.top = "-6.5rem";
        }
      }
      ubic = onUbic;
    };
  }, []);
  return (
    <>
      <HeaderMobile />
      <header className={classes.header} id="navbar">
        <div>
          <div className={classes.header__logo}>
            <Link href="/">
              <a>
                <Image
                  src="/img/header/inticoin-network.png"
                  layout="responsive"
                  width={90}
                  height={10}
                  alt="inticoin-network"
                />
              </a>
            </Link>
          </div>
          <div className={classes.header__langPosition}>
            <SelectLang />
          </div>
          <Toolbar />
        </div>
      </header>
    </>
  );
};
