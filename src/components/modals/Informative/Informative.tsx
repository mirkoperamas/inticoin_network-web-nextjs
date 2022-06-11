import classes from "./informative.module.scss";

interface IInformative {
  children: React.ReactNode;
  w?: number;
  handleClose: () => void;
}

export const Informative = ({ children, w = 0, handleClose }: IInformative) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalDialog} onClick={handleClose}></div>
      <div className={classes.flex}>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};
