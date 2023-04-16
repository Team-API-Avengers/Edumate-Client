import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Route/Route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App bg-slate-100 dark:bg-[#0d1425] dark:text-white md:w-[98vw] overflow-hidden">
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

// check out my client side

export default App;
