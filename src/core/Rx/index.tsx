import { Observable } from 'rxjs'



const foo = () => {
  const observable = new Observable((subscriber => {
    console.log('new Observable')
    // @ts-ignore
    window.subscriber = subscriber
  }))


  // observable.subscribe((value) => {
  //   console.log('subscribe 1')
  //   console.log('value' , value)
  // })
  // observable.subscribe((value) => {
  //   console.log('subscribe 2')
  //   console.log('value' , value)
  // })


}

export default foo
