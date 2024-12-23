import classes from "./mortgagebutton.module.css";

const MortgageButton = ({ name, buttonHandler, icon }) => {
  return (
    <button className={classes.mortgageButton} onClick={buttonHandler}>
      <img className={classes.buttonIcon} src={icon}></img>
      {name}
    </button>
  );
};

export default MortgageButton;
