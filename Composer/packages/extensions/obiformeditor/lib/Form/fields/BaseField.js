// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import React from 'react';
import startCase from 'lodash/startCase';
import get from 'lodash/get';
import classnames from 'classnames';
import { WidgetLabel } from '../widgets/WidgetLabel';
import { RootField } from './RootField';
import './styles.css';
export function BaseField(props) {
  var children = props.children,
    className = props.className,
    description = props.description,
    formContext = props.formContext,
    idSchema = props.idSchema,
    name = props.name,
    schema = props.schema,
    title = props.title,
    uiSchema = props.uiSchema;
  var isRootBaseField = idSchema.__id === formContext.rootId;
  var fieldOverrides = get(formContext.editorSchema, 'content.SDKOverrides');
  var _a = uiSchema['ui:options'] || {},
    displayInline = _a.inline,
    hideDescription = _a.hideDescription;
  var titleOverride;
  var descriptionOverride;
  var helpLink;
  var helpLinkText;
  var helpLinkLabel;
  var key = idSchema.__id;
  if (schema.title) {
    var SDKOverrides = fieldOverrides['' + schema.title];
    titleOverride = get(SDKOverrides, 'title');
    descriptionOverride = get(SDKOverrides, 'description');
    helpLink = get(SDKOverrides, 'helpLink');
    helpLinkText = get(SDKOverrides, 'helpLinkText');
    helpLinkLabel = get(SDKOverrides, 'helpLinkLabel');
  }
  // use dialogId as the key because the focusPath may not be enough
  if (formContext.dialogId) {
    key = key + '-' + formContext.dialogId;
  }
  var getTitle = function() {
    if (titleOverride === false) {
      return null;
    }
    return uiSchema['ui:title'] || titleOverride || title || schema.title || startCase(name);
  };
  var getDescription = function() {
    if (descriptionOverride === false) {
      return null;
    }
    return descriptionOverride || description || uiSchema['ui:description'] || schema.description;
  };
  return isRootBaseField
    ? React.createElement(RootField, __assign({}, props, { key: key, id: key.replace(/\.|#/g, '') }), children)
    : React.createElement(
        'div',
        { className: classnames({ BaseField: !displayInline }, className), key: key, id: key.replace(/\.|#/g, '') },
        !hideDescription &&
          React.createElement(WidgetLabel, {
            label: getTitle(),
            description: getDescription(),
            helpLink: helpLink,
            helpLinkText: helpLinkText,
            helpLinkLabel: helpLinkLabel,
            id: key,
          }),
        React.createElement('div', { className: classnames({ BaseFieldInline: displayInline }) }, children)
      );
}
BaseField.defaultProps = {
  formContext: {},
  uiSchema: {},
};
//# sourceMappingURL=BaseField.js.map