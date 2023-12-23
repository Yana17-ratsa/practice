/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
// const client = new Client("mango", "mango@gmail.com");

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get clientData() {
    return { login: this.#login, email: this.#email };
  }

  set clientData({ login, email }) {
    this.#login = login;
    this.#email = email;
  }
}

const client = new Client("mango", "mango@gmail.com");

console.log(client);

console.log(client.clientData);

client.clientData = { login: "abcd", email: "asds@.jh" };

console.log(client);
