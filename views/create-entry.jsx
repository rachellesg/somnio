var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    let dreamsUrl = "/dreams/"+this.props.name;
    return (
      <Layout>
        <h1>ADD A DREAM</h1>
        <form action="/add-dreams" method="POST">
            <input type="text" name="id" value="1" />
            <div class="form-row">
                <span class="label-name">Title of Dream:</span> 
                <input class="input-text" type="text" name="title" />
            </div>
            <div class="form-row">
                <span class="label-name">Description of Dream:</span> 
                <textarea name="description"> </textarea>
            </div>
            <div class="form-row">
                <span class="label-name">Visibility:</span> 
                <input type="radio" name="private" value="true" /> Private 
                <input type="radio" name="private" value="false" /> Public 
            </div>
            <div class="form-row">
                <span class="label-name">Category:</span> 
                <input type="checkbox" name="category" value="angry" /> Angry  <input type="checkbox" name="category" value="happy" /> Happy  <input type="checkbox" name="category" value="worried" /> Worried  <input type="checkbox" name="category" value="confused" /> Confused
            </div>
            <input class="button-submit" type="submit" />
        </form>
      </Layout>
    );
  }
}

module.exports = Home;
