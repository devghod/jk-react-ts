import { create } from 'zustand'
import { TGame } from '../types/TGame'
import { Games as games } from '../constants/Games'

export type AdsState = {
  ads: TGame[]
  isLoading: boolean
  getAdsGames: () => void
}

export const useAdsStore = create<AdsState>()(set => ({
  ads: [],
  isLoading: false,
  getAdsGames: async () => {
    try {
      set({ isLoading: true })

      await new Promise(resolve => {
        setTimeout(() => {
          set({ ads: games })
          resolve(games)
        }, 4000)
      })

      set({ isLoading: false })
    } catch (err) {
      set(() => ({ isLoading: false }))
    }
  },
}))
