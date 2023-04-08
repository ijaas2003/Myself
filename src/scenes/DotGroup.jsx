import AnchorLink from 'react-anchor-link-smooth-scroll';
const DotGroup = ({selectedpage,setselectedPage}) => {
    const selectedStyle = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`
    return(
        <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
            <AnchorLink className={`${selectedpage === "home" ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`} 
        href={`#home`} onClick={() => setselectedPage('home')}
        />
         <AnchorLink className={`${selectedpage === "skills" ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`} 
        href={`#skills`} onClick={() => setselectedPage('skills')}
        />
         <AnchorLink className={`${selectedpage === "project" ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`} 
        href={`#project`} onClick={() => setselectedPage('project')}
        />
         <AnchorLink className={`${selectedpage === "testmonials" ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`} 
        href={`#testmonials`} onClick={() => setselectedPage('testmonials')}
        />
         <AnchorLink className={`${selectedpage === "contact" ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`} 
        href={`#contact`} onClick={() => setselectedPage('contact')}
        />
        </div>
    )
}
export default DotGroup