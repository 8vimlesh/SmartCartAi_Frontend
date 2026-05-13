import React from "react";

export default function BottomNav({ onHome, onSearch, onAlerts, onProfile }) {
  return (
    <div className="bottom-nav">
      <button className="bn-item" onClick={onHome}>
        <div className="bn-icon">🏠</div>
        <span className="bn-label">Home</span>
      </button>
      <button className="bn-item" onClick={onSearch}>
        <div className="bn-icon">🔍</div>
        <span className="bn-label">Search</span>
      </button>
      <button className="bn-item" onClick={onAlerts}>
        <div className="bn-icon">🔔</div>
        <span className="bn-label">Alerts</span>
      </button>
      <button className="bn-item" onClick={onProfile}>
        <div className="bn-icon">👤</div>
        <span className="bn-label">Profile</span>
      </button>
    </div>
  );
}
