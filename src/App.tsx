import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import Benefits from "@/scenes/Benefits";
import Home from "@/scenes/home";
import { SelectedPage } from "@/shared/types";
import OurClasses from "@/scenes/OurClasses";
import ContactUs from "@/scenes/ContactUs";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home,
    );

    const [isTopOfpage, setIsTopOfPage] = useState<boolean>(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            } else {
                setIsTopOfPage(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="app bg-gray-20 ">
            <Navbar
                isTopOfpage={isTopOfpage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage} />
            <Benefits setSelectedPage={setSelectedPage} />
            <OurClasses setSelectedPage={setSelectedPage} />
            <ContactUs setSelectedPage={setSelectedPage} />
        </div>
    );
}

export default App;
