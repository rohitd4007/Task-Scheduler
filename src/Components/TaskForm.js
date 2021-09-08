import "./TaskForm.css";
import "./Home.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function TaskForm() {
  const [text, setText] = useState("");
  const newText = useRef("");

  const handlSubmit = (e) => {
    // e.preDefault();
    // const data = new FormData(e.target);
    setValues();
    console.log(e.target);
  };

  const [values, setValues] = useState({
    name: "",
    color: "",
    age: "",
    habits: "",
  });

  const saveFormData = async () => {
    // const response = await fetch("/api/registration", {
    //   method: "POST",
    //   body: JSON.stringify(values),
    // });
    // if (response.status !== 200) {
    //   throw new Error(`Request failed: ${response.status}`);
    // }
    console.log(values);
  };

  const onSubmit = (event) => {
    // event.preventDefault(); // Prevent default submission
    // try {
    //   await saveFormData();
    //   alert("Your registration was successfully submitted!");
    //   setValues({
    //     name: "",
    //     color: "",
    //     age: "",
    //     habits: "",
    //   });
    // } catch (e) {
    //   alert(`Registration failed! ${e.message}`);
    // }
    alert(JSON.stringify(event.target));
  };

  const [task, setTask] = useState({
    assigned_user: "",
    task_date: "",
    task_time: 0,
    is_completed: 0,
    time_zone: 0,
    task_msg: "",
  });

  const nameForm = useRef(null);
  //   const task = {
  //   assigned_user: "user_41c1d48564a8435d815643996d9a388g",
  //   task_date: "2021-05-12",
  //   task_time: 5077,
  //   is_completed: 0,
  //   time_zone: 4,
  //   task_msg: "task add",
  //   };
  const handleClickEvent = (e) => {
    e.preventDefault();
    console.log(task);
  };
  const inputHandle = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const inputHandleTime = (e) => {
    // if (e.target.name === "task_time") {
    console.log(e.target.value);
    let hour = Number(e.target.value.split(":")[0]) * 60 * 60;
    let minute = Number(e.target.value.split(":")[1]) * 60;

    let seconds = hour + minute;

    // setTask({ ...task, [e.target.task_time]: e.target.value.split(":")[1] });
    setTask({ ...task, [e.target.name]: seconds });

    //   }
  };

  useEffect(() => {
    axios
      .post(
        "https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b?company_id=company_0336d06ff0ec4b3b9306ddc288482663",
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [task]);

  return (
    <div className="task">
      <form ref={nameForm}>
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
            <button className="btn-cancel">Cancel</button>
            <button onClick={handleClickEvent} className="btn-save">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
