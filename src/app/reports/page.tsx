'use client';

import React, { useState } from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function ReportsPage() {
  const [selectedMonth, setSelectedMonth] = useState<any>(null);

  const monthlyReports = [
    { month: 'January', tasks: 120, score: 88, focus: 85, level: 'Moderate' },
    { month: 'February', tasks: 135, score: 90, focus: 88, level: 'High' },
    { month: 'March', tasks: 110, score: 85, focus: 82, level: 'Low' },
    { month: 'April', tasks: 150, score: 92, focus: 91, level: 'Peak' },
    { month: 'May', tasks: 142, score: 94, focus: 92, level: 'Stable' },
    { month: 'June', tasks: 128, score: 89, focus: 87, level: 'Variable' },
  ];

  return (
    <div className="min-vh-100 position-relative pb-5">
      <div className="blob-container">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
      </div>
      <DashboardNavbar />

      <main className="container max-width-container py-5">
        <header className="mb-5 text-center text-md-start">
          <h1 className="fw-bold display-6 mb-1">Performance Reports</h1>
          <p className="text-secondary fs-6">Comprehensive monthly analytics and AI-driven insights.</p>
        </header>

        <div className="row g-4 mb-5">
          {monthlyReports.map((report) => (
            <div className="col-sm-6 col-lg-4" key={report.month}>
              <div
                className="premium-card p-4 border-0 cursor-pointer h-100 transition-all hover-shadow"
                style={{ cursor: 'pointer' }}
                data-bs-toggle="modal"
                data-bs-target="#reportModal"
                onClick={() => setSelectedMonth(report)}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-primary px-3 py-2 rounded-3">{report.month.substring(0, 3)}</span>
                  <span className="text-muted smaller fw-bold">2026</span>
                </div>

                <div className="row g-3">
                  <div className="col-6">
                    <div className="smaller text-muted fw-bold text-uppercase mb-1">Completed</div>
                    <div className="fw-bold text-dark">{report.tasks} Tasks</div>
                  </div>
                  <div className="col-6 text-end">
                    <div className="smaller text-muted fw-bold text-uppercase mb-1">Performance</div>
                    <div className="fw-bold text-primary">{report.score}%</div>
                  </div>
                  <div className="col-12">
                    <div className="smaller text-muted fw-bold text-uppercase mb-2">Focus Intensity</div>
                    <div className="progress bg-light" style={{ height: '6px', borderRadius: '10px' }}>
                      <div className="progress-bar bg-primary" style={{ width: `${report.focus}%`, borderRadius: '10px' }}></div>
                    </div>
                  </div>
                </div>

                <button className="btn btn-outline-primary btn-sm w-100 mt-4 py-2 rounded-3 fw-bold border-1">
                  View Full Analysis
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Report Detail Modal */}
        <div className="modal fade" id="reportModal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <div>
                  <h5 className="modal-title fw-bold fs-3 text-dark">{selectedMonth?.month} 2026 Report</h5>
                  <p className="text-muted small mb-0">Detailed productivity breakdown and trends.</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body p-4">
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="p-4 bg-light rounded-4 mb-4">
                      <h6 className="fw-bold mb-3 d-flex align-items-center">
                        <i className="bi bi-cpu me-2 text-primary"></i> AI Insight Summary
                      </h6>
                      <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                        Based on your activity in {selectedMonth?.month}, your focus intensity was consistently high during the morning hours.
                        The AI observed a {selectedMonth?.score > 90 ? 'significant improvement' : 'steady pace'} in task completion efficiency compared to last month.
                        Recommendations: Consider scheduling your high-priority "Deep Work" sessions between 9 AM and 11 AM to leverage your peak cognitive performance.
                      </p>
                    </div>

                    <h6 className="fw-bold mb-3">Daily Productivity Logs</h6>
                    <div className="row g-2">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div className="col-12" key={i}>
                          <div className="p-3 border rounded-3 d-flex justify-content-between align-items-center bg-white shadow-sm">
                            <span className="small fw-bold">{selectedMonth?.month} {i + 10}</span>
                            <span className="badge bg-success-subtle text-success rounded-pill px-3">Completed</span>
                            <span className="text-primary fw-bold small">{85 + i}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="row g-3">
                      {[
                        { label: 'Task Velocity', val: '4.2/day' },
                        { label: 'Top Category', val: 'Strategic' },
                        { label: 'Contraction', val: selectedMonth?.level || 'Stable' }
                      ].map((item, idx) => (
                        <div className="col-12" key={idx}>
                          <div className="p-3 border rounded-3 bg-white text-center">
                            <div className="smaller text-muted text-uppercase fw-bold mb-1">{item.label}</div>
                            <div className="h5 fw-bold text-dark mb-0">{item.val}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 pt-0 pb-4 px-4 justify-content-center">
                <button type="button" className="btn btn-primary px-5 py-2 rounded-2 fw-bold small">Download Report</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
