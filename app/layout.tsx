// app/layout.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  greyscale: {
    900: "#15141a",
    800: "#1c1b22",
    600: "#2b2a33",
    400: "#3a3944",
    300: "#42414d",
    100: "#52525e",
    50: "#5b5b66",
  },
  whitescale: {
    500: "#bfbfc9",
    400: "#cfcfd8",
    300: "#e0e0e6",
    200: "#f0f0f4",
    100: "#f9f9fb",
    50: "#fbfbfe",
  },
}

const theme = extendTheme({ colors })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
