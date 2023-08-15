import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Product Management System</h1>
      </header>
      <section>
        <div style={{ backgroundImage: "url(/images/pms.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover', minHeight:'100vh',minWidth:'100vw'}}>

          <HomePage></HomePage>
        </div>
      </section>
      <footer className="footer">
        <p>All &copy; Rights reserved to Wells Fargo</p>
      </footer>
    </div>
  );
}

export default App;
