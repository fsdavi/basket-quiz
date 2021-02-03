import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Lottie from 'react-lottie';
import animationData from '../src/assets/lotties/33490-play-basketball.json';


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  return (
    <QuizBackground backgroundImage="https://image.freepik.com/fotos-gratis/jovem-jogando-basquete-com-luzes-legais-com-espaco-de-copia_23-2148536570.jpg">
      <Head>
        <title>Basquete Quiz - O quiz para quem não sabe nada sobre basquete</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Basquete Quiz</h1>
          </Widget.Header>
          <Widget.Content disabled={!name}>
            <form onSubmit={(event) => handleSubmit(event)}
            >
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Diz ai seu nome"
              />
              <button type="submit" disabled={!name}>
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/fsdavi" />
    </QuizBackground>
  );
}
