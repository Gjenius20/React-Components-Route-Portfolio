import InstagramIcon from "/instagram.png";
import GithubIcon from "/github.png";

export default function Footer() {
  return (
    <>
      <footer id="Footer">
        <div className="footer-container">
          <div className="contact">
            <a href="tel:+6285161936564">Nomor Telepon: +62 851-6193-6564</a>
            <a href="mailto:dafadhiyaulhaq2210@student.upi.edu">
              Email: dafadhiyaulhaq2210@student.upi.edu
            </a>
          </div>
          <div className="social">
            <a
              className="container"
              href="https://www.instagram.com/__thefreeman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" />
              <span>@__thefreeman</span>
            </a>
            <a
              className="container"
              href="https://github.com/Gjenius20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="GitHub" />
              <span>Gjenius20</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
