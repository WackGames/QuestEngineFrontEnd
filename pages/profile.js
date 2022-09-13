import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Quiz from '../components/Quiz'
import Quizzes from '../components/Quizzes'

export const getStaticProps = async () => {
  const res = await fetch("https://questengine.onrender.com/demo-quiz/",
  {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  }
  );
  const data = await res.json();

  return {
    props: {
      quizzes: data,
    },
  };
};

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <Quizzes quizzes={props.quizzes.results} />
    </div>
  )
}
