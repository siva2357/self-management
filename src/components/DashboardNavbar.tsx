'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Overview', href: '/dashboard', icon: 'bi-grid-fill' },
    { name: 'Schedule', href: '/schedule', icon: 'bi-calendar3' },
    { name: 'Reports', href: '/reports', icon: 'bi-bar-chart-fill' },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top modern-navbar py-3">
        <div className="container max-width-container d-flex align-items-center">

          {/* Tablet Left: Hamburger (Visible only on md screens) */}
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler border-0 shadow-none p-0 me-2 me-sm-3 d-none d-md-flex d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <div className="bg-light rounded-3 p-2 d-flex align-items-center justify-content-center shadow-sm">
                <i className="bi bi-list fs-3 text-dark"></i>
              </div>
            </button>

            <Link href="/dashboard" className="navbar-brand d-flex align-items-center gap-2 m-0 p-0">
              <div className="bg-primary rounded-circle p-1 d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm" style={{ width: '32px', height: '32px' }}>
                <i className="bi bi-lightning-charge-fill text-white small"></i>
              </div>
              <span className="fw-bold text-primary fs-4 brand-text" style={{ letterSpacing: '-0.5px' }}>SelfManage.</span>
            </Link>
          </div>

          {/* Desktop Center: Navigation Links */}
          <div className="d-none d-lg-block flex-grow-1">
            <ul className="navbar-nav d-flex flex-row justify-content-center gap-2 gap-xl-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li className="nav-item" key={link.href}>
                    <Link
                      href={link.href}
                      className={`nav-link px-3 py-2 d-flex align-items-center gap-2 nav-link-premium ${isActive ? 'text-primary fw-bold active' : 'text-secondary fw-medium'}`}
                    >
                      <i className={`bi ${link.icon} ${isActive ? 'text-primary' : 'text-muted'}`}></i>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Far Right: Notifications + Profile */}
          <div className="d-flex align-items-center gap-2 gap-sm-3 gap-lg-4 ms-auto ms-lg-0">
            {/* Notification Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-link nav-link p-0 border-0 position-relative shadow-none"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
                id="notifDropdown"
              >
                <div className="bg-white border rounded-circle d-flex align-items-center justify-content-center shadow-sm hover-shadow transition-all" style={{ width: '40px', height: '40px' }}>
                  <i className="bi bi-bell-fill text-secondary fs-5"></i>
                </div>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-2 border-white p-1" style={{ fontSize: '10px' }}>
                  3
                  <span className="visually-hidden">unread notifications</span>
                </span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg p-0 rounded-4 mt-3 overflow-hidden animate-slide-up mobile-dropdown-center" aria-labelledby="notifDropdown" style={{ width: 'min(360px, 92vw)' }}>
                <li>
                  <div className="px-4 py-3 bg-primary text-white d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Notifications</span>
                    <span className="badge bg-white text-primary rounded-pill smaller">3 New</span>
                  </div>
                </li>
                <div className="p-2" style={{ maxHeight: '380px', overflowY: 'auto' }}>
                  <li>
                    <Link className="dropdown-item rounded-3 p-3 d-flex gap-3 border-bottom border-light" href="#">
                      <div className="bg-info bg-opacity-10 text-info rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                        <i className="bi bi-calendar-check-fill"></i>
                      </div>
                      <div>
                        <div className="fw-bold text-dark small">Task Completed</div>
                        <div className="text-muted smaller text-wrap" style={{ maxWidth: '220px' }}>"Strategic Planning" was marked as completed.</div>
                        <div className="text-primary smaller mt-1 fw-medium">2 mins ago</div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-3 p-3 d-flex gap-3" href="#">
                      <div className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                        <i className="bi bi-exclamation-circle-fill"></i>
                      </div>
                      <div>
                        <div className="fw-bold text-dark small">Upcoming Deadline</div>
                        <div className="text-muted smaller text-wrap" style={{ maxWidth: '220px' }}>Project roadmap is due in 3 hours.</div>
                        <div className="text-primary smaller mt-1 fw-medium">45 mins ago</div>
                      </div>
                    </Link>
                  </li>
                </div>
                <li>
                  <Link className="dropdown-item text-center py-3 bg-light text-primary fw-bold small" href="#">
                    View All Notifications
                  </Link>
                </li>
              </ul>
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown">
              <button
                className="btn p-0 border-0 shadow-none d-flex align-items-center gap-2"
                data-bs-toggle="dropdown"
                id="profileDropdown"
              >
                <div className="text-end d-none d-xl-block ms-2">
                  <div className="fw-bold text-dark small mb-0 lh-1">Alex Doe</div>
                </div>
                <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center shadow-sm border border-2 border-dark" style={{ width: '40px', height: '40px', fontSize: '14px' }}>
                  AD
                </div>
                <i className="bi bi-chevron-down smaller text-muted d-none d-lg-inline"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg p-2 rounded-4 mt-3 animate-slide-up" aria-labelledby="profileDropdown" style={{ minWidth: '220px' }}>
                <li><h6 className="dropdown-header small text-uppercase fw-bold text-muted px-3 py-2">User Account</h6></li>
                <li><Link className="dropdown-item rounded-3 py-2" href="/profile"><i className="bi bi-person-bounding-box me-2"></i>View Profile</Link></li>
                <li><Link className="dropdown-item rounded-3 py-2" href="/settings"><i className="bi bi-gear-fill me-2"></i>Settings</Link></li>
                <li><hr className="dropdown-divider opacity-50" /></li>
                <li><Link className="dropdown-item rounded-3 py-2 text-danger fw-bold" href="/login"><i className="bi bi-box-arrow-right me-2"></i>Logout</Link></li>
              </ul>
            </div>
          </div>

          {/* Offcanvas Structure (Tablet Only - md breakpoint) */}
          <div className="offcanvas offcanvas-start border-0 d-none d-md-flex d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header border-bottom px-4 py-4">
              <Link href="/dashboard" className="offcanvas-title fw-bold text-primary d-flex align-items-center gap-2 text-decoration-none" id="offcanvasNavbarLabel" onClick={() => {
                const offcanvas = document.getElementById('offcanvasNavbar');
                if (offcanvas) {
                  const bsOffcanvas = (window as any).bootstrap?.Offcanvas.getInstance(offcanvas);
                  bsOffcanvas?.hide();
                }
              }}>
                <i className="bi bi-lightning-charge-fill"></i> SelfManage
              </Link>
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body p-0">
              <ul className="navbar-nav px-3 py-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li className="nav-item mb-2" key={link.href}>
                      <Link
                        href={link.href}
                        className={`nav-link d-flex align-items-center gap-3 px-4 py-3 rounded-4 transition-all ${isActive ? 'text-primary fw-bold active' : 'text-secondary fw-medium'}`}
                        onClick={() => {
                          const offcanvas = document.getElementById('offcanvasNavbar');
                          if (offcanvas) {
                            const bsOffcanvas = (window as any).bootstrap?.Offcanvas.getInstance(offcanvas);
                            bsOffcanvas?.hide();
                          }
                        }}
                      >
                        <i className={`bi ${link.icon} fs-5 ${isActive ? 'text-primary' : 'text-muted'}`}></i>
                        <span className="fs-5">{link.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (Visible only on screens below md) */}
      <div className="fixed-bottom d-md-none modern-bottom-nav bottom-nav d-flex align-items-center justify-content-around px-2 shadow-lg">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`bottom-nav-link ${isActive ? 'active' : ''}`}
            >
              <i className={`bi ${link.icon}`}></i>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}