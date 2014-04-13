$(function() {
    var person_collection_view,
        person_edit_view,
        person_view,
        page_view,
        tab_view;
    
    page_view = new PageView({
        'el': $('#group_page')
    });

    person_view = new PersonView({
        'el': $('#group_page .preview_page')
    });

    person_collection_view = new PersonCollectionView({
        'el': $('#group_page .list_page'),
        'collection': new PersonCollection()
    });

    person_edit_view = new PersonEditView({
        'el': $('#group_page .edit_page')
    });

    tab_view = new TabView({
        'el': $('#group_page .edit_page')
    });
});