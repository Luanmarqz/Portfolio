import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container fluid className="sobre-container" id="sobre">
      <div className="conteudo-sobre">
        <Col md={3} className="imagemsobre">
          <img
            src={
              "https://images.squarespace-cdn.com/content/v1/666af2449f398d3d003865ac/1718284871742-9DZM1XF33UK7EO75UMDT/BreeLewis-Inscreen-4.jpg?format=1500w"
            }
            alt=""
          />
        </Col>
        <Col md={6} className="ladosobre">
          <Row className="sobre-row">
            <h2>Sobre Mim</h2>
            <p className="textosobre">
              Olá! Meu nome é Luhan e sou um desenvolvedor Junior apaixonado por
              criar experiências digitais incríveis. Com uma sólida formação em
              Sistemas para Internet no IFRN, tenho trabalhado em diversos
              projetos que me permitiram aprimorar minhas habilidades em HTML,
              CSS, JavaScript e frameworks modernos como React e Django.
            </p>
            <h2>Trajetória</h2>
            <p className="textosobre">
              Comecei minha jornada na área de tecnologia com uma paixão por
              resolver problemas e criar soluções inovadoras. Meu primeiro
              contato com programação foi no ensino médio, onde desenvolvi um
              interesse crescente por desenvolvimento web. Após concluir o
              ensino médio, ingressei no curso de Sistemas para Internet no
              IFRN, onde aprofundei meus conhecimentos em programação e
              desenvolvimento de software.
            </p>
          </Row>
        </Col>
      </div>
    </Container>
  );
}

export default About;
