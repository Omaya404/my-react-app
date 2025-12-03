interface PokemonProps {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: PokemonProps) {
  return (
    <figure>
      {imgSrc !== undefined ? <img src={imgSrc} alt={name} /> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
