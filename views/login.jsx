var React = require("react");
const Layout = require("./layout");

class Login extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Login to store your dreams</h1>
        <form action="/login" autocomplete="off" method="POST">
            <div class="form-row">
                <div class="label-name">Username:</div> 
                <input class="input-text" type="text" name="username" />
            </div>
            <div class="form-row">
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
