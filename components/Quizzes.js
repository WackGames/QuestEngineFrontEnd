import React from 'react';
import styles from '../styles/Quizzes.module.scss'
import Quiz from '../components/Quiz'


export default function Quizzes({quizzes}) {
    return (
      <div className={styles.cont}>
        <h1>Your Quizzes</h1>
        {quizzes.map(quiz => <Quiz key={quiz.id}quiz={quiz} />)}
      </div>
    )
  }
  
