import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import plusik from '../../assets/img/plusik.svg'

import { addItem } from '../../redux/slices/cartSlice'

const PizzaBlock = ({ id, title, price, imageUrl, sizes, types }) => {
  const [activeType, setActiveType] = React.useState(0)
  const [activeSize, setActiveSize] = React.useState(0)

  const typeNames = ['тонкое', 'традиционное']

  const dispatch = useDispatch()

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  )

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const pizza = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: activeSize,
    }
    dispatch(addItem(pizza))
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />

      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, ind) => (
            <li
              key={ind}
              className={activeType === type ? 'active' : ''}
              onClick={() => setActiveType(type)}
            >
              {type === 0 ? typeNames[0] : typeNames[1]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, ind) => (
            <li
              key={ind}
              className={activeSize === ind ? 'active' : ''}
              onClick={() => setActiveSize(ind)}
            >
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button
          onClick={onClickAdd}
          className="button button--outline button--add"
        >
          <img src={plusik} alt="plus"></img>
          <span>Добавить</span>
          {addedCount > 0 && <i> {addedCount} </i>}
        </button>
      </div>
    </div>
  )
}

export default PizzaBlock
