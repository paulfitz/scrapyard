let buffer;
let key;
let len;
let storage;
addEventListener('message', e => {
  console.log('got something');
  if (e.data.buffer) {
    buffer = e.data.buffer;
    key = new Int32Array(buffer, 0, 4);
    len = new Int32Array(buffer, 4, 8);
    storage = new Uint8Array(buffer, 8);

    console.log('there was a buffer', (typeof buffer));
    e.data.buffer = '(censored)';
  }
  console.log('got message', e.data);
  if (buffer) {
    setTimeout(main(), 0);
  }
});

function read() {
  console.log("waiting to read...");
  const result = Atomics.wait(key, 0, 0);
  console.log({result});
  console.log("ready to read...", {kk: Atomics.load(key, 0)});
  const ll = Atomics.load(len, 0);
  console.log("read...", {ll});
  Atomics.store(key, 0, 0);
  Atomics.notify(key, 0, 0);
  postMessage('ping');
  console.log("notified that we read");
}

function write(data) {
  console.log("abot to post", data);
  postMessage(data);
  console.log("posted");
}

const AB = new Int32Array(new SharedArrayBuffer(4));
function delay(t) {
  Atomics.wait(AB, 0, 0, Math.max(1, t|0));
}

function main() {
  console.log("MAIN STARTED");
  while (true) {
    console.log("tell me something");
    console.log(read());
    console.log("Answering");
    write('ya ya');
    console.log("Sleeping...");
    delay(3000);
    console.log("DONE Sleeping...");
  }
}
