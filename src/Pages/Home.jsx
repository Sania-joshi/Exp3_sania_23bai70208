import { Container, Button, Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={7}>
          <h1 className="fw-bold display-5">Hi, I'm Sania Joshi 👋</h1>
          <p className="lead">B.E(CSE-AIML) student at Chandigarh University specializing in <strong>AI & Machine Learning</strong>.</p>
          <div className="mb-3">
            <Badge bg="success" className="me-2">Python</Badge>
            <Badge bg="warning" text="dark" className="me-2">Machine Learning</Badge>
            <Badge bg="info" className="me-2">Data Analysis</Badge>
            <Badge bg="danger">Research</Badge>
          </div>
          <Button variant="dark" size="lg" as={Link} to="/services">View My Projects</Button>
        </Col>
      </Row>
    </Container>
  )
}
