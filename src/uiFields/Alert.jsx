import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const Alert = ({
  message,
  text,
  btntext,
  icontext,
  btnbg,
  btnpadding,
  btnshape,
  btnposition,
  btncenter,
  btnmargin,
  paratext,
  paracenter,
  iconposition,
  iconcenter,
  iconmargin,
  mainposition,
  maintranslate,
  maintransform,
  mainbg,
  mainpadding,
  mainshape,
  mainwidth,
  mainshadow,
  onClick,
}) => {
  return (
    <div
      className={`${mainposition} ${maintranslate} ${maintransform} ${mainbg} ${mainpadding} ${mainshape} ${mainwidth} ${mainshadow}`}
    >
      <div className={`${iconposition} ${iconcenter} ${iconmargin}`}>
        <FaExclamationCircle className={`${icontext}`} />
      </div>
      <p className={`${paratext} ${paracenter}`}>{message}</p>
      <div className={`${btnposition} ${btncenter} ${btnmargin}`}>
        <button
          className={`${btnpadding} ${btnbg} ${text} ${btnshape}`}
          onClick={onClick}
        >
          {btntext}
        </button>
      </div>
    </div>
  );
};

export default Alert;
