export default function SideNavbar() {
  return (
    <nav className="h-[100vh] w-[40%] bg-white fixed z-30 top-0 right-0 flex">
      <ul className="flex flex-col items-center justify-evenly gap-3">
        <li>About</li>
        <li>Repo</li>
        <li>Tentang Developer</li>
      </ul>
      <div className="">
        {/* <p>Copyright &copy;</p> */}
      </div>
    </nav>
  );
}
