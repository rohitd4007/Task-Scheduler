import { useRef, useState } from "react";
import "./Home.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import AddTask from "./AddTask";

function Home() {
  const [showtask, setShowTask] = useState(true);
  const [active, setActive] = useState();
  const [taskcount, setTaskCount] = useState(0);
  const [task, setTasks] = useState(["TASKS"]);

  const [value, setValue] = useState({ name: "", id: "" });

  const setTask = (id1) => {
    setShowTask(!showtask);
    setActive(id1);
  };
  const createTask = () => {
    setTaskCount(taskcount + 1);
    task.push("TASKS");
  };
  const checkSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const formdata = new FormData(e.target);
    // const data = new FormData(e.target);

    console.log(formdata);
  };
  const checkChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (event) => {
    const message = {
      name: value.name,
      id: value.id,
    };
    console.log(event);
    // if (event.key == "Enter") {
    //   console.log(message);
    console.log(message);
    // }
  };

  const nameForm = useRef(null);

  const handleClickEvent = () => {
    const form = nameForm.current;
    setValue(
      ((value.name = form["firstname"].value),
      (value.id = form["lastname"].value))
    );

    alert(`${form["firstname"].value} ${form["lastname"].value}`);
    console.log(value);
  };
  return (
    <>
      <form ref={nameForm}>
        <input label={"first name"} name={"firstname"} />
        <input label={"last name"} name={"lastname"} />
      </form>
      <button onClick={handleClickEvent}>gett value</button>

      <div className="home">Hello From Home Component</div>
      <AddTask></AddTask>
      <Task />
      {/* {task.map((data, index) => (
        <>
          <div key={index} className="task-bar">
            <div onClick={() => setTask(index)} className="task-bar-container">
              {data}
              <span className="task-count">{index}</span>
            </div>
            <div className="add-btn" onClick={() => createTask()}>
              +
            </div>
          </div>
          {active === index ? <TaskForm /> : ""}
        </>
      ))} */}
    </>
  );
}

export default Home;
