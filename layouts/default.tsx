import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
// import Sidebar from "@/components/Sidebar"; // Import the Sidebar component

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen">
      <Head />
      <Navbar />
      {/* <Sidebar /> Add the Sidebar component */}
      <div className="flex flex-col flex-grow">
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 ml-64"> {/* Adjust margin for sidebar */}
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
            title="nextui.org homepage"
          >
            <span className="text-default-600">Powered by</span>
            <p className="text-primary">NextUI</p>
          </Link>
        </footer>
      </div>
    </div>
  );
}
