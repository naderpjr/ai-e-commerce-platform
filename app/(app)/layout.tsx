import { ClerkProvider } from '@clerk/nextjs';
import React, { Children } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            <main>
                {children}
            </main>
        </ClerkProvider>
    )
}

export default Layout;