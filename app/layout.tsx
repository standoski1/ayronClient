"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import localFont from "next/font/local";
import { usePathname } from 'next/navigation'


const myFont = localFont({
  src: "../public/fonts/MTNBrighterSans-Regular.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname()
  const widthPathName = ["/auth/signin"]
  const headPathName = ["/auth/signin"]
  

  return (
    <html lang="en">
      <body suppressHydrationWarning={false} style={myFont.style}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <div className="flex overflow-hidden">
                  {/* { (headPathName.includes(pathname)) ? null :
                  <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />} */}
                  <div className="relative flex flex-col">
                    { (headPathName.includes(pathname)) ? null :
                    <Header
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    />}
                    <main className="overflow-y-auto">
                      <div className={`${(widthPathName.includes(pathname)) ? null : "mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"}`}>
                        {children}
                      </div>
                    </main>
                  </div>
                </div>
              </PersistGate>
            </Provider>
        </div>
      </body>
    </html>
  );
}

