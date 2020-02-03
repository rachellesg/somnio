const React = require("react");
// const Footer = require("./footer");
// const Navbar = require("./nav");

class Layout extends React.Component {
    render() {
        const loggedIn = this.props.loggedIn;
        console.log("detect logged in", loggedIn)
        let navBar;
        if (loggedIn == true) {
            console.log("layout, if true");
            let viewDreamsUrl = "/dreams";
            let viewDreamsButton = <a href={viewDreamsUrl}>All Dreams</a>;
            let addDreamUrl = "/dreams/add";
            let addDreamButton = <a href={addDreamUrl}>Add Dream ++</a>;
            let logOutUrl = "/logout";
            let logOutButton = <a href={logOutUrl}>Log Out</a>;
            navBar = <span> {viewDreamsButton} | {addDreamButton} | {logOutButton}</span>;
        } else {
            console.log("layout, if false")
            let registerUrl = "/register";
            let registerButton = <a href={registerUrl}>Register</a>;
            let logInUrl = "/logout";
            let logInButton = <a href={logInUrl}>Log In</a>;
            navBar = <span>{registerButton} | {logInButton}</span>;
        }
        return (
            <html>
                <head>
                    <title>somniō</title>
                    <link rel="stylesheet" href="/style.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
                </head>
                <body>
                    <div class="container main">
                        <div class="nav">
                            <div class="logo">
                                <span class="logo-text">
                                    <a href="/">somniō</a>
                                </span>
                            </div>
                            <div class="create_dream">
                                {navBar}
                            </div>
                        </div>
                        <div class="content">
                            {this.props.children}
                        </div>
                        <footer>
                            &copy; Rachelle // somniō 2020
                        </footer>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Layout;