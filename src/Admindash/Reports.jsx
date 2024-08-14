import React from 'react';
import './Reports.css';

const jobReports = [
  { id: 101, title: 'Software Engineer', company: 'Google', location: 'California', postedDate: '2024-07-25', status: 'Open' },
  { id: 102, title: 'Product Manager', company: 'Meta', location: 'New York', postedDate: '2024-07-24', status: 'Closed' },
  { id: 103, title: 'Data Scientist', company: 'Amazon', location: 'Bangalore', postedDate: '2024-07-29', status: 'Open' },
  { id: 104, title: 'Member technical Staff', company: 'Zoho', location: 'Chennai', postedDate: '2024-07-26', status: 'Closed' },
  { id: 105, title: 'Product Manager', company: 'Apple', location: 'Mumbai', postedDate: '2024-07-30', status: 'Closed' },
  // Add more job reports here
];

const jobSeekerReports = [
  { id: 501, name: 'John Doe', email: 'john.doe@example.com', appliedJobs: 5, status: 'Active' },
  { id: 502, name: 'Jane Smith', email: 'jane.smith@example.com', appliedJobs: 3, status: 'Inactive' },
  { id: 503, name: 'Washinton sundar', email: 'jane.smith@example.com', appliedJobs: 1, status: 'active' },
  { id: 502, name: 'Nesamani', email: 'jane.smith@example.com', appliedJobs: 5, status: 'active' },
  { id: 502, name: 'Olavaayan', email: 'jane.smith@example.com', appliedJobs: 2, status: 'Inactive' },
  // Add more job seeker reports here
];

const companyReports = [
  { id: 201, name: 'Google', location: 'California', openPositions: 20, industry: 'Technology' },
  { id: 202, name: 'Meta', location: 'New York', openPositions: 15, industry: 'Social Media' },
  { id: 203, name: 'Accenture', location: 'Bangalore', openPositions: 15, industry: 'Social Media' },
  { id: 204, name: 'Infosys', location: 'Bangalore', openPositions: 15, industry: 'Social Media' },
  { id: 205, name: 'Zoho', location: 'Chennai', openPositions: 15, industry: 'Social Media' },
  // Add more company reports here
];

const companies = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Microsoft', logo: 'https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' },
    { name: 'Apple', logo: 'https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Intel', logo: 'https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    //{ name: 'Cisco', logo: 'data:image/png;base64,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' },
    { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
    { name: 'Accenture', logo: 'https://i.pinimg.com/736x/0e/b9/db/0eb9db531aa88ba4adff5138e38c1972.jpg' },
    { name: 'Adobe', logo: 'https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-1.jpg?width=662&height=441&name=adobe-logo-1.jpg' },
    { name: 'Salesforce', logo: 'https://www.salesforce.com/news/?action=sf_asset_collection_download&collection=company-logos-and-video&asset=salesforce-logo' },
    { name: 'Uber', logo: 'https://images.firstpost.com/wp-content/uploads/2018/09/uber-new-logo.jpg?im=FitAndFill=(1200,675)' },
    { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg' },
    { name: 'Twitter', logo: 'https://helios-i.mashable.com/imagery/articles/063SvuTkUtiovxEXET880Pc/hero-image.fill.size_1248x702.v1690195202.jpg' },
    { name: 'LinkedIn', logo: 'https://content.linkedin.com/content/dam/brand/site/img/logo/logo-hero.png' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Spotify', logo: 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/2024-spotify-brand-assets-media-kit.jpg' },
    { name: 'eBay', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg' },
    { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
    { name: 'Tesla', logo: 'https://www.logoai.com/uploads/articles/2024/03/05/17096195246566834.jpg' },
    { name: 'SpaceX', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'LG', logo: 'https://e7.pngegg.com/pngimages/1014/1021/png-clipart-lg-logo-logo-lg-corp-lg-electronics-lg-logo-television-company.png' },
    { name: 'Sony', logo: 'https://1000logos.net/wp-content/uploads/2017/06/Symbol-Sony.jpg' },
    { name: 'Panasonic', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWhUJsKB8ccZoau5Y7RhdCnHn9jNjNNc-0A&s' },
    { name: 'Nokia', logo: 'https://www.gizchina.com/wp-content/uploads/images/2023/02/Nokia-logo.webp' },
    { name: 'Siemens', logo: 'https://1000logos.net/wp-content/uploads/2017/06/Color-Siemens-Logo.jpg' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Infosys_Technologies_logo.svg/2560px-Infosys_Technologies_logo.svg.png' },
  ];
  

const usersPlaced = [
  { name: 'Alice Johnson', company: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', designation: 'Software Engineer', place: 'California' },
  { name: 'Bob Brown', company: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', designation: 'Product Manager', place: 'Seattle' },
  { name: 'Carol White', company: 'Microsoft', logo: 'https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg', designation: 'Systems Analyst', place: 'Redmond' },
  { name: 'David Green', company: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png', designation: 'UX Designer', place: 'New York' },
  { name: 'Eva Black', company: 'Apple', logo: 'https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys', designation: 'Hardware Engineer', place: 'Cupertino' },
  { name: 'Frank Brown', company: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', designation: 'Data Scientist', place: 'Armonk' },
  { name: 'Grace Kelly', company: 'Intel', logo: 'https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg', designation: 'Chip Designer', place: 'Santa Clara' },
  { name: 'Hank White', company: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg', designation: 'Database Administrator', place: 'Redwood City' },
  { name: 'Isabel Jones', company: 'Adobe', logo: 'https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-1.jpg?width=662&height=441&name=adobe-logo-1.jpg', designation: 'Creative Director', place: 'San Jose' },
  { name: 'Jack Black', company: 'Uber', logo: 'https://images.firstpost.com/wp-content/uploads/2018/09/uber-new-logo.jpg?im=FitAndFill=(1200,675)', designation: 'Operations Manager', place: 'San Francisco' },
];

const Reports = () => {
  return (
    <div className="reports-container">
      <h1>Reports</h1>
      
      <div className="reports-section">
        <h2>Job Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Posted Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobReports.map(report => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.title}</td>
                <td>{report.company}</td>
                <td>{report.location}</td>
                <td>{report.postedDate}</td>
                <td>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="reports-section">
        <h2>Job Seeker Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Seeker ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Applied Jobs</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobSeekerReports.map(report => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.name}</td>
                <td>{report.email}</td>
                <td>{report.appliedJobs}</td>
                <td>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="reports-section">
        <h2>Company Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Company ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Open Positions</th>
              <th>Industry</th>
            </tr>
          </thead>
          <tbody>
            {companyReports.map(report => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.name}</td>
                <td>{report.location}</td>
                <td>{report.openPositions}</td>
                <td>{report.industry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="top-recruiters-section">
        <h2>Top Recruiters</h2>
        <div className="recruiters-grid">
          {companies.map((company, index) => (
            <div className="recruiter-card" key={index}>
              <img src={company.logo} alt={`${company.name} logo`} className="recruiter-logo" />
              <h3>{company.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="slideshow-section">
        <h2>Users Placed</h2>
        <div className="slideshow-container">
          {usersPlaced.map((user, index) => (
            <div className="slide" key={index}>
              <img src={user.logo} alt={`${user.company} logo`} />
              <div className="user-details">
                <h3>{user.name}</h3>
                <p>{user.designation}</p>
                <p>{user.company}</p>
                <p>{user.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
