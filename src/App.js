import './App.css';
import Items from './Componants/items/Items';
import Header from './Componants/Header/Header';
import Cards from './Componants/card/Cards';
import Calculation from './Componants/calculation/Calculation';
import Ques1 from './Componants/question1/Ques1';
import Ques2 from './Componants/question2/Ques2';
import Ques3 from './Componants/question3/Ques3';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Items></Items>
      <Cards></Cards>
      <Calculation></Calculation>
      <Ques1></Ques1>
      <Ques2></Ques2>
      <Ques3></Ques3>

     
      


    </div>
  );
}

export default App;
