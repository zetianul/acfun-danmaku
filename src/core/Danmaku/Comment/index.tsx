import React, {useEffect, useRef, useState} from 'react';
import { subjects } from '@reactive';
import {CommentDanmaku} from "@types";
import {CommentItem} from "./Item";

const Comment = () => {

  const [comments, setComments] = useState([]);
  const ref = useRef([])




  useEffect(() => {

    subjects.comment.subscribe((danmaku: CommentDanmaku) => {

      console.log('danmaku', danmaku)
      ref.current.push(danmaku);
      setComments([...ref.current]);
    })

  }, [])

  console.log(comments)


  return (
    <>
      {
        comments.map((i, index) => (
          <CommentItem info={i} index={index} key={index} />
        ))
      }
    </>
  );
};

export default Comment;