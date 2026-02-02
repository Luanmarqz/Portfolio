import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Hero() {
  return (
      <Container fluid className="home-container">
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="display-2 fw-bold">Olá, eu sou Desenvolvedor</h1>
            <p className="lead text-muted">
              Bem-vindo ao meu portfólio. Sou estudante de Back-end e entusiasta
              em hardware e tecnologia.
            </p>
            <Button variant="dark" size="lg" href="https://www.linkedin.com/in/luhan-marques-66899725a/">
              Contratar-me
            </Button>
          </Col>
        </Row>
      </Container>
  );
}
export default Hero;
