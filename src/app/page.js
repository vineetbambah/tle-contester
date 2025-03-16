import Image from "next/image";
import Link from "next/link";
import ContestTracker from "@/components/contest-tracker";
import ThemeToggle from "@/components/theme-toggle";
import {Button}from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
const navigation = [
  { name: "Home", href: "/" },
  { name: "TLE Eliminators", href: "https://www.tle-eliminators.com" },
  { name: "Contests", href: "/about" },
];
export default function Home() {
  return (
  <>
  <header className="p-4 flex items-center justify-between dark:text-white">
        <Link href="/" className="flex items-center space-x-2 no-underline">
          <Image
            src="https://www.tle-eliminators.com/static/media/tle-eliminators.866328c32b7a996da404503789dfe6c0.svg"
            alt="TLE Eliminators Logo"
            width={30}
            height={30}
          />
          <span className="text-2xl font-normal dark:text-white dark:bg-black/10">TLE Contest Tracker</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" hover:text-blue-600 font-medium no-underline"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Login / Register
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%]">
            <SheetTitle>
            </SheetTitle>
              <div className="flex flex-col p-4 gap-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium dark:text-white hover:text-blue-600 no-underline"
                  >
                    {item.name}
                  </Link>
                ))}
                  <ThemeToggle />
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                  Login / Register
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      
  </header>
  <main className="container mx-auto px-4 py-8">
    <ContestTracker />
  </main>
  </>
  );
}
