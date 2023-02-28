import { CustomButton } from "../CustomButton"
import { Route } from "models"
import Link from "next/link"
import styles from "./Navigator.module.scss"

interface Props {
    pathNames: Route[]
}

function Navigator({pathNames} : Props) {
  return (
    <div className={styles.buttonsContainer}>
      {pathNames.map((pathName: Route) => (
        <Link className={styles.link} href={pathName.path} as={pathName.path} key={pathName.name} >
          <CustomButton>{pathName.name}</CustomButton>
        </Link>
        )
      )}
    </div>
  )
}

export default Navigator
