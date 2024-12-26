import classes from "./mortgageinput.module.css";
import classNames from "classnames";

const MortgageInput = ({ inputName, inputId, inputSymbol, position, setInput, inputType }) => {
  return (
    <div className={classes.mortgageInputContainer}>
      <label className={classes.mortgageInputLabel} htmlFor={inputId}>
        {inputName}
      </label>
      <div className={classes.mortgageInputFieldContainer}>
        <p className={position === "left" ? classes.inputSymbolText : classes.symbolHidden}>{inputSymbol}</p>
        <input
          type={inputType}
          name={inputName}
          id={inputId}
          className={classes.mortgageInputField}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <p className={position === "right" ? classes.inputSymbolText : classes.symbolHidden}>{inputSymbol}</p>
      </div>
    </div>
  );
};

export default MortgageInput;
