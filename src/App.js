import './App.css';
import { Welcome } from './views/welcome/Welcome';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { TriviaSelector } from './views/trivia-selector/TriviaSelector';
import { TriviaWizard } from './views/trivia-wizard/TriviaWizard';
import { Grid, makeStyles } from '@material-ui/core';
import { MAIN_THEME } from './common/theme';
import TriviaProvider from './common/context/trivia-context';

const useStyles = makeStyles({
  root: {
    background: MAIN_THEME.colors.black,
    height: '100vh',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <TriviaProvider>
      <BrowserRouter>
        <Grid container className={classes.root}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route exact path="/start" element={<TriviaSelector />} />
            <Route exact path="/start/:id" element={<TriviaWizard />} />
          </Routes>
        </Grid>
      </BrowserRouter>
    </TriviaProvider>
  );
};

export default App;
