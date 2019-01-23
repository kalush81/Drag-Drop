console.log('test dziala');

// function drag(e) {
//     e.dataTransfer.setData("text", e.target.id);
// };
// function drop(e) {
//     e.preventDefault();
//     var data = e.dataTransfer.getData("text");
//     e.target.appendChild(document.getElementById(data));
// };
// function allowDrop(e) {
//     e.preventDefault();
// };

const divs = document.querySelectorAll('.container-left div');
console.log(Array.from(divs));


divs.forEach(function (el) {
    el.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text', e.target.id);
    })
})

const dropOnMe = document.querySelectorAll('.container-drop');
console.log(dropOnMe);

dropOnMe.forEach(function (el) {
    el.addEventListener('dragover', function (e) {
        e.preventDefault();
    })
})


dropOnMe.forEach(function (el) {
    el.addEventListener('drop', function (e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
    })
})

