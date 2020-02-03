var React = require("react");
const Layout = require("./layout");

class error extends React.Component {
  render() {
    let loggedIn = this.props.loggedIn;
    return (
      <Layout loggedIn={loggedIn}>
        <h1>404 ERROR </h1>
        Silly {this.props.currentuser}! You must've accidentally stumbled upon this page!
      </Layout>
    );
  }
}

module.exports = error;
