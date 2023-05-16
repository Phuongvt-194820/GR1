var student ={
    fullname: 'Vũ Thị Phượng',
    year_start: '2019',
    department: 'KCSCL-TN-TT-VN-ICT',
    program: 'Công nghệ thông tin Global ICT',
    school: 'Trường Công nghệ thông tin và Truyền thông',
    status: 'Học',
    sex: 'Nữ',
    class: 'ICT-02-K64',
    school_year: 64,
    email: 'phuong.vt194820@sis.hust.edu.vn',
}

const edited = document.querySelectorAll('.edit_infor');
const myImg = document.getElementById('myImg');
const imgLoad = document.getElementById('loadImg');

var inputString = localStorage.getItem("inforArray");

var editedValue = Array.from(Object.values(JSON.parse(inputString)));

edited.forEach((input,index)=>{
    input.textContent = (editedValue && editedValue[index]);
});

console.log(editedValue);

function submitChange(){
    const inputs = document.querySelectorAll('.field-input');

    const inputValues = [];

    inputs.forEach((input,index)=>{
        if(input.value == ''){
            inputValues.push(editedValue[index]);
        }else{
            inputValues.push(input.value);
        }
    })
    localStorage.setItem('inforArray', JSON.stringify(inputValues));
    window.location.href='../html/index.html';
}

function reset(){
    localStorage.setItem("inforArray", JSON.stringify(student));
    localStorage.setItem('image','../assets/img/phuong.jpg');
    window.location.href = '../html/index.html';
}

var imgUrl = localStorage.getItem('image');
if(imgUrl){
    // myImg.src = "../assets/img/phuong.jpg";
    myImg.src = imgUrl;
}
function loadImage(event){
    var file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    imgLoad.src = imageUrl;
    localStorage.setItem('image', imageUrl);
}

function cancel(){
    localStorage.setItem('image', imgUrl);
    window.location.href = '../html/index.html';
}


// switch (student.sex) {
//     case "male":
//       document.getElementById("field-input-sex").innerHTML = "Nam";
//       break;
//     case "female":
//       document.getElementById("field-input-sex").innerHTML = "Nữ";
//       break;
// }

// document.querySelector(
//     'input[name="sex"][value="' + student.sex + '"]'
// ).checked = true;