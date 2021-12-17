import { Grid, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Progress } from '../../common/components/circular-progress/CircularProgress';
import { LinealProgress } from '../../common/components/linear-progress/LinealProgress';
import { Loading } from '../../common/components/loading/Loading';
import { Questions } from '../../common/components/question/Question';
import { StartButton } from '../../common/components/startButton/StartButton';
import { TriviaContext } from '../../common/context/trivia-context';
import { MAIN_THEME } from '../../common/theme';

const useStyles = makeStyles({
  triviaContainer: {
    background: MAIN_THEME.colors.lightGrey,
    borderRadius: '10px',
  },
  triviaName: {
    fontFamily: MAIN_THEME.fonts.triviaTitle.name,
    fontSize: MAIN_THEME.fonts.triviaTitle.size,
    color: MAIN_THEME.colors.white,
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  results: {
    fontFamily: MAIN_THEME.fonts.triviaTitle.name,
    fontSize: MAIN_THEME.fonts.triviaTitle.size,
    color: MAIN_THEME.colors.white,
    marginBottom: '1rem',
  },
});
export const TriviaWizard = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { trivia, trivias, setTrivia } = useContext(TriviaContext);
  const [progress, setProgress] = useState(1);
  const [questionsCount, setQuestionsCount] = useState(1);
  const [currenQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const { id } = useParams();
  const progressLabel = `${currenQuestion + 1} de ${questionsCount} preguntas`;

  useEffect(() => {
    if (trivia) {
      setQuestionsCount(trivia.questions.length);
    }
  }, [trivia]);

  useEffect(() => {
    trivias && setTrivia(id);
  }, [trivias]);

  const answerQuestion = correct => {
    if (correct) {
      setPoints(points + 1);
    }
    if (currenQuestion === questionsCount - 1) {
      setProgress(100);
      setShowResults(true);
    } else {
      const nextQuestion = currenQuestion + 1;
      setCurrentQuestion(nextQuestion);
      const newProgress = 100 * (nextQuestion / questionsCount);
      setProgress(newProgress);
    }
  };

  const calculateResults = () => {
    const result = 100 * (points / questionsCount);
    if (result > 60) {
      return `Felicitaciones! Aprobaste con: ${result}/100`;
    } else {
      return `Lamentablemente no alcanzaste el minimo, tu nota es un ${result}/100`;
    }
  };

  return trivia ? (
    <Grid container alignContent="center" direction="column">
      <Grid item className={classes.triviaName} onClick={() => navigate('/start')}>
        {trivia.title}
      </Grid>
      <Grid container xs={8} className={classes.triviaContainer} justifyContent="center" direction="row">
        {!showResults ? (
          <>
            <Questions
              question={trivia.questions[currenQuestion]}
              answerQuestion={answerQuestion}
            />
            <LinealProgress label={progressLabel} progress={progress} />
          </>
        ) : (
          <Grid container justifyContent="center" alignContent="center">
            <Grid item className={classes.results}>
              {calculateResults()}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  ) : (
    <Grid container justifyContent="center" alignContent="center">
        <Loading />
    </Grid>
  );
};
