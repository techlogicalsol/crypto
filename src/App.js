import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Coins from './pages/Coins';
import Home from './pages/Home';

function App() {

  const useStyles = makeStyles(()=> ({
    App:{
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh"

    }
  }));

  const classes = useStyles();

  

  return (
    
      <BrowserRouter>
        <div className={classes.App}>
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/coins/:id" component={Coins} />
        </div>
      </BrowserRouter>

  );
}

export default App;
