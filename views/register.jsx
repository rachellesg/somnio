var React = require("react");
const Layout = require("./layout");

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showPassword: false}
  
  }

  handleChange(e) {
    console.log(e.target.checked)
    if(e.target.checked) {
      this.setState({showPassword:!this.state.showPassword})

    }
  }
  // changePassword = (e) => {
  //   var showPassword = document.getElementById("current-password");
  //   console.log("hello")
  //   if (showPassword.type === "password") {
  //       showPassword.type === "text";
  //   } else {
  //       showPassword.type === "password";
  //   }
  // }
  render() {
    let showPw;
    if(this.state.showPassword) {
      showPw = "text"
    } else {
      showPw = "password"
    }
    console.log("ASKJDASKDJHADKBASDK",this.state.showPassword)
    let loggedIn = this.props.loggedIn;
    return (
      <Layout loggedIn={loggedIn}>
        <div class="login">
          <div class="form-row-5">
            <h1>hey there <span class="highlight">dreamer</span><br /><br />come join us, get started today for <span class="highlight">free</span></h1>
          </div>
          <div class="form-row-5">
          <form action="/register" method="POST">
              <div class="form-row form-row-text ">
                  <div class="label-name">Username:</div> 
                  <input class="input-text" type="text" name="username" />
              </div>
              <p>{showPw}</p>
              <div class="form-row form-row-text">
                  <div class="label-name">Password:</div> 
                  <input class="input-text" id="current-password" type={showPw} name="password" /> <input type="checkbox" defaultChecked={this.state.complete} onChange={e => this.handleChange(e)}/>
              </div>
              <div class="form-row form-button">
                  <input class="button-submit" type="submit" value="Get Started"/>
              </div>
          </form>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Register;
