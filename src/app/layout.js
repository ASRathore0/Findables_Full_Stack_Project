import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/componenets/navbar/Navbar";
import Footer from "@/componenets/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Findalbes",
    description: "Find Your Stuff here!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeContextProvider>
                    <ThemeProvider>
                        <div className="container">
                            <div className="wrapper">
                                <Navbar />
                                {children}
                                <Footer />
                            </div>
                        </div>
                    </ThemeProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
