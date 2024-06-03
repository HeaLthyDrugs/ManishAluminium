import Footer from "@/components/Footer";
import "@/app/globals.css";
import { ThemeProvider } from "@/app/provider";
import Header from "@/components/Header";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Works from "@/components/Works";

const GalleryPage = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5" id="gallery">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Header />
          <Works />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default GalleryPage;
