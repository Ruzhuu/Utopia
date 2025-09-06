import ditherKnight from './ditherKnight.svg';
import utopiaLogo from './UTOPIA.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={ditherKnight} 
          className="App-logo" 
          alt="logo" 
          style = {{width: '500px', height: 'auto'}}/>

        <div className="App-header-text">
          <img 
            src={utopiaLogo} 
            alt="logo" 
            style = {{width: '600px', height: 'auto'}}
            />
        </div>

      </header>
    </div>
  );
}

export default App;
