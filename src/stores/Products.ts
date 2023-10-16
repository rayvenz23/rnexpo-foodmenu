import { create } from 'zustand';
import { productType } from './types';
import menu from '../api/menu.json';

type ProductsState = {
  dishes: any[],
  productsStatus: string,
  productsError: string,
}

type ProductsActions = {
  getDishes: () => void,
  createDish: (dish:any) => void,
  updateDish: (dish:any, index:number) => void,
  deleteDish: (index:number) => void,
}

const useProductsStore = create<ProductsState & ProductsActions>(
  (set, _get) => ({
    dishes: [],
    productsStatus: '',
    productsError: '',

    // Get the list of Products
    getDishes: () => {
      set({ productsStatus: productType.GET_DISHES_LOADING });
      setTimeout(() => {
        set({
          dishes: menu?.dishes,
          productsStatus: productType.GET_DISHES_SUCCESS,
        });
        set({ productsStatus: productType.IDLE });
      }, 1000);
    },

    // Create new Product
    createDish: (dish) => {
      set({ productsStatus: productType.CREATE_DISH_LOADING });
      let currentDishes = [..._get().dishes];
      currentDishes.push(dish);

      setTimeout(() => {
        set({ 
          productsStatus: productType.CREATE_DISH_SUCCESS,
          dishes: currentDishes,
        });
      }, 1000);
      
      setTimeout(() => {
        set({ productsStatus: productType.IDLE });
      }, 1200);
    },

    // Update Product
    updateDish: (dish, index) => {
      set({ productsStatus: productType.UPDATE_DISH_LOADING });
      let currentDishes = [..._get().dishes];
      currentDishes[index] = dish;

      setTimeout(() => {
        set({ 
          productsStatus: productType.UPDATE_DISH_SUCCESS,
          dishes: currentDishes,
        });
      }, 1000);
      
      setTimeout(() => {
        set({ productsStatus: productType.IDLE });
      }, 1200);
    },

    // Delete Product
    deleteDish: (index) => {
      set({ productsStatus: productType.DELETE_DISH_LOADING });
      let currentDishes = [..._get().dishes];
      currentDishes.splice(index, 1);

      setTimeout(() => {
        set({ 
          productsStatus: productType.DELETE_DISH_SUCCESS,
          dishes: currentDishes,
        });
      }, 1000);

      setTimeout(() => {
        set({ productsStatus: productType.IDLE });
      }, 1200);
    },
  }),
)

export default useProductsStore;