import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useEffect,useState } from "react";
import axios  from "axios";
const Home = () => {

  const [tutorial, setTutorial] = useState([])
  const BASE_URL="https://tutorial-api.fullstack.clarusway.com/tutorials/"
  
  const getTutorials=async()=>{

    try {

      const {data} = await axios(BASE_URL)
      setTutorial(data)

    } catch (error) {

      console.log(error);

    }
    
  }

  console.log(tutorial);
 
  useEffect(() => {
    
    getTutorials()

  }, [])
  

  return (
    <>
      <AddTutorial />
      <TutorialList tutorials={tutorial} />
    </>
  );
};

export default Home;
