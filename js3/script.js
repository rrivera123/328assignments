/**
 * This file is used with index.html which will loop over user a entered number of times,
 * displaying "Hee". "Haw", "HeeHaw", or the number depending on weather current number
 * is evenly divisible by 3, 5, both, or not.
 * @author Ryan Rivera
 * @version 1.0
 * @type {HTMLBodyElement}
 */

//Add on-click event to submit button
document.getElementById("submit").onclick = function()
{
    //Retrieve input field value, pass as argument to heehaw() function
    let number = document.getElementById("number").value;
    heehaw(number);
}

//Function that takes a positive integer argument
function heehaw(num)
{
    //Select the results div element
    let results = document.getElementById("results");
    //clear it's contents
    results.innerHTML = "";

    //Verify num > 0 and is a number
    if(!isNaN(num) && parseInt(num) > 0 && num % 1 === 0)
    {
        let hee = 3, haw = 5;

        //Loop num times starting from 1
        for(let i = 1; i <= num; i++)
        {
            //If 'i' is divisible by 3, 5, both, or not, display appropriate msg
            if(i % hee === 0 && i % haw === 0)
            {
                results.innerHTML += "<p>Hee Haw!</p>";
            }
            else if(i % hee === 0)
            {
                results.innerHTML += "<p>Hee!</p>";
            }
            else if(i % haw === 0)
            {
                results.innerHTML += "<p>Haw!</p>";
            }
            else{
                results.innerHTML += "<p>"+i+"</p>";
            }
        }
    }
    //Else, num is either NaN, is not positive, or is not a integer
    else
    {
        results.innerHTML += "<p class='text-danger'>Positive integer is Required</p>"
    }
}