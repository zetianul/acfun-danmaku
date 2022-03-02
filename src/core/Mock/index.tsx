import React, {useRef} from 'react';
import './index.less';
import {  DanmakuTypeEnum } from '../../types'
import { danmaku } from "../../danmaku";

interface IProps {

}

const Mock = (_props: IProps) => {

  const ref = useRef<HTMLSelectElement>(null);

  const sendMockData = () => {
    const current = Number(ref.current.value)
    window.postMessage(JSON.stringify(danmaku.find(i => i.type === current)))
  }

  return (
    <div className="mock-container">
      <select ref={ref} name="type">
        {
          Object.keys(DanmakuTypeEnum).filter(i => Number(i)).map(key => (
            <option value={key}>{DanmakuTypeEnum[key]}</option>
            )
          )
        }
      </select>
      <button onClick={sendMockData}>发送</button>
    </div>
  )
}

export default Mock
