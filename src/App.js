import logo from './logo.svg';
import './App.css';
import Navebar from './pages/Navebar.js';
import Options from './pages/Options.js';
import Notification from './pages/Notification';
import Timeline from './timeline';
function App() {
  return (<div>

    <div className='nav'>  <Navebar/></div>

    <div className='flexbox'>
    <div className='more'> <Options/> </div>
    <div className='timeline'> <Timeline/> </div>
    <div className='notification'>  <Notification/> </div>

    </div>
   

  </div>
    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
