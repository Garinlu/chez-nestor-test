import styled from "styled-components";

export type ThemeType = 'light' | 'dark';
const Themes: any = {
    light: {
        background: '#f8fbff',
        containerBg: '#f8f8f8',
        inputBg: '#ffffff',
        color: '#232323',
        colorActive: '#7b7b7b',
        h1Color: '#232323',
        h2Color: '#232323',
        h3Color: '#232323',
        h4Color: '#232323',
        shadow: 'rgba(0,0,0,0.11)',
        shadowHover: 'rgba(0,0,0,0.20)',
    },
    dark: {
        background: '#181818',
        containerBg: '#525252',
        inputBg: '#ffffff',
        color: '#eaeaea',
        colorActive: '#9e9e9e',
        h1Color: '#eaeaea',
        h2Color: '#eaeaea',
        h3Color: '#eaeaea',
        h4Color: '#eaeaea',
        shadow: 'rgba(255,255,255,0.20)',
        shadowHover: 'rgba(255,255,255,0.30)',
    }
}

// STRUCTURE
export const HtmlContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    background-color: ${(props: any) => Themes[props.theme].background};
    color: ${(props: any) => Themes[props.theme].color};
`;

export const AppContainer = styled.div`
    height: auto;
    width: 100%
    overflow: hidden;
    background-color: ${(props: any) => Themes[props.theme].background};
`;

export const BodyContainer = styled.div`
    margin: 10px 15px;
`;

//TEXT
export const P = styled.p`
    color: ${(props: any) => Themes[props.theme].color};
`;
export const H1 = styled.h1`
    color: ${(props: any) => Themes[props.theme].h1Color};
`;
export const H2 = styled.h2`
    color: ${(props: any) => Themes[props.theme].h2Color};
`;
export const H3 = styled.h3`
    color: ${(props: any) => Themes[props.theme].h3Color};
`;
export const H4 = styled.h4`
    color: ${(props: any) => Themes[props.theme].h4Color};
`;

// HEADER
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuItem = styled.div`
    margin: 5px 9px;
    color: ${(props: any) => Themes[props.theme].color};
    &.active, &>a.active {
        color: ${(props: any) => Themes[props.theme].colorActive};
    }
    &:hover {
        color: ${(props: any) => Themes[props.theme].colorActive};
    }
`;

// BUTTON
export const ButtonDefault = styled.button`
    border: none;
    padding: 12px 6px;
    margin: 5px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    background-color: ${(props: any) => Themes[props.theme].containerBg};
    color: ${(props: any) => Themes[props.theme].color};

    &:hover {
    color: ${(props: any) => Themes[props.theme].colorActive};
    }
    
    &:focus {
        border: none;
        outline: none;
    }

`;

// FORM
export const Input = styled.input`
    padding: 7px 9px;
    font-weight: 300;
    background-color: ${(props: any) => Themes[props.theme].inputBg};
    color: ${(props: any) => Themes[props.theme].color};
    border: 0;
`;

export const FieldStructure = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    margin: 7px 0;
`;

export const FieldStructureLabel = styled.div`
    padding: 7px 0;
    font-weight: 300;
    text-transform: uppercase;
    color: ${(props: any) => Themes[props.theme].color};
`;

// CARDS
export const ListCards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    box-shadow: 0 0 10px 0 ${(props: any) => Themes[props.theme].shadow};
    margin: 7px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-basis: 15%;
    background-color: ${(props: any) => Themes[props.theme].containerBg};
    color: ${(props: any) => Themes[props.theme].color};
    
    &:hover {
        box-shadow: 0 0 10px 0 ${(props: any) => Themes[props.theme].shadowHover};
    }
    
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    
    @media (max-width: 1200px) { 
        flex-basis: 20%;
    }
    
    @media (max-width: 1050px) { 
        flex-basis: 40%;
    }
    
    @media (max-width: 450px) { 
        flex-basis: 90%;
    }
`;

export const CardBody = styled.div`
    flex: 1;
`;

export const CardFooter = styled.div`
    flex: 1;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`;

export const SmallText = styled.p`
    color: ${(props: any) => Themes[props.theme].colorActive};
    font-size: 0.8rem;
`;


// TABLE
export const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    margin: 10px 0;
`;

export const THead = styled.thead`
    background-color: ${(props: any) => Themes[props.theme].color};
    color: ${(props: any) => Themes[props.theme].containerBg};
    text-transform: uppercase;
`;

export const TBody = styled.tbody`
    background-color: ${(props: any) => Themes[props.theme].containerBg};
    color: ${(props: any) => Themes[props.theme].color};
    >tr:hover {
        background-color: ${(props: any) => Themes[props.theme].background};
    }
`;

export const Tr = styled.tr`
`;

export const Td = styled.td`
    text-align: center;
    padding: 10px 0;
`;

export const Th = styled.th`
    padding: 10px 0;
`;
