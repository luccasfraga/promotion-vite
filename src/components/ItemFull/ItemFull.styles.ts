import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${props => props.theme['gray-500']};
  text-decoration: none;
  font-size: 14px;
  padding: 30px;
  border: 1px solid;
  border-color: ${props => props.theme['gray-100']};

  > span {
    color: ${props => props.theme['gray-500']};
    font-size: 14px;
    margin: 12px 0px;
  }

  > b {
    color: ${props => props.theme.hover};
    font-size: 20px;
    margin-bottom: 18px;
  }

  > strong {
    color: ${props => props.theme['gray-800']};
    font-size: 20px;
    margin-bottom: 18px;
  }
`


export const ContentImage = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  width: 70vw;
  > img {
    flex: 0 0 auto;
    margin-right: 12px;
    width: 200px;
    border: 4px solid ${props => props.theme.primary};
    padding: 0;
  }
`