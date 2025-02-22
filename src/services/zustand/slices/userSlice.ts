import { StateCreator } from 'zustand';
import { UserState, User } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_STORAGE_KEY = '@user_data';

export const createUserSlice: StateCreator<UserState> = (set) => ({
  user: null,
  isLoading: false,

  updateUser: async (userData: Partial<User>) => {
    set((state) => {
      if (!state.user) return state;
      
      const updatedUser = {
        ...state.user,
        ...userData,
      };

      // Store updated user in AsyncStorage
      AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));

      return {
        ...state,
        user: updatedUser,
      };
    });
  },

  setUser: (user: User | null) => {
    if (user) {
      AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      AsyncStorage.removeItem(USER_STORAGE_KEY);
    }
    set({ user });
  },
}); 