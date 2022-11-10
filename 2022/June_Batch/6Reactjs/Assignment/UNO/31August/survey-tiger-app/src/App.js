import './App.css';
import QuestionType from './component/QuestionType/QuestionType';


function App() {
  return (
     <div className="container">
         <div className="row">
             <div className="col-12">
                   <h2 className="text-center">Survey Tiger</h2>
             </div>
         </div>
         <div className="row">
             <div className="col-4">

             </div>
                  
             <div className="col-4 position-center">
                   <div className='button-box'>
                   <button type="button" className="btn btn-secondary">Create Survey</button>
                   </div>
                   <div className='button-box'>
                   <button type="button" className="btn btn-secondary">Take Survey</button>
                   </div>
             </div>
             <div className="col-4">
                 
             </div>
         </div>
         <div className="row">
           <div className="col-12 position-center">
               <QuestionType/>
           </div>
         </div>
     </div>
  );
}

export default App;
