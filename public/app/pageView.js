var PageView = Backbone.View.extend({
    events: {
        'click .edit_btn': 'editPage',
        'click .add_btn': 'editPage',
        'click .cancel_btn': 'listPage',
        'click .save_btn': 'listPage',
        'click .preview_btn': 'previewPage'
    },

    initialize: function() {
        this.template = _.template($('#PageView').html());
        this.render();
    },

    render: function() {
        this.$el.html(this.template());

        return this;
    },

    editPage: function() {
        this.$el.find('.page').addClass('hide');
        this.$el.find('.edit_page').removeClass('hide');
    },

    listPage: function() {
        this.$el.find('.page').addClass('hide');
        this.$el.find('.list_page').removeClass('hide');
    },

    previewPage: function() {
        this.$el.find('.page').addClass('hide');
        this.$el.find('.preview_page').removeClass('hide');
    }
});