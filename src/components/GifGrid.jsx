import {GifItem, LoadingGifs} from './index';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs(category);
    /*
      Este es un módulo que contiene una cuadricula de gifs
      images y isLoading son valores entregados por el custom hook
      useFetchGifs().
      */


    return (
        <>
            {
                isLoading ? 
                (<LoadingGifs/>) 
                : 
                (
                <div>
                    <h3>{category}</h3>
            
                    <div className='card-grid'>
                        {
                            images.map((image)=> (
                                
                                <GifItem 
                                key={image.id}
                                {...image}
                                />
                                
                            ))  
                        }
                    </div>
                </div>
                )
                
            }
            
        </>
    )
}

