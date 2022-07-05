import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {ChangeEvent} from "react";
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
    AllProperties : IFormData[]
    totalCount : number
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
    img : string
    propertySize : string
    id?: string
    type : string
    baths : number
    rooms : number
    currency : string
    price : number | string
    title : string
    location : string
}
export interface IBreadcrumbLink {
    title : string;
    href : string;
}
export interface IBreadcrumb {
    title : string;
    category : string;
}
export interface IPropertyPageCarousel {
    className : string;
}
export interface IContactForm {
    id : string
    isHiddenOnMobile?: boolean;
}
export interface ISummaryInfo {
    Icon : OverridableComponent < SvgIconTypeMap < {},
    "svg" >> & {
        muiName: string;
    }
    title : string
    MainTitle : string | number
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
    bathrooms : number 
    id?: string
    createdAt : string;
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
    balconies : number 
    paymentMethod : string,
    price : number | string
    propertySize : string,
    purpose : string,
    rentFrequency?: string,
    rooms : number 
    slug : string,
    state : string,
    title : string,
    type : string

}

export interface ICustomInput {
    name : string
    value : string | number | string[]
    label : string
    onChange : (e : any, isNumber?: boolean) => void
    type?: string
    children?: any
    InputProps?: {
        inputProps: {
            min?: number;
            max: number;
        };
    }
}
export interface ICurrentUser {

    userName?: string | null | undefined;
    userEmail?: string | null | undefined;
    userPhone ?: string | null | undefined;
    userImage?: string | null | undefined;
    id?: string | null | undefined;

}
export interface IMain {
    isLoading : boolean
    currentUser : ICurrentUser | null
    setCurrentUser : Dispatch < SetStateAction < ICurrentUser | null >>
}
export type Session = {

    id: string;
    name: string;
    email: string;
    userPhone?: string;
    image?: string

}

export interface ISession {
    session : Session | null,
    setSession ?: (newValue : any) => void
}
export type TuserCreds = {
    email: string;
    password: string
}
export type TuserSchema = {
    email: string;
    id: string
}
export type TData = {
    message?: string;
    email?: string;
    password?: string;
    id?: string;
    image?: string;
    userPhone?: string;
}
export interface IUserProfile {
    currentUser : ICurrentUser | null;
    isSameUser : boolean;
    setCurrentUser?: Dispatch < SetStateAction < ICurrentUser | null >>;
    logOutOption : boolean
}
