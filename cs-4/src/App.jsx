import "./App.css";
import PageOne from "./pages/PageOne";

function App() {
  const fullname = "sssdsdsdsd";
  return (
    <>
      <div>Hello, {fullname}!</div>
      <PageOne firstname="nuwen" lastname="li" />
      <PageOne firstname="oyoyo" lastname="lerolero" />
    </>
  );
}

export default App;
