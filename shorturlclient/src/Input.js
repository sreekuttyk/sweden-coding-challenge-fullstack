import React, { useState } from "react";
import CopyText from "./CopyText";

const tinyid = require("tiny-unique-id");

function Input() {
  const [input, setInput] = useState("");

  const [allUrl, setAlUrl] = useState([]);
  const handleDb = async () => {
    const slug = tinyid.unique();

    let url = `http://localhost:5000/urllist`;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: input, uniq: slug }),
    })
      .then((req) => req.json())

      .then((data) => {
        if (data.insertedId) {
          setAlUrl([...allUrl, { url: input, uniq: slug }]);
        }
      });

    setInput(" ");
  };
  const handleDelete = (event) => {
    const remainingItem = allUrl.filter((i, index) => ++index !== event);
    setAlUrl(remainingItem);
  };

  return (
    <div className="container parent-container">
      <h1 className="mt-5 text-center">
        <span className="short-dec">#</span>URL{" "}
        <span className="short-dec">Shortener</span>
      </h1>
      <center>
        <div className="mt-4">
          <input
            type="url"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form-control mt-3"
            placeholder="Enter URL"
            name="url"
          />
          <button onClick={handleDb} className="btn btn-dark mt-3">
            Shorten URL
          </button>
        </div>
      </center>
      <table className="table table-borderd table-bordered table-responsive mt-5 text-white">
        <thead>
          <tr>
            <th scope="col">#SL.</th>
            <th scope="col">Original Link</th>
            <th scope="col">Short Link</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUrl?.map((item, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>{item?.url}</td>
              <td>
                <a
                  href={`http://localhost:5000/${item.uniq}`}
                  target="_blank"
                  className="text-whilte"
                  style={{ color: "#fff" }} rel="noreferrer"
                >{`http://${item.uniq}`}</a>
              </td>

              <td className="d-flex justify-content-center align-item-center">
                <td className="d-flex justify-content-center align-item-center">
                  <span className="mx-3">
                    <CopyText text={`http://localhost:5000/${item.uniq}`} />
                  </span>
                  <span
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </span>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Input;
