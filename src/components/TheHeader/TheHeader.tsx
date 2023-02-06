import styles from "../TheHeader/TheHeader.module.scss"
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher"

export const TheHeader = () => {

  return (
     <div className={styles.header}>
      <div className={styles.logo}>
         DevFinder
      </div>
      <ThemeSwitcher/>
     </div>
  )
}