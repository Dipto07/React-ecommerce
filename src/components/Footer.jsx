import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    left: '0',
    bottom: '0',
    width: '100%',
    borderTop: '1px solid #444'
  };

  const linkStyle = {
    color: 'lightblue',
    textDecoration: 'none',
    margin: '0 10px'
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} React E-commerce. All rights reserved.</p>
      <p>
        <a href="/terms" style={linkStyle}>Terms of Service</a>
        | 
        <a href="/privacy" style={linkStyle}>Privacy Policy</a>
      </p>
    </footer>
  );
}

export default Footer;
