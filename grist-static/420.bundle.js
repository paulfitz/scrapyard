"use strict";(self.webpackChunkgrist_core=self.webpackChunkgrist_core||[]).push([[420],{20420:(e,t,i)=>{i.r(t),i.d(t,{SearchModelImpl:()=>f,searchBar:()=>C});var n=i(24412),s=i(70387),a=i(38109),r=i(8881),o=i(55317),h=i(92478),c=i(29922),d=i(7454),p=i(18099),l=i(92769),g=i(39764),_=i(83277);const u=i(88466);class w{constructor(){this.array=[],this.index=0}inRange(){return this.index>=0&&this.index<this.array.length}next(e,t){if(this.index+=e,!this.inRange()){const i=t();if(i)return i.then((()=>this.setStart(e)));this.setStart(e)}}setStart(e){this.index=e>0?0:this.array.length-1}get value(){return this.array[this.index]}}class x{constructor(e){this._section=e}viewSections(){return[this._section]}activeSectionId(){return this._section.id.peek()}getViewId(){return"data"}async openPage(){var e;this._section.view.peek().activeSectionId(this._section.getRowId()),await(0,_.waitObs)(this._section.viewInstance),await(null==(e=this._section.viewInstance.peek())?void 0:e.getLoadingDonePromise())}}class m{constructor(e,t){this._page=e,this._opener=t}viewSections(){return this._page.view.peek().viewSections.peek().peek()}activeSectionId(){return this._page.view.peek().activeSectionId.peek()}getViewId(){return this._page.view.peek().getRowId()}openPage(){return this._opener(this.getViewId())}}class S{constructor(e,t,i,n){this._gristDoc=e,this._openDocPageCB=i,this.multiPage=n,this.matchFound=!1,this._pageStepper=new w,this._sectionStepper=new w,this._rowStepper=new w,this._fieldStepper=new w,this._pagesSwitched=0,this._aborted=!1,this._searchRegexp=function(e){const t=e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&");return new RegExp(t,"i")}(t)}abort(){this._aborted=!0,this._clearCursorHighlight&&this._clearCursorHighlight()}getCurrentPosition(){return{pageIndex:this._pageStepper.index,sectionIndex:this._sectionStepper.index,rowIndex:this._rowStepper.index,fieldIndex:this._fieldStepper.index}}async init(){if("data"===this._gristDoc.activeViewId.get()){const e=this._gristDoc.docModel.visibleTables.peek().sort(((e,t)=>(0,_.nativeCompare)(e.tableNameDef.peek(),t.tableNameDef.peek()))).map((e=>e.rawViewSection.peek())).filter((e=>Boolean(e.id.peek())));this._pageStepper.array=e.map((e=>new x(e))),this._pageStepper.index=e.findIndex((e=>e.getRowId()===this._gristDoc.viewModel.activeSectionId.peek())),this._pageStepper.index<0&&(this._pageStepper.index=0,await this._pageStepper.value.openPage())}else{const e=this._gristDoc.docModel.visibleDocPages.peek();if(this._pageStepper.array=e.map((e=>new m(e,this._openDocPageCB))),this._pageStepper.index=e.findIndex((e=>e.viewRef.peek()===this._gristDoc.activeViewId.get())),this._pageStepper.index<0)return!1}const e=this._pageStepper.value.viewSections();if(this._sectionStepper.array=e,this._sectionStepper.index=e.findIndex((e=>e.getRowId()===this._pageStepper.value.activeSectionId())),this._sectionStepper.index<0)return!1;this._initNewSectionShown();const t=this._sectionStepper.value.viewInstance.peek().cursor.getCursorPos();return this._rowStepper.index=t.rowIndex,this._fieldStepper.index=t.fieldIndex,!0}async matchNext(e){let t=0,i=Date.now();for(this._pagesSwitched=0;!this._matches()||await this._loadSection(e)&&!this._matches();){if(this._aborted)return;++t%100==0&&Date.now()>=i+20&&(await(0,g.g)(5),i=Date.now());const n=this.nextField(e);if(n&&await n,this._isCurrentPosition(this.startPosition)&&!this._matches())return console.log("SearchBar: reached start position without finding anything"),void(this.matchFound=!1);if(this._pagesSwitched>this._pageStepper.array.length)return console.log("SearchBar: aborting search due to too many page switches"),void(this.matchFound=!1)}console.log("SearchBar: found a match at %s",JSON.stringify(this.getCurrentPosition())),this.matchFound=!0,await this._highlight()}nextField(e){return this._fieldStepper.next(e,(()=>this._nextRow(e)))}_nextRow(e){return this._rowStepper.next(e,(()=>this._nextSection(e)))}async _nextSection(e){await this._sectionStepper.next(e,(()=>this._nextPage(e))),await this._initNewSectionAny()}_initNewSectionCommon(){const e=this._sectionStepper.value,t=this._gristDoc.getTableModel(e.table.peek().tableId.peek());return this._sectionTableData=t.tableData,this._fieldStepper.array=e.viewFields().peek(),this._initFormatters(),t}_initNewSectionShown(){this._initNewSectionCommon();const e=this._sectionStepper.value.viewInstance.peek();this._rowStepper.array=e.sortedRows.getKoArray().peek()}async _initNewSectionAny(){const e=this._initNewSectionCommon(),t=this._sectionStepper.value.viewInstance.peek();t?this._rowStepper.array=t.sortedRows.getKoArray().peek():(await e.fetch(),this._rowStepper.array=this._sectionTableData.getRowIds())}async _nextPage(e){if(!this.multiPage.get())return;await this._pageStepper.next(e,(()=>{})),this._pagesSwitched++;const t=this._pageStepper.value;this._sectionStepper.array=t.viewSections()}_initFormatters(){this._fieldFormatters=this._fieldStepper.array.map((e=>[e,e.formatter.peek()]))}_matches(){if(this._pageStepper.index<0||this._sectionStepper.index<0||this._rowStepper.index<0||this._fieldStepper.index<0)return console.warn("match outside"),!1;const e=this._fieldStepper.value;let t=this._fieldFormatters[this._fieldStepper.index];t&&t[0]===e||(this._initFormatters(),t=this._fieldFormatters[this._fieldStepper.index]);const i=this._rowStepper.value,n=e.displayColModel.peek(),s=this._sectionTableData.getValue(i,n.colId.peek()),a=t[1].formatAny(s);return this._searchRegexp.test(a)}async _loadSection(e){const t=this._sectionStepper.value;if(!t.viewInstance.peek()){const i=this._pageStepper.value;if(this._aborted)return!1;await i.openPage(),console.log("SearchBar: loading view %s section %s",i.getViewId(),t.getRowId());const n=await(0,_.waitObs)(t.viewInstance);return await n.getLoadingDonePromise(),this._initNewSectionShown(),this._rowStepper.setStart(e),this._fieldStepper.setStart(e),console.log("SearchBar: loaded view %s section %s",i.getViewId(),t.getRowId()),!0}return!1}async _highlight(){if(this._aborted)return;const e=this._sectionStepper.value,t={sectionId:e.getRowId(),rowId:this._rowStepper.value,fieldIndex:this._fieldStepper.index};if(await this._gristDoc.recursiveMoveToCursorPos(t,!0).catch(l.reportError),this._aborted)return;await(0,g.g)(0);const i=await(0,_.waitObs)(e.viewInstance);if(await i.getLoadingDonePromise(),this._aborted)return;i.scrollToCursor(!0).catch(l.reportError);const n=i.viewPane.querySelector(".selected_cursor");if(n){n.classList.add("search-match"),this._clearCursorHighlight=()=>{n.classList.remove("search-match"),clearTimeout(e),this._clearCursorHighlight=void 0};const e=setTimeout(this._clearCursorHighlight,20)}}_isCurrentPosition(e){return this._pageStepper.index===e.pageIndex&&this._sectionStepper.index===e.sectionIndex&&this._rowStepper.index===e.rowIndex&&this._fieldStepper.index===e.fieldIndex}}class f extends p.Disposable{constructor(e){super(),this._gristDoc=e,this.value=p.Observable.create(this,""),this.isOpen=p.Observable.create(this,!1),this.isRunning=p.Observable.create(this,!1),this.noMatch=p.Observable.create(this,!0),this.isEmpty=p.Observable.create(this,!0),this.multiPage=p.Observable.create(this,!1),this._isRestartNeeded=!1,this._finder=null;const t=u((e=>this._findFirst(e)),100);this.autoDispose(this.value.addListener((e=>{this.isRunning.set(!0),t(e)}))),this.autoDispose(this.multiPage.addListener((e=>{e&&this.noMatch.set(!1)}))),this.allLabel=p.Computed.create(this,(e=>"data"===e(this._gristDoc.activeViewId)?"Search all tables":"Search all pages")),this.autoDispose(this._gristDoc.activeViewId.addListener((()=>{this.multiPage.get()||this.noMatch.set(!1),this._isRestartNeeded=!0}))),this.autoDispose(this._gristDoc.viewModel.activeSectionId.subscribe((e=>{"data"===this._gristDoc.activeViewId.get()&&0===e&&(this._isRestartNeeded=!0,this.noMatch.set(!1))})))}async findNext(){if(!this.isRunning.get()&&!this.noMatch.get())return this._isRestartNeeded?this._findFirst(this.value.get()):void await this._run((async e=>{await e.nextField(1),await e.matchNext(1)}))}async findPrev(){if(!this.isRunning.get()&&!this.noMatch.get())return this._isRestartNeeded?this._findFirst(this.value.get()):void await this._run((async e=>{await e.nextField(-1),await e.matchNext(-1)}))}async _findFirst(e){this._isRestartNeeded=!1,this.isEmpty.set(!e),await this._updateFinder(e),e&&this._finder?await this._run((async e=>{await e.matchNext(1)})):this.noMatch.set(!0)}async _updateFinder(e){this._finder&&this._finder.abort();const t=new S(this._gristDoc,e,this._openDocPage.bind(this),this.multiPage),i=await t.init();this._finder=i?t:null}async _run(e){const t=this._finder;if(!t)throw new Error("SearchModel: finder is not defined");try{this.isRunning.set(!0),t.startPosition=t.getCurrentPosition(),await e(t)}finally{this.isRunning.set(!1),this.noMatch.set(!t.matchFound)}}async _openDocPage(e){await this._gristDoc.openDocPage(e),this._isRestartNeeded=!1}}const v=i(88466),y=(0,s.makeT)("search"),b=(0,p.styled)("div",`\n  display: flex;\n  flex: initial;\n  align-items: center;\n  box-sizing: border-box;\n  border: 1px solid transparent;\n  padding: 0px 16px;\n  width: 50px;\n  height: 100%;\n  max-height: 50px;\n  transition: width 0.4s;\n  position: relative;\n  &-expand {\n    width: 100% !important;\n    border: 1px solid ${c.theme.searchBorder};\n  }\n  @media ${c.mediaSmall} {\n    & {\n      width: 32px;\n      padding: 0px;\n    }\n  }\n`),I=(0,p.styled)("div",`\n  display: flex;\n  flex-grow: 0;\n  align-items: center;\n  width: 0;\n  opacity: 0;\n  align-self: stretch;\n  transition: width 0.5s, opacity 0.25s 0.25s;\n  .${b.className}-expand > & {\n    width: auto;\n    flex-grow: 1;\n    opacity: 1;\n  }\n`),D=(0,p.styled)(p.input,`\n  background-color: ${c.theme.topHeaderBg};\n  color: ${c.theme.inputFg};\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  padding-left: 4px;\n  box-sizing: border-box;\n  align-self: stretch;\n  width: 0;\n  transition: width 0.5s;\n  .${b.className}-expand & {\n    width: 100%;\n  }\n  &::placeholder {\n    color: ${c.theme.inputPlaceholderFg};\n  }\n`),k=(0,p.styled)("div",`\n  font-size: 14px;\n  padding: 3px;\n  cursor: pointer;\n  margin: 2px 4px;\n  visibility: hidden;\n  width: 24px;\n  height: 24px;\n  background-color: ${c.theme.searchPrevNextButtonBg};\n  --icon-color: ${c.theme.searchPrevNextButtonFg};\n  border-radius: 3px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n\n  .${b.className}-expand & {\n    visibility: visible;\n  }\n`),P=(0,p.styled)(d.icon,`\n  cursor: pointer;\n  background-color: ${c.theme.controlFg};\n  margin-left: 4px;\n  flex-shrink: 0;\n`),N=(0,p.styled)("span",`\n  font-size: ${c.vars.smallFontSize};\n  color: ${c.theme.lightText};\n  white-space: nowrap;\n  margin-right: 12px;\n`),R=(0,p.styled)("div",`\n  background: ${c.theme.topHeaderBg};\n  position: absolute;\n  right: 0;\n  top: 48px;\n  z-index: 1;\n  padding: 2px 4px;\n  overflow: hidden;\n  white-space: nowrap;\n`),F=(0,p.styled)("span",`\n  color: ${c.theme.lightText};\n`);function C(e,t=p.noTestId){let i=!1;const s=()=>{g.focus(),g.select()},c=(0,n.createGroup)({find:s,findNext:()=>(e.findNext().catch(a.eK),!1),findPrev:()=>(e.findPrev().catch(a.eK),!1)},null,!0),l=v((t=>{e.isOpen.set(void 0===t?!e.isOpen.get():t)}),100),g=D(e.value,{onInput:!0},{type:"text",placeholder:y("Search in document")},p.dom.on("blur",(()=>i?setTimeout((()=>g.focus()),0):l(!1))),p.dom.onKeyDown({Enter:t=>t.shiftKey?e.findPrev():e.findNext(),Escape:()=>{i=!1,l(!1)},Tab:()=>l(!1)}),p.dom.on("focus",(()=>l(!0))),c.attach()),_=e.isOpen.addListener((e=>e||g.blur()));return b(t("wrapper"),b.cls("-expand",e.isOpen),p.dom.autoDispose(c),p.dom.autoDispose(_),p.dom.onDispose((()=>l.cancel())),(0,o.c)((0,o.H)("Search",t("icon"),p.dom.on("click",s),(0,r.hoverTooltip)("Search",{key:"topBarBtnTooltip"}))),I(t("input"),g,p.dom.domComputed((i=>{const s=i(e.noMatch);return i(e.isEmpty)?null:s?N(y("No results")):[k((0,d.icon)("Dropdown"),t("next"),p.dom.on("mousedown",(e=>e.preventDefault())),p.dom.on("click",(()=>e.findNext())),(0,r.hoverTooltip)([y("Find Next "),F(`(${["Enter",n.allCommands.findNext.humanKeys].join(", ")})`)],{key:"searchArrowBtnTooltip"})),k((0,d.icon)("DropdownUp"),t("prev"),p.dom.on("mousedown",(e=>e.preventDefault())),p.dom.on("click",(()=>e.findPrev())),(0,r.hoverTooltip)([y("Find Previous "),F(n.allCommands.findPrev.getKeysDesc())],{key:"searchArrowBtnTooltip"}))]})),P("CrossSmall",t("close"),p.dom.on("click",(()=>l(!1)))),R((0,h.rp)(e.multiPage,p.dom.text(e.allLabel)),p.dom.on("mouseenter",(()=>i=!0)),p.dom.on("mouseleave",(()=>i=!1)),t("option-all-pages"))))}}}]);
//# sourceMappingURL=420.bundle.js.map