import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'


import styles from './App.module.css';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className={styles.App}>
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
