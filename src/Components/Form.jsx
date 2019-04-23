import React, { Component, Fragment } from "react";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            globalTitle: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (event) => {
        this.setState({
            title: event.target.value,

        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            globalTitle: `Mon formulaire ${this.state.title}`
        })
    }

    componentDidMount() {
        console.log("Formulaire rendu")
    }

    componentDidUpdate() {
        console.log("Titre changé")
    }

    render() {
        return (
            <Fragment>
                <h1>{this.state.title}{this.handleChange}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor=""> Title form
                    <input type="text" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <button value="Submit">Submit</button> {/*Possibilité de mettre un onClick sur le boutton qui appelle la fonction handleSubmit*/}

                </form>
            </Fragment>
        )
    }
};


export default Form;
