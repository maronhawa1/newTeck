import React from 'react'
import './SummaryBanner.css'

export default function SummaryBanner({ done, total }) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100)

  return (
    <div className="summary-banner">
      <p>Completed {done}/{total} habits • {percent}%</p>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}