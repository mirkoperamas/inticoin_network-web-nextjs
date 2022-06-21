import React, { useState } from "react";
import classes from "./toolbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Informative } from "../../../modals/Informative/Informative";
import { useTranslate } from "../../../../hooks/useTranslate";

export const Toolbar = () => {
  const { t } = useTranslate();
  const router = useRouter();
  const [paper, setPaper] = useState(false);

  return (
    <>
      <div className={classes.toolbar}>
        <ul>
          <Link href="/">
            <a className={router.pathname == "/" ? classes.active : ""}>
              <li>
                <p>{t.header.inicio}</p>
              </li>
            </a>
          </Link>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>{t.header.developer}</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>{t.header.product}</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>{t.header.lastnews}</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>{t.header.community}</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>{t.header.about}</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>{t.header.forms}</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>{t.header.update}</p>
            </li>
          </a>
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
