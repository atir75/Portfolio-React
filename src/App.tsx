
import './App.css'
import { Cube1 } from './components/Cube1'
import { Cube2 } from './components/Cube2'
import { Header } from './components/Header'
import { Text } from './components/Text'
import { BtnContactMe } from './components/Button ContactMe'
import { AboutMe } from './components/AboutMe'
import { ItemsAboutMe } from './components/ItemsAboutMe'

export function App() {

  return (
    <><Header></Header><Text></Text><Cube1></Cube1><Cube2></Cube2><BtnContactMe></BtnContactMe><AboutMe></AboutMe><ItemsAboutMe></ItemsAboutMe></>
  )
}