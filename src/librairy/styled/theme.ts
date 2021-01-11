import styled from "styled-components";

export const ButtonDefault = styled.button`
    border: none;
    padding: 7px 5px;
    margin: 3px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    background-color: #7f7f7f;
    color: white;

    &:hover {
        background-color: #a0a0a0;
    }
    
    &:focus {
        border: none;
        outline: none;
    }

`;

export const Input = styled.input`
    padding: 4px 9px;
    font-weight: 300;
`;

export const FieldStructure = styled.nav`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    margin: 7px 0;
`;

export const FieldStructureLabel = styled.nav`
    padding: 7px 0;
    font-weight: 300;
    text-transform: uppercase;
`;

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
`;

export const BodyContainer = styled.div`
    margin: 10px 15px;
`;

export const ListCards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.11);
    margin: 7px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-basis: 15%;
    
    &:hover {
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.20);
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

export const AppContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

export const SmallText = styled.p`
    color: #a9a9a9;
    font-size: 0.8rem;
`;


export const Table = styled.table`
    width:100%;
    border:1px solid #EEEEEE;
`;

export const THead = styled.thead`
    background:#000;
    color: white;
    text-transform: uppercase;
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
