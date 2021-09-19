import React from 'react'


export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: 0
        }
    }

    updateInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.addMoney(this.state.input)
                e.target.reset() 
                }}>
                <input onChange={(e) => this.updateInput(e)} placeholder='Input additional $$$...'></input>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}