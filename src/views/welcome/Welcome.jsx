import { Grid } from "@material-ui/core"
import { StartButton } from "../../common/components/startButton/StartButton";
import { BUTTON_TEXT, WELCOME_TITLE } from "./constants/constants";
import { useNavigate } from "react-router-dom";
import { Title } from "../../common/components/title/Title";

export const Welcome = () => {
    const navigate = useNavigate();

    return <Grid container justifyContent="center">
        <Title text={WELCOME_TITLE}/>
        <Grid container justifyContent='center' >
            <StartButton text={BUTTON_TEXT} onClick={() => {navigate("/start")}}/>
        </Grid>
    </Grid>
}