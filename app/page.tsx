"use client";

import "./page.css"

export default function Home() {
  return (
    <div className="home-container">
      <div className="logo-container">
        <div className="title-1">arX</div>
        <div className="title-2">Courserooms</div>
      </div>
      <div className="actions-container">
        <a href="https://github.com/kanavgoyal898/arX" target="_blank">
          <button className="button-outlined">Github Repository</button>
        </a>
        <a href="/login">
          <button className="button-filled">Get Started</button>
        </a>
      </div>
    </div>
  )
}
