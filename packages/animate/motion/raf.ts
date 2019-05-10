import now from './performance-now';

const root = window;
const vendors = ['moz', 'webkit'];
const suffix = 'AnimationFrame';
let raf: any = root['request' + suffix];
let caf: any = root['cancel' + suffix] || root['cancelRequest' + suffix];

for (let i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf =
    root[vendors[i] + 'Cancel' + suffix] ||
    root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  let last = 0,
    id = 0,
    queue: any = [],
    frameDuration = 1000 / 60;

  raf = function(callback) {
    if (queue.length === 0) {
      let _now = now(),
        next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        let cp: any = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for (let i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function() {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };

  caf = function(handle) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

export default raf;

export const cancel = caf;
export const polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
