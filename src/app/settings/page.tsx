'use client';

import React from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function SettingsPage() {
  return (
    <div className="min-vh-100 position-relative pb-5">
      <div className="blob-container">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
      </div>
      <DashboardNavbar />

      <main className="container max-width-container py-5">
        <header className="mb-5 text-center text-lg-start">
          <h1 className="fw-bold display-6 mb-2">Account <span className="text-primary">Settings</span></h1>
          <p className="text-secondary lead fs-6">Update your security preferences and manage your account status.</p>
        </header>

        <div className="row g-4">
          <div className="col-lg-8 mx-auto">
            {/* Change Password Section */}
            <div className="premium-card p-4 p-md-5 border-0 mb-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                  <i className="bi bi-shield-lock-fill text-primary fs-4"></i>
                </div>
                <h4 className="fw-bold mb-0">Change Password</h4>
              </div>
              
              <form className="row g-3">
                <div className="col-12">
                  <label className="form-label small fw-bold text-muted">Current Password</label>
                  <input type="password" className="form-control" placeholder="••••••••" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted">New Password</label>
                  <input type="password" className="form-control" placeholder="••••••••" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted">Confirm New Password</label>
                  <input type="password" className="form-control" placeholder="••••••••" />
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-primary px-4 py-2 fw-bold">Update Password</button>
                </div>
              </form>
            </div>

            {/* Account Management Section */}
            <div className="premium-card p-4 p-md-5 border-0 border-start border-4 border-danger shadow-sm">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                  <i className="bi bi-person-x-fill text-danger fs-4"></i>
                </div>
                <h4 className="fw-bold mb-0 text-danger">Manage Account</h4>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Delete Your Account</h6>
                <p className="text-secondary small mb-0">
                  Once you delete your account, there is no going back. Please be certain. 
                  All your tasks, reports, and AI insights will be permanently removed.
                </p>
              </div>
              
              <button className="btn btn-outline-danger px-4 py-2 fw-bold rounded-3">
                Permanently Delete Account
              </button>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
