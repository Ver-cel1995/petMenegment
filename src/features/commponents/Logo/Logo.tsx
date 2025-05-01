import logo from "../../../../public/logo.png";
import styled from "styled-components";

type Props = {
    title?: string
}

export const Logo = ({title}: Props) => {
    return (
        <LogoWrap>
            <img src={logo} alt="" style={{width: '70px'}}/>
            <h1>{title}</h1>
        </LogoWrap>
    )
}

const LogoWrap = styled.div`
    display: flex;
    gap: 10px
`