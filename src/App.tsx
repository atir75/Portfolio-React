
import './App.css'
import { Cube1 } from './components/Cube1'
import { Cube2 } from './components/Cube2'
import { Header } from './components/Header'
import { Text } from './components/Text'
import { BtnContactMe } from './components/Button ContactMe'
import { AboutMe } from './components/AboutMe'
import { Items } from './components/ItemsAboutMe'
import { Skills } from './components/Skills'

export function App() {

  return (
    <>
      <Header/>
      <Text/>
      <Cube1/>
      <Cube2/>
      <BtnContactMe/>
      <AboutMe/>
      <Items/>
      <Skills/>
    </>
  )
}