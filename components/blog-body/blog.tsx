type BlogProps = {
  place: {
    name: string;
    photoUrl: string;
    description: string;
  };
};
export default function Blog({ place }: BlogProps) {
  return (
    <div>
      <p>{place.description}</p>
      <h2>Puta madre</h2>
    </div>
  );
}
