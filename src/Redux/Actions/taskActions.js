export const setTask = (task) => {
  return {
    type: "SET_TASK",
    payload: task,
  };
};

export const selectedTask = (task) => {
  return {
    type: "SELECTED_TASK",
    payload: task,
  };
};

export const showForm = (active_inactive) => {
  return {
    type: "SHOW_FORM",
    payload: active_inactive,
  };
};
