class InsideWorkerWithBlockingStream {
  async start() {
    this.buffer = null;
    return new Promise((resolve) => {
      addEventListener('message', e => {
        if (e.data.buffer) {
          this.buffer = e.data.buffer;
          this.key = new Int32Array(this.buffer, 0, 4);
          this.len = new Int32Array(this.buffer, 4, 4);
          this.tlen = new Int32Array(this.buffer, 8, 4);
          this.offset = new Int32Array(this.buffer, 12, 4);
          this.storage = new Uint8Array(this.buffer, 16);
        }
        if (this.buffer) {
          console.log('worker received buffer - acknowledging');
          postMessage({type: 'ping'});
          resolve();
        }
      });
    });
  }

  read() {
    let tresult = null;
    while (true) {
      const result = Atomics.wait(this.key, 0, 0);
      const ll = this.len[0];
      const offset = this.offset[0];
      const tlen = this.tlen[0];
      const done = offset + ll === tlen;
      tresult = tresult || new ArrayBuffer(tlen);
      const dsti = new Uint8Array(tresult, offset);
      const srci = this.storage.subarray(0, ll);
      dsti.set(srci);
      Atomics.store(this.key, 0, 0);
      Atomics.notify(this.key, 0, 1);
      postMessage({type: 'ping'});
      if (done) {
        return tresult;
      }
    }
  }

  write(data) {
    postMessage({type: 'data', data});
  }

  delay(t) {
    this.AB = this.AB || new Int32Array(new SharedArrayBuffer(4));
    Atomics.wait(this.AB, 0, 0, Math.max(1, t|0));
  }
}

async function main() {
  const worker = new InsideWorkerWithBlockingStream();
  await worker.start();
  while (true) {
    const info = worker.read();
    const txt = new TextDecoder().decode(info);
    worker.write('ya ya ' + txt);
  }
}

main().catch(e => console.error(e));
