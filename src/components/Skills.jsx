import HtmlIcon from "/html.png";
import CssIcon from "/css-3.png";
import JsIcon from "/Js.png";
import CIcon from "/c.png";
import DavinciIcon from "/davinci.png";
import PremiereIcon from "/premiere-pro.png";
import BlenderIcon from "/blender.png";

export default function Skills() {
  return (
    <>
      <section id="Skills">
        <h2 className="section-title">Tools</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img src={HtmlIcon} alt="HTML" />
          </div>
          <div className="skill-card">
            <img src={CssIcon} alt="CSS" />
          </div>
          <div className="skill-card">
            <img src={JsIcon} alt="JavaScript" />
          </div>
          <div className="skill-card">
            <img src={CIcon} alt="C" />
          </div>
          <div className="skill-card">
            <img src={DavinciIcon} alt="DaVinci Resolve" />
          </div>
          <div className="skill-card">
            <img src={PremiereIcon} alt="Premiere Pro" />
          </div>
          <div className="skill-card">
            <img src={BlenderIcon} alt="Blender" />
          </div>
        </div>
      </section>
    </>
  );
}
