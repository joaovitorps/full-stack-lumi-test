import { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: taskName }),
    });

    const body = await response.json();

    setTaskName(body.message);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Write your task here:</label>
        <input
          type="text"
          name="task"
          id="task"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Send</button>
        <br />
        Tasks:
        <ul>
          {tasks.map((task) => {
            return <li>{task.name}</li>;
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
