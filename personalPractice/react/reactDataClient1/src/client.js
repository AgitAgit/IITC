
function getCustomers() {
    return fetch("http://localhost:3000/api/data/customer", {
        method: 'GET'
    });
}
