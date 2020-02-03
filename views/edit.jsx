var React = require("react");
const Layout = require("./layout");

class Edit extends React.Component {
  render() {
    let loggedIn = this.props.loggedIn;
    const id = this.props.userinfo.id;
    const backUrl = "/dreamers/"+id;
    const actionUrl = "/dreamers/"+id+"?_method=put";
    return (
      <Layout loggedIn={loggedIn}>
        <h1>edit your profile <span class="user-name">{this.props.userinfo.username}</span> <img class="h1-icon" src="/images/sleep.png" /> </h1>
        <form action={actionUrl} autocomplete="off" method="POST">
            <div class="form-row form-row-text">
                <div class="label-name">Username:</div> 
                <input class="input-text" type="text" value={this.props.userinfo.username} name="username" />
            </div>
            <div class="form-row form-row-text">
                <div class="label-name">Password:</div> 
                <input class="input-text" type="text" value="" name="password" />
            </div>
            <div class="form-row form-button">
                <a href={backUrl} class="button-cancel" type="cancel">Cancel</a>  
                <input class="button-submit" type="submit" />
            </div>
        </form>
      </Layout>
    );
  }
}

module.exports = Edit;
