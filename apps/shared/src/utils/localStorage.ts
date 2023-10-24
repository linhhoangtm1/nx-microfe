import { IProductCart } from '@acme/shared-types';

export const setLocalStorage = (name: string, value: any) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getLocalStorage = (name: string) => {
  const data = localStorage.getItem(name) || 'null';
  return JSON.parse(data);
};

export const setCart = (value: IProductCart | IProductCart[]) => {
  let cart = getLocalStorage('cart') || [];
  if (Array.isArray(value)) {
    cart = value;
  } else {
    cart.push(value);
  }
  setLocalStorage('cart', cart);
};

export const getCart = () => {
  return getLocalStorage('cart') || [];
};
