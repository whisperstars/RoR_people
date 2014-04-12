var PersonEditView = Backbone.View.extend({

    events: {
        'click .set_name_btn': 'saveModel'
    },

    subscriptions: {
        'person:add_start': 'personAdd',
        'person:edit_start': 'personEdit'
    },

    initialize: function() {
        this.template = _.template($('#PersonEditView').html());
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        
        return this;
    },

    saveModel: function() {
        var is_new = this.model.has('name');

        this.model.set('name', this.$el.find('.name').val());

        if(!is_new) {
            Backbone.Mediator.pub('person:add_finish', this.model);
        } else {
            Backbone.Mediator.pub('person:edit_finish', this.model);
            this.model.save(this.model.toJSON());
        }
    },

    personAdd: function() {
        this.setModel(new Person());
    },

    personEdit: function(model) {
        this.setModel(model);
    },

    setModel: function(model) {
        this.model = model;
        this.render();
    }
});