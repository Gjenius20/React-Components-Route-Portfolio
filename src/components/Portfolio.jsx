import WarkopImg from "/Warkop Frenzy.jpg";
import JeembaImg from "/Jeemba.webp";
import WebsiteImg from "/website 1.png";
import PialaGubernurImg from "/Piala Gubernur.png";

export default function Portfolio() {
  return (
    <>
      <section id="Portfolio">
        <h2 className="section-title">Latest Works</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src={WarkopImg} alt="Warkop Frenzy" className="card-img" />
            <div className="card-body">
              <div className="card-header">
                <span className="card-tag">Game Project</span>
                <span className="card-year">2026</span>
              </div>
              <h3 className="card-title">Warkop Frenzy</h3>
              <p className="card-desc">
                Game simulasi tukang warkop yang diadaptasi dari tempat nyata.
              </p>
              <span className="card-link">Coming Soon</span>
            </div>
          </div>

          <div className="portfolio-card">
            <img src={JeembaImg} alt="Article Project" className="card-img" />
            <div className="card-body">
              <div className="card-header">
                <span className="card-tag">Article</span>
                <span className="card-year">2025</span>
              </div>
              <h3 className="card-title">
                Developing a Digital Tourism Guidebook Model for Community-Based
                Sustainable Tourism
              </h3>
              <p className="card-desc">
                Artikel yang membahas tentang digitalisasi panduan wisata di
                Thailand.
              </p>
              <a
                href="https://journal.diginus.id/JEEMBA/article/view/1552"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="portfolio-card">
            <img src={WebsiteImg} alt="Project Website" className="card-img" />
            <div className="card-body">
              <div className="card-header">
                <span className="card-tag">Website Project</span>
                <span className="card-year">2025</span>
              </div>
              <h3 className="card-title">Digital Tourism Guidebook</h3>
              <p className="card-desc">Website panduan wisata di Thailand.</p>
              <a
                href="https://digitaltourismguidebook.my.id/"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="portfolio-card">
            <img
              src={PialaGubernurImg}
              alt="Article Project"
              className="card-img"
            />
            <div className="card-body">
              <div className="card-header">
                <span className="card-tag">Vidio</span>
                <span className="card-year">2022</span>
              </div>
              <h3 className="card-title">
                Piala Gubernur Pelajar Juara 2022 - Creative Content Creator
              </h3>
              <p className="card-desc">
                Mengeksplor keindahan wisata Cisoka ECO Green Park, yang
                berlokasi di Kabupaten Sumedang
              </p>
              <a
                href="https://www.youtube.com/watch?v=Oo1YZ6wfO5Q"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
