import React, { Component } from 'react'
import {Paper, TextField} from '@material-ui/core'


export default class SearchBar extends Component {

    state = {
        searchTerm: '',
    }

    handleChange = (e) => {
        const searchTerm = e.target.value
        this.setState({searchTerm})
    }
    handleSubmit = (e) => {
        const {searchTerm} = this.state
        const {onFormSubmit} = this.props
        e.preventDefault();
        onFormSubmit(searchTerm)
    }

    

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField  fullWidth label='Search ...' onChange={this.handleChange}/>
                    
                </form>
            </Paper>
        )
    }
}
