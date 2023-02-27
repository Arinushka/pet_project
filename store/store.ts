import {create} from 'zustand'
import {CardType} from "@/types/types";

type Store = {
  cards: CardType[],
}

type Actions = {
  setCards: (data: CardType[]) => void,
  deleteCard:(cardName:string)=>void
}

export const useStore = create<Store & Actions>((set) => ({
  cards: [],
  setCards: (data: CardType[]) => set({cards: data}),
  deleteCard:(cardName:string)=> set(state=>({
    cards: state.cards.filter((x)=> x.name!==cardName)
  }))
}))