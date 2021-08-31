import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesById';
import { HeroCard } from './HeroCard';

export const HeroList =({publisher})=>{

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ] );

    

    return (
        
    
        <div className='row justify-content animate__animated animate__fadeIn'>
           
                {
            
                    heroes.map(hero=>(
                        <HeroCard
                        key={hero.id}
                            {...hero}
                        />
                    ))
                }
            

        </div>
  
    )
}