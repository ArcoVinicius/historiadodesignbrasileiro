var i = 0;
for (i = 0; i < data.length; i++) {
     var node = document.createElement("li");
     var h4Node = document.createElement("h4");
     var imageNode = document.createElement("div");
     node.setAttribute("class", "cell");
     h4Node.setAttribute("image", "year");
     h4Node.innerHTML = data[i].time;
     imageNode.setAttribute("class", "image");
     imageNode.style.backgroundImage = data[i].image;
     //var textNode = document.createText(data[1].time)
     node.appendChild(h4Node);
     node.appendChild(imageNode);
     document.getElementById("timeline").appendChild(node);
}


//Get the modal
var modal = document.getElementsByClassName("modal")[0];   
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//Get the image to open the modal
var btn = document.querySelectorAll('.image');
//loop the array and select the clicked image
btn.forEach(function(element, index){
    element.addEventListener("click", function(){
        //window,alert(index);
        modal.style.display = "block";
        document.getElementById('modalHeader').innerHTML = data[index].title;
        document.getElementById('modalDate').innerHTML = data[index].time; 
        document.getElementById('modalImage').style.backgroundImage = data[index].image;
        document.getElementById('modalText').innerHTML = data[index].text;
        
    });
});
span.onclick = function() {
    modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

