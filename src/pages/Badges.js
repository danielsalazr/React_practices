import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class Badges extends React.Component  {

    

    constructor(props) {
        super(props);

        console.log('1. constructor');

        this.state = {
            nextPage : 1,
            loading : true,
            error: null,
            data: undefined,
            datos :  {
                results : []
        },
    }
    }
    
    // simulamos una consulta a una API 
    // cuando el obeto es montado en el dom
    componentDidMount() {
        console.log('3 component did mount')
        // llamamos el metodo como un this para poderlo utilizr dentro de toda la clase
        /*this.timeoutID = setTimeout(()=> {
            this.setState({
                data : [],
            })
        }, 3000 );*/

        this.fetchCharacters();
    }

    fetchCharacters= async () => {

        this.setState({ loading: true, error:null})
        try{ 
            //const response = await fetch(`https://rickandmortyapi.com/api/character/${this.state.nextPage}`);
            const data = await api.badges.list(); //await response.json();

            console.log(data);

            this.setState({
                loading: false,
                data:data,
                nextPage: this.state.nextPage+1,
        }) }
        catch (error){
            this.setState({ loading: false, error:error})
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5 componentes fueron actualizados');
        console.log({
            prevProps :prevProps, 
            prevState: prevState,
        });
        
        console.log({
            props : this.props, 
            state: this.state,
        });
    }

    componentWillUnmount () {
        console.log('6. component will unmount');
        // asi limpiamos memoria
        clearTimeout(this.timeoutID); // Cancelar el timeout que se delara  durante el montaje del dom,para que no interrumpa si no se alcanza a ejecutar
    }

    render() {

        if(this.state.loading === true){
            return (
                <PageLoading />
                
            );
        }
        if (this.state.error) {
            return<PageError error={this.state.error} />
        }

        console.log('2/4. render')
        return (
            <React.Fragment> 
                <div className= "Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges ={this.state.data} />
                    </div>
                    
                    {!this.state.loading && (
                        <button className="btn btn-primary" onClick={() => this.fetchCharacters}> load more</button>
                    )}
                </div>
                </div>


            </React.Fragment>
        )

    }
}

export default Badges;