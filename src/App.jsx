import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background/Background';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  let heroData = [
    {text1:"Dive Into",text2:" What You Love"},
    {text1:"Indulge ",text2:"Your Passion"},
    {text1:"Give In To",text2:"Your Passion"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 4000);
  
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  return (
    <>
    <div className='content'>
       <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Hero
      setPlayStatus= {setPlayStatus}
      heroData = {heroData[heroCount]}
      heroCount = {heroCount}
      setHeroCount = {setHeroCount}
      playStatus = {playStatus}
      />
     </div>
    </>
  )
}

export default App
