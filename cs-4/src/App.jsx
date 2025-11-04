//import "./App.css";
//import PageOne from "./pages/PageOne";
/*
import PropsGreet from "./lesson2/PropsGreet";
import Welcome from "./lesson2/Welcome";
import UseState from "./lesson3/UseState";
export default function App() {
  
function App() {
  const fullname = "sssdsdsdsd";
  return (
    <>
      <div>Hello, {fullname}!</div>
      <PageOne firstname="nuwen" lastname="li" />
      <PageOne firstname="oyoyo" lastname="lerolero" />
    </>
  );

  return (
    <>
      <PropsGreet name="John Doe" />
      <Welcome />
      <UseState />
    </>
  );
}*/

//export default App;

import MapSample from "./lesson4/MapSample";
import SampleUseeffect from "./lesson5/SampleUseeffect";
import UseEffectJokes from "./lesson5/UseEffectJokes";
import UseMemoSample from "./lesson5/UseMemosample";
import ControlledForm from "./lesson6/ControlledForm";
import UncontrolledForm from "./lesson6/UncontrolledForm";
import ReactHookForm from "./lesson6/ReactHookForm";
import About from "./lesson7/About";
import Home from "./lesson7/Home";
import Contact from "./lesson7/Contact";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
//Routes is used for router authentication
//Router - parent ginagamit lahat ng components
//Routes - part kung san dedeclare lahat ng route
//Route - individual route
export default function App() {
  return (
    <>
      <MapSample />
      <SampleUseeffect />
      <UseEffectJokes />
      <UseMemoSample />
      <ControlledForm />
      <UncontrolledForm />
      <ReactHookForm />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}
