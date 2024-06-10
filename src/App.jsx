import { useState } from "react";
import Forms from "./components/Forms";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const [values, setValues] = useState([0, 0, 0, 1]);

  function handleInputChange(data) {
    setValues(data);
    console.log("received", data);
  }
  return (
    <>
      <Header />
      <Forms onInputChange={() => handleInputChange} />
    </>
  );
}

export default App;
