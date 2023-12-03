import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/app/home/navbar"
import Footer from "@/app/home/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className='flex flex-col jusify-center max-w-[1440px] min-h-screen'>
        <Navbar/>
       <div className='flex-1'>
       {children}
       </div>
  
       
        <Footer/>
        
        </div>
        </body>
        
    </html>
  )
}
