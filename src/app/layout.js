import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/componenets/navbar/Navbar";
import Footer from "@/componenets/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Findalbes",
    description: "Find Your Stuff here!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="container">
                    <div className="wrapper">
                        <Navbar/>
                        {children}
                        <Footer/>
                        </div>
                </div>
            </body>
        </html>
    );
}
