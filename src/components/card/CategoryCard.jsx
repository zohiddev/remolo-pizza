import { setActiveCategory } from '../../redux/slices/categoriesSlice'
import { Icon } from '../ui/Icon'
import { useDispatch } from 'react-redux'
import parse from 'html-react-parser'

export const CategoryCard = ({ data, activeCategory }) => {
  const { icon, name } = data
  const dispatch = useDispatch()
  const handleCategoryChange = (name) => {
    dispatch(setActiveCategory(name))
  }

  return (
    <button
      className={`category ${data.id === activeCategory ? 'active' : ''}`}
      onClick={() => handleCategoryChange(data.id)}
    >
      <Icon additionalClasses={['category__icon']}>{parse(icon)}</Icon>
      <h4 className='category__name'>{name}</h4>
    </button>
  )
}
