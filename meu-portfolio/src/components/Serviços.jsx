import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
// Importação correta dos 3 ícones
import { JournalCode, Laptop, Tools } from "react-bootstrap-icons";

function GroupExample() {
  return (
    <Container fluid className="serviços-container" id="serviços">
      <div className="Header text-center mb-5">
        <header>
          <h1>Meus Serviços</h1>
          <p>Aqui estão alguns dos serviços que ofereço como desenvolvedor.</p>
        </header>
      </div>

      <CardGroup className="serviços-cards">
        {/* Card 1: Programação */}
        <Card className="serviço-card text-center text-white" bg="dark">
          {/* Adicionada apenas a classe de borda do bootstrap mantendo sua serviço-card */}
          <Card.Header className="border-bottom border-white">
            Programação
          </Card.Header>
          <Card.Body className="card-body">
            <Card.Title>Programador</Card.Title>
            <Card.Text>em Python, JavaScript, e Java.</Card.Text>
            <JournalCode size={40} />
          </Card.Body>
        </Card>

        {/* Card 2: Desenvolvedor Web */}
        <Card className="serviço-card text-center text-white" bg="dark">
          <Card.Header className="border-bottom border-white">
            Desenvolvedor Web
          </Card.Header>
          <Card.Body className="card-body">
            <Card.Title>Full Stack</Card.Title>
            <Card.Text>Trabalho com HTML, React e Django.</Card.Text>
            <Laptop size={40} />
          </Card.Body>
        </Card>

        {/* Card 3: Suporte Técnico */}
        <Card className="serviço-card text-center text-white" bg="dark">
          <Card.Header className="border-bottom border-white">
            Suporte Técnico
          </Card.Header>
          <Card.Body className="card-body">
            <Card.Title>Informática</Card.Title>
            <Card.Text>Suporte técnico em informática e hardware.</Card.Text>
            <Tools size={40} />
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default GroupExample;
