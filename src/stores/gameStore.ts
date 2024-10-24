import { create } from 'zustand'
import { TGame } from '../types/TGame'
import { Games as games } from '../constants/Games'

export type GameState = {
  game: object
  games: TGame[]
  isLoading: boolean
  getGames: () => void
}

export const useGameStore = create<GameState>()(set => ({
  game: {},
  games: [],
  isLoading: false,
  getGames: async () => {
    try {
      set({ isLoading: true })

      await new Promise(resolve => {
        setTimeout(() => {
          set({ games: games })
          resolve(games)
        }, 5000)
      })

      set({ isLoading: false })
    } catch (err) {
      set(() => ({ isLoading: false }))
    }
  },
}))
