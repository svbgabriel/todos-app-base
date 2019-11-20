import React from "react";
import "./style.css";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px auto"
  },
  containerTodos: {
    background: "#fff",
    minWidth: "350px",
    maxWidth: "500px",
    padding: "10px"
  },
  header: {
    width: "100%"
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  },
  containerButtons: {
    display: "flex",
    margin: "0 15px"
  },
  input: {
    border: "none",
    height: "32px",
    fontSize: "24px",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
    outlineWidth: "0"
  },
  separator: {
    height: "1px",
    background: "#c1c1c1"
  },
  title: {
    fontSize: "48px"
  },
  removeButton: {
    border: "0",
    outlineWidth: "0",
    background: "none"
  }
};

export default function App() {
  return <h1>Hello World!</h1>;
}
