import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  image?: string;
  name?: string;
  availableStock?: number
}

export function CardCategory(props: CardProps) {
  const { image, name, availableStock } = props;
  return (
    <div
      className="cat-item flex flex-col border mb-4"
      style={{ padding: 30 }}
    >
      <p className="text-right">{availableStock} Product(s)</p>
      <a href="" className="cat-img relative overflow-hidden mb-3">
        <img className="img-fluid" src={image} alt="" />
      </a>
      <h5 className="font-semibold m-0">{name}</h5>
    </div>
  );
}

export default CardCategory;
