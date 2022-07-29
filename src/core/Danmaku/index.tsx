import React, {useEffect } from 'react';
import { isMessage} from "@types";
import { fromEvent} from "rxjs";
import {subjects} from "@reactive";
import Comment from "./Comment";
import './index.less'

const Danmaku = () => {

  useEffect(() => {
    fromEvent(window, 'message').subscribe((e: any) => {
      const { data } = e;

      // console.log(data)
      console.log('data', data)

      try{

        const danmaku: unknown = JSON.parse(data)

        if(isMessage(danmaku)){
          subjects.comment.next(danmaku)
        }

      }catch (e) {
        // console.log('不是弹幕')
      }

    })
  }, [])


  return (
    <div id="paint">
      <Comment/>
    </div>
  )
}

export default Danmaku
