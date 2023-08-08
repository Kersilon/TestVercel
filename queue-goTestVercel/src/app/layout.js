import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Queue&Go',
    template: '%s | Queue&Go'
  },
  description: 'WebApp per la gestione delle file',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
          <div className='container'>
            <Navbar/>
            {children}
            <Footer/>
          </div>
        
      </body>
        
    </html>
  )
}
