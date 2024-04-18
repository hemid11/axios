
function addRow() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const contactTitle = document.getElementById('contacttitle').value;

    const tableBody = document.getElementById('booktableBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${tableBody.children.length + 1}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${contactTitle}</td>
    `;
    tableBody.appendChild(newRow);
}

axios.get('https://northwind.vercel.app/api/suppliers')
    .then(response => {
        const data = response.data;
        const tableBody = document.getElementById('booktableBody');
        
        data.forEach(supplier => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${supplier.id}</td>
                <td>${supplier.name}</td>
                <td>${supplier.contactName}</td>
                <td>${supplier.contactTitle}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
