import {create} from 'zustand'
import {CardType} from "@/types/types";

type Store = {
  cards: CardType[],
  activeCard:CardType,
  direction:string
}

type Actions = {
  setCards: (data: CardType[]) => void,
  deleteCard:(cardName:string)=>void,
  handleCardClick:(card:CardType, drct:string)=>void
}

export const useStore = create<Store & Actions>((set) => ({
  cards: [],
  activeCard:{name:'', role:'', images:[]},
  direction: '',
  setCards: (data: CardType[]) => set({cards: data}),
  deleteCard:(cardName:string)=> set(state=>({
    cards: state.cards.filter((x)=> x.name!==cardName)
  })),
  handleCardClick:(card:CardType, drct:string)=>set({activeCard: card, direction:drct})
}))