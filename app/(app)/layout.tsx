import { CartStoreProvider } from '@/lib/store/cart-store-provider';
import { Toaster } from "@/components/ui/sonner";

import { SanityLive } from '@/sanity/lib/live';
import { ClerkProvider } from '@clerk/nextjs';
import React, { Children } from 'react'
import { ChatStoreProvider } from '@/lib/store/chat-store-provider';
import { Header } from '@/components/LandingPage/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            <CartStoreProvider>
                <ChatStoreProvider>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Toaster position="bottom-center" />
                    <SanityLive />
                </ChatStoreProvider>
            </CartStoreProvider>
        </ClerkProvider>
    )
}

export default Layout;