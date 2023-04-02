import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import Banner from './components/Pages/Home/Banner/Banner';

function App() {
  return (
    <div className="App bg-slate-100">
     <Header />
     <Banner />
    </div>
  );
}

export default App;
