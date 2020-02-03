var React = require("react");
const Layout = require("./layout");

class Register extends React.Component {
  render() {
    let loggedIn = this.props.loggedIn;
    const id = this.props.dreams.id;
    const actionUrl = "/dreams/"+id+"?_method=put";
    return (
      <Layout loggedIn={loggedIn}>
        <h1><img class="h1-icon" src="/images/sleep.png" /> Edit profile {this.props.currentuser}</h1>
        <form action={actionUrl} autocomplete="off" method="POST">
            <div class="form-row form-row-text">
                <div class="label-name">Username:</div> 
                <input class="input-text" type="text" value={this.props.username} name="username" />
            </div>
            <div class="form-row form-row-text">
                <div class="label-name">Password:</div> 
                <input class="input-text" type="text" value={this.props.password} name="password" />
            </div>
            <div class="form-row form-button">
                <input class="button-submit" type="submit" />
            </div>
        </form>
      </Layout>
    );
  }
}

module.exports = Register;
