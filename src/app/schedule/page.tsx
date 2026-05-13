'use client';

import React, { useState } from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';

type Priority = 'High' | 'Medium' | 'Low';
type Status = 'Pending' | 'Completed' | 'Not Started';

type Task = {
  id: number;
  title: string;
  description: string;
  time: string;
  date: string;
  priority: Priority;
  status: Status;
  day: string;
};

type DayTasks = {
  day: string;
  tasks: Task[];
};

export default function SchedulePage() {
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [appliedMonth, setAppliedMonth] = useState('All');
  const [appliedStatus, setAppliedStatus] = useState('All');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    time: '',
    date: '',
    priority: 'Medium' as Priority,
    status: 'Not Started' as Status,
    day: 'Monday'
  });

  const [tasksByDay, setTasksByDay] = useState<DayTasks[]>([
    { day: '12-05-2026 Monday', tasks: [{ id: 1, title: 'Strategic Planning', description: 'Monthly goals review and resource allocation.', time: '09:00', date: '2026-05-12', priority: 'High', status: 'Pending', day: '12-05-2026 Monday' }] },
    { day: '13-05-2026 Tuesday', tasks: [{ id: 3, title: 'Client Meeting', description: 'Review progress on the Q2 roadmap.', time: '10:00', date: '2026-05-13', priority: 'High', status: 'Completed', day: '13-05-2026 Tuesday' }] },
    { day: '14-05-2026 Wednesday', tasks: [] },
    { day: '15-05-2026 Thursday', tasks: [] },
    { day: '16-05-2026 Friday', tasks: [] }
  ]);

  const handleOpenForm = (task?: Task) => {
    if (task) {
      setEditingTask(task);
      setFormData({
        title: task.title,
        description: task.description || '',
        time: task.time,
        date: task.date,
        priority: task.priority,
        status: task.status,
        day: task.day
      });
    } else {
      setEditingTask(null);
      setFormData({
        title: '',
        description: '',
        time: '',
        date: '',
        priority: 'Medium',
        status: 'Not Started',
        day: 'Monday'
      });
    }
  };

  const handleApplyFilters = () => {
    setAppliedMonth(selectedMonth);
    setAppliedStatus(selectedStatus);
  };

  const handleClearAll = () => {
    setSelectedMonth('All');
    setSelectedStatus('All');
    setAppliedMonth('All');
    setAppliedStatus('All');
  };

  const removeMonthFilter = () => {
    setSelectedMonth('All');
    setAppliedMonth('All');
  };

  const removeStatusFilter = () => {
    setSelectedStatus('All');
    setAppliedStatus('All');
  };

  const handleSaveTask = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Task saved successfully!');
    const modalElement = document.getElementById('taskModal');
    if (modalElement) {
      const bootstrap = (window as any).bootstrap;
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    }
  };

  // Mock filtering logic for the demo
  const filteredDays = tasksByDay.map(dayData => ({
    ...dayData,
    tasks: dayData.tasks.filter(task => {
      const statusMatch = appliedStatus === 'All' || task.status === appliedStatus;
      return statusMatch;
    })
  }));

  const isMay = (m: string) => m === 'All' || m === 'May 2026';
  const effectiveNoData = !isMay(appliedMonth);

  return (
    <div className="min-vh-100 position-relative">
      <div className="blob-container">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
      </div>
      <DashboardNavbar />

      <main className="container max-width-container py-5">
        <header className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-3">
          <div className="text-center text-md-start">
            <h1 className="fw-bold display-6 mb-1 text-dark">Schedule Tasks</h1>
            <p className="text-secondary small mb-0">Plan your week for maximum impact.</p>
          </div>
          <button className="btn btn-primary shadow-sm px-4" data-bs-toggle="modal" data-bs-target="#taskModal" onClick={() => handleOpenForm()}>
            <i className="bi bi-plus-lg me-2"></i>New Task
          </button>
        </header>

        {/* Filters Section */}
        <div className="premium-card p-4 mb-5 border-0 shadow-sm">
          <div className="row g-3 align-items-end">
            <div className="col-12 col-md-auto mb-2 mb-md-0">
              <span className="fw-bold text-dark text-uppercase smaller d-block mb-2" style={{ letterSpacing: '1px' }}>
                <i className="bi bi-funnel me-2"></i>Filter Tasks
              </span>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <label className="smaller text-muted fw-bold mb-1">Month</label>
              <select className="form-select border shadow-none bg-white py-2" value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}>
                <option value="All">All Months</option>
                <option>January 2026</option>
                <option>February 2026</option>
                <option>March 2026</option>
                <option>April 2026</option>
                <option>May 2026</option>
                <option>June 2026</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <label className="smaller text-muted fw-bold mb-1">Status</label>
              <select className="form-select border shadow-none bg-white py-2" value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)}>
                <option value="All">All Statuses</option>
                <option>Not Started</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>
            <div className="col-12 col-md-auto d-flex gap-2">
              <button className="btn btn-primary flex-fill px-4 py-2 fw-bold" onClick={handleApplyFilters}>
                Apply
              </button>
              <button className="btn btn-outline-secondary flex-fill px-4 py-2 fw-bold" onClick={handleClearAll}>
                Clear All
              </button>
            </div>
          </div>

          {/* Active Filter Chips */}
          {(appliedMonth !== 'All' || appliedStatus !== 'All') && (
            <div className="d-flex flex-wrap gap-2 mt-4 pt-3 border-top border-light">
              {appliedMonth !== 'All' && (
                <div className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2 d-flex align-items-center border border-primary border-opacity-25">
                  <span className="smaller me-2">Month: {appliedMonth}</span>
                  <i className="bi bi-x-circle-fill cursor-pointer hover-opacity" style={{ cursor: 'pointer' }} onClick={removeMonthFilter}></i>
                </div>
              )}
              {appliedStatus !== 'All' && (
                <div className="badge rounded-pill bg-info bg-opacity-10 text-info px-3 py-2 d-flex align-items-center border border-info border-opacity-25">
                  <span className="smaller me-2">Status: {appliedStatus}</span>
                  <i className="bi bi-x-circle-fill cursor-pointer hover-opacity" style={{ cursor: 'pointer' }} onClick={removeStatusFilter}></i>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="accordion accordion-flush premium-card overflow-hidden border-0" id="scheduleAccordion">
          {/* Mock Filter Logic: Only show tasks if month is 'All' or 'May 2026' */}
          {!effectiveNoData ? (
            filteredDays.map((dayData, idx) => (
              <div className="accordion-item bg-transparent" key={dayData.day}>
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button bg-transparent fw-bold py-4 ${idx === 0 ? '' : 'collapsed'}`} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse-${dayData.day.replace(/[\s,]+/g, '-')}`}
                  >
                    <span className="me-auto text-dark">{dayData.day} - <span className="text-primary">{dayData.tasks.length} Tasks</span></span>
                  </button>
                </h2>
                <div id={`collapse-${dayData.day.replace(/[\s,]+/g, '-')}`} className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`} data-bs-parent="#scheduleAccordion">
                  <div className="accordion-body px-4 pb-4">
                    {dayData.tasks.length > 0 ? (
                      <div className="row g-3">
                        {dayData.tasks.map(task => (
                          <div className="col-12 col-lg-6" key={task.id}>
                            <div className="p-4 bg-white border border-light-subtle rounded-4 h-100 d-flex flex-column hover-shadow transition-all">
                              <div className="d-flex justify-content-between align-items-start mb-3">
                                <div className="d-flex align-items-center gap-3">
                                  <div className="bg-primary-subtle text-primary rounded-3 p-2">
                                    <i className="bi bi-calendar2-check-fill fs-5"></i>
                                  </div>
                                  <div>
                                    <div className="fw-bold text-dark fs-5">{task.title}</div>
                                    <div className="text-muted smaller fw-medium">
                                      <i className="bi bi-clock me-1"></i>{task.time} • {task.date}
                                    </div>
                                  </div>
                                </div>
                                <div className="dropdown">
                                  <button className="btn btn-light btn-sm rounded-circle border-0" data-bs-toggle="dropdown">
                                    <i className="bi bi-three-dots-vertical"></i>
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm p-2 rounded-3">
                                    <li>
                                      <button className="dropdown-item rounded-2 py-2" data-bs-toggle="modal" data-bs-target="#taskModal" onClick={() => handleOpenForm(task)}>
                                        <i className="bi bi-pencil-square me-2"></i>Edit
                                      </button>
                                    </li>
                                    <li>
                                      <button className="dropdown-item rounded-2 py-2 text-danger">
                                        <i className="bi bi-trash me-2"></i>Delete
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              {task.description && (
                                <div className="bg-light p-3 rounded-3 mb-3 flex-grow-1">
                                  <p className="small text-secondary mb-0 fw-normal" style={{ lineHeight: '1.5' }}>{task.description}</p>
                                </div>
                              )}
                              
                              <div className="d-flex align-items-center gap-2 mt-auto pt-2 border-top border-light">
                                <span className={`badge rounded-pill bg-${task.priority === 'High' ? 'danger' : 'warning'} bg-opacity-10 text-${task.priority === 'High' ? 'danger' : 'warning'} px-3 py-2 fw-bold smaller`}>
                                  <i className="bi bi-exclamation-triangle-fill me-1"></i>{task.priority}
                                </span>
                                <span className={`badge rounded-pill bg-${task.status === 'Completed' ? 'success' : 'info'} bg-opacity-10 text-${task.status === 'Completed' ? 'success' : 'info'} px-3 py-2 fw-bold smaller`}>
                                  <i className={`bi ${task.status === 'Completed' ? 'bi-check-circle-fill' : 'bi-hourglass-split'} me-1`}></i>{task.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-5">
                        <i className="bi bi-calendar-x d-block fs-1 text-muted mb-2 opacity-25"></i>
                        <div className="text-muted small fw-medium">No tasks scheduled for this day.</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5 my-5">
              <div className="display-1 text-muted opacity-10 mb-4">
                <i className="bi bi-folder2-open"></i>
              </div>
              <h3 className="fw-bold text-dark">No Tasks Found</h3>
              <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '400px' }}>
                We couldn&apos;t find any tasks matching your filters for <span className="text-primary fw-bold">{appliedMonth}</span>. 
                Try selecting a different month or clearing your filters.
              </p>
              <button className="btn btn-primary px-4" onClick={handleClearAll}>
                Return to All
              </button>
            </div>
          )}
        </div>

        {/* Task Modal */}
        <div className="modal fade" id="taskModal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold fs-4 text-dark">{editingTask ? 'Edit Task' : 'Create New Task'}</h5>
                <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body p-4">
                <form className="row g-3" onSubmit={handleSaveTask}>
                  <div className="col-12">
                    <label className="form-label fw-bold small text-muted text-uppercase">Task Name</label>
                    <input 
                      type="text" className="form-control" required placeholder="What needs to be done?" 
                      value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label className="form-label fw-bold small text-muted text-uppercase">Date</label>
                    <input 
                      type="date" className="form-control" required 
                      value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold small text-muted text-uppercase">Time</label>
                    <input 
                      type="time" className="form-control" required 
                      value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold small text-muted text-uppercase">Priority</label>
                    <select className="form-select" value={formData.priority} onChange={e => setFormData({...formData, priority: e.target.value as Priority})}>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold small text-muted text-uppercase">Status</label>
                    <select className="form-select" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as Status})}>
                      <option value="Not Started">Not Started</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-bold small text-muted text-uppercase">Task Description</label>
                    <textarea 
                      className="form-control" rows={3} placeholder="Add more details about this task..."
                      value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-light px-4" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary px-4" onClick={handleSaveTask}>
                  {editingTask ? 'Update Task' : 'Create Task'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
