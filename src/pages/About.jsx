const About = () => {
   return (
    <div className="about-page">
      <div className="container px-3 px-sm-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center mb-4 mb-md-5">
            <h1 className="about-title">About Discover</h1>
            <p className="about-lead mb-0">
              Discover is a curated performance car storefront built for enthusiasts
              who value design, engineering, and smooth digital experiences.
            </p>
          </div>

          <div className="col-12 col-lg-10">
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <h3 className="about-card-title">Our Concept</h3>
                <p className="about-text mb-0">
                  We combine premium branding and practical shopping tools so users
                  can discover cars faster and compare options effortlessly.
                </p>
              </div>
              <div className="col-12 col-md-4">
                <h3 className="about-card-title">Our Mission</h3>
                <p className="about-text mb-0">
                  Deliver a clean and responsive shopping flow with reliable search,
                  filtering, sorting, and personalization features.
                </p>
              </div>
              <div className="col-12 col-md-4">
                <h3 className="about-card-title">Our Promise</h3>
                <p className="about-text mb-0">
                  Keep improving usability while preserving speed and stability
                  across mobile and desktop screens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
