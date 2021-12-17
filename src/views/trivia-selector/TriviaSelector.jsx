import { Grid, makeStyles } from '@material-ui/core';
import { StartButton } from '../../common/components/startButton/StartButton';
import { MAIN_THEME } from '../../common/theme';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AVAILABLE_TRIVIAS } from './constants/constants';
import { Loading } from '../../common/components/loading/Loading';
import { TriviaContext } from '../../common/context/trivia-context';

const useStyles = makeStyles({
  root: {
    background: MAIN_THEME.colors.black,
    height: '100vh',
  },
  banner: {
    color: MAIN_THEME.colors.highlight,
    fontFamily: MAIN_THEME.fonts.title.name,
    fontSize: MAIN_THEME.fonts.title.size,
  },
});

export const TriviaSelector = () => {
  const { trivias, setTrivia } = useContext(TriviaContext);
  const classes = useStyles();
  const navigate = useNavigate();

  const navigateToTrivia = id => {
    setTrivia(trivias.find(trivia => trivia.id === id));
    navigate(`/start/${id}`);
  };

  const renderTrivias = () => {
    return trivias.map((trivia, key) => (
      <StartButton
        key={`${trivia.title}-${key}`}
        text={trivia.title}
        onClick={() => navigateToTrivia(trivia.id)}
      />
    ));
  };

  return (
    <Grid container className={classes.root} justifyContent="center">
      <Grid className={classes.banner}>{AVAILABLE_TRIVIAS}</Grid>
      <Grid container justifyContent="center">
        {trivias.length > 0 ? renderTrivias() : <Loading />}
      </Grid>
    </Grid>
  );
};
