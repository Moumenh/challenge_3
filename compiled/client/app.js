
// const { BrowserRouter, Route } = require('react-router-dom');
// import CheckOut1 from './Checkout1'
var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: 0,
            userId: {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIlJvdXRlciIsIlJvdXRlIiwiSW5kZXhSb3V0ZSIsImhhc2hIaXN0b3J5IiwiSW5kZXhMaW5rIiwiTGluayIsImJyb3dzZXJIaXN0b3J5IiwiUmVhY3RSb3V0ZXIiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJwYWdlcyIsInVzZXJJZCIsInVzZXIiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3MiLCJsaW5lT25lIiwibGluZVR3byIsImNpdHkiLCJ6aXBDb2RlIiwicGhvbmUiLCJjcmVkaXQiLCJjYXJkVXNlciIsImNyZWRpdENhcmQiLCJleHBpcnlEYXRlIiwiQ1ZWIiwicmVuZGVyIiwic2V0U3RhdGUiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFQSxNQUFGLEVBQVVDLEtBQVYsRUFBaUJDLFVBQWpCLEVBQTZCQyxXQUE3QixFQUEwQ0MsU0FBMUMsRUFBcURDLElBQXJELEVBQTJEQyxjQUEzRCxLQUE4RUMsV0FBbEY7O0FBR0EsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGtCQUFhO0FBQ1g7QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQVEsQ0FERztBQUVYQyxvQkFBUyxFQUZFO0FBR1hDLGtCQUFPO0FBQ0hDLHNCQUFPLEVBREo7QUFFSEMsdUJBQU8sRUFGSjtBQUdIQywwQkFBVTtBQUhQLGFBSEk7QUFRWEMscUJBQVU7QUFDTkMseUJBQVEsRUFERjtBQUVOQyx5QkFBUSxFQUZGO0FBR05QLHdCQUFPLEVBSEQ7QUFJTlEsc0JBQUssRUFKQztBQUtOVix1QkFBTSxFQUxBO0FBTU5XLHlCQUFRLEVBTkY7QUFPTkMsdUJBQU87QUFQRCxhQVJDO0FBaUJYQyxvQkFBUztBQUNMQywwQkFBUyxFQURKO0FBRUxDLDRCQUFZLEVBRlA7QUFHTEMsNEJBQVksRUFIUDtBQUlMQyxxQkFBSSxFQUpDO0FBS0xOLHlCQUFRO0FBTEg7QUFqQkUsU0FBYjtBQXlCRDs7QUFHRE8sYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQTtBQUdTLGlCQUFLbEIsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLENBQXRCLEdBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFRLFNBQVMsTUFBTSxLQUFLa0IsUUFBTCxDQUFjLEVBQUVsQixPQUFPLENBQVQsRUFBZCxDQUF2QjtBQUFBO0FBQUE7QUFESixhQURKLEdBS0ssS0FBS0QsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLENBQXRCLEdBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBUSxTQUFTLE1BQU0sS0FBS2tCLFFBQUwsQ0FBYyxFQUFFbEIsT0FBTyxDQUFULEVBQWQsQ0FBdkI7QUFBQTtBQUFBO0FBRkosYUFESixHQU1LLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixDQUF0QixHQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxNQUFNLEtBQUtrQixRQUFMLENBQWMsRUFBRWxCLE9BQU8sQ0FBVCxFQUFkLENBQXZCO0FBQUE7QUFBQTtBQUZKLGFBREosR0FNSyxLQUFLRCxLQUFMLENBQVdDLEtBQVgsS0FBcUIsQ0FBdEIsR0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFRLFNBQVMsTUFBTSxLQUFLa0IsUUFBTCxDQUFjLEVBQUVsQixPQUFPLENBQVQsRUFBZCxDQUF2QjtBQUFBO0FBQUE7QUFGSixhQURKLEdBTUssS0FBS0QsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLENBQXRCLEdBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBUSxTQUFTLE1BQU0sS0FBS2tCLFFBQUwsQ0FBYyxFQUFFbEIsT0FBTyxDQUFULEVBQWQsQ0FBdkI7QUFBQTtBQUFBO0FBRkosYUFESixHQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoQzVCLFNBREo7QUF3Q0g7O0FBekU2Qjs7QUE2RWxDbUIsU0FBU0YsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCRyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBjb25zdCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlIH0gPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXItZG9tJyk7XHJcbi8vIGltcG9ydCBDaGVja091dDEgZnJvbSAnLi9DaGVja291dDEnXHJcbnZhciB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5LCBJbmRleExpbmssIExpbmssIGJyb3dzZXJIaXN0b3J5IH0gPSBSZWFjdFJvdXRlclxyXG5cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgcGFnZXMgOiAwLFxyXG4gICAgICAgIHVzZXJJZCA6IHt9LFxyXG4gICAgICAgIHVzZXIgOiB7XHJcbiAgICAgICAgICAgIG5hbWUgOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZHJlc3MgOiB7XHJcbiAgICAgICAgICAgIGxpbmVPbmU6JycsXHJcbiAgICAgICAgICAgIGxpbmVUd286JycsXHJcbiAgICAgICAgICAgIHVzZXJJZDonJyxcclxuICAgICAgICAgICAgY2l0eTonJyxcclxuICAgICAgICAgICAgc3RhdGU6JycsXHJcbiAgICAgICAgICAgIHppcENvZGU6JycsXHJcbiAgICAgICAgICAgIHBob25lOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGl0IDoge1xyXG4gICAgICAgICAgICBjYXJkVXNlcjonJyxcclxuICAgICAgICAgICAgY3JlZGl0Q2FyZDogJycsXHJcbiAgICAgICAgICAgIGV4cGlyeURhdGU6ICcnLFxyXG4gICAgICAgICAgICBDVlY6JycsXHJcbiAgICAgICAgICAgIHppcENvZGU6JydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUucGFnZXMgPT09IDApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhZ2VzOiAxIH0pfT5DaGVjayBPdXQgcGFnZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wYWdlcyA9PT0gMSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBQYWdlPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwYWdlczogMiB9KX0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnBhZ2VzID09PSAyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2Vjb25kIFBhZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhZ2VzOiAzIH0pfT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUucGFnZXMgPT09IDMpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnRoaXJkIFBhZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwYWdlczogNCB9KX0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnBhZ2VzID09PSA0KSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRhdGEgUGFnZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwYWdlczogMCB9KX0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiBub3QgaGVyZSA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKSJdfQ==