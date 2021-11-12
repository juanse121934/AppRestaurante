import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
