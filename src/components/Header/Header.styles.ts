import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.primary};
  display: grid;
  height: 130px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  grid-template-columns: 1fr;

  @media (min-width:  ${props => props.theme.sizeDesktop}) {
    height: 90px;
    grid-template-columns: 200px 1fr;
    padding: 0 80px;
  }

  .logo {
    width: 134px;
    height: 34px;
  }

  .search {
    color: ${props => props.theme['gray-900']};
    border-radius: 2px;
    background-color: ${props => props.theme.white};
    display: flex;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    height: 40px;
    width: 100%;
    padding: 10px 60px 10px 15px;
    border-style: solid;
    border-color: rgba(0,0,0,0);
    border-width: 1.5px;
  }
`