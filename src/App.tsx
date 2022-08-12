import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/nav-bar";
import SideBar from "./components/side-bar";
import Main from "./components/main-page";
const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default App;
