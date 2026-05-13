import React from 'react';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="vh-centering position-relative">
      <div className="blob-container">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-4">
            <div className="premium-card p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-dark">Get Started</h2>
                <p className="text-muted small">Create your productivity profile</p>
              </div>

              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold small">Full Name</label>
                  <input type="text" className="form-control" placeholder="John Doe" />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold small">Email Address</label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold small">Password</label>
                  <input type="password" className="form-control" placeholder="••••••••" />
                </div>

                <Link href="/dashboard" className="btn btn-primary w-100 py-3 fw-bold">
                  Create Account
                </Link>
              </form>

              <p className="text-center mt-4 text-muted small mb-0">
                Already have an account? <Link href="/login" className="text-primary fw-bold text-decoration-none">Sign in</Link>
              </p>
            </div>
            
            <div className="text-center mt-4">
              <Link href="/" className="text-muted small text-decoration-none hover-primary">
                <i className="bi bi-arrow-left me-1"></i> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
