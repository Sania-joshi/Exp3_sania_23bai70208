import { Container, Card, Row, Col } from 'react-bootstrap'

export default function Services() {
  return (
    <Container className="mt-5">
      <h1 className="fw-bold text-danger">My Projects</h1>
      <Row className="mt-4 g-4">
        <Col md={4}>
          <Card bg="dark" text="light" className="h-100 shadow">
            <Card.Body>
              <Card.Title>Credit Card Fraud Detection</Card.Title>
              <Card.Text>
                Built ML models to detect fraudulent transactions using data preprocessing, SMOTE, and evaluation metrics.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="primary" text="light" className="h-100 shadow">
            <Card.Body>
              <Card.Title>Ship Scheduling Automation</Card.Title>
              <Card.Text>
                Research project on intelligent maritime operations using machine learning for optimized scheduling.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" text="light" className="h-100 shadow">
            <Card.Body>
              <Card.Title>Data Analysis Dashboards</Card.Title>
              <Card.Text>
                Created visual analytics for insights using Python, Pandas, Matplotlib, and ML models.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}