import localFont from "next/font/local";
import { JetBrains_Mono, Nunito } from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
})

export const metadata = {
  title: "Syril Kokou - Développeur d'applictions Ful-stack",
  description: "Développeur d'applications, développeur web, développeur d'application mobiles, dévelppeur de site wordpress, Ingénieur logiciel, Concepteur d'architecture logiciel, UI/UIX Designer...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      >
        <Header />
        <StairTransition />
        <PageTransition> {children} </PageTransition>

      </body>
    </html>
  );
}
