var PersonItemView = Backbone.View.extend({

    events: {
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

    personEditStart: function() {
        Backbone.Mediator.pub('person:edit_start', this.model);
    },

    personDelete: function() {
        this.model.destroy();
        this.model.off();
        this.remove();
    }
});