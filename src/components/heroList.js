import HeroCard from "./heroCard";
import {HttpClientContext} from "../providers/httpClientProvider";
import {useContext} from "react";
import {ThemeContext} from "../providers/themeProvider";

const HeroList = () => {
    const httpCtx = useContext(HttpClientContext)
    const themeCtx = useContext(ThemeContext);


    return (
        <div className={themeCtx.theme ? 'Theme-dark' : 'Theme-light'}>
            {httpCtx.heroList?.results && httpCtx.heroList.results.map((hero, index) => (
                <HeroCard hero={hero} key={`hero-card-${index}`}></HeroCard>))}
        </div>
    )
}


export default HeroList