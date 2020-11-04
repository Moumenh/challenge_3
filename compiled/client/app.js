
// const { BrowserRouter, Route } = require('react-router-dom');
// import CheckOut1 from './Checkout1'
var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: 0,
            user: {
                name: '',
                email: '',
                password: ''
            },
            address: {
                lineOne: '',
                lineTwo: '',
                userId: '',
                city: '',
                state: '',
                zipCode: '',
                phone: ''
            },
            credit: {
                cardUser: '',
                creditCard: '',
                expiryDate: '',
                CVV: '',
                zipCode: ''
            }
        };
    }

    render() {

        return React.createElement(
            'div',
            null,
            this.state.pages === 0 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ pages: 1 }) },
                    'Check Out page'
                )
            ) : this.state.pages === 1 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'First Page'
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ pages: 2 }) },
                    'Submit'
                )
            ) : this.state.pages === 2 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Second Page'
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ pages: 3 }) },
                    'Submit'
                )
            ) : this.state.pages === 3 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'third Page'
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ pages: 4 }) },
                    'Submit'
                )
            ) : this.state.pages === 4 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Data Page'
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ pages: 0 }) },
                    'Submit'
                )
            ) : React.createElement(
                'div',
                null,
                ' not here '
            )
        );
    }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIlJvdXRlciIsIlJvdXRlIiwiSW5kZXhSb3V0ZSIsImhhc2hIaXN0b3J5IiwiSW5kZXhMaW5rIiwiTGluayIsImJyb3dzZXJIaXN0b3J5IiwiUmVhY3RSb3V0ZXIiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJwYWdlcyIsInVzZXIiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3MiLCJsaW5lT25lIiwibGluZVR3byIsInVzZXJJZCIsImNpdHkiLCJ6aXBDb2RlIiwicGhvbmUiLCJjcmVkaXQiLCJjYXJkVXNlciIsImNyZWRpdENhcmQiLCJleHBpcnlEYXRlIiwiQ1ZWIiwicmVuZGVyIiwic2V0U3RhdGUiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFQSxNQUFGLEVBQVVDLEtBQVYsRUFBaUJDLFVBQWpCLEVBQTZCQyxXQUE3QixFQUEwQ0MsU0FBMUMsRUFBcURDLElBQXJELEVBQTJEQyxjQUEzRCxLQUE4RUMsV0FBbEY7O0FBR0EsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGtCQUFhO0FBQ1g7QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQVEsQ0FERztBQUVYQyxrQkFBTztBQUNIQyxzQkFBTyxFQURKO0FBRUhDLHVCQUFPLEVBRko7QUFHSEMsMEJBQVU7QUFIUCxhQUZJO0FBT1hDLHFCQUFVO0FBQ05DLHlCQUFRLEVBREY7QUFFTkMseUJBQVEsRUFGRjtBQUdOQyx3QkFBTyxFQUhEO0FBSU5DLHNCQUFLLEVBSkM7QUFLTlYsdUJBQU0sRUFMQTtBQU1OVyx5QkFBUSxFQU5GO0FBT05DLHVCQUFPO0FBUEQsYUFQQztBQWdCWEMsb0JBQVM7QUFDTEMsMEJBQVMsRUFESjtBQUVMQyw0QkFBWSxFQUZQO0FBR0xDLDRCQUFZLEVBSFA7QUFJTEMscUJBQUksRUFKQztBQUtMTix5QkFBUTtBQUxIO0FBaEJFLFNBQWI7QUF3QkQ7O0FBR0RPLGFBQVM7O0FBRUwsZUFDSTtBQUFBO0FBQUE7QUFHUyxpQkFBS2xCLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixDQUF0QixHQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBUSxTQUFTLE1BQU0sS0FBS2tCLFFBQUwsQ0FBYyxFQUFFbEIsT0FBTyxDQUFULEVBQWQsQ0FBdkI7QUFBQTtBQUFBO0FBREosYUFESixHQUtLLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixDQUF0QixHQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxNQUFNLEtBQUtrQixRQUFMLENBQWMsRUFBRWxCLE9BQU8sQ0FBVCxFQUFkLENBQXZCO0FBQUE7QUFBQTtBQUZKLGFBREosR0FNSyxLQUFLRCxLQUFMLENBQVdDLEtBQVgsS0FBcUIsQ0FBdEIsR0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFRLFNBQVMsTUFBTSxLQUFLa0IsUUFBTCxDQUFjLEVBQUVsQixPQUFPLENBQVQsRUFBZCxDQUF2QjtBQUFBO0FBQUE7QUFGSixhQURKLEdBTUssS0FBS0QsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLENBQXRCLEdBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBUSxTQUFTLE1BQU0sS0FBS2tCLFFBQUwsQ0FBYyxFQUFFbEIsT0FBTyxDQUFULEVBQWQsQ0FBdkI7QUFBQTtBQUFBO0FBRkosYUFESixHQU1LLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixDQUF0QixHQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxNQUFNLEtBQUtrQixRQUFMLENBQWMsRUFBRWxCLE9BQU8sQ0FBVCxFQUFkLENBQXZCO0FBQUE7QUFBQTtBQUZKLGFBREosR0FNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEM1QixTQURKO0FBd0NIOztBQXhFNkI7O0FBNEVsQ21CLFNBQVNGLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkcsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gY29uc3QgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSB9ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyLWRvbScpO1xyXG4vLyBpbXBvcnQgQ2hlY2tPdXQxIGZyb20gJy4vQ2hlY2tvdXQxJ1xyXG52YXIgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBoYXNoSGlzdG9yeSwgSW5kZXhMaW5rLCBMaW5rLCBicm93c2VySGlzdG9yeSB9ID0gUmVhY3RSb3V0ZXJcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKVxyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIHBhZ2VzIDogMCxcclxuICAgICAgICB1c2VyIDoge1xyXG4gICAgICAgICAgICBuYW1lIDogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRyZXNzIDoge1xyXG4gICAgICAgICAgICBsaW5lT25lOicnLFxyXG4gICAgICAgICAgICBsaW5lVHdvOicnLFxyXG4gICAgICAgICAgICB1c2VySWQ6JycsXHJcbiAgICAgICAgICAgIGNpdHk6JycsXHJcbiAgICAgICAgICAgIHN0YXRlOicnLFxyXG4gICAgICAgICAgICB6aXBDb2RlOicnLFxyXG4gICAgICAgICAgICBwaG9uZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRpdCA6IHtcclxuICAgICAgICAgICAgY2FyZFVzZXI6JycsXHJcbiAgICAgICAgICAgIGNyZWRpdENhcmQ6ICcnLFxyXG4gICAgICAgICAgICBleHBpcnlEYXRlOiAnJyxcclxuICAgICAgICAgICAgQ1ZWOicnLFxyXG4gICAgICAgICAgICB6aXBDb2RlOicnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnBhZ2VzID09PSAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwYWdlczogMSB9KX0+Q2hlY2sgT3V0IHBhZ2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUucGFnZXMgPT09IDEpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgUGFnZTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcGFnZXM6IDIgfSl9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wYWdlcyA9PT0gMikgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlY29uZCBQYWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwYWdlczogMyB9KX0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnBhZ2VzID09PSAzKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD50aGlyZCBQYWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcGFnZXM6IDQgfSl9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wYWdlcyA9PT0gNCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EYXRhIFBhZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcGFnZXM6IDAgfSl9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gbm90IGhlcmUgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSkiXX0=