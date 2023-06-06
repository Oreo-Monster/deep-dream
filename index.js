let global_img;

$(document).ready(function () {
    console.log("Page loaded");
    $("input").on('change', async function(){
        console.log('change!');
        let test = await openImage(this.files[0]);
        console.log(test.shape)
        console.log(test);
        console.log("opened");
    });
});

async function openImage(file) {

    if (!file.type.startsWith("image/")) {
    return;
    }

    img = new Image();
    //img.crossOrigin = 'anonymous';
    img.file = file;
    $(".preview").append(img); // Assuming that "preview" is the div output where the content will be displayed.

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => { //Wait for the reader to finish
    img.src = e.target.result;
    };
    
    await (new Promise(resolve => {
        img.onload = () => { //Wait for image to load
        resolve();};
    }));
    
    let img_tf = await tf.browser.fromPixelsAsync(img);
    return img_tf;
}
  


async function getImg(src) {
    console.log('Hello');
    var img = new Image();
    img.src = src;
    await img.decode();
    return img;
}



async function run() {



    // img = await getImg('./img/dog.jpg');
    // console.log(img);
    // try {
    //     var img_tf = tf.browser.fromPixels(img);
    //     img_tf.print() 
    // } catch (error) {
    //     console.log(error)
    // }
    
}


