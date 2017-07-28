let prevDistance = -1;

function syntheticEvent(element) {
  element.addEventListener("touchmove", e => {
    if (e.touches.length === 2) {
      const distance = Math.sqrt(
        (e.touches[0].clientX - e.touches[1].clientX) *
          (e.touches[0].clientX - e.touches[1].clientX) +
          (e.touches[0].clientY - e.touches[1].clientY) *
            (e.touches[0].clientY - e.touches[1].clientY)
      );

      let eventName;

      if (distance > prevDistance) {
        eventName = "pinchin";
      } else if (distance < prevDistance) {
        eventName = "pinchout";
      }

      if (eventName) {
        const event = document.createEvent("Event");

        event.initEvent(eventName, true, true);
        e.target.dispatchEvent(event);
      }

      prevDistance = distance;
    }
  });
}

export default function pellizco() {
  const pinchEvents = ["pinchin", "pinchout"];
  const nativeAddEventListener = EventTarget.prototype.addEventListener;

  EventTarget.prototype.addEventListener = function(type, fn, capture) {
    this.nativeAddEventListener = nativeAddEventListener;

    if (pinchEvents.indexOf(type) !== -1) {
      syntheticEvent(this);
    }

    this.nativeAddEventListener(type, fn, capture);
  };
}
