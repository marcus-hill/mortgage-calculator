import classes from "./mortgagetype.module.css";

const MortgageType = ({ mortgageTypes, mortgageTypeSetter }) => {
  return (
    <div className={classes.mortgageTypeContainer}>
      <p className={classes.mortgageTypeHeading}>Mortgage Type</p>
      {mortgageTypes.map((mortgageType, index) => {
        return [
          <label className={classes.mortgageTypeLabel} key={mortgageType.value + "_label"} htmlFor={mortgageType.value}>
            <input
              type="radio"
              value={mortgageType.value}
              name="mortgage-radio"
              key={mortgageType.value + "_input"}
              className={classes.radioInput}
              id={mortgageType.value}
              onChange={(e) => {
                mortgageTypeSetter(e.target.value);
              }}
            />
            {mortgageType.name}
          </label>,
        ];
      })}
    </div>
  );
};

export default MortgageType;
