import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Work from "../pages/Work/Work";
import Footer from "../Footer/Footer"

class Container extends Component {
    state = {
        currentPage: "Home"
    };

    changeEl = page => {
        this.setState({ currentPage: page });
    };

    changePage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "About") {
            return <About />;
        } else {
        return <Work />;
        }
    };

    render() {
        return (
            <div>
                <Nav
                    currentPage={this.state.currentPage}
                    changeEl={this.changeEl}
                />
                {this.changePage()}

                <Footer />
            </div>
        );
    }
}

export default Container;