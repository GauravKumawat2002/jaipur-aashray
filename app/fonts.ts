import { Geist, Geist_Mono, Lato, Poppins } from "next/font/google";
const latoFont = Lato({
  variable: "--lato-font",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
});
const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export { latoFont, poppinsFont, geistMono, geistSans };
