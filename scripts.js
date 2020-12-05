// ​
// const stringOrNull = (newValue, oldValue) => {
//   return (newValue === undefined) ?
//       ( (oldValue === null) ? null : oldValue ) :
//       ( (newValue === null) ? null : newValue ) ;
// }
// ​
// app.put("/customers/:customerId", function (req, res) {
// const customerId = req.params.customerId;
// const {name,email,address,city,postcode,country} = req.body;
// // get current customer values
// pool
//   .query("SELECT * FROM customers WHERE id=$1", [customerId])
//   .then((result) => {
//       if (result.rowCount !== 1) {
//           res.status(400).send(`No customer with id ${customerId}`)
//       }
//       const customer = result.rows[0];
//       const query = 'UPDATE customers SET name=$2,email=$3,address=$4,city=$5,postcode=$6,country=$7 WHERE id=$1';
//       pool
//           .query(query, [
//               customer.id,
//               stringOrNull(name, customer.name),
//               stringOrNull(email, customer.email),
//               stringOrNull(address, customer.address),
//               stringOrNull(city, customer.city),
//               stringOrNull(postcode, customer.postcode),
//               stringOrNull(country, customer.country)
//           ])
//           .then((result) => {
//               if (result.rowCount !== 1) {
//                   res.status(400).send(`No customer with id ${customerId}`)
//               }
//               res.send(`Customer ${customerId} updated!`)
//           })
//           .catch((e) => console.error(e));
//   })
//   .catch((e) => console.error(e));
// });