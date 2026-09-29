import Me from "/me.jpeg";

export default function About() {
  return (
    <>
      <section id="About">
        <h2 className="section-title">Tentang Saya</h2>
        <div className="about-container">
          <div className="about-desc">
            <p>
              Halo, nama saya <b>Dafa Dhiyaul Haq</b> atau dikenal sebagai Gjen.
              Saya adalah seorang kreator yang memiliki minat besar sebagai tech
              enthusiast, developer, dan editor. Pertama kali saya mulai fokus
              dunia ini adalah saat masih duduk di bangku SMA, dan sejak saat
              itu saya terus mengasah kemampuan untuk mewujudkan passion saya
              dalam membangun Website, 3D Model, dan Vidio Editing.
            </p>

            <p>
              Selain itu, saya sangat menikmati mengabadikan berbagai momen
              berkesan dengan menyunting foto atau video, lalu mengunggahnya ke
              media sosial. Saya mendapati bahwa kreativitas yang sama saat saya
              membuat kode juga berperan besar dalam proses fotografi dan
              penyuntingan, sehingga memungkinkan saya menciptakan karya seni
              melalui visual dan video.
            </p>

            <p>
              Secara keseluruhan, saya selalu mencari cara untuk melampaui batas
              kemampuan diri secara pribadi maupun profesional. Saya percaya
              bahwa kreativitas, dedikasi, dan rasa ingin tahu yang tinggi
              terhadap hal-hal baru akan terus mendorong saya dalam berkarier
              dan berkarya di dunia kreatif.
            </p>
          </div>

          <img src={Me} alt="Foto Dafa Dhiyaul Haq" />
        </div>
      </section>
    </>
  );
}
