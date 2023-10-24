import { NavigateFunction } from "react-router-dom";

export interface ICommon {
    navigate: NavigateFunction
} 

export interface IProduct {
    id: number,
    name: string,
    priceNew: number,
    priceOld: number,
    stock: number,
    image: string,
    reviews: number,
    rate: number
}

export interface IProductCart extends IProduct {
  quantity: number
  total: number
}