const Policy = () => {
  return (
    <div style={{ 
      backgroundColor: '#f8f9fa',
      color: '#111',
      padding: '5rem 0',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      fontSize: '1.05rem',
      lineHeight: 1.75
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header */}
            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h1 style={{ 
                fontWeight: 700,
                fontSize: '2.25rem',
                letterSpacing: '-0.5px',
                margin: '0 0 1rem'
              }}>
                Privacy Policy
              </h1>
              <p style={{ 
                opacity: 0.85,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                We protect your data like we protect our legacy: with discipline, integrity, and care.
              </p>
            </header>

            {/* Sections */}
            <div style={{ marginBottom: '3rem' }}>
              <section>
                <h2 style={{ 
                  fontWeight: 600,
                  fontSize: '1.4rem',
                  color: '#E30017',
                  marginBottom: '1rem',
                  position: 'relative'
                }}>
                  What We Collect
                  <span style={{ 
                    display: 'block',
                    height: '2px',
                    width: '60px',
                    backgroundColor: '#E30017',
                    marginTop: '8px'
                  }}></span>
                </h2>
                <p>Only what’s needed: your contact details, preferences, and usage data.</p>
              </section>

              <section style={{ marginTop: '2.5rem' }}>
                <h2 style={{ 
                  fontWeight: 600,
                  fontSize: '1.4rem',
                  color: '#E30017',
                  marginBottom: '1rem',
                  position: 'relative'
                }}>
                  Why We Use It
                  <span style={{ 
                    display: 'block',
                    height: '2px',
                    width: '60px',
                    backgroundColor: '#E30017',
                    marginTop: '8px'
                  }}></span>
                </h2>
                <p>To serve you better, personalize experiences, respond to requests, and improve our services.</p>
              </section>

              <section style={{ marginTop: '2.5rem' }}>
                <h2 style={{ 
                  fontWeight: 600,
                  fontSize: '1.4rem',
                  color: '#E30017',
                  marginBottom: '1rem',
                  position: 'relative'
                }}>
                  Your Control
                  <span style={{ 
                    display: 'block',
                    height: '2px',
                    width: '60px',
                    backgroundColor: '#E30017',
                    marginTop: '8px'
                  }}></span>
                </h2>
                <p>You own your data. Access, correct, delete, or withdraw consent at any time.</p>
              </section>

              <section style={{ marginTop: '2.5rem' }}>
                <h2 style={{ 
                  fontWeight: 600,
                  fontSize: '1.4rem',
                  color: '#E30017',
                  marginBottom: '1rem',
                  position: 'relative'
                }}>
                  Our Commitment
                  <span style={{ 
                    display: 'block',
                    height: '2px',
                    width: '60px',
                    backgroundColor: '#E30017',
                    marginTop: '8px'
                  }}></span>
                </h2>
                <p>Enterprise-grade security. Data stored only in regions with strict privacy standards.</p>
              </section>
            </div>

            {/* Divider */}
            <div style={{ 
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              margin: '3rem 0'
            }}></div>

            {/* Footer */}
            <footer style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Questions?</p>
              <p style={{ opacity: 0.85, fontSize: '1rem' }}>
                Contact our Data Protection Officer:{" "}
                <a href="mailto:privacy@porsche.com" style={{ 
                  color: '#E30017',
                  textDecoration: 'none',
                  fontWeight: 600
                }}>
                  privacy@porsche.com
                </a>
              </p>
              <p style={{ opacity: 0.6, marginTop: '1.5rem', fontSize: '0.9rem' }}>
                Last updated: February 2026
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;