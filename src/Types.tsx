import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import { ChangeEvent } from "react";
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
    BackDropHandler?: () => void
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
    Icon : OverridableComponent < SvgIconTypeMap < {},
    "svg" >> & {
        muiName: string;
    }
    title : string
    MainTitle : string
}
export interface ISwipeableMenuDrawer {
    setDrawerOpen : Dispatch < SetStateAction < boolean >>;
    isDrawerOpen : boolean
}
export interface ITopNavBarLink {
    title : string
    href : string
}
export interface IMenuBtn {
    href : string
    Icon : OverridableComponent < SvgIconTypeMap < {},
    "svg" >>;
    title : string
    handleClick : () => void
}
export interface IDetailsSection {
    title : string
    children : any
    sx?: any
}
export interface IFormData {
    bathrooms : number;
    coverPhoto : string;
    createdAt : string ;
    currency : string;
    description : string;
    isFurnished : boolean;
    images : string[];
    keywords : string[];
    location : string;
    ownerDetails : {
        ownerId: string,
        ownerName: string,
        ownerEmail: string,
        ownerPhoneNumber: string,
        ownerProfileImage: string
    },
    balconies : number,
    paymentMethod : string,
    price : number,
    propertySize : string,
    purpose : string,
    rentFrequency : string,
    rooms : number,
    slug : string,
    state : string,
    title : string,
    type : string
}

export interface ICustomInput  {
    name : string
    value : string | number | string[]
    label : string
    onChange : (e : any,isNumber ?: boolean) => void
    type?: string
    children ?: any
    InputProps ?: {
        inputProps: {
            min: number;
            max: number;
        };
    } 
}
