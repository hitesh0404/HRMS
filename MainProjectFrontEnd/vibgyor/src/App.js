import './App.css';
import { RouterProvider } from "react-router-dom";
import Route from "./components/Route";
function App() {
  return (
    <div className="App">
      <RouterProvider router={Route()}/>
    </div>
  );
}

export default App;
