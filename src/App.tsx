import React from 'react';
import "./style/index.less"
import "./style/variables.css"
import Danmaku from "./core/Danmaku";
import Mock from './core/Mock'
import foo from './core/Rx'

foo()
export default () => {
  return (
    <>
      <Danmaku />
      <Mock />
    </>
  )
}
