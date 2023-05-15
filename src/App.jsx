import Overview from "./components/Overview";
import submitIcon from "./assets/react.svg";
import { useEffect, useState } from "react";

export default function App() {
  const [taskText, setTaskText] = useState("");

  const [tasks, setTasks] = useState([]);

  // LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    let newTask = taskText;
    if (newTask == "") return;
    setTaskText("");
    newTask = newTask.charAt(0).toUpperCase() + newTask.slice(1).toLowerCase()
    setTasks([
      ...tasks,
      {
        text: newTask,
      },
    ]);
  }

  return (
    <main className=" w-max p-10 min-h-52 font-Ubuntu shadow-2xl backdrop-filter-blur bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% grid place-items-center gap-5 rounded-xl">
      <form action="" onSubmit={handleSubmit} className="flex flex-row gap-3">
        <label className="text-xl" htmlFor="taskInput">
          Task:
          <input
            id="taskInput"
            type="text"
            value={taskText}
            className="ml-2 bg-transparent text-center outline-none border-b-[3px] border-red-50"
            onChange={(e) => setTaskText(e.target.value)}
          />
        </label>
        <label htmlFor="submitBtn"></label>
        <button
          id="submitBtn"
          type="submit"
          className="active:animate-none hover:animate-spin"
        >
          <img src={submitIcon} alt="" />
        </button>
      </form>
      <ul className="grid gap-2">
        <Overview tsk={tasks} setTsk={setTasks} />
      </ul>
    </main>
  );
}
