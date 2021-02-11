import React from "react";
const MakeForm = () => {
  return (
    <div>
      <h1>Form Registrasi</h1>

      <form class="biodata">
        <fieldset>
          <legend>Biodata</legend>
          <label class="label__name">Nama :</label>
          <input type="text" class="name"></input>
          <br />
          <label class="label__nim">NIM :</label>
          <input type="text" class="nim"></input>
          <br />
          <label class="label__tanggallahir">Tanggal Lahir :</label>
          <select class="option1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </select>
          <select class="option2">
            <option value="januari">januari</option>
            <option value="Februari">Februari</option>
            <option value="Maret">Maret</option>
            <option value="April">April</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </select>
          <select class="option3">
            <option value="1">2021</option>
            <option value="2">2020</option>
            <option value="3">2019</option>
            <option value="4">2018</option>
            <option value="5">2017</option>
            <option value="6">2016</option>
            <option value="7">2015</option>
          </select>
          <br />
          <label class="label__alamat">Alamat </label>
          <input type="text" class="alamat"></input>
        </fieldset>
      </form>
      <form class="account">
        <fieldset>
          <legend>User Account</legend>
          <label class="label_user">Username</label>
          <input type="text" class="username"></input>
          <br />
          <label class="label_email">Email</label>
          <input type="Email" class="email"></input>
          <br />
          <label class="label_psw">Password</label>
          <input type="Password" class="psw"></input>
          <br />
          <label class="label_ulangi_psw">Ulangi Password</label>
          <input type="Password" class="psw_ulangi"></input>
        </fieldset>
      </form>
      <form class="resolusi">
        <fieldset>
          <legend>Resolusi Tahun Ini</legend>
          <div class="check">
            <input type="checkbox"></input>
            <label>Menguasai HTML</label>
            <br />
            <input type="checkbox"></input>
            <label>Paham CSS</label>
            <br />
            <input type="checkbox"></input>
            <label>Mastering PHP</label>
          </div>
        </fieldset>
        <button>Kirim Data</button>
      </form>
    </div>
  );
};

export default MakeForm;
