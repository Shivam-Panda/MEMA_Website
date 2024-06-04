import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'
import Kits from './components/Pages/Kits';
import Workshop from './components/Pages/Workshop';
import Community from './components/Pages/Community';
import Trip from './components/Pages/Trip';

const App = () => {
  const [page, setPages] = useState("HOME");
  const [element, setElement] = useState(<Home />);

  useEffect(() => {
    switch(page) {
      case "HOME":
        setElement(<Home />);
        break;
      case "CONTACT":
        setElement(<Contact />)
        break;
      case "KITS":
        setElement(<Kits />)
        break;
      case "WORKSHOP":
        setElement(<Workshop />)
        break;
      case "TRIPS":
        setElement(<Trip />)
        break;
      case "COMMUNITY":
        setElement(<Community />)
        break;
      default:
        setElement(<Home />);
    }
  }, [page])

  return (
    <div>
      <Header setPage={setPages} />
      {element}
    </div>
  )
}

export default App;
