import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon= ({iconName}) => <Icon iconName= {iconName} size= '25px' />

function GameOption ({status}) {
  return (
    <div className= {styles.gameOption}>
      {
        status === 1 &&  <GameIcon iconName= 'circle' />
      }
      {
        status === -1 &&  <GameIcon iconName= 'x' />
      }
    </div>
  )
}

export default GameOption