import NavbarComponent from './components/NavBarComponent';
import Hero from './components/Hero';
import About from './components/About';
import Especialidade from './components/Serviços';
import './App.css'


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <About />
      <Especialidade />
      {/* Aqui você poderá adicionar as próximas seções futuramente */}
    </div>
  );
}

export default App;
