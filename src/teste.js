import React, { Component } from 'react';
import { addDatas } from './actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Teste extends Component {
    constructor(props){
        super(props);
        this.state={
            doze: ''
        }
        this.mudarValor = this.mudarValor.bind(this);
    }

    mudarValor (e) {
        this.setState({doze: e.target.value});
    }

    enviarValor = () => {
        this.props.addDatas(this.state.doze);
        this.setState({doze: ''});
    }

    render() {
        return (
            <div>
                <br />
                <input name="victor" type="text" value={this.state.doze} onChange={this.mudarValor}/>
                <button type="button" onClick={this.enviarValor}>Enviar</button>
                <div>
                    <p>{this.props.valor}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    valor: state.info.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
    addDatas
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Teste);