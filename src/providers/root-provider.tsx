// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

export function RootProvider({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}