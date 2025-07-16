import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="text-center mt-10 space-y-4">
      <h1 className="text-4xl font-bold text-blue-600">Redux Counter: {count}</h1>
      <div className="space-x-2">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={() => dispatch(incrementByAmount(5))} className="px-4 py-2 bg-purple-500 text-white rounded">+5</button>
      </div>
    </div>
  )
}
