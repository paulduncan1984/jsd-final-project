export default function Card({ image, title, id, onClick }) {
	return (
		<div className="card" onClick={onClick}>
			<img className="card__image" src={image} alt={title} />
			<h2 className="card__heading">{title}</h2>
		</div>
	);
}
