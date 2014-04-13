var PersonEditView = Backbone.View.extend({

    events: {
        'click .preview_btn': 'previewPerson'
    },

    subscriptions: {
        'PersonEditView:personAdd': 'personAdd',
        'PersonEditView:personEdit': 'personEdit'
    },

    initialize: function() {
        this.template = _.template($('#PersonEditView').html());
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        
        return this;
    },

    personAdd: function() {
        this.setModel(new Person());
        this.render();
    },

    personEdit: function(model) {
        this.setModel(model);
        this.render();
    },

    previewPerson: function() {
        var i,
            keys = [
                'name',
                'lastName',
                'skype',
                'email',
                'phone',
                'age',
                'sex'
            ];

        for(i=0; i< keys.length; i++){
            this.model.set(keys[i], this.$el.find('.' + keys[i]).val());
        }

        Backbone.Mediator.pub('PersonView:personPreview', this.model);
    },

    setModel: function(model) {
        this.model = model;
    }
});