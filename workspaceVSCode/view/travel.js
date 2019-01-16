var folder = new File("./image");
folder.open("r");
folder.forEach(element => {
    console.log(element);
});