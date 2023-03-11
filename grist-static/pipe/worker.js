//if (window.Worker) {
  
// We are node-y for now.
// const {x} = require('./meep.js');

// https://dev.to/stefnotch/enabling-coop-coep-without-touching-the-server-2d3n
// https://sleep-sw.glitch.me/


if (typeof addEventListener === 'function') {
  console.log("Added listener");
  addEventListener('message', e => {
    console.log('got message', e.data);
    if (e.data === 'hello') {
      postMessage('hiya!' + x);
    } else {
      postMessage('what!' + x);
    }
  });
}

let _AB;

function wait(t) {
  try {
    _AB = _AB || new Int32Array(new SharedArrayBuffer(4));
    Atomics.wait(_AB, 0, 0, Math.max(1, t|0));
    return;
  } catch (e) {
    var err = 'Failed to use Atomics.wait: '+e;
    console.error(err);
  }
}

function attend() {
  try {
    _AB = _AB || new Int32Array(new SharedArrayBuffer(4));
    Atomics.wait(_AB, 0, 0);
    return;
  } catch (e) {
    var err = 'Failed to use Atomics.wait: '+e;
    console.error(err);
  }
}

let myLoadPyodide;
if (typeof importScripts === 'function') {
  importScripts('pyodide/pyodide.js');
  console.log(Object.keys(globalThis));
  myLoadPyodide = loadPyodide;
} else {
  const pyo = require('pyodide/pyodide.js');
  myLoadPyodide = pyo.loadPyodide;
}
async function main(){
  let pyodide = await myLoadPyodide();
  pyodide.setStdin({
    stdin: () => {
      console.log("stdin...");
      //wait(5000);
      attend();
      throw new Error("stdin!!");
    },
  });

  console.log(pyodide.runPython(`
    import sys
    sys.version
  `));
  pyodide.runPython("print(1 + 2)");

  const lst = [
    "packages/astroid-2.14.2-py3-none-any.whl",
    "packages/asttokens-2.0.5-py2.py3-none-any.whl",
    "packages/backports.functools_lru_cache-1.6.4-py2.py3-none-any.whl",
    "packages/chardet-4.0.0-py2.py3-none-any.whl",
    "packages/enum34-1.1.10-py3-none-any.whl",
    "packages/et_xmlfile-1.0.1-py3-none-any.whl",
    "packages/executing-1.1.1-py2.py3-none-any.whl",
    "packages/friendly_traceback-0.7.48-py3-none-any.whl",
    "packages/iso8601-0.1.12-py2.py3-none-any.whl",
    "packages/jdcal-1.4.1-py2.py3-none-any.whl",
    "packages/lazy_object_proxy-1.6.0-cp311-cp311-emscripten_3_1_31_wasm32.whl",
    "packages/openpyxl-3.0.10-py2.py3-none-any.whl",
    "packages/phonenumberslite-8.12.57-py2.py3-none-any.whl",
    "packages/pure_eval-0.2.2-py3-none-any.whl",
    "packages/python_dateutil-2.8.2-py2.py3-none-any.whl",
    "packages/roman-3.3-py2.py3-none-any.whl",
    "packages/singledispatch-3.6.2-py2.py3-none-any.whl",
    "packages/six-1.16.0-py2.py3-none-any.whl",
    "packages/sortedcontainers-2.4.0-py2.py3-none-any.whl",
    "packages/stack_data-0.5.1-py3-none-any.whl",
    "packages/typing_extensions-4.4.0-py3-none-any.whl",
    "packages/unittest_xml_reporting-2.0.0-py2.py3-none-any.whl",
    "packages/wrapt-1.12.1-cp311-cp311-emscripten_3_1_31_wasm32.whl",

    "packages/grist-1.0-py3-none-any.whl"
  ];
  await pyodide.loadPackage(
    lst
  );
  console.log("loaded", {lst});
  pyodide.runPython("print(1 + 2)");
  pyodide.runPython(`
  import sys
  sys.path.append('/lib/python3.9/site-packages/grist/')
  sys.path.append('/lib/python3.10/site-packages/grist/')
  sys.path.append('/lib/python3.11/site-packages/grist/')
  #sys.path.append('/grist')
  print("Hello")
  import grist
  print("There")
  print(sys.path)
  import main
  print("You")
  import os
  os.environ['PIPE_MODE'] = 'pyodide'
  os.environ['IMPORTDIR'] = '/import'
  main.main()
`);
}

main();

//} else {
//  console.log("NOT A WEB WORKER");
//}
