var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    let dreamsUrl = "/dreams/"+this.props.name;
    return (
      <Layout>
        <h1>ADD A DREAM</h1>
        <form action="/add" autocomplete="off" method="POST">
            <input type="text" name="id" value= {this.props.id} />
            <div class="form-row form-row-title-highlight">
                <div class="label-name">Title of Dream:</div> 
                <input class="input-text" type="text" name="title" placeholder="Yellow Jeans 👖" />
            </div>
            <div class="form-row">
                <div class="label-name">Visibility:</div> 
                <label>
                    <input type="radio" name="private" value="true" checked/> Private 
                </label>
                <label>
                    <input type="radio" name="private" value="false" /> Public 
                </label>
            </div>
            <div class="form-row">
                <div class="label-name">Dream Theme:</div> 
                <label>
                    <input type="checkbox" name="category" value="angry" /> Angry  
                </label>
                <input type="checkbox" name="category" value="happy" /> Happy  <input type="checkbox" name="category" value="worried" /> Worried  <input type="checkbox" name="category" value="confused" /> Confused
            </div>
            <div class="form-row">
                <div class="label-name">Description of Dream:</div> 
                <textarea name="description"> </textarea>
            </div>
            <div class="form-row form-button">
                <input class="button-submit" type="submit" />
            </div>
        </form>
      </Layout>
    );
  }
}

module.exports = Home;
