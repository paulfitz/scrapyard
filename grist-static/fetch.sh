#!/bin/bash

set -ex

rm -rf jquery jqueryui bootstrap bootstrap-datepicker icons locales img node_modules static pipe

cp ~/cvs/grist-static/core/coi-serviceworker.min.js .

cp -r ~/cvs/grist-static/core/node_modules/jquery jquery
cp -r ~/cvs/grist-static/core/node_modules/components-jqueryui jqueryui
cp -r ~/cvs/grist-static/core/node_modules/bootstrap .
cp -r ~/cvs/grist-static/core/node_modules/bootstrap-datepicker .
cp ~/cvs/grist-static/core/node_modules/highlight.js/styles/default.css hljs.default.css

for f in bundle.css locales browser-check.js img icons; do
  cp -r ~/cvs/grist-static/core/static/$f $f
done

rm -rf *.bundle.js
cp ~/cvs/grist-static/core/static/*.bundle.js .

mkdir -p node_modules/sql.js
mkdir -p static/sql.js
cp -r ~/cvs/grist-static/node_modules/sql.js/dist node_modules/sql.js/dist
cp -r ~/cvs/grist-static/node_modules/sql.js/dist static/sql.js/dist

cp -r ~/cvs/grist-static/core/pipe pipe
