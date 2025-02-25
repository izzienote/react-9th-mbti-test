import "./App.css";
import Router from "./shared/Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
