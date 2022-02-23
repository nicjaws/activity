
import './App.css';



 const activity = "http://www.boredapi.com/api/activity/"


 



function App() {
  const createData = async() => {
    const response = await fetch(activity);
    const responseJson = await response.json();
    return responseJson;
  }
  console.log(createData())
 


  return (
   <div>
     <h1>{createData()}</h1>
   </div>
  );
}

export default App;

