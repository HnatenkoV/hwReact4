import {useContext} from "react";
import {ThemeContext} from "../providers/themeProvider";
import '../css/style.css'


const HeroCard = (props) => {
    const themeCtx = useContext(ThemeContext);

    return (
        <div className="hero-card">
            <div className="hero-id">{props.hero.id}</div>
            <div className="hero-name">{props.hero.name}</div>
            <div className="hero-status">{props.hero.status}</div>
            <div className="hero-species">{props.hero.species}</div>
        </div>
    )
}


export default HeroCard