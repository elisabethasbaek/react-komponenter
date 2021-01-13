import "./style/App.css";
import Articles from "./components/Articles";
import PrettyBoxes from "./components/PrettyBoxes";
import Collections from "./components/Collections";
import StandAloneNews from "./components/StandAloneNews";
import LatestNews from "./components/LatestNews";
import NewsDigest from "./components/NewsDigest";

function App() {
  return (
    <>
      <main className="main">
        <Articles />
        <PrettyBoxes />
        <Collections />
        <StandAloneNews />
        <LatestNews />
        <NewsDigest />
      </main>
    </>
  )
};

export default App; /* being rendered in ./index.js */