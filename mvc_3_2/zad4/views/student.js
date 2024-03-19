function renderPage(data) {
    const { studentCode, firstName, lastName, gender, age, studyField } = data;
    return `
    <htmllang =”pl”>
        <head>
            <metacharset="UTF-8">
            <metaname="viewport"content="width=device-width, initial-scale=1.0">
            <title>student</title>
            <body>
                <h1>Student Profile</h1>
            <p>Student Code: ${studentCode}</p>
            <p>First Name: ${firstName}</p>
            <p>Last Name: ${lastName}</p>
            <p>Gender: ${gender}</p>
            <p>Age: ${age}</p>
            <p>Study Field: ${studyField}</p>
            </body>
        </head>
     </html >
    `
}

module.exports = renderPage;