import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container fluid className='sobre-container' id="sobre">
      <Row className='ladoimagem'>
        <Col className='imagemsobre'><img src={"https://images.squarespace-cdn.com/content/v1/666af2449f398d3d003865ac/1718284871742-9DZM1XF33UK7EO75UMDT/BreeLewis-Inscreen-4.jpg?format=1500w"} alt="" />
          </Col>
      </Row>
      <Row className='ladotexto'>
        <Col md={6} className='textosobre'>
        <h2>Sobre Mim</h2>
            <p>Olá! Meu nome é Luhan e sou um desenvolvedor Junior apaixonado por criar experiências digitais incríveis. Com uma sólida formação em Sistemas para Internet no IFRN, tenho trabalhado em diversos projetos que me permitiram aprimorar minhas habilidades em HTML, CSS, JavaScript e frameworks modernos como React e Django.</p>       
        </Col>
        <Col md={6} className='textosobre-2'>
        <h2>Trajetória</h2>
            <p>Comecei minha jornada na área de tecnologia com uma paixão por resolver problemas e criar soluções inovadoras. Meu primeiro contato com programação foi no ensino médio, onde desenvolvi um interesse crescente por desenvolvimento web. Após concluir o ensino médio, ingressei no curso de Sistemas para Internet no IFRN, onde aprofundei meus conhecimentos em programação e desenvolvimento de software.</p>       
        </Col>
      </Row>
    </Container>
  );
}

export default About;