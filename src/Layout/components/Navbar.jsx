import { QuestionCircleOutlined } from '@ant-design/icons'
import style from './navbar.module.scss'
export default function Navbar() {
  return (
    <div className={style.root}>
      <div className="title">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
        <span>React</span>
      </div>
      <div className="right">
        <QuestionCircleOutlined className='icon' />
        <span>admin</span>
      </div>
    </div>
  )
}
