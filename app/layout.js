import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlantieDB",
  description: "Plants website",
};

function Navbar() {
  return (
      <nav className=" bg-[#4E9F3D] flex h-16">
          <p id="title" className="mx-[1%] flex justify-start items-center select-none">PlantieDB</p>
          <div className="flex justify-end items-center w-screen mx-[1%]">
              <ul className="flex gap-8">
              <a href="/login" className="text-xl hover:underline select-none"><li>Log In</li></a>
              <a href="/register" className="text-xl hover:underline"><li>Register</li></a>
              </ul>
          </div>
      </nav>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
