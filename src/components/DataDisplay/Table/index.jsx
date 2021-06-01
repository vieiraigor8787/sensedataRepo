import { MENU_OPTIONS } from './../../../constants/menu';
import { StyledSection, Header, Body } from './style';

export default function Table() {
  return (
    <StyledSection>
      <Header>
      {MENU_OPTIONS.map(item => {
        return <div key={item.id}>
          item
        </div>
      })}
      </Header>
      <Body>
      {/* {tableData.map(item => {
        return <Row key={item.id}>
          <p>{item.title}</p>
          <p>{item.type }</p>
          <p>{item.category }</p>
          <p>{item.value }</p>
          <p>action</p>
        </Row>
      })} */}
        </Body>
      </StyledSection>
  )
}
