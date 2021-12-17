import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { MAIN_THEME } from '../../theme';
import { Progress } from '../circular-progress/CircularProgress';

const useStyles = makeStyles({
  triviaContainer: {
    background: MAIN_THEME.colors.lightGrey,
    borderRadius: '10px',
  },
  title: {
    marginTop: '2rem',
    fontFamily: MAIN_THEME.fonts.triviaTitle.name,
    fontSize: '2vw',
    color: MAIN_THEME.colors.highlight,
    textAlign: 'center',
  },
  timeup: {
    marginTop: '2rem',
    fontFamily: MAIN_THEME.fonts.button.name,
    fontSize: '2vw',
    color: MAIN_THEME.colors.highlight,
    textAlign: 'center',
  },
  triviaName: {
    fontFamily: MAIN_THEME.fonts.triviaTitle.name,
    fontSize: MAIN_THEME.fonts.triviaTitle.size,
    color: MAIN_THEME.colors.white,
    marginBottom: '1rem',
  },
  option: {
    color: MAIN_THEME.colors.highlight,
    fontFamily: MAIN_THEME.fonts.button.name,
    fontSize: MAIN_THEME.fonts.button.size,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: MAIN_THEME.colors.highlight,
    borderRadius: '10px',
    marginBottom: '1rem',
    cursor: 'pointer',
    '&:hover': {
      background: MAIN_THEME.colors.highlightContrast,
      color: MAIN_THEME.colors.white,
      borderColor: MAIN_THEME.colors.highlightContrast,
      opacity: 0.9,
    },
  },
  correctAnswer: {
    backgroundColor: MAIN_THEME.colors.highlightContrast,
    color: MAIN_THEME.colors.white,
    fontFamily: MAIN_THEME.fonts.button.name,
    fontSize: MAIN_THEME.fonts.button.size,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: MAIN_THEME.colors.highlight,
    borderRadius: '10px',
    marginBottom: '1rem',
    cursor: 'pointer',
    '&:hover': {
      background: MAIN_THEME.colors.highlightContrast,
      color: MAIN_THEME.colors.white,
      borderColor: MAIN_THEME.colors.highlightContrast,
      opacity: 0.9,
    },
  },
  wrongAnswer: {
    backgroundColor: MAIN_THEME.colors.wrong,
    color: MAIN_THEME.colors.white,
    fontFamily: MAIN_THEME.fonts.button.name,
    fontSize: MAIN_THEME.fonts.button.size,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: MAIN_THEME.colors.highlight,
    borderRadius: '10px',
    marginBottom: '1rem',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9,
    },
  },
  imageContainer: {
    maxHeight: '15vh',
  }
});

export const Questions = ({ question, answerQuestion }) => {
  const classes = useStyles();
  const [reveal, setReveal] = useState(false);
  const [timeUp, setTimeUp] = useState(question.lifetimeSeconds);

  const countRef = useRef(timeUp);
  countRef.current = timeUp;

  useEffect(() => {
    setTimeUp(question.lifetimeSeconds);
  }, [question]);
  useEffect(() => {
    if (timeUp === 0) {
      answer(false);
    }
  }, [timeUp]);

  useEffect(() => {
    const timer = setInterval(time => {
      let remaining = countRef.current - 1;
      remaining >= 0 && setTimeUp(remaining);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const answer = correct => {
    setReveal(true);
    setTimeout(() => {
      setReveal(false);
      answerQuestion(correct);
    }, 1000);
  };

  return (
    <>
      <Progress progress={(timeUp * 10)} text={timeUp} />
      <Grid item xs={10} className={classes.title} >
        <img src={question.image} alt="imagen-pregunta" className={classes.imageContainer}/>
      </Grid>
      <Grid item xs={10} className={classes.title} >
        {question?.text}
      </Grid>
      <Grid item xs={10}>
        {question?.options?.map((option, key) => (
          <Grid
            container
            key={`${option.text}-${key}`}
            className={
              reveal
                ? option.correct
                  ? classes.correctAnswer
                  : classes.wrongAnswer
                : classes.option
            }
            justifyContent="center"
            onClick={() => answer(option.correct)}
          >
            {option.text}
          </Grid>
        ))}
        {timeUp === 0 && (
          <Grid item className={classes.timeup}>
            {`Perdiste porque no respondiste a tiempo, podes seguir viendo el show!`}
          </Grid>
        )}
      </Grid>
    </>
  );
};
