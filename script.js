const qrForm = document.getElementById("qrform");
const qrimage = document.getElementById("qrimg");
const qrcontainer = document.getElementById("qr-container");
const qrinputxt = document.getElementById("qrinputxt");
const genbtn = document.getElementById("genbtn");

const renderQR = (url) =>{
    if(!url) return ;
    genbtn.innerText = "Generating QR Code...";
    qrimage.src = url;
    // qrcontainer.classList.add("show");

    const onimgload = () =>{
        const interval = setInterval(() => {
            qrcontainer.classList.add("show");
            clearInterval(interval);
            genbtn.innerText = "Generate QR Code";
        }, 500);
    }



    qrimage.addEventListener("load" , onimgload);


};
qrForm.addEventListener("submit" , (event) =>{
    event.preventDefault();
    
    const formData = new FormData(qrForm);

    const text = formData.get("qrtxt");
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}` ;

    renderQR(qrCodeURL);

});


qrinputxt.addEventListener("keyup" , ()=>{
    if(!qrinputxt.value.trim()){
        qrcontainer.classList.remove("show");
    }
});