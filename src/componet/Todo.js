import React, { Component } from 'react'
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          task: '',
          items: [],
          completed:{}
          
        };
      }
    
      onChange = (event) => {
        this.setState({ task: event.target.value });
      }



    
      onSubmit = (event) => { 
        event.preventDefault();
        if (this.state.task === '') {
          return alert('Input empty')
        }
        else{  
        this.setState({
          task: '',
          items: [...this.state.items, {todo:this.state.task}],
        });
      }
      }
      

      

      handleclick(index) {
        this.setState({
          completed: { ...this.state.completed, [index]: !this.state.completed[index] }
        })};
    

       
      handleDelete = (index) => {
        
          this.setState ({
            items : this.state.items.filter((item,i) => i !== index)
          })
        }
  
        
       




     render() {
         const items = this.state.items
         
         return (
           <div className='todo'>
            
            <form onSubmit={this.onSubmit}>
               <div >
          <h1>To-Do App !</h1>
          </div>
          <input  value={this.state.task} onChange={this.onChange} />
          <button >Add</button>
        </form> 
        <ul>
        {items.map((el, index) => (
        <li key ={index} className='todo input'> 
        <p style={{  textDecoration : this.state.completed[index] ? "line-through":  "" }}>{el.todo}</p>
        {<button onClick={() => this.handleclick(index)} >{this.state.completed[index] ? "undo":"complete"}</button>}

        {<button onClick={() => this.handleDelete(index)} >Delete</button>}
        </li> ))}
        </ul>
        </div>
  
             
         )
     }
 }