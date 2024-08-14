import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from 'react-bootstrap';
import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import './Dashboard.css';

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend, LineElement, PointElement);

const topRecruiters = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', logo: 'https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' },
  { name: 'Apple', logo: 'https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Intel', logo: 'https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'Cisco', logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8En9kAnNgAltYAmtfB3vE3qd0Ak9W63fEVo9uExugAmNfY6/fQ6PXG5fW43vGRy+ry+fze8Pnr9vtuu+RPrt55w+ZbtOGk0eybzusAjtOt2O9xtuJ9wOY2pNue0uz8x+TTAAAH5klEQVR4nO2caXekKhCGA9K4Lyi22kb9///youICYncnksmZufWcfJiDZcnLTkHPxwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG8TeTGz7JLFXmTZ5VsUdUXLrLDrMytpVdv1+RY1IpgQq2qKjAifqLZd3y+JKoIQwiix6DPxsfBJqj/e0jw6fhg5nkWfN2d0iWlq0edbpCDmOSDGBiDmBSDGBiDmBSDGBn+vmLj75K26/DsRk3afn+/lxeOfnWZpFsNaYRl/Oc9nxCUhpK+VNLOYlo6W7Rs+015YUtXSLKaeLG2pKbrxI6RUFshGMUU5LqUJer2GL/pp0V0qOwijmISOlg63tNeIJ3cINftEo5hkTnRfF2PsTvnulQIyimmmb2PfUtXE0zYD4WyfaBST9rOY15ucRIpR8m0Uk+HfEkPfFRODGAv8RDP7G8RAzazYFxO1qTZNXK+ZZNBTLothaZu/1NL1fa9Oj9drpuz9vlRL6KqYpBL5DF5oaUOMMCkV0VfFVGT0WdkUI5YaGGPyfN1UzPlWJ/uLzSyf8o0ctYCuiRnQnPh0jZNP7hC6f1OMqWbi2aej5OaimDsyFNBBTHhNjKlmkllMqCq0Iib8UTGmmvknxfxAM/tZMc+aGYgBMYsY8i8NAO4lMR5Fb4q5uNOUYtynkybzp6rxh32iPPHzlcWDUUw018xD+QZ7TB9+KIuz4jGLUYrWKKaezwZL5Wxw8EdL4j+PnHgP8WrYq0atKxJdNT5iDjVxMlre1df5WAsOV9JYIBIxURONYgou+jF21WUYo2PnfryKQLbEdSut9thAXIer7fMkCBiI1+96ed1dkailMZFItGWvOW6Wc8clg+azqMTrb8TnCkNDZIWewbPw7NFyTMzfSjwLzxp9mrL5Xf7eWLMBEPOCXxMjI7HOzaLPXxOTf4bT5GPzukk8FVDIX0cqbJP6DiaPd04v3qd1CXGQzZb7LvmdVvbOgGaiit7/fL0AAAAAAAAAvwljRZ4kaZwXjCnJM0d7YZ6myWhuDggJgziZDU4fJ6ePr8CirMSu6ziuS2iXbP4bWo5U6lqXFQOV5qFfGX4wwPKh8hd/XD8SFu973A/Fc9dFZRNZlcPiynHmA8JxR+bubusH428RMP6BIVCZjYCKikQ6kUkeqURWVxO43SMhE9M76e0jXas1qN+n/70evNYxwFgQNVk7UKAEdIIaYmyd2EYpPwhcUzBtv0p+m6kQXa5gFb3UbGb0AOQUst3KXxIu6xZ0DA7XqPzJrsD/BCtEkS8UO7lkugFjSlYJ/gP3TLwAAQUNM9pAwAAAAAElFTkSuQmCC' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Salesforce_logo.svg' },
  { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/72/SAP_2011_logo.svg' }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    username: 'Louis Carter',
    company: 'Wise Inc.',
    email: 'louis.carter@wise.com',
    phone: '123-456-7890',
    description: 'Data Scientist at Wise Inc.',
    isEditing: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEdit = () => {
    setProfile({ ...profile, isEditing: !profile.isEditing });
  };

  const jobseekersData = {
    labels: ['50-100', '100-250', '250-500', '>500'],
    datasets: [{
      label: 'Number of Jobseekers',
      data: [50, 120, 75, 40],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    }]
  };

  const recruitersData = {
    labels: ['Google', 'Meta', 'Microsoft', 'Amazon'],
    datasets: [{
      label: 'Recruiters',
      data: [200, 150, 100, 50],
      backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0'],
    }]
  };

  const applicationStatusData = {
    labels: ['Accepted', 'Rejected', 'Pending'],
    datasets: [{
      label: 'Applications',
      data: [30, 15, 55],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
    }]
  };

  const salaryData = {
    labels: ['<50k', '50-100k', '100-150k', '>150k'],
    datasets: [{
      label: 'Salary Package',
      data: [10, 20, 30, 40],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    }]
  };

  const jobseekersGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Jobseekers Growth',
      data: [10, 50, 30, 80, 60, 90],
      borderColor: '#36A2EB',
      fill: false,
    }]
  };

  const pendingApplications = ['John Doe', 'Jane Smith', 'Samuel Green', 'Alex Johnson'];

  const topRecruiters = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Microsoft', logo: 'https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' },
  ];

  const navigateToAnalytics = () => {
    navigate('/analytics');
  };

  return (
    <Container fluid className="dashboard-container">
      <Row>
        <Col md={3} className="sidebar">
          <Navbar expand="md" className="flex-column align-items-start">
            <Navbar.Brand href="#" className="jobhive-title">JobHive</Navbar.Brand>
            <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
            <Nav className="flex-column">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/sprofile">Profile</Link>
              <Link className="nav-link" to="/aanalytics">Analytics</Link>
              <Link className="nav-link" to="/ssettings">Settings</Link>
            </Nav>
          </Navbar>
        </Col>
        <Col md={9} className="main-content">
          <Routes>
            <Route path="/profile" element={
              <Card className="my-4">
                <Card.Body>
                  <Card.Title>Profile</Card.Title>
                  <Form>
                    <Form.Group controlId="formUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={profile.username}
                        onChange={handleChange}
                        disabled={!profile.isEditing}
                      />
                    </Form.Group>
                    <Form.Group controlId="formCompany">
                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        type="text"
                        name="company"
                        value={profile.company}
                        onChange={handleChange}
                        disabled={!profile.isEditing}
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        disabled={!profile.isEditing}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPhoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        disabled={!profile.isEditing}
                      />
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={profile.description}
                        onChange={handleChange}
                        disabled={!profile.isEditing}
                      />
                    </Form.Group>
                    <Button variant="primary" className="button" onClick={handleEdit}>
                      {profile.isEditing ? 'Save' : 'Edit'}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            } />
            <Route path="/settings" element={
              <Card className="my-4">
                <Card.Body>
                  <Card.Title>Settings</Card.Title>
                  <p>Here you can adjust various settings for your website.</p>
                  {/* Add settings form or controls here */}
                </Card.Body>
              </Card>
            } />
            <Route path="/analytics" element={
              <Row className="my-4">
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Jobseekers Growth</Card.Title>
                      <Line data={jobseekersGrowthData} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Salary Package Distribution</Card.Title>
                      <Pie data={salaryData} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Number of Jobseekers</Card.Title>
                      <Bar data={jobseekersData} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Top Recruiters</Card.Title>
                      <Doughnut data={recruitersData} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Application Status</Card.Title>
                      <Doughnut data={applicationStatusData} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            } />
            <Route path="/" element={
              <>
                <Row className="my-4">
                  <Col md={4}>
                    <Card onClick={navigateToAnalytics}>
                      <Card.Body>
                        <Card.Title>Number of Jobseekers</Card.Title>
                        <h2>{jobseekersData.datasets[0].data.reduce((a, b) => a + b, 0)}</h2>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card onClick={navigateToAnalytics}>
                      <Card.Body>
                        <Card.Title>Top Recruiters</Card.Title>
                        <h2>{recruitersData.datasets[0].data.reduce((a, b) => a + b, 0)}</h2>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card onClick={navigateToAnalytics}>
                      <Card.Body>
                        <Card.Title>Application Status</Card.Title>
                        <h2>{applicationStatusData.datasets[0].data.reduce((a, b) => a + b, 0)}</h2>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col md={12}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Pending Applications</Card.Title>
                        <ul>
                          {pendingApplications.map((applicant, index) => (
                            <li key={index}>{applicant}</li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col md={12}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Top Recruiters</Card.Title>
                        <ul>
                          {topRecruiters.map((recruiter, index) => (
                            <li key={index}>
                              <img src={recruiter.logo} alt={recruiter.name} className="recruiter-logo" />
                              {recruiter.name}
                            </li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                
              </>
            } />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
