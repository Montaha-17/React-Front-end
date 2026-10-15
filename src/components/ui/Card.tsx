type CardProps = {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
};


function Card({ title, description, image, children }: CardProps) {
  return (
    <div className="bg-card w-full p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground ">{description}</p>
      {image && <img className="w-full h-48 object-cover rounded-lg mt-4" src={image} alt={title} />}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default Card;