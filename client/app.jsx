
// const { BrowserRouter, Route } = require('react-router-dom');
// import CheckOut1 from './Checkout1'
var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter


class App extends React.Component {
    constructor(){
      super()
      this.state = {
        pages : 0,
        userId : {},
        user : {
            name : '',
            email: '',
            password: ''
        },
        address : {
            lineOne:'',
            lineTwo:'',
            userId:'',
            city:'',
            state:'',
            zipCode:'',
            phone: ''
        },
        credit : {
            cardUser:'',
            creditCard: '',
            expiryDate: '',
            CVV:'',
            zipCode:''
        }
      }
    }
  
  
    render() {

        return (
            <div>
                {

                    (this.state.pages === 0) ?
                        <div>
                            <button onClick={() => this.setState({ pages: 1 })}>Check Out page</button>
                        </div>
                        :
                        (this.state.pages === 1) ?
                            <div>
                                <p>First Page</p> 
                                <button onClick={() => this.setState({ pages: 2 })}>Submit</button>
                            </div>
                            :
                            (this.state.pages === 2) ?
                                <div>
                                    <p>Second Page</p>
                                    <button onClick={() => this.setState({ pages: 3 })}>Submit</button>
                                </div>
                                :
                                (this.state.pages === 3) ?
                                    <div>
                                        <p>third Page</p>
                                        <button onClick={() => this.setState({ pages: 4 })}>Submit</button>
                                    </div>
                                    :
                                    (this.state.pages === 4) ?
                                        <div>
                                            <p>Data Page</p>
                                            <button onClick={() => this.setState({ pages: 0 })}>Submit</button>
                                        </div> 
                                        :
                                        <div> not here </div>



            }
            </div>
        )
    }
  
  }

ReactDOM.render(<App />, document.getElementById("app"))