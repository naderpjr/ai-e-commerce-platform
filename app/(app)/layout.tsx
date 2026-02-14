import { CartStoreProvider } from '@/lib/store/cart-store-provider';
import { SanityLive } from '@/sanity/lib/live';
import { ClerkProvider } from '@clerk/nextjs';
import React, { Children } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            <CartStoreProvider>
                <main>
                    {children}
                </main>
                <SanityLive />
            </CartStoreProvider>
        </ClerkProvider>
    )
}

export default Layout;