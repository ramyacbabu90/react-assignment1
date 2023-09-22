import logo from './logo.svg';
import './App.css';
import Place from './components/Place';

const locations =  [
    {
      "name": "Paris, France",
      "description": "The City of Love and Lights, known for its rich history, iconic landmarks like the Eiffel Tower, and exquisite cuisine.",
      "rating": 4.5,
      "image": "paris",
      "votes": 1200
    },
    {
      "name": "Tokyo, Japan",
      "description": "A bustling metropolis where tradition meets modernity, offering everything from historic temples to high-tech shopping districts.",
      "rating": 2.8,
      "image": "tokyo",
      "votes": 1500
    },
    {
      "name": "Cape Town, South Africa",
      "description": "A stunning coastal city surrounded by natural beauty, including Table Mountain and pristine beaches.",
      "rating": 4.7,
      "image": "capetown",
      "votes": 900
    },
    {
      "name": "Machu Picchu, Peru",
      "description": "An ancient Incan citadel nestled high in the Andes, offering breathtaking views and a glimpse into a rich cultural past.",
      "rating": 1.9,
      "image": "machupicchu",
      "votes": 1300
    },
    {
      "name": "Rio de Janeiro, Brazil",
      "description": "Famous for its stunning beaches, Carnival, and Christ the Redeemer statue.",
      "rating": 4.5,
      "image": "rio",
      "votes": 3012
    },
    
    {
      "name": "New York City, USA",
      "description": "The city that never sleeps, with iconic landmarks like Times Square and Central Park.",
      "rating": 4.9,
      "image": "nyc",
      "votes": 4123
    }
  ];

function App() {
  return (
    <div className="container">
      {
        locations.map((loc)=>{
          return <Place  title={loc.name} img={loc.image} desc={loc.description} ratings={loc.rating} />
         })
      }
     
    </div>
  );
}

export default App;
