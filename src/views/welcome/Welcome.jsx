import { Grid, makeStyles } from "@material-ui/core"
import { StartButton } from "../../common/components/startButton/StartButton";
import { MAIN_THEME } from "../../common/theme";
import { BUTTON_TEXT, WELCOME_TITLE } from "./constants/constants";

import backgroundImage from '../../common/images/background.jpeg';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      background: MAIN_THEME.colors.black,
    //   backgroundImage: `url(${backgroundImage})`,
      height: '100vh'
    },
    banner: {
        color: MAIN_THEME.colors.highlight,
        fontFamily: MAIN_THEME.fonts.title.name,
        fontSize: MAIN_THEME.fonts.title.size,
    }
  });

export const Welcome = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return <Grid container className={classes.root} justifyContent="center">
        <Grid className={classes.banner} >
            {WELCOME_TITLE}
        </Grid>
        <Grid container justifyContent='center' >
            <StartButton text={BUTTON_TEXT} onClick={() => {navigate("/start")}}/>
        </Grid>
    </Grid>
}