var app = new Vue({
  el: '#password_generator',
  data: {
    type: [ "uppercase", "lowercase", "number" ],
    length: 16,
    count: 6,
    message: 'Welcome Password generator!',
    passwords: [],
  },
  methods: {
    generatePassword: function () {
      this.passwords = [];

      var password_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var password_lowercase = 'abcdefghijklmnopqrstuvwxyz';
      var password_numeric = '1234567890';
      var password_symbol = '/*-+.,!#$%&()~|_';
      var password_seed = '';

      if (! this.type.length) {
        this.message = "Not foud Character type";
        return;
      }

      if ( this.type.find(function(el) { return el == 'uppercase'; }) ) password_seed += password_uppercase;
      if ( this.type.find(function(el) { return el == 'lowercase'; }) ) password_seed += password_lowercase;
      if ( this.type.find(function(el) { return el == 'number'; }) )    password_seed += password_numeric;
      if ( this.type.find(function(el) { return el == 'symbol'; }) )    password_seed += password_symbol;


      for (var i = 0; i < this.count; i++) {

        var password = '';
        for (var j = 0; j < this.length; j++) {
          password += password_seed.charAt(Math.floor(Math.random() * password_seed.length));
        }
        this.passwords.push(password);

      }

      this.message = 'Password generated!';
    }
  }
})
