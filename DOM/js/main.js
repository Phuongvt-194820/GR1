const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btnUpdate = document.getElementById("choose-avatar-button");
const btnsub = document.querySelector("#btnupdate");
const btncheck = document.querySelector("#my-form button[type='submit']");
const btnup = document.querySelector("#btnup");
const btnhref = document.querySelector("#btnhref");
const myForm = document.querySelector(".myForm");
const myInfor = document.querySelector(".myInfor");
const myInputSelect = myForm.querySelectorAll("input, select");
const myInput = myForm.querySelectorAll("input");
const mySelect = myForm.querySelectorAll("select");
//const btnForm= document.querySelector("#showForm");
const btnOK = document.querySelector("#btnOK");
const btnEditForm = document.querySelector("#checkbox");
const btnClick = document.querySelector(".btn-form");
const inputfile = document.querySelector("#inputfile");
const myAvatar = document.querySelector("#myAvatar");
const rightContent = document.querySelector("#right-content")
const mybtnRights = rightContent.querySelectorAll("button")
const myInforField = document.querySelector('.infor-detail-field')
const btnAddfields = document.querySelectorAll('.add')
const btnAddGrs = document.querySelectorAll('.addGr')
const Form = document.querySelector('#my-form')
const labelGrs = document.querySelector('.labelGr')
const btndels = document.querySelectorAll('.del')
const exportPDF = document.querySelector('.pdf')
const body = document.body

mybtnRights.forEach(function(mybtnRight){
    mybtnRight.addEventListener('click', function(event){
        event.preventDefault()
    })
})

btnAddfields.forEach(function(btnAddfield){
    btnAddfield.addEventListener('click', function(event){
        event.preventDefault()
        CreateField(btnAddfield)
    })
})

function CreateField(btnAddfield){
    var newField = document.createElement('div')
    newField.className='field'
    newField.innerHTML= '<label><input type="text" value="Item Info Name &emsp;: " class="fieldname"></label><span class="input"><input type="text" class= "fieldnameInput"><div class="rebin"><button><img src="../assets/icon/rebin.png"></button></div></span><br>'
    var parent = btnAddfield.parentElement
    var divParent = parent.closest('div').querySelector('.col1-infor')
    divParent.appendChild(newField) 
    var fieldname = newField.querySelector('.fieldname')
    var fieldnameInput = newField.querySelector('.fieldnameInput')
    var rebin = newField.querySelector('.rebin')
    hiddenFieldInput(fieldname, fieldnameInput)
    rebin.addEventListener('click', function(){
        newField.remove()
    })
}

function CreateGroup(){
    var newGroup = document.createElement('div')
    newGroup.className='newGroup'
    newGroup.innerHTML= 
                            '<span class="labelGr"><input type="text" value="Group Item_20194820" class="inputLabelGr"></span><span class="listadd"><span><button class="del"><img src="../assets/icon/rebin.png"></button><button class="add">< Add Info Item ></Add></button></span><span><button class="addGr">< Add Group Item ></Add></button></span></span>'+
                            '<hr>'+
                            '<div class="col1-infor">'+
                            '</div>'
    
    Form.appendChild(newGroup)
    DeleteGroup(newGroup.querySelector('.del'))
    hiddenInput(newGroup.querySelector('.labelGr'))
    addEventforBtn(newGroup)
}

function addEventforBtn(newGroup){
    var newbtnAddField = newGroup.querySelector('.add')
    newbtnAddField.addEventListener('click',function(event){
        event.preventDefault()
        CreateField(newbtnAddField)
    })
    var newbtnAddGroup = newGroup.querySelector('.addGr')
    newbtnAddGroup.addEventListener('click',function(event){
        event.preventDefault()
        CreateGroup()
    })
}

btnAddGrs.forEach(function(btnAddGr){
    btnAddGr.addEventListener('click', function(event){
        event.preventDefault()
        CreateGroup()
    })
})

function DeleteGroup(btndel){
    btndel.addEventListener('click', function(event){
        event.preventDefault()
        var parent = btndel.closest('div')
        let fieldInput = parent.querySelector('.inputLabelGr')
        let promptMess = prompt("Bạn có chắc muốn xóa trường "+ fieldInput.value, 'Vũ Thị Phượng 20194820')
        if(promptMess!=null){
            parent.remove()
        }
    })
}

if(btn1){
    btn1.addEventListener('click', function(){
        var content = document.getElementById("left-content");
        if(content.classList.contains("open")){
            content.classList.remove("open")
        }else{
            content.classList.add("open")
        }
    })
}

if(btn2){
    btn2.addEventListener('click', function(){
        var nav = document.getElementById("nav");
        if(nav.classList.contains("open")){
            nav.classList.remove("open")
        }else{
            nav.classList.add("open")
        }
    })
}


function hiddenInput(labelGrs){
    var input = labelGrs.querySelector('.inputLabelGr')
    input.disabled = true;
    labelGrs.addEventListener('dblclick', function(){
        if(input.disabled){
            input.disabled = false
        }
    })
    input.addEventListener('keypress', function(event){
        if(event.key == 'Enter'){
            event.preventDefault()
            input.value += '_20194820'
            input.disabled = true
        }
    })

}

function hiddenFieldInput(input, fieldnameInput){
    input.disabled = true;
    fieldnameInput.disabled = true
    input.parentElement.addEventListener('dblclick', function(){
        if(input.disabled){
            input.disabled = false
        }
    })
    fieldnameInput.parentElement.addEventListener('dblclick', function(){
        if(fieldnameInput.disabled){
            fieldnameInput.disabled = false
        }
    })
    input.addEventListener('keypress', function(event){
        if(event.key == 'Enter'){
            event.preventDefault()
            input.disabled = true
        }
    })
    fieldnameInput.addEventListener('keypress', function(event){
        if(event.key == 'Enter'){
            event.preventDefault()
            fieldnameInput.disabled = true
        }
    })

}

$(exportPDF).click( function () {
    html2canvas($(Form), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("Information.pdf");
        }
    });
});