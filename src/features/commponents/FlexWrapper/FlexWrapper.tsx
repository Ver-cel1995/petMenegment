import styled from "styled-components";

type Props = {
    justify?: string
    alignItems?: string
    direction?: string
    wrap?: string
    alignContent?: string
    gap?: string
}

export const FlexWrapper = styled.div<Props>`
    display: flex;
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.alignItems || 'flex-start'};
    flex-direction: ${props => props.direction || 'row'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    align-content: ${props => props.alignContent || 'flex-start'};
    gap: ${props => props.gap || '0'};
    
`