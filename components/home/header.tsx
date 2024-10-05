import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Ghost } from "lucide-react";
import Link from "next/link";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <Link href={href} className="transition-colors duration-200 test-gray-400">{children}</Link>
    )
}

export default function Header() {
    return (
        <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
            <div className="flex lg:flex-1">
                <NavLink href="/">
                    <span className="flex items-center gap-2 shrink-0">
                        <Ghost />
                    </span>
                    SpeakEasy
                </NavLink>
            </div>
            <div className="flex lg:justify-center gap-2 lg:gap-12 lg:items-center">
                <NavLink href={"/#pricing"}>Pricing</NavLink>
                <SignedIn>

                    <NavLink href={"/#posts"}>Posts</NavLink>
                </SignedIn>
            </div>
            <div className="flex lg:justify-end lg:flex-1">
                <div className="flex gap-2 items-center">
                    <SignedIn>

                        <NavLink href="/dashboard">Upload a Video </NavLink>
                        <UserButton />
                    </SignedIn>
                </div>
                <SignedOut>
                    <SignInButton>
                        <NavLink href="/sigin-in"> Sign in</NavLink>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav>

    )
}