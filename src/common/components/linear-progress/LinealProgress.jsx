import { Grid, LinearProgress, makeStyles } from '@material-ui/core';
import { MAIN_THEME } from '../../theme';

const useStyles = makeStyles({
  label: {
    textAlign: 'center',
    color: MAIN_THEME.colors.highlightContrast,
  },
  linear: {
    backgroundColor: MAIN_THEME.colors.highlightContrast,
  },
  linearContainer: {
    marginBottom: '2rem'
  }
});

export const LinealProgress = ({ label, progress }) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} className={classes.label}>
        {label}
      </Grid>
      <Grid item xs={10} className={classes.linearContainer}>
        <LinearProgress variant="determinate" value={progress} classes={{barColorPrimary: classes.linear}} />
      </Grid>
    </Grid>
  );
};
