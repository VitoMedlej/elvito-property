import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import {Dispatch, SetStateAction} from "react";

export interface IStatInfo {
    stat : number;
    title : string
    positive?: boolean
    delay?: number
}
export interface ICategoryItem {
    img : string
    title : string
    href : string
    height : string
}
export interface IFilterOption {
    isOpen : boolean;
    buttonText : string
    title?: string
    children : any
    name : string
    setOpen : Dispatch < SetStateAction < any >>
}
export interface IPropertySection {
    sectionTitle : string | undefined
}
export interface IHouseCard {
    width?: {
        xs?: string,
        sm?: string,
        md?: string
    } | string
    isMinWidthDisabled?: boolean
    isFeatured?: boolean
}
export interface IBreadcrumbLink {
    title : string;
    href : string;
}
export interface IBreadcrumb {
    id : string;
    category : string;
}
export interface IPropertyPageCarousel {
    className : string;
}
export interface IContactForm {
    isHiddenOnMobile?: boolean;
}
export interface ISummaryInfo {
    Icon :OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
    title : string 
    MainTitle : string
}
export interface ISwipeableMenuDrawer {
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    isDrawerOpen :  boolean
}