import styles from './Subititle.module.css'

function Subtitle ({children}) {
  return (
    <h6 className= {styles.subtitle}>{children}</h6>
  )
}

export default Subtitle