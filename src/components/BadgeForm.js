import React from 'react';

class BadgeForm extends React.Component {

    /**state = {
        
      };*/
    // evento
    // handleChange = (e) => {
    //     //console.log({e});
    //     /*console.log({name:e.target.name,
    //         value:e.target.value});
    //     */
    //    this.setState({
    //        [e.target.name]: e.target.value, //esto es importante para manejar el estado
    //    })
    // }
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
        console.log(this.state) // Imprimimos las variables de estado
        //console.log({this.state.firstName})
    }


    render () {
        return (
            <div>
                <h1>New attendant</h1>

                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName" 
                        value={this.props.formValues.firstName} />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="email"
                        name="email"
                        value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="twitter"
                        value={this.props.formValues.twitter}
                        />
                    </div>


                    <button onClick={this.handleClick} type="submit" className="btn btn-primary">save</button>
                    {this.props.error && ( <p className="text-danger" >{this.props.error.message}</p> )}
                </form>
            </div>
        )
    }
}

export default BadgeForm;
