var React = require("react");
const Layout = require("./layout");

class Login extends React.Component {
  render() {
    let loggedIn = this.props.loggedIn;
    return (
      <Layout loggedIn={loggedIn}>
        <h1>you're just a step away,<br />
        <span class="highlight">login</span> to store your dreams</h1>
        <form action="/dreamers" autocomplete="off" method="POST">
            <div class="form-row form-row-text">
                <div class="label-name">Username:</div> 
                <input class="input-text" type="text" name="username" />
            </div>
            <div class="form-row form-row-text">
                <div class="label-name">Password:</div> 
                <input class="input-text" type="text" name="password" />
            </div>
            <div class="form-row form-button">
                <input class="button-submit" type="submit" />
            </div>
        </form>
      </Layout>
    );
  }
}

module.exports = Login;
