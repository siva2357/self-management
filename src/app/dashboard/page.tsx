'use client';

import React from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function DashboardOverview() {
  return (
    <div className="min-vh-100 position-relative">
      <div className="blob-container">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
      </div>
      
      <DashboardNavbar />

      <main className="container max-width-container py-5">
        <header className="mb-5 text-center text-lg-start">
          <h1 className="fw-bold display-6 mb-2">Welcome back, <span className="text-primary">Alex!</span></h1>
          <p className="text-secondary lead fs-6">Your daily productivity summary is ready.</p>
        </header>

        <div className="row g-4 mb-5">
          {[
            { label: 'Focus Streak', value: '12 Days', sub: 'Top 5% this week', color: 'primary', icon: 'bi-lightning-charge' },
            { label: 'Tasks Completed', value: '24/30', sub: '6 remaining today', color: 'info', icon: 'bi-check2-all' },
            { label: 'Reading Goal', value: '45 min', sub: '15 min to target', color: 'warning', icon: 'bi-book' }
          ].map((stat, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="premium-card p-4 border-0">
                <div className={`d-flex align-items-center mb-3 text-${stat.color}`}>
                  <i className={`bi ${stat.icon} fs-4 me-2`}></i>
                  <span className="fw-bold small text-uppercase">{stat.label}</span>
                </div>
                <div className="h2 fw-bold mb-1">{stat.value}</div>
                <div className="text-muted small">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="premium-card p-4 border-0 mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold h5 mb-0">Today&apos;s Schedule</h3>
            <button className="btn btn-link text-primary text-decoration-none fw-bold small p-0">View All</button>
          </div>
          <div className="list-group list-group-flush bg-transparent">
            {[1, 2, 3].map((i) => (
              <div key={i} className="list-group-item bg-transparent border-bottom px-0 py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className={`bg-${i === 1 ? 'primary' : 'light'} rounded-3 p-2 me-3 text-${i === 1 ? 'white' : 'dark'}`}>
                    <i className="bi bi-clock small"></i>
                  </div>
                  <div>
                    <div className="fw-bold text-dark">
                      {i === 1 ? 'Strategic Planning Session' : i === 2 ? 'Cognitive Habit Analysis' : 'Deep Work Orchestration'}
                    </div>
                    <div className="text-muted smaller">
                      {i === 1 ? '09:00 AM - 10:30 AM' : i === 2 ? '11:00 AM - 12:00 PM' : '02:00 PM - 04:00 PM'}
                    </div>
                  </div>
                </div>
                <span className={`badge rounded-pill ${i === 1 ? 'bg-primary-subtle text-primary' : 'bg-light text-dark'} px-3`}>
                  {i === 1 ? 'High Priority' : 'Normal'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
