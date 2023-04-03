import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes/Route/Route';


function App() {
  return (
    <div className="App bg-slate-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
