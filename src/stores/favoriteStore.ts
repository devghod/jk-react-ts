import { create } from 'zustand'

export type FavoriteState = {
  isLoading: boolean
  success: boolean
  favorites: number[]
  setSuccessFalse: () => void
  addFavorite: (id: number) => void
  deleteFavorite: (id: number) => void
}

export const useFavoriteStore = create<FavoriteState>()(set => ({
  favorites: [],
  success: false,
  isLoading: false,
  setSuccessFalse: () => set({ success: false }),
  addFavorite: async (id: number) => {
    try {
      set({ isLoading: true })

      await new Promise(resolve => {
        setTimeout(() => {
          set(state => ({ favorites: [...state.favorites, id] }))
          resolve(id)
        }, 2000)
      })
      set({ success: true })
      set({ isLoading: false })
    } catch (err) {
      set(() => ({ isLoading: false }))
    }
  },
  deleteFavorite: async (id: number) => {
    try {
      set({ isLoading: true })

      await new Promise(resolve => {
        setTimeout(() => {
          set(state => ({
            favorites: state.favorites.filter(_id => _id !== id),
          }))
          resolve(id)
        }, 2000)
      })
      set({ success: true })
      set({ isLoading: false })
    } catch (err) {
      set(() => ({ isLoading: false }))
    }
  },
}))
