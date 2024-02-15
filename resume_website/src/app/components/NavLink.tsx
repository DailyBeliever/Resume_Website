import Link from "next/link";

// Define a type for your component's props
type NavLinkProps = {
    href: string;
    title: string;
};

const NavLink = ({ href, title }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-red-600"
        >
            {title}
        </Link>
    );
};

export default NavLink;
