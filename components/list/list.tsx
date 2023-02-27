import styles from './list.module.css'
import data from './../../utils/utils.json'
import Card from "@/components/card/card";
import {useEffect, useState} from "react";
import {useStore} from '../../store/store'

export default function List() {
  const {cards, setCards, deleteCard} = useStore((state) => state)

  useEffect(() => {
    setCards(data)
  }, [])

  

  return (
    <div className={styles.list}>
      {
        cards.map((card, n) => {
          return <Card key={n} card={card} deleteCard={deleteCard}/>
        })
      }
    </div>
  )
}