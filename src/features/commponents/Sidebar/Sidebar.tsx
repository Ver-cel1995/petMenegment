import styled from 'styled-components';
import {FlexWrapper} from "../FlexWrapper/FlexWrapper.tsx";
import {Logo} from "../Logo/Logo.tsx";
import {NavLink} from "react-router-dom";

export const Sidebar = () => (
    <Aside>
        <FlexWrapper direction="column" alignItems="center">
            <Logo title={'Pet'}/>
            <Nav>
                <ul>
                    <Items>
                        <img src="" alt=""/>
                        <Link to={'/'}>Главная</Link>
                    </Items>
                    <Items>
                        <img src="" alt=""/>
                        <Link to={'/favorites'}>Избраное</Link>
                    </Items>
                    <Items>
                        <img src="" alt=""/>
                        <Link to={'/add'}>Добавить питомца</Link>
                    </Items>
                </ul>
            </Nav>
        </FlexWrapper>
    </Aside>
);

export const Aside = styled.aside`
    width: 240px;
    background-color: #263241;
    height: 100vh;
    padding: 20px;
`;

const Nav = styled.nav`
    
`

const Items = styled.li`
    list-style: none;
    font-size: 20px;
    margin-bottom: 10px;
`

const Link = styled(NavLink)`
    color: #fff;
    text-decoration: none;

    &.active {
        color: red;
    }
`

