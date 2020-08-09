//Maa listan ja maan tietojen renderöinti
import React from 'react'


const Countries = ({countriesToShow, showCountry}) => {
    //Varmistetaan että maita on järkevä määrä näytettäväksi, eli enintään kymmenen
    if(countriesToShow.length > 1 && countriesToShow.length < 11){
        //Jos on järkevä määrä, renderöidään maalista näkyviin
        return(
            <div>
        {countriesToShow.map((country, i) => <li key={i}>{country.name} <button onClick={()=>showCountry(country)}>show</button></li>)}
        </div>
        )
    }
    //Jos maita on liikaa näytettäväksi ilmoitetaan siitä
    else if(countriesToShow.length>10){
        return(
            <div>
                <p>Too many countries to show</p>
            </div>
        )
    }
    //Jos ei ole yhtään maata näytettäväksi, ilmoitetaan siitä
    else if(countriesToShow.length === 0){
        return(
            <div>
                <p>No countries to show</p>
            </div>
        )
    }
    //Jos päästään tähän pisteeseen, tarkoittaa se että on vain yksi maa listassa, silloin se näytetään.
    else{
        return(
            <div>
            <h2>{countriesToShow[0].name}</h2>
            <p>capital {countriesToShow[0].capital}</p>
            <p>population {countriesToShow[0].population}</p>
            <h3>languages</h3>
            <ul>
               {countriesToShow[0].languages.map((lang, i) => <li key ={i}>{lang.name}</li>)}
            </ul>
            <img src = {countriesToShow[0].flag} alt="new" height = {100} />
            </div>
        )
    }
    
}
export default Countries