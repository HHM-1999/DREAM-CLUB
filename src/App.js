import './App.css';
import Header from './Componants/Header/Header';
import Ques1 from './Componants/question1/Ques1';
import Ques2 from './Componants/question2/Ques2';
import Ques3 from './Componants/question3/Ques3';
import Wrap from './Componants/Wrapper/Wrap';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wrap></Wrap>
      <Ques1></Ques1>
      <Ques2></Ques2>
      <Ques3></Ques3>
      
    </div>
  );
}
export default App;
