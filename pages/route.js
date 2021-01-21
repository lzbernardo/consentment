import Header from '../components/header'
import Container from '../components/container'
import Lead from '../components/lead'


export default function Test() {
  let mode = 'atacadao'
  return (
    <>
      <Header mode={mode}>
      </Header>
      <Container mode={mode}>
        This is a route
      </Container>
    </>
  )
}
