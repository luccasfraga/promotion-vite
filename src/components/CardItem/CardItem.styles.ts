import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme['gray-500']};
  text-decoration: none;
  font-size: 14px;
  padding: 30px;
  border: 1px solid;
  border-color: ${props => props.theme['gray-100']};

  > img {
    max-width: 90px;
  }

  > span {
    color: ${props => props.theme['gray-500']};
    font-size: 13px;
    margin: 12px 0px;
    display: -webkit-box;
    max-width: 200px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > b {
    color: ${props => props.theme.hover};
    font-size: 14px;
  }

  &:hover {
    > span {
      color: ${props => props.theme.hover};
    }
  }
`