'use client';

import React from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function ProfilePage() {
  return (
    <div className="min-vh-100 position-relative pb-5">
      <div className="blob-container">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
      </div>
      <DashboardNavbar />

      <main className="container max-width-container py-5">
        <header className="mb-5 text-center text-lg-start">
          <h1 className="fw-bold display-6 mb-2">Your <span className="text-primary">Profile</span></h1>
          <p className="text-secondary lead fs-6">Manage your personal information.</p>
        </header>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-8">
            <div className="premium-card p-4 p-md-5 border-0">
              <div className="text-center mb-5">
                <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center shadow border border-4 border-dark mx-auto mb-3" style={{ width: '120px', height: '120px', fontSize: '36px' }}>
                  AD
                </div>
                <h3 className="fw-bold h4 mb-1">Alex Doe</h3>
              </div>

              <h4 className="fw-bold mb-4">Personal Details</h4>
              <form className="row g-3">
                <div className="col-12 mb-3">
                  <label className="form-label small fw-bold text-muted">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 rounded-start-3"><i className="bi bi-person text-muted"></i></span>
                    <input type="text" className="form-control border-start-0 rounded-end-3" defaultValue="Alex Doe" />
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label small fw-bold text-muted">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 rounded-start-3"><i className="bi bi-envelope text-muted"></i></span>
                    <input type="email" className="form-control border-start-0 rounded-end-3" defaultValue="alex.doe@example.com" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
