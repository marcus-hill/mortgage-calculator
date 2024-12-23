import "./App.css";
import MortgageInput from "./components/MortgageInput/MortgageInput";
import MortgageType from "./components/MortgageType/MortgageType";
import MortgageButton from "./components/MortgageButton/MortgageButton";
import ButtonIcon from "./assets/icon-calculator.svg";
import ResultSection from "./components/ResultSection/ResultSection";
import EmptyIllustration from "./assets/illustration-empty.svg";

import { useState } from "react";

function App() {
  const [mortgageAmount, setMortgageAmount] = useState();
  const [mortgageTerm, setMortgageTerm] = useState();
  const [interestRate, setInterestRate] = useState();
  const [mortgageType, setMortgageType] = useState();

  const [showingResults, setShowingResults] = useState(false);

  const [monthlyPayments, setMonthlyPayments] = useState();
  const [totalPayments, setTotalPayments] = useState();

  function clearAll() {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("");
    setMonthlyPayments("");
    setTotalPayments("");
    setShowingResults(false);

    Array.from(document.querySelectorAll("input")).forEach((input) => (input.value = ""));
  }

  function calculateRepayments() {
    if (mortgageAmount && mortgageTerm && interestRate && mortgageType) {
      if (mortgageType === "repayment") {
        let totalPaymentsCalculated = Number(mortgageAmount) + Number(mortgageAmount) * (Number(interestRate) / 100);
        setTotalPayments(totalPaymentsCalculated.toFixed(2));
        setMonthlyPayments((totalPaymentsCalculated / (Number(mortgageTerm) * 12)).toFixed(2));
        setShowingResults(true);
      } else if (mortgageType === "interestOnly") {
        let totalPaymentsCalculated = Number(mortgageAmount) * (Number(interestRate) / 100);
        setTotalPayments(totalPaymentsCalculated.toFixed(2));
        setMonthlyPayments((totalPaymentsCalculated / (Number(mortgageTerm) * 12)).toFixed(2));
        setShowingResults(true);
      }
    } else {
      setShowingResults(false);
    }
  }

  return (
    <>
      <div className="mortgage-container">
        <div className="mortgage-holder">
          <div className="mortgage-calculator">
            <div className="title-section">
              <h1 className="mortgage-heading">Mortgage Calculator</h1>
              <a className="mortgage-clear-all" role="button" onClick={clearAll}>
                Clear All
              </a>
            </div>

            <MortgageInput inputName="Mortgage Amount" inputSymbol="£" inputType="number" inputId="mortgageAmount" position="left" setInput={setMortgageAmount}></MortgageInput>

            <MortgageInput inputName="Mortgage Term" inputSymbol="years" inputType="number" inputId="mortgageTerm" position="right" setInput={setMortgageTerm}></MortgageInput>

            <MortgageInput inputName="Interest Rate" inputSymbol="%" inputType="number" inputId="interestRate" position="right" setInput={setInterestRate}></MortgageInput>

            <MortgageType
              mortgageTypes={[
                { name: "Repayment", value: "repayment" },
                { name: "Interest Only", value: "interestOnly" },
              ]}
              mortgageTypeSetter={setMortgageType}
            ></MortgageType>

            <MortgageButton name="Calculate Repayments" icon={ButtonIcon} buttonHandler={calculateRepayments}></MortgageButton>
          </div>
          {showingResults ? (
            <>
              <ResultSection monthlyPayment={monthlyPayments} totalPayment={totalPayments}></ResultSection>
            </>
          ) : (
            <>
              <div className="awaitingResultSection">
                <img src={EmptyIllustration} alt="" />
                <h2 className="awaitingResultsHeading">Results shown here</h2>
                <p className="awaitingResultsText">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
