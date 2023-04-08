import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from "../hooks/useMediaQuery";


const Link = ({
    page,selectedPage,setselectedPage
}) => {
    const lowerCasePage = page.toLowerCase();
    return(
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} 
        hover:text-yellow transition duration-500`} 
        href={`#${lowerCasePage}`} onClick={() => setselectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}


const Navbar = ({
    isTopOfPage,selectedPage,setselectedPage
}) => {
    const [isMenuToggled,setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-blue"

    return(
        <nav className={` ${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">IJAA</h4>
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16">
                    <Link 
                        page={"Home"}
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 
                    />
                    <Link 
                        page={"Skills"} 
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 
                    />
                    <Link 
                        page={"Project"} 
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 
                    />
                    <Link 
                        page={"Testmonials"} 
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 
                    />
                    <Link 
                        page={"Contact"} 
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 
                    />
                </div>
                ) : (
                        <button className="rounded-full bg-red p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}> 
                            <img src="../assets/menu-icon.svg" alt="menu-icon" />
                        </button>
                    ) 
                }
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        <div className="flex justify-end p-12">
                            <button className="rounded-md bg-yellow p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img src="../assets/close-icon.svg" alt="close-icon" />
                            </button>
                        </div>
                        {/* Menu  */}
                        <div className="flex flex-col gap-10 ml-[33%] text-deep-blue">
                        <Link 
                        page={"Home"}
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 
                    />
                    <Link 
                        page={"Skills"} 
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 
                    />
                    <Link 
                        page={"Project"} 
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 
                    />
                    <Link 
                        page={"Testmonials"} 
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 
                    />
                    <Link 
                        page={"Contact"} 
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 
                    />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Navbar;