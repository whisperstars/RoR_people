var Group = Backbone.Collection.extend({

    url : 'people',

    model: Person,

    initialize: function() {
        this.fetch();
    }
});