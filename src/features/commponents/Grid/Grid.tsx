import styled from 'styled-components';

type Props = {
    padding?: string
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  flex: 1;
    padding: ${props => props.padding || '0'};
`;