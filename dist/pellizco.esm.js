var prevDistance = -1;

function syntheticEvent(element) {
  element.addEventListener("touchmove", function (e) {
    if (e.touches.length === 2) {
      var distance = Math.sqrt(
        (e.touches[0].clientX - e.touches[1].clientX) *
          (e.touches[0].clientX - e.touches[1].clientX) +
          (e.touches[0].clientY - e.touches[1].clientY) *
            (e.touches[0].clientY - e.touches[1].clientY)
      );

      var eventName;

      if (distance > prevDistance) {
        eventName = "pinchin";
      } else if (distance < prevDistance) {
        eventName = "pinchout";
      }

      if (eventName) {
        var event = document.createEvent("Event");

        event.initEvent(eventName, true, true);
        e.target.dispatchEvent(event);
      }

      prevDistance = distance;
    }
  });
}

function pellizco() {
  var pinchEvents = ["pinchin", "pinchout"];
  var nativeAddEventListener = EventTarget.prototype.addEventListener;

  EventTarget.prototype.addEventListener = function(type, fn, capture) {
    this.nativeAddEventListener = nativeAddEventListener;

    if (pinchEvents.indexOf(type) !== -1) {
      syntheticEvent(this);
    }

    this.nativeAddEventListener(type, fn, capture);
  };
}

export default pellizco;
