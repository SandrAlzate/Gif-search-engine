import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);



  return (
    <>
      {category ? (
        <>

          <h3>{category}</h3>
          {
            isLoading && (<h2>Cargando...</h2>)
          }


          <div className="card-grid">
            {
              images.length > 0 ? (
                images.map((image) => (
                  <GifItem
                    key={image.id}
                    {...image}
                  />
                ))
              ) : (
                <p>No hay coincidencias con tu busqueda</p>
              )
            }

          </div>
        </>
      ) : (
        <p>No hay ninguna búsqueda, por favor comienza ingresando una.</p>
      )}
    </>
  )
}