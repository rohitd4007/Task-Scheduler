import "./TaskForm.css";
import "./Home.css";
import { useState } from "react";
import axios from "axios";
import { showForm, makeActiveFormUpdate } from "../Redux/Actions/taskActions";
import { useDispatch, useSelector } from "react-redux";

function UpdateTask(props) {
  let hr = props.task_id.task_time / 60;
  let m = hr / 60;

  let min = (props.task_id.task_time - m) / 60;
  // console.log(props.task_id.task_time);
  // console.log(hr);
  // console.log(m);
  // console.log(min / 60);

  const [task, setTask] = useState({
    assigned_user: props.task_id.assigned_user,
    task_date: props.task_id.task_date,
    task_time: props.task_id.task_time,
    is_completed: 0,
    time_zone: 0,
    task_msg: props.task_id.task_msg,
  });
  const dispatch = useDispatch();
  const form = useSelector((state) => state);

  const handleClickEvent = (e, task_id) => {
    e.preventDefault();
    console.log(task_id);
    dispatch(showForm(2));
    dispatch(makeActiveFormUpdate(false));
    axios
      .put(
        `https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${task_id}?company_id=company_0336d06ff0ec4b3b9306ddc288482663`,
        task,
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
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const inputHandle = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const inputHandleTime = (e) => {
    // console.log(e.target.value);
    let hour = Number(e.target.value.split(":")[0]) * 60 * 60;
    let minute = Number(e.target.value.split(":")[1]) * 60;
    let seconds = hour + minute;
    setTask({ ...task, [e.target.name]: seconds });
  };

  return (
    <>
      <div className="task">
        <form>
          <div className="create-task">
            <div className="desc-container">
              <label>Task Description</label>
              <div className="task-desc">
                <input
                  name="task_msg"
                  type="text"
                  value={task.task_msg}
                  onChange={inputHandle}
                />
              </div>
            </div>
            <div className="date-time-container">
              <div className="date-container">
                <span>Date</span>
                <div className="tdate">
                  <input
                    name="task_date"
                    type="Date"
                    value={task.task_date}
                    onChange={inputHandle}
                  />
                </div>
              </div>
              <div className="time-container">
                <span>Time</span>
                <div className="ttime">
                  <input
                    name="task_time"
                    type="time"
                    //   value={task.task_time}
                    onChange={inputHandleTime}
                  />
                </div>
              </div>
            </div>
            <div className="user-container">
              <span>Assign User</span>
              <div className="task-assign-user">
                <select
                  className="user-dropdown"
                  name="assigned_user"
                  id="u"
                  value={task.assigned_user}
                  onChange={inputHandle}
                >
                  <option value="">Select User</option>
                  <option value="jenny">Jenny</option>
                  <option value="sara">Sara</option>
                  <option value="michal">Michal</option>
                </select>
              </div>
            </div>
            <div className="btn-container">
              <button
                className="btn-cancel"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(makeActiveFormUpdate(false));
                }}
              >
                Cancel
              </button>
              <button
                onClick={(e) => handleClickEvent(e, props.task_id.id)}
                className="btn-save"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateTask;
