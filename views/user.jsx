var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    console.log(this.props.dreams.username);
    return (
      <Layout>
        <div class="user-profile">
          <div class="user-profile-top">
            <div class="user-profile-username">
              <h1>dreamer <span class="user-name">{this.props.dreams.username}</span></h1>
            </div>
            <div class="user-profile-follow">
              <div class="button-follow">+ Follow</div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
