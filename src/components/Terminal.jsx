import React, { useState } from "react";
import { commands } from "../commands/Command.js";
import "../styles/Style.css";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();

      if (cmd === "") return;

      if (cmd === "clear") {
        setHistory([]);
      } else {
        const output = commands[cmd]
          ? commands[cmd]()
          : `Command not found: ${cmd}`;

        setHistory([...history, { cmd, output }]);
      }

      setInput("");
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-output">
        {history.map((item, index) => (
          <div key={index}>
            <p className="cmd">C:\Users\You&gt; {item.cmd}</p>
            <pre>{item.output}</pre>
          </div>
        ))}
      </div>

      <div className="terminal-input">
        <span>C:\Users\You&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;