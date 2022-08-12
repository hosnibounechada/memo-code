import "./nav-bar.css";
const NavBar: React.FC = () => {
  return (
    <>
      <div className="nav-div"></div>
      <nav className="nav">
        <a className="site-title" href="/">
          Memo-Code
        </a>

        <ul>
          <li>
            <a href="/sign-up">Home</a>
          </li>
          <li>
            <a href="/google">About</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/sign-up">Sign up</a>
          </li>
          <li>
            <a href="/log-in">Log in</a>
          </li>
          <li>
            <a href="/google">Google</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
