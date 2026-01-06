const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
    console.log(e);
  insert.innerHTML = `
        <div class="color">
            <h2>Student Information:</h2>
            <br>
            <table border="1" >
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});
