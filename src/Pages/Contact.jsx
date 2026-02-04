import { Container, Form, Button, Card } from 'react-bootstrap'

export default function Contact() {
  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h1 className="fw-bold text-success">Contact Me</h1>
        <Form className="mt-3">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message..." />
          </Form.Group>
          <Button variant="primary" size="lg">Send Message</Button>
        </Form>
      </Card>
    </Container>
  )
}
