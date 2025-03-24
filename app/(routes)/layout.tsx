import Navbar from "@/components/custom/header/nav-bar";
import { routes } from "../routes";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="max-[1440px]:px-32 mx-auto max-w-[1440px] ">{children}</main>
    </>
  );
}
