import "./App.css";
import Home from "./Components/Home";
import TaskForm from "./Components/TaskForm";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {" "}
        {/* <Route exact path="/" render={() => <Redirect to="/category" />} /> */}
        <Route exact path="/new-task" component={TaskForm} />{" "}
        {/* <Route path="/category" component={Category} />{" "} */}
        {/* <Route
          exact
          path="/book/:genre"
          render={(props) => <Book genre={props.match.params.genre} />}
          //
        /> */}
      </Router>{" "}
      <Home></Home>
    </div>
  );
}

export default App;
