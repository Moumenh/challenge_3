
// const { BrowserRouter, Route } = require('react-router-dom');
// import CheckOut1 from './Checkout1'
var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter;

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {

        return (
            // <BrowserRouter>
            React.createElement(
                "div",
                { className: "App" },
                console.log(Router),
                React.createElement(
                    "h1",
                    null,
                    "with this"
                )
            )
            //    </BrowserRouter>

        );
    }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIlJvdXRlciIsIlJvdXRlIiwiSW5kZXhSb3V0ZSIsImhhc2hIaXN0b3J5IiwiSW5kZXhMaW5rIiwiTGluayIsImJyb3dzZXJIaXN0b3J5IiwiUmVhY3RSb3V0ZXIiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBLElBQUksRUFBRUEsTUFBRixFQUFVQyxLQUFWLEVBQWlCQyxVQUFqQixFQUE2QkMsV0FBN0IsRUFBMENDLFNBQTFDLEVBQXFEQyxJQUFyRCxFQUEyREMsY0FBM0QsS0FBOEVDLFdBQWxGOztBQUdBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxrQkFBYTtBQUNYO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFHRDs7QUFHREMsYUFBUzs7QUFFTDtBQUNJO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNLQyx3QkFBUUMsR0FBUixDQUFZZixNQUFaLENBREw7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFLUjs7QUFQQTtBQVNIOztBQXBCNkI7O0FBd0JsQ2dCLFNBQVNILE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkksU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gY29uc3QgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSB9ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyLWRvbScpO1xyXG4vLyBpbXBvcnQgQ2hlY2tPdXQxIGZyb20gJy4vQ2hlY2tvdXQxJ1xyXG52YXIgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBoYXNoSGlzdG9yeSwgSW5kZXhMaW5rLCBMaW5rLCBicm93c2VySGlzdG9yeSB9ID0gUmVhY3RSb3V0ZXJcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKVxyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0FwcCc+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKFJvdXRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxSb3V0ZSBwYXRoPScvQ2hlY2tvdXQxJyBjb21wb25lbnQ9e0NoZWNrT3V0MX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPndpdGggdGhpczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSkiXX0=