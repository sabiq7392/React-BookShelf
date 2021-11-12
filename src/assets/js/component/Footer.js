import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <small>Made By Sabiq Mame</small>
          <ul>
            <li>
              <a href="https://www.instagram.com/ssabiqmame/">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/sabiq7392">
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sabiq-muhammad-6b314a210/">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;