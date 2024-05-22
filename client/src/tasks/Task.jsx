import { useEffect, useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await fetch("api/tasks/");
    const body = await response.json();

    setTasks(body);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("api/tasks/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: { name: taskName } }),
    });

    const body = await response.json();

    setTaskName(body.message);
    getTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`api/tasks/${id}`, {
      method: "DELETE",
    }).then(() => getTasks());
  };

  useEffect(() => {
    getTasks();
  }, []);

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
      </form>
      <br />
      Tasks:
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <button onClick={() => deleteTask(task.id)}>Delete</button> -{" "}
              {task.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
