import React, {useState} from "react";

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(true);

    const changeThemeL = () => setTheme(theme ? !theme : theme);
    const changeThemeD = () => setTheme(theme ?  theme : !theme);

    const getTheme = () => ({
        changeThemeL,
        changeThemeD,
        theme
    });

    return <ThemeContext.Provider value={getTheme()}>
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeProvider