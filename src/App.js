import './App.css';
import Header from './Composants/Header';
import Nav from './Composants/Nav';
import Main from './Composants/Main';
import Footer from './Composants/Footer';
import './Styles.css';

function App() {
  return (
    <>
    <div className="container">
    <Header></Header>
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>
    </div>
    </>
  );
}

export default App;
