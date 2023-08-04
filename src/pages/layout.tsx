import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import "../../statics/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Prompt, Ubuntu, UnifrakturCook } from "next/font/google"

const prompt = Prompt({
    weight: ['400', '500'],
    subsets: ['latin'],
    style: ['normal', 'italic'],
    display: 'swap',
})

const ubuntu = Ubuntu({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const unifrakturCook = UnifrakturCook({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: "y o a r a j o t a",
    description: "Portfolio de João Vítor Basso Sberse!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </body>
        </html>
    );
}