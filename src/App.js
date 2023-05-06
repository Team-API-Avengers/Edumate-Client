import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App bg-slate-50  mx-auto dark:bg-black dark:text-[#0056F7]  overflow-hidden">
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

// check out my client side

export default App;
