$(function() {
    var page_view,
        person_edit_view,
        person_view;
    
    page_view = new PageView({
        'el': $('#group_page')
    });

    group_view = new GroupView({
        'el': $('#group_page .list_page'),
        'collection': new Group()
    });

    person_edit_view = new PersonEditView({
        'el': $('#group_page .edit_page')
    });
});