let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let email = document.querySelector("#email");
var modal = document.querySelector("#myModal");
var add = document.querySelector("#add");
var btn = document.querySelector("#myBtn");
var span = document.getElementsByClassName("close")[0];
let cards = document.querySelector(".cards");
let card = document.createElement("div");
card.classList.add("card");
let deleteModal = document.querySelector("#deleteModal");
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `https://629743a214e756fe3b2c1f65.mockapi.io/users1/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      window.location.reload();
    } catch (error) {}
  };
  const editUser = async (id) => {
    try {
        const response = await fetch(`https://629743a214e756fe3b2c1f65.mockapi.io/users1/${id}`,
        {
            method: "PUT"
        }
        );
        const data = await response.json();
        // window.location.reload();
    }catch (error) {console.log(`edit error`)}
    
}
const getMockUsers = async () => {
    try {
      const response = await fetch(
        "https://629743a214e756fe3b2c1f65.mockapi.io/users1"
        //   "https://reqres.in/api/users"
      );
      const data = await response.json();
  
      data.forEach((elem) => {
        let editModal = document.querySelector('#editModal');
        console.log(editModal)
        let tbody = document.querySelector(".tbody");
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        id.innerHTML = elem?.id;
        let createdAt = document.createElement("td");
        createdAt.innerHTML = elem?.createdAt?.slice(0, 10);
        let name = document.createElement("td");
        name.innerHTML = elem?.first_name;
        let last_name = document.createElement("td");
        last_name.innerHTML = elem?.last_name;
        let email = document.createElement("td");
        email.innerHTML = elem?.email;
        let tdDel = document.createElement("td");
        let del = document.createElement("button");
        tdDel.appendChild(del);
        del.innerText = "delete";
        let tdEdit = document.createElement("td");
        let edit = document.createElement("button")
        tdEdit.appendChild(edit);
        edit.innerHTML = "Edit"
        del.onclick = () => {
        //   deleteModal.style.display = "block";
          deleteUser(elem.id);
        };
        edit.onclick = () => {
          editModal.style.display = "block";
          editUser(elem.name).value;
        }
        tr.appendChild(id);
        tr.appendChild(createdAt);
        tr.appendChild(name);
        tr.appendChild(last_name);
        tr.appendChild(email);
        tr.appendChild(tdDel);
        tr.appendChild(tdEdit)
        tbody.appendChild(tr);
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                    <img src="${elem.avatar}" />
                     <div class="container">
                     <h4 <b>${elem.first_name} ${elem.last_name}</b></h4>
                     <p>${elem.email}</p>
                     </div>
                  `;
        cards.appendChild(card);
      });
    } catch (error) {
      console.error(error);
    }
  };
  getMockUsers();
  
const addUser = async () => {
  let user = {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
  };
  console.log(1);
  try {
    const response = await fetch(
      "https://629743a214e756fe3b2c1f65.mockapi.io/users1",
      {
        method: "POST",
        headers: {
          Accepted: "aplication/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
      const data = await response.json();
      data.forEach((elem) => {
      let tbody = document.querySelector(".tbody");
      let tr = document.createElement("tr");
      let id = document.createElement("td");
      id.innerHTML = elem?.id;
      let createdAt = document.createElement("td");
      createdAt.innerHTML = elem?.createdAt?.slice(0, 10);
      let name = document.createElement("td");
      name.innerHTML = elem?.first_name;
      let last_name = document.createElement("td");
      last_name.innerHTML = elem?.last_name;
      let email = document.createElement("td");
      email.innerHTML = elem?.email;
      let del = document.createElement("button");
      del.innerText = "delete";
      del.onclick = () => {
        deleteUser(elem.id);
      };

      tr.appendChild(id);
      tr.appendChild(createdAt);
      tr.appendChild(name);
      tr.appendChild(last_name);
      tr.appendChild(email);
      tr.appendChild(del);
      tbody.appendChild(tr);
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                      <img src="${elem.avatar}" />
                     <div class="container">
                     <h4 <b>${elem.first_name} ${elem.last_name}</b></h4>
                     <p>${elem.email}</p>
                     </div>
                  `;
      cards.appendChild(card);
    });

    window.location.reload();
    first_name.value = "";
    last_name.value = "";
    email.value = "";
  } catch (error) {
    console.log("error");
  }
};

add.onclick = addUser;
// const editUser = async (id) => {
//     try{
//     const response = await fetch(
//         `https://629743a214e756fe3b2c1f65.mockapi.io/users1/${id}`,
  
//         {
//           method: "PUT",
//         }
//       );
//       const data = await response.json();
//       window.location.reload();
//     } catch (error) {}
//   };

// const getUsers = async () => {
//     try {
//      cards.innerHTML = ""
//       const response = await fetch("https://reqres.in/api/users")
//         const { data } = await response.json()
//         data.forEach(elem => {
//       let card = document.createElement("div")
//       card.classList.add("card")
//       let tbody = document.querySelector(".tbody");
//       let tr = document.createElement("tr");
//       let id = document.createElement("td");
//       id.innerHTML = elem?.id;
//       let createdAt = document.createElement("td");
//       const formatYmd = date => date.toISOString().slice(0, 10);
//       createdAt.innerHTML = formatYmd(new Date());//elem?.createdAt?.slice(0, 10);
//       let name = document.createElement("td");
//       name.innerHTML = elem?.first_name;
//       let last_name = document.createElement("td");
//       last_name.innerHTML = elem?.last_name;
//       let email = document.createElement("td");
//       email.innerHTML = elem?.email;
//       let tdDel = document.createElement("td");
//       let del = document.createElement("button");
//       tdDel.appendChild(del);
//       del.innerText = "delete";
//       let tdEdit = document.createElement("td");
//       let edit = document.createElement("button")
//       tdEdit.appendChild(edit);
//       edit.innerHTML = "Edit"
//       del.onclick = () => {
//         // deleteModal.style.display = "block";
//         deleteUser(elem);
//       };
//       edit.onclick = () => {
//         editUser(elem.id);
//       }

//       tr.appendChild(id);
//       tr.appendChild(createdAt);
//       tr.appendChild(name);
//       tr.appendChild(last_name);
//       tr.appendChild(email);
//       tr.appendChild(tdDel);
//       tr.appendChild(tdEdit)
//       tbody.appendChild(tr);
//             card.innerHTML = `
//             <img src="${elem.avatar}" />
//             <div class="container">
//                 <h4><b>${elem.first_name} ${elem.last_name}</b></h4>
//                 <p>${elem.email}</p>
//             </div>
//             `
//             cards.appendChild(card)
//         });
//     } catch (error) {
//         console.error(error)
//     }
// }
// getUsers()

// send.onclick = () => {
//   let user = {
//     name: name.value,
//     age: +age.value,
//     single: single.checked,
//   };
//   postUser(user);
// };
