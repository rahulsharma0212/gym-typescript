import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};

const index = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex justify-between items-center";
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className="mx-auto w-5/6">
                    <div className={`${flexBetween} gap-16 `}>
                        {/* LEFT SIDE */}
                        <img src={Logo} alt="logo" />
                        {/* RIGHT SIDE */}
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
                                <button>Become a member</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default index;
