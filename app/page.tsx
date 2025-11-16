import "./page.css"

export default function Home() {
  return (
    <div className="home-container">
      <div className="logo-container">
        <div className="title-1">arX</div>
        <div className="title-2">Courserooms</div>
      </div>
      <div className="actions-container">
        <button className="button-outlined">
          <a href="https://github.com/kanavgoyal898/arX" target="_blank">Github Repository</a>
        </button>
        <button className="button-filled">
          <a href="/login">Get Started</a>
        </button>
      </div>
    </div>
  )
}
