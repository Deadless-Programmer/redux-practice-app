import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCards } from "../redux/cardSlice"

const Cards = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.cards)

  useEffect(() => {
    dispatch(fetchCards())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((card) => (
        <div key={card.id} className="border p-4 rounded shadow">
          <h2 className="font-bold text-lg">{card.username}</h2>
          <p>{card.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards
