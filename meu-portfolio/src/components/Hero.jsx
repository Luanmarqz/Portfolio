import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Hero() {
  return (
    <div
      className="bg-light py-5"
      id="home"
      style={{ minHeight: "80vh", display: "flex", alignItems: "center", width: "100vh" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">Olá, eu sou Desenvolvedor</h1>
            <p className="lead text-muted">
              Bem-vindo ao meu portfólio. Sou estudante de Back-end e entusiasta
              em hardware e tecnologia.
            </p>
            <Button variant="primary" size="lg" href="#projetos">
              Ver Meus Projetos
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Hero;
