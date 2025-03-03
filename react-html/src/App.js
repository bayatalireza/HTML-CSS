import Navbar from './component/navbar/Navbar';
import Header from './component/header/Header';
import './App.css';
import Feature from './component/feature/Feature';
import About from './component/about/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <About />
    </div>
  );
}

export default App;
