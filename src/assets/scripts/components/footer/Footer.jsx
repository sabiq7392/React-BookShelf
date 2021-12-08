import MySocialMedia from './_mySocialMedia';

export default function Footer() {
  return (
    <footer>
      <small>Made By Sabiq Mame</small>
      <div className="d-flex justify-content-center gap-lg">
        <MySocialMedia
          href="https://www.instagram.com/ssabiqmame/"
          icon="bi bi-instagram"
        />
        <MySocialMedia
          href="https://github.com/sabiq7392"
          icon="bi bi-github"
        />
        <MySocialMedia
          href="https://www.linkedin.com/in/sabiq-muhammad-6b314a210/"
          icon="bi bi-linkedin"
        />
      </div>
    </footer>
  );
}
