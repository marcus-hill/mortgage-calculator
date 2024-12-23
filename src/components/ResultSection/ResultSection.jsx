import classes from "./resultsection.module.css";

const ResultSection = ({ monthlyPayment, totalPayment }) => {
  return (
    <div className={classes.resultSection}>
      <h2 className={classes.sectionHeader}>Your results</h2>
      <p className={classes.sectionText}>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className={classes.repaymentsContainerTop}></div>
      <div className={classes.repaymentsContainer}>
        <p className={classes.sectionText}>Your monthly repayments</p>
        <p className={classes.monthlyRepaymentAmount}>{"£" + monthlyPayment}</p>
        <hr className={classes.horizontalLine} />
        <p className={classes.sectionText}>Total you'll repay over the term</p>
        <p className={classes.totalRepaymentAmount}>{"£" + totalPayment}</p>
      </div>
    </div>
  );
};

export default ResultSection;
