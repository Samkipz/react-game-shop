import React, { Component } from "react";
import { connect } from "react-redux";
import { createGame } from "../../actions/games";

import './AddGame.scss'

class AddGame extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveGame = this.saveGame.bind(this);
        this.newGame = this.newGame.bind(this);

        this.state = {
            id: null,
            name: "",
            description: "",
            // published: false,

            // submitted: false,
        };
    }

    onChangeName(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }

    saveTutorial() {
        const { name, description } = this.state;

        this.props
            .createGame(name, description)
            .then((data) => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    // published: data.published,

                    // submitted: true,
                });
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newTutorial() {
        this.setState({
            id: null,
            name: "",
            description: "",
            // published: false,

            // submitted: false,
        });
    }

    render() {
        return (
            <>

                <div className="container">
                    <form action="/action_page.php">
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">First Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="lname">Last Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="country">Country</label>
                            </div>
                            <div className="col-75">
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="subject">Subject</label>
                            </div>
                            <div className="col-75">
                                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>

            </>
        );
    }
}

export default connect(null, { createGame })(AddGame);