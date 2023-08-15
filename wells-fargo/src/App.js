import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header></Header>
      </header>
      <section className="Main">
        <Main></Main>
      </section>

      <Parent></Parent>

      <footer className='footer'>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
