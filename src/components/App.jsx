import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: ' what is the capital city of India ? ',
                    choices: [
                        {
                            id: 'a',
                            text: 'Delhi'
                        },
                        {
                            id: 'b',
                            text: 'Bombay'
                        },
                        {
                            id: 'c',
                            text: 'Hyderabad'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id: 2,
                    text: ' what is the capital city of Andhra Pradesh ? ',
                    choices: [
                        {
                            id: 'a',
                            text: 'Vijawada'
                        },
                        {
                            id: 'b',
                            text: 'Guntur'
                        },
                        {
                            id: 'c',
                            text: 'Amaravathi'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 3,
                    text: ' what is the capital city of USA ? ',
                    choices: [
                        {
                            id: 'a',
                            text: 'New York'
                        },
                        {
                            id: 'b',
                            text: 'Washington D.C'
                        },
                        {
                            id: 'c',
                            text: 'Chicago'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 4,
                    text: ' what is the capital city of Telengana ? ',
                    choices: [
                        {
                            id: 'a',
                            text: 'Hyderabad'
                        },
                        {
                            id: 'b',
                            text: 'Secunderabad'
                        },
                        {
                            id: 'c',
                            text: 'Cyberabad'
                        }
                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 1
        }
    }
    
    setScore(score){
        this.setState({score});
    }

    setCurrent(current){
        this.setState({current});
    }

    render(){
        if(this.state.current> this.state.questions.length){
            var scorebox = '';
            var results = <Results {...this.state} />
        }else {
            var scorebox = <Scorebox {...this.state} />;
            var results = '';
        }
        return(
            
            <div>
                {results}
                {scorebox}
                <QuestionList setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} {...this.state} />
            </div>
        )
    }
        
    
}

export default App;