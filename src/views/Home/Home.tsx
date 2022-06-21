import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Informative } from "../../components/modals/Informative/Informative";
import { Definition } from "./components/Definition/Definition";
import { Distribution } from "./components/Distribution/Distribution";
import { Ecosystem } from "./components/Ecosystem/Ecosystem";
import { Inicio } from "./components/Inicio/Inicio";
import { LatestUpdates } from "./components/LatestUpdates/LatestUpdates";
import { UniqueValue } from "./components/UniqueValue/UniqueValue";
import classes from "./home.module.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";

export const HomeView = () => {
  const [paper, setPaper] = useState(false);

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <>
      <div className={classes.HomeView}>
        <Inicio setPaper={setPaper} />
        <Definition />
        <UniqueValue />
        <Ecosystem setPaper={setPaper} />
        <Distribution />
        <LatestUpdates setPaper={setPaper} />
        <Footer />
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
