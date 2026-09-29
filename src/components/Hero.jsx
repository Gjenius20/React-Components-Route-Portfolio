import Myself from "/myself.png";

export default function Hero() {
  return (
    <>
      <section id="Hero">
        <div className="hero-container">
          <span className="hero-subtitle">
            Developer &amp; Tech Enthusiast.
          </span>
          <h1 className="hero-title">
            Hallo, Saya <span className="highlight">Dafa Dhiyaul Haq</span>
          </h1>
          <span className="hero-subtitle">
            Halo! Saya <b>Dafa Dhiyaul Haq</b>, mahasiswa Pendidikan Ilmu
            Komputer di Universitas Pendidikan Indonesia yang sangat tertarik
            pada dunia teknologi.
          </span>
        </div>
        <img src={Myself} alt="Foto Profil" className="hero-icon" />
      </section>
    </>
  );
}
