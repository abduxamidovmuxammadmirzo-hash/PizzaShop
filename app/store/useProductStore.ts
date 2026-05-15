import { create } from 'zustand';
import { api } from '../api/api';

interface Product {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

interface ProductState {
  items: Product[];
  isLoading: boolean;
  fetchProducts: (categoryId?: number) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  items: [],
  isLoading: false,
  fetchProducts: async (categoryId) => {
    set({ isLoading: true });
    try {
      // ПРАВКА: проверяем строго на то, что categoryId не undefined и не null
      // Если ты хочешь, чтобы категория "0" тоже фильтровала, используй проверку !== undefined
      const url = (categoryId !== undefined && categoryId !== 0) 
        ? `/products?category=${categoryId}` 
        : '/products';
      
      const { data } = await api.get(url);
      
      // Добавляем проверку на наличие data.result, чтобы не упасть, если API вернет ошибку
      set({ items: data.result || [], isLoading: false });
      
      console.log('Запрос выполнен по адресу:', url); // Для отладки
    } catch (error) {
      console.error('Ошибка при загрузке продуктов:', error);
      set({ items: [], isLoading: false });
    }
  },
}));