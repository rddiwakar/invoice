import React from "react";

import "./sidebar.css";

class SideBar extends React.Component {
    constructor() {
        super();
        this.state = {sideBarClose: true}
    }

    handleToggle = () => {
        this.setState({
            sideBarClose: !this.state.sideBarClose
        })

        console.log(this.state.sideBarClose);
    }

    render() {
        return (
            <>
             <p className="toggle" onClick={this.handleToggle}>
                    <span>{`<>`}</span>
             </p>
            <aside className="sidebar" style={{left: `${this.state.sideBarClose ? "-300px" : "0px"}`}}>
                <ul>
                    <li>Rahul</li>
                    <li>Swastik</li>
                    <li>Diwakar</li>
                    <li>Yadav</li>
                </ul>
            </aside>
            </>
        );
    };
}

export default SideBar;