import React from "react";
import {useTheme} from "styled-components";
import Select from "../select/Select";
import {ThemeType} from "../../librairy/styled/theme";

const ThemeSelector: React.FC<{toggleTheme: (theme: ThemeType) => void}> = ({toggleTheme}) => {
    const theme = useTheme();
    if (!theme) {
        return <span>Loading theme..</span>;
    }
    return (
        <Select values={[{name: 'dark', value: 'dark'}, {name: 'light', value: 'light'}]} onChanged={toggleTheme} value={theme}/>
    )
}

export default ThemeSelector;
