// function toggleMe() {
//     var myImgages = document.getElementById("myToggle");
//     var change = myImgages.querySelectorAll("coming")
//     onclick(
//         function () {
//             change.classList.add("activeme")
//         }
//     )

// }
// function toggleMe() {
//     var myImages = document.getElementById("myToggle");
//     var change = myImages.querySelectorAll("coming");
//     for (var i = 0; i < change.length; i++) {
//         change[i].onclick = function () {
//             this.classList.add("activeme");
//         };
//     }
// }
// function toggleMe() {
//     var myImages = document.getElementById("myToggle");
//     var change = myImages.querySelectorAll(".coming");
//     for (var i = 0; i < change.length; i++) {
//         change[i].onclick = function () {
//             this.classList.add("activeme");


//         };

//     }
// }

function toggleMe() {
    var myImages = document.getElementById("myToggle");
    var change = myImages.querySelectorAll(".coming");

    for (var i = 0; i < change.length; i++) {
        change[i].onclick = function () {

            for (var j = 0; j < change.length; j++) {
                if (change[j] != this) {
                    change[j].classList.remove("activeme");
                }
            }
                this.classList.add("activeme");
                this.style.transition = "all 0.5s"  
        };
    }
}



// function toggleMe() {
//     var myImages = document.getElementById("myToggle"); var change = myImages.querySelectorAll(".coming");

//     for (var i = 0; i < change.length; i++) {
//         change[i].onclick = function () {
//             if (this.classList.contains("activeme")) {
//                 this.classList.remove("activeme");
//             } else {
//                 this.classList.add("activeme");
//             }
//         };
//     }
// }
// function toggleMe() {
//     var myImages = document.getElementById("myToggle");
//     var comingImages = myImages.querySelectorAll(".coming");
//     comingImages.forEach(function (image) { image.classList.add("activeme"); });
// }

// $('.coming').click(function () {
//     var $this = $(this);
//     $this.closest(function(){

//         $('.coming').toggleClass('activeme');
//     });
// });