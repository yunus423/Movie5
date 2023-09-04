import React,{useState,useEffect} from 'react';
import Kart from './Kart';

let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popüler","Tiyatro","çizgi film","Aksiyon","Komedi"];

const Yns1=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
useEffect(()=>{
    fetch(url_set).then(res=>res.json()).then(data=>{
        setData(data.results);
    });
},[url_set])

const getData=(movieType)=>{
    if(movieType=="Popüler")
    {
        url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
    }
    if(movieType=="Tiyatro")
    {
        url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
    }
    if(movieType=="çizgi film")
    {
        url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
    }
    if(movieType=="Aksiyon")
    {
        url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
    }
    if(movieType=="Komedi")
    {
        url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
    }
    setUrl(url);

}

const searchMovie=(evt)=>{
    if(evt.key=="Enter")
    {
        url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
        setUrl(url);
        setSearch(" ");
    }
    
}
return(
    <>
    
    
     <marquee behavior="alternate" className='marque' direction="right">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr22K9_lyC2tn_qSLFYMAHNcEghw-ZpT0qlg&usqp=CAU"  height="170px"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-sFmkx9FMkyatySnPk0zNnh4L5F2jE9nTg&usqp=CAU"  height="170px"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTra0gO1lu3z1xT9BCK6nFvQCCFujVYw-86Jg&usqp=CAU" height="170px" ></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbdY56yBMAFgPiaZWANA2SCtunSPIyHn7Mg&usqp=CAU" height="170px"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXl-njjM45AKW-W6jrSIk_UJ0xUZdBC_1Iw&usqp=CAU"  height="170px" ></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeW3VsTvD_bet_HA-X_2U8Ec6fhk7HsjtPyw&usqp=CAU" height="170px" ></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7a3CwBRGCQEkzNTPx94QbNGRSCbEMvyeHUQ&usqp=CAU" height="170px"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo75jbNgxUOi8KIKKjtD-7zzToQWqRhA_8Qg&usqp=CAU" height="170px" ></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJz2gXuNro1188FU4fqZ3OyYulJwgWJTjIQ&usqp=CAU" height="170px"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDfqU9VPgMHSjLE5sduej3qWowiTg4oH-s5MXrTbcBdx15wE8Wtl8_DeZp-i2TQSX83k&usqp=CAU" height="170px" ></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SilXmA7gA3ZMTwDpFCOXodkTM7qPCj6fUQHkNle2vHsu8wfVHEsKYkw3HF18isYiGdM&usqp=CAU" height="170px"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGZZblBzOtauJf8BfpO6-KhMQVXMOfOMLig&usqp=CAU" height="170px"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93XrsX8dgqrpHuYSAK3wcnrjF-FDYr9avfg&usqp=CAU"  height="170px"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7u0LYYEkaaZj5VxvpyWQXhFYq6CFOSzijA&usqp=CAU" height="170px"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScELFCVlhh2eFDBD9c7RhseWQH1AXhrjXE0g&usqp=CAU"  height="170px"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSji9kH3EZQEfocIT74fZVKyLf766mTjYGfRw&usqp=CAU" height="170px"></img>
    
    </marquee> 
    
        <div className="header">
          
            <nav>
                <ul>
                    {
                        arr.map((value,pos)=>{
                            return(
                                <li><a href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                            )
                        })
                    }
                   
                </ul>
            </nav>
        
            <form>
                <div className="search-btn">
                    <input type="text" placeholder="film arayın" 
                    className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
                    value={search} onKeyPress={searchMovie}>
                    </input>
                    <button><i className="fas fa-search"></i></button>
                </div>
            </form>
      
        </div>
        <div className="container">
            {
                (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                    return(
                        <Kart info={res} key={pos}/>
                    )
                })
            }
        </div>
    </>
)
        }

export default Yns1
