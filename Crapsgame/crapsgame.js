
const crapsUsernameInput = "craps-username-input"
const crapsGameRegistrationPane = "craps-game-registration-pane"
const crapsMainSection = "craps-main-section"


function RegisterCrapsPlayer() {
       let crapsUsername = document.getElementById(crapsUsernameInput).value
       alert("Welcome to the Craps Game, " + crapsUsername + "! You can now play the game.")
       RemoveRegistrationPane()
    }

    function RemoveRegistrationPane() {
        document.getElementById("craps-game-registration-pane").style.display = "none"
        ShowGameMainSection()

    }

    function ShowGameMainSection() {
        document.getElementById("craps-main-section").style.display = "block"
    }
