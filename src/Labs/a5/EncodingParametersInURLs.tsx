import React, {useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [result, setResult] = useState(0);
  const fetchSum = async (a: number, b: number) => {
    const response = await
      axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };

  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

      <h4>Calculator</h4>
      <input type="number" value={a}
        onChange={(e) => setA(Number(e.target.value))}/>
      <input type="number"
        onChange={(e) => setB(Number(e.target.value))} value={b}/>
      <br/>
      <input value={result} type="number" readOnly />
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)} >
        Fetch Sum of {a} + {b}
      </button>
      <br/>
      <button onClick={() => fetchSubtraction(a, b)} >
        Fetch Substraction of {a} - {b}
      </button>
  
      <h3>Path Parameters</h3>
      <a href={`http://localhost:4000/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <br/>
      <a href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>
      <h3>Query Parameters</h3>
      <a href="http://localhost:4000/a5/calculator?operation=add&a=34&b=23">
        Click here to test add </a>
      <br/>
      <a href="http://localhost:4000/a5/calculator?operation=subtract&a=34&b=23">
        Click here to test substract</a>
      <br/>
        <a className="btn btn-primary"
          href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
          Add {a} + {b}
        </a>
        <a className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
          Substract {a} - {b}
        </a>
        <h3>3.1.3 multiply and divide</h3>
        <a className="btn btn-primary"
          href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
          multiply {a} * {b}
        </a>
        <a className="btn btn-danger"
          href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
          divide {a} / {b}
        </a>

    </div>
  );
}
export default EncodingParametersInURLs;