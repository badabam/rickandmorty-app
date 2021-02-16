import './Card.css'

export default function Card({ name, species, image }) {
  const icon = species === 'Human' ? '👤' : '👽'
  return (
    <section className="Card">
      {name} {icon}
      <img src={image} alt="" />
    </section>
  )
}
