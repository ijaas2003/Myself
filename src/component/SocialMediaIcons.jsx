const SocialMediaIcons = ({margin='my-10', hover='hover:opacity-50'}) => {
    return(
        <div className={`flex justify-center md:justify-start ${margin} gap-5`}>
            <a className={`${hover} transition duration-500 hover:-translate-y-[7px]`}
                href="http://www.linkedin.com/in/ijaas-ahamad-m-43b899219"
                target="_blank"
                rel="noreferrer"
            >    
            <img src="../assets/linkedin.png" alt="Linkedin" />
            </a>
            <a className={`${hover} transition duration-500 hover:-translate-y-[7px]`}
                href="https://www.instagram.com/ijaas_mortal"
                target="_blank"
                rel="noreferrer"
            >    
            <img alt="Instagram" src="../assets/instagram.png"/>
            </a>
            <a className={`${hover} transition duration-500 hover:-translate-y-[7px]`}
                href="https://github.com/ijaas2003"
                target="_blank"
                rel="noreferrer"
            >    
            <img alt="Twitter" src="../assets/twitter.png"/>
            </a>
            <a className={`${hover} transition duration-500 hover:-translate-y-[7px]`}
                href="www.facebook.com"
                target="_blank"
                rel="noreferrer"
            >    
            <img  alt="Facebook" src="../assets/facebook.png"/>
            </a>
        </div>
    )
}
export default SocialMediaIcons;