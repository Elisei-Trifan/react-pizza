import React from 'react'

type CategoriesProps = {
  value: number
  onClickCategory: any
}

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={item}
            className={value === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
