import React from 'react'


const Search =(props)=>{
    return(
        <div className="Search">
            <input 
            className="px-5 text-left"
            type="text"  
            placeholder="Ingresa tu Ciudad" 
            onChange={({target:{value}}) => props.changeSearch(value)}
            value={props.cityValue}
            
            />
            <button className="mx-3 boton" onClick={props.weather} > ¿Debo de llevar mi paraguas? </button>
       
        </div>
    );
}



export default Search;