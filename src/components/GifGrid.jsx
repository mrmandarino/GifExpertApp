import {GifItem, LoadingGifs} from './index';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);


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

