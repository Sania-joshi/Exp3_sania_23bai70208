import { Container, Card } from 'react-bootstrap'

export default function About() {
  return (
    <Container className="mt-5">
      <Card bg="light" className="p-4 shadow">
        <h1 className="fw-bold text-primary">About Me</h1>
        <p className="mt-3">
          I'm a 2nd-year B.Tech student at <strong>Chandigarh University</strong>, focusing on <strong>Artificial Intelligence & Machine Learning</strong>.
          I enjoy working on real-world problems like fraud detection and intelligent automation.
        </p>
        <p>
          One of my research works is <em>"Automation in Ship Scheduling: A Machine Learning Approach to Intelligent Maritime Operations"</em>.
        </p>
      </Card>
    </Container>
  )
}
