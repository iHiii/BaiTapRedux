import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            className="mt-3"
            style={{ width: 75, height: 75 }}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt="."
          />
        </div>
        <div className="speech-blue"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="./img/gameOanTuTi/player.png"
          alt="ironman"
        />

        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};

            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }

            return (
              <div className="col-4" key={index}>
                <button
                  onClick={() => {this.props.datCuoc(item.ma)}}
                  style={border}
                  className="btn btnItem bg-white"
                >
                  <img
                    style={{ width: 35, height: 35 }}
                    src={item.hinhAnh}
                    alt="."
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      const action = {
        type: "DAT_CUOC",
        maCuoc,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
