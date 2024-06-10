import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export default function Results({receivedData}){
  
  const data = calculateInvestmentResults(receivedData);

  return (
    <div id="result">
      <div></div>
      <table id="tab">
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Intrest(Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.totalInterest)}</td>
              <td>{formatter.format(item.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
