import React, { useEffect } from "react";

function ErrorPage() {
  useEffect(() => {
    document.title = "403  - Forbidden: Access is denied";
  });
  return (
    <div
      className="error__wrapper"
      style={{ backgroundColor: "#EEEEEE", minHeight: "100vh" }}
    >
      <div
        style={{
          margin: 0,
          fontSize: "0.7em",
          fontFamily: "Verdana, Arial, Helvetica, sans-serif",
          //   background: "#EEEEEE",
        }}
      >
        <div
          style={{
            width: "100%",
            margin: "0 0 0 0",
            padding: "6px 2% 6px 2%",
            fontFamily: "Trebuchet MS, Verdana, sans-serif",
            color: "#FFF",
            backgroundColor: "#555555",
          }}
        >
          <h1 style={{ fontSize: "2.4em", margin: 0, color: "#FFF" }}>
            Server Error
          </h1>
        </div>
        <div style={{ margin: "0 0 0 2%", position: "relative" }}>
          <div
            style={{
              background: "#FFF",
              width: "96%",
              marginTop: "8px",
              padding: "10px",
              position: "relative",
            }}
          >
            <fieldset
              style={{ padding: "0 15px 10px 15px", border: "2px solid black" }}
            >
              <h2 style={{ fontSize: "1.7em", margin: 0, color: "#CC0000" }}>
                <b>403 - Forbidden: Access is denied.</b>
              </h2>
              <h3
                style={{
                  fontSize: "1.2em",
                  margin: "10px 0 0 0",
                  color: "#000000",
                }}
              >
                <b>
                  You do not have permission to view this directory or page
                  using the credentials that you supplied.
                </b>
              </h3>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
