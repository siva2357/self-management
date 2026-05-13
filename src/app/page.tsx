'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="vh-centering position-relative overflow-hidden">
      <div className="blob-container">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
      </div>

      <main className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="badge rounded-pill bg-white text-primary border px-3 py-2 mb-4 shadow-sm text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
              Self Management App
            </span>

            <h1 className="display-3 fw-bold mb-3 text-dark">
              Master Your Flow, <br />
              <span className="text-gradient">Own Your Growth.</span>
            </h1>

            <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              The ultimate ecosystem designed to streamline your daily routines.
              Take control of your time and habits with precision and clarity.
            </p>

            <div className="mb-5">
              <Link href="/login" className="btn btn-primary btn-lg px-5 py-3">
                Get Started Now
              </Link>
            </div>

            <div className="row g-4 mt-4 text-start">
              {[
                { title: 'Focus Time', desc: 'Optimize your deep work sessions with intelligent time blocking.' },
                { title: 'Habit Contraction', desc: 'Identify and minimize friction in your daily routines.' },
                { title: 'Smart Reading', desc: 'Enhance your knowledge intake with integrated retention tools.' }
              ].map((feature, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="premium-card p-4 h-100">
                    <h3 className="h5 fw-bold mb-2 d-flex align-items-center">
                      <span className="bg-primary rounded-circle me-2" style={{ width: '8px', height: '8px' }}></span>
                      {feature.title}
                    </h3>
                    <p className="small text-secondary mb-0">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="position-absolute bottom-0 w-100 text-center py-4 text-muted small opacity-50">
        © 2026 Self-Management App. All rights reserved.
      </footer>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
