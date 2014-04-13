var Person = Backbone.Model.extend({

    urlRoot: 'people',

    defaults: {
        "name": "",
        "lastName": "",
        "email": "",
        "skype": "",
        "phone": "",
        "age": "",
        "sex": ""
    }

});