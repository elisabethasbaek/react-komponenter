import "./style/App.css";
import Articles from "./components/Articles";
import PrettyBoxes from "./components/PrettyBoxes";
import Collections from "./components/Collections";
import LatestNews from "./components/LatestNews";
import StandAloneNews from "./components/StandAloneNews";

function App() {
  return (
    <>
      <main className="main">
        <Articles />
        <PrettyBoxes />
        <Collections />
        <StandAloneNews />
        <LatestNews />
      </main>
    </>
  )
};

export default App; /* being rendered in ./index.js */