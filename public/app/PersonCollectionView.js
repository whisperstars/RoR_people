var PersonCollectionView = Backbone.View.extend({

    events: {
       'click .add_btn': 'personAddStart'
    },

    subscriptions: {
        'PersonCollectionView:personAddFinish': 'personAddFinish',
        'PersonCollectionView:personDelete': 'personDelete'
    },

    initialize: function() {
        this.template = _.template($('#PersonCollectionView').html());
        
        this.collection.on('sync', this.render, this);
    },

    render: function() {
		this.$el.html(this.template);
		this.collection.each(this.renderOne, this);		

        return this;
    },

    renderOne: function(person) {
        var view = new PersonItemView({
                'tagName': 'tr',
                'model': person
            });

        this.$el.find('.group_list').append(view.render().el);
    },

    personAddStart: function() {
        Backbone.Mediator.pub('PersonEditView:personAdd');
    },

    personAddFinish: function(person) {
        var last_person;

        this.collection.add(person.toJSON());
        last_person = this.collection.last();
        last_person.save();

        this.renderOne(last_person);
    },

    personDelete: function(person) {
        this.collection.remove(person);
    }
});