var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    let loggedIn = this.props.loggedIn;
    const id = this.props.artists.id;
    const actionUrl = "/dreams/"+id+"?_method=put";
    return (
      <Layout loggedIn={loggedIn}>
        <h1>EDIT DREAM, {this.props.title}</h1>
        The key to getting the most from this app lies in integrating it into your daily routine. Once you get used to recording your dreams, not only will the act of writing them down get easier but the ease with which you remember them will improve too. The more you look, the more you see.
        <form action={actionUrl} autocomplete="off" method="POST">
            <div class="form-row">
                <div class="label-name">Visibility:</div> 
                <select>
                    <option name="private" value="true">Private</option>
                    <option name="private" value="false">Public</option>
                </select>
            </div>
            <div class="form-row form-row-text">
                <div class="label-name">Title of Dream:</div> 
                <input class="input-text" value={this.props.dreams.title} type="text" name="title" />
            </div>
            <div class="form-row">
                <div class="label-name">Feelings:</div> 
                <input type="radio" id="angry" name="category" value="angry" />  
                <label for="angry" class="feelings-label"> </label>
                <input type="radio" id="happy" name="category" value="happy" />  
                <label for="happy" class="feelings-label"> </label>
                <input type="radio" id="peaceful" name="category" value="peaceful" />
                <label for="peaceful" class="feelings-label"> </label>
                <input type="radio" id="worried" name="category" value="worried" />
                <label for="worried" class="feelings-label"> </label>
                <input type="radio" id="scared" name="category" value="scared" />
                <label for="scared" class="feelings-label"> </label>
            </div>
            <div class="form-row">
                <div class="label-name">The Story:</div> 
                <textarea name="description" value={this.props.description} rows="4" cols="50"> </textarea>
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
