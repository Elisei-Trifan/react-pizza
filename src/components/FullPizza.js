/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const FullPizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = React.useState()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://6756ce9ec0a427baf94a792f.mockapi.io/items/` + id
        )
        setPizza(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchPizza()
  }, [])

  if (!pizza) {
    return <h2>Загрузка ...</h2>
  }

  return (
    <div>
      <h1>FullPizza</h1>
      <h2> {pizza.title} </h2>
      <img src={pizza.imageUrl} alt="pizza" />
    </div>
  )
}

export default FullPizza
