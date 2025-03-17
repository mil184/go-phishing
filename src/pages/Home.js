import { Link } from "react-router-dom";

const Home = () => {

    return ( 
        <div className="home-page">
            <img src="assets/go-phishing.jpg" alt="go-phishing"></img>
            <p>Phishing napadi pokušavaju da prevare nesumnjičave korisnike kako bi otkrili lične ili finansijske informacije, često oponašajući sadržaj poznatih i pouzdanih kompanija. <br/> <br/> Misliš da možeš prepoznati šta je stvarno, a šta lažno? </p>
            <button className="link-button"><Link to="/questions/1">Započni kviz</Link></button>
        </div>
     );
}
 
export default Home;