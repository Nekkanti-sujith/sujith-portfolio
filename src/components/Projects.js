import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-center text-uppercase">Projects</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Lost & Found System</h5>
                <p className="card-text">Web-based platform reducing item claim time by 50% for FAU users.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">CNA Project</h5>
                <p className="card-text">Handled 100,000+ transactions daily with Kubernetes and GCP.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Aadhya Banking App</h5>
                <p className="card-text">Automated workflows with AWS RPA, improving efficiency by 30%.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;