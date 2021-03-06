


let makeHTML = (newEmployee) => {
return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Team Profile Generator</title>

</head>

<body>
    <header>
        <div class="container">
            <div class="row-12 m-4">
                <h1>TEAM PROFILE GENERATOR</h1>
            </div>
        </div>

    </header>
    <style>
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
        }
    </style>
    <main>
        <div class="container">

            <div class="row" id="cardrow">
                <div class="col manager">
                    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header">${newEmployee[0].name}</div>
                        <div class="card-body">
                            <h5 class="card-title" id="${newEmployee[0].key}">Manager</h5>
                            <p class="card-text">ID: ${newEmployee[0].id}</p>
                            <p class="card-text"><a href="mailto:${newEmployee[0].email}">Email:  ${newEmployee[0].email}</a>
                            <p class="card-text">Office Number: ${newEmployee[0].officeNumber}</p>
                        </div>
                    </div>
                </div>
                <div class="col engineer" id="${newEmployee[1].name}">
                    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
                        <div class="card-header">${newEmployee[1].name}</div>
                        <div class="card-body">
                            <h5 class="card-title" id="${newEmployee[0].key}">Engineer</h5>
                            <p class="card-text">ID: ${newEmployee[1].id}</p>
                            <p class="card-text"><a href="mailto:${newEmployee[1].email}">Email:  ${newEmployee[1].email}</a></p>
                            <p class="card-text"><a href="https://www.github.com/${newEmployee[1].github}">GitHub: ${newEmployee[1].github}</a></p>
                        </div>
                    </div>
                </div>
                <div class="col" id="${newEmployee[2].name}">
                    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
                        <div class="card-header">${newEmployee[2].name}</div>
                        <div class="card-body">
                            <h5 class="card-title" id="${newEmployee[0].key}">Engineer</h5>
                            <p class="card-text">ID: ${newEmployee[2].id}</p>
                            <p class="card-text"><a href="mailto:${newEmployee[2].email}">Email: ${newEmployee[2].email}</a></p>
                            <p class="card-text"><a href="https://www.github.com/${newEmployee[2].github}">GitHub: ${newEmployee[2].github}</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="cardrow">
                <div class="col intern" id="${newEmployee[3].name}">
                    <div class="card text-dark bg-warning mb-3" style="max-width: 18rem;">
                        <div class="card-header">${newEmployee[3].name}</div>
                        <div class="card-body">
                            <h5 class="card-title" id="${newEmployee[0].key}">Intern</h5>
                            <p class="card-text">ID: ${newEmployee[3].id}</p>
                            <p class="card-text"><a href="mailto:${newEmployee[3].email}">Email: ${newEmployee[3].email}</a></p>
                            <p class="card-text">School Name: ${newEmployee[3].school}</p>
                        </div>
                    </div>
                </div>
            </div>
    </main>

    <script>


    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="./assets/js/script.js"></script>
</body>

</html>
`
}

module.exports = makeHTML