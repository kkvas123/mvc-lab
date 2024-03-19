
function renderPage() {
    return `
    <htmllang =”pl”>
        <head>
            <metacharset="UTF-8">
            <metaname="viewport"content="width=device-width, initial-scale=1.0">
            <title>home</title>
            <body>
                <form action="/submit-form" method="POST">
                <div>
                    <label for="firstName">Imiê:</label>
                    <input type="text" id="firstName" name="firstName">
                </div>
                <div>
                    <label for="lastName">Nazwisko:</label>
                    <input type="text" id="lastName" name="lastName">
                </div>
                <div>
                    <label for="age">Wiek:</label>
                    <input type="number" id="age" name="age">
                </div>
                <div>
                    <label for="gender">P³eæ:</label>
                    <select id="gender" name="gender">
                        <option value="male">Mê¿czyzna</option>
                        <option value="female">Kobieta</option>
                        <option value="other">Inna</option>
                    </select>
                </div>
                <div>
                    <label for="studentId">Numer albumu:</label>
                    <input type="number" id="studentId" name="studentId">
                </div>
                <div>
                    <label for="studyField">Kierunek:</label>
                    <input type="text" id="studyField" name="studyField">
                </div>
                <button type="submit">Wyœlij</button>
            </form>
            </body>
        </head>
     </html >
    `
}

module.exports = renderPage;