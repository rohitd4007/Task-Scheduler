import "./Task.css";
import "./Home.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import TaskForm from "../Components/TaskForm";
import { showForm, makeActiveForm } from "../Redux/Actions/taskActions";

function Task() {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  const createTask = () => {
    dispatch(makeActiveForm(true));
  };
  useEffect(() => {}, []);
  const deleteTask = (task_id) => {
    dispatch(showForm(5));

    axios
      .delete(
        `https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${task_id}?company_id=company_0336d06ff0ec4b3b9306ddc288482663`,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzA5MDQ1MzQsIm5iZiI6MTYzMDkwNDUzNCwianRpIjoiZmU4YWIyNDEtMDgwZi00YjRjLTk5NGYtNGMxZDM4MzFlZTFiIiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1haGkgQ1NLIiwiZW1haWwiOiJnb29kQHRlc3QzLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzQxYzFkNDg1NjRhODQzNWQ4MTU2NDM5OTZkOWEzODhmIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mZDE3ZDIwNjUwYzk5NTk0YWVmNmQxMjVhMjU5ODdlYT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.yFTbdT6gCvB3JEG8HLwXaDNAMWr3ACi2SMY-STEz8RE",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        // console.log("delete", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {tasks.allTasks.show ? <TaskForm /> : ""}

      {tasks.allTasks.task.map((data, index) => (
        <div key={index}>
          <div className="task-bar">
            <div className="task-bar-container">
              {"TASKS"}
              <span className="task-count">{index}</span>
            </div>
            <div onClick={() => createTask()} className="add-btn">
              +
            </div>
          </div>

          <div className="task-title">
            <span>{data.task_msg}</span>
            <span className="del-task-btn" onClick={() => deleteTask(data.id)}>
              delete
            </span>
            <span className="edit-task-btn">edit</span>
          </div>
        </div>
      ))}
    </>
  );
}
export default Task;
