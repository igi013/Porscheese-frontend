const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-page" data-bs-theme="dark">
      <div className="row g-0 flex-column flex-lg-row align-items-stretch contact-page-row">
        <div className="col-12 col-lg-6 contact-page-visual order-lg-1" aria-hidden="true" />

        <div className="col-12 col-lg-6 contact-page-content order-lg-2 d-flex align-items-center">
          <div className="w-100 px-3 px-sm-4 py-5 py-lg-0 py-xl-5 mx-auto contact-page-inner">
            <h1 className="contact-page-title mb-3 mb-md-4">
              Personal. Precise. Porsche.
            </h1>

            <p className="contact-page-lead mb-4 mb-md-5">
              Your Porsche Centre is your personal point of contact —
              whether you&apos;re configuring a new vehicle, scheduling service,
              or exploring Porsche Connect. Reach out directly,
              or manage everything seamlessly through My Porsche.
            </p>

            <form
              className="d-flex flex-column gap-3 gap-md-4 mb-4"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <label htmlFor="contact-name" className="form-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="form-control"
                  autoComplete="name"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="form-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className="form-control"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-control"
                  rows={4}
                  placeholder="How can we help?"
                />
              </div>
              <button type="submit" className="btn btn-light text-dark fw-semibold py-2 py-md-3 w-100 w-md-auto align-self-md-start">
                <i className="fa fa-arrow-right me-2" aria-hidden="true"></i>
                Send message
              </button>
            </form>

            <button
              type="button"
              className="btn btn-outline-light w-100 w-md-auto py-2 py-md-3"
            >
              <i className="fa fa-arrow-right me-2" aria-hidden="true"></i>
              Find Your Porsche Centre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
