
// const { BrowserRouter, Route } = require('react-router-dom');
// import CheckOut1 from './Checkout1'
var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter


class App extends React.Component {
    constructor(){
      super()
      this.state = {
  
      }
    }
  
  
    render() {

        return (
            // <BrowserRouter>
                <div className='App'>
                    {console.log(Router)}
                    {/* <Route path='/Checkout1' component={CheckOut1} /> */}
                    <h1>with this</h1>
                </div>
        //    </BrowserRouter>
        )
    }
  
  }

ReactDOM.render(<App />, document.getElementById("app"))