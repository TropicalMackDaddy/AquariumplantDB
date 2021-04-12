import React from 'react'

const plantlist = [

    {
    "id": 1,
    "genus": 'Aciotis',
    "species": 'acuminifolia',
    "subspecies": '',
    "location": 'tropical South America',
    "growth": [''],
    "color": ['red','green'],
    "notes": ['Imported in 2005 as "Sao Francisco Irecienu"'],
    
  },
  {
    "id": 2,
    "genus": 'Acmella',
    "species": 'repens',
    "subspecies": '',
    "location": 'Southern United States to Cuba',
    "growth": [''],
    "color": ['green'],
    "notes": [''],
    
},] 



export default function HandleClicks() {

    function GreenFilter(){
        const GreenFilterResults = plantlist.filter( plant => plant.color.includes('green'))
    }



return(
        <div>
        <button onClick={() => GreenFilter()}> red</button>
        </div>
    );
}

    
  
  

