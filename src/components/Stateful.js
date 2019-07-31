import React from 'react'
import Hello from './Hello'
import axios from 'axios'
class Stateful extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            people: []
        }
    }
    addPerson(o){
        var list = this.state.people
        list.push(o)
        this.setState({
            people: list
        })
    }
    render() {
        var people = this.state.people
        return (
            <div>
                {people.map(function(item){
                    return <Hello name={item.name} language={item.language}/>
                })}
            </div>
        )
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (res) {
            var data = res.data
            console.log(data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        this.addPerson({language: 'zh', name: 'Bill'})
        this.addPerson({language: 'en', name: 'Jimmy'})
        this.addPerson({language: 'zh', name: 'Amy'})
        this.addPerson({language: 'zh', name: 'Michael'})
        this.addPerson({language: 'zh', name: 'Steven'})
        this.addPerson({language: 'zh', name: 'Louis'})


        
    }
}

export default Stateful 