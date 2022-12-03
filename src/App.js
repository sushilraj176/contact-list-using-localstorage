import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Homepage from "./component/homepage";
import Contact from "./component/contact";
import Editcontact from "./component/editcontact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/contact-form" element={<Contact />} />
          <Route exact path="/edit-contact/:id" element={<Editcontact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
