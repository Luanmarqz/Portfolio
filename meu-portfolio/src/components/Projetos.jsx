import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import ProjetoSpotify from "../assets/img/ProjetoSpotify.png";
import ocorrencia from "../assets/img/ocorrencia.png";
import login from "../assets/img/login.png";

function Projetos() {
  return (
    <Container className="projeto-container" id="projetos">
      <div className="Header text-center mb-5">
        <header>
          <h1>Meus Projetos</h1>
          <p>Aqui estão alguns dos meus projetos.</p>
        </header>
      </div>

      <div className="carrossel">
        <Carousel className="carrossel-projetos" interval={null}>
          <Carousel.Item>
            <a
              href="https://luhanmarq.pythonanywhere.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="d-block mx-auto img-fluid"
                src={ocorrencia}
                alt="Primeiro Projeto"
                style={{ maxHeight: "600px", objectFit: "contain" }} // Mantém a imagem centralizada e contida
              />
            </a>
            <Carousel.Caption className="caption">
              <h3>Lista de Ocôrrencias</h3>
              <p>Django, BootStrap e JavaScript</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href="https://spotify-project-one-lyart.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="d-block mx-auto img-fluid"
                src={ProjetoSpotify}
                alt="Primeiro Projeto"
                style={{ maxHeight: "600px", objectFit: "contain" }} // Mantém a imagem centralizada e contida
              />
            </a>
            <Carousel.Caption className="caption">
              <h3>Cópia Spotify</h3>
              <p>React, Vite e JavaScript</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href="https://luanmarqz.github.io/Login-Page/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="d-block mx-auto img-fluid"
                src={login}
                alt="Primeiro Projeto"
                style={{ maxHeight: "600px", objectFit: "contain" }} // Mantém a imagem centralizada e contida
              />
            </a>
            <Carousel.Caption className="caption">
              <h3>Página de Login</h3>
              <p>HTML, CSS e JavaScript</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default Projetos;
