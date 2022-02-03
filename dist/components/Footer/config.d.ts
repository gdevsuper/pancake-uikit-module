import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
export declare const footerLinks: FooterLinkType[];
export declare const socials: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items: {
        label: string;
        href: string;
    }[];
})[];
export declare const langs: Language[];
