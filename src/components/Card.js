import { useState } from 'react'
import './Card.css'

export default function Card({
  name,
  species,
  image,
  status,
  origin,
  location,
  gender,
}) {
  const icon = species === 'Human' ? '👤' : '👽'
  const [areDetailsVisible, setAreDetailsVisible] = useState(false)

  return (
    <section className="Card">
      <h2>
        {icon} {name}
      </h2>
      <img data-testid="card-image" src={image} alt="" />
      <button onClick={() => setAreDetailsVisible(!areDetailsVisible)}>
        {areDetailsVisible ? 'Hide details' : 'Show details'}
      </button>
      <dl data-testid="card-details" hidden={!areDetailsVisible}>
        <dt>Gender</dt>
        <dd>{gender}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
        <dt>Origin</dt>
        <dd>{origin}</dd>
        <dt>Location</dt>
        <dd>{location}</dd>
      </dl>
    </section>
  )
}
