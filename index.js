function myFunc() {
    let input=document.getElementById("input1").value

    if (input>18) {
        console.log("Salam Xos gelmisiz");
        document.getElementById("h1").innerHTML="Salam Xos Gelmisiniz"
    }
    else if (input==18) {
        console.log("Salam Hmmmmm");
        document.getElementById("h1").innerHTML="Salam Hmmmm"
    }
    else if (input<18) {
        console.log("Salam Giris Qadagandir");
        document.getElementById("h1").innerHTML="Salam Giris Qadagandir"
    }
    else{
        console.log("!!!");
        document.getElementById("h1").innerHTML="!!!"
    }
}