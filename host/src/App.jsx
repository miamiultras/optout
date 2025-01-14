import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "remote/Counter";
import counterMounter from "vue_remote/counterMounter";

import "./index.scss";
import { useEffect } from "react";

const App = () => {
  const ref = React.useRef(null);
  useEffect(() => {
    counterMounter(ref.current);
  }, [])
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <Counter />
      <div ref={ref} />
    </div>
  );
}
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)