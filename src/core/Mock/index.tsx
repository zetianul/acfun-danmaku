import React, {useRef} from 'react';
import './index.less';
import { MessageType, DanmakuTypeEnum } from '../../types'
import { danmaku } from "../../danmaku";

interface IProps {

}

const Mock = (_props: IProps) => {

  const ref = useRef<HTMLSelectElement>(null);

  const sendMockData = () => {
    const current = Number(ref.current.value)
    let data = danmaku.find(i => i.type === current);
    switch (current){
      case DanmakuTypeEnum.评论:
        data.data.content = '(゜ロ゜)'.repeat(Math.ceil(Math.random()* 9))
        break;
    }
    window.postMessage(JSON.stringify(data))
  }

  return (
    <div className="mock-container">
      <select ref={ref} name="type">
        {
          Object.keys(DanmakuTypeEnum).filter(i => Number(i)).map(key => (
            <option value={key} key={key}>{DanmakuTypeEnum[key]}</option>
            )
          )
        }
      </select>
      <button onClick={sendMockData}>发送</button>
    </div>
  )
}

export default Mock
