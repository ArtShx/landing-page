import Particles from "./Particles"

function ProfilePhoto() {
  let image_url = "https://pngimg.com/uploads/pokemon/pokemon_PNG66.png"
  return (
    <div className="mt-20">
      <img className="w-16 h-16 rounded-full mx-auto border-2 border-black/50" src={image_url} alt="My Image"></img>
    </div>
  )
}

function Description() {
  return (
    <div className="mt-5">
      <p className="text-center text-gray-600 mt-2">Hello, my name is <span className="text-neutral-950">Arthur Miada</span>. I'm a <span className="bold">software engineer</span>.</p> 
    </div>
  )

}

function Socials() {
  return (
    <div className="flex justify-center mt-5">
      <a className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-blue-600">GitHub</a>
      <a className="bg-blue-700 text-white px-4 py-2 rounded-full ml-2 hover:bg-blue-800">LinkedIn</a>
    </div>
  )
}

function Header() {
  return (
    <div className="size-full">
      <Particles />
      <ProfilePhoto />
      <Description />
      <Socials />
    </div>
  )
}

export default Header;
