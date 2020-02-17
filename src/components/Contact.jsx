import React, {Component} from 'react';

export default class contact extends Component {

constructor(props) {
    super(props)
    }

render() {
    return (
    <div className="comptext">
    <h3>{this.props.titulo}</h3>
        <p>{this.props.displaytext}</p>

        <input type="text" id="tname" name="tname" placeholder={this.props.fstinput}></input>
        <input type="email" id="temail" name="temail" placeholder={this.props.scninput}></input>
        <br/><textarea class="mensaje" type="text" id="tmens" name="tmens" placeholder={this.props.msginput} rows="4" cols="50"></textarea>

        <br/><button class="btcont">{this.props.buttontext}</button>

    </div>)
    }
}
