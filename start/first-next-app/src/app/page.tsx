import Image from 'next/image'
import styles from './page.module.css'
import Container from './components/container/container'

export default function Home() {
  return (
    <Container>
      <h1>Hi Next JS</h1>
      <div className='text-3xl font-bold'>Home</div>
    </Container>
  )
}
