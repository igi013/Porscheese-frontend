const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="row text-start g-4">
          <div className="col-lg-4">
            <h5 className="mb-2">Discover</h5>
            <p className="mb-0 opacity-75">
              Premium Porsche marketplace with modern performance-focused shopping.
            </p>
          </div>
          <div className="col-lg-4">
            <h6 className="mb-2">Contact</h6>
            <p className="mb-1 opacity-75">support@discoverporsche.com</p>
            <p className="mb-0 opacity-75">+63 900 000 2026</p>
          </div>
          <div className="col-lg-4">
            <h6 className="mb-2">Follow Us</h6>
            <div>
              <i className="fab fa-facebook fa-lg me-3"></i>
              <i className="fab fa-twitter fa-lg me-3"></i>
              <i className="fab fa-instagram fa-lg"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Porsche Asia Pacific. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;