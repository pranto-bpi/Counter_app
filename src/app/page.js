import Image from 'next/image'
import { Counter } from './Components/Counter'
import { Header } from './Components/Header'

export default function Home() {
  return (
    <main>
      <Header/>
      <Counter/>
    </main>
  )
}
