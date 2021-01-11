import React from 'react';
import Header from "./main/header/Header";
import Body from "./main/body/Body";
import {AppContainer} from './librairy/styled/theme';

function App() {
    return (
        <AppContainer>
            <Header/>
            <Body/>
        </AppContainer>
    );
}

export default App;
