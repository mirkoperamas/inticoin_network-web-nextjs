import classes from "./header.module.scss";
import Image from "next/image";
import { Toolbar } from "./components/Toolbar/Toolbar";
import Link from "next/link";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";

export const Header = () => {
  return (
    <>
      <HeaderMobile />
      <header className={classes.header}>
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
          <Toolbar />
        </div>
      </header>
    </>
  );
};
