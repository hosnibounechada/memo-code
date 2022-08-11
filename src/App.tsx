import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
