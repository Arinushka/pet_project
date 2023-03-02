import styles from './card.module.css'
import {ImageItem} from "@/types/types";

export default function Card(props: any) {
  const {card} = props

  const onCardClick = (direction: string) => {
    props.handleCardClick(props.card, direction);
    let count: any = 0
    card.images.find((x: any, n: number) => {
      if (x.isActive) {
        x.isActive = ''
        count = n
      }
    })
    if (direction === 'next' && card.images.length > (count + 1)) {
      card.images[count + 1].isActive = 'active'
    } else if (direction === 'previous' && (count - 1) >= 0) {
      card.images[count - 1].isActive = 'active'
    } else {
      card.images[count === 0 ? (card.images.length - 1) : 0].isActive = 'active'
    }
  }


  return (
    <div className={styles.card}>
      <button className={styles.deleteBtn} onClick={() => props.deleteCard(card.name)}></button>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {card.images.length > 0 && card.images.map((image: ImageItem, n: number) => (
            <div key={n} className={`${styles.wrapAvatar} carousel-item ${image.isActive}`}>
              <img src={image.url} className={styles.avatar} alt='image'/>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
                onClick={() => onCardClick('previous')}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
                onClick={() => onCardClick('next')}>
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