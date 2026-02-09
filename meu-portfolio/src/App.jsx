import NavbarComponent from "./components/NavBarComponent";
import Hero from "./components/Hero";
import About from "./components/About";
import Serviços from "./components/Serviços";
import Especialidade from "./components/Especialidade";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <About />
      <Serviços />
      <Especialidade />
      <Projetos />
      <Contato />
      <Footer />
      {/* Aqui você poderá adicionar as próximas seções futuramente */}
    </div>
  );
}

export default App;
