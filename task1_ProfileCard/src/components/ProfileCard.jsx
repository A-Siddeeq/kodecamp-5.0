import React from "react";

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <img src={this.props.image} />
          <section>
            <h1>{this.props.name}</h1>
            <p>{this.props.bio}</p>
          </section>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
