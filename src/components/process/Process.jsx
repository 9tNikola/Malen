import React from 'react';
import './Process.css';

export default function Process() {
  return (
    <div className="process-section">
      <div className="process-header">
      <div className="subtitle">
          <div className="red-lines start">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
          OUR PROCESS
          <div className="red-lines end">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
        </div>
        <div className="header-title">How We Work</div>
      </div>
      <div className="process-content">
        <div className="process-grid">
        <div className="process-card p-card-1">
            <div className="card-icon">
              <img src="images/process/process_1_1.svg" alt="Identify Issues" />
            </div>
            <div className="card-title">Identify Issues</div>
            <div className="card-details">
              Extensible for web iterate process before meta services impact
              with holistically enable client.
            </div>
          </div>
          <div className="process-card p-card-2">
            <div className="card-icon">
              <img src="images/process/process_1_2.svg" alt="Prepare Solution" />
            </div>
            <div className="title-detail">
            <div className="card-title">Prepare Solution</div>
            <div className="card-details">
              Vulnerable for web iterate process before meta services impact
              with holistically enable getting.
            </div>
            </div>
          </div>
          <div className="process-card p-card-3">
            <div className="card-icon">
              <img src="images/process/process_1_3.svg" alt="Working On This" />
            </div>
            <div className="card-title">Working On This</div>
            <div className="card-details">
              Of setting for web iterate process before meta services impact
              with holistically enable power.
            </div>
          </div>
          <div className="process-card p-card-4">
            <div className="card-icon">
              <img src="images/process/process_1_4.svg" alt="Deliver On Hand" />
            </div>
            <div className="card-title">Deliver On Hand</div>
            <div className="card-details">
              Getting on for web iterate process before meta services impact
              with holistically enable silent.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
