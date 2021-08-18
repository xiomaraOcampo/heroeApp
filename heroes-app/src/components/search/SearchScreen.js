import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = () => {

    const heroesFiltered=heroes;
    

    const [formValues,handleInputChange]=useForm({
        searchText:''
    });

    const {searchText}=formValues;

    const handleSearch=(e)=>{
        e.preventDefault();
        console.log(searchText)

     }

    return (
        <div>
            <h1>Search Screen </h1>
            <hr/>

            <div className='row'>

                    <div className='col-5'>
                        <h4>Search Form</h4>
                        <hr/>
                        
                        <form onSubmit={handleSearch}>
                            <input
                            type='text'
                            placeholder='find your hero'
                            className='form-control'
                            name='searchText'
                            value={searchText}
                            onChange= {handleInputChange}

                            
                            />
                            
                            <button
                                type='submit'
                                className='btn m-1 btn-block btn-outline-primary'
                            
                            >
                                
                               Search
                            </button>
                            
                        </form>
                    </div>
                

                    <div className='col-7'>
                        <h4>Result</h4>
                        <hr/>

                        {
                            heroesFiltered.map(hero=>(
                                <HeroCard
                                key={hero.id}
                                {...hero}
                                />
                            ))
                        }

                    </div>


            </div>

        </div>
    )
}
