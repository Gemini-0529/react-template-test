import styles from './comp1.module.scss'
import { Button } from 'antd'
import { BackwardOutlined} from '@ant-design/icons'

export default function Comp1() {
  return (
    <>
    <Button type="dashed" className={styles.box}>comp1</Button>
    <BackwardOutlined/>
    </>
  )
}