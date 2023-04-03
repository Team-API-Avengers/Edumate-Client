import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes/Route/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App bg-slate-100">
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
