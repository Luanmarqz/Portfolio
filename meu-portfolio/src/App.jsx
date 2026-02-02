import NavbarComponent from './components/NavBarComponent';
import Hero from './components/Hero';
import About from './components/About';
import './App.css'


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <About />
      {/* Aqui você poderá adicionar as próximas seções futuramente */}
    </div>
  );
}

export default App;
