"use client";

// import { prisma } from "@repo/db";
import React, { useState } from "react";
import { IconCheck, IconInfoCircle, IconPlus } from "@tabler/icons-react"
import { ArrowUpIcon, Search, PlusIcon, ArrowRight, Shapes } from "lucide-react"
import { Navbar, NavBody, NavbarLogo, NavItems, NavbarButton, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar"
import { cn } from "../lib/utils"
import { Spotlight } from "@/components/ui/spotlight"
import { Cover } from "@/components/ui/cover"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import "./globals.css"
import { motion } from "framer-motion"
import { toast } from "sonner";
import ProductsList from "@/components/ProductsList";


const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  // const user = await prisma.user.findFirst()

  function submitHandler() {
    toast.success("Message Sent 🚀", {
      description: "Your message has been successfully delivered!",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo action"),
      },
    });
  }

  return (
    <div>
      <div>
        <Navbar>
          {/* Desktop Navbar */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-3">
              <NavbarButton variant="secondary" href="#login">
                Sign In
              </NavbarButton>
              <NavbarButton variant="dark" href="#signup">
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

      {/* <Button variant={"destructive"}>Hello World</Button> */}
      {/* {user?.name ?? "No user added yet"} */}


      {/* <div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Build amazing websites <br /> at <Cover>warp speed</Cover>
        </h1>
      </div> */}

      {/* <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
        />

        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="none"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Spotlight <br />is the <Cover>warp speed</Cover>
          </h1>
          <div className="flex max-w-xl justify-center">
            <InputGroup>
              <InputGroupTextarea placeholder="Ask, Search or Chat..." />
              <InputGroupAddon align="block-end">
                <InputGroupButton
                  variant="outline"
                  className="rounded-full"
                  size="icon-xs"
                >
                  <IconPlus />
                </InputGroupButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <InputGroupButton variant="ghost">Auto</InputGroupButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="top"
                    align="start"
                    className="[--radius:0.95rem]"
                  >
                    <DropdownMenuItem>Auto</DropdownMenuItem>
                    <DropdownMenuItem>Agent</DropdownMenuItem>
                    <DropdownMenuItem>Manual</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <InputGroupText className="ml-auto">52% used</InputGroupText>
                <Separator orientation="vertical" className="!h-4" />
                <InputGroupButton
                  variant="default"
                  className="rounded-full"
                  size="icon-xs"
                  disabled
                >
                  <ArrowUpIcon />
                  <span className="sr-only">Send</span>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div> */}
      <div className="relative flex h-screen w-full overflow-hidden bg-black/[0.96] antialiased items-center justify-center">
        {/* === Animated Background Grid === */}
        <motion.div
          className={cn(
            "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        {/* === Spotlight Glow === */}
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60 blur-3xl opacity-70"
          fill="#3b82f6"
        />

        {/* === Animated Floating Light === */}
        <motion.div
          className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* === Content === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center"
        >
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl mb-10">
            Spotlight <br />is the <Cover>warp speed</Cover>
          </h1>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-xl">
              <InputGroup className="rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md shadow-lg transition-all hover:border-neutral-700 focus-within:border-blue-500">
                <InputGroupTextarea
                  placeholder="Ask, Search or Chat..."
                  className="text-neutral-100 placeholder:text-neutral-500 resize-none"
                />
                <InputGroupAddon align="block-end" className="gap-2">
                  <InputGroupButton
                    variant="outline"
                    className="rounded-full hover:bg-neutral-800 hover:text-blue-400 transition-colors"
                    size="icon-xs"
                  >
                    <PlusIcon />
                  </InputGroupButton>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <InputGroupButton variant="ghost" className="text-neutral-400 hover:text-grey-800">
                        Auto
                      </InputGroupButton>
                    </DropdownMenuTrigger>
                    <InputGroupButton variant="ghost" className="text-neutral-400 hover:text-grey-800">
                      Supabase
                    </InputGroupButton>
                    <DropdownMenuContent
                      side="top"
                      align="start"
                      className="[--radius:0.95rem] bg-neutral-900 border-neutral-800 text-white"
                    >
                      <DropdownMenuItem>Auto</DropdownMenuItem>
                      <DropdownMenuItem>Agent</DropdownMenuItem>
                      <DropdownMenuItem>Manual</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <InputGroupText className="ml-auto text-neutral-400">52% used</InputGroupText>
                  <Separator orientation="vertical" className="!h-4 bg-neutral-700" />
                  <InputGroupButton
                    variant="default"
                    className="rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
                    size="icon-xs"
                    onClick={submitHandler}
                  >
                    <ArrowUpIcon className="text-white" />
                    <span className="sr-only">Send</span>
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* History */}
          <ProductsList></ProductsList>
    </div>
  );
}
