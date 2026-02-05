import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Card from'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample() {
  return (
    
    <Container className='especialidade-container'>
    <h1>Especialidades</h1>
    <CardGroup className='especialidade-cards'>
      <Card className='especialidade-card text-center text-dark' bg='light'>
        <Card.Header className='border-bottom border-white'>HTML, CSS e JavaScript</Card.Header>
        <Card.Body className='card-body'>
          <Card.Title>Front-End</Card.Title>
          <Card.Text className='progress'><ProgressBar  animated now={95} label='95%' /></Card.Text>
        </Card.Body>
      </Card>
      <Card className='especialidade-card text-center text-dark' bg='light'>
        <Card.Header className='border-bottom border-white'>Python, Java e C++</Card.Header>
        <Card.Body className='card-body'>
          <Card.Title>Back-end</Card.Title>
          <Card.Text className='progress'><ProgressBar  animated now={90} label='90%' /></Card.Text>
        </Card.Body>
      </Card>

      
    </CardGroup>
    <CardGroup className='especialidade-cards2'>
        <Card className='especialidade-card text-center text-dark' bg='light'>
        <Card.Header className='border-bottom border-white'>React, Django e Node.js</Card.Header>
        <Card.Body className='card-body'>
          <Card.Title>Frameworks</Card.Title>
          <Card.Text className='progress'><ProgressBar  animated now={70} label='70%' /></Card.Text>
        </Card.Body>
      </Card>
      <Card className='especialidade-card text-center text-dark' bg='light'>
        <Card.Header className='border-bottom border-white'>PHP, MySQL e MongoDB</Card.Header>
        <Card.Body className='card-body'>
          <Card.Title>Banco de Dados</Card.Title>
          <Card.Text className='progress'><ProgressBar  animated now={80} label='80%' /></Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </Container>
  );
}

export default BasicExample;