import { Grid, makeStyles } from '@material-ui/core';
import { MAIN_THEME } from '../../theme';

const useStyles = makeStyles({
  root: {
    color: MAIN_THEME.colors.highlight,
    width: '15%',
    height: '7rem',
    background: 'transparent',
    borderColor: MAIN_THEME.colors.highlight,
    borderStyle: 'solid',
    borderRadius: '15px',
    borderWidth: '1px',
    fontFamily: MAIN_THEME.fonts.button.name,
    fontSize: MAIN_THEME.fonts.button.size,
    '&:hover': {
      opacity: 0.6,
    },
    cursor: 'pointer',
  },
});

export const StartButton = ({ onClick, text }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      onClick={() => onClick()}
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      {text}
    </Grid>
  );
};
