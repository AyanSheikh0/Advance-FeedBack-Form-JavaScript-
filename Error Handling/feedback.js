let collectData = []

function collectMsg() {
    let fullname = document.getElementById("fullname").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let msg = document.getElementById("message").value


    document.getElementById("errorfullname").innerHTML = ""
    document.getElementById("fullname").style.border = ""

    document.getElementById("erroremail").innerHTML = ""
    document.getElementById("email").style.border = ""

    document.getElementById("errorsubject").innerHTML = ""
    document.getElementById("subject").style.border = ""

    document.getElementById("errormessage").innerHTML = ""
    document.getElementById("message").style.border = ""

    isvalid = true

    if (fullname === "") {
        document.getElementById("errorfullname").innerHTML = "This field is required"
        document.getElementById("fullname").style.border = "1px solid red"
        isvalid = false
    }

    if (email === "") {
        document.getElementById("erroremail").innerHTML = "This field is required"
        document.getElementById("email").style.border = "1px solid red"
        isvalid = false
    }

    if (subject === "") {
        document.getElementById("errorsubject").innerHTML = "This field is required"
        document.getElementById("subject").style.border = "1px solid red"
        isvalid = false
    }

    if (msg === "") {
        document.getElementById("errormessage").innerHTML = "This field is required"
        document.getElementById("message").style.border = "1px solid red"
        isvalid = false
    }

    if (isvalid) {
        let data = {
            name: fullname,
            mail: email,
            sub: subject,
            text: msg
        }

        collectData.push(data)
        console.log(collectData);

        document.getElementById("fullname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("subject").value = ""
        document.getElementById("message").value = ""
    }


}