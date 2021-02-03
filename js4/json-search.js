let button = document.getElementById("submitButton");
let results = document.getElementById("results");
button.onclick = validate;

//This function verifies the name input is not empty
function validate()
{
    //Get name input value, Clear results div content
    let name = document.getElementById("name").value.toLowerCase();
    results.innerHTML = "";

    //If name is not empty, call search, otherwise show error message
    name !== "" ? search(name) : results.innerHTML = "<h4 class='text-danger'>Please enter a name</h4>";
}

//This function prints out the properties of the person object parameter
function print(person)
{
    //For every key-value pair entry in the person object
    for(let [key, value] of Object.entries(person))
    {
        //Add the key value pair values to the results element
        results.innerHTML += key + ": " + value + "<br>";
    }
    //Add space between person elements
    results.innerHTML += "<br>";
}

//This function searches 'persons' for the name parameter
function search(name)
{
    let found = false;

    //Loop over all people objects, look for name match
    for(let i = 0; i < people.length; i++)
    {
        //If names match, call print
        if(people[i].Name.toLowerCase().includes(name))
        {
            print(people[i]);
            found = true;
        }
    }
    //If no match is found, print error msg
    if(!found)
    {
        results.innerHTML = "<h4>No person found.</h4>"
    }
}

//This is a JSON format object containing people objects and their properties
let people = [
    {
        "Name" : "Jimmy Hendricks",
        "Sex" : "m",
        "Born" : "1942",
        "Died" : "1970",
        "Father" : "James Hendricks",
        "Mother" : "Lucille Jeter"
    },

    {
        "Name" : "Ronny James Padavona (Dio)",
        "Sex" : "m",
        "Born" : "1942",
        "Died" : "1910",
        "Father" : "Pat Padavona",
        "Mother" : "Anna Padavona"
    },

    {
        "Name" : "Farrokh Bulsara (Freddie Mercury)",
        "Sex" : "m",
        "Born" : "1946",
        "Died" : "1991",
        "Father" : "Bomi Bulsara",
        "Mother" : "Jer Bulsara"
    },

    {
        "Name" : "Jane Doe",
        "Sex" : "f",
        "Born" : "1876",
        "Died" : "1959",
        "Father" : "Petreus de Milliano",
        "Mother" : "Sophia van Damme"
    },

    {
        "Name" : "Jane Ramirez",
        "Sex" : "f",
        "Born" : "1102",
        "Died" : "--",
        "Father" : "Themistocles Merovech",
        "Mother" : "Amara Floros"
    }
];