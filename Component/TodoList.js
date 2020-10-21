import React, {Component} from 'react';

class TodoList extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {
                    this.props.item && this.props.item.map((item,index) =>{
                        return(
                            <div key={index}>
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TodoList;