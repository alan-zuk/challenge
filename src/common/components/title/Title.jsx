import { Grid, makeStyles } from '@material-ui/core';
import { MAIN_THEME } from '../../theme';

const useStyles = makeStyles({
  banner: {
    color: MAIN_THEME.colors.highlight,
    fontFamily: MAIN_THEME.fonts.title.name,
    fontSize: MAIN_THEME.fonts.title.size,
    textAlign: 'center'
  },
});

export const Title = ({ text }) => {
  const classes = useStyles();
  return <Grid className={classes.banner}>{text}</Grid>;
};
