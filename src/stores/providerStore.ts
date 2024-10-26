import { create } from 'zustand'
import { TProvider } from '../types/TProvider'
import { Providers as providers } from '../constants/Providers'

export type ProviderState = {
  providers: TProvider[]
  isLoading: boolean
  getProviders: () => void
}

export const useProviderStore = create<ProviderState>()(set => ({
  providers: [],
  isLoading: false,
  getProviders: async () => {
    try {
      set({ isLoading: true })

      await new Promise(resolve => {
        setTimeout(() => {
          set({ providers: providers })
          resolve(providers)
        }, 5000)
      })

      set({ isLoading: false })
    } catch (err) {
      set(() => ({ isLoading: false }))
    }
  },
}))
