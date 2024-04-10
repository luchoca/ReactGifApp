import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hook/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? ( // Agregar un chequeo de isLoading
        <p>Loading...</p>
      ) : (
        <div className="card-grid">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </>
  );
};
