
//==================================================================================================
//BOOTSTRAP FIELD
//==================================================================================================

Form.BootstrapField = Form.Field.extend({

  template: _.template('\
    <div class="control-group field-<%= key %>">\
      <label class="control-label" for="<%= editorId %>"><%= title %></label>\
      <div class="controls">\
        <span data-editor></span>\
        <div class="help-inline" data-error></div>\
        <div class="help-block"><%= help %></div>\
      </div>\
    </div>\
  ')

});