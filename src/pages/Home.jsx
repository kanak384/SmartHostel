import "../App.css";

function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">🏠 SmartHostel</h2>

        <div className="nav-links">
          <button>Home</button>
          <button>Rooms</button>
          <button>Notices</button>
          <button>Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">
          <h1>
            Your Hostel.
            <br />
            <span>Smarter.</span>
          </h1>

          <p>
            Manage rooms, complaints, notices and
            hostel life — all in one place.
          </p>

          <button className="start-btn">
            Get Started →
          </button>
        </div>

        <div className="hero-card">
          🏠
          <h2>SmartHostel</h2>
          <p>Everything you need for hostel life.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;