import React from 'react';
import styled from 'styled-components';


const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'}
        cursor: pointer;
        :hover{
            color: blue;
            
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = (props) => {
    return (
        <Header colored as='a'>
                <h1>Ivan</h1>
                <h2>{props.allPosts} записей, из них понравилось {props.liked}</h2>
        </Header>
    )
}

export default AppHeader;