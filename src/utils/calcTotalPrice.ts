import { TCartItem } from '../redux/slices/cartSlice'

export const calcTotalPrice = (items: TCartItem[]) => {
  return items.reduce((acc, item) => item.price * item.count + acc, 0)
}
