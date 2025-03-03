import "./About.css";

export default function About() {
  return (
    <>
      <section class="section-center about">
        {/* about image */}
        <article className="about-img">
          <div className="about-picture-container">
            <div className="img about-picture"></div>
          </div>
        </article>
        {/* about info */}
        <article className="about-info">
          <div className="section-title">
            <h3>درباره ما</h3>
            <h2>چارلی چاپلين</h2>
          </div>
          <p className="about-text">
            وقتی غمگین هستید، دنیا شما را به مسخره می گیرد. وقتی خوشحالید، دنیا
            به شما لبخند می زند
          </p>
          <p className="about-text">
            اما وقتی دیگران را خوشحال می کنید، دنیا به شما تعظیم می کند
          </p>
          <a href="#" className="btn about-btn">
            درباره ما
          </a>
        </article>
      </section>
    </>
  );
}
