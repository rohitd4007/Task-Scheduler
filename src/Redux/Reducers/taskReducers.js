const initialState = {
  task: [],
  active: 0,
  show: false,
  show_update: false,
};
//   name: [],
//   [
//     { name: "dg", number: "44" },
//     { name: "dg", number: "44" },
//     { name: "dg", number: "44" },
//     { name: "dg", number: "44" },
//   ];

const userReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_TASK":
      return { ...state, task: payload };
    case "SHOW_FORM":
      return { ...state, active: payload };
    case "DISPLAY_FORM":
      return { ...state, show: payload };
    case "DISPLAY_FORM_UPDATE":
      return { ...state, show_update: payload };
    default:
      return state;
  }
};

export default userReducers;
