import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/form'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      eaten: [],
      budget: 100,
      index: 0
    }
  }
  eaten = (sushi) => {
    ((this.state.budget - sushi.price) >= 0) ? this.setState({

      eaten: [...this.state.eaten].concat(this.state.data.filter(match => match.id === sushi.id)),
      
      budget: this.state.budget - sushi.price
    }) : sushi

  }
  startingSushi = () => {
    
    return this.state.data.slice(this.state.index, this.state.index + 4)
  }
  moreSushi = () => {
    this.state.index + 4 >= this.state.data.length ? this.setState({index: 0}) : null
    this.setState(prevState => {
      return {
        ...this.state.index,
        index: prevState.index + 4
      }
    })
  }
  componentDidMount() {
    console.log('Called')
    fetch(`${API}`)
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }))
  }
  addMoney = (amount) => {
    
    this.setState({
      budget: this.state.budget + parseInt(amount)
    })
  }

  render() {

    return (
      <div className="app">
        <Form addMoney={this.addMoney}/>
        <SushiContainer eaten={this.eaten} moreSushi={this.moreSushi} state={this.state.eaten} data={this.startingSushi()} />
        <Table platesNeeded={this.state.eaten} budgetLeft={this.state.budget} />
        
      </div>
    );
  }
}

export default App;