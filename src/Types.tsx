import { Dispatch, SetStateAction } from "react";

export interface IStatInfo {
    stat :  number;
    title : string
    positive ?: boolean
    delay ?: number
}
export interface ICategoryItem {
    img : string
    title : string
    href : string
    height : string
}
export interface IFilterOption {
    isOpen : boolean;
    buttonText: string
    title : string
    children : any
    setOpen : Dispatch<SetStateAction<boolean>>
}