async function getData() {
  let response = await fetch(
    "https://script.google.com/macros/s/AKfycbyjKlZNDIQEHGWbS9n8C8vLjpDTBwVCBLQoGuCU8r7ykHBqb0985CKTPd-huEAtDfv9Bw/exec?action=read&sheet=Game",
    { mode: "cors" }
  );
  let db = await response.json();
  console.log(db.data[0].GameOnline);

  let judulEmp = "";
  db.data.forEach((data) => {
    let judulIsi = ` 
    <div class="my-10">
    <div class="">
      <h1 class="text-center font-bold text-2xl">${data.GameOnline}</h1>
    </div>
    <!-- gambar -->
    <div class="overflow-hidden rounded-lg w-[50%] h-52 m-auto my-5">
      <img alt="" src="${data.Gambar}" class="w-full h-full" />
    </div>
    <!-- pembungkus produsen year -->
    <div class=" ">
      <!-- produsen -->
      <div class="flex bg-gray-300">
        <h1 class="w-[50%]  text-center p-3 font-bold">
          Produsen
        </h1>
        <h1 class="w-[50%]  text-center p-3">
          ${data.GameOnline}
        </h1>
      </div>
      <!-- year -->
      <div class="flex bg-gray-500">
        <h1 class="w-[50%] text-center p-3">Year</h1>
        <h1 class="w-[50%] text-center p-3">${data.Year}</h1>
      </div>
    </div>
    <div>
      <p class="text-justify">${data.Deskripsi}</p>
    </div>
  </div>
          `;
    judulEmp += judulIsi;
  });
  const judul = document.querySelector("#judul");
  judul.innerHTML = judulEmp;
}
getData();

// // judul
// for (let i = 0; i < 1; i++) {
//   let judulEmp = `
//   <h1 class="font-bold text-center text-3xl">${db.data[i].GameOnline}</h1>
// `;
//   const judul = document.querySelector(`#judul${i + 1}`);
//   judul.innerHTML = judulEmp;
// }

// // produsen
// for (let i = 0; i < 1; i++) {
//   let produsenEmp = `
//   <h1 class="font-bold text-center text-lg ">${db.data[i].Produsen}</h1>
// `;
//   const produsen = document.querySelector(`#produsen${i + 1}`);
//   produsen.innerHTML = produsenEmp;
// }

// // Year
// for (let i = 0; i < 1; i++) {
//   let yearEmp = `
//   <h1 class="font-bold text-center text-lg ">${db.data[i].Year}</h1>
// `;
//   const year = document.querySelector(`#year${i + 1}`);
//   year.innerHTML = yearEmp;
// }
