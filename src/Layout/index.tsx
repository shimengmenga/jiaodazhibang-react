import { useEffect,useState } from 'react'
import MenuContent from '../views/Content'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import style from './index.module.scss'

export type Items = { label: string; key: string; children?: Items[] }
const Layout = () => {
  // let checkText = useRef('')
  const [itemSelect, setItemSelect] = useState<string>('2')
  console.log(itemSelect,'itemSelect')
  const [checkTextValue, setCheckTextValue] = useState<string>('')
  const [items, setItems] = useState<Items[]>([
    {
      label: '菜单一',
      key: '1',
      children: [
        { label: '子菜单1-1', key: '2' },
        { label: '子菜单1-2', key: '3' }
      ]
    },
    {
      label: '菜单二',
      key: '4',
      children: [
        { label: '子菜单2-1', key: '5' },
        { label: '子菜单2-2', key: '6' }
      ]
    }
  ])

  useEffect(() => {
    items.forEach(item => {
      if(item.key === itemSelect) {
        setCheckTextValue(item.label)
      }else{
        item?.children?.forEach(child => {
          if (child.key === itemSelect) {
            console.log(child.key,itemSelect,'====')
            setCheckTextValue(child.label)
          }
        })
      }
    })
  },[itemSelect,items,checkTextValue])

  const changeText = (value: string) => {
    console.log(value)
  }

  return (
    <div className={style.root}>
      <Navbar></Navbar>
      <Sidebar MenuItems={items} changeItem={(e:string) => {
        setItemSelect(e)
      }}></Sidebar>
      <div className="content">
        <MenuContent changeText={(value) => {
          changeText(value)
          const newItems = [...items]
          newItems.forEach(item => {
            if(item.key === itemSelect) {
              item.label = value
            }else {
              item?.children?.forEach(child => {
                if(child.key === itemSelect) {
                  child.label = value
                }
              })
            }
          })
          setItems(newItems)
        }} text={checkTextValue}></MenuContent>
      </div>
      
    </div>
  )
}

export default Layout
