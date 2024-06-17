import Particles from "./Particles"

const GH_LOGO = process.env.PUBLIC_URL + '/gh.png'
const LKDIN_LOGO = process.env.PUBLIC_URL + '/linkedin2.png'

function ProfilePhoto() {
  let image_url = "https://pngimg.com/uploads/pokemon/pokemon_PNG66.png"
  return (
    <div className="mt-20">
      <img className="w-20 h-20 rounded-full mx-auto border-[5px] border-white" src={image_url} alt="My Image"></img>
    </div>
  )
}

function Description() {
  return (
    <div className="mt-5">
      <p className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto text-center">Hello, my name is <span className="font-bold">Arthur Miada</span>. I'm a <span className="font-bold">software engineer</span>.</p> 
    </div>
  )

}

function Socials() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
      <a href="www.github.com" className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950">
        GitHub
        <img src={GH_LOGO} className="h-8"/>
      </a>
      <a className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40">
        LinkedIn
        <img src={LKDIN_LOGO} className="h-8"/>
      </a>
    </div>
  )
}

function Header() {
  return (
    <div id="header" style={{position: "relative"}} className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section   w-full ">
      <Particles />
      <div style={{position: "absolute", top: 0, left: 0, right: 0, zIndex: 1}} className="">

        <ProfilePhoto />
        <Description />
        <Socials />
      </div>
    </div>
  )
}

export default Header;
