import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Hero() {
  // Referência para o elemento span
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Desenvolvedor Web", "Formado em Sistemas para Internet", "Programador"],
      typeSpeed: 80,
      backSpeed: 100,
      loop: true,
    });

    // Limpeza ao desmontar o componente
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container fluid className="home-container" id="home">
      <Row className="align-items-center">
        <Col md={9}>
          <h1 className="display-2 fw-bold">
            Olá, eu sou <br />
            <span ref={el}></span>
          </h1>
          <p className="lead text-muted">
            Bem-vindo ao meu portfólio. Sou Desenvolvedor Junior e entusiasta
            em hardware e tecnologia.
          </p>
          <Button
            variant="dark"
            size="lg"
            href="https://www.linkedin.com/in/luhan-marques-66899725a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contratar-me
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
