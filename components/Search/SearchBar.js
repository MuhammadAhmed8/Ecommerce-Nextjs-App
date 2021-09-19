import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import apiClient from '../../utils/api-client';
import {useState} from 'react';
import NextLink from 'next/link';
import {CircularProgress, Link} from '@material-ui/core';

const api = apiClient();

export default function SearchBar(props){

    const [productsSuggestions, setProductsSuggestions] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const searchQuery = e.target.value;
        if(!searchQuery || searchQuery === "" || searchQuery === " "){
            setProductsSuggestions(null)
        }
        else{
            setLoading(true)
            api.ajax.products.list({
                limit: 10,
                offset: 0,
                search: searchQuery,
                sort: "search"
            })
            .then(({status, json})=>{
                if(status === 200){
                    setProductsSuggestions(json)
                }
                setLoading(false);
            })
            .catch((e)=>{
                console.log("Search Results Error")
            })
            
            
        }
        
    } 
    
    return (
        <div className="navTop__search search">
                <input type="text" name="search" id="search" onChange={handleChange}/>
                <label htmlFor="search">
                <i>
                    {!loading ? 
                    <SearchOutlinedIcon style={{top:4, left: -10, position:'relative'}}/>
                    :
                    <CircularProgress style={{top: 1, left: -8,position:'relative', width:15, height:15}}></CircularProgress>
                    }
                </i>
                </label>
                
                {
                    productsSuggestions && productsSuggestions.data.length > 0 && 
                    <ul className="results" >
                    {
                        productsSuggestions.data.map((sugg, idx)=>{
                            return <li key={idx} style={{display:"flex"}}>
                                <img src={sugg.images[0].url} style={{width:50}}/>
                                <a href="index.html">{sugg.name}<br></br>
                                <span>
                                    <b>${sugg.price}</b>
                                </span>
                                </a></li>

                        })
                    }
                    
                 
		        </ul>

                }
                
                
        </div>
    )
}

 {/* {
                        
                        productsSuggestions ?
                        productsSuggestions.map((suggestion, index)=>(
                            <li key={in}>
                               <NextLink href="/">
                                   <Link>
                                        Prod
                                   </Link>
                               </NextLink>
                            </li>
                        ))
                        : "No Results"

                    } */}