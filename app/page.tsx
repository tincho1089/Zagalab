import { MainWrapper } from "components"
import { Routes } from "models"
import styles from "./app.module.scss"
import { Navigator } from 'components'

function App() {
  return (
    <div className={styles.wrapperContainer}>
      <MainWrapper  className={styles.appWrapper}>
        <div className={styles.flexColumn}>
          <h1  className={styles.titleSpace}>Welcome to Zagalab Challenge</h1>
          <h3 className={styles.fontsAb}>What would you like to see?</h3>
          <Navigator pathNames={[Routes.STEPPER, Routes.STARWARS]} />
        </div>
      </MainWrapper>
    </div>
  )
}

export default App
