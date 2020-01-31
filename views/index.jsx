var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    // let listOfDreams = this.props.data.map(item => {
    //   return <li>{item.name}</li>
    // });
    return (
      <Layout>
        <h1>YOUR DREAMS</h1>
        {/* {listOfDreams} */}
        <div class="dreams-card">
          <div class="dreams-card-category">
            {this.props.category}
          </div>
          <div class="dreams-card-information">
            Title: {this.props.name}<br />
            {this.props.description}<br/>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
