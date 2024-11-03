export function Header() {
  type NavItem = {
    id: number;
    link: string;
    title: string;
  };

  const navItems: NavItem[] = [
    { id: 1, title: "Home", link: "#" },
    { id: 2, title: "Project", link: "#project" },
    { id: 3, title: "Experience", link: "#experience" },
    { id: 4, title: "Contact", link: "#contact" },
  ];

  return (
    <header className="w-full bg-[#222222] py-4">
      <div className="container mx-auto px-4">
        <nav className="text-white flex justify-between items-center">
          <h1 className="text-xl font-semibold">Logo</h1>
          <ul className="flex items-center">
            {navItems.map((item) => {
              return (
                <li key={item.id} className="mx-8 text-sm">
                  {item.title}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
