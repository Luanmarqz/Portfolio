import Form from "react-bootstrap/Form";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import {
  Person,
  GeoAlt,
  Envelope,
  Linkedin,
  Whatsapp,
  Github,
} from "react-bootstrap-icons";

function Contato() {
  return (
    <Container className="contato-container" id="contato">
      <h1>Contato</h1>
      <div className="conteudo">
        <Form className="form-contato">
          <header className="form-header">Mande uma mensagem</header>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Seu Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control as="textarea" rows={4} />
            <br />
            <Button variant="dark" type="submit">
              Enviar
            </Button>
          </Form.Group>
        </Form>
        <Card
          className="card-contact"
          style={{ maxWidth: "400px", backgroundColor: "#fff", border: "none" }}
        >
          <Card.Body className="contato-body">
            <Card.Title className="fw-bold mb-4" style={{ fontSize: "1.5rem" }}>
              Fale Conosco
            </Card.Title>
            <Card.Text className="texto-contato">
              <Row>
                <Col>
                  <Person size={20}></Person>
                </Col>
                <Col>
                  <p>Luhan Marques</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <GeoAlt size={20}></GeoAlt>
                </Col>
                <Col>
                  <p>Macau-RN</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Envelope size={20}></Envelope>
                </Col>
                <Col>
                  <p>Luhanmarques50@gmail.com</p>
                </Col>
              </Row>
            </Card.Text>
            <Col className="icones-contato">
              <Card.Link href="https://www.linkedin.com/in/luhan-marques-66899725a/">
                <Linkedin variant color="dark" size={30}></Linkedin>
              </Card.Link>
              <Card.Link href="https://github.com/Luanmarqz">
                <Github variant color="dark" size={30}></Github>
              </Card.Link>
              <Card.Link href="https://api.whatsapp.com/send?phone=5584999917232">
                <Whatsapp variant color="dark" size={30}></Whatsapp>
              </Card.Link>
            </Col>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Contato;
