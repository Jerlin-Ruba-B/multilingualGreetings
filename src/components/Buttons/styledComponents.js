import styled from 'styled-components'

export const ButtonList = styled.li`
  list-style-type: none;
  margin: 8px;
`
export const LanguageButtons = styled.button`
  border: 1px solid #db1c48;
  color: #db1c48;
  background-color: transparent;
  font-family: 'Roboto';
  padding: 12px;
  border-radius: 12px;
`
export const ActiveButtons = styled(LanguageButtons)`
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: #db1c48;
`
