
import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => { 
    /*
    onAddCategory fue pasado como prop bajo el nombre
    de onNewCategory.
    Las props pueden ser metodos cuya lógica se 
    encuentrea en el módulo anterior/ módulo padre
    */
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => { 
        /*
          cada vez que el texto en el cuadro de texto cambie, se actualiza el 
          valor del estado del hook inputValue.
        */
        setInputValue( target.value );
    };

    const onSubmit = ( event ) => { //metodo detonado por la acción onSubmit propia de html.
        event.preventDefault(); //para evitar que la página se recargue al presionar la tecla enter
        if (inputValue.trim().length <= 1 ) return;
        onNewCategory(inputValue.trim());
        /*
          el input argumento de onNewCategory es enviado al metodo 
          onAddCategory el cual es un metodo del módulo padre: GifExpertApp.jsx, 
          pero cuya lógica fue "compartida" para ejecutarse en este módulo: 
          addCategory.jsx 
        */
        setInputValue(''); //al agregar una categoria, el texto en el cuadro de texto se borra.
    };

    return (
        <form onSubmit={ onSubmit }>
            <input 
            type="text" 
            placeholder='Buscar gifs...'
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>
        
    )
}

