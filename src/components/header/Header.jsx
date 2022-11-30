import styles from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitulo/Subititle'
import Icon from '../icon/Icon'

function Header () {
  return (
    <div className= {styles.header}>
    <Title>Jogo da velha</Title>
    <Subtitle>Criado por Luiz Henrique</Subtitle>
    <div className= {styles.iconContent}>
    <Icon iconName= {'github'} link= {'https://github.com/LuizHenriqueDelPosoVilalva'} />
    </div>
  </div>
  )
}

export default Header