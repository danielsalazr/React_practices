import React from 'react';

class BadgeForm extends React.Component {
    // evento
    handleChange = (e) => {
        //console.log({e});
        console.log({name:e.target.name,
            value:e.target.value});
    }
    // evento
    handleClick = () => {
        //console.log({e});
        console.log("Boton presionado");
    }
    // evento
    handleSubmit = (e) => {
        //console.log({e});
        //console.log("Hubo un submit");
        e.preventDefault(); // esto detiene el submit 
        console.log("se evito el submit")
    }


    render () {
        return (
            <div>
                <h1>New attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" />
                    </div>
                    <button onClick={this.handleClick} type="submit" className="btn btn-primary">save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;
