
// const { BrowserRouter, Route } = require('react-router-dom');
// import CheckOut1 from './Checkout1'
var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            pages: 0,
            userId: {},
            input: '',

            name: '',
            email: '',
            password: '',

            userId: '',
            lineOne: '',
            lineTwo: '',
            city: '',
            state: '',
            zipCode: '',
            phone: '',

            cardUser: '',
            creditCard: '',
            expiryDate: '',
            CVV: '',
            zipCodeB: ''

        }
    }

    handleChange(event){
        const {name,value} = event.target;

        this.setState({[name] : value})
        
    }
  
  
    render() {
        const { name, email, password, lineOne,lineTwo,city,state,zipCode,phone,creditCard,expiryDate,CVV,zipCodeB } = this.state
        return (
            <div>
                {

                    (this.state.pages === 0) ?
                        <div className="signup-form">
                            {console.log(name)}
                            <input type="submit" value="Sign Up Page" className="signup-btn" onClick={() => this.setState({ pages: 1 })}/>
                        </div>
                        :
                        (this.state.pages === 1) ?
                            <div className="signup-form">
                                
                                <form className="" action="index.html" method="post">
                                    <h1>Sign Up</h1>
                                    <input type="text" value = {name} placeholder="Full Name" name='name' onChange={this.handleChange.bind(this)} className="txtb" />
                                    <input type="email" value = {email} placeholder="Email" name='email' onChange={this.handleChange.bind(this)} className="txtb" />
                                    <input type="password" value = {password} placeholder="Password" name='password' onChange={this.handleChange.bind(this)} className="txtb" />
                                    <input type="submit" value="Create Account" className="signup-btn"  onClick={() => this.setState({ pages: 2 })} />
                                </form>
                            </div>
                            :
                            (this.state.pages === 2) ?
                                <div className="signup-form">
                                    
                                    <form className="" action="index.html" method="post">
                                        <h1>Address Info</h1>
                                        <input type="text" value = {lineOne} placeholder="First Line" name='lineOne' onChange={this.handleChange.bind(this)} className="txtb" />
                                        <input type="text" value = {lineTwo} placeholder="Second Line" name='lineTwo' onChange={this.handleChange.bind(this)} className="txtb" />
                                        <input type="text" value = {city} placeholder="City" name='city' onChange={this.handleChange.bind(this)} className="txtb" />
                                        <input type="text" value = {state} placeholder="State" name='state' onChange={this.handleChange.bind(this)} className="txtb" />
                                        <input type="text" value = {zipCode} placeholder="Zip Code" name='zipCode' onChange={this.handleChange.bind(this)}  className="txtb" />
                                        <input type="text" value = {phone} placeholder="Phone Number" name='phone' onChange={this.handleChange.bind(this)} className="txtb" />
                                        <input type="submit" value="Credit Page" className="signup-btn" onClick={() => this.setState({ pages: 3 })} />
                                    </form>
                                </div>
                                :
                                (this.state.pages === 3) ?
                                    <div className="signup-form">
                                        
                                        <form className="" action="index.html" method="post">
                                            <h1>Address Info</h1>
                                            <input type="text" value = {creditCard} name='creditCard' placeholder="Credit Card" onChange={this.handleChange.bind(this)} className="txtb" />
                                            <input type="text" value = {expiryDate} name='expiryDate' placeholder="Expiry Date" onChange={this.handleChange.bind(this)} className="txtb" />
                                            <input type="text" value = {CVV} name='CVV' placeholder="CVV" onChange={this.handleChange.bind(this)} className="txtb" />
                                            <input type="text" value = {zipCodeB} name='zipCodeB' placeholder="Zip Code" onChange={this.handleChange.bind(this)} className="txtb" />
                                            <input type="submit" value="Data Page" className="signup-btn" onClick={() => this.setState({ pages: 4 })} />
                                        </form>
                                    </div>
                                    :
                                    (this.state.pages === 4) ?
                                        <div className="signup-form">
                                            <h1>Data Page</h1>
                                            <input type="submit" value="Check Out Page" className="signup-btn" onClick={() => this.setState({ pages: 0 })}/>
                                        </div> 
                                        :
                                        <div> not here </div>



            }
            </div>
        )
    }
  
  }

ReactDOM.render(<App />, document.getElementById("app"))