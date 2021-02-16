import './Card.css'

export default function Card({ name, species, image }) {
  const icon = species === 'Human' ? '👤' : '👽'

  return (
    <section className="Card">
      <h2>
        {icon} {name}
      </h2>
      <img src={image} alt="" />
    </section>
  )
}
