var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <h1>{this.props.name}</h1>
        {this.props.username}
      </Layout>
    );
  }
}

module.exports = Home;
