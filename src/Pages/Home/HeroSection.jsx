export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Piyumdi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          a dedicated software engineering student at IIT specializing in web and software development.
          

            <br /> I'm driven by a passion for creating innovative solutions that address real-world challenges.

          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img class="circular-image" src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
