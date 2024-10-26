import { create } from 'zustand'
import { TGame } from '../types/TGame'
import { Games as games } from '../constants/Games'

export type GameState = {
  game: object
  games: TGame[]
  isLoading: boolean
  getGames: (type: string) => void
}

export const useGameStore = create<GameState>()(set => ({
  game: {},
  games: [],
  isLoading: false,
  getGames: async (type: string) => {
    try {
      set({ isLoading: true })

      await new Promise(resolve => {
        setTimeout(() => {
          let temp = games

          if (type !== 'all') {
            temp = temp.filter(game => game.type === type)
          }

          set({ games: temp })
          resolve(temp)
        }, 5000)
      })

      set({ isLoading: false })
    } catch (err) {
      set(() => ({ isLoading: false }))
    }
  },
}))
