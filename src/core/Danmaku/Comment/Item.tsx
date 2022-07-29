import React from 'react';
// import { observers } from '@reactive'
import styles from './index.module.less'
import {MessageInfo, MessageType} from "@types";
import {calculatePosition} from "../../Position";

interface CommentProps {
  info: MessageInfo<MessageType.DanmuData>;
  index: number
}

export const CommentItem = (props: CommentProps) => {

  const { info:{ data }, index } = props

  const renderUser = () => {
    const { danmuInfo: { userInfo: { medal, avatar, nickname } } } = data
    return (
      <>
        <div className={styles.avatar}>
          <img src={avatar} alt=""/>
        </div>
        <div className={styles.name}>
          { nickname }
        </div>
        {
          medal ? (
            <div className={styles.medal}>
              { `${medal.clubName}(${medal.level})`}
            </div>
          ) : null
        }
      </>
    )
  }

  const style = calculatePosition({index})

  return (
    <div className={styles.container} style={style}>
      <div className={styles['danmaku-comment']}>
        {renderUser()}
        <div className={styles.content}>
          {data.content}
        </div>
      </div>
    </div>
  )
}
