import "./Task.css";
import "./Home.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import TaskForm from "../Components/TaskForm";
import UpdateTask from "../Components/UpdateTask";
import deleteIcon from "../Icons/delete.png";
import editIcon from "../Icons/pencil.png";
import {
  showForm,
  makeActiveForm,
  makeActiveFormUpdate,
} from "../Redux/Actions/taskActions";

function Task() {
  const tasks = useSelector((state) => state);
  const [utask, setUTask] = useState();
  const [id, setId] = useState();
  const dispatch = useDispatch();
  const updateTask = (task_id, id) => {
    dispatch(makeActiveFormUpdate(true));

    setId(id);
    // setisEdit(true);
    // console.log(task_id);
    axios
      .get(
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
        // console.log("single", res.data.results);
        setUTask(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createTask = () => {
    dispatch(makeActiveForm(true));
  };

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
      <div className="box-container">
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

            {id === index && tasks.allTasks.show_update ? (
              <UpdateTask task_id={data}></UpdateTask>
            ) : (
              <div className="task-title">
                <div className="task-msg-container">
                  <span>{data.task_msg}</span>
                  <span className="task-time">{data.task_date}</span>
                </div>

                <div className="del-container">
                  <img
                    className="del-task-btn"
                    src={deleteIcon}
                    alt="del"
                    onClick={() => deleteTask(data.id)}
                  />
                </div>
                <div className="edit-container">
                  <img
                    className="edit-task-btn"
                    src={editIcon}
                    onClick={() => updateTask(data.id, index)}
                    alt="edit"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default Task;
