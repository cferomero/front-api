// Aqui llamo los types de los items y los desestructuro

"use client"

// Librerias
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Componentes
import { SideBarItemProps } from "./SideBarItem.types";


export function SideBarItem(props: SideBarItemProps) {
    const {item} = props;
    const {href, icon: Icon, label} = item;

    // DEfino las rutas con pathName
    const pathName = usePathname();
    const activePath = pathName === href;

    return(
        <Link
            className={cn(`flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`, activePath && 'bg-slate-400/20')}
            href={href}
        >
            <Icon className="h-5 w-5" strokeWidth={1} />
            {label}
        </Link>
    )
}
