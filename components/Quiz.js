import React from 'react';
import styles from '../styles/Quiz.module.scss'


export default function Quiz({quiz}) {
    return (
      <div className={styles.container}>
        <img src={quiz.img_url} alt={quiz.name} />
        <section className={styles.sect}>
        <h2>{quiz.name}</h2>
        <section>
          <h3>{quiz.category}</h3>
          <h3>{quiz.subcategory}</h3>
        </section>
        <p>{quiz.description}</p>
        </section>
      </div>
    )
  }
  
