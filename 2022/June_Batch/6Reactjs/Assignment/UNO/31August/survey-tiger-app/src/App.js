import { useEffect, useState } from 'react';
import './App.css';
import QuestionType from './component/QuestionType/QuestionType';
import {singleQuestionType,multiQuestionType} from './helper/FormingObject';

function App() {

  const [getQuestionType,setQuestionType] = useState([]);
  const [getStatus,setStatus] = useState(false);
  const [questionCreation,setQuestionCreation] = useState([]);

  useEffect(()=>{
    console.log(questionCreation);
  },[questionCreation]);

  const createSurvey=()=>{
    setStatus(true);
    setQuestionType(['select question type','multi-select','single-select']);
  }

  const selectedQuestionType=(inputType)=>{
       console.log(inputType);
       if(inputType =='single-select'){
        setQuestionCreation([...questionCreation,singleQuestionType]);
       }
       if(inputType == 'multi-select'){
        setQuestionCreation([...questionCreation,multiQuestionType])
       }
  }



  return (
     <div className="container">
         <div className="row">
             <div className="col-12">
                   <h2 className="text-center">Survey Tiger</h2>
             </div>
         </div>
         {!getStatus && <div className="row">
             <div className="col-4">

             </div>
                  
             <div className="col-4 position-center">
                   <div className='button-box'>
                   <button type="button" onClick={createSurvey} className="btn btn-secondary">Create Survey</button>
                   </div>
                   <div className='button-box'>
                   <button type="button" className="btn btn-secondary">Take Survey</button>
                   </div>
             </div>
             <div className="col-4">
                 
             </div>
         </div>}
         {getStatus && <div className="row">
           <div className="col-12 position-center">
               <QuestionType questionType={getQuestionType} selectedQuestionType={selectedQuestionType}/>
           </div>
         </div>}
     </div>
  );
}

export default App;
