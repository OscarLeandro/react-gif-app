import { useState } from "react"


export const AddCategory = ({ onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('')
    

    // const onInputChange = (e) => {
    //     setInputValue(e.target.value)
    //     console.log(e.target.value);
    // }
    // const onInputChange = ({target}) => {
    //     setInputValue(target.value)
        
    // }
    const onInputChange = ({target: {value}}) => { setInputValue(value) }

    const onSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        
        //onNewCategory(categories => [ inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('')
        
    }

  return (
      <form onSubmit ={ onSubmit }>
            <input
                type="text"
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={e => onInputChange(e) }
            />
      </form>
    
  )
}
