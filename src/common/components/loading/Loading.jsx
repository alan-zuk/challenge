import { Grid, LinearProgress } from '@material-ui/core';

export const Loading = () => {
  return (
    <Grid item xs={8}>
      <LinearProgress
        color="primary"
      />
    </Grid>
  );
};
