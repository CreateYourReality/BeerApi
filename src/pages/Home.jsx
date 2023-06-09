import {Link} from "react-router-dom"


const Home = () => {
    return (  
        <section>
                <div className="home-div">
                    <Link to="/list"><img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" /></Link>
                    <h3>ALL BEER</h3>
                    <article>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nisi alias quibusdam, corporis consequatur illo quia, consectetur enim totam itaque tenetur. Sequi totam numquam quasi perferendis, ullam minima incidunt maiores?</p>
                    </article>
                </div>
                
                <div className="home-div">
                    <Link to="/detail/rnd"><img src="https://images.unsplash.com/photo-1532634726-8b9fb99845fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" /></Link>
                    <h3>RND BEER</h3>
                    <article>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nisi alias quibusdam, corporis consequatur illo quia, consectetur enim totam itaque tenetur. Sequi totam numquam quasi perferendis, ullam minima incidunt maiores?</p>
                    </article>
                </div>
        </section>
    );
}
 
export default Home;