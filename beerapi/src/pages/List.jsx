import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const List = () => {
    const [data,setData] = useState("")

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
        // Wenn die [] leer sind, wird das nur 1x beim laden der seite asugeführt
      }, []);


    return (  
            <section>
                <Nav />

            
                {data ? (
                    <div>
                        {data.map((beer, index) => (
                            <div className="beer-item" key={index}>
                                <img src={beer.image_url} alt="" />
                                <div>
                                    <h4>{beer.name}</h4>
                                    <p>{beer.tagline}</p>
                                    <Link to={`/detail/${index}`}>Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
      ) : (
        <p>Daten werden geladen ...</p>
      )}

            </section>
    );
}
 
export default List;