import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper/FlexWrapper.tsx";
import {Container} from "../Container/Container.tsx";
import {Logo} from "../Logo/Logo.tsx";

export const Header = () => {
    return (
        <Container>
            <FlexWrapper justify="space-between" alignItems="center">
                <Logo title={'Животные.РУ'}/>
                <Search placeholder={'поиск'}/>
            </FlexWrapper>
        </Container>

    )
}




const Search = styled.input`
    
`