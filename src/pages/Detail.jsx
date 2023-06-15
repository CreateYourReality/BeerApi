import { useState,useEffect } from "react";
import Nav from "../components/Nav";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backIMG from "../assets/Vector.png"


const Detail = () => {
    let [data,setData] = useState("")
    const params = useParams()
    const navigate = useNavigate();


    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.log("Fehler beim laden", error);
          });
    
        console.log(
          "useEffect nochmal ausgeführt"
        ); 
      }, []);


      const NavBack = () => {
        event.preventDefault();
        navigate(-1);
      }

      function getRandomArbitrary() {
        return (Math.random() * (data.length - 0) + 0).toFixed(0);
      }


      const getRnd = () => {
        console.log(params);
       if(params.beerID == "rnd"){
        searchKey = Number(getRandomArbitrary());
       }else{
        searchKey = Number(params.beerID);
        }
      }

    let searchKey;
    
    return (  
        <section>
            <article>
              {data ? (  
                    <>
                        {getRnd()}
                        <div className="beer-detail">
                            <img src={data[searchKey].image_url} alt={data[searchKey].name} />
                            <div>
                                <h5>{data[searchKey].name}</h5>
                                <h4>{data[searchKey].tagline}</h4>
                                <p>First Brewed: {data[searchKey].first_brewed}</p>
                                <p>Attenuation level: {data[searchKey].attenuation_level}</p>
                                <h6>{data[searchKey].description}</h6>
                                <a onClick={NavBack}><img src={backIMG} alt="" /></a>

                            </div>
                        </div>
                    </>
                    ) : ( <p>Daten werden geladen ...</p> )
                 }
            </article>
            <Nav />
        </section>
    );
}
 
export default Detail;