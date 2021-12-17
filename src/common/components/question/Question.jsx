import { Grid } from '@material-ui/core';
import './Question.css';

export const Question = question => {
  return (
    <Grid xs={8}>
      <Grid>
        <div className="questionTitle">{question.title}</div>
        
      </Grid>
    </Grid>
  );
};
