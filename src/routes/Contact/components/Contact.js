import React from 'react'

/*
Create a contact page that only contain your own contact details; name, phone
and email. Don’t bother with the styling of the page the important thing is that it
is a separate page and that you can access it through the menu.
*/

export const Contact = (props) => (
  
  <div>
  <h1>Contact</h1>
  <table className="table table-striped">
    <tr>
      <td><b>Name</b></td>
      <td>Aldo Jiménez Vega</td>
      </tr>
    <tr>
      <td><b>Phone</b></td>
      <td>+52 1 55 40 20 19 21</td>
      </tr>

    <tr>
      <td><b>Email</b></td>
      <td>jimenez.aldo45@gmail.com</td>
      </tr>

  </table>
  </div>
)


export default Contact
