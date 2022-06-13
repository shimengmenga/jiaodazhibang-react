import { Button } from 'antd'
import { useEffect, useState } from 'react'
import style from './index.module.scss'
type ContentProps = {
  text: string
  changeText: (value: string) => void
}
export default function Content({ text, changeText }: ContentProps) {
  const [value, setValue] = useState<string>('')
  useEffect(() => {
    setValue(text)
  },[text])
  console.log(value,'value')
  const handlerClick = () => {
    changeText(value)
  }
  return (
    <div className={style.root}>
      <input
        value={value}
        className="inp"
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <Button type="primary" className="btn" onClick={handlerClick}>
        保存
      </Button>
    </div>
  )
}
