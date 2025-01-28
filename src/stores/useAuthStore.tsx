import { create } from 'zustand';

const getLocalStorageItem = (key: string, defaultValue: string) => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key);
    return value ? value : defaultValue;
  }
  return defaultValue;
};

interface Store {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
}

export const useAuthStore = create<Store>((set) => ({
  accessToken: getLocalStorageItem('accessToken', ''),
  setAccessToken: (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    set((state) => ({ ...state, accessToken }));
  },
}));
