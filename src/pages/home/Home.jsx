import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css';

// pictures import
import CarRentPic from "../../pictures/Car-rent-pic.png"
import CarRentPic2 from "../../pictures/Car-rent-pic2.png"
import audi from "../../pictures/audi.png"
import bmw from "../../pictures/bmw.png"
import ford from "../../pictures/ford.png"
import mazda from "../../pictures/mazda.png"
import mercedes from "../../pictures/mercedes.png"
import nissan from "../../pictures/nissan.png"
import toyota from "../../pictures/toyota.png"
import vw from "../../pictures/vw.png"

// Home component containing sections like featured cars, registration steps, and brand logos
const Home = () => {
    const [carsData, setCarsData] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);

    //Fetches a random set of cars from the API
    useEffect(() => {
        const fetchRandomCars = async () => {
            try {
                const response = await fetch('/api/cars');
                
                // Check if the response is OK (status 200-299)
                if (response.ok) {
                    // Parse the JSON body of the response
                    const json = await response.json();
                    
                    // If we successfully get the cars, randomize and set the data
                    const randomCars = json.sort(() => Math.random() - 0.5).slice(0, 4);
                    setCarsData(randomCars);
                    setError(null);  // Clear any previous error
                } else {
                    // Handle any non-OK responses (e.g., 404, 500, etc.)
                    const errorData = await response.json();
                    setError(errorData.error || 'Įvyko klaida');
                }
            } catch (err) {
                // Catch any other errors (network issues, etc.)
                setError(err.message || 'Nepavyko gauti duomenų');
            }
        };
    
        fetchRandomCars();
    }, []);

    //Sets a timer to display the modal after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    //Closes modal window after button is clicked
    const handleClose = () => {
        setShowModal(false)
    }

    // Function to handle scroll to top when link is clicked
    const handleLinkClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div className="first-container">
                <div className="first-container-text">
                    <h1><strong>Netikėtai prireikė išsinuomoti automobilį? <br />
                        Čia jį rasite už <span>ypač mažą kainą.</span></strong></h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <img src={CarRentPic} alt="car-rent-logo" />
            </div>
            <div className="second-container">
                <h2>Populiariausi automobiliai</h2>
                {error && <div className="error">{error}</div>}
                <div className="cars-display-container">
                    {carsData.map(car => (
                        <div className="car-display-container" key={car._id}>
                            <div className="car-pic-box">
                                <img src={car.imageUrl} alt={`${car.brand} ${car.model}`} />
                                <h3>{car.brand} {car.model}, {car.year}</h3>
                            </div>
                            <div className="car-info-box">
                                <p><span className="iconify" data-icon="f7:car-fill"></span> {car.body}</p>
                                <p><span className="iconify" data-icon="game-icons:car-seat"></span> {car.seats} vietų</p>
                                <p><span className="iconify" data-icon="bi:fuel-pump"></span>{car.fuelType} </p>
                                <p><span className="iconify" data-icon="game-icons:gear-stick-pattern"></span> {car.transmission}</p>
                            </div>
                            <div className="car-button-box">
                                <p>{car.price} Eur <span>/parai</span></p>
                                <Link to='/login'><button><strong>Daugiau</strong><i className="bi bi-arrow-right"></i></button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="third-container">
                <img src={CarRentPic2} className="third-pic" alt="car pick" />
                <div className="num1 block">
                    <img src="../images/1.png" alt="number 1" />
                    <h3>Prisiregistruokite</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="num2 block">
                    <img src="../images/2.png" alt="number 2" />
                    <h3>Pasirinkite automobilį</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="num3 block">
                    <img src="../images/3.png" alt="number 3" />
                    <h3>Pasirinkite nuomos datą</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="num4 block">
                    <img src="../images/4.png" alt="number 4" />
                    <h3>Patvirtinkite savo užsakymą</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="num5 block">
                    <img src="../images/5.png" alt="number 5" />
                    <h3>Laukite patvirtinimo</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div className="fourth-container">
                <img src={audi} alt="audi" />
                <img src={bmw} alt="bmw" />
                <img src={ford} alt="ford" />
                <img src={mazda} alt="mazda" />
                <img src={mercedes} alt="mercedes" />
                <img src={nissan} alt="nissan" />
                <img src={toyota} alt="toyota" />
                <img src={vw} alt="vw" />
            </div>
            <div className={`cookie-modal ${showModal ? "show" : ""}`}>
                <div className="cookie-content">
                    <h2>Slapukų politika</h2>
                    <p>Mes naudojame slapukus, kurie užtikrina, kad Jums būtų patogu naudotis tinklalapiu. Jei toliau naršysite mūsų tinklalapyje, tai tolygu Jūsų sutikimui su slapukų naudojimu.</p>
                    <div className="cookie-buttons">
                        <button onClick={handleClose}>Sutinku</button>
                        <Link to='/privacypolicy' onClick={handleLinkClick}><button>Plačiau apie slapukus</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
