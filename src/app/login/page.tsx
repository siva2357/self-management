import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
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
                <h2 className="fw-bold text-dark">Welcome Back</h2>
                <p className="text-muted small">Sign in to your premium account</p>
              </div>

              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold small">Email Address</label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold small">Password</label>
                  <input type="password" className="form-control" placeholder="••••••••" />
                </div>

                <Link href="/dashboard" className="btn btn-primary w-100 py-3 fw-bold">
                  Sign In
                </Link>
              </form>

              <p className="text-center mt-4 text-muted small mb-0">
                Don&apos;t have an account? <Link href="/signup" className="text-primary fw-bold text-decoration-none">Sign up</Link>
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
