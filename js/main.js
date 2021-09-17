(function () {
  "use strict";

  let vm = new Vue({
    el: "#info",
    data: {
      num: "################",
      name: "#######",
      month: "Month",
      year: "Year",
      code: "",
      moveName: false,
      moveNum: false,
      moveLimit: false,
      moveNomal: true,
      // moveFront:true,
      // moveBack:false
      isFront: false,
      // isDisabled: true,
      // isNumError:true,
    },
    filters: {
      toFourfold(value) {
        let miniNum = [];
        for (let i = 0; i < value.length; i += 4) {
          miniNum.push(value.slice(i, i + 4));
        }
        let newNum = miniNum.join(" ");
        return newNum;
      },
    },
    methods: {
      squareMove(value) {
        switch (value) {
          case "Name":
            this.moveName = true;
            this.moveNum = false;
            this.moveLimitel = false;
            this.moveNomal = false;
            break;
          case "Num":
            this.moveName = false;
            this.moveNum = true;
            this.moveLimit = false;
            this.moveNomal = false;
            break;
          case "Limit":
            this.moveName = false;
            this.moveNum = false;
            this.moveLimit = true;
            this.moveNomal = false;
            break;
          // case 'Nomal':
          //   this.moveName = false;
          //   this.moveNum = false;
          //   this.moveLimit = false;
          //   this.moveNomal = true;
          //   break;
          default:
            this.moveName = false;
            this.moveNum = false;
            this.moveLimit = false;
            this.moveNomal = true;
            break;
        }
      },
      cardTurn() {
        this.isFront = !this.isFront;
      },
      // deleteNumber(){
      //   let inputForm = this.$refs.num;
      //   inputForm.value = "";
      // },
      // deleteName(){
      //   let inputForm = this.$refs.name;
      //   inputForm.value = "";
      // }
      deleteInput(colName) {
        let inputForm = null;
        switch (colName) {
          case "num":
            inputForm = this.$refs.num;
            break;
          case "name":
            inputForm = this.$refs.name;
            break;
          case "code":
            inputForm = this.$refs.code;
            break;
        }
        if (inputForm) inputForm.value = "";
      },
    },
    computed: {
      squarePlace() {
        return {
          squareName: this.moveName,
          squareNum: this.moveNum,
          squareLimit: this.moveLimit,
          squareNomal: this.moveNomal,
        };
      },
      isActive() {
        return (
          this.moveName || this.moveNum || this.moveLimit || this.moveNomal
        );
      },
      isNum() {
        // const num = this.num;
        // const isErr = num.length < 16 || isNaN(Number(num));
        // return isErr;
        // const numMessage = '16桁の半角数字で入力してください';
        // let numError = this.$refs.numError;
        // if (num.length < 16 || isNaN(Number(num))) {
        //   this.numError = "16桁の半角数字で入力してください";
        // typeof Number(this.num) === "number"
        // }
        const numer = this.num.length == 16 && !isNaN(Number(this.num));
        // console.log(numer);
        // console.log(this.num.length == 16,!isNaN(Number(this.num)));
        return numer;
       },
      isName() {
        const reg = new RegExp(/^[A-Z]*$/);
        // console.log(reg.test(this.name));
        return reg.test(this.name);

      },
      isCode() {
        const coder = this.code.length == 3 && !isNaN(Number(this.code));
        return coder;
      },
      buttonUse() {
        const cond =
        this.isNum && this.isName && this.isCode && this.month !== 'Month' && this.year !== 'Year';
        return cond;
      },
    },
  });
})();
