import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfpage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ isTopOfpage, selectedPage, setSelectedPage }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const flexBetween = "flex justify-between items-center";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navBackground = isTopOfpage ? "" : "bg-primary-100 drop-shadow";
    return (
        <nav>
            <div
                className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div className="mx-auto w-5/6">
                    <div className={`${flexBetween} gap-16 `}>
                        {/* LEFT SIDE */}
                        <img src={Logo} alt="logo" />
                        {/* RIGHT SIDE */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Benifits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Our classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Contact us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}
                                    >
                                        Become a member
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuOpen((e) => !e)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuOpen && (
                <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end  p-12">
                        <button onClick={() => setIsMenuOpen((e) => !e)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    {/* MENU ITEMS */}
                    <div className={`ml-[33%] flex flex-col gap-10 text-2xl `}>
                        {["Home", "Benifits", "Our classes", "Contact us"].map(
                            (item, index) => (
                                <Link
                                    key={index}
                                    page={item}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            ),
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default index;
