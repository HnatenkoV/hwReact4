import Header from "./header";
import HeroList from "./heroList";
import Pagination from "./pagination";

import {ThemeContext} from "../providers/themeProvider";

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroList>
            </HeroList>
            <ThemeContext.Consumer>
                {({theme}) => (
                    <Pagination theme={theme}/>
                )}
            </ThemeContext.Consumer>
        </div>
    )
}


export default HomePage