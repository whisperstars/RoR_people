var TabView = Backbone.View.extend({
    events: {
        'click .tab_name': 'tabName',
        'click .tab_contacts': 'tabContacts',
        'click .tab_personal': 'tabPersonal'
    },

    tabName: function() {
        this.$el.find('.tab').removeClass('active');
        this.$el.find('.tab_name').addClass('active');

        this.$el.find('.content').addClass('hide');
        this.$el.find('.content_name').removeClass('hide');
    },

    tabContacts: function() {
        this.$el.find('.tab').removeClass('active');
        this.$el.find('.tab_contacts').addClass('active');

        this.$el.find('.content').addClass('hide');
        this.$el.find('.content_contacts').removeClass('hide');
    },

    tabPersonal: function() {
        this.$el.find('.tab').removeClass('active');
        this.$el.find('.tab_personal').addClass('active');

        this.$el.find('.content').addClass('hide');
        this.$el.find('.content_personal').removeClass('hide');
    }
});