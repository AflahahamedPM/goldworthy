import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{margin:0,padding:0}}>
      <body style={{margin:0,padding:0}}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>

  );
}
