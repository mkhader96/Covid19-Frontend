import { Inter } from 'next/font/google'
import HomePage from './Homepage'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <HomePage />
    </div>
  )
}