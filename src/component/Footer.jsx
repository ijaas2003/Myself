import SocialMediaIcons from "./SocialMediaIcons"
const Footer = () => {
  return (
    <footer className="h-30 bg-red pt-3 mt-10">
        <div className="w-5/6 mx-auto">
            <SocialMediaIcons margin="my-5" hover="hover:opacity-50"/>
            <div className="md:flex justify-center pb-20 md:justify-between text-center">
                <p className="font-playfair font-semibold text-2xl text-yellow">IJAAS AHAMAD</p>
                <p className="font-playfair text-md text-deep-blue">@2023 IJAAS.  All rights</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer