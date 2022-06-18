import './App.css';
import {Button} from "react-bootstrap";
import {EntryPage} from "./pages/EntryPage";
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { CreateTicketPage } from "./pages/CreateTicketPage";
import { TicketListPage } from './pages/TicketListPage';

function App() {
  return (
    <div className="App">
      {/*<EntryPage/>*/}
      <DefaultLayout>
        <TicketListPage/>
        {/*<CreateTicketPage/>*/}
      </DefaultLayout>
    </div>
  );
}

export default App;
