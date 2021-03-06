
  /**
   * Bootstrap 3 templates
   */
  Form.template = _.template('\
    <form role="form" data-fieldsets></form>\
  ');

  Form.templateHorizontal = _.template('\
    <form class="form-horizontal" role="form" data-fieldsets></form>\
  ');

  Form.templateInline = _.template('\
    <form class="form-inline" role="form" data-fieldsets></form>\
  ');


  Form.Fieldset.template = _.template('\
    <fieldset>\
      <% if (legend) { %>\
        <legend><%= legend %></legend>\
      <% } %>\
      <div data-fields></div>\
    </fieldset>\
  ');


  Form.Field.template = _.template('\
    <div class="form-group <%= key %>-field">\
      <label for="<%= editorId %>"><%= title %></label>\
      <span data-editor></span>\
      <p class="help-block"><%= help %></p>\
    </div>\
  ');

  Form.Field.templateCheckbox = _.template('\
    <div class="checkbox <%= key %>-field">\
      <label>\
        <span data-editor></span>\
        <%= title %>\
      </label>\
      <p class="help-block"><%= help %></p>\
    </div>\
  ');


  Form.NestedField.template = _.template('\
    <div class="form-group <%= key %>-field">\
      <label for="<%= editorId %>"><%= title %></label>\
      <span data-editor></span>\
      <div class="help-block"><%= help %></div>\
    </div>\
  ');

  Form.editors.Base.prototype.className = 'form-control';
  Form.editors.Checkbox.prototype.className = '';
  Form.editors.Object.prototype.className = '';
  Form.Field.errorClassName = 'has-error';


  if (Form.editors.List) {

    Form.editors.List.prototype.className = 'list-field';

    Form.editors.List.template = _.template('\
      <div class="bbf-list">\
        <ul class="list-unstyled clearfix" data-items></ul>\
        <a class="btn btn-link bbf-add" data-action="add">Add</a>\
      </div>\
    ');


    Form.editors.List.Item.template = _.template('\
      <li>\
        <div class="pull-left" data-editor></div>\
        <a class="btn btn-link bbf-del" data-action="remove">&times;</a>\
      </li>\
    ');
    

    Form.editors.List.Object.template = Form.editors.List.NestedModel.template = _.template('\
      <div class="bbf-list-modal"><%= summary %></div>\
    ');

  }
