import styles from './card.module.css'
import {useEffect, useRef, useState} from "react";
import {ImageItem} from "@/types/types";


export default function Card(props: any) {
  const {card} = props
  const [count, setCount]=useState<any>()

  



  useEffect(()=>{
   
if(props.activeCard.name=== card.name ){
  card.images.find((x: any, n: number) => {
    if (x.isActive) {
      x.isActive = false
      setCount(props.direction === 'next' ? n + 1 : n - 1)
    }
  })
 
  card.images[count].isActive = true
}
  }, [props.activeCard, props.direction])



  return (
    <div className={styles.card}>
      <button className={styles.deleteBtn} onClick={() => props.deleteCard(card.name)}></button>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {card.images.length >0 &&card.images.map((image: ImageItem, n: number) => (
            <div key={n} className={`${styles.wrapAvatar} carousel-item ${image.isActive ? 'active' : ''}`}>
              <img src={image.url} className={styles.avatar}alt='image'/>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"  onClick={() => props.handleCardClick(props.card, 'previous')}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
                onClick={() => props.handleCardClick(props.card, 'next')}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        <div className={styles.name}>{card.name}</div>
        <div className={styles.role}>{card.role}</div>
      </div>

    </div>
  )
}