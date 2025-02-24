import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Router from "./shared/Router";
import { getTestResults } from "./api/testResults";

function App() {
  return <Router />;
}

export default App;
