import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  image?: string;
  title?: string;
  content?: string;
  btnText?: string;
}

export function CardOffer(props: CardProps) {
  const { image, title, content, btnText = 'Shop now' } = props;
  return (
    <div className="relative bg-secondary text-center md:text-right text-white mb-2 py-5 px-5">
      <img src={image} alt="" className='absolute max-w-[50%] max-h-[90%] bottom-0 left-0' />
      <div className="relative" style={{ zIndex: 1 }}>
        <h5 className="uppercase text-primary mb-3">{title}</h5>
        <h1 className="mb-4 font-semibold text-black">{content}</h1>
        <a href="" className="btn btn-outline-primary md:py-2 md:px-3">
          {btnText}
        </a>
      </div>
    </div>
  );
}

export default CardOffer;
