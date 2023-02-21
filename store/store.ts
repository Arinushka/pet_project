import {create} from 'zustand'
import {CardType} from "@/types/types";

type Store = {
  cards: CardType[],
}

type Actions = {
  setCards: (data: any) => void,
  deleteCard:(cardName:string)=>void
}

export const useStore = create<Store & Actions>((set) => ({
  cards: [],
  setCards: (data: any) => set({cards: data}),
  deleteCard:(cardName:string)=> set(state=>({
    cards: state.cards.filter((x)=> x.name!==cardName)
  }))
}))