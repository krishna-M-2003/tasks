// const productContainers = [...document.querySelectorAll('.product-container')];
//     const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
//     const preBtn = [...document.querySelectorAll('.pre-btn')];

// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     preBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })

// })

// let count = 0;
// document.getElementById("decreaseBtn").onclick = function () {
//     count -= 1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function () {
//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// //setting increment input value
// document.getElementById("quantity").value = valueCount
// if (valueCount == 1) {
//     document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
// }
// //calling price function
// priceTotal()

// This button will increment the value
$('.qtyplus').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get input element details
    var whichElement = `input[name=${fieldName}]`;
    var element = $(whichElement);
    var elementValue = element.val();
    var parsedValue = parseInt(elementValue);
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
        // Increment
        $('input[name=' + fieldName + ']').val(currentVal + 1);
        var latestValue = parseInt($('input[name=' + fieldName + ']').val());
    } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
    }
    if (latestValue > 0) {
        $("#price").html(latestValue * 230);
    }
    else {
        $("#price").html(230);
    }
});

// This button will decrement the value till 0
$(".qtyminus").click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $('input[name=' + fieldName + ']').val(currentVal - 1);
        var latestValue = parseInt($('input[name=' + fieldName + ']').val());
    } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
    }
    if (latestValue > 0) {
        $("#price").html(latestValue * 230);
    }
    else {
        $("#price").html(230);
    }
});

