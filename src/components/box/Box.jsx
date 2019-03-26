import React from 'react'
import './Box.css'

class Box extends React.Component{
    constructor () {
        super();
        this.state = {
            edit: false,
            delete: false,
            save: false,
        }
    }

    edit = () => {
        this.setState({
            edit: true,
        })
    }

    delete = () => {
        this.setState({
            delete: true
        })
    }

    save = () => {
        this.setState({
            edit: false,
        })
    }

    renderNorm = () => {
        return (
            <div className='box'>
                <p>{this.props.text}</p>
                <div className='buttons'>
                    <button onClick={this.edit} className='btnEdit'>Edit</button>
                    <button onClick={this.delete} className='btnDelete'>Delete</button>
                </div>
            </div>
        )
    }

    renderEdit = () => {
        return (
            <div className='box'>
                <textarea defaultValue={this.props.text}></textarea>
                <div className='buttons'>
                    <button onClick={this.save} className='btnSave'>Save</button>
                </div>
            </div>
        )
    }

    render () {
        if (this.state.edit) {
            return (
                this.renderEdit()
            )
        } else {
            return (
                this.renderNorm()
            )
        }
    }
}


export default Box