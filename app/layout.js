
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (


    <html lang="en">
      
      <body className={inter.className}>  
       
       <Navbar/>
       
       
       <main >
       {children}
        </main>
        </body>
    </html>
  )
}
