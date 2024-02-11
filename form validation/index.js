class Form {
  constructor(email, pass, confirmPass, first, last, number, company) {
    this.email = document.getElementById(email);
    this.pass = document.getElementById(pass);
    this.confirmPass = document.getElementById(confirmPass);
    this.first = document.getElementById(first);
    this.last = document.getElementById(last);
    this.number = document.getElementById(number);
    this.company = document.getElementById(company);
  }
}

const formData = new Form(
  "floating_email",
  "floating_password",
  "floating_repeat_password",
  "floating_first_namet",
  "floating_last_name",
  "floating_phone",
  "floating_company"
);
