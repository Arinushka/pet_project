import data from './../../utils/utils.json'
import Card from "@/components/card/card";
import {useEffect, useState} from "react";
import {useStore} from '../../store/store'

export default function List() {
  const {cards, setCards, deleteCard, handleCardClick, direction} = useStore((state) => state)

  useEffect(() => {
    setCards(data)
  }, [])


  return (
    <div className='container text-center'>
      <div className="row row-cols-3">
        {
          cards.map((card, n) => {
            return <div key={n} className="col"><Card card={card} deleteCard={deleteCard}
                                                      handleCardClick={handleCardClick}/></div>
          })
        }
      </div>
    </div>
  )
}