import React, {useState} from 'react';
import Header from "./main/header/Header";
import Body from "./main/body/Body";
import {AppContainer, HtmlContainer, ThemeType} from './librairy/styled/theme';
import {ThemeContext} from 'styled-components';

function App() {
    const [theme, setTheme] = useState<ThemeType>('light');
    return (
        <ThemeContext.Provider value={theme}>
            <HtmlContainer>
                <AppContainer>
                    <Header toggleTheme={(theme: ThemeType) => setTheme(theme)}/>
                    <Body/>
                </AppContainer>
            </HtmlContainer>
        </ThemeContext.Provider>
    );
}

export default App;
