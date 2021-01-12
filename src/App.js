import "./style/App.css";
import Articles from "./components/Articles";
import PrettyBoxes from "./components/PrettyBoxes";

function App() {
  return (
    <>
      <main className="main">
        <Articles />
        <PrettyBoxes />
      </main>
    </>
  )
};

export default App; /* being rendered in ./index.js */