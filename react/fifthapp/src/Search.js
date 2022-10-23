import axios from 'axios'
import {useState} from 'react'



function Search(){

    
 
    var P = axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key=&q=cricket&type=video").then(function(response){

    },function(error){})


    return (
        <div>
            <input type = "text" placeholder="Search here">

            </input>
            {P}
        </div>
    )
}
export default Search;