import React from 'react'
import styles from "./carsPage.module.css"
import Card from '../module/card'

function carsPage({data}) {
    console.log(data.name)
  return (
    <>
        <div className={styles.container}>
           {data.map((car)=>(
            <Card key={car.id} {...car}/>
           ))}
        </div>
    </>
  )
}

export default carsPage