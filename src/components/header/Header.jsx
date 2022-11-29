import styles from './Header.module.css'
import Title from '../title/Title'
import Subtitle from '../subtitulo/Subititle'

function Header () {
  return (
    <div className= {styles.header}>
    <Title>Jogo da velha</Title>
    <Subtitle>Criado por Luiz Henrique</Subtitle>
  </div>
  )
}

export default Header