const ArrowConstructor = () => {
    console.log(this);
}
const NormalConstructor = function () {
    console.log(this);
};

let normal_object = new NormalConstructor();
let arrow_object = new ArrowConstructor();