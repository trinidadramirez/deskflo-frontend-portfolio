import "./App.css";
import { Button } from "react-bootstrap";
import { EntryPage } from "./pages/EntryPage";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { CreateTicketPage } from "./pages/CreateTicketPage";
import { TicketListPage } from "./pages/TicketListPage";
import { TicketLandingPage } from "./pages/TicketLandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App1">
              <EntryPage />
            </div>
          </Route>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/createTicket">
            <CreateTicketPage />
          </PrivateRoute>
          <PrivateRoute path="/ticketList">
            <TicketListPage />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:ticketId">
            <TicketLandingPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
