import { BrowserRouter, Route } from "react-router-dom";

//CRUD components
import ChannelList from './components/channels/ChannelList';
import ChannelCreate from './components/channels/ChannelCreate';
import ChannelDelete from './components/channels/ChannelDelete';
import ChannelEdit from './components/channels/ChannelEdit';
import ChannelShow from './components/channels/ChannelShow';

import Header from "./components/Header";

import './styles/main.css';


function App() {
  return (
    <>       
      <BrowserRouter>
        <Header/>
        <div>
          <Route path="/" exact component={ChannelList}/>
          <Route path="/channel/new" component={ChannelCreate}/>
          <Route path="/channel/edit" component={ChannelEdit}/>
          <Route path="/channel/delete" component={ChannelDelete}/>
          <Route path="/channel/show" component={ChannelShow}/>   
        </div>
      </BrowserRouter>      
    </>
  );
}

export default App;
