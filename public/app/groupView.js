var GroupView = Backbone.View.extend({

    events: {
       'click .add_btn': 'personAddStart'
    },

    subscriptions: {
        'person:add_finish': 'personAddFinish'
    },

    initialize: function() {
        this.template = _.template($('#GroupView').html());
        
        this.collection.on('sync', this.render, this);
    },

    render: function() {
		this.$el.html(this.template);
		this.collection.each(this.renderItem, this);		

        return this;
    },

    renderItem: function(person) {
        var view = new PersonItemView({
                'tagName': 'tr',
                'model': person
            });

        this.$el.find('.group_list').append(view.render().el);
    },

    personAddStart: function() {
        Backbone.Mediator.pub('person:add_start');
    },

    personAddFinish: function(person) {
        var last_person;

        this.collection.add(person.toJSON());
        last_person = this.collection.last();
        
        this.renderItem(last_person);
        last_person.save(last_person.toJSON());
    }
});