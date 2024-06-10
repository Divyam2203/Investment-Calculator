import { useState } from "react";
import Results from "./Results";

export default function Forms() {
  const [inputData, setInputData] = useState({
    initialInvestment: 1000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  function handleChange(inputType, userInput) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [inputType]: userInput,
      };
    });
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="initial-investment">initial-investment</label>
            <input
              type="number"
              name="initial-investment"
              onChange={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
              value={inputData.initialInvestment}
            />
          </p>
          <p>
            <label htmlFor="annual-investment">annual-investment</label>
            <input
              type="number"
              name="annual-investment"
              onChange={(event) =>
                handleChange("annualInvestment", event.target.value)
              }
              value={inputData.annualInvestment}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">expected-return</label>
            <input
              type="number"
              name="expected-return"
              onChange={(event) =>
                handleChange("expectedReturn", event.target.value)
              }
              value={inputData.expectedReturn}
            />
          </p>
          <p>
            <label htmlFor="duration">duration</label>
            <input
              type="number"
              name="duration"
              onChange={(event) =>
                handleChange("duration", event.target.value)
              }
              value={inputData.duration}
            />
          </p>
        </div>
      </section>
      <Results receivedData={inputData} />
    </>
  );
}
