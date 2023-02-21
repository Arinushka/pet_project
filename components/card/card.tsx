import styles from './card.module.css'
import {useState} from "react";
import {Skill} from '../../types/types'

export default function Card(props: any) {

  const [isVisibleTooltip, setIsVisibleTooltip] = useState(false);


  const {card} = props
  return (
    <div className={styles.card}>
      <button className={styles.deleteBtn} onClick={() => props.deleteCard(card.name)}>delete</button>
      <div className={styles.wrapAvatar}>
        <img className={styles.avatar}
             src={card.image}/>
      </div>
      <div>
        <div className={styles.name}>{card.name}</div>
        <div className={styles.role}>{card.role}</div>
      </div>
      {/*<div>*/}
      {/*  <button className={styles.button} onClick={() => setIsVisibleTooltip(!isVisibleTooltip)}>skills</button>*/}
      {/*  <div className={`${isVisibleTooltip ? styles.tooltip : ''}`}>*/}
      {/*    {*/}
      {/*      isVisibleTooltip ? <>*/}
      {/*        {*/}
      {/*          card.skills.map((skill: Skill, n: number) => {*/}
      {/*            return <div key={n}>{skill.skill}</div>*/}
      {/*          })*/}
      {/*        }</> : <></>*/}
      {/*    }*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}