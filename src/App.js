import "./style/App.css";
import Articles from "./components/Articles";
import PrettyBoxes from "./components/PrettyBoxes";
import Collections from "./components/Collections";
import StandAloneNews from "./components/StandAloneNews";
import LatestNews from "./components/LatestNews";
import NewsDigest from "./components/NewsDigest";
import Gallery from "./components/Gallery";
import PrettyNewsPlural from "./components/PrettyNewsPlural";
import TinyNews from "./components/TinyNews";
import VirtualReality from "./components/VirtualReality";
import NewYorkSimpleArticles from "./components/NewYorkSimpleArticles";

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
        <Gallery />
        <PrettyNewsPlural />
        <TinyNews />
        <VirtualReality />
        <NewYorkSimpleArticles />
      </main>
    </>
  )
};

export default App; /* being rendered in ./index.js */