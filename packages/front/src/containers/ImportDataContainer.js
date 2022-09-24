import React, {useState} from "react";
import ImportData from "../components/ImportData";

export default function ImportDataContainer() {

  const timestamp = new Date(Date.now()).toISOString(), displacement = Math.floor(Math.random() * 5) + 1;

  const [url, setUrl] = useState("http://localhost:8080/FROST-Server/v1.1/Datastreams(1)/Observations");
  const [data, setData] = useState(`${timestamp}, 0.00${displacement}`);

  const handleDataChange = (e) => {
    setData(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const execute = () => {
    processData(url, data);
  };

  const processData = (url, data) => {
    const allLines = data.split(/\r\n|\n/);
    let lines = [];

    for (let i = 0; i < allLines.length; i++) {
      lines = allLines[i].split(",");
      if (lines.length === 2) {
        let observation = {
            phenomenonTime: lines[0].trim(),
            result: lines[1].trim()
        };
        post(url, JSON.stringify(observation));
      }
    }
  };

  const post = (url, data) => {
    const request = new XMLHttpRequest();
    request.addEventListener("load", function (e) {
      if (request.readyState === 4) {
        let p = document.createElement('p');
        if (request.status >= 200 && request.status < 300) {
            const location = request.getResponseHeader('Location');
            p.innerText = 'Done: ' + location;
        } else {
            p.innerText = 'Error ' + request.status + ": " + request.responseText + "";
        }
        document.getElementById('result').appendChild(p);
      }
    });
    request.addEventListener("error", function (e) {
      let p = document.createElement('p');
      p.innerText = 'Error: ' + request.statusText;
      document.getElementById('result').appendChild(p);
    });
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(data);
  };

  return (
    <ImportData
      url={url}
      handleUrlChange={handleUrlChange}
      execute={execute}
      handleDataChange={handleDataChange}
      data={data}/>
  );
}