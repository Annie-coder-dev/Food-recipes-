export default function SideBar({ isNavOpen }) {
  return (
    <aside
      className={`fixed bg-red-500 top-0 left-0 bottom-0 w-1/2 max-w-75 ${isNavOpen ? "translate-x-0" : "-translate-x-full"} duration-700 md:hidden`}
    >
      SideBar
    </aside>
  );
}
