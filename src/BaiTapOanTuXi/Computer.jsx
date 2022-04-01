import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
        0% {top: -50px}
        25% {top: 100px}
        50% {top: -50px}
        75% {top: 100px}
        100% {top: 0px}
    }`;

    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            className="mt-3"
            style={{
              width: 75,
              height: 75,
              position: "absolute",
              left: "30%",
              animation: `randomItem${Date.now()} 1s`,
            }}
            src={this.props.computer.hinhAnh}
            alt="."
          />
        </div>
        <div className="speech-blue"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="./img/gameOanTuTi/playerComputer.png"
          alt="thanos"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { computer: state.BaiTapOanTuTiReducer.computer };
};

export default connect(mapStateToProps)(Computer);
