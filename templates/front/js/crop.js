! function(e) {
  function t(o) {
    if (a[o]) return a[o].exports;
    var r = a[o] = {
      exports: {},
      id: o,
      loaded: !1
    };
    return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
  }
  var a = {};
  return t.m = e, t.c = a, t.p = "", t(0)
}([function(e, t, a) {
  "use strict";

  function o(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = a(1),
    i = o(r),
    s = a(2),
    n = o(s),
    c = a(3),
    p = o(c),
    l = a(4),
    d = o(l);
  window.vm = new i["default"]({
    el: "body",
    components: {
      ButtonBox: n["default"],
      UploadBox: p["default"],
      CanvasBox: d["default"]
    },
    events: {
      broadcast: function(e, t) {
        this.$broadcast(e, t)
      }
    }
  })
}, function(e, t) {
  e.exports = window.Vue
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = {
    data: function() {
      return {
        uploaded: !1,
        cropping: !1,
        cropped: !1,
        download: "undefined" != typeof document.createElement("a").download,
        url: "",
        name: ""
      }
    },
    template: "#button-box",
    methods: {
      click: function(e) {
        var t = e.target,
          a = t.dataset.action || t.parentNode.dataset.action;
        if (a) {
          switch (a) {
            case "restore":
              this.restore();
              break;
            case "remove":
              this.remove();
              break;
            case "clear":
            case "crop":
              this.cropping = !1
          }
          this.$dispatch("broadcast", a)
        }
      },
      restore: function() {
        this.cropped = !1, this.url = "", this.name = ""
      },
      remove: function() {
        this.uploaded = !1, this.cropping = !1, this.cropped && this.restore()
      }
    },
    events: {
      uploaded: function() {
        this.uploaded = !0
      },
      cropping: function() {
        this.cropping = !0
      },
      cleared: function() {
        this.cropping = !1
      },
      restored: function() {
        this.restore()
      },
      removed: function() {
        this.remove()
      },
      cropped: function(e) {
        this.cropped = !0, this.cropping = !1, this.download && (this.url = e.url, this.name = e.name)
      }
    }
  }
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = {
    data: function() {
      return {
        uploaded: !1
      }
    },
    template: "#upload-box",
    methods: {
      read: function(e) {
        var t = this,
          a = arguments.length <= 1 || void 0 === arguments[1] ? function() {} : arguments[1],
          o = null;
        e ? /^image\/\w+$/.test(e.type) ? (o = new FileReader, o.onload = function() {
          t.uploaded = !0, t.$dispatch("broadcast", "uploaded", {
            type: e.type,
            name: e.name,
            url: o.result
          }), a()
        }, o.readAsDataURL(e)) : (window.alert("Please choose an image file."), a()) : a()
      },
      change: function(e) {
        var t = e.target,
          a = t.files;
        this.read(a && a[0], function() {
          t.value = ""
        })
      },
      dragover: function(e) {
        e.preventDefault()
      },
      drop: function(e) {
        var t = e.dataTransfer.files;
        e.preventDefault(), this.read(t && t[0])
      }
    },
    events: {
      remove: function() {
        this.uploaded = !1
      },
      removed: function() {
        this.uploaded = !1
      }
    }
  }
}, function(e, t, a) {
  "use strict";

  function o(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = a(5),
    i = o(r);
  t["default"] = {
    data: function() {
      return {
        editable: !1,
        cropper: !1,
        cropping: !1,
        data: null,
        canvasData: null,
        cropBoxData: null,
        image: null,
        type: "",
        name: "",
        url: "",
        originalUrl: ""
      }
    },
    template: "#canvas-box",
    ready: function() {
      window.addEventListener("keydown", this.keydown, !1)
    },
    beforeDestory: function() {
      window.removeEventListener("keydown", this.keydown, !1)
    },
    methods: {
      load: function(e) {
        this.image || (this.image = e.target, this.start())
      },
      click: function(e) {
        var t = this.cropper,
          a = e.target,
          o = "";
        if (t) switch (o = a.dataset.action || a.parentNode.dataset.action) {
          case "move":
          case "crop":
            t.setDragMode(o);
            break;
          case "zoom-in":
            t.zoom(.1);
            break;
          case "zoom-out":
            t.zoom(-.1);
            break;
          case "rotate-left":
            t.rotate(-90);
            break;
          case "rotate-right":
            t.rotate(90);
            break;
          case "flip-horizontal":
            t.scaleX(-this.cropper.getData().scaleX || -1);
            break;
          case "flip-vertical":
            t.scaleY(-this.cropper.getData().scaleY || -1)
        }
      },
      keydown: function(e) {
        var t = this.cropper,
          a = e.key || e.keyCode || e.which || e.charCode;
        switch (a) {
          case 90:
            e.ctrlKey && (e.preventDefault(), this.restore(!0));
            break;
          case 46:
            this.remove(!0)
        }
        if (t) switch (a) {
          case 13:
            this.crop(!0);
            break;
          case 27:
            this.clear(!0);
            break;
          case 37:
            e.preventDefault(), t.move(-1, 0);
            break;
          case 38:
            e.preventDefault(), t.move(0, -1);
            break;
          case 39:
            e.preventDefault(), t.move(1, 0);
            break;
          case 40:
            e.preventDefault(), t.move(0, 1);
            break;
          case 67:
            t.setDragMode("crop");
            break;
          case 77:
            t.setDragMode("move");
            break;
          case 73:
            t.zoom(.1);
            break;
          case 79:
            t.zoom(-.1);
            break;
          case 76:
            t.rotate(-90);
            break;
          case 82:
            t.rotate(90);
            break;
          case 72:
            t.scaleX(-this.cropper.getData().scaleX || -1);
            break;
          case 86:
            t.scaleY(-this.cropper.getData().scaleY || -1)
        }
      },
      dblclick: function(e) {
        e.target.className.indexOf("cropper-face") >= 0 && (e.preventDefault(), e.stopPropagation(), this.crop(!0))
      },
      start: function() {
        var e = this;
        this.cropper || (this.cropper = new i["default"](this.image, {
          autoCrop: !1,
          dragMode: "move",
          background: !1,
          built: function() {
            e.data && (this.cropper.crop().setData(e.data).setCanvasData(e.canvasData).setCropBoxData(e.cropBoxData), e.data = null, e.canvasData = null, e.cropBoxData = null)
          },
          crop: function(t) {
            t.width > 0 && t.height > 0 && !e.cropping && (e.cropping = !0, e.$dispatch("broadcast", "cropping"))
          }
        }))
      },
      stop: function() {
        this.cropper && (this.cropper.destroy(), this.cropper = null, this.cropping = !1)
      },
      crop: function(e) {
        var t = this.cropper,
          a = this.type;
        this.cropping && (this.originalUrl = this.url, this.data = t.getData(), this.canvasData = t.getCanvasData(), this.cropBoxData = t.getCropBoxData(), this.url = t.getCroppedCanvas("image/png" === a ? null : {
          fillColor: "#fff"
        }).toDataURL(a), this.stop(), e && this.$dispatch("broadcast", "cropped", {
          url: this.url,
          name: this.name
        }))
      },
      clear: function(e) {
        this.cropping && (this.cropper.clear(), this.cropping = !1, e && this.$dispatch("broadcast", "cleared"))
      },
      restore: function(e) {
        this.cropper || (this.image = null, this.url = this.originalUrl, this.originalUrl = "", e && this.$dispatch("broadcast", "restored"))
      },
      remove: function(e) {
        this.cropping || (this.stop(), this.editable = !1, this.data = null, this.image = null, this.type = "", this.name = "", this.url = "", this.originalUrl = "", e && this.$dispatch("broadcast", "removed"))
      }
    },
    events: {
      uploaded: function(e) {
        var t = e.url,
          a = e.type,
          o = e.name;
        this.editable = !0, this.type = a, this.name = o, this.url = t
      },
      remove: function() {
        this.remove()
      },
      crop: function() {
        this.crop(!0)
      },
      clear: function() {
        this.clear()
      },
      restore: function() {
        this.restore()
      }
    }
  }
}, function(e, t) {
  e.exports = window.Cropper
}]);