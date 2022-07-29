import {CSSProperties} from "react";


const perspective = 200;

export const calculatePosition = (params:{
  index: number
}): CSSProperties => {

  const { index } = params

  const paint = document.querySelector('#paint')
  if(!paint){
    return {}
  }
  const width = paint.clientWidth;
  const height = paint.clientHeight;

  // center point
  const cw = width / 2;
  const ch = height / 2;



  const top = 100 * (index + 1);
  const left = 100;


  return {
    top,
    left,
  }
}