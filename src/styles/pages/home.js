import styled from 'styled-components'

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  width: 100%;
`

export const TableHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;  
`
export const TableHeaderTitle = styled.h2`
  font-size:24px;
  font-weight: bold;
  width: clamp(100px,3vw,200px);
`
export const TableBody = styled.article`
  padding: 10px;
`
export const TableRow = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0,0,0,.2);
`
export const TableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: clamp(100px,3vw,200px);
  &:last-child{
    display: flex;
    gap: 5px;
  }
`
