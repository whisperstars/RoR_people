var PersonView = Backbone.View.extend({

    events: {
        'click .save_btn': 'personSave',
        'click .edit_btn': 'personEdit'
    },

    subscriptions: {
        'PersonView:personPreview': 'personPreview'
    },

    initialize: function() {
        this.template = _.template($('#PersonView').html());
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    personSave: function() {     
        if(this.model.isNew()) {
            Backbone.Mediator.pub('PersonCollectionView:personAddFinish', this.model);
        } else {
            this.model.save();
        }
    },

    personEdit: function() {
        Backbone.Mediator.pub('PersonEditView:personEdit', this.model);
    },

    personPreview: function(model) {
        this.setModel(model);
        this.render();
    },

    setModel: function(model) {
        this.model = model;
    }
});