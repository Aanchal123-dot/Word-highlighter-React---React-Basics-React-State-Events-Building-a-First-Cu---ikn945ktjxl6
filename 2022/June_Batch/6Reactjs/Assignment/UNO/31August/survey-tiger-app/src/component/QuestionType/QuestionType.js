import './QuestionType.css';

const QuestionType = () => {
    return (<div className="row">
        <div className="col-4"></div>
        <div className="col-4 text-center">
            <form>
                <div class="form-group">
                    <label>Select Question Type</label>
                    <select className="form-control" id="questionType">
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
            </form>
        </div>
        <div className="col-4"></div>
    </div>)
}
export default QuestionType;