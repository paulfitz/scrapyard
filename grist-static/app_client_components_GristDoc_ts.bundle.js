(self["webpackChunkgristy"] = self["webpackChunkgristy"] || []).push([["app_client_components_GristDoc_ts"],{

/***/ "./app/client/aclui/ACLColumnList.ts":
/*!*******************************************!*\
  !*** ./app/client/aclui/ACLColumnList.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aclColumnList": () => (/* binding */ aclColumnList)
/* harmony export */ });
/* harmony import */ var app_client_aclui_ACLSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/aclui/ACLSelect */ "./app/client/aclui/ACLSelect.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");




function aclColumnList(colIds, validColIds) {
  function removeColId(colId) {
    colIds.set(colIds.get().filter((c) => c !== colId));
  }
  function addColId(colId) {
    colIds.set([...colIds.get(), colId]);
    selectBox.focus();
  }
  function onFocus(ev) {
    editing.set(true);
    if (ev.relatedTarget !== selectBox) {
      selectBox.focus();
    }
  }
  function onBlur() {
    if (!selectBox.matches(".weasel-popup-open") && colIds.get().length > 0) {
      editing.set(false);
    }
  }
  const newColId = grainjs__WEBPACK_IMPORTED_MODULE_3__.Computed.create(null, (use) => "").onWrite((value) => {
    setTimeout(() => addColId(value), 0);
  });
  const unusedColIds = grainjs__WEBPACK_IMPORTED_MODULE_3__.Computed.create(null, colIds, (use, _colIds) => {
    const used = new Set(_colIds);
    return validColIds.filter((c) => !used.has(c));
  });
  const editing = grainjs__WEBPACK_IMPORTED_MODULE_3__.Observable.create(null, !colIds.get().length);
  let selectBox;
  return cssColListWidget({ tabIndex: "0" }, grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.autoDispose(unusedColIds), cssColListWidget.cls("-editing", editing), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.on("focus", onFocus), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.forEach(colIds, (colId) => cssColItem(cssColId(colId), cssColItemIcon((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_2__.icon)("CrossSmall"), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.on("click", () => removeColId(colId)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.testId)("acl-col-remove")), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.testId)("acl-column"))), cssNewColItem(grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.update(selectBox = (0,app_client_aclui_ACLSelect__WEBPACK_IMPORTED_MODULE_0__.aclSelect)(newColId, unusedColIds, { defaultLabel: "[Add Column]" }), app_client_aclui_ACLSelect__WEBPACK_IMPORTED_MODULE_0__.cssSelect.cls("-active"), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.on("blur", onBlur), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.onKeyDown({ Escape: onBlur }), editing.get() ? (elem) => {
    setTimeout(() => elem.focus(), 0);
  } : null)));
}
const cssColListWidget = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  outline: none;
  margin: 6px 8px;
  cursor: pointer;
  border-radius: 4px;

  border: 1px solid transparent;
  &:not(&-editing):hover {
    border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.accessRulesColumnListBorder};
  }
`);
const cssColItem = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  padding-left: 6px;
  padding-right: 2px;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.accessRulesColumnItemFg};

  .${cssColListWidget.className}-editing & {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.accessRulesColumnItemBg};
  }
`);
const cssColId = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  flex: auto;
  height: 24px;
  line-height: 24px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`);
const cssNewColItem = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  margin-top: 2px;
  display: none;
  .${cssColListWidget.className}-editing & {
    display: flex;
  }
`);
const cssColItemIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  flex: none;
  height: 16px;
  width: 16px;
  border-radius: 16px;
  display: none;
  cursor: default;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.accessRulesColumnItemIconFg};
  &:hover {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.accessRulesColumnItemIconHoverBg};
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.accessRulesColumnItemIconHoverFg};
  }
  .${cssColListWidget.className}-editing & {
    display: flex;
  }
`);


/***/ }),

/***/ "./app/client/aclui/ACLFormulaEditor.ts":
/*!**********************************************!*\
  !*** ./app/client/aclui/ACLFormulaEditor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aclFormulaEditor": () => (/* binding */ aclFormulaEditor)
/* harmony export */ });
/* harmony import */ var app_client_components_AceEditorCompletions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/AceEditorCompletions */ "./app/client/components/AceEditorCompletions.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! brace */ "./node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);





function aclFormulaEditor(options) {
  const editorElem = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.dom)("div");
  const editor = brace__WEBPACK_IMPORTED_MODULE_2__.edit(editorElem);
  editor.setTheme("ace/theme/chrome");
  editor.setOptions({ enableLiveAutocompletion: true, maxLines: 10 });
  editor.renderer.setShowGutter(false);
  editor.renderer.setPadding(5);
  editor.renderer.setScrollMargin(4, 4, 0, 0);
  editor.$blockScrolling = Infinity;
  editor.setReadOnly(options.readOnly);
  editor.setFontSize("12");
  editor.setHighlightActiveLine(false);
  const session = editor.getSession();
  session.setMode("ace/mode/python");
  session.setTabSize(2);
  session.setUseWrapMode(false);
  const showPlaceholder = grainjs__WEBPACK_IMPORTED_MODULE_3__.Observable.create(null, !options.initialValue.length);
  editor.renderer.scroller.appendChild(cssAcePlaceholder(grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.show(showPlaceholder), options.placeholder));
  editor.on("change", () => showPlaceholder.set(!editor.getValue().length));
  async function getSuggestions(prefix) {
    return [
      "and",
      "or",
      "not",
      "in",
      "is",
      "True",
      "False",
      "None",
      "OWNER",
      "EDITOR",
      "VIEWER",
      "user",
      "rec",
      "newRec",
      ...options.getSuggestions(prefix)
    ].map((suggestion) => [suggestion, null]);
  }
  (0,app_client_components_AceEditorCompletions__WEBPACK_IMPORTED_MODULE_0__.setupAceEditorCompletions)(editor, { getSuggestions });
  editor.on("blur", () => options.setValue(editor.getValue()));
  const save = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(() => options.setValue(editor.getValue()), 1e3);
  editor.on("change", save);
  editor.commands.addCommand({
    name: "onEnter",
    bindKey: { win: "Enter", mac: "Enter" },
    exec: () => editor.blur()
  });
  editor.commands.removeCommands(["indent", "outdent"]);
  editor.setValue(options.initialValue);
  if (options.customiseEditor) {
    options.customiseEditor(editor);
  }
  return cssConditionInputAce(cssConditionInputAce.cls("-disabled", options.readOnly), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.on("mousedown", () => {
    editor.focus();
  }, { useCapture: true }), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.onDispose(() => editor.destroy()), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.onDispose(() => save.cancel()), editorElem);
}
const cssConditionInputAce = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  width: 100%;
  min-height: 28px;
  padding: 1px;
  border-radius: 3px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.colors.darkGrey};
  }
  &:not(&-disabled):focus-within {
    box-shadow: inset 0 0 0 1px ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.colors.cursor};
    border-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.colors.cursor};
  }
  &:not(:focus-within) .ace_scroller, &-disabled .ace_scroller {
    cursor: unset;
  }
  &-disabled, &-disabled:hover {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.colors.mediumGreyOpaque};
    box-shadow: unset;
    border-color: transparent;
  }
  &-disabled .ace-chrome {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.colors.mediumGreyOpaque};
  }
  & .ace_marker-layer, & .ace_cursor-layer {
    display: none;
  }
  &:not(&-disabled) .ace_focus .ace_marker-layer, &:not(&-disabled) .ace_focus .ace_cursor-layer {
    display: block;
  }
`);
const cssAcePlaceholder = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  padding: 4px 5px;
  opacity: 0.5;
`);


/***/ }),

/***/ "./app/client/aclui/ACLMemoEditor.ts":
/*!*******************************************!*\
  !*** ./app/client/aclui/ACLMemoEditor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aclMemoEditor": () => (/* binding */ aclMemoEditor)
/* harmony export */ });
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");


function aclMemoEditor(obs, ...args) {
  return cssMemoInput(grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.prop("value", obs), grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.on("input", (_e, elem) => obs.set(elem.value)), ...args);
}
const cssMemoInput = (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.styled)("input", `
  width: 100%;
  min-height: 28px;
  padding: 4px 5px;
  border-radius: 3px;
  border: 1px solid transparent;
  cursor: pointer;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.accentText};
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.inputBg};
  caret-color : ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.inputFg};
  font: 12px 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.inputBorder};
  }
  &:not(&-disabled):focus-within {
    outline: none !important;
    cursor: text;
    box-shadow: inset 0 0 0 1px ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.accentBorder};
    border-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.accentBorder};
  }
`);


/***/ }),

/***/ "./app/client/aclui/ACLSelect.ts":
/*!***************************************!*\
  !*** ./app/client/aclui/ACLSelect.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aclSelect": () => (/* binding */ aclSelect),
/* harmony export */   "cssSelect": () => (/* binding */ cssSelect)
/* harmony export */ });
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};




function aclSelect(obs, optionArray, options = {}) {
  return cssSelect(obs, optionArray, __spreadValues({ buttonArrow: cssSelectArrow("Collapse") }, options));
}
const cssSelect = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.select, `
  height: 28px;
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover, &:focus, &.weasel-popup-open, &-active {
    border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.colors.darkGrey};
    box-shadow: none;
  }
`);
const cssSelectCls = cssSelect.className;
const cssSelectArrow = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_1__.icon, `
  margin: 0 2px;
  pointer-events: none;
  display: none;

  .${cssSelectCls}:hover &, .${cssSelectCls}:focus &, .weasel-popup-open &, .${cssSelectCls}-active & {
    display: flex;
  }
`);


/***/ }),

/***/ "./app/client/aclui/ACLUsers.ts":
/*!**************************************!*\
  !*** ./app/client/aclui/ACLUsers.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACLUsersPopup": () => (/* binding */ ACLUsersPopup)
/* harmony export */ });
/* harmony import */ var app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/gristUrlState */ "./app/client/models/gristUrlState.ts");
/* harmony import */ var app_client_ui_UserImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui/UserImage */ "./app/client/ui/UserImage.ts");
/* harmony import */ var app_client_ui_UserItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui/UserItem */ "./app/client/ui/UserItem.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_common_gristUrls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/common/gristUrls */ "./app/common/gristUrls.ts");
/* harmony import */ var app_common_UserAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/common/UserAPI */ "./app/common/UserAPI.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! popweasel */ "./node_modules/popweasel/dist/index.js");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(popweasel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_11__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));














const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_9__.makeT)("ViewAsDropdown");
function isSpecialEmail(email) {
  return email === app_common_UserAPI__WEBPACK_IMPORTED_MODULE_6__.ANONYMOUS_USER_EMAIL || email === app_common_UserAPI__WEBPACK_IMPORTED_MODULE_6__.EVERYONE_EMAIL;
}
class ACLUsersPopup extends grainjs__WEBPACK_IMPORTED_MODULE_7__.Disposable {
  constructor(pageModel, fetch = () => this._fetchData()) {
    super();
    this.pageModel = pageModel;
    this.fetch = fetch;
    this.isInitialized = grainjs__WEBPACK_IMPORTED_MODULE_7__.Observable.create(this, false);
    this.allUsers = grainjs__WEBPACK_IMPORTED_MODULE_7__.Observable.create(this, []);
    this._shareUsers = [];
    this._attributeTableUsers = [];
    this._exampleUsers = [];
    this._currentUser = null;
  }
  async load() {
    const permissionData = await this.fetch();
    if (this.isDisposed()) {
      return;
    }
    this.init(permissionData);
  }
  getUsers() {
    const users = [...this._shareUsers, ...this._attributeTableUsers];
    if (this._showExampleUsers()) {
      users.push(...this._exampleUsers);
    }
    return users;
  }
  init(permissionData) {
    var _a;
    const pageModel = this.pageModel;
    this._currentUser = ((_a = pageModel.userOverride.get()) == null ? void 0 : _a.user) || pageModel.appModel.currentValidUser;
    if (permissionData) {
      this._shareUsers = permissionData.users.map((user) => __spreadProps(__spreadValues({}, user), {
        access: (0,app_common_UserAPI__WEBPACK_IMPORTED_MODULE_6__.getRealAccess)(user, permissionData)
      })).filter((user) => user.access && !isSpecialEmail(user.email)).filter((user) => {
        var _a2;
        return ((_a2 = this._currentUser) == null ? void 0 : _a2.id) !== user.id;
      });
      this._attributeTableUsers = permissionData.attributeTableUsers;
      this._exampleUsers = permissionData.exampleUsers;
      this.allUsers.set(this.getUsers());
      this.isInitialized.set(true);
    }
  }
  attachPopup(elem, options) {
    (0,popweasel__WEBPACK_IMPORTED_MODULE_8__.setPopupToCreateDom)(elem, (ctl) => {
      const buildRow = (user) => this._buildUserRow(user);
      const buildExampleUserRow = (user) => this._buildUserRow(user, { isExampleUser: true });
      return (0,popweasel__WEBPACK_IMPORTED_MODULE_8__.cssMenuWrap)((0,popweasel__WEBPACK_IMPORTED_MODULE_8__.cssMenu)(grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.cls(app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuCssClass), cssUsers.cls(""), cssHeader(t("View As"), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.show(this._shareUsers.length > 0)), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.forEach(this._shareUsers, buildRow), this._attributeTableUsers.length > 0 ? cssHeader(t("Users from table")) : null, grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.forEach(this._attributeTableUsers, buildExampleUserRow), this._showExampleUsers() ? [
        this._exampleUsers.length > 0 ? cssHeader(t("Example Users")) : null,
        grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.forEach(this._exampleUsers, buildExampleUserRow)
      ] : null, (el) => {
        setTimeout(() => el.focus(), 0);
      }, grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.onKeyDown({ Escape: () => ctl.close() })));
    }, __spreadValues(__spreadValues({}, popweasel__WEBPACK_IMPORTED_MODULE_8__.defaultMenuOptions), options));
  }
  menu(options) {
    return (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menu)(() => {
      this.load().catch((lodash_noop__WEBPACK_IMPORTED_MODULE_11___default()));
      return [
        cssMenuHeader("view as"),
        grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.forEach(this.allUsers, (user) => (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemLink)(`${user.name || user.email} (${(0,app_common_UserAPI__WEBPACK_IMPORTED_MODULE_6__.getUserRoleText)(user)})`, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("acl-user-access"), this._viewAs(user)))
      ];
    }, options);
  }
  async _fetchData() {
    const doc = this.pageModel.currentDoc.get();
    const gristDoc = await (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_10__.waitGrainObs)(this.pageModel.gristDoc);
    return doc && gristDoc.docComm.getUsersForViewAs();
  }
  _showExampleUsers() {
    return this._shareUsers.length + this._attributeTableUsers.length < 5;
  }
  _buildUserRow(user, opt = {}) {
    return (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.dom)("a", { class: app_client_ui_UserItem__WEBPACK_IMPORTED_MODULE_2__.cssMemberListItem.className + " " + cssUserItem.className }, (0,app_client_ui_UserItem__WEBPACK_IMPORTED_MODULE_2__.cssMemberImage)((0,app_client_ui_UserImage__WEBPACK_IMPORTED_MODULE_1__.createUserImage)(opt.isExampleUser ? "exampleUser" : user, "large")), (0,app_client_ui_UserItem__WEBPACK_IMPORTED_MODULE_2__.cssMemberText)((0,app_client_ui_UserItem__WEBPACK_IMPORTED_MODULE_2__.cssMemberPrimary)(user.name || (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.dom)("span", user.email), cssRole("(", (0,app_common_UserAPI__WEBPACK_IMPORTED_MODULE_6__.getUserRoleText)(user), ")", (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("acl-user-access"))), user.name ? (0,app_client_ui_UserItem__WEBPACK_IMPORTED_MODULE_2__.cssMemberSecondary)(user.email) : null), this._viewAs(user), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("acl-user-item"));
  }
  _viewAs(user) {
    var _a, _b, _c;
    if (((_a = this.pageModel) == null ? void 0 : _a.isPrefork.get()) && ((_c = (_b = this.pageModel) == null ? void 0 : _b.currentDoc.get()) == null ? void 0 : _c.access) !== "owners") {
      return grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.on("click", async () => {
        var _a2, _b2;
        const forkResult = await ((_b2 = (_a2 = this.pageModel) == null ? void 0 : _a2.gristDoc.get()) == null ? void 0 : _b2.docComm.fork());
        if (!forkResult) {
          throw new Error("Failed to create fork");
        }
        window.location.assign((0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_0__.urlState)().makeUrl((0,app_common_gristUrls__WEBPACK_IMPORTED_MODULE_5__.userOverrideParams)(user.email, {
          doc: forkResult.urlId,
          docPage: void 0
        })));
      });
    } else {
      return (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_0__.urlState)().setHref((0,app_common_gristUrls__WEBPACK_IMPORTED_MODULE_5__.userOverrideParams)(user.email, { docPage: void 0 }));
    }
  }
}
const cssUsers = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  max-width: unset;
`);
const cssUserItem = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)(app_client_ui_UserItem__WEBPACK_IMPORTED_MODULE_2__.cssMemberListItem, `
  width: auto;
  padding: 8px 16px;
  align-items: center;
  &:hover {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.lightHover};
  }
  &, &:hover, &:focus {
    text-decoration: none;
  }
`);
const cssRole = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("span", `
  margin: 0 8px;
  font-weight: normal;
`);
const cssHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  margin: 11px 24px 14px 24px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.vars.xsmallFontSize};
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.darkText};
`);
const cssMenuHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  margin: 8px 24px;
  margin-bottom: 4px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.vars.xsmallFontSize};
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.darkText};
`);


/***/ }),

/***/ "./app/client/aclui/AccessRules.ts":
/*!*****************************************!*\
  !*** ./app/client/aclui/AccessRules.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessRules": () => (/* binding */ AccessRules)
/* harmony export */ });
/* harmony import */ var app_client_aclui_ACLColumnList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/aclui/ACLColumnList */ "./app/client/aclui/ACLColumnList.ts");
/* harmony import */ var app_client_aclui_ACLFormulaEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/aclui/ACLFormulaEditor */ "./app/client/aclui/ACLFormulaEditor.ts");
/* harmony import */ var app_client_aclui_ACLMemoEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/aclui/ACLMemoEditor */ "./app/client/aclui/ACLMemoEditor.ts");
/* harmony import */ var app_client_aclui_ACLSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/aclui/ACLSelect */ "./app/client/aclui/ACLSelect.ts");
/* harmony import */ var app_client_aclui_ACLUsers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/aclui/ACLUsers */ "./app/client/aclui/ACLUsers.ts");
/* harmony import */ var app_client_aclui_PermissionsWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/aclui/PermissionsWidget */ "./app/client/aclui/PermissionsWidget.ts");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_client_ui_shadowScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/ui/shadowScroll */ "./app/client/ui/shadowScroll.ts");
/* harmony import */ var app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/ui2018/buttons */ "./app/client/ui2018/buttons.ts");
/* harmony import */ var app_client_ui2018_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/client/ui2018/checkbox */ "./app/client/ui2018/checkbox.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_editableLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/client/ui2018/editableLabel */ "./app/client/ui2018/editableLabel.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/common/ACLPermissions */ "./app/common/ACLPermissions.ts");
/* harmony import */ var app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/common/ACLRuleCollection */ "./app/common/ACLRuleCollection.ts");
/* harmony import */ var app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/common/ActiveDocAPI */ "./app/common/ActiveDocAPI.ts");
/* harmony import */ var app_common_DocActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/common/DocActions */ "./app/common/DocActions.ts");
/* harmony import */ var app_common_GranularAccessClause__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/common/GranularAccessClause */ "./app/common/GranularAccessClause.ts");
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var _a, _b, _c, _d, _e, _f;























const isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_22__.makeT)("AccessRules");
var RuleStatus = /* @__PURE__ */ ((RuleStatus2) => {
  RuleStatus2[RuleStatus2["Unchanged"] = 0] = "Unchanged";
  RuleStatus2[RuleStatus2["ChangedValid"] = 1] = "ChangedValid";
  RuleStatus2[RuleStatus2["Invalid"] = 2] = "Invalid";
  RuleStatus2[RuleStatus2["CheckPending"] = 3] = "CheckPending";
  return RuleStatus2;
})(RuleStatus || {});
class AccessRules extends grainjs__WEBPACK_IMPORTED_MODULE_21__.Disposable {
  constructor(_gristDoc) {
    super();
    this._gristDoc = _gristDoc;
    this._ruleCollection = new app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.ACLRuleCollection();
    this._tableRules = this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.obsArray)());
    this._docDefaultRuleSet = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, null);
    this._specialRulesWithDefault = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, null);
    this._specialRulesSeparate = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, null);
    this._userAttrRules = this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.obsArray)());
    this._errorMessage = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, "");
    this._ruleProblems = this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.obsArray)());
    this._aclResources = /* @__PURE__ */ new Map();
    this._aclUsersPopup = app_client_aclui_ACLUsers__WEBPACK_IMPORTED_MODULE_4__.ACLUsersPopup.create(this, this._gristDoc.docPageModel);
    this._ruleStatus = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, (use) => {
      const defRuleSet = use(this._docDefaultRuleSet);
      const tableRules = use(this._tableRules);
      const specialRulesWithDefault = use(this._specialRulesWithDefault);
      const specialRulesSeparate = use(this._specialRulesSeparate);
      const userAttr = use(this._userAttrRules);
      return Math.max(defRuleSet ? use(defRuleSet.ruleStatus) : 0 /* Unchanged */, getChangedStatus(tableRules.length < this._ruleCollection.getAllTableIds().length), getChangedStatus(userAttr.length < this._ruleCollection.getUserAttributeRules().size), ...tableRules.map((tr) => use(tr.ruleStatus)), ...userAttr.map((u) => use(u.ruleStatus)), specialRulesWithDefault ? use(specialRulesWithDefault.ruleStatus) : 0 /* Unchanged */, specialRulesSeparate ? use(specialRulesSeparate.ruleStatus) : 0 /* Unchanged */);
    });
    this._savingEnabled = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, this._ruleStatus, (use, s) => s === 1 /* ChangedValid */);
    this._userAttrChoices = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, this._userAttrRules, (use, rules) => {
      const result = [
        { ruleIndex: -1, value: "user.Access" },
        { ruleIndex: -1, value: "user.Email" },
        { ruleIndex: -1, value: "user.UserID" },
        { ruleIndex: -1, value: "user.Name" },
        { ruleIndex: -1, value: "user.LinkKey." },
        { ruleIndex: -1, value: "user.Origin" },
        { ruleIndex: -1, value: "user.SessionID" },
        { ruleIndex: -1, value: "user.IsLoggedIn" },
        { ruleIndex: -1, value: "user.UserRef" }
      ];
      for (const [i, rule] of rules.entries()) {
        const tableId = use(rule.tableId);
        const name = use(rule.name);
        for (const colId of this.getValidColIds(tableId) || []) {
          result.push({ ruleIndex: i, value: `user.${name}.${colId}` });
        }
      }
      return result;
    });
    for (const tableId of ["_grist_ACLResources", "_grist_ACLRules"]) {
      const tableData = this._gristDoc.docData.getTable(tableId);
      this.autoDispose(tableData.tableActionEmitter.addListener(this._onChange, this));
    }
    this.autoDispose(this._gristDoc.docPageModel.currentDoc.addListener(this._updateDocAccessData, this));
    this.update().catch((e) => this._errorMessage.set(e.message));
  }
  get allTableIds() {
    return Array.from(this._aclResources.keys()).sort();
  }
  get userAttrRules() {
    return this._userAttrRules;
  }
  get userAttrChoices() {
    return this._userAttrChoices;
  }
  getTableTitle(tableId) {
    const table = this._aclResources.get(tableId);
    if (!table) {
      return `#Invalid (${tableId})`;
    }
    return (0,app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_16__.getTableTitle)(table);
  }
  async update() {
    if (this.isDisposed()) {
      return;
    }
    this._errorMessage.set("");
    const rules = this._ruleCollection;
    const [, , aclResources] = await Promise.all([
      rules.update(this._gristDoc.docData, { log: console, pullOutSchemaEdit: true }),
      this._updateDocAccessData(),
      this._gristDoc.docComm.getAclResources()
    ]);
    this._aclResources = new Map(Object.entries(aclResources.tables));
    this._ruleProblems.set(aclResources.problems);
    if (this.isDisposed()) {
      return;
    }
    this._tableRules.set(rules.getAllTableIds().filter((tableId) => tableId !== app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.SPECIAL_RULES_TABLE_ID).map((tableId) => TableRules.create(this._tableRules, tableId, this, rules.getAllColumnRuleSets(tableId), rules.getTableDefaultRuleSet(tableId))));
    const withDefaultRules = ["SeedRule"];
    const separateRules = ["SchemaEdit", "FullCopies", "AccessRules"];
    SpecialRules.create(this._specialRulesWithDefault, app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.SPECIAL_RULES_TABLE_ID, this, filterRuleSets(withDefaultRules, rules.getAllColumnRuleSets(app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.SPECIAL_RULES_TABLE_ID)), filterRuleSet(withDefaultRules, rules.getTableDefaultRuleSet(app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.SPECIAL_RULES_TABLE_ID)));
    SpecialRules.create(this._specialRulesSeparate, app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.SPECIAL_RULES_TABLE_ID, this, filterRuleSets(separateRules, rules.getAllColumnRuleSets(app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.SPECIAL_RULES_TABLE_ID)), filterRuleSet(separateRules, rules.getTableDefaultRuleSet(app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.SPECIAL_RULES_TABLE_ID)));
    DefaultObsRuleSet.create(this._docDefaultRuleSet, this, null, void 0, rules.getDocDefaultRuleSet());
    this._userAttrRules.set(Array.from(rules.getUserAttributeRules().values(), (userAttr) => ObsUserAttributeRule.create(this._userAttrRules, this, userAttr)));
  }
  async save() {
    var _a2, _b2, _c2;
    if (!this._savingEnabled.get()) {
      return;
    }
    const docData = this._gristDoc.docData;
    const resourcesTable = docData.getMetaTable("_grist_ACLResources");
    const rulesTable = docData.getMetaTable("_grist_ACLRules");
    const newResources = flatten([{ tableId: "*", colIds: "*" }], ((_a2 = this._specialRulesWithDefault.get()) == null ? void 0 : _a2.getResources()) || [], ((_b2 = this._specialRulesSeparate.get()) == null ? void 0 : _b2.getResources()) || [], ...this._tableRules.get().map((tr) => tr.getResources())).filter((resource) => !(0,app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.isSchemaEditResource)(resource)).map((r) => __spreadValues({ id: -1 }, r));
    const resourceSync = syncRecords(resourcesTable, newResources, serializeResource);
    const defaultResourceRowId = resourceSync.rowIdMap.get(serializeResource({ id: -1, tableId: "*", colIds: "*" }));
    if (!defaultResourceRowId) {
      throw new Error("Default resource missing in resource map");
    }
    const newRules = [];
    for (const rule of this.getRules()) {
      if (rule.id === 0) {
        continue;
      }
      let resourceRowId;
      if ((0,app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.isSchemaEditResource)(rule.resourceRec)) {
        resourceRowId = defaultResourceRowId;
      } else {
        const resourceKey = serializeResource(rule.resourceRec);
        resourceRowId = resourceSync.rowIdMap.get(resourceKey);
        if (!resourceRowId) {
          throw new Error(`Resource missing in resource map: ${resourceKey}`);
        }
      }
      newRules.push({
        id: rule.id || -1,
        resource: resourceRowId,
        aclFormula: rule.aclFormula,
        permissionsText: rule.permissionsText,
        rulePos: rule.rulePos || null,
        memo: (_c2 = rule.memo) != null ? _c2 : ""
      });
    }
    for (const userAttr of this._userAttrRules.get()) {
      const rule = userAttr.getRule();
      newRules.push({
        id: rule.id || -1,
        resource: defaultResourceRowId,
        rulePos: rule.rulePos || null,
        userAttributes: rule.userAttributes
      });
    }
    let lastGoodRulePos = 0;
    let lastGoodIndex = -1;
    for (let i = 0; i < newRules.length; i++) {
      const pos = newRules[i].rulePos;
      if (pos && pos > lastGoodRulePos) {
        const step = (pos - lastGoodRulePos) / (i - lastGoodIndex);
        for (let k = lastGoodIndex + 1; k < i; k++) {
          newRules[k].rulePos = lastGoodRulePos + step * (k - lastGoodIndex);
        }
        lastGoodRulePos = pos;
        lastGoodIndex = i;
      }
    }
    for (let k = lastGoodIndex + 1; k < newRules.length; k++) {
      newRules[k].rulePos = ++lastGoodRulePos;
    }
    const rulesSync = syncRecords(rulesTable, newRules);
    try {
      await docData.sendActions([...resourceSync.userActions, ...rulesSync.userActions]);
    } catch (e) {
      (0,app_client_models_errors__WEBPACK_IMPORTED_MODULE_6__.reportError)(e);
    }
    await this.update();
  }
  buildDom() {
    return cssOuter((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("div", this._gristDoc.behavioralPromptsManager.attachTip("accessRules", {
      hideArrow: true
    })), cssAddTableRow((0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigBasicButton)({ disabled: true }, grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.hide(this._savingEnabled), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.text((use) => {
      const s = use(this._ruleStatus);
      return s === 3 /* CheckPending */ ? t("Checking...") : s === 0 /* Unchanged */ ? t("Saved") : t("Invalid");
    }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rules-non-save")), (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigPrimaryButton)(t("Save"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.show(this._savingEnabled), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => this.save()), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rules-save")), (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigBasicButton)(t("Reset"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.show((use) => use(this._ruleStatus) !== 0 /* Unchanged */), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => this.update()), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rules-revert")), (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigBasicButton)(t("Add Table Rules"), cssDropdownIcon("Dropdown"), { style: "margin-left: auto" }, (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_13__.menu)(() => this.allTableIds.map((tableId) => (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_13__.menuItemAsync)(() => this._addTableRules(tableId), this.getTableTitle(tableId), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.cls("disabled", (use) => use(this._tableRules).some((tr) => tr.tableId === tableId)))))), (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigBasicButton)(t("Add User Attributes"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => this._addUserAttributes())), (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigBasicButton)(t("View As"), cssDropdownIcon("Dropdown"), (elem) => this._aclUsersPopup.attachPopup(elem, { placement: "bottom-end" }), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.style("visibility", (use) => use(this._aclUsersPopup.isInitialized) ? "" : "hidden"))), cssConditionError({ style: "margin-left: 16px" }, grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.text(this._errorMessage), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("access-rules-error")), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe((use) => {
      const ruleProblems = use(this._ruleProblems);
      return ruleProblems.length > 0 ? ruleProblems : null;
    }, (ruleProblems) => cssSection(cssRuleProblems(this.buildRuleProblemsDom(ruleProblems)))), (0,app_client_ui_shadowScroll__WEBPACK_IMPORTED_MODULE_7__.shadowScroll)(grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe((use) => use(this._userAttrRules).length, () => cssSection(cssSectionHeading(t("User Attributes")), cssTableRounded(cssTableHeaderRow(cssCell1(cssCell.cls("-rborder"), cssCell.cls("-center"), cssColHeaderCell("Name")), cssCell4(cssColumnGroup(cssCell1(cssColHeaderCell(t("Attribute to Look Up"))), cssCell1(cssColHeaderCell(t("Lookup Table"))), cssCell1(cssColHeaderCell(t("Lookup Column"))), cssCellIcon()))), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.forEach(this._userAttrRules, (userAttr) => userAttr.buildUserAttrDom())))), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.forEach(this._tableRules, (tableRules) => tableRules.buildDom()), cssSection(cssSectionHeading(t("Default Rules"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-table-header")), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(this._specialRulesWithDefault, (tableRules) => cssSeedRule(tableRules.buildCheckBoxes())), cssTableRounded(cssTableHeaderRow(cssCell1(cssCell.cls("-rborder"), cssCell.cls("-center"), cssColHeaderCell("Columns")), cssCell4(cssColumnGroup(cssCellIcon(), cssCell2(cssColHeaderCell(t("Condition"))), cssCell1(cssColHeaderCell(t("Permissions"))), cssCellIconWithMargins(), cssCellIcon()))), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(this._docDefaultRuleSet, (ruleSet) => ruleSet.buildRuleSetDom())), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-table")), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(this._specialRulesSeparate, (tableRules) => tableRules.buildDom())));
  }
  buildRuleProblemsDom(ruleProblems) {
    const buttons = [];
    for (const problem of ruleProblems) {
      if (problem.tables) {
        this._addButtonsForMissingTables(buttons, problem.tables.tableIds);
      }
      if (problem.columns) {
        this._addButtonsForMissingColumns(buttons, problem.columns.tableId, problem.columns.colIds);
      }
      if (problem.userAttributes) {
        const names = problem.userAttributes.names;
        this._addButtonsForMisconfiguredUserAttributes(buttons, names);
      }
    }
    return buttons.map((button) => (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("span", button));
  }
  getRules() {
    var _a2, _b2, _c2;
    return flatten(...this._tableRules.get().map((tr) => tr.getRules()), ((_a2 = this._specialRulesWithDefault.get()) == null ? void 0 : _a2.getRules()) || [], ((_b2 = this._specialRulesSeparate.get()) == null ? void 0 : _b2.getRules()) || [], ((_c2 = this._docDefaultRuleSet.get()) == null ? void 0 : _c2.getRules("*")) || []);
  }
  removeTableRules(tableRules) {
    removeItem(this._tableRules, tableRules);
  }
  removeUserAttributes(userAttr) {
    removeItem(this._userAttrRules, userAttr);
  }
  async checkAclFormula(text) {
    if (text) {
      return this._gristDoc.docComm.checkAclFormula(text);
    }
    return {};
  }
  checkTableColumns(tableId, colIds, exemptColIds) {
    var _a2;
    if (!tableId || tableId === app_common_ACLRuleCollection__WEBPACK_IMPORTED_MODULE_15__.SPECIAL_RULES_TABLE_ID) {
      return "";
    }
    const tableColIds = (_a2 = this._aclResources.get(tableId)) == null ? void 0 : _a2.colIds;
    if (!tableColIds) {
      return `Invalid table: ${tableId}`;
    }
    if (colIds) {
      const validColIds = /* @__PURE__ */ new Set([...tableColIds, ...exemptColIds || []]);
      const invalidColIds = colIds.filter((c) => !validColIds.has(c));
      if (invalidColIds.length === 0) {
        return "";
      }
      return `Invalid columns in table ${tableId}: ${invalidColIds.join(", ")}`;
    }
    return "";
  }
  getValidColIds(tableId) {
    var _a2;
    return (_a2 = this._aclResources.get(tableId)) == null ? void 0 : _a2.colIds.filter((id) => !(0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_19__.isHiddenCol)(id)).sort();
  }
  getSeedRules() {
    var _a2;
    return ((_a2 = this._specialRulesWithDefault.get()) == null ? void 0 : _a2.getCustomRules("SeedRule")) || [];
  }
  _addTableRules(tableId) {
    if (this._tableRules.get().some((tr) => tr.tableId === tableId)) {
      throw new Error(`Trying to add TableRules for existing table ${tableId}`);
    }
    const defRuleSet = { tableId, colIds: "*", body: [] };
    const tableRules = TableRules.create(this._tableRules, tableId, this, void 0, defRuleSet);
    this._tableRules.push(tableRules);
    tableRules.addDefaultRules(this.getSeedRules());
  }
  _addUserAttributes() {
    this._userAttrRules.push(ObsUserAttributeRule.create(this._userAttrRules, this, void 0, { focus: true }));
  }
  _onChange() {
    if (this._ruleStatus.get() === 0 /* Unchanged */) {
      this.update().catch((e) => this._errorMessage.set(e.message));
    } else {
      this._errorMessage.set("Access rules have changed. Click Reset to revert your changes and refresh the rules.");
    }
  }
  async _updateDocAccessData() {
    await this._aclUsersPopup.load();
  }
  _addButtonsForMissingTables(buttons, tableIds) {
    for (const tableId of tableIds) {
      const title = t("Remove {{- tableId }} rules", { tableId });
      const button = (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigBasicButton)(title, cssRemoveIcon("Remove"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", async () => {
        await Promise.all(this._tableRules.get().filter((rules) => rules.tableId === tableId).map((rules) => rules.remove()));
        button.style.display = "none";
      }));
      buttons.push(button);
    }
  }
  _addButtonsForMissingColumns(buttons, tableId, colIds) {
    const removeColRules = (rules, colId) => {
      for (const rule of rules.columnRuleSets.get()) {
        const ruleColIds = new Set(rule.getColIdList());
        if (!ruleColIds.has(colId)) {
          continue;
        }
        if (ruleColIds.size === 1) {
          rule.remove();
        } else {
          rule.removeColId(colId);
        }
      }
    };
    for (const colId of colIds) {
      const title = t("Remove column {{- colId }} from {{- tableId }} rules", { tableId, colId });
      const button = (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigBasicButton)(title, cssRemoveIcon("Remove"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", async () => {
        await Promise.all(this._tableRules.get().filter((rules) => rules.tableId === tableId).map((rules) => removeColRules(rules, colId)));
        button.style.display = "none";
      }));
      buttons.push(button);
    }
  }
  _addButtonsForMisconfiguredUserAttributes(buttons, names) {
    for (const name of names) {
      const title = t("Remove {{- name }} user attribute", { name });
      const button = (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigBasicButton)(title, cssRemoveIcon("Remove"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", async () => {
        await Promise.all(this._userAttrRules.get().filter((rule) => rule.name.get() === name).map((rule) => rule.remove()));
        button.style.display = "none";
      }));
      buttons.push(button);
    }
  }
}
class TableRules extends grainjs__WEBPACK_IMPORTED_MODULE_21__.Disposable {
  constructor(tableId, _accessRules, _colRuleSets, _defRuleSet) {
    var _a2;
    super();
    this.tableId = tableId;
    this._accessRules = _accessRules;
    this._colRuleSets = _colRuleSets;
    this._defRuleSet = _defRuleSet;
    this._columnRuleSets = this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.obsArray)());
    this._haveColumnRules = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, this._columnRuleSets, (use, cols) => cols.length > 0);
    this._defaultRuleSet = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, null);
    this._columnRuleSets.set(((_a2 = this._colRuleSets) == null ? void 0 : _a2.map((rs) => this._createColumnObsRuleSet(this._columnRuleSets, this._accessRules, this, rs, rs.colIds === "*" ? [] : rs.colIds))) || []);
    if (!this._colRuleSets) {
      DefaultObsRuleSet.create(this._defaultRuleSet, this._accessRules, this, this._haveColumnRules);
    } else if (this._defRuleSet) {
      DefaultObsRuleSet.create(this._defaultRuleSet, this._accessRules, this, this._haveColumnRules, this._defRuleSet);
    }
    this.ruleStatus = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, (use) => {
      const columnRuleSets = use(this._columnRuleSets);
      const d = use(this._defaultRuleSet);
      return Math.max(getChangedStatus(!this._colRuleSets || Boolean(d) !== Boolean(this._defRuleSet) || columnRuleSets.length < this._colRuleSets.length), d ? use(d.ruleStatus) : 0 /* Unchanged */, ...columnRuleSets.map((rs) => use(rs.ruleStatus)));
    });
  }
  getCustomRules(colId) {
    for (const ruleSet of this._columnRuleSets.get()) {
      if (ruleSet.getColIds() === colId) {
        return ruleSet.getCustomRules();
      }
    }
    return [];
  }
  addDefaultRules(rules) {
    const ruleSet = this._defaultRuleSet.get();
    ruleSet == null ? void 0 : ruleSet.addRuleParts(rules, { foldEveryoneRule: true });
  }
  remove() {
    this._accessRules.removeTableRules(this);
  }
  get columnRuleSets() {
    return this._columnRuleSets;
  }
  buildDom() {
    return cssSection(cssSectionHeading((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("span", t("Rules for table "), cssTableName(this._accessRules.getTableTitle(this.tableId))), (0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.cssIconButton)((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon)("Dots"), { style: "margin-left: auto" }, (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_13__.menu)(() => [
      (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_13__.menuItemAsync)(() => this._addColumnRuleSet(), t("Add Column Rule")),
      (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_13__.menuItemAsync)(() => this._addDefaultRuleSet(), t("Add Default Rule"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.cls("disabled", (use) => Boolean(use(this._defaultRuleSet)))),
      (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_13__.menuItemAsync)(() => this._accessRules.removeTableRules(this), t("Delete Table Rules"))
    ]), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-table-menu-btn")), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-table-header")), cssTableRounded(cssTableHeaderRow(cssCell1(cssCell.cls("-rborder"), cssCell.cls("-center"), cssColHeaderCell("Columns")), cssCell4(cssColumnGroup(cssCellIcon(), cssCell2(cssColHeaderCell(t("Condition"))), cssCell1(cssColHeaderCell(t("Permissions"))), cssCellIconWithMargins(), cssCellIcon()))), this.buildColumnRuleSets()), this.buildErrors(), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-table"));
  }
  buildColumnRuleSets() {
    return [
      grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.forEach(this._columnRuleSets, (ruleSet) => ruleSet.buildRuleSetDom()),
      grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(this._defaultRuleSet, (ruleSet) => ruleSet.buildRuleSetDom())
    ];
  }
  buildErrors() {
    return grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.forEach(this._columnRuleSets, (c) => cssConditionError(grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.text(c.formulaError)));
  }
  getResources() {
    const seen = {
      allow: /* @__PURE__ */ new Set(),
      deny: /* @__PURE__ */ new Set(),
      mixed: /* @__PURE__ */ new Set()
    };
    for (const ruleSet of this._columnRuleSets.get()) {
      const sign = ruleSet.summarizePermissions();
      const counterSign = sign === "mixed" ? "mixed" : sign === "allow" ? "deny" : "allow";
      const colIds = ruleSet.getColIdList();
      if (colIds.length === 0) {
        throw new app_client_models_errors__WEBPACK_IMPORTED_MODULE_6__.UserError(`No columns listed in a column rule for table ${this.tableId}`);
      }
      for (const colId of colIds) {
        if (seen[counterSign].has(colId)) {
          throw new app_client_models_errors__WEBPACK_IMPORTED_MODULE_6__.UserError(`Column ${colId} appears in multiple rules for table ${this.tableId} that might be order-dependent. Try splitting rules up differently?`);
        }
        if (sign === "mixed") {
          seen.allow.add(colId);
          seen.deny.add(colId);
          seen.mixed.add(colId);
        } else {
          seen[sign].add(colId);
          seen.mixed.add(colId);
        }
      }
    }
    return [
      ...this._columnRuleSets.get().map((rs) => ({ tableId: this.tableId, colIds: rs.getColIds() })),
      { tableId: this.tableId, colIds: "*" }
    ];
  }
  getRules() {
    var _a2;
    return flatten(...this._columnRuleSets.get().map((rs) => rs.getRules(this.tableId)), ((_a2 = this._defaultRuleSet.get()) == null ? void 0 : _a2.getRules(this.tableId)) || []);
  }
  removeRuleSet(ruleSet) {
    if (ruleSet === this._defaultRuleSet.get()) {
      this._defaultRuleSet.set(null);
    } else {
      removeItem(this._columnRuleSets, ruleSet);
    }
    if (!this._defaultRuleSet.get() && this._columnRuleSets.get().length === 0) {
      this._accessRules.removeTableRules(this);
    }
  }
  _createColumnObsRuleSet(owner, accessRules, tableRules, ruleSet, initialColIds) {
    return ColumnObsRuleSet.create(owner, accessRules, tableRules, ruleSet, initialColIds);
  }
  _addColumnRuleSet() {
    const ruleSet = ColumnObsRuleSet.create(this._columnRuleSets, this._accessRules, this, void 0, []);
    this._columnRuleSets.push(ruleSet);
    ruleSet.addRuleParts(this._accessRules.getSeedRules(), { foldEveryoneRule: true });
  }
  _addDefaultRuleSet() {
    if (!this._defaultRuleSet.get()) {
      DefaultObsRuleSet.create(this._defaultRuleSet, this._accessRules, this, this._haveColumnRules);
      this.addDefaultRules(this._accessRules.getSeedRules());
    }
  }
}
class SpecialRules extends TableRules {
  buildDom() {
    return cssSection(cssSectionHeading(t("Special Rules"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-table-header")), this.buildCheckBoxes(), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-table"));
  }
  buildCheckBoxes() {
    return [
      this.buildColumnRuleSets(),
      this.buildErrors()
    ];
  }
  getResources() {
    return this._columnRuleSets.get().filter((rs) => !rs.hasOnlyBuiltInRules()).map((rs) => ({ tableId: this.tableId, colIds: rs.getColIds() }));
  }
  _createColumnObsRuleSet(owner, accessRules, tableRules, ruleSet, initialColIds) {
    if (isEqual(ruleSet == null ? void 0 : ruleSet.colIds, ["SchemaEdit"])) {
      return SpecialSchemaObsRuleSet.create(owner, accessRules, tableRules, ruleSet, initialColIds);
    } else {
      return SpecialObsRuleSet.create(owner, accessRules, tableRules, ruleSet, initialColIds);
    }
  }
}
class ObsRuleSet extends grainjs__WEBPACK_IMPORTED_MODULE_21__.Disposable {
  constructor(accessRules, _tableRules, _ruleSet) {
    var _a2;
    super();
    this.accessRules = accessRules;
    this._tableRules = _tableRules;
    this._ruleSet = _ruleSet;
    this._body = this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.obsArray)());
    const parts = ((_a2 = this._ruleSet) == null ? void 0 : _a2.body.map((part) => ObsRulePart.create(this._body, this, part))) || [];
    if (parts.length === 0) {
      parts.push(ObsRulePart.create(this._body, this, void 0));
    }
    this._body.set(parts);
    this.ruleStatus = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, this._body, (use, body) => {
      var _a3, _b2;
      return Math.max(getChangedStatus(body.filter((part) => !part.isEmpty(use)).length < (((_b2 = (_a3 = this._ruleSet) == null ? void 0 : _a3.body) == null ? void 0 : _b2.length) || 0)), ...body.map((part) => use(part.ruleStatus)));
    });
  }
  remove() {
    var _a2;
    (_a2 = this._tableRules) == null ? void 0 : _a2.removeRuleSet(this);
  }
  getRules(tableId) {
    return this._body.get().map((part) => __spreadProps(__spreadValues({}, part.getRulePart()), {
      resourceRec: { tableId, colIds: this.getColIds() }
    })).filter((part) => part.aclFormula || part.permissionsText);
  }
  getColIds() {
    return "*";
  }
  summarizePermissions() {
    return (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__.summarizePermissions)(this._body.get().map((p) => p.summarizePermissions()));
  }
  buildRuleSetDom() {
    return cssTableRow(cssCell1(cssCell.cls("-rborder"), this.buildResourceDom(), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-resource")), cssCell4(cssRuleBody.cls(""), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.forEach(this._body, (part) => part.buildRulePartDom()), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe((use) => !this.hasDefaultCondition(use), () => cssColumnGroup({ style: "min-height: 28px" }, cssCellIcon((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.cssIconButton)((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon)("Plus"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => this.addRulePart(null)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-add"))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-extra-add")))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-set"));
  }
  removeRulePart(rulePart) {
    var _a2;
    removeItem(this._body, rulePart);
    if (this._body.get().length === 0) {
      (_a2 = this._tableRules) == null ? void 0 : _a2.removeRuleSet(this);
    }
  }
  addRulePart(beforeRule, content, isNew = false) {
    const body = this._body.get();
    const i = beforeRule ? body.indexOf(beforeRule) : body.length;
    const part = ObsRulePart.create(this._body, this, content, isNew);
    this._body.splice(i, 0, part);
    return part;
  }
  addRuleParts(newParts, options) {
    var _a2;
    if (options.foldEveryoneRule) {
      const oldParts = this._body.get();
      const myEveryonePart = oldParts.length === 1 && !oldParts[0].getRulePart().aclFormula ? oldParts[0] : null;
      const newEveryonePart = ((_a2 = newParts[newParts.length - 1]) == null ? void 0 : _a2.getRulePart().aclFormula) ? null : newParts[newParts.length - 1];
      if (myEveryonePart && newEveryonePart) {
        removeItem(this._body, myEveryonePart);
      }
    }
    for (const part of [...newParts].reverse()) {
      const { permissionsText, aclFormula, memo } = part.getRulePart();
      if (permissionsText === void 0 || aclFormula === void 0) {
        continue;
      }
      this.addRulePart(this.getFirst() || null, {
        aclFormula,
        permissionsText,
        permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__.parsePermissions)(permissionsText),
        memo
      }, true);
    }
  }
  getFirstBuiltIn() {
    return this._body.get().find((p) => p.isBuiltIn());
  }
  getFirst() {
    return this._body.get()[0];
  }
  isSoleCondition(use, part) {
    const body = use(this._body);
    return body.length === 1 && body[0] === part;
  }
  isLastCondition(use, part) {
    const body = use(this._body);
    return body[body.length - 1] === part;
  }
  hasDefaultCondition(use) {
    const body = use(this._body);
    return body.length > 0 && body[body.length - 1].hasEmptyCondition(use);
  }
  getAvailableBits() {
    return ["read", "update", "create", "delete"];
  }
  getValidColIds() {
    var _a2;
    const tableId = (_a2 = this._tableRules) == null ? void 0 : _a2.tableId;
    return tableId && this.accessRules.getValidColIds(tableId) || [];
  }
  hasColumns() {
    return false;
  }
  hasOnlyBuiltInRules() {
    return this._body.get().every((rule) => rule.isBuiltIn());
  }
  getCustomRules() {
    return this._body.get().filter((rule) => !rule.isBuiltInOrEmpty());
  }
}
class ColumnObsRuleSet extends ObsRuleSet {
  constructor(accessRules, tableRules, ruleSet, _initialColIds) {
    super(accessRules, tableRules, ruleSet);
    this._initialColIds = _initialColIds;
    this._colIds = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, this._initialColIds);
    this.formulaError = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, (use) => {
      return accessRules.checkTableColumns(tableRules.tableId, use(this._colIds), this._initialColIds);
    });
    const baseRuleStatus = this.ruleStatus;
    this.ruleStatus = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, (use) => {
      if (use(this.formulaError)) {
        return 2 /* Invalid */;
      }
      return Math.max(getChangedStatus(!isEqual(use(this._colIds), this._initialColIds)), use(baseRuleStatus));
    });
  }
  buildResourceDom() {
    return (0,app_client_aclui_ACLColumnList__WEBPACK_IMPORTED_MODULE_0__.aclColumnList)(this._colIds, this.getValidColIds());
  }
  getColIdList() {
    return this._colIds.get();
  }
  removeColId(colId) {
    this._colIds.set(this._colIds.get().filter((c) => c !== colId));
  }
  getColIds() {
    return this._colIds.get().join(",");
  }
  getAvailableBits() {
    return ["read", "update"];
  }
  hasColumns() {
    return true;
  }
}
class DefaultObsRuleSet extends ObsRuleSet {
  constructor(accessRules, tableRules, _haveColumnRules, ruleSet) {
    super(accessRules, tableRules, ruleSet);
    this._haveColumnRules = _haveColumnRules;
  }
  buildResourceDom() {
    return [
      cssCenterContent.cls(""),
      cssDefaultLabel(grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.text((use) => this._haveColumnRules && use(this._haveColumnRules) ? "All Other" : "All"))
    ];
  }
}
const schemaEditRules = {
  allowEditors: {
    permissions: "+S",
    formula: "user.Access == EDITOR"
  },
  denyEditors: {
    permissions: "-S",
    formula: "user.Access != OWNER"
  }
};
const specialRuleProperties = {
  AccessRules: {
    name: t("Permission to view Access Rules"),
    description: t("Allow everyone to view Access Rules."),
    availableBits: ["read"],
    permissions: "+R",
    formula: "True"
  },
  FullCopies: {
    name: t("Permission to access the document in full when needed"),
    description: t(`Allow everyone to copy the entire document, or view it in full in fiddle mode.
Useful for examples and templates, but not for sensitive data.`),
    availableBits: ["read"],
    permissions: "+R",
    formula: "True"
  },
  SeedRule: {
    name: t("Seed rules"),
    description: t("When adding table rules, automatically add a rule to grant OWNER full access."),
    availableBits: ["read", "create", "update", "delete"],
    permissions: "+CRUD",
    formula: "user.Access in [OWNER]"
  },
  SchemaEdit: __spreadValues({
    name: t("Permission to edit document structure"),
    description: t("Allow editors to edit structure (e.g. modify and delete tables, columns, layouts), and to write formulas, which give access to all data regardless of read restrictions."),
    availableBits: ["schemaEdit"]
  }, schemaEditRules.denyEditors)
};
function getSpecialRuleProperties(name) {
  return specialRuleProperties[name] || __spreadProps(__spreadValues({}, specialRuleProperties.AccessRules), {
    name,
    description: name
  });
}
class SpecialObsRuleSet extends ColumnObsRuleSet {
  constructor() {
    super(...arguments);
    this._isExpanded = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, false);
  }
  get props() {
    return getSpecialRuleProperties(this.getColIds());
  }
  buildRuleSetDom() {
    const isNonStandard = this._createIsNonStandardObs();
    const isChecked = this._createIsCheckedObs(isNonStandard);
    if (isNonStandard.get()) {
      this._isExpanded.set(true);
    }
    return (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("div", grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.autoDispose(isChecked), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.autoDispose(isNonStandard), cssRuleDescription((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.cssIconButton)((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon)("Expand"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.style("transform", (use) => use(this._isExpanded) ? "rotate(90deg)" : ""), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => this._isExpanded.set(!this._isExpanded.get())), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-special-expand"), { style: "margin: -4px" }), cssCheckbox(isChecked, grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.prop("disabled", isNonStandard), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-special-checkbox")), this.props.description), this._buildDomWarning(), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(this._isExpanded, () => cssTableRounded({ style: "margin-left: 56px" }, cssTableHeaderRow(cssCellIcon(), cssCell4(cssColHeaderCell(this.props.name)), cssCell1(cssColHeaderCell("Permissions")), cssCellIconWithMargins(), cssCellIcon()), cssTableRow(cssRuleBody.cls(""), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.forEach(this._body, (part) => part.buildRulePartDom(true)), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe((use) => !this.hasDefaultCondition(use), () => cssColumnGroup({ style: "min-height: 28px" }, cssCellIcon((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.cssIconButton)((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon)("Plus"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => this.addRulePart(null)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-add"))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-extra-add")))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-set"))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-special"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)(`rule-special-${this.getColIds()}`));
  }
  getAvailableBits() {
    return this.props.availableBits;
  }
  removeRulePart(rulePart) {
    removeItem(this._body, rulePart);
    if (this._body.get().length === 0) {
      this._isExpanded.set(false);
      this._allowEveryone(false);
    }
  }
  _buildDomWarning() {
    return null;
  }
  _createIsNonStandardObs() {
    return grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(null, this._body, (use, body) => !body.every((rule) => rule.isBuiltInOrEmpty(use) || rule.matches(use, this.props.formula, this.props.permissions)));
  }
  _createIsCheckedObs(isNonStandard) {
    return grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(null, this._body, (use, body) => !use(isNonStandard) && !body.every((rule) => rule.isBuiltInOrEmpty(use))).onWrite((val) => this._allowEveryone(val));
  }
  _allowEveryone(value) {
    const builtInRules = this._body.get().filter((r) => r.isBuiltIn());
    if (value) {
      const rulePart = makeRulePart(this.props);
      this._body.set([ObsRulePart.create(this._body, this, rulePart, true), ...builtInRules]);
    } else {
      this._body.set(builtInRules);
      if (builtInRules.length === 0) {
        this._body.push(ObsRulePart.create(this._body, this, void 0));
      }
    }
  }
}
function makeRulePart({ permissions, formula }) {
  const rulePart = {
    aclFormula: formula,
    permissionsText: permissions,
    permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__.parsePermissions)(permissions)
  };
  return rulePart;
}
class SpecialSchemaObsRuleSet extends SpecialObsRuleSet {
  _buildDomWarning() {
    return grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe((use) => use(this._body).every((rule) => rule.isBuiltInOrEmpty(use)), () => cssConditionError({ style: "margin-left: 56px; margin-bottom: 8px;" }, "This default should be changed if editors' access is to be limited. ", (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("a", { style: "color: inherit; text-decoration: underline" }, "Dismiss", grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => this._allowEditors("confirm"))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-schema-edit-warning")));
  }
  _createIsNonStandardObs() {
    return grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(null, this._body, (use, body) => !body.every((rule) => rule.isBuiltInOrEmpty(use) || rule.matches(use, this.props.formula, this.props.permissions) || rule.matches(use, schemaEditRules.allowEditors.formula, schemaEditRules.allowEditors.permissions)));
  }
  _createIsCheckedObs(isNonStandard) {
    return grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(null, this._body, (use, body) => body.every((rule) => rule.isBuiltInOrEmpty(use) || rule.matches(use, schemaEditRules.allowEditors.formula, schemaEditRules.allowEditors.permissions))).onWrite((val) => this._allowEditors(val));
  }
  _allowEditors(value) {
    const builtInRules = this._body.get().filter((r) => r.isBuiltIn());
    if (value === "confirm") {
      const rulePart = makeRulePart(schemaEditRules.allowEditors);
      this._body.set([ObsRulePart.create(this._body, this, rulePart, true), ...builtInRules]);
    } else if (!value) {
      const rulePart = makeRulePart(schemaEditRules.denyEditors);
      this._body.set([ObsRulePart.create(this._body, this, rulePart, true), ...builtInRules]);
    } else {
      this._body.set(builtInRules);
    }
  }
}
class ObsUserAttributeRule extends grainjs__WEBPACK_IMPORTED_MODULE_21__.Disposable {
  constructor(_accessRules, _userAttr, _options = {}) {
    super();
    this._accessRules = _accessRules;
    this._userAttr = _userAttr;
    this._options = _options;
    this._name = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, ((_a = this._userAttr) == null ? void 0 : _a.name) || "");
    this._tableId = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, ((_b = this._userAttr) == null ? void 0 : _b.tableId) || "");
    this._lookupColId = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, ((_c = this._userAttr) == null ? void 0 : _c.lookupColId) || "");
    this._charId = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, "user." + (((_d = this._userAttr) == null ? void 0 : _d.charId) || ""));
    this._validColIds = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, this._tableId, (use, tableId) => this._accessRules.getValidColIds(tableId) || []);
    this._userAttrError = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, "");
    this.formulaError = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, this._tableId, this._lookupColId, this._userAttrError, (use, tableId, colId, userAttrError) => {
      var _a2, _b2;
      if (userAttrError.length) {
        return userAttrError;
      }
      if (use(this._tableId) === ((_a2 = this._userAttr) == null ? void 0 : _a2.tableId) && use(this._lookupColId) === ((_b2 = this._userAttr) == null ? void 0 : _b2.lookupColId)) {
        return "";
      }
      return _accessRules.checkTableColumns(tableId, colId ? [colId] : void 0);
    });
    this.ruleStatus = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, (use) => {
      var _a2, _b2, _c2, _d2;
      if (use(this.formulaError)) {
        return 2 /* Invalid */;
      }
      return getChangedStatus(use(this._name) !== ((_a2 = this._userAttr) == null ? void 0 : _a2.name) || use(this._tableId) !== ((_b2 = this._userAttr) == null ? void 0 : _b2.tableId) || use(this._lookupColId) !== ((_c2 = this._userAttr) == null ? void 0 : _c2.lookupColId) || use(this._charId) !== "user." + ((_d2 = this._userAttr) == null ? void 0 : _d2.charId));
    });
    this.autoDispose(this._tableId.addListener(() => this._lookupColId.set("")));
    this._userAttrChoices = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, _accessRules.userAttrRules, (use, rules) => {
      const index = rules.indexOf(this);
      return use(this._accessRules.userAttrChoices).filter((c) => c.ruleIndex < index);
    });
  }
  remove() {
    this._accessRules.removeUserAttributes(this);
  }
  get name() {
    return this._name;
  }
  get tableId() {
    return this._tableId;
  }
  buildUserAttrDom() {
    return cssTableRow(cssCell1(cssCell.cls("-rborder"), cssCellContent(cssInput(this._name, async (val) => this._name.set(val), { placeholder: t("Attribute name") }, this._options.focus ? (elem) => {
      setTimeout(() => elem.focus(), 0);
    } : null, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-userattr-name")))), cssCell4(cssRuleBody.cls(""), cssColumnGroup(cssCell1((0,app_client_aclui_ACLFormulaEditor__WEBPACK_IMPORTED_MODULE_1__.aclFormulaEditor)({
      initialValue: this._charId.get(),
      readOnly: false,
      setValue: (text) => this._setUserAttr(text),
      placeholder: "",
      getSuggestions: () => this._userAttrChoices.get().map((choice) => choice.value),
      customiseEditor: (editor) => {
        editor.on("focus", () => {
          var _a2;
          if (editor.getValue() == "user.") {
            (_a2 = editor.completer) == null ? void 0 : _a2.showPopup(editor);
          }
        });
      }
    }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-userattr-attr")), cssCell1((0,app_client_aclui_ACLSelect__WEBPACK_IMPORTED_MODULE_3__.aclSelect)(this._tableId, this._accessRules.allTableIds.map((tableId) => ({
      value: tableId,
      label: this._accessRules.getTableTitle(tableId)
    })), { defaultLabel: "[Select Table]" }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-userattr-table")), cssCell1((0,app_client_aclui_ACLSelect__WEBPACK_IMPORTED_MODULE_3__.aclSelect)(this._lookupColId, this._validColIds, { defaultLabel: "[Select Column]" }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-userattr-col")), cssCellIcon((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.cssIconButton)((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon)("Remove"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => this._accessRules.removeUserAttributes(this)))), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(this.formulaError, (msg) => cssConditionError(msg, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-error"))))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-userattr"));
  }
  getRule() {
    var _a2, _b2, _c2, _d2;
    const fullCharId = this._charId.get().trim();
    const strippedCharId = fullCharId.startsWith("user.") ? fullCharId.substring("user.".length) : fullCharId;
    const spec = {
      name: this._name.get(),
      tableId: this._tableId.get(),
      lookupColId: this._lookupColId.get(),
      charId: strippedCharId
    };
    for (const [prop, value] of Object.entries(spec)) {
      if (!value) {
        throw new app_client_models_errors__WEBPACK_IMPORTED_MODULE_6__.UserError(`Invalid user attribute rule: ${prop} must be set`);
      }
    }
    if (this._getUserAttrError(fullCharId)) {
      throw new app_client_models_errors__WEBPACK_IMPORTED_MODULE_6__.UserError(`Invalid user attribute to look up`);
    }
    return {
      id: (_b2 = (_a2 = this._userAttr) == null ? void 0 : _a2.origRecord) == null ? void 0 : _b2.id,
      rulePos: (_d2 = (_c2 = this._userAttr) == null ? void 0 : _c2.origRecord) == null ? void 0 : _d2.rulePos,
      userAttributes: JSON.stringify(spec)
    };
  }
  _setUserAttr(text) {
    if (text === this._charId.get()) {
      return;
    }
    this._charId.set(text);
    this._userAttrError.set(this._getUserAttrError(text) || "");
  }
  _getUserAttrError(text) {
    text = text.trim();
    if (text.startsWith("user.LinkKey")) {
      if (/user\.LinkKey\.\w+$/.test(text)) {
        return null;
      }
      return "Use a simple attribute of user.LinkKey, e.g. user.LinkKey.something";
    }
    const isChoice = this._userAttrChoices.get().map((choice) => choice.value).includes(text);
    if (!isChoice) {
      return "Not a valid user attribute";
    }
    return null;
  }
}
class ObsRulePart extends grainjs__WEBPACK_IMPORTED_MODULE_21__.Disposable {
  constructor(_ruleSet, _rulePart, isNew = false) {
    var _a2;
    super();
    this._ruleSet = _ruleSet;
    this._rulePart = _rulePart;
    this._aclFormula = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, ((_e = this._rulePart) == null ? void 0 : _e.aclFormula) || "");
    this._completions = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, (use) => [
      ...use(this._ruleSet.accessRules.userAttrChoices).map((opt) => opt.value),
      ...this._ruleSet.getValidColIds().map((colId) => `rec.${colId}`),
      ...this._ruleSet.getValidColIds().map((colId) => `$${colId}`),
      ...this._ruleSet.getValidColIds().map((colId) => `newRec.${colId}`)
    ]);
    this._permissions = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, ((_f = this._rulePart) == null ? void 0 : _f.permissions) || (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__.emptyPermissionSet)());
    this._checkPending = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, false);
    this._formulaError = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, "");
    this._formulaProperties = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, getAclFormulaProperties(this._rulePart));
    this._memo = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, (_a2 = _rulePart == null ? void 0 : _rulePart.memo) != null ? _a2 : "");
    if (_rulePart && isNew) {
      this._rulePart = void 0;
    }
    this._showMemoEditor = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, !this.isBuiltIn() && this._memo.get() !== "");
    this._error = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, (use) => {
      return use(this._formulaError) || this._warnInvalidColIds(use(this._formulaProperties).usedColIds) || (!this._ruleSet.isLastCondition(use, this) && use(this._aclFormula) === "" && (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__.permissionSetToText)(use(this._permissions)) !== "" ? "Condition cannot be blank" : "");
    });
    const emptyPerms = (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__.emptyPermissionSet)();
    this.ruleStatus = grainjs__WEBPACK_IMPORTED_MODULE_21__.Computed.create(this, (use) => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      if (use(this._error)) {
        return 2 /* Invalid */;
      }
      if (use(this._checkPending)) {
        return 3 /* CheckPending */;
      }
      return getChangedStatus(use(this._aclFormula) !== ((_b2 = (_a3 = this._rulePart) == null ? void 0 : _a3.aclFormula) != null ? _b2 : "") || use(this._memo) !== ((_d2 = (_c2 = this._rulePart) == null ? void 0 : _c2.memo) != null ? _d2 : "") || !isEqual(use(this._permissions), (_f2 = (_e2 = this._rulePart) == null ? void 0 : _e2.permissions) != null ? _f2 : emptyPerms));
    });
  }
  getRulePart() {
    var _a2, _b2, _c2, _d2;
    const id = this.isBuiltIn() ? 0 : (_b2 = (_a2 = this._rulePart) == null ? void 0 : _a2.origRecord) == null ? void 0 : _b2.id;
    return {
      id,
      aclFormula: this._aclFormula.get(),
      permissionsText: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__.permissionSetToText)(this._permissions.get()),
      rulePos: (_d2 = (_c2 = this._rulePart) == null ? void 0 : _c2.origRecord) == null ? void 0 : _d2.rulePos,
      memo: this._memo.get()
    };
  }
  hasEmptyCondition(use) {
    return use(this._aclFormula) === "";
  }
  matches(use, aclFormula, permissionsText) {
    return use(this._aclFormula) === aclFormula && (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__.permissionSetToText)(use(this._permissions)) === permissionsText;
  }
  summarizePermissions() {
    return (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__.summarizePermissionSet)(this._permissions.get());
  }
  sanityCheck(pset) {
  }
  buildRulePartDom(wide = false) {
    return cssRulePartAndMemo(cssColumnGroup(cssCellIcon(this._isNonFirstBuiltIn() ? null : (0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.cssIconButton)((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon)("Plus"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => this._ruleSet.addRulePart(this)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-add"))), cssCell2(wide ? cssCell4.cls("") : null, (0,app_client_aclui_ACLFormulaEditor__WEBPACK_IMPORTED_MODULE_1__.aclFormulaEditor)({
      initialValue: this._aclFormula.get(),
      readOnly: this.isBuiltIn(),
      setValue: (value) => this._setAclFormula(value),
      placeholder: grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.text((use) => {
        return this._ruleSet.isSoleCondition(use, this) ? t("Everyone") : this._ruleSet.isLastCondition(use, this) ? t("Everyone Else") : t("Enter Condition");
      }),
      getSuggestions: (prefix) => this._completions.get()
    }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-acl-formula")), cssCell1(cssCell.cls("-stretch"), (0,app_client_aclui_PermissionsWidget__WEBPACK_IMPORTED_MODULE_5__.permissionsWidget)(this._ruleSet.getAvailableBits(), this._permissions, { disabled: this.isBuiltIn(), sanityCheck: (pset) => this.sanityCheck(pset) }, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-permissions"))), cssCellIconWithMargins(grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe((use) => !this.isBuiltIn() && !use(this._showMemoEditor), () => (0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.cssIconButton)((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon)("Memo"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => {
      this._showMemoEditor.set(true);
      setTimeout(() => {
        var _a2;
        return (_a2 = this._memoEditor) == null ? void 0 : _a2.focus();
      }, 0);
    }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-memo-add")))), cssCellIcon(this.isBuiltIn() ? null : (0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.cssIconButton)((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon)("Remove"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => this._ruleSet.removeRulePart(this)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-remove"))), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(this._error, (msg) => cssConditionError(msg, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-error"))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-part")), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(this._showMemoEditor, () => cssMemoColumnGroup(cssCellIcon(), cssMemoIcon("Memo"), cssCell2(wide ? cssCell4.cls("") : null, this._memoEditor = (0,app_client_aclui_ACLMemoEditor__WEBPACK_IMPORTED_MODULE_2__.aclMemoEditor)(this._memo, {
      placeholder: t("Type a message...")
    }, grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.onKeyDown({
      Enter: (_ev, el) => el.blur()
    })), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-memo-editor")), cssCellIconWithMargins(), cssCellIcon((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.cssIconButton)((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon)("Remove"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => {
      this._showMemoEditor.set(false);
      this._memo.set("");
    }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-memo-remove"))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-memo"))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.testId)("rule-part-and-memo"));
  }
  isBuiltIn() {
    var _a2;
    return this._rulePart ? !((_a2 = this._rulePart.origRecord) == null ? void 0 : _a2.id) : false;
  }
  isEmpty(use = app_common_gutil__WEBPACK_IMPORTED_MODULE_20__.unwrap) {
    return use(this._aclFormula) === "" && isEqual(use(this._permissions), (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_14__.emptyPermissionSet)()) && use(this._memo) === "";
  }
  isBuiltInOrEmpty(use = app_common_gutil__WEBPACK_IMPORTED_MODULE_20__.unwrap) {
    return this.isBuiltIn() || this.isEmpty(use);
  }
  _isNonFirstBuiltIn() {
    return this.isBuiltIn() && this._ruleSet.getFirstBuiltIn() !== this;
  }
  async _setAclFormula(text) {
    if (text === this._aclFormula.get()) {
      return;
    }
    this._aclFormula.set(text);
    this._checkPending.set(true);
    this._formulaProperties.set({});
    this._formulaError.set("");
    try {
      this._formulaProperties.set(await this._ruleSet.accessRules.checkAclFormula(text));
      this.sanityCheck();
    } catch (e) {
      this._formulaError.set(e.message);
    } finally {
      this._checkPending.set(false);
    }
  }
  _warnInvalidColIds(colIds) {
    if (!colIds || !colIds.length) {
      return false;
    }
    const allValid = new Set(this._ruleSet.getValidColIds());
    const invalid = colIds.filter((c) => !allValid.has(c));
    if (invalid.length > 0) {
      return `Invalid columns: ${invalid.join(", ")}`;
    }
  }
}
function syncRecords(tableData, newRecords, uniqueId = (r) => String(r.id)) {
  const oldRecords = tableData.getRecords();
  const rowIdMap = new Map(oldRecords.map((r) => [uniqueId(r), r.id]));
  const newRecordMap = new Map(newRecords.map((r) => [uniqueId(r), r]));
  const removedRecords = oldRecords.filter((r) => !newRecordMap.has(uniqueId(r)));
  const addedRecords = newRecords.filter((r) => !rowIdMap.has(uniqueId(r))).map((r, index) => __spreadProps(__spreadValues({}, r), { id: -(index + 1) }));
  const updatedRecords = oldRecords.map((r) => {
    const newRec = newRecordMap.get(uniqueId(r));
    const updated = newRec && __spreadProps(__spreadValues(__spreadValues({}, r), newRec), { id: r.id });
    return updated && !isEqual(updated, r) ? [r, updated] : null;
  }).filter(app_common_gutil__WEBPACK_IMPORTED_MODULE_20__.isNonNullish);
  console.log("syncRecords: removing [%s], adding [%s], updating [%s]", removedRecords.map(uniqueId).join(", "), addedRecords.map(uniqueId).join(", "), updatedRecords.map(([r]) => uniqueId(r)).join(", "));
  const tableId = tableData.tableId;
  const userActions = [];
  if (removedRecords.length > 0) {
    userActions.push(["BulkRemoveRecord", tableId, removedRecords.map((r) => r.id)]);
  }
  if (updatedRecords.length > 0) {
    userActions.push(["BulkUpdateRecord", tableId, updatedRecords.map(([r]) => r.id), getColChanges(updatedRecords)]);
  }
  if (addedRecords.length > 0) {
    userActions.push(["BulkAddRecord", tableId, addedRecords.map((r) => r.id), (0,app_common_DocActions__WEBPACK_IMPORTED_MODULE_17__.getColValues)(addedRecords)]);
  }
  addedRecords.forEach((r) => rowIdMap.set(uniqueId(r), r.id));
  return { userActions, rowIdMap };
}
function getColChanges(pairs) {
  const colIdSet = /* @__PURE__ */ new Set();
  for (const [before, after] of pairs) {
    for (const c of Object.keys(after)) {
      if (c !== "id" && !isEqual(before[c], after[c])) {
        colIdSet.add(c);
      }
    }
  }
  const result = {};
  for (const colId of colIdSet) {
    result[colId] = pairs.map(([before, after]) => after[colId]);
  }
  return result;
}
function serializeResource(rec) {
  return JSON.stringify([rec.tableId, rec.colIds]);
}
function flatten(...args) {
  return [].concat(...args);
}
function removeItem(observableArray, item) {
  const i = observableArray.get().indexOf(item);
  if (i >= 0) {
    observableArray.splice(i, 1);
    return true;
  }
  return false;
}
function getChangedStatus(value) {
  return value ? 1 /* ChangedValid */ : 0 /* Unchanged */;
}
function getAclFormulaProperties(part) {
  var _a2;
  const aclFormulaParsed = (_a2 = part == null ? void 0 : part.origRecord) == null ? void 0 : _a2.aclFormulaParsed;
  return aclFormulaParsed ? (0,app_common_GranularAccessClause__WEBPACK_IMPORTED_MODULE_18__.getFormulaProperties)(JSON.parse(String(aclFormulaParsed))) : {};
}
function filterRuleSet(colIds, ruleSet) {
  if (!ruleSet) {
    return void 0;
  }
  if (ruleSet.colIds === "*") {
    return ruleSet;
  }
  for (const colId of ruleSet.colIds) {
    if (colIds.includes(colId)) {
      return ruleSet;
    }
  }
  return void 0;
}
function filterRuleSets(colIds, ruleSets) {
  return ruleSets.map((ruleSet) => filterRuleSet(colIds, ruleSet)).filter((rs) => rs);
}
const cssOuter = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  flex: auto;
  height: 100%;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`);
const cssAddTableRow = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  flex: none;
  margin: 16px 16px 8px 16px;
  display: flex;
  gap: 16px;
`);
const cssDropdownIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon, `
  margin: -2px -2px 0 4px;
`);
const cssRemoveIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon, `
  margin: -2px -2px 0 4px;
`);
const cssSection = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  margin: 16px 16px 24px 16px;
`);
const cssSectionHeading = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.lightText};
`);
const cssTableName = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("span", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.text};
`);
const cssInput = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(app_client_ui2018_editableLabel__WEBPACK_IMPORTED_MODULE_11__.textInput, `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.inputFg};
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.inputBg};
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.inputBorder};
  }
  &:focus {
    box-shadow: inset 0 0 0 1px ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.controlFg};
    border-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.controlFg};
    cursor: unset;
  }
  &[disabled] {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.inputDisabledFg};
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.inputDisabledBg};
    box-shadow: unset;
    border-color: transparent;
  }
  &::placeholder {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.inputPlaceholderFg};
  }
`);
const cssConditionError = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  margin-top: 4px;
  width: 100%;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.errorText};
`);
const cssTableRounded = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.accessRulesTableBorder};
  border-radius: 8px;
  overflow: hidden;
`);
const cssTableRow = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  display: flex;
  border-bottom: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.accessRulesTableBorder};
  &:last-child {
    border-bottom: none;
  }
`);
const cssTableHeaderRow = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(cssTableRow, `
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.accessRulesTableHeaderBg};
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.accessRulesTableHeaderFg};
`);
const cssColHeaderCell = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  margin: 4px 8px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
`);
const cssCell = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  min-width: 0px;
  overflow: hidden;

  &-rborder {
    border-right: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.accessRulesTableBorder};
  }
  &-center {
    text-align: center;
  }
  &-stretch {
    min-width: unset;
    overflow: visible;
  }
`);
const cssCellIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(cssCell, `flex: none; width: 24px;`);
const cssCellIconWithMargins = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(cssCellIcon, `margin: 0px 8px;`);
const cssCell1 = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(cssCell, `flex: 1;`);
const cssCell2 = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(cssCell, `flex: 2;`);
const cssCell4 = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(cssCell, `flex: 4;`);
const cssColumnGroup = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  display: flex;
  align-items: center;
  gap: 0px 8px;
  margin: 0 8px;
  flex-wrap: wrap;
`);
const cssRuleBody = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 4px 0;
`);
const cssRuleDescription = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.text};
  display: flex;
  align-items: top;
  margin: 16px 0 8px 0;
  gap: 12px;
  white-space: pre-line;  /* preserve line breaks in long descriptions */
`);
const cssCheckbox = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(app_client_ui2018_checkbox__WEBPACK_IMPORTED_MODULE_9__.squareCheckbox, `
  flex: none;
`);
const cssCellContent = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  margin: 4px 8px;
`);
const cssCenterContent = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  display: flex;
  align-items: center;
  justify-content: center;
`);
const cssDefaultLabel = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.accessRulesTableBodyFg};
  font-weight: bold;
`);
const cssRuleProblems = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  flex: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`);
const cssRulePartAndMemo = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`);
const cssMemoColumnGroup = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(cssColumnGroup, `
  margin-bottom: 8px;
`);
const cssMemoIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_12__.icon, `
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_10__.theme.accentIcon};
  margin-left: 8px;
  margin-right: 8px;
`);
const cssSeedRule = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  margin-bottom: 16px;
`);


/***/ }),

/***/ "./app/client/aclui/PermissionsWidget.ts":
/*!***********************************************!*\
  !*** ./app/client/aclui/PermissionsWidget.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "permissionsWidget": () => (/* binding */ permissionsWidget)
/* harmony export */ });
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/ACLPermissions */ "./app/common/ACLPermissions.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));






const isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

const PERMISSION_BIT_ORDER = "RUCDS";
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_6__.makeT)("PermissionsWidget");
function permissionsWidget(availableBits, pset, options, ...args) {
  availableBits = sortBits(availableBits);
  const empty = (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_3__.emptyPermissionSet)();
  const allowAll = makePermissionSet(availableBits, () => "allow");
  const denyAll = makePermissionSet(availableBits, () => "deny");
  const readOnly = makePermissionSet(availableBits, (b) => b === "read" ? "allow" : "deny");
  const setPermissions = (p) => {
    var _a;
    (_a = options.sanityCheck) == null ? void 0 : _a.call(options, p);
    pset.set(p);
  };
  return cssPermissions(grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.forEach(availableBits, (bit) => {
    return cssBit(bit.slice(0, 1).toUpperCase(), cssBit.cls((use) => "-" + use(pset)[bit]), grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.attr("title", (use) => (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_4__.capitalize)(`${use(pset)[bit]} ${bit}`.trim())), grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.cls("disabled", options.disabled), options.disabled ? null : grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.on("click", () => setPermissions(__spreadProps(__spreadValues({}, pset.get()), { [bit]: next(pset.get()[bit]) }))));
  }), (0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_1__.cssIconButton)((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_1__.icon)("Dropdown"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.testId)("permissions-dropdown"), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menu)(() => {
    const isCustom = [allowAll, denyAll, readOnly, empty].every((ps) => !isEqual(ps, pset.get()));
    return [
      isCustom ? cssMenuItem(() => null, grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.cls("disabled"), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuIcon)("Tick"), cssMenuItemContent("Custom", cssMenuItemDetails(grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.text((use) => psetDescription(use(pset)))))) : null,
      cssMenuItem(() => setPermissions(allowAll), tick(isEqual(pset.get(), allowAll)), t("Allow All"), grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.cls("disabled", options.disabled)),
      cssMenuItem(() => setPermissions(denyAll), tick(isEqual(pset.get(), denyAll)), t("Deny All"), grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.cls("disabled", options.disabled)),
      cssMenuItem(() => setPermissions(readOnly), tick(isEqual(pset.get(), readOnly)), t("Read Only"), grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.cls("disabled", options.disabled)),
      cssMenuItem(() => setPermissions(empty), isEqual(pset.get(), empty) ? [tick(true), "No Effect"] : [tick(false), "Clear"], grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.cls("disabled", options.disabled))
    ];
  })), ...args);
}
function next(pvalue) {
  switch (pvalue) {
    case "allow":
      return "";
    case "deny":
      return "allow";
  }
  return "deny";
}
function makePermissionSet(bits, makeValue) {
  const pset = (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_3__.emptyPermissionSet)();
  for (const bit of bits) {
    pset[bit] = makeValue(bit);
  }
  return pset;
}
function tick(show) {
  return show ? (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuIcon)("Tick") : cssMenuIconSpace();
}
function psetDescription(permissionSet) {
  const allow = [];
  const deny = [];
  for (const prop of app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_3__.ALL_PERMISSION_PROPS) {
    const value = permissionSet[prop];
    if (value === "allow") {
      allow.push((0,app_common_gutil__WEBPACK_IMPORTED_MODULE_4__.capitalize)(prop));
    } else if (value === "deny") {
      deny.push((0,app_common_gutil__WEBPACK_IMPORTED_MODULE_4__.capitalize)(prop));
    }
  }
  const parts = [];
  if (allow.length) {
    parts.push(`Allow ${allow.join(", ")}.`);
  }
  if (deny.length) {
    parts.push(`Deny ${deny.join(", ")}.`);
  }
  return parts.join(" ");
}
function sortBits(bits) {
  return bits.sort((a, b) => {
    const aIndex = PERMISSION_BIT_ORDER.indexOf(a.slice(0, 1).toUpperCase());
    const bIndex = PERMISSION_BIT_ORDER.indexOf(b.slice(0, 1).toUpperCase());
    return aIndex - bIndex;
  });
}
const cssPermissions = (0,grainjs__WEBPACK_IMPORTED_MODULE_5__.styled)("div", `
  display: flex;
  gap: 4px;
`);
const cssBit = (0,grainjs__WEBPACK_IMPORTED_MODULE_5__.styled)("div", `
  flex: none;
  height: 24px;
  width: 24px;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 500;
  border: 1px dashed ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.colors.darkGrey};
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.colors.darkGrey};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &-allow {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.colors.lightGreen};
    border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.colors.lightGreen};
    color: white;
  }
  &-deny {
    background-image: linear-gradient(-45deg, ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.colors.error} 14px, white 15px 16px, ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.colors.error} 16px);
    border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.colors.error};
    color: white;
  }
  &.disabled {
    opacity: 0.5;
  }
`);
const cssMenuIconSpace = (0,grainjs__WEBPACK_IMPORTED_MODULE_5__.styled)("div", `
  width: 24px;
`);
const cssMenuItem = (0,grainjs__WEBPACK_IMPORTED_MODULE_5__.styled)(app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItem, `
  align-items: start;
  &.disabled {
    opacity: unset;
  }
`);
const cssMenuItemContent = (0,grainjs__WEBPACK_IMPORTED_MODULE_5__.styled)("div", `
  display: flex;
  flex-direction: column;
`);
const cssMenuItemDetails = (0,grainjs__WEBPACK_IMPORTED_MODULE_5__.styled)("div", `
  font-size: 12px;
`);


/***/ }),

/***/ "./app/client/components/ActionLog.ts":
/*!********************************************!*\
  !*** ./app/client/components/ActionLog.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionLog": () => (/* binding */ ActionLog)
/* harmony export */ });
/* harmony import */ var app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/dispose */ "./app/client/lib/dispose.js");
/* harmony import */ var app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/lib/dom */ "./app/client/lib/dom.js");
/* harmony import */ var app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_common_timeFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/timeFormat */ "./app/common/timeFormat.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_client_lib_koArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/lib/koArray */ "./app/client/lib/koArray.js");
/* harmony import */ var app_client_lib_koArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(app_client_lib_koArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/lib/koDom */ "./app/client/lib/koDom.js");
/* harmony import */ var app_client_lib_koForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/lib/koForm */ "./app/client/lib/koForm.js");
/* harmony import */ var app_common_ActionSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/common/ActionSummary */ "./app/common/ActionSummary.ts");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");




const map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");





const gristNotify = window.gristNotify;
const state = {
  UNDONE: "undone",
  BURIED: "buried",
  DEFAULT: "default"
};
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_8__.makeT)("ActionLog");
class ActionLog extends app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_0__.Disposable {
  constructor() {
    super(...arguments);
    this._pending = [];
    this._loaded = false;
  }
  create(options) {
    this._showAllTables = knockout__WEBPACK_IMPORTED_MODULE_3__.observable(false);
    this._loading = knockout__WEBPACK_IMPORTED_MODULE_3__.observable(false);
    this._gristDoc = options.gristDoc;
    this._displayStack = app_client_lib_koArray__WEBPACK_IMPORTED_MODULE_4___default()();
    if (!this._gristDoc) {
      this._selectedTableId = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_3__.computed(() => ""));
    } else {
      this._selectedTableId = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_3__.computed(() => this._gristDoc.viewModel.activeSection().table().tableId()));
    }
  }
  buildDom() {
    return this._buildLogDom();
  }
  pushAction(ag) {
    if (this._loading()) {
      this._pending.push(ag);
      return;
    }
    this._setupFilters(ag, this._displayStack.at(0) || void 0);
    const otherAg = ag.otherId ? this._displayStack.all().find((a) => a.actionNum === ag.otherId) : null;
    if (otherAg) {
      if (otherAg.state) {
        otherAg.state(ag.isUndo ? state.UNDONE : state.DEFAULT);
      }
    } else {
      if (ag.fromSelf) {
        for (let i = 0; i < this._displayStack.peekLength; i++) {
          const prevAction = this._displayStack.at(i);
          if (!prevAction.state) {
            continue;
          }
          const prevState = prevAction.state();
          if (prevAction.fromSelf && prevState === state.DEFAULT) {
            break;
          } else if (prevAction.fromSelf && prevState === state.UNDONE) {
            prevAction.state(state.BURIED);
          }
        }
      }
      if (!ag.otherId) {
        ag.state = knockout__WEBPACK_IMPORTED_MODULE_3__.observable(state.DEFAULT);
        this._displayStack.unshift(ag);
      }
    }
  }
  renderTabularDiffs(sum, txt, ag) {
    const act = (0,app_common_ActionSummary__WEBPACK_IMPORTED_MODULE_7__.asTabularDiffs)(sum);
    const editDom = app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div", this._renderTableSchemaChanges(sum, ag), this._renderColumnSchemaChanges(sum, ag), map(act, (tdiff, table) => {
      if (tdiff.cells.length === 0) {
        return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div");
      }
      return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("table.action_log_table", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_5__.show(() => this._showForTable(table, ag)), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("caption", this._renderTableName(table)), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("tr", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("th"), tdiff.header.map((diff) => {
        return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("th", this._renderCell(diff));
      })), tdiff.cells.map((row) => {
        return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("tr", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("td", this._renderCell(row[0])), row[2].map((diff, idx) => {
          return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("td", this._renderCell(diff), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default().on("click", () => {
            return this._selectCell(row[1], act[table].header[idx], table, ag ? ag.actionNum : 0);
          }));
        }));
      }));
    }), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_comment", txt));
    return editDom;
  }
  _setupFilters(ag, prev) {
    const filt = ag.tableFilters = {};
    if (prev) {
      const renames = new Map(ag.actionSummary.tableRenames);
      for (const name of Object.keys(prev.tableFilters)) {
        if (name.startsWith("-")) {
        } else if (renames.has(name)) {
          const newName = renames.get(name) || (0,app_common_ActionSummary__WEBPACK_IMPORTED_MODULE_7__.defunctTableName)(name);
          filt[newName] = prev.tableFilters[name];
          filt[newName](newName);
        } else {
          filt[name] = prev.tableFilters[name];
        }
      }
    }
    const names = (0,app_common_ActionSummary__WEBPACK_IMPORTED_MODULE_7__.getAffectedTables)(ag.actionSummary);
    for (const name of names) {
      if (!filt[name]) {
        filt[name] = knockout__WEBPACK_IMPORTED_MODULE_3__.observable(name);
      }
    }
    ag.affectedTableIds = names.map((name) => ag.tableFilters[name]).filter((obs) => obs);
  }
  _hasSelectedTable(ag) {
    if (!this._gristDoc) {
      return true;
    }
    return ag.affectedTableIds.some((tableId) => tableId() === this._selectedTableId());
  }
  _showForTable(tableName, ag) {
    if (!ag) {
      return true;
    }
    const obs = ag.tableFilters[tableName];
    return this._showAllTables() || !obs || obs() === this._selectedTableId();
  }
  _buildLogDom() {
    this._loadActionSummaries().catch((error) => gristNotify(t("Action Log failed to load")));
    return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div.action_log", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div.preference_item", app_client_lib_koForm__WEBPACK_IMPORTED_MODULE_6__.checkbox(this._showAllTables, app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default().testId("ActionLog_allTables"), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.preference_desc", "All tables"))), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div.action_log_load", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_5__.show(() => this._loading()), "Loading..."), app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_5__.foreach(this._displayStack, (ag) => {
      const timestamp = ag.time ? (0,app_common_timeFormat__WEBPACK_IMPORTED_MODULE_2__.timeFormat)("D T", new Date(ag.time)) : "";
      let desc = ag.desc || "";
      if (ag.actionSummary) {
        desc = this.renderTabularDiffs(ag.actionSummary, desc, ag);
      }
      return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div.action_log_item", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_5__.cssClass(ag.state), app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_5__.show(() => this._showAllTables() || this._hasSelectedTable(ag)), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div.action_info", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_info_action_num", `#${ag.actionNum}`), ag.user ? app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_info_user", ag.user, app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_5__.toggleClass("action_info_from_self", ag.fromSelf)) : "", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_info_timestamp", timestamp)), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_desc", desc));
    }));
  }
  async _loadActionSummaries() {
    if (this._loaded || !this._gristDoc) {
      return;
    }
    this._loading(true);
    const result = await this._gristDoc.docComm.getActionSummaries();
    this._loading(false);
    this._loaded = true;
    result.forEach((item) => this.pushAction(item));
    const top = result.length > 0 ? result[result.length - 1].actionNum : 0;
    for (const item of this._pending) {
      if (item.actionNum > top) {
        this.pushAction(item);
      }
    }
    this._pending.length = 0;
  }
  _renderCell(cell) {
    if (cell === null) {
      return "...";
    }
    if (typeof cell === "string") {
      return cell;
    }
    const [pre, post] = cell;
    if (!pre && !post) {
      return "";
    } else if (pre && !post) {
      return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_log_cell_remove", pre[0]);
    } else if (post && (pre === null || (pre[0] === null || pre[0] === ""))) {
      return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_log_cell_add", post[0]);
    } else if (pre && post) {
      return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_log_cell_remove.action_log_cell_pre", pre[0]), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_log_cell_add", post[0]));
    }
    return JSON.stringify(cell);
  }
  _renderTableName(name) {
    if (name.indexOf("_grist_") !== 0) {
      return name;
    }
    const metaName = name.split("_grist_")[1].replace(/_/g, ".");
    return `[${metaName}]`;
  }
  _renderSchemaChange(scope, pair, ag) {
    const [pre, post] = pair;
    if ((pre || post) === "manualSort") {
      return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div");
    }
    return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div.action_log_rename", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_5__.show(() => this._showForTable(post || (0,app_common_ActionSummary__WEBPACK_IMPORTED_MODULE_7__.defunctTableName)(pre), ag)), !post ? ["Remove ", scope, app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_log_rename_pre", pre)] : !pre ? ["Add ", scope, app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_log_rename_post", post)] : [
      "Rename ",
      scope,
      app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_log_rename_pre", pre),
      " to ",
      app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("span.action_log_rename_post", post)
    ]);
  }
  _renderTableSchemaChanges(sum, ag) {
    return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div", sum.tableRenames.map((pair) => this._renderSchemaChange("", pair, ag)));
  }
  _renderColumnSchemaChanges(sum, ag) {
    return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div", Object.keys(sum.tableDeltas).filter((key) => !key.startsWith("-")).map((key) => app_client_lib_dom__WEBPACK_IMPORTED_MODULE_1___default()("div", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_5__.show(() => this._showForTable(key, ag)), sum.tableDeltas[key].columnRenames.map((pair) => this._renderSchemaChange(key + ".", pair)))));
  }
  async _selectCell(rowId, colId, tableId, actionNum) {
    if (!this._gristDoc) {
      return;
    }
    const index = this._displayStack.peek().findIndex((a) => a.actionNum === actionNum);
    if (index < 0) {
      throw new Error(`Cannot find action ${actionNum} in the action log.`);
    }
    for (let i = index; i >= 0; i--) {
      const action = this._displayStack.at(i);
      const sum = action.actionSummary;
      const tableRename = sum.tableRenames.find((r) => r[0] === tableId);
      if (tableRename) {
        const newName = tableRename[1];
        if (!newName) {
          gristNotify(t("Table {{tableId}} was subsequently removed in action #{{actionNum}}", { tableId, actionNum: action.actionNum }));
          return;
        }
        tableId = newName;
      }
      const td = sum.tableDeltas[tableId];
      if (!td) {
        continue;
      }
      if (td.removeRows.indexOf(rowId) >= 0) {
        gristNotify(t("This row was subsequently removed in action {{action.actionNum}}", { actionNum }));
        return;
      }
      const columnRename = td.columnRenames.find((r) => r[0] === colId);
      if (columnRename) {
        const newName = columnRename[1];
        if (!newName) {
          gristNotify(t("Column {{colId}} was subsequently removed in action #{{action.actionNum}}", { colId, actionNum: action.actionNum }));
          return;
        }
        colId = newName;
      }
    }
    const tableModel = this._gristDoc.getTableModel(tableId);
    if (!tableModel) {
      return;
    }
    const viewRow = tableModel.tableMetaRow.primaryView();
    const viewId = viewRow.getRowId();
    await this._gristDoc.openDocPage(viewId);
    const viewSection = viewRow.viewSections().peek().find((s) => s.table().tableId() === tableId);
    if (!viewSection) {
      return;
    }
    const sectionId = viewSection.getRowId();
    const fieldIndex = viewSection.viewFields().peek().findIndex((f) => f.colId.peek() === colId);
    this._gristDoc.moveToCursorPos({ rowId, sectionId, fieldIndex }).catch(() => {
    });
  }
}


/***/ }),

/***/ "./app/client/components/BaseView2.ts":
/*!********************************************!*\
  !*** ./app/client/components/BaseView2.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parsePasteForView": () => (/* binding */ parsePasteForView)
/* harmony export */ });
/* harmony import */ var app_client_lib_tableUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/tableUtil */ "./app/client/lib/tableUtil.ts");
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");


const omit = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
async function parsePasteForView(data, fields, gristDoc) {
  const result = {};
  const actions = [];
  const thisDocIdHash = (0,app_client_lib_tableUtil__WEBPACK_IMPORTED_MODULE_0__.getDocIdHash)();
  data.forEach((col, idx) => {
    const field = fields[idx];
    const colRec = field == null ? void 0 : field.column();
    if (!colRec || colRec.isRealFormula() || colRec.disableEditData()) {
      return;
    }
    const parser = field.createValueParser() || ((x) => x);
    let typeMatches = false;
    if (col[0] && typeof col[0] === "object") {
      const { colType, docIdHash, colRef } = col[0];
      const targetType = colRec.type();
      const docIdMatches = docIdHash === thisDocIdHash;
      typeMatches = docIdMatches || !(0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_1__.isFullReferencingType)(colType || "");
      if (targetType !== "Any") {
        typeMatches = typeMatches && colType === targetType;
      } else if (docIdMatches && colRef) {
        const sourceColRec = gristDoc.docModel.columns.getRowModel(colRef);
        const sourceType = sourceColRec.type();
        if (sourceColRec.getRowId() && sourceType !== "Text" && sourceType === colType) {
          const colInfo = {
            type: sourceType,
            visibleCol: sourceColRec.visibleCol(),
            widgetOptions: JSON.stringify(omit(sourceColRec.widgetOptionsJson(), "rulesOptions"))
          };
          actions.push(["UpdateRecord", "_grist_Tables_column", colRec.getRowId(), colInfo], ["MaybeCopyDisplayFormula", colRef, colRec.getRowId()]);
        }
      }
    }
    result[colRec.colId()] = col.map((v) => {
      if (v) {
        if (typeof v === "string") {
          return parser(v);
        }
        if (typeMatches && v.hasOwnProperty("rawValue")) {
          return v.rawValue;
        }
        if (v.hasOwnProperty("displayValue")) {
          return parser(v.displayValue);
        }
      }
      return v;
    });
  });
  if (actions.length) {
    await gristDoc.docData.sendActions(actions);
  }
  return result;
}


/***/ }),

/***/ "./app/client/components/CellPosition.ts":
/*!***********************************************!*\
  !*** ./app/client/components/CellPosition.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CellPosition": () => (/* binding */ CellPosition),
/* harmony export */   "fromCursor": () => (/* binding */ fromCursor),
/* harmony export */   "toCursor": () => (/* binding */ toCursor)
/* harmony export */ });
const BaseRowModel = __webpack_require__(/*! app/client/models/BaseRowModel */ "./app/client/models/BaseRowModel.js");
class CellPosition {
  static equals(a, b) {
    return a && b && a.colRef == b.colRef && a.sectionId == b.sectionId && a.rowId == b.rowId;
  }
  static create(row, field) {
    const rowId = row.id.peek();
    const colRef = field.colRef.peek();
    const sectionId = field.viewSection.peek().id.peek();
    return { rowId, colRef, sectionId };
  }
}
function fromCursor(position, docModel) {
  var _a;
  if (!position.sectionId || !position.rowId || position.fieldIndex == null) {
    return null;
  }
  const section = docModel.viewSections.getRowModel(position.sectionId);
  const colRef = (_a = section.viewFields().peek()[position.fieldIndex]) == null ? void 0 : _a.colRef.peek();
  const cursorPosition = {
    rowId: position.rowId,
    colRef,
    sectionId: position.sectionId
  };
  return cursorPosition;
}
function toCursor(position, docModel) {
  const fieldIndex = docModel.viewSections.getRowModel(position.sectionId).viewFields().peek().findIndex((x) => x.colRef.peek() == position.colRef);
  const cursorPosition = {
    rowId: position.rowId,
    fieldIndex,
    sectionId: position.sectionId
  };
  return cursorPosition;
}


/***/ }),

/***/ "./app/client/components/CellSelector.ts":
/*!***********************************************!*\
  !*** ./app/client/components/CellSelector.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CELL": () => (/* binding */ CELL),
/* harmony export */   "COL": () => (/* binding */ COL),
/* harmony export */   "CellSelector": () => (/* binding */ CellSelector),
/* harmony export */   "NONE": () => (/* binding */ NONE),
/* harmony export */   "ROW": () => (/* binding */ ROW)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");



const ROW = "row";
const COL = "col";
const CELL = "cell";
const NONE = "";
class CellSelector extends grainjs__WEBPACK_IMPORTED_MODULE_2__.Disposable {
  constructor(view) {
    super();
    this.view = view;
    this.row = {
      start: knockout__WEBPACK_IMPORTED_MODULE_0___default().observable(0),
      end: knockout__WEBPACK_IMPORTED_MODULE_0___default().observable(0),
      linePos: knockout__WEBPACK_IMPORTED_MODULE_0___default().observable("0px"),
      dropIndex: knockout__WEBPACK_IMPORTED_MODULE_0___default().observable(-1)
    };
    this.col = {
      start: knockout__WEBPACK_IMPORTED_MODULE_0___default().observable(0),
      end: knockout__WEBPACK_IMPORTED_MODULE_0___default().observable(0),
      linePos: knockout__WEBPACK_IMPORTED_MODULE_0___default().observable("0px"),
      dropIndex: knockout__WEBPACK_IMPORTED_MODULE_0___default().observable(-1)
    };
    this.currentSelectType = knockout__WEBPACK_IMPORTED_MODULE_0___default().observable(NONE);
    this.currentDragType = knockout__WEBPACK_IMPORTED_MODULE_0___default().observable(NONE);
    this.autoDispose(this.view.cursor.rowIndex.subscribe(() => this.setToCursor()));
    this.autoDispose(this.view.cursor.fieldIndex.subscribe(() => this.setToCursor()));
    this.setToCursor();
  }
  setToCursor(elemType = NONE) {
    if (this.view.cursor.rowIndex) {
      this.row.start(this.view.cursor.rowIndex());
      this.row.end(this.view.cursor.rowIndex());
    }
    if (this.view.cursor.fieldIndex) {
      this.col.start(this.view.cursor.fieldIndex());
      this.col.end(this.view.cursor.fieldIndex());
    }
    this.currentSelectType(elemType);
  }
  containsCell(rowIndex, colIndex) {
    return this.containsCol(colIndex) && this.containsRow(rowIndex);
  }
  containsRow(rowIndex) {
    return (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.between)(rowIndex, this.row.start(), this.row.end());
  }
  containsCol(colIndex) {
    return (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.between)(colIndex, this.col.start(), this.col.end());
  }
  isSelected(elem, handlerName) {
    if (handlerName !== this.currentSelectType()) {
      return false;
    }
    const row = this.view.domToRowModel(elem, handlerName);
    const col = this.view.domToColModel(elem, handlerName);
    switch (handlerName) {
      case ROW:
        return this.containsRow(row._index());
      case COL:
        return this.containsCol(col._index());
      case CELL:
        return this.containsCell(row._index(), col._index());
      default:
        console.error("Given element is not a row, cell or column");
        return false;
    }
  }
  isRowSelected(rowIndex) {
    return this.isCurrentSelectType(COL) || this.containsRow(rowIndex);
  }
  isColSelected(colIndex) {
    return this.isCurrentSelectType(ROW) || this.containsCol(colIndex);
  }
  isCellSelected(rowIndex, colIndex) {
    return this.isColSelected(colIndex) && this.isRowSelected(rowIndex);
  }
  onlyCellSelected(rowIndex, colIndex) {
    return this.row.start() === rowIndex && this.row.end() === rowIndex && (this.col.start() === colIndex && this.col.end() === colIndex);
  }
  isCurrentSelectType(elemType) {
    return this._isCurrentType(this.currentSelectType(), elemType);
  }
  isCurrentDragType(elemType) {
    return this._isCurrentType(this.currentDragType(), elemType);
  }
  colLower() {
    return Math.min(this.col.start(), this.col.end());
  }
  colUpper() {
    return Math.max(this.col.start(), this.col.end());
  }
  rowLower() {
    return Math.min(this.row.start(), this.row.end());
  }
  rowUpper() {
    return Math.max(this.row.start(), this.row.end());
  }
  colCount() {
    return this.colUpper() - this.colLower() + 1;
  }
  rowCount() {
    return this.rowUpper() - this.rowLower() + 1;
  }
  selectArea(rowStartIdx, colStartIdx, rowEndIdx, colEndIdx) {
    this.row.start(rowStartIdx);
    this.col.start(colStartIdx);
    this.row.end(rowEndIdx);
    this.col.end(colEndIdx);
    if (this.colCount() > 1 || this.rowCount() > 1) {
      this.currentSelectType(CELL);
    }
  }
  _isCurrentType(currentType, elemType) {
    console.assert([ROW, COL, CELL, NONE].indexOf(elemType) !== -1);
    return currentType === elemType;
  }
}


/***/ }),

/***/ "./app/client/components/CodeEditorPanel.ts":
/*!**************************************************!*\
  !*** ./app/client/components/CodeEditorPanel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeEditorPanel": () => (/* binding */ CodeEditorPanel)
/* harmony export */ });
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/DisposableWithEvents */ "./app/common/DisposableWithEvents.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");




const hljs = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/lib/core.js");
hljs.registerLanguage("python", __webpack_require__(/*! highlight.js/lib/languages/python */ "./node_modules/highlight.js/lib/languages/python.js"));
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_3__.makeT)("CodeEditorPanel");
class CodeEditorPanel extends app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_1__.DisposableWithEvents {
  constructor(_gristDoc) {
    super();
    this._gristDoc = _gristDoc;
    this._schema = grainjs__WEBPACK_IMPORTED_MODULE_2__.Observable.create(this, "");
    this._denied = grainjs__WEBPACK_IMPORTED_MODULE_2__.Observable.create(this, false);
    this.listenTo(_gristDoc, "schemaUpdateAction", this._onSchemaAction.bind(this));
    this._onSchemaAction().catch(app_client_models_errors__WEBPACK_IMPORTED_MODULE_0__.reportError);
  }
  buildDom() {
    return (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.dom)("div.g-code-panel.clipboard", { tabIndex: "-1" }, grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.maybe(this._denied, () => (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.dom)("div.g-code-panel-denied", (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.dom)("h2", grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.text(t("Access denied"))), (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.dom)("div", grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.text(t("Code View is available only when you have full document access my friend."))))), grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.maybe(this._schema, (schema) => {
      const elem = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.dom)("code.g-code-viewer", grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.text(schema), grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.hide(true));
      setTimeout(() => {
        hljs.highlightBlock(elem);
        grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.showElem(elem, true);
      });
      return elem;
    }));
  }
  async _onSchemaAction() {
    try {
      const schema = await this._gristDoc.docComm.fetchTableSchema();
      if (!this.isDisposed()) {
        this._schema.set(schema);
        this._denied.set(false);
      }
    } catch (err) {
      if (!String(err).match(/Cannot view code/)) {
        throw err;
      }
      if (!this.isDisposed()) {
        this._schema.set("");
        this._denied.set(true);
      }
    }
  }
}


/***/ }),

/***/ "./app/client/components/CopySelection.ts":
/*!************************************************!*\
  !*** ./app/client/components/CopySelection.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopySelection": () => (/* binding */ CopySelection)
/* harmony export */ });
class CopySelection {
  constructor(tableData, rowIds, fields, options) {
    this.rowIds = rowIds;
    this.fields = fields;
    this.colIds = this.fields.map((f) => f.colId());
    this.colRefs = this.fields.map((f) => f.colRef());
    this.displayColIds = this.fields.map((f) => f.displayColModel().colId());
    this.rowStyle = options.rowStyle;
    this.colStyle = options.colStyle;
    this.columns = fields.map((f, i) => {
      const formatter = f.formatter();
      const _fmtGetter = tableData.getRowPropFunc(this.displayColIds[i]);
      const _rawGetter = tableData.getRowPropFunc(this.colIds[i]);
      return {
        colId: this.colIds[i],
        fmtGetter: (rowId) => formatter.formatAny(_fmtGetter(rowId)),
        rawGetter: (rowId) => _rawGetter(rowId)
      };
    });
  }
  isCellSelected(rowId, colId) {
    return this.rowIds.includes(rowId) && this.colIds.includes(colId);
  }
  onlyAddRowSelected() {
    return this.rowIds.length === 1 && this.rowIds[0] === "new";
  }
}


/***/ }),

/***/ "./app/client/components/CursorMonitor.ts":
/*!************************************************!*\
  !*** ./app/client/components/CursorMonitor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CursorMonitor": () => (/* binding */ CursorMonitor),
/* harmony export */   "oneTimeListener": () => (/* binding */ oneTimeListener)
/* harmony export */ });
/* harmony import */ var app_client_lib_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/storage */ "./app/client/lib/storage.ts");
/* harmony import */ var app_common_gristUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/gristUrls */ "./app/common/gristUrls.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");




class CursorMonitor extends grainjs__WEBPACK_IMPORTED_MODULE_2__.Disposable {
  constructor(doc, store) {
    var _a, _b, _c;
    super();
    this._restored = false;
    this._store = new StorageWrapper(store);
    const userId = (_c = (_b = (_a = doc.app.topAppModel.appObs.get()) == null ? void 0 : _a.currentUser) == null ? void 0 : _b.id) != null ? _c : null;
    this._key = doc.docId() + userId;
    this._whenDocumentLoadsRestorePosition(doc);
    this._whenCursorHasChangedStoreInMemory(doc);
  }
  clear() {
    this._store.clear(this._key);
  }
  _whenCursorHasChangedStoreInMemory(doc) {
    this.autoDispose(doc.cursorPosition.addListener((pos) => {
      if (!this._restored) {
        return;
      }
      if (pos && pos.rowId !== void 0) {
        this._storePosition(pos);
      }
    }));
  }
  _whenDocumentLoadsRestorePosition(doc) {
    if (doc.hasCustomNav.get()) {
      return this._abortRestore();
    }
    if (doc.activeViewId.get() === "data") {
      this._doRestorePosition(doc).catch((e) => (0,app_client_models_errors__WEBPACK_IMPORTED_MODULE_3__.reportError)(e));
      return;
    }
    this.autoDispose(oneTimeListener(doc.currentView, async () => {
      await this._doRestorePosition(doc);
    }));
  }
  async _doRestorePosition(doc) {
    if (this._restored) {
      return;
    }
    this._restored = true;
    const viewId = doc.activeViewId.get();
    if (!(0,app_common_gristUrls__WEBPACK_IMPORTED_MODULE_1__.isViewDocPage)(viewId)) {
      return this._abortRestore();
    }
    const position = this._readPosition(viewId);
    if (position) {
      await doc.recursiveMoveToCursorPos(position, true, true);
    }
  }
  _abortRestore() {
    this.clear();
    this._restored = true;
  }
  _storePosition(pos) {
    this._store.update(this._key, pos);
  }
  _readPosition(view) {
    const lastPosition = this._store.read(this._key);
    this._store.clear(this._key);
    if (lastPosition && lastPosition.position.viewId == view) {
      return lastPosition.position;
    }
    return null;
  }
}
class StorageWrapper {
  constructor(_storage = (0,app_client_lib_storage__WEBPACK_IMPORTED_MODULE_0__.getStorage)()) {
    this._storage = _storage;
  }
  update(docId, position) {
    try {
      const storage = this._storage;
      const data = { docId, position, timestamp: Date.now() };
      storage.setItem(this._key(docId), JSON.stringify(data));
    } catch (e) {
      console.error("Can't store latest position in storage. Detail error " + e.message);
    }
  }
  clear(docId) {
    const storage = this._storage;
    storage.removeItem(this._key(docId));
  }
  read(docId) {
    const storage = this._storage;
    const result = storage.getItem(this._key(docId));
    if (!result) {
      return void 0;
    }
    return JSON.parse(result);
  }
  _key(docId) {
    return `grist-last-position-${docId}`;
  }
}
function oneTimeListener(obs, handler) {
  let listener = obs.addListener((value) => {
    setImmediate(dispose);
    handler(value);
  });
  function dispose() {
    if (listener) {
      listener.dispose();
      listener = null;
    }
  }
  return { dispose };
}


/***/ }),

/***/ "./app/client/components/CustomView.ts":
/*!*********************************************!*\
  !*** ./app/client/components/CustomView.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomView": () => (/* binding */ CustomView)
/* harmony export */ });
/* harmony import */ var app_client_components_BaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/BaseView */ "./app/client/components/BaseView.js");
/* harmony import */ var app_client_components_BaseView__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(app_client_components_BaseView__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/components/WidgetFrame */ "./app/client/components/WidgetFrame.ts");
/* harmony import */ var app_client_lib_CustomSectionElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/lib/CustomSectionElement */ "./app/client/lib/CustomSectionElement.ts");
/* harmony import */ var app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/lib/dispose */ "./app/client/lib/dispose.js");
/* harmony import */ var app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/lib/dom */ "./app/client/lib/dom.js");
/* harmony import */ var app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/lib/koDom */ "./app/client/lib/koDom.js");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/common/CustomWidget */ "./app/common/CustomWidget.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_common_urlUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/common/urlUtils */ "./app/common/urlUtils.ts");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_13__);














const defaults = __webpack_require__(/*! lodash/defaults */ "./node_modules/lodash/defaults.js");
const _CustomView = class extends app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_4__.Disposable {
  create(gristDoc, viewSectionModel) {
    app_client_components_BaseView__WEBPACK_IMPORTED_MODULE_0___default().call(this, gristDoc, viewSectionModel, { "addNewRow": true });
    this._customDef = this.viewSection.customDef;
    this._emptyWidgetPage = new URL("custom-widget.html", (0,app_common_urlUtils__WEBPACK_IMPORTED_MODULE_10__.getGristConfig)().homeUrl).href;
    this.autoDisposeCallback(() => {
      if (this._customSection) {
        this._customSection.dispose();
      }
    });
    this._foundPlugin = knockout__WEBPACK_IMPORTED_MODULE_13__.observable(false);
    this._foundSection = knockout__WEBPACK_IMPORTED_MODULE_13__.observable(false);
    this._foundSection.extend({ notify: "always" });
    this.autoDispose(this._customDef.pluginId.subscribe(this._updatePluginInstance, this));
    this.autoDispose(this._customDef.sectionId.subscribe(this._updateCustomSection, this));
    this.autoDispose(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.createGroup(_CustomView._commands, this, this.viewSection.hasFocus));
    this.viewPane = this.autoDispose(this._buildDom());
    this._updatePluginInstance();
  }
  async triggerPrint() {
    if (!this.isDisposed() && this._frame) {
      return await this._frame.callRemote("print");
    }
  }
  _updatePluginInstance() {
    const pluginId = this._customDef.pluginId();
    this._pluginInstance = this.gristDoc.docPluginManager.pluginsList.find((p) => p.definition.id === pluginId);
    if (this._pluginInstance) {
      this._foundPlugin(true);
    } else {
      this._foundPlugin(false);
      this._foundSection(false);
    }
    this._updateCustomSection();
  }
  _updateCustomSection() {
    if (!this._pluginInstance) {
      return;
    }
    const sectionId = this._customDef.sectionId();
    this._customSection = app_client_lib_CustomSectionElement__WEBPACK_IMPORTED_MODULE_3__.CustomSectionElement.find(this._pluginInstance, sectionId);
    if (this._customSection) {
      const el = this._customSection.element;
      el.classList.add("flexitem");
      this._foundSection(true);
    } else {
      this._foundSection(false);
    }
  }
  _buildDom() {
    const { mode, url, access } = this._customDef;
    const showPlugin = knockout__WEBPACK_IMPORTED_MODULE_13__.pureComputed(() => this._customDef.mode() === "plugin");
    const showPluginNotification = knockout__WEBPACK_IMPORTED_MODULE_13__.pureComputed(() => showPlugin() && !this._foundPlugin());
    const showSectionNotification = knockout__WEBPACK_IMPORTED_MODULE_13__.pureComputed(() => showPlugin() && this._foundPlugin() && !this._foundSection());
    const showPluginContent = knockout__WEBPACK_IMPORTED_MODULE_13__.pureComputed(() => showPlugin() && this._foundSection()).extend({ notify: "always" });
    return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default()("div.flexauto.flexvbox.custom_view_container", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default().autoDispose(showPlugin), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default().autoDispose(showPluginNotification), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default().autoDispose(showSectionNotification), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default().autoDispose(showPluginContent), app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_6__.scope(() => [mode(), url(), access()], ([_mode, _url, _access]) => _mode === "url" ? this._buildIFrame(_url, _access || app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_8__.AccessLevel.none) : null), app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_6__.maybe(showPluginNotification, () => buildNotification("Plugin ", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default()("strong", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_6__.text(this._customDef.pluginId)), " was not found", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default().testId("customView_notification_plugin"))), app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_6__.maybe(showSectionNotification, () => buildNotification("Section ", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default()("strong", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_6__.text(this._customDef.sectionId)), " was not found in plugin ", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default()("strong", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_6__.text(this._customDef.pluginId)), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default().testId("customView_notification_section"))), app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_6__.maybe(showPluginContent, () => this._customSection.element));
  }
  _promptAccess(access) {
    if (this.gristDoc.isReadonly.get()) {
      return;
    }
    this.viewSection.desiredAccessLevel(access);
  }
  _buildIFrame(baseUrl, access) {
    return grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.create(app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.WidgetFrame, {
      url: baseUrl || this._emptyWidgetPage,
      access,
      readonly: this.gristDoc.isReadonly.get(),
      configure: (frame) => {
        this._frame = frame;
        const view = this;
        frame.exposeAPI("GristDocAPI", new app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.GristDocAPIImpl(this.gristDoc), app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.GristDocAPIImpl.defaultAccess);
        frame.exposeAPI("GristView", new app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.GristViewImpl(view), new app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.MinimumLevel(app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_8__.AccessLevel.read_table));
        frame.exposeAPI("CustomSectionAPI", new app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.CustomSectionAPIImpl(this.viewSection, access, this._promptAccess.bind(this)), new app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.MinimumLevel(app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_8__.AccessLevel.none));
        frame.useEvents(app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.RecordNotifier.create(frame, view), new app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.MinimumLevel(app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_8__.AccessLevel.read_table));
        frame.useEvents(app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.TableNotifier.create(frame, view), new app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.MinimumLevel(app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_8__.AccessLevel.read_table));
        frame.exposeAPI("WidgetAPI", new app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.WidgetAPIImpl(this.viewSection), new app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.MinimumLevel(app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_8__.AccessLevel.none));
        frame.useEvents(app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.ConfigNotifier.create(frame, this.viewSection, access), new app_client_components_WidgetFrame__WEBPACK_IMPORTED_MODULE_2__.MinimumLevel(app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_8__.AccessLevel.none));
      },
      onElem: (iframe) => onFrameFocus(iframe, () => {
        if (this.isDisposed()) {
          return;
        }
        if (!this.viewSection.isDisposed() && !this.viewSection.hasFocus()) {
          this.viewSection.hasFocus(true);
        }
        (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.closeRegisteredMenu)();
      })
    });
  }
};
let CustomView = _CustomView;
CustomView._commands = {
  async openWidgetConfiguration() {
    var _a;
    if (!this.isDisposed() && !((_a = this._frame) == null ? void 0 : _a.isDisposed())) {
      try {
        await this._frame.editOptions();
      } catch (err) {
        if (err.message === "Unknown interface") {
          throw new app_client_models_errors__WEBPACK_IMPORTED_MODULE_7__.UserError("Custom widget doesn't expose configuration screen.");
        } else {
          throw err;
        }
      }
    }
  }
};
defaults(CustomView.prototype, (app_client_components_BaseView__WEBPACK_IMPORTED_MODULE_0___default().prototype));
Object.assign(CustomView.prototype, backbone__WEBPACK_IMPORTED_MODULE_11__.Events);
function buildNotification(...args) {
  return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default()("div.custom_view_notification.bg-warning", app_client_lib_dom__WEBPACK_IMPORTED_MODULE_5___default()("p", ...args));
}
function onFrameFocus(frame, handler) {
  let timer = null;
  let disposed = false;
  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  return grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.update(frame, grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.on("mouseenter", () => {
    if (disposed) {
      return;
    }
    if (document.activeElement === frame) {
      return;
    }
    timer = setInterval(() => {
      if (document.activeElement === frame) {
        try {
          handler();
        } finally {
          stop();
        }
      }
    }, 70);
  }), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.on("mouseleave", stop), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.onDispose(() => {
    stop();
    disposed = true;
  }));
}


/***/ }),

/***/ "./app/client/components/DataTables.ts":
/*!*********************************************!*\
  !*** ./app/client/components/DataTables.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTables": () => (/* binding */ DataTables)
/* harmony export */ });
/* harmony import */ var app_client_lib_copyToClipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/copyToClipboard */ "./app/client/lib/copyToClipboard.ts");
/* harmony import */ var app_client_lib_testState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/lib/testState */ "./app/client/lib/testState.ts");
/* harmony import */ var app_client_ui_DocMenuCss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui/DocMenuCss */ "./app/client/ui/DocMenuCss.ts");
/* harmony import */ var app_client_ui_DuplicateTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui/DuplicateTable */ "./app/client/ui/DuplicateTable.ts");
/* harmony import */ var app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui/tooltips */ "./app/client/ui/tooltips.ts");
/* harmony import */ var app_client_ui_WidgetTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui/WidgetTitle */ "./app/client/ui/WidgetTitle.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_loaders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/ui2018/loaders */ "./app/client/ui2018/loaders.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/client/ui2018/modals */ "./app/client/ui2018/modals.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");













const testId = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.makeTestId)("test-raw-data-");
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_12__.makeT)("DataTables");
class DataTables extends grainjs__WEBPACK_IMPORTED_MODULE_11__.Disposable {
  constructor(_gristDoc) {
    super();
    this._gristDoc = _gristDoc;
    this._rowCount = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._gristDoc.docPageModel.currentDocUsage, (_use, usage) => {
      return usage == null ? void 0 : usage.rowCount;
    });
    this._rowCountFormatter = new Intl.NumberFormat("en-US");
    this._tables = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, (use) => {
      const dataTables = use(_gristDoc.docModel.rawDataTables.getObservable());
      const summaryTables = use(_gristDoc.docModel.rawSummaryTables.getObservable());
      return [...dataTables, ...summaryTables].filter((table) => Boolean(use(table.tableId)));
    });
  }
  buildDom() {
    return container(cssTableList(testId("list"), cssHeader(t("Raw Data Tables")), cssList(grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.forEach(this._tables, (tableRec) => cssItem(testId("table"), cssLeft(grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.domComputed((use) => cssTableTypeIcon(use(tableRec.summarySourceTable) !== 0 ? "PivotLight" : "TypeTable", testId(`table-id-${use(tableRec.tableId)}`)))), cssMiddle(cssTitleRow(cssTableTitle(this._tableTitle(tableRec), testId("table-title"))), cssDetailsRow(cssTableIdWrapper(cssHoverWrapper(cssUpperCase("Table ID: "), cssTableId(testId("table-id"), grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.text(tableRec.tableId)), { title: t("Click to copy") }, grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.on("click", async (e, d) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      (0,app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_4__.showTransientTooltip)(d, t("Table ID copied to clipboard"), {
        key: "copy-table-id"
      });
      await (0,app_client_lib_copyToClipboard__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)(tableRec.tableId.peek());
      (0,app_client_lib_testState__WEBPACK_IMPORTED_MODULE_1__.setTestState)({ clipboard: tableRec.tableId.peek() });
    }))), this._tableRows(tableRec))), cssRight((0,app_client_ui_DocMenuCss__WEBPACK_IMPORTED_MODULE_2__.docMenuTrigger)(testId("table-menu"), (0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_7__.icon)("Dots"), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.menu)(() => this._menuItems(tableRec), { placement: "bottom-start" }), grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.on("click", (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
    }))), grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.on("click", () => {
      const sectionId = tableRec.rawViewSection.peek().getRowId();
      if (!sectionId) {
        throw new Error(`Table ${tableRec.tableId.peek()} doesn't have a raw view section.`);
      }
      this._gristDoc.viewModel.activeSectionId(sectionId);
    }))))));
  }
  _tableTitle(table) {
    return grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.domComputed((use) => {
      const rawViewSectionRef = use((0,grainjs__WEBPACK_IMPORTED_MODULE_11__.fromKo)(table.rawViewSectionRef));
      const isSummaryTable = use(table.summarySourceTable) !== 0;
      if (!rawViewSectionRef || isSummaryTable) {
        const tableName = [
          use(table.tableNameDef),
          isSummaryTable ? use(table.groupDesc) : ""
        ].filter((p) => Boolean(p == null ? void 0 : p.trim())).join(" ");
        return cssTableName(tableName);
      } else {
        return (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.dom)("div", grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.domComputed((0,grainjs__WEBPACK_IMPORTED_MODULE_11__.fromKo)(table.rawViewSection), (vs) => (0,app_client_ui_WidgetTitle__WEBPACK_IMPORTED_MODULE_5__.buildTableName)(vs, testId("widget-title"))));
      }
    });
  }
  _menuItems(table) {
    const { isReadonly, docModel } = this._gristDoc;
    return [
      (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.menuItem)(() => this._duplicateTable(table), t("Duplicate Table"), testId("menu-duplicate-table"), grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.cls("disabled", (use) => use(isReadonly) || use(table.isHidden) || use(table.summarySourceTable) !== 0)),
      (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.menuItem)(() => this._removeTable(table), "Remove", testId("menu-remove"), grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.cls("disabled", (use) => use(isReadonly) || use(docModel.visibleTables.getObservable()).length <= 1 && !use(table.isHidden))),
      grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.maybe(isReadonly, () => (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.menuText)(t("You do not have edit access to this document")))
    ];
  }
  _duplicateTable(r) {
    (0,app_client_ui_DuplicateTable__WEBPACK_IMPORTED_MODULE_3__.duplicateTable)(this._gristDoc, r.tableId(), {
      onSuccess: ({ raw_section_id }) => this._gristDoc.viewModel.activeSectionId(raw_section_id)
    });
  }
  _removeTable(r) {
    const { docModel } = this._gristDoc;
    function doRemove() {
      return docModel.docData.sendAction(["RemoveTable", r.tableId()]);
    }
    (0,app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_10__.confirmModal)(t("Delete {{formattedTableName}} data, and remove it from all pages?", { formattedTableName: r.formattedTableName() }), "Delete", doRemove);
  }
  _tableRows(table) {
    return grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.maybe(this._rowCount, (rowCounts) => {
      if (rowCounts === "hidden") {
        return null;
      }
      return cssTableRowsWrapper(cssUpperCase("Rows: "), rowCounts === "pending" ? cssLoadingDots() : cssTableRows(rowCounts[table.getRowId()] !== void 0 ? this._rowCountFormatter.format(rowCounts[table.getRowId()]) : "", testId("table-rows")));
    });
  }
}
const container = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  overflow-y: auto;
  position: relative;
`);
const cssHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)(app_client_ui_DocMenuCss__WEBPACK_IMPORTED_MODULE_2__.docListHeader, `
  display: inline-block;
`);
const cssList = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  display: flex;
  flex-direction: column;
  gap: 12px;
`);
const cssItem = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  width: 100%;
  height: calc(1em * 56/13); /* 56px for 13px font */
  max-width: 750px;
  border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.rawDataTableBorder};
  &:hover {
    border-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.rawDataTableBorderHover};
  }
`);
const cssLeft = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  padding-top: 11px;
  padding-left: 12px;
  margin-right: 8px;
  align-self: flex-start;
  display: flex;
  flex: none;
`);
const cssMiddle = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  flex-grow: 1;
  min-width: 0px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 6px;
  margin-bottom: 4px;
`);
const cssTitleRow = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  min-width: 100%;
  margin-right: 4px;
`);
const cssDetailsRow = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  min-width: 100%;
  display: flex;
  gap: 8px;
`);
const cssRight = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  padding-right: 8px;
  margin-left: 8px;
  align-self: center;
  display: flex;
  flex: none;
`);
const cssTableTypeIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_7__.icon, `
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.accentIcon};
`);
const cssLine = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("span", `
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`);
const cssTableIdWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  display: flex;
  flex-grow: 1;
  min-width: 0;
`);
const cssTableRowsWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  display: flex;
  flex-shrink: 0;
  min-width: 100px;
  overflow: hidden;
  align-items: baseline;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.lightText};
  line-height: 18px;
  padding: 0px 2px;
`);
const cssHoverWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  display: flex;
  overflow: hidden;
  cursor: default;
  align-items: baseline;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.lightText};
  transition: background 0.05s;
  padding: 0px 2px;
  line-height: 18px;
  &:hover {
    background: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.lightHover};
  }
`);
const cssTableId = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)(cssLine, `
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.vars.smallFontSize};
`);
const cssTableRows = cssTableId;
const cssTableTitle = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.text};
  white-space: nowrap;
`);
const cssUpperCase = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("span", `
  text-transform: uppercase;
  letter-spacing: 0.81px;
  font-weight: 500;
  font-size: 9px; /* xxsmallFontSize is to small */
  margin-right: 2px;
  flex: 0;
  white-space: nowrap;
`);
const cssTableList = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  overflow-y: auto;
  position: relative;
  margin-bottom: 56px;
`);
const cssLoadingDots = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)(app_client_ui2018_loaders__WEBPACK_IMPORTED_MODULE_8__.loadingDots, `
  --dot-size: 6px;
`);
const cssTableName = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("span", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.text};
`);


/***/ }),

/***/ "./app/client/components/DeprecatedCommands.ts":
/*!*****************************************************!*\
  !*** ./app/client/components/DeprecatedCommands.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeprecatedCommands": () => (/* binding */ DeprecatedCommands)
/* harmony export */ });
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_models_UserPrefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/UserPrefs */ "./app/client/models/UserPrefs.ts");
/* harmony import */ var app_client_lib_browserGlobals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/lib/browserGlobals */ "./app/client/lib/browserGlobals.js");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_common_Prefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/common/Prefs */ "./app/common/Prefs.ts");
/* harmony import */ var app_client_components_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/components/modals */ "./app/client/components/modals.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/intersection */ "./node_modules/lodash/intersection.js");
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_7__);








const G = (0,app_client_lib_browserGlobals__WEBPACK_IMPORTED_MODULE_2__.get)("document", "window");
class DeprecatedCommands extends grainjs__WEBPACK_IMPORTED_MODULE_6__.Disposable {
  constructor(_gristDoc) {
    super();
    this._gristDoc = _gristDoc;
    this._holder = grainjs__WEBPACK_IMPORTED_MODULE_6__.Holder.create(this);
    G.window.resetSeenWarnings = () => {
    };
  }
  attach() {
    this._holder.clear();
    const seenWarnings = this._gristDoc.docPageModel.appModel.deprecatedWarnings;
    G.window.resetSeenWarnings = () => {
      if (!this._gristDoc.isDisposed()) {
        seenWarnings.set([]);
        this.attach();
      }
    };
    if (!this._gristDoc.docPageModel.appModel.currentValidUser) {
      return;
    }
    const commandList = Object.values(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands);
    const deprecatedCommands = commandList.filter((command) => command.deprecated);
    const deprecatedNames = deprecatedCommands.map((command) => command.name);
    if (lodash_intersection__WEBPACK_IMPORTED_MODULE_7___default()(seenWarnings.get(), deprecatedNames).length === deprecatedNames.length) {
      return;
    }
    const group = {};
    for (const c of deprecatedCommands) {
      group[c.name] = this._handleCommand.bind(this, c);
    }
    if (Object.keys(group).length) {
      this._holder.autoDispose(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.createGroup(group, this, true));
    }
  }
  _handleCommand(c) {
    if (!this._hasSeenWarning(c.name)) {
      this._showWarning(c);
      return false;
    } else {
      return true;
    }
  }
  _showWarning(c) {
    var _a;
    const selectedCell = (_a = this._gristDoc.currentView.get()) == null ? void 0 : _a.viewPane.querySelector(".selected_cursor");
    const seenWarnings = this._gristDoc.docPageModel.appModel.deprecatedWarnings;
    function onClose(checked) {
      if (checked) {
        const zoomCommands = [
          "deprecatedDeleteRecords",
          "deprecatedInsertRecordAfter",
          "deprecatedInsertRowBefore"
        ];
        if (zoomCommands.includes(c.name)) {
          zoomCommands.forEach((name) => (0,app_client_models_UserPrefs__WEBPACK_IMPORTED_MODULE_1__.markAsSeen)(seenWarnings, name));
        } else {
          (0,app_client_models_UserPrefs__WEBPACK_IMPORTED_MODULE_1__.markAsSeen)(seenWarnings, c.name);
        }
      }
    }
    if (!selectedCell) {
      (0,app_client_models_errors__WEBPACK_IMPORTED_MODULE_3__.reportMessage)(() => (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("div", this._createMessage(c.desc)), {
        level: "info",
        key: "deprecated-command"
      });
    } else {
      (0,app_client_components_modals__WEBPACK_IMPORTED_MODULE_5__.showDeprecatedWarning)(selectedCell, this._createMessage(c.desc), onClose);
    }
  }
  _hasSeenWarning(name) {
    var _a;
    const seenWarnings = this._gristDoc.docPageModel.appModel.deprecatedWarnings;
    const preference = (_a = seenWarnings.get()) != null ? _a : [];
    return preference.includes(app_common_Prefs__WEBPACK_IMPORTED_MODULE_4__.DeprecationWarning.check(name));
  }
  _createMessage(description) {
    const elements = [];
    for (const part of description.split(/({\w+})/g)) {
      if (part[0] === "{") {
        const otherCommand = app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands[part.slice(1, -1)];
        if (otherCommand) {
          elements.push(otherCommand.getKeysDom(() => (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("span", "or")));
        }
      } else {
        elements.push(cssTallerText(part));
      }
    }
    return elements;
  }
}
const cssTallerText = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.styled)("span", `
  line-height: 24px;
`);


/***/ }),

/***/ "./app/client/components/DocComm.ts":
/*!******************************************!*\
  !*** ./app/client/components/DocComm.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocComm": () => (/* binding */ DocComm)
/* harmony export */ });
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_common_urlUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/urlUtils */ "./app/common/urlUtils.ts");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");




const SLOW_NOTIFICATION_TIMEOUT_MS = 1e3;
class DocComm extends grainjs__WEBPACK_IMPORTED_MODULE_3__.Disposable {
  constructor(_comm, openResponse, _docId, _notifier) {
    super();
    this._comm = _comm;
    this._docId = _docId;
    this._notifier = _notifier;
    this.fetchTable = this._wrapMethod("fetchTable");
    this.fetchTableSchema = this._wrapMethod("fetchTableSchema");
    this.useQuerySet = this._wrapMethod("useQuerySet");
    this.disposeQuerySet = this._wrapMethod("disposeQuerySet");
    this.applyUserActionsById = this._wrapMethod("applyUserActionsById");
    this.importFiles = this._wrapMethod("importFiles");
    this.finishImportFiles = this._wrapMethod("finishImportFiles");
    this.cancelImportFiles = this._wrapMethod("cancelImportFiles");
    this.generateImportDiff = this._wrapMethod("generateImportDiff");
    this.addAttachments = this._wrapMethod("addAttachments");
    this.findColFromValues = this._wrapMethod("findColFromValues");
    this.getFormulaError = this._wrapMethod("getFormulaError");
    this.fetchURL = this._wrapMethod("fetchURL");
    this.autocomplete = this._wrapMethod("autocomplete");
    this.removeInstanceFromDoc = this._wrapMethod("removeInstanceFromDoc");
    this.getActionSummaries = this._wrapMethod("getActionSummaries");
    this.startBundleUserActions = this._wrapMethod("startBundleUserActions");
    this.stopBundleUserActions = this._wrapMethod("stopBundleUserActions");
    this.forwardPluginRpc = this._wrapMethod("forwardPluginRpc");
    this.reloadPlugins = this._wrapMethod("reloadPlugins");
    this.reloadDoc = this._wrapMethod("reloadDoc");
    this.fork = this._wrapMethod("fork");
    this.checkAclFormula = this._wrapMethod("checkAclFormula");
    this.getAclResources = this._wrapMethod("getAclResources");
    this.waitForInitialization = this._wrapMethod("waitForInitialization");
    this.getUsersForViewAs = this._wrapMethod("getUsersForViewAs");
    this.getAccessToken = this._wrapMethod("getAccessToken");
    this.changeUrlIdEmitter = this.autoDispose(new grainjs__WEBPACK_IMPORTED_MODULE_3__.Emitter());
    this._forkPromise = null;
    this._isClosed = false;
    this._setOpenResponse(openResponse);
    this.listenTo(_comm, "docShutdown", (m) => {
      if (this.isActionFromThisDoc(m)) {
        this._isClosed = true;
      }
    });
    this.onDispose(async () => {
      try {
        await this._shutdown();
      } catch (e) {
        if (!String(e).match(/GristWSConnection disposed/)) {
          (0,app_client_models_errors__WEBPACK_IMPORTED_MODULE_0__.reportError)(e);
        }
      }
    });
  }
  getUrlParams() {
    return { clientId: this._clientId, docFD: this._docFD };
  }
  docUrl(path) {
    return (0,app_common_urlUtils__WEBPACK_IMPORTED_MODULE_1__.docUrl)(this.docWorkerUrl, path);
  }
  get docWorkerUrl() {
    return this._comm.getDocWorkerUrl(this._docId);
  }
  isActionFromThisDoc(message) {
    return message.docFD === this._docFD;
  }
  applyUserActions(actions, options) {
    this._comm.addUserActions(actions);
    return this._callMethod("applyUserActions", actions, options);
  }
  closeDoc() {
    return this._callDocMethod("closeDoc");
  }
  async forkAndUpdateUrl() {
    await (this._forkPromise || (this._forkPromise = this._doForkDoc()));
  }
  async _shutdown() {
    console.log(`DocComm: shutdown clientId ${this._clientId} docFD ${this._docFD}`);
    try {
      if (!this._isClosed) {
        await this.closeDoc();
      }
    } catch (err) {
      console.warn(`DocComm: closeDoc failed: ${err}`);
    } finally {
      if (!this._comm.isDisposed()) {
        this._comm.releaseDocConnection(this._docId);
      }
    }
  }
  _setOpenResponse(openResponse) {
    this._docFD = openResponse.docFD;
    this._clientId = openResponse.clientId;
    this._comm.useDocConnection(this._docId);
  }
  _wrapMethod(name) {
    return this._callMethod.bind(this, name);
  }
  async _callMethod(name, ...args) {
    return this._notifier.slowNotification(this._doCallMethod(name, ...args), SLOW_NOTIFICATION_TIMEOUT_MS);
  }
  async _doCallMethod(name, ...args) {
    if (this._forkPromise) {
      await this._forkPromise;
      return this._callDocMethod(name, ...args);
    }
    try {
      return await this._callDocMethod(name, ...args);
    } catch (err) {
      if (err.shouldFork) {
        await this.forkAndUpdateUrl();
        return this._callDocMethod(name, ...args);
      }
      throw err;
    }
  }
  _callDocMethod(name, ...args) {
    return this._comm._makeRequest(this._clientId, this._docId, name, this._docFD, ...args);
  }
  async _doForkDoc() {
    (0,app_client_models_errors__WEBPACK_IMPORTED_MODULE_0__.reportMessage)("Preparing your copy...", { key: "forking" });
    const { urlId, docId } = await this.fork();
    const openResponse = await this._comm.openDoc(docId);
    this.closeDoc().catch(() => null);
    this._comm.releaseDocConnection(this._docId);
    this._docId = docId;
    this._setOpenResponse(openResponse);
    this.changeUrlIdEmitter.emit(urlId);
    (0,app_client_models_errors__WEBPACK_IMPORTED_MODULE_0__.reportMessage)("You are now editing your own copy", { key: "forking" });
  }
}
Object.assign(DocComm.prototype, backbone__WEBPACK_IMPORTED_MODULE_2__.Events);


/***/ }),

/***/ "./app/client/components/DocumentUsage.ts":
/*!************************************************!*\
  !*** ./app/client/components/DocumentUsage.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentUsage": () => (/* binding */ DocumentUsage),
/* harmony export */   "buildLimitStatusMessage": () => (/* binding */ buildLimitStatusMessage),
/* harmony export */   "buildUpgradeMessage": () => (/* binding */ buildUpgradeMessage)
/* harmony export */ });
/* harmony import */ var app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/gristUrlState */ "./app/client/models/gristUrlState.ts");
/* harmony import */ var app_client_ui_DocMenuCss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui/DocMenuCss */ "./app/client/ui/DocMenuCss.ts");
/* harmony import */ var app_client_ui_GristTooltips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui/GristTooltips */ "./app/client/ui/GristTooltips.ts");
/* harmony import */ var app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui/tooltips */ "./app/client/ui/tooltips.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_loaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/ui2018/loaders */ "./app/client/ui2018/loaders.ts");
/* harmony import */ var app_common_DocUsage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/common/DocUsage */ "./app/common/DocUsage.ts");
/* harmony import */ var app_common_Features__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/common/Features */ "./app/common/Features.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var app_common_roles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/common/roles */ "./app/common/roles.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");













const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_12__.makeT)("DocumentUsage");
const testId = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.makeTestId)("test-doc-usage-");
const DEFAULT_MAX_ROWS = 2e4;
const DEFAULT_MAX_DATA_SIZE = DEFAULT_MAX_ROWS * 2 * 1024;
const DEFAULT_MAX_ATTACHMENTS_SIZE = 1 * 1024 * 1024 * 1024;
class DocumentUsage extends grainjs__WEBPACK_IMPORTED_MODULE_11__.Disposable {
  constructor(_docPageModel) {
    super();
    this._docPageModel = _docPageModel;
    this._currentDoc = this._docPageModel.currentDoc;
    this._currentDocUsage = this._docPageModel.currentDocUsage;
    this._currentOrg = this._docPageModel.currentOrg;
    this._currentProduct = this._docPageModel.currentProduct;
    this._rowCountFormatter = new Intl.NumberFormat("en-US");
    this._dataLimitStatus = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._currentDocUsage, (_use, usage) => {
      var _a;
      return (_a = usage == null ? void 0 : usage.dataLimitStatus) != null ? _a : null;
    });
    this._rowCount = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._currentDocUsage, (_use, usage) => {
      return usage == null ? void 0 : usage.rowCount;
    });
    this._dataSizeBytes = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._currentDocUsage, (_use, usage) => {
      return usage == null ? void 0 : usage.dataSizeBytes;
    });
    this._attachmentsSizeBytes = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._currentDocUsage, (_use, usage) => {
      return usage == null ? void 0 : usage.attachmentsSizeBytes;
    });
    this._rowMetricOptions = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._currentProduct, this._rowCount, (_use, product, rowCount) => {
      const maxRows = product == null ? void 0 : product.features.baseMaxRowsPerDocument;
      const maxValue = maxRows && maxRows > 0 ? maxRows : void 0;
      return {
        name: t("Rows"),
        currentValue: typeof rowCount !== "object" ? void 0 : rowCount.total,
        maximumValue: maxValue != null ? maxValue : DEFAULT_MAX_ROWS,
        unit: "rows",
        shouldHideLimits: maxValue === void 0,
        formatValue: (val) => this._rowCountFormatter.format(val)
      };
    });
    this._dataSizeMetricOptions = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._currentProduct, this._dataSizeBytes, (_use, product, dataSize) => {
      const maxSize = product == null ? void 0 : product.features.baseMaxDataSizePerDocument;
      const maxValue = maxSize && maxSize > 0 ? maxSize : void 0;
      return {
        name: t("Data Size"),
        currentValue: typeof dataSize !== "number" ? void 0 : dataSize,
        maximumValue: maxValue != null ? maxValue : DEFAULT_MAX_DATA_SIZE,
        unit: "MB",
        shouldHideLimits: maxValue === void 0,
        tooltipContentFunc: app_client_ui_GristTooltips__WEBPACK_IMPORTED_MODULE_2__.GristTooltips.dataSize,
        formatValue: (val) => {
          return (val / 1024 / 1e3).toFixed(2);
        }
      };
    });
    this._attachmentsSizeMetricOptions = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._currentProduct, this._attachmentsSizeBytes, (_use, product, attachmentsSize) => {
      const maxSize = product == null ? void 0 : product.features.baseMaxAttachmentsBytesPerDocument;
      const maxValue = maxSize && maxSize > 0 ? maxSize : void 0;
      return {
        name: t("Attachments Size"),
        currentValue: typeof attachmentsSize !== "number" ? void 0 : attachmentsSize,
        maximumValue: maxValue != null ? maxValue : DEFAULT_MAX_ATTACHMENTS_SIZE,
        unit: "GB",
        shouldHideLimits: maxValue === void 0,
        formatValue: (val) => (val / (1024 * 1024 * 1024)).toFixed(2)
      };
    });
    this._areAllMetricsPending = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._currentDoc, this._rowCount, this._dataSizeBytes, this._attachmentsSizeBytes, (_use, doc, rowCount, dataSize, attachmentsSize) => {
      const hasNonPendingMetrics = [rowCount, dataSize, attachmentsSize].some((metric) => metric !== "pending" && metric !== void 0);
      return !doc || !hasNonPendingMetrics;
    });
    this._isAccessDenied = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._areAllMetricsPending, this._currentDoc, this._rowCount, this._dataSizeBytes, this._attachmentsSizeBytes, (_use, isLoading, doc, rowCount, dataSize, attachmentsSize) => {
      if (isLoading) {
        return null;
      }
      const { access } = doc.workspace.org;
      const isPublicUser = access === "guests" || access === null;
      const hasHiddenMetrics = [rowCount, dataSize, attachmentsSize].some((metric) => metric === "hidden");
      return isPublicUser || hasHiddenMetrics;
    });
  }
  buildDom() {
    return (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.dom)("div", cssHeader(t("Usage"), testId("heading")), grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.domComputed(this._areAllMetricsPending, (isLoading) => {
      if (isLoading) {
        return cssSpinner((0,app_client_ui2018_loaders__WEBPACK_IMPORTED_MODULE_6__.loadingSpinner)(), testId("loading"));
      }
      return [this._buildMessage(), this._buildMetrics()];
    }), testId("container"));
  }
  _buildMessage() {
    return grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.domComputed((use) => {
      const isAccessDenied = use(this._isAccessDenied);
      if (isAccessDenied === null) {
        return null;
      }
      if (isAccessDenied) {
        return buildMessage(t("Usage statistics are only available to users with full access to the document data."));
      }
      const org = use(this._currentOrg);
      const product = use(this._currentProduct);
      const status = use(this._dataLimitStatus);
      if (!org || !status) {
        return null;
      }
      return buildMessage([
        buildLimitStatusMessage(status, product == null ? void 0 : product.features, {
          disableRawDataLink: true
        }),
        product && (0,app_common_Features__WEBPACK_IMPORTED_MODULE_8__.isFreePlan)(product.name) ? [" ", buildUpgradeMessage((0,app_common_roles__WEBPACK_IMPORTED_MODULE_10__.canUpgradeOrg)(org), "long", () => this._docPageModel.appModel.showUpgradeModal())] : null
      ]);
    });
  }
  _buildMetrics() {
    return grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.maybe((use) => use(this._isAccessDenied) === false, () => cssUsageMetrics(grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.domComputed(this._rowMetricOptions, (metrics) => buildUsageMetric(metrics, testId("rows"))), grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.domComputed(this._dataSizeMetricOptions, (metrics) => buildUsageMetric(metrics, testId("data-size"))), grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.domComputed(this._attachmentsSizeMetricOptions, (metrics) => buildUsageMetric(metrics, testId("attachments-size"))), testId("metrics")));
  }
}
function buildLimitStatusMessage(status, features, options = {}) {
  const { disableRawDataLink = false } = options;
  switch (status) {
    case "approachingLimit": {
      return [
        "This document is ",
        disableRawDataLink ? "approaching" : buildRawDataPageLink("approaching"),
        " free plan limits."
      ];
    }
    case "gracePeriod": {
      const gracePeriodDays = features == null ? void 0 : features.gracePeriodDays;
      if (!gracePeriodDays) {
        return [
          "Document limits ",
          disableRawDataLink ? "exceeded" : buildRawDataPageLink("exceeded"),
          "."
        ];
      }
      return [
        "Document limits ",
        disableRawDataLink ? "exceeded" : buildRawDataPageLink("exceeded"),
        `. In ${gracePeriodDays} days, this document will be read-only.`
      ];
    }
    case "deleteOnly": {
      return [
        "This document ",
        disableRawDataLink ? "exceeded" : buildRawDataPageLink("exceeded"),
        " free plan limits and is now read-only, but you can delete rows."
      ];
    }
  }
}
function buildUpgradeMessage(canUpgrade, variant, onUpgrade) {
  if (!canUpgrade) {
    return t("Contact the site owner to upgrade the plan to raise limits.");
  }
  const upgradeLinkText = t("start your 30-day free trial of the Pro plan.");
  return [
    variant === "short" ? null : t("For higher limits, "),
    buildUpgradeLink(variant === "short" ? (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_9__.capitalizeFirstWord)(upgradeLinkText) : upgradeLinkText, () => onUpgrade())
  ];
}
function buildUpgradeLink(linkText, onClick) {
  return cssUnderlinedLink(linkText, grainjs__WEBPACK_IMPORTED_MODULE_11__.dom.on("click", () => onClick()));
}
function buildRawDataPageLink(linkText) {
  return cssUnderlinedLink(linkText, (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_0__.urlState)().setLinkUrl({ docPage: "data" }));
}
function buildUsageMetric(options, ...domArgs) {
  const { name, tooltipContentFunc } = options;
  return cssUsageMetric(cssMetricName(tooltipContentFunc ? (0,app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_3__.withInfoTooltip)(cssOverflowableText(name, testId("name")), tooltipContentFunc()) : cssOverflowableText(name, testId("name"))), buildUsageProgressBar(options), ...domArgs);
}
function buildUsageProgressBar(options) {
  const {
    currentValue,
    maximumValue,
    shouldHideLimits,
    unit,
    formatValue = (n) => n.toString()
  } = options;
  let ratioUsed;
  let percentUsed;
  if (currentValue === void 0) {
    ratioUsed = 0;
    percentUsed = 0;
  } else {
    ratioUsed = currentValue / (maximumValue || Infinity);
    percentUsed = Math.min(100, Math.floor(ratioUsed * 100));
  }
  return [
    cssProgressBarContainer(cssProgressBarFill({ style: `width: ${percentUsed}%` }, shouldHideLimits || ratioUsed <= app_common_DocUsage__WEBPACK_IMPORTED_MODULE_7__.APPROACHING_LIMIT_RATIO ? null : cssProgressBarFill.cls("-approaching-limit"), testId("progress-fill"))),
    (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.dom)("div", currentValue === void 0 ? ["Loading ", cssLoadingDots()] : formatValue(currentValue) + (shouldHideLimits || !maximumValue ? "" : " of " + formatValue(maximumValue)) + (unit ? ` ${unit}` : ""), testId("value"))
  ];
}
function buildMessage(message) {
  return cssWarningMessage(cssIcon("Idea"), cssLightlyBoldedText(message, testId("message-text")), testId("message"));
}
const cssLightlyBoldedText = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  font-weight: 500;
`);
const cssWarningMessage = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.theme.text};
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.theme.text};
  display: flex;
  gap: 16px;
  margin-top: 16px;
`);
const cssIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_5__.icon, `
  flex-shrink: 0;
  width: 16px;
  height: 16px;
`);
const cssMetricName = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
`);
const cssOverflowableText = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("span", `
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`);
const cssHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)(app_client_ui_DocMenuCss__WEBPACK_IMPORTED_MODULE_1__.docListHeader, `
  margin-bottom: 0px;
`);
const cssUnderlinedLink = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("span", `
  cursor: pointer;
  color: unset;
  text-decoration: underline;

  &:hover, &:focus {
    color: unset;
  }
`);
const cssUsageMetrics = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  row-gap: 24px;
  column-gap: 54px;
`);
const cssUsageMetric = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.theme.text};
  display: flex;
  flex-direction: column;
  width: 180px;
  gap: 8px;

  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.mediaXSmall} {
    & {
      width: 100%;
    }
  }
`);
const cssProgressBarContainer = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  width: 100%;
  height: 4px;
  border-radius: 5px;
  background: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.theme.progressBarBg};
`);
const cssProgressBarFill = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)(cssProgressBarContainer, `
  background: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.theme.progressBarFg};

  &-approaching-limit {
    background: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.theme.progressBarErrorFg};
  }
`);
const cssSpinner = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)("div", `
  display: flex;
  justify-content: center;
  margin-top: 32px;
`);
const cssLoadingDots = (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.styled)(app_client_ui2018_loaders__WEBPACK_IMPORTED_MODULE_6__.loadingDots, `
  --dot-size: 8px;
`);


/***/ }),

/***/ "./app/client/components/Drafts.ts":
/*!*****************************************!*\
  !*** ./app/client/components/Drafts.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drafts": () => (/* binding */ Drafts)
/* harmony export */ });
/* harmony import */ var app_client_components_CellPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/CellPosition */ "./app/client/components/CellPosition.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui/tooltips */ "./app/client/ui/tooltips.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui2018/links */ "./app/client/ui2018/links.ts");






const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_2__.makeT)("components.Drafts");
class Drafts extends grainjs__WEBPACK_IMPORTED_MODULE_1__.Disposable {
  constructor(doc) {
    super();
    const cursor = CursorAdapter.create(this, doc);
    const storage = StorageAdapter.create(this);
    const notification = NotificationAdapter.create(this, doc);
    const tooltip = TooltipAdapter.create(this, doc);
    const editor = EditorAdapter.create(this, doc);
    const when = makeWhen(this);
    when(editor.cellCancelled, (ev) => {
      if (!ev.modified) {
        tooltip.close();
        notification.close();
        return;
      }
      notification.showUndoDiscard();
      storage.save(ev);
      tooltip.close();
    });
    when(notification.pressed, async () => {
      const draft = storage.get();
      if (draft) {
        await cursor.goToCell(draft.position);
        await editor.activate();
        editor.setState(draft.state);
      }
      storage.clear();
      notification.close();
    });
    when(notification.disappeared, () => {
      storage.clear();
    });
    when(editor.activated, (pos) => {
      if (storage.hasDraftFor(pos)) {
        tooltip.showContinueDraft();
      }
      notification.close();
    });
    when(editor.cellModified, (_) => {
      tooltip.scheduleClose();
    });
    when(editor.cellSaved, (_) => {
      storage.clear();
      tooltip.close();
      notification.close();
    });
    when(tooltip.click, () => {
      const draft = storage.get();
      if (draft) {
        editor.setState(draft.state);
      }
      tooltip.close();
    });
  }
}
class CursorAdapter extends grainjs__WEBPACK_IMPORTED_MODULE_1__.Disposable {
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  async goToCell(pos) {
    await this._doc.recursiveMoveToCursorPos((0,app_client_components_CellPosition__WEBPACK_IMPORTED_MODULE_0__.toCursor)(pos, this._doc.docModel), true);
  }
}
class StorageAdapter extends grainjs__WEBPACK_IMPORTED_MODULE_1__.Disposable {
  get() {
    return this._memory;
  }
  save(ev) {
    this._memory = ev;
  }
  hasDraftFor(position) {
    const item = this._memory;
    if (item && app_client_components_CellPosition__WEBPACK_IMPORTED_MODULE_0__.CellPosition.equals(item.position, position)) {
      return true;
    }
    return false;
  }
  clear() {
    this._memory = null;
  }
}
class NotificationAdapter extends grainjs__WEBPACK_IMPORTED_MODULE_1__.Disposable {
  constructor(_doc) {
    super();
    this._doc = _doc;
    this._hadAction = false;
    this._holder = grainjs__WEBPACK_IMPORTED_MODULE_1__.Holder.create(this);
    this.pressed = this.autoDispose(new grainjs__WEBPACK_IMPORTED_MODULE_1__.Emitter());
    this.disappeared = this.autoDispose(new grainjs__WEBPACK_IMPORTED_MODULE_1__.Emitter());
  }
  close() {
    this._hadAction = true;
    this._holder.clear();
  }
  showUndoDiscard() {
    const notifier = this._doc.app.topAppModel.notifier;
    const notification = notifier.createUserMessage(t("Undo discard"), {
      message: () => discardNotification(grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.on("click", () => {
        this._hadAction = true;
        this.pressed.emit();
      }))
    });
    notification.onDispose(() => {
      if (!this._hadAction) {
        this.disappeared.emit();
      }
    });
    this._holder.autoDispose(notification);
    this._hadAction = false;
  }
}
class TooltipAdapter extends grainjs__WEBPACK_IMPORTED_MODULE_1__.Disposable {
  constructor(_doc) {
    super();
    this._doc = _doc;
    this._tooltip = null;
    this._scheduled = false;
    this.click = this.autoDispose(new grainjs__WEBPACK_IMPORTED_MODULE_1__.Emitter());
    this.onDispose(() => {
      this.close();
    });
  }
  scheduleClose() {
    if (this._tooltip && !this._scheduled) {
      this._scheduled = true;
      const origClose = this._tooltip.close;
      this._tooltip.close = () => {
        clearTimeout(timer);
        origClose();
      };
      const timer = setTimeout(this._tooltip.close, 6e3);
    }
  }
  showContinueDraft() {
    var _a;
    this.close();
    const editorDom = (_a = this._doc.activeEditor.get()) == null ? void 0 : _a.getDom();
    if (!editorDom) {
      return;
    }
    this._tooltip = (0,app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_3__.showTooltip)(editorDom, cellTooltip(() => this.click.emit()));
  }
  close() {
    var _a;
    this._scheduled = false;
    (_a = this._tooltip) == null ? void 0 : _a.close();
    this._tooltip = null;
  }
}
class EditorAdapter extends grainjs__WEBPACK_IMPORTED_MODULE_1__.Disposable {
  constructor(_doc) {
    super();
    this._doc = _doc;
    this.cellSaved = this.autoDispose(new grainjs__WEBPACK_IMPORTED_MODULE_1__.Emitter());
    this.cellModified = this.autoDispose(new grainjs__WEBPACK_IMPORTED_MODULE_1__.Emitter());
    this.activated = this.autoDispose(new grainjs__WEBPACK_IMPORTED_MODULE_1__.Emitter());
    this.cellCancelled = this.autoDispose(new grainjs__WEBPACK_IMPORTED_MODULE_1__.Emitter());
    this._holder = grainjs__WEBPACK_IMPORTED_MODULE_1__.Holder.create(this);
    this.autoDispose(_doc.activeEditor.addListener((editor) => {
      if (!editor) {
        return;
      }
      this.activated.emit(editor.cellPosition());
      const mholder = grainjs__WEBPACK_IMPORTED_MODULE_1__.MultiHolder.create(this._holder);
      mholder.autoDispose(editor.changeEmitter.addListener((e) => {
        this.cellModified.emit({
          position: e.position,
          state: e.currentState,
          modified: e.wasModified
        });
      }));
      mholder.autoDispose(editor.cancelEmitter.addListener((e) => {
        this.cellCancelled.emit({
          position: e.position,
          state: e.currentState,
          modified: e.wasModified
        });
      }));
      mholder.autoDispose(editor.saveEmitter.addListener((e) => {
        this.cellSaved.emit({
          position: e.position,
          state: e.currentState,
          modified: e.wasModified
        });
      }));
    }));
  }
  setState(state) {
    var _a;
    (_a = this._doc.activeEditor.get()) == null ? void 0 : _a.rebuildEditor(void 0, Number.POSITIVE_INFINITY, state);
  }
  async activate() {
    await this._doc.activateEditorAtCursor({});
  }
}
const styledTooltip = (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.styled)("div", `
  display: flex;
  align-items: center;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.theme.controlFg};

  & > .${app_client_ui2018_links__WEBPACK_IMPORTED_MODULE_5__.cssLink.className} {
    margin-left: 8px;
  }
`);
function cellTooltip(clb) {
  return function(ctl) {
    return styledTooltip((0,app_client_ui2018_links__WEBPACK_IMPORTED_MODULE_5__.cssLink)(t("Restore last edit"), grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.on("mousedown", (ev) => {
      ev.preventDefault();
      ctl.close();
      clb();
    }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.testId)("draft-tooltip")), (0,app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_3__.tooltipCloseButton)(ctl));
  };
}
const styledNotification = (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.styled)("div", `
  cursor: pointer;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.theme.controlFg};
  &:hover {
    text-decoration: underline;
  }
`);
function discardNotification(...args) {
  return styledNotification(t("Undo discard"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.testId)("draft-notification"), ...args);
}
function makeWhen(owner) {
  return function(emitter, handler) {
    owner.autoDispose(emitter.addListener(handler));
  };
}


/***/ }),

/***/ "./app/client/components/EditorMonitor.ts":
/*!************************************************!*\
  !*** ./app/client/components/EditorMonitor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorMonitor": () => (/* binding */ EditorMonitor)
/* harmony export */ });
/* harmony import */ var app_client_components_CellPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/CellPosition */ "./app/client/components/CellPosition.ts");
/* harmony import */ var app_client_components_CursorMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/components/CursorMonitor */ "./app/client/components/CursorMonitor.ts");
/* harmony import */ var app_client_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/lib/storage */ "./app/client/lib/storage.ts");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_common_gristUrls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/common/gristUrls */ "./app/common/gristUrls.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");






class EditorMonitor extends grainjs__WEBPACK_IMPORTED_MODULE_5__.Disposable {
  constructor(doc, store) {
    var _a, _b, _c;
    super();
    this._restored = false;
    const userId = (_c = (_b = (_a = doc.app.topAppModel.appObs.get()) == null ? void 0 : _a.currentUser) == null ? void 0 : _b.id) != null ? _c : null;
    const key = doc.docId() + userId;
    this._store = new EditMemoryStorage(key, store);
    this._listenToReload(doc).catch((err) => {
      if (!(err instanceof app_client_models_errors__WEBPACK_IMPORTED_MODULE_3__.UserError)) {
        throw err;
      }
      console.error(`Error while restoring last edit position`, err);
    });
  }
  monitorEditor(editor) {
    const on = typedListener(this);
    on(editor.cancelEmitter, (event) => {
      this._store.clear();
    });
    on(editor.saveEmitter, (event) => {
      this._store.clear();
    });
    on(editor.changeEmitter, (event) => {
      this._store.updateValue(event.position, event.currentState);
    });
  }
  async _listenToReload(doc) {
    if (doc.isReadonly.get() || doc.hasCustomNav.get()) {
      this._store.clear();
      return;
    }
    if (doc.activeViewId.get() === "data") {
      await this._doRestorePosition(doc);
    } else {
      this.autoDispose((0,app_client_components_CursorMonitor__WEBPACK_IMPORTED_MODULE_1__.oneTimeListener)(doc.currentView, async () => {
        await this._doRestorePosition(doc);
      }));
    }
  }
  async _doRestorePosition(doc) {
    if (this._restored) {
      return;
    }
    this._restored = true;
    const viewId = doc.activeViewId.get();
    if (!(0,app_common_gristUrls__WEBPACK_IMPORTED_MODULE_4__.isViewDocPage)(viewId)) {
      this._store.clear();
      return;
    }
    const lastEdit = this._store.readValue();
    if (lastEdit) {
      await doc.recursiveMoveToCursorPos((0,app_client_components_CellPosition__WEBPACK_IMPORTED_MODULE_0__.toCursor)(lastEdit.position, doc.docModel), true, true);
      await doc.activateEditorAtCursor({ state: lastEdit.value });
    }
  }
}
function typedListener(owner) {
  return function(emitter, clb) {
    owner.autoDispose(emitter.addListener(clb));
  };
}
class EditMemoryStorage {
  constructor(_key, _storage = (0,app_client_lib_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)()) {
    this._key = _key;
    this._storage = _storage;
    this._entry = null;
    this._timestamp = 0;
  }
  updateValue(pos, value) {
    this._entry = { position: pos, value };
    this.save();
  }
  readValue() {
    this.load();
    return this._entry;
  }
  clear() {
    this._entry = null;
    this.save();
  }
  timestamp() {
    return this._timestamp;
  }
  _storageKey() {
    return `grist-last-edit-${this._key}`;
  }
  load() {
    const storage = this._storage;
    const data = storage.getItem(this._storageKey());
    this._entry = null;
    this._timestamp = 0;
    if (data) {
      try {
        const { entry, timestamp } = JSON.parse(data);
        if (typeof entry === "undefined" || typeof timestamp != "number") {
          console.error("[EditMemory] Data in local storage has a different structure");
          return;
        }
        this._entry = entry;
        this._timestamp = timestamp;
      } catch (e) {
        console.error("[EditMemory] Can't deserialize date from local storage");
      }
    }
  }
  save() {
    const storage = this._storage;
    if (!this._entry) {
      storage.removeItem(this._storageKey());
      return;
    }
    try {
      this._timestamp = Date.now();
      const data = { timestamp: this._timestamp, entry: this._entry };
      storage.setItem(this._storageKey(), JSON.stringify(data));
    } catch (ex) {
      console.error("Can't save current edited cell state. Error message: " + (ex == null ? void 0 : ex.message));
    }
  }
}


/***/ }),

/***/ "./app/client/components/GristDoc.ts":
/*!*******************************************!*\
  !*** ./app/client/components/GristDoc.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocComm": () => (/* reexport safe */ app_client_components_DocComm__WEBPACK_IMPORTED_MODULE_7__.DocComm),
/* harmony export */   "GristDoc": () => (/* binding */ GristDoc),
/* harmony export */   "startDocTour": () => (/* reexport safe */ app_client_ui_DocTour__WEBPACK_IMPORTED_MODULE_33__.startDocTour)
/* harmony export */ });
/* harmony import */ var app_client_aclui_AccessRules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/aclui/AccessRules */ "./app/client/aclui/AccessRules.ts");
/* harmony import */ var app_client_components_ActionLog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/components/ActionLog */ "./app/client/components/ActionLog.ts");
/* harmony import */ var app_client_components_ChartView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/components/ChartView */ "./app/client/components/ChartView.ts");
/* harmony import */ var app_client_components_CodeEditorPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/components/CodeEditorPanel */ "./app/client/components/CodeEditorPanel.ts");
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_components_CursorMonitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/components/CursorMonitor */ "./app/client/components/CursorMonitor.ts");
/* harmony import */ var app_client_components_DeprecatedCommands__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/components/DeprecatedCommands */ "./app/client/components/DeprecatedCommands.ts");
/* harmony import */ var app_client_components_DocComm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/components/DocComm */ "./app/client/components/DocComm.ts");
/* harmony import */ var app_client_components_DocConfigTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/components/DocConfigTab */ "./app/client/components/DocConfigTab.js");
/* harmony import */ var app_client_components_DocConfigTab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(app_client_components_DocConfigTab__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_client_components_Drafts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/client/components/Drafts */ "./app/client/components/Drafts.ts");
/* harmony import */ var app_client_components_EditorMonitor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/client/components/EditorMonitor */ "./app/client/components/EditorMonitor.ts");
/* harmony import */ var app_client_components_GridView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/client/components/GridView */ "./app/client/components/GridView.js");
/* harmony import */ var app_client_components_GridView__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(app_client_components_GridView__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var app_client_components_Importer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/client/components/Importer */ "./app/client/components/Importer.ts");
/* harmony import */ var app_client_components_RawDataPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/client/components/RawDataPage */ "./app/client/components/RawDataPage.ts");
/* harmony import */ var app_client_ui_DocumentSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/client/ui/DocumentSettings */ "./app/client/ui/DocumentSettings.ts");
/* harmony import */ var app_client_components_UndoStack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/client/components/UndoStack */ "./app/client/components/UndoStack.ts");
/* harmony import */ var app_client_components_ViewLayout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/client/components/ViewLayout */ "./app/client/components/ViewLayout.ts");
/* harmony import */ var app_client_lib_browserGlobals__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/client/lib/browserGlobals */ "./app/client/lib/browserGlobals.js");
/* harmony import */ var app_client_lib_DocPluginManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/client/lib/DocPluginManager */ "./app/client/lib/DocPluginManager.ts");
/* harmony import */ var app_client_lib_ImportSourceElement__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/client/lib/ImportSourceElement */ "./app/client/lib/ImportSourceElement.ts");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_lib_sessionObs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/client/lib/sessionObs */ "./app/client/lib/sessionObs.ts");
/* harmony import */ var app_client_lib_testState__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/client/lib/testState */ "./app/client/lib/testState.ts");
/* harmony import */ var app_client_lib_uploads__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/client/lib/uploads */ "./app/client/lib/uploads.ts");
/* harmony import */ var app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/client/models/AppModel */ "./app/client/models/AppModel.ts");
/* harmony import */ var app_client_models_DataTableModelWithDiff__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/client/models/DataTableModelWithDiff */ "./app/client/models/DataTableModelWithDiff.ts");
/* harmony import */ var app_client_models_DocData__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/client/models/DocData */ "./app/client/models/DocData.ts");
/* harmony import */ var app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! app/client/models/DocModel */ "./app/client/models/DocModel.ts");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! app/client/models/gristUrlState */ "./app/client/models/gristUrlState.ts");
/* harmony import */ var app_client_models_QuerySet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! app/client/models/QuerySet */ "./app/client/models/QuerySet.ts");
/* harmony import */ var app_client_models_UserPrefs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! app/client/models/UserPrefs */ "./app/client/models/UserPrefs.ts");
/* harmony import */ var app_client_ui_DocHistory__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! app/client/ui/DocHistory */ "./app/client/ui/DocHistory.ts");
/* harmony import */ var app_client_ui_DocTour__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! app/client/ui/DocTour */ "./app/client/ui/DocTour.ts");
/* harmony import */ var app_client_ui_OnBoardingPopups__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! app/client/ui/OnBoardingPopups */ "./app/client/ui/OnBoardingPopups.ts");
/* harmony import */ var app_client_ui_PageWidgetPicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! app/client/ui/PageWidgetPicker */ "./app/client/ui/PageWidgetPicker.ts");
/* harmony import */ var app_client_ui_selectBy__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! app/client/ui/selectBy */ "./app/client/ui/selectBy.ts");
/* harmony import */ var app_client_ui_welcomeTour__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! app/client/ui/welcomeTour */ "./app/client/ui/welcomeTour.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! app/client/ui2018/modals */ "./app/client/ui2018/modals.ts");
/* harmony import */ var app_client_widgets_DiscussionEditor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! app/client/widgets/DiscussionEditor */ "./app/client/widgets/DiscussionEditor.ts");
/* harmony import */ var app_common_delay__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! app/common/delay */ "./app/common/delay.ts");
/* harmony import */ var app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! app/common/DisposableWithEvents */ "./app/common/DisposableWithEvents.ts");
/* harmony import */ var app_common_DocActions__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! app/common/DocActions */ "./app/common/DocActions.ts");
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");
/* harmony import */ var app_common_gristUrls__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! app/common/gristUrls */ "./app/common/gristUrls.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var app_common_Prefs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! app/common/Prefs */ "./app/common/Prefs.ts");
/* harmony import */ var app_common_StringUnion__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! app/common/StringUnion */ "./app/common/StringUnion.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_50__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));




















































const cloneDeepWith = __webpack_require__(/*! lodash/cloneDeepWith */ "./node_modules/lodash/cloneDeepWith.js");
const isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_20__.makeT)("GristDoc");
const G = (0,app_client_lib_browserGlobals__WEBPACK_IMPORTED_MODULE_17__.get)("document", "window");

const RightPanelTool = (0,app_common_StringUnion__WEBPACK_IMPORTED_MODULE_48__.StringUnion)("none", "docHistory", "validations", "discussion");
class GristDoc extends app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_42__.DisposableWithEvents {
  constructor(app, docComm, docPageModel, openDocResponse, plugins, options = {}) {
    super();
    this.app = app;
    this.docComm = docComm;
    this.docPageModel = docPageModel;
    this.isReadonly = this.docPageModel.isReadonly;
    this.isReadonlyKo = (0,grainjs__WEBPACK_IMPORTED_MODULE_49__.toKo)(knockout__WEBPACK_IMPORTED_MODULE_50__, this.isReadonly);
    this.resizeEmitter = this.autoDispose(new grainjs__WEBPACK_IMPORTED_MODULE_49__.Emitter());
    this.fieldEditorHolder = grainjs__WEBPACK_IMPORTED_MODULE_49__.Holder.create(this);
    this.activeEditor = grainjs__WEBPACK_IMPORTED_MODULE_49__.Observable.create(this, null);
    this.userOrgPrefs = (0,app_client_models_UserPrefs__WEBPACK_IMPORTED_MODULE_31__.getUserOrgPrefsObs)(this.docPageModel.appModel);
    this.behavioralPromptsManager = this.docPageModel.appModel.behavioralPromptsManager;
    this.sectionInPopup = grainjs__WEBPACK_IMPORTED_MODULE_49__.Observable.create(this, null);
    this._lastOwnActionGroup = null;
    this._rightPanelTabs = /* @__PURE__ */ new Map();
    this._rightPanelTool = (0,app_client_lib_sessionObs__WEBPACK_IMPORTED_MODULE_21__.createSessionObs)(this, "rightPanelTool", "none", RightPanelTool.guard);
    this._viewLayout = null;
    this._showGristTour = (0,app_client_models_UserPrefs__WEBPACK_IMPORTED_MODULE_31__.getUserOrgPrefObs)(this.userOrgPrefs, "showGristTour");
    this._seenDocTours = (0,app_client_models_UserPrefs__WEBPACK_IMPORTED_MODULE_31__.getUserOrgPrefObs)(this.userOrgPrefs, "seenDocTours");
    this._rawSectionOptions = grainjs__WEBPACK_IMPORTED_MODULE_49__.Observable.create(this, null);
    console.log("RECEIVED DOC RESPONSE", openDocResponse);
    this.docData = new app_client_models_DocData__WEBPACK_IMPORTED_MODULE_26__.DocData(this.docComm, openDocResponse.doc);
    this.docModel = new app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_27__.DocModel(this.docData);
    this.querySetManager = app_client_models_QuerySet__WEBPACK_IMPORTED_MODULE_30__.QuerySetManager.create(this, this.docModel, this.docComm);
    this.docPluginManager = new app_client_lib_DocPluginManager__WEBPACK_IMPORTED_MODULE_18__.DocPluginManager(plugins, app.topAppModel.getUntrustedContentOrigin(), this.docComm, app.clientScope);
    this.docInfo = this.docModel.docInfoRow;
    this.hasDocTour = grainjs__WEBPACK_IMPORTED_MODULE_49__.Computed.create(this, (use) => use(this.docModel.visibleTableIds.getObservable()).includes("GristDocTour"));
    const defaultViewId = this.docInfo.newDefaultViewId;
    this.activeViewId = grainjs__WEBPACK_IMPORTED_MODULE_49__.Computed.create(this, (use) => {
      const { docPage } = use((0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_29__.urlState)().state);
      if (typeof docPage === "string" && docPage !== "GristDocTour" && app_common_gristUrls__WEBPACK_IMPORTED_MODULE_45__.SpecialDocPage.guard(docPage)) {
        return docPage;
      }
      const viewId = this.docModel.views.tableData.findRow(docPage === "GristDocTour" ? "name" : "id", docPage);
      return viewId || use(defaultViewId);
    });
    this._activeContent = grainjs__WEBPACK_IMPORTED_MODULE_49__.Computed.create(this, (use) => {
      var _a;
      return (_a = use(this._rawSectionOptions)) != null ? _a : use(this.activeViewId);
    });
    this.viewModel = this.autoDispose(this.docModel.views.createFloatingRowModel((0,grainjs__WEBPACK_IMPORTED_MODULE_49__.toKo)(knockout__WEBPACK_IMPORTED_MODULE_50__, this.activeViewId)));
    this.autoDispose(this.viewModel.activeSectionId.subscribe(() => {
      var _a, _b;
      this.sectionInPopup.set(null);
      if (!((_a = this._viewLayout) == null ? void 0 : _a.isDisposed())) {
        (_b = this._viewLayout) == null ? void 0 : _b.maximized.set(null);
      }
    }));
    this.currentPageName = grainjs__WEBPACK_IMPORTED_MODULE_49__.Computed.create(this, this.activeViewId, (use, docPage) => typeof docPage === "number" ? use(this.viewModel.name) : docPage);
    this.autoDispose(this.viewModel._isDeleted.subscribe((isDeleted) => {
      if (isDeleted) {
        Promise.resolve().then(() => (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_29__.urlState)().pushUrl({ docPage: void 0 })).catch(() => null);
      }
    }));
    this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_49__.subscribe)((0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_29__.urlState)().state, async (use, state) => {
      if (state.hash) {
        try {
          if (state.hash.popup) {
            await this.openPopup(state.hash);
          } else {
            const cursorPos = this._getCursorPosFromHash(state.hash);
            await this.recursiveMoveToCursorPos(cursorPos, true);
          }
        } catch (e) {
          (0,app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_24__.reportError)(e);
        } finally {
          setTimeout(finalizeAnchor, 0);
        }
      }
    }));
    let tourStarting = false;
    this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_49__.subscribe)((0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_29__.urlState)().state, async (_use, state) => {
      var _a, _b;
      if ((0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_38__.isNarrowScreen)()) {
        return;
      }
      if (((_a = state.params) == null ? void 0 : _a.style) === "light") {
        return;
      }
      if (tourStarting || (0,app_client_ui_OnBoardingPopups__WEBPACK_IMPORTED_MODULE_34__.isTourActive)()) {
        return;
      }
      const autoStartDocTour = this.hasDocTour.get() && !((_b = this._seenDocTours.get()) == null ? void 0 : _b.includes(this.docId()));
      const docTour = state.docTour || autoStartDocTour;
      const welcomeTour = state.welcomeTour || this._shouldAutoStartWelcomeTour();
      if (welcomeTour || docTour) {
        tourStarting = true;
        try {
          await this._waitForView();
          await (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_29__.urlState)().pushUrl({ welcomeTour: false, docTour: false }, { replace: true, avoidReload: true });
          if (!docTour) {
            (0,app_client_ui_welcomeTour__WEBPACK_IMPORTED_MODULE_37__.startWelcomeTour)(() => this._showGristTour.set(false));
          } else {
            const onFinishCB = () => autoStartDocTour && (0,app_client_models_UserPrefs__WEBPACK_IMPORTED_MODULE_31__.markAsSeen)(this._seenDocTours, this.docId());
            await (0,app_client_ui_DocTour__WEBPACK_IMPORTED_MODULE_33__.startDocTour)(this.docData, this.docComm, onFinishCB);
          }
        } finally {
          tourStarting = false;
        }
      }
    }));
    const createPreview = (vs) => app_client_components_GridView__WEBPACK_IMPORTED_MODULE_11__.create(this, vs, true);
    const importSourceElems = app_client_lib_ImportSourceElement__WEBPACK_IMPORTED_MODULE_19__.ImportSourceElement.fromArray(this.docPluginManager.pluginsList);
    const importMenuItems = [
      {
        label: t("Import from file"),
        action: () => app_client_components_Importer__WEBPACK_IMPORTED_MODULE_12__.Importer.selectAndImport(this, importSourceElems, null, createPreview)
      },
      ...importSourceElems.map((importSourceElem) => ({
        label: importSourceElem.importSource.label,
        action: () => app_client_components_Importer__WEBPACK_IMPORTED_MODULE_12__.Importer.selectAndImport(this, importSourceElems, importSourceElem, createPreview)
      }))
    ];
    this.docPageModel.importSources = importMenuItems;
    this._actionLog = this.autoDispose(app_client_components_ActionLog__WEBPACK_IMPORTED_MODULE_1__.ActionLog.create({ gristDoc: this }));
    this._undoStack = this.autoDispose(app_client_components_UndoStack__WEBPACK_IMPORTED_MODULE_15__.UndoStack.create(openDocResponse.log, { gristDoc: this }));
    this._docHistory = app_client_ui_DocHistory__WEBPACK_IMPORTED_MODULE_32__.DocHistory.create(this, this.docPageModel, this._actionLog);
    this._discussionPanel = app_client_widgets_DiscussionEditor__WEBPACK_IMPORTED_MODULE_40__.DiscussionPanel.create(this, this);
    this.autoDispose(this.docData.sendActionsEmitter.addListener(this._onSendActionsStart, this));
    this.autoDispose(this.docData.sendActionsDoneEmitter.addListener(this._onSendActionsEnd, this));
    this.autoDispose(app_client_components_commands__WEBPACK_IMPORTED_MODULE_4__.createGroup({
      undo() {
        this._undoStack.sendUndoAction().catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_24__.reportError);
      },
      redo() {
        this._undoStack.sendRedoAction().catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_24__.reportError);
      },
      reloadPlugins() {
        this.docComm.reloadPlugins().then(() => G.window.location.reload(false));
      }
    }, this, true));
    this.listenTo(app.comm, "docUserAction", this.onDocUserAction);
    this.listenTo(app.comm, "docUsage", this.onDocUsageMessage);
    this.autoDispose(app_client_components_DocConfigTab__WEBPACK_IMPORTED_MODULE_8__.create({ gristDoc: this }));
    this.rightPanelTool = grainjs__WEBPACK_IMPORTED_MODULE_49__.Computed.create(this, (use) => this._getToolContent(use(this._rightPanelTool)));
    this.comparison = options.comparison || null;
    this.autoDispose(grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.onElem(window, "dragover", (ev) => ev.preventDefault()));
    this.autoDispose(grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.onElem(window, "drop", (ev) => ev.preventDefault()));
    this.autoDispose(grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.onElem(window, "resize", () => this.resizeEmitter.emit()));
    this.currentView = grainjs__WEBPACK_IMPORTED_MODULE_49__.Observable.create(this, null);
    const viewInstance = (0,grainjs__WEBPACK_IMPORTED_MODULE_49__.fromKo)(this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_50__.pureComputed(() => {
      const viewId = (0,grainjs__WEBPACK_IMPORTED_MODULE_49__.toKo)(knockout__WEBPACK_IMPORTED_MODULE_50__, this.activeViewId)();
      if (!(0,app_common_gristUrls__WEBPACK_IMPORTED_MODULE_45__.isViewDocPage)(viewId)) {
        return null;
      }
      const section = this.viewModel.activeSection();
      const view = section.viewInstance();
      return view;
    })));
    this.autoDispose(viewInstance.addListener(async (view) => {
      if (view) {
        await view.getLoadingDonePromise();
      }
      if (view == null ? void 0 : view.isDisposed()) {
        return;
      }
      this.currentView.set(view);
    }));
    this.cursorPosition = grainjs__WEBPACK_IMPORTED_MODULE_49__.Computed.create(this, (use) => {
      const view = use(this.currentView);
      if (!view) {
        return void 0;
      }
      const viewId = use(this.activeViewId);
      if (!(0,app_common_gristUrls__WEBPACK_IMPORTED_MODULE_45__.isViewDocPage)(viewId)) {
        return void 0;
      }
      const currentPosition = use(view.cursor.currentPosition);
      if (currentPosition) {
        return __spreadProps(__spreadValues({}, currentPosition), { viewId });
      }
      return void 0;
    });
    this.hasCustomNav = grainjs__WEBPACK_IMPORTED_MODULE_49__.Computed.create(this, (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_29__.urlState)().state, (_, state) => {
      const hash = state.hash;
      return !!(hash && (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_46__.undef)(hash.colRef, hash.rowId, hash.sectionId) !== void 0);
    });
    this.draftMonitor = app_client_components_Drafts__WEBPACK_IMPORTED_MODULE_9__.Drafts.create(this, this);
    this.cursorMonitor = app_client_components_CursorMonitor__WEBPACK_IMPORTED_MODULE_5__.CursorMonitor.create(this, this);
    this.editorMonitor = app_client_components_EditorMonitor__WEBPACK_IMPORTED_MODULE_10__.EditorMonitor.create(this, this);
    app_client_components_DeprecatedCommands__WEBPACK_IMPORTED_MODULE_6__.DeprecatedCommands.create(this, this).attach();
    G.window.resetSeenPopups = (seen = false) => {
      this.docPageModel.appModel.dismissedPopups.set(seen ? app_common_Prefs__WEBPACK_IMPORTED_MODULE_47__.DismissedPopup.values : []);
    };
  }
  docId() {
    return this.docPageModel.currentDocId.get();
  }
  addOptionsTab(label, iconElem, contentObj, options) {
    this._rightPanelTabs.set(label, contentObj);
    return { dispose: () => null };
  }
  buildDom() {
    const isMaximized = grainjs__WEBPACK_IMPORTED_MODULE_49__.Computed.create(this, (use) => use(this.sectionInPopup) !== null);
    const isPopup = grainjs__WEBPACK_IMPORTED_MODULE_49__.Computed.create(this, (use) => {
      return ["data", "settings"].includes(use(this.activeViewId)) || use(isMaximized) || typeof use(this._activeContent) === "object";
    });
    return cssViewContentPane((0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_38__.testId)("gristdoc"), cssViewContentPane.cls("-contents", isPopup), grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.domComputed(this._activeContent, (content) => {
      return content === "code" ? grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.create(app_client_components_CodeEditorPanel__WEBPACK_IMPORTED_MODULE_3__.CodeEditorPanel, this) : content === "acl" ? grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.create(app_client_aclui_AccessRules__WEBPACK_IMPORTED_MODULE_0__.AccessRules, this) : content === "data" ? grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.create(app_client_components_RawDataPage__WEBPACK_IMPORTED_MODULE_13__.RawDataPage, this) : content === "settings" ? grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.create(app_client_ui_DocumentSettings__WEBPACK_IMPORTED_MODULE_14__.DocSettingsPage, this) : content === "GristDocTour" ? null : typeof content === "object" ? grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.create((owner) => {
        owner.autoDispose(this.activeViewId.addListener(content.close));
        content.viewSection.autoDispose({ dispose: content.close });
        return grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.create(app_client_components_RawDataPage__WEBPACK_IMPORTED_MODULE_13__.RawDataPopup, this, content.viewSection, content.close);
      }) : grainjs__WEBPACK_IMPORTED_MODULE_49__.dom.create((owner) => {
        this._viewLayout = app_client_components_ViewLayout__WEBPACK_IMPORTED_MODULE_16__.ViewLayout.create(owner, this, content);
        this._viewLayout.maximized.addListener((n) => this.sectionInPopup.set(n));
        return this._viewLayout;
      });
    }));
  }
  openDocPage(viewId) {
    return (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_29__.urlState)().pushUrl({ docPage: viewId });
  }
  showTool(tool) {
    this._rightPanelTool.set(tool);
  }
  getCursorPos() {
    const pos = { sectionId: this.viewModel.activeSectionId() };
    const viewInstance = this.viewModel.activeSection.peek().viewInstance.peek();
    return Object.assign(pos, viewInstance ? viewInstance.cursor.getCursorPos() : {});
  }
  async moveToCursorPos(cursorPos, optActionGroup) {
    if (!cursorPos || !cursorPos.sectionId) {
      return;
    }
    try {
      const viewInstance = await this._switchToSectionId(cursorPos.sectionId);
      if (viewInstance) {
        viewInstance.setCursorPos(cursorPos);
      }
    } catch (e) {
      (0,app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_24__.reportError)(e);
    }
  }
  onDocUserAction(message) {
    console.log("GristDoc.onDocUserAction", message);
    let schemaUpdated = false;
    if (message.data.error) {
      (0,app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_24__.reportError)(new Error(message.data.error));
      return;
    }
    if (this.docComm.isActionFromThisDoc(message)) {
      const docActions = message.data.docActions;
      for (let i = 0, len = docActions.length; i < len; i++) {
        console.log("GristDoc applying #%d", i, docActions[i]);
        this.docData.receiveAction(docActions[i]);
        this.docPluginManager.receiveAction(docActions[i]);
        if (!schemaUpdated && (0,app_common_DocActions__WEBPACK_IMPORTED_MODULE_43__.isSchemaAction)(docActions[i])) {
          schemaUpdated = true;
        }
      }
      const actionGroup = message.data.actionGroup;
      actionGroup.fromSelf = message.fromSelf || false;
      if (!actionGroup.internal) {
        this._actionLog.pushAction(actionGroup);
        this._undoStack.pushAction(actionGroup);
        if (actionGroup.fromSelf) {
          this._lastOwnActionGroup = actionGroup;
        }
      }
      if (schemaUpdated) {
        this.trigger("schemaUpdateAction", docActions);
      }
      this.docPageModel.updateCurrentDocUsage(message.data.docUsage);
      this.trigger("onDocUserAction", docActions);
    }
  }
  onDocUsageMessage(message) {
    if (!this.docComm.isActionFromThisDoc(message)) {
      return;
    }
    (0,grainjs__WEBPACK_IMPORTED_MODULE_49__.bundleChanges)(() => {
      var _a;
      this.docPageModel.updateCurrentDocUsage(message.data.docUsage);
      this.docPageModel.currentProduct.set((_a = message.data.product) != null ? _a : null);
    });
  }
  getTableModel(tableId) {
    return this.docModel.dataTables[tableId];
  }
  getTableModelMaybeWithDiff(tableId) {
    var _a;
    const tableModel = this.getTableModel(tableId);
    if (!((_a = this.comparison) == null ? void 0 : _a.details)) {
      return tableModel;
    }
    return new app_client_models_DataTableModelWithDiff__WEBPACK_IMPORTED_MODULE_25__.DataTableModelWithDiff(tableModel, this.comparison.details);
  }
  async addEmptyTable() {
    const name = await this._promptForName();
    if (name === void 0) {
      return;
    }
    const tableInfo = await this.docData.sendAction(["AddEmptyTable", name || null]);
    await this.openDocPage(this.docModel.tables.getRowModel(tableInfo.id).primaryViewId());
  }
  async addWidgetToPage(val) {
    const docData = this.docModel.docData;
    const viewName = this.viewModel.name.peek();
    let tableId;
    if (val.table === "New Table") {
      tableId = await this._promptForName();
      if (tableId === void 0) {
        return;
      }
    }
    const res = await docData.bundleActions(t("Added new linked section to view {{viewName}}", { viewName }), () => this.addWidgetToPageImpl(val, tableId != null ? tableId : null));
    this.viewModel.activeSectionId(res.sectionRef);
    this._maybeShowEditCardLayoutTip(val.type).catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_24__.reportError);
  }
  async addWidgetToPageImpl(val, tableId = null) {
    const viewRef = this.activeViewId.get();
    const tableRef = val.table === "New Table" ? 0 : val.table;
    const result = await this.docData.sendAction(["CreateViewSection", tableRef, viewRef, val.type, val.summarize ? val.columns : null, tableId]);
    if (val.type === "chart") {
      await this._ensureOneNumericSeries(result.sectionRef);
    }
    await this.saveLink(val.link, result.sectionRef);
    return result;
  }
  async addNewPage(val) {
    if (val.table === "New Table") {
      const name = await this._promptForName();
      if (name === void 0) {
        return;
      }
      const result = await this.docData.sendAction(["AddEmptyTable", name]);
      await this.openDocPage(result.views[0].id);
    } else {
      let result;
      await this.docData.bundleActions(`Add new page`, async () => {
        result = await this.docData.sendAction(["CreateViewSection", val.table, 0, val.type, val.summarize ? val.columns : null, null]);
        if (val.type === "chart") {
          await this._ensureOneNumericSeries(result.sectionRef);
        }
      });
      await this.openDocPage(result.viewRef);
      this.viewModel.activeSectionId(result.sectionRef);
      this._maybeShowEditCardLayoutTip(val.type).catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_24__.reportError);
    }
  }
  async uploadNewTable() {
    const uploadResult = await (0,app_client_lib_uploads__WEBPACK_IMPORTED_MODULE_23__.selectFiles)({
      docWorkerUrl: this.docComm.docWorkerUrl,
      multiple: true
    });
    if (uploadResult) {
      const dataSource = { uploadId: uploadResult.uploadId, transforms: [] };
      const importResult = await this.docComm.finishImportFiles(dataSource, [], {});
      const tableId = importResult.tables[0].hiddenTableId;
      const tableRowModel = this.docModel.dataTables[tableId].tableMetaRow;
      await this.openDocPage(tableRowModel.primaryViewId());
    }
  }
  async saveViewSection(section, newVal) {
    const docData = this.docModel.docData;
    const oldVal = (0,app_client_ui_PageWidgetPicker__WEBPACK_IMPORTED_MODULE_35__.toPageWidget)(section);
    const viewModel = section.view();
    const colIds = section.viewFields().all().map((f) => f.column().colId());
    if (isEqual(oldVal, newVal)) {
      return section;
    }
    return await this._viewLayout.freezeUntil(docData.bundleActions(t("Saved linked section {{title}} in view {{name}}", { title: section.title(), name: viewModel.name() }), async () => {
      if (oldVal.table !== newVal.table || oldVal.summarize !== newVal.summarize) {
        return await this._replaceViewSection(section, oldVal, newVal);
      }
      if (oldVal.type !== newVal.type) {
        await section.parentKey.saveOnly(newVal.type);
      }
      if (!isEqual(oldVal.columns, newVal.columns)) {
        await docData.sendAction(["UpdateSummaryViewSection", section.getRowId(), newVal.columns]);
        if (newVal.type === "chart" && oldVal.type === "chart") {
          await this.setSectionViewFieldsFromArray(section, colIds);
        }
      }
      if (oldVal.link !== newVal.link) {
        await this.saveLink(newVal.link);
      }
      return section;
    }, { nestInActiveBundle: true }));
  }
  async setSectionViewFieldsFromArray(section, colIds) {
    await Promise.all(section.viewFields.peek().all().map((viewField) => this.docModel.viewFields.sendTableAction(["RemoveRecord", viewField.id()])));
    const mapColIdToColumn = /* @__PURE__ */ new Map();
    for (const col of section.table().columns().all()) {
      mapColIdToColumn.set(col.colId(), col);
    }
    if (colIds.length) {
      if (section.optionsObj.prop("multiseries")()) {
        if (!mapColIdToColumn.has(colIds[0])) {
          await section.optionsObj.prop("multiseries").saveOnly(false);
        }
        if (colIds.length > 1 && !mapColIdToColumn.has(colIds[1])) {
          await section.optionsObj.prop("isXAxisUndefined").saveOnly(true);
        }
      } else if (!mapColIdToColumn.has(colIds[0])) {
        await section.optionsObj.prop("isXAxisUndefined").saveOnly(true);
      }
    }
    await Promise.all(colIds.map((colId, i) => {
      if (!mapColIdToColumn.has(colId)) {
        return;
      }
      const colInfo = {
        parentId: section.id(),
        colRef: mapColIdToColumn.get(colId).id(),
        parentPos: i
      };
      const action = ["AddRecord", null, colInfo];
      return this.docModel.viewFields.sendTableAction(action);
    }));
  }
  async saveLink(linkId, sectionId) {
    sectionId = sectionId || this.viewModel.activeSection.peek().getRowId();
    const link = (0,app_client_ui_selectBy__WEBPACK_IMPORTED_MODULE_36__.linkFromId)(linkId);
    if (link.targetColRef) {
      const targetTable = this.docModel.viewSections.getRowModel(sectionId).table();
      const targetCol = this.docModel.columns.getRowModel(link.targetColRef);
      if (targetTable.id() !== targetCol.table().id()) {
        link.targetColRef = targetTable.columns().all().find((c) => c.summarySourceCol() === link.targetColRef).id();
      }
    }
    return this.docData.sendAction(["UpdateRecord", "_grist_Views_section", sectionId, {
      linkSrcSectionRef: link.srcSectionRef,
      linkSrcColRef: link.srcColRef,
      linkTargetColRef: link.targetColRef
    }]);
  }
  selectBy(widget) {
    const viewSections = this.viewModel.viewSections.peek().peek();
    return (0,app_client_ui_selectBy__WEBPACK_IMPORTED_MODULE_36__.selectBy)(this.docModel, viewSections, widget);
  }
  async forkIfNeeded() {
    if (this.docPageModel.isPrefork.get()) {
      await this.docComm.forkAndUpdateUrl();
    }
  }
  async clearColumns(colRefs, { keepType } = {}) {
    await this.docModel.columns.sendTableAction(["BulkUpdateRecord", colRefs, __spreadProps(__spreadValues({
      isFormula: colRefs.map((f) => true),
      formula: colRefs.map((f) => "")
    }, keepType ? {} : {
      type: colRefs.map((f) => "Any"),
      widgetOptions: colRefs.map((f) => ""),
      visibleCol: colRefs.map((f) => null),
      displayCol: colRefs.map((f) => null),
      rules: colRefs.map((f) => null)
    }), {
      recalcWhen: colRefs.map((f) => app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__.RecalcWhen.DEFAULT),
      recalcDeps: colRefs.map((f) => null)
    })]);
  }
  async convertIsFormula(colRefs, opts) {
    return this.docModel.columns.sendTableAction(["BulkUpdateRecord", colRefs, {
      isFormula: colRefs.map((f) => opts.toFormula),
      recalcWhen: colRefs.map((f) => opts.noRecalc ? app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__.RecalcWhen.NEVER : app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__.RecalcWhen.DEFAULT),
      recalcDeps: colRefs.map((f) => null)
    }]);
  }
  async updateFormula(colRef, formula) {
    return this.docModel.columns.sendTableAction(["UpdateRecord", colRef, {
      formula
    }]);
  }
  async convertToFormula(colRef, formula) {
    return this.docModel.columns.sendTableAction(["UpdateRecord", colRef, {
      isFormula: true,
      formula,
      recalcWhen: app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__.RecalcWhen.DEFAULT,
      recalcDeps: null
    }]);
  }
  async convertToTrigger(colRefs, formula) {
    return this.docModel.columns.sendTableAction(["UpdateRecord", colRefs, {
      isFormula: false,
      formula,
      recalcWhen: app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__.RecalcWhen.DEFAULT,
      recalcDeps: null
    }]);
  }
  getCsvLink() {
    const params = this._getDocApiDownloadParams();
    return this.docPageModel.appModel.api.getDocAPI(this.docId()).getDownloadCsvUrl(params);
  }
  getXlsxActiveViewLink() {
    const params = this._getDocApiDownloadParams();
    return this.docPageModel.appModel.api.getDocAPI(this.docId()).getDownloadXlsxUrl(params);
  }
  hasGranularAccessRules() {
    const rulesTable = this.docData.getMetaTable("_grist_ACLRules");
    return rulesTable.numRecords() > rulesTable.filterRowIds({ permissionsText: "", permissions: 63 }).length;
  }
  async recursiveMoveToCursorPos(cursorPos, setAsActiveSection, silent = false) {
    try {
      if (!cursorPos.sectionId) {
        throw new Error("sectionId required");
      }
      if (!cursorPos.rowId) {
        throw new Error("rowId required");
      }
      const section = this.docModel.viewSections.getRowModel(cursorPos.sectionId);
      if (!section.id.peek()) {
        throw new Error(`Section ${cursorPos.sectionId} does not exist`);
      }
      const srcSection = section.linkSrcSection.peek();
      if (srcSection.id.peek()) {
        const linkTargetCol = section.linkTargetCol.peek();
        let controller;
        if (linkTargetCol.colId.peek()) {
          const destTable = await this._getTableData(section);
          controller = destTable.getValue(cursorPos.rowId, linkTargetCol.colId.peek());
        } else {
          controller = cursorPos.rowId;
        }
        const colId = section.linkSrcCol.peek().colId.peek();
        let srcRowId;
        const isSrcSummary = srcSection.table.peek().summarySource.peek().id.peek();
        if (!colId && !isSrcSummary) {
          if ((0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__.isList)(controller)) {
            controller = controller[1];
          }
          srcRowId = controller;
        } else {
          const srcTable = await this._getTableData(srcSection);
          const query = { tableId: srcTable.tableId, filters: {}, operations: {} };
          if (colId) {
            query.operations[colId] = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__.isRefListType)(section.linkSrcCol.peek().type.peek()) ? "intersects" : "in";
            query.filters[colId] = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__.isList)(controller) ? controller.slice(1) : [controller];
          } else {
            const destTable = await this._getTableData(section);
            for (const srcCol of srcSection.table.peek().groupByColumns.peek()) {
              const filterCol = srcCol.summarySource.peek();
              const filterColId = filterCol.colId.peek();
              controller = destTable.getValue(cursorPos.rowId, filterColId);
              query.operations[filterColId] = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__.isListType)(filterCol.type.peek()) && !controller ? "empty" : "in";
              query.filters[filterColId] = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_44__.isList)(controller) ? controller.slice(1) : [controller];
            }
          }
          srcRowId = srcTable.getRowIds().find((0,app_client_models_QuerySet__WEBPACK_IMPORTED_MODULE_30__.getFilterFunc)(this.docData, query));
        }
        if (!srcRowId || typeof srcRowId !== "number") {
          throw new Error("cannot trace rowId");
        }
        await this.recursiveMoveToCursorPos({
          rowId: srcRowId,
          sectionId: srcSection.id.peek()
        }, false, silent);
      }
      const view = section.view.peek();
      const docPage = section.isRaw.peek() ? "data" : view.getRowId();
      if (docPage != this.activeViewId.get()) {
        await this.openDocPage(docPage);
      }
      if (setAsActiveSection) {
        view.activeSectionId(cursorPos.sectionId);
      }
      const fieldIndex = cursorPos.fieldIndex;
      const viewInstance = await (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_46__.waitObs)(section.viewInstance);
      if (!viewInstance) {
        throw new Error("view not found");
      }
      await (0,app_common_delay__WEBPACK_IMPORTED_MODULE_41__.delay)(0);
      viewInstance.setCursorPos(__spreadProps(__spreadValues({}, cursorPos), { fieldIndex }));
      await (0,app_common_delay__WEBPACK_IMPORTED_MODULE_41__.delay)(0);
      return true;
    } catch (e) {
      console.debug(`_recursiveMoveToCursorPos(${JSON.stringify(cursorPos)}): ${e}`);
      if (!silent) {
        throw new app_client_models_errors__WEBPACK_IMPORTED_MODULE_28__.UserError("There was a problem finding the desired cell.");
      }
      return false;
    }
  }
  async activateEditorAtCursor(options) {
    const view = await this._waitForView();
    view == null ? void 0 : view.activateEditorAtCursor(options);
  }
  async renameTable(tableId, newTableName) {
    const tableRec = this.docModel.visibleTables.all().find((tb) => tb.tableId.peek() === tableId);
    if (!tableRec) {
      throw new app_client_models_errors__WEBPACK_IMPORTED_MODULE_28__.UserError(`No table with id ${tableId}`);
    }
    await tableRec.tableName.saveOnly(newTableName);
  }
  async openPopup(hash) {
    if (!hash.sectionId) {
      return;
    }
    if (this.viewModel.viewSections.peek().peek().some((s) => s.id.peek() === hash.sectionId)) {
      this.viewModel.activeSectionId(hash.sectionId);
      if (hash.colRef && hash.rowId) {
        const activeSection = this.viewModel.activeSection.peek();
        const fieldIndex = activeSection.viewFields.peek().all().findIndex((f) => f.colRef.peek() === hash.colRef);
        if (fieldIndex >= 0) {
          const view = await this._waitForView(activeSection);
          view == null ? void 0 : view.setCursorPos({ sectionId: hash.sectionId, rowId: hash.rowId, fieldIndex });
        }
      }
      app_client_components_commands__WEBPACK_IMPORTED_MODULE_4__.allCommands.maximizeActiveSection.run();
      return;
    }
    const prevSection = this.viewModel.activeSection.peek();
    this.viewModel.activeSectionId(hash.sectionId);
    const popupSection = this.viewModel.activeSection.peek();
    popupSection.hasFocus(true);
    this._rawSectionOptions.set({
      hash,
      viewSection: popupSection,
      close: () => {
        if (!this._rawSectionOptions.get()) {
          return;
        }
        if (popupSection !== prevSection) {
          if (!popupSection.isDisposed()) {
            popupSection.hasFocus(false);
          }
          if (!prevSection.isDisposed()) {
            prevSection.hasFocus(true);
          }
        }
        this._rawSectionOptions.set(null);
      }
    });
    if (hash.colRef && hash.rowId) {
      const fieldIndex = popupSection.viewFields.peek().all().findIndex((f) => f.colRef.peek() === hash.colRef);
      if (fieldIndex >= 0) {
        const view = await this._waitForView(popupSection);
        view == null ? void 0 : view.setCursorPos({ sectionId: hash.sectionId, rowId: hash.rowId, fieldIndex });
      }
    }
  }
  async _waitForView(popupSection) {
    const sectionToCheck = popupSection != null ? popupSection : this.viewModel.activeSection.peek();
    if (!sectionToCheck.getRowId()) {
      return null;
    }
    async function singleWait(s) {
      const view2 = await (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_46__.waitObs)(sectionToCheck.viewInstance, (vsi) => Boolean(vsi && !vsi.isDisposed()));
      return view2;
    }
    let view = await singleWait(sectionToCheck);
    if (view.isDisposed()) {
      if (popupSection) {
        view = await singleWait(popupSection);
      }
      if (view.isDisposed()) {
        return null;
      }
    }
    await view.getLoadingDonePromise();
    await (0,app_common_delay__WEBPACK_IMPORTED_MODULE_41__.delay)(0);
    return view;
  }
  _getToolContent(tool) {
    switch (tool) {
      case "docHistory": {
        return { icon: "Log", label: "Document History", content: this._docHistory };
      }
      case "validations": {
        const content = this._rightPanelTabs.get("Validate Data");
        return content ? { icon: "Validation", label: "Validation Rules", content } : null;
      }
      case "discussion": {
        return { icon: "Chat", label: this._discussionPanel.buildMenu(), content: this._discussionPanel };
      }
      case "none":
      default: {
        return null;
      }
    }
  }
  async _maybeShowEditCardLayoutTip(selectedWidgetType) {
    if (!["single", "detail"].includes(selectedWidgetType) || this.behavioralPromptsManager.hasSeenTip("editCardLayout")) {
      return;
    }
    app_client_components_commands__WEBPACK_IMPORTED_MODULE_4__.allCommands.viewTabOpen.run();
    await app_client_components_commands__WEBPACK_IMPORTED_MODULE_4__.allCommands.rightPanelOpen.run();
    const editLayoutButton = document.querySelector(".behavioral-prompt-edit-card-layout");
    if (!editLayoutButton) {
      throw new Error("GristDoc failed to find edit card layout button");
    }
    this.behavioralPromptsManager.showTip(editLayoutButton, "editCardLayout", {
      popupOptions: {
        placement: "left-start"
      }
    });
  }
  async _promptForName() {
    return await (0,app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_39__.invokePrompt)("Table name", "Create", "", "Default table name");
  }
  async _replaceViewSection(section, oldVal, newVal) {
    const docModel = this.docModel;
    const viewModel = section.view();
    const docData = this.docModel.docData;
    const options = section.options();
    const colIds = section.viewFields().all().map((f) => f.column().colId());
    const chartType = section.chartType();
    const theme = section.theme();
    const layoutSpec = this._viewLayout.layoutSpec();
    const sectionTitle = section.title();
    const sectionId = section.id();
    const sectionCreationResult = await this.addWidgetToPageImpl(newVal);
    const newSection = docModel.viewSections.getRowModel(sectionCreationResult.sectionRef);
    await newSection.title.saveOnly(sectionTitle);
    const newLayoutSpec = cloneDeepWith(layoutSpec, (val) => {
      if (typeof val === "object" && val.leaf === sectionId) {
        return __spreadProps(__spreadValues({}, val), { leaf: newSection.id() });
      }
    });
    await viewModel.layoutSpec.saveOnly(JSON.stringify(newLayoutSpec));
    await newSection.options.saveOnly(options);
    if (oldVal.type === "chart" && newVal.type === "chart") {
      await this.setSectionViewFieldsFromArray(newSection, colIds);
    }
    await newSection.theme.saveOnly(theme);
    await newSection.chartType.saveOnly(chartType);
    this.viewModel.activeSectionId(newSection.getRowId());
    await docData.sendAction(["RemoveViewSection", sectionId]);
    return newSection;
  }
  _onSendActionsStart(ev) {
    this._lastOwnActionGroup = null;
    ev.cursorPos = this.getCursorPos();
  }
  _onSendActionsEnd(ev) {
    const a = this._lastOwnActionGroup;
    if (a) {
      a.cursorPos = ev.cursorPos;
      if (a.rowIdHint) {
        a.cursorPos.rowId = a.rowIdHint;
      }
    }
  }
  _getDocApiDownloadParams() {
    const filters = this.viewModel.activeSection.peek().activeFilters.get().map((filterInfo) => ({
      colRef: filterInfo.fieldOrColumn.origCol().origColRef(),
      filter: filterInfo.filter()
    }));
    const params = {
      viewSection: this.viewModel.activeSectionId(),
      tableId: this.viewModel.activeSection().table().tableId(),
      activeSortSpec: JSON.stringify(this.viewModel.activeSection().activeSortSpec()),
      filters: JSON.stringify(filters)
    };
    return params;
  }
  async _switchToSectionId(sectionId) {
    const section = this.docModel.viewSections.getRowModel(sectionId);
    if (section.isRaw.peek()) {
      await (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_29__.urlState)().pushUrl({ docPage: "data" });
      this.viewModel.activeSectionId(sectionId);
    } else {
      const view = section.view.peek();
      await this.openDocPage(view.getRowId());
      view.activeSectionId(sectionId);
    }
    return (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_46__.waitObs)(section.viewInstance);
  }
  async _getTableData(section) {
    const viewInstance = await (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_46__.waitObs)(section.viewInstance);
    if (!viewInstance) {
      throw new Error("view not found");
    }
    await viewInstance.getLoadingDonePromise();
    const table = this.docData.getTable(section.table.peek().tableId.peek());
    if (!table) {
      throw new Error("no section table");
    }
    return table;
  }
  _getCursorPosFromHash(hash) {
    const cursorPos = { rowId: hash.rowId, sectionId: hash.sectionId };
    if (cursorPos.sectionId != void 0 && hash.colRef !== void 0) {
      const section = this.docModel.viewSections.getRowModel(cursorPos.sectionId);
      const fieldIndex = section.viewFields.peek().all().findIndex((x) => x.colRef.peek() == hash.colRef);
      if (fieldIndex >= 0) {
        cursorPos.fieldIndex = fieldIndex;
      }
    }
    return cursorPos;
  }
  _shouldAutoStartWelcomeTour() {
    var _a, _b;
    if (this.hasDocTour.get()) {
      return false;
    }
    const appModel = this.docPageModel.appModel;
    if (!((_a = appModel.currentOrg) == null ? void 0 : _a.owner) || this.isReadonly.get()) {
      return false;
    }
    return (_b = this._showGristTour.get()) != null ? _b : !appModel.currentValidUser;
  }
  async _ensureOneNumericSeries(id) {
    const viewSection = this.docModel.viewSections.getRowModel(id);
    const viewFields = viewSection.viewFields.peek().peek();
    if (viewFields.length === 1) {
      return;
    }
    const field = viewSection.viewFields.peek().peek()[1];
    if ((0,app_client_components_ChartView__WEBPACK_IMPORTED_MODULE_2__.isNumericOnly)(viewSection.chartTypeDef.peek()) && !(0,app_client_components_ChartView__WEBPACK_IMPORTED_MODULE_2__.isNumericLike)(field.column.peek())) {
      const actions = [];
      actions.push(["RemoveRecord", field.id.peek()]);
      const newField = viewSection.hiddenColumns.peek().find((col) => (0,app_client_components_ChartView__WEBPACK_IMPORTED_MODULE_2__.isNumericLike)(col));
      if (newField) {
        const colInfo = {
          parentId: viewSection.id.peek(),
          colRef: newField.id.peek()
        };
        actions.push(["AddRecord", null, colInfo]);
      }
      await this.docModel.viewFields.sendTableActions(actions);
    }
  }
}
async function finalizeAnchor() {
  await (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_29__.urlState)().pushUrl({ hash: {} }, { replace: true });
  (0,app_client_lib_testState__WEBPACK_IMPORTED_MODULE_22__.setTestState)({ anchorApplied: true });
}
const cssViewContentPane = (0,grainjs__WEBPACK_IMPORTED_MODULE_49__.styled)("div", `
  flex: auto;
  display: flex;
  flex-direction: column;
  overflow: visible;
  position: relative;
  min-width: 240px;
  margin: 12px;
  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_38__.mediaSmall} {
    & {
      margin: 4px;
    }
  }
  @media print {
    & {
      margin: 0px;
    }
  }
  &-contents {
    margin: 0px;
    overflow: hidden;
  }
`);


/***/ }),

/***/ "./app/client/components/Importer.ts":
/*!*******************************************!*\
  !*** ./app/client/components/Importer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Importer": () => (/* binding */ Importer)
/* harmony export */ });
/* harmony import */ var app_client_components_ParseOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/ParseOptions */ "./app/client/components/ParseOptions.ts");
/* harmony import */ var app_client_components_PluginScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/components/PluginScreen */ "./app/client/components/PluginScreen.ts");
/* harmony import */ var app_client_lib_FocusLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/lib/FocusLayer */ "./app/client/lib/FocusLayer.ts");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_lib_uploads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/lib/uploads */ "./app/client/lib/uploads.ts");
/* harmony import */ var app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/models/AppModel */ "./app/client/models/AppModel.ts");
/* harmony import */ var app_client_ui_CodeHighlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/ui/CodeHighlight */ "./app/client/ui/CodeHighlight.ts");
/* harmony import */ var app_client_ui_FileDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/ui/FileDialog */ "./app/client/ui/FileDialog.ts");
/* harmony import */ var app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/ui2018/buttons */ "./app/client/ui2018/buttons.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/client/ui2018/modals */ "./app/client/ui2018/modals.ts");
/* harmony import */ var app_client_ui2018_loaders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/client/ui2018/loaders */ "./app/client/ui2018/loaders.ts");
/* harmony import */ var app_client_widgets_FormulaEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/client/widgets/FormulaEditor */ "./app/client/widgets/FormulaEditor.ts");
/* harmony import */ var app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/common/ActiveDocAPI */ "./app/common/ActiveDocAPI.ts");
/* harmony import */ var app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/common/DisposableWithEvents */ "./app/common/DisposableWithEvents.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_ui2018_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/client/ui2018/checkbox */ "./app/client/ui2018/checkbox.ts");
/* harmony import */ var app_client_ui_googleAuth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/client/ui/googleAuth */ "./app/client/ui/googleAuth.ts");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));





















const debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_3__.makeT)("Importer");
class Importer extends app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_16__.DisposableWithEvents {
  constructor(_gristDoc, _importSourceElem, _createPreview) {
    super();
    this._gristDoc = _gristDoc;
    this._importSourceElem = _importSourceElem;
    this._createPreview = _createPreview;
    this._docComm = this._gristDoc.docComm;
    this._mergeOptions = {};
    this._parseOptions = grainjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(this, {});
    this._sourceInfoArray = grainjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(this, []);
    this._sourceInfoSelected = grainjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(this, null);
    this._formulaEditorHolder = grainjs__WEBPACK_IMPORTED_MODULE_18__.Holder.create(this);
    this._previewViewSection = grainjs__WEBPACK_IMPORTED_MODULE_18__.Computed.create(this, this._sourceInfoSelected, (use, info) => {
      if (!info) {
        return null;
      }
      const isLoading = use(info.isLoadingSection);
      if (isLoading) {
        return null;
      }
      const viewSection = use(info.transformSection);
      return viewSection && !use(viewSection._isDeleted) ? viewSection : null;
    });
    this._isLoadingDiff = grainjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(this, false);
    this._lastGenImportDiffPromise = null;
    this._debouncedUpdateDiff = debounce(this._updateDiff, 1e3, { leading: true, trailing: true });
    this._hasScheduledDiffUpdate = false;
    this._destTables = grainjs__WEBPACK_IMPORTED_MODULE_18__.Computed.create(this, (use) => [
      { value: app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_15__.NEW_TABLE, label: "New Table" },
      ...use(this._sourceInfoArray).length > 1 ? [{ value: app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_15__.SKIP_TABLE, label: "Skip" }] : [],
      ...use(this._gristDoc.docModel.visibleTableIds.getObservable()).map((id) => ({ value: id, label: id }))
    ]);
    this._sourceColLabelsById = grainjs__WEBPACK_IMPORTED_MODULE_18__.Computed.create(this, this._sourceInfoSelected, (use, info) => {
      if (!info || use(info.sourceSection._isDeleted)) {
        return null;
      }
      const fields = use(use(info.sourceSection.viewFields).getObservable());
      return new Map(fields.map((f) => [use(use(f.column).colId), use(use(f.column).label)]));
    });
    this._transformSectionCols = grainjs__WEBPACK_IMPORTED_MODULE_18__.Computed.create(this, this._sourceInfoSelected, (use, info) => {
      if (!info) {
        return null;
      }
      const transformSection = use(info.transformSection);
      if (!transformSection || use(transformSection._isDeleted)) {
        return null;
      }
      const fields = use(use(transformSection.viewFields).getObservable());
      return fields.map((f) => use(f.column));
    });
    this._unmatchedFields = grainjs__WEBPACK_IMPORTED_MODULE_18__.Computed.create(this, this._transformSectionCols, (use, cols) => {
      if (!cols) {
        return null;
      }
      return cols.filter((c) => use(c.formula).trim() === "").map((c) => c.label());
    });
    this._screen = app_client_components_PluginScreen__WEBPACK_IMPORTED_MODULE_1__.PluginScreen.create(this, (_importSourceElem == null ? void 0 : _importSourceElem.importSource.label) || "Import from file");
    this.onDispose(() => {
      this._resetImportDiffState();
    });
  }
  static async selectAndImport(gristDoc, imports, importSourceElem, createPreview) {
    let uploadResult = null;
    if (!importSourceElem) {
      const files = await (0,app_client_ui_FileDialog__WEBPACK_IMPORTED_MODULE_7__.openFilePicker)({ multiple: true });
      await gristDoc.forkIfNeeded();
      const label = files.map((f) => f.name).join(", ");
      const size = files.reduce((acc, f) => acc + f.size, 0);
      const app = gristDoc.app.topAppModel.appObs.get();
      const progress = app ? app.notifier.createProgressIndicator(label, (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_17__.byteString)(size)) : null;
      const onProgress = (percent) => progress && progress.setProgress(percent);
      try {
        onProgress(0);
        uploadResult = await (0,app_client_lib_uploads__WEBPACK_IMPORTED_MODULE_4__.uploadFiles)(files, {
          docWorkerUrl: gristDoc.docComm.docWorkerUrl,
          sizeLimit: "import"
        }, onProgress);
        onProgress(100);
      } finally {
        if (progress) {
          progress.dispose();
        }
      }
    }
    try {
      await Importer.create(null, gristDoc, importSourceElem, createPreview).pickAndUploadSource(uploadResult);
    } catch (err1) {
      if (!(err1 instanceof GDriveUrlNotSupported)) {
        (0,app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_5__.reportError)(err1);
      } else {
        const gdrivePlugin = imports.find((p) => p.plugin.definition.id === "builtIn/gdrive" && p !== importSourceElem);
        if (!gdrivePlugin) {
          (0,app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_5__.reportError)(err1);
        } else {
          try {
            await Importer.create(null, gristDoc, gdrivePlugin, createPreview).pickAndUploadSource(uploadResult);
          } catch (err2) {
            (0,app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_5__.reportError)(err2);
          }
        }
      }
    }
  }
  async pickAndUploadSource(uploadResult) {
    try {
      if (!this._importSourceElem) {
        uploadResult = uploadResult || await (0,app_client_lib_uploads__WEBPACK_IMPORTED_MODULE_4__.selectFiles)({
          docWorkerUrl: this._docComm.docWorkerUrl,
          multiple: true,
          sizeLimit: "import"
        });
      } else {
        const plugin = this._importSourceElem.plugin;
        const handle = this._screen.renderPlugin(plugin);
        const importSource = await this._importSourceElem.importSourceStub.getImportSource(handle);
        plugin.removeRenderTarget(handle);
        this._screen.renderSpinner();
        if (importSource) {
          const item = importSource.item;
          if (item.kind === "fileList") {
            const files = item.files.map(({ content, name }) => new File([content], name));
            uploadResult = await (0,app_client_lib_uploads__WEBPACK_IMPORTED_MODULE_4__.uploadFiles)(files, {
              docWorkerUrl: this._docComm.docWorkerUrl,
              sizeLimit: "import"
            });
          } else if (item.kind === "url") {
            if ((0,app_client_lib_uploads__WEBPACK_IMPORTED_MODULE_4__.isDriveUrl)(item.url)) {
              uploadResult = await this._fetchFromDrive(item.url);
            } else {
              uploadResult = await (0,app_client_lib_uploads__WEBPACK_IMPORTED_MODULE_4__.fetchURL)(this._docComm, item.url);
            }
          } else {
            throw new Error(`Import source of kind ${item.kind} are not yet supported!`);
          }
        }
      }
    } catch (err) {
      if (err instanceof CancelledError) {
        await this._cancelImport();
        return;
      }
      if (err instanceof GDriveUrlNotSupported) {
        await this._cancelImport();
        throw err;
      }
      this._screen.renderError(err.message);
      return;
    }
    if (uploadResult) {
      this._uploadResult = uploadResult;
      await this._reImport(uploadResult);
    } else {
      await this._cancelImport();
    }
  }
  _getPrimaryViewSection(tableId) {
    const tableModel = this._gristDoc.getTableModel(tableId);
    const viewRow = tableModel.tableMetaRow.primaryView.peek();
    return viewRow.viewSections.peek().peek()[0];
  }
  _getSectionByRef(sectionRef) {
    return this._gristDoc.docModel.viewSections.getRowModel(sectionRef);
  }
  async _updateTransformSection(sourceInfo) {
    this._resetImportDiffState();
    sourceInfo.isLoadingSection.set(true);
    sourceInfo.transformSection.set(null);
    const genImporterViewPromise = this._gristDoc.docData.sendAction(["GenImporterView", sourceInfo.hiddenTableId, sourceInfo.destTableId.get(), null]);
    sourceInfo.lastGenImporterViewPromise = genImporterViewPromise;
    const transformSectionRef = await genImporterViewPromise;
    if (this.isDisposed() || sourceInfo.lastGenImporterViewPromise !== genImporterViewPromise) {
      return;
    }
    sourceInfo.transformSection.set(this._gristDoc.docModel.viewSections.getRowModel(transformSectionRef));
    sourceInfo.isLoadingSection.set(false);
    this._gristDoc.viewModel.activeSectionId(transformSectionRef);
  }
  _getTransformedDataSource(upload) {
    const transforms = upload.files.map((file, i) => this._createTransformRuleMap(i));
    return { uploadId: upload.uploadId, transforms };
  }
  _getMergeOptionMaps(upload) {
    return upload.files.map((_file, i) => this._createMergeOptionsMap(i));
  }
  _createTransformRuleMap(uploadFileIndex) {
    const result = {};
    for (const sourceInfo of this._sourceInfoArray.get()) {
      if (sourceInfo.uploadFileIndex === uploadFileIndex) {
        result[sourceInfo.origTableName] = this._createTransformRule(sourceInfo);
      }
    }
    return result;
  }
  _createMergeOptionsMap(uploadFileIndex) {
    const result = {};
    for (const sourceInfo of this._sourceInfoArray.get()) {
      if (sourceInfo.uploadFileIndex === uploadFileIndex) {
        result[sourceInfo.origTableName] = this._getMergeOptionsForSource(sourceInfo);
      }
    }
    return result;
  }
  _createTransformRule(sourceInfo) {
    const transformSection = sourceInfo.transformSection.get();
    if (!transformSection) {
      throw new Error(`Table ${sourceInfo.hiddenTableId} is missing transform section`);
    }
    const transformFields = transformSection.viewFields().peek();
    const sourceFields = sourceInfo.sourceSection.viewFields().peek();
    const destTableId = sourceInfo.destTableId.get();
    return {
      destTableId,
      destCols: transformFields.map((field) => ({
        label: field.label(),
        colId: destTableId ? field.colId() : null,
        type: field.column().type(),
        widgetOptions: field.column().widgetOptions(),
        formula: field.column().formula()
      })),
      sourceCols: sourceFields.map((field) => field.colId())
    };
  }
  _getMergeOptionsForSource(sourceInfo) {
    const mergeOptions = this._mergeOptions[sourceInfo.hiddenTableId];
    if (!mergeOptions) {
      return void 0;
    }
    const { updateExistingRecords, mergeCols, mergeStrategy } = mergeOptions;
    return {
      mergeCols: updateExistingRecords.get() ? mergeCols.get() : [],
      mergeStrategy: mergeStrategy.get()
    };
  }
  _getHiddenTableIds() {
    return this._sourceInfoArray.get().map((si) => si.hiddenTableId);
  }
  async _reImport(upload) {
    this._screen.renderSpinner();
    this._resetImportDiffState();
    try {
      const parseOptions = __spreadProps(__spreadValues({}, this._parseOptions.get()), { NUM_ROWS: 0 });
      const importResult = await this._docComm.importFiles(this._getTransformedDataSource(upload), parseOptions, this._getHiddenTableIds());
      this._parseOptions.set(importResult.options);
      this._sourceInfoArray.set(importResult.tables.map((info) => {
        var _a;
        return {
          hiddenTableId: info.hiddenTableId,
          uploadFileIndex: info.uploadFileIndex,
          origTableName: info.origTableName,
          sourceSection: this._getPrimaryViewSection(info.hiddenTableId),
          transformSection: grainjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(null, this._getSectionByRef(info.transformSectionRef)),
          destTableId: grainjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(null, (_a = info.destTableId) != null ? _a : app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_15__.NEW_TABLE),
          isLoadingSection: grainjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(null, false),
          lastGenImporterViewPromise: null
        };
      }));
      if (this._sourceInfoArray.get().length === 0) {
        throw new Error("No data was imported");
      }
      this._mergeOptions = {};
      this._getHiddenTableIds().forEach((tableId) => {
        this._mergeOptions[tableId] = {
          updateExistingRecords: grainjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(null, false),
          mergeCols: (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.obsArray)(),
          mergeStrategy: grainjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(null, { type: "replace-with-nonblank-source" }),
          hasInvalidMergeCols: grainjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(null, false)
        };
      });
      this._sourceInfoSelected.set(this._sourceInfoArray.get()[0] || null);
      this._renderMain(upload);
    } catch (e) {
      console.warn("Import failed", e);
      this._screen.renderError(e.message);
    }
  }
  async _maybeFinishImport(upload) {
    var _a;
    const isConfigValid = this._validateImportConfiguration();
    if (!isConfigValid) {
      return;
    }
    this._screen.renderSpinner();
    this._resetImportDiffState();
    const parseOptions = __spreadProps(__spreadValues({}, this._parseOptions.get()), { NUM_ROWS: 0 });
    const mergeOptionMaps = this._getMergeOptionMaps(upload);
    const importResult = await this._docComm.finishImportFiles(this._getTransformedDataSource(upload), this._getHiddenTableIds(), { mergeOptionMaps, parseOptions });
    if ((_a = importResult.tables[0]) == null ? void 0 : _a.hiddenTableId) {
      const tableRowModel = this._gristDoc.docModel.dataTables[importResult.tables[0].hiddenTableId].tableMetaRow;
      await this._gristDoc.openDocPage(tableRowModel.primaryViewId());
    }
    this._screen.close();
    this.dispose();
  }
  async _cancelImport() {
    this._resetImportDiffState();
    this._formulaEditorHolder.dispose();
    if (this._uploadResult) {
      await this._docComm.cancelImportFiles(this._uploadResult.uploadId, this._getHiddenTableIds());
    }
    this._screen.close();
    this.dispose();
  }
  _resetTableMergeOptions(tableId) {
    var _a;
    (_a = this._mergeOptions[tableId]) == null ? void 0 : _a.mergeCols.set([]);
  }
  _validateImportConfiguration() {
    let isValid = true;
    const selectedSourceInfo = this._sourceInfoSelected.get();
    if (!selectedSourceInfo) {
      return isValid;
    }
    const mergeOptions = this._mergeOptions[selectedSourceInfo.hiddenTableId];
    if (!mergeOptions) {
      return isValid;
    }
    const destTableId = selectedSourceInfo.destTableId.get();
    const { updateExistingRecords, mergeCols, hasInvalidMergeCols } = mergeOptions;
    if (destTableId !== null && updateExistingRecords.get() && mergeCols.get().length === 0) {
      hasInvalidMergeCols.set(true);
      isValid = false;
    }
    return isValid;
  }
  _buildModalTitle(rightElement) {
    const title = this._importSourceElem ? this._importSourceElem.importSource.label : "Import from file";
    return cssModalHeader((0,app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_12__.cssModalTitle)(title), rightElement);
  }
  async _updateImportDiff(info) {
    const { updateExistingRecords, mergeCols } = this._mergeOptions[info.hiddenTableId];
    const isMerging = info.destTableId && updateExistingRecords.get() && mergeCols.get().length > 0;
    if (!isMerging && this._gristDoc.comparison) {
      this._isLoadingDiff.set(true);
      this._gristDoc.comparison = null;
      this._isLoadingDiff.set(false);
    }
    if (!isMerging) {
      return;
    }
    this._hasScheduledDiffUpdate = true;
    this._isLoadingDiff.set(true);
    await this._debouncedUpdateDiff(info);
  }
  async _updateDiff(info) {
    this._hasScheduledDiffUpdate = false;
    const genImportDiffPromise = this._docComm.generateImportDiff(info.hiddenTableId, this._createTransformRule(info), this._getMergeOptionsForSource(info));
    this._lastGenImportDiffPromise = genImportDiffPromise;
    const diff = await genImportDiffPromise;
    if (this.isDisposed() || genImportDiffPromise !== this._lastGenImportDiffPromise) {
      return;
    }
    this._gristDoc.comparison = diff;
    if (!this._hasScheduledDiffUpdate) {
      this._isLoadingDiff.set(false);
    }
  }
  _resetImportDiffState() {
    this._cancelPendingDiffRequests();
    this._gristDoc.comparison = null;
  }
  _cancelPendingDiffRequests() {
    this._debouncedUpdateDiff.cancel();
    this._lastGenImportDiffPromise = null;
    this._hasScheduledDiffUpdate = false;
    this._isLoadingDiff.set(false);
  }
  _renderMain(upload) {
    const schema = this._parseOptions.get().SCHEMA;
    const content = cssContainer(grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.autoDispose(this._formulaEditorHolder), { tabIndex: "-1" }, this._buildModalTitle(schema ? cssActionLink(cssLinkIcon("Settings"), "Import options", (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-options-link"), grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.on("click", () => this._renderParseOptions(schema, upload))) : null), cssPreviewWrapper(cssTableList(grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.forEach(this._sourceInfoArray, (info) => {
      const destTableId = grainjs__WEBPACK_IMPORTED_MODULE_18__.Computed.create(null, (use) => use(info.destTableId)).onWrite(async (destId) => {
        if (info !== this._sourceInfoSelected.get() && !this._validateImportConfiguration()) {
          return;
        }
        info.destTableId.set(destId);
        this._resetTableMergeOptions(info.hiddenTableId);
        if (destId !== app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_15__.SKIP_TABLE) {
          await this._updateTransformSection(info);
        }
      });
      return cssTableInfo(grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.autoDispose(destTableId), cssTableLine(cssToFrom("From"), cssTableSource(getSourceDescription(info, upload), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-from"))), cssTableLine(cssToFrom("To"), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_11__.linkSelect)(destTableId, this._destTables)), cssTableInfo.cls("-selected", (use) => use(this._sourceInfoSelected) === info), grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.on("click", async () => {
        if (info === this._sourceInfoSelected.get()) {
          return;
        }
        if (!this._validateImportConfiguration()) {
          return;
        }
        this._cancelPendingDiffRequests();
        this._sourceInfoSelected.set(info);
        await this._updateImportDiff(info);
      }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-source"));
    })), grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.maybe(this._sourceInfoSelected, (info) => {
      const { mergeCols, updateExistingRecords, hasInvalidMergeCols } = this._mergeOptions[info.hiddenTableId];
      return cssConfigAndPreview(grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.maybe(info.destTableId, () => cssConfigColumn(grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.maybe(info.transformSection, (section) => {
        const updateRecordsListener = updateExistingRecords.addListener(async () => {
          await this._updateImportDiff(info);
        });
        return [
          cssMergeOptions(cssMergeOptionsToggle((0,app_client_ui2018_checkbox__WEBPACK_IMPORTED_MODULE_19__.labeledSquareCheckbox)(updateExistingRecords, t("Update existing records"), grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.autoDispose(updateRecordsListener), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-update-existing-records"))), grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.maybe(updateExistingRecords, () => {
            var _a;
            const mergeColsListener = mergeCols.addListener(async (val) => {
              if (val.length !== 0 && hasInvalidMergeCols.get()) {
                hasInvalidMergeCols.set(false);
              }
              await this._updateImportDiff(info);
            });
            return [
              cssMergeOptionsMessage(t("Merge rows that match these fields:"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-merge-fields-message")),
              (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_11__.multiSelect)(mergeCols, (_a = section.viewFields().peek().map((f) => ({ label: f.label(), value: f.colId() }))) != null ? _a : [], {
                placeholder: t("Select fields to match on"),
                error: hasInvalidMergeCols
              }, grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.autoDispose(mergeColsListener), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-merge-fields-select"))
            ];
          })),
          grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.domComputed(this._unmatchedFields, (fields) => fields && fields.length > 0 ? cssUnmatchedFields((0,grainjs__WEBPACK_IMPORTED_MODULE_18__.dom)("div", cssAccentText(`${fields.length} unmatched ${fields.length > 1 ? "fields" : "field"}`), " in import:"), cssUnmatchedFieldsList(fields.join(", ")), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-unmatched-fields")) : null),
          cssColumnMatchOptions(grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.forEach((0,grainjs__WEBPACK_IMPORTED_MODULE_18__.fromKo)(section.viewFields().getObservable()), (field) => cssColumnMatchRow(cssColumnMatchIcon("ImportArrow"), cssSourceAndDestination(cssDestinationFieldRow(cssDestinationFieldLabel(grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.text(field.label)), cssDestinationFieldSettings((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_10__.icon)("Dots"), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_11__.menu)(() => {
            const sourceColId = field.origCol().id();
            const sourceColIdsAndLabels = [...this._sourceColLabelsById.get().entries()];
            return [
              (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_11__.menuItem)(async () => {
                await this._gristDoc.clearColumns([sourceColId], { keepType: true });
                await this._updateImportDiff(info);
              }, "Skip", (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-column-match-menu-item")),
              (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_11__.menuDivider)(),
              ...sourceColIdsAndLabels.map(([id, label]) => (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_11__.menuItem)(async () => {
                await this._setColumnFormula(sourceColId, "$" + id);
                await this._updateImportDiff(info);
              }, label, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-column-match-menu-item"))),
              (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-column-match-menu")
            ];
          }, { placement: "right-start" }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-column-match-destination-settings")), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-column-match-destination")), grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.domComputed((use) => grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.create(this._buildColMappingFormula.bind(this), use(field.column), (elem) => this._activateFormulaEditor(elem, field, () => this._updateImportDiff(info)), "Skip")), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-column-match-source-destination")))), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-column-match-options"))
        ];
      }))), cssPreviewColumn(cssSectionHeader("Preview"), grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.domComputed((use) => {
        const previewSection = use(this._previewViewSection);
        if (use(this._isLoadingDiff) || !previewSection) {
          return cssPreviewSpinner((0,app_client_ui2018_loaders__WEBPACK_IMPORTED_MODULE_13__.loadingSpinner)(), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-preview-spinner"));
        }
        const gridView = this._createPreview(previewSection);
        return cssPreviewGrid(grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.maybe((use1) => app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_15__.SKIP_TABLE === use1(info.destTableId), () => cssOverlay((0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-preview-overlay"))), grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.autoDispose(gridView), gridView.viewPane, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-preview"));
      })));
    })), (0,app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_12__.cssModalButtons)((0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigPrimaryButton)("Import", grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.on("click", () => this._maybeFinishImport(upload)), grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.boolAttr("disabled", (use) => {
      return use(this._previewViewSection) === null || use(this._sourceInfoArray).every((i) => use(i.destTableId) === app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_15__.SKIP_TABLE);
    }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("modal-confirm")), (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.bigBasicButton)("Cancel", grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.on("click", () => this._cancelImport()), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("modal-cancel"))));
    this._addFocusLayer(content);
    this._screen.render(content, { fullscreen: true });
  }
  _addFocusLayer(container) {
    grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.autoDisposeElem(container, new app_client_lib_FocusLayer__WEBPACK_IMPORTED_MODULE_2__.FocusLayer({
      defaultFocusElem: container,
      allowFocus: (elem) => elem !== document.body,
      onDefaultFocus: () => this.trigger("importer_focus")
    }));
  }
  async _setColumnFormula(colRef, formula) {
    return this._gristDoc.docModel.columns.sendTableAction(["UpdateRecord", colRef, { formula, isFormula: true }]);
  }
  _activateFormulaEditor(refElem, field, onSave) {
    const vsi = this._gristDoc.viewModel.activeSection().viewInstance();
    const editRow = vsi == null ? void 0 : vsi.moveEditRowToCursor();
    const editorHolder = (0,app_client_widgets_FormulaEditor__WEBPACK_IMPORTED_MODULE_14__.openFormulaEditor)({
      gristDoc: this._gristDoc,
      column: field.column(),
      editingFormula: field.editingFormula,
      refElem,
      editRow,
      setupCleanup: this._setupFormulaEditorCleanup.bind(this),
      onSave: async (column, formula) => {
        if (formula === column.formula.peek()) {
          return;
        }
        await column.updateColValues({ formula });
        await onSave();
      }
    });
    this._formulaEditorHolder.autoDispose(editorHolder);
  }
  _setupFormulaEditorCleanup(owner, _doc, editingFormula, _saveEdit) {
    const saveEdit = () => _saveEdit().catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_5__.reportError);
    this.on("importer_focus", saveEdit);
    owner.onDispose(() => {
      this.off("importer_focus", saveEdit);
      editingFormula(false);
    });
  }
  _buildColMappingFormula(_owner, column, buildEditor, placeholder) {
    const formatFormula = (formula) => {
      const sourceColLabels = this._sourceColLabelsById.get();
      if (!sourceColLabels) {
        return formula;
      }
      formula = formula.trim();
      if (formula.startsWith("$") && sourceColLabels.has(formula.slice(1))) {
        return sourceColLabels.get(formula.slice(1));
      }
      return formula;
    };
    return cssFieldFormula((use) => formatFormula(use(column.formula)), { placeholder, maxLines: 1 }, grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.cls("disabled"), { tabIndex: "-1" }, grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.on("focus", (_ev, elem) => buildEditor(elem)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.testId)("importer-column-match-formula"));
  }
  _renderParseOptions(schema, upload) {
    this._screen.render([
      this._buildModalTitle(),
      grainjs__WEBPACK_IMPORTED_MODULE_18__.dom.create(app_client_components_ParseOptions__WEBPACK_IMPORTED_MODULE_0__.buildParseOptionsForm, schema, this._parseOptions.get(), (p) => {
        this._parseOptions.set(p);
        this._reImport(upload).catch((err) => (0,app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_5__.reportError)(err));
      }, () => {
        this._renderMain(upload);
      })
    ]);
  }
  async _fetchFromDrive(itemUrl) {
    try {
      return await (0,app_client_lib_uploads__WEBPACK_IMPORTED_MODULE_4__.fetchURL)(this._docComm, itemUrl);
    } catch (err) {
      if ((0,app_client_ui_googleAuth__WEBPACK_IMPORTED_MODULE_20__.canReadPrivateFiles)()) {
        const options = {};
        try {
          const code = await (0,app_client_ui_googleAuth__WEBPACK_IMPORTED_MODULE_20__.getGoogleCodeForReading)(this);
          options.googleAuthorizationCode = code;
        } catch (permError) {
          if ((permError == null ? void 0 : permError.message) === app_client_ui_googleAuth__WEBPACK_IMPORTED_MODULE_20__.ACCESS_DENIED) {
            throw new GDriveUrlNotSupported(itemUrl);
          } else if ((permError == null ? void 0 : permError.message) === app_client_ui_googleAuth__WEBPACK_IMPORTED_MODULE_20__.AUTH_INTERRUPTED) {
            throw new CancelledError();
          } else {
            throw err;
          }
        }
        return await (0,app_client_lib_uploads__WEBPACK_IMPORTED_MODULE_4__.fetchURL)(this._docComm, itemUrl, options);
      } else {
        throw new GDriveUrlNotSupported(itemUrl);
      }
    }
  }
}
class GDriveUrlNotSupported extends Error {
  constructor(url) {
    super(`This url ${url} is not supported`);
    this.url = url;
  }
}
class CancelledError extends Error {
}
function getSourceDescription(sourceInfo, upload) {
  const origName = upload.files[sourceInfo.uploadFileIndex].origName;
  return sourceInfo.origTableName ? `${sourceInfo.origTableName} - ${origName}` : origName;
}
const cssContainer = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  height: 100%;
  display: flex;
  flex-direction: column;
  outline: unset;
`);
const cssActionLink = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlFg};
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlFg};
  &:hover {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlHoverFg};
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlHoverFg};
  }
`);
const cssLinkIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_10__.icon, `
  flex: none;
  margin-right: 4px;
`);
const cssModalHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  & > .${app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_12__.cssModalTitle.className} {
    margin-bottom: 0px;
  }
`);
const cssPreviewWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`);
const cssSectionHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  margin-bottom: 8px;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.lightText};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.vars.xsmallFontSize};
  letter-spacing: 1px;
`);
const cssTableList = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  max-height: 50%;
  column-gap: 32px;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 16px;
  align-items: flex-start;
  overflow-y: auto;
`);
const cssTableInfo = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  padding: 4px 8px;
  margin: 4px 0px;
  width: 300px;
  border-radius: 3px;
  border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.importerTableInfoBorder};
  &:hover, &-selected {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.hover};
  }
`);
const cssTableLine = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  display: flex;
  align-items: center;
  margin: 4px 0;
`);
const cssToFrom = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("span", `
  flex: none;
  margin-right: 8px;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.lightText};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.vars.xsmallFontSize};
  letter-spacing: 1px;
  width: 40px;
  text-align: right;
`);
const cssTableSource = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`);
const cssConfigAndPreview = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  display: flex;
  gap: 32px;
  flex-grow: 1;
  height: 0px;
`);
const cssConfigColumn = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  width: 300px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`);
const cssPreviewColumn = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`);
const cssPreview = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  display: flex;
  flex-grow: 1;
`);
const cssPreviewSpinner = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)(cssPreview, `
  align-items: center;
  justify-content: center;
`);
const cssOverlay = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 10;
  background: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.importerSkippedTableOverlay};
`);
const cssPreviewGrid = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)(cssPreview, `
  border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.importerPreviewBorder};
  position: relative;
`);
const cssMergeOptions = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  margin-bottom: 16px;
`);
const cssMergeOptionsToggle = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  margin-bottom: 8px;
`);
const cssMergeOptionsMessage = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.lightText};
  margin-bottom: 8px;
`);
const cssColumnMatchOptions = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  display: flex;
  flex-direction: column;
  gap: 20px;
`);
const cssColumnMatchRow = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  display: flex;
  align-items: center;
`);
const cssFieldFormula = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)(app_client_ui_CodeHighlight__WEBPACK_IMPORTED_MODULE_6__.buildHighlightedCode, `
  flex: auto;
  cursor: pointer;
  margin-top: 1px;
  padding-left: 4px;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.accentIcon};
`);
const cssColumnMatchIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_10__.icon, `
  flex-shrink: 0;
  width: 20px;
  height: 32px;
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.importerMatchIcon};
  margin-right: 4px;
`);
const cssDestinationFieldRow = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  align-items: center;
  display: flex;
`);
const cssSourceAndDestination = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  min-width: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`);
const cssDestinationFieldLabel = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 4px;
`);
const cssDestinationFieldSettings = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  flex: none;
  margin: 0 4px 0 auto;
  height: 24px;
  width: 24px;
  padding: 4px;
  line-height: 0px;
  border-radius: 3px;
  cursor: pointer;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.lightText};

  &:hover, &.weasel-popup-open {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.hover};
  }
`);
const cssUnmatchedFields = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  margin-bottom: 16px;
`);
const cssUnmatchedFieldsList = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("div", `
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 16px;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.lightText};
`);
const cssAccentText = (0,grainjs__WEBPACK_IMPORTED_MODULE_18__.styled)("span", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.accentText};
`);


/***/ }),

/***/ "./app/client/components/Layout.ts":
/*!*****************************************!*\
  !*** ./app/client/components/Layout.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": () => (/* binding */ Layout),
/* harmony export */   "LayoutBox": () => (/* binding */ LayoutBox)
/* harmony export */ });
/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/dom */ "./app/client/lib/dom.js");
/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_koArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/koArray */ "./app/client/lib/koArray.js");
/* harmony import */ var _lib_koArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_koArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_koDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/koDom */ "./app/client/lib/koDom.js");
/* harmony import */ var app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/lib/dispose */ "./app/client/lib/dispose.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");









class LayoutBox extends app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_3__.Disposable {
  constructor() {
    super(...arguments);
    this.dom = null;
  }
  create(layout) {
    this.layout = layout;
    this.parentBox = (0,knockout__WEBPACK_IMPORTED_MODULE_6__.observable)(null);
    this.childBoxes = _lib_koArray__WEBPACK_IMPORTED_MODULE_1___default()();
    this.leafId = (0,knockout__WEBPACK_IMPORTED_MODULE_6__.observable)(null);
    this.leafContent = (0,knockout__WEBPACK_IMPORTED_MODULE_6__.observable)(null);
    this.uniqueId = (0,underscore__WEBPACK_IMPORTED_MODULE_7__.uniqueId)("lb");
    this.isVBox = this.autoDispose((0,knockout__WEBPACK_IMPORTED_MODULE_6__.computed)(() => {
      return this.parentBox() ? !this.parentBox().isVBox() : true;
    }, this));
    this.isHBox = this.autoDispose((0,knockout__WEBPACK_IMPORTED_MODULE_6__.computed)(() => {
      return !this.isVBox();
    }));
    this.isLeaf = this.autoDispose((0,knockout__WEBPACK_IMPORTED_MODULE_6__.computed)(() => {
      return this.leafId() !== null;
    }, this));
    this.isMaximized = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_6__.pureComputed(() => {
      var _a;
      const leafId = (_a = this.layout) == null ? void 0 : _a.maximized();
      if (!leafId) {
        return false;
      }
      if (leafId === this.leafId()) {
        return true;
      }
      return this.childBoxes.all().some(function(child) {
        return child.isMaximized();
      });
    }, this));
    this.isHidden = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_6__.pureComputed(() => {
      var _a;
      const maximized = (_a = this.layout) == null ? void 0 : _a.maximized();
      if (!maximized) {
        return false;
      }
      return !this.isMaximized();
    }, this));
    this.flexSize = (0,knockout__WEBPACK_IMPORTED_MODULE_6__.observable)(100);
    this.dom = null;
    this._parentBeingDisposed = false;
    this.autoDisposeCallback(() => {
      if (!this._parentBeingDisposed) {
        this.removeFromParent();
      }
      this.childBoxes.peek().forEach(function(child) {
        child._parentBeingDisposed = true;
        child.dispose();
      });
    });
  }
  getDom() {
    return this.dom || (this.dom = this.autoDispose(this.buildDom()));
  }
  maximize() {
    if (this.layout.maximized.peek() !== this.leafId.peek()) {
      this.layout.maximized(this.leafId());
    } else {
      this.layout.maximized(null);
    }
  }
  buildDom() {
    const self = this;
    const wrap = this.layout.needDynamic ? underscore__WEBPACK_IMPORTED_MODULE_7__.identity : makeStatic;
    return _lib_dom__WEBPACK_IMPORTED_MODULE_0___default()("div.layout_box", (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)("layout_leaf", wrap(this.isLeaf)), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)("layout_hidden", this.isHidden), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)(this.layout.leafId, wrap(this.isLeaf)), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.cssClass)(wrap(function() {
      return self.isVBox() ? "layout_vbox" : "layout_hbox";
    })), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.cssClass)(wrap(function() {
      return self.layout.fillWindow ? "layout_fill_window" : self.isLastChild() ? "layout_last_child" : null;
    })), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.style)("--flex-grow", wrap(function() {
      return self.isVBox() || self.isHBox() && self.layout.fillWindow ? self.flexSize() : "";
    })), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.domData)("layoutBox", this), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.foreach)(wrap(this.childBoxes), function(layoutBox) {
      return layoutBox.getDom();
    }), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.scope)(wrap(this.leafContent), function(leafContent) {
      return leafContent;
    }));
  }
  takeLeafFrom(sourceLayoutBox) {
    this.leafId(sourceLayoutBox.leafId.peek());
    this.leafContent((0,_lib_dom__WEBPACK_IMPORTED_MODULE_0__.detachNode)(sourceLayoutBox.leafContent.peek()));
    sourceLayoutBox.leafId(null);
    sourceLayoutBox.leafContent(null);
  }
  setChildren(children) {
    children.forEach((child) => child.parentBox(this));
    this.childBoxes.assign(children);
  }
  isFirstChild() {
    return this.parentBox() ? this.parentBox().childBoxes.peek()[0] === this : true;
  }
  isLastChild() {
    return this.parentBox() ? (0,underscore__WEBPACK_IMPORTED_MODULE_7__.last)(this.parentBox().childBoxes.all()) === this : true;
  }
  isDomDetached() {
    return !(this.dom && this.dom.parentNode);
  }
  getSiblingBox(isAfter) {
    if (!this.parentBox()) {
      return null;
    }
    const siblings = this.parentBox().childBoxes.peek();
    let index = siblings.indexOf(this);
    if (index < 0) {
      return null;
    }
    index += isAfter ? 1 : -1;
    return index < 0 || index >= siblings.length ? null : siblings[index];
  }
  _addChild(childBox, isAfter, optNextSibling) {
    assert__WEBPACK_IMPORTED_MODULE_4___default()(childBox.parentBox() === null, "LayoutBox._addChild: child already has parentBox set");
    let index;
    if (optNextSibling) {
      index = this.childBoxes.peek().indexOf(optNextSibling) + (isAfter ? 1 : 0);
    } else {
      index = isAfter ? this.childBoxes.peekLength : 0;
    }
    childBox.parentBox(this);
    this.childBoxes.splice(index, 0, childBox);
  }
  addSibling(childBox, isAfter) {
    childBox.removeFromParent();
    const parentBox = this.parentBox();
    if (parentBox) {
      parentBox._addChild(childBox, isAfter, this);
    } else {
      if (this.childBoxes.peekLength === 1) {
        const lowerBox = this.childBoxes.peek()[0];
        assert__WEBPACK_IMPORTED_MODULE_4___default()(!lowerBox.isLeaf(), "LayoutBox.addSibling: should not have leaf as a single child");
        lowerBox._addChild(childBox, isAfter);
      } else {
        const vbox = LayoutBox.create(this.layout);
        const hbox = LayoutBox.create(this.layout);
        vbox._addChild(hbox, false);
        hbox._addChild(this, false);
        hbox._addChild(childBox, isAfter);
        this.layout.setRoot(vbox);
      }
    }
    this.layout.trigger("layoutChanged");
  }
  addChild(childBox, isAfter) {
    childBox.removeFromParent();
    if (this.isLeaf()) {
      const newBox = LayoutBox.create(this.layout);
      newBox.takeLeafFrom(this);
      this._addChild(newBox, false);
    }
    this._addChild(childBox, isAfter);
    this.layout.trigger("layoutChanged");
  }
  toString() {
    return this.isDisposed() ? this.uniqueId + "[disposed]" : this.uniqueId + (this.isHBox() ? "H" : "V") + (this.isLeaf() ? "(" + this.leafId() + ")" : "[" + this.childBoxes.peek().map(function(b) {
      return b.toString();
    }).join(",") + "]");
  }
  _removeChildBox(childBox) {
    let index = this.childBoxes.peek().indexOf(childBox);
    childBox.parentBox(null);
    if (index >= 0) {
      this.childBoxes.splice(index, 1);
      this.rescaleFlexSizes();
    }
    if (this.childBoxes.peekLength === 1) {
      const lowerBox = this.childBoxes.peek()[0];
      const parentBox = this.parentBox();
      if (lowerBox.isLeaf()) {
        this.takeLeafFrom(lowerBox);
        lowerBox.dispose();
      } else if (parentBox) {
        index = parentBox.childBoxes.peek().indexOf(this);
        assert__WEBPACK_IMPORTED_MODULE_4___default()(index >= 0, "LayoutBox._removeChildBox: box not found in parent");
        const grandchildBoxes = lowerBox.childBoxes.peek();
        grandchildBoxes.forEach(function(box) {
          box.parentBox(parentBox);
        });
        parentBox.childBoxes.arraySplice(index, 0, grandchildBoxes);
        lowerBox.childBoxes.splice(0, lowerBox.childBoxes.peekLength);
        this.removeFromParent();
        lowerBox.dispose();
        this.dispose();
      }
    }
  }
  removeFromParent() {
    if (this.parentBox()) {
      this.parentBox()._removeChildBox(this);
      this.layout.trigger("layoutChanged");
    }
  }
  rescaleFlexSizes() {
    const children = this.childBoxes.peek();
    const minSize = Math.min.apply(null, children.map(function(b) {
      return b.flexSize();
    }));
    if (minSize < 1) {
      children.forEach(function(b) {
        b.flexSize(b.flexSize() / minSize);
      });
    }
  }
}
function makeStatic(valueOrFunc) {
  if ((0,knockout__WEBPACK_IMPORTED_MODULE_6__.isObservable)(valueOrFunc) || (0,_lib_koArray__WEBPACK_IMPORTED_MODULE_1__.isKoArray)(valueOrFunc)) {
    return valueOrFunc.peek();
  } else if (typeof valueOrFunc === "function") {
    return valueOrFunc();
  } else {
    return valueOrFunc;
  }
}
class Layout extends app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_3__.Disposable {
  static getContainingBox(elem, optContainer) {
    const boxElem = (0,_lib_dom__WEBPACK_IMPORTED_MODULE_0__.findAncestor)(elem, optContainer, ".layout_box");
    return boxElem ? knockout__WEBPACK_IMPORTED_MODULE_6__.utils.domData.get(boxElem, "layoutBox") : null;
  }
  create(boxSpec, createLeafFunc, optFillWindow) {
    this.maximized = (0,knockout__WEBPACK_IMPORTED_MODULE_6__.observable)(null);
    this.rootBox = (0,knockout__WEBPACK_IMPORTED_MODULE_6__.observable)(null);
    this.createLeafFunc = createLeafFunc;
    this._leafIdMap = null;
    this.fillWindow = optFillWindow || false;
    this.needDynamic = false;
    this.rootElem = this.autoDispose(this.buildDom());
    this.leafId = (0,underscore__WEBPACK_IMPORTED_MODULE_7__.uniqueId)("layout_leaf_");
    this.buildLayout(boxSpec || {});
    this.listenTo(this, "layoutChanged", () => {
      this._leafIdMap = null;
    });
    this.autoDisposeCallback(() => {
      if (this.rootBox()) {
        this.rootBox().dispose();
      }
    });
  }
  getLeafBox(leafId) {
    return this.getLeafIdMap().get(leafId);
  }
  getAllLeafIds() {
    return Array.from(this.getLeafIdMap().keys());
  }
  setRoot(layoutBox) {
    this.rootBox(layoutBox);
  }
  buildDom() {
    return _lib_dom__WEBPACK_IMPORTED_MODULE_0___default()("div.layout_root", (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.domData)("layoutModel", this), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)("layout_fill_window", this.fillWindow), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)("layout_box_maximized", this.maximized), (0,_lib_koDom__WEBPACK_IMPORTED_MODULE_2__.scope)(this.rootBox, (rootBox) => {
      return rootBox ? rootBox.getDom() : null;
    }));
  }
  forEachBox(cb, optContext) {
    function iter(box) {
      cb.call(optContext, box);
      box.childBoxes.peek().forEach(iter);
    }
    iter(this.rootBox.peek());
  }
  buildLayoutBox(boxSpec) {
    const box = LayoutBox.create(this);
    if (boxSpec.size) {
      box.flexSize(boxSpec.size);
    }
    if (boxSpec.leaf) {
      box.leafId(boxSpec.leaf);
      box.leafContent(this.createLeafFunc(box.leafId()));
    } else if (boxSpec.children) {
      box.setChildren(boxSpec.children.map(this.buildLayoutBox, this));
    }
    return box;
  }
  buildLayout(boxSpec, needDynamic = false) {
    this.needDynamic = needDynamic;
    const oldRootBox = this.rootBox();
    this.rootBox(this.buildLayoutBox(boxSpec));
    this.trigger("layoutChanged");
    if (oldRootBox) {
      oldRootBox.dispose();
    }
  }
  _getBoxSpec(layoutBox) {
    const spec = {};
    if (layoutBox.isDisposed()) {
      return spec;
    }
    if (layoutBox.flexSize() && layoutBox.flexSize() !== 100) {
      spec.size = layoutBox.flexSize();
    }
    if (layoutBox.isLeaf()) {
      spec.leaf = layoutBox.leafId();
    } else {
      spec.children = layoutBox.childBoxes.peek().map(this._getBoxSpec, this);
    }
    return spec;
  }
  getLayoutSpec() {
    return this._getBoxSpec(this.rootBox());
  }
  getLeafIdMap() {
    if (!this._leafIdMap) {
      this._leafIdMap = /* @__PURE__ */ new Map();
      this.forEachBox((box) => {
        const leafId = box.leafId.peek();
        if (leafId !== null) {
          this._leafIdMap.set(leafId, box);
        }
      }, this);
    }
    return this._leafIdMap;
  }
  getContainingBox(elem) {
    return Layout.getContainingBox(elem, this.rootElem);
  }
}
Object.assign(Layout.prototype, backbone__WEBPACK_IMPORTED_MODULE_5__.Events);


/***/ }),

/***/ "./app/client/components/LayoutEditor.ts":
/*!***********************************************!*\
  !*** ./app/client/components/LayoutEditor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutEditor": () => (/* binding */ LayoutEditor)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/lib/dispose */ "./app/client/lib/dispose.js");
/* harmony import */ var app_client_lib_Delay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/lib/Delay */ "./app/client/lib/Delay.ts");
/* harmony import */ var app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/lib/dom */ "./app/client/lib/dom.js");
/* harmony import */ var app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/lib/koDom */ "./app/client/lib/koDom.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layout */ "./app/client/components/Layout.ts");
/* harmony import */ var app_client_lib_browserGlobals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/client/lib/browserGlobals */ "./app/client/lib/browserGlobals.js");











const G = (0,app_client_lib_browserGlobals__WEBPACK_IMPORTED_MODULE_10__.get)("document", "window", "$");
class HelperBox {
  constructor(data) {
    this.scalePerFlexUnit = 0;
    this.nextSiblings = [];
    this.origNextSizes = [];
    this.origSize = 0;
    this.sumAll = 0;
    this.sumPrev = 0;
    this.sumNext = 0;
    if (data) {
      (0,underscore__WEBPACK_IMPORTED_MODULE_0__.extend)(this, data);
    }
  }
}
class Floater extends app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_5__.Disposable {
  create(fillWindow) {
    this.leafId = (0,knockout__WEBPACK_IMPORTED_MODULE_1__.observable)(null);
    this.leafContent = (0,knockout__WEBPACK_IMPORTED_MODULE_1__.observable)(null);
    this.fillWindow = fillWindow || false;
    this.floaterElem = this.autoDispose(app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default()("div.layout_editor_floater", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_8__.show(this.leafContent), app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_8__.scope(this.leafContent, (leafContent) => {
      return leafContent;
    })));
    G.document.body.appendChild(this.floaterElem);
    this.mouseOffsetX = 0;
    this.mouseOffsetY = 0;
    this.lastMouseEvent = null;
  }
  onInitialMouseMove(mouseEvent, sourceBox) {
    const rect = sourceBox.dom.getBoundingClientRect();
    this.floaterElem.style.width = rect.width + "px";
    this.floaterElem.style.height = rect.height + "px";
    this.mouseOffsetX = 0.2 * rect.width;
    this.mouseOffsetY = 0.1 * rect.height;
    this.onMouseMove(mouseEvent);
    this.leafId(sourceBox.leafId());
    this.leafContent(sourceBox.leafContent());
    sourceBox.leafId("empty");
    sourceBox.leafContent(app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default()("div.layout_editor_empty_space", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_8__.style("margin", rect.height * 0.02 + "px"), app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_8__.style("min-height", rect.height * 0.96 + "px")));
  }
  onMouseUp() {
    this.lastMouseEvent = null;
  }
  onMouseMove(mouseEvent) {
    this.lastMouseEvent = mouseEvent;
    this.floaterElem.style.left = mouseEvent.clientX - this.mouseOffsetX + "px";
    this.floaterElem.style.top = mouseEvent.clientY - this.mouseOffsetY + "px";
  }
}
class DropOverlay extends app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_5__.Disposable {
  create() {
    this.overlayElem = this.autoDispose(app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default()("div.layout_editor_drop_overlay"));
    this.overlayRect = null;
    this.hBorder = null;
    this.vBorder = null;
  }
  detach() {
    if (this.overlayElem.parentNode) {
      this.overlayElem.parentNode.removeChild(this.overlayElem);
    }
  }
  attach(targetElem) {
    const rect = this.overlayRect = targetElem.getBoundingClientRect();
    this.hBorder = Math.floor(Math.min(rect.height, rect.width * 2) / 3);
    this.vBorder = Math.floor(Math.min(rect.width, rect.height * 2) / 3);
    const s = this.overlayElem.style;
    s.borderTopWidth = s.borderBottomWidth = this.hBorder + "px";
    s.borderLeftWidth = s.borderRightWidth = this.vBorder + "px";
  }
  getAffinity(mouseEvent) {
    const rect = this.overlayRect;
    const x = mouseEvent.clientX - rect.left, y = mouseEvent.clientY - rect.top;
    const top = getFrac(y, this.hBorder), down = getFrac(rect.height - y, this.hBorder);
    const left = getFrac(x, this.vBorder), right = getFrac(rect.width - x, this.vBorder);
    const minValue = Math.min(top, down, left, right);
    return minValue === Infinity ? -1 : [top, down, left, right].indexOf(minValue);
  }
}
class DropTargeter extends app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_5__.Disposable {
  create(rootElem) {
    this.rootElem = rootElem;
    this.targetsDom = null;
    this.currentBox = null;
    this.currentAffinity = null;
    this.delayedInsertion = app_client_lib_Delay__WEBPACK_IMPORTED_MODULE_6__.Delay.create();
    this.activeTarget = null;
    this.autoDisposeCallback(this.removeTargetHints);
  }
  removeTargetHints() {
    this.activeTarget = null;
    this.delayedInsertion.cancel();
    if (this.targetsDom) {
      (0,knockout__WEBPACK_IMPORTED_MODULE_1__.removeNode)(this.targetsDom);
      this.targetsDom = null;
    }
    this.currentBox = null;
    this.currentAffinity = null;
  }
  updateTargetHints(layoutBox, affinity, overlay, prevTargetBox) {
    if (!layoutBox || layoutBox === this.currentBox && affinity === this.currentAffinity) {
      return;
    }
    this.removeTargetHints();
    if (affinity === -1) {
      return;
    }
    this.currentBox = layoutBox;
    this.currentAffinity = affinity;
    const upDown = isAffinityUpDown(affinity);
    const isAfter = isAffinityAfter(affinity);
    const targetParts = [];
    if (upDown === layoutBox.isVBox() && layoutBox !== prevTargetBox) {
      targetParts.push({ box: layoutBox, isChild: true, isAfter });
    }
    while (layoutBox) {
      if (upDown === layoutBox.isHBox()) {
        const children = layoutBox.childBoxes.peek();
        if (children.length === 2 && prevTargetBox.parentBox() === layoutBox) {
          targetParts.splice(targetParts.length - 1, 1, { box: layoutBox, isChild: false, isAfter });
        } else if (prevTargetBox !== layoutBox && prevTargetBox !== layoutBox.getSiblingBox(isAfter) && children.length !== 1) {
          targetParts.push({ box: layoutBox, isChild: false, isAfter });
        }
        if (isAfter && !layoutBox.isLastChild()) {
          break;
        }
        if (!isAfter && !layoutBox.isFirstChild()) {
          break;
        }
      }
      layoutBox = layoutBox.parentBox();
    }
    if (targetParts.length === 0) {
      return;
    }
    if (!isAfter) {
      targetParts.reverse();
    }
    const pTop = upDown ? "top" : "left", pHeight = upDown ? "height" : "width", pLeft = upDown ? "left" : "top", pWidth = upDown ? "width" : "height";
    let totalHeight = upDown ? overlay.hBorder : overlay.vBorder;
    const singleHeight = Math.floor(totalHeight / targetParts.length);
    totalHeight = singleHeight * targetParts.length;
    const outerRect = this.rootElem.getBoundingClientRect();
    const innerRect = this.currentBox.dom.getBoundingClientRect();
    const self = this;
    this.targetsDom = app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default()("div.layout_editor_drop_targeter", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_8__.style(pTop, innerRect[pTop] - outerRect[pTop] + (isAfter ? innerRect[pHeight] - totalHeight : 0) + "px"), targetParts.map((part, index) => {
      const rect = part.box.dom.getBoundingClientRect();
      return app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default()("div.layout_editor_drop_target", (elem) => {
        elem.style[pHeight] = singleHeight + 1 + "px";
        elem.style[pWidth] = rect[pWidth] + "px";
        elem.style[pLeft] = rect[pLeft] - outerRect[pLeft] + "px";
        elem.style[pTop] = singleHeight * index + "px";
      }, app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default().on("mouseenter", function() {
        this.classList.add("layout_hover");
        self.activeTarget = part;
        const padDir = upDown ? isAfter ? "Bottom" : "Top" : isAfter ? "Right" : "Left";
        const padding = "padding" + padDir;
        part.box.dom.style.transition = "padding .3s";
        part.box.dom.style[padding] = "20px";
      }), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default().on("mouseleave", function() {
        this.classList.remove("layout_hover");
        self.activeTarget = null;
        part.box.dom.style.padding = "0";
      }), app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default().on("transitionend", this.triggerInsertion.bind(this, part)));
    }));
    this.rootElem.appendChild(this.targetsDom);
  }
  triggerInsertion(part) {
    this.removeTargetHints();
    this.trigger("insertBox", (box) => {
      if (part.isChild) {
        part.box.addChild(box, part.isAfter);
      } else {
        part.box.addSibling(box, part.isAfter);
      }
    });
  }
  accelerateInsertion() {
    if (this.activeTarget) {
      this.activeTarget.box.dom.style.transition = "";
      this.activeTarget.box.dom.style.padding = "0";
      this.triggerInsertion(this.activeTarget);
    }
  }
}
(0,underscore__WEBPACK_IMPORTED_MODULE_0__.extend)(DropTargeter.prototype, backbone__WEBPACK_IMPORTED_MODULE_4__.Events);
class LayoutEditor extends app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_5__.Disposable {
  create(layout) {
    this.layout = layout;
    this.rootElem = layout.rootElem;
    this.layout.buildLayout(this.layout.getLayoutSpec(), true);
    this.floater = this.autoDispose(Floater.create(this.layout.fillWindow));
    this.dropOverlay = this.autoDispose(DropOverlay.create());
    this.dropTargeter = this.autoDispose(DropTargeter.create(this.rootElem));
    this.listenTo(this.dropTargeter, "insertBox", this.onInsertBox);
    this.measuringBox = this.autoDispose(app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default()("div.layout_editor_measuring_box"));
    this.rootElem.appendChild(this.measuringBox);
    this.transitionPromise = bluebird__WEBPACK_IMPORTED_MODULE_3___default().resolve();
    this.trashDelay = app_client_lib_Delay__WEBPACK_IMPORTED_MODULE_6__.Delay.create();
    this.originalBox = null;
    this.targetBox = null;
    this.layout.forEachBox(this.makeResizable, this);
    this.listenTo(this.layout, "layoutChanged", () => {
      this.layout.forEachBox(this.makeResizable, this);
    });
    const self = this;
    this.boundMouseDown = function(ev) {
      return self.handleMouseDown(ev, this);
    };
    this.boundMouseMove = this.handleMouseMove.bind(this);
    this.boundMouseUp = this.handleMouseUp.bind(this);
    G.$(this.rootElem).on("mousedown", ".layout_leaf", this.boundMouseDown);
    this.initialMouseDown = false;
    this.lastTriggered = "stop";
    this.autoDisposeCallback(() => {
      G.$(G.window).off("mouseup", this.boundMouseUp);
      G.$(G.window).off("mousemove", this.boundMouseMove);
      G.$(this.rootElem).off("mousedown", this.boundMouseDown);
      if (!this.layout.isDisposed()) {
        this.layout.buildLayout(this.layout.getLayoutSpec(), false);
        this.layout.forEachBox(this.unmakeResizable, this);
      }
    });
  }
  triggerUserEditStart() {
    assert__WEBPACK_IMPORTED_MODULE_2___default()(this.lastTriggered === "stop", "UserEditStart triggered twice in succession");
    this.lastTriggered = "start";
    this.rootElem.setAttribute("data-useredit", "start");
    this.layout.trigger("layoutUserEditStart");
  }
  triggerUserEditStop() {
    assert__WEBPACK_IMPORTED_MODULE_2___default()(this.lastTriggered === "start", "UserEditStop triggered twice in succession");
    this.lastTriggered = "stop";
    this.layout.trigger("layoutUserEditStop");
    this.rootElem.setAttribute("data-useredit", "stop");
  }
  makeResizable(box) {
    if (G.$(box.dom).resizable("instance") || box.isHBox() && !this.layout.fillWindow || box.isLastChild()) {
      return;
    }
    const helperObj = new HelperBox({ box });
    const isWidth = box.isVBox();
    G.$(box.dom).resizable({
      handles: isWidth ? "e" : "s",
      start: this.onResizeStart.bind(this, helperObj, isWidth),
      resize: this.onResizeMove.bind(this, helperObj, isWidth),
      stop: this.triggerUserEditStop.bind(this)
    });
  }
  unmakeResizable(box) {
    if (G.$(box.dom).resizable("instance")) {
      G.$(box.dom).resizable("destroy");
    }
  }
  onResizeStart(helperObj, isWidth, event, ui) {
    this.triggerUserEditStart();
    const size = isWidth ? ui.originalSize.width : ui.originalSize.height;
    helperObj.scalePerFlexUnit = size / (helperObj.box.flexSize() || 1);
    const allSiblings = helperObj.box.parentBox().childBoxes.peek();
    const index = allSiblings.indexOf(helperObj.box);
    helperObj.nextSiblings = allSiblings.slice(index + 1);
    helperObj.origNextSizes = helperObj.nextSiblings.map(function(b) {
      return b.flexSize();
    });
    helperObj.origSize = helperObj.box.flexSize();
    helperObj.sumPrev = allSiblings.slice(0, index).reduce(adder, 0);
    helperObj.sumAll = allSiblings.reduce(adder, 0);
    helperObj.sumNext = helperObj.sumAll - helperObj.sumPrev;
  }
  onResizeMove(helperObj, isWidth, event, ui) {
    const sizePx = isWidth ? ui.size.width : ui.size.height;
    let newSize = sizePx / helperObj.scalePerFlexUnit;
    newSize = snap(newSize, helperObj.sumPrev, helperObj.sumAll);
    const siblingsFactor = (helperObj.sumNext - newSize) / (helperObj.sumNext - helperObj.origSize);
    let sumPrev = helperObj.sumPrev + newSize;
    const newSizes = [];
    helperObj.origNextSizes.forEach(function(size) {
      const s = snap(size * siblingsFactor, sumPrev, helperObj.sumAll);
      sumPrev += s;
      newSizes.push(s);
    });
    if (newSize <= 0 || newSizes.some((size) => size <= 0)) {
      return;
    }
    if (newSize !== helperObj.box.flexSize.peek()) {
      helperObj.box.flexSize(newSize);
      helperObj.nextSiblings.forEach(function(b, i) {
        b.flexSize(newSizes[i]);
      });
      this.layout.trigger("layoutResized");
    }
  }
  handleMouseDown(event, elem) {
    const target = event.target;
    if (event.button !== 0 || (target == null ? void 0 : target.classList.contains("ui-resizable-handle"))) {
      return;
    }
    if (target == null ? void 0 : target.classList.contains("layout_grabbable")) {
      this.initialMouseDown = true;
      this.originalBox = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(elem, "layoutBox");
      assert__WEBPACK_IMPORTED_MODULE_2___default()(this.originalBox, "MouseDown on element without an associated layoutBox");
      G.$(G.window).on("mousemove", this.boundMouseMove);
      G.$(G.window).on("mouseup", this.boundMouseUp);
      return false;
    }
  }
  dragInNewBox(event, leafId) {
    const box = this.layout.buildLayoutBox({ leaf: leafId });
    this.measuringBox.appendChild(box.getDom());
    this.handleMouseDown(event, box.dom);
  }
  startDragBox(event, box) {
    this.triggerUserEditStart();
    this.targetBox = box;
    this.floater.onInitialMouseMove(event, box);
  }
  handleMouseUp(event) {
    G.$(G.window).off("mousemove", this.boundMouseMove);
    G.$(G.window).off("mouseup", this.boundMouseUp);
    if (this.initialMouseDown) {
      this.initialMouseDown = false;
      return;
    }
    this.targetBox.takeLeafFrom(this.floater);
    if (this.dropTargeter.activeTarget) {
      this.dropTargeter.accelerateInsertion();
    } else {
      resizeLayoutBox(this.targetBox, "reset");
    }
    this.dropTargeter.removeTargetHints();
    this.dropOverlay.detach();
    this.transitionPromise.finally(() => {
      this.floater.onMouseUp();
      resizeLayoutBox(this.targetBox, "reset");
      this.targetBox = this.originalBox = null;
      (0,app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_5__.emptyNode)(this.measuringBox);
      this.triggerUserEditStop();
    });
  }
  removeContainingBox(elem) {
    const box = this.layout.getContainingBox(elem);
    if (box && !box.isDomDetached()) {
      this.triggerUserEditStart();
      this.targetBox = box;
      const rect = box.dom.getBoundingClientRect();
      box.leafId("empty");
      box.leafContent(app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default()("div.layout_editor_empty_space", app_client_lib_koDom__WEBPACK_IMPORTED_MODULE_8__.style("min-height", rect.height + "px")));
      this.onInsertBox(underscore__WEBPACK_IMPORTED_MODULE_0__.noop).catch(underscore__WEBPACK_IMPORTED_MODULE_0__.noop);
      this.triggerUserEditStop();
    }
  }
  handleMouseMove(event) {
    var _a;
    if (!this.originalBox || ((_a = this.originalBox) == null ? void 0 : _a.isDisposed())) {
      return;
    }
    if (this.initialMouseDown) {
      this.initialMouseDown = false;
      this.startDragBox(event, this.originalBox);
    }
    this.floater.onMouseMove(event);
    if (this.transitionPromise.isPending()) {
      return;
    }
    if (app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default().findAncestor(event.target, null, ".layout_trash")) {
      const isTrashed = this.targetBox && this.targetBox.isDomDetached();
      if (!this.trashDelay.isPending() && !isTrashed) {
        this.trashDelay.schedule(100, this.onInsertBox, this, underscore__WEBPACK_IMPORTED_MODULE_0__.noop);
      }
      return;
    }
    this.trashDelay.cancel();
    const elem = app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default().findAncestor(event.target, this.rootElem, "." + this.layout.leafId);
    if (elem) {
      const hoverBox = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(elem, "layoutBox");
      this.dropOverlay.attach(elem);
      const affinity = this.dropOverlay.getAffinity(event);
      this.dropTargeter.updateTargetHints(hoverBox, affinity, this.dropOverlay, this.targetBox);
    } else if (!app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default().findAncestor(event.target, this.rootElem, ".layout_editor_drop_target")) {
      this.dropTargeter.removeTargetHints();
    }
  }
  async onInsertBox(inserterFunc) {
    const prevTargetBox = this.targetBox;
    this.targetBox = _Layout__WEBPACK_IMPORTED_MODULE_9__.LayoutBox.create(this.layout);
    this.targetBox.takeLeafFrom(prevTargetBox);
    this.targetBox.flexSize(prevTargetBox.flexSize());
    this.targetBox.getDom();
    let transitionPromiseResolve;
    this.transitionPromise = new (bluebird__WEBPACK_IMPORTED_MODULE_3___default())(function(resolve, reject) {
      transitionPromiseResolve = resolve;
    });
    inserterFunc(this.targetBox);
    const prevRect = prevTargetBox.dom.getBoundingClientRect();
    const prevFlexGrow = prevTargetBox.dom.style.flexGrow;
    prevTargetBox.dom.style.flexGrow = "0";
    const targetRect = this.targetBox.dom.getBoundingClientRect();
    prevTargetBox.dom.style.flexGrow = prevFlexGrow;
    await bluebird__WEBPACK_IMPORTED_MODULE_3___default().all([
      resizeLayoutBoxSmoothly(prevTargetBox, prevRect, "collapse"),
      resizeLayoutBoxSmoothly(this.targetBox, "collapse", targetRect)
    ]);
    prevTargetBox.dispose();
    if (this.targetBox) {
      resizeLayoutBox(this.targetBox, "reset");
      this.dropOverlay.attach(this.targetBox.dom);
    }
    transitionPromiseResolve();
    this.layout.trigger("layoutResized");
  }
}
(0,underscore__WEBPACK_IMPORTED_MODULE_0__.extend)(LayoutEditor.prototype, backbone__WEBPACK_IMPORTED_MODULE_4__.Events);
function isAffinityUpDown(affinity) {
  return affinity >> 1 === 0;
}
function isAffinityAfter(affinity) {
  return (affinity & 1) === 1;
}
function getFrac(distance, max) {
  return distance < max ? distance / max : Infinity;
}
const NumSteps = 60;
function round(value, multipleOf) {
  return Math.round(value / multipleOf) * multipleOf;
}
function snap(flexSize, sumPrev, sumAll) {
  const endEdge = round(sumPrev + flexSize, sumAll / NumSteps);
  return Math.min(endEdge, sumAll) - sumPrev;
}
function resizeLayoutBox(layoutBox, sizeRect) {
  const reset = sizeRect === "reset";
  const collapse = sizeRect === "collapse";
  if (sizeRect === "current") {
    sizeRect = layoutBox.dom.getBoundingClientRect();
  }
  if (layoutBox.isHBox()) {
    layoutBox.dom.style.height = reset ? "" : collapse ? "0px" : sizeRect.height + "px";
  } else {
    layoutBox.dom.style.width = reset ? "" : collapse ? "0px" : sizeRect.width + "px";
  }
  layoutBox.dom.style.opacity = collapse ? "0.0" : "1.0";
}
function rectDesc(rect) {
  return typeof rect === "string" ? rect : Math.floor(rect.width) + "x" + Math.floor(rect.height);
}
function resizeLayoutBoxSmoothly(layoutBox, startRect, endRect) {
  if (layoutBox.isDomDetached()) {
    return bluebird__WEBPACK_IMPORTED_MODULE_3___default().resolve();
  }
  const prevFlexGrow = layoutBox.dom.style.flexGrow;
  layoutBox.dom.style.flexGrow = "0";
  resizeLayoutBox(layoutBox, startRect);
  (0,underscore__WEBPACK_IMPORTED_MODULE_0__.pick)(G.window.getComputedStyle(layoutBox.dom), "height", "width");
  layoutBox.dom.classList.add("layout_editor_resize_transition");
  return new (bluebird__WEBPACK_IMPORTED_MODULE_3___default())(function(resolve, reject) {
    app_client_lib_dom__WEBPACK_IMPORTED_MODULE_7___default().once(layoutBox.dom, "transitionend", function() {
      resolve();
    });
    resizeLayoutBox(layoutBox, endRect);
  }).timeout(600).catch((bluebird__WEBPACK_IMPORTED_MODULE_3___default().TimeoutError), function() {
    console.error("LayoutEditor.resizeLayoutBoxSmoothly %s %s->%s: transition didn't run", layoutBox, rectDesc(startRect), rectDesc(endRect));
  }).finally(function() {
    layoutBox.dom.classList.remove("layout_editor_resize_transition");
    layoutBox.dom.style.flexGrow = prevFlexGrow;
  });
}
function adder(sum, box) {
  return sum + box.flexSize.peek();
}


/***/ }),

/***/ "./app/client/components/LinkingState.ts":
/*!***********************************************!*\
  !*** ./app/client/components/LinkingState.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkingState": () => (/* binding */ LinkingState)
/* harmony export */ });
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var app_plugin_objtypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/plugin/objtypes */ "./app/plugin/objtypes.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_4__);





const identity = __webpack_require__(/*! lodash/identity */ "./node_modules/lodash/identity.js");
const mapValues = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
const pickBy = __webpack_require__(/*! lodash/pickBy */ "./node_modules/lodash/pickBy.js");
function isSummaryOf(summary, detail) {
  const summarySource = summary.summarySourceTable();
  if (summarySource === detail.getRowId()) {
    return true;
  }
  const detailSource = detail.summarySourceTable();
  return Boolean(summarySource) && detailSource === summarySource && summary.getRowId() !== detail.getRowId() && app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.isSubset(summary.summarySourceColRefs(), detail.summarySourceColRefs());
}
class LinkingState extends grainjs__WEBPACK_IMPORTED_MODULE_3__.Disposable {
  constructor(docModel, linkConfig) {
    var _a;
    super();
    const { srcSection, srcCol, srcColId, tgtSection, tgtCol, tgtColId } = linkConfig;
    this._srcSection = srcSection;
    this._srcCol = srcCol;
    this._srcColId = srcColId;
    this._srcTableModel = docModel.dataTables[srcSection.table().tableId()];
    const srcTableData = this._srcTableModel.tableData;
    if (tgtColId) {
      const operation = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_0__.isRefListType)(tgtCol.type()) ? "intersects" : "in";
      if (srcSection.parentKey() === "custom") {
        this.filterColValues = this._srcCustomFilter(tgtColId, operation);
      } else if (srcColId) {
        this.filterColValues = this._srcCellFilter(tgtColId, operation);
      } else {
        this.filterColValues = this._simpleFilter(tgtColId, operation, (rowId) => [rowId]);
      }
    } else if (srcColId && (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_0__.isRefListType)(srcCol.type())) {
      this.filterColValues = this._srcCellFilter("id", "in");
    } else if (!srcColId && isSummaryOf(srcSection.table(), tgtSection.table())) {
      let _update = function() {
        const result = { filters: {}, operations: {} };
        if (srcSection.isDisposed()) {
          return result;
        }
        const srcRowId = srcSection.activeRowId();
        for (const c of srcSection.table().groupByColumns()) {
          const colId = c.colId();
          const srcValue = srcTableData.getValue(srcRowId, colId);
          result.filters[colId] = [srcValue];
          result.operations[colId] = "in";
          if (isDirectSummary && (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_0__.isListType)(c.summarySource().type())) {
            result.operations[colId] = srcValue ? "intersects" : "empty";
          }
        }
        _filterColValues(result);
      };
      const isDirectSummary = srcSection.table().summarySourceTable() === tgtSection.table().getRowId();
      const _filterColValues = knockout__WEBPACK_IMPORTED_MODULE_4__.observable();
      this.filterColValues = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_4__.computed(() => _filterColValues()));
      this.autoDispose(srcTableData.dataLoadedEmitter.addListener(_update));
      _update();
    } else if (srcSection.parentKey() === "custom") {
      this.filterColValues = this._srcCustomFilter("id", "in");
    } else {
      const srcValueFunc = srcColId ? this._makeSrcCellGetter() : identity;
      if (srcValueFunc) {
        this.cursorPos = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_4__.computed(() => srcValueFunc(srcSection.activeRowId())));
      }
      if (!srcColId) {
        const getDefaultColValues = (_a = srcSection.linkingState()) == null ? void 0 : _a.getDefaultColValues;
        if (getDefaultColValues) {
          this.getDefaultColValues = getDefaultColValues;
        }
      }
    }
    if (!this.getDefaultColValues) {
      this.getDefaultColValues = () => {
        if (!this.filterColValues) {
          return {};
        }
        const { filters, operations } = this.filterColValues.peek();
        return mapValues(pickBy(filters, (value, key) => value.length > 0 && key !== "id"), (value, key) => operations[key] === "intersects" ? (0,app_plugin_objtypes__WEBPACK_IMPORTED_MODULE_2__.encodeObject)(value) : value[0]);
      };
    }
  }
  disableEditing() {
    return Boolean(this.filterColValues) && this._srcSection.activeRowId() === "new";
  }
  _simpleFilter(colId, operation, valuesFunc) {
    return this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_4__.computed(() => {
      const srcRowId = this._srcSection.activeRowId();
      if (srcRowId === null) {
        console.warn("_simpleFilter activeRowId is null");
        return { filters: {}, operations: {} };
      }
      const values = valuesFunc(srcRowId);
      return { filters: { [colId]: values }, operations: { [colId]: operation } };
    }));
  }
  _srcCellFilter(colId, operation) {
    const srcCellGetter = this._makeSrcCellGetter();
    if (srcCellGetter) {
      const isSrcRefList = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_0__.isRefListType)(this._srcCol.type());
      return this._simpleFilter(colId, operation, (rowId) => {
        const value = srcCellGetter(rowId);
        if (isSrcRefList) {
          if ((0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_0__.isList)(value)) {
            return value.slice(1);
          } else {
            return [];
          }
        } else {
          return [value];
        }
      });
    }
  }
  _srcCustomFilter(colId, operation) {
    return this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_4__.computed(() => {
      const values = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.toKo)(knockout__WEBPACK_IMPORTED_MODULE_4__, this._srcSection.selectedRows)();
      return { filters: { [colId]: values }, operations: { [colId]: operation } };
    }));
  }
  _makeSrcCellGetter() {
    const srcRowModel = this.autoDispose(this._srcTableModel.createFloatingRowModel());
    const srcCellObs = srcRowModel.cells[this._srcColId];
    if (!srcCellObs) {
      return null;
    }
    return (rowId) => {
      srcRowModel.assign(rowId);
      if (rowId === "new") {
        return "new";
      }
      return srcCellObs();
    };
  }
}


/***/ }),

/***/ "./app/client/components/ParseOptions.ts":
/*!***********************************************!*\
  !*** ./app/client/components/ParseOptions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildParseOptionsForm": () => (/* binding */ buildParseOptionsForm)
/* harmony export */ });
/* harmony import */ var app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/ui2018/buttons */ "./app/client/ui2018/buttons.ts");
/* harmony import */ var app_client_ui2018_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/checkbox */ "./app/client/ui2018/checkbox.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui2018/modals */ "./app/client/ui2018/modals.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");





const fromPairs = __webpack_require__(/*! lodash/fromPairs */ "./node_modules/lodash/fromPairs.js");
const invert = __webpack_require__(/*! lodash/invert */ "./node_modules/lodash/invert.js");
const escapeCharDict = {
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t"
};
const invertedEscapeCharDict = invert(escapeCharDict);
function escapeChars(value) {
  return value.replace(/[\n\r\t]/g, (match) => escapeCharDict[match]);
}
function unescapeChars(value) {
  return value.replace(/\\[nrt]/g, (match) => invertedEscapeCharDict[match]);
}
function buildParseOptionsForm(owner, schema, values, doUpdate, doCancel) {
  const items = schema.filter((item) => item.visible);
  const optionsMap = new Map(items.map((item) => [item.name, grainjs__WEBPACK_IMPORTED_MODULE_4__.Observable.create(owner, values[item.name])]));
  function collectParseOptions() {
    return fromPairs(items.map((item) => [item.name, optionsMap.get(item.name).get()]));
  }
  return [
    cssParseOptionForm(items.map((item) => cssParseOption(cssParseOptionName(item.label), optionToInput(owner, item.type, optionsMap.get(item.name)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("parseopts-opt")))),
    (0,app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_3__.cssModalButtons)(grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.domComputed((use) => items.every((item) => use(optionsMap.get(item.name)) === values[item.name]), (unchanged) => unchanged ? (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_0__.bigBasicButton)("Back to preview", grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.on("click", doCancel), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("parseopts-back")) : (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_0__.bigPrimaryButton)("Update preview", grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.on("click", () => doUpdate(collectParseOptions())), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("parseopts-update"))))
  ];
}
function optionToInput(owner, type, value) {
  switch (type) {
    case "boolean":
      return (0,app_client_ui2018_checkbox__WEBPACK_IMPORTED_MODULE_1__.squareCheckbox)(value);
    default: {
      const obs = grainjs__WEBPACK_IMPORTED_MODULE_4__.Computed.create(owner, (use) => escapeChars(String(use(value) || ""))).onWrite((val) => value.set(unescapeChars(val)));
      return cssInputText(obs, { onInput: true }, grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.on("focus", (ev, elem) => elem.select()));
    }
  }
}
const cssParseOptionForm = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)("div", `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 16px 0;
  width: 400px;
  overflow-y: auto;
`);
const cssParseOption = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)("div", `
  flex: none;
  margin: 8px 0;
  width: calc(50% - 16px);
  font-weight: initial;   /* negate bootstrap */
`);
const cssParseOptionName = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)("div", `
  margin-bottom: 8px;
`);
const cssInputText = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)(grainjs__WEBPACK_IMPORTED_MODULE_4__.input, `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.theme.inputFg};
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.theme.inputBg};
  position: relative;
  display: inline-block;
  outline: none;
  height: 28px;
  border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.theme.inputBorder};
  border-radius: 3px;
  padding: 0 6px;
  width: 100%;

  &::placeholder {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.theme.inputPlaceholderFg};
  }
`);


/***/ }),

/***/ "./app/client/components/PluginScreen.ts":
/*!***********************************************!*\
  !*** ./app/client/components/PluginScreen.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginScreen": () => (/* binding */ PluginScreen)
/* harmony export */ });
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/buttons */ "./app/client/ui2018/buttons.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui2018/loaders */ "./app/client/ui2018/loaders.ts");
/* harmony import */ var app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/modals */ "./app/client/ui2018/modals.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");






const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__.makeT)("PluginScreen");
class PluginScreen extends grainjs__WEBPACK_IMPORTED_MODULE_5__.Disposable {
  constructor(_title) {
    super();
    this._title = _title;
    this._openModalCtl = null;
    this._importerContent = grainjs__WEBPACK_IMPORTED_MODULE_5__.Observable.create(this, null);
    this._fullscreen = grainjs__WEBPACK_IMPORTED_MODULE_5__.Observable.create(this, false);
  }
  renderContent(inlineElement) {
    this.render([this._buildModalTitle(), inlineElement]);
  }
  renderPlugin(plugin) {
    const handle = plugin.addRenderTarget((el, opt = {}) => {
      el.style.width = "100%";
      el.style.height = opt.height || "200px";
      this.renderContent(el);
    });
    return handle;
  }
  render(content, options) {
    this.showImportDialog();
    this._importerContent.set(content);
    this._fullscreen.set(Boolean(options == null ? void 0 : options.fullscreen));
  }
  renderError(message) {
    this.render([
      this._buildModalTitle(),
      cssModalBody(t("Import failed: "), message, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("importer-error")),
      (0,app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_4__.cssModalButtons)((0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_1__.bigBasicButton)("Close", grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.on("click", () => this.close()), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("modal-cancel")))
    ]);
  }
  renderSpinner() {
    this.render([this._buildModalTitle(), cssSpinner((0,app_client_ui2018_loaders__WEBPACK_IMPORTED_MODULE_3__.loadingSpinner)())]);
  }
  close() {
    var _a;
    (_a = this._openModalCtl) == null ? void 0 : _a.close();
    this._openModalCtl = null;
  }
  showImportDialog() {
    if (this._openModalCtl) {
      return;
    }
    (0,app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_4__.modal)((ctl) => {
      this._openModalCtl = ctl;
      return [
        cssModalOverrides.cls(""),
        cssModalOverrides.cls("-fullscreen", this._fullscreen),
        grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.domComputed(this._importerContent),
        (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("importer-dialog")
      ];
    }, {
      noClickAway: true,
      noEscapeKey: true
    });
  }
  _buildModalTitle(rightElement) {
    return cssModalHeader((0,app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_4__.cssModalTitle)(this._title), rightElement);
  }
}
const cssModalOverrides = (0,grainjs__WEBPACK_IMPORTED_MODULE_5__.styled)("div", `
  max-height: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  & > .${app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_4__.cssModalButtons.className} {
    margin-top: 16px;
  }

  &-fullscreen {
    height: 100%;
    margin: 32px;
  }
`);
const cssModalBody = (0,grainjs__WEBPACK_IMPORTED_MODULE_5__.styled)("div", `
  padding: 16px 0;
  overflow-y: auto;
  max-width: 470px;
  white-space: pre-line;
`);
const cssModalHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_5__.styled)("div", `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  & > .${app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_4__.cssModalTitle.className} {
    margin-bottom: 0px;
  }
`);
const cssSpinner = (0,grainjs__WEBPACK_IMPORTED_MODULE_5__.styled)("div", `
  display: flex;
  align-items: center;
  height: 80px;
  margin: auto;
`);


/***/ }),

/***/ "./app/client/components/Printing.ts":
/*!*******************************************!*\
  !*** ./app/client/components/Printing.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printViewSection": () => (/* binding */ printViewSection),
/* harmony export */   "renderAllRows": () => (/* binding */ renderAllRows)
/* harmony export */ });
/* harmony import */ var app_client_components_CustomView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/CustomView */ "./app/client/components/CustomView.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");


async function printViewSection(layout, viewSection) {
  var _a;
  const viewInstance = viewSection.viewInstance.peek();
  const sectionElem = (_a = viewInstance == null ? void 0 : viewInstance.viewPane) == null ? void 0 : _a.closest(".viewsection_content");
  if (!sectionElem) {
    throw new Error("No page widget to print");
  }
  if (viewInstance instanceof app_client_components_CustomView__WEBPACK_IMPORTED_MODULE_0__.CustomView) {
    try {
      await viewInstance.triggerPrint();
      return;
    } catch (e) {
      console.warn(`Failed to trigger print in CustomView: ${e}`);
    }
  }
  function prepareToPrint(onOff) {
    layout == null ? void 0 : layout.forEachBox((box) => {
      if (!box.dom.contains(sectionElem)) {
        box.dom.classList.toggle("print-hide", onOff);
      }
    });
    sectionElem.classList.toggle("print-widget", onOff);
    viewInstance == null ? void 0 : viewInstance.prepareToPrint(onOff);
    const keyElem = sectionElem.querySelector(".print-all-rows") || sectionElem;
    let elem = keyElem.parentElement;
    while (elem) {
      elem.classList.toggle("print-parent", onOff);
      elem = elem.parentElement;
    }
  }
  const sub1 = grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.onElem(window, "beforeprint", () => prepareToPrint(true));
  const sub2 = grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.onElem(window, "afterprint", window.afterPrintCallback = () => {
    sub1.dispose();
    sub2.dispose();
    if (window.debugPrinting) {
      window.finishPrinting = () => prepareToPrint(false);
    } else {
      prepareToPrint(false);
    }
    delete window.afterPrintCallback;
  });
  setTimeout(() => window.print(), 0);
}
function renderAllRows(tableModel, rowIds, renderRow) {
  const rowModel = tableModel.createFloatingRowModel(null);
  const html = [];
  rowIds.forEach((rowId, index) => {
    if (rowId !== "new") {
      rowModel._index(index);
      rowModel.assign(rowId);
      const elem = renderRow(rowModel);
      html.push(`<div class="print-row">${elem.outerHTML}</div>`);
      grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.domDispose(elem);
    }
  });
  rowModel.dispose();
  const result = (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.dom)("div.print-all-rows");
  result.innerHTML = html.join("\n");
  return result;
}


/***/ }),

/***/ "./app/client/components/RawDataPage.ts":
/*!**********************************************!*\
  !*** ./app/client/components/RawDataPage.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawDataPage": () => (/* binding */ RawDataPage),
/* harmony export */   "RawDataPopup": () => (/* binding */ RawDataPopup)
/* harmony export */ });
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_components_DataTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/components/DataTables */ "./app/client/components/DataTables.ts");
/* harmony import */ var app_client_components_DocumentUsage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/components/DocumentUsage */ "./app/client/components/DocumentUsage.ts");
/* harmony import */ var app_client_components_Printing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/components/Printing */ "./app/client/components/Printing.ts");
/* harmony import */ var app_client_components_ViewLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/components/ViewLayout */ "./app/client/components/ViewLayout.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");









const testId = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.makeTestId)("test-raw-data-");
class RawDataPage extends grainjs__WEBPACK_IMPORTED_MODULE_7__.Disposable {
  constructor(_gristDoc) {
    super();
    this._gristDoc = _gristDoc;
    const commandGroup = {
      printSection: () => {
        (0,app_client_components_Printing__WEBPACK_IMPORTED_MODULE_3__.printViewSection)(null, this._gristDoc.viewModel.activeSection()).catch(app_client_models_errors__WEBPACK_IMPORTED_MODULE_8__.reportError);
      }
    };
    this.autoDispose(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.createGroup(commandGroup, this, true));
    this._lightboxVisible = grainjs__WEBPACK_IMPORTED_MODULE_7__.Computed.create(this, (use) => {
      const section = use(this._gristDoc.viewModel.activeSection);
      return Boolean(use(section.id)) && use(section.isRaw);
    });
    const emptyView = this._gristDoc.docModel.views.rowModels.find((x) => x.id.peek() === void 0);
    this.autoDispose(this._gristDoc.activeViewId.addListener(() => {
      emptyView == null ? void 0 : emptyView.activeSectionId(0);
    }));
    this.autoDispose(this._lightboxVisible.addListener((state) => {
      if (!state) {
        this._gristDoc.cursorMonitor.clear();
      }
    }));
  }
  buildDom() {
    return cssContainer(cssPage((0,grainjs__WEBPACK_IMPORTED_MODULE_7__.dom)("div", this._gristDoc.behavioralPromptsManager.attachTip("rawDataPage", { hideArrow: true })), (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.dom)("div", grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.create(app_client_components_DataTables__WEBPACK_IMPORTED_MODULE_1__.DataTables, this._gristDoc), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.create(app_client_components_DocumentUsage__WEBPACK_IMPORTED_MODULE_2__.DocumentUsage, this._gristDoc.docPageModel)), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.hide(this._lightboxVisible)), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.domComputed((0,grainjs__WEBPACK_IMPORTED_MODULE_7__.fromKo)(this._gristDoc.viewModel.activeSection), (viewSection) => {
      const sectionId = viewSection.getRowId();
      if (!sectionId || !viewSection.isRaw.peek()) {
        return null;
      }
      return grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.create(RawDataPopup, this._gristDoc, viewSection, () => this._close());
    }));
  }
  _close() {
    this._gristDoc.viewModel.activeSectionId(0);
  }
}
class RawDataPopup extends grainjs__WEBPACK_IMPORTED_MODULE_7__.Disposable {
  constructor(_gristDoc, _viewSection, _onClose) {
    super();
    this._gristDoc = _gristDoc;
    this._viewSection = _viewSection;
    this._onClose = _onClose;
    const commandGroup = {
      cancel: () => {
        this._onClose();
      }
    };
    this.autoDispose(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.createGroup(commandGroup, this, true));
  }
  buildDom() {
    app_client_components_ViewLayout__WEBPACK_IMPORTED_MODULE_4__.ViewSectionHelper.create(this, this._gristDoc, this._viewSection);
    return cssOverlay(testId("overlay"), cssSectionWrapper((0,app_client_components_ViewLayout__WEBPACK_IMPORTED_MODULE_4__.buildViewSectionDom)({
      gristDoc: this._gristDoc,
      sectionRowId: this._viewSection.getRowId(),
      draggable: false,
      focusable: false,
      widgetNameHidden: true
    })), cssCloseButton("CrossBig", testId("close-button"), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.on("click", () => this._onClose())), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.on("click", (ev, elem) => void (ev.target === elem ? this._onClose() : null)));
  }
}
const cssContainer = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  height: 100%;
  overflow: hidden;
  position: relative;
`);
const cssPage = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  overflow-y: auto;
  height: 100%;
  padding: 32px 64px 24px 64px;
  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.mediaSmall} {
    & {
      padding: 32px 24px 24px 24px;
    }
  }
`);
const cssOverlay = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.modalBackdrop};
  inset: 0px;
  height: 100%;
  width: 100%;
  padding: 20px 56px 20px 56px;
  position: absolute;
  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.mediaSmall} {
    & {
      padding: 22px;
      padding-top: 30px;
    }
  }
`);
const cssSectionWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  background: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.mainPanelBg};
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  & .viewsection_content {
    margin: 0px;
    margin-top: 12px;
  }
  & .viewsection_title {
    padding: 0px 12px;
  }
  & .filter_bar {
    margin-left: 6px;
  }
`);
const cssCloseButton = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_6__.icon, `
  position: absolute;
  top: 16px;
  right: 16px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.modalBackdropCloseButtonFg};
  &:hover {
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.modalBackdropCloseButtonHoverFg};
  }
  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.mediaSmall} {
    & {
      top: 6px;
      right: 6px;
    }
  }
`);


/***/ }),

/***/ "./app/client/components/SelectionSummary.ts":
/*!***************************************************!*\
  !*** ./app/client/components/SelectionSummary.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionSummary": () => (/* binding */ SelectionSummary)
/* harmony export */ });
/* harmony import */ var app_client_components_CellSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/CellSelector */ "./app/client/components/CellSelector.ts");
/* harmony import */ var app_client_lib_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/lib/copyToClipboard */ "./app/client/lib/copyToClipboard.ts");
/* harmony import */ var app_client_lib_Delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/lib/Delay */ "./app/client/lib/Delay.ts");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_client_models_rowset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/models/rowset */ "./app/client/models/rowset.ts");
/* harmony import */ var app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui/tooltips */ "./app/client/ui/tooltips.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");











const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_10__.makeT)("SelectionSummary");
const testId = (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.makeTestId)("test-selection-summary-");
const MAX_CELLS_TO_SCAN = 1e6;
class SelectionSummary extends grainjs__WEBPACK_IMPORTED_MODULE_9__.Disposable {
  constructor(_cellSelector, _tableData, _sortedRows, _viewFields) {
    super();
    this._cellSelector = _cellSelector;
    this._tableData = _tableData;
    this._sortedRows = _sortedRows;
    this._viewFields = _viewFields;
    this._colTotalCount = grainjs__WEBPACK_IMPORTED_MODULE_9__.Computed.create(this, (use) => use(use(this._viewFields).getObservable()).length);
    this._rowTotalCount = grainjs__WEBPACK_IMPORTED_MODULE_9__.Computed.create(this, (use) => {
      const rowIds = use(this._sortedRows.getKoArray().getObservable());
      const includesNewRow = rowIds.length > 0 && rowIds[rowIds.length - 1] === "new";
      return rowIds.length - (includesNewRow ? 1 : 0);
    });
    this._rowRange = grainjs__WEBPACK_IMPORTED_MODULE_9__.Computed.create(this, (use) => {
      const type = use(this._cellSelector.currentSelectType);
      if (type === app_client_components_CellSelector__WEBPACK_IMPORTED_MODULE_0__.COL) {
        return { begin: 0, end: use(this._rowTotalCount) };
      } else {
        const start = use(this._cellSelector.row.start);
        const end = use(this._cellSelector.row.end);
        return {
          begin: Math.min(start, end),
          end: Math.max(start, end) + 1
        };
      }
    });
    this._colRange = grainjs__WEBPACK_IMPORTED_MODULE_9__.Computed.create(this, (use) => {
      const type = use(this._cellSelector.currentSelectType);
      if (type === app_client_components_CellSelector__WEBPACK_IMPORTED_MODULE_0__.ROW) {
        return { begin: 0, end: use(this._colTotalCount) };
      } else {
        const start = use(this._cellSelector.col.start);
        const end = use(this._cellSelector.col.end);
        return {
          begin: Math.min(start, end),
          end: Math.max(start, end) + 1
        };
      }
    });
    this._summary = grainjs__WEBPACK_IMPORTED_MODULE_9__.Observable.create(this, []);
    this._delayedRecalc = this.autoDispose(app_client_lib_Delay__WEBPACK_IMPORTED_MODULE_2__.Delay.create());
    this.autoDispose(this._sortedRows.getKoArray().subscribe(this._onSpliceChange, this, "spliceChange"));
    const onRowNotify = this._onRowNotify.bind(this);
    this._sortedRows.on("rowNotify", onRowNotify);
    this.onDispose(() => this._sortedRows.off("rowNotify", onRowNotify));
    this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_9__.subscribe)(this._rowRange, this._colRange, () => this._scheduleRecalc()));
    this.autoDispose((0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.isNarrowScreenObs)().addListener((isNarrow) => {
      if (isNarrow) {
        return;
      }
      this._scheduleRecalc();
    }));
  }
  buildDom() {
    return cssSummary(grainjs__WEBPACK_IMPORTED_MODULE_9__.dom.forEach(this._summary, ({ id, label, value, clickToCopy }) => cssSummaryPart(label ? (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.dom)("span", cssLabelText(label), cssCopyIcon("Copy")) : null, value, cssSummaryPart.cls("-copyable", Boolean(clickToCopy)), clickToCopy ? grainjs__WEBPACK_IMPORTED_MODULE_9__.dom.on("click", (ev, elem) => doCopy(value, elem)) : null, testId(id))));
  }
  _onSpliceChange(splice) {
    const rowRange = this._rowRange.get();
    const rowCount = rowRange.end - rowRange.begin;
    if (rowCount === 1) {
      return;
    }
    if (splice.start >= rowRange.end) {
      return;
    }
    this._scheduleRecalc();
  }
  _onRowNotify(rows) {
    const rowRange = this._rowRange.get();
    if (rows === app_client_models_rowset__WEBPACK_IMPORTED_MODULE_4__.ALL) {
      this._scheduleRecalc();
    } else {
      const rowArray = this._sortedRows.getKoArray().peek();
      const rowIdSet = new Set(rows);
      for (let r = rowRange.begin; r < rowRange.end; r++) {
        if (rowIdSet.has(rowArray[r])) {
          this._scheduleRecalc();
          break;
        }
      }
    }
  }
  _scheduleRecalc() {
    this._delayedRecalc.schedule(0, () => this._recalc());
  }
  _recalc() {
    const rowRange = this._rowRange.get();
    const colRange = this._colRange.get();
    let rowCount = rowRange.end - rowRange.begin;
    let colCount = colRange.end - colRange.begin;
    const cellCount = rowCount * colCount;
    const summary = [];
    if (cellCount > 1 && !(0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.isNarrowScreen)()) {
      if (cellCount <= MAX_CELLS_TO_SCAN) {
        const rowArray = this._sortedRows.getKoArray().peek();
        const fields = this._viewFields.peek().peek();
        let countNumeric = 0;
        let countNonEmpty = 0;
        let sum = 0;
        let sumFormatter = null;
        const rowIndices = [];
        for (let r = rowRange.begin; r < rowRange.end; r++) {
          const rowId = rowArray[r];
          if (rowId === void 0 || rowId === "new") {
            rowCount -= 1;
            continue;
          }
          rowIndices.push(this._tableData.getRowIdIndex(rowId));
        }
        for (let c = colRange.begin; c < colRange.end; c++) {
          const field = fields[c];
          if (field === void 0) {
            colCount -= 1;
            continue;
          }
          const col = fields[c].column.peek();
          const displayCol = fields[c].displayColModel.peek();
          const colType = col.type.peek();
          const visibleColType = fields[c].visibleColModel.peek().type.peek();
          const effectiveColType = visibleColType != null ? visibleColType : colType;
          const displayColId = displayCol.colId.peek();
          const values = this._tableData.getColValues(displayColId);
          if (!values) {
            throw new app_client_models_errors__WEBPACK_IMPORTED_MODULE_3__.UserError(`Invalid column ${this._tableData.tableId}.${displayColId}`);
          }
          const isNumeric = ["Numeric", "Int", "Any"].includes(effectiveColType);
          const isEmpty = colType.startsWith("Ref:") && !visibleColType ? (value) => value === 0 : (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_8__.isRefListType)(colType) || (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_8__.isListType)(effectiveColType) ? app_common_gristTypes__WEBPACK_IMPORTED_MODULE_8__.isEmptyList : void 0;
          if (isNumeric) {
            if (!sumFormatter) {
              sumFormatter = fields[c].formatter.peek();
            }
            for (const i of rowIndices) {
              const value = values[i];
              if (typeof value === "number") {
                countNumeric++;
                sum += value;
              } else if (value !== null && value !== void 0 && value !== "" && !(isEmpty == null ? void 0 : isEmpty(value))) {
                countNonEmpty++;
              }
            }
          } else {
            for (const i of rowIndices) {
              const value = values[i];
              if (value !== null && value !== void 0 && value !== "" && !(isEmpty == null ? void 0 : isEmpty(value))) {
                countNonEmpty++;
              }
            }
          }
        }
        if (countNumeric > 0) {
          const sumValue = sumFormatter ? sumFormatter.formatAny(sum) : String(sum);
          summary.push({ id: "sum", label: "Sum ", value: sumValue, clickToCopy: true });
        } else {
          summary.push({ id: "count", label: "Count ", value: String(countNonEmpty), clickToCopy: true });
        }
      }
      summary.push({ id: "dimensions", label: "", value: `${rowCount}\u2A2F${colCount}` });
    }
    this._summary.set(summary);
  }
}
async function doCopy(value, elem) {
  await (0,app_client_lib_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)(value);
  (0,app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_5__.showTransientTooltip)(elem, t("Copied to clipboard"), { key: "copy-selection-summary" });
}
const cssSummary = (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.styled)("div", `
  position: absolute;
  bottom: -18px;
  height: 18px;
  line-height: 18px;
  display: flex;
  column-gap: 8px;
  width: 100%;
  justify-content: end;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.text};
  font-family: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.vars.fontFamilyData};

  @media print {
    & {
      display: none;
    }
  }
`);
const cssSummaryPart = (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.styled)("div", `
  padding: 0 8px;
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top: none;
  z-index: 100;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* Set explicit backdrop to improve visibility in raw data views. */
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.mainPanelBg};

  &-copyable:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.colors.mediumGrey};
    opacity: 0.8;
    z-index: -1;
  }
`);
const cssLabelText = (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.styled)("span", `
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.vars.xsmallFontSize};
  text-transform: uppercase;
  position: relative;
  margin-right: 4px;
  .${cssSummaryPart.className}-copyable:hover & {
    visibility: hidden;
  }
`);
const cssCopyIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_7__.icon, `
  position: absolute;
  top: 0;
  margin: 1px 0 0 4px;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_6__.theme.controlFg};
  display: none;
  .${cssSummaryPart.className}-copyable:hover & {
    display: block;
  }
`);


/***/ }),

/***/ "./app/client/components/UndoStack.ts":
/*!********************************************!*\
  !*** ./app/client/components/UndoStack.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UndoStack": () => (/* binding */ UndoStack)
/* harmony export */ });
/* harmony import */ var app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/dispose */ "./app/client/lib/dispose.js");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_3__);




const sortBy = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
class UndoStack extends app_client_lib_dispose__WEBPACK_IMPORTED_MODULE_0__.Disposable {
  constructor() {
    super(...arguments);
    this._undoChain = new app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.PromiseChain();
  }
  create(log, options) {
    this._gristDoc = options.gristDoc;
    this._stack = [];
    this._pointer = 0;
    this._linkMap = /* @__PURE__ */ new Map();
    this.undoDisabledObs = knockout__WEBPACK_IMPORTED_MODULE_3__.observable(true);
    this.redoDisabledObs = knockout__WEBPACK_IMPORTED_MODULE_3__.observable(true);
    if (this._gristDoc.docPageModel) {
      this._gristDoc.docPageModel.undoState.set({
        isUndoDisabled: (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.fromKo)(this.undoDisabledObs),
        isRedoDisabled: (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.fromKo)(this.redoDisabledObs)
      });
    }
    log.forEach((ag) => {
      this.pushAction(ag);
    });
  }
  pushAction(ag) {
    if (!ag.fromSelf) {
      return;
    }
    const otherIndex = ag.otherId ? this._stack.findIndex((a) => a.actionNum === ag.otherId) : -1;
    if (ag.linkId) {
      (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.setDefault)(this._linkMap, ag.linkId, []).push(ag);
    } else if (otherIndex > -1) {
      this._pointer = ag.isUndo ? otherIndex : otherIndex + 1;
    } else {
      if (!this.redoDisabledObs()) {
        this._stack.splice(this._pointer);
      }
      if (!ag.otherId) {
        this._stack.push(ag);
      }
      this._pointer = this._stack.length;
    }
    this.undoDisabledObs(this._pointer <= 0);
    this.redoDisabledObs(this._pointer >= this._stack.length);
  }
  sendUndoAction() {
    return this._undoChain.add(() => this._sendAction(true));
  }
  sendRedoAction() {
    return this._undoChain.add(() => this._sendAction(false));
  }
  async _sendAction(isUndo) {
    const ag = this._stack[isUndo ? this._pointer - 1 : this._pointer];
    if (!ag) {
      return;
    }
    try {
      const actionGroups = this._findActionBundle(ag);
      this._gristDoc.moveToCursorPos(ag.cursorPos, ag).catch(() => {
      });
      await this._gristDoc.docComm.applyUserActionsById(actionGroups.map((a) => a.actionNum), actionGroups.map((a) => a.actionHash), isUndo, { otherId: ag.actionNum });
      this._gristDoc.moveToCursorPos(ag.cursorPos, ag).catch(() => {
      });
    } catch (err) {
      err.message = `Failed to apply ${isUndo ? "undo" : "redo"} action: ${err.message}`;
      throw err;
    }
  }
  _findActionBundle(ag) {
    const prevNums = /* @__PURE__ */ new Set();
    const actionGroups = [];
    const queue = [ag];
    while (queue.length) {
      ag = queue.pop();
      if (prevNums.has(ag.actionNum)) {
        break;
      }
      actionGroups.push(ag);
      prevNums.add(ag.actionNum);
      queue.push(...this._linkMap.get(ag.actionNum) || []);
    }
    return sortBy(actionGroups, (group) => group.actionNum);
  }
}


/***/ }),

/***/ "./app/client/components/ViewLayout.ts":
/*!*********************************************!*\
  !*** ./app/client/components/ViewLayout.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewLayout": () => (/* binding */ ViewLayout),
/* harmony export */   "ViewSectionHelper": () => (/* binding */ ViewSectionHelper),
/* harmony export */   "buildViewSectionDom": () => (/* binding */ buildViewSectionDom)
/* harmony export */ });
/* harmony import */ var app_client_components_ChartView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/ChartView */ "./app/client/components/ChartView.ts");
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_components_CustomView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/components/CustomView */ "./app/client/components/CustomView.ts");
/* harmony import */ var app_client_components_DetailView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/components/DetailView */ "./app/client/components/DetailView.js");
/* harmony import */ var app_client_components_DetailView__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(app_client_components_DetailView__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_client_components_GridView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/components/GridView */ "./app/client/components/GridView.js");
/* harmony import */ var app_client_components_GridView__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(app_client_components_GridView__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_client_components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/components/Layout */ "./app/client/components/Layout.ts");
/* harmony import */ var app_client_components_LayoutEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/components/LayoutEditor */ "./app/client/components/LayoutEditor.ts");
/* harmony import */ var app_client_components_Printing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/components/Printing */ "./app/client/components/Printing.ts");
/* harmony import */ var app_client_lib_Delay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/lib/Delay */ "./app/client/lib/Delay.ts");
/* harmony import */ var app_client_lib_koArrayWrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/client/lib/koArrayWrap */ "./app/client/lib/koArrayWrap.ts");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_client_ui_FilterBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/client/ui/FilterBar */ "./app/client/ui/FilterBar.ts");
/* harmony import */ var app_client_ui_ViewSectionMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/client/ui/ViewSectionMenu */ "./app/client/ui/ViewSectionMenu.ts");
/* harmony import */ var app_client_ui_WidgetTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/client/ui/WidgetTitle */ "./app/client/ui/WidgetTitle.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/common/DisposableWithEvents */ "./app/common/DisposableWithEvents.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");






















const viewSectionTypes = {
  record: app_client_components_GridView__WEBPACK_IMPORTED_MODULE_4__,
  detail: app_client_components_DetailView__WEBPACK_IMPORTED_MODULE_3__,
  chart: app_client_components_ChartView__WEBPACK_IMPORTED_MODULE_0__.ChartView,
  single: app_client_components_DetailView__WEBPACK_IMPORTED_MODULE_3__,
  custom: app_client_components_CustomView__WEBPACK_IMPORTED_MODULE_2__.CustomView
};
function getInstanceConstructor(parentKey) {
  const Cons = viewSectionTypes[parentKey];
  if (!Cons) {
    console.error("ViewLayout error: requested an unsupported section type:", parentKey);
  }
  return Cons || viewSectionTypes.record;
}
class ViewSectionHelper extends grainjs__WEBPACK_IMPORTED_MODULE_21__.Disposable {
  constructor(gristDoc, vs) {
    super();
    this._instance = grainjs__WEBPACK_IMPORTED_MODULE_21__.Holder.create(this);
    this.onDispose(() => vs.viewInstance(null));
    this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.subscribe)((use) => {
      const table = use(vs.table);
      const Cons = getInstanceConstructor(use(vs.parentKey));
      this._instance.clear();
      if (table.getRowId()) {
        this._instance.autoDispose(Cons.create(gristDoc, vs));
      }
      vs.viewInstance(this._instance.get());
    }));
  }
}
class ViewLayout extends app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_16__.DisposableWithEvents {
  constructor(gristDoc, viewId) {
    super();
    this.gristDoc = gristDoc;
    this.docModel = this.gristDoc.docModel;
    this._freeze = false;
    this._isResizing = grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(this, false);
    this.viewModel = this.docModel.views.getRowModel(viewId);
    const viewSectionObs = (0,app_client_lib_koArrayWrap__WEBPACK_IMPORTED_MODULE_9__.createObsArray)(this, this.viewModel.viewSections());
    this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.computedArray)(viewSectionObs, (vs, i, compArr) => ViewSectionHelper.create(compArr, gristDoc, vs)));
    this.layoutSpec = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_18__.computed(() => this._updateLayoutSpecWithSections(this.viewModel.layoutSpecObj())).extend({ rateLimit: 0 }));
    this._layout = this.autoDispose(app_client_components_Layout__WEBPACK_IMPORTED_MODULE_5__.Layout.create(this.layoutSpec(), this._buildLeafContent.bind(this), true));
    this._sectionIds = this._layout.getAllLeafIds();
    this.autoDispose(this.layoutSpec.subscribe((spec) => this._freeze || this._rebuildLayout(spec)));
    const layoutSaveDelay = this.autoDispose(new app_client_lib_Delay__WEBPACK_IMPORTED_MODULE_8__.Delay());
    this.listenTo(this._layout, "layoutUserEditStop", () => {
      this._isResizing.set(false);
      layoutSaveDelay.schedule(1e3, () => {
        if (!this._layout) {
          return;
        }
        if (!this.gristDoc.isReadonly.get()) {
          this.viewModel.layoutSpecObj.setAndSave(this._layout.getLayoutSpec());
        }
        this._onResize();
      });
    });
    this.listenTo(this._layout, "layoutUserEditStart", () => {
      layoutSaveDelay.cancel();
      this._isResizing.set(true);
    });
    this.autoDispose(app_client_components_LayoutEditor__WEBPACK_IMPORTED_MODULE_6__.LayoutEditor.create(this._layout));
    this.onDispose(() => this._layout.dispose());
    this.autoDispose(this.gristDoc.resizeEmitter.addListener(this._onResize, this));
    this.listenTo(this.gristDoc.app, "clipboard_blur", this._maybeFocusInSection);
    const handler = lodash_debounce__WEBPACK_IMPORTED_MODULE_20___default()((e) => {
      if (e.propertyName !== "flex-grow" || !(0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.isNarrowScreen)()) {
        return;
      }
      if (this.viewModel.isDisposed() || !this.viewModel.activeSection) {
        return;
      }
      const section = this.viewModel.activeSection.peek();
      if (!section || section.isDisposed()) {
        return;
      }
      const view = section.viewInstance.peek();
      if (!view || view.isDisposed()) {
        return;
      }
      view.onResize();
    }, 0);
    this._layout.rootElem.addEventListener("transitionend", handler);
    const classActive = cssLayoutBox.className + "-active";
    const classInactive = cssLayoutBox.className + "-inactive";
    this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.subscribe)((0,grainjs__WEBPACK_IMPORTED_MODULE_21__.fromKo)(this.viewModel.activeSection), (use, section) => {
      var _a, _b;
      const id = section.getRowId();
      this._layout.forEachBox((box) => {
        box.dom.classList.add(classInactive);
        box.dom.classList.remove(classActive);
        box.dom.classList.remove("transition");
      });
      let elem = ((_a = this._layout.getLeafBox(id)) == null ? void 0 : _a.dom) || null;
      while (elem == null ? void 0 : elem.matches(".layout_box")) {
        elem.classList.remove(classInactive);
        elem.classList.add(classActive);
        elem = elem.parentElement;
      }
      if (!(0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.isNarrowScreen)()) {
        (_b = section.viewInstance.peek()) == null ? void 0 : _b.onResize();
      }
    }));
    const commandGroup = {
      deleteSection: () => {
        this._removeViewSection(this.viewModel.activeSectionId());
      },
      nextSection: () => {
        this._otherSection(1);
      },
      prevSection: () => {
        this._otherSection(-1);
      },
      printSection: () => {
        (0,app_client_components_Printing__WEBPACK_IMPORTED_MODULE_7__.printViewSection)(this._layout, this.viewModel.activeSection()).catch(app_client_models_errors__WEBPACK_IMPORTED_MODULE_10__.reportError);
      },
      sortFilterMenuOpen: (sectionId) => {
        this._openSortFilterMenu(sectionId);
      },
      maximizeActiveSection: () => {
        this._maximizeActiveSection();
      },
      cancel: () => {
        if (this.maximized.get()) {
          this.maximized.set(null);
        }
      }
    };
    this.autoDispose(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.createGroup(commandGroup, this, true));
    this.maximized = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.fromKo)(this._layout.maximized);
    this.autoDispose(this.maximized.addListener((val) => {
      var _a;
      const section = this.viewModel.activeSection.peek();
      if (!section.isDisposed() && section.id.peek()) {
        (_a = section == null ? void 0 : section.viewInstance.peek()) == null ? void 0 : _a.onResize();
      }
    }));
  }
  buildDom() {
    const close = () => this.maximized.set(null);
    return cssOverlay(cssOverlay.cls("-active", (use) => !!use(this.maximized)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.testId)("viewLayout-overlay"), cssLayoutWrapper(cssLayoutWrapper.cls("-active", (use) => !!use(this.maximized)), this._layout.rootElem), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe((use) => !!use(this.maximized), () => cssCloseButton("CrossBig", (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.testId)("close-button"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", () => close()))), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("click", (ev, elem) => void (ev.target === elem && this.maximized.get() ? close() : null)));
  }
  async freezeUntil(promise) {
    this._freeze = true;
    try {
      return await promise;
    } finally {
      this._freeze = false;
      this._rebuildLayout(this.layoutSpec.peek());
    }
  }
  _removeViewSection(viewSectionRowId) {
    this.gristDoc.docData.sendAction(["RemoveViewSection", viewSectionRowId]).catch(app_client_models_errors__WEBPACK_IMPORTED_MODULE_10__.reportError);
  }
  _maximizeActiveSection() {
    const activeSection = this.viewModel.activeSection();
    const activeSectionId = activeSection.getRowId();
    const activeSectionBox = this._layout.getLeafBox(activeSectionId);
    if (!activeSectionBox) {
      return;
    }
    activeSectionBox.maximize();
  }
  _buildLeafContent(sectionRowId) {
    return buildViewSectionDom({
      gristDoc: this.gristDoc,
      sectionRowId,
      isResizing: this._isResizing,
      viewModel: this.viewModel
    });
  }
  _updateLayoutSpecWithSections(spec) {
    const tmpLayout = app_client_components_Layout__WEBPACK_IMPORTED_MODULE_5__.Layout.create(spec, () => (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("div"), true);
    const specFieldIds = tmpLayout.getAllLeafIds();
    const viewSectionIds = this.viewModel.viewSections().all().map(function(f) {
      return f.getRowId();
    });
    function addToSpec(leafId) {
      const newBox = tmpLayout.buildLayoutBox({ leaf: leafId });
      const rows = tmpLayout.rootBox().childBoxes.peek();
      const lastRow = rows[rows.length - 1];
      if (rows.length >= 1 && lastRow.isLeaf()) {
        lastRow.addChild(newBox, true);
      } else {
        tmpLayout.rootBox().addChild(newBox, true);
      }
      return newBox;
    }
    underscore__WEBPACK_IMPORTED_MODULE_19__.difference(specFieldIds, viewSectionIds).forEach(function(leafId) {
      var _a;
      (_a = tmpLayout.getLeafBox(leafId)) == null ? void 0 : _a.dispose();
    });
    underscore__WEBPACK_IMPORTED_MODULE_19__.difference(viewSectionIds, specFieldIds).forEach(function(leafId) {
      addToSpec(leafId);
    });
    spec = tmpLayout.getLayoutSpec();
    tmpLayout.dispose();
    return spec;
  }
  _rebuildLayout(layoutSpec) {
    this._layout.buildLayout(layoutSpec, true);
    this._onResize();
    this._sectionIds = this._layout.getAllLeafIds();
  }
  _onResize() {
    this.viewModel.viewSections().all().forEach((vs) => {
      const inst = vs.viewInstance.peek();
      if (inst) {
        inst.onResize();
      }
    });
  }
  _otherSection(delta) {
    const sectionId = this.viewModel.activeSectionId.peek();
    const currentIndex = this._sectionIds.indexOf(sectionId);
    const index = (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_17__.mod)(currentIndex + delta, this._sectionIds.length);
    this.viewModel.activeSectionId(this._sectionIds[index]);
  }
  _maybeFocusInSection() {
    const layoutBox = this._layout.getContainingBox(document.activeElement);
    if (layoutBox && layoutBox.leafId) {
      this.gristDoc.viewModel.activeSectionId(layoutBox.leafId.peek());
    }
  }
  _openSortFilterMenu(sectionId) {
    var _a;
    const id = sectionId != null ? sectionId : this.viewModel.activeSectionId();
    const leafBoxDom = (_a = this._layout.getLeafBox(id)) == null ? void 0 : _a.dom;
    if (!leafBoxDom) {
      return;
    }
    const menu = leafBoxDom.querySelector(".test-section-menu-sortAndFilter");
    menu == null ? void 0 : menu.click();
  }
}
function buildViewSectionDom(options) {
  var _a;
  const isResizing = (_a = options.isResizing) != null ? _a : grainjs__WEBPACK_IMPORTED_MODULE_21__.Observable.create(null, false);
  const { gristDoc, sectionRowId, viewModel, draggable = true, focusable = true } = options;
  const vs = gristDoc.docModel.viewSections.getRowModel(sectionRowId);
  return (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("div.view_leaf.viewsection_content.flexvbox.flexauto", (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.testId)(`viewlayout-section-${sectionRowId}`), !options.isResizing ? grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.autoDispose(isResizing) : null, cssViewLeaf.cls(""), cssViewLeafInactive.cls("", (use) => !vs.isDisposed() && !use(vs.hasFocus)), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.cls("active_section", vs.hasFocus), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.cls("active_section--no-indicator", !focusable), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe((use) => use(vs.viewInstance), (viewInstance) => (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("div.viewsection_title.flexhbox", cssDragIcon("DragDrop", grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.cls("viewsection_drag_indicator"), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.cls("layout_grabbable", (use) => !use(gristDoc.isReadonlyKo)), !draggable ? grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.style("visibility", "hidden") : null), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe((use) => use(use(viewInstance.viewSection.table).summarySourceTable), () => cssSigmaIcon("Pivot", (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.testId)("sigma"))), (0,app_client_ui_WidgetTitle__WEBPACK_IMPORTED_MODULE_13__.buildWidgetTitle)(vs, options, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.testId)("viewsection-title"), cssTestClick((0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.testId)("viewsection-blank"))), viewInstance.buildTitleControls(), (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("div.viewsection_buttons", grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.create(app_client_ui_ViewSectionMenu__WEBPACK_IMPORTED_MODULE_12__.viewSectionMenu, gristDoc, vs)))), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.create(app_client_ui_FilterBar__WEBPACK_IMPORTED_MODULE_11__.filterBar, gristDoc, vs), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(vs.viewInstance, (viewInstance) => [
    (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("div.view_data_pane_container.flexvbox", cssResizing.cls("", isResizing), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(viewInstance.disableEditing, () => (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("div.disable_viewpane.flexvbox", "No data")), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe(viewInstance.isTruncated, () => (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.dom)("div.viewsection_truncated", "Not all data is shown")), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.cls((use) => "viewsection_type_" + use(vs.parentKey)), viewInstance.viewPane),
    grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.maybe((use) => !use((0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.isNarrowScreenObs)()), () => {
      var _a2;
      return (_a2 = viewInstance.selectionSummary) == null ? void 0 : _a2.buildDom();
    })
  ]), grainjs__WEBPACK_IMPORTED_MODULE_21__.dom.on("mousedown", () => {
    viewModel == null ? void 0 : viewModel.activeSectionId(sectionRowId);
  }));
}
const cssTestClick = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(`div`, `
  min-width: 2px;
`);
const cssSigmaIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_15__.icon, `
  bottom: 1px;
  margin-right: 5px;
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.theme.lightText}
`);
const cssViewLeaf = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.mediaSmall} {
    & {
      margin: 4px;
    }
  }
`);
const cssViewLeafInactive = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  @media screen and ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.mediaSmall} {
    & {
      overflow: hidden;
      background: repeating-linear-gradient(
        -45deg,
        ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.theme.widgetInactiveStripesDark},
        ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.theme.widgetInactiveStripesDark} 10px,
        ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.theme.widgetInactiveStripesLight} 10px,
        ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.theme.widgetInactiveStripesLight} 20px
      );
      border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.theme.widgetBorder};
      border-radius: 4px;
      padding: 0 2px;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &.layout_vbox {
      max-width: 32px;
    }
    &.layout_hbox {
      max-height: 32px;
    }
    & > .viewsection_title.flexhbox {
      position: absolute;
    }
    & > .view_data_pane_container,
    & .viewsection_buttons,
    & .grist-single-record__menu,
    & > .filter_bar {
      display: none;
    }
  }
`);
const cssLayoutBox = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  @media screen and ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.mediaSmall} {
    &-active, &-inactive {
      transition: flex-grow var(--grist-layout-animation-duration, 0.4s); // Exposed for tests
    }
    &-active > &-inactive,
    &-active > &-inactive.layout_hbox .layout_hbox,
    &-active > &-inactive.layout_vbox .layout_vbox {
      flex: none !important;
    }

    &-active > &-inactive.layout_hbox.layout_leaf,
    &-active > &-inactive.layout_hbox .layout_hbox.layout_leaf {
      height: 40px;
    }

    &-active > &-inactive.layout_vbox.layout_leaf,
    &-active > &-inactive.layout_vbox .layout_vbox.layout_leaf {
      width: 40px;
    }

    &-inactive.layout_leaf {
      min-height: 40px;
      min-width: 40px;
    }
  }
`);
const cssDragIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_15__.icon, `
  visibility: hidden;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.colors.slate};
  top: -1px;
  z-index: 100;

  .viewsection_title:hover &.layout_grabbable {
    visibility: visible;
  }
`);
const cssResizing = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  pointer-events: none;
`);
const cssLayoutWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  @media not print {
    &-active {
      background: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.theme.mainPanelBg};
      height: 100%;
      width: 100%;
      border-radius: 5px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      position: relative;
    }
    &-active .viewsection_content {
      margin: 0px;
      margin-top: 12px;
    }
    &-active .viewsection_title {
      padding: 0px 12px;
    }
    &-active .filter_bar {
      margin-left: 6px;
    }
  }
`);
const cssOverlay = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)("div", `
  @media screen {
    &-active {
      background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.theme.modalBackdrop};
      inset: 0px;
      height: 100%;
      width: 100%;
      padding: 20px 56px 20px 56px;
      position: absolute;
    }
  }
  @media screen and ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.mediaSmall} {
    &-active {
      padding: 22px;
      padding-top: 30px;
    }
  }
`);
const cssCloseButton = (0,grainjs__WEBPACK_IMPORTED_MODULE_21__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_15__.icon, `
  position: absolute;
  top: 16px;
  right: 16px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.theme.modalBackdropCloseButtonFg};
  &:hover {
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.theme.modalBackdropCloseButtonHoverFg};
  }
  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_14__.mediaSmall} {
    & {
      top: 6px;
      right: 6px;
    }
  }
`);


/***/ }),

/***/ "./app/client/components/WidgetFrame.ts":
/*!**********************************************!*\
  !*** ./app/client/components/WidgetFrame.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseEventSource": () => (/* binding */ BaseEventSource),
/* harmony export */   "ConfigNotifier": () => (/* binding */ ConfigNotifier),
/* harmony export */   "CustomSectionAPIImpl": () => (/* binding */ CustomSectionAPIImpl),
/* harmony export */   "GristDocAPIImpl": () => (/* binding */ GristDocAPIImpl),
/* harmony export */   "GristViewImpl": () => (/* binding */ GristViewImpl),
/* harmony export */   "MethodAccess": () => (/* binding */ MethodAccess),
/* harmony export */   "MinimumLevel": () => (/* binding */ MinimumLevel),
/* harmony export */   "RecordNotifier": () => (/* binding */ RecordNotifier),
/* harmony export */   "TableNotifier": () => (/* binding */ TableNotifier),
/* harmony export */   "WidgetAPIImpl": () => (/* binding */ WidgetAPIImpl),
/* harmony export */   "WidgetFrame": () => (/* binding */ WidgetFrame)
/* harmony export */ });
/* harmony import */ var app_client_lib_browserGlobals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/browserGlobals */ "./app/client/lib/browserGlobals.js");
/* harmony import */ var app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/CustomWidget */ "./app/common/CustomWidget.ts");
/* harmony import */ var app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/DisposableWithEvents */ "./app/common/DisposableWithEvents.ts");
/* harmony import */ var app_common_DocActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/DocActions */ "./app/common/DocActions.ts");
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");
/* harmony import */ var grain_rpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grain-rpc */ "./node_modules/grain-rpc/dist/lib/index.js");
/* harmony import */ var grain_rpc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grain_rpc__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};







const noop = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
const debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
const isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
const flatMap = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
const G = (0,app_client_lib_browserGlobals__WEBPACK_IMPORTED_MODULE_0__.get)("window");
class WidgetFrame extends app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_2__.DisposableWithEvents {
  constructor(_options) {
    var _a;
    super();
    this._options = _options;
    _options.access = _options.access || app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_1__.AccessLevel.none;
    this._rpc = new grain_rpc__WEBPACK_IMPORTED_MODULE_5__.Rpc({});
    this._rpc.queueOutgoingUntilReadyMessage();
    this._rpc.setSendMessage((msg) => {
      var _a2;
      return (_a2 = this._iframe) == null ? void 0 : _a2.contentWindow.postMessage(msg, "*");
    });
    const listener = this._onMessage.bind(this);
    G.window.addEventListener("message", listener);
    this.onDispose(() => {
      G.window.removeEventListener("message", listener);
      this._rpc.setSendMessage(noop);
    });
    (_a = _options.configure) == null ? void 0 : _a.call(_options, this);
  }
  useEvents(source, access) {
    const handler = async (data) => {
      if (access.check(this._options.access)) {
        await this._rpc.postMessage(data);
      }
    };
    this.listenTo(source, "event", handler);
    source.attach(this);
  }
  exposeAPI(name, api, access) {
    this._rpc.registerImpl(name, wrapObject(api, access, this._options.access));
    this.onDispose(() => this._rpc.unregisterImpl(name));
  }
  exposeMethod(name, handler, access) {
    this._rpc.registerFunc(name, (...args) => {
      if (access.check(this._options.access, "invoke")) {
        return handler(...args);
      } else {
        throwError(this._options.access);
      }
    });
  }
  editOptions() {
    return this.callRemote("editOptions");
  }
  callRemote(name, ...args) {
    return this._rpc.callRemoteFunc(name, ...args);
  }
  buildDom() {
    var _a;
    const urlWithAccess = (url) => {
      if (!url) {
        return url;
      }
      const urlObj = new URL(url);
      urlObj.searchParams.append("access", this._options.access);
      urlObj.searchParams.append("readonly", String(this._options.readonly));
      return urlObj.href;
    };
    const fullUrl = urlWithAccess(this._options.url);
    const onElem = (_a = this._options.onElem) != null ? _a : (el) => el;
    return onElem(this._iframe = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("iframe", grainjs__WEBPACK_IMPORTED_MODULE_6__.dom.cls("clipboard_focus"), grainjs__WEBPACK_IMPORTED_MODULE_6__.dom.cls("custom_view"), {
      src: fullUrl
    }));
  }
  _onMessage(event) {
    if (this._iframe && event.source === this._iframe.contentWindow && !this.isDisposed()) {
      if (event.data.mdest === "grist") {
        event.data.mdest = "";
      }
      if (event.data.mtype === grain_rpc__WEBPACK_IMPORTED_MODULE_5__.MsgType.Ready) {
        this.trigger("ready", this);
      }
      this._rpc.receiveMessage(event.data);
    }
  }
}
const throwError = (access) => {
  throw new Error("Access not granted. Current access level " + access);
};
function wrapObject(impl, accessChecker, access) {
  return new Proxy(impl, {
    get(target, methodName) {
      return function() {
        if (methodName === "then") {
          return void 0;
        }
        if (accessChecker.check(access, methodName)) {
          return target[methodName](...arguments);
        } else {
          throwError(access);
        }
      };
    }
  });
}
class MinimumLevel {
  constructor(_minimum) {
    this._minimum = _minimum;
  }
  check(access) {
    return (0,app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_1__.isSatisfied)(access, this._minimum);
  }
}
class MethodAccess {
  constructor() {
    this._accessMap = /* @__PURE__ */ new Map();
  }
  require(level, method = "*") {
    this._accessMap.set(method, level);
    return this;
  }
  check(access, method) {
    if (!method) {
      throw new Error("Method name is required for MethodAccess check");
    }
    if (this._accessMap.has(method)) {
      const minimum = this._accessMap.get(method);
      return (0,app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_1__.isSatisfied)(access, minimum);
    } else if (this._accessMap.has("*")) {
      const minimum = this._accessMap.get("*");
      return (0,app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_1__.isSatisfied)(access, minimum);
    } else {
      return false;
    }
  }
}
class GristDocAPIImpl {
  constructor(_doc) {
    this._doc = _doc;
  }
  async getDocName() {
    return this._doc.docId();
  }
  async listTables() {
    const { tableData } = await this._doc.docComm.fetchTable("_grist_Tables");
    return tableData[3].tableId.filter((tableId) => tableId !== "");
  }
  async fetchTable(tableId) {
    return (0,app_common_DocActions__WEBPACK_IMPORTED_MODULE_3__.fromTableDataAction)(await this._doc.docComm.fetchTable(tableId));
  }
  async applyUserActions(actions, options) {
    return this._doc.docComm.applyUserActions(actions, __spreadValues({ desc: void 0 }, options));
  }
  async getAccessToken(options) {
    return this._doc.docComm.getAccessToken({
      readOnly: options.readOnly
    });
  }
}
GristDocAPIImpl.defaultAccess = new MethodAccess().require(app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_1__.AccessLevel.read_table, "getDocName").require(app_common_CustomWidget__WEBPACK_IMPORTED_MODULE_1__.AccessLevel.full);
class GristViewImpl {
  constructor(_baseView) {
    this._baseView = _baseView;
  }
  async fetchSelectedTable() {
    const columns = this._visibleColumns();
    const rowIds = this._baseView.sortedRows.getKoArray().peek().filter((id) => id != "new");
    const data = {};
    for (const column of columns) {
      const colId = column.displayColModel.peek().colId.peek();
      const getter = this._baseView.tableModel.tableData.getRowPropFunc(colId);
      const typeInfo = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_4__.extractInfoFromColType)(column.type.peek());
      data[column.colId.peek()] = rowIds.map((r) => (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_4__.reencodeAsAny)(getter(r), typeInfo));
    }
    data.id = rowIds;
    return data;
  }
  async fetchSelectedRecord(rowId) {
    const columns = this._visibleColumns();
    const data = { id: rowId };
    for (const column of columns) {
      const colId = column.displayColModel.peek().colId.peek();
      const typeInfo = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_4__.extractInfoFromColType)(column.type.peek());
      data[column.colId.peek()] = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_4__.reencodeAsAny)(this._baseView.tableModel.tableData.getValue(rowId, colId), typeInfo);
    }
    return data;
  }
  async allowSelectBy() {
    this._baseView.viewSection.allowSelectBy.set(true);
  }
  async setSelectedRows(rowIds) {
    this._baseView.viewSection.selectedRows.set(rowIds);
  }
  _visibleColumns() {
    const columns = this._baseView.viewSection.columns.peek();
    const hiddenCols = this._baseView.viewSection.hiddenColumns.peek().map((c) => c.id.peek());
    const mappings = this._baseView.viewSection.mappedColumns.peek();
    const mappedColumns = new Set(flatMap(Object.values(mappings || {})));
    const notHidden = (col) => !hiddenCols.includes(col.id.peek());
    const mapped = (col) => mappings && mappedColumns.has(col.colId.peek());
    return mappings ? columns.filter(mapped) : columns.filter(notHidden);
  }
}
class WidgetAPIImpl {
  constructor(_section) {
    this._section = _section;
  }
  async setOptions(options) {
    if (options === null || options === void 0 || typeof options !== "object") {
      throw new Error("options must be a valid JSON object");
    }
    this._section.activeCustomOptions(options);
  }
  async getOptions() {
    var _a;
    return (_a = this._section.activeCustomOptions.peek()) != null ? _a : null;
  }
  async clearOptions() {
    this._section.activeCustomOptions(null);
  }
  async setOption(key, value) {
    const options = __spreadValues({}, this._section.activeCustomOptions.peek());
    options[key] = value;
    this._section.activeCustomOptions(options);
  }
  getOption(key) {
    const options = this._section.activeCustomOptions.peek();
    return options == null ? void 0 : options[key];
  }
}
class BaseEventSource extends app_common_DisposableWithEvents__WEBPACK_IMPORTED_MODULE_2__.DisposableWithEvents {
  attach(frame) {
    this.listenTo(frame, "ready", this._ready.bind(this));
  }
  _ready() {
  }
  _notify(data) {
    if (this.isDisposed()) {
      return;
    }
    this.trigger("event", data);
  }
}
class RecordNotifier extends BaseEventSource {
  constructor(_baseView) {
    super();
    this._baseView = _baseView;
    this._debounced = debounce(() => this._update(), 0);
    this.autoDispose(_baseView.cursor.rowIndex.subscribe(this._debounced));
  }
  _update() {
    if (this.isDisposed()) {
      return;
    }
    const state = {
      tableId: this._baseView.viewSection.table().tableId(),
      rowId: this._baseView.cursor.getCursorPos().rowId || void 0,
      dataChange: false
    };
    this._notify(state);
  }
}
class ConfigNotifier extends BaseEventSource {
  constructor(_section, _accessLevel) {
    super();
    this._section = _section;
    this._accessLevel = _accessLevel;
    this._currentConfig = grainjs__WEBPACK_IMPORTED_MODULE_6__.Computed.create(this, (use) => {
      const options = use(this._section.activeCustomOptions);
      return options;
    });
    this._debounced = debounce(() => this._update(), 0);
    const subscribe = (obs) => {
      this.autoDispose(obs.addListener((cur, prev) => {
        if (isEqual(prev, cur)) {
          return;
        }
        this._debounced();
      }));
    };
    subscribe(this._currentConfig);
  }
  _ready() {
    this._debounced();
  }
  _update() {
    if (this.isDisposed()) {
      return;
    }
    this._notify({
      options: this._currentConfig.get(),
      settings: {
        accessLevel: this._accessLevel
      }
    });
  }
}
class TableNotifier extends BaseEventSource {
  constructor(_baseView) {
    super();
    this._baseView = _baseView;
    this._updateMapping = true;
    this._debounced = debounce(() => this._update(), 0);
    this.autoDispose(_baseView.viewSection.viewFields().subscribe(this._debounced.bind(this)));
    this.listenTo(_baseView.sortedRows, "rowNotify", this._debounced.bind(this));
    this.autoDispose(_baseView.sortedRows.getKoArray().subscribe(this._debounced.bind(this)));
    this.autoDispose(_baseView.viewSection.mappedColumns.subscribe(() => {
      this._updateMapping = true;
      this._debounced();
    }));
  }
  _ready() {
    this._debounced();
  }
  _update() {
    if (this.isDisposed()) {
      return;
    }
    const state = {
      tableId: this._baseView.viewSection.table().tableId(),
      rowId: this._baseView.cursor.getCursorPos().rowId || void 0,
      dataChange: true,
      mappingsChange: this._updateMapping
    };
    this._updateMapping = false;
    this._notify(state);
  }
}
class CustomSectionAPIImpl extends grainjs__WEBPACK_IMPORTED_MODULE_6__.Disposable {
  constructor(_section, _currentAccess, _promptCallback) {
    super();
    this._section = _section;
    this._currentAccess = _currentAccess;
    this._promptCallback = _promptCallback;
  }
  async mappings() {
    return this._section.mappedColumns.peek();
  }
  async configure(settings) {
    if (settings.hasCustomOptions !== void 0) {
      this._section.hasCustomOptions(settings.hasCustomOptions);
    }
    if (settings.requiredAccess && settings.requiredAccess !== this._currentAccess) {
      this._promptCallback(settings.requiredAccess);
    }
    if (settings.columns !== void 0) {
      this._section.columnsToMap(settings.columns);
    } else {
      this._section.columnsToMap(null);
    }
  }
}


/***/ }),

/***/ "./app/client/lib/DocPluginManager.ts":
/*!********************************************!*\
  !*** ./app/client/lib/DocPluginManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocPluginManager": () => (/* binding */ DocPluginManager)
/* harmony export */ });
/* harmony import */ var app_client_lib_SafeBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/SafeBrowser */ "./app/client/lib/SafeBrowser.ts");
/* harmony import */ var app_common_PluginInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/PluginInstance */ "./app/common/PluginInstance.ts");
/* harmony import */ var grain_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grain-rpc */ "./node_modules/grain-rpc/dist/lib/index.js");
/* harmony import */ var grain_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grain_rpc__WEBPACK_IMPORTED_MODULE_2__);



class DocPluginManager {
  constructor(localPlugins, _untrustedContentOrigin, _docComm, _clientScope) {
    this._untrustedContentOrigin = _untrustedContentOrigin;
    this._docComm = _docComm;
    this._clientScope = _clientScope;
    this.pluginsList = [];
    for (const plugin of localPlugins) {
      try {
        const pluginInstance = new app_common_PluginInstance__WEBPACK_IMPORTED_MODULE_1__.PluginInstance(plugin, (0,app_common_PluginInstance__WEBPACK_IMPORTED_MODULE_1__.createRpcLogger)(console, `PLUGIN ${plugin.id}:`));
        const components = plugin.manifest.components || {};
        const safeBrowser = pluginInstance.safeBrowser = new app_client_lib_SafeBrowser__WEBPACK_IMPORTED_MODULE_0__.SafeBrowser(pluginInstance, this._clientScope, this._untrustedContentOrigin, components.safeBrowser);
        if (components.safeBrowser) {
          pluginInstance.rpc.registerForwarder(components.safeBrowser, safeBrowser);
        }
        pluginInstance.rpc.registerForwarder("*", {
          forwardCall: (call) => this._docComm.forwardPluginRpc(plugin.id, call),
          forwardMessage: (msg) => this._docComm.forwardPluginRpc(plugin.id, msg)
        });
        this.pluginsList.push(pluginInstance);
      } catch (err) {
        console.error(`DocPluginManager: failed to instantiate ${plugin.id}: ${err.message}`);
      }
    }
  }
  receiveAction(action) {
    for (const plugin of this.pluginsList) {
      const safeBrowser = plugin.safeBrowser;
      if (safeBrowser) {
        safeBrowser.receiveAction(action);
      }
    }
  }
  makeAnonForwarder() {
    const rpc = new grain_rpc__WEBPACK_IMPORTED_MODULE_2__.Rpc({});
    rpc.queueOutgoingUntilReadyMessage();
    rpc.registerForwarder("*", {
      forwardCall: (call) => this._docComm.forwardPluginRpc("builtIn/core", call),
      forwardMessage: (msg) => this._docComm.forwardPluginRpc("builtIn/core", msg)
    });
    return rpc;
  }
}


/***/ }),

/***/ "./app/client/lib/HomePluginManager.ts":
/*!*********************************************!*\
  !*** ./app/client/lib/HomePluginManager.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePluginManager": () => (/* binding */ HomePluginManager)
/* harmony export */ });
/* harmony import */ var app_client_lib_SafeBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/SafeBrowser */ "./app/client/lib/SafeBrowser.ts");
/* harmony import */ var app_common_PluginInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/PluginInstance */ "./app/common/PluginInstance.ts");


class HomePluginManager {
  constructor(localPlugins, _untrustedContentOrigin, _clientScope) {
    this.pluginsList = [];
    for (const plugin of localPlugins) {
      try {
        const components = plugin.manifest.components || {};
        if (components.safePython || components.unsafeNode) {
          continue;
        }
        const importSources = plugin.manifest.contributions.importSources;
        if (!(importSources == null ? void 0 : importSources.some((i) => i.safeHome))) {
          continue;
        }
        const pluginInstance = new app_common_PluginInstance__WEBPACK_IMPORTED_MODULE_1__.PluginInstance(plugin, (0,app_common_PluginInstance__WEBPACK_IMPORTED_MODULE_1__.createRpcLogger)(console, `HOME PLUGIN ${plugin.id}:`));
        const safeBrowser = pluginInstance.safeBrowser = new app_client_lib_SafeBrowser__WEBPACK_IMPORTED_MODULE_0__.SafeBrowser(pluginInstance, _clientScope, _untrustedContentOrigin, components.safeBrowser);
        if (components.safeBrowser) {
          pluginInstance.rpc.registerForwarder(components.safeBrowser, safeBrowser);
        }
        const forwarder = new NotAvailableForwarder();
        pluginInstance.rpc.registerForwarder("*", {
          forwardCall: (call) => forwarder.forwardPluginRpc(plugin.id, call),
          forwardMessage: (msg) => forwarder.forwardPluginRpc(plugin.id, msg)
        });
        this.pluginsList.push(pluginInstance);
      } catch (err) {
        console.error(`HomePluginManager: failed to instantiate ${plugin.id}: ${err.message}`);
      }
    }
  }
}
class NotAvailableForwarder {
  async forwardPluginRpc(pluginId, msg) {
    throw new Error("This api is not available");
  }
}


/***/ }),

/***/ "./app/client/lib/ImportSourceElement.ts":
/*!***********************************************!*\
  !*** ./app/client/lib/ImportSourceElement.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportSourceElement": () => (/* binding */ ImportSourceElement)
/* harmony export */ });
/* harmony import */ var app_plugin_TypeCheckers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/plugin/TypeCheckers */ "./app/plugin/TypeCheckers.ts");

class ImportSourceElement {
  constructor(plugin, importSource) {
    this.plugin = plugin;
    this.importSource = importSource;
    this.importSourceStub = plugin.getStub(importSource.importSource, app_plugin_TypeCheckers__WEBPACK_IMPORTED_MODULE_0__.checkers.InternalImportSourceAPI);
  }
  static fromArray(pluginInstances) {
    const importSources = [];
    for (const plugin of pluginInstances) {
      const definitions = plugin.definition.manifest.contributions.importSources;
      if (definitions) {
        for (const importSource of definitions) {
          importSources.push(new ImportSourceElement(plugin, importSource));
        }
      }
    }
    return importSources;
  }
}


/***/ }),

/***/ "./app/client/lib/dblclick.ts":
/*!************************************!*\
  !*** ./app/client/lib/dblclick.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onDblClickMatchElem": () => (/* binding */ onDblClickMatchElem)
/* harmony export */ });
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");

const DOUBLE_TAP_INTERVAL_MS = 500;
function onDblClickMatchElem(elem, selector, callback) {
  grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.styleElem(elem, "touch-action", "manipulation");
  grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.onMatchElem(elem, selector, "dblclick", (ev, _elem) => {
    callback(ev, _elem);
  });
  let lastTapTime = 0;
  let lastTapElem = null;
  grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.onMatchElem(elem, selector, "touchend", (ev, _elem) => {
    const currentTime = Date.now();
    const tapLength = currentTime - lastTapTime;
    const sameElem = _elem === lastTapElem;
    lastTapTime = currentTime;
    lastTapElem = _elem;
    if (sameElem && tapLength < DOUBLE_TAP_INTERVAL_MS && tapLength > 0) {
      ev.preventDefault();
      callback(ev, _elem);
    }
  });
}


/***/ }),

/***/ "./app/client/lib/guessTimezone.ts":
/*!*****************************************!*\
  !*** ./app/client/lib/guessTimezone.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guessTimezone": () => (/* binding */ guessTimezone)
/* harmony export */ });
/* harmony import */ var app_client_lib_imports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/imports */ "./app/client/lib/imports.js");

async function guessTimezone() {
  const moment = await (0,app_client_lib_imports__WEBPACK_IMPORTED_MODULE_0__.loadMomentTimezone)();
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get("timezone") || moment.tz.guess();
}


/***/ }),

/***/ "./app/client/models/ColumnACIndexes.ts":
/*!**********************************************!*\
  !*** ./app/client/models/ColumnACIndexes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnACIndexes": () => (/* binding */ ColumnACIndexes)
/* harmony export */ });
/* harmony import */ var app_client_lib_ACIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/ACIndex */ "./app/client/lib/ACIndex.ts");
/* harmony import */ var app_client_models_ColumnCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/ColumnCache */ "./app/client/models/ColumnCache.ts");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");




class ColumnACIndexes {
  constructor(_tableData) {
    this._tableData = _tableData;
    this._columnCache = new app_client_models_ColumnCache__WEBPACK_IMPORTED_MODULE_1__.ColumnCache(this._tableData);
  }
  getColACIndex(colId, formatter) {
    return this._columnCache.getValue(colId, () => this._buildColACIndex(colId, formatter));
  }
  _buildColACIndex(colId, formatter) {
    const rowIds = this._tableData.getRowIds();
    const valColumn = this._tableData.getColValues(colId);
    if (!valColumn) {
      throw new app_client_models_errors__WEBPACK_IMPORTED_MODULE_2__.UserError(`Invalid column ${this._tableData.tableId}.${colId}`);
    }
    const items = valColumn.map((val, i) => {
      const rowId = rowIds[i];
      const text = formatter.formatAny(val);
      const cleanText = (0,app_client_lib_ACIndex__WEBPACK_IMPORTED_MODULE_0__.normalizeText)(text);
      return { rowId, text, cleanText };
    });
    items.sort(itemCompare);
    return new app_client_lib_ACIndex__WEBPACK_IMPORTED_MODULE_0__.ACIndexImpl(items);
  }
}
function itemCompare(a, b) {
  return (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_3__.localeCompare)(a.cleanText, b.cleanText) || (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_3__.localeCompare)(a.text, b.text) || (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_3__.nativeCompare)(a.rowId, b.rowId);
}


/***/ }),

/***/ "./app/client/models/ColumnCache.ts":
/*!******************************************!*\
  !*** ./app/client/models/ColumnCache.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnCache": () => (/* binding */ ColumnCache)
/* harmony export */ });
/* harmony import */ var app_common_DocActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/common/DocActions */ "./app/common/DocActions.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");


class ColumnCache {
  constructor(_tableData) {
    this._tableData = _tableData;
    this._cachedColIndexes = /* @__PURE__ */ new Map();
    this._tableData.tableActionEmitter.addListener(this._invalidateCache, this);
    this._tableData.dataLoadedEmitter.addListener(this._clearCache, this);
  }
  getValue(colId, calc) {
    return (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.getSetMapValue)(this._cachedColIndexes, colId, calc);
  }
  _invalidateCache(action) {
    if ((0,app_common_DocActions__WEBPACK_IMPORTED_MODULE_0__.isUpdateRecord)(action) || (0,app_common_DocActions__WEBPACK_IMPORTED_MODULE_0__.isBulkUpdateRecord)(action)) {
      const colValues = action[3];
      for (const colId of Object.keys(colValues)) {
        this._cachedColIndexes.delete(colId);
      }
    } else {
      this._clearCache();
    }
  }
  _clearCache() {
    this._cachedColIndexes.clear();
  }
}


/***/ }),

/***/ "./app/client/models/DocData.ts":
/*!**************************************!*\
  !*** ./app/client/models/DocData.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocData": () => (/* binding */ DocData)
/* harmony export */ });
/* harmony import */ var app_client_models_TableData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/TableData */ "./app/client/models/TableData.ts");
/* harmony import */ var app_common_DocData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/DocData */ "./app/common/DocData.ts");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");




const defaults = __webpack_require__(/*! lodash/defaults */ "./node_modules/lodash/defaults.js");
const gristNotify = window.gristNotify;
class DocData extends app_common_DocData__WEBPACK_IMPORTED_MODULE_1__.DocData {
  constructor(docComm, metaTableData) {
    super((tableId) => docComm.fetchTable(tableId), metaTableData);
    this.docComm = docComm;
    this.sendActionsEmitter = new grainjs__WEBPACK_IMPORTED_MODULE_3__.Emitter();
    this.sendActionsDoneEmitter = new grainjs__WEBPACK_IMPORTED_MODULE_3__.Emitter();
    this._bundlesPending = 0;
    this._nextDesc = null;
    this._lastActionNum = null;
    this._bundleSender = new BundleSender(this.docComm);
  }
  createTableData(tableId, tableData, colTypes) {
    return new app_client_models_TableData__WEBPACK_IMPORTED_MODULE_0__.TableData(this, tableId, tableData, colTypes);
  }
  getTable(tableId) {
    return super.getTable(tableId);
  }
  getMetaTable(tableId) {
    return super.getMetaTable(tableId);
  }
  async findColFromValues(values, n, optTableId) {
    try {
      return await this.docComm.findColFromValues(values, n, optTableId);
    } catch (e) {
      gristNotify(`Error finding matching columns: ${e.message}`);
      return [];
    }
  }
  getFormulaError(tableId, colId, rowId) {
    return this.docComm.getFormulaError(tableId, colId, rowId);
  }
  startBundlingActions(options) {
    if (this._bundlesPending >= 2) {
      throw new Error("Too many actions already pending");
    }
    this._bundlesPending++;
    let prepareResolve;
    const preparePromise = new Promise((resolve) => {
      prepareResolve = resolve;
    });
    let triggerFinalize;
    const triggerFinalizePromise = new Promise((resolve) => {
      triggerFinalize = resolve;
    });
    const doBundleActions = async () => {
      var _a;
      if (this._lastBundlePromise) {
        (_a = this._triggerBundleFinalize) == null ? void 0 : _a.call(this);
        await this._lastBundlePromise;
      }
      try {
        this._nextDesc = options.description;
        this._lastActionNum = null;
        this._triggerBundleFinalize = triggerFinalize;
        prepareResolve(options.prepare());
        this._shouldIncludeInBundle = options.shouldIncludeInBundle;
        await Promise.all([triggerFinalizePromise, preparePromise]);
        this._shouldIncludeInBundle = void 0;
        await options.finalize();
      } finally {
        this._shouldIncludeInBundle = void 0;
        this._triggerBundleFinalize = void 0;
        this._bundlesPending--;
        if (this._bundlesPending === 0) {
          this._lastBundlePromise = void 0;
        }
      }
    };
    const completionPromise = this._lastBundlePromise = doBundleActions();
    return { preparePromise, triggerFinalize, completionPromise };
  }
  async bundleActions(desc, callback, options = {}) {
    if (options.nestInActiveBundle && this._bundlesPending) {
      return await callback();
    }
    const bundlingInfo = this.startBundlingActions({
      description: desc,
      shouldIncludeInBundle: () => true,
      prepare: callback,
      finalize: async () => void 0
    });
    try {
      return await bundlingInfo.preparePromise;
    } finally {
      bundlingInfo.triggerFinalize();
      await bundlingInfo.completionPromise;
    }
  }
  sendActions(actions, optDesc) {
    return bluebird__WEBPACK_IMPORTED_MODULE_2__.Promise.resolve(this._sendActionsImpl(actions, optDesc));
  }
  sendAction(action, optDesc) {
    return this.sendActions([action], optDesc).then((retValues) => retValues[0]);
  }
  async _sendActionsImpl(actions, optDesc) {
    var _a;
    const eventData = { actions };
    this.sendActionsEmitter.emit(eventData);
    const options = { desc: optDesc };
    if (this._shouldIncludeInBundle && !this._shouldIncludeInBundle(actions)) {
      (_a = this._triggerBundleFinalize) == null ? void 0 : _a.call(this);
      await this._lastBundlePromise;
    }
    if (this._bundlesPending) {
      defaults(options, {
        desc: this._nextDesc,
        linkId: this._lastActionNum
      });
      this._nextDesc = null;
    }
    const result = await this._bundleSender.applyUserActions(actions, options);
    this._lastActionNum = result.actionNum;
    this.sendActionsDoneEmitter.emit(eventData);
    return result.retValues;
  }
}
class BundleSender {
  constructor(_docComm) {
    this._docComm = _docComm;
    this._options = {};
    this._actions = [];
  }
  applyUserActions(actions, options) {
    defaults(this._options, options);
    const start = this._actions.length;
    this._actions.push(...actions);
    const end = this._actions.length;
    return this._getSendPromise().then((result) => ({
      actionNum: result.actionNum,
      retValues: result.retValues.slice(start, end),
      isModification: result.isModification
    }));
  }
  _getSendPromise() {
    if (!this._sendPromise) {
      this._sendPromise = Promise.resolve().then(() => {
        this._sendPromise = void 0;
        const ret = this._docComm.applyUserActions(this._actions, this._options);
        this._options = {};
        this._actions = [];
        return ret;
      });
    }
    return this._sendPromise;
  }
}


/***/ }),

/***/ "./app/client/models/DocModel.ts":
/*!***************************************!*\
  !*** ./app/client/models/DocModel.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocModel": () => (/* binding */ DocModel),
/* harmony export */   "recordSet": () => (/* binding */ recordSet),
/* harmony export */   "refListRecords": () => (/* binding */ refListRecords),
/* harmony export */   "refRecord": () => (/* binding */ refRecord)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/memoize */ "./node_modules/lodash/memoize.js");
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_client_lib_koArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/lib/koArray */ "./app/client/lib/koArray.js");
/* harmony import */ var app_client_lib_koArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(app_client_lib_koArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_client_lib_koUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/lib/koUtil */ "./app/client/lib/koUtil.js");
/* harmony import */ var app_client_models_DataTableModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/models/DataTableModel */ "./app/client/models/DataTableModel.js");
/* harmony import */ var app_client_models_DataTableModel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(app_client_models_DataTableModel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/models/gristUrlState */ "./app/client/models/gristUrlState.ts");
/* harmony import */ var app_client_models_MetaTableModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/models/MetaTableModel */ "./app/client/models/MetaTableModel.js");
/* harmony import */ var app_client_models_MetaTableModel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(app_client_models_MetaTableModel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_client_models_rowset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/models/rowset */ "./app/client/models/rowset.ts");
/* harmony import */ var app_common_isHiddenTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/common/isHiddenTable */ "./app/common/isHiddenTable.ts");
/* harmony import */ var app_common_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/common/schema */ "./app/common/schema.ts");
/* harmony import */ var app_client_models_entities_ACLRuleRec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/client/models/entities/ACLRuleRec */ "./app/client/models/entities/ACLRuleRec.ts");
/* harmony import */ var app_client_models_entities_ColumnRec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/client/models/entities/ColumnRec */ "./app/client/models/entities/ColumnRec.ts");
/* harmony import */ var app_client_models_entities_DocInfoRec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/client/models/entities/DocInfoRec */ "./app/client/models/entities/DocInfoRec.ts");
/* harmony import */ var app_client_models_entities_FilterRec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/client/models/entities/FilterRec */ "./app/client/models/entities/FilterRec.ts");
/* harmony import */ var app_client_models_entities_PageRec__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/client/models/entities/PageRec */ "./app/client/models/entities/PageRec.ts");
/* harmony import */ var app_client_models_entities_TabBarRec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/client/models/entities/TabBarRec */ "./app/client/models/entities/TabBarRec.ts");
/* harmony import */ var app_client_models_entities_TableRec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/client/models/entities/TableRec */ "./app/client/models/entities/TableRec.ts");
/* harmony import */ var app_client_models_entities_ValidationRec__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/client/models/entities/ValidationRec */ "./app/client/models/entities/ValidationRec.ts");
/* harmony import */ var app_client_models_entities_ViewFieldRec__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/client/models/entities/ViewFieldRec */ "./app/client/models/entities/ViewFieldRec.ts");
/* harmony import */ var app_client_models_entities_ViewRec__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/client/models/entities/ViewRec */ "./app/client/models/entities/ViewRec.ts");
/* harmony import */ var app_client_models_entities_ViewSectionRec__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/client/models/entities/ViewSectionRec */ "./app/client/models/entities/ViewSectionRec.ts");
/* harmony import */ var app_client_models_entities_CellRec__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/client/models/entities/CellRec */ "./app/client/models/entities/CellRec.ts");
/* harmony import */ var app_plugin_objtypes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/plugin/objtypes */ "./app/plugin/objtypes.ts");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};























function recordSet(rowModel, tableModel, groupByField, options) {
  const opts = __spreadValues({ groupBy: groupByField, sortBy: "id" }, options);
  return app_client_lib_koUtil__WEBPACK_IMPORTED_MODULE_3__.computedAutoDispose(() => tableModel.createRowGroupModel(rowModel.id() || 0, opts), null, { pure: true });
}
function refRecord(tableModel, rowIdObs) {
  return knockout__WEBPACK_IMPORTED_MODULE_0__.pureComputed(() => tableModel.getRowModel(rowIdObs() || 0, true));
}
function refListRecords(tableModel, rowsIdObs) {
  return knockout__WEBPACK_IMPORTED_MODULE_0__.pureComputed(() => {
    const ids = (0,app_plugin_objtypes__WEBPACK_IMPORTED_MODULE_22__.decodeObject)(rowsIdObs());
    if (!Array.isArray(ids)) {
      return [];
    }
    return ids.map((id) => tableModel.getRowModel(id, true));
  });
}
class DocModel {
  constructor(docData) {
    this.docData = docData;
    this.docInfo = this._metaTableModel("_grist_DocInfo", app_client_models_entities_DocInfoRec__WEBPACK_IMPORTED_MODULE_12__.createDocInfoRec);
    this.tables = this._metaTableModel("_grist_Tables", app_client_models_entities_TableRec__WEBPACK_IMPORTED_MODULE_16__.createTableRec);
    this.columns = this._metaTableModel("_grist_Tables_column", app_client_models_entities_ColumnRec__WEBPACK_IMPORTED_MODULE_11__.createColumnRec);
    this.views = this._metaTableModel("_grist_Views", app_client_models_entities_ViewRec__WEBPACK_IMPORTED_MODULE_19__.createViewRec);
    this.viewSections = this._metaTableModel("_grist_Views_section", app_client_models_entities_ViewSectionRec__WEBPACK_IMPORTED_MODULE_20__.createViewSectionRec);
    this.viewFields = this._metaTableModel("_grist_Views_section_field", app_client_models_entities_ViewFieldRec__WEBPACK_IMPORTED_MODULE_18__.createViewFieldRec);
    this.tabBar = this._metaTableModel("_grist_TabBar", app_client_models_entities_TabBarRec__WEBPACK_IMPORTED_MODULE_15__.createTabBarRec);
    this.validations = this._metaTableModel("_grist_Validations", app_client_models_entities_ValidationRec__WEBPACK_IMPORTED_MODULE_17__.createValidationRec);
    this.pages = this._metaTableModel("_grist_Pages", app_client_models_entities_PageRec__WEBPACK_IMPORTED_MODULE_14__.createPageRec);
    this.rules = this._metaTableModel("_grist_ACLRules", app_client_models_entities_ACLRuleRec__WEBPACK_IMPORTED_MODULE_10__.createACLRuleRec);
    this.filters = this._metaTableModel("_grist_Filters", app_client_models_entities_FilterRec__WEBPACK_IMPORTED_MODULE_13__.createFilterRec);
    this.cells = this._metaTableModel("_grist_Cells", app_client_models_entities_CellRec__WEBPACK_IMPORTED_MODULE_21__.createCellRec);
    this.dataTables = {};
    this.dataTablesByRef = /* @__PURE__ */ new Map();
    this.allTabs = this.tabBar.createAllRowsModel("tabPos");
    this.editingFormula = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(false);
    this.showDocTourTable = (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_5__.urlState)().state.get().docPage === "GristDocTour";
    for (const model of this._metaTables) {
      model.loadData();
    }
    this.docInfoRow = this.docInfo.getRowModel(1);
    this.visibleTables = createVisibleTablesArray(this.tables);
    this.rawDataTables = createRawDataTablesArray(this.tables);
    this.rawSummaryTables = createRawSummaryTablesArray(this.tables);
    const visibleTableIds = knockout__WEBPACK_IMPORTED_MODULE_0__.computed(() => this.visibleTables.all().map((t) => t.tableId()));
    this.visibleTableIds = app_client_lib_koArray__WEBPACK_IMPORTED_MODULE_2__.syncedKoArray(visibleTableIds);
    const allTableMetaRows = this.tables.createAllRowsModel("id");
    allTableMetaRows.subscribeForEach({
      add: (r) => this._onAddTable(r),
      remove: (r) => this._onRemoveTable(r)
    });
    const allPages = this.pages.createAllRowsModel("pagePos");
    this.menuPages = knockout__WEBPACK_IMPORTED_MODULE_0__.computed(() => {
      const pagesToShow = allPages.all().filter((p) => !p.isSpecial()).sort((a, b) => a.pagePos() - b.pagePos());
      const children = lodash_memoize__WEBPACK_IMPORTED_MODULE_1___default()((page) => {
        const following = pagesToShow.slice(pagesToShow.indexOf(page) + 1);
        const firstOutside = following.findIndex((p) => p.indentation() <= page.indentation());
        return firstOutside >= 0 ? following.slice(0, firstOutside) : following;
      });
      const hide = lodash_memoize__WEBPACK_IMPORTED_MODULE_1___default()((page) => page.isCensored() && children(page).every((p) => hide(p)));
      return pagesToShow.filter((p) => !hide(p));
    });
    this.visibleDocPages = knockout__WEBPACK_IMPORTED_MODULE_0__.computed(() => allPages.all().filter((p) => !p.isHidden()));
  }
  _metaTableModel(tableId, rowConstructor) {
    const fields = Object.keys(app_common_schema__WEBPACK_IMPORTED_MODULE_9__.schema[tableId]);
    const model = new (app_client_models_MetaTableModel__WEBPACK_IMPORTED_MODULE_6___default())(this, this.docData.getTable(tableId), fields, rowConstructor);
    if (!this._metaTables) {
      this._metaTables = [];
    }
    this._metaTables.push(model);
    return model;
  }
  _onAddTable(tableMetaRow) {
    let tid = tableMetaRow.tableId();
    const dtm = new (app_client_models_DataTableModel__WEBPACK_IMPORTED_MODULE_4___default())(this, this.docData.getTable(tid), tableMetaRow);
    this.dataTables[tid] = dtm;
    this.dataTablesByRef.set(tableMetaRow.getRowId(), dtm);
    tableMetaRow.tableId.subscribe((newTableId) => {
      this.dataTables[newTableId] = this.dataTables[tid];
      delete this.dataTables[tid];
      tid = newTableId;
    });
  }
  _onRemoveTable(tableMetaRow) {
    const tid = tableMetaRow.tableId();
    this.dataTables[tid].dispose();
    delete this.dataTables[tid];
    this.dataTablesByRef.delete(tableMetaRow.getRowId());
  }
}
function createTablesArray(tablesModel, filterFunc = (_row) => true) {
  const rowSource = new app_client_models_rowset__WEBPACK_IMPORTED_MODULE_7__.FilteredRowSource(filterFunc);
  rowSource.subscribeTo(tablesModel);
  return tablesModel._createRowSetModel(rowSource, "tableId");
}
function createVisibleTablesArray(tablesModel) {
  return createTablesArray(tablesModel, (r) => !(0,app_common_isHiddenTable__WEBPACK_IMPORTED_MODULE_8__.isHiddenTable)(tablesModel.tableData, r));
}
function createRawDataTablesArray(tablesModel) {
  return createTablesArray(tablesModel, (r) => !(0,app_common_isHiddenTable__WEBPACK_IMPORTED_MODULE_8__.isSummaryTable)(tablesModel.tableData, r));
}
function createRawSummaryTablesArray(tablesModel) {
  return createTablesArray(tablesModel, (r) => (0,app_common_isHiddenTable__WEBPACK_IMPORTED_MODULE_8__.isSummaryTable)(tablesModel.tableData, r));
}


/***/ }),

/***/ "./app/client/models/HomeModel.ts":
/*!****************************************!*\
  !*** ./app/client/models/HomeModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModelImpl": () => (/* binding */ HomeModelImpl),
/* harmony export */   "getTimeFromNow": () => (/* binding */ getTimeFromNow),
/* harmony export */   "makeLocalViewSettings": () => (/* binding */ makeLocalViewSettings)
/* harmony export */ });
/* harmony import */ var app_client_lib_guessTimezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/guessTimezone */ "./app/client/lib/guessTimezone.ts");
/* harmony import */ var app_client_lib_HomePluginManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/lib/HomePluginManager */ "./app/client/lib/HomePluginManager.ts");
/* harmony import */ var app_client_lib_ImportSourceElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/lib/ImportSourceElement */ "./app/client/lib/ImportSourceElement.ts");
/* harmony import */ var app_client_lib_localStorageObs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/lib/localStorageObs */ "./app/client/lib/localStorageObs.ts");
/* harmony import */ var app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/models/AppModel */ "./app/client/models/AppModel.ts");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/models/gristUrlState */ "./app/client/models/gristUrlState.ts");
/* harmony import */ var app_client_models_WorkspaceInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/models/WorkspaceInfo */ "./app/client/models/WorkspaceInfo.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var app_common_Prefs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/common/Prefs */ "./app/common/Prefs.ts");
/* harmony import */ var app_common_roles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/common/roles */ "./app/common/roles.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var _a;













const flatten = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
const sortBy = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
const DELAY_BEFORE_SPINNER_MS = 500;
function getTimeFromNow(utcDateISO) {
  const time = moment__WEBPACK_IMPORTED_MODULE_12___default().utc(utcDateISO);
  const now = moment__WEBPACK_IMPORTED_MODULE_12___default()();
  const diff = now.diff(time, "s");
  if (diff < 0 && diff > -60) {
    return now.fromNow();
  }
  return time.fromNow();
}
class HomeModelImpl extends grainjs__WEBPACK_IMPORTED_MODULE_11__.Disposable {
  constructor(_app, clientScope) {
    super();
    this._app = _app;
    this.pageType = "home";
    this.currentPage = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_6__.urlState)().state, (use, s) => s.homePage || (s.ws !== void 0 ? "workspace" : "all"));
    this.currentWSId = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_6__.urlState)().state, (use, s) => s.ws);
    this.workspaces = grainjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create(this, []);
    this.loading = grainjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create(this, true);
    this.available = grainjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create(this, false);
    this.singleWorkspace = grainjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create(this, true);
    this.trashWorkspaces = grainjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create(this, []);
    this.templateWorkspaces = grainjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create(this, []);
    this.importSources = grainjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create(this, []);
    this.currentWS = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, (use) => use(this.workspaces).find((ws) => ws.id === use(this.currentWSId)));
    this.currentWSPinnedDocs = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this.currentPage, this.currentWS, (use, page, ws) => {
      const docs = page === "all" ? flatten(use(this.workspaces).map((w) => w.docs)) : ws ? ws.docs : [];
      return sortBy(docs.filter((doc) => doc.isPinned), (doc) => doc.name.toLowerCase());
    });
    this.featuredTemplates = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this.templateWorkspaces, (_use, templates) => {
      const featuredTemplates = flatten(templates.map((t) => t.docs)).filter((t) => t.isPinned);
      return sortBy(featuredTemplates, (t) => t.name.toLowerCase());
    });
    this.otherSites = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this.currentPage, this.app.topAppModel.orgs, (_use, page, orgs) => {
      if (page !== "all") {
        return [];
      }
      const currentOrg = this._app.currentOrg;
      if (!currentOrg) {
        return [];
      }
      const isPersonalOrg = currentOrg.owner;
      if (!isPersonalOrg && (currentOrg.access !== "viewers" || !currentOrg.public)) {
        return [];
      }
      return orgs.filter((org) => org.id !== currentOrg.id);
    });
    this.newDocWorkspace = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this.currentPage, this.currentWS, (use, page, ws) => {
      if (!this.app.currentValidUser) {
        return "unsaved";
      }
      if (page === "trash") {
        return null;
      }
      const destWS = ["all", "templates"].includes(page) ? use(this.workspaces)[0] || null : ws;
      return destWS && app_common_roles__WEBPACK_IMPORTED_MODULE_10__.canEdit(destWS.access) ? destWS : null;
    });
    this.showIntro = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this.workspaces, (use, wss) => wss.every((ws) => ws.isSupportWorkspace || ws.docs.length === 0));
    this.shouldShowAddNewTip = grainjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create(this, !this._app.behavioralPromptsManager.hasSeenTip("addNew"));
    this._userOrgPrefs = grainjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create(this, (_a = this._app.currentOrg) == null ? void 0 : _a.userOrgPrefs);
    if (!this.app.currentValidUser) {
      const viewSettings = makeLocalViewSettings(null, "all");
      this.currentSort = viewSettings.currentSort;
      this.currentView = viewSettings.currentView;
    } else {
      this.currentSort = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._userOrgPrefs, (use, prefs) => app_common_Prefs__WEBPACK_IMPORTED_MODULE_9__.SortPref.parse(prefs == null ? void 0 : prefs.docMenuSort) || "name").onWrite((s) => this._saveUserOrgPref("docMenuSort", s));
      this.currentView = grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(this, this._userOrgPrefs, (use, prefs) => app_common_Prefs__WEBPACK_IMPORTED_MODULE_9__.ViewPref.parse(prefs == null ? void 0 : prefs.docMenuView) || getViewPrefDefault(use(this.workspaces))).onWrite((s) => this._saveUserOrgPref("docMenuView", s));
    }
    this.autoDispose((0,grainjs__WEBPACK_IMPORTED_MODULE_11__.subscribe)(this.currentPage, this.currentWSId, (use) => this._updateWorkspaces().catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_4__.reportError)));
    const pluginManager = new app_client_lib_HomePluginManager__WEBPACK_IMPORTED_MODULE_1__.HomePluginManager(_app.topAppModel.plugins, _app.topAppModel.getUntrustedContentOrigin(), clientScope);
    const importSources = app_client_lib_ImportSourceElement__WEBPACK_IMPORTED_MODULE_2__.ImportSourceElement.fromArray(pluginManager.pluginsList);
    this.importSources.set(importSources);
    this._app.refreshOrgUsage().catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_4__.reportError);
  }
  get app() {
    return this._app;
  }
  async createWorkspace(name) {
    const org = this._app.currentOrg;
    if (!org) {
      return;
    }
    this._checkForDuplicates(name);
    await this._app.api.newWorkspace({ name }, org.id);
    await this._updateWorkspaces();
  }
  async renameWorkspace(id, name) {
    this._checkForDuplicates(name);
    await this._app.api.renameWorkspace(id, name);
    await this._updateWorkspaces();
  }
  async deleteWorkspace(id, forever) {
    await (forever ? this._app.api.deleteWorkspace(id) : this._app.api.softDeleteWorkspace(id));
    await this._updateWorkspaces();
  }
  async restoreWorkspace(ws) {
    await this._app.api.undeleteWorkspace(ws.id);
    await this._updateWorkspaces();
    (0,app_client_models_errors__WEBPACK_IMPORTED_MODULE_5__.reportMessage)(`Workspace "${ws.name}" restored`);
  }
  async createDoc(name, workspaceId) {
    if (workspaceId === "unsaved") {
      const timezone = await (0,app_client_lib_guessTimezone__WEBPACK_IMPORTED_MODULE_0__.guessTimezone)();
      return await this._app.api.newUnsavedDoc({ timezone });
    }
    const id = await this._app.api.newDoc({ name }, workspaceId);
    await this._updateWorkspaces();
    return id;
  }
  async renameDoc(docId, name) {
    await this._app.api.renameDoc(docId, name);
    await this._updateWorkspaces();
  }
  async deleteDoc(docId, forever) {
    await (forever ? this._app.api.deleteDoc(docId) : this._app.api.softDeleteDoc(docId));
    await this._updateWorkspaces();
  }
  async restoreDoc(doc) {
    await this._app.api.undeleteDoc(doc.id);
    await this._updateWorkspaces();
    (0,app_client_models_errors__WEBPACK_IMPORTED_MODULE_5__.reportMessage)(`Document "${doc.name}" restored`);
  }
  async pinUnpinDoc(docId, pin) {
    await (pin ? this._app.api.pinDoc(docId) : this._app.api.unpinDoc(docId));
    await this._updateWorkspaces();
  }
  async moveDoc(docId, workspaceId) {
    await this._app.api.moveDoc(docId, workspaceId);
    await this._updateWorkspaces();
  }
  _checkForDuplicates(name) {
    if (this.workspaces.get().find((ws) => ws.name === name)) {
      throw new app_client_models_errors__WEBPACK_IMPORTED_MODULE_5__.UserError("Name already exists. Please choose a different name.");
    }
  }
  async _updateWorkspaces() {
    if (this.isDisposed()) {
      return;
    }
    const org = this._app.currentOrg;
    if (!org) {
      this.workspaces.set([]);
      this.trashWorkspaces.set([]);
      this.templateWorkspaces.set([]);
      return;
    }
    this.loading.set(true);
    const currentPage = this.currentPage.get();
    const promises = [
      this._fetchWorkspaces(org.id, false).catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_4__.reportError),
      currentPage === "trash" ? this._fetchWorkspaces(org.id, true).catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_4__.reportError) : null,
      this._maybeFetchTemplates()
    ];
    const promise = Promise.all(promises);
    if (await (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_8__.isLongerThan)(promise, DELAY_BEFORE_SPINNER_MS)) {
      this.loading.set("slow");
    }
    const [wss, trashWss, templateWss] = await promise;
    if (this.isDisposed()) {
      return;
    }
    (0,grainjs__WEBPACK_IMPORTED_MODULE_11__.bundleChanges)(() => {
      this.workspaces.set(wss || []);
      this.trashWorkspaces.set(trashWss || []);
      this.templateWorkspaces.set(templateWss || []);
      this.loading.set(false);
      this.available.set(!!wss);
      const nonSupportWss = Array.isArray(wss) ? wss.filter((ws) => !ws.isSupportWorkspace) : null;
      this.singleWorkspace.set(!!nonSupportWss && nonSupportWss.length === 1 && _isSingleWorkspaceMode(this._app));
    });
  }
  async _fetchWorkspaces(orgId, forRemoved) {
    var _a2;
    let api = this._app.api;
    if (forRemoved) {
      api = api.forRemoved();
    }
    const wss = await api.getOrgWorkspaces(orgId);
    if (this.isDisposed()) {
      return null;
    }
    for (const ws of wss) {
      ws.docs = sortBy(ws.docs, (doc) => doc.name.toLowerCase());
      if (forRemoved) {
        for (const doc of ws.docs) {
          doc.removedAt = doc.removedAt || ws.removedAt;
        }
      }
      for (const doc of ws.docs) {
        doc.workspace = (_a2 = doc.workspace) != null ? _a2 : ws;
      }
    }
    return sortBy(wss, (ws) => [
      ws.isSupportWorkspace,
      (0,app_client_models_WorkspaceInfo__WEBPACK_IMPORTED_MODULE_7__.ownerName)(this._app, ws).toLowerCase(),
      ws.name.toLowerCase()
    ]);
  }
  async _maybeFetchTemplates() {
    var _a2;
    const currentPage = this.currentPage.get();
    const shouldFetchTemplates = ["all", "templates"].includes(currentPage);
    if (!shouldFetchTemplates) {
      return null;
    }
    let templateWss = [];
    try {
      const onlyFeatured = currentPage === "all";
      templateWss = await this._app.api.getTemplates(onlyFeatured);
    } catch (e) {
      return null;
    }
    if (this.isDisposed()) {
      return null;
    }
    for (const ws of templateWss) {
      for (const doc of ws.docs) {
        doc.workspace = (_a2 = doc.workspace) != null ? _a2 : ws;
      }
      ws.docs = sortBy(ws.docs, (doc) => doc.name.toLowerCase());
    }
    return templateWss;
  }
  async _saveUserOrgPref(key, value) {
    const org = this._app.currentOrg;
    if (org) {
      org.userOrgPrefs = __spreadProps(__spreadValues({}, org.userOrgPrefs), { [key]: value });
      this._userOrgPrefs.set(org.userOrgPrefs);
      await this._app.api.updateOrg("current", { userOrgPrefs: org.userOrgPrefs });
    }
  }
}
function _isSingleWorkspaceMode(app) {
  return app.currentFeatures.maxWorkspacesPerOrg === 1;
}
function getViewPrefDefault(workspaces) {
  const userWorkspaces = workspaces.filter((ws) => !ws.isSupportWorkspace);
  const numDocs = userWorkspaces.reduce((sum, ws) => sum + ws.docs.length, 0);
  const pinnedDocs = userWorkspaces.some((ws) => ws.docs.some((doc) => doc.isPinned));
  return numDocs > 4 || pinnedDocs ? "list" : "icons";
}
function makeLocalViewSettings(home, wsId) {
  var _a2;
  const userId = ((_a2 = home == null ? void 0 : home.app.currentUser) == null ? void 0 : _a2.id) || 0;
  const sort = (0,app_client_lib_localStorageObs__WEBPACK_IMPORTED_MODULE_3__.localStorageObs)(`u=${userId}:ws=${wsId}:sort`);
  const view = (0,app_client_lib_localStorageObs__WEBPACK_IMPORTED_MODULE_3__.localStorageObs)(`u=${userId}:ws=${wsId}:view`);
  return {
    currentSort: grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(null, (use) => app_common_Prefs__WEBPACK_IMPORTED_MODULE_9__.SortPref.parse(use(sort)) || (home ? use(home.currentSort) : "name")).onWrite((val) => sort.set(val)),
    currentView: grainjs__WEBPACK_IMPORTED_MODULE_11__.Computed.create(null, (use) => app_common_Prefs__WEBPACK_IMPORTED_MODULE_9__.ViewPref.parse(use(view)) || (wsId === "trash" ? "list" : home ? use(home.currentView) : "icons")).onWrite((val) => view.set(val))
  };
}


/***/ }),

/***/ "./app/client/models/RuleOwner.ts":
/*!****************************************!*\
  !*** ./app/client/models/RuleOwner.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeRule": () => (/* binding */ removeRule)
/* harmony export */ });
async function removeRule(docModel, owner, index) {
  var _a, _b;
  const col = owner.rulesCols.peek()[index];
  if (!col) {
    throw new Error(`There is no rule at index ${index}`);
  }
  const newStyles = (_b = (_a = owner.rulesStyles.peek()) == null ? void 0 : _a.slice()) != null ? _b : [];
  if (newStyles.length >= index) {
    newStyles.splice(index, 1);
  } else {
    console.debug(`There are not style options at index ${index}`);
  }
  await docModel.docData.bundleActions("Remove conditional rule", () => Promise.all([
    owner.rulesStyles.setAndSave(newStyles),
    docModel.docData.sendAction(["RemoveColumn", owner.tableId.peek(), col.colId.peek()])
  ]));
}


/***/ }),

/***/ "./app/client/models/TableData.ts":
/*!****************************************!*\
  !*** ./app/client/models/TableData.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableData": () => (/* binding */ TableData)
/* harmony export */ });
/* harmony import */ var app_client_models_ColumnACIndexes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/ColumnACIndexes */ "./app/client/models/ColumnACIndexes.ts");
/* harmony import */ var app_client_models_ColumnCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/ColumnCache */ "./app/client/models/ColumnCache.ts");
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var app_common_TableData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/common/TableData */ "./app/common/TableData.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");






class TableData extends app_common_TableData__WEBPACK_IMPORTED_MODULE_4__.TableData {
  constructor(docData, tableId, tableData, columnTypes) {
    super(tableId, tableData, columnTypes);
    this.docData = docData;
    this.tableActionEmitter = new grainjs__WEBPACK_IMPORTED_MODULE_5__.Emitter();
    this.dataLoadedEmitter = new grainjs__WEBPACK_IMPORTED_MODULE_5__.Emitter();
    this.columnACIndexes = new app_client_models_ColumnACIndexes__WEBPACK_IMPORTED_MODULE_0__.ColumnACIndexes(this);
    this._columnErrorCounts = new app_client_models_ColumnCache__WEBPACK_IMPORTED_MODULE_1__.ColumnCache(this);
  }
  loadData(tableData) {
    const oldRowIds = super.loadData(tableData);
    if (this.dataLoadedEmitter) {
      this.dataLoadedEmitter.emit(oldRowIds, this.getRowIds());
    }
    return oldRowIds;
  }
  loadPartial(data) {
    super.loadPartial(data);
    this.dataLoadedEmitter.emit([], data[2]);
  }
  unloadPartial(rowIds) {
    super.unloadPartial(rowIds);
    this.dataLoadedEmitter.emit(rowIds, []);
  }
  countErrors(colId) {
    return this._columnErrorCounts.getValue(colId, () => {
      const values = this.getColValues(colId);
      return values && (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_3__.countIf)(values, app_common_gristTypes__WEBPACK_IMPORTED_MODULE_2__.isRaisedException);
    });
  }
  sendTableActions(actions, optDesc) {
    actions.forEach((action) => action.splice(1, 0, this.tableId));
    return this.docData.sendActions(actions, optDesc);
  }
  sendTableAction(action, optDesc) {
    if (!action) {
      return;
    }
    action.splice(1, 0, this.tableId);
    return this.docData.sendAction(action, optDesc);
  }
  receiveAction(action) {
    const applied = super.receiveAction(action);
    if (applied) {
      this.tableActionEmitter.emit(action);
    }
    return applied;
  }
}


/***/ }),

/***/ "./app/client/models/ViewFieldConfig.ts":
/*!**********************************************!*\
  !*** ./app/client/models/ViewFieldConfig.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewFieldConfig": () => (/* binding */ ViewFieldConfig)
/* harmony export */ });
/* harmony import */ var app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/modelUtil */ "./app/client/models/modelUtil.js");
/* harmony import */ var app_client_widgets_UserType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/widgets/UserType */ "./app/client/widgets/UserType.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/intersection */ "./node_modules/lodash/intersection.js");
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_zip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/zip */ "./node_modules/lodash/zip.js");
/* harmony import */ var lodash_zip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_zip__WEBPACK_IMPORTED_MODULE_6__);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};







class ViewFieldConfig {
  constructor(_field, _docModel) {
    this._field = _field;
    this._docModel = _docModel;
    const owner = _field;
    this.fields = owner.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed(() => {
      const list = this._field.viewSection().selectedFields();
      if (!list || !list.length) {
        return [_field];
      }
      return list.filter((f) => !f.isDisposed() && !f.column().isDisposed());
    }));
    this.multiselect = owner.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed(() => this.fields().length > 1));
    this.sameWidgets = owner.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed(() => {
      var _a;
      const list = this.fields();
      if (list.length <= 1) {
        return true;
      }
      const widgets = list.map((c) => {
        var _a2, _b;
        return Object.keys((_b = (_a2 = app_client_widgets_UserType__WEBPACK_IMPORTED_MODULE_1__.typeDefs[c.column().pureType()]) == null ? void 0 : _a2.widgets) != null ? _b : {});
      });
      return lodash_intersection__WEBPACK_IMPORTED_MODULE_4___default()(...widgets).length === ((_a = widgets[0]) == null ? void 0 : _a.length);
    }));
    this.widget = owner.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed({
      read: () => {
        if (!this.multiselect()) {
          return this._field.widget();
        }
        const values = this.fields().map((f) => f.widget());
        if (allSame(values)) {
          return values[0];
        } else {
          return void 0;
        }
      },
      write: (widget) => {
        for (const field of this.fields.peek()) {
          const previous = field.widgetOptionsJson.peek();
          field.widgetOptionsJson.setAndSave({
            widget,
            fillColor: previous.fillColor,
            textColor: previous.textColor
          }).catch(reportError);
        }
      }
    }));
    const commonOptions = owner.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed(() => {
      var _a, _b;
      const fields = this.fields();
      let options2 = null;
      for (const field of fields) {
        const widget = field.widget() || "";
        const widgetOptions = (_b = (_a = app_client_widgets_UserType__WEBPACK_IMPORTED_MODULE_1__.typeDefs[field.column().pureType()]) == null ? void 0 : _a.widgets[widget]) == null ? void 0 : _b.options;
        if (!widgetOptions) {
          continue;
        }
        if (!options2) {
          options2 = new Set(Object.keys(widgetOptions));
        } else {
          const newOptions = new Set(Object.keys(widgetOptions));
          for (const key of options2) {
            if (!newOptions.has(key)) {
              options2.delete(key);
            }
          }
        }
      }
      return options2 != null ? options2 : /* @__PURE__ */ new Set();
    }));
    const options = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_0__.savingComputed({
      read: () => {
        var _a;
        if (!this.multiselect()) {
          return this._field.widgetOptionsJson();
        }
        const result = {};
        const optionList = this.fields().map((f) => f.widgetOptionsJson());
        const common = commonOptions();
        for (const key of common) {
          result[key] = null;
          if (allSame(optionList.map((v) => v[key]))) {
            result[key] = (_a = optionList[0][key]) != null ? _a : null;
          }
        }
        return result;
      },
      write: (setter, value) => {
        if (!this.multiselect.peek()) {
          return setter(this._field.widgetOptionsJson, value);
        }
        value = __spreadValues({}, value);
        for (const key of Object.keys(value)) {
          if (value[key] === null) {
            delete value[key];
          }
        }
        for (const item of this.fields.peek()) {
          const previous = item.widgetOptionsJson.peek();
          setter(item.widgetOptionsJson, __spreadValues(__spreadValues({}, previous), value));
        }
      }
    });
    this.options = owner.autoDispose(extendObservable(app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_0__.objObservable(options), {
      disabled: (prop) => knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed(() => !commonOptions().has(prop)),
      mixed: (prop) => knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed(() => !allSame(this.fields().map((f) => f.widgetOptionsJson.prop(prop)()))),
      empty: (prop) => knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed(() => allEmpty(this.fields().map((f) => f.widgetOptionsJson.prop(prop)())))
    }));
    this.wrap = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_0__.fieldWithDefault(this.options.prop("wrap"), () => this._field.viewSection().parentKey() !== "record");
    this.alignment = this.options.prop("alignment");
    this.style = knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed(() => {
      const fields = this.fields();
      const multiSelect = fields.length > 1;
      const savableOptions = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_0__.savingComputed({
        read: () => {
          var _a;
          if (!multiSelect) {
            return this._field.widgetOptionsJson();
          }
          const result2 = {};
          const optionList = fields.map((f) => f.widgetOptionsJson());
          for (const key of [
            "textColor",
            "fillColor",
            "fontBold",
            "fontItalic",
            "fontUnderline",
            "fontStrikethrough"
          ]) {
            result2[key] = null;
            if (allSame(optionList.map((v) => v[key]))) {
              result2[key] = (_a = optionList[0][key]) != null ? _a : null;
            }
          }
          return result2;
        },
        write: (setter, value) => {
          if (!multiSelect) {
            return setter(this._field.widgetOptionsJson, value);
          }
          value = __spreadValues({}, value);
          for (const key of Object.keys(value)) {
            if (value[key] === null) {
              delete value[key];
            }
          }
          for (const item of fields) {
            const previous = item.widgetOptionsJson.peek();
            setter(item.widgetOptionsJson, __spreadValues(__spreadValues({}, previous), value));
          }
        }
      });
      const state = fields.map((f) => f.style.peek());
      const result = extendObservable(app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_0__.objObservable(savableOptions), {
        mixed: (prop) => knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed(() => !allSame(fields.map((f) => f.widgetOptionsJson.prop(prop)()))),
        empty: (prop) => knockout__WEBPACK_IMPORTED_MODULE_3__.pureComputed(() => allEmpty(fields.map((f) => f.widgetOptionsJson.prop(prop)())))
      });
      result.revert = () => {
        lodash_zip__WEBPACK_IMPORTED_MODULE_6___default()(fields, state).forEach(([f, s]) => f.style(s));
      };
      return result;
    });
  }
  async updateChoices(renames, options) {
    const hasRenames = !!Object.entries(renames).length;
    const tableId = this._field.column.peek().table.peek().tableId.peek();
    if (this.multiselect.peek()) {
      this._field.config.options.update(options);
      const colIds = this.fields.peek().map((f) => f.colId.peek());
      return this._docModel.docData.bundleActions("Update choices configuration", () => Promise.all([
        this._field.config.options.save(),
        !hasRenames ? null : this._docModel.docData.sendActions(colIds.map((colId) => ["RenameChoices", tableId, colId, renames]))
      ]));
    } else {
      const column = this._field.column.peek();
      const actionOptions = { nestInActiveBundle: column.isTransforming.peek() };
      this._field.widgetOptionsJson.update(options);
      return this._docModel.docData.bundleActions("Update choices configuration", () => Promise.all([
        this._field.widgetOptionsJson.save(),
        !hasRenames ? null : this._docModel.docData.sendAction(["RenameChoices", tableId, column.colId.peek(), renames])
      ]), actionOptions);
    }
  }
}
function allSame(arr) {
  if (arr.length <= 1) {
    return true;
  }
  const first = (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_2__.ifNotSet)(arr[0], null);
  const same = arr.every((next) => {
    return lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()((0,app_common_gutil__WEBPACK_IMPORTED_MODULE_2__.ifNotSet)(next, null), first);
  });
  return same;
}
function allEmpty(arr) {
  if (arr.length === 0) {
    return true;
  }
  return arr.every((item) => (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_2__.ifNotSet)(item, null) === null);
}
function extendObservable(obs, options) {
  const result = obs;
  for (const key of Object.keys(options)) {
    const cacheKey = `__${key}`;
    result[cacheKey] = /* @__PURE__ */ new Map();
    result[key] = (prop) => {
      if (!result[cacheKey].has(prop)) {
        result[cacheKey].set(prop, options[key](prop));
      }
      return result[cacheKey].get(prop);
    };
  }
  return result;
}


/***/ }),

/***/ "./app/client/models/entities/ACLRuleRec.ts":
/*!**************************************************!*\
  !*** ./app/client/models/entities/ACLRuleRec.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createACLRuleRec": () => (/* binding */ createACLRuleRec)
/* harmony export */ });
function createACLRuleRec(docModel) {
}


/***/ }),

/***/ "./app/client/models/entities/CellRec.ts":
/*!***********************************************!*\
  !*** ./app/client/models/entities/CellRec.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCellRec": () => (/* binding */ createCellRec)
/* harmony export */ });
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/models/modelUtil */ "./app/client/models/modelUtil.js");
/* harmony import */ var app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/models/DocModel */ "./app/client/models/DocModel.ts");





function createCellRec(docModel) {
  this.hidden = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(() => (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_0__.isCensored)(this.content()));
  this.column = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_3__.refRecord)(docModel.columns, this.colRef);
  this.table = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_3__.refRecord)(docModel.tables, this.tableRef);
  this.parent = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_3__.refRecord)(docModel.cells, this.parentId);
  this.children = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_3__.recordSet)(this, docModel.cells, "parentId");
  const properContent = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.savingComputed({
    read: () => this.hidden() ? "{}" : this.content(),
    write: (setter, val) => setter(this.content, val)
  });
  const optionJson = (0,app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.jsonObservable)(properContent);
  this.text = optionJson.prop("text");
  this.userName = optionJson.prop("userName");
  this.timeCreated = optionJson.prop("timeCreated");
  this.timeUpdated = optionJson.prop("timeUpdated");
  this.resolved = optionJson.prop("resolved");
  this.resolvedBy = optionJson.prop("resolvedBy");
}


/***/ }),

/***/ "./app/client/models/entities/ColumnRec.ts":
/*!*************************************************!*\
  !*** ./app/client/models/entities/ColumnRec.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createColumnRec": () => (/* binding */ createColumnRec),
/* harmony export */   "formatterForRec": () => (/* binding */ formatterForRec)
/* harmony export */ });
/* harmony import */ var app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/DocModel */ "./app/client/models/DocModel.ts");
/* harmony import */ var app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/modelUtil */ "./app/client/models/modelUtil.js");
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");
/* harmony import */ var app_common_ValueFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/ValueFormatter */ "./app/common/ValueFormatter.ts");
/* harmony import */ var app_common_ValueParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/common/ValueParser */ "./app/common/ValueParser.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_5__);







function createColumnRec(docModel) {
  this.table = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.tables, this.parentId);
  this.widgetOptionsJson = (0,app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_1__.jsonObservable)(this.widgetOptions);
  this.viewFields = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.recordSet)(this, docModel.viewFields, "colRef");
  this.summarySource = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.columns, this.summarySourceCol);
  this.cells = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.recordSet)(this, docModel.cells, "colRef");
  this.isEmpty = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => this.isFormula() && this.formula() === "");
  this.isRealFormula = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => this.isFormula() && this.formula() !== "");
  this.hasTriggerFormula = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => !this.isFormula() && this.formula() !== "");
  this.origColRef = knockout__WEBPACK_IMPORTED_MODULE_5__.observable(this.getRowId());
  this.origCol = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.columns, this.origColRef);
  this.isTransforming = knockout__WEBPACK_IMPORTED_MODULE_5__.observable(false);
  this.pureType = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => app_common_gristTypes__WEBPACK_IMPORTED_MODULE_2__.extractTypeFromColType(this.type()));
  this._displayColModel = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.columns, this.displayCol);
  this.saveDisplayFormula = function(formula) {
    if (formula !== (this._displayColModel().formula() || "")) {
      return docModel.docData.sendAction([
        "SetDisplayFormula",
        this.table().tableId(),
        null,
        this.getRowId(),
        formula
      ]);
    }
  };
  this.displayColRef = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => this.displayCol() || this.origColRef());
  this.displayColModel = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.columns, this.displayColRef);
  this.visibleColModel = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.columns, this.visibleCol);
  this.disableModifyBase = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => Boolean(this.summarySourceCol()));
  this.disableModify = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => this.disableModifyBase() || this.isTransforming());
  this.disableEditData = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => Boolean(this.summarySourceCol()));
  this.isHiddenCol = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => app_common_gristTypes__WEBPACK_IMPORTED_MODULE_2__.isHiddenCol(this.colId()));
  this.refTable = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => {
    const refTableId = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_2__.getReferencedTableId)(this.type() || "");
    return refTableId ? docModel.visibleTables.all().find((t) => t.tableId() === refTableId) || null : null;
  });
  this.visibleColFormatter = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => formatterForRec(this, this, docModel, "vcol"));
  this.formatter = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => formatterForRec(this, this, docModel, "full"));
  this.createValueParser = function() {
    const parser = (0,app_common_ValueParser__WEBPACK_IMPORTED_MODULE_4__.createParser)(docModel.docData, this.id.peek());
    return parser.cleanParse.bind(parser);
  };
  this.behavior = knockout__WEBPACK_IMPORTED_MODULE_5__.pureComputed(() => this.isEmpty() ? "empty" : this.isFormula() ? "formula" : "data");
}
function formatterForRec(rec, colRec, docModel, kind) {
  const vcol = rec.visibleColModel();
  const func = kind === "full" ? app_common_ValueFormatter__WEBPACK_IMPORTED_MODULE_3__.createFullFormatterRaw : app_common_ValueFormatter__WEBPACK_IMPORTED_MODULE_3__.createVisibleColFormatterRaw;
  const args = {
    docData: docModel.docData,
    type: colRec.type(),
    widgetOpts: rec.widgetOptionsJson(),
    visibleColType: vcol == null ? void 0 : vcol.type(),
    visibleColWidgetOpts: vcol == null ? void 0 : vcol.widgetOptionsJson(),
    docSettings: docModel.docInfoRow.documentSettingsJson()
  };
  return func(args);
}


/***/ }),

/***/ "./app/client/models/entities/DocInfoRec.ts":
/*!**************************************************!*\
  !*** ./app/client/models/entities/DocInfoRec.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDocInfoRec": () => (/* binding */ createDocInfoRec)
/* harmony export */ });
/* harmony import */ var app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/modelUtil */ "./app/client/models/modelUtil.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);


function createDocInfoRec(docModel) {
  this.documentSettingsJson = (0,app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_0__.jsonObservable)(this.documentSettings);
  this.defaultViewId = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(() => {
    const tab = docModel.allTabs.at(0);
    return tab ? tab.viewRef() : 0;
  }));
  this.newDefaultViewId = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(() => {
    const page = docModel.visibleDocPages()[0];
    return page ? page.viewRef() : 0;
  }));
}


/***/ }),

/***/ "./app/client/models/entities/FilterRec.ts":
/*!*************************************************!*\
  !*** ./app/client/models/entities/FilterRec.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilterRec": () => (/* binding */ createFilterRec)
/* harmony export */ });
/* harmony import */ var app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/DocModel */ "./app/client/models/DocModel.ts");
/* harmony import */ var app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/modelUtil */ "./app/client/models/modelUtil.js");


function createFilterRec(docModel) {
  this.viewSection = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.viewSections, this.viewSectionRef);
  this.column = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.columns, this.colRef);
  this.activeFilter = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_1__.customComputed({
    read: () => {
      const f = this.filter();
      return f === "null" ? "" : f;
    }
  });
}


/***/ }),

/***/ "./app/client/models/entities/PageRec.ts":
/*!***********************************************!*\
  !*** ./app/client/models/entities/PageRec.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPageRec": () => (/* binding */ createPageRec)
/* harmony export */ });
/* harmony import */ var app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/DocModel */ "./app/client/models/DocModel.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);


function createPageRec(docModel) {
  this.view = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.views, this.viewRef);
  this.isCensored = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(() => !this.view().name());
  this.isSpecial = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(() => {
    const name = this.view().name();
    const isTableHidden = () => {
      var _a;
      const viewId = this.view().id();
      const tables = docModel.rawDataTables.all();
      const primaryTable = tables.find((t) => t.primaryViewId() === viewId);
      return !!primaryTable && ((_a = primaryTable.tableId()) == null ? void 0 : _a.startsWith("GristHidden_"));
    };
    return name === "GristDocTour" && !docModel.showDocTourTable || isTableHidden();
  });
  this.isHidden = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(() => {
    return this.isCensored() || this.isSpecial();
  });
}


/***/ }),

/***/ "./app/client/models/entities/TabBarRec.ts":
/*!*************************************************!*\
  !*** ./app/client/models/entities/TabBarRec.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTabBarRec": () => (/* binding */ createTabBarRec)
/* harmony export */ });
/* harmony import */ var app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/DocModel */ "./app/client/models/DocModel.ts");

function createTabBarRec(docModel) {
  this.view = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.views, this.viewRef);
}


/***/ }),

/***/ "./app/client/models/entities/TableRec.ts":
/*!************************************************!*\
  !*** ./app/client/models/entities/TableRec.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTableRec": () => (/* binding */ createTableRec)
/* harmony export */ });
/* harmony import */ var app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/DocModel */ "./app/client/models/DocModel.ts");
/* harmony import */ var app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/modelUtil */ "./app/client/models/modelUtil.js");
/* harmony import */ var app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/ActiveDocAPI */ "./app/common/ActiveDocAPI.ts");
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_5__);






function createTableRec(docModel) {
  this.columns = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.recordSet)(this, docModel.columns, "parentId", { sortBy: "parentPos" });
  this.validations = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.recordSet)(this, docModel.validations, "tableRef");
  this.primaryView = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.views, this.primaryViewId);
  this.rawViewSection = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.viewSections, this.rawViewSectionRef);
  this.summarySource = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.tables, this.summarySourceTable);
  this.isHidden = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_4__.pureComputed(() => !this.tableId() || !!this.summarySourceTable() || this.tableId().startsWith("GristHidden_")));
  this.summarySourceColRefs = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_4__.pureComputed(() => new Set(this.columns().all().map((c) => c.summarySourceCol()).filter((colRef) => colRef))));
  this.primaryTableId = knockout__WEBPACK_IMPORTED_MODULE_4__.pureComputed(() => this.summarySourceTable() ? this.summarySource().tableId() : this.tableId());
  this.groupByColumns = knockout__WEBPACK_IMPORTED_MODULE_4__.pureComputed(() => this.columns().all().filter((c) => c.summarySourceCol()));
  this.groupDesc = knockout__WEBPACK_IMPORTED_MODULE_4__.pureComputed(() => {
    if (!this.summarySourceTable()) {
      return "";
    }
    return (0,app_common_ActiveDocAPI__WEBPACK_IMPORTED_MODULE_2__.summaryGroupByDescription)(this.groupByColumns().map((c) => c.label()));
  });
  this.tableColor = randomcolor__WEBPACK_IMPORTED_MODULE_5___default()({
    luminosity: "light",
    seed: typeof this.id() === "number" ? 5 * this.id() : this.id()
  });
  this.disableAddRemoveRows = knockout__WEBPACK_IMPORTED_MODULE_4__.pureComputed(() => Boolean(this.summarySourceTable()));
  this.supportsManualSort = knockout__WEBPACK_IMPORTED_MODULE_4__.pureComputed(() => this.columns().all().some((c) => c.colId() === app_common_gristTypes__WEBPACK_IMPORTED_MODULE_3__.MANUALSORT));
  this.tableName = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_1__.savingComputed({
    read: () => {
      if (this.isDisposed()) {
        return "";
      }
      if (this.summarySourceTable()) {
        return this.summarySource().rawViewSection().title();
      } else {
        if (this.rawViewSection().isDisposed()) {
          return "";
        }
        return this.rawViewSection().title();
      }
    },
    write: (setter, val) => {
      if (this.summarySourceTable()) {
        setter(this.summarySource().rawViewSection().title, val);
      } else {
        setter(this.rawViewSection().title, val);
      }
    }
  });
  this.tableNameDef = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_1__.fieldWithDefault(this.tableName, knockout__WEBPACK_IMPORTED_MODULE_4__.computed(() => {
    if (this.isDisposed()) {
      return "";
    }
    const table = this.summarySourceTable() ? this.summarySource() : this;
    return table.tableId() || "";
  }));
  this.formattedTableName = knockout__WEBPACK_IMPORTED_MODULE_4__.pureComputed(() => {
    return this.summarySourceTable() ? `${this.tableNameDef()} ${this.groupDesc()}` : this.tableNameDef();
  });
}


/***/ }),

/***/ "./app/client/models/entities/ValidationRec.ts":
/*!*****************************************************!*\
  !*** ./app/client/models/entities/ValidationRec.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createValidationRec": () => (/* binding */ createValidationRec)
/* harmony export */ });
function createValidationRec(docModel) {
}


/***/ }),

/***/ "./app/client/models/entities/ViewFieldRec.ts":
/*!****************************************************!*\
  !*** ./app/client/models/entities/ViewFieldRec.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createViewFieldRec": () => (/* binding */ createViewFieldRec)
/* harmony export */ });
/* harmony import */ var app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/DocModel */ "./app/client/models/DocModel.ts");
/* harmony import */ var app_client_models_entities_ColumnRec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/entities/ColumnRec */ "./app/client/models/entities/ColumnRec.ts");
/* harmony import */ var app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/models/modelUtil */ "./app/client/models/modelUtil.js");
/* harmony import */ var app_client_models_RuleOwner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/models/RuleOwner */ "./app/client/models/RuleOwner.ts");
/* harmony import */ var app_client_models_ViewFieldConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/models/ViewFieldConfig */ "./app/client/models/ViewFieldConfig.ts");
/* harmony import */ var app_client_widgets_UserType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/widgets/UserType */ "./app/client/widgets/UserType.ts");
/* harmony import */ var app_common_ValueParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/common/ValueParser */ "./app/common/ValueParser.ts");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_7__);








function createViewFieldRec(docModel) {
  this.viewSection = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.viewSections, this.parentId);
  this.widthDef = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.fieldWithDefault(this.width, () => this.viewSection().defaultWidth());
  this.widthPx = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this.widthDef() + "px");
  this.column = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.columns, this.colRef);
  this.origCol = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this.column().origCol());
  this.colId = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this.column().colId());
  this.label = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this.column().label());
  this.displayLabel = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.savingComputed({
    read: () => docModel.editingFormula() ? "$" + this.origCol().colId() : this.origCol().label(),
    write: (setter, val) => setter(this.column().label, val)
  });
  const _editingFormula = knockout__WEBPACK_IMPORTED_MODULE_7__.observable(false);
  this.editingFormula = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed({
    read: () => _editingFormula(),
    write: (val) => {
      docModel.editingFormula(val);
      _editingFormula(val);
    }
  });
  this.formulaCssClass = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => {
    const col = this.column();
    return this.column().isTransforming() ? "transform_field" : this.editingFormula() ? "formula_field_edit" : col.isFormula() && col.formula() !== "" ? "formula_field" : null;
  });
  this._displayColModel = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.columns, this.displayCol);
  this.saveDisplayFormula = function(formula) {
    if (formula !== (this._displayColModel().formula() || "")) {
      return docModel.docData.sendAction([
        "SetDisplayFormula",
        this.column().table().tableId(),
        this.getRowId(),
        null,
        formula
      ]);
    }
  };
  this.useColOptions = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => !this.widgetOptions() || this.column().isTransforming()));
  this._fieldOrColumn = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this.useColOptions() ? this.column() : this));
  this.displayColRef = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this._fieldOrColumn().displayCol() || this.colRef()));
  this.visibleColRef = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.addSaveInterface(knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed({
    read: () => this._fieldOrColumn().visibleCol(),
    write: (colRef) => this._fieldOrColumn().visibleCol(colRef)
  }), (colRef) => docModel.docData.bundleActions(null, async () => {
    const col = docModel.columns.getRowModel(colRef);
    await Promise.all([
      this._fieldOrColumn().visibleCol.saveOnly(colRef),
      this._fieldOrColumn().saveDisplayFormula(colRef ? `$${this.colId()}.${col.colId()}` : "")
    ]);
  }, { nestInActiveBundle: this.column.peek().isTransforming.peek() }));
  this.displayColModel = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.columns, this.displayColRef);
  this.visibleColModel = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refRecord)(docModel.columns, this.visibleColRef);
  this.visibleColFormatter = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => (0,app_client_models_entities_ColumnRec__WEBPACK_IMPORTED_MODULE_1__.formatterForRec)(this, this.column(), docModel, "vcol"));
  this.formatter = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => (0,app_client_models_entities_ColumnRec__WEBPACK_IMPORTED_MODULE_1__.formatterForRec)(this, this.column(), docModel, "full"));
  this.createValueParser = function() {
    const fieldRef = this.useColOptions.peek() ? void 0 : this.id.peek();
    const parser = (0,app_common_ValueParser__WEBPACK_IMPORTED_MODULE_6__.createParser)(docModel.docData, this.colRef.peek(), fieldRef);
    return parser.cleanParse.bind(parser);
  };
  this._widgetOptionsStr = this.autoDispose(app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.savingComputed({
    read: () => this._fieldOrColumn().widgetOptions(),
    write: (setter, val) => setter(this._fieldOrColumn().widgetOptions, val)
  }));
  this.widgetOptionsJson = this.autoDispose(app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.jsonObservable(this._widgetOptionsStr, (opts) => app_client_widgets_UserType__WEBPACK_IMPORTED_MODULE_5__.mergeOptions(opts || {}, this.column().pureType())));
  this.wrap = this.autoDispose(app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.fieldWithDefault(this.widgetOptionsJson.prop("wrap"), () => this.viewSection().parentKey() !== "record"));
  this.widget = this.widgetOptionsJson.prop("widget");
  this.textColor = this.widgetOptionsJson.prop("textColor");
  this.fillColor = this.widgetOptionsJson.prop("fillColor");
  this.fontBold = this.widgetOptionsJson.prop("fontBold");
  this.fontUnderline = this.widgetOptionsJson.prop("fontUnderline");
  this.fontItalic = this.widgetOptionsJson.prop("fontItalic");
  this.fontStrikethrough = this.widgetOptionsJson.prop("fontStrikethrough");
  this.documentSettings = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => docModel.docInfoRow.documentSettingsJson());
  this.style = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed({
    read: () => ({
      textColor: this.textColor(),
      fillColor: this.fillColor(),
      fontBold: this.fontBold(),
      fontUnderline: this.fontUnderline(),
      fontItalic: this.fontItalic(),
      fontStrikethrough: this.fontStrikethrough()
    }),
    write: (style) => {
      this.widgetOptionsJson.update(style);
    }
  });
  this.tableId = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this.column().table().tableId());
  this.rulesCols = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_0__.refListRecords)(docModel.columns, knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this._fieldOrColumn().rules()));
  this.rulesColsIds = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this.rulesCols().map((c) => c.colId()));
  this.rulesStyles = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.fieldWithDefault(this.widgetOptionsJson.prop("rulesOptions"), []);
  this.hasRules = knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this.rulesCols().length > 0);
  this.addEmptyRule = async () => {
    const useCol = this.useColOptions.peek();
    const action = [
      "AddEmptyRule",
      this.column.peek().table.peek().tableId.peek(),
      useCol ? 0 : this.id.peek(),
      useCol ? this.column.peek().id.peek() : 0
    ];
    await docModel.docData.sendAction(action, `Update rules for ${this.colId.peek()}`);
  };
  this.removeRule = (index) => (0,app_client_models_RuleOwner__WEBPACK_IMPORTED_MODULE_3__.removeRule)(docModel, this, index);
  this.config = new app_client_models_ViewFieldConfig__WEBPACK_IMPORTED_MODULE_4__.ViewFieldConfig(this, docModel);
  this.disableModify = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this.column().disableModify()));
  this.disableEditData = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_7__.pureComputed(() => this.column().disableEditData()));
}


/***/ }),

/***/ "./app/client/models/entities/ViewRec.ts":
/*!***********************************************!*\
  !*** ./app/client/models/entities/ViewRec.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createViewRec": () => (/* binding */ createViewRec)
/* harmony export */ });
/* harmony import */ var app_client_lib_koUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/koUtil */ "./app/client/lib/koUtil.js");
/* harmony import */ var app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/DocModel */ "./app/client/models/DocModel.ts");
/* harmony import */ var app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/models/modelUtil */ "./app/client/models/modelUtil.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_3__);




function createViewRec(docModel) {
  this.viewSections = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.recordSet)(this, docModel.viewSections, "parentId");
  this.tabBarItem = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.recordSet)(this, docModel.tabBar, "viewRef");
  this.layoutSpecObj = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.jsonObservable(this.layoutSpec);
  this.activeSectionId = app_client_lib_koUtil__WEBPACK_IMPORTED_MODULE_0__.observableWithDefault(knockout__WEBPACK_IMPORTED_MODULE_3__.observable(), () => {
    return !this.isDisposed() && this.getRowId() && this.viewSections().all().length > 0 ? this.viewSections().at(0).getRowId() : 0;
  });
  this.activeSection = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.refRecord)(docModel.viewSections, this.activeSectionId);
  this._isActiveSectionGone = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_3__.computed(() => this.activeSection()._isDeleted()));
  this.autoDispose(this._isActiveSectionGone.subscribe((gone) => {
    if (gone) {
      this.activeSectionId(0);
    }
  }));
}


/***/ }),

/***/ "./app/client/models/entities/ViewSectionRec.ts":
/*!******************************************************!*\
  !*** ./app/client/models/entities/ViewSectionRec.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createViewSectionRec": () => (/* binding */ createViewSectionRec)
/* harmony export */ });
/* harmony import */ var app_client_components_LinkingState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/LinkingState */ "./app/client/components/LinkingState.ts");
/* harmony import */ var app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/DocModel */ "./app/client/models/DocModel.ts");
/* harmony import */ var app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/models/modelUtil */ "./app/client/models/modelUtil.js");
/* harmony import */ var app_client_ui_selectBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui/selectBy */ "./app/client/ui/selectBy.ts");
/* harmony import */ var app_client_ui_widgetTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui/widgetTypes */ "./app/client/ui/widgetTypes.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var app_common_SortSpec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/common/SortSpec */ "./app/common/SortSpec.ts");
/* harmony import */ var app_client_models_ColumnToMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/models/ColumnToMap */ "./app/client/models/ColumnToMap.ts");
/* harmony import */ var app_client_models_RuleOwner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/models/RuleOwner */ "./app/client/models/RuleOwner.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_10__);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};











const defaults = __webpack_require__(/*! lodash/defaults */ "./node_modules/lodash/defaults.js");
function createViewSectionRec(docModel) {
  this.viewFields = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.recordSet)(this, docModel.viewFields, "parentId", { sortBy: "parentPos" });
  this.columns = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.table().columns().all().filter((c) => !c.isHiddenCol())));
  this.editingFormula = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed({
    read: () => docModel.editingFormula(),
    write: (val) => {
      docModel.editingFormula(val);
    }
  });
  const defaultOptions = {
    verticalGridlines: true,
    horizontalGridlines: true,
    zebraStripes: false,
    customView: "",
    numFrozen: 0
  };
  this.optionsObj = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.jsonObservable(this.options, (obj) => defaults(obj || {}, defaultOptions));
  const customViewDefaults = {
    mode: "url",
    url: null,
    widgetDef: null,
    access: "",
    pluginId: "",
    sectionId: ""
  };
  const customDefObj = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.jsonObservable(this.optionsObj.prop("customView"), (obj) => defaults(obj || {}, customViewDefaults));
  this.customDef = {
    mode: customDefObj.prop("mode"),
    url: customDefObj.prop("url"),
    widgetDef: customDefObj.prop("widgetDef"),
    widgetOptions: customDefObj.prop("widgetOptions"),
    columnsMapping: customDefObj.prop("columnsMapping"),
    access: customDefObj.prop("access"),
    pluginId: customDefObj.prop("pluginId"),
    sectionId: customDefObj.prop("sectionId")
  };
  this.selectedFields = knockout__WEBPACK_IMPORTED_MODULE_10__.observable([]);
  const selectedColumns = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.selectedFields().filter((f) => !f.isDisposed()).map((f) => f.column()).filter((c) => !c.isDisposed())));
  this.columnsBehavior = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => {
    const list = new Set(selectedColumns().map((c) => c.behavior()));
    return list.size === 1 ? list.values().next().value : "mixed";
  });
  this.columnsType = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => {
    const list = new Set(selectedColumns().map((c) => c.type()));
    return list.size === 1 ? list.values().next().value : "mixed";
  });
  this.columnsAllIsFormula = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => {
    return selectedColumns().every((c) => c.isFormula());
  });
  this.activeCustomOptions = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.customValue(this.customDef.widgetOptions);
  this.saveCustomDef = async () => {
    await customDefObj.save();
    this.activeCustomOptions.revert();
  };
  this.themeDef = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.fieldWithDefault(this.theme, "form");
  this.chartTypeDef = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.fieldWithDefault(this.chartType, "bar");
  this.view = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.refRecord)(docModel.views, this.parentId);
  this.table = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.refRecord)(docModel.tables, this.tableRef);
  this.defaultWidgetTitle = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => {
    var _a;
    const widgetTypeDesc = this.parentKey() !== "record" ? `${(0,app_client_ui_widgetTypes__WEBPACK_IMPORTED_MODULE_4__.getWidgetTypes)(this.parentKey.peek()).label}` : "";
    const table = this.table();
    return [
      (_a = table.tableNameDef()) == null ? void 0 : _a.toUpperCase(),
      table.groupDesc(),
      widgetTypeDesc
    ].filter((part) => Boolean(part == null ? void 0 : part.trim())).join(" ");
  }));
  this.titleDef = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.fieldWithDefault(this.title, this.defaultWidgetTitle);
  this.isRaw = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.table().rawViewSectionRef() === this.getRowId()));
  this.borderWidthPx = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.borderWidth() + "px");
  this.layoutSpecObj = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.jsonObservable(this.layoutSpec);
  this._savedFilters = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.recordSet)(this, docModel.filters, "viewSectionRef");
  this._unsavedFilters = /* @__PURE__ */ new Map();
  this.filters = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.computed(() => {
    const savedFiltersByColRef = new Map(this._savedFilters().all().map((f) => [f.colRef(), f]));
    const viewFieldsByColRef = new Map(this.viewFields().all().map((f) => [f.origCol().getRowId(), f]));
    return this.columns().map((column) => {
      var _a;
      const savedFilter = savedFiltersByColRef.get(column.origColRef());
      const filter = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.customComputed({
        read: () => {
          return savedFilter ? savedFilter.activeFilter() : "";
        }
      });
      const pinned = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.customComputed({
        read: () => {
          return savedFilter ? savedFilter.pinned() : false;
        }
      });
      const unsavedFilter = this._unsavedFilters.get(column.origColRef());
      if (unsavedFilter) {
        const { filter: f, pinned: p } = unsavedFilter;
        if (f !== void 0) {
          filter(f);
        }
        if (p !== void 0) {
          pinned(p);
        }
      }
      return {
        viewSection: this,
        filter,
        pinned,
        fieldOrColumn: (_a = viewFieldsByColRef.get(column.origColRef())) != null ? _a : column,
        isFiltered: knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => filter() !== ""),
        isPinned: knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => pinned())
      };
    });
  }));
  this.activeFilters = grainjs__WEBPACK_IMPORTED_MODULE_9__.Computed.create(this, (use) => use(this.filters).filter((f) => use(f.isFiltered)));
  this.pinnedActiveFilters = grainjs__WEBPACK_IMPORTED_MODULE_9__.Computed.create(this, (use) => use(this.activeFilters).filter((f) => use(f.isPinned)));
  this.filterSpecChanged = grainjs__WEBPACK_IMPORTED_MODULE_9__.Computed.create(this, (use) => {
    return use(this.filters).some((col) => !use(col.filter.isSaved) || !use(col.pinned.isSaved));
  });
  this.showNestedFilteringPopup = grainjs__WEBPACK_IMPORTED_MODULE_9__.Observable.create(this, false);
  this.saveFilters = () => {
    return docModel.docData.bundleActions(`Save all filters in ${this.titleDef()}`, async () => {
      const savedFiltersByColRef = new Map(this._savedFilters().all().map((f) => [f.colRef(), f]));
      const updatedFilters = [];
      const removedFilterIds = [];
      const newFilters = [];
      for (const f of this.filters()) {
        const { fieldOrColumn, filter, pinned } = f;
        if (filter.isSaved() && pinned.isSaved()) {
          continue;
        }
        const savedFilter = savedFiltersByColRef.get(fieldOrColumn.origCol().origColRef());
        if (!savedFilter) {
          if (filter() === "") {
            continue;
          }
          newFilters.push([fieldOrColumn.origCol().origColRef(), {
            filter: filter(),
            pinned: pinned()
          }]);
        } else if (filter() === "") {
          removedFilterIds.push(savedFilter.id());
        } else {
          updatedFilters.push([savedFilter.id(), {
            filter: filter(),
            pinned: pinned()
          }]);
        }
      }
      const actions = [];
      if (removedFilterIds.length > 0) {
        actions.push(["BulkRemoveRecord", removedFilterIds]);
      }
      if (updatedFilters.length > 0) {
        actions.push([
          "BulkUpdateRecord",
          updatedFilters.map(([id]) => id),
          {
            filter: updatedFilters.map(([, { filter }]) => filter),
            pinned: updatedFilters.map(([, { pinned }]) => pinned)
          }
        ]);
      }
      if (newFilters.length > 0) {
        actions.push([
          "BulkAddRecord",
          (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_5__.arrayRepeat)(newFilters.length, null),
          {
            viewSectionRef: (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_5__.arrayRepeat)(newFilters.length, this.id()),
            colRef: newFilters.map(([colRef]) => colRef),
            filter: newFilters.map(([, { filter }]) => filter),
            pinned: newFilters.map(([, { pinned }]) => pinned)
          }
        ]);
      }
      if (actions.length > 0) {
        await docModel.filters.sendTableActions(actions);
      }
      this.revertFilters();
    });
  };
  this.revertFilters = () => {
    this._unsavedFilters.clear();
    this.filters().forEach((c) => {
      c.filter.revert();
      c.pinned.revert();
    });
  };
  this.setFilter = (colRef, filter) => {
    this._unsavedFilters.set(colRef, __spreadValues(__spreadValues({}, this._unsavedFilters.get(colRef)), filter));
    const filterInfo = this.filters().find((c) => c.fieldOrColumn.origCol().origColRef() === colRef);
    if (!filterInfo) {
      return;
    }
    const { filter: newFilter, pinned: newPinned } = filter;
    if (newFilter !== void 0) {
      filterInfo.filter(newFilter);
    }
    if (newPinned !== void 0) {
      filterInfo.pinned(newPinned);
    }
  };
  this.revertFilter = (colRef) => {
    this._unsavedFilters.delete(colRef);
    const filterInfo = this.filters().find((c) => c.fieldOrColumn.origCol().origColRef() === colRef);
    if (!filterInfo) {
      return;
    }
    filterInfo.filter.revert();
    filterInfo.pinned.revert();
  };
  this.activeSortJson = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.customValue(this.sortColRefs);
  this.activeSortSpec = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.jsonObservable(this.activeSortJson, (obj) => {
    return (obj || []).filter((sortRef) => {
      const colModel = docModel.columns.getRowModel(app_common_SortSpec__WEBPACK_IMPORTED_MODULE_6__.Sort.getColRef(sortRef));
      return !colModel._isDeleted() && colModel.getRowId();
    });
  });
  this.activeDisplaySortSpec = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.computed(() => {
    return this.activeSortSpec().map((directionalColRef) => {
      const colRef = app_common_SortSpec__WEBPACK_IMPORTED_MODULE_6__.Sort.getColRef(directionalColRef);
      const field = this.viewFields().all().find((f) => f.column().origColRef() === colRef);
      const effectiveColRef = field ? field.displayColRef() : colRef;
      return app_common_SortSpec__WEBPACK_IMPORTED_MODULE_6__.Sort.swapColRef(directionalColRef, effectiveColRef);
    });
  }));
  this.hiddenColumns = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => {
    const included = new Set(this.viewFields().all().map((f) => f.column().origColRef()));
    return this.columns().filter((c) => !included.has(c.getRowId()));
  }));
  this.hasFocus = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed({
    read: () => !this.isDisposed() && this.view().activeSectionId() === this.id(),
    write: (val) => {
      this.view().activeSectionId(val ? this.id() : 0);
    }
  });
  this.activeLinkSrcSectionRef = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.customValue(this.linkSrcSectionRef);
  this.activeLinkSrcColRef = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.customValue(this.linkSrcColRef);
  this.activeLinkTargetColRef = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.customValue(this.linkTargetColRef);
  this.isActiveLinkSaved = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.activeLinkSrcSectionRef.isSaved() && this.activeLinkSrcColRef.isSaved() && this.activeLinkTargetColRef.isSaved()));
  this.linkSrcSection = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.refRecord)(docModel.viewSections, this.activeLinkSrcSectionRef);
  this.linkSrcCol = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.refRecord)(docModel.columns, this.activeLinkSrcColRef);
  this.linkTargetCol = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.refRecord)(docModel.columns, this.activeLinkTargetColRef);
  this.activeRowId = knockout__WEBPACK_IMPORTED_MODULE_10__.observable(null);
  this._linkingState = grainjs__WEBPACK_IMPORTED_MODULE_9__.Holder.create(this);
  this.linkingState = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => {
    if (!this.activeLinkSrcSectionRef()) {
      return null;
    }
    try {
      const config = new app_client_ui_selectBy__WEBPACK_IMPORTED_MODULE_3__.LinkConfig(this);
      return app_client_components_LinkingState__WEBPACK_IMPORTED_MODULE_0__.LinkingState.create(this._linkingState, docModel, config);
    } catch (err) {
      console.warn(err);
      this._linkingState.dispose();
      return null;
    }
  }));
  this.linkingFilter = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => {
    var _a, _b;
    return ((_b = (_a = this.linkingState()) == null ? void 0 : _a.filterColValues) == null ? void 0 : _b.call(_a)) || { filters: {}, operations: {} };
  }));
  this.viewInstance = knockout__WEBPACK_IMPORTED_MODULE_10__.observable(null);
  this.lastCursorPos = {
    rowId: 0,
    fieldIndex: 0
  };
  this.lastScrollPos = {
    rowIndex: 0,
    offset: 0,
    scrollLeft: 0
  };
  this.disableAddRemoveRows = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.table().disableAddRemoveRows());
  this.isSorted = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.activeSortSpec().length > 0);
  this.disableDragRows = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.isSorted() || !this.table().supportsManualSort());
  this.rawNumFrozen = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.customValue(this.optionsObj.prop("numFrozen"));
  this.numFrozen = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => Math.max(0, Math.min(this.rawNumFrozen(), this.viewFields().all().length - 1)));
  this.hasCustomOptions = knockout__WEBPACK_IMPORTED_MODULE_10__.observable(false);
  this.desiredAccessLevel = knockout__WEBPACK_IMPORTED_MODULE_10__.observable(null);
  this.columnsToMap = knockout__WEBPACK_IMPORTED_MODULE_10__.observable(null);
  this.mappedColumns = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => {
    const request = this.columnsToMap();
    const mapping = this.customDef.columnsMapping();
    if (!request || !mapping) {
      return null;
    }
    const columnsToMap = request.map((r) => new app_client_models_ColumnToMap__WEBPACK_IMPORTED_MODULE_7__.ColumnToMapImpl(r));
    const result = {};
    const colMap = new Map(this.columns().map((f) => [f.id.peek(), f]));
    for (const widgetCol of columnsToMap) {
      result[widgetCol.name] = widgetCol.allowMultiple ? [] : null;
      const mappedCol = mapping[widgetCol.name];
      if (!mappedCol) {
        continue;
      }
      if (widgetCol.allowMultiple) {
        if (!Array.isArray(mappedCol)) {
          continue;
        }
        result[widgetCol.name] = mappedCol.filter((cId) => colMap.has(cId)).filter((cId) => widgetCol.canByMapped(colMap.get(cId).pureType())).map((cId) => colMap.get(cId).colId());
      } else {
        if (Array.isArray(mappedCol) || !colMap.has(mappedCol)) {
          continue;
        }
        const selectedColumn = colMap.get(mappedCol);
        result[widgetCol.name] = widgetCol.canByMapped(selectedColumn.pureType()) ? selectedColumn.colId() : null;
      }
    }
    return result;
  });
  this.allowSelectBy = grainjs__WEBPACK_IMPORTED_MODULE_9__.Observable.create(this, false);
  this.selectedRows = grainjs__WEBPACK_IMPORTED_MODULE_9__.Observable.create(this, []);
  this.tableId = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.table().tableId()));
  const rawSection = this.autoDispose(knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.table().rawViewSection()));
  this.rulesCols = (0,app_client_models_DocModel__WEBPACK_IMPORTED_MODULE_1__.refListRecords)(docModel.columns, knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => rawSection().rules()));
  this.rulesColsIds = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.rulesCols().map((c) => c.colId()));
  this.rulesStyles = app_client_models_modelUtil__WEBPACK_IMPORTED_MODULE_2__.savingComputed({
    read: () => {
      var _a;
      return (_a = rawSection().optionsObj.prop("rulesOptions")()) != null ? _a : [];
    },
    write: (setter, val) => setter(rawSection().optionsObj.prop("rulesOptions"), val)
  });
  this.hasRules = knockout__WEBPACK_IMPORTED_MODULE_10__.pureComputed(() => this.rulesCols().length > 0);
  this.addEmptyRule = async () => {
    const action = [
      "AddEmptyRule",
      this.tableId.peek(),
      null,
      null
    ];
    await docModel.docData.sendAction(action, `Update rules for ${this.table.peek().tableId.peek()}`);
  };
  this.removeRule = (index) => (0,app_client_models_RuleOwner__WEBPACK_IMPORTED_MODULE_8__.removeRule)(docModel, this, index);
}


/***/ }),

/***/ "./app/client/ui/CellContextMenu.ts":
/*!******************************************!*\
  !*** ./app/client/ui/CellContextMenu.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CellContextMenu": () => (/* binding */ CellContextMenu)
/* harmony export */ });
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_client_models_features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/models/features */ "./app/client/models/features.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");





const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_1__.makeT)("CellContextMenu");
function CellContextMenu(rowOptions, colOptions) {
  const { disableInsert, disableDelete, isViewSorted } = rowOptions;
  const { disableModify, isReadonly } = colOptions;
  const disableForReadonlyColumn = grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.cls("disabled", Boolean(disableModify) || isReadonly);
  const disableForReadonlyView = grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.cls("disabled", isReadonly);
  const numCols = colOptions.numColumns;
  const nameClearColumns = colOptions.isFiltered ? t("Reset {{count}} entire columns", { count: numCols }) : t("Reset {{count}} columns", { count: numCols });
  const nameDeleteColumns = t("Delete {{count}} columns", { count: numCols });
  const numRows = rowOptions.numRows;
  const nameDeleteRows = t("Delete {{count}} rows", { count: numRows });
  const nameClearCells = numRows > 1 || numCols > 1 ? t("Clear values") : t("Clear cell");
  const result = [];
  result.push(colOptions.isFormula ? null : (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.clearValues, nameClearCells, disableForReadonlyColumn), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.clearColumns, nameClearColumns, disableForReadonlyColumn), ...numCols > 1 || numRows > 1 ? [] : [
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuDivider)(),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.copyLink, t("Copy anchor link")),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuDivider)(),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.filterByThisCellValue, t("Filter by this value")),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.openDiscussion, "Comment", grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.cls("disabled", isReadonly || numRows === 0 || numCols === 0), grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.hide((use) => !use((0,app_client_models_features__WEBPACK_IMPORTED_MODULE_3__.COMMENTS)())))
  ], (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuDivider)(), ...isViewSorted ? [(0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.insertRecordAfter, t("Insert row"), grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.cls("disabled", disableInsert))] : [
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.insertRecordBefore, t("Insert row above"), grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.cls("disabled", disableInsert)),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.insertRecordAfter, t("Insert row below"), grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.cls("disabled", disableInsert))
  ], (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.duplicateRows, t("Duplicate rows", { count: numRows }), grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.cls("disabled", disableInsert || numRows === 0)), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.insertFieldBefore, t("Insert column to the left"), disableForReadonlyView), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.insertFieldAfter, t("Insert column to the right"), disableForReadonlyView), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuDivider)(), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.deleteRecords, nameDeleteRows, grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.cls("disabled", disableDelete)), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.deleteFields, nameDeleteColumns, disableForReadonlyColumn));
  return result;
}


/***/ }),

/***/ "./app/client/ui/DocHistory.ts":
/*!*************************************!*\
  !*** ./app/client/ui/DocHistory.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocHistory": () => (/* binding */ DocHistory)
/* harmony export */ });
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_lib_sessionObs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/lib/sessionObs */ "./app/client/lib/sessionObs.ts");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/models/gristUrlState */ "./app/client/models/gristUrlState.ts");
/* harmony import */ var app_client_models_HomeModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/models/HomeModel */ "./app/client/models/HomeModel.ts");
/* harmony import */ var app_client_ui_RightPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui/RightPanel */ "./app/client/ui/RightPanel.ts");
/* harmony import */ var app_client_ui2018_buttonSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/ui2018/buttonSelect */ "./app/client/ui2018/buttonSelect.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_common_gristUrls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/common/gristUrls */ "./app/common/gristUrls.ts");
/* harmony import */ var app_common_StringUnion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/common/StringUnion */ "./app/common/StringUnion.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));














const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__.makeT)("DocHistory");
const DocHistorySubTab = (0,app_common_StringUnion__WEBPACK_IMPORTED_MODULE_11__.StringUnion)("activity", "snapshots");
class DocHistory extends grainjs__WEBPACK_IMPORTED_MODULE_12__.Disposable {
  constructor(_docPageModel, _actionLog) {
    super();
    this._docPageModel = _docPageModel;
    this._actionLog = _actionLog;
    this._subTab = (0,app_client_lib_sessionObs__WEBPACK_IMPORTED_MODULE_1__.createSessionObs)(this, "docHistorySubTab", "snapshots", DocHistorySubTab.guard);
  }
  buildDom() {
    const tabs = [
      { value: "activity", label: t("Activity") },
      { value: "snapshots", label: t("Snapshots") }
    ];
    return [
      cssSubTabs((0,app_client_ui2018_buttonSelect__WEBPACK_IMPORTED_MODULE_6__.buttonSelect)(this._subTab, tabs, {}, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.testId)("doc-history-tabs"))),
      grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.domComputed(this._subTab, (subTab) => (0,app_client_ui_RightPanel__WEBPACK_IMPORTED_MODULE_5__.buildConfigContainer)(subTab === "activity" ? this._actionLog.buildDom() : subTab === "snapshots" ? grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.create(this._buildSnapshots.bind(this)) : null))
    ];
  }
  _buildSnapshots(owner) {
    var _a;
    const doc = this._docPageModel.currentDoc.get();
    if (!doc) {
      return null;
    }
    const origUrlId = (0,app_common_gristUrls__WEBPACK_IMPORTED_MODULE_10__.buildUrlId)(__spreadProps(__spreadValues({}, doc.idParts), { snapshotId: void 0 }));
    const compareUrlId = (_a = (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_3__.urlState)().state.get().params) == null ? void 0 : _a.compare;
    const compareSnapshotId = compareUrlId && (0,app_common_gristUrls__WEBPACK_IMPORTED_MODULE_10__.parseUrlId)(compareUrlId).snapshotId;
    function setLink(snapshot, compareDocId) {
      return grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.attr("href", (use) => (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_3__.urlState)().makeUrl(__spreadProps(__spreadValues({}, use((0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_3__.urlState)().state)), {
        doc: snapshot.docId,
        params: compareDocId ? { compare: compareDocId } : {}
      })));
    }
    const snapshots = grainjs__WEBPACK_IMPORTED_MODULE_12__.Observable.create(owner, []);
    const snapshotsDenied = grainjs__WEBPACK_IMPORTED_MODULE_12__.Observable.create(owner, false);
    const userApi = this._docPageModel.appModel.api;
    const docApi = userApi.getDocAPI(origUrlId);
    docApi.getSnapshots().then((result) => snapshots.isDisposed() || snapshots.set(result.snapshots)).catch((err) => {
      snapshotsDenied.set(true);
      (0,app_client_models_errors__WEBPACK_IMPORTED_MODULE_2__.reportError)(err);
    });
    return (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.dom)("div", grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.maybe(snapshotsDenied, () => cssSnapshotDenied(t("Snapshots are unavailable."), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.testId)("doc-history-error"))), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.domComputed(snapshots, (snapshotList) => snapshotList.map((snapshot, index) => {
      const modified = moment__WEBPACK_IMPORTED_MODULE_13___default()(snapshot.lastModified);
      const prevSnapshot = snapshotList[index + 1] || null;
      return cssSnapshot(cssSnapshotTime((0,app_client_models_HomeModel__WEBPACK_IMPORTED_MODULE_4__.getTimeFromNow)(snapshot.lastModified)), cssSnapshotCard(cssSnapshotCard.cls("-current", Boolean(snapshot.snapshotId === doc.idParts.snapshotId || compareSnapshotId && snapshot.snapshotId === compareSnapshotId)), (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.dom)("div", cssDatePart(modified.format("ddd ll")), " ", cssDatePart(modified.format("LT"))), cssMenuDots((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_8__.icon)("Dots"), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.menu)(() => [
        (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.menuItemLink)(setLink(snapshot), t("Open Snapshot")),
        (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.menuItemLink)(setLink(snapshot, origUrlId), t("Compare to Current"), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.menuAnnotate)(t("Beta"))),
        prevSnapshot && (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.menuItemLink)(setLink(prevSnapshot, snapshot.docId), t("Compare to Previous"), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_9__.menuAnnotate)(t("Beta")))
      ], { placement: "bottom-end", parentSelectorToMark: "." + cssSnapshotCard.className }), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.testId)("doc-history-snapshot-menu")), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.testId)("doc-history-card")), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.testId)("doc-history-snapshot"));
    })));
  }
}
const cssSubTabs = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  padding: 16px;
  border-bottom: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.pagePanelsBorder};
`);
const cssSnapshot = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  margin: 8px 16px;
`);
const cssSnapshotDenied = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  margin: 8px 16px;
`);
const cssSnapshotTime = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  text-align: right;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.lightText};
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.vars.smallFontSize};
`);
const cssSnapshotCard = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.documentHistorySnapshotBorder};
  padding: 8px;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.documentHistorySnapshotFg};
  background: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.documentHistorySnapshotBg};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.controlSecondaryFg};

  &-current {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.documentHistorySnapshotSelectedBg};
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.documentHistorySnapshotSelectedFg};
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.documentHistorySnapshotSelectedFg};
  }
`);
const cssDatePart = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("span", `
  display: inline-block;
`);
const cssMenuDots = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  flex: none;
  margin: 0 4px 0 auto;
  height: 24px;
  width: 24px;
  padding: 4px;
  line-height: 0px;
  border-radius: 3px;
  cursor: default;
  &:hover, &.weasel-popup-open {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.hover};
  }
`);


/***/ }),

/***/ "./app/client/ui/DocMenuCss.ts":
/*!*************************************!*\
  !*** ./app/client/ui/DocMenuCss.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allDocsTemplates": () => (/* binding */ allDocsTemplates),
/* harmony export */   "docBlock": () => (/* binding */ docBlock),
/* harmony export */   "docBlockHeaderLink": () => (/* binding */ docBlockHeaderLink),
/* harmony export */   "docEditorInput": () => (/* binding */ docEditorInput),
/* harmony export */   "docHeaderIcon": () => (/* binding */ docHeaderIcon),
/* harmony export */   "docLeft": () => (/* binding */ docLeft),
/* harmony export */   "docList": () => (/* binding */ docList),
/* harmony export */   "docListHeader": () => (/* binding */ docListHeader),
/* harmony export */   "docMenu": () => (/* binding */ docMenu),
/* harmony export */   "docMenuTrigger": () => (/* binding */ docMenuTrigger),
/* harmony export */   "docName": () => (/* binding */ docName),
/* harmony export */   "docPinIcon": () => (/* binding */ docPinIcon),
/* harmony export */   "docPublicIcon": () => (/* binding */ docPublicIcon),
/* harmony export */   "docRowLink": () => (/* binding */ docRowLink),
/* harmony export */   "docRowUpdatedAt": () => (/* binding */ docRowUpdatedAt),
/* harmony export */   "docRowWrapper": () => (/* binding */ docRowWrapper),
/* harmony export */   "featuredTemplatesHeader": () => (/* binding */ featuredTemplatesHeader),
/* harmony export */   "featuredTemplatesIcon": () => (/* binding */ featuredTemplatesIcon),
/* harmony export */   "moveDocListHintText": () => (/* binding */ moveDocListHintText),
/* harmony export */   "moveDocListItem": () => (/* binding */ moveDocListItem),
/* harmony export */   "moveDocListText": () => (/* binding */ moveDocListText),
/* harmony export */   "moveDocModalBody": () => (/* binding */ moveDocModalBody),
/* harmony export */   "otherSitesBlock": () => (/* binding */ otherSitesBlock),
/* harmony export */   "otherSitesButtons": () => (/* binding */ otherSitesButtons),
/* harmony export */   "otherSitesHeader": () => (/* binding */ otherSitesHeader),
/* harmony export */   "otherSitesHeaderIcon": () => (/* binding */ otherSitesHeaderIcon),
/* harmony export */   "pinnedDocsIcon": () => (/* binding */ pinnedDocsIcon),
/* harmony export */   "prefSelectors": () => (/* binding */ prefSelectors),
/* harmony export */   "siteButton": () => (/* binding */ siteButton),
/* harmony export */   "sortSelector": () => (/* binding */ sortSelector),
/* harmony export */   "spinner": () => (/* binding */ spinner),
/* harmony export */   "templateBlockHeader": () => (/* binding */ templateBlockHeader),
/* harmony export */   "templatesDocBlock": () => (/* binding */ templatesDocBlock),
/* harmony export */   "templatesHeader": () => (/* binding */ templatesHeader),
/* harmony export */   "templatesHeaderIcon": () => (/* binding */ templatesHeaderIcon),
/* harmony export */   "templatesHeaderWrap": () => (/* binding */ templatesHeaderWrap),
/* harmony export */   "upgradeButton": () => (/* binding */ upgradeButton),
/* harmony export */   "upgradeCard": () => (/* binding */ upgradeCard),
/* harmony export */   "wsLeft": () => (/* binding */ wsLeft)
/* harmony export */ });
/* harmony import */ var app_client_ui_transientInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/ui/transientInput */ "./app/client/ui/transientInput.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/buttons */ "./app/client/ui2018/buttons.ts");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popweasel */ "./node_modules/popweasel/dist/index.js");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(popweasel__WEBPACK_IMPORTED_MODULE_5__);






const docMenu = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  flex-grow: 1;
  max-width: 100%;
`);
const docList = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  height: 100%;
  padding: 32px 64px 24px 64px;
  overflow-y: auto;
  position: relative;
  display: flex;

  &:after {
    content: "";
    display: block;
    height: 64px;
  }
  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.mediaSmall} {
    & {
      padding: 32px 24px 24px 24px;
    }
  }
  @media print {
    & {
      display: none;
    }
  }
`);
const listHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  min-height: 32px;
  line-height: 32px;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.text};
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.vars.xxxlargeFontSize};
  font-weight: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.vars.headerControlTextWeight};
`);
const docListHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(listHeader, `
  margin-bottom: 24px;
`);
const templatesHeaderWrap = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;

  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.mediaSmall} {
    & {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`);
const templatesHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(listHeader, `
  cursor: pointer;
`);
const featuredTemplatesHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(docListHeader, `
  display: flex;
  align-items: center;
`);
const otherSitesHeader = templatesHeader;
const allDocsTemplates = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  display: flex;
`);
const docBlock = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.text};
  max-width: 550px;
  min-width: 300px;
  margin-bottom: 28px;

  &-icons {
    max-width: max-content;
    min-width: calc(min(550px, 100%));
  }
`);
const templatesDocBlock = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(docBlock, `
  margin-top: 32px;
`);
const otherSitesBlock = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.text};
  margin-bottom: 32px;
`);
const otherSitesButtons = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  display: flex;
  overflow: auto;
  padding-bottom: 16px;
  margin-top: 16px;
  margin-bottom: 28px;
  gap: 16px;
`);
const siteButton = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_4__.bigBasicButton, `
  flex: 0 0 auto;
`);
const docHeaderIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_2__.icon, `
  margin-right: 8px;
  margin-top: -3px;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.lightText};
`);
const pinnedDocsIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(docHeaderIcon, `
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.text};
`);
const featuredTemplatesIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_2__.icon, `
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.text};
  margin-right: 8px;
  width: 20px;
  height: 20px;
`);
const templatesHeaderIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(docHeaderIcon, `
  width: 24px;
  height: 24px;
`);
const otherSitesHeaderIcon = templatesHeaderIcon;
const docBlockHeader = `
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  margin-bottom: 8px;
  margin-right: -16px;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.text};
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.vars.mediumFontSize};
  font-weight: bold;
  &, &:hover, &:focus {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
`;
const docBlockHeaderLink = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("a", docBlockHeader);
const templateBlockHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", docBlockHeader);
const wsLeft = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.text};
  flex: 1 0 50%;
  min-width: 0px;
  margin-right: 24px;
`);
const docRowWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  position: relative;
  margin: 0px -16px 8px -16px;
  border-radius: 3px;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.vars.mediumFontSize};
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.text};
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.lightText};

  &:hover, &.weasel-popup-open, &-renaming {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.hover};
  }
`);
const docRowLink = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("a", `
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  outline: none;
  transition: background-color 2s;
  &, &:hover, &:focus {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
  &-no-access, &-no-access:hover, &-no-access:focus {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.disabledText};
    cursor: not-allowed;
  }
`);
const docLeft = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  flex: 1 0 50%;
  min-width: 0px;
  margin: 0 16px;
  display: flex;
  align-items: center;
`);
const docName = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  flex: 0 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`);
const docPinIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_2__.icon, `
  flex: none;
  margin-left: 4px;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.accentIcon};
`);
const docPublicIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_2__.icon, `
  flex: none;
  margin-left: auto;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.accentIcon};
`);
const docEditorInput = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(app_client_ui_transientInput__WEBPACK_IMPORTED_MODULE_0__.transientInput, `
  flex: 1 0 50%;
  min-width: 0px;
  margin: 0 16px;
  color: initial;
  font-size: inherit;
  line-height: initial;
`);
const docRowUpdatedAt = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  flex: 1 1 50%;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.lightText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
`);
const docMenuTrigger = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  flex: none;
  margin: 0 4px 0 auto;
  height: 24px;
  width: 24px;
  padding: 4px;
  line-height: 0px;
  border-radius: 3px;
  cursor: default;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.docMenuDocOptionsFg};
  .${docRowLink.className}:hover > & {
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.docMenuDocOptionsHoverFg};
  }
  &:hover, &.weasel-popup-open {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.docMenuDocOptionsHoverBg};
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.docMenuDocOptionsHoverFg};
  }
`);
const moveDocModalBody = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.modalBorderDark};
  margin: 0 -64px;
  height: 200px;
`);
const moveDocListItem = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  padding: 12px 64px;
  cursor: pointer;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.vars.mediumFontSize};

  &-selected {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.moveDocsSelectedBg};
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.moveDocsSelectedFg};
  }
  &-disabled {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.moveDocsDisabledFg};
    cursor: default;
  }
`);
const moveDocListText = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
`);
const moveDocListHintText = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)(moveDocListText, `
  text-align: right;
`);
const spinner = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  display: flex;
  align-items: center;
  height: 80px;
  margin: auto;
  margin-top: 80px;
`);
const prefSelectors = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  float: right;
  display: flex;
  align-items: center;
`);
const sortSelector = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  margin-right: 24px;

  /* negate the styles of a select that normally looks like a button */
  border: none;
  display: inline-flex;
  height: unset;
  line-height: unset;
  align-items: center;
  border-radius: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.vars.controlBorderRadius};
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.controlFg};
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.controlFg};
  background-color: unset;

  &:focus, &:hover {
    outline: none;
    box-shadow: none;
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.hover};
  }
  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.mediaSmall} {
    & {
      margin-right: 0;
    }
  }
`);
const upgradeButton = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  margin-left: 32px;

  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.mediaSmall} {
    & {
      margin-left: 8px;
    }
  }
`);
const upgradeCard = (0,grainjs__WEBPACK_IMPORTED_MODULE_3__.styled)("div", `
  margin-left: 64px;
`);


/***/ }),

/***/ "./app/client/ui/DocTour.ts":
/*!**********************************!*\
  !*** ./app/client/ui/DocTour.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startDocTour": () => (/* binding */ startDocTour)
/* harmony export */ });
/* harmony import */ var _popperjs_core_lib_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @popperjs/core/lib/enums */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/gristUrlState */ "./app/client/models/gristUrlState.ts");
/* harmony import */ var app_client_ui_ExampleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui/ExampleCard */ "./app/client/ui/ExampleCard.ts");
/* harmony import */ var app_client_ui_OnBoardingPopups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui/OnBoardingPopups */ "./app/client/ui/OnBoardingPopups.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_IconList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui2018/IconList */ "./app/client/ui2018/IconList.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));








const sortBy = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__.makeT)("DocTour");
async function startDocTour(docData, docComm, onFinishCB) {
  const docTour = await makeDocTour(docData, docComm) || invalidDocTour;
  exposeDocTour(docTour);
  (0,app_client_ui_OnBoardingPopups__WEBPACK_IMPORTED_MODULE_3__.startOnBoarding)(docTour, onFinishCB);
}
const invalidDocTour = [{
  title: t("No valid document tour"),
  body: t("Cannot construct a document tour from the data in this document. Ensure there is a table named GristDocTour with columns Title, Body, Placement, and Location."),
  selector: "document",
  showHasModal: true
}];
async function makeDocTour(docData, docComm) {
  const tableId = "GristDocTour";
  if (!docData.getTable(tableId)) {
    return null;
  }
  await docComm.waitForInitialization();
  await docData.fetchTable(tableId);
  const tableData = docData.getTable(tableId);
  const result = sortBy(tableData.getRowIds(), tableData.getRowPropFunc("manualSort")).map((rowId) => {
    function getValue(colId) {
      return String(tableData.getValue(rowId, colId) || "");
    }
    const title = getValue("Title");
    let body = getValue("Body");
    const linkText = getValue("Link_Text");
    const linkUrl = getValue("Link_URL");
    const linkIcon = getValue("Link_Icon");
    const locationValue = getValue("Location");
    let placement = getValue("Placement");
    if (!(title || body)) {
      return null;
    }
    const urlState = (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_1__.sameDocumentUrlState)(locationValue);
    if ((0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.isNarrowScreen)() || !_popperjs_core_lib_enums__WEBPACK_IMPORTED_MODULE_7__.placements.includes(placement)) {
      placement = "auto";
    }
    let validLinkUrl = true;
    try {
      new URL(linkUrl);
    } catch (e) {
      validLinkUrl = false;
    }
    if (validLinkUrl && linkText) {
      body = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("div", (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("p", body), (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("p", (0,app_client_ui_ExampleCard__WEBPACK_IMPORTED_MODULE_2__.cssButtons)((0,app_client_ui_ExampleCard__WEBPACK_IMPORTED_MODULE_2__.cssLinkBtn)(app_client_ui2018_IconList__WEBPACK_IMPORTED_MODULE_5__.IconList.includes(linkIcon) ? (0,app_client_ui_ExampleCard__WEBPACK_IMPORTED_MODULE_2__.cssLinkIcon)(linkIcon) : null, linkText, { href: linkUrl, target: "_blank" }))));
    }
    return {
      title,
      body,
      placement,
      urlState,
      selector: ".active_cursor",
      showHasModal: !(urlState == null ? void 0 : urlState.hash)
    };
  }).filter((x) => x !== null);
  if (!result.length) {
    return null;
  }
  return result;
}
function exposeDocTour(docTour) {
  window._gristDocTour = () => docTour.map((msg) => {
    var _a, _b;
    return __spreadProps(__spreadValues({}, msg), {
      body: typeof msg.body === "string" ? msg.body : (_a = msg.body) == null ? void 0 : _a.outerHTML.replace(/_grain\d+_/g, "_grainXXX_"),
      urlState: (_b = msg.urlState) == null ? void 0 : _b.hash
    });
  });
}


/***/ }),

/***/ "./app/client/ui/DocumentSettings.ts":
/*!*******************************************!*\
  !*** ./app/client/ui/DocumentSettings.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocSettingsPage": () => (/* binding */ DocSettingsPage),
/* harmony export */   "getSupportedEngineChoices": () => (/* binding */ getSupportedEngineChoices)
/* harmony export */ });
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_lib_ACSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/lib/ACSelect */ "./app/client/lib/ACSelect.ts");
/* harmony import */ var app_client_lib_copyToClipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/lib/copyToClipboard */ "./app/client/lib/copyToClipboard.ts");
/* harmony import */ var app_client_lib_ACIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/lib/ACIndex */ "./app/client/lib/ACIndex.ts");
/* harmony import */ var app_client_ui_DocMenuCss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui/DocMenuCss */ "./app/client/ui/DocMenuCss.ts");
/* harmony import */ var app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/ui/tooltips */ "./app/client/ui/tooltips.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_client_widgets_CurrencyPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/client/widgets/CurrencyPicker */ "./app/client/widgets/CurrencyPicker.ts");
/* harmony import */ var app_client_widgets_TZAutocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/client/widgets/TZAutocomplete */ "./app/client/widgets/TZAutocomplete.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var app_common_Locales__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/common/Locales */ "./app/common/Locales.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/client/models/AppModel */ "./app/client/models/AppModel.ts");
/* harmony import */ var app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/client/ui2018/modals */ "./app/client/ui2018/modals.ts");
















const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__.makeT)("DocumentSettings");
class DocSettingsPage extends grainjs__WEBPACK_IMPORTED_MODULE_1__.Disposable {
  constructor(_gristDoc) {
    super();
    this._gristDoc = _gristDoc;
    this._docInfo = this._gristDoc.docInfo;
    this._timezone = this._docInfo.timezone;
    this._locale = this._docInfo.documentSettingsJson.prop("locale");
    this._currency = this._docInfo.documentSettingsJson.prop("currency");
    this._engine = grainjs__WEBPACK_IMPORTED_MODULE_1__.Computed.create(this, (use) => use(this._docInfo.documentSettingsJson.prop("engine"))).onWrite((val) => this._setEngine(val));
  }
  buildDom() {
    const canChangeEngine = getSupportedEngineChoices().length > 0;
    const docPageModel = this._gristDoc.docPageModel;
    return cssContainer(cssHeader(t("Document Settings")), cssDataRow(t("Time Zone:")), cssDataRow(grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.create(app_client_widgets_TZAutocomplete__WEBPACK_IMPORTED_MODULE_10__.buildTZAutocomplete, moment_timezone__WEBPACK_IMPORTED_MODULE_13__, (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.fromKo)(this._timezone), (val) => this._timezone.saveOnly(val))), cssDataRow(t("Locale:")), cssDataRow(grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.create(buildLocaleSelect, this._locale)), cssDataRow(t("Currency:")), cssDataRow(grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.domComputed((0,grainjs__WEBPACK_IMPORTED_MODULE_1__.fromKo)(this._locale), (l) => grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.create(app_client_widgets_CurrencyPicker__WEBPACK_IMPORTED_MODULE_9__.buildCurrencyPicker, (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.fromKo)(this._currency), (val) => this._currency.saveOnly(val), { defaultCurrencyLabel: t("Local currency ({{currency}})", { currency: (0,app_common_Locales__WEBPACK_IMPORTED_MODULE_12__.getCurrency)(l) }) }))), canChangeEngine ? [
      cssDataRow(t("Engine (experimental {{span}} change at own risk):", {
        span: (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.dom)("span", "\u2620", grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.style("cursor", "pointer"), grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.on("click", async () => {
          await docPageModel.appModel.api.getDocAPI(docPageModel.currentDocId.get()).forceReload();
          document.location.reload();
        }))
      })),
      (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_8__.select)(this._engine, getSupportedEngineChoices())
    ] : null, cssHeader(t("API")), cssDataRow(t("This document's ID (for API use):")), cssDataRow(cssHoverWrapper((0,grainjs__WEBPACK_IMPORTED_MODULE_1__.dom)("tt", docPageModel.currentDocId.get()), grainjs__WEBPACK_IMPORTED_MODULE_1__.dom.on("click", async (e, d) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      (0,app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_6__.showTransientTooltip)(d, t("Document ID copied to clipboard"), {
        key: "copy-document-id"
      });
      await (0,app_client_lib_copyToClipboard__WEBPACK_IMPORTED_MODULE_3__.copyToClipboard)(docPageModel.currentDocId.get());
    }))));
  }
  async _setEngine(val) {
    (0,app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_15__.confirmModal)(t("Save and Reload"), t("Ok"), () => this._doSetEngine(val));
  }
  async _doSetEngine(val) {
    const docPageModel = this._gristDoc.docPageModel;
    if (this._engine.get() !== val) {
      await this._docInfo.documentSettingsJson.prop("engine").saveOnly(val);
      await docPageModel.appModel.api.getDocAPI(docPageModel.currentDocId.get()).forceReload();
    }
  }
}
function buildLocaleSelect(owner, locale) {
  const localeList = app_common_Locales__WEBPACK_IMPORTED_MODULE_12__.locales.map((l) => ({
    value: l.name,
    label: l.name,
    locale: l.code,
    cleanText: l.name.trim().toLowerCase()
  })).sort((0,app_common_gutil__WEBPACK_IMPORTED_MODULE_11__.propertyCompare)("label"));
  const acIndex = new app_client_lib_ACIndex__WEBPACK_IMPORTED_MODULE_4__.ACIndexImpl(localeList, 200, true);
  const textObs = grainjs__WEBPACK_IMPORTED_MODULE_1__.Computed.create(owner, (use) => {
    var _a;
    const localeCode = use(locale);
    const localeName = ((_a = app_common_Locales__WEBPACK_IMPORTED_MODULE_12__.locales.find((l) => l.code === localeCode)) == null ? void 0 : _a.name) || localeCode;
    return localeName;
  });
  return (0,app_client_lib_ACSelect__WEBPACK_IMPORTED_MODULE_2__.buildACSelect)(owner, {
    acIndex,
    valueObs: textObs,
    save(_value, item) {
      if (!item) {
        throw new Error("Invalid locale");
      }
      locale.saveOnly(item.locale).catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_14__.reportError);
    }
  }, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.testId)("locale-autocomplete"));
}
const cssHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.styled)(app_client_ui_DocMenuCss__WEBPACK_IMPORTED_MODULE_5__.docListHeader, `
  margin-bottom: 0;
  &:not(:first-of-type) {
    margin-top: 40px;
  }
`);
const cssContainer = (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.styled)("div", `
  overflow-y: auto;
  position: relative;
  height: 100%;
  padding: 32px 64px 24px 64px;
  max-width: 487px;
  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.mediaSmall} {
    & {
      padding: 32px 24px 24px 24px;
    }
  }
`);
const cssHoverWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.styled)("div", `
  display: inline-block;
  cursor: default;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.lightText};
  transition: background 0.05s;
  &:hover {
    background: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.lightHover};
  }
`);
const cssDataRow = (0,grainjs__WEBPACK_IMPORTED_MODULE_1__.styled)("div", `
  margin: 16px 0px;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.vars.largeFontSize};
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_7__.theme.text};
`);
function getSupportedEngineChoices() {
  const gristConfig = window.gristConfig || {};
  return gristConfig.supportEngines || [];
}


/***/ }),

/***/ "./app/client/ui/DuplicateTable.ts":
/*!*****************************************!*\
  !*** ./app/client/ui/DuplicateTable.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "duplicateTable": () => (/* binding */ duplicateTable)
/* harmony export */ });
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_ui_cssInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui/cssInput */ "./app/client/ui/cssInput.ts");
/* harmony import */ var app_client_ui_MakeCopyMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui/MakeCopyMenu */ "./app/client/ui/MakeCopyMenu.ts");
/* harmony import */ var app_client_ui2018_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui2018/checkbox */ "./app/client/ui2018/checkbox.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/ui2018/links */ "./app/client/ui2018/links.ts");
/* harmony import */ var app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/ui2018/modals */ "./app/client/ui2018/modals.ts");
/* harmony import */ var app_common_gristUrls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/common/gristUrls */ "./app/common/gristUrls.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");










const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__.makeT)("DuplicateTable");
const testId = (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.makeTestId)("test-duplicate-table-");
function duplicateTable(gristDoc, tableId, { onSuccess } = {}) {
  (0,app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_7__.saveModal)((_ctl, owner) => {
    const duplicateTableModal = DuplicateTableModal.create(owner, gristDoc, tableId);
    return {
      title: "Duplicate Table",
      body: duplicateTableModal.buildDom(),
      saveFunc: async () => {
        const response = await duplicateTableModal.save();
        onSuccess == null ? void 0 : onSuccess(response);
      },
      saveDisabled: duplicateTableModal.saveDisabled,
      width: "normal"
    };
  });
}
class DuplicateTableModal extends grainjs__WEBPACK_IMPORTED_MODULE_9__.Disposable {
  constructor(_gristDoc, _tableId) {
    super();
    this._gristDoc = _gristDoc;
    this._tableId = _tableId;
    this._newTableName = grainjs__WEBPACK_IMPORTED_MODULE_9__.Observable.create(this, "");
    this._includeData = grainjs__WEBPACK_IMPORTED_MODULE_9__.Observable.create(this, false);
    this._saveDisabled = grainjs__WEBPACK_IMPORTED_MODULE_9__.Computed.create(this, this._newTableName, (_use, name) => !name.trim());
  }
  get saveDisabled() {
    return this._saveDisabled;
  }
  save() {
    return this._duplicateTable();
  }
  buildDom() {
    return [
      (0,app_client_ui_MakeCopyMenu__WEBPACK_IMPORTED_MODULE_2__.cssField)((0,grainjs__WEBPACK_IMPORTED_MODULE_9__.input)(this._newTableName, { onInput: true }, { placeholder: t("Name for new table") }, (elem) => {
        setTimeout(() => {
          elem.focus();
        }, 20);
      }, grainjs__WEBPACK_IMPORTED_MODULE_9__.dom.on("focus", (_ev, elem) => {
        elem.select();
      }), grainjs__WEBPACK_IMPORTED_MODULE_9__.dom.cls(app_client_ui_cssInput__WEBPACK_IMPORTED_MODULE_1__.cssInput.className), testId("name"))),
      cssWarning(cssWarningIcon("Warning"), (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.dom)("div", t("Instead of duplicating tables, it's usually better to segment data using linked views. {{link}}", { link: (0,app_client_ui2018_links__WEBPACK_IMPORTED_MODULE_6__.cssLink)({ href: app_common_gristUrls__WEBPACK_IMPORTED_MODULE_8__.commonUrls.helpLinkingWidgets, target: "_blank" }, "Read More.") }))),
      (0,app_client_ui_MakeCopyMenu__WEBPACK_IMPORTED_MODULE_2__.cssField)(cssCheckbox(this._includeData, t("Copy all data in addition to the table structure."), testId("copy-all-data"))),
      grainjs__WEBPACK_IMPORTED_MODULE_9__.dom.maybe(this._includeData, () => cssWarning(cssWarningIcon("Warning"), (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.dom)("div", t("Only the document default access rules will apply to the copy.")), testId("acl-warning")))
    ];
  }
  _duplicateTable() {
    const { docData } = this._gristDoc;
    const [newTableName, includeData] = [this._newTableName.get(), this._includeData.get()];
    return docData.sendAction(["DuplicateTable", this._tableId, newTableName, includeData]);
  }
}
const cssCheckbox = (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.styled)(app_client_ui2018_checkbox__WEBPACK_IMPORTED_MODULE_3__.labeledSquareCheckbox, `
  margin-top: 8px;
`);
const cssWarning = (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.styled)("div", `
  display: flex;
  column-gap: 8px;
`);
const cssWarningIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_9__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_5__.icon, `
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_4__.colors.orange};
  flex-shrink: 0;
`);


/***/ }),

/***/ "./app/client/ui/ExampleCard.ts":
/*!**************************************!*\
  !*** ./app/client/ui/ExampleCard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssBigIcon": () => (/* binding */ cssBigIcon),
/* harmony export */   "cssButtons": () => (/* binding */ cssButtons),
/* harmony export */   "cssCloseButton": () => (/* binding */ cssCloseButton),
/* harmony export */   "cssLinkBtn": () => (/* binding */ cssLinkBtn),
/* harmony export */   "cssLinkIcon": () => (/* binding */ cssLinkIcon),
/* harmony export */   "showExampleCard": () => (/* binding */ showExampleCard)
/* harmony export */ });
/* harmony import */ var app_client_ui_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/ui/transitions */ "./app/client/ui/transitions.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui2018/links */ "./app/client/ui2018/links.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");





let prevCardClose = null;
function showExampleCard(example, toolInfo) {
  const { elem: btnElem, markAsSeen, reopen } = toolInfo;
  function close() {
    prevCardClose = null;
    collapseAndRemoveCard(cardElem, btnElem.getBoundingClientRect());
    markAsSeen();
  }
  const card = example.welcomeCard;
  if (!card) {
    return null;
  }
  const cardElem = cssCard(cssImage({ src: example.imgUrl }), cssBody(cssTitle(card.title), cssInfo(card.text), cssButtons(cssLinkBtn(cssLinkIcon("Page"), card.tutorialName, { href: example.tutorialUrl, target: "_blank" }))), cssCloseButton(cssBigIcon("CrossBig"), grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.on("click", close), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.testId)("example-card-close")), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.testId)("example-card"));
  document.body.appendChild(cardElem);
  if (reopen) {
    expandCard(cardElem, btnElem.getBoundingClientRect());
  }
  prevCardClose == null ? void 0 : prevCardClose();
  prevCardClose = () => disposeCard(cardElem);
}
function disposeCard(cardElem) {
  grainjs__WEBPACK_IMPORTED_MODULE_4__.dom.domDispose(cardElem);
  cardElem.remove();
}
function collapseAndRemoveCard(card, collapsedRect) {
  const watcher = new app_client_ui_transitions__WEBPACK_IMPORTED_MODULE_0__.TransitionWatcher(card);
  watcher.onDispose(() => disposeCard(card));
  collapseCard(card, collapsedRect);
}
function collapseCard(card, collapsedRect) {
  const rect = card.getBoundingClientRect();
  const originX = collapsedRect.left + collapsedRect.width / 2 - rect.left;
  const originY = collapsedRect.top + collapsedRect.height / 2 - rect.top;
  Object.assign(card.style, {
    transform: `scale(${collapsedRect.width / rect.width}, ${collapsedRect.height / rect.height})`,
    transformOrigin: `${originX}px ${originY}px`,
    opacity: "0"
  });
}
function expandCard(card, collapsedRect) {
  (0,app_client_ui_transitions__WEBPACK_IMPORTED_MODULE_0__.prepareForTransition)(card, () => collapseCard(card, collapsedRect));
  Object.assign(card.style, {
    transform: "",
    opacity: "",
    visibility: "visible"
  });
}
const cssCard = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)("div", `
  position: absolute;
  left: 24px;
  bottom: 24px;
  margin-right: 24px;
  max-width: 624px;
  padding: 32px 56px 32px 32px;
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.popupBg};
  box-shadow: 0 2px 18px 0 ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.popupInnerShadow}, 0 0 1px 0 ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.popupOuterShadow};
  display: flex;
  overflow: hidden;
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  transition-timing-func: ease-in;
  --title-font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.vars.headerControlFontSize};

  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.mediaXSmall} {
    & {
      flex-direction: column;
      padding: 32px;
      --title-font-size: 18px;
    }
  }
`);
const cssImage = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)("img", `
  flex: none;
  width: 180px;
  height: 140px;
  margin: 0 16px 0 -8px;
  @media ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.mediaXSmall} {
    & {
      margin: auto;
    }
  }
`);
const cssBody = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.text};
  min-width: 0px;
`);
const cssTitle = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.text};
  font-size: var(--title-font-size);
  font-weight: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.vars.headerControlTextWeight};
  margin-bottom: 16px;
`);
const cssInfo = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)("div", `
  margin: 16px 0 24px 0;
  line-height: 1.6;
`);
const cssButtons = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)("div", `
  display: flex;
`);
const cssLinkBtn = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)(app_client_ui2018_links__WEBPACK_IMPORTED_MODULE_3__.cssLink, `
  &:not(:last-child) {
    margin-right: 32px;
  }
`);
const cssLinkIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_2__.icon, `
  margin-right: 8px;
  margin-top: -2px;
`);
const cssCloseButton = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)("div", `
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.popupCloseButtonFg};

  &:hover {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.hover};
  }
`);
const cssBigIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_4__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_2__.icon, `
  padding: 12px;
`);


/***/ }),

/***/ "./app/client/ui/GridViewMenus.ts":
/*!****************************************!*\
  !*** ./app/client/ui/GridViewMenus.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnAddMenu": () => (/* binding */ ColumnAddMenu),
/* harmony export */   "ColumnContextMenu": () => (/* binding */ ColumnContextMenu),
/* harmony export */   "MultiColumnMenu": () => (/* binding */ MultiColumnMenu),
/* harmony export */   "calcFieldsCondition": () => (/* binding */ calcFieldsCondition),
/* harmony export */   "freezeAction": () => (/* binding */ freezeAction)
/* harmony export */ });
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_common_SortSpec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/common/SortSpec */ "./app/common/SortSpec.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");







const isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__.makeT)("GridViewMenus");
function ColumnAddMenu(gridView, viewSection) {
  return [
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItem)(() => gridView.addNewColumn(), t("Add Column")),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuDivider)(),
    ...viewSection.hiddenColumns().map((col) => (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItem)(() => {
      gridView.showColumn(col.id(), viewSection.viewFields().peekLength);
    }, t("Show column {{- label}}", { label: col.label() })))
  ];
}
function calcFieldsCondition(fields, condition) {
  return fields.every(condition) ? true : fields.some(condition) ? "mixed" : false;
}
function ColumnContextMenu(options) {
  const { disableModify, filterOpenFunc, colId, sortSpec, isReadonly } = options;
  const disableForReadonlyColumn = grainjs__WEBPACK_IMPORTED_MODULE_6__.dom.cls("disabled", Boolean(disableModify) || isReadonly);
  const addToSortLabel = getAddToSortLabel(sortSpec, colId);
  return [
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.fieldTabOpen, t("Column Options")),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItem)(filterOpenFunc, t("Filter Data")),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuDivider)({ style: "margin-bottom: 0;" }),
    cssRowMenuItem(customMenuItem(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.sortAsc.run, (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("span", t("Sort"), { style: "flex: 1  0 auto; margin-right: 8px;" }, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("sort-label")), (0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_3__.icon)("Sort", grainjs__WEBPACK_IMPORTED_MODULE_6__.dom.style("transform", "scaley(-1)")), "A-Z", grainjs__WEBPACK_IMPORTED_MODULE_6__.dom.style("flex", ""), cssCustomMenuItem.cls("-selected", app_common_SortSpec__WEBPACK_IMPORTED_MODULE_5__.Sort.containsOnly(sortSpec, colId, app_common_SortSpec__WEBPACK_IMPORTED_MODULE_5__.Sort.ASC)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("sort-asc")), customMenuItem(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.sortDesc.run, (0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_3__.icon)("Sort"), "Z-A", cssCustomMenuItem.cls("-selected", app_common_SortSpec__WEBPACK_IMPORTED_MODULE_5__.Sort.containsOnly(sortSpec, colId, app_common_SortSpec__WEBPACK_IMPORTED_MODULE_5__.Sort.DESC)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("sort-dsc")), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("sort")),
    addToSortLabel ? [
      cssRowMenuItem(customMenuItem(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.addSortAsc.run, cssRowMenuLabel(addToSortLabel, (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("add-to-sort-label")), (0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_3__.icon)("Sort", grainjs__WEBPACK_IMPORTED_MODULE_6__.dom.style("transform", "scaley(-1)")), "A-Z", cssCustomMenuItem.cls("-selected", app_common_SortSpec__WEBPACK_IMPORTED_MODULE_5__.Sort.contains(sortSpec, colId, app_common_SortSpec__WEBPACK_IMPORTED_MODULE_5__.Sort.ASC)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("add-to-sort-asc")), customMenuItem(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.addSortDesc.run, (0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_3__.icon)("Sort"), "Z-A", cssCustomMenuItem.cls("-selected", app_common_SortSpec__WEBPACK_IMPORTED_MODULE_5__.Sort.contains(sortSpec, colId, app_common_SortSpec__WEBPACK_IMPORTED_MODULE_5__.Sort.DESC)), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("add-to-sort-dsc")), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("add-to-sort"))
    ] : null,
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuDivider)({ style: "margin-bottom: 0; margin-top: 0;" }),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItem)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.sortFilterTabOpen.run, t("More sort options ..."), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("more-sort-options")),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuDivider)({ style: "margin-top: 0;" }),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.renameField, t("Rename column"), disableForReadonlyColumn),
    freezeMenuItemCmd(options),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuDivider)(),
    MultiColumnMenu((options.disableFrozenMenu = true, options)),
    (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.testId)("column-menu")
  ];
}
function MultiColumnMenu(options) {
  const disableForReadonlyColumn = grainjs__WEBPACK_IMPORTED_MODULE_6__.dom.cls("disabled", Boolean(options.disableModify) || options.isReadonly);
  const disableForReadonlyView = grainjs__WEBPACK_IMPORTED_MODULE_6__.dom.cls("disabled", options.isReadonly);
  const num = options.numColumns;
  const nameClearColumns = options.isFiltered ? t("Reset {{count}} entire columns", { count: num }) : t("Reset {{count}} columns", { count: num });
  const nameDeleteColumns = t("Delete {{count}} columns", { count: num });
  const nameHideColumns = t("Hide {{count}} columns", { count: num });
  const frozenMenu = options.disableFrozenMenu ? null : freezeMenuItemCmd(options);
  return [
    frozenMenu ? [frozenMenu, (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuDivider)()] : null,
    options.isFormula ? (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.convertFormulasToData, t("Convert formula to data"), disableForReadonlyColumn) : null,
    options.isFormula !== true ? (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.clearValues, t("Clear values"), disableForReadonlyColumn) : null,
    !options.isRaw ? (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.hideFields, nameHideColumns, disableForReadonlyView) : null,
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.clearColumns, nameClearColumns, disableForReadonlyColumn),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.deleteFields, nameDeleteColumns, disableForReadonlyColumn),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuDivider)(),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.insertFieldBefore, t("Insert column to the {{to}}", { to: "left" }), disableForReadonlyView),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.insertFieldAfter, t("Insert column to the {{to}}", { to: "right" }), disableForReadonlyView)
  ];
}
function freezeAction(options) {
  const length = options.numColumns;
  if (length === 0) {
    return null;
  }
  const indices = options.columnIndices;
  const firstColumnIndex = indices[0];
  const lastColumnIndex = indices[indices.length - 1];
  const numFrozen = options.numFrozen;
  if (lastColumnIndex == options.totalColumnCount - 1) {
    return null;
  }
  const isNormalColumn = length === 1 && firstColumnIndex + 1 > numFrozen;
  const isFrozenColumn = length === 1 && firstColumnIndex + 1 <= numFrozen;
  const isSet = length > 1;
  const isLastFrozenSet = isSet && lastColumnIndex + 1 === numFrozen;
  const isFirstNormalSet = isSet && firstColumnIndex === numFrozen;
  const isSpanSet = isSet && firstColumnIndex <= numFrozen && lastColumnIndex >= numFrozen;
  let text = "";
  if (!isSet) {
    if (isNormalColumn) {
      if (firstColumnIndex === 0 || firstColumnIndex === numFrozen) {
        text = t("Freeze {{count}} columns", { count: 1 });
      } else {
        const properNumber = firstColumnIndex - numFrozen + 1;
        text = numFrozen ? t("Freeze {{count}} more columns", { count: properNumber }) : t("Freeze {{count}} columns", { count: properNumber });
      }
      return {
        text,
        numFrozen: firstColumnIndex + 1
      };
    } else if (isFrozenColumn) {
      if (firstColumnIndex + 1 === numFrozen) {
        text = t("Unfreeze {{count}} columns", { count: 1 });
      } else {
        const properNumber = numFrozen - firstColumnIndex;
        text = properNumber === numFrozen ? t("Unfreeze all columns") : t("Unfreeze {{count}} columns", { count: properNumber });
      }
      return {
        text,
        numFrozen: indices[0]
      };
    } else {
      return null;
    }
  } else {
    if (isLastFrozenSet) {
      text = t("Unfreeze {{count}} columns", { count: length });
      return {
        text,
        numFrozen: numFrozen - length
      };
    } else if (isFirstNormalSet) {
      text = t("Freeze {{count}} columns", { count: length });
      return {
        text,
        numFrozen: numFrozen + length
      };
    } else if (isSpanSet) {
      const toFreeze = lastColumnIndex + 1 - numFrozen;
      text = t("Freeze {{count}} more columns", { count: toFreeze });
      return {
        text,
        numFrozen: numFrozen + toFreeze
      };
    } else {
      return null;
    }
  }
}
function freezeMenuItemCmd(options) {
  const toggle = freezeAction(options);
  if (!toggle) {
    return null;
  }
  return (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.toggleFreeze, toggle.text);
}
function getAddToSortLabel(sortSpec, colId) {
  const columnsInSpec = sortSpec.map((n) => app_common_SortSpec__WEBPACK_IMPORTED_MODULE_5__.Sort.getColRef(n));
  if (sortSpec.length !== 0 && !isEqual(columnsInSpec, [colId])) {
    const index = columnsInSpec.indexOf(colId);
    if (index > -1) {
      return t("Sorted (#{{count}})", { count: index + 1 });
    } else {
      return t("Add to sort");
    }
  }
}
const cssRowMenuItem = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.styled)((...args) => (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("li", { tabindex: "-1" }, ...args), `
  display: flex;
  outline: none;
`);
const cssRowMenuLabel = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.styled)("div", `
  margin-right: 8px;
  flex: 1 0 auto;
`);
const cssCustomMenuItem = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.styled)("div", `
  padding: 8px 8px;
  display: flex;
  &:not(:hover) {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.theme.menuBg};
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.theme.menuItemFg};
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.theme.menuItemFg};
  }
  &:last-of-type {
    padding-right: 24px;
    flex: 0 0 auto;
  }
  &:first-of-type {
    padding-left: 24px;
    flex: 1 0 auto;
  }
  &-selected, &-selected:not(:hover) {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.theme.menuItemSelectedBg};
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.theme.menuItemSelectedFg};
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_2__.theme.menuItemSelectedFg};
  }
`);
function customMenuItem(action, ...args) {
  const element = cssCustomMenuItem(...args, grainjs__WEBPACK_IMPORTED_MODULE_6__.dom.on("click", () => action()));
  return element;
}


/***/ }),

/***/ "./app/client/ui/MenuToggle.ts":
/*!*************************************!*\
  !*** ./app/client/ui/MenuToggle.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuToggle": () => (/* binding */ menuToggle)
/* harmony export */ });
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");



function menuToggle(obs, ...args) {
  const contextMenu = cssMenuToggle((0,app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_1__.icon)("Dropdown", grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.cls("menu_toggle_icon")), ...args);
  return contextMenu;
}
const cssMenuToggle = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("div.menu_toggle", `
  background: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuToggleBg};
  cursor: pointer;
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuToggleFg};
  border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuToggleBorder};
  border-radius: 4px;
  &:hover  {
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuToggleHoverFg};
    border-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuToggleHoverFg};
  }
  &:active  {
    --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuToggleActiveFg};
    border-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuToggleActiveFg};
  }
  & > .menu_toggle_icon {
    display: block; /* don't create a line */
  }
`);


/***/ }),

/***/ "./app/client/ui/OnBoardingPopups.ts":
/*!*******************************************!*\
  !*** ./app/client/ui/OnBoardingPopups.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTourActive": () => (/* binding */ isTourActive),
/* harmony export */   "startOnBoarding": () => (/* binding */ startOnBoarding)
/* harmony export */ });
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var app_client_lib_FocusLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/lib/FocusLayer */ "./app/client/lib/FocusLayer.ts");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_lib_Mousetrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/lib/Mousetrap */ "./app/client/lib/Mousetrap.js");
/* harmony import */ var app_client_lib_Mousetrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(app_client_lib_Mousetrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/buttons */ "./app/client/ui2018/buttons.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/models/gristUrlState */ "./app/client/models/gristUrlState.ts");
/* harmony import */ var app_common_delay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/common/delay */ "./app/common/delay.ts");
/* harmony import */ var app_client_models_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
/* harmony import */ var _ExampleCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ExampleCard */ "./app/client/ui/ExampleCard.ts");







const range = __webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js");




const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_2__.makeT)("OnBoardingPopups");
const testId = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.makeTestId)("test-onboarding-");
const tourSingleton = grainjs__WEBPACK_IMPORTED_MODULE_0__.Holder.create(null);
function startOnBoarding(messages, onFinishCB) {
  const ctl = OnBoardingPopupsCtl.create(tourSingleton, messages, onFinishCB);
  ctl.start().catch(app_client_models_errors__WEBPACK_IMPORTED_MODULE_8__.reportError);
}
function isTourActive() {
  return !tourSingleton.isEmpty();
}
class OnBoardingError extends Error {
  constructor(message) {
    super(message);
    this.name = "OnBoardingError";
  }
}
let ctlIndex = 0;
class OnBoardingPopupsCtl extends grainjs__WEBPACK_IMPORTED_MODULE_0__.Disposable {
  constructor(_messages, _onFinishCB) {
    super();
    this._messages = _messages;
    this._onFinishCB = _onFinishCB;
    this._arrowEl = buildArrow();
    if (this._messages.length === 0) {
      throw new OnBoardingError("messages should not be an empty list");
    }
    ctlIndex = Math.min(ctlIndex, this._messages.length - 1);
    this.onDispose(() => {
      var _a;
      (_a = this._openPopupCtl) == null ? void 0 : _a.close();
    });
  }
  async start() {
    this._showOverlay();
    await this._move(0);
    app_client_lib_Mousetrap__WEBPACK_IMPORTED_MODULE_3__.setPaused(true);
    this.onDispose(() => {
      app_client_lib_Mousetrap__WEBPACK_IMPORTED_MODULE_3__.setPaused(false);
    });
  }
  _finish() {
    this._onFinishCB();
    this.dispose();
  }
  async _move(movement, maybeClose = false) {
    var _a;
    const newIndex = ctlIndex + movement;
    const entry = this._messages[newIndex];
    if (!entry) {
      if (maybeClose) {
        ctlIndex = 0;
        this._finish();
      }
      return;
    }
    ctlIndex = newIndex;
    if (entry.skip) {
      await this._move(movement || 1);
      return;
    }
    (_a = this._openPopupCtl) == null ? void 0 : _a.close();
    if (entry.urlState) {
      await (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_6__.urlState)().pushUrl(entry.urlState);
      await (0,app_common_delay__WEBPACK_IMPORTED_MODULE_7__.delay)(100);
    }
    if (entry.showHasModal) {
      this._showHasModal();
    } else {
      await this._showHasPopup(movement);
    }
  }
  async _showHasPopup(movement) {
    const content = this._buildPopupContent();
    const entry = this._messages[ctlIndex];
    const elem = document.querySelector(entry.selector);
    const { placement } = entry;
    if (!elem) {
      console.warn(`On boarding tour: element ${entry.selector} not found!`);
      return this._move(movement || 1);
    }
    function close() {
      popper.destroy();
      grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.domDispose(content);
      content.remove();
    }
    this._openPopupCtl = { close };
    document.body.appendChild(content);
    this._addFocusLayer(content);
    const adjacentPadding = entry.cropPadding ? this._getAdjacentPadding(elem, placement) : 0;
    const popper = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_10__.createPopper)(elem, content, {
      placement,
      modifiers: [{
        name: "arrow",
        options: {
          element: this._arrowEl
        }
      }, {
        name: "offset",
        options: {
          offset: [0, 12 - adjacentPadding]
        }
      }]
    });
  }
  _addFocusLayer(container) {
    grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.autoDisposeElem(container, new app_client_lib_FocusLayer__WEBPACK_IMPORTED_MODULE_1__.FocusLayer({
      defaultFocusElem: container,
      allowFocus: (elem) => elem !== document.body
    }));
  }
  _getAdjacentPadding(elem, placement) {
    if (placement) {
      let padding = "";
      if (placement.includes("bottom")) {
        padding = getComputedStyle(elem).paddingBottom;
      } else if (placement.includes("top")) {
        padding = getComputedStyle(elem).paddingTop;
      } else if (placement.includes("left")) {
        padding = getComputedStyle(elem).paddingLeft;
      } else if (placement.includes("right")) {
        padding = getComputedStyle(elem).paddingRight;
      }
      if (padding && padding.endsWith("px")) {
        return Number(padding.slice(0, padding.length - 2));
      }
    }
    return 0;
  }
  _showHasModal() {
    const content = this._buildPopupContent();
    grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.update(this._overlay, content);
    this._addFocusLayer(content);
    function close() {
      content.remove();
      grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.domDispose(content);
    }
    this._openPopupCtl = { close };
  }
  _buildPopupContent() {
    return Container({ tabindex: "-1" }, this._arrowEl, ContentWrapper((0,_ExampleCard__WEBPACK_IMPORTED_MODULE_9__.cssCloseButton)((0,_ExampleCard__WEBPACK_IMPORTED_MODULE_9__.cssBigIcon)("CrossBig"), grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.on("click", () => this._finish()), testId("close")), cssTitle(this._messages[ctlIndex].title), cssBody(this._messages[ctlIndex].body), this._buildFooter(), testId("popup")), grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.onKeyDown({
      Escape: () => this._finish(),
      ArrowLeft: () => this._move(-1),
      ArrowRight: () => this._move(1),
      Enter: () => this._move(1, true)
    }));
  }
  _buildFooter() {
    const nSteps = this._messages.length;
    const isLastStep = ctlIndex === nSteps - 1;
    const isFirstStep = ctlIndex === 0;
    return Footer(ProgressBar(range(nSteps).map((i) => Dot(Dot.cls("-done", i > ctlIndex)))), Buttons((0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_4__.bigBasicButton)("Previous", testId("previous"), grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.on("click", () => this._move(-1)), grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.prop("disabled", isFirstStep), { style: `margin-right: 8px; visibility: ${isFirstStep ? "hidden" : "visible"}` }), (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_4__.bigPrimaryButton)(isLastStep ? t("Finish") : t("Next"), testId("next"), grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.on("click", () => this._move(1, true)))));
  }
  _showOverlay() {
    document.body.appendChild(this._overlay = Overlay());
    this.onDispose(() => {
      document.body.removeChild(this._overlay);
      grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.domDispose(this._overlay);
    });
  }
}
function buildArrow() {
  return ArrowContainer((0,grainjs__WEBPACK_IMPORTED_MODULE_0__.svg)("svg", { style: "width: 13px; height: 34px;" }, (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.svg)("path", { "d": "M 2 19 h 13 v 18 Z" })));
}
const Container = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.styled)("div", `
  align-self: center;
  border: 2px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.accentBorder};
  border-radius: 3px;
  z-index: 1000;
  max-width: 490px;
  position: relative;
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.popupBg};
  box-shadow: 0 2px 18px 0 ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.popupInnerShadow}, 0 0 1px 0 ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.popupOuterShadow};
  outline: unset;
`);
function sideSelectorChunk(side) {
  return `.${Container.className}[data-popper-placement^=${side}]`;
}
const ArrowContainer = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.styled)("div", `
  position: absolute;

  & path {
    stroke: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.accentBorder};
    stroke-width: 2px;
    fill: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.popupBg};
  }

  ${sideSelectorChunk("top")} > & {
    bottom: -26px;
  }

  ${sideSelectorChunk("bottom")} > & {
    top: -23px;
  }

  ${sideSelectorChunk("right")} > & {
    left: -12px;
  }

  ${sideSelectorChunk("left")} > & {
    right: -12px;
  }

  ${sideSelectorChunk("top")} svg {
    transform: rotate(-90deg);
  }

  ${sideSelectorChunk("bottom")} svg {
    transform: rotate(90deg);
  }

  ${sideSelectorChunk("left")} svg {
    transform: scalex(-1);
  }
`);
const ContentWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.styled)("div", `
  position: relative;
  padding: 32px;
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.popupBg};
`);
const Footer = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.styled)("div", `
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  justify-content: space-between;
  align-items: center;
`);
const ProgressBar = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.styled)("div", `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 12px;
`);
const Buttons = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.styled)("div", `
  display: flex;
  flex-directions: row;
`);
const Dot = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.styled)("div", `
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-right: 12px;
  align-self: center;
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.progressBarFg};
  &-done {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.progressBarBg};
  }
`);
const Overlay = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.styled)("div", `
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  overflow-y: auto;
`);
const cssTitle = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.styled)("div", `
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.vars.xxxlargeFontSize};
  font-weight: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.vars.headerControlTextWeight};
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.text};
  margin: 0 0 16px 0;
  line-height: 32px;
`);
const cssBody = (0,grainjs__WEBPACK_IMPORTED_MODULE_0__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_5__.theme.text};
`);


/***/ }),

/***/ "./app/client/ui/RowContextMenu.ts":
/*!*****************************************!*\
  !*** ./app/client/ui/RowContextMenu.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RowContextMenu": () => (/* binding */ RowContextMenu)
/* harmony export */ });
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");




const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_1__.makeT)("RowContextMenu");
function RowContextMenu({ disableInsert, disableDelete, isViewSorted, numRows }) {
  const result = [];
  if (isViewSorted) {
    result.push((0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.insertRecordAfter, t("Insert row"), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.cls("disabled", disableInsert)));
  } else {
    result.push((0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.insertRecordBefore, t("Insert row above"), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.cls("disabled", disableInsert)), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.insertRecordAfter, t("Insert row below"), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.cls("disabled", disableInsert)));
  }
  result.push((0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.duplicateRows, t("Duplicate rows", { count: numRows }), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.cls("disabled", disableInsert || numRows === 0)));
  result.push((0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuDivider)(), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.deleteRecords, t("Delete"), grainjs__WEBPACK_IMPORTED_MODULE_3__.dom.cls("disabled", disableDelete)));
  result.push((0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuDivider)(), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_2__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.copyLink, t("Copy anchor link")));
  return result;
}


/***/ }),

/***/ "./app/client/ui/UserItem.ts":
/*!***********************************!*\
  !*** ./app/client/ui/UserItem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssEmailInput": () => (/* binding */ cssEmailInput),
/* harmony export */   "cssEmailInputContainer": () => (/* binding */ cssEmailInputContainer),
/* harmony export */   "cssMailIcon": () => (/* binding */ cssMailIcon),
/* harmony export */   "cssMemberBtn": () => (/* binding */ cssMemberBtn),
/* harmony export */   "cssMemberImage": () => (/* binding */ cssMemberImage),
/* harmony export */   "cssMemberListItem": () => (/* binding */ cssMemberListItem),
/* harmony export */   "cssMemberPrimary": () => (/* binding */ cssMemberPrimary),
/* harmony export */   "cssMemberSecondary": () => (/* binding */ cssMemberSecondary),
/* harmony export */   "cssMemberText": () => (/* binding */ cssMemberText),
/* harmony export */   "cssMemberType": () => (/* binding */ cssMemberType),
/* harmony export */   "cssMemberTypeProblem": () => (/* binding */ cssMemberTypeProblem),
/* harmony export */   "cssRemoveIcon": () => (/* binding */ cssRemoveIcon)
/* harmony export */ });
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popweasel */ "./node_modules/popweasel/dist/index.js");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(popweasel__WEBPACK_IMPORTED_MODULE_3__);




const cssMemberListItem = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("div", `
  display: flex;
  width: 460px;
  min-height: 64px;
  margin: 0 auto;
  padding: 12px 0;
`);
const cssMemberImage = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("div", `
  width: 40px;
  height: 40px;
  margin: 0 4px;
  border-radius: 20px;
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.colors.lightGreen};
  background-size: cover;

  .${cssMemberListItem.className}-removed & {
    opacity: 0.4;
  }
`);
const cssMemberText = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("div", `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2px 12px;
  flex: 1 1 0;
  min-width: 0px;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.vars.mediumFontSize};

  .${cssMemberListItem.className}-removed & {
    opacity: 0.4;
  }
`);
const cssMemberPrimary = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("span", `
  font-weight: bold;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.text};
  padding: 2px 0;

  .${popweasel__WEBPACK_IMPORTED_MODULE_3__.cssMenuItem.className}-sel & {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuItemSelectedFg};
  }
`);
const cssMemberSecondary = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("span", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.lightText};
  /* the following just undo annoying bootstrap styles that apply to all labels */
  margin: 0px;
  font-weight: normal;
  padding: 2px 0;
  white-space: nowrap;

  .${popweasel__WEBPACK_IMPORTED_MODULE_3__.cssMenuItem.className}-sel & {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuItemSelectedFg};
  }
`);
const cssMemberType = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("span", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.lightText};
  /* the following just undo annoying bootstrap styles that apply to all labels */
  margin: 0px;
  font-weight: normal;
  padding: 2px 0;
  white-space: nowrap;

  .${popweasel__WEBPACK_IMPORTED_MODULE_3__.cssMenuItem.className}-sel & {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuItemSelectedFg};
  }
`);
const cssMemberTypeProblem = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("span", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.errorText};
  /* the following just undo annoying bootstrap styles that apply to all labels */
  margin: 0px;
  font-weight: normal;
  padding: 2px 0;
  white-space: nowrap;

  .${popweasel__WEBPACK_IMPORTED_MODULE_3__.cssMenuItem.className}-sel & {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.menuItemSelectedFg};
  }
`);
const cssMemberBtn = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("div", `
  width: 16px;
  height: 16px;
  cursor: pointer;

  &-disabled {
    opacity: 0.3;
    cursor: default;
  }
`);
const cssRemoveIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_1__.icon, `
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.lightText};
  margin: 12px 0;
`);
const cssEmailInputContainer = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("div", `
  position: relative;
  display: flex;
  height: 42px;
  padding: 0 3px;
  margin: 16px 63px;
  border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.inputBorder};
  border-radius: 3px;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.vars.mediumFontSize};
  outline: none;

  &-green {
    border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.inputValid};
  }
`);
const cssEmailInput = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)(grainjs__WEBPACK_IMPORTED_MODULE_2__.input, `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.inputFg};
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.inputBg};
  flex: 1 1 0;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.vars.mediumFontSize};
  font-family: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.vars.fontFamily};
  outline: none;
  border: none;

  &::placeholder {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.inputPlaceholderFg};
  }
`);
const cssMailIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_1__.icon, `
  margin: 12px 8px 12px 13px;
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_0__.theme.lightText};
`);


/***/ }),

/***/ "./app/client/ui/ViewLayoutMenu.ts":
/*!*****************************************!*\
  !*** ./app/client/ui/ViewLayoutMenu.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeViewLayoutMenu": () => (/* binding */ makeViewLayoutMenu)
/* harmony export */ });
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/models/gristUrlState */ "./app/client/models/gristUrlState.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");






const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__.makeT)("ViewLayoutMenu");
function makeViewLayoutMenu(viewSection, isReadonly) {
  var _a;
  const viewInstance = viewSection.viewInstance.peek();
  const gristDoc = viewInstance.gristDoc;
  const cursorRow = viewInstance.cursor.rowIndex.peek();
  const rowId = cursorRow !== null ? viewInstance.viewData.getRowId(cursorRow) : null;
  const isAddRow = rowId === "new";
  const contextMenu = [
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.deleteRecords, t("Delete record"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("section-delete-card"), grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.cls("disabled", isReadonly || isAddRow)),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.copyLink, t("Copy anchor link"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("section-card-link")),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuDivider)()
  ];
  const viewRec = viewSection.view();
  const isLight = ((_a = (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_2__.urlState)().state.get().params) == null ? void 0 : _a.style) === "light";
  const sectionId = viewSection.table.peek().rawViewSectionRef.peek();
  const anchorUrlState = viewInstance.getAnchorLinkForSection(sectionId);
  anchorUrlState.hash.popup = true;
  const rawUrl = (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_2__.urlState)().makeUrl(anchorUrlState);
  return [
    grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.maybe((use) => ["single"].includes(use(viewSection.parentKey)), () => contextMenu),
    grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.maybe((use) => !use(viewSection.isRaw) && !isLight && !use(gristDoc.sectionInPopup), () => (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemLink)({ href: rawUrl }, t("Show raw data"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("show-raw-data"), grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.on("click", (ev) => {
      ev.stopImmediatePropagation();
      ev.preventDefault();
      (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_2__.urlState)().pushUrl(anchorUrlState, { replace: true }).catch(reportError);
    }))),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.printSection, t("Print widget"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("print-section")),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemLink)({ href: gristDoc.getCsvLink(), target: "_blank", download: "" }, t("Download as CSV"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("download-section")),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemLink)({ href: gristDoc.getXlsxActiveViewLink(), target: "_blank", download: "" }, t("Download as XLSX"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("download-section")),
    grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.maybe((use) => ["detail", "single"].includes(use(viewSection.parentKey)), () => (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.editLayout, t("Edit Card Layout"), grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.cls("disabled", isReadonly))),
    grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.maybe(!isLight, () => [
      (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuDivider)(),
      (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.viewTabOpen, t("Widget options"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("widget-options")),
      (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.sortFilterTabOpen, t("Advanced Sort & Filter")),
      (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.dataSelectionTabOpen, t("Data selection"))
    ]),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuDivider)(),
    grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.maybe((use) => use(viewSection.parentKey) === "custom" && use(viewSection.hasCustomOptions), () => (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.openWidgetConfiguration, t("Open configuration"), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("section-open-configuration"))),
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_4__.menuItemCmd)(app_client_components_commands__WEBPACK_IMPORTED_MODULE_1__.allCommands.deleteSection, t("Delete widget"), grainjs__WEBPACK_IMPORTED_MODULE_5__.dom.cls("disabled", !viewRec.getRowId() || viewRec.viewSections().peekLength <= 1 || isReadonly), (0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.testId)("section-delete"))
  ];
}


/***/ }),

/***/ "./app/client/ui/ViewSectionMenu.ts":
/*!******************************************!*\
  !*** ./app/client/ui/ViewSectionMenu.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewSectionMenu": () => (/* binding */ viewSectionMenu)
/* harmony export */ });
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/models/AppModel */ "./app/client/models/AppModel.ts");
/* harmony import */ var app_client_ui_FilterConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui/FilterConfig */ "./app/client/ui/FilterConfig.ts");
/* harmony import */ var app_client_ui_RightPanelStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui/RightPanelStyles */ "./app/client/ui/RightPanelStyles.ts");
/* harmony import */ var app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui/tooltips */ "./app/client/ui/tooltips.ts");
/* harmony import */ var app_client_ui_SortConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/ui/SortConfig */ "./app/client/ui/SortConfig.ts");
/* harmony import */ var app_client_ui_ViewLayoutMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/client/ui/ViewLayoutMenu */ "./app/client/ui/ViewLayoutMenu.ts");
/* harmony import */ var app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/client/ui2018/buttons */ "./app/client/ui2018/buttons.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! popweasel */ "./node_modules/popweasel/dist/index.js");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(popweasel__WEBPACK_IMPORTED_MODULE_13__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));














const testId = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.makeTestId)("test-section-menu-");
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_1__.makeT)("ViewSectionMenu");
async function doSave(docModel, viewSection) {
  await docModel.docData.bundleActions(t("Update Sort&Filter settings"), () => Promise.all([
    viewSection.activeSortJson.save(),
    viewSection.saveFilters(),
    viewSection.activeCustomOptions.save()
  ]));
}
function doRevert(viewSection) {
  viewSection.activeSortJson.revert();
  viewSection.revertFilters();
  viewSection.activeCustomOptions.revert();
}
function viewSectionMenu(owner, gristDoc, viewSection) {
  const { docModel, isReadonly } = gristDoc;
  const anyFilter = grainjs__WEBPACK_IMPORTED_MODULE_12__.Computed.create(owner, (use) => Boolean(use(viewSection.activeFilters).length));
  const displaySaveObs = grainjs__WEBPACK_IMPORTED_MODULE_12__.Computed.create(owner, (use) => use(viewSection.filterSpecChanged) || !use(viewSection.activeSortJson.isSaved) || !use(viewSection.activeCustomOptions.isSaved));
  const save = () => {
    doSave(docModel, viewSection).catch(app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_2__.reportError);
  };
  const revert = () => doRevert(viewSection);
  const showExpandIcon = grainjs__WEBPACK_IMPORTED_MODULE_12__.Computed.create(owner, (use) => {
    return !use((0,app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.isNarrowScreenObs)()) && use(gristDoc.sectionInPopup) !== use(viewSection.id) && !use(viewSection.isRaw);
  });
  return [
    cssFilterMenuWrapper(cssFilterMenuWrapper.cls("-unsaved", displaySaveObs), testId("wrapper"), cssMenu(testId("sortAndFilter"), cssFilterIconWrapper(testId("filter-icon"), cssFilterIconWrapper.cls("-any", anyFilter), cssFilterIcon("Filter"), (0,app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_5__.hoverTooltip)("Sort and filter", { key: "sortFilterBtnTooltip" }))), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.maybe(displaySaveObs, () => cssSectionSaveButtonsWrapper(cssSaveTextButton(t("Save"), cssSaveTextButton.cls("-accent"), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.on("click", save), (0,app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_5__.hoverTooltip)("Save sort & filter settings", { key: "sortFilterBtnTooltip" }), testId("small-btn-save"), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.hide(isReadonly)), cssRevertIconButton(cssRevertIcon("Revert", cssRevertIcon.cls("-normal")), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.on("click", revert), (0,app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_5__.hoverTooltip)("Revert sort & filter settings", { key: "sortFilterBtnTooltip" }), testId("small-btn-revert")))), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_11__.menu)((ctl) => [
      makeSortPanel(viewSection, gristDoc),
      makeFilterPanel(viewSection),
      grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.maybe((use) => use(viewSection.parentKey) === "custom", () => makeCustomOptions(viewSection)),
      grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.domComputed(displaySaveObs, (displaySave) => [
        displaySave ? (0,app_client_ui_RightPanelStyles__WEBPACK_IMPORTED_MODULE_4__.cssSaveButtonsRow)(cssSaveButton(t("Save"), testId("btn-save"), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.on("click", () => {
          ctl.close();
          save();
        }), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.boolAttr("disabled", isReadonly)), (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.basicButton)(t("Revert"), testId("btn-revert"), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.on("click", () => {
          ctl.close();
          revert();
        }))) : null
      ]),
      grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.autoDispose(viewSection.activeFilters.addListener(() => ctl.update())),
      grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.autoDispose(viewSection.activeSortJson.subscribe(() => ctl.update()))
    ], __spreadProps(__spreadValues({}, popweasel__WEBPACK_IMPORTED_MODULE_13__.defaultMenuOptions), { placement: "bottom-end", trigger: [
      (el, ctl) => grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.onMatchElem(el, ".test-section-menu-sortAndFilter", "click", () => {
        ctl.toggle();
      }),
      (el, ctl) => grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.onMatchElem(el, ".test-section-menu-small-btn-save", "click", () => {
        ctl.close();
      }),
      (el, ctl) => grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.onMatchElem(el, ".test-section-menu-small-btn-revert", "click", () => {
        ctl.close();
      })
    ] }))),
    cssMenu(testId("viewLayout"), cssDotsIconWrapper(cssIcon("Dots")), (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_11__.menu)((_ctl) => (0,app_client_ui_ViewLayoutMenu__WEBPACK_IMPORTED_MODULE_7__.makeViewLayoutMenu)(viewSection, isReadonly.get()), __spreadProps(__spreadValues({}, popweasel__WEBPACK_IMPORTED_MODULE_13__.defaultMenuOptions), {
      placement: "bottom-end"
    }))),
    grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.maybe(showExpandIcon, () => cssExpandIconWrapper(cssSmallIcon("Grow"), testId("expandSection"), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.on("click", () => app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.maximizeActiveSection.run()), (0,app_client_ui_tooltips__WEBPACK_IMPORTED_MODULE_5__.hoverTooltip)("Expand section", { key: "expandSection" })))
  ];
}
function makeSortPanel(section, gristDoc) {
  return [
    (0,app_client_ui_RightPanelStyles__WEBPACK_IMPORTED_MODULE_4__.cssLabel)(t("SORT"), testId("heading-sort")),
    grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.create(app_client_ui_SortConfig__WEBPACK_IMPORTED_MODULE_6__.SortConfig, section, gristDoc, {
      menuOptions: { attach: null }
    })
  ];
}
function makeFilterPanel(section) {
  return [
    (0,app_client_ui_RightPanelStyles__WEBPACK_IMPORTED_MODULE_4__.cssLabel)(t("FILTER"), testId("heading-filter")),
    grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.create(app_client_ui_FilterConfig__WEBPACK_IMPORTED_MODULE_3__.FilterConfig, section, {
      menuOptions: { attach: null }
    })
  ];
}
function makeCustomOptions(section) {
  const color = grainjs__WEBPACK_IMPORTED_MODULE_12__.Computed.create(null, (use) => use(section.activeCustomOptions.isSaved) ? "-normal" : "-accent");
  const text = grainjs__WEBPACK_IMPORTED_MODULE_12__.Computed.create(null, (use) => {
    if (use(section.activeCustomOptions)) {
      return use(section.activeCustomOptions.isSaved) ? t("(customized)") : t("(modified)");
    } else {
      return t("(empty)");
    }
  });
  return [
    cssMenuInfoHeader(t("Custom options"), testId("heading-widget-options")),
    cssMenuText(grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.autoDispose(text), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.autoDispose(color), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.text(text), cssMenuText.cls(color), cssSpacer(), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.maybe((use) => Boolean(use(section.activeCustomOptions)), () => cssMenuIconWrapper(cssIcon("Remove", testId("btn-remove-options"), grainjs__WEBPACK_IMPORTED_MODULE_12__.dom.on("click", () => section.activeCustomOptions(null))))), testId("custom-options"))
  ];
}
const clsOldUI = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", ``);
const cssMenu = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  display: flex;
  cursor: pointer;
  border-radius: 3px;
  &.${clsOldUI.className} {
    margin-top: 0px;
    border-radius: 0px;
  }
  &:hover, &.weasel-popup-open {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.hover};
  }
`);
const cssIconWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
`);
const cssMenuIconWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)(cssIconWrapper, `
  display: flex;
  margin: -3px 0;
  width: 22px;
  height: 22px;

  &:hover, &.weasel-popup-open {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.hover};
  }
  &-changed {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.accentIcon};
  }
  &-changed:hover, &-changed:hover.weasel-popup-open {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlHoverFg};
  }
`);
const cssFilterMenuWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  display: flex;
  border-radius: 3px;
  align-items: center;
  &-unsaved {
    border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.accentBorder};
  }
  & .${cssMenu.className} {
    border: none;
  }
`);
const cssIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_10__.icon, `
  flex: none;
  cursor: pointer;
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.lightText};

  .${cssMenuIconWrapper.className}-changed & {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlPrimaryFg};
  }

  .${clsOldUI.className} & {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlPrimaryFg};
  }

  &-accent {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.accentIcon};
  }
`);
const cssDotsIconWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)(cssIconWrapper, `
  border-radius: 0px 2px 2px 0px;
  display: flex;
  .${clsOldUI.className} & {
    border-radius: 0px;
  }
`);
const cssExpandIconWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  display: flex;
  border-radius: 3px;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  &:hover, &.weasel-popup-open {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.hover};
  }
`);
const cssSmallIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)(cssIcon, `
  height: 13px;
  width: 13px;
`);
const cssFilterIconWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)(cssIconWrapper, `
  border-radius: 2px 0px 0px 2px;
  display: flex;
  &-any {
    border-radius: 2px;
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlSecondaryFg};
  }
  .${cssFilterMenuWrapper.className}-unsaved & {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlPrimaryBg};
  }
`);
const cssFilterIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)(cssIcon, `
  .${cssFilterIconWrapper.className}-any & {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlPrimaryFg};
  }
  .${cssFilterMenuWrapper.className}-unsaved & {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.controlPrimaryFg};
  }
`);
const cssMenuInfoHeader = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.menuSubheaderFg};
  font-weight: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.vars.bigControlTextWeight};
  padding: 8px 24px 8px 24px;
  cursor: default;
`);
const cssMenuText = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  display: flex;
  align-items: center;
  padding: 0px 24px 8px 24px;
  cursor: default;
  white-space: nowrap;
  &-accent {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.accentText};
  }
  &-normal {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.lightText};
  }
`);
const cssSaveButton = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)(app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_8__.primaryButton, `
  margin-right: 8px;
`);
const cssSaveTextButton = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.vars.mediumFontSize};
  padding: 0px 5px;
  border-right: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.accentBorder};

  &-accent {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.accentText};
  }
`);
const cssRevertIconButton = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`);
const cssRevertIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_10__.icon, `
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_9__.theme.accentIcon};
  margin: 0 5px 0 5px;
`);
const cssSectionSaveButtonsWrapper = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  padding: 0 1px 0 1px;
  display: flex;
  justify-content: space-between;
  align-self: normal;
`);
const cssSpacer = (0,grainjs__WEBPACK_IMPORTED_MODULE_12__.styled)("div", `
  margin: 0 auto;
`);


/***/ }),

/***/ "./app/client/ui/WidgetTitle.ts":
/*!**************************************!*\
  !*** ./app/client/ui/WidgetTitle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildRenameWidget": () => (/* binding */ buildRenameWidget),
/* harmony export */   "buildTableName": () => (/* binding */ buildTableName),
/* harmony export */   "buildWidgetTitle": () => (/* binding */ buildWidgetTitle)
/* harmony export */ });
/* harmony import */ var app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
/* harmony import */ var app_client_lib_FocusLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/lib/FocusLayer */ "./app/client/lib/FocusLayer.ts");
/* harmony import */ var app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui2018/buttons */ "./app/client/ui2018/buttons.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_editableLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/editableLabel */ "./app/client/ui2018/editableLabel.ts");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/client/ui2018/modals */ "./app/client/ui2018/modals.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! popweasel */ "./node_modules/popweasel/dist/index.js");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(popweasel__WEBPACK_IMPORTED_MODULE_8__);









const testId = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.makeTestId)("test-widget-title-");
const t = (0,app_client_lib_localization__WEBPACK_IMPORTED_MODULE_0__.makeT)("WidgetTitle");
function buildWidgetTitle(vs, options, ...args) {
  const title = grainjs__WEBPACK_IMPORTED_MODULE_7__.Computed.create(null, (use) => use(vs.titleDef));
  return buildRenameWidget(vs, title, options, grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.autoDispose(title), ...args);
}
function buildTableName(vs, ...args) {
  const title = grainjs__WEBPACK_IMPORTED_MODULE_7__.Computed.create(null, (use) => use(use(vs.table).tableNameDef));
  return buildRenameWidget(vs, title, { widgetNameHidden: true }, grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.autoDispose(title), ...args);
}
function buildRenameWidget(vs, title, options, ...args) {
  return cssTitleContainer(cssTitle(testId("text"), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.text(title), cssTitle.cls("-empty", (use) => {
    var _a;
    return !((_a = use(title)) == null ? void 0 : _a.trim());
  }), (elem) => {
    (0,popweasel__WEBPACK_IMPORTED_MODULE_8__.setPopupToCreateDom)(elem, (ctl) => buildWidgetRenamePopup(ctl, vs, options), {
      placement: "bottom-start",
      trigger: ["click"],
      attach: "body",
      boundaries: "viewport"
    });
  }, grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.on("click", (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
  })), ...args);
}
function buildWidgetRenamePopup(ctrl, vs, options) {
  var _a;
  const tableRec = vs.table.peek();
  const isSummary = Boolean(tableRec.summarySourceTable.peek());
  const tableName = [tableRec.tableNameDef.peek(), tableRec.groupDesc.peek()].filter((p) => Boolean(p == null ? void 0 : p.trim())).join(" ");
  const inputTableName = grainjs__WEBPACK_IMPORTED_MODULE_7__.Observable.create(ctrl, tableName);
  const inputWidgetTitle = grainjs__WEBPACK_IMPORTED_MODULE_7__.Observable.create(ctrl, (_a = vs.title.peek()) != null ? _a : "");
  const inputWidgetPlaceholder = !vs.title.peek() ? t("Override widget title") : vs.defaultWidgetTitle.peek();
  const disableSave = grainjs__WEBPACK_IMPORTED_MODULE_7__.Computed.create(ctrl, (use) => {
    var _a2, _b, _c, _d;
    const newTableName = (_b = (_a2 = use(inputTableName)) == null ? void 0 : _a2.trim()) != null ? _b : "";
    const newWidgetTitle = (_d = (_c = use(inputWidgetTitle)) == null ? void 0 : _c.trim()) != null ? _d : "";
    return !newTableName || newTableName === tableName && newWidgetTitle === use(vs.title);
  });
  const modalCtl = app_client_ui2018_modals__WEBPACK_IMPORTED_MODULE_6__.ModalControl.create(ctrl, () => ctrl.close());
  const saveTableName = async () => {
    if (isSummary) {
      return;
    }
    if (!inputTableName.get().trim()) {
      return;
    }
    if (inputTableName.get() !== tableRec.tableNameDef.peek()) {
      await tableRec.tableNameDef.saveOnly(inputTableName.get());
    }
  };
  const saveWidgetTitle = async () => {
    var _a2, _b;
    const newTitle = (_b = (_a2 = inputWidgetTitle.get()) == null ? void 0 : _a2.trim()) != null ? _b : "";
    if (newTitle !== vs.title.peek()) {
      await vs.title.saveOnly(newTitle);
    }
  };
  const doSave = modalCtl.doWork(() => Promise.all([
    saveTableName(),
    saveWidgetTitle()
  ]), { close: true });
  function initialFocus() {
    const isRawView = !widgetInput;
    const isWidgetTitleEmpty = !vs.title.peek();
    function focus(inputEl) {
      inputEl == null ? void 0 : inputEl.focus();
      inputEl == null ? void 0 : inputEl.select();
    }
    if (isSummary) {
      focus(widgetInput);
    } else if (isRawView) {
      focus(tableInput);
    } else if (isWidgetTitleEmpty) {
      focus(tableInput);
    } else {
      focus(widgetInput);
    }
  }
  let tableInput;
  let widgetInput;
  return cssRenamePopup((elem) => {
    app_client_lib_FocusLayer__WEBPACK_IMPORTED_MODULE_1__.FocusLayer.create(ctrl, { defaultFocusElem: elem, pauseMousetrap: true });
  }, testId("popup"), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.cls(app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_5__.menuCssClass), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.maybe(!options.tableNameHidden, () => [
    cssLabel(t("DATA TABLE NAME")),
    tableInput = cssInput(inputTableName, updateOnKey, { disabled: isSummary, placeholder: t("Provide a table name") }, testId("table-name-input"))
  ]), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.maybe(!options.widgetNameHidden, () => [
    cssLabel(t("WIDGET TITLE")),
    widgetInput = cssInput(inputWidgetTitle, updateOnKey, { placeholder: inputWidgetPlaceholder }, testId("section-name-input"))
  ]), cssButtons((0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_2__.primaryButton)(t("Save"), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.on("click", doSave), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.boolAttr("disabled", (use) => use(disableSave) || use(modalCtl.workInProgress)), testId("save")), (0,app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_2__.basicButton)(t("Cancel"), testId("cancel"), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.on("click", () => modalCtl.close()))), grainjs__WEBPACK_IMPORTED_MODULE_7__.dom.onKeyDown({
    Escape: () => modalCtl.close(),
    Enter: () => disableSave.get() ? modalCtl.close() : doSave()
  }), (elem) => {
    setTimeout(initialFocus, 0);
  });
}
const updateOnKey = { onInput: true };
const cssTitleContainer = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  flex: 1 1 0px;
  min-width: 0px;
  display: flex;
`);
const cssTitle = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  cursor: pointer;
  overflow: hidden;
  border-radius: 3px;
  margin: -4px;
  padding: 4px;
  text-overflow: ellipsis;
  align-self: start;
  &:hover {
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.hover};
  }
  &-empty {
    min-width: 48px;
    min-height: 23px;
  }
`);
const cssRenamePopup = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  display: flex;
  flex-direction: column;
  min-width: 280px;
  padding: 16px;
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.popupBg};
  border-radius: 2px;
  outline: none;
`);
const cssLabel = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("label", `
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.text};
  font-size: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.vars.xsmallFontSize};
  font-weight: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.vars.bigControlTextWeight};
  margin: 0 0 8px 0;
  &:not(:first-child) {
    margin-top: 16px;
  }
`);
const cssButtons = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  display: flex;
  margin-top: 16px;
  & > .${app_client_ui2018_buttons__WEBPACK_IMPORTED_MODULE_2__.cssButton.className}:not(:first-child) {
    margin-left: 8px;
  }
`);
const cssInputWithIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)("div", `
  position: relative;
  display: flex;
  flex-direction: column;
`);
const cssInput = (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.styled)((obs, opts, ...args) => (0,grainjs__WEBPACK_IMPORTED_MODULE_7__.input)(obs, opts, app_client_ui2018_editableLabel__WEBPACK_IMPORTED_MODULE_4__.cssTextInput.cls(""), ...args), `
  text-overflow: ellipsis;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.inputFg};
  background-color: transparent;
  &:disabled {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.inputDisabledFg};
    background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.inputDisabledBg};
    pointer-events: none;
  }
  &::placeholder {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.inputPlaceholderFg};
  }
  .${cssInputWithIcon.className} > &:disabled {
    padding-right: 28px;
  }
`);


/***/ }),

/***/ "./app/client/ui/contextMenu.ts":
/*!**************************************!*\
  !*** ./app/client/ui/contextMenu.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contextMenu": () => (/* binding */ contextMenu)
/* harmony export */ });
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
/* harmony import */ var app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popweasel */ "./node_modules/popweasel/dist/index.js");
/* harmony import */ var popweasel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(popweasel__WEBPACK_IMPORTED_MODULE_2__);



class ContextMenuController extends grainjs__WEBPACK_IMPORTED_MODULE_0__.Disposable {
  constructor(_event, contentFunc) {
    super();
    this._event = _event;
    setTimeout(() => this._updatePosition(), 0);
    const menu = popweasel__WEBPACK_IMPORTED_MODULE_2__.Menu.create(null, this, [contentFunc(this)], {
      menuCssClass: app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_1__.cssMenuElem.className + " grist-floating-menu"
    });
    const content = this._content = menu.content;
    content.style.visibility = "hidden";
    document.body.appendChild(content);
    grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.onKeyElem(content, "keydown", {
      ArrowLeft: (ev) => ev.stopPropagation(),
      ArrowRight: (ev) => ev.stopPropagation()
    });
    const onClick = (evt) => {
      const target = evt.target;
      if (target && !content.contains(target)) {
        this.close();
      }
    };
    this.autoDispose(grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.onElem(document, "contextmenu", onClick, { useCapture: true }));
    this.autoDispose(grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.onElem(document, "click", onClick, { useCapture: true }));
    this.onDispose(() => {
      grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.domDispose(content);
      content.remove();
    });
    (0,app_client_ui2018_menus__WEBPACK_IMPORTED_MODULE_1__.registerMenuOpen)(this);
  }
  close() {
    this.dispose();
  }
  setOpenClass() {
  }
  getTriggerElem() {
    return document.body;
  }
  update() {
  }
  _updatePosition() {
    const content = this._content;
    const ev = this._event;
    const rect = content.getBoundingClientRect();
    content.style.left = (ev.pageX + rect.width < window.innerWidth ? ev.pageX : ev.pageX - rect.width) + "px";
    content.style.bottom = Math.max(window.innerHeight - (ev.pageY + rect.height), 0) + "px";
    content.style.visibility = "";
  }
}
function contextMenu(contentFunc) {
  return (elem) => {
    const holder = grainjs__WEBPACK_IMPORTED_MODULE_0__.Holder.create(null);
    grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.autoDisposeElem(elem, holder);
    grainjs__WEBPACK_IMPORTED_MODULE_0__.dom.onElem(elem, "contextmenu", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      ContextMenuController.create(holder, ev, contentFunc);
    });
  };
}


/***/ }),

/***/ "./app/client/ui/transientInput.ts":
/*!*****************************************!*\
  !*** ./app/client/ui/transientInput.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transientInput": () => (/* binding */ transientInput)
/* harmony export */ });
/* harmony import */ var app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/models/AppModel */ "./app/client/models/AppModel.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");



function transientInput({ initialValue, save, close }, ...args) {
  let lastSave = initialValue;
  async function onSave(explicitSave) {
    try {
      if (explicitSave || input.value !== lastSave) {
        lastSave = input.value;
        await save(input.value);
      }
      close();
    } catch (err) {
      (0,app_client_models_AppModel__WEBPACK_IMPORTED_MODULE_0__.reportError)(err);
      delayedFocus();
    }
  }
  function delayedFocus() {
    setTimeout(() => {
      input.focus();
      input.select();
    }, 10);
  }
  const input = cssInput({ type: "text", placeholder: "Enter name" }, grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.prop("value", initialValue), grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.on("blur", () => onSave(false)), grainjs__WEBPACK_IMPORTED_MODULE_2__.dom.onKeyDown({
    Enter: () => onSave(true),
    Escape: () => close()
  }), ...args);
  delayedFocus();
  return input;
}
const cssInput = (0,grainjs__WEBPACK_IMPORTED_MODULE_2__.styled)("input", `
  background-color: transparent;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.inputFg};

  &::placeholder {
    color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_1__.theme.inputPlaceholderFg};
  }
`);


/***/ }),

/***/ "./app/client/ui/welcomeTour.ts":
/*!**************************************!*\
  !*** ./app/client/ui/welcomeTour.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startWelcomeTour": () => (/* binding */ startWelcomeTour),
/* harmony export */   "welcomeTour": () => (/* binding */ welcomeTour)
/* harmony export */ });
/* harmony import */ var app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/client/components/commands */ "./app/client/components/commands.js");
/* harmony import */ var app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/client/models/gristUrlState */ "./app/client/models/gristUrlState.ts");
/* harmony import */ var app_client_ui_OnBoardingPopups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/ui/OnBoardingPopups */ "./app/client/ui/OnBoardingPopups.ts");
/* harmony import */ var app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
/* harmony import */ var app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
/* harmony import */ var app_client_ui2018_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/client/ui2018/links */ "./app/client/ui2018/links.ts");
/* harmony import */ var grainjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");







const welcomeTour = [
  {
    title: "Editing Data",
    body: () => [
      (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("p", "Double-click or hit ", Key(KeyContent("Enter")), " on a cell to edit it. ", "Start with ", Key(KeyStrong("=")), " to enter a formula.")
    ],
    selector: ".field_clip",
    placement: "bottom"
  },
  {
    selector: ".tour-creator-panel",
    title: "Configuring your document",
    body: () => [
      (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("p", "Toggle the ", (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("em", "creator panel"), " to format columns, ", "convert to card view, select data, and more.")
    ],
    placement: "left",
    cropPadding: true
  },
  {
    selector: ".tour-type-selector",
    title: "Customizing columns",
    body: () => [
      (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("p", "Set formatting options, formulas, or column types, such as dates, choices, or attachments. "),
      (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("p", "Make it relational! Use the ", Key("Reference"), " type to link tables. ")
    ],
    placement: "right"
  },
  {
    selector: ".tour-add-new",
    title: "Building up",
    body: () => [
      (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("p", "Use ", Key("Add New"), " to add widgets, pages, or import more data. ")
    ],
    placement: "right"
  },
  {
    selector: ".tour-share-icon",
    title: "Sharing",
    body: () => [
      (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("p", "Use the Share button (", TopBarButtonIcon("Share"), ") to share the document or export data.")
    ],
    placement: "bottom",
    cropPadding: true
  },
  {
    selector: ".tour-help-center",
    title: "Flying higher",
    body: () => [
      (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("p", "Use ", Key(GreyIcon("Help"), "Help Center"), " for documentation or questions.")
    ],
    placement: "right"
  },
  {
    selector: ".tour-welcome",
    title: "Welcome to Grist!",
    body: () => [
      (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.dom)("p", "Browse our ", (0,app_client_ui2018_links__WEBPACK_IMPORTED_MODULE_5__.cssLink)({ target: "_blank", href: (0,app_client_models_gristUrlState__WEBPACK_IMPORTED_MODULE_1__.urlState)().makeUrl({ homePage: "templates" }) }, "template library", cssInlineIcon("FieldLink")), "to discover what's possible and get inspired.")
    ],
    showHasModal: true
  }
];
function startWelcomeTour(onFinishCB) {
  app_client_components_commands__WEBPACK_IMPORTED_MODULE_0__.allCommands.fieldTabOpen.run();
  (0,app_client_ui_OnBoardingPopups__WEBPACK_IMPORTED_MODULE_2__.startOnBoarding)(welcomeTour, onFinishCB);
}
const KeyContent = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.styled)("span", `
  font-style: normal;
  font-family: inherit;
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.shortcutKeyPrimaryFg};
`);
const KeyStrong = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.styled)(KeyContent, `
  font-weight: 700;
`);
const Key = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.styled)("div", `
  display: inline-block;
  padding: 2px 5px;
  border-radius: 4px;
  margin: 0px 2px;
  border: 1px solid ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.shortcutKeyBorder};
  color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.shortcutKeyFg};
  background-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.shortcutKeyBg};
  font-family: inherit;
  font-style: normal;
  white-space: nowrap;
`);
const TopBarButtonIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_4__.icon, `
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.topBarButtonPrimaryFg};
`);
const GreyIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_4__.icon, `
  --icon-color: ${app_client_ui2018_cssVars__WEBPACK_IMPORTED_MODULE_3__.theme.shortcutKeySecondaryFg};
  margin-right: 8px;
`);
const cssInlineIcon = (0,grainjs__WEBPACK_IMPORTED_MODULE_6__.styled)(app_client_ui2018_icons__WEBPACK_IMPORTED_MODULE_4__.icon, `
  margin: -3px 8px 0 4px;
`);


/***/ }),

/***/ "./app/client/ui2018/IconList.ts":
/*!***************************************!*\
  !*** ./app/client/ui2018/IconList.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconList": () => (/* binding */ IconList)
/* harmony export */ });
const IconList = [
  "ChartArea",
  "ChartBar",
  "ChartDonut",
  "ChartKaplan",
  "ChartLine",
  "ChartPie",
  "TypeCard",
  "TypeCardList",
  "TypeCell",
  "TypeChart",
  "TypeCustom",
  "TypeDetails",
  "TypeTable",
  "FieldAny",
  "FieldAttachment",
  "FieldCheckbox",
  "FieldChoice",
  "FieldColumn",
  "FieldDate",
  "FieldDateTime",
  "FieldFunction",
  "FieldFunctionEqual",
  "FieldInteger",
  "FieldLink",
  "FieldNumeric",
  "FieldReference",
  "FieldSpinner",
  "FieldSwitcher",
  "FieldTable",
  "FieldText",
  "FieldTextbox",
  "FieldToggle",
  "LoginStreamline",
  "LoginUnify",
  "LoginVisualize",
  "GoogleLogo",
  "GristLogo",
  "ThumbPreview",
  "AddUser",
  "BarcodeQR",
  "BarcodeQR2",
  "CenterAlign",
  "Chat",
  "Code",
  "Collapse",
  "Convert",
  "Copy",
  "CrossBig",
  "CrossSmall",
  "Database",
  "Dots",
  "Download",
  "DragDrop",
  "Dropdown",
  "DropdownUp",
  "Empty",
  "Expand",
  "EyeHide",
  "EyeShow",
  "Feedback",
  "Filter",
  "FilterSimple",
  "Fireworks",
  "Folder",
  "FontBold",
  "FontItalic",
  "FontStrikethrough",
  "FontUnderline",
  "FunctionResult",
  "Grow",
  "Help",
  "Home",
  "Idea",
  "Import",
  "ImportArrow",
  "Info",
  "LeftAlign",
  "Lock",
  "Log",
  "Mail",
  "Memo",
  "Message",
  "Minus",
  "MobileChat",
  "MobileChat2",
  "NewNotification",
  "Notification",
  "Offline",
  "Page",
  "PanelLeft",
  "PanelRight",
  "Pencil",
  "PinBig",
  "PinSmall",
  "PinTilted",
  "Pivot",
  "PivotLight",
  "Plus",
  "Popup",
  "Public",
  "PublicColor",
  "PublicFilled",
  "Redo",
  "Remove",
  "Repl",
  "ResizePanel",
  "Revert",
  "RightAlign",
  "Script",
  "Search",
  "Settings",
  "Share",
  "Sort",
  "Sparks",
  "Tick",
  "TickSolid",
  "Undo",
  "Validation",
  "Video",
  "Warning",
  "Widget",
  "Wrap",
  "Zoom",
  "UseChart",
  "UseEducate",
  "UseFinance",
  "UseHr",
  "UseMedia",
  "UseMonitor",
  "UseOther",
  "UseProduct",
  "UseSales",
  "UseScience"
];


/***/ }),

/***/ "./app/common/ACLPermissions.ts":
/*!**************************************!*\
  !*** ./app/common/ACLPermissions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_PERMISSION_PROPS": () => (/* binding */ ALL_PERMISSION_PROPS),
/* harmony export */   "emptyPermissionSet": () => (/* binding */ emptyPermissionSet),
/* harmony export */   "makePartialPermissions": () => (/* binding */ makePartialPermissions),
/* harmony export */   "mergePartialPermissions": () => (/* binding */ mergePartialPermissions),
/* harmony export */   "mergePermissions": () => (/* binding */ mergePermissions),
/* harmony export */   "parsePermissions": () => (/* binding */ parsePermissions),
/* harmony export */   "permissionSetToText": () => (/* binding */ permissionSetToText),
/* harmony export */   "splitSchemaEditPermissionSet": () => (/* binding */ splitSchemaEditPermissionSet),
/* harmony export */   "summarizePermissionSet": () => (/* binding */ summarizePermissionSet),
/* harmony export */   "summarizePermissions": () => (/* binding */ summarizePermissions),
/* harmony export */   "toMixed": () => (/* binding */ toMixed)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const fromPairs = __webpack_require__(/*! lodash/fromPairs */ "./node_modules/lodash/fromPairs.js");
const mapValues = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
const PERMISSION_BITS = {
  R: "read",
  C: "create",
  U: "update",
  D: "delete",
  S: "schemaEdit"
};
const ALL_PERMISSION_BITS = "CRUDS";
const ALL_PERMISSION_PROPS = Array.from(ALL_PERMISSION_BITS, (ch) => PERMISSION_BITS[ch]);
const ALIASES = {
  all: "+CRUDS",
  none: "-CRUDS"
};
const REVERSE_ALIASES = fromPairs(Object.entries(ALIASES).map(([alias, value]) => [value, alias]));
function emptyPermissionSet() {
  return { read: "", create: "", update: "", delete: "", schemaEdit: "" };
}
function parsePermissions(permissionsText) {
  if (ALIASES.hasOwnProperty(permissionsText)) {
    permissionsText = ALIASES[permissionsText];
  }
  const pset = emptyPermissionSet();
  let value = "";
  for (const ch of permissionsText) {
    if (ch === "+") {
      value = "allow";
    } else if (ch === "-") {
      value = "deny";
    } else if (!PERMISSION_BITS.hasOwnProperty(ch) || value === "") {
      throw new Error(`Invalid permissions specification ${JSON.stringify(permissionsText)}`);
    } else {
      const prop = PERMISSION_BITS[ch];
      pset[prop] = value;
    }
  }
  return pset;
}
function permissionSetToText(permissionSet) {
  let add = "";
  let remove = "";
  for (const ch of ALL_PERMISSION_BITS) {
    const prop = PERMISSION_BITS[ch];
    const value = permissionSet[prop];
    if (value === "allow") {
      add += ch;
    } else if (value === "deny") {
      remove += ch;
    }
  }
  const perm = (add ? "+" + add : "") + (remove ? "-" + remove : "");
  return REVERSE_ALIASES[perm] || perm;
}
function makePartialPermissions(pset) {
  return mapValues(pset, (val) => val === "allow" ? "allowSome" : val === "deny" ? "denySome" : val);
}
function combinePartialPermission(a, b) {
  if (!a) {
    return b;
  }
  if (!b) {
    return a;
  }
  if (a === "allowSome") {
    return b === "allowSome" || b === "allow" ? b : "mixed";
  }
  if (a === "denySome") {
    return b === "denySome" || b === "deny" ? b : "mixed";
  }
  return a;
}
function mergePartialPermissions(a, b) {
  return mergePermissions([a, b], ([_a, _b]) => combinePartialPermission(_a, _b));
}
function mergePermissions(psets, combine) {
  const result = {};
  for (const prop of ALL_PERMISSION_PROPS) {
    result[prop] = combine(psets.map((p) => p[prop]));
  }
  return result;
}
function toMixed(pset) {
  return mergePermissions([pset], ([bit]) => bit === "allow" || bit === "mixed" ? bit : "deny");
}
function summarizePermissionSet(pset) {
  let sign = "";
  for (const key of Object.keys(pset)) {
    const pWithSome = pset[key];
    const p = pWithSome === "allowSome" ? "allow" : pWithSome === "denySome" ? "deny" : pWithSome;
    if (!p || p === sign) {
      continue;
    }
    if (!sign) {
      sign = p;
      continue;
    }
    sign = "mixed";
  }
  return sign === "allow" || sign === "deny" ? sign : "mixed";
}
function summarizePermissions(perms) {
  if (perms.length === 0) {
    return "mixed";
  }
  const perm = perms[0];
  return perms.some((p) => p !== perm) ? "mixed" : perm;
}
function isEmpty(permissions) {
  return Object.values(permissions).every((v) => v === "");
}
function splitSchemaEditPermissionSet(permissions) {
  const schemaEdit = __spreadProps(__spreadValues({}, emptyPermissionSet()), { schemaEdit: permissions.schemaEdit });
  const nonSchemaEdit = __spreadProps(__spreadValues({}, permissions), { schemaEdit: "" });
  return {
    schemaEdit: !isEmpty(schemaEdit) ? schemaEdit : void 0,
    nonSchemaEdit: !isEmpty(nonSchemaEdit) || isEmpty(schemaEdit) ? nonSchemaEdit : void 0
  };
}


/***/ }),

/***/ "./app/common/ACLRuleCollection.ts":
/*!*****************************************!*\
  !*** ./app/common/ACLRuleCollection.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACLRuleCollection": () => (/* binding */ ACLRuleCollection),
/* harmony export */   "SPECIAL_RULES_TABLE_ID": () => (/* binding */ SPECIAL_RULES_TABLE_ID),
/* harmony export */   "isSchemaEditResource": () => (/* binding */ isSchemaEditResource)
/* harmony export */ });
/* harmony import */ var app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/common/ACLPermissions */ "./app/common/ACLPermissions.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var app_plugin_objtypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/plugin/objtypes */ "./app/plugin/objtypes.ts");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));



const sortBy = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
const defaultMatchFunc = () => true;
const SPECIAL_RULES_TABLE_ID = "*SPECIAL";
const DEFAULT_RULE_SET = {
  tableId: "*",
  colIds: "*",
  body: [{
    aclFormula: "user.Access in [EDITOR, OWNER]",
    matchFunc: (input) => ["editors", "owners"].includes(String(input.user.Access)),
    permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("all"),
    permissionsText: "all"
  }, {
    aclFormula: "user.Access in [VIEWER]",
    matchFunc: (input) => ["viewers"].includes(String(input.user.Access)),
    permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("+R-CUDS"),
    permissionsText: "+R"
  }, {
    aclFormula: "",
    matchFunc: defaultMatchFunc,
    permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("none"),
    permissionsText: "none"
  }]
};
function isSchemaEditResource(resource) {
  return resource.tableId === SPECIAL_RULES_TABLE_ID && resource.colIds === "SchemaEdit";
}
const SPECIAL_RULE_SETS = {
  SchemaEdit: {
    tableId: SPECIAL_RULES_TABLE_ID,
    colIds: ["SchemaEdit"],
    body: [{
      aclFormula: "user.Access in [EDITOR, OWNER]",
      matchFunc: (input) => ["editors", "owners"].includes(String(input.user.Access)),
      permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("+S"),
      permissionsText: "+S"
    }, {
      aclFormula: "",
      matchFunc: defaultMatchFunc,
      permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("-S"),
      permissionsText: "-S"
    }]
  },
  AccessRules: {
    tableId: SPECIAL_RULES_TABLE_ID,
    colIds: ["AccessRules"],
    body: [{
      aclFormula: "user.Access in [OWNER]",
      matchFunc: (input) => ["owners"].includes(String(input.user.Access)),
      permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("+R"),
      permissionsText: "+R"
    }, {
      aclFormula: "",
      matchFunc: defaultMatchFunc,
      permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("-R"),
      permissionsText: "-R"
    }]
  },
  FullCopies: {
    tableId: SPECIAL_RULES_TABLE_ID,
    colIds: ["FullCopies"],
    body: [{
      aclFormula: "user.Access in [OWNER]",
      matchFunc: (input) => ["owners"].includes(String(input.user.Access)),
      permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("+R"),
      permissionsText: "+R"
    }, {
      aclFormula: "",
      matchFunc: defaultMatchFunc,
      permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("-R"),
      permissionsText: "-R"
    }]
  },
  SeedRule: {
    tableId: SPECIAL_RULES_TABLE_ID,
    colIds: ["SeedRule"],
    body: []
  }
};
const EMERGENCY_RULE_SET = {
  tableId: "*",
  colIds: "*",
  body: [{
    aclFormula: "user.Access in [OWNER]",
    matchFunc: (input) => ["owners"].includes(String(input.user.Access)),
    permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("all"),
    permissionsText: "all"
  }, {
    aclFormula: "",
    matchFunc: defaultMatchFunc,
    permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)("none"),
    permissionsText: "none"
  }]
};
class ACLRuleCollection {
  constructor() {
    this._haveRules = false;
    this._columnRuleSets = /* @__PURE__ */ new Map();
    this._tableColumnMap = /* @__PURE__ */ new Map();
    this._specialRuleSets = /* @__PURE__ */ new Map();
    this._tableRuleSets = /* @__PURE__ */ new Map();
    this._defaultRuleSet = DEFAULT_RULE_SET;
    this._tableIds = [];
    this._userAttributeRules = /* @__PURE__ */ new Map();
  }
  haveRules() {
    return this._haveRules;
  }
  getColumnRuleSet(tableId, colId) {
    if (tableId === SPECIAL_RULES_TABLE_ID) {
      return this._specialRuleSets.get(colId);
    }
    return this._tableColumnMap.get(`${tableId}:${colId}`);
  }
  getAllColumnRuleSets(tableId) {
    return this._columnRuleSets.get(tableId) || [];
  }
  getTableDefaultRuleSet(tableId) {
    return this._tableRuleSets.get(tableId);
  }
  getDocDefaultRuleSet() {
    return this._defaultRuleSet;
  }
  getAllTableIds() {
    return this._tableIds;
  }
  getUserAttributeRules() {
    return this._userAttributeRules;
  }
  async update(docData, options) {
    const { ruleSets, userAttributes } = this._safeReadAclRules(docData, options);
    const userAttributeMap = /* @__PURE__ */ new Map();
    for (const userAttr of userAttributes) {
      userAttributeMap.set(userAttr.name, userAttr);
    }
    const colRuleSets = /* @__PURE__ */ new Map();
    const tableColMap = /* @__PURE__ */ new Map();
    const tableRuleSets = /* @__PURE__ */ new Map();
    const tableIds = /* @__PURE__ */ new Set();
    let defaultRuleSet = DEFAULT_RULE_SET;
    const specialRuleSets = new Map(Object.entries(SPECIAL_RULE_SETS));
    for (const ruleSet of ruleSets) {
      if (ruleSet.tableId === SPECIAL_RULES_TABLE_ID) {
        const specialType = String(ruleSet.colIds);
        const specialDefault = specialRuleSets.get(specialType);
        if (!specialDefault) {
          options.log.error(`Invalid rule for ${ruleSet.tableId}:${ruleSet.colIds}`);
        } else {
          specialRuleSets.set(specialType, __spreadProps(__spreadValues({}, ruleSet), { body: [...ruleSet.body, ...specialDefault.body] }));
        }
      } else if (options.pullOutSchemaEdit && ruleSet.tableId === "*" && ruleSet.colIds === "*") {
        const schemaParts = ruleSet.body.map((part) => splitSchemaEditRulePart(part).schemaEdit).filter(app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.isNonNullish);
        if (schemaParts.length > 0) {
          const specialType = "SchemaEdit";
          const specialDefault = specialRuleSets.get(specialType);
          specialRuleSets.set(specialType, {
            tableId: SPECIAL_RULES_TABLE_ID,
            colIds: ["SchemaEdit"],
            body: [...schemaParts, ...specialDefault.body]
          });
        }
      }
    }
    for (const ruleSet of specialRuleSets.values()) {
      (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.getSetMapValue)(colRuleSets, SPECIAL_RULES_TABLE_ID, () => []).push(ruleSet);
    }
    this._haveRules = ruleSets.length > 0;
    for (const ruleSet of ruleSets) {
      if (ruleSet.tableId === "*") {
        if (ruleSet.colIds === "*") {
          const body = options.pullOutSchemaEdit ? ruleSet.body.map((part) => splitSchemaEditRulePart(part).nonSchemaEdit).filter(app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.isNonNullish) : ruleSet.body;
          defaultRuleSet = __spreadProps(__spreadValues({}, ruleSet), {
            body: [...body, ...DEFAULT_RULE_SET.body]
          });
        } else {
          throw new Error(`Invalid rule for tableId ${ruleSet.tableId}, colIds ${ruleSet.colIds}`);
        }
      } else if (ruleSet.tableId === SPECIAL_RULES_TABLE_ID) {
      } else if (ruleSet.colIds === "*") {
        tableIds.add(ruleSet.tableId);
        if (tableRuleSets.has(ruleSet.tableId)) {
          throw new Error(`Invalid duplicate default rule for ${ruleSet.tableId}`);
        }
        tableRuleSets.set(ruleSet.tableId, ruleSet);
      } else {
        tableIds.add(ruleSet.tableId);
        (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.getSetMapValue)(colRuleSets, ruleSet.tableId, () => []).push(ruleSet);
        for (const colId of ruleSet.colIds) {
          tableColMap.set(`${ruleSet.tableId}:${colId}`, ruleSet);
        }
      }
    }
    this._columnRuleSets = colRuleSets;
    this._tableColumnMap = tableColMap;
    this._tableRuleSets = tableRuleSets;
    this._defaultRuleSet = defaultRuleSet;
    this._tableIds = [...tableIds];
    this._userAttributeRules = userAttributeMap;
    this._specialRuleSets = specialRuleSets;
  }
  checkDocEntities(docData) {
    const problems = this.findRuleProblems(docData);
    if (problems.length === 0) {
      return;
    }
    throw new Error(problems[0].comment);
  }
  findRuleProblems(docData) {
    const problems = [];
    const tablesTable = docData.getMetaTable("_grist_Tables");
    const columnsTable = docData.getMetaTable("_grist_Tables_column");
    const validTableIds = new Set(tablesTable.getColValues("tableId"));
    const invalidTables = this.getAllTableIds().filter((t) => !validTableIds.has(t));
    if (invalidTables.length > 0) {
      problems.push({
        tables: {
          tableIds: invalidTables
        },
        comment: `Invalid tables in rules: ${invalidTables.join(", ")}`
      });
    }
    const validColumns = /* @__PURE__ */ new Map();
    const colTableRefs = columnsTable.getColValues("parentId");
    for (const [i, colId] of columnsTable.getColValues("colId").entries()) {
      (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.getSetMapValue)(validColumns, colTableRefs[i], () => /* @__PURE__ */ new Set()).add(colId);
    }
    for (const tableId of this.getAllTableIds()) {
      if (!validTableIds.has(tableId)) {
        continue;
      }
      const tableRef = tablesTable.findRow("tableId", tableId);
      const validTableCols = validColumns.get(tableRef);
      for (const ruleSet of this.getAllColumnRuleSets(tableId)) {
        if (Array.isArray(ruleSet.colIds)) {
          const invalidColIds = ruleSet.colIds.filter((c) => !(validTableCols == null ? void 0 : validTableCols.has(c)));
          if (invalidColIds.length > 0) {
            problems.push({
              columns: {
                tableId,
                colIds: invalidColIds
              },
              comment: `Invalid columns in rules for table ${tableId}: ${invalidColIds.join(", ")}`
            });
          }
        }
      }
    }
    const invalidUAColumns = [];
    const names = [];
    for (const rule of this.getUserAttributeRules().values()) {
      const tableRef = tablesTable.findRow("tableId", rule.tableId);
      const colRef = columnsTable.findMatchingRowId({ parentId: tableRef, colId: rule.lookupColId });
      if (!colRef) {
        invalidUAColumns.push(`${rule.tableId}.${rule.lookupColId}`);
        names.push(rule.name);
      }
    }
    if (invalidUAColumns.length > 0) {
      problems.push({
        userAttributes: {
          invalidUAColumns,
          names
        },
        comment: `Invalid columns in User Attribute rules: ${invalidUAColumns.join(", ")}`
      });
    }
    return problems;
  }
  _safeReadAclRules(docData, options) {
    try {
      this.ruleError = void 0;
      return readAclRules(docData, options);
    } catch (e) {
      this.ruleError = e;
      return { ruleSets: [EMERGENCY_RULE_SET], userAttributes: [] };
    }
  }
}
function getHelperCols(docData, tableId, colIds, log) {
  const tablesTable = docData.getMetaTable("_grist_Tables");
  const columnsTable = docData.getMetaTable("_grist_Tables_column");
  const fieldsTable = docData.getMetaTable("_grist_Views_section_field");
  const tableRef = tablesTable.findRow("tableId", tableId);
  if (!tableRef) {
    return [];
  }
  const result = [];
  for (const colId of colIds) {
    let addColsFromRefs = function(colRefs) {
      if (!Array.isArray(colRefs)) {
        return;
      }
      for (const colRef of colRefs) {
        if (typeof colRef !== "number") {
          continue;
        }
        const extraCol = columnsTable.getRecord(colRef);
        if (!extraCol) {
          continue;
        }
        if (extraCol.colId.startsWith("gristHelper_") && extraCol.parentId === tableRef) {
          result.push(extraCol.colId);
        } else {
          log.error(`Invalid helper column ${extraCol.colId} of ${tableId}:${colId}`);
        }
      }
    }, addColsFromMetaRecord = function(rec) {
      addColsFromRefs([rec.displayCol]);
      addColsFromRefs((0,app_plugin_objtypes__WEBPACK_IMPORTED_MODULE_2__.decodeObject)(rec.rules));
    };
    const [column] = columnsTable.filterRecords({ parentId: tableRef, colId });
    if (!column) {
      continue;
    }
    addColsFromMetaRecord(column);
    for (const field of fieldsTable.filterRecords({ colRef: column.id })) {
      addColsFromMetaRecord(field);
    }
  }
  return result;
}
function readAclRules(docData, { log, compile, includeHelperCols }) {
  const resourcesTable = docData.getMetaTable("_grist_ACLResources");
  const rulesTable = docData.getMetaTable("_grist_ACLRules");
  const ruleSets = [];
  const userAttributes = [];
  const rulesByResource = /* @__PURE__ */ new Map();
  for (const ruleRecord of sortBy(rulesTable.getRecords(), "rulePos")) {
    (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_1__.getSetMapValue)(rulesByResource, ruleRecord.resource, () => []).push(ruleRecord);
  }
  for (const [resourceId, rules] of rulesByResource.entries()) {
    const resourceRec = resourcesTable.getRecord(resourceId);
    if (!resourceRec) {
      throw new Error(`ACLRule ${rules[0].id} refers to an invalid ACLResource ${resourceId}`);
      continue;
    }
    if (!resourceRec.tableId || !resourceRec.colIds) {
      continue;
    }
    const tableId = resourceRec.tableId;
    const colIds = resourceRec.colIds === "*" ? "*" : resourceRec.colIds.split(",");
    if (includeHelperCols && Array.isArray(colIds)) {
      colIds.push(...getHelperCols(docData, tableId, colIds, log));
    }
    const body = [];
    for (const rule of rules) {
      if (rule.userAttributes) {
        if (tableId !== "*" || colIds !== "*") {
          throw new Error(`ACLRule ${rule.id} invalid; user attributes must be on the default resource`);
        }
        const parsed = JSON.parse(String(rule.userAttributes));
        if (!(parsed && typeof parsed === "object" && [parsed.name, parsed.tableId, parsed.lookupColId, parsed.charId].every((p) => p && typeof p === "string"))) {
          throw new Error(`User attribute rule ${rule.id} is invalid`);
        }
        parsed.origRecord = rule;
        userAttributes.push(parsed);
      } else if (body.length > 0 && !body[body.length - 1].aclFormula) {
        throw new Error(`ACLRule ${rule.id} invalid because listed after default rule`);
      } else if (rule.aclFormula && !rule.aclFormulaParsed) {
        throw new Error(`ACLRule ${rule.id} invalid because missing its parsed formula`);
      } else {
        const aclFormulaParsed = rule.aclFormula && JSON.parse(String(rule.aclFormulaParsed));
        body.push({
          origRecord: rule,
          aclFormula: String(rule.aclFormula),
          matchFunc: rule.aclFormula ? compile == null ? void 0 : compile(aclFormulaParsed) : defaultMatchFunc,
          memo: rule.memo,
          permissions: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.parsePermissions)(String(rule.permissionsText)),
          permissionsText: String(rule.permissionsText)
        });
      }
    }
    const ruleSet = { tableId, colIds, body };
    ruleSets.push(ruleSet);
  }
  return { ruleSets, userAttributes };
}
function splitSchemaEditRulePart(rulePart) {
  const p = (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.splitSchemaEditPermissionSet)(rulePart.permissions);
  let schemaEdit;
  let nonSchemaEdit;
  if (p.schemaEdit) {
    schemaEdit = __spreadProps(__spreadValues({}, rulePart), {
      permissions: p.schemaEdit,
      permissionsText: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.permissionSetToText)(p.schemaEdit)
    });
  }
  if (p.nonSchemaEdit) {
    nonSchemaEdit = __spreadProps(__spreadValues({}, rulePart), {
      permissions: p.nonSchemaEdit,
      permissionsText: (0,app_common_ACLPermissions__WEBPACK_IMPORTED_MODULE_0__.permissionSetToText)(p.nonSchemaEdit)
    });
  }
  if (schemaEdit && nonSchemaEdit) {
    schemaEdit.origRecord = { id: -1 };
  }
  return { schemaEdit, nonSchemaEdit };
}


/***/ }),

/***/ "./app/common/ActionDispatcher.ts":
/*!****************************************!*\
  !*** ./app/common/ActionDispatcher.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionDispatcher": () => (/* binding */ ActionDispatcher)
/* harmony export */ });
const mapValues = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
class ActionDispatcher {
  dispatchAction(action) {
    const a = action;
    switch (action[0]) {
      case "AddRecord":
        return this.onAddRecord(action, a[1], a[2], a[3]);
      case "UpdateRecord":
        return this.onUpdateRecord(action, a[1], a[2], a[3]);
      case "RemoveRecord":
        return this.onRemoveRecord(action, a[1], a[2]);
      case "BulkAddRecord":
        return this.onBulkAddRecord(action, a[1], a[2], a[3]);
      case "BulkUpdateRecord":
        return this.onBulkUpdateRecord(action, a[1], a[2], a[3]);
      case "BulkRemoveRecord":
        return this.onBulkRemoveRecord(action, a[1], a[2]);
      case "ReplaceTableData":
        return this.onReplaceTableData(action, a[1], a[2], a[3]);
      case "AddColumn":
        return this.onAddColumn(action, a[1], a[2], a[3]);
      case "RemoveColumn":
        return this.onRemoveColumn(action, a[1], a[2]);
      case "RenameColumn":
        return this.onRenameColumn(action, a[1], a[2], a[3]);
      case "ModifyColumn":
        return this.onModifyColumn(action, a[1], a[2], a[3]);
      case "AddTable":
        return this.onAddTable(action, a[1], a[2]);
      case "RemoveTable":
        return this.onRemoveTable(action, a[1]);
      case "RenameTable":
        return this.onRenameTable(action, a[1], a[2]);
      default:
        throw new Error(`Received unknown action ${action[0]}`);
    }
  }
  onBulkAddRecord(action, tableId, rowIds, colValues) {
    for (let i = 0; i < rowIds.length; i++) {
      this.onAddRecord(action, tableId, rowIds[i], mapValues(colValues, (values) => values[i]));
    }
  }
  onBulkUpdateRecord(action, tableId, rowIds, colValues) {
    for (let i = 0; i < rowIds.length; i++) {
      this.onUpdateRecord(action, tableId, rowIds[i], mapValues(colValues, (values) => values[i]));
    }
  }
  onBulkRemoveRecord(action, tableId, rowIds) {
    for (const r of rowIds) {
      this.onRemoveRecord(action, tableId, r);
    }
  }
}


/***/ }),

/***/ "./app/common/ActiveDocAPI.ts":
/*!************************************!*\
  !*** ./app/common/ActiveDocAPI.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NEW_TABLE": () => (/* binding */ NEW_TABLE),
/* harmony export */   "SKIP_TABLE": () => (/* binding */ SKIP_TABLE),
/* harmony export */   "getTableTitle": () => (/* binding */ getTableTitle),
/* harmony export */   "summaryGroupByDescription": () => (/* binding */ summaryGroupByDescription)
/* harmony export */ });
const NEW_TABLE = null;
const SKIP_TABLE = "";
function getTableTitle(table) {
  let { title } = table;
  if (table.groupByColLabels) {
    title += " " + summaryGroupByDescription(table.groupByColLabels);
  }
  return title;
}
function summaryGroupByDescription(groupByColumnLabels) {
  return `[${groupByColumnLabels.length ? "by " + groupByColumnLabels.join(", ") : "Totals"}]`;
}


/***/ }),

/***/ "./app/common/DocData.ts":
/*!*******************************!*\
  !*** ./app/common/DocData.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocData": () => (/* binding */ DocData)
/* harmony export */ });
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
/* harmony import */ var app_common_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/schema */ "./app/common/schema.ts");
/* harmony import */ var _ActionDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionDispatcher */ "./app/common/ActionDispatcher.ts");
/* harmony import */ var _TableData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableData */ "./app/common/TableData.ts");


const fromPairs = __webpack_require__(/*! lodash/fromPairs */ "./node_modules/lodash/fromPairs.js");
const groupBy = __webpack_require__(/*! lodash/groupBy */ "./node_modules/lodash/groupBy.js");


class DocData extends _ActionDispatcher__WEBPACK_IMPORTED_MODULE_2__.ActionDispatcher {
  constructor(fetchTableFunc, metaTableData) {
    super();
    this._tables = /* @__PURE__ */ new Map();
    this._fetchTableFunc = async (tableId) => {
      const { tableData, attachments } = await fetchTableFunc(tableId);
      if (attachments) {
        this.receiveAction(attachments);
      }
      return tableData;
    };
    if (metaTableData === null) {
      return;
    }
    for (const tableId in app_common_schema__WEBPACK_IMPORTED_MODULE_1__.schema) {
      if (app_common_schema__WEBPACK_IMPORTED_MODULE_1__.schema.hasOwnProperty(tableId)) {
        const colTypes = app_common_schema__WEBPACK_IMPORTED_MODULE_1__.schema[tableId];
        this._tables.set(tableId, this.createTableData(tableId, metaTableData[tableId], colTypes));
      }
    }
    const colsByTable = groupBy(this._tables.get("_grist_Tables_column").getRecords(), "parentId");
    for (const t of this._tables.get("_grist_Tables").getRecords()) {
      const tableId = t.tableId;
      const colRecords = colsByTable[t.id] || [];
      const colTypes = fromPairs(colRecords.map((c) => [c.colId, c.type]));
      this._tables.set(tableId, this.createTableData(tableId, null, colTypes));
    }
  }
  createTableData(tableId, tableData, colTypes) {
    return new (tableId in app_common_schema__WEBPACK_IMPORTED_MODULE_1__.schema ? _TableData__WEBPACK_IMPORTED_MODULE_3__.MetaTableData : _TableData__WEBPACK_IMPORTED_MODULE_3__.TableData)(tableId, tableData, colTypes);
  }
  getTable(tableId) {
    return this._tables.get(tableId);
  }
  getMetaTable(tableId) {
    return this.getTable(tableId);
  }
  getTables() {
    return this._tables;
  }
  fetchTable(tableId, force) {
    const table = this._tables.get(tableId);
    if (!table) {
      throw new Error(`DocData.fetchTable: unknown table ${tableId}`);
    }
    return !table.isLoaded || force ? table.fetchData(this._fetchTableFunc) : Promise.resolve();
  }
  async syncTable(tableId) {
    const tableData = await this._fetchTableFunc(tableId);
    const colTypes = fromPairs(Object.keys(tableData[3]).map((c) => [c, "Any"]));
    colTypes.id = "Any";
    this._tables.set(tableId, this.createTableData(tableId, tableData, colTypes));
  }
  receiveAction(action) {
    const tableId = action[1];
    const table = this._tables.get(tableId);
    this.dispatchAction(action);
    if (table) {
      table.receiveAction(action);
    }
  }
  docInfo() {
    const docInfoTable = this.getMetaTable("_grist_DocInfo");
    return docInfoTable.getRecord(1);
  }
  docSettings() {
    return (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_0__.safeJsonParse)(this.docInfo().documentSettings, {});
  }
  onAddTable(action, tableId, columns) {
    const colTypes = fromPairs(columns.map((c) => [c.id, c.type]));
    this._tables.set(tableId, this.createTableData(tableId, null, colTypes));
  }
  onRemoveTable(action, tableId) {
    this._tables.delete(tableId);
  }
  onRenameTable(action, oldTableId, newTableId) {
    const table = this._tables.get(oldTableId);
    if (table) {
      this._tables.set(newTableId, table);
      this._tables.delete(oldTableId);
    }
  }
  onAddRecord(action, tableId, rowId, colValues) {
  }
  onUpdateRecord(action, tableId, rowId, colValues) {
  }
  onRemoveRecord(action, tableId, rowId) {
  }
  onBulkAddRecord(action, tableId, rowIds, colValues) {
  }
  onBulkUpdateRecord(action, tableId, rowIds, colValues) {
  }
  onBulkRemoveRecord(action, tableId, rowIds) {
  }
  onReplaceTableData(action, tableId, rowIds, colValues) {
  }
  onAddColumn(action, tableId, colId, colInfo) {
  }
  onRemoveColumn(action, tableId, colId) {
  }
  onRenameColumn(action, tableId, oldColId, newColId) {
  }
  onModifyColumn(action, tableId, colId, colInfo) {
  }
}


/***/ }),

/***/ "./app/common/DocUsage.ts":
/*!********************************!*\
  !*** ./app/common/DocUsage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APPROACHING_LIMIT_RATIO": () => (/* binding */ APPROACHING_LIMIT_RATIO),
/* harmony export */   "createEmptyOrgUsageSummary": () => (/* binding */ createEmptyOrgUsageSummary),
/* harmony export */   "getUsageRatio": () => (/* binding */ getUsageRatio)
/* harmony export */ });
const APPROACHING_LIMIT_RATIO = 0.9;
function getUsageRatio(usage, limit) {
  if (!isEnforceableLimit(limit) || usage === void 0 || usage < 0) {
    return 0;
  }
  return usage / limit;
}
function createEmptyOrgUsageSummary() {
  return {
    approachingLimit: 0,
    gracePeriod: 0,
    deleteOnly: 0
  };
}
function isEnforceableLimit(limit) {
  return limit !== void 0 && limit > 0;
}


/***/ }),

/***/ "./app/common/GranularAccessClause.ts":
/*!********************************************!*\
  !*** ./app/common/GranularAccessClause.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormulaProperties": () => (/* binding */ getFormulaProperties),
/* harmony export */   "usesRec": () => (/* binding */ usesRec)
/* harmony export */ });
function getFormulaProperties(formula) {
  const result = {};
  if (usesRec(formula)) {
    result.hasRecOrNewRec = true;
  }
  const colIds = /* @__PURE__ */ new Set();
  collectRecColIds(formula, colIds);
  result.usedColIds = Array.from(colIds);
  return result;
}
function usesRec(formula) {
  if (!Array.isArray(formula)) {
    throw new Error("expected a list");
  }
  if (isRecOrNewRec(formula)) {
    return true;
  }
  return formula.some((el) => {
    if (!Array.isArray(el)) {
      return false;
    }
    return usesRec(el);
  });
}
function isRecOrNewRec(formula) {
  return Array.isArray(formula) && formula[0] === "Name" && (formula[1] === "rec" || formula[1] === "newRec");
}
function collectRecColIds(formula, colIds) {
  if (!Array.isArray(formula)) {
    throw new Error("expected a list");
  }
  if (formula[0] === "Attr" && isRecOrNewRec(formula[1])) {
    const colId = formula[2];
    colIds.add(String(colId));
    return;
  }
  formula.forEach((el) => Array.isArray(el) && collectRecColIds(el, colIds));
}


/***/ }),

/***/ "./app/common/TableData.ts":
/*!*********************************!*\
  !*** ./app/common/TableData.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaTableData": () => (/* binding */ MetaTableData),
/* harmony export */   "TableData": () => (/* binding */ TableData)
/* harmony export */ });
/* harmony import */ var app_common_ActionDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/common/ActionDispatcher */ "./app/common/ActionDispatcher.ts");
/* harmony import */ var app_common_DocActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/DocActions */ "./app/common/DocActions.ts");
/* harmony import */ var app_common_gristTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/gristTypes */ "./app/common/gristTypes.ts");
/* harmony import */ var app_common_gutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");




const isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
const fromPairs = __webpack_require__(/*! lodash/fromPairs */ "./node_modules/lodash/fromPairs.js");
class TableData extends app_common_ActionDispatcher__WEBPACK_IMPORTED_MODULE_0__.ActionDispatcher {
  constructor(tableId, tableData, colTypes) {
    super();
    this._isLoaded = false;
    this._columns = /* @__PURE__ */ new Map();
    this._colArray = [];
    this._rowIdCol = [];
    this._rowMap = /* @__PURE__ */ new Map();
    this._tableId = tableId;
    for (const colId in colTypes) {
      if (colTypes.hasOwnProperty(colId)) {
        const type = colTypes[colId];
        const defl = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_2__.getDefaultForType)(type);
        const colData = { colId, type, defl, values: [] };
        this._columns.set(colId, colData);
        this._colArray.push(colData);
      }
    }
    this._columns.set("id", { colId: "id", type: "Id", defl: 0, values: this._rowIdCol });
    if (tableData) {
      this.loadData(tableData);
    }
  }
  fetchData(fetchFunc) {
    if (!this._fetchPromise) {
      this._fetchPromise = fetchFunc(this._tableId).then((data) => {
        this._fetchPromise = void 0;
        this.loadData(data);
      });
    }
    return this._fetchPromise;
  }
  loadData(tableData) {
    const rowIds = tableData[2];
    const colValues = tableData[3];
    const oldRowIds = this._rowIdCol.slice(0);
    reassignArray(this._rowIdCol, rowIds);
    for (const colData of this._colArray) {
      const values = colData.colId === "id" ? rowIds : colValues[colData.colId];
      reassignArray(colData.values, values || this._rowIdCol.map(() => colData.defl));
    }
    this._rowMap.clear();
    for (let i = 0; i < rowIds.length; i++) {
      this._rowMap.set(rowIds[i], i);
    }
    this._isLoaded = true;
    return oldRowIds;
  }
  loadPartial(data) {
    const rowIds = data[2];
    this.onBulkAddRecord(data, data[1], rowIds, data[3]);
    this._isLoaded = true;
  }
  unloadPartial(rowIds) {
    this.onBulkRemoveRecord(["BulkRemoveRecord", this.tableId, rowIds], this.tableId, rowIds);
  }
  get tableId() {
    return this._tableId;
  }
  get isLoaded() {
    return this._isLoaded;
  }
  numRecords() {
    return this._rowIdCol.length;
  }
  getValue(rowId, colId) {
    const colData = this._columns.get(colId);
    const index = this._rowMap.get(rowId);
    return colData && index !== void 0 ? colData.values[index] : void 0;
  }
  hasRowId(rowId) {
    return this._rowMap.has(rowId);
  }
  getRowIdIndex(rowId) {
    return this._rowMap.get(rowId);
  }
  getRowPropFunc(colId) {
    const colData = this._columns.get(colId);
    if (!colData) {
      return () => void 0;
    }
    const values = colData.values;
    const rowMap = this._rowMap;
    return (rowId) => values[rowMap.get(rowId)];
  }
  getKeepFunc() {
    return void 0;
  }
  getSkipRowId() {
    throw new Error("no skip row id defined");
  }
  getRowIds() {
    return this._rowIdCol;
  }
  getSortedRowIds() {
    return this._rowIdCol.slice(0).sort((a, b) => a - b);
  }
  mayHaveVersions() {
    return false;
  }
  getColIds() {
    return Array.from(this._columns.keys());
  }
  getColValues(colId) {
    const colData = this._columns.get(colId);
    return colData ? colData.values : void 0;
  }
  getDistinctValues(colId, count = Infinity) {
    const valColumn = this.getColValues(colId);
    if (!valColumn) {
      return void 0;
    }
    return (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_3__.getDistinctValues)(valColumn, count);
  }
  getTableDataAction(desiredRowIds) {
    const rowIds = desiredRowIds || this.getRowIds();
    let bulkColValues;
    if (desiredRowIds) {
      const len = rowIds.length;
      bulkColValues = {};
      for (const colId of this.getColIds()) {
        bulkColValues[colId] = Array(len);
      }
      for (let i = 0; i < len; i++) {
        const index = this._rowMap.get(rowIds[i]);
        for (const { colId, values } of this._colArray) {
          const value = index === void 0 ? null : values[index];
          bulkColValues[colId][i] = value;
        }
      }
    } else {
      bulkColValues = fromPairs(this.getColIds().filter((colId) => colId !== "id").map((colId) => [colId, this.getColValues(colId)]));
    }
    return [
      "TableData",
      this.tableId,
      rowIds,
      bulkColValues
    ];
  }
  getBulkAddRecord(desiredRowIds) {
    const tableData = this.getTableDataAction(desiredRowIds == null ? void 0 : desiredRowIds.sort((a, b) => a - b));
    return [
      "BulkAddRecord",
      tableData[1],
      tableData[2],
      tableData[3]
    ];
  }
  getColType(colId) {
    const colData = this._columns.get(colId);
    return colData ? colData.type : void 0;
  }
  getRecord(rowId) {
    const index = this._rowMap.get(rowId);
    if (index === void 0) {
      return void 0;
    }
    const ret = { id: this._rowIdCol[index] };
    for (const colData of this._colArray) {
      ret[colData.colId] = colData.values[index];
    }
    return ret;
  }
  getRecords() {
    const records = this._rowIdCol.map((id) => ({ id }));
    for (const { colId, values } of this._colArray) {
      for (let i = 0; i < records.length; i++) {
        records[i][colId] = values[i];
      }
    }
    return records;
  }
  filterRowIds(properties) {
    return this._filterRowIndices(properties).map((i) => this._rowIdCol[i]);
  }
  filterRecords(properties) {
    const rowIndices = this._filterRowIndices(properties);
    const records = rowIndices.map((i) => ({ id: this._rowIdCol[i] }));
    for (const { colId, values } of this._colArray) {
      for (let i = 0; i < records.length; i++) {
        records[i][colId] = values[rowIndices[i]];
      }
    }
    return records;
  }
  findRow(colId, colValue) {
    const colData = this._columns.get(colId);
    if (!colData) {
      return 0;
    }
    const index = colData.values.indexOf(colValue);
    return index < 0 ? 0 : this._rowIdCol[index];
  }
  findMatchingRowId(properties) {
    const props = Object.keys(properties).map((p) => ({ col: this._columns.get(p), value: properties[p] }));
    if (!props.every((p) => p.col)) {
      return 0;
    }
    return this._rowIdCol.find((id, i) => props.every((p) => isEqual(p.col.values[i], p.value))) || 0;
  }
  receiveAction(action) {
    if (this._isLoaded || (0,app_common_DocActions__WEBPACK_IMPORTED_MODULE_1__.isSchemaAction)(action)) {
      this.dispatchAction(action);
      return true;
    }
    return false;
  }
  onAddRecord(action, tableId, rowId, colValues) {
    if (this._rowMap.get(rowId) !== void 0) {
      this.onUpdateRecord(action, tableId, rowId, colValues);
      return;
    }
    const index = this._rowIdCol.length;
    this._rowMap.set(rowId, index);
    this._rowIdCol[index] = rowId;
    for (const { colId, defl, values } of this._colArray) {
      values[index] = colValues.hasOwnProperty(colId) ? colValues[colId] : defl;
    }
  }
  onBulkAddRecord(action, tableId, rowIds, colValues) {
    let destIndex = this._rowIdCol.length;
    for (let i = 0; i < rowIds.length; i++) {
      const srcIndex = this._rowMap.get(rowIds[i]);
      if (srcIndex !== void 0) {
        for (const colId in colValues) {
          if (colValues.hasOwnProperty(colId)) {
            const colData = this._columns.get(colId);
            if (colData) {
              colData.values[srcIndex] = colValues[colId][i];
            }
          }
        }
      } else {
        this._rowMap.set(rowIds[i], destIndex);
        this._rowIdCol[destIndex] = rowIds[i];
        for (const { colId, defl, values } of this._colArray) {
          values[destIndex] = colValues.hasOwnProperty(colId) ? colValues[colId][i] : defl;
        }
        destIndex++;
      }
    }
  }
  onRemoveRecord(action, tableId, rowId) {
    const index = this._rowMap.get(rowId);
    if (index !== void 0) {
      const last = this._rowIdCol.length - 1;
      for (const { values } of this._columns.values()) {
        values[index] = values[last];
        values.pop();
      }
      this._rowMap.set(this._rowIdCol[index], index);
      this._rowMap.delete(rowId);
    }
  }
  onUpdateRecord(action, tableId, rowId, colValues) {
    const index = this._rowMap.get(rowId);
    if (index !== void 0) {
      for (const colId in colValues) {
        if (colValues.hasOwnProperty(colId)) {
          const colData = this._columns.get(colId);
          if (colData) {
            colData.values[index] = colValues[colId];
          }
        }
      }
    }
  }
  onBulkUpdateRecord(action, tableId, rowIds, colValues) {
    for (let i = 0; i < rowIds.length; i++) {
      const index = this._rowMap.get(rowIds[i]);
      if (index !== void 0) {
        for (const colId in colValues) {
          if (colValues.hasOwnProperty(colId)) {
            const colData = this._columns.get(colId);
            if (colData) {
              colData.values[index] = colValues[colId][i];
            }
          }
        }
      }
    }
  }
  onReplaceTableData(action, tableId, rowIds, colValues) {
    this.loadData(action);
  }
  onAddColumn(action, tableId, colId, colInfo) {
    if (this._columns.has(colId)) {
      return;
    }
    const type = colInfo.type;
    const defl = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_2__.getDefaultForType)(type);
    const colData = { colId, type, defl, values: this._rowIdCol.map(() => defl) };
    this._columns.set(colId, colData);
    this._colArray.push(colData);
  }
  onRemoveColumn(action, tableId, colId) {
    const colData = this._columns.get(colId);
    if (!colData) {
      return;
    }
    this._columns.delete(colId);
    (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_3__.arrayRemove)(this._colArray, colData);
  }
  onRenameColumn(action, tableId, oldColId, newColId) {
    const colData = this._columns.get(oldColId);
    if (colData) {
      colData.colId = newColId;
      this._columns.set(newColId, colData);
      this._columns.delete(oldColId);
    }
  }
  onModifyColumn(action, tableId, oldColId, colInfo) {
    const colData = this._columns.get(oldColId);
    if (colData && colInfo.hasOwnProperty("type")) {
      colData.type = colInfo.type;
      colData.defl = (0,app_common_gristTypes__WEBPACK_IMPORTED_MODULE_2__.getDefaultForType)(colInfo.type);
    }
  }
  onRenameTable(action, oldTableId, newTableId) {
    this._tableId = newTableId;
  }
  onAddTable(action, tableId, columns) {
  }
  onRemoveTable(action, tableId) {
    this._isLoaded = false;
  }
  _filterRowIndices(properties) {
    const rowIndices = [];
    const props = Object.keys(properties).map((p) => ({ col: this._columns.get(p), value: properties[p] }));
    this._rowIdCol.forEach((id, i) => {
      if (props.every((p) => isEqual(p.col.values[i], p.value))) {
        rowIndices.push(i);
      }
    });
    return rowIndices;
  }
}
class MetaTableData extends TableData {
  constructor(tableId, tableData, colTypes) {
    super(tableId, tableData, colTypes);
  }
  getValue(rowId, colId) {
    return super.getValue(rowId, colId);
  }
  getRecords() {
    return super.getRecords();
  }
  getRecord(rowId) {
    return super.getRecord(rowId);
  }
  filterRecords(properties) {
    return super.filterRecords(properties);
  }
  findMatchingRowId(properties) {
    return super.findMatchingRowId(properties);
  }
  getRowPropFunc(colId) {
    return super.getRowPropFunc(colId);
  }
  getColValues(colId) {
    return super.getColValues(colId);
  }
  findRow(colId, colValue) {
    return super.findRow(colId, colValue);
  }
}
function reassignArray(targetArray, sourceArray) {
  targetArray.length = 0;
  (0,app_common_gutil__WEBPACK_IMPORTED_MODULE_3__.arraySplice)(targetArray, 0, sourceArray);
}


/***/ }),

/***/ "./app/common/schema.ts":
/*!******************************!*\
  !*** ./app/common/schema.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCHEMA_VERSION": () => (/* binding */ SCHEMA_VERSION),
/* harmony export */   "schema": () => (/* binding */ schema)
/* harmony export */ });
const SCHEMA_VERSION = 35;
const schema = {
  "_grist_DocInfo": {
    docId: "Text",
    peers: "Text",
    basketId: "Text",
    schemaVersion: "Int",
    timezone: "Text",
    documentSettings: "Text"
  },
  "_grist_Tables": {
    tableId: "Text",
    primaryViewId: "Ref:_grist_Views",
    summarySourceTable: "Ref:_grist_Tables",
    onDemand: "Bool",
    rawViewSectionRef: "Ref:_grist_Views_section"
  },
  "_grist_Tables_column": {
    parentId: "Ref:_grist_Tables",
    parentPos: "PositionNumber",
    colId: "Text",
    type: "Text",
    widgetOptions: "Text",
    isFormula: "Bool",
    formula: "Text",
    label: "Text",
    untieColIdFromLabel: "Bool",
    summarySourceCol: "Ref:_grist_Tables_column",
    displayCol: "Ref:_grist_Tables_column",
    visibleCol: "Ref:_grist_Tables_column",
    rules: "RefList:_grist_Tables_column",
    recalcWhen: "Int",
    recalcDeps: "RefList:_grist_Tables_column"
  },
  "_grist_Imports": {
    tableRef: "Ref:_grist_Tables",
    origFileName: "Text",
    parseFormula: "Text",
    delimiter: "Text",
    doublequote: "Bool",
    escapechar: "Text",
    quotechar: "Text",
    skipinitialspace: "Bool",
    encoding: "Text",
    hasHeaders: "Bool"
  },
  "_grist_External_database": {
    host: "Text",
    port: "Int",
    username: "Text",
    dialect: "Text",
    database: "Text",
    storage: "Text"
  },
  "_grist_External_table": {
    tableRef: "Ref:_grist_Tables",
    databaseRef: "Ref:_grist_External_database",
    tableName: "Text"
  },
  "_grist_TableViews": {
    tableRef: "Ref:_grist_Tables",
    viewRef: "Ref:_grist_Views"
  },
  "_grist_TabItems": {
    tableRef: "Ref:_grist_Tables",
    viewRef: "Ref:_grist_Views"
  },
  "_grist_TabBar": {
    viewRef: "Ref:_grist_Views",
    tabPos: "PositionNumber"
  },
  "_grist_Pages": {
    viewRef: "Ref:_grist_Views",
    indentation: "Int",
    pagePos: "PositionNumber"
  },
  "_grist_Views": {
    name: "Text",
    type: "Text",
    layoutSpec: "Text"
  },
  "_grist_Views_section": {
    tableRef: "Ref:_grist_Tables",
    parentId: "Ref:_grist_Views",
    parentKey: "Text",
    title: "Text",
    defaultWidth: "Int",
    borderWidth: "Int",
    theme: "Text",
    options: "Text",
    chartType: "Text",
    layoutSpec: "Text",
    filterSpec: "Text",
    sortColRefs: "Text",
    linkSrcSectionRef: "Ref:_grist_Views_section",
    linkSrcColRef: "Ref:_grist_Tables_column",
    linkTargetColRef: "Ref:_grist_Tables_column",
    embedId: "Text",
    rules: "RefList:_grist_Tables_column"
  },
  "_grist_Views_section_field": {
    parentId: "Ref:_grist_Views_section",
    parentPos: "PositionNumber",
    colRef: "Ref:_grist_Tables_column",
    width: "Int",
    widgetOptions: "Text",
    displayCol: "Ref:_grist_Tables_column",
    visibleCol: "Ref:_grist_Tables_column",
    filter: "Text",
    rules: "RefList:_grist_Tables_column"
  },
  "_grist_Validations": {
    formula: "Text",
    name: "Text",
    tableRef: "Int"
  },
  "_grist_REPL_Hist": {
    code: "Text",
    outputText: "Text",
    errorText: "Text"
  },
  "_grist_Attachments": {
    fileIdent: "Text",
    fileName: "Text",
    fileType: "Text",
    fileSize: "Int",
    imageHeight: "Int",
    imageWidth: "Int",
    timeDeleted: "DateTime",
    timeUploaded: "DateTime"
  },
  "_grist_Triggers": {
    tableRef: "Ref:_grist_Tables",
    eventTypes: "ChoiceList",
    isReadyColRef: "Ref:_grist_Tables_column",
    actions: "Text"
  },
  "_grist_ACLRules": {
    resource: "Ref:_grist_ACLResources",
    permissions: "Int",
    principals: "Text",
    aclFormula: "Text",
    aclColumn: "Ref:_grist_Tables_column",
    aclFormulaParsed: "Text",
    permissionsText: "Text",
    rulePos: "PositionNumber",
    userAttributes: "Text",
    memo: "Text"
  },
  "_grist_ACLResources": {
    tableId: "Text",
    colIds: "Text"
  },
  "_grist_ACLPrincipals": {
    type: "Text",
    userEmail: "Text",
    userName: "Text",
    groupName: "Text",
    instanceId: "Text"
  },
  "_grist_ACLMemberships": {
    parent: "Ref:_grist_ACLPrincipals",
    child: "Ref:_grist_ACLPrincipals"
  },
  "_grist_Filters": {
    viewSectionRef: "Ref:_grist_Views_section",
    colRef: "Ref:_grist_Tables_column",
    filter: "Text",
    pinned: "Bool"
  },
  "_grist_Cells": {
    tableRef: "Ref:_grist_Tables",
    colRef: "Ref:_grist_Tables_column",
    rowId: "Int",
    root: "Bool",
    parentId: "Ref:_grist_Cells",
    type: "Int",
    content: "Text",
    userRef: "Text"
  }
};


/***/ }),

/***/ "./app/client/components/DetailView.js":
/*!*********************************************!*\
  !*** ./app/client/components/DetailView.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
const ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
const dom = __webpack_require__(/*! app/client/lib/dom */ "./app/client/lib/dom.js");
const kd = __webpack_require__(/*! app/client/lib/koDom */ "./app/client/lib/koDom.js");
const koDomScrolly = __webpack_require__(/*! app/client/lib/koDomScrolly */ "./app/client/lib/koDomScrolly.js");
const { renderAllRows } = __webpack_require__(/*! app/client/components/Printing */ "./app/client/components/Printing.ts");
__webpack_require__(/*! app/client/lib/koUtil */ "./app/client/lib/koUtil.js");
const Base = __webpack_require__(/*! ./Base */ "./app/client/components/Base.js");
const BaseView = __webpack_require__(/*! ./BaseView */ "./app/client/components/BaseView.js");
const { CopySelection } = __webpack_require__(/*! ./CopySelection */ "./app/client/components/CopySelection.ts");
const RecordLayout = __webpack_require__(/*! ./RecordLayout */ "./app/client/components/RecordLayout.js");
const commands = __webpack_require__(/*! ./commands */ "./app/client/components/commands.js");
const { RowContextMenu } = __webpack_require__(/*! ../ui/RowContextMenu */ "./app/client/ui/RowContextMenu.ts");
const { parsePasteForView } = __webpack_require__(/*! ./BaseView2 */ "./app/client/components/BaseView2.ts");
function DetailView(gristDoc, viewSectionModel) {
  BaseView.call(this, gristDoc, viewSectionModel, { "addNewRow": true });
  this.viewFields = gristDoc.docModel.viewFields;
  this._isSingle = this.viewSection.parentKey.peek() === "single";
  this.recordLayout = this.autoDispose(RecordLayout.create({
    viewSection: this.viewSection,
    buildFieldDom: this.buildFieldDom.bind(this),
    buildContextMenu: this.buildContextMenu.bind(this),
    resizeCallback: () => {
      if (!this._isSingle) {
        this.scrolly().updateSize();
        this.scrolly().scrollRowIntoView(this.cursor.rowIndex.peek());
      }
    }
  }));
  this.scrolly = this.autoDispose(ko.computed(() => {
    if (!this.recordLayout.isEditingLayout() && !this._isSingle) {
      return koDomScrolly.getInstance(this.viewData);
    }
  }));
  this.autoDispose(this.viewSection.themeDef.subscribe(() => {
    var scrolly = this.scrolly();
    if (scrolly) {
      setTimeout(function() {
        scrolly.resetHeights();
      }, 0);
    }
  }));
  this.layoutBoxIdx = ko.observable(0);
  if (this._isSingle) {
    this.detailRecord = this.autoDispose(this.tableModel.createFloatingRowModel());
    this._updateFloatingRow();
    this.autoDispose(this.cursor.rowIndex.subscribe(this._updateFloatingRow, this));
    this.autoDispose(this.viewData.subscribe(this._updateFloatingRow, this));
  } else {
    this.detailRecord = null;
  }
  this.scrollPane = null;
  this.viewPane = this.autoDispose(this.buildDom());
  this.onEvent(this.viewPane, "mousedown", ".g_record_detail_el", function(elem, event) {
    this.viewSection.hasFocus(true);
    var rowModel = this.recordLayout.getContainingRow(elem, this.viewPane);
    var field = this.recordLayout.getContainingField(elem, this.viewPane);
    commands.allCommands.setCursor.run(rowModel, field);
  });
  this.onEvent(this.viewPane, "dblclick", ".g_record_detail_el", function(elem, event) {
    this.activateEditorAtCursor();
  });
  this.autoDispose(commands.createGroup(DetailView.generalCommands, this, this.viewSection.hasFocus));
  this.newFieldCommandGroup = this.autoDispose(commands.createGroup(DetailView.newFieldCommands, this, this.isNewFieldActive));
}
Base.setBaseFor(DetailView);
_.extend(DetailView.prototype, BaseView.prototype);
DetailView.prototype.onTableLoaded = function() {
  BaseView.prototype.onTableLoaded.call(this);
  this._updateFloatingRow();
  const scrolly = this.scrolly();
  if (scrolly) {
    scrolly.scrollToSavedPos(this.viewSection.lastScrollPos);
  }
};
DetailView.prototype._updateFloatingRow = function() {
  if (this.detailRecord) {
    this.viewData.setFloatingRowModel(this.detailRecord, this.cursor.rowIndex.peek());
  }
};
DetailView.generalCommands = {
  cursorUp: function() {
    this.cursor.fieldIndex(this.cursor.fieldIndex() - 1);
  },
  cursorDown: function() {
    this.cursor.fieldIndex(this.cursor.fieldIndex() + 1);
  },
  pageUp: function() {
    this.cursor.rowIndex(this.cursor.rowIndex() - 1);
  },
  pageDown: function() {
    this.cursor.rowIndex(this.cursor.rowIndex() + 1);
  },
  copy: function() {
    return this.copy(this.getSelection());
  },
  cut: function() {
    return this.cut(this.getSelection());
  },
  paste: function(pasteObj, cutCallback) {
    return this.gristDoc.docData.bundleActions(null, () => this.paste(pasteObj, cutCallback));
  },
  editLayout: function() {
    if (this.scrolly()) {
      this.scrolly().scrollRowIntoView(this.cursor.rowIndex());
    }
    this.recordLayout.editLayout(this.cursor.rowIndex());
  }
};
DetailView.prototype.selectedRows = function() {
  if (!this._isAddRow()) {
    return [this.viewData.getRowId(this.cursor.rowIndex())];
  }
  return [];
};
DetailView.prototype.deleteRows = async function(rowIds) {
  const index = this.cursor.rowIndex();
  try {
    await BaseView.prototype.deleteRows.call(this, rowIds);
  } finally {
    this.cursor.rowIndex(index);
  }
};
DetailView.prototype.paste = async function(data, cutCallback) {
  let pasteData = data[0][0];
  let field = this.viewSection.viewFields().at(this.cursor.fieldIndex());
  let isCompletePaste = data.length === 1 && data[0].length === 1;
  const richData = await parsePasteForView([[pasteData]], [field], this.gristDoc);
  if (_.isEmpty(richData)) {
    return;
  }
  const rowId = this.viewData.getRowId(this.cursor.rowIndex());
  const action = rowId === "new" ? ["BulkAddRecord", [null], richData] : ["BulkUpdateRecord", [rowId], richData];
  const cursorPos = this.cursor.getCursorPos();
  return this.sendPasteActions(isCompletePaste ? cutCallback : null, this.prepTableActions([action])).then((results) => {
    const addRowId = action[0] === "BulkAddRecord" ? results[0][0] : null;
    this.cursor.setCursorPos({ rowId: cursorPos.rowId === "new" ? addRowId : cursorPos.rowId });
    this.copySelection(null);
  });
};
DetailView.prototype.getSelection = function() {
  return new CopySelection(this.tableModel.tableData, [this.viewData.getRowId(this.cursor.rowIndex())], [this.viewSection.viewFields().at(this.cursor.fieldIndex())], {});
};
DetailView.prototype.buildContextMenu = function(row, options) {
  const defaults = {
    disableInsert: Boolean(this.gristDoc.isReadonly.get() || this.viewSection.disableAddRemoveRows() || this.tableModel.tableMetaRow.onDemand()),
    disableDelete: Boolean(this.gristDoc.isReadonly.get() || this.viewSection.disableAddRemoveRows() || row._isAddRow()),
    isViewSorted: this.viewSection.activeSortSpec.peek().length > 0,
    numRows: this.getSelection().rowIds.length
  };
  return RowContextMenu(options ? Object.assign(defaults, options) : defaults);
};
DetailView.prototype.buildFieldDom = function(field, row) {
  var self = this;
  if (field.isNewField) {
    return dom("div.g_record_detail_el.flexitem", kd.cssClass(function() {
      return "detail_theme_field_" + self.viewSection.themeDef();
    }), dom("div.g_record_detail_label", field.label), dom("div.g_record_detail_value", field.value));
  }
  var isCellSelected = ko.pureComputed(function() {
    return this.cursor.fieldIndex() === (field && field._index()) && this.cursor.rowIndex() === (row && row._index());
  }, this);
  var isCellActive = ko.pureComputed(function() {
    return this.viewSection.hasFocus() && isCellSelected();
  }, this);
  var isCopyActive = ko.computed(function() {
    return self.copySelection() && self.copySelection().isCellSelected(row.getRowId(), field.colId());
  });
  this.autoDispose(isCellSelected.subscribe((yesNo) => {
    if (yesNo) {
      var layoutBox = dom.findAncestor(fieldDom, ".layout_hbox");
      this.layoutBoxIdx(_.indexOf(layoutBox.parentElement.childNodes, layoutBox));
    }
  }));
  var fieldBuilder = this.fieldBuilders.at(field._index());
  var fieldDom = dom("div.g_record_detail_el.flexitem", dom.autoDispose(isCellSelected), dom.autoDispose(isCellActive), kd.cssClass(function() {
    return "detail_theme_field_" + self.viewSection.themeDef();
  }), dom("div.g_record_detail_label", kd.text(field.displayLabel)), dom("div.g_record_detail_value", kd.toggleClass("scissors", isCopyActive), kd.toggleClass("record-add", row._isAddRow), dom.autoDispose(isCopyActive), fieldBuilder.buildDomWithCursor(row, isCellActive, isCellSelected)));
  return fieldDom;
};
DetailView.prototype.buildDom = function() {
  return dom("div.flexvbox.flexitem", kd.toggleClass("detailview_single", () => this._isSingle || this.recordLayout.isEditingLayout()), kd.toggleClass("detailview_layout_editor", this.recordLayout.isEditingLayout), kd.maybe(this.recordLayout.isEditingLayout, () => {
    const rowId = this.viewData.getRowId(this.recordLayout.editIndex.peek());
    const record = this.getRenderedRowModel(rowId);
    return dom(this.recordLayout.buildLayoutDom(record, true), kd.cssClass(() => "detail_theme_record_" + this.viewSection.themeDef()), kd.cssClass("detailview_record_" + this.viewSection.parentKey.peek()));
  }), kd.maybe(() => !this.recordLayout.isEditingLayout(), () => {
    if (!this._isSingle) {
      return this.scrollPane = dom("div.detailview_scroll_pane.flexitem", kd.scrollChildIntoView(this.cursor.rowIndex), dom.onDispose(() => {
        if (this.scrolly()) {
          this.viewSection.lastScrollPos = this.scrolly().getScrollPos();
        }
      }), koDomScrolly.scrolly(this.viewData, { fitToWidth: true }, (row) => this.makeRecord(row)), kd.maybe(this._isPrinting, () => renderAllRows(this.tableModel, this.sortedRows.getKoArray().peek(), (row) => this.makeRecord(row))));
    } else {
      return dom(this.makeRecord(this.detailRecord), kd.domData("itemModel", this.detailRecord), kd.hide(() => this.cursor.rowIndex() === null));
    }
  }));
};
DetailView.prototype.buildTitleControls = function() {
  const showControls = ko.computed(() => {
    if (!this._isSingle || this.recordLayout.layoutEditor()) {
      return false;
    }
    const linkingState = this.viewSection.linkingState();
    return !(linkingState && Boolean(linkingState.cursorPos));
  });
  return dom("div", dom.autoDispose(showControls), kd.toggleClass("record-layout-editor", this.recordLayout.layoutEditor), kd.maybe(this.recordLayout.layoutEditor, (editor) => editor.buildEditorDom()), kd.maybe(showControls, () => dom("div.grist-single-record__menu.flexhbox.flexnone", dom("div.grist-single-record__menu__count.flexitem", kd.text(() => this._isAddRow() ? "Add record" : `${this.cursor.rowIndex() + 1} of ${this.getLastDataRowIndex() + 1}`)), dom("div.btn-group.btn-group-xs", dom("div.btn.btn-default.detail-left", dom("span.glyphicon.glyphicon-chevron-left"), dom.on("click", () => {
    this.cursor.rowIndex(this.cursor.rowIndex() - 1);
  }), kd.toggleClass("disabled", () => this.cursor.rowIndex() === 0)), dom("div.btn.btn-default.detail-right", dom("span.glyphicon.glyphicon-chevron-right"), dom.on("click", () => {
    this.cursor.rowIndex(this.cursor.rowIndex() + 1);
  }), kd.toggleClass("disabled", () => this.cursor.rowIndex() >= this.viewData.all().length - 1))), dom("div.btn-group.btn-group-xs.detail-add-grp", dom("div.btn.btn-default.detail-add-btn", dom("span.glyphicon.glyphicon-plus"), dom.on("click", () => {
    let addRowIndex = this.viewData.getRowIndex("new");
    this.cursor.rowIndex(addRowIndex);
  }), kd.toggleClass("disabled", () => this.viewData.getRowId(this.cursor.rowIndex()) === "new"))))));
};
DetailView.prototype.onResize = function() {
  var scrolly = this.scrolly();
  if (scrolly) {
    scrolly.scheduleUpdateSize();
  }
};
DetailView.prototype.onRowResize = function(rowModels) {
  var scrolly = this.scrolly();
  if (scrolly) {
    scrolly.resetItemHeights(rowModels);
  }
};
DetailView.prototype.makeRecord = function(record) {
  return dom(this.recordLayout.buildLayoutDom(record), kd.cssClass(() => "detail_theme_record_" + this.viewSection.themeDef()), this.comparison ? kd.cssClass(() => {
    const rowType = this.extraRows.getRowType(record.id());
    return rowType && `diff-${rowType}` || "";
  }) : null, kd.toggleClass("active", () => this.cursor.rowIndex() === record._index() && this.viewSection.hasFocus()), kd.cssClass("detailview_record_" + this.viewSection.parentKey.peek()));
};
DetailView.prototype.getRenderedRowModel = function(rowId) {
  if (this.detailRecord) {
    return this.detailRecord.getRowId() === rowId ? this.detailRecord : null;
  } else {
    return this.viewData.getRowModel(rowId);
  }
};
DetailView.prototype._isAddRow = function(index = this.cursor.rowIndex()) {
  return this.viewData.getRowId(index) === "new";
};
DetailView.prototype.scrollToCursor = function(sync = true) {
  if (!this.scrollPane) {
    return Promise.resolve();
  }
  return kd.doScrollChildIntoView(this.scrollPane, this.cursor.rowIndex(), sync);
};
DetailView.prototype._duplicateRows = async function() {
  const addRowIds = await BaseView.prototype._duplicateRows.call(this);
  this.setCursorPos({ rowId: addRowIds[0] });
};
module.exports = DetailView;


/***/ }),

/***/ "./app/client/components/DocConfigTab.js":
/*!***********************************************!*\
  !*** ./app/client/components/DocConfigTab.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dispose = __webpack_require__(/*! ../lib/dispose */ "./app/client/lib/dispose.js");
var dom = __webpack_require__(/*! ../lib/dom */ "./app/client/lib/dom.js");
var ValidationPanel = __webpack_require__(/*! ./ValidationPanel */ "./app/client/components/ValidationPanel.js");
function DocConfigTab(options, docName) {
  this.gristDoc = options.gristDoc;
  this.validationPanel = this.autoDispose(ValidationPanel.create({ gristDoc: this.gristDoc }));
  this.autoDispose(this.gristDoc.addOptionsTab("Validate Data", dom("span.glyphicon.glyphicon-check"), this.buildValidationsConfigDomObj(), { "shortLabel": "Valid" }));
}
dispose.makeDisposable(DocConfigTab);
DocConfigTab.prototype.buildValidationsConfigDomObj = function() {
  return [{
    "buildDom": this.validationPanel.buildDom.bind(this.validationPanel),
    "keywords": ["document", "validations", "rules", "validate"]
  }];
};
module.exports = DocConfigTab;


/***/ }),

/***/ "./app/client/components/GridView.js":
/*!*******************************************!*\
  !*** ./app/client/components/GridView.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
const ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
const debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
const gutil = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
const BinaryIndexedTree = __webpack_require__(/*! app/common/BinaryIndexedTree */ "./app/common/BinaryIndexedTree.js");
const { Sort } = __webpack_require__(/*! app/common/SortSpec */ "./app/common/SortSpec.ts");
const dom = __webpack_require__(/*! ../lib/dom */ "./app/client/lib/dom.js");
const kd = __webpack_require__(/*! ../lib/koDom */ "./app/client/lib/koDom.js");
const kf = __webpack_require__(/*! ../lib/koForm */ "./app/client/lib/koForm.js");
const koDomScrolly = __webpack_require__(/*! ../lib/koDomScrolly */ "./app/client/lib/koDomScrolly.js");
const tableUtil = __webpack_require__(/*! ../lib/tableUtil */ "./app/client/lib/tableUtil.ts");
const { addToSort, sortBy } = __webpack_require__(/*! ../lib/sortUtil */ "./app/client/lib/sortUtil.ts");
const commands = __webpack_require__(/*! ./commands */ "./app/client/components/commands.js");
const viewCommon = __webpack_require__(/*! ./viewCommon */ "./app/client/components/viewCommon.js");
const Base = __webpack_require__(/*! ./Base */ "./app/client/components/Base.js");
const BaseView = __webpack_require__(/*! ./BaseView */ "./app/client/components/BaseView.js");
const selector = __webpack_require__(/*! ./CellSelector */ "./app/client/components/CellSelector.ts");
const { CopySelection } = __webpack_require__(/*! ./CopySelection */ "./app/client/components/CopySelection.ts");
const { SelectionSummary } = __webpack_require__(/*! ./SelectionSummary */ "./app/client/components/SelectionSummary.ts");
const koUtil = __webpack_require__(/*! app/client/lib/koUtil */ "./app/client/lib/koUtil.js");
const convert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
const { renderAllRows } = __webpack_require__(/*! app/client/components/Printing */ "./app/client/components/Printing.ts");
const { reportWarning } = __webpack_require__(/*! app/client/models/errors */ "./app/client/models/errors.ts");
const { reportUndo } = __webpack_require__(/*! app/client/components/modals */ "./app/client/components/modals.ts");
const { onDblClickMatchElem } = __webpack_require__(/*! app/client/lib/dblclick */ "./app/client/lib/dblclick.ts");
const { dom: grainjsDom, Holder, Computed } = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
const { closeRegisteredMenu, menu } = __webpack_require__(/*! ../ui2018/menus */ "./app/client/ui2018/menus.ts");
const { calcFieldsCondition } = __webpack_require__(/*! ../ui/GridViewMenus */ "./app/client/ui/GridViewMenus.ts");
const { ColumnAddMenu, ColumnContextMenu, MultiColumnMenu, freezeAction } = __webpack_require__(/*! ../ui/GridViewMenus */ "./app/client/ui/GridViewMenus.ts");
const { RowContextMenu } = __webpack_require__(/*! ../ui/RowContextMenu */ "./app/client/ui/RowContextMenu.ts");
const { setPopupToCreateDom } = __webpack_require__(/*! popweasel */ "./node_modules/popweasel/dist/index.js");
const { CellContextMenu } = __webpack_require__(/*! app/client/ui/CellContextMenu */ "./app/client/ui/CellContextMenu.ts");
const { testId, isNarrowScreen } = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
const { contextMenu } = __webpack_require__(/*! app/client/ui/contextMenu */ "./app/client/ui/contextMenu.ts");
const { mouseDragMatchElem } = __webpack_require__(/*! app/client/ui/mouseDrag */ "./app/client/ui/mouseDrag.ts");
const { menuToggle } = __webpack_require__(/*! app/client/ui/MenuToggle */ "./app/client/ui/MenuToggle.ts");
const { showTooltip } = __webpack_require__(/*! app/client/ui/tooltips */ "./app/client/ui/tooltips.ts");
const { parsePasteForView } = __webpack_require__(/*! ./BaseView2 */ "./app/client/components/BaseView2.ts");
const { NEW_FILTER_JSON } = __webpack_require__(/*! app/client/models/ColumnFilter */ "./app/client/models/ColumnFilter.ts");
const { CombinedStyle } = __webpack_require__(/*! app/client/models/Styles */ "./app/client/models/Styles.ts");
const SHORT_CLICK_IN_MS = 500;
const PLUS_WIDTH = 40;
const ROW_NUMBER_WIDTH = 52;
function GridView(gristDoc, viewSectionModel, isPreview = false) {
  BaseView.call(this, gristDoc, viewSectionModel, { isPreview, "addNewRow": true });
  this.viewSection = viewSectionModel;
  this.dragX = ko.observable(0);
  this.dragY = ko.observable(0);
  this.rowShadowAdjust = 0;
  this.colShadowAdjust = 0;
  this.scrollLeft = ko.observable(0);
  this.isScrolledLeft = this.autoDispose(ko.computed(() => this.scrollLeft() > 0));
  this.scrollTop = ko.observable(0);
  this.isScrolledTop = this.autoDispose(ko.computed(() => this.scrollTop() > 0));
  this.cellSelector = selector.CellSelector.create(this, this);
  if (!isPreview) {
    this.selectionSummary = SelectionSummary.create(this, this.cellSelector, this.tableModel.tableData, this.sortedRows, this.viewSection.viewFields);
  }
  this.colMenuTargets = {};
  this.selectedColumns = this.autoDispose(ko.pureComputed(() => {
    const result = this.viewSection.viewFields().all().filter((field, index) => {
      if (field.isDisposed() || field.column().isDisposed()) {
        return false;
      }
      return this.cellSelector.containsCol(index);
    });
    return result;
  }));
  this.colRightOffsets = this.autoDispose(ko.computed(() => {
    let fields = this.viewSection.viewFields();
    let tree = new BinaryIndexedTree();
    tree.fillFromValues(fields.all().map((field) => field.widthDef()));
    return tree;
  }));
  this.visibleRowIndex = ko.observable(this.cursor.rowIndex()).extend({ notify: "always" });
  this.currentPosition = Computed.create(this, (use) => ({
    rowIndex: use(this.cursor.rowIndex),
    fieldIndex: use(this.cursor.fieldIndex)
  }));
  this.autoDispose(this.currentPosition.addListener((cur, prev) => {
    if (cur.rowIndex !== prev.rowIndex || cur.fieldIndex !== prev.fieldIndex) {
      this.visibleRowIndex(cur.rowIndex);
    }
  }));
  this.autoDispose(this.cursor.fieldIndex.subscribe((idx) => {
    const offset = this.colRightOffsets.peek().getSumTo(idx);
    const rowNumsWidth = this._cornerDom.clientWidth;
    const viewWidth = this.scrollPane.clientWidth - rowNumsWidth;
    const fieldWidth = this.colRightOffsets.peek().getValue(idx) + 1;
    const leftEdge = this.scrollPane.scrollLeft;
    const rightEdge = leftEdge + viewWidth;
    const scrollShift = offset - gutil.clamp(offset, leftEdge, rightEdge - fieldWidth);
    this.scrollPane.scrollLeft = this.scrollPane.scrollLeft + scrollShift;
  }));
  this.isPreview = isPreview;
  this.scrollShadow = {
    left: this.isScrolledLeft,
    top: this.isScrolledTop
  };
  this.ctxMenuHolder = Holder.create(this);
  this.width = ko.observable(0);
  this.numFrozen = this.viewSection.numFrozen;
  this.frozenWidth = this.autoDispose(ko.pureComputed(() => this.colRightOffsets().getSumTo(this.numFrozen())));
  this.frozenLine = this.autoDispose(ko.pureComputed(() => this.numFrozen() && !this.isScrolledLeft()));
  this.frozenOffset = this.autoDispose(ko.computed(() => {
    const fields = this.viewSection.viewFields().all();
    const lastField = fields[fields.length - 1];
    const revealWidth = lastField ? lastField.widthDef() : 0;
    const initialOffset = -this.frozenWidth() - ROW_NUMBER_WIDTH + this.width() - revealWidth - PLUS_WIDTH;
    const middleOffset = -this.frozenWidth() - ROW_NUMBER_WIDTH + this.width() / 2;
    const offset = Math.floor(Math.max(initialOffset, middleOffset));
    return offset > 0 ? 0 : Math.abs(offset);
  }));
  this.frozenScrollOffset = this.autoDispose(ko.computed(() => this.numFrozen() ? this.scrollLeft() : 0));
  this.frozenShadow = this.autoDispose(ko.computed(() => {
    return this.numFrozen() && this.frozenOffset() && this.isScrolledLeft();
  }));
  this.frozenPositions = this.autoDispose(this.viewSection.viewFields().map(function(field) {
    return ko.pureComputed(() => this.colRightOffsets().getSumTo(field._index()));
  }, this));
  this.frozenMap = this.autoDispose(this.viewSection.viewFields().map(function(field) {
    return ko.pureComputed(() => field._index() < this.numFrozen());
  }, this));
  this.hoverColumn = ko.observable(-1);
  this.changeHover = debounce((index) => {
    if (this.isDisposed()) {
      return;
    }
    if (this.gristDoc.docModel.editingFormula()) {
      this.hoverColumn(index);
    }
  }, 0);
  this.isColSelected = this.autoDispose(this.viewSection.viewFields().map(function(field) {
    return this._createColSelectedObs(field);
  }, this));
  this.header = null;
  this._cornerDom = null;
  this._modField = null;
  this.scrollPane = null;
  this.viewPane = this.autoDispose(this.buildDom());
  this.attachSelectorHandlers();
  this.scrolly = koDomScrolly.getInstance(this.viewData);
  onDblClickMatchElem(this.scrollPane, ".field", () => this.activateEditorAtCursor());
  if (!this.isPreview) {
    grainjsDom.onMatchElem(this.scrollPane, ".field:not(.column_name)", "contextmenu", (ev, elem) => this.onCellContextMenu(ev, elem), { useCapture: true });
  }
  this.onEvent(this.scrollPane, "scroll", this.onScroll);
  this.autoDispose(commands.createGroup(GridView.gridCommands, this, this.viewSection.hasFocus));
  const hasSelection = this.autoDispose(ko.pureComputed(() => !this.cellSelector.isCurrentSelectType("") || this.copySelection()));
  this.autoDispose(commands.createGroup(GridView.selectionCommands, this, hasSelection));
  this._colClickTime = 0;
}
Base.setBaseFor(GridView);
_.extend(GridView.prototype, BaseView.prototype);
GridView.selectionCommands = {
  cancel: function() {
    this.clearSelection();
  }
};
GridView.gridCommands = {
  cursorUp: function() {
    if (this.cursor.rowIndex() === 0) {
      this.scrollPane.scrollTop = 0;
    }
    this.cursor.rowIndex(this.cursor.rowIndex() - 1);
  },
  shiftDown: function() {
    this._shiftSelect(1, this.cellSelector.row.end, selector.COL, this.getLastDataRowIndex());
  },
  shiftUp: function() {
    this._shiftSelect(-1, this.cellSelector.row.end, selector.COL, this.getLastDataRowIndex());
  },
  shiftRight: function() {
    this._shiftSelect(1, this.cellSelector.col.end, selector.ROW, this.viewSection.viewFields().peekLength - 1);
  },
  shiftLeft: function() {
    this._shiftSelect(-1, this.cellSelector.col.end, selector.ROW, this.viewSection.viewFields().peekLength - 1);
  },
  fillSelectionDown: function() {
    this.fillSelectionDown();
  },
  selectAll: function() {
    this.selectAll();
  },
  fieldEditSave: function() {
    this.cursor.rowIndex(this.cursor.rowIndex() + 1);
  },
  editField: function() {
    closeRegisteredMenu();
    this.scrollToCursor(true);
    this.activateEditorAtCursor();
  },
  insertFieldBefore: function() {
    this.insertColumn(this.cursor.fieldIndex());
  },
  insertFieldAfter: function() {
    this.insertColumn(this.cursor.fieldIndex() + 1);
  },
  renameField: function() {
    this.currentEditingColumnIndex(this.cursor.fieldIndex());
  },
  hideFields: function() {
    this.hideFields(this.getSelection());
  },
  deleteFields: function() {
    const selection = this.getSelection();
    const count = selection.colIds.length;
    this.deleteColumns(selection).then((result) => {
      if (result !== false) {
        reportUndo(this.gristDoc, `You deleted ${count} column${count > 1 ? "s" : ""}.`);
      }
    });
  },
  clearValues: function() {
    this.clearValues(this.getSelection());
  },
  clearColumns: function() {
    this._clearColumns(this.getSelection());
  },
  convertFormulasToData: function() {
    this._convertFormulasToData(this.getSelection());
  },
  copy: function() {
    return this.copy(this.getSelection());
  },
  cut: function() {
    return this.cut(this.getSelection());
  },
  paste: async function(pasteObj, cutCallback) {
    await this.gristDoc.docData.bundleActions(null, () => this.paste(pasteObj, cutCallback));
    await this.scrollToCursor(false);
  },
  sortAsc: function() {
    sortBy(this.viewSection.activeSortSpec, this.currentColumn().getRowId(), Sort.ASC);
  },
  sortDesc: function() {
    sortBy(this.viewSection.activeSortSpec, this.currentColumn().getRowId(), Sort.DESC);
  },
  addSortAsc: function() {
    addToSort(this.viewSection.activeSortSpec, this.currentColumn().getRowId(), Sort.ASC);
  },
  addSortDesc: function() {
    addToSort(this.viewSection.activeSortSpec, this.currentColumn().getRowId(), Sort.DESC);
  },
  toggleFreeze: function() {
    const selection = this.getSelection();
    const options = this._getColumnMenuOptions(selection);
    const action = freezeAction(options);
    if (!action) {
      return;
    }
    if (this.gristDoc.isReadonly.get()) {
      this.viewSection.rawNumFrozen(action.numFrozen);
      return;
    }
    this.viewSection.rawNumFrozen.setAndSave(action.numFrozen);
  }
};
GridView.prototype.onTableLoaded = function() {
  BaseView.prototype.onTableLoaded.call(this);
  this.onScroll();
  this.scrollPane.scrollLeft = this.viewSection.lastScrollPos.scrollLeft;
  this.scrolly.scrollToSavedPos(this.viewSection.lastScrollPos);
};
GridView.prototype._shiftSelect = function(step, selectObs, exemptType, maxVal) {
  console.assert(exemptType === selector.ROW || exemptType === selector.COL);
  if (this.cellSelector.isCurrentSelectType(exemptType))
    return;
  if (this.cellSelector.isCurrentSelectType(selector.NONE)) {
    this.cellSelector.currentSelectType(selector.CELL);
  }
  var newVal = gutil.clamp(selectObs() + step, 0, maxVal);
  selectObs(newVal);
};
GridView.prototype.paste = async function(data, cutCallback) {
  let pasteData = _.unzip(data);
  let pasteHeight = pasteData[0].length;
  let pasteWidth = pasteData.length;
  let outputHeight = Math.max(gutil.roundDownToMultiple(this.cellSelector.rowCount(), pasteHeight), pasteHeight);
  let outputWidth = Math.max(gutil.roundDownToMultiple(this.cellSelector.colCount(), pasteWidth), pasteWidth);
  let topIndex = this.cellSelector.rowLower();
  let updateRowIndices = _.range(topIndex, topIndex + outputHeight);
  let updateRowIds = updateRowIndices.map((r) => this.viewData.getRowId(r));
  let leftIndex = this.cellSelector.colLower();
  let updateColIndices = _.range(leftIndex, leftIndex + outputWidth);
  pasteData = gutil.growMatrix(pasteData, updateColIndices.length, updateRowIds.length);
  let fields = this.viewSection.viewFields().peek();
  let pasteFields = updateColIndices.map((i) => fields[i] || null);
  const richData = await parsePasteForView(pasteData, pasteFields, this.gristDoc);
  let actions = this._createBulkActionsFromPaste(updateRowIds, richData);
  if (actions.length > 0) {
    let cursorPos = this.cursor.getCursorPos();
    return this.sendPasteActions(cutCallback, actions).then((results) => {
      let addRowIds = actions[0][0] === "BulkAddRecord" ? results[0] : [];
      console.assert(addRowIds.length <= updateRowIds.length, `Unexpected number of added rows: ${addRowIds.length} of ${updateRowIds.length}`);
      let newRowIds = updateRowIds.slice(0, updateRowIds.length - addRowIds.length).concat(addRowIds);
      this.cursor.setCursorPos({ rowId: cursorPos.rowId === "new" ? addRowIds[0] : cursorPos.rowId });
      let topRowIndex = this.viewData.getRowIndex(newRowIds[0]);
      if (newRowIds.every((r, i) => r === this.viewData.getRowId(topRowIndex + i))) {
        this.cellSelector.selectArea(topRowIndex, leftIndex, topRowIndex + outputHeight - 1, leftIndex + outputWidth - 1);
      }
      this.copySelection(null);
    });
  }
};
GridView.prototype._createBulkActionsFromPaste = function(rowIds, bulkUpdate) {
  if (_.isEmpty(bulkUpdate)) {
    return [];
  }
  let addRows = rowIds.filter((rowId) => rowId === null || rowId === "new").length;
  let updateRows = rowIds.length - addRows;
  let actions = [];
  if (addRows > 0) {
    actions.push([
      "BulkAddRecord",
      gutil.arrayRepeat(addRows, null),
      _.mapObject(bulkUpdate, (values) => values.slice(-addRows))
    ]);
  }
  if (updateRows > 0) {
    actions.push([
      "BulkUpdateRecord",
      rowIds.slice(0, updateRows),
      _.mapObject(bulkUpdate, (values) => values.slice(0, updateRows))
    ]);
  }
  return this.prepTableActions(actions);
};
GridView.prototype.fillSelectionDown = function() {
  var rowLower = this.cellSelector.rowLower();
  var rowIds = _.times(this.cellSelector.rowCount(), (i) => this.viewData.getRowId(rowLower + i));
  if (rowIds.length <= 1) {
    return;
  }
  var colLower = this.cellSelector.colLower();
  var fields = this.viewSection.viewFields().peek();
  var colIds = _.times(this.cellSelector.colCount(), (i) => {
    if (!fields[colLower + i].column().isFormula()) {
      return fields[colLower + i].colId();
    }
  }).filter((colId) => colId);
  var colInfo = _.object(colIds, colIds.map((colId) => {
    var val = this.tableModel.tableData.getValue(rowIds[0], colId);
    return rowIds.map(() => val);
  }));
  this.tableModel.sendTableAction(["BulkUpdateRecord", rowIds, colInfo]);
};
GridView.prototype.getSelection = function() {
  var rowIds = [], fields = [], rowStyle = {}, colStyle = {};
  var colStart = this.cellSelector.colLower();
  var colEnd = this.cellSelector.colUpper();
  var rowStart = this.cellSelector.rowLower();
  var rowEnd = this.cellSelector.rowUpper();
  if (this.cellSelector.isCurrentSelectType(selector.NONE)) {
    rowStart = rowEnd = this.cursor.rowIndex();
    colStart = colEnd = this.cursor.fieldIndex();
  }
  if (this.cellSelector.isCurrentSelectType(selector.ROW)) {
    colStart = 0;
    colEnd = this.viewSection.viewFields().peekLength - 1;
  } else if (this.cellSelector.isCurrentSelectType(selector.COL)) {
    rowStart = 0;
    rowEnd = this.getLastDataRowIndex();
  }
  if (colStart !== null && colEnd !== null) {
    for (var i = colStart; i <= colEnd; i++) {
      let field = this.viewSection.viewFields().at(i);
      fields.push(field);
      colStyle[field.colId()] = this._getColStyle(i);
    }
  }
  var rowId;
  for (var j = rowStart; j <= rowEnd; j++) {
    rowId = this.viewData.getRowId(j);
    rowIds.push(rowId);
    rowStyle[rowId] = this._getRowStyle(j);
  }
  return new CopySelection(this.tableModel.tableData, rowIds, fields, {
    rowStyle,
    colStyle
  });
};
GridView.prototype.clearSelection = function() {
  this.copySelection(null);
  this.cellSelector.setToCursor();
};
GridView.prototype.clearValues = function(selection) {
  const options = this._getColumnMenuOptions(selection);
  if (options.isFormula === true) {
    this.activateEditorAtCursor({ init: "" });
  } else {
    let clearAction = tableUtil.makeDeleteAction(selection);
    if (clearAction) {
      this.gristDoc.docData.sendAction(clearAction);
    }
  }
};
GridView.prototype._clearColumns = function(selection) {
  const fields = selection.fields;
  return this.gristDoc.clearColumns(fields.map((f) => f.colRef.peek()));
};
GridView.prototype._convertFormulasToData = function(selection) {
  const fields = selection.fields.filter((f) => f.column.peek().isFormula.peek());
  if (!fields.length) {
    return null;
  }
  return this.gristDoc.convertIsFormula(fields.map((f) => f.colRef.peek()), { toFormula: false });
};
GridView.prototype.selectAll = function() {
  this.cellSelector.selectArea(0, 0, this.getLastDataRowIndex(), this.viewSection.viewFields().peekLength - 1);
};
GridView.prototype.assignCursor = function(elem, elemType) {
  this.viewSection.hasFocus(true);
  try {
    let row = this.domToRowModel(elem, elemType);
    let col = this.domToColModel(elem, elemType);
    commands.allCommands.setCursor.run(row, col);
  } catch (e) {
    console.error(e);
    console.error("GridView.assignCursor expects a row/col header, or cell as an input.");
  }
  this.cellSelector.setToCursor(elemType);
};
GridView.prototype.scheduleAssignCursor = function(elem, elemType) {
  this._assignCursorTimeoutId = setTimeout(() => {
    this.assignCursor(elem, elemType);
    this._assignCursorTimeoutId = null;
  }, 0);
};
GridView.prototype.preventAssignCursor = function() {
  clearTimeout(this._assignCursorTimeoutId);
  this._assignCursorTimeoutId = null;
};
GridView.prototype.selectedRows = function() {
  const selection = this.getSelection();
  return _.without(selection.rowIds, "new");
};
GridView.prototype.deleteRows = async function(rowIds) {
  const saved = this.cursor.getCursorPos();
  this.cursor.setLive(false);
  try {
    await BaseView.prototype.deleteRows.call(this, rowIds);
  } finally {
    this.cursor.setCursorPos(saved);
    this.cursor.setLive(true);
    this.clearSelection();
  }
};
GridView.prototype.addNewColumn = function() {
  this.insertColumn(this.viewSection.viewFields().peekLength).then(() => this.scrollPaneRight());
};
GridView.prototype.insertColumn = async function(index) {
  const pos = tableUtil.fieldInsertPositions(this.viewSection.viewFields(), index)[0];
  var action = ["AddColumn", null, { "_position": pos }];
  await this.gristDoc.docData.bundleActions("Insert column", async () => {
    const colInfo = await this.tableModel.sendTableAction(action);
    if (!this.viewSection.isRaw.peek()) {
      const fieldInfo = {
        colRef: colInfo.colRef,
        parentPos: pos,
        parentId: this.viewSection.id.peek()
      };
      await this.gristDoc.docModel.viewFields.sendTableAction(["AddRecord", null, fieldInfo]);
    }
  });
  this.selectColumn(index);
  this.currentEditingColumnIndex(index);
};
GridView.prototype.scrollPaneRight = function() {
  this.scrollPane.scrollLeft = Number.MAX_SAFE_INTEGER;
};
GridView.prototype.selectColumn = function(colIndex) {
  this.cursor.fieldIndex(colIndex);
  this.cellSelector.currentSelectType(selector.COL);
};
GridView.prototype.showColumn = function(colId, index) {
  let fieldPos = tableUtil.fieldInsertPositions(this.viewSection.viewFields(), index, 1)[0];
  let colInfo = {
    parentId: this.viewSection.id(),
    colRef: colId,
    parentPos: fieldPos
  };
  return this.gristDoc.docModel.viewFields.sendTableAction(["AddRecord", null, colInfo]).then(() => this.selectColumn(index)).then(() => this.scrollPaneRight());
};
GridView.prototype.deleteColumns = function(selection) {
  var fields = selection.fields;
  if (fields.length === this.viewSection.viewFields().peekLength) {
    reportWarning("You can't delete all the columns on the grid.", {
      key: "delete-all-columns"
    });
    return Promise.resolve(false);
  }
  let actions = fields.filter((col) => !col.disableModify()).map((col) => ["RemoveColumn", col.colId()]);
  if (actions.length > 0) {
    return this.tableModel.sendTableActions(actions, `Removed columns ${actions.map((a) => a[1]).join(", ")} from ${this.tableModel.tableData.tableId}.`).then(() => this.clearSelection());
  }
  return Promise.resolve(false);
};
GridView.prototype.hideFields = function(selection) {
  var actions = selection.fields.map((field) => ["RemoveRecord", field.id()]);
  return this.gristDoc.docModel.viewFields.sendTableActions(actions, `Hide columns ${actions.map((a) => a[1]).join(", ")} from ${this.tableModel.tableData.tableId}.`);
};
GridView.prototype.moveColumns = function(oldIndices, newIndex) {
  if (oldIndices.length === 0)
    return;
  if (oldIndices[0] === newIndex || oldIndices[0] + 1 === newIndex)
    return;
  var newPositions = tableUtil.fieldInsertPositions(this.viewSection.viewFields(), newIndex, oldIndices.length);
  var vsfRowIds = oldIndices.map(function(i) {
    return this.viewSection.viewFields().at(i).id();
  }, this);
  var colInfo = { "parentPos": newPositions };
  var vsfAction = ["BulkUpdateRecord", vsfRowIds, colInfo];
  var viewFieldsTable = this.gristDoc.docModel.viewFields;
  var numCols = oldIndices.length;
  const newPos = newIndex < this.cellSelector.colLower() ? newIndex : newIndex - numCols;
  viewFieldsTable.sendTableAction(vsfAction).then(() => {
    this.cursor.fieldIndex(newPos);
    this.cellSelector.currentSelectType(selector.COL);
    this.cellSelector.col.start(newPos);
    this.cellSelector.col.end(newPos + numCols - 1);
  });
};
GridView.prototype.moveRows = function(oldIndices, newIndex) {
  if (oldIndices.length === 0)
    return;
  if (oldIndices[0] === newIndex || oldIndices[0] + 1 === newIndex)
    return;
  var newPositions = this._getRowInsertPos(newIndex, oldIndices.length);
  var rowIds = oldIndices.map(function(i) {
    return this.viewData.getRowId(i);
  }, this);
  var colInfo = { "manualSort": newPositions };
  var action = ["BulkUpdateRecord", rowIds, colInfo];
  var numRows = oldIndices.length;
  const newPos = newIndex < this.cellSelector.rowLower() ? newIndex : newIndex - numRows;
  this.tableModel.sendTableAction(action).then(() => {
    this.cursor.rowIndex(newPos);
    this.cellSelector.currentSelectType(selector.ROW);
    this.cellSelector.row.start(newPos);
    this.cellSelector.row.end(newPos + numRows - 1);
  });
};
GridView.prototype.getMousePosRow = function(yCoord) {
  var headerOffset = this.header.getBoundingClientRect().bottom;
  return this.scrolly.rowOffsetTree.getIndex(yCoord - headerOffset);
};
GridView.prototype.currentMouseRow = function(yCoord) {
  return Math.min(this.getMousePosRow(this.scrollTop() + yCoord), this.getLastDataRowIndex());
};
GridView.prototype.getMousePosCol = function(mouseX) {
  const scrollLeft = this.scrollLeft();
  const headerOffset = this._cornerDom.getBoundingClientRect().right;
  const gridX = mouseX - headerOffset;
  const frozenWidth = this.frozenWidth.peek();
  const frozenScroll = Math.min(this.frozenOffset.peek(), scrollLeft);
  const inFrozen = this.numFrozen.peek() && gridX <= frozenWidth - frozenScroll;
  const scrollX = gridX + (inFrozen ? frozenScroll : scrollLeft);
  return this.colRightOffsets.peek().getIndex(scrollX);
};
GridView.prototype._getRowStyle = function(rowIndex) {
  return { "height": this.scrolly.rowOffsetTree.getValue(rowIndex) + "px" };
};
GridView.prototype._getColStyle = function(colIndex) {
  return { "width": this.viewSection.viewFields().at(colIndex).widthPx() };
};
GridView.prototype.domToRowModel = function(elem, elemType) {
  switch (elemType) {
    case selector.COL:
      return 0;
    case selector.ROW:
      return ko.utils.domData.get(elem.parentNode, "itemModel");
    case selector.NONE:
    case selector.CELL:
      return ko.utils.domData.get(elem.parentNode.parentNode, "itemModel");
    default:
      throw Error("Unknown elemType in domToRowModel:" + elemType);
  }
};
GridView.prototype.domToColModel = function(elem, elemType) {
  switch (elemType) {
    case selector.ROW:
      return 0;
    case selector.NONE:
    case selector.CELL:
    case selector.COL:
      return ko.utils.domData.get(elem, "itemModel");
    default:
      throw Error("Unknown elemType in domToRowModel");
  }
};
GridView.prototype.onScroll = function() {
  var pane = this.scrollPane;
  this.scrollLeft(pane.scrollLeft);
  this.scrollTop(pane.scrollTop);
  this.width(pane.clientWidth);
};
GridView.prototype.buildDom = function() {
  var self = this;
  var data = this.viewData;
  var v = this.viewSection;
  var editIndex = this.currentEditingColumnIndex;
  let vHorizontalGridlines = v.optionsObj.prop("horizontalGridlines");
  let vVerticalGridlines = v.optionsObj.prop("verticalGridlines");
  let vZebraStripes = v.optionsObj.prop("zebraStripes");
  var renameCommands = {
    nextField: function() {
      editIndex(editIndex() + 1);
      self.selectColumn(editIndex.peek());
    },
    prevField: function() {
      editIndex(editIndex() - 1);
      self.selectColumn(editIndex.peek());
    }
  };
  return dom("div.gridview_data_pane.flexvbox", kd.style("--frozen-offset", this.frozenOffset), kd.style("--frozen-width", this.frozenWidth), self._cornerDom = dom("div.gridview_data_corner_overlay", dom.on("click", () => this.selectAll())), dom("div.scroll_shadow_top", kd.show(this.scrollShadow.top)), dom("div.scroll_shadow_left", kd.show(this.scrollShadow.left), kd.style("--frozen-scroll-offset", this.frozenScrollOffset)), dom("div.frozen_line", kd.show(this.frozenLine)), dom("div.gridview_header_backdrop_left"), dom("div.gridview_header_backdrop_top"), dom("div.gridview_left_border", kd.show(this.numFrozen), kd.style("left", ROW_NUMBER_WIDTH + "px")), dom("div.scroll_shadow_frozen", kd.show(this.frozenShadow)), dom.on("mouseleave", () => !this.isDisposed() && this.hoverColumn(-1)), self.colLine = dom("div.col_indicator_line", kd.show(function() {
    return self.cellSelector.isCurrentDragType(selector.COL);
  }), kd.style("left", self.cellSelector.col.linePos)), self.colShadow = dom("div.column_shadow", kd.show(function() {
    return self.cellSelector.isCurrentDragType(selector.COL);
  }), kd.style("left", function() {
    return self.dragX() - self.colShadowAdjust + "px";
  })), self.rowLine = dom("div.row_indicator_line", kd.show(function() {
    return self.cellSelector.isCurrentDragType(selector.ROW);
  }), kd.style("top", self.cellSelector.row.linePos)), self.rowShadow = dom("div.row_shadow", kd.show(function() {
    return self.cellSelector.isCurrentDragType(selector.ROW);
  }), kd.style("top", function() {
    return self.dragY() - self.rowShadowAdjust + "px";
  })), self.scrollPane = dom("div.grid_view_data.gridview_data_scroll.show_scrollbar", kd.scrollChildIntoView(self.visibleRowIndex), dom.onDispose(() => {
    self.viewSection.lastScrollPos = _.extend({
      scrollLeft: self.scrollPane.scrollLeft
    }, self.scrolly.getScrollPos());
  }), dom("div.gridview_stick-top.flexhbox", dom("div.gridview_corner_spacer"), self.header = dom("div.gridview_data_header.flexhbox", dom("div.column_names.record", kd.style("minWidth", "100%"), kd.style("borderLeftWidth", v.borderWidthPx), kd.foreach(v.viewFields(), (field) => {
    var isEditingLabel = ko.pureComputed({
      read: () => {
        const goodIndex = () => editIndex() === field._index();
        const isReadonly = () => this.gristDoc.isReadonlyKo() || self.isPreview;
        const isSummary = () => Boolean(field.column().disableEditData());
        return goodIndex() && !isReadonly() && !isSummary();
      },
      write: (val) => editIndex(val ? field._index() : -1)
    }).extend({ rateLimit: 0 });
    let filterTriggerCtl;
    const isTooltip = ko.pureComputed(() => self.gristDoc.docModel.editingFormula() && ko.unwrap(self.hoverColumn) === field._index());
    return dom("div.column_name.field", kd.style("--frozen-position", () => ko.unwrap(this.frozenPositions.at(field._index()))), kd.toggleClass("frozen", () => ko.unwrap(this.frozenMap.at(field._index()))), kd.toggleClass("hover-column", isTooltip), dom.autoDispose(isEditingLabel), dom.autoDispose(isTooltip), dom.testId("GridView_columnLabel"), (el) => {
      const tooltip = new HoverColumnTooltip(el);
      return [
        dom.autoDispose(tooltip),
        dom.autoDispose(isTooltip.subscribe((show) => {
          if (show) {
            tooltip.show(`Click to insert $${field.colId.peek()}`);
          } else {
            tooltip.hide();
          }
        }))
      ];
    }, kd.style("width", field.widthPx), kd.style("borderRightWidth", v.borderWidthPx), viewCommon.makeResizable(field.width, { shouldSave: !this.gristDoc.isReadonly.get() }), kd.toggleClass("selected", () => ko.unwrap(this.isColSelected.at(field._index()))), dom.on("contextmenu", (ev) => {
      ev.preventDefault();
      const btn = ev.currentTarget.querySelector(".g-column-menu-btn");
      if (btn) {
        btn.click();
      }
    }), dom("div.g-column-label", kf.editableLabel(self.isPreview ? field.label : field.displayLabel, isEditingLabel, renameCommands), dom.on("mousedown", (ev) => isEditingLabel() ? ev.stopPropagation() : true)), dom.on("mouseenter", () => self.changeHover(field._index())), dom.on("mouseleave", () => self.changeHover(-1)), self.isPreview ? null : menuToggle(null, kd.cssClass("g-column-main-menu"), kd.cssClass("g-column-menu-btn"), dom.on("mousedown", () => false), dom.on("click", (ev) => this.maybeSelectColumn(ev.currentTarget.parentNode, field)), (elem) => {
      filterTriggerCtl = setPopupToCreateDom(elem, (ctl) => this._columnFilterMenu(ctl, field, { showAllFiltersButton: true }), {
        attach: "body",
        placement: "bottom-start",
        boundaries: "viewport",
        trigger: []
      });
    }, menu((ctl) => this.columnContextMenu(ctl, this.getSelection(), field, filterTriggerCtl)), testId("column-menu-trigger")));
  }), this.isPreview ? null : kd.maybe(() => !this.gristDoc.isReadonlyKo(), () => this._modField = dom("div.column_name.mod-add-column.field", "+", kd.style("width", PLUS_WIDTH + "px"), dom.on("click", (ev) => {
    if (this.viewSection.hiddenColumns().length === 0) {
      ev.stopImmediatePropagation();
      this.addNewColumn();
    }
  }), menu((ctl) => ColumnAddMenu(this, this.viewSection))))))), koDomScrolly.scrolly(data, { paddingBottom: 80, paddingRight: 28 }, renderRow), kd.maybe(this._isPrinting, () => renderAllRows(this.tableModel, this.sortedRows.getKoArray().peek(), renderRow))));
  function renderRow(row) {
    var isRowActive = ko.computed(() => row._index() === self.cursor.rowIndex());
    const computedFlags = ko.pureComputed(() => {
      return self.viewSection.rulesColsIds().map((colRef) => {
        if (row.cells[colRef]) {
          return row.cells[colRef]() || false;
        }
        return false;
      });
    });
    const computedRule = koUtil.withKoUtils(ko.pureComputed(() => {
      if (row._isAddRow() || !row.id()) {
        return null;
      }
      const flags = computedFlags();
      if (flags.length === 0) {
        return null;
      }
      const styles = self.viewSection.rulesStyles() || [];
      return { style: new CombinedStyle(styles, flags) };
    }, this).extend({ deferred: true }));
    const fillColor = buildStyleOption(self, computedRule, "fillColor");
    const zebraColor = ko.pureComputed(() => calcZebra(fillColor()));
    const textColor = buildStyleOption(self, computedRule, "textColor");
    const fontBold = buildStyleOption(self, computedRule, "fontBold");
    const fontItalic = buildStyleOption(self, computedRule, "fontItalic");
    const fontUnderline = buildStyleOption(self, computedRule, "fontUnderline");
    const fontStrikethrough = buildStyleOption(self, computedRule, "fontStrikethrough");
    return dom("div.gridview_row", dom.autoDispose(isRowActive), dom.autoDispose(computedFlags), dom.autoDispose(computedRule), dom.autoDispose(textColor), dom.autoDispose(fillColor), dom.autoDispose(zebraColor), dom.autoDispose(fontBold), dom.autoDispose(fontItalic), dom.autoDispose(fontUnderline), dom.autoDispose(fontStrikethrough), dom("div.gridview_data_row_num", kd.style("width", ROW_NUMBER_WIDTH + "px"), dom("div.gridview_data_row_info", kd.toggleClass("linked_dst", () => {
      return self.linkedRowId() && self.linkedRowId() === row.getRowId();
    })), kd.text(function() {
      return row._index() + 1;
    }), kd.scope(row._validationFailures, function(failures) {
      if (!row._isAddRow() && failures.length > 0) {
        return dom("div.validation_error_number", failures.length, kd.attr("title", function() {
          return "Validation failed: " + failures.map(function(val) {
            return val.name();
          }).join(", ");
        }));
      }
    }), dom.on("contextmenu", (ev) => {
      ev.preventDefault();
      ev.currentTarget.querySelector(".menu_toggle").click();
    }), self.isPreview ? null : menuToggle(null, dom.on("click", (ev) => self.maybeSelectRow(ev.currentTarget.parentNode, row.getRowId())), menu((ctx) => {
      ctx.autoDispose(isRowActive.subscribe(() => ctx.close()));
      return self.rowContextMenu();
    }, { trigger: ["click"] }), dom.on("mousedown", () => false), testId("row-menu-trigger")), kd.toggleClass("selected", () => !row._isAddRow() && self.cellSelector.isRowSelected(row._index()))), dom("div.record", kd.toggleClass("record-add", row._isAddRow), kd.style("borderLeftWidth", v.borderWidthPx), kd.style("borderBottomWidth", v.borderWidthPx), kd.toggleClass("font-bold", fontBold), kd.toggleClass("font-underline", fontUnderline), kd.toggleClass("font-italic", fontItalic), kd.toggleClass("font-strikethrough", fontStrikethrough), kd.style("--grist-row-rule-background-color", fillColor), kd.style("--grist-row-rule-background-color-zebra", zebraColor), kd.style("--grist-row-color", textColor), kd.toggleClass("record-hlines", vHorizontalGridlines), kd.toggleClass("record-vlines", vVerticalGridlines), kd.toggleClass("record-zebra", vZebraStripes), kd.toggleClass("record-even", () => (row._index() + 1) % 2 === 0), dom.on("mouseleave", (ev) => {
      if (!ev.relatedTarget || !ev.relatedTarget.classList.contains("record")) {
        self.changeHover(-1);
      }
    }), self.isPreview ? null : contextMenu((ctx) => {
      ctx.autoDispose(isRowActive.subscribe(() => ctx.close()));
      return self.cellContextMenu();
    }), self.comparison ? kd.cssClass(() => {
      const rowType = self.extraRows.getRowType(row.id());
      return rowType && `diff-${rowType}` || "";
    }) : null, kd.foreach(v.viewFields(), function(field) {
      var isCellSelected = ko.computed(() => isRowActive() && field._index() === self.cursor.fieldIndex());
      var isCellActive = ko.computed(() => isCellSelected() && v.hasFocus());
      var isCopyActive = ko.computed(function() {
        return self.copySelection() && self.copySelection().isCellSelected(row.id(), field.colId());
      });
      var fieldBuilder = self.fieldBuilders.at(field._index());
      var isSelected = ko.computed(() => {
        return !row._isAddRow() && !self.cellSelector.isCurrentSelectType(selector.NONE) && ko.unwrap(self.isColSelected.at(field._index())) && self.cellSelector.isRowSelected(row._index());
      });
      return dom("div.field", kd.style("--frozen-position", () => ko.unwrap(self.frozenPositions.at(field._index()))), kd.toggleClass("frozen", () => ko.unwrap(self.frozenMap.at(field._index()))), kd.toggleClass("scissors", isCopyActive), dom.autoDispose(isCopyActive), dom.autoDispose(isCellSelected), dom.autoDispose(isCellActive), dom.autoDispose(isSelected), dom.on("mouseenter", () => self.changeHover(field._index())), kd.toggleClass("hover-column", () => self.gristDoc.docModel.editingFormula() && ko.unwrap(self.hoverColumn) === field._index()), kd.style("width", field.widthPx), kd.style("borderRightWidth", v.borderWidthPx), kd.toggleClass("selected", isSelected), fieldBuilder.buildDomWithCursor(row, isCellActive, isCellSelected), dom("div.field_selection"));
    })));
  }
};
GridView.prototype.onResize = function() {
  const activeFieldBuilder = this.activeFieldBuilder();
  let height = null;
  if (isNarrowScreen()) {
    height = window.outerHeight;
  }
  if (activeFieldBuilder && activeFieldBuilder.isEditorActive()) {
    this.scrolly.updateSize(height);
    this.scrolly.scrollRowIntoView(this.cursor.rowIndex.peek());
  } else {
    this.scrolly.scheduleUpdateSize(height);
  }
  this.width(this.scrollPane.clientWidth);
};
GridView.prototype.onRowResize = function(rowModels) {
  this.scrolly.resetItemHeights(rowModels);
};
GridView.prototype.onLinkFilterChange = function(rowId) {
  BaseView.prototype.onLinkFilterChange.call(this, rowId);
  this.clearSelection();
};
GridView.prototype.onCellContextMenu = function(ev, elem) {
  let row = this.domToRowModel(elem, selector.CELL);
  let col = this.domToColModel(elem, selector.CELL);
  if (this.cellSelector.containsCell(row._index(), col._index())) {
    this.preventAssignCursor();
  } else {
    this.assignCursor(elem, selector.NONE);
  }
};
GridView.prototype._createColSelectedObs = function(col) {
  return ko.pureComputed(function() {
    return this.cellSelector.isCurrentSelectType(selector.ROW) || gutil.between(col._index(), this.cellSelector.col.start(), this.cellSelector.col.end());
  }, this);
};
GridView.prototype.cellMouseDown = function(elem, event) {
  if (event.shiftKey) {
    this.viewSection.hasFocus(true);
    let row = this.domToRowModel(elem, selector.CELL);
    let col = this.domToColModel(elem, selector.CELL);
    this.cellSelector.selectArea(this.cursor.rowIndex(), this.cursor.fieldIndex(), row._index(), col._index());
  } else {
    this.assignCursor(elem, selector.NONE);
  }
};
GridView.prototype.colMouseDown = function(elem, event) {
  this._colClickTime = Date.now();
  this.assignCursor(elem, selector.COL);
  this.cellSelector.row.end(this.getLastDataRowIndex());
};
GridView.prototype.rowMouseDown = function(elem, event) {
  if (event.shiftKey) {
    this.cellSelector.currentSelectType(selector.ROW);
    this.cellSelector.row.end(this.currentMouseRow(event.pageY));
  } else {
    this.assignCursor(elem, selector.ROW);
  }
};
GridView.prototype.rowMouseMove = function(event) {
  this.cellSelector.row.end(this.currentMouseRow(event.pageY));
};
GridView.prototype.colMouseMove = function(event) {
  var currentCol = Math.min(this.getMousePosCol(event.pageX), this.viewSection.viewFields().peekLength - 1);
  this.cellSelector.col.end(currentCol);
};
GridView.prototype.cellMouseMove = function(event) {
  this.colMouseMove(event);
  this.rowMouseMove(event);
  if (this.cellSelector.onlyCellSelected(this.cursor.rowIndex(), this.cursor.fieldIndex())) {
    this.cellSelector.currentSelectType(selector.NONE);
  } else {
    this.cellSelector.currentSelectType(selector.CELL);
  }
};
GridView.prototype.createSelector = function() {
  this.cellSelector = new selector.CellSelector(this);
};
GridView.prototype.attachSelectorHandlers = function() {
  const ignoreEvent = (event, elem) => event.button !== 0 || event.target.classList.contains("ui-resizable-handle") || !this.ctxMenuHolder.isEmpty();
  this.autoDispose(mouseDragMatchElem(this.viewPane, ".gridview_data_row_num", (event, elem) => {
    if (!ignoreEvent(event, elem)) {
      if (!this.cellSelector.isSelected(elem, selector.ROW)) {
        this.rowMouseDown(elem, event);
        return {
          onMove: (ev) => this.rowMouseMove(ev),
          onStop: (ev) => {
          }
        };
      } else if (!this.viewSection.disableDragRows()) {
        this.styleRowDragElements(elem, event);
        return {
          onMove: (ev) => this.dragRows(ev),
          onStop: (ev) => this.dropRows()
        };
      }
    }
  }));
  this.autoDispose(mouseDragMatchElem(this.viewPane, ".column_name.field:not(.mod-add-column)", (event, elem) => {
    if (!ignoreEvent(event, elem)) {
      if (!this.cellSelector.isSelected(elem, selector.COL)) {
        this.colMouseDown(elem, event);
        return {
          onMove: (ev) => this.colMouseMove(ev),
          onStop: (ev) => {
          }
        };
      } else {
        this.styleColDragElements(elem, event);
        return {
          onMove: (ev) => this.dragCols(ev),
          onStop: (ev) => this.dropCols()
        };
      }
    }
  }));
  this.autoDispose(mouseDragMatchElem(this.scrollPane, ".field:not(.column_name)", (event, elem) => {
    if (!ignoreEvent(event, elem)) {
      if (!this.cellSelector.isSelected(elem, selector.CELL)) {
        this.cellMouseDown(elem, event);
        return {
          onMove: (ev) => this.cellMouseMove(ev),
          onStop: (ev) => {
          }
        };
      } else {
        this.scheduleAssignCursor(elem, selector.NONE);
        return {
          onMove: (ev) => {
          },
          onStop: (ev) => {
            this.cellSelector.currentDragType(selector.NONE);
          }
        };
      }
    }
  }));
};
GridView.prototype.styleRowDragElements = function(elem, event) {
  var rowStart = this.cellSelector.rowLower();
  var rowEnd = this.cellSelector.rowUpper();
  var shadowHeight = this.scrolly.rowOffsetTree.getCumulativeValueRange(rowStart, rowEnd + 1);
  var shadowTop = this.header.getBoundingClientRect().height + this.scrolly.rowOffsetTree.getSumTo(rowStart) - this.scrollTop();
  this.rowLine.style.top = shadowTop + "px";
  this.rowShadow.style.top = shadowTop + "px";
  this.rowShadow.style.height = shadowHeight + "px";
  this.rowShadowAdjust = event.pageY - shadowTop;
  this.cellSelector.currentDragType(selector.ROW);
  this.cellSelector.row.dropIndex(this.cellSelector.rowLower());
};
GridView.prototype.styleColDragElements = function(elem, event) {
  this._colClickTime = Date.now();
  var colStart = this.cellSelector.colLower();
  var colEnd = this.cellSelector.colUpper();
  var shadowWidth = this.colRightOffsets.peek().getCumulativeValueRange(colStart, colEnd + 1);
  var viewDataNumsWidth = $(".gridview_corner_spacer").width();
  var shadowLeft = viewDataNumsWidth + this.colRightOffsets.peek().getSumTo(colStart) - this.scrollLeft();
  this.colLine.style.left = shadowLeft + "px";
  this.colShadow.style.left = shadowLeft + "px";
  this.colShadow.style.width = shadowWidth + "px";
  this.colShadowAdjust = event.pageX - shadowLeft;
  this.cellSelector.currentDragType(selector.COL);
  this.cellSelector.col.dropIndex(this.cellSelector.colLower());
};
GridView.prototype.dragRows = function(event) {
  var dropIndex = Math.min(this.getMousePosRow(event.pageY + this.scrollTop()), this.getLastDataRowIndex());
  if (this.cellSelector.containsRow(dropIndex)) {
    dropIndex = this.cellSelector.rowLower();
  } else if (dropIndex > this.cellSelector.rowUpper()) {
    dropIndex += 1;
  }
  if (this.cellSelector.rowUpper() === this.viewData.peekLength - 1) {
    dropIndex = Math.min(dropIndex, this.cellSelector.rowLower());
  }
  var linePos = this.scrolly.rowOffsetTree.getSumTo(dropIndex) + this.header.getBoundingClientRect().height - this.scrollTop();
  this.cellSelector.row.linePos(linePos + "px");
  this.cellSelector.row.dropIndex(dropIndex);
  this.dragY(event.pageY);
};
GridView.prototype.dragCols = function(event) {
  let dropIndex = Math.min(this.getMousePosCol(event.pageX), this.viewSection.viewFields().peekLength - 1);
  if (this.cellSelector.containsCol(dropIndex)) {
    dropIndex = this.cellSelector.colLower();
  } else if (dropIndex > this.cellSelector.colUpper()) {
    dropIndex += 1;
  }
  if (this.cellSelector.colUpper() === this.viewSection.viewFields().peekLength - 1) {
    dropIndex = Math.min(dropIndex, this.cellSelector.colLower());
  }
  const viewDataNumsWidth = $(".gridview_corner_spacer").width();
  let linePos = viewDataNumsWidth + this.colRightOffsets.peek().getSumTo(dropIndex);
  const frozenCount = this.numFrozen();
  const inFrozen = frozenCount > 0 && dropIndex < frozenCount;
  const scrollLeft = this.scrollLeft();
  if (inFrozen) {
    linePos -= Math.min(this.frozenOffset.peek(), scrollLeft);
  } else {
    linePos -= scrollLeft;
  }
  this.cellSelector.col.linePos(linePos + "px");
  this.cellSelector.col.dropIndex(dropIndex);
  this.dragX(event.pageX);
};
GridView.prototype.dropRows = function() {
  var oldIndices = _.range(this.cellSelector.rowLower(), this.cellSelector.rowUpper() + 1);
  this.moveRows(oldIndices, this.cellSelector.row.dropIndex());
  this.cellSelector.currentDragType(selector.NONE);
};
GridView.prototype.dropCols = function() {
  var oldIndices = _.range(this.cellSelector.colLower(), this.cellSelector.colUpper() + 1);
  const idx = this.cellSelector.col.dropIndex();
  this.moveColumns(oldIndices, idx);
  if (Date.now() - this._colClickTime < SHORT_CLICK_IN_MS && oldIndices.length === 1 && idx === oldIndices[0]) {
    this.currentEditingColumnIndex(idx);
  }
  this._colClickTime = 0;
  this.cellSelector.currentDragType(selector.NONE);
};
GridView.prototype.columnContextMenu = function(ctl, copySelection, field, filterTriggerCtl) {
  const selectedColIds = copySelection.colIds;
  this.ctxMenuHolder.autoDispose(ctl);
  const options = this._getColumnMenuOptions(copySelection);
  if (selectedColIds.length > 1 && selectedColIds.includes(field.column().colId())) {
    return MultiColumnMenu(options);
  } else {
    return ColumnContextMenu(__spreadValues({
      filterOpenFunc: () => filterTriggerCtl.open(),
      sortSpec: this.gristDoc.viewModel.activeSection.peek().activeSortSpec.peek(),
      colId: field.column.peek().id.peek()
    }, options));
  }
};
GridView.prototype._getColumnMenuOptions = function(copySelection) {
  return {
    columnIndices: copySelection.fields.map((f) => f._index()),
    totalColumnCount: this.viewSection.viewFields.peek().peekLength,
    numColumns: copySelection.fields.length,
    numFrozen: this.viewSection.numFrozen.peek(),
    disableModify: calcFieldsCondition(copySelection.fields, (f) => f.disableModify.peek()),
    isReadonly: this.gristDoc.isReadonly.get() || this.isPreview,
    isRaw: this.viewSection.isRaw(),
    isFiltered: this.isFiltered(),
    isFormula: calcFieldsCondition(copySelection.fields, (f) => f.column.peek().isRealFormula.peek())
  };
};
GridView.prototype._columnFilterMenu = function(ctl, field, options) {
  this.ctxMenuHolder.autoDispose(ctl);
  const filterInfo = this.viewSection.filters().find(({ fieldOrColumn }) => fieldOrColumn.origCol().origColRef() === field.column().origColRef());
  if (!filterInfo.isFiltered.peek()) {
    this.viewSection.setFilter(filterInfo.fieldOrColumn.origCol().origColRef(), {
      filter: NEW_FILTER_JSON,
      pinned: true
    });
  }
  return this.createFilterMenu(ctl, filterInfo, options);
};
GridView.prototype.maybeSelectColumn = function(elem, field) {
  this.viewSection.hasFocus(true);
  const selectedColIds = this.getSelection().colIds;
  if (selectedColIds.length > 1 && selectedColIds.includes(field.column().colId())) {
    return;
  }
  this.assignCursor(elem, selector.COL);
};
GridView.prototype.maybeSelectRow = function(elem, rowId) {
  this.viewSection.hasFocus(true);
  if (!this.getSelection().rowIds.includes(rowId)) {
    this.assignCursor(elem, selector.ROW);
  }
};
GridView.prototype.rowContextMenu = function() {
  return RowContextMenu(this._getRowContextMenuOptions());
};
GridView.prototype._getRowContextMenuOptions = function() {
  return {
    disableInsert: Boolean(this.gristDoc.isReadonly.get() || this.viewSection.disableAddRemoveRows() || this.tableModel.tableMetaRow.onDemand()),
    disableDelete: Boolean(this.gristDoc.isReadonly.get() || this.viewSection.disableAddRemoveRows() || this.getSelection().onlyAddRowSelected()),
    isViewSorted: this.viewSection.activeSortSpec.peek().length > 0,
    numRows: this.getSelection().rowIds.length
  };
};
GridView.prototype.cellContextMenu = function() {
  return CellContextMenu(this._getRowContextMenuOptions(), this._getColumnMenuOptions(this.getSelection()));
};
GridView.prototype.scrollToCursor = function(sync = true) {
  return kd.doScrollChildIntoView(this.scrollPane, this.cursor.rowIndex(), sync);
};
GridView.prototype._duplicateRows = async function() {
  const addRowIds = await BaseView.prototype._duplicateRows.call(this);
  const topRowIndex = this.viewData.getRowIndex(addRowIds[0]);
  this.setCursorPos({ rowId: addRowIds[0] });
  if (addRowIds.every((r, i) => r === this.viewData.getRowId(topRowIndex + i))) {
    this.cellSelector.selectArea(topRowIndex, 0, topRowIndex + addRowIds.length - 1, this.viewSection.viewFields().peekLength - 1);
  }
};
function buildStyleOption(owner, computedRule, optionName) {
  return ko.computed(() => {
    if (owner.isDisposed()) {
      return null;
    }
    const rule = computedRule();
    if (!rule || !rule.style) {
      return "";
    }
    return rule.style[optionName] || "";
  });
}
class HoverColumnTooltip {
  constructor(el) {
    this.el = el;
  }
  show(text) {
    this.hide();
    this.tooltip = showTooltip(this.el, () => dom("span", text, testId("column-formula-tooltip")));
  }
  hide() {
    if (this.tooltip) {
      this.tooltip.close();
      this.tooltip = null;
    }
  }
  dispose() {
    this.hide();
  }
}
function calcZebra(hex) {
  if (!hex || hex.length !== 7) {
    return hex;
  }
  const hsl = convert.hex.hsl(hex.substr(1));
  if (hsl[2] > 50) {
    hsl[2] -= 2.6;
  } else if (hsl[2] > 1) {
    hsl[2] += 11;
  } else {
    hsl[2] += 16;
  }
  return `#${convert.hsl.hex(hsl)}`;
}
module.exports = GridView;


/***/ }),

/***/ "./app/client/components/RecordLayout.js":
/*!***********************************************!*\
  !*** ./app/client/components/RecordLayout.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var Promise = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
var gutil = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
var dispose = __webpack_require__(/*! ../lib/dispose */ "./app/client/lib/dispose.js");
var dom = __webpack_require__(/*! ../lib/dom */ "./app/client/lib/dom.js");
var { Delay } = __webpack_require__(/*! ../lib/Delay */ "./app/client/lib/Delay.ts");
var kd = __webpack_require__(/*! ../lib/koDom */ "./app/client/lib/koDom.js");
var { makeT } = __webpack_require__(/*! ../lib/localization */ "./app/client/lib/localization.ts");
var Layout = __webpack_require__(/*! ./Layout */ "./app/client/components/Layout.ts");
var RecordLayoutEditor = __webpack_require__(/*! ./RecordLayoutEditor */ "./app/client/components/RecordLayoutEditor.js");
var commands = __webpack_require__(/*! ./commands */ "./app/client/components/commands.js");
var { menuToggle } = __webpack_require__(/*! app/client/ui/MenuToggle */ "./app/client/ui/MenuToggle.ts");
var { menu } = __webpack_require__(/*! ../ui2018/menus */ "./app/client/ui2018/menus.ts");
var { testId } = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
var { contextMenu } = __webpack_require__(/*! app/client/ui/contextMenu */ "./app/client/ui/contextMenu.ts");
const t = makeT("RecordLayout");
function RecordLayout(options) {
  this.viewSection = options.viewSection;
  this.buildFieldDom = options.buildFieldDom;
  this.buildContextMenu = options.buildContextMenu;
  this.isEditingLayout = ko.observable(false);
  this.editIndex = ko.observable(0);
  this.layoutEditor = ko.observable(null);
  if (options.resizeCallback) {
    this._resizeCallback = options.resizeCallback;
    this._delayedResize = this.autoDispose(Delay.create());
  }
  this.fieldsById = this.autoDispose(ko.computed(function() {
    return _.indexBy(this.viewSection.viewFields().all(), function(field) {
      return field.getRowId();
    });
  }, this));
  this.layoutSpec = this.autoDispose(ko.computed(function() {
    if (this.viewSection.isDisposed()) {
      return null;
    }
    return RecordLayout.updateLayoutSpecWithFields(this.viewSection.layoutSpecObj(), this.viewSection.viewFields().all());
  }, this).extend({ rateLimit: 0 }));
  this.autoDispose(this.layoutSpec.subscribe(() => this.resizeCallback()));
}
dispose.makeDisposable(RecordLayout);
RecordLayout.prototype.resizeCallback = function() {
  if (!this.isDisposed() && this._delayedResize && !this.isEditingLayout.peek()) {
    this._delayedResize.schedule(0, this._resizeCallback);
  }
};
RecordLayout.prototype.getField = function(fieldRowId) {
  if (typeof fieldRowId === "string") {
    var parts = gutil.maxsplit(fieldRowId, ":", 2);
    return {
      isNewField: true,
      colRef: parseInt(parts[0], 10),
      label: parts[1],
      value: parts[2]
    };
  }
  return this.fieldsById()[fieldRowId];
};
RecordLayout.prototype.editLayout = function(rowIndex) {
  this.editIndex(rowIndex);
  this.isEditingLayout(true);
};
RecordLayout.prototype.onEditLayoutCancel = function(layoutSpec) {
  this.isEditingLayout(false);
  this.resizeCallback();
};
RecordLayout.prototype.onEditLayoutSave = async function(layoutSpec) {
  try {
    await this.saveLayoutSpec(layoutSpec);
  } finally {
    this.isEditingLayout(false);
    this.resizeCallback();
  }
};
RecordLayout.updateLayoutSpecWithFields = function(spec, viewFields) {
  var tmpLayout = Layout.Layout.create(spec, function(leafId) {
    return dom("div");
  });
  var specFieldIds = tmpLayout.getAllLeafIds();
  var viewFieldIds = viewFields.map(function(f) {
    return f.getRowId();
  });
  _.difference(specFieldIds, viewFieldIds).forEach(function(leafId) {
    tmpLayout.getLeafBox(leafId).dispose();
  });
  _.difference(viewFieldIds, specFieldIds).forEach(function(leafId) {
    var newBox = tmpLayout.buildLayoutBox({ leaf: leafId });
    var rows = tmpLayout.rootBox().childBoxes.peek();
    if (rows.length >= 1 && _.last(rows).isLeaf()) {
      _.last(rows).addChild(newBox, true);
    } else {
      tmpLayout.rootBox().addChild(newBox, true);
    }
  });
  spec = tmpLayout.getLayoutSpec();
  tmpLayout.dispose();
  return spec;
};
RecordLayout.prototype.saveLayoutSpec = async function(layoutSpec) {
  if (JSON.stringify(layoutSpec) === this.viewSection.layoutSpec.peek()) {
    return;
  }
  const docModel = this.viewSection._table.docModel;
  const docData = docModel.docData;
  const tableId = this.viewSection.table().tableId();
  const getField = (fieldRef) => this.getField(fieldRef);
  const addColAction = ["AddColumn", null, {}];
  var origRefs = [];
  var colRefToFieldRef = /* @__PURE__ */ new Map();
  this.viewSection.viewFields().all().forEach((f) => {
    origRefs.push(f.getRowId());
    colRefToFieldRef.set(f.colRef(), f.getRowId());
  });
  var nextPos = 0;
  var addColNum = 0;
  var existingRefs = [];
  var existingPositions = [];
  var hiddenColRefs = [];
  var hiddenCallbacks = [];
  var hiddenPositions = [];
  var addedCallbacks = [];
  var addedPositions = [];
  function processBox(spec) {
    if (spec.leaf && spec.leaf !== "empty") {
      let pos = nextPos++;
      let field = getField(spec.leaf);
      let updateLeaf = (ref) => {
        spec.leaf = ref;
      };
      if (!field.isNewField) {
        existingRefs.push(field.getRowId());
        existingPositions.push(pos);
      } else if (colRefToFieldRef.has(field.colRef)) {
        let fieldRef = colRefToFieldRef.get(field.colRef);
        existingRefs.push(fieldRef);
        existingPositions.push(pos);
        updateLeaf(fieldRef);
      } else if (Number.isNaN(field.colRef)) {
        addColNum++;
        addedCallbacks.push(updateLeaf);
        addedPositions.push(pos);
      } else {
        hiddenColRefs.push(field.colRef);
        hiddenCallbacks.push(updateLeaf);
        hiddenPositions.push(pos);
      }
    }
    if (spec.children) {
      spec.children.map(processBox);
    }
  }
  processBox(layoutSpec);
  let callbacks = addedCallbacks.concat(hiddenCallbacks);
  let positions = addedPositions.concat(hiddenPositions);
  let addActions = gutil.arrayRepeat(addColNum, 0).map(() => addColAction.slice());
  await docData.bundleActions(t("Updating record layout."), () => {
    return Promise.try(() => {
      return addColNum > 0 ? docModel.dataTables[tableId].sendTableActions(addActions) : [];
    }).then((results) => {
      let colRefs = results.map((r) => r.colRef).concat(hiddenColRefs);
      const addFieldNum = colRefs.length;
      return addFieldNum > 0 ? docModel.viewFields.sendTableAction(["BulkAddRecord", gutil.arrayRepeat(addFieldNum, null), {
        parentId: gutil.arrayRepeat(addFieldNum, this.viewSection.getRowId()),
        colRef: colRefs,
        parentPos: positions
      }]) : [];
    }).each((fieldRef, i) => {
      callbacks[i](fieldRef);
    }).then((addedRefs) => {
      let actions = [];
      let finishedRefs = new Set(existingRefs.concat(addedRefs));
      let removed = origRefs.filter((fieldRef) => !finishedRefs.has(fieldRef));
      if (removed.length > 0) {
        actions.push(["BulkRemoveRecord", "_grist_Views_section_field", removed]);
      }
      if (existingRefs.length > 0) {
        actions.push(["BulkUpdateRecord", "_grist_Views_section_field", existingRefs, {
          "parentPos": existingPositions
        }]);
      }
      actions.push(["UpdateRecord", "_grist_Views_section", this.viewSection.getRowId(), {
        "layoutSpec": JSON.stringify(layoutSpec)
      }]);
      return docData.sendActions(actions);
    });
  });
};
RecordLayout.prototype.buildLayoutDom = function(row, optCreateEditor) {
  const createEditor = Boolean(optCreateEditor && !this.layoutEditor.peek());
  const layout = Layout.Layout.create(this.layoutSpec(), (fieldRowId) => dom("div.g_record_layout_leaf.flexhbox.flexauto", this.buildFieldDom(this.getField(fieldRowId), row), createEditor ? kd.maybe(this.layoutEditor, (editor) => editor.buildLeafDom()) : null));
  const sub = this.layoutSpec.subscribe((spec) => {
    layout.buildLayout(spec, createEditor);
  });
  if (createEditor) {
    this.layoutEditor(RecordLayoutEditor.create(this, layout));
  }
  return dom("div.g_record_detail.flexauto", dom.autoDispose(layout), dom.autoDispose(sub), createEditor ? dom.onDispose(() => {
    this.layoutEditor.peek().dispose();
    this.layoutEditor(null);
  }) : null, contextMenu(() => this.buildContextMenu(row)), dom("div.detail_row_num", kd.text(() => row._index() + 1), dom.on("contextmenu", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    ev.currentTarget.querySelector(".menu_toggle").click();
  }), menuToggle(null, dom.on("click", () => {
    this.viewSection.hasFocus(true);
    commands.allCommands.setCursor.run(row);
  }), menu(() => this.buildContextMenu(row)), testId("card-menu-trigger"))), dom("div.g_record_detail_inner", layout.rootElem));
};
RecordLayout.prototype.getContainingField = function(elem, optContainer) {
  return this.getField(Layout.Layout.getContainingBox(elem, optContainer).leafId());
};
RecordLayout.prototype.getContainingRow = function(elem, optContainer) {
  var itemElem = dom.findAncestor(elem, optContainer, ".g_record_detail");
  return ko.utils.domData.get(itemElem, "itemModel");
};
module.exports = RecordLayout;


/***/ }),

/***/ "./app/client/components/RecordLayoutEditor.js":
/*!*****************************************************!*\
  !*** ./app/client/components/RecordLayoutEditor.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
var BackboneEvents = (__webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js").Events);
var dispose = __webpack_require__(/*! app/client/lib/dispose */ "./app/client/lib/dispose.js");
var { makeT } = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
var commands = __webpack_require__(/*! ./commands */ "./app/client/components/commands.js");
var LayoutEditor = __webpack_require__(/*! ./LayoutEditor */ "./app/client/components/LayoutEditor.ts");
const t = makeT("RecordLayoutEditor");
const { basicButton, cssButton, primaryButton } = __webpack_require__(/*! app/client/ui2018/buttons */ "./app/client/ui2018/buttons.ts");
const { icon } = __webpack_require__(/*! app/client/ui2018/icons */ "./app/client/ui2018/icons.ts");
const { menu, menuDivider, menuItem } = __webpack_require__(/*! app/client/ui2018/menus */ "./app/client/ui2018/menus.ts");
const { testId } = __webpack_require__(/*! app/client/ui2018/cssVars */ "./app/client/ui2018/cssVars.ts");
const { dom, Observable, styled } = __webpack_require__(/*! grainjs */ "./node_modules/grainjs/dist/esm/index.js");
function RecordLayoutEditor(recordLayout, layout, optResizeCallback) {
  this.recordLayout = recordLayout;
  this.layout = layout;
  this.layoutEditor = this.autoDispose(LayoutEditor.LayoutEditor.create(layout));
  this._hiddenColumns = this.autoDispose(Observable.create(null, this.getHiddenColumns()));
  this.listenTo(layout, "layoutChanged", function() {
    this._hiddenColumns.set(this.getHiddenColumns());
  });
  if (optResizeCallback) {
    this.listenTo(layout, "layoutChanged", optResizeCallback);
    this.listenTo(layout, "layoutResized", optResizeCallback);
  }
  this.autoDispose(commands.createGroup(RecordLayoutEditor.editLayoutCommands, this, true));
}
dispose.makeDisposable(RecordLayoutEditor);
_.extend(RecordLayoutEditor.prototype, BackboneEvents);
RecordLayoutEditor.editLayoutCommands = {
  accept: function() {
    this.recordLayout.onEditLayoutSave(this.layout.getLayoutSpec());
  },
  cancel: function() {
    this.layout.buildLayout(this.recordLayout.layoutSpec());
    this.recordLayout.onEditLayoutCancel();
  }
};
RecordLayoutEditor.prototype.getHiddenColumns = function() {
  var included = new Set(this.layout.getAllLeafIds().map(function(leafId) {
    var f = this.recordLayout.getField(leafId);
    return f.isNewField ? f.colRef : f.colRef.peek();
  }, this));
  return this.recordLayout.viewSection.table().columns().all().filter(function(col) {
    return !included.has(col.getRowId()) && !col.isHiddenCol();
  });
};
RecordLayoutEditor.prototype._addField = function(leafId) {
  var newBox = this.layout.buildLayoutBox({ leaf: leafId });
  var rows = this.layout.rootBox().childBoxes.peek();
  if (rows.length >= 1 && _.last(rows).isLeaf()) {
    _.last(rows).addChild(newBox, true);
  } else {
    this.layout.rootBox().addChild(newBox, true);
  }
};
RecordLayoutEditor.prototype.buildEditorDom = function() {
  const addNewField = () => {
    this._addField(":New_Field:");
  };
  const showField = (col) => {
    setTimeout(() => this._addField(col.getRowId() + ":" + col.label()), 0);
  };
  return cssControls(basicButton(t("Add Field"), cssCollapseIcon("Collapse"), menu((ctl) => [
    menuItem(() => addNewField(), t("Create New Field")),
    dom.maybe((use) => use(this._hiddenColumns).length > 0, () => menuDivider()),
    dom.forEach(this._hiddenColumns, (col) => menuItem(() => showField(col), t("Show field {{- label}}", { label: col.label() }))),
    testId("edit-layout-add-menu")
  ])), dom("div.flexauto", { style: "margin-left: 8px" }), this.buildFinishButtons(), testId("edit-layout-controls"));
};
RecordLayoutEditor.prototype.buildFinishButtons = function() {
  return [
    primaryButton(t("Save Layout"), dom.on("click", () => commands.allCommands.accept.run())),
    basicButton(t("Cancel"), dom.on("click", () => commands.allCommands.cancel.run()), { style: "margin-left: 8px" })
  ];
};
RecordLayoutEditor.prototype.buildLeafDom = function() {
  return dom("div.layout_grabbable.g_record_layout_editing", dom("div.g_record_delete_field.glyphicon.glyphicon-eye-close", dom.on("mousedown", (ev) => ev.stopPropagation()), dom.on("click", (ev, elem) => {
    ev.preventDefault();
    ev.stopPropagation();
    this.layoutEditor.removeContainingBox(elem);
  })));
};
const cssControls = styled("div", `
  display: flex;
  align-items: flex-start;

  & > .${cssButton.className} {
    white-space: nowrap;
    overflow: hidden;
  }
`);
const cssCollapseIcon = styled(icon, `
  margin: -3px -2px -2px 2px;
`);
module.exports = RecordLayoutEditor;


/***/ }),

/***/ "./app/client/components/ValidationPanel.js":
/*!**************************************************!*\
  !*** ./app/client/components/ValidationPanel.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var dispose = __webpack_require__(/*! ../lib/dispose */ "./app/client/lib/dispose.js");
var dom = __webpack_require__(/*! ../lib/dom */ "./app/client/lib/dom.js");
var kd = __webpack_require__(/*! ../lib/koDom */ "./app/client/lib/koDom.js");
var kf = __webpack_require__(/*! ../lib/koForm */ "./app/client/lib/koForm.js");
var AceEditor = __webpack_require__(/*! ./AceEditor */ "./app/client/components/AceEditor.js");
var { makeT } = __webpack_require__(/*! app/client/lib/localization */ "./app/client/lib/localization.ts");
const t = makeT("ValidationPanel");
function ValidationPanel(options) {
  this.gristDoc = options.gristDoc;
  this.validationsTable = this.gristDoc.docModel.validations;
  this.validations = this.autoDispose(this.validationsTable.createAllRowsModel("id"));
  this.docTables = this.autoDispose(this.gristDoc.docModel.tables.createAllRowsModel("tableId"));
  this.tableChoices = this.autoDispose(this.docTables.map(function(table) {
    return { label: table.tableId, value: table.id() };
  }));
}
dispose.makeDisposable(ValidationPanel);
ValidationPanel.prototype.onAddRule = function() {
  this.validationsTable.sendTableAction(["AddRecord", null, {
    tableRef: this.docTables.at(0).id(),
    name: t("Rule {{length}}", { length: this.validations.peekLength + 1 }),
    formula: ""
  }]).then(function() {
    $(".validation_formula").last().find("input").focus();
  });
};
ValidationPanel.prototype.onDeleteRule = function(rowId) {
  this.validationsTable.sendTableAction(["RemoveRecord", rowId]);
};
ValidationPanel.prototype.buildDom = function() {
  return [
    kf.row(1, kf.label("Validations"), 1, kf.buttonGroup(kf.button(this.onAddRule.bind(this), "Add Rule", dom.testId("Validation_addRule")))),
    dom("div", dom.testId("Validation_rules"), kd.foreach(this.validations, (validation) => {
      var editor = AceEditor.create({ observable: validation.formula });
      var editorUpToDate = ko.observable(true);
      return dom("div.validation", dom.autoDispose(editor), dom("div.validation_title.flexhbox", dom("div.validation_name", kf.editableLabel(validation.name)), dom("div.flexitem"), dom("div.validation_trash.glyphicon.glyphicon-remove", dom.on("click", this.onDeleteRule.bind(this, validation.id())))), kf.row(1, dom("div.glyphicon.glyphicon-tag.config_icon"), 8, kf.label("Table"), 9, kf.select(validation.tableRef, this.tableChoices)), dom("div.kf_elem.validation_formula", editor.buildDom((aceObj) => {
        editor.attachSaveCommand();
        aceObj.on("change", () => {
          if (editor.getValue() === validation.formula() !== editorUpToDate()) {
            editorUpToDate(!editorUpToDate());
          }
        });
        aceObj.removeAllListeners("blur");
      })), kf.row(2, "", 1, kf.buttonGroup(kf.button(() => editor.writeObservable(), "Apply", { title: t("Update formula (Shift+Enter)") }, kd.toggleClass("disabled", editorUpToDate)))));
    }))
  ];
};
module.exports = ValidationPanel;


/***/ }),

/***/ "./app/client/components/viewCommon.js":
/*!*********************************************!*\
  !*** ./app/client/components/viewCommon.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var koDom = __webpack_require__(/*! ../lib/koDom */ "./app/client/lib/koDom.js");
var _respectSize = $.ui.resizable.prototype._respectSize;
$.ui.resizable.prototype._respectSize = function() {
  var data = _respectSize.apply(this, arguments);
  if (this.options.isFlex) {
    console.log("Ignoring left, top");
    data.left = data.top = void 0;
  }
  return data;
};
function makeResizable(widthObservable, options) {
  options = options || {};
  function onEvent(e, ui) {
    widthObservable(ui.size.width);
    if (e.type === "resizestop") {
      if (options.stop) {
        options.stop(e, ui);
      }
      if (widthObservable.save && options.shouldSave !== false) {
        widthObservable.save();
      }
    }
  }
  return function(elem) {
    $(elem).resizable({
      handles: options.handles || "e",
      resize: onEvent,
      stop: onEvent,
      isFlex: options.isFlex,
      minWidth: options.minWidth || 10
    });
    if (options.hasOwnProperty("enabled")) {
      koDom.setBinding(elem, options.enabled, function(elem2, value) {
        if (value) {
          $(elem2).resizable("enable");
        } else {
          $(elem2).resizable("disable").removeClass("ui-state-disabled");
        }
      });
    }
  };
}
exports.makeResizable = makeResizable;


/***/ }),

/***/ "./app/client/lib/koDomScrolly.js":
/*!****************************************!*\
  !*** ./app/client/lib/koDomScrolly.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var gutil = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
var BinaryIndexedTree = __webpack_require__(/*! app/common/BinaryIndexedTree */ "./app/common/BinaryIndexedTree.js");
var { Delay } = __webpack_require__(/*! ./Delay */ "./app/client/lib/Delay.ts");
var dispose = __webpack_require__(/*! ./dispose */ "./app/client/lib/dispose.js");
var kd = __webpack_require__(/*! ./koDom */ "./app/client/lib/koDom.js");
var dom = __webpack_require__(/*! ./dom */ "./app/client/lib/dom.js");
var G = (__webpack_require__(/*! ./browserGlobals */ "./app/client/lib/browserGlobals.js").get)("window", "$");
function ScrollyPane(scrolly2, paneIndex, container, options, itemCreateFunc) {
  this.scrolly = scrolly2;
  this.paneIndex = paneIndex;
  this.container = container;
  this.itemCreateFunc = itemCreateFunc;
  this.preparedRows = [];
  _.extend(this.scrolly.options, options);
  this.container.appendChild(this.scrollDiv = dom("div.scrolly_outer", kd.style("height", this.scrolly.totalHeightPx), this.blockDiv = dom("div", kd.style("position", "absolute"), kd.style("top", this.scrolly.blockTopPx), kd.style("width", options.fitToWidth ? "100%" : ""), kd.style("padding-right", options.paddingRight + "px"))));
  ko.utils.domNodeDisposal.addDisposeCallback(container, () => {
    this.scrolly.destroyPane(this);
    for (var k in this) {
      delete this[k];
    }
  });
  G.$(this.container).on("scroll", () => this.scrolly.onScroll(this));
}
ScrollyPane.prototype.prepareNewRows = function() {
  var i, item, row, begin = this.scrolly.begin, count = this.scrolly.end - begin, array = this.scrolly.data.peek(), prevItemModels = this.scrolly.activeItemModels, prevRows = this.preparedRows;
  if (prevRows.length > 0) {
    assert.equal(prevRows.length, prevItemModels.length, "Rows and models not in sync: " + prevRows.length + "!=" + prevItemModels.length);
  }
  this.preparedRows = [];
  for (i = 0; i < prevRows.length; i++) {
    row = prevRows[i];
    item = prevItemModels[i];
    if (item._index() === null) {
      ko.removeNode(row);
    } else {
      var relIndex = item._index() - begin;
      assert(relIndex >= 0 && relIndex < count, "prepareNewRows saw out-of-range model");
      this.preparedRows[relIndex] = row;
    }
  }
  for (i = 0; i < count; i++) {
    if (!this.preparedRows[i]) {
      item = array[begin + i];
      assert(item, "ScrollyPane item missing at index " + (begin + i));
      item._rowHeightPx("");
      row = this.itemCreateFunc(item);
      kd.style("height", item._rowHeightPx)(row);
      ko.utils.domData.set(row, "itemModel", item);
      this.preparedRows[i] = row;
      this.blockDiv.appendChild(row);
    }
  }
};
ScrollyPane.prototype.measurePreparedRow = function(rowIndex) {
  var row = this.preparedRows[rowIndex];
  var rect = row.getBoundingClientRect();
  return rect.bottom - rect.top;
};
ScrollyPane.prototype.arrangePreparedRows = function() {
  for (var i = 0; i < this.preparedRows.length; i++) {
    var row = this.preparedRows[i];
    var current = this.blockDiv.childNodes[i];
    if (row !== current) {
      this.blockDiv.insertBefore(row, current);
    }
  }
};
function Scrolly(dataModel) {
  this.data = dataModel;
  this.numRows = 0;
  this.options = {
    paddingBottom: 0
  };
  this.panes = [];
  this.activeItemModels = [];
  this.rowHeights = [];
  this.rowOffsetTree = new BinaryIndexedTree();
  this.minRowHeight = 23;
  this.numBuffered = 1;
  this.numRendered = 1;
  this.begin = 0;
  this.end = 0;
  this.scrollTop = 0;
  this.shownHeight = 0;
  this.blockBottom = 0;
  this.blockTop = ko.observable(0);
  this.blockTopPx = ko.computed(function() {
    return this.blockTop() + "px";
  }, this);
  this.totalHeight = ko.observable(0);
  this.totalHeightPx = ko.computed(function() {
    return this.totalHeight() + "px";
  }, this);
  this.subscription = this.autoDispose(this.data.subscribe(this.onDataSplice, this, "spliceChange"));
  this.delayedUpdateSize = this.autoDispose(Delay.create());
  var array = this.data.all();
  this.onDataSplice({ array, start: 0, added: array.length, deleted: [] });
  let onResize = () => {
    this.scheduleUpdateSize();
  };
  G.$(G.window).on("resize.scrolly", onResize);
  this.autoDisposeCallback(() => G.$(G.window).off("resize.scrolly", onResize));
}
exports.Scrolly = Scrolly;
dispose.makeDisposable(Scrolly);
Scrolly.prototype.debug = function() {
  console.log("Scrolly: numRows " + this.numRows + "; panes " + this.panes.length + "; numRendered " + this.numRendered + " [" + this.begin + ", " + this.end + "); block at " + this.blockTop() + " of " + this.totalHeight() + "; scrolled to " + this.scrollTop + "; shownHeight " + this.shownHeight);
  console.assert(this.numRows, this.data.peekLength, "Wrong numRows; data is " + this.data.peekLength);
  console.assert(this.numRows, this.rowHeights.length, "Wrong rowHeights size " + this.rowHeights.length);
  console.assert(this.numRows, this.rowOffsetTree.size(), "Wrong rowOffsetTree size " + this.rowOffsetTree.size());
  var count = Math.min(this.numRendered, this.numRows);
  console.assert(this.end - this.begin, count, "Wrong range size " + (this.end - this.begin));
  console.assert(this.activeItemModels.length, count, "Wrong activeItemModels.size " + this.activeItemModels.length);
  var expectedHeight = this.blockBottom - this.blockTop();
  if (count > 0) {
    for (var p = 0; p < this.panes.length; p++) {
      var topRow = this.panes[p].preparedRows[0].getBoundingClientRect();
      var bottomRow = _.last(this.panes[p].preparedRows).getBoundingClientRect();
      var blockHeight = bottomRow.bottom - topRow.top;
      if (blockHeight !== expectedHeight) {
        console.warn("Scrolly render pane #%d %dpx bigger from expected (%dpx per row). Ensure items have no margins", p, blockHeight - expectedHeight, (blockHeight - expectedHeight) / count);
      }
    }
  }
};
function getInstance(dataModel) {
  if (!dataModel._scrollyObj) {
    dataModel._scrollyObj = Scrolly.create(dataModel);
    dataModel._scrollyObj.autoDisposeCallback(() => delete dataModel._scrollyObj);
  }
  return dataModel._scrollyObj;
}
exports.getInstance = getInstance;
Scrolly.prototype.addPane = function(containerElem, options, itemCreateFunc) {
  var pane = new ScrollyPane(this, this.panes.length, containerElem, options, itemCreateFunc);
  this.panes.push(pane);
  this.scheduleUpdateSize();
};
Scrolly.prototype.scheduleUpdateSize = function(overrideHeight) {
  if (!this.isDisposed() && !this.delayedUpdateSize.isPending()) {
    this.delayedUpdateSize.schedule(0, this.updateSize.bind(this, overrideHeight), this);
  }
};
Scrolly.prototype.updateSize = function(overrideHeight) {
  this.resetHeights();
  this.shownHeight = Math.max(0, Math.max.apply(null, this.panes.map(function(pane) {
    return pane.container.clientHeight;
  })));
  var numVisible = Math.max(1, Math.ceil((overrideHeight != null ? overrideHeight : this.shownHeight) / this.minRowHeight));
  this.numBuffered = 5;
  this.numRendered = numVisible + 2 * this.numBuffered;
  this._updateRange();
  this.render();
  this.syncScrollPosition();
};
Scrolly.prototype.onScroll = function(pane) {
  this.scrollTo(pane.container.scrollTop);
};
Scrolly.prototype.scrollTo = function(top) {
  if (top === this.scrollTop) {
    return;
  }
  this.scrollTop = top;
  this.syncScrollPosition();
  if (this.blockTop() <= top && this.blockBottom >= top + this.shownHeight) {
    return;
  }
  var atEnd = top + this.shownHeight >= this.panes[0].container.scrollHeight;
  this._updateRange();
  this.render();
  if (atEnd) {
    this.scrollTop = this.panes[0].container.scrollHeight - this.shownHeight;
  }
  this.syncScrollPosition();
};
Scrolly.prototype.onDataSplice = function(splice) {
  this.numRows = this.data.peekLength;
  this.rowHeights.splice(splice.start, splice.deleted.length);
  gutil.arraySplice(this.rowHeights, splice.start, gutil.arrayRepeat(splice.added, this.minRowHeight));
  this.rowOffsetTree.fillFromValues(this.rowHeights);
  this.totalHeight(this.rowOffsetTree.getTotal() + this.options.paddingBottom);
  this._updateRange();
  this.scheduleUpdateSize();
};
Scrolly.prototype.syncScrollPosition = function() {
  var top = this.scrollTop;
  for (var p = 0; p < this.panes.length; p++) {
    this.panes[p].container.scrollTop = top;
  }
};
Scrolly.prototype.createItemModel = function() {
  var item = this.data.makeItemModel();
  item._rowHeightPx = ko.observable("");
  return item;
};
Scrolly.prototype.render = function() {
  var i, p, item, index, delta, count = this.end - this.begin, array = this.data.peek(), freeList = [];
  assert(this.end <= array.length, "Scrolly render() exceeds data length of " + array.length);
  var rowAtScrollTop = this.rowOffsetTree.getIndex(this.scrollTop);
  var sumToScrollTop = this.rowOffsetTree.getSumTo(rowAtScrollTop);
  for (i = 0; i < this.activeItemModels.length; i++) {
    item = this.activeItemModels[i];
    index = item._index();
    if (index === null || index < this.begin || index >= this.end) {
      freeList.push(item);
    }
  }
  for (i = 0, index = this.begin; i < count; i++, index++) {
    if (!array[index]) {
      item = freeList.shift() || this.createItemModel();
      this.data.setItemModel(item, index);
      item._rowHeightPx("");
    }
  }
  for (i = 0; i < freeList.length; i++) {
    this.data.unsetItemModel(freeList[i]);
  }
  for (p = 0; p < this.panes.length; p++) {
    this.panes[p].prepareNewRows();
  }
  for (i = 0, index = this.begin; i < count; i++, index++) {
    item = array[index];
    if (item._rowHeightPx.peek() === "") {
      var height = this.minRowHeight;
      for (p = 0; p < this.panes.length; p++) {
        height = Math.max(height, this.panes[p].measurePreparedRow(i));
      }
      height = Math.round(height);
      delta = height - this.rowHeights[index];
      if (delta !== 0) {
        this.rowHeights[index] = height;
        this.rowOffsetTree.addValue(index, delta);
      }
    }
  }
  for (i = 0, index = this.begin; i < count; i++, index++) {
    item = array[index];
    item._rowHeightPx(this.rowHeights[index] + "px");
  }
  for (p = 0; p < this.panes.length; p++) {
    this.panes[p].arrangePreparedRows();
  }
  this.activeItemModels = array.slice(this.begin, this.end);
  this.totalHeight(this.rowOffsetTree.getTotal() + this.options.paddingBottom);
  this.blockTop(this.rowOffsetTree.getSumTo(this.begin));
  this.blockBottom = this.rowOffsetTree.getSumTo(this.end);
  delta = this.rowOffsetTree.getSumTo(rowAtScrollTop) - sumToScrollTop;
  if (delta !== 0) {
    this.scrollTop += delta;
    this.syncScrollPosition();
  }
};
Scrolly.prototype.resetHeights = function(optRowIndexList) {
  var array = this.data.peek();
  if (optRowIndexList) {
    for (var i = 0; i < optRowIndexList.length; i++) {
      var index = optRowIndexList[i];
      var item = array[index];
      if (item) {
        item._rowHeightPx("");
      }
    }
  } else {
    this.activeItemModels.forEach(function(item2) {
      item2._rowHeightPx("");
    });
  }
  this.render();
};
Scrolly.prototype.resetItemHeights = function(items) {
  if (!this.isDisposed()) {
    items.forEach((item) => item._rowHeightPx(""));
    this.render();
  }
};
Scrolly.prototype.scrollToPosition = function(calcPosition) {
  var scrollTop = calcPosition();
  this.scrollTo(scrollTop);
  scrollTop = calcPosition();
  if (scrollTop !== this.scrollTop) {
    this.scrollTop = scrollTop;
    this.syncScrollPosition();
  }
};
Scrolly.prototype.scrollRowIntoView = function(rowIndex) {
  this.scrollToPosition(() => {
    var top = this.rowOffsetTree.getSumTo(rowIndex);
    var bottom = top + this.rowHeights[rowIndex];
    return gutil.clamp(this.scrollTop, bottom - this.shownHeight + 43, top - 10);
  });
};
Scrolly.prototype.scrollToSavedPos = function(scrollPos) {
  this.scrollToPosition(() => this.rowOffsetTree.getSumTo(scrollPos.rowIndex) + scrollPos.offset);
};
Scrolly.prototype.getScrollPos = function() {
  var rowIndex = this.rowOffsetTree.getIndex(this.scrollTop);
  return {
    rowIndex,
    offset: this.scrollTop - this.rowOffsetTree.getSumTo(rowIndex)
  };
};
Scrolly.prototype.destroyPane = function(pane) {
  gutil.arrayRemove(this.panes, pane);
  if (this.panes.length === 0) {
    this.dispose();
  }
};
Scrolly.prototype._updateRange = function() {
  const begin = this.rowOffsetTree.getIndex(this.scrollTop) - this.numBuffered;
  this.begin = gutil.clamp(begin, 0, this.numRows - this.numRendered);
  this.end = gutil.clamp(this.begin + this.numRendered, 0, this.numRows);
};
function scrolly(data, options, itemCreateFunc) {
  assert.equal(typeof itemCreateFunc, "function");
  options = options || {};
  return function(elem) {
    var scrollyObj = getInstance(data);
    scrollyObj.addPane(elem, options, itemCreateFunc);
    ko.utils.domData.set(elem, "scrolly", scrollyObj);
  };
}
exports.scrolly = scrolly;


/***/ }),

/***/ "./app/client/models/MetaRowModel.js":
/*!*******************************************!*\
  !*** ./app/client/models/MetaRowModel.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var dispose = __webpack_require__(/*! ../lib/dispose */ "./app/client/lib/dispose.js");
var BaseRowModel = __webpack_require__(/*! ./BaseRowModel */ "./app/client/models/BaseRowModel.js");
var modelUtil = __webpack_require__(/*! ./modelUtil */ "./app/client/models/modelUtil.js");
var BackboneEvents = (__webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js").Events);
function MetaRowModel(tableModel, fieldNames, rowConstructor, rowId) {
  var colNames = ["id"].concat(fieldNames);
  BaseRowModel.call(this, tableModel, colNames);
  this._rowId = rowId;
  this.events = this.autoDisposeWith("stopListening", BackboneEvents);
  this._isDeleted = ko.observable(false);
  this._fields.forEach(function(colName) {
    this._assignColumn(colName);
  }, this);
  if (rowConstructor) {
    rowConstructor.call(this, tableModel.docModel, tableModel);
  }
}
dispose.makeDisposable(MetaRowModel);
_.extend(MetaRowModel.prototype, BaseRowModel.prototype);
MetaRowModel.prototype._assignColumn = function(colName) {
  if (this.hasOwnProperty(colName)) {
    this[colName].assign(this._table.tableData.getValue(this._rowId, colName));
  }
};
MetaRowModel.Floater = function(tableModel, rowIdObs) {
  this._table = tableModel;
  this.rowIdObs = rowIdObs;
  this._underlyingRowModel = this.autoDispose(ko.computed(function() {
    return tableModel.getRowModel(rowIdObs());
  }));
  _.each(this._underlyingRowModel(), function(propValue, propName) {
    if (ko.isObservable(propValue)) {
      this[propName] = this.autoDispose(ko.pureComputed({
        owner: this,
        read: function() {
          return this._underlyingRowModel()[propName]();
        },
        write: function(val) {
          this._underlyingRowModel()[propName](val);
        }
      }));
      if (propValue.saveOnly) {
        modelUtil.addSaveInterface(this[propName], (value) => this._underlyingRowModel()[propName].saveOnly(value));
      }
    }
  }, this);
};
dispose.makeDisposable(MetaRowModel.Floater);
module.exports = MetaRowModel;


/***/ }),

/***/ "./app/client/models/MetaTableModel.js":
/*!*********************************************!*\
  !*** ./app/client/models/MetaTableModel.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var dispose = __webpack_require__(/*! ../lib/dispose */ "./app/client/lib/dispose.js");
var MetaRowModel = __webpack_require__(/*! ./MetaRowModel */ "./app/client/models/MetaRowModel.js");
var TableModel = __webpack_require__(/*! ./TableModel */ "./app/client/models/TableModel.js");
var rowset = __webpack_require__(/*! ./rowset */ "./app/client/models/rowset.ts");
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var gutil = __webpack_require__(/*! app/common/gutil */ "./app/common/gutil.ts");
function MetaTableModel(docModel, tableData, fields, rowConstructor) {
  TableModel.call(this, docModel, tableData);
  this._fields = fields;
  this._rowConstructor = rowConstructor;
  this.rowModels = [];
  this._rowModelVersions = [];
  this.listenTo(this, "rowNotify", function(rows, action) {
    assert(rows !== rowset.ALL, "Unexpected schema action on a metadata table");
    for (let r of rows) {
      if (this.rowModels[r]) {
        this.rowModels[r].dispatchAction(action);
      }
    }
  });
}
dispose.makeDisposable(MetaTableModel);
_.extend(MetaTableModel.prototype, TableModel.prototype);
MetaTableModel.prototype.loadData = function() {
  assert(this.tableData.isLoaded, "MetaTableModel: tableData not yet loaded");
  this.getAllRows().forEach(function(rowId) {
    this._createRowModel(rowId);
  }, this);
};
MetaTableModel.prototype.getRowModel = function(rowId, optDependOnVersion) {
  const rowIdModel = this.rowModels[rowId];
  const r = rowIdModel || this.getEmptyRowModel();
  if (optDependOnVersion) {
    const version = this._rowModelVersions[rowId];
    if (version) {
      version();
    } else {
    }
  }
  return r;
};
MetaTableModel.prototype.getEmptyRowModel = function() {
  return this._createRowModel(0);
};
MetaTableModel.prototype._createRowModel = function(rowId) {
  if (!this.rowModels[rowId]) {
    ko.ignoreDependencies(() => {
      this.rowModels[rowId] = MetaRowModel.create(this, this._fields, this._rowConstructor, rowId);
      let inc = this._rowModelVersions[rowId] || (this._rowModelVersions[rowId] = ko.observable(0));
      inc(inc.peek() + 1);
    });
  }
  return this.rowModels[rowId];
};
MetaTableModel.prototype.createFloatingRowModel = function(rowIdObs) {
  return MetaRowModel.Floater.create(this, rowIdObs);
};
MetaTableModel.prototype._process_RemoveRecord = function(action, tableId, rowId) {
  TableModel.prototype._process_RemoveRecord.apply(this, arguments);
  this._deleteRowModel(rowId);
};
MetaTableModel.prototype._deleteRowModel = function(rowId) {
  this.rowModels[rowId]._isDeleted(true);
  this.rowModels[rowId].dispose();
  delete this.rowModels[rowId];
};
MetaTableModel.prototype._process_BulkRemoveRecord = function(action, tableId, rowIds) {
  TableModel.prototype._process_BulkRemoveRecord.apply(this, arguments);
  rowIds.forEach((rowId) => this._deleteRowModel(rowId));
};
MetaTableModel.prototype._process_AddRecord = function(action, tableId, rowId, columnValues) {
  this._createRowModel(rowId);
  TableModel.prototype._process_AddRecord.apply(this, arguments);
};
MetaTableModel.prototype._process_BulkAddRecord = function(action, tableId, rowIds, columns) {
  rowIds.forEach((rowId) => this._createRowModel(rowId));
  TableModel.prototype._process_BulkAddRecord.apply(this, arguments);
};
MetaTableModel.prototype.applySchemaAction = function(action) {
  throw new Error("No schema actions should apply to metadata");
};
MetaTableModel.prototype.createAllRowsModel = function(sortColId) {
  return this._createRowSetModel(this, sortColId);
};
MetaTableModel.prototype.createRowGroupModel = function(groupValue, options) {
  var grouping = this.getRowGrouping(options.groupBy);
  return this._createRowSetModel(grouping.getGroup(groupValue), options.sortBy);
};
MetaTableModel.prototype._createRowSetModel = function(rowSource, sortColId) {
  var getter = this.tableData.getRowPropFunc(sortColId);
  var sortedRowSet = rowset.SortedRowSet.create(null, function(r1, r2) {
    return gutil.nativeCompare(getter(r1), getter(r2));
  });
  sortedRowSet.subscribeTo(rowSource);
  var ret = this._createRowModelArray(sortedRowSet.getKoArray());
  ret.autoDispose(sortedRowSet);
  return ret;
};
MetaTableModel.prototype._createRowModelArray = function(rowIdArray) {
  var ret = rowIdArray.map(this._createRowModelItem, this);
  ret.subscribe(function(splice) {
    var arr = splice.array, i;
    for (i = 0; i < splice.deleted.length; i++) {
      splice.deleted[i]._index(null);
    }
    var delta = splice.added - splice.deleted.length;
    if (delta !== 0) {
      for (i = splice.start + splice.added; i < arr.length; i++) {
        arr[i]._index(i);
      }
    }
  }, null, "spliceChange");
  return ret;
};
MetaTableModel.prototype._createRowModelItem = function(rowId, index) {
  var rowModel = this._createRowModel(rowId);
  assert.ok(rowModel, "MetaTableModel._createRowModelItem called for invalid rowId " + rowId);
  var ret = Object.create(rowModel);
  ret._index = ko.observable(index);
  return ret;
};
module.exports = MetaTableModel;


/***/ }),

/***/ "./app/common/BinaryIndexedTree.js":
/*!*****************************************!*\
  !*** ./app/common/BinaryIndexedTree.js ***!
  \*****************************************/
/***/ ((module) => {

function BinaryIndexedTree(optSize) {
  this.tree = [];
  if (optSize > 0) {
    this.tree.length = optSize;
    for (var i = 0; i < optSize; i++) {
      this.tree[i] = 0;
    }
    this.mask = mostSignificantOne(this.tree.length - 1);
  }
}
function leastSignificantOne(num) {
  return num & -num;
}
BinaryIndexedTree.leastSignificantOne = leastSignificantOne;
function stripLeastSignificantOne(num) {
  return num & num - 1;
}
BinaryIndexedTree.stripLeastSignificantOne = stripLeastSignificantOne;
function mostSignificantOne(num) {
  if (num === 0) {
    return 0;
  }
  var msb = 1;
  while (num >>>= 1) {
    msb <<= 1;
  }
  return msb;
}
BinaryIndexedTree.mostSignificantOne = mostSignificantOne;
function cumulToValues(values) {
  for (var i = values.length - 1; i >= 1; i--) {
    values[i] -= values[i - 1];
  }
  return values;
}
BinaryIndexedTree.cumulToValues = cumulToValues;
function valuesToCumul(values) {
  for (var i = 1; i < values.length; i++) {
    values[i] += values[i - 1];
  }
  return values;
}
BinaryIndexedTree.valuesToCumul = valuesToCumul;
BinaryIndexedTree.prototype.size = function() {
  return this.tree.length;
};
BinaryIndexedTree.prototype.toCumulativeArray = function() {
  var cumulValues = [this.tree[0]];
  var len = cumulValues.length = this.tree.length;
  for (var i = 1; i < len; i++) {
    cumulValues[i] = this.tree[i] + cumulValues[stripLeastSignificantOne(i)];
  }
  return cumulValues;
};
BinaryIndexedTree.prototype.toValueArray = function() {
  return cumulToValues(this.toCumulativeArray());
};
BinaryIndexedTree.prototype.fillFromCumulative = function(cumulValues) {
  var len = this.tree.length = cumulValues.length;
  if (len > 0) {
    this.tree[0] = cumulValues[0];
    for (var i = 1; i < len; i++) {
      this.tree[i] = cumulValues[i] - cumulValues[stripLeastSignificantOne(i)];
    }
    this.mask = mostSignificantOne(this.tree.length - 1);
  } else {
    this.mask = 0;
  }
};
BinaryIndexedTree.prototype.fillFromValues = function(values) {
  this.fillFromCumulative(valuesToCumul(values.slice()));
};
BinaryIndexedTree.prototype.getCumulativeValue = function(index) {
  var sum = this.tree[0];
  while (index > 0) {
    sum += this.tree[index];
    index = stripLeastSignificantOne(index);
  }
  return sum;
};
BinaryIndexedTree.prototype.getCumulativeValueRange = function(start, end) {
  return this.getSumTo(end) - this.getSumTo(start);
};
BinaryIndexedTree.prototype.getSumTo = function(index) {
  return index > 0 ? this.getCumulativeValue(index - 1) : 0;
};
BinaryIndexedTree.prototype.getTotal = function() {
  return this.getCumulativeValue(this.tree.length - 1);
};
BinaryIndexedTree.prototype.getValue = function(index) {
  var value = this.tree[index];
  if (index > 0) {
    var parent = stripLeastSignificantOne(index);
    index--;
    while (index !== parent) {
      value -= this.tree[index];
      index = stripLeastSignificantOne(index);
    }
  }
  return value;
};
BinaryIndexedTree.prototype.addValue = function(index, delta) {
  if (index === 0) {
    this.tree[0] += delta;
  } else {
    while (index < this.tree.length) {
      this.tree[index] += delta;
      index += leastSignificantOne(index);
    }
  }
};
BinaryIndexedTree.prototype.setValue = function(index, value) {
  this.addValue(index, value - this.getValue(index));
};
BinaryIndexedTree.prototype.getIndex = function(cumulValue) {
  if (this.tree.length === 0 || this.tree[0] >= cumulValue) {
    return 0;
  }
  var index = 0;
  var mask = this.mask;
  var sum = this.tree[0];
  while (mask !== 0) {
    var testIndex = index + mask;
    if (testIndex < this.tree.length && sum + this.tree[testIndex] < cumulValue) {
      index = testIndex;
      sum += this.tree[index];
    }
    mask >>>= 1;
  }
  return index + 1;
};
module.exports = BinaryIndexedTree;


/***/ })

}]);
//# sourceMappingURL=app_client_components_GristDoc_ts.bundle.js.map