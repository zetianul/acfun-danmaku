import React, {useEffect, useRef, useState} from 'react';
import {DanmakuType, DanmakuTypeEnum} from './types'
import "./style/index.less"

export default () => {

  const [comments, setComments] = useState<DanmakuType[]>([])
  const ref = useRef(comments)

  useEffect(() => {
    window.addEventListener("message", (e) => {
      console.log(e)
      const { data } = e

      try{
        const danmaku = JSON.parse(data)

        ref.current = [...ref.current, danmaku]

        setComments(ref.current)

        console.log(danmaku)


      }catch (e) {
        console.error(e)
      }

    })
  }, [])


  return (
    <div>
      {
        comments.map((i => {
          if(i.type === DanmakuTypeEnum.评论){
            return (
              <div>
                {`${i.data.danmuInfo.userInfo.nickname} ${i.data.content}`}
              </div>
            )
          }
        }))
      }
      哈哈
    </div>
  )
}