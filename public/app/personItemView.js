var PersonItemView = Backbone.View.extend({

    events: {
        'click .preview_btn': 'personPreview',
        'click .edit_btn': 'personEditStart',
        'click .delete_btn': 'personDelete'
    },
    
    initialize: function() {
        this.template = _.template($('#PersonItemView').html());

        this.model.on('change', this.render, this);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    personPreview: function() {
        Backbone.Mediator.pub('PersonView:personPreview', this.model);
    },

    personEditStart: function() {
        Backbone.Mediator.pub('PersonEditView:personEdit', this.model);
    },

    personDelete: function() {
        Backbone.Mediator.pub('PersonCollectionView:personDelete', this.model);

        this.model.off();
        this.model.destroy();
        this.remove();
    }
});