import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Button", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Modal", path:'/modal'},
    {label:'Tabel', path:'/table'},
    {label:'Counter', path:'/counter'},
  ];

  const rendredLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path} className="mb-3" activeClassName="font-bold border-l-4 pl-2 border-blue-500">
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {rendredLinks}
    </div>
  );
}
export default Sidebar;
