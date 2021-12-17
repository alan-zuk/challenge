import { Box, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import { MAIN_THEME } from '../../theme';

const useStyles = makeStyles({
  circularProgress: {
    color: MAIN_THEME.colors.highlightContrast,
    marginTop: '2rem',
  },
});

export const Progress = ({ progress, text }) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Box>
        <CircularProgress
          variant="determinate"
          value={progress}
          className={classes.circularProgress}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-2rem',
            color: MAIN_THEME.colors.highlightContrast,
          }}
        >
          <Typography variant="caption" component="div">
            {text}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
