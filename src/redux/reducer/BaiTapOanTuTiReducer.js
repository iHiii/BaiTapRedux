const stateDefault = {
  mangDatCuoc: [
    { ma: "bao", hinhAnh: "./img/gameOanTuTi/bao.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/gameOanTuTi/bua.png", datCuoc: true },
    { ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png", datCuoc: false },
  ],

  ketQua: "Love you 3000",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "bao", hinhAnh: "./img/gameOanTuTi/bao.png" },
};

export const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });

      let index = mangCuocUpdate.findIndex((qc) => qc.ma === action.maCuoc);
      if (index !== -1) {
        mangCuocUpdate[index].datCuoc = true;
      }

      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

      state.computer = quanCuocNgauNhien;

      return { ...state };
    }

    case "END_GAME":
      {
        let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
        let computer = state.computer;
        switch (player.ma) {
          case "keo":
            if (computer.ma === "keo") {
              state.ketQua = "hòa nhau!";
            } else if (computer === "bua") {
              state.ketQua = "bạn đã bị vã!";
            } else {
              state.ketQua = "Winner!!!";
              state.soBanThang +=1
            }
            break;
          case "bua":
            if (computer.ma === "keo") {
              state.ketQua = "Winner!";
              state.soBanThang +=1
            } else if (computer === "bao") {
              state.ketQua = "bạn đã bị vã!";
            } else {
              state.ketQua = "hòa nhau!";
            }
            break;
          case "bao":
            if (computer.ma === "keo") {
              state.ketQua = "bạn đã bị vã";
            } else if (computer === "bua") {
              state.ketQua = "Winner";
              state.soBanThang +=1
            } else {
              state.ketQua = "bạn đã bị vã!";
            }
            break;
          default:
            state.ketQua = "Winner";
            state.soBanThang +=1
        }
      }
      state.soBanChoi += 1;
      return { ...state };
    default:
      return { ...state };
  }
};
