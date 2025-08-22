import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>❤️ WeLove Token DApp</h1>
      <p>This is a starter template. Replace with your DApp UI.</p>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}
