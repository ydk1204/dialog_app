import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import "../globals.css";

export const metadata = {
  title: "Memo",
  description : "A Next.js 13 Meta Memo Application"
}

const inter = Inter({ subsets: ["latin"]})

export default function RootLayout(
  { children }:
    { children: React.ReactNode }
) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body className={`${inter.className} bg-dark-1`}>
          <div className='w-full flex justify-center items-center min-h-screen'>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}