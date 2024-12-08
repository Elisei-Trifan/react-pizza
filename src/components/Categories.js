import React from 'react'

const Categories = () => {
  const [active, setActive] = React.useState(0)

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  function handleActive(index) {
    setActive(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={item}
            className={active === index ? 'active' : ''}
            onClick={() => handleActive(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
