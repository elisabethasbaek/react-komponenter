import "./style/App.css";
import Articles from "./components/Articles";
import PrettyBoxes from "./components/PrettyBoxes";
import Collections from "./components/Collections";

function App() {
  return (
    <>
      <main className="main">
        <Articles />
        <PrettyBoxes />
        <Collections />
      </main>
    </>
  )
};

export default App; /* being rendered in ./index.js */