import { Navbar, NavBody, NavbarLogo, NavItems, NavbarButton, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar"


const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export default function NavigationBar() {
    return (
        <div>
            <Navbar>
                {/* Desktop Navbar */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-3">
                        <NavbarButton variant="secondary" href="/signin">
                            Sign In
                        </NavbarButton>
                        <NavbarButton variant="dark" href="/signup">
                            Sign Up
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navbar */}
                {/* <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </MobileNavHeader>

            <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-lg px-4 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2 w-full">
                <NavbarButton variant="secondary" href="#login">
                  Login
                </NavbarButton>
                <NavbarButton variant="dark" href="#signup">
                  Sign Up
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav> */}
            </Navbar>
        </div>
    )
}