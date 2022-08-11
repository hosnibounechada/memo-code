import "./nav-bar.css";
const NavBar: React.FC = () => {
  return (
    <div className="auth-bar">
      <a className="is-link logo" href="https://google.com">
        Memo-Code
      </a>
      <a className="is-link" href="https://google.com">
        Sign up
      </a>
      <a className="is-link" href="https://google.com">
        Log in
      </a>

      <a className="is-link" href="https://google.com">
        Google
      </a>
    </div>
  );
};

export default NavBar;
