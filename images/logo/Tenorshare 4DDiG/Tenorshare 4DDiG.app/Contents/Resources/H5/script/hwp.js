var HWP = (function (exports) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var cfb = createCommonjsModule(function (module) {
    /* cfb.js (C) 2013-present SheetJS -- http://sheetjs.com */

    /* vim: set ts=2: */

    /*jshint eqnull:true */

    /*exported CFB */

    /*global module, require:false, process:false, Buffer:false, Uint8Array:false, Uint16Array:false */
    var Base64 = function make_b64() {
      var map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      return {
        encode: function (input) {
          var o = "";
          var c1 = 0,
              c2 = 0,
              c3 = 0,
              e1 = 0,
              e2 = 0,
              e3 = 0,
              e4 = 0;

          for (var i = 0; i < input.length;) {
            c1 = input.charCodeAt(i++);
            e1 = c1 >> 2;
            c2 = input.charCodeAt(i++);
            e2 = (c1 & 3) << 4 | c2 >> 4;
            c3 = input.charCodeAt(i++);
            e3 = (c2 & 15) << 2 | c3 >> 6;
            e4 = c3 & 63;

            if (isNaN(c2)) {
              e3 = e4 = 64;
            } else if (isNaN(c3)) {
              e4 = 64;
            }

            o += map.charAt(e1) + map.charAt(e2) + map.charAt(e3) + map.charAt(e4);
          }

          return o;
        },
        decode: function b64_decode(input) {
          var o = "";
          var c1 = 0,
              c2 = 0,
              c3 = 0,
              e1 = 0,
              e2 = 0,
              e3 = 0,
              e4 = 0;
          input = input.replace(/[^\w\+\/\=]/g, "");

          for (var i = 0; i < input.length;) {
            e1 = map.indexOf(input.charAt(i++));
            e2 = map.indexOf(input.charAt(i++));
            c1 = e1 << 2 | e2 >> 4;
            o += String.fromCharCode(c1);
            e3 = map.indexOf(input.charAt(i++));
            c2 = (e2 & 15) << 4 | e3 >> 2;

            if (e3 !== 64) {
              o += String.fromCharCode(c2);
            }

            e4 = map.indexOf(input.charAt(i++));
            c3 = (e3 & 3) << 6 | e4;

            if (e4 !== 64) {
              o += String.fromCharCode(c3);
            }
          }

          return o;
        }
      };
    }();

    var has_buf = typeof Buffer !== 'undefined' && typeof process !== 'undefined' && typeof process.versions !== 'undefined' && process.versions.node;

    var Buffer_from = function () {};

    if (typeof Buffer !== 'undefined') {
      var nbfs = !Buffer.from;
      if (!nbfs) try {
        Buffer.from("foo", "utf8");
      } catch (e) {
        nbfs = true;
      }
      Buffer_from = nbfs ? function (buf, enc) {
        return enc ? new Buffer(buf, enc) : new Buffer(buf);
      } : Buffer.from.bind(Buffer); // $FlowIgnore

      if (!Buffer.alloc) Buffer.alloc = function (n) {
        return new Buffer(n);
      }; // $FlowIgnore

      if (!Buffer.allocUnsafe) Buffer.allocUnsafe = function (n) {
        return new Buffer(n);
      };
    }

    function new_raw_buf(len) {
      /* jshint -W056 */
      return has_buf ? Buffer.alloc(len) : new Array(len);
      /* jshint +W056 */
    }

    function new_unsafe_buf(len) {
      /* jshint -W056 */
      return has_buf ? Buffer.allocUnsafe(len) : new Array(len);
      /* jshint +W056 */
    }

    var s2a = function s2a(s) {
      if (has_buf) return Buffer_from(s, "binary");
      return s.split("").map(function (x) {
        return x.charCodeAt(0) & 0xff;
      });
    };

    var chr0 = /\u0000/g,
        chr1 = /[\u0001-\u0006]/g;

    var __toBuffer = function (bufs) {
      var x = [];

      for (var i = 0; i < bufs[0].length; ++i) {
        x.push.apply(x, bufs[0][i]);
      }

      return x;
    };

    var ___toBuffer = __toBuffer;

    var __utf16le = function (b, s, e) {
      var ss = [];

      for (var i = s; i < e; i += 2) ss.push(String.fromCharCode(__readUInt16LE(b, i)));

      return ss.join("").replace(chr0, '');
    };

    var ___utf16le = __utf16le;

    var __hexlify = function (b, s, l) {
      var ss = [];

      for (var i = s; i < s + l; ++i) ss.push(("0" + b[i].toString(16)).slice(-2));

      return ss.join("");
    };

    var ___hexlify = __hexlify;

    var __bconcat = function (bufs) {
      if (Array.isArray(bufs[0])) return [].concat.apply([], bufs);
      var maxlen = 0,
          i = 0;

      for (i = 0; i < bufs.length; ++i) maxlen += bufs[i].length;

      var o = new Uint8Array(maxlen);

      for (i = 0, maxlen = 0; i < bufs.length; maxlen += bufs[i].length, ++i) o.set(bufs[i], maxlen);

      return o;
    };

    var bconcat = __bconcat;

    if (has_buf) {
      __utf16le = function (b, s, e) {
        if (!Buffer.isBuffer(b)) return ___utf16le(b, s, e);
        return b.toString('utf16le', s, e).replace(chr0, '')
        /*.replace(chr1,'!')*/
        ;
      };

      __hexlify = function (b, s, l) {
        return Buffer.isBuffer(b) ? b.toString('hex', s, s + l) : ___hexlify(b, s, l);
      };

      __toBuffer = function (bufs) {
        return bufs[0].length > 0 && Buffer.isBuffer(bufs[0][0]) ? Buffer.concat(bufs[0]) : ___toBuffer(bufs);
      };

      s2a = function (s) {
        return Buffer_from(s, "binary");
      };

      bconcat = function (bufs) {
        return Buffer.isBuffer(bufs[0]) ? Buffer.concat(bufs) : __bconcat(bufs);
      };
    }

    var __readUInt8 = function (b, idx) {
      return b[idx];
    };

    var __readUInt16LE = function (b, idx) {
      return b[idx + 1] * (1 << 8) + b[idx];
    };

    var __readInt16LE = function (b, idx) {
      var u = b[idx + 1] * (1 << 8) + b[idx];
      return u < 0x8000 ? u : (0xffff - u + 1) * -1;
    };

    var __readUInt32LE = function (b, idx) {
      return b[idx + 3] * (1 << 24) + (b[idx + 2] << 16) + (b[idx + 1] << 8) + b[idx];
    };

    var __readInt32LE = function (b, idx) {
      return (b[idx + 3] << 24) + (b[idx + 2] << 16) + (b[idx + 1] << 8) + b[idx];
    };

    function ReadShift(size, t) {
      var oI,
          oS,
          type = 0;

      switch (size) {
        case 1:
          oI = __readUInt8(this, this.l);
          break;

        case 2:
          oI = (t !== 'i' ? __readUInt16LE : __readInt16LE)(this, this.l);
          break;

        case 4:
          oI = __readInt32LE(this, this.l);
          break;

        case 16:
          type = 2;
          oS = __hexlify(this, this.l, size);
      }

      this.l += size;
      if (type === 0) return oI;
      return oS;
    }

    var __writeUInt32LE = function (b, val, idx) {
      b[idx] = val & 0xFF;
      b[idx + 1] = val >>> 8 & 0xFF;
      b[idx + 2] = val >>> 16 & 0xFF;
      b[idx + 3] = val >>> 24 & 0xFF;
    };

    var __writeInt32LE = function (b, val, idx) {
      b[idx] = val & 0xFF;
      b[idx + 1] = val >> 8 & 0xFF;
      b[idx + 2] = val >> 16 & 0xFF;
      b[idx + 3] = val >> 24 & 0xFF;
    };

    function WriteShift(t, val, f) {
      var size = 0,
          i = 0;

      switch (f) {
        case "hex":
          for (; i < t; ++i) {
            this[this.l++] = parseInt(val.slice(2 * i, 2 * i + 2), 16) || 0;
          }

          return this;

        case "utf16le":
          var end = this.l + t;

          for (i = 0; i < Math.min(val.length, t); ++i) {
            var cc = val.charCodeAt(i);
            this[this.l++] = cc & 0xff;
            this[this.l++] = cc >> 8;
          }

          while (this.l < end) this[this.l++] = 0;

          return this;
      }

      switch (t) {
        case 1:
          size = 1;
          this[this.l] = val & 0xFF;
          break;

        case 2:
          size = 2;
          this[this.l] = val & 0xFF;
          val >>>= 8;
          this[this.l + 1] = val & 0xFF;
          break;

        case 4:
          size = 4;

          __writeUInt32LE(this, val, this.l);

          break;

        case -4:
          size = 4;

          __writeInt32LE(this, val, this.l);

          break;
      }

      this.l += size;
      return this;
    }

    function CheckField(hexstr, fld) {
      var m = __hexlify(this, this.l, hexstr.length >> 1);

      if (m !== hexstr) throw new Error(fld + 'Expected ' + hexstr + ' saw ' + m);
      this.l += hexstr.length >> 1;
    }

    function prep_blob(blob, pos) {
      blob.l = pos;
      blob.read_shift = ReadShift;
      blob.chk = CheckField;
      blob.write_shift = WriteShift;
    }

    function new_buf(sz) {
      var o = new_raw_buf(sz);
      prep_blob(o, 0);
      return o;
    }
    /* crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */

    /* vim: set ts=2: */

    /*exported CRC32 */


    var CRC32;

    (function (factory) {
      /*jshint ignore:start */

      /*eslint-disable */
      factory(CRC32 = {});
      /*eslint-enable */

      /*jshint ignore:end */
    })(function (CRC32) {
      CRC32.version = '1.2.0';
      /* see perf/crc32table.js */

      /*global Int32Array */

      function signed_crc_table() {
        var c = 0,
            table = new Array(256);

        for (var n = 0; n != 256; ++n) {
          c = n;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          table[n] = c;
        }

        return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
      }

      var T = signed_crc_table();

      function crc32_bstr(bstr, seed) {
        var C = seed ^ -1,
            L = bstr.length - 1;

        for (var i = 0; i < L;) {
          C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i++)) & 0xFF];
          C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i++)) & 0xFF];
        }

        if (i === L) C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i)) & 0xFF];
        return C ^ -1;
      }

      function crc32_buf(buf, seed) {
        if (buf.length > 10000) return crc32_buf_8(buf, seed);
        var C = seed ^ -1,
            L = buf.length - 3;

        for (var i = 0; i < L;) {
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
        }

        while (i < L + 3) C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];

        return C ^ -1;
      }

      function crc32_buf_8(buf, seed) {
        var C = seed ^ -1,
            L = buf.length - 7;

        for (var i = 0; i < L;) {
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
        }

        while (i < L + 7) C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];

        return C ^ -1;
      }

      function crc32_str(str, seed) {
        var C = seed ^ -1;

        for (var i = 0, L = str.length, c, d; i < L;) {
          c = str.charCodeAt(i++);

          if (c < 0x80) {
            C = C >>> 8 ^ T[(C ^ c) & 0xFF];
          } else if (c < 0x800) {
            C = C >>> 8 ^ T[(C ^ (192 | c >> 6 & 31)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 0xFF];
          } else if (c >= 0xD800 && c < 0xE000) {
            c = (c & 1023) + 64;
            d = str.charCodeAt(i++) & 1023;
            C = C >>> 8 ^ T[(C ^ (240 | c >> 8 & 7)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | c >> 2 & 63)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | d & 63)) & 0xFF];
          } else {
            C = C >>> 8 ^ T[(C ^ (224 | c >> 12 & 15)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | c >> 6 & 63)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 0xFF];
          }
        }

        return C ^ -1;
      }

      CRC32.table = T;
      CRC32.bstr = crc32_bstr;
      CRC32.buf = crc32_buf;
      CRC32.str = crc32_str;
    });
    /* [MS-CFB] v20171201 */


    var CFB = function _CFB() {
      var exports = {};
      exports.version = '1.2.0';
      /* [MS-CFB] 2.6.4 */

      function namecmp(l, r) {
        var L = l.split("/"),
            R = r.split("/");

        for (var i = 0, c = 0, Z = Math.min(L.length, R.length); i < Z; ++i) {
          if (c = L[i].length - R[i].length) return c;
          if (L[i] != R[i]) return L[i] < R[i] ? -1 : 1;
        }

        return L.length - R.length;
      }

      function dirname(p) {
        if (p.charAt(p.length - 1) == "/") return p.slice(0, -1).indexOf("/") === -1 ? p : dirname(p.slice(0, -1));
        var c = p.lastIndexOf("/");
        return c === -1 ? p : p.slice(0, c + 1);
      }

      function filename(p) {
        if (p.charAt(p.length - 1) == "/") return filename(p.slice(0, -1));
        var c = p.lastIndexOf("/");
        return c === -1 ? p : p.slice(c + 1);
      }
      /* -------------------------------------------------------------------------- */

      /* DOS Date format:
         high|YYYYYYYm.mmmddddd.HHHHHMMM.MMMSSSSS|low
         add 1980 to stored year
         stored second should be doubled
      */

      /* write JS date to buf as a DOS date */


      function write_dos_date(buf, date) {
        if (typeof date === "string") date = new Date(date);
        var hms = date.getHours();
        hms = hms << 6 | date.getMinutes();
        hms = hms << 5 | date.getSeconds() >>> 1;
        buf.write_shift(2, hms);
        var ymd = date.getFullYear() - 1980;
        ymd = ymd << 4 | date.getMonth() + 1;
        ymd = ymd << 5 | date.getDate();
        buf.write_shift(2, ymd);
      }
      /* read four bytes from buf and interpret as a DOS date */


      function parse_dos_date(buf) {
        var hms = buf.read_shift(2) & 0xFFFF;
        var ymd = buf.read_shift(2) & 0xFFFF;
        var val = new Date();
        var d = ymd & 0x1F;
        ymd >>>= 5;
        var m = ymd & 0x0F;
        ymd >>>= 4;
        val.setMilliseconds(0);
        val.setFullYear(ymd + 1980);
        val.setMonth(m - 1);
        val.setDate(d);
        var S = hms & 0x1F;
        hms >>>= 5;
        var M = hms & 0x3F;
        hms >>>= 6;
        val.setHours(hms);
        val.setMinutes(M);
        val.setSeconds(S << 1);
        return val;
      }

      function parse_extra_field(blob) {
        prep_blob(blob, 0);
        var o = {};
        var flags = 0;

        while (blob.l <= blob.length - 4) {
          var type = blob.read_shift(2);
          var sz = blob.read_shift(2),
              tgt = blob.l + sz;
          var p = {};

          switch (type) {
            /* UNIX-style Timestamps */
            case 0x5455:
              {
                flags = blob.read_shift(1);
                if (flags & 1) p.mtime = blob.read_shift(4);
                /* for some reason, CD flag corresponds to LFH */

                if (sz > 5) {
                  if (flags & 2) p.atime = blob.read_shift(4);
                  if (flags & 4) p.ctime = blob.read_shift(4);
                }

                if (p.mtime) p.mt = new Date(p.mtime * 1000);
              }
              break;
          }

          blob.l = tgt;
          o[type] = p;
        }

        return o;
      }

      function parse(file, options) {
        if (file[0] == 0x50 && file[1] == 0x4b) return parse_zip(file, options);
        if ((file[0] | 0x20) == 0x6d && (file[1] | 0x20) == 0x69) return parse_mad(file, options);
        if (file.length < 512) throw new Error("CFB file size " + file.length + " < 512");
        var mver = 3;
        var ssz = 512;
        var nmfs = 0; // number of mini FAT sectors

        var difat_sec_cnt = 0;
        var dir_start = 0;
        var minifat_start = 0;
        var difat_start = 0;
        var fat_addrs = []; // locations of FAT sectors

        /* [MS-CFB] 2.2 Compound File Header */

        var blob = file.slice(0, 512);
        prep_blob(blob, 0);
        /* major version */

        var mv = check_get_mver(blob);
        mver = mv[0];

        switch (mver) {
          case 3:
            ssz = 512;
            break;

          case 4:
            ssz = 4096;
            break;

          case 0:
            if (mv[1] == 0) return parse_zip(file, options);

          /* falls through */

          default:
            throw new Error("Major Version: Expected 3 or 4 saw " + mver);
        }
        /* reprocess header */


        if (ssz !== 512) {
          blob = file.slice(0, ssz);
          prep_blob(blob, 28
          /* blob.l */
          );
        }
        /* Save header for final object */


        var header = file.slice(0, ssz);
        check_shifts(blob, mver); // Number of Directory Sectors

        var dir_cnt = blob.read_shift(4, 'i');
        if (mver === 3 && dir_cnt !== 0) throw new Error('# Directory Sectors: Expected 0 saw ' + dir_cnt); // Number of FAT Sectors

        blob.l += 4; // First Directory Sector Location

        dir_start = blob.read_shift(4, 'i'); // Transaction Signature

        blob.l += 4; // Mini Stream Cutoff Size

        blob.chk('00100000', 'Mini Stream Cutoff Size: '); // First Mini FAT Sector Location

        minifat_start = blob.read_shift(4, 'i'); // Number of Mini FAT Sectors

        nmfs = blob.read_shift(4, 'i'); // First DIFAT sector location

        difat_start = blob.read_shift(4, 'i'); // Number of DIFAT Sectors

        difat_sec_cnt = blob.read_shift(4, 'i'); // Grab FAT Sector Locations

        for (var q = -1, j = 0; j < 109; ++j) {
          /* 109 = (512 - blob.l)>>>2; */
          q = blob.read_shift(4, 'i');
          if (q < 0) break;
          fat_addrs[j] = q;
        }
        /** Break the file up into sectors */


        var sectors = sectorify(file, ssz);
        sleuth_fat(difat_start, difat_sec_cnt, sectors, ssz, fat_addrs);
        /** Chains */

        var sector_list = make_sector_list(sectors, dir_start, fat_addrs, ssz);
        sector_list[dir_start].name = "!Directory";
        if (nmfs > 0 && minifat_start !== ENDOFCHAIN) sector_list[minifat_start].name = "!MiniFAT";
        sector_list[fat_addrs[0]].name = "!FAT";
        sector_list.fat_addrs = fat_addrs;
        sector_list.ssz = ssz;
        /* [MS-CFB] 2.6.1 Compound File Directory Entry */

        var files = {},
            Paths = [],
            FileIndex = [],
            FullPaths = [];
        read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, minifat_start);
        build_full_paths(FileIndex, FullPaths, Paths);
        Paths.shift();
        var o = {
          FileIndex: FileIndex,
          FullPaths: FullPaths
        }; // $FlowIgnore

        if (options && options.raw) o.raw = {
          header: header,
          sectors: sectors
        };
        return o;
      } // parse

      /* [MS-CFB] 2.2 Compound File Header -- read up to major version */


      function check_get_mver(blob) {
        if (blob[blob.l] == 0x50 && blob[blob.l + 1] == 0x4b) return [0, 0]; // header signature 8

        blob.chk(HEADER_SIGNATURE, 'Header Signature: '); // clsid 16
        //blob.chk(HEADER_CLSID, 'CLSID: ');

        blob.l += 16; // minor version 2

        var mver = blob.read_shift(2, 'u');
        return [blob.read_shift(2, 'u'), mver];
      }

      function check_shifts(blob, mver) {
        var shift = 0x09; // Byte Order
        //blob.chk('feff', 'Byte Order: '); // note: some writers put 0xffff

        blob.l += 2; // Sector Shift

        switch (shift = blob.read_shift(2)) {
          case 0x09:
            if (mver != 3) throw new Error('Sector Shift: Expected 9 saw ' + shift);
            break;

          case 0x0c:
            if (mver != 4) throw new Error('Sector Shift: Expected 12 saw ' + shift);
            break;

          default:
            throw new Error('Sector Shift: Expected 9 or 12 saw ' + shift);
        } // Mini Sector Shift


        blob.chk('0600', 'Mini Sector Shift: '); // Reserved

        blob.chk('000000000000', 'Reserved: ');
      }
      /** Break the file up into sectors */


      function sectorify(file, ssz) {
        var nsectors = Math.ceil(file.length / ssz) - 1;
        var sectors = [];

        for (var i = 1; i < nsectors; ++i) sectors[i - 1] = file.slice(i * ssz, (i + 1) * ssz);

        sectors[nsectors - 1] = file.slice(nsectors * ssz);
        return sectors;
      }
      /* [MS-CFB] 2.6.4 Red-Black Tree */


      function build_full_paths(FI, FP, Paths) {
        var i = 0,
            L = 0,
            R = 0,
            C = 0,
            j = 0,
            pl = Paths.length;
        var dad = [],
            q = [];

        for (; i < pl; ++i) {
          dad[i] = q[i] = i;
          FP[i] = Paths[i];
        }

        for (; j < q.length; ++j) {
          i = q[j];
          L = FI[i].L;
          R = FI[i].R;
          C = FI[i].C;

          if (dad[i] === i) {
            if (L !== -1
            /*NOSTREAM*/
            && dad[L] !== L) dad[i] = dad[L];
            if (R !== -1 && dad[R] !== R) dad[i] = dad[R];
          }

          if (C !== -1
          /*NOSTREAM*/
          ) dad[C] = i;

          if (L !== -1 && i != dad[i]) {
            dad[L] = dad[i];
            if (q.lastIndexOf(L) < j) q.push(L);
          }

          if (R !== -1 && i != dad[i]) {
            dad[R] = dad[i];
            if (q.lastIndexOf(R) < j) q.push(R);
          }
        }

        for (i = 1; i < pl; ++i) if (dad[i] === i) {
          if (R !== -1
          /*NOSTREAM*/
          && dad[R] !== R) dad[i] = dad[R];else if (L !== -1 && dad[L] !== L) dad[i] = dad[L];
        }

        for (i = 1; i < pl; ++i) {
          if (FI[i].type === 0
          /* unknown */
          ) continue;
          j = i;
          if (j != dad[j]) do {
            j = dad[j];
            FP[i] = FP[j] + "/" + FP[i];
          } while (j !== 0 && -1 !== dad[j] && j != dad[j]);
          dad[i] = -1;
        }

        FP[0] += "/";

        for (i = 1; i < pl; ++i) {
          if (FI[i].type !== 2
          /* stream */
          ) FP[i] += "/";
        }
      }

      function get_mfat_entry(entry, payload, mini) {
        var start = entry.start,
            size = entry.size; //return (payload.slice(start*MSSZ, start*MSSZ + size));

        var o = [];
        var idx = start;

        while (mini && size > 0 && idx >= 0) {
          o.push(payload.slice(idx * MSSZ, idx * MSSZ + MSSZ));
          size -= MSSZ;
          idx = __readInt32LE(mini, idx * 4);
        }

        if (o.length === 0) return new_buf(0);
        return bconcat(o).slice(0, entry.size);
      }
      /** Chase down the rest of the DIFAT chain to build a comprehensive list
          DIFAT chains by storing the next sector number as the last 32 bits */


      function sleuth_fat(idx, cnt, sectors, ssz, fat_addrs) {
        var q = ENDOFCHAIN;

        if (idx === ENDOFCHAIN) {
          if (cnt !== 0) throw new Error("DIFAT chain shorter than expected");
        } else if (idx !== -1
        /*FREESECT*/
        ) {
            var sector = sectors[idx],
                m = (ssz >>> 2) - 1;
            if (!sector) return;

            for (var i = 0; i < m; ++i) {
              if ((q = __readInt32LE(sector, i * 4)) === ENDOFCHAIN) break;
              fat_addrs.push(q);
            }

            sleuth_fat(__readInt32LE(sector, ssz - 4), cnt - 1, sectors, ssz, fat_addrs);
          }
      }
      /** Follow the linked list of sectors for a given starting point */


      function get_sector_list(sectors, start, fat_addrs, ssz, chkd) {
        var buf = [],
            buf_chain = [];
        if (!chkd) chkd = [];
        var modulus = ssz - 1,
            j = 0,
            jj = 0;

        for (j = start; j >= 0;) {
          chkd[j] = true;
          buf[buf.length] = j;
          buf_chain.push(sectors[j]);
          var addr = fat_addrs[Math.floor(j * 4 / ssz)];
          jj = j * 4 & modulus;
          if (ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j + " 4 " + ssz);
          if (!sectors[addr]) break;
          j = __readInt32LE(sectors[addr], jj);
        }

        return {
          nodes: buf,
          data: __toBuffer([buf_chain])
        };
      }
      /** Chase down the sector linked lists */


      function make_sector_list(sectors, dir_start, fat_addrs, ssz) {
        var sl = sectors.length,
            sector_list = [];
        var chkd = [],
            buf = [],
            buf_chain = [];
        var modulus = ssz - 1,
            i = 0,
            j = 0,
            k = 0,
            jj = 0;

        for (i = 0; i < sl; ++i) {
          buf = [];
          k = i + dir_start;
          if (k >= sl) k -= sl;
          if (chkd[k]) continue;
          buf_chain = [];
          var seen = [];

          for (j = k; j >= 0;) {
            seen[j] = true;
            chkd[j] = true;
            buf[buf.length] = j;
            buf_chain.push(sectors[j]);
            var addr = fat_addrs[Math.floor(j * 4 / ssz)];
            jj = j * 4 & modulus;
            if (ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j + " 4 " + ssz);
            if (!sectors[addr]) break;
            j = __readInt32LE(sectors[addr], jj);
            if (seen[j]) break;
          }

          sector_list[k] = {
            nodes: buf,
            data: __toBuffer([buf_chain])
          };
        }

        return sector_list;
      }
      /* [MS-CFB] 2.6.1 Compound File Directory Entry */


      function read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, mini) {
        var minifat_store = 0,
            pl = Paths.length ? 2 : 0;
        var sector = sector_list[dir_start].data;
        var i = 0,
            namelen = 0,
            name;

        for (; i < sector.length; i += 128) {
          var blob = sector.slice(i, i + 128);
          prep_blob(blob, 64);
          namelen = blob.read_shift(2);
          name = __utf16le(blob, 0, namelen - pl);
          Paths.push(name);
          var o = {
            name: name,
            type: blob.read_shift(1),
            color: blob.read_shift(1),
            L: blob.read_shift(4, 'i'),
            R: blob.read_shift(4, 'i'),
            C: blob.read_shift(4, 'i'),
            clsid: blob.read_shift(16),
            state: blob.read_shift(4, 'i'),
            start: 0,
            size: 0
          };
          var ctime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
          if (ctime !== 0) o.ct = read_date(blob, blob.l - 8);
          var mtime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
          if (mtime !== 0) o.mt = read_date(blob, blob.l - 8);
          o.start = blob.read_shift(4, 'i');
          o.size = blob.read_shift(4, 'i');

          if (o.size < 0 && o.start < 0) {
            o.size = o.type = 0;
            o.start = ENDOFCHAIN;
            o.name = "";
          }

          if (o.type === 5) {
            /* root */
            minifat_store = o.start;
            if (nmfs > 0 && minifat_store !== ENDOFCHAIN) sector_list[minifat_store].name = "!StreamData";
            /*minifat_size = o.size;*/
          } else if (o.size >= 4096
          /* MSCSZ */
          ) {
              o.storage = 'fat';
              if (sector_list[o.start] === undefined) sector_list[o.start] = get_sector_list(sectors, o.start, sector_list.fat_addrs, sector_list.ssz);
              sector_list[o.start].name = o.name;
              o.content = sector_list[o.start].data.slice(0, o.size);
            } else {
            o.storage = 'minifat';
            if (o.size < 0) o.size = 0;else if (minifat_store !== ENDOFCHAIN && o.start !== ENDOFCHAIN && sector_list[minifat_store]) {
              o.content = get_mfat_entry(o, sector_list[minifat_store].data, (sector_list[mini] || {}).data);
            }
          }

          if (o.content) prep_blob(o.content, 0);
          files[name] = o;
          FileIndex.push(o);
        }
      }

      function read_date(blob, offset) {
        return new Date((__readUInt32LE(blob, offset + 4) / 1e7 * Math.pow(2, 32) + __readUInt32LE(blob, offset) / 1e7 - 11644473600) * 1000);
      }

      function read_file(filename, options) {
        return parse(void 0, options);
      }

      function read(blob, options) {
        switch (options && options.type || "base64") {
          case "file":
            return read_file(blob, options);

          case "base64":
            return parse(s2a(Base64.decode(blob)), options);

          case "binary":
            return parse(s2a(blob), options);
        }

        return parse(blob, options);
      }

      function init_cfb(cfb, opts) {
        var o = opts || {},
            root = o.root || "Root Entry";
        if (!cfb.FullPaths) cfb.FullPaths = [];
        if (!cfb.FileIndex) cfb.FileIndex = [];
        if (cfb.FullPaths.length !== cfb.FileIndex.length) throw new Error("inconsistent CFB structure");

        if (cfb.FullPaths.length === 0) {
          cfb.FullPaths[0] = root + "/";
          cfb.FileIndex[0] = {
            name: root,
            type: 5
          };
        }

        if (o.CLSID) cfb.FileIndex[0].clsid = o.CLSID;
        seed_cfb(cfb);
      }

      function seed_cfb(cfb) {
        var nm = "\u0001Sh33tJ5";
        if (CFB.find(cfb, "/" + nm)) return;
        var p = new_buf(4);
        p[0] = 55;
        p[1] = p[3] = 50;
        p[2] = 54;
        cfb.FileIndex.push({
          name: nm,
          type: 2,
          content: p,
          size: 4,
          L: 69,
          R: 69,
          C: 69
        });
        cfb.FullPaths.push(cfb.FullPaths[0] + nm);
        rebuild_cfb(cfb);
      }

      function rebuild_cfb(cfb, f) {
        init_cfb(cfb);
        var gc = false,
            s = false;

        for (var i = cfb.FullPaths.length - 1; i >= 0; --i) {
          var _file = cfb.FileIndex[i];

          switch (_file.type) {
            case 0:
              if (s) gc = true;else {
                cfb.FileIndex.pop();
                cfb.FullPaths.pop();
              }
              break;

            case 1:
            case 2:
            case 5:
              s = true;
              if (isNaN(_file.R * _file.L * _file.C)) gc = true;
              if (_file.R > -1 && _file.L > -1 && _file.R == _file.L) gc = true;
              break;

            default:
              gc = true;
              break;
          }
        }

        if (!gc && !f) return;
        var now = new Date(1987, 1, 19),
            j = 0;
        var data = [];

        for (i = 0; i < cfb.FullPaths.length; ++i) {
          if (cfb.FileIndex[i].type === 0) continue;
          data.push([cfb.FullPaths[i], cfb.FileIndex[i]]);
        }

        for (i = 0; i < data.length; ++i) {
          var dad = dirname(data[i][0]);
          s = false;

          for (j = 0; j < data.length; ++j) if (data[j][0] === dad) s = true;

          if (!s) data.push([dad, {
            name: filename(dad).replace("/", ""),
            type: 1,
            clsid: HEADER_CLSID,
            ct: now,
            mt: now,
            content: null
          }]);
        }

        data.sort(function (x, y) {
          return namecmp(x[0], y[0]);
        });
        cfb.FullPaths = [];
        cfb.FileIndex = [];

        for (i = 0; i < data.length; ++i) {
          cfb.FullPaths[i] = data[i][0];
          cfb.FileIndex[i] = data[i][1];
        }

        for (i = 0; i < data.length; ++i) {
          var elt = cfb.FileIndex[i];
          var nm = cfb.FullPaths[i];
          elt.name = filename(nm).replace("/", "");
          elt.L = elt.R = elt.C = -(elt.color = 1);
          elt.size = elt.content ? elt.content.length : 0;
          elt.start = 0;
          elt.clsid = elt.clsid || HEADER_CLSID;

          if (i === 0) {
            elt.C = data.length > 1 ? 1 : -1;
            elt.size = 0;
            elt.type = 5;
          } else if (nm.slice(-1) == "/") {
            for (j = i + 1; j < data.length; ++j) if (dirname(cfb.FullPaths[j]) == nm) break;

            elt.C = j >= data.length ? -1 : j;

            for (j = i + 1; j < data.length; ++j) if (dirname(cfb.FullPaths[j]) == dirname(nm)) break;

            elt.R = j >= data.length ? -1 : j;
            elt.type = 1;
          } else {
            if (dirname(cfb.FullPaths[i + 1] || "") == dirname(nm)) elt.R = i + 1;
            elt.type = 2;
          }
        }
      }

      function _write(cfb, options) {
        var _opts = options || {};
        /* MAD is order-sensitive, skip rebuild and sort */


        if (_opts.fileType == 'mad') return write_mad(cfb, _opts);
        rebuild_cfb(cfb);

        switch (_opts.fileType) {
          case 'zip':
            return write_zip(cfb, _opts);
          //case 'mad': return write_mad(cfb, _opts);
        }

        var L = function (cfb) {
          var mini_size = 0,
              fat_size = 0;

          for (var i = 0; i < cfb.FileIndex.length; ++i) {
            var file = cfb.FileIndex[i];
            if (!file.content) continue;
            var flen = file.content.length;

            if (flen > 0) {
              if (flen < 0x1000) mini_size += flen + 0x3F >> 6;else fat_size += flen + 0x01FF >> 9;
            }
          }

          var dir_cnt = cfb.FullPaths.length + 3 >> 2;
          var mini_cnt = mini_size + 7 >> 3;
          var mfat_cnt = mini_size + 0x7F >> 7;
          var fat_base = mini_cnt + fat_size + dir_cnt + mfat_cnt;
          var fat_cnt = fat_base + 0x7F >> 7;
          var difat_cnt = fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 0x7F);

          while (fat_base + fat_cnt + difat_cnt + 0x7F >> 7 > fat_cnt) difat_cnt = ++fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 0x7F);

          var L = [1, difat_cnt, fat_cnt, mfat_cnt, dir_cnt, fat_size, mini_size, 0];
          cfb.FileIndex[0].size = mini_size << 6;
          L[7] = (cfb.FileIndex[0].start = L[0] + L[1] + L[2] + L[3] + L[4] + L[5]) + (L[6] + 7 >> 3);
          return L;
        }(cfb);

        var o = new_buf(L[7] << 9);
        var i = 0,
            T = 0;
        {
          for (i = 0; i < 8; ++i) o.write_shift(1, HEADER_SIG[i]);

          for (i = 0; i < 8; ++i) o.write_shift(2, 0);

          o.write_shift(2, 0x003E);
          o.write_shift(2, 0x0003);
          o.write_shift(2, 0xFFFE);
          o.write_shift(2, 0x0009);
          o.write_shift(2, 0x0006);

          for (i = 0; i < 3; ++i) o.write_shift(2, 0);

          o.write_shift(4, 0);
          o.write_shift(4, L[2]);
          o.write_shift(4, L[0] + L[1] + L[2] + L[3] - 1);
          o.write_shift(4, 0);
          o.write_shift(4, 1 << 12);
          o.write_shift(4, L[3] ? L[0] + L[1] + L[2] - 1 : ENDOFCHAIN);
          o.write_shift(4, L[3]);
          o.write_shift(-4, L[1] ? L[0] - 1 : ENDOFCHAIN);
          o.write_shift(4, L[1]);

          for (i = 0; i < 109; ++i) o.write_shift(-4, i < L[2] ? L[1] + i : -1);
        }

        if (L[1]) {
          for (T = 0; T < L[1]; ++T) {
            for (; i < 236 + T * 127; ++i) o.write_shift(-4, i < L[2] ? L[1] + i : -1);

            o.write_shift(-4, T === L[1] - 1 ? ENDOFCHAIN : T + 1);
          }
        }

        var chainit = function (w) {
          for (T += w; i < T - 1; ++i) o.write_shift(-4, i + 1);

          if (w) {
            ++i;
            o.write_shift(-4, ENDOFCHAIN);
          }
        };

        T = i = 0;

        for (T += L[1]; i < T; ++i) o.write_shift(-4, consts.DIFSECT);

        for (T += L[2]; i < T; ++i) o.write_shift(-4, consts.FATSECT);

        chainit(L[3]);
        chainit(L[4]);
        var j = 0,
            flen = 0;
        var file = cfb.FileIndex[0];

        for (; j < cfb.FileIndex.length; ++j) {
          file = cfb.FileIndex[j];
          if (!file.content) continue;
          flen = file.content.length;
          if (flen < 0x1000) continue;
          file.start = T;
          chainit(flen + 0x01FF >> 9);
        }

        chainit(L[6] + 7 >> 3);

        while (o.l & 0x1FF) o.write_shift(-4, consts.ENDOFCHAIN);

        T = i = 0;

        for (j = 0; j < cfb.FileIndex.length; ++j) {
          file = cfb.FileIndex[j];
          if (!file.content) continue;
          flen = file.content.length;
          if (!flen || flen >= 0x1000) continue;
          file.start = T;
          chainit(flen + 0x3F >> 6);
        }

        while (o.l & 0x1FF) o.write_shift(-4, consts.ENDOFCHAIN);

        for (i = 0; i < L[4] << 2; ++i) {
          var nm = cfb.FullPaths[i];

          if (!nm || nm.length === 0) {
            for (j = 0; j < 17; ++j) o.write_shift(4, 0);

            for (j = 0; j < 3; ++j) o.write_shift(4, -1);

            for (j = 0; j < 12; ++j) o.write_shift(4, 0);

            continue;
          }

          file = cfb.FileIndex[i];
          if (i === 0) file.start = file.size ? file.start - 1 : ENDOFCHAIN;

          var _nm = i === 0 && _opts.root || file.name;

          flen = 2 * (_nm.length + 1);
          o.write_shift(64, _nm, "utf16le");
          o.write_shift(2, flen);
          o.write_shift(1, file.type);
          o.write_shift(1, file.color);
          o.write_shift(-4, file.L);
          o.write_shift(-4, file.R);
          o.write_shift(-4, file.C);
          if (!file.clsid) for (j = 0; j < 4; ++j) o.write_shift(4, 0);else o.write_shift(16, file.clsid, "hex");
          o.write_shift(4, file.state || 0);
          o.write_shift(4, 0);
          o.write_shift(4, 0);
          o.write_shift(4, 0);
          o.write_shift(4, 0);
          o.write_shift(4, file.start);
          o.write_shift(4, file.size);
          o.write_shift(4, 0);
        }

        for (i = 1; i < cfb.FileIndex.length; ++i) {
          file = cfb.FileIndex[i];

          if (file.size >= 0x1000) {
            o.l = file.start + 1 << 9;

            for (j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);

            for (; j & 0x1FF; ++j) o.write_shift(1, 0);
          }
        }

        for (i = 1; i < cfb.FileIndex.length; ++i) {
          file = cfb.FileIndex[i];

          if (file.size > 0 && file.size < 0x1000) {
            for (j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);

            for (; j & 0x3F; ++j) o.write_shift(1, 0);
          }
        }

        while (o.l < o.length) o.write_shift(1, 0);

        return o;
      }
      /* [MS-CFB] 2.6.4 (Unicode 3.0.1 case conversion) */


      function find(cfb, path) {
        var UCFullPaths = cfb.FullPaths.map(function (x) {
          return x.toUpperCase();
        });
        var UCPaths = UCFullPaths.map(function (x) {
          var y = x.split("/");
          return y[y.length - (x.slice(-1) == "/" ? 2 : 1)];
        });
        var k = false;

        if (path.charCodeAt(0) === 47
        /* "/" */
        ) {
            k = true;
            path = UCFullPaths[0].slice(0, -1) + path;
          } else k = path.indexOf("/") !== -1;

        var UCPath = path.toUpperCase();
        var w = k === true ? UCFullPaths.indexOf(UCPath) : UCPaths.indexOf(UCPath);
        if (w !== -1) return cfb.FileIndex[w];
        var m = !UCPath.match(chr1);
        UCPath = UCPath.replace(chr0, '');
        if (m) UCPath = UCPath.replace(chr1, '!');

        for (w = 0; w < UCFullPaths.length; ++w) {
          if ((m ? UCFullPaths[w].replace(chr1, '!') : UCFullPaths[w]).replace(chr0, '') == UCPath) return cfb.FileIndex[w];
          if ((m ? UCPaths[w].replace(chr1, '!') : UCPaths[w]).replace(chr0, '') == UCPath) return cfb.FileIndex[w];
        }

        return null;
      }
      /** CFB Constants */


      var MSSZ = 64;
      /* Mini Sector Size = 1<<6 */
      //var MSCSZ = 4096; /* Mini Stream Cutoff Size */

      /* 2.1 Compound File Sector Numbers and Types */

      var ENDOFCHAIN = -2;
      /* 2.2 Compound File Header */

      var HEADER_SIGNATURE = 'd0cf11e0a1b11ae1';
      var HEADER_SIG = [0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1];
      var HEADER_CLSID = '00000000000000000000000000000000';
      var consts = {
        /* 2.1 Compund File Sector Numbers and Types */
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: ENDOFCHAIN,
        FREESECT: -1,

        /* 2.2 Compound File Header */
        HEADER_SIGNATURE: HEADER_SIGNATURE,
        HEADER_MINOR_VERSION: '3e00',
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: HEADER_CLSID,

        /* 2.6.1 Compound File Directory Entry */
        EntryTypes: ['unknown', 'storage', 'stream', 'lockbytes', 'property', 'root']
      };

      function write_file(cfb, filename, options) {
        var o = _write(cfb, options);
      }

      function a2s(o) {
        var out = new Array(o.length);

        for (var i = 0; i < o.length; ++i) out[i] = String.fromCharCode(o[i]);

        return out.join("");
      }

      function write(cfb, options) {
        var o = _write(cfb, options);

        switch (options && options.type || "buffer") {
          case "file":
            return o;

          case "binary":
            return typeof o == "string" ? o : a2s(o);

          case "base64":
            return Base64.encode(typeof o == "string" ? o : a2s(o));

          case "buffer":
            if (has_buf) return Buffer.isBuffer(o) ? o : Buffer_from(o);

          /* falls through */

          case "array":
            return typeof o == "string" ? s2a(o) : o;
        }

        return o;
      }
      /* node < 8.1 zlib does not expose bytesRead, so default to pure JS */


      var _zlib;

      function use_zlib(zlib) {
        try {
          var InflateRaw = zlib.InflateRaw;
          var InflRaw = new InflateRaw();

          InflRaw._processChunk(new Uint8Array([3, 0]), InflRaw._finishFlushFlag);

          if (InflRaw.bytesRead) _zlib = zlib;else throw new Error("zlib does not expose bytesRead");
        } catch (e) {
          console.error("cannot use native zlib: " + (e.message || e));
        }
      }

      function _inflateRawSync(payload, usz) {
        if (!_zlib) return _inflate(payload, usz);
        var InflateRaw = _zlib.InflateRaw;
        var InflRaw = new InflateRaw();

        var out = InflRaw._processChunk(payload.slice(payload.l), InflRaw._finishFlushFlag);

        payload.l += InflRaw.bytesRead;
        return out;
      }

      function _deflateRawSync(payload) {
        return _zlib ? _zlib.deflateRawSync(payload) : _deflate(payload);
      }

      var CLEN_ORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      /*  LEN_ID = [ 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285 ]; */

      var LEN_LN = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
      /*  DST_ID = [  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13,  14,  15,  16,  17,  18,  19,   20,   21,   22,   23,   24,   25,   26,    27,    28,    29 ]; */

      var DST_LN = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];

      function bit_swap_8(n) {
        var t = (n << 1 | n << 11) & 0x22110 | (n << 5 | n << 15) & 0x88440;
        return (t >> 16 | t >> 8 | t) & 0xFF;
      }

      var use_typed_arrays = typeof Uint8Array !== 'undefined';
      var bitswap8 = use_typed_arrays ? new Uint8Array(1 << 8) : [];

      for (var q = 0; q < 1 << 8; ++q) bitswap8[q] = bit_swap_8(q);

      function bit_swap_n(n, b) {
        var rev = bitswap8[n & 0xFF];
        if (b <= 8) return rev >>> 8 - b;
        rev = rev << 8 | bitswap8[n >> 8 & 0xFF];
        if (b <= 16) return rev >>> 16 - b;
        rev = rev << 8 | bitswap8[n >> 16 & 0xFF];
        return rev >>> 24 - b;
      }
      /* helpers for unaligned bit reads */


      function read_bits_2(buf, bl) {
        var w = bl & 7,
            h = bl >>> 3;
        return (buf[h] | (w <= 6 ? 0 : buf[h + 1] << 8)) >>> w & 0x03;
      }

      function read_bits_3(buf, bl) {
        var w = bl & 7,
            h = bl >>> 3;
        return (buf[h] | (w <= 5 ? 0 : buf[h + 1] << 8)) >>> w & 0x07;
      }

      function read_bits_4(buf, bl) {
        var w = bl & 7,
            h = bl >>> 3;
        return (buf[h] | (w <= 4 ? 0 : buf[h + 1] << 8)) >>> w & 0x0F;
      }

      function read_bits_5(buf, bl) {
        var w = bl & 7,
            h = bl >>> 3;
        return (buf[h] | (w <= 3 ? 0 : buf[h + 1] << 8)) >>> w & 0x1F;
      }

      function read_bits_7(buf, bl) {
        var w = bl & 7,
            h = bl >>> 3;
        return (buf[h] | (w <= 1 ? 0 : buf[h + 1] << 8)) >>> w & 0x7F;
      }
      /* works up to n = 3 * 8 + 1 = 25 */


      function read_bits_n(buf, bl, n) {
        var w = bl & 7,
            h = bl >>> 3,
            f = (1 << n) - 1;
        var v = buf[h] >>> w;
        if (n < 8 - w) return v & f;
        v |= buf[h + 1] << 8 - w;
        if (n < 16 - w) return v & f;
        v |= buf[h + 2] << 16 - w;
        if (n < 24 - w) return v & f;
        v |= buf[h + 3] << 24 - w;
        return v & f;
      }
      /* until ArrayBuffer#realloc is a thing, fake a realloc */


      function realloc(b, sz) {
        var L = b.length,
            M = 2 * L > sz ? 2 * L : sz + 5,
            i = 0;
        if (L >= sz) return b;

        if (has_buf) {
          var o = new_unsafe_buf(M); // $FlowIgnore

          if (b.copy) b.copy(o);else for (; i < b.length; ++i) o[i] = b[i];
          return o;
        } else if (use_typed_arrays) {
          var a = new Uint8Array(M);
          if (a.set) a.set(b);else for (; i < b.length; ++i) a[i] = b[i];
          return a;
        }

        b.length = M;
        return b;
      }
      /* zero-filled arrays for older browsers */


      function zero_fill_array(n) {
        var o = new Array(n);

        for (var i = 0; i < n; ++i) o[i] = 0;

        return o;
      }

      var _deflate = function () {
        var _deflateRaw = function () {
          return function deflateRaw(data, out) {
            var boff = 0;

            while (boff < data.length) {
              var L = Math.min(0xFFFF, data.length - boff);
              var h = boff + L == data.length;
              /* TODO: this is only type 0 stored */

              out.write_shift(1, +h);
              out.write_shift(2, L);
              out.write_shift(2, ~L & 0xFFFF);

              while (L-- > 0) out[out.l++] = data[boff++];
            }

            return out.l;
          };
        }();

        return function (data) {
          var buf = new_buf(50 + Math.floor(data.length * 1.1));

          var off = _deflateRaw(data, buf);

          return buf.slice(0, off);
        };
      }();
      /* modified inflate function also moves original read head */

      /* build tree (used for literals and lengths) */


      function build_tree(clens, cmap, MAX) {
        var maxlen = 1,
            w = 0,
            i = 0,
            j = 0,
            ccode = 0,
            L = clens.length;
        var bl_count = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);

        for (i = 0; i < 32; ++i) bl_count[i] = 0;

        for (i = L; i < MAX; ++i) clens[i] = 0;

        L = clens.length;
        var ctree = use_typed_arrays ? new Uint16Array(L) : zero_fill_array(L); // []

        /* build code tree */

        for (i = 0; i < L; ++i) {
          bl_count[w = clens[i]]++;
          if (maxlen < w) maxlen = w;
          ctree[i] = 0;
        }

        bl_count[0] = 0;

        for (i = 1; i <= maxlen; ++i) bl_count[i + 16] = ccode = ccode + bl_count[i - 1] << 1;

        for (i = 0; i < L; ++i) {
          ccode = clens[i];
          if (ccode != 0) ctree[i] = bl_count[ccode + 16]++;
        }
        /* cmap[maxlen + 4 bits] = (off&15) + (lit<<4) reverse mapping */


        var cleni = 0;

        for (i = 0; i < L; ++i) {
          cleni = clens[i];

          if (cleni != 0) {
            ccode = bit_swap_n(ctree[i], maxlen) >> maxlen - cleni;

            for (j = (1 << maxlen + 4 - cleni) - 1; j >= 0; --j) cmap[ccode | j << cleni] = cleni & 15 | i << 4;
          }
        }

        return maxlen;
      }

      var fix_lmap = use_typed_arrays ? new Uint16Array(512) : zero_fill_array(512);
      var fix_dmap = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);

      if (!use_typed_arrays) {
        for (var i = 0; i < 512; ++i) fix_lmap[i] = 0;

        for (i = 0; i < 32; ++i) fix_dmap[i] = 0;
      }

      (function () {
        var dlens = [];
        var i = 0;

        for (; i < 32; i++) dlens.push(5);

        build_tree(dlens, fix_dmap, 32);
        var clens = [];
        i = 0;

        for (; i <= 143; i++) clens.push(8);

        for (; i <= 255; i++) clens.push(9);

        for (; i <= 279; i++) clens.push(7);

        for (; i <= 287; i++) clens.push(8);

        build_tree(clens, fix_lmap, 288);
      })();

      var dyn_lmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
      var dyn_dmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
      var dyn_cmap = use_typed_arrays ? new Uint16Array(128) : zero_fill_array(128);
      var dyn_len_1 = 1,
          dyn_len_2 = 1;
      /* 5.5.3 Expanding Huffman Codes */

      function dyn(data, boff) {
        /* nomenclature from RFC1951 refers to bit values; these are offset by the implicit constant */
        var _HLIT = read_bits_5(data, boff) + 257;

        boff += 5;

        var _HDIST = read_bits_5(data, boff) + 1;

        boff += 5;

        var _HCLEN = read_bits_4(data, boff) + 4;

        boff += 4;
        var w = 0;
        /* grab and store code lengths */

        var clens = use_typed_arrays ? new Uint8Array(19) : zero_fill_array(19);
        var ctree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var maxlen = 1;
        var bl_count = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
        var next_code = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
        var L = clens.length;
        /* 19 */

        for (var i = 0; i < _HCLEN; ++i) {
          clens[CLEN_ORDER[i]] = w = read_bits_3(data, boff);
          if (maxlen < w) maxlen = w;
          bl_count[w]++;
          boff += 3;
        }
        /* build code tree */


        var ccode = 0;
        bl_count[0] = 0;

        for (i = 1; i <= maxlen; ++i) next_code[i] = ccode = ccode + bl_count[i - 1] << 1;

        for (i = 0; i < L; ++i) if ((ccode = clens[i]) != 0) ctree[i] = next_code[ccode]++;
        /* cmap[7 bits from stream] = (off&7) + (lit<<3) */


        var cleni = 0;

        for (i = 0; i < L; ++i) {
          cleni = clens[i];

          if (cleni != 0) {
            ccode = bitswap8[ctree[i]] >> 8 - cleni;

            for (var j = (1 << 7 - cleni) - 1; j >= 0; --j) dyn_cmap[ccode | j << cleni] = cleni & 7 | i << 3;
          }
        }
        /* read literal and dist codes at once */


        var hcodes = [];
        maxlen = 1;

        for (; hcodes.length < _HLIT + _HDIST;) {
          ccode = dyn_cmap[read_bits_7(data, boff)];
          boff += ccode & 7;

          switch (ccode >>>= 3) {
            case 16:
              w = 3 + read_bits_2(data, boff);
              boff += 2;
              ccode = hcodes[hcodes.length - 1];

              while (w-- > 0) hcodes.push(ccode);

              break;

            case 17:
              w = 3 + read_bits_3(data, boff);
              boff += 3;

              while (w-- > 0) hcodes.push(0);

              break;

            case 18:
              w = 11 + read_bits_7(data, boff);
              boff += 7;

              while (w-- > 0) hcodes.push(0);

              break;

            default:
              hcodes.push(ccode);
              if (maxlen < ccode) maxlen = ccode;
              break;
          }
        }
        /* build literal / length trees */


        var h1 = hcodes.slice(0, _HLIT),
            h2 = hcodes.slice(_HLIT);

        for (i = _HLIT; i < 286; ++i) h1[i] = 0;

        for (i = _HDIST; i < 30; ++i) h2[i] = 0;

        dyn_len_1 = build_tree(h1, dyn_lmap, 286);
        dyn_len_2 = build_tree(h2, dyn_dmap, 30);
        return boff;
      }
      /* return [ data, bytesRead ] */


      function inflate(data, usz) {
        /* shortcircuit for empty buffer [0x03, 0x00] */
        if (data[0] == 3 && !(data[1] & 0x3)) {
          return [new_raw_buf(usz), 2];
        }
        /* bit offset */


        var boff = 0;
        /* header includes final bit and type bits */

        var header = 0;
        var outbuf = new_unsafe_buf(usz ? usz : 1 << 18);
        var woff = 0;
        var OL = outbuf.length >>> 0;
        var max_len_1 = 0,
            max_len_2 = 0;

        while ((header & 1) == 0) {
          header = read_bits_3(data, boff);
          boff += 3;

          if (header >>> 1 == 0) {
            /* Stored block */
            if (boff & 7) boff += 8 - (boff & 7);
            /* 2 bytes sz, 2 bytes bit inverse */

            var sz = data[boff >>> 3] | data[(boff >>> 3) + 1] << 8;
            boff += 32;
            /* push sz bytes */

            if (!usz && OL < woff + sz) {
              outbuf = realloc(outbuf, woff + sz);
              OL = outbuf.length;
            }

            if (typeof data.copy === 'function') {
              // $FlowIgnore
              data.copy(outbuf, woff, boff >>> 3, (boff >>> 3) + sz);
              woff += sz;
              boff += 8 * sz;
            } else while (sz-- > 0) {
              outbuf[woff++] = data[boff >>> 3];
              boff += 8;
            }

            continue;
          } else if (header >>> 1 == 1) {
            /* Fixed Huffman */
            max_len_1 = 9;
            max_len_2 = 5;
          } else {
            /* Dynamic Huffman */
            boff = dyn(data, boff);
            max_len_1 = dyn_len_1;
            max_len_2 = dyn_len_2;
          }

          if (!usz && OL < woff + 32767) {
            outbuf = realloc(outbuf, woff + 32767);
            OL = outbuf.length;
          }

          for (;;) {
            // while(true) is apparently out of vogue in modern JS circles

            /* ingest code and move read head */
            var bits = read_bits_n(data, boff, max_len_1);
            var code = header >>> 1 == 1 ? fix_lmap[bits] : dyn_lmap[bits];
            boff += code & 15;
            code >>>= 4;
            /* 0-255 are literals, 256 is end of block token, 257+ are copy tokens */

            if ((code >>> 8 & 0xFF) === 0) outbuf[woff++] = code;else if (code == 256) break;else {
              code -= 257;
              var len_eb = code < 8 ? 0 : code - 4 >> 2;
              if (len_eb > 5) len_eb = 0;
              var tgt = woff + LEN_LN[code];
              /* length extra bits */

              if (len_eb > 0) {
                tgt += read_bits_n(data, boff, len_eb);
                boff += len_eb;
              }
              /* dist code */


              bits = read_bits_n(data, boff, max_len_2);
              code = header >>> 1 == 1 ? fix_dmap[bits] : dyn_dmap[bits];
              boff += code & 15;
              code >>>= 4;
              var dst_eb = code < 4 ? 0 : code - 2 >> 1;
              var dst = DST_LN[code];
              /* dist extra bits */

              if (dst_eb > 0) {
                dst += read_bits_n(data, boff, dst_eb);
                boff += dst_eb;
              }
              /* in the common case, manual byte copy is faster than TA set / Buffer copy */


              if (!usz && OL < tgt) {
                outbuf = realloc(outbuf, tgt);
                OL = outbuf.length;
              }

              while (woff < tgt) {
                outbuf[woff] = outbuf[woff - dst];
                ++woff;
              }
            }
          }
        }

        return [usz ? outbuf : outbuf.slice(0, woff), boff + 7 >>> 3];
      }

      function _inflate(payload, usz) {
        var data = payload.slice(payload.l || 0);
        var out = inflate(data, usz);
        payload.l += out[1];
        return out[0];
      }

      function warn_or_throw(wrn, msg) {
        if (wrn) {
          if (typeof console !== 'undefined') console.error(msg);
        } else throw new Error(msg);
      }

      function parse_zip(file, options) {
        var blob = file;
        prep_blob(blob, 0);
        var FileIndex = [],
            FullPaths = [];
        var o = {
          FileIndex: FileIndex,
          FullPaths: FullPaths
        };
        init_cfb(o, {
          root: options.root
        });
        /* find end of central directory, start just after signature */

        var i = blob.length - 4;

        while ((blob[i] != 0x50 || blob[i + 1] != 0x4b || blob[i + 2] != 0x05 || blob[i + 3] != 0x06) && i >= 0) --i;

        blob.l = i + 4;
        /* parse end of central directory */

        blob.l += 4;
        var fcnt = blob.read_shift(2);
        blob.l += 6;
        var start_cd = blob.read_shift(4);
        /* parse central directory */

        blob.l = start_cd;

        for (i = 0; i < fcnt; ++i) {
          /* trust local file header instead of CD entry */
          blob.l += 20;
          var csz = blob.read_shift(4);
          var usz = blob.read_shift(4);
          var namelen = blob.read_shift(2);
          var efsz = blob.read_shift(2);
          var fcsz = blob.read_shift(2);
          blob.l += 8;
          var offset = blob.read_shift(4);
          var EF = parse_extra_field(blob.slice(blob.l + namelen, blob.l + namelen + efsz));
          blob.l += namelen + efsz + fcsz;
          var L = blob.l;
          blob.l = offset + 4;
          parse_local_file(blob, csz, usz, o, EF);
          blob.l = L;
        }

        return o;
      }
      /* head starts just after local file header signature */


      function parse_local_file(blob, csz, usz, o, EF) {
        /* [local file header] */
        blob.l += 2;
        var flags = blob.read_shift(2);
        var meth = blob.read_shift(2);
        var date = parse_dos_date(blob);
        if (flags & 0x2041) throw new Error("Unsupported ZIP encryption");
        var crc32 = blob.read_shift(4);

        var _csz = blob.read_shift(4);

        var _usz = blob.read_shift(4);

        var namelen = blob.read_shift(2);
        var efsz = blob.read_shift(2); // TODO: flags & (1<<11) // UTF8

        var name = "";

        for (var i = 0; i < namelen; ++i) name += String.fromCharCode(blob[blob.l++]);

        if (efsz) {
          var ef = parse_extra_field(blob.slice(blob.l, blob.l + efsz));
          if ((ef[0x5455] || {}).mt) date = ef[0x5455].mt;
          if (((EF || {})[0x5455] || {}).mt) date = EF[0x5455].mt;
        }

        blob.l += efsz;
        /* [encryption header] */

        /* [file data] */

        var data = blob.slice(blob.l, blob.l + _csz);

        switch (meth) {
          case 8:
            data = _inflateRawSync(blob, _usz);
            break;

          case 0:
            break;

          default:
            throw new Error("Unsupported ZIP Compression method " + meth);
        }
        /* [data descriptor] */


        var wrn = false;

        if (flags & 8) {
          crc32 = blob.read_shift(4);

          if (crc32 == 0x08074b50) {
            crc32 = blob.read_shift(4);
            wrn = true;
          }

          _csz = blob.read_shift(4);
          _usz = blob.read_shift(4);
        }

        if (_csz != csz) warn_or_throw(wrn, "Bad compressed size: " + csz + " != " + _csz);
        if (_usz != usz) warn_or_throw(wrn, "Bad uncompressed size: " + usz + " != " + _usz);

        var _crc32 = CRC32.buf(data, 0);

        if (crc32 >> 0 != _crc32 >> 0) warn_or_throw(wrn, "Bad CRC32 checksum: " + crc32 + " != " + _crc32);
        cfb_add(o, name, data, {
          unsafe: true,
          mt: date
        });
      }

      function write_zip(cfb, options) {
        var _opts = options || {};

        var out = [],
            cdirs = [];
        var o = new_buf(1);
        var method = _opts.compression ? 8 : 0,
            flags = 0;
        var i = 0,
            j = 0;
        var start_cd = 0,
            fcnt = 0;
        var root = cfb.FullPaths[0],
            fp = root,
            fi = cfb.FileIndex[0];
        var crcs = [];
        var sz_cd = 0;

        for (i = 1; i < cfb.FullPaths.length; ++i) {
          fp = cfb.FullPaths[i].slice(root.length);
          fi = cfb.FileIndex[i];
          if (!fi.size || !fi.content || fp == "\u0001Sh33tJ5") continue;
          var start = start_cd;
          /* TODO: CP437 filename */

          var namebuf = new_buf(fp.length);

          for (j = 0; j < fp.length; ++j) namebuf.write_shift(1, fp.charCodeAt(j) & 0x7F);

          namebuf = namebuf.slice(0, namebuf.l);
          crcs[fcnt] = CRC32.buf(fi.content, 0);
          var outbuf = fi.content;
          if (method == 8) outbuf = _deflateRawSync(outbuf);
          /* local file header */

          o = new_buf(30);
          o.write_shift(4, 0x04034b50);
          o.write_shift(2, 20);
          o.write_shift(2, flags);
          o.write_shift(2, method);
          /* TODO: last mod file time/date */

          if (fi.mt) write_dos_date(o, fi.mt);else o.write_shift(4, 0);
          o.write_shift(-4,  crcs[fcnt]);
          o.write_shift(4,  outbuf.length);
          o.write_shift(4,  fi.content.length);
          o.write_shift(2, namebuf.length);
          o.write_shift(2, 0);
          start_cd += o.length;
          out.push(o);
          start_cd += namebuf.length;
          out.push(namebuf);
          /* TODO: encryption header ? */

          start_cd += outbuf.length;
          out.push(outbuf);
          /* central directory */


          o = new_buf(46);
          o.write_shift(4, 0x02014b50);
          o.write_shift(2, 0);
          o.write_shift(2, 20);
          o.write_shift(2, flags);
          o.write_shift(2, method);
          o.write_shift(4, 0);
          /* TODO: last mod file time/date */

          o.write_shift(-4, crcs[fcnt]);
          o.write_shift(4, outbuf.length);
          o.write_shift(4, fi.content.length);
          o.write_shift(2, namebuf.length);
          o.write_shift(2, 0);
          o.write_shift(2, 0);
          o.write_shift(2, 0);
          o.write_shift(2, 0);
          o.write_shift(4, 0);
          o.write_shift(4, start);
          sz_cd += o.l;
          cdirs.push(o);
          sz_cd += namebuf.length;
          cdirs.push(namebuf);
          ++fcnt;
        }
        /* end of central directory */


        o = new_buf(22);
        o.write_shift(4, 0x06054b50);
        o.write_shift(2, 0);
        o.write_shift(2, 0);
        o.write_shift(2, fcnt);
        o.write_shift(2, fcnt);
        o.write_shift(4, sz_cd);
        o.write_shift(4, start_cd);
        o.write_shift(2, 0);
        return bconcat([bconcat(out), bconcat(cdirs), o]);
      }

      var ContentTypeMap = {
        "htm": "text/html",
        "xml": "text/xml",
        "gif": "image/gif",
        "jpg": "image/jpeg",
        "png": "image/png",
        "mso": "application/x-mso",
        "thmx": "application/vnd.ms-officetheme",
        "sh33tj5": "application/octet-stream"
      };

      function get_content_type(fi, fp) {
        if (fi.ctype) return fi.ctype;
        var ext = fi.name || "",
            m = ext.match(/\.([^\.]+)$/);
        if (m && ContentTypeMap[m[1]]) return ContentTypeMap[m[1]];

        if (fp) {
          m = (ext = fp).match(/[\.\\]([^\.\\])+$/);
          if (m && ContentTypeMap[m[1]]) return ContentTypeMap[m[1]];
        }

        return "application/octet-stream";
      }
      /* 76 character chunks TODO: intertwine encoding */


      function write_base64_76(bstr) {
        var data = Base64.encode(bstr);
        var o = [];

        for (var i = 0; i < data.length; i += 76) o.push(data.slice(i, i + 76));

        return o.join("\r\n") + "\r\n";
      }
      /*
      Rules for QP:
      	- escape =## applies for all non-display characters and literal "="
      	- space or tab at end of line must be encoded
      	- \r\n newlines can be preserved, but bare \r and \n must be escaped
      	- lines must not exceed 76 characters, use soft breaks =\r\n
      
      TODO: Some files from word appear to write line extensions with bare equals:
      
      ```
      <table class=3DMsoTableGrid border=3D1 cellspacing=3D0 cellpadding=3D0 width=
      ="70%"
      ```
      */


      function write_quoted_printable(text) {
        var encoded = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function (c) {
          var w = c.charCodeAt(0).toString(16).toUpperCase();
          return "=" + (w.length == 1 ? "0" + w : w);
        });
        encoded = encoded.replace(/ $/mg, "=20").replace(/\t$/mg, "=09");
        if (encoded.charAt(0) == "\n") encoded = "=0D" + encoded.slice(1);
        encoded = encoded.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, "\n=0A").replace(/([^\r\n])\n/mg, "$1=0A");
        var o = [],
            split = encoded.split("\r\n");

        for (var si = 0; si < split.length; ++si) {
          var str = split[si];

          if (str.length == 0) {
            o.push("");
            continue;
          }

          for (var i = 0; i < str.length;) {
            var end = 76;
            var tmp = str.slice(i, i + end);
            if (tmp.charAt(end - 1) == "=") end--;else if (tmp.charAt(end - 2) == "=") end -= 2;else if (tmp.charAt(end - 3) == "=") end -= 3;
            tmp = str.slice(i, i + end);
            i += end;
            if (i < str.length) tmp += "=";
            o.push(tmp);
          }
        }

        return o.join("\r\n");
      }

      function parse_quoted_printable(data) {
        var o = [];
        /* unify long lines */

        for (var di = 0; di < data.length; ++di) {
          var line = data[di];

          while (di <= data.length && line.charAt(line.length - 1) == "=") line = line.slice(0, line.length - 1) + data[++di];

          o.push(line);
        }
        /* decode */


        for (var oi = 0; oi < o.length; ++oi) o[oi] = o[oi].replace(/=[0-9A-Fa-f]{2}/g, function ($$) {
          return String.fromCharCode(parseInt($$.slice(1), 16));
        });

        return s2a(o.join("\r\n"));
      }

      function parse_mime(cfb, data, root) {
        var fname = "",
            cte = "",
            ctype = "",
            fdata;
        var di = 0;

        for (; di < 10; ++di) {
          var line = data[di];
          if (!line || line.match(/^\s*$/)) break;
          var m = line.match(/^(.*?):\s*([^\s].*)$/);
          if (m) switch (m[1].toLowerCase()) {
            case "content-location":
              fname = m[2].trim();
              break;

            case "content-type":
              ctype = m[2].trim();
              break;

            case "content-transfer-encoding":
              cte = m[2].trim();
              break;
          }
        }

        ++di;

        switch (cte.toLowerCase()) {
          case 'base64':
            fdata = s2a(Base64.decode(data.slice(di).join("")));
            break;

          case 'quoted-printable':
            fdata = parse_quoted_printable(data.slice(di));
            break;

          default:
            throw new Error("Unsupported Content-Transfer-Encoding " + cte);
        }

        var file = cfb_add(cfb, fname.slice(root.length), fdata, {
          unsafe: true
        });
        if (ctype) file.ctype = ctype;
      }

      function parse_mad(file, options) {
        if (a2s(file.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
        var root = options && options.root || ""; // $FlowIgnore

        var data = (has_buf && Buffer.isBuffer(file) ? file.toString("binary") : a2s(file)).split("\r\n");
        var di = 0,
            row = "";
        /* if root is not specified, scan for the common prefix */

        for (di = 0; di < data.length; ++di) {
          row = data[di];
          if (!/^Content-Location:/i.test(row)) continue;
          row = row.slice(row.indexOf("file"));
          if (!root) root = row.slice(0, row.lastIndexOf("/") + 1);
          if (row.slice(0, root.length) == root) continue;

          while (root.length > 0) {
            root = root.slice(0, root.length - 1);
            root = root.slice(0, root.lastIndexOf("/") + 1);
            if (row.slice(0, root.length) == root) break;
          }
        }

        var mboundary = (data[1] || "").match(/boundary="(.*?)"/);
        if (!mboundary) throw new Error("MAD cannot find boundary");
        var boundary = "--" + (mboundary[1] || "");
        var FileIndex = [],
            FullPaths = [];
        var o = {
          FileIndex: FileIndex,
          FullPaths: FullPaths
        };
        init_cfb(o);
        var start_di,
            fcnt = 0;

        for (di = 0; di < data.length; ++di) {
          var line = data[di];
          if (line !== boundary && line !== boundary + "--") continue;
          if (fcnt++) parse_mime(o, data.slice(start_di, di), root);
          start_di = di;
        }

        return o;
      }

      function write_mad(cfb, options) {
        var opts = options || {};
        var boundary = opts.boundary || "SheetJS";
        boundary = '------=' + boundary;
        var out = ['MIME-Version: 1.0', 'Content-Type: multipart/related; boundary="' + boundary.slice(2) + '"', '', '', ''];
        var root = cfb.FullPaths[0],
            fp = root,
            fi = cfb.FileIndex[0];

        for (var i = 1; i < cfb.FullPaths.length; ++i) {
          fp = cfb.FullPaths[i].slice(root.length);
          fi = cfb.FileIndex[i];
          if (!fi.size || !fi.content || fp == "\u0001Sh33tJ5") continue;
          /* Normalize filename */

          fp = fp.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function (c) {
            return "_x" + c.charCodeAt(0).toString(16) + "_";
          }).replace(/[\u0080-\uFFFF]/g, function (u) {
            return "_u" + u.charCodeAt(0).toString(16) + "_";
          });
          /* Extract content as binary string */

          var ca = fi.content; // $FlowIgnore

          var cstr = has_buf && Buffer.isBuffer(ca) ? ca.toString("binary") : a2s(ca);
          /* 4/5 of first 1024 chars ascii -> quoted printable, else base64 */

          var dispcnt = 0,
              L = Math.min(1024, cstr.length),
              cc = 0;

          for (var csl = 0; csl <= L; ++csl) if ((cc = cstr.charCodeAt(csl)) >= 0x20 && cc < 0x80) ++dispcnt;

          var qp = dispcnt >= L * 4 / 5;
          out.push(boundary);
          out.push('Content-Location: ' + (opts.root || 'file:///C:/SheetJS/') + fp);
          out.push('Content-Transfer-Encoding: ' + (qp ? 'quoted-printable' : 'base64'));
          out.push('Content-Type: ' + get_content_type(fi, fp));
          out.push('');
          out.push(qp ? write_quoted_printable(cstr) : write_base64_76(cstr));
        }

        out.push(boundary + '--\r\n');
        return out.join("\r\n");
      }

      function cfb_new(opts) {
        var o = {};
        init_cfb(o, opts);
        return o;
      }

      function cfb_add(cfb, name, content, opts) {
        var unsafe = opts && opts.unsafe;
        if (!unsafe) init_cfb(cfb);
        var file = !unsafe && CFB.find(cfb, name);

        if (!file) {
          var fpath = cfb.FullPaths[0];
          if (name.slice(0, fpath.length) == fpath) fpath = name;else {
            if (fpath.slice(-1) != "/") fpath += "/";
            fpath = (fpath + name).replace("//", "/");
          }
          file = {
            name: filename(name),
            type: 2
          };
          cfb.FileIndex.push(file);
          cfb.FullPaths.push(fpath);
          if (!unsafe) CFB.utils.cfb_gc(cfb);
        }

        file.content = content;
        file.size = content ? content.length : 0;

        if (opts) {
          if (opts.CLSID) file.clsid = opts.CLSID;
          if (opts.mt) file.mt = opts.mt;
          if (opts.ct) file.ct = opts.ct;
        }

        return file;
      }

      function cfb_del(cfb, name) {
        init_cfb(cfb);
        var file = CFB.find(cfb, name);
        if (file) for (var j = 0; j < cfb.FileIndex.length; ++j) if (cfb.FileIndex[j] == file) {
          cfb.FileIndex.splice(j, 1);
          cfb.FullPaths.splice(j, 1);
          return true;
        }
        return false;
      }

      function cfb_mov(cfb, old_name, new_name) {
        init_cfb(cfb);
        var file = CFB.find(cfb, old_name);
        if (file) for (var j = 0; j < cfb.FileIndex.length; ++j) if (cfb.FileIndex[j] == file) {
          cfb.FileIndex[j].name = filename(new_name);
          cfb.FullPaths[j] = new_name;
          return true;
        }
        return false;
      }

      function cfb_gc(cfb) {
        rebuild_cfb(cfb, true);
      }

      exports.find = find;
      exports.read = read;
      exports.parse = parse;
      exports.write = write;
      exports.writeFile = write_file;
      exports.utils = {
        cfb_new: cfb_new,
        cfb_add: cfb_add,
        cfb_del: cfb_del,
        cfb_mov: cfb_mov,
        cfb_gc: cfb_gc,
        ReadShift: ReadShift,
        CheckField: CheckField,
        prep_blob: prep_blob,
        bconcat: bconcat,
        use_zlib: use_zlib,
        _deflateRaw: _deflate,
        _inflateRaw: _inflate,
        consts: consts
      };
      return exports;
    }();

    if (typeof commonjsRequire !== 'undefined' && 'object' !== 'undefined' && typeof DO_NOT_EXPORT_CFB === 'undefined') {
      module.exports = CFB;
    }
  });

  var common = createCommonjsModule(function (module, exports) {

    var TYPED_OK = typeof Uint8Array !== 'undefined' && typeof Uint16Array !== 'undefined' && typeof Int32Array !== 'undefined';

    function _has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }

    exports.assign = function (obj
    /*from1, from2, from3, ...*/
    ) {
      var sources = Array.prototype.slice.call(arguments, 1);

      while (sources.length) {
        var source = sources.shift();

        if (!source) {
          continue;
        }

        if (typeof source !== 'object') {
          throw new TypeError(source + 'must be non-object');
        }

        for (var p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      }

      return obj;
    }; // reduce buffer size, avoiding mem copy


    exports.shrinkBuf = function (buf, size) {
      if (buf.length === size) {
        return buf;
      }

      if (buf.subarray) {
        return buf.subarray(0, size);
      }

      buf.length = size;
      return buf;
    };

    var fnTyped = {
      arraySet: function (dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
          dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
          return;
        } // Fallback to ordinary array


        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function (chunks) {
        var i, l, len, pos, chunk, result; // calculate data length

        len = 0;

        for (i = 0, l = chunks.length; i < l; i++) {
          len += chunks[i].length;
        } // join chunks


        result = new Uint8Array(len);
        pos = 0;

        for (i = 0, l = chunks.length; i < l; i++) {
          chunk = chunks[i];
          result.set(chunk, pos);
          pos += chunk.length;
        }

        return result;
      }
    };
    var fnUntyped = {
      arraySet: function (dest, src, src_offs, len, dest_offs) {
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function (chunks) {
        return [].concat.apply([], chunks);
      }
    }; // Enable/Disable typed arrays use, for testing
    //

    exports.setTyped = function (on) {
      if (on) {
        exports.Buf8 = Uint8Array;
        exports.Buf16 = Uint16Array;
        exports.Buf32 = Int32Array;
        exports.assign(exports, fnTyped);
      } else {
        exports.Buf8 = Array;
        exports.Buf16 = Array;
        exports.Buf32 = Array;
        exports.assign(exports, fnUntyped);
      }
    };

    exports.setTyped(TYPED_OK);
  });

  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  /* eslint-disable space-unary-ops */

  /* Public constants ==========================================================*/

  /* ===========================================================================*/
  //var Z_FILTERED          = 1;
  //var Z_HUFFMAN_ONLY      = 2;
  //var Z_RLE               = 3;


  var Z_FIXED = 4; //var Z_DEFAULT_STRATEGY  = 0;

  /* Possible values of the data_type field (though see inflate()) */

  var Z_BINARY = 0;
  var Z_TEXT = 1; //var Z_ASCII             = 1; // = Z_TEXT

  var Z_UNKNOWN = 2;
  /*============================================================================*/

  function zero(buf) {
    var len = buf.length;

    while (--len >= 0) {
      buf[len] = 0;
    }
  } // From zutil.h


  var STORED_BLOCK = 0;
  var STATIC_TREES = 1;
  var DYN_TREES = 2;
  /* The three kinds of block type */

  var MIN_MATCH = 3;
  var MAX_MATCH = 258;
  /* The minimum and maximum match lengths */
  // From deflate.h

  /* ===========================================================================
   * Internal compression state.
   */

  var LENGTH_CODES = 29;
  /* number of length codes, not counting the special END_BLOCK code */

  var LITERALS = 256;
  /* number of literal bytes 0..255 */

  var L_CODES = LITERALS + 1 + LENGTH_CODES;
  /* number of Literal or Length codes, including the END_BLOCK code */

  var D_CODES = 30;
  /* number of distance codes */

  var BL_CODES = 19;
  /* number of codes used to transfer the bit lengths */

  var HEAP_SIZE = 2 * L_CODES + 1;
  /* maximum heap size */

  var MAX_BITS = 15;
  /* All codes must not exceed MAX_BITS bits */

  var Buf_size = 16;
  /* size of bit buffer in bi_buf */

  /* ===========================================================================
   * Constants
   */

  var MAX_BL_BITS = 7;
  /* Bit length codes must not exceed MAX_BL_BITS bits */

  var END_BLOCK = 256;
  /* end of block literal code */

  var REP_3_6 = 16;
  /* repeat previous bit length 3-6 times (2 bits of repeat count) */

  var REPZ_3_10 = 17;
  /* repeat a zero length 3-10 times  (3 bits of repeat count) */

  var REPZ_11_138 = 18;
  /* repeat a zero length 11-138 times  (7 bits of repeat count) */

  /* eslint-disable comma-spacing,array-bracket-spacing */

  var extra_lbits =
  /* extra bits for each length code */
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  var extra_dbits =
  /* extra bits for each distance code */
  [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  var extra_blbits =
  /* extra bits for each bit length code */
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
  var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  /* eslint-enable comma-spacing,array-bracket-spacing */

  /* The lengths of the bit length codes are sent in order of decreasing
   * probability, to avoid transmitting the lengths for unused bit length codes.
   */

  /* ===========================================================================
   * Local data. These are initialized only once.
   */
  // We pre-fill arrays with 0 to avoid uninitialized gaps

  var DIST_CODE_LEN = 512;
  /* see definition of array dist_code below */
  // !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1

  var static_ltree = new Array((L_CODES + 2) * 2);
  zero(static_ltree);
  /* The static literal tree. Since the bit lengths are imposed, there is no
   * need for the L_CODES extra codes used during heap construction. However
   * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
   * below).
   */

  var static_dtree = new Array(D_CODES * 2);
  zero(static_dtree);
  /* The static distance tree. (Actually a trivial tree since all codes use
   * 5 bits.)
   */

  var _dist_code = new Array(DIST_CODE_LEN);

  zero(_dist_code);
  /* Distance codes. The first 256 values correspond to the distances
   * 3 .. 258, the last 256 values correspond to the top 8 bits of
   * the 15 bit distances.
   */

  var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);

  zero(_length_code);
  /* length code for each normalized match length (0 == MIN_MATCH) */

  var base_length = new Array(LENGTH_CODES);
  zero(base_length);
  /* First normalized length for each code (0 = MIN_MATCH) */

  var base_dist = new Array(D_CODES);
  zero(base_dist);
  /* First normalized distance for each code (0 = distance of 1) */

  function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree;
    /* static tree or NULL */

    this.extra_bits = extra_bits;
    /* extra bits for each code or NULL */

    this.extra_base = extra_base;
    /* base index for extra_bits */

    this.elems = elems;
    /* max number of elements in the tree */

    this.max_length = max_length;
    /* max bit length for the codes */
    // show if `static_tree` has data or dummy - needed for monomorphic objects

    this.has_stree = static_tree && static_tree.length;
  }

  var static_l_desc;
  var static_d_desc;
  var static_bl_desc;

  function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree;
    /* the dynamic tree */

    this.max_code = 0;
    /* largest code with non zero frequency */

    this.stat_desc = stat_desc;
    /* the corresponding static tree */
  }

  function d_code(dist) {
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
  }
  /* ===========================================================================
   * Output a short LSB first on the stream.
   * IN assertion: there is enough room in pendingBuf.
   */


  function put_short(s, w) {
    //    put_byte(s, (uch)((w) & 0xff));
    //    put_byte(s, (uch)((ush)(w) >> 8));
    s.pending_buf[s.pending++] = w & 0xff;
    s.pending_buf[s.pending++] = w >>> 8 & 0xff;
  }
  /* ===========================================================================
   * Send a value on a given number of bits.
   * IN assertion: length <= 16 and value fits in length bits.
   */


  function send_bits(s, value, length) {
    if (s.bi_valid > Buf_size - length) {
      s.bi_buf |= value << s.bi_valid & 0xffff;
      put_short(s, s.bi_buf);
      s.bi_buf = value >> Buf_size - s.bi_valid;
      s.bi_valid += length - Buf_size;
    } else {
      s.bi_buf |= value << s.bi_valid & 0xffff;
      s.bi_valid += length;
    }
  }

  function send_code(s, c, tree) {
    send_bits(s, tree[c * 2]
    /*.Code*/
    , tree[c * 2 + 1]
    /*.Len*/
    );
  }
  /* ===========================================================================
   * Reverse the first len bits of a code, using straightforward code (a faster
   * method would use a table)
   * IN assertion: 1 <= len <= 15
   */


  function bi_reverse(code, len) {
    var res = 0;

    do {
      res |= code & 1;
      code >>>= 1;
      res <<= 1;
    } while (--len > 0);

    return res >>> 1;
  }
  /* ===========================================================================
   * Flush the bit buffer, keeping at most 7 bits in it.
   */


  function bi_flush(s) {
    if (s.bi_valid === 16) {
      put_short(s, s.bi_buf);
      s.bi_buf = 0;
      s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
      s.pending_buf[s.pending++] = s.bi_buf & 0xff;
      s.bi_buf >>= 8;
      s.bi_valid -= 8;
    }
  }
  /* ===========================================================================
   * Compute the optimal bit lengths for a tree and update the total bit length
   * for the current block.
   * IN assertion: the fields freq and dad are set, heap[heap_max] and
   *    above are the tree nodes sorted by increasing frequency.
   * OUT assertions: the field len is set to the optimal bit length, the
   *     array bl_count contains the frequencies for each bit length.
   *     The length opt_len is updated; static_len is also updated if stree is
   *     not null.
   */


  function gen_bitlen(s, desc) //    deflate_state *s;
  //    tree_desc *desc;    /* the tree descriptor */
  {
    var tree = desc.dyn_tree;
    var max_code = desc.max_code;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var extra = desc.stat_desc.extra_bits;
    var base = desc.stat_desc.extra_base;
    var max_length = desc.stat_desc.max_length;
    var h;
    /* heap index */

    var n, m;
    /* iterate over the tree elements */

    var bits;
    /* bit length */

    var xbits;
    /* extra bits */

    var f;
    /* frequency */

    var overflow = 0;
    /* number of elements with bit length too large */

    for (bits = 0; bits <= MAX_BITS; bits++) {
      s.bl_count[bits] = 0;
    }
    /* In a first pass, compute the optimal bit lengths (which may
     * overflow in the case of the bit length tree).
     */


    tree[s.heap[s.heap_max] * 2 + 1]
    /*.Len*/
    = 0;
    /* root of the heap */

    for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
      n = s.heap[h];
      bits = tree[tree[n * 2 + 1]
      /*.Dad*/
      * 2 + 1]
      /*.Len*/
      + 1;

      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }

      tree[n * 2 + 1]
      /*.Len*/
      = bits;
      /* We overwrite tree[n].Dad which is no longer needed */

      if (n > max_code) {
        continue;
      }
      /* not a leaf node */


      s.bl_count[bits]++;
      xbits = 0;

      if (n >= base) {
        xbits = extra[n - base];
      }

      f = tree[n * 2]
      /*.Freq*/
      ;
      s.opt_len += f * (bits + xbits);

      if (has_stree) {
        s.static_len += f * (stree[n * 2 + 1]
        /*.Len*/
        + xbits);
      }
    }

    if (overflow === 0) {
      return;
    } // Trace((stderr,"\nbit length overflow\n"));

    /* This happens for example on obj2 and pic of the Calgary corpus */

    /* Find the first bit length which could increase: */


    do {
      bits = max_length - 1;

      while (s.bl_count[bits] === 0) {
        bits--;
      }

      s.bl_count[bits]--;
      /* move one leaf down the tree */

      s.bl_count[bits + 1] += 2;
      /* move one overflow item as its brother */

      s.bl_count[max_length]--;
      /* The brother of the overflow item also moves one step up,
       * but this does not affect bl_count[max_length]
       */

      overflow -= 2;
    } while (overflow > 0);
    /* Now recompute all bit lengths, scanning in increasing frequency.
     * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
     * lengths instead of fixing only the wrong ones. This idea is taken
     * from 'ar' written by Haruhiko Okumura.)
     */


    for (bits = max_length; bits !== 0; bits--) {
      n = s.bl_count[bits];

      while (n !== 0) {
        m = s.heap[--h];

        if (m > max_code) {
          continue;
        }

        if (tree[m * 2 + 1]
        /*.Len*/
        !== bits) {
          // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
          s.opt_len += (bits - tree[m * 2 + 1]
          /*.Len*/
          ) * tree[m * 2]
          /*.Freq*/
          ;
          tree[m * 2 + 1]
          /*.Len*/
          = bits;
        }

        n--;
      }
    }
  }
  /* ===========================================================================
   * Generate the codes for a given tree and bit counts (which need not be
   * optimal).
   * IN assertion: the array bl_count contains the bit length statistics for
   * the given tree and the field len is set for all tree elements.
   * OUT assertion: the field code is set for all tree elements of non
   *     zero code length.
   */


  function gen_codes(tree, max_code, bl_count) //    ct_data *tree;             /* the tree to decorate */
  //    int max_code;              /* largest code with non zero frequency */
  //    ushf *bl_count;            /* number of codes at each bit length */
  {
    var next_code = new Array(MAX_BITS + 1);
    /* next code value for each bit length */

    var code = 0;
    /* running code value */

    var bits;
    /* bit index */

    var n;
    /* code index */

    /* The distribution counts are first used to generate the code values
     * without bit reversal.
     */

    for (bits = 1; bits <= MAX_BITS; bits++) {
      next_code[bits] = code = code + bl_count[bits - 1] << 1;
    }
    /* Check that the bit counts in bl_count are consistent. The last code
     * must be all ones.
     */
    //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
    //        "inconsistent bit counts");
    //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));


    for (n = 0; n <= max_code; n++) {
      var len = tree[n * 2 + 1]
      /*.Len*/
      ;

      if (len === 0) {
        continue;
      }
      /* Now reverse the bits */


      tree[n * 2]
      /*.Code*/
      = bi_reverse(next_code[len]++, len); //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
      //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
    }
  }
  /* ===========================================================================
   * Initialize the various 'constant' tables.
   */


  function tr_static_init() {
    var n;
    /* iterates over tree elements */

    var bits;
    /* bit counter */

    var length;
    /* length value */

    var code;
    /* code value */

    var dist;
    /* distance index */

    var bl_count = new Array(MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */
    // do check in _tr_init()
    //if (static_init_done) return;

    /* For some embedded targets, global variables are not initialized: */

    /*#ifdef NO_INIT_GLOBAL_POINTERS
      static_l_desc.static_tree = static_ltree;
      static_l_desc.extra_bits = extra_lbits;
      static_d_desc.static_tree = static_dtree;
      static_d_desc.extra_bits = extra_dbits;
      static_bl_desc.extra_bits = extra_blbits;
    #endif*/

    /* Initialize the mapping length (0..255) -> length code (0..28) */

    length = 0;

    for (code = 0; code < LENGTH_CODES - 1; code++) {
      base_length[code] = length;

      for (n = 0; n < 1 << extra_lbits[code]; n++) {
        _length_code[length++] = code;
      }
    } //Assert (length == 256, "tr_static_init: length != 256");

    /* Note that the length 255 (match length 258) can be represented
     * in two different ways: code 284 + 5 bits or code 285, so we
     * overwrite length_code[255] to use the best encoding:
     */


    _length_code[length - 1] = code;
    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */

    dist = 0;

    for (code = 0; code < 16; code++) {
      base_dist[code] = dist;

      for (n = 0; n < 1 << extra_dbits[code]; n++) {
        _dist_code[dist++] = code;
      }
    } //Assert (dist == 256, "tr_static_init: dist != 256");


    dist >>= 7;
    /* from now on, all distances are divided by 128 */

    for (; code < D_CODES; code++) {
      base_dist[code] = dist << 7;

      for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
        _dist_code[256 + dist++] = code;
      }
    } //Assert (dist == 256, "tr_static_init: 256+dist != 512");

    /* Construct the codes of the static literal tree */


    for (bits = 0; bits <= MAX_BITS; bits++) {
      bl_count[bits] = 0;
    }

    n = 0;

    while (n <= 143) {
      static_ltree[n * 2 + 1]
      /*.Len*/
      = 8;
      n++;
      bl_count[8]++;
    }

    while (n <= 255) {
      static_ltree[n * 2 + 1]
      /*.Len*/
      = 9;
      n++;
      bl_count[9]++;
    }

    while (n <= 279) {
      static_ltree[n * 2 + 1]
      /*.Len*/
      = 7;
      n++;
      bl_count[7]++;
    }

    while (n <= 287) {
      static_ltree[n * 2 + 1]
      /*.Len*/
      = 8;
      n++;
      bl_count[8]++;
    }
    /* Codes 286 and 287 do not exist, but we must include them in the
     * tree construction to get a canonical Huffman tree (longest code
     * all ones)
     */


    gen_codes(static_ltree, L_CODES + 1, bl_count);
    /* The static distance tree is trivial: */

    for (n = 0; n < D_CODES; n++) {
      static_dtree[n * 2 + 1]
      /*.Len*/
      = 5;
      static_dtree[n * 2]
      /*.Code*/
      = bi_reverse(n, 5);
    } // Now data ready and we can init static trees


    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS); //static_init_done = true;
  }
  /* ===========================================================================
   * Initialize a new block.
   */


  function init_block(s) {
    var n;
    /* iterates over tree elements */

    /* Initialize the trees. */

    for (n = 0; n < L_CODES; n++) {
      s.dyn_ltree[n * 2]
      /*.Freq*/
      = 0;
    }

    for (n = 0; n < D_CODES; n++) {
      s.dyn_dtree[n * 2]
      /*.Freq*/
      = 0;
    }

    for (n = 0; n < BL_CODES; n++) {
      s.bl_tree[n * 2]
      /*.Freq*/
      = 0;
    }

    s.dyn_ltree[END_BLOCK * 2]
    /*.Freq*/
    = 1;
    s.opt_len = s.static_len = 0;
    s.last_lit = s.matches = 0;
  }
  /* ===========================================================================
   * Flush the bit buffer and align the output on a byte boundary
   */


  function bi_windup(s) {
    if (s.bi_valid > 8) {
      put_short(s, s.bi_buf);
    } else if (s.bi_valid > 0) {
      //put_byte(s, (Byte)s->bi_buf);
      s.pending_buf[s.pending++] = s.bi_buf;
    }

    s.bi_buf = 0;
    s.bi_valid = 0;
  }
  /* ===========================================================================
   * Copy a stored block, storing first the length and its
   * one's complement if requested.
   */


  function copy_block(s, buf, len, header) //DeflateState *s;
  //charf    *buf;    /* the input data */
  //unsigned len;     /* its length */
  //int      header;  /* true if block header must be written */
  {
    bi_windup(s);
    /* align on byte boundary */

    if (header) {
      put_short(s, len);
      put_short(s, ~len);
    } //  while (len--) {
    //    put_byte(s, *buf++);
    //  }


    common.arraySet(s.pending_buf, s.window, buf, len, s.pending);
    s.pending += len;
  }
  /* ===========================================================================
   * Compares to subtrees, using the tree depth as tie breaker when
   * the subtrees have equal frequency. This minimizes the worst case length.
   */


  function smaller(tree, n, m, depth) {
    var _n2 = n * 2;

    var _m2 = m * 2;

    return tree[_n2]
    /*.Freq*/
    < tree[_m2]
    /*.Freq*/
    || tree[_n2]
    /*.Freq*/
    === tree[_m2]
    /*.Freq*/
    && depth[n] <= depth[m];
  }
  /* ===========================================================================
   * Restore the heap property by moving down the tree starting at node k,
   * exchanging a node with the smallest of its two sons if necessary, stopping
   * when the heap property is re-established (each father smaller than its
   * two sons).
   */


  function pqdownheap(s, tree, k) //    deflate_state *s;
  //    ct_data *tree;  /* the tree to restore */
  //    int k;               /* node to move down */
  {
    var v = s.heap[k];
    var j = k << 1;
    /* left son of k */

    while (j <= s.heap_len) {
      /* Set j to the smallest of the two sons: */
      if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
        j++;
      }
      /* Exit if v is smaller than both sons */


      if (smaller(tree, v, s.heap[j], s.depth)) {
        break;
      }
      /* Exchange v with the smallest son */


      s.heap[k] = s.heap[j];
      k = j;
      /* And continue down the tree, setting j to the left son of k */

      j <<= 1;
    }

    s.heap[k] = v;
  } // inlined manually
  // var SMALLEST = 1;

  /* ===========================================================================
   * Send the block data compressed using the given Huffman trees
   */


  function compress_block(s, ltree, dtree) //    deflate_state *s;
  //    const ct_data *ltree; /* literal tree */
  //    const ct_data *dtree; /* distance tree */
  {
    var dist;
    /* distance of matched string */

    var lc;
    /* match length or unmatched char (if dist == 0) */

    var lx = 0;
    /* running index in l_buf */

    var code;
    /* the code to send */

    var extra;
    /* number of extra bits to send */

    if (s.last_lit !== 0) {
      do {
        dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
        lc = s.pending_buf[s.l_buf + lx];
        lx++;

        if (dist === 0) {
          send_code(s, lc, ltree);
          /* send a literal byte */
          //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
        } else {
          /* Here, lc is the match length - MIN_MATCH */
          code = _length_code[lc];
          send_code(s, code + LITERALS + 1, ltree);
          /* send the length code */

          extra = extra_lbits[code];

          if (extra !== 0) {
            lc -= base_length[code];
            send_bits(s, lc, extra);
            /* send the extra length bits */
          }

          dist--;
          /* dist is now the match distance - 1 */

          code = d_code(dist); //Assert (code < D_CODES, "bad d_code");

          send_code(s, code, dtree);
          /* send the distance code */

          extra = extra_dbits[code];

          if (extra !== 0) {
            dist -= base_dist[code];
            send_bits(s, dist, extra);
            /* send the extra distance bits */
          }
        }
        /* literal or match pair ? */

        /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
        //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
        //       "pendingBuf overflow");

      } while (lx < s.last_lit);
    }

    send_code(s, END_BLOCK, ltree);
  }
  /* ===========================================================================
   * Construct one Huffman tree and assigns the code bit strings and lengths.
   * Update the total bit length for the current block.
   * IN assertion: the field freq is set for all tree elements.
   * OUT assertions: the fields len and code are set to the optimal bit length
   *     and corresponding code. The length opt_len is updated; static_len is
   *     also updated if stree is not null. The field max_code is set.
   */


  function build_tree(s, desc) //    deflate_state *s;
  //    tree_desc *desc; /* the tree descriptor */
  {
    var tree = desc.dyn_tree;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var elems = desc.stat_desc.elems;
    var n, m;
    /* iterate over heap elements */

    var max_code = -1;
    /* largest code with non zero frequency */

    var node;
    /* new node being created */

    /* Construct the initial heap, with least frequent element in
     * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
     * heap[0] is not used.
     */

    s.heap_len = 0;
    s.heap_max = HEAP_SIZE;

    for (n = 0; n < elems; n++) {
      if (tree[n * 2]
      /*.Freq*/
      !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
      } else {
        tree[n * 2 + 1]
        /*.Len*/
        = 0;
      }
    }
    /* The pkzip format requires that at least one distance code exists,
     * and that at least one bit should be sent even if there is only one
     * possible code. So to avoid special checks later on we force at least
     * two codes of non zero frequency.
     */


    while (s.heap_len < 2) {
      node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
      tree[node * 2]
      /*.Freq*/
      = 1;
      s.depth[node] = 0;
      s.opt_len--;

      if (has_stree) {
        s.static_len -= stree[node * 2 + 1]
        /*.Len*/
        ;
      }
      /* node is 0 or 1 so it does not have extra bits */

    }

    desc.max_code = max_code;
    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
     * establish sub-heaps of increasing lengths:
     */

    for (n = s.heap_len >> 1
    /*int /2*/
    ; n >= 1; n--) {
      pqdownheap(s, tree, n);
    }
    /* Construct the Huffman tree by repeatedly combining the least two
     * frequent nodes.
     */


    node = elems;
    /* next internal node of the tree */

    do {
      //pqremove(s, tree, n);  /* n = node of least frequency */

      /*** pqremove ***/
      n = s.heap[1
      /*SMALLEST*/
      ];
      s.heap[1
      /*SMALLEST*/
      ] = s.heap[s.heap_len--];
      pqdownheap(s, tree, 1
      /*SMALLEST*/
      );
      /***/

      m = s.heap[1
      /*SMALLEST*/
      ];
      /* m = node of next least frequency */

      s.heap[--s.heap_max] = n;
      /* keep the nodes sorted by frequency */

      s.heap[--s.heap_max] = m;
      /* Create a new node father of n and m */

      tree[node * 2]
      /*.Freq*/
      = tree[n * 2]
      /*.Freq*/
      + tree[m * 2]
      /*.Freq*/
      ;
      s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
      tree[n * 2 + 1]
      /*.Dad*/
      = tree[m * 2 + 1]
      /*.Dad*/
      = node;
      /* and insert the new node in the heap */

      s.heap[1
      /*SMALLEST*/
      ] = node++;
      pqdownheap(s, tree, 1
      /*SMALLEST*/
      );
    } while (s.heap_len >= 2);

    s.heap[--s.heap_max] = s.heap[1
    /*SMALLEST*/
    ];
    /* At this point, the fields freq and dad are set. We can now
     * generate the bit lengths.
     */

    gen_bitlen(s, desc);
    /* The field len is now set, we can generate the bit codes */

    gen_codes(tree, max_code, s.bl_count);
  }
  /* ===========================================================================
   * Scan a literal or distance tree to determine the frequencies of the codes
   * in the bit length tree.
   */


  function scan_tree(s, tree, max_code) //    deflate_state *s;
  //    ct_data *tree;   /* the tree to be scanned */
  //    int max_code;    /* and its largest code of non zero frequency */
  {
    var n;
    /* iterates over all tree elements */

    var prevlen = -1;
    /* last emitted length */

    var curlen;
    /* length of current code */

    var nextlen = tree[0 * 2 + 1]
    /*.Len*/
    ;
    /* length of next code */

    var count = 0;
    /* repeat count of the current code */

    var max_count = 7;
    /* max repeat count */

    var min_count = 4;
    /* min repeat count */

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }

    tree[(max_code + 1) * 2 + 1]
    /*.Len*/
    = 0xffff;
    /* guard */

    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1]
      /*.Len*/
      ;

      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        s.bl_tree[curlen * 2]
        /*.Freq*/
        += count;
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          s.bl_tree[curlen * 2] /*.Freq*/++;
        }

        s.bl_tree[REP_3_6 * 2] /*.Freq*/++;
      } else if (count <= 10) {
        s.bl_tree[REPZ_3_10 * 2] /*.Freq*/++;
      } else {
        s.bl_tree[REPZ_11_138 * 2] /*.Freq*/++;
      }

      count = 0;
      prevlen = curlen;

      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  /* ===========================================================================
   * Send a literal or distance tree in compressed form, using the codes in
   * bl_tree.
   */


  function send_tree(s, tree, max_code) //    deflate_state *s;
  //    ct_data *tree; /* the tree to be scanned */
  //    int max_code;       /* and its largest code of non zero frequency */
  {
    var n;
    /* iterates over all tree elements */

    var prevlen = -1;
    /* last emitted length */

    var curlen;
    /* length of current code */

    var nextlen = tree[0 * 2 + 1]
    /*.Len*/
    ;
    /* length of next code */

    var count = 0;
    /* repeat count of the current code */

    var max_count = 7;
    /* max repeat count */

    var min_count = 4;
    /* min repeat count */

    /* tree[max_code+1].Len = -1; */

    /* guard already set */

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }

    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1]
      /*.Len*/
      ;

      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        do {
          send_code(s, curlen, s.bl_tree);
        } while (--count !== 0);
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          send_code(s, curlen, s.bl_tree);
          count--;
        } //Assert(count >= 3 && count <= 6, " 3_6?");


        send_code(s, REP_3_6, s.bl_tree);
        send_bits(s, count - 3, 2);
      } else if (count <= 10) {
        send_code(s, REPZ_3_10, s.bl_tree);
        send_bits(s, count - 3, 3);
      } else {
        send_code(s, REPZ_11_138, s.bl_tree);
        send_bits(s, count - 11, 7);
      }

      count = 0;
      prevlen = curlen;

      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  /* ===========================================================================
   * Construct the Huffman tree for the bit lengths and return the index in
   * bl_order of the last bit length code to send.
   */


  function build_bl_tree(s) {
    var max_blindex;
    /* index of last bit length code of non zero freq */

    /* Determine the bit length frequencies for literal and distance trees */

    scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    /* Build the bit length tree: */

    build_tree(s, s.bl_desc);
    /* opt_len now includes the length of the tree representations, except
     * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
     */

    /* Determine the number of bit length codes to send. The pkzip format
     * requires that at least 4 bit length codes be sent. (appnote.txt says
     * 3 but the actual value used is 4.)
     */

    for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
      if (s.bl_tree[bl_order[max_blindex] * 2 + 1]
      /*.Len*/
      !== 0) {
        break;
      }
    }
    /* Update opt_len to include the bit length tree and counts */


    s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4; //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
    //        s->opt_len, s->static_len));

    return max_blindex;
  }
  /* ===========================================================================
   * Send the header for a block using dynamic Huffman trees: the counts, the
   * lengths of the bit length codes, the literal tree and the distance tree.
   * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
   */


  function send_all_trees(s, lcodes, dcodes, blcodes) //    deflate_state *s;
  //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
  {
    var rank;
    /* index in bl_order */
    //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
    //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
    //        "too many codes");
    //Tracev((stderr, "\nbl counts: "));

    send_bits(s, lcodes - 257, 5);
    /* not +255 as stated in appnote.txt */

    send_bits(s, dcodes - 1, 5);
    send_bits(s, blcodes - 4, 4);
    /* not -3 as stated in appnote.txt */

    for (rank = 0; rank < blcodes; rank++) {
      //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
      send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]
      /*.Len*/
      , 3);
    } //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));


    send_tree(s, s.dyn_ltree, lcodes - 1);
    /* literal tree */
    //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

    send_tree(s, s.dyn_dtree, dcodes - 1);
    /* distance tree */
    //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
  }
  /* ===========================================================================
   * Check if the data type is TEXT or BINARY, using the following algorithm:
   * - TEXT if the two conditions below are satisfied:
   *    a) There are no non-portable control characters belonging to the
   *       "black list" (0..6, 14..25, 28..31).
   *    b) There is at least one printable character belonging to the
   *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
   * - BINARY otherwise.
   * - The following partially-portable control characters form a
   *   "gray list" that is ignored in this detection algorithm:
   *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
   * IN assertion: the fields Freq of dyn_ltree are set.
   */


  function detect_data_type(s) {
    /* black_mask is the bit mask of black-listed bytes
     * set bits 0..6, 14..25, and 28..31
     * 0xf3ffc07f = binary 11110011111111111100000001111111
     */
    var black_mask = 0xf3ffc07f;
    var n;
    /* Check for non-textual ("black-listed") bytes. */

    for (n = 0; n <= 31; n++, black_mask >>>= 1) {
      if (black_mask & 1 && s.dyn_ltree[n * 2]
      /*.Freq*/
      !== 0) {
        return Z_BINARY;
      }
    }
    /* Check for textual ("white-listed") bytes. */


    if (s.dyn_ltree[9 * 2]
    /*.Freq*/
    !== 0 || s.dyn_ltree[10 * 2]
    /*.Freq*/
    !== 0 || s.dyn_ltree[13 * 2]
    /*.Freq*/
    !== 0) {
      return Z_TEXT;
    }

    for (n = 32; n < LITERALS; n++) {
      if (s.dyn_ltree[n * 2]
      /*.Freq*/
      !== 0) {
        return Z_TEXT;
      }
    }
    /* There are no "black-listed" or "white-listed" bytes:
     * this stream either is empty or has tolerated ("gray-listed") bytes only.
     */


    return Z_BINARY;
  }

  var static_init_done = false;
  /* ===========================================================================
   * Initialize the tree data structures for a new zlib stream.
   */

  function _tr_init(s) {
    if (!static_init_done) {
      tr_static_init();
      static_init_done = true;
    }

    s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    /* Initialize the first block of the first file: */

    init_block(s);
  }
  /* ===========================================================================
   * Send a stored block
   */


  function _tr_stored_block(s, buf, stored_len, last) //DeflateState *s;
  //charf *buf;       /* input block */
  //ulg stored_len;   /* length of input block */
  //int last;         /* one if this is the last block for a file */
  {
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
    /* send block type */

    copy_block(s, buf, stored_len, true);
    /* with header */
  }
  /* ===========================================================================
   * Send one empty static block to give enough lookahead for inflate.
   * This takes 10 bits, of which 7 may remain in the bit buffer.
   */


  function _tr_align(s) {
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
  }
  /* ===========================================================================
   * Determine the best encoding for the current block: dynamic trees, static
   * trees or store, and output the encoded block to the zip file.
   */


  function _tr_flush_block(s, buf, stored_len, last) //DeflateState *s;
  //charf *buf;       /* input block, or NULL if too old */
  //ulg stored_len;   /* length of input block */
  //int last;         /* one if this is the last block for a file */
  {
    var opt_lenb, static_lenb;
    /* opt_len and static_len in bytes */

    var max_blindex = 0;
    /* index of last bit length code of non zero freq */

    /* Build the Huffman trees unless a stored block is forced */

    if (s.level > 0) {
      /* Check if the file is binary or text */
      if (s.strm.data_type === Z_UNKNOWN) {
        s.strm.data_type = detect_data_type(s);
      }
      /* Construct the literal and distance trees */


      build_tree(s, s.l_desc); // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
      //        s->static_len));

      build_tree(s, s.d_desc); // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
      //        s->static_len));

      /* At this point, opt_len and static_len are the total bit lengths of
       * the compressed block data, excluding the tree representations.
       */

      /* Build the bit length tree for the above two trees, and get the index
       * in bl_order of the last bit length code to send.
       */

      max_blindex = build_bl_tree(s);
      /* Determine the best encoding. Compute the block lengths in bytes. */

      opt_lenb = s.opt_len + 3 + 7 >>> 3;
      static_lenb = s.static_len + 3 + 7 >>> 3; // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
      //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
      //        s->last_lit));

      if (static_lenb <= opt_lenb) {
        opt_lenb = static_lenb;
      }
    } else {
      // Assert(buf != (char*)0, "lost buf");
      opt_lenb = static_lenb = stored_len + 5;
      /* force a stored block */
    }

    if (stored_len + 4 <= opt_lenb && buf !== -1) {
      /* 4: two words for the lengths */

      /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
       * Otherwise we can't have processed more than WSIZE input bytes since
       * the last block flush, because compression would have been
       * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
       * transform a block into a stored block.
       */
      _tr_stored_block(s, buf, stored_len, last);
    } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
      send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
      compress_block(s, static_ltree, static_dtree);
    } else {
      send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
      send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
      compress_block(s, s.dyn_ltree, s.dyn_dtree);
    } // Assert (s->compressed_len == s->bits_sent, "bad compressed size");

    /* The above check is made mod 2^32, for files larger than 512 MB
     * and uLong implemented on 32 bits.
     */


    init_block(s);

    if (last) {
      bi_windup(s);
    } // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
    //       s->compressed_len-7*last));

  }
  /* ===========================================================================
   * Save the match info and tally the frequency counts. Return true if
   * the current block must be flushed.
   */


  function _tr_tally(s, dist, lc) //    deflate_state *s;
  //    unsigned dist;  /* distance of matched string */
  //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
  {
    //var out_length, in_length, dcode;
    s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 0xff;
    s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;
    s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
    s.last_lit++;

    if (dist === 0) {
      /* lc is the unmatched char */
      s.dyn_ltree[lc * 2] /*.Freq*/++;
    } else {
      s.matches++;
      /* Here, lc is the match length - MIN_MATCH */

      dist--;
      /* dist = match distance - 1 */
      //Assert((ush)dist < (ush)MAX_DIST(s) &&
      //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
      //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

      s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2] /*.Freq*/++;
      s.dyn_dtree[d_code(dist) * 2] /*.Freq*/++;
    } // (!) This block is disabled in zlib defaults,
    // don't enable it for binary compatibility
    //#ifdef TRUNCATE_BLOCK
    //  /* Try to guess if it is profitable to stop the current block here */
    //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
    //    /* Compute an upper bound for the compressed length */
    //    out_length = s.last_lit*8;
    //    in_length = s.strstart - s.block_start;
    //
    //    for (dcode = 0; dcode < D_CODES; dcode++) {
    //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
    //    }
    //    out_length >>>= 3;
    //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
    //    //       s->last_lit, in_length, out_length,
    //    //       100L - out_length*100L/in_length));
    //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
    //      return true;
    //    }
    //  }
    //#endif


    return s.last_lit === s.lit_bufsize - 1;
    /* We avoid equality with lit_bufsize because of wraparound at 64K
     * on 16 bit machines and because stored blocks are restricted to
     * 64K-1 bytes.
     */
  }

  var _tr_init_1 = _tr_init;
  var _tr_stored_block_1 = _tr_stored_block;
  var _tr_flush_block_1 = _tr_flush_block;
  var _tr_tally_1 = _tr_tally;
  var _tr_align_1 = _tr_align;
  var trees = {
    _tr_init: _tr_init_1,
    _tr_stored_block: _tr_stored_block_1,
    _tr_flush_block: _tr_flush_block_1,
    _tr_tally: _tr_tally_1,
    _tr_align: _tr_align_1
  };

  // It isn't worth it to make additional optimizations as in original.
  // Small size is preferable.
  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  function adler32(adler, buf, len, pos) {
    var s1 = adler & 0xffff | 0,
        s2 = adler >>> 16 & 0xffff | 0,
        n = 0;

    while (len !== 0) {
      // Set limit ~ twice less than 5552, to keep
      // s2 in 31-bits, because we force signed ints.
      // in other case %= will fail.
      n = len > 2000 ? 2000 : len;
      len -= n;

      do {
        s1 = s1 + buf[pos++] | 0;
        s2 = s2 + s1 | 0;
      } while (--n);

      s1 %= 65521;
      s2 %= 65521;
    }

    return s1 | s2 << 16 | 0;
  }

  var adler32_1 = adler32;

  // So write code to minimize size - no pregenerated tables
  // and array tools dependencies.
  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.
  // Use ordinary array, since untyped makes no boost here

  function makeTable() {
    var c,
        table = [];

    for (var n = 0; n < 256; n++) {
      c = n;

      for (var k = 0; k < 8; k++) {
        c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
      }

      table[n] = c;
    }

    return table;
  } // Create table on load. Just 255 signed longs. Not a problem.


  var crcTable = makeTable();

  function crc32(crc, buf, len, pos) {
    var t = crcTable,
        end = pos + len;
    crc ^= -1;

    for (var i = pos; i < end; i++) {
      crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
    }

    return crc ^ -1; // >>> 0;
  }

  var crc32_1 = crc32;

  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  var messages = {
    2: 'need dictionary',

    /* Z_NEED_DICT       2  */
    1: 'stream end',

    /* Z_STREAM_END      1  */
    0: '',

    /* Z_OK              0  */
    '-1': 'file error',

    /* Z_ERRNO         (-1) */
    '-2': 'stream error',

    /* Z_STREAM_ERROR  (-2) */
    '-3': 'data error',

    /* Z_DATA_ERROR    (-3) */
    '-4': 'insufficient memory',

    /* Z_MEM_ERROR     (-4) */
    '-5': 'buffer error',

    /* Z_BUF_ERROR     (-5) */
    '-6': 'incompatible version'
    /* Z_VERSION_ERROR (-6) */

  };

  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  /* Public constants ==========================================================*/

  /* ===========================================================================*/

  /* Allowed flush values; see deflate() and inflate() below for details */


  var Z_NO_FLUSH = 0;
  var Z_PARTIAL_FLUSH = 1; //var Z_SYNC_FLUSH    = 2;

  var Z_FULL_FLUSH = 3;
  var Z_FINISH = 4;
  var Z_BLOCK = 5; //var Z_TREES         = 6;

  /* Return codes for the compression/decompression functions. Negative values
   * are errors, positive values are used for special but normal events.
   */

  var Z_OK = 0;
  var Z_STREAM_END = 1; //var Z_NEED_DICT     = 2;
  //var Z_ERRNO         = -1;

  var Z_STREAM_ERROR = -2;
  var Z_DATA_ERROR = -3; //var Z_MEM_ERROR     = -4;

  var Z_BUF_ERROR = -5; //var Z_VERSION_ERROR = -6;

  /* compression levels */
  //var Z_NO_COMPRESSION      = 0;
  //var Z_BEST_SPEED          = 1;
  //var Z_BEST_COMPRESSION    = 9;

  var Z_DEFAULT_COMPRESSION = -1;
  var Z_FILTERED = 1;
  var Z_HUFFMAN_ONLY = 2;
  var Z_RLE = 3;
  var Z_FIXED$1 = 4;
  var Z_DEFAULT_STRATEGY = 0;
  /* Possible values of the data_type field (though see inflate()) */
  //var Z_BINARY              = 0;
  //var Z_TEXT                = 1;
  //var Z_ASCII               = 1; // = Z_TEXT

  var Z_UNKNOWN$1 = 2;
  /* The deflate compression method */

  var Z_DEFLATED = 8;
  /*============================================================================*/

  var MAX_MEM_LEVEL = 9;
  /* Maximum value for memLevel in deflateInit2 */

  var MAX_WBITS = 15;
  /* 32K LZ77 window */

  var DEF_MEM_LEVEL = 8;
  var LENGTH_CODES$1 = 29;
  /* number of length codes, not counting the special END_BLOCK code */

  var LITERALS$1 = 256;
  /* number of literal bytes 0..255 */

  var L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
  /* number of Literal or Length codes, including the END_BLOCK code */

  var D_CODES$1 = 30;
  /* number of distance codes */

  var BL_CODES$1 = 19;
  /* number of codes used to transfer the bit lengths */

  var HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
  /* maximum heap size */

  var MAX_BITS$1 = 15;
  /* All codes must not exceed MAX_BITS bits */

  var MIN_MATCH$1 = 3;
  var MAX_MATCH$1 = 258;
  var MIN_LOOKAHEAD = MAX_MATCH$1 + MIN_MATCH$1 + 1;
  var PRESET_DICT = 0x20;
  var INIT_STATE = 42;
  var EXTRA_STATE = 69;
  var NAME_STATE = 73;
  var COMMENT_STATE = 91;
  var HCRC_STATE = 103;
  var BUSY_STATE = 113;
  var FINISH_STATE = 666;
  var BS_NEED_MORE = 1;
  /* block not completed, need more input or more output */

  var BS_BLOCK_DONE = 2;
  /* block flush performed */

  var BS_FINISH_STARTED = 3;
  /* finish started, need only more output at next deflate */

  var BS_FINISH_DONE = 4;
  /* finish done, accept no more input or output */

  var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

  function err(strm, errorCode) {
    strm.msg = messages[errorCode];
    return errorCode;
  }

  function rank(f) {
    return (f << 1) - (f > 4 ? 9 : 0);
  }

  function zero$1(buf) {
    var len = buf.length;

    while (--len >= 0) {
      buf[len] = 0;
    }
  }
  /* =========================================================================
   * Flush as much pending output as possible. All deflate() output goes
   * through this function so some applications may wish to modify it
   * to avoid allocating a large strm->output buffer and copying into it.
   * (See also read_buf()).
   */


  function flush_pending(strm) {
    var s = strm.state; //_tr_flush_bits(s);

    var len = s.pending;

    if (len > strm.avail_out) {
      len = strm.avail_out;
    }

    if (len === 0) {
      return;
    }

    common.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;

    if (s.pending === 0) {
      s.pending_out = 0;
    }
  }

  function flush_block_only(s, last) {
    trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);

    s.block_start = s.strstart;
    flush_pending(s.strm);
  }

  function put_byte(s, b) {
    s.pending_buf[s.pending++] = b;
  }
  /* =========================================================================
   * Put a short in the pending buffer. The 16-bit value is put in MSB order.
   * IN assertion: the stream state is correct and there is enough room in
   * pending_buf.
   */


  function putShortMSB(s, b) {
    //  put_byte(s, (Byte)(b >> 8));
    //  put_byte(s, (Byte)(b & 0xff));
    s.pending_buf[s.pending++] = b >>> 8 & 0xff;
    s.pending_buf[s.pending++] = b & 0xff;
  }
  /* ===========================================================================
   * Read a new buffer from the current input stream, update the adler32
   * and total number of bytes read.  All deflate() input goes through
   * this function so some applications may wish to modify it to avoid
   * allocating a large strm->input buffer and copying from it.
   * (See also flush_pending()).
   */


  function read_buf(strm, buf, start, size) {
    var len = strm.avail_in;

    if (len > size) {
      len = size;
    }

    if (len === 0) {
      return 0;
    }

    strm.avail_in -= len; // zmemcpy(buf, strm->next_in, len);

    common.arraySet(buf, strm.input, strm.next_in, len, start);

    if (strm.state.wrap === 1) {
      strm.adler = adler32_1(strm.adler, buf, len, start);
    } else if (strm.state.wrap === 2) {
      strm.adler = crc32_1(strm.adler, buf, len, start);
    }

    strm.next_in += len;
    strm.total_in += len;
    return len;
  }
  /* ===========================================================================
   * Set match_start to the longest match starting at the given string and
   * return its length. Matches shorter or equal to prev_length are discarded,
   * in which case the result is equal to prev_length and match_start is
   * garbage.
   * IN assertions: cur_match is the head of the hash chain for the current
   *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
   * OUT assertion: the match length is not greater than s->lookahead.
   */


  function longest_match(s, cur_match) {
    var chain_length = s.max_chain_length;
    /* max hash chain length */

    var scan = s.strstart;
    /* current string */

    var match;
    /* matched string */

    var len;
    /* length of current match */

    var best_len = s.prev_length;
    /* best match length so far */

    var nice_match = s.nice_match;
    /* stop if match long enough */

    var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0
    /*NIL*/
    ;
    var _win = s.window; // shortcut

    var wmask = s.w_mask;
    var prev = s.prev;
    /* Stop when cur_match becomes <= limit. To simplify the code,
     * we prevent matches with the string of window index 0.
     */

    var strend = s.strstart + MAX_MATCH$1;
    var scan_end1 = _win[scan + best_len - 1];
    var scan_end = _win[scan + best_len];
    /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
     * It is easy to get rid of this optimization if necessary.
     */
    // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

    /* Do not waste too much time if we already have a good match: */

    if (s.prev_length >= s.good_match) {
      chain_length >>= 2;
    }
    /* Do not look for matches beyond the end of the input. This is necessary
     * to make deflate deterministic.
     */


    if (nice_match > s.lookahead) {
      nice_match = s.lookahead;
    } // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");


    do {
      // Assert(cur_match < s->strstart, "no future");
      match = cur_match;
      /* Skip to next match if the match length cannot increase
       * or if the match length is less than 2.  Note that the checks below
       * for insufficient lookahead only occur occasionally for performance
       * reasons.  Therefore uninitialized memory will be accessed, and
       * conditional jumps will be made that depend on those values.
       * However the length of the match is limited to the lookahead, so
       * the output of deflate is not affected by the uninitialized values.
       */

      if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
        continue;
      }
      /* The check at best_len-1 can be removed because it will be made
       * again later. (This heuristic is not always a win.)
       * It is not necessary to compare scan[2] and match[2] since they
       * are always equal when the other bytes match, given that
       * the hash keys are equal and that HASH_BITS >= 8.
       */


      scan += 2;
      match++; // Assert(*scan == *match, "match[2]?");

      /* We check for insufficient lookahead only every 8th comparison;
       * the 256th check will be made at strstart+258.
       */

      do {
        /*jshint noempty:false*/
      } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend); // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");


      len = MAX_MATCH$1 - (strend - scan);
      scan = strend - MAX_MATCH$1;

      if (len > best_len) {
        s.match_start = cur_match;
        best_len = len;

        if (len >= nice_match) {
          break;
        }

        scan_end1 = _win[scan + best_len - 1];
        scan_end = _win[scan + best_len];
      }
    } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

    if (best_len <= s.lookahead) {
      return best_len;
    }

    return s.lookahead;
  }
  /* ===========================================================================
   * Fill the window when the lookahead becomes insufficient.
   * Updates strstart and lookahead.
   *
   * IN assertion: lookahead < MIN_LOOKAHEAD
   * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
   *    At least one byte has been read, or avail_in == 0; reads are
   *    performed for at least two bytes (required for the zip translate_eol
   *    option -- not supported here).
   */


  function fill_window(s) {
    var _w_size = s.w_size;
    var p, n, m, more, str; //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

    do {
      more = s.window_size - s.lookahead - s.strstart; // JS ints have 32 bit, block below not needed

      /* Deal with !@#$% 64K limit: */
      //if (sizeof(int) <= 2) {
      //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
      //        more = wsize;
      //
      //  } else if (more == (unsigned)(-1)) {
      //        /* Very unlikely, but possible on 16 bit machine if
      //         * strstart == 0 && lookahead == 1 (input done a byte at time)
      //         */
      //        more--;
      //    }
      //}

      /* If the window is almost full and there is insufficient lookahead,
       * move the upper half to the lower one to make room in the upper half.
       */

      if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
        common.arraySet(s.window, s.window, _w_size, _w_size, 0);
        s.match_start -= _w_size;
        s.strstart -= _w_size;
        /* we now have strstart >= MAX_DIST */

        s.block_start -= _w_size;
        /* Slide the hash table (could be avoided with 32 bit values
         at the expense of memory usage). We slide even when level == 0
         to keep the hash table consistent if we switch back to level > 0
         later. (Using level 0 permanently is not an optimal usage of
         zlib, so we don't care about this pathological case.)
         */

        n = s.hash_size;
        p = n;

        do {
          m = s.head[--p];
          s.head[p] = m >= _w_size ? m - _w_size : 0;
        } while (--n);

        n = _w_size;
        p = n;

        do {
          m = s.prev[--p];
          s.prev[p] = m >= _w_size ? m - _w_size : 0;
          /* If n is not on any hash chain, prev[n] is garbage but
           * its value will never be used.
           */
        } while (--n);

        more += _w_size;
      }

      if (s.strm.avail_in === 0) {
        break;
      }
      /* If there was no sliding:
       *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
       *    more == window_size - lookahead - strstart
       * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
       * => more >= window_size - 2*WSIZE + 2
       * In the BIG_MEM or MMAP case (not yet supported),
       *   window_size == input_size + MIN_LOOKAHEAD  &&
       *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
       * Otherwise, window_size == 2*WSIZE so more >= 2.
       * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
       */
      //Assert(more >= 2, "more < 2");


      n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
      s.lookahead += n;
      /* Initialize the hash value now that we have some input: */

      if (s.lookahead + s.insert >= MIN_MATCH$1) {
        str = s.strstart - s.insert;
        s.ins_h = s.window[str];
        /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */

        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask; //#if MIN_MATCH != 3
        //        Call update_hash() MIN_MATCH-3 more times
        //#endif

        while (s.insert) {
          /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH$1 - 1]) & s.hash_mask;
          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
          s.insert--;

          if (s.lookahead + s.insert < MIN_MATCH$1) {
            break;
          }
        }
      }
      /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
       * but this is not important since only literal bytes will be emitted.
       */

    } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
    /* If the WIN_INIT bytes after the end of the current data have never been
     * written, then zero those bytes in order to avoid memory check reports of
     * the use of uninitialized (or uninitialised as Julian writes) bytes by
     * the longest match routines.  Update the high water mark for the next
     * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
     * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
     */
    //  if (s.high_water < s.window_size) {
    //    var curr = s.strstart + s.lookahead;
    //    var init = 0;
    //
    //    if (s.high_water < curr) {
    //      /* Previous high water mark below current data -- zero WIN_INIT
    //       * bytes or up to end of window, whichever is less.
    //       */
    //      init = s.window_size - curr;
    //      if (init > WIN_INIT)
    //        init = WIN_INIT;
    //      zmemzero(s->window + curr, (unsigned)init);
    //      s->high_water = curr + init;
    //    }
    //    else if (s->high_water < (ulg)curr + WIN_INIT) {
    //      /* High water mark at or above current data, but below current data
    //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
    //       * to end of window, whichever is less.
    //       */
    //      init = (ulg)curr + WIN_INIT - s->high_water;
    //      if (init > s->window_size - s->high_water)
    //        init = s->window_size - s->high_water;
    //      zmemzero(s->window + s->high_water, (unsigned)init);
    //      s->high_water += init;
    //    }
    //  }
    //
    //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
    //    "not enough room for search");

  }
  /* ===========================================================================
   * Copy without compression as much as possible from the input stream, return
   * the current block state.
   * This function does not insert new strings in the dictionary since
   * uncompressible data is probably not useful. This function is used
   * only for the level=0 compression option.
   * NOTE: this function should be optimized to avoid extra copying from
   * window to pending_buf.
   */


  function deflate_stored(s, flush) {
    /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
     * to pending_buf_size, and each stored block has a 5 byte header:
     */
    var max_block_size = 0xffff;

    if (max_block_size > s.pending_buf_size - 5) {
      max_block_size = s.pending_buf_size - 5;
    }
    /* Copy as much as possible from input to output: */


    for (;;) {
      /* Fill the window as much as possible: */
      if (s.lookahead <= 1) {
        //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
        //  s->block_start >= (long)s->w_size, "slide too late");
        //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
        //        s.block_start >= s.w_size)) {
        //        throw  new Error("slide too late");
        //      }
        fill_window(s);

        if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }

        if (s.lookahead === 0) {
          break;
        }
        /* flush the current block */

      } //Assert(s->block_start >= 0L, "block gone");
      //    if (s.block_start < 0) throw new Error("block gone");


      s.strstart += s.lookahead;
      s.lookahead = 0;
      /* Emit a stored block if pending_buf will be full: */

      var max_start = s.block_start + max_block_size;

      if (s.strstart === 0 || s.strstart >= max_start) {
        /* strstart == 0 is possible when wraparound on 16-bit machine */
        s.lookahead = s.strstart - max_start;
        s.strstart = max_start;
        /*** FLUSH_BLOCK(s, 0); ***/

        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
      /* Flush if we may have to slide, otherwise block_start may become
       * negative and the data will be gone:
       */


      if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
    }

    s.insert = 0;

    if (flush === Z_FINISH) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);

      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/


      return BS_FINISH_DONE;
    }

    if (s.strstart > s.block_start) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }

    return BS_NEED_MORE;
  }
  /* ===========================================================================
   * Compress as much as possible from the input stream, return the current
   * block state.
   * This function does not perform lazy evaluation of matches and inserts
   * new strings in the dictionary only for unmatched strings or for short
   * matches. It is used only for the fast compression options.
   */


  function deflate_fast(s, flush) {
    var hash_head;
    /* head of the hash chain */

    var bflush;
    /* set if current block must be flushed */

    for (;;) {
      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the next match, plus MIN_MATCH bytes to insert the
       * string following the next match.
       */
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);

        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }

        if (s.lookahead === 0) {
          break;
          /* flush the current block */
        }
      }
      /* Insert the string window[strstart .. strstart+2] in the
       * dictionary, and set hash_head to the head of the hash chain:
       */


      hash_head = 0
      /*NIL*/
      ;

      if (s.lookahead >= MIN_MATCH$1) {
        /*** INSERT_STRING(s, s.strstart, hash_head); ***/
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
        /***/
      }
      /* Find the longest match, discarding those <= prev_length.
       * At this point we have always match_length < MIN_MATCH
       */


      if (hash_head !== 0
      /*NIL*/
      && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
        /* To simplify the code, we prevent matches with the string
         * of window index 0 (in particular we have to avoid a match
         * of the string with itself at the start of the input file).
         */
        s.match_length = longest_match(s, hash_head);
        /* longest_match() sets match_start */
      }

      if (s.match_length >= MIN_MATCH$1) {
        // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

        /*** _tr_tally_dist(s, s.strstart - s.match_start,
                       s.match_length - MIN_MATCH, bflush); ***/
        bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH$1);
        s.lookahead -= s.match_length;
        /* Insert new strings in the hash table only if the match length
         * is not too large. This saves time but degrades compression.
         */

        if (s.match_length <= s.max_lazy_match
        /*max_insert_length*/
        && s.lookahead >= MIN_MATCH$1) {
          s.match_length--;
          /* string at strstart already in table */

          do {
            s.strstart++;
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/

            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/

            /* strstart never exceeds WSIZE-MAX_MATCH, so there are
             * always MIN_MATCH bytes ahead.
             */
          } while (--s.match_length !== 0);

          s.strstart++;
        } else {
          s.strstart += s.match_length;
          s.match_length = 0;
          s.ins_h = s.window[s.strstart];
          /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */

          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask; //#if MIN_MATCH != 3
          //                Call UPDATE_HASH() MIN_MATCH-3 more times
          //#endif

          /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
           * matter since it will be recomputed at next deflate call.
           */
        }
      } else {
        /* No match, output a literal byte */
        //Tracevv((stderr,"%c", s.window[s.strstart]));

        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
      }

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
    }

    s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;

    if (flush === Z_FINISH) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);

      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/


      return BS_FINISH_DONE;
    }

    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }

    return BS_BLOCK_DONE;
  }
  /* ===========================================================================
   * Same as above, but achieves better compression. We use a lazy
   * evaluation for matches: a match is finally adopted only if there is
   * no better match at the next window position.
   */


  function deflate_slow(s, flush) {
    var hash_head;
    /* head of hash chain */

    var bflush;
    /* set if current block must be flushed */

    var max_insert;
    /* Process the input block. */

    for (;;) {
      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the next match, plus MIN_MATCH bytes to insert the
       * string following the next match.
       */
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);

        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }

        if (s.lookahead === 0) {
          break;
        }
        /* flush the current block */

      }
      /* Insert the string window[strstart .. strstart+2] in the
       * dictionary, and set hash_head to the head of the hash chain:
       */


      hash_head = 0
      /*NIL*/
      ;

      if (s.lookahead >= MIN_MATCH$1) {
        /*** INSERT_STRING(s, s.strstart, hash_head); ***/
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
        /***/
      }
      /* Find the longest match, discarding those <= prev_length.
       */


      s.prev_length = s.match_length;
      s.prev_match = s.match_start;
      s.match_length = MIN_MATCH$1 - 1;

      if (hash_head !== 0
      /*NIL*/
      && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD
      /*MAX_DIST(s)*/
      ) {
          /* To simplify the code, we prevent matches with the string
           * of window index 0 (in particular we have to avoid a match
           * of the string with itself at the start of the input file).
           */
          s.match_length = longest_match(s, hash_head);
          /* longest_match() sets match_start */

          if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH$1 && s.strstart - s.match_start > 4096
          /*TOO_FAR*/
          )) {
            /* If prev_match is also MIN_MATCH, match_start is garbage
             * but we will ignore the current match anyway.
             */
            s.match_length = MIN_MATCH$1 - 1;
          }
        }
      /* If there was a match at the previous step and the current
       * match is not better, output the previous match:
       */


      if (s.prev_length >= MIN_MATCH$1 && s.match_length <= s.prev_length) {
        max_insert = s.strstart + s.lookahead - MIN_MATCH$1;
        /* Do not insert strings in hash table beyond this. */
        //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

        /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                       s.prev_length - MIN_MATCH, bflush);***/

        bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH$1);
        /* Insert in hash table all strings up to the end of the match.
         * strstart-1 and strstart are already inserted. If there is not
         * enough lookahead, the last two strings are not inserted in
         * the hash table.
         */

        s.lookahead -= s.prev_length - 1;
        s.prev_length -= 2;

        do {
          if (++s.strstart <= max_insert) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }
        } while (--s.prev_length !== 0);

        s.match_available = 0;
        s.match_length = MIN_MATCH$1 - 1;
        s.strstart++;

        if (bflush) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }
      } else if (s.match_available) {
        /* If there was no match at the previous position, output a
         * single literal. If there was a match but the current match
         * is longer, truncate the previous match to a single literal.
         */
        //Tracevv((stderr,"%c", s->window[s->strstart-1]));

        /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
        bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

        if (bflush) {
          /*** FLUSH_BLOCK_ONLY(s, 0) ***/
          flush_block_only(s, false);
          /***/
        }

        s.strstart++;
        s.lookahead--;

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      } else {
        /* There is no previous match to compare with, wait for
         * the next step to decide.
         */
        s.match_available = 1;
        s.strstart++;
        s.lookahead--;
      }
    } //Assert (flush != Z_NO_FLUSH, "no flush?");


    if (s.match_available) {
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));

      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
      s.match_available = 0;
    }

    s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;

    if (flush === Z_FINISH) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);

      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/


      return BS_FINISH_DONE;
    }

    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }

    return BS_BLOCK_DONE;
  }
  /* ===========================================================================
   * For Z_RLE, simply look for runs of bytes, generate matches only of distance
   * one.  Do not maintain a hash table.  (It will be regenerated if this run of
   * deflate switches away from Z_RLE.)
   */


  function deflate_rle(s, flush) {
    var bflush;
    /* set if current block must be flushed */

    var prev;
    /* byte at distance one to match */

    var scan, strend;
    /* scan goes up to strend for length of run */

    var _win = s.window;

    for (;;) {
      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the longest run, plus one for the unrolled loop.
       */
      if (s.lookahead <= MAX_MATCH$1) {
        fill_window(s);

        if (s.lookahead <= MAX_MATCH$1 && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }

        if (s.lookahead === 0) {
          break;
        }
        /* flush the current block */

      }
      /* See how many times the previous byte repeats */


      s.match_length = 0;

      if (s.lookahead >= MIN_MATCH$1 && s.strstart > 0) {
        scan = s.strstart - 1;
        prev = _win[scan];

        if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
          strend = s.strstart + MAX_MATCH$1;

          do {
            /*jshint noempty:false*/
          } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);

          s.match_length = MAX_MATCH$1 - (strend - scan);

          if (s.match_length > s.lookahead) {
            s.match_length = s.lookahead;
          }
        } //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");

      }
      /* Emit match if have run of MIN_MATCH or longer, else emit literal */


      if (s.match_length >= MIN_MATCH$1) {
        //check_match(s, s.strstart, s.strstart - 1, s.match_length);

        /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
        bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH$1);
        s.lookahead -= s.match_length;
        s.strstart += s.match_length;
        s.match_length = 0;
      } else {
        /* No match, output a literal byte */
        //Tracevv((stderr,"%c", s->window[s->strstart]));

        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
      }

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
    }

    s.insert = 0;

    if (flush === Z_FINISH) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);

      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/


      return BS_FINISH_DONE;
    }

    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }

    return BS_BLOCK_DONE;
  }
  /* ===========================================================================
   * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
   * (It will be regenerated if this run of deflate switches away from Huffman.)
   */


  function deflate_huff(s, flush) {
    var bflush;
    /* set if current block must be flushed */

    for (;;) {
      /* Make sure that we have a literal to write. */
      if (s.lookahead === 0) {
        fill_window(s);

        if (s.lookahead === 0) {
          if (flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }

          break;
          /* flush the current block */
        }
      }
      /* Output a literal byte */


      s.match_length = 0; //Tracevv((stderr,"%c", s->window[s->strstart]));

      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/

      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
    }

    s.insert = 0;

    if (flush === Z_FINISH) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);

      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/


      return BS_FINISH_DONE;
    }

    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }

    return BS_BLOCK_DONE;
  }
  /* Values for max_lazy_match, good_match and max_chain_length, depending on
   * the desired pack level (0..9). The values given below have been tuned to
   * exclude worst case performance for pathological files. Better values may be
   * found for specific files.
   */


  function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
  }

  var configuration_table;
  configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),
  /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),
  /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),
  /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),
  /* 3 */
  new Config(4, 4, 16, 16, deflate_slow),
  /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),
  /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),
  /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),
  /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),
  /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)
  /* 9 max compression */
  ];
  /* ===========================================================================
   * Initialize the "longest match" routines for a new zlib stream
   */

  function lm_init(s) {
    s.window_size = 2 * s.w_size;
    /*** CLEAR_HASH(s); ***/

    zero$1(s.head); // Fill with NIL (= 0);

    /* Set the default configuration parameters:
     */

    s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH$1 - 1;
    s.match_available = 0;
    s.ins_h = 0;
  }

  function DeflateState() {
    this.strm = null;
    /* pointer back to this zlib stream */

    this.status = 0;
    /* as the name implies */

    this.pending_buf = null;
    /* output still pending */

    this.pending_buf_size = 0;
    /* size of pending_buf */

    this.pending_out = 0;
    /* next pending byte to output to the stream */

    this.pending = 0;
    /* nb of bytes in the pending buffer */

    this.wrap = 0;
    /* bit 0 true for zlib, bit 1 true for gzip */

    this.gzhead = null;
    /* gzip header information to write */

    this.gzindex = 0;
    /* where in extra, name, or comment */

    this.method = Z_DEFLATED;
    /* can only be DEFLATED */

    this.last_flush = -1;
    /* value of flush param for previous deflate call */

    this.w_size = 0;
    /* LZ77 window size (32K by default) */

    this.w_bits = 0;
    /* log2(w_size)  (8..16) */

    this.w_mask = 0;
    /* w_size - 1 */

    this.window = null;
    /* Sliding window. Input bytes are read into the second half of the window,
     * and move to the first half later to keep a dictionary of at least wSize
     * bytes. With this organization, matches are limited to a distance of
     * wSize-MAX_MATCH bytes, but this ensures that IO is always
     * performed with a length multiple of the block size.
     */

    this.window_size = 0;
    /* Actual size of window: 2*wSize, except when the user input buffer
     * is directly used as sliding window.
     */

    this.prev = null;
    /* Link to older string with same hash index. To limit the size of this
     * array to 64K, this link is maintained only for the last 32K strings.
     * An index in this array is thus a window index modulo 32K.
     */

    this.head = null;
    /* Heads of the hash chains or NIL. */

    this.ins_h = 0;
    /* hash index of string to be inserted */

    this.hash_size = 0;
    /* number of elements in hash table */

    this.hash_bits = 0;
    /* log2(hash_size) */

    this.hash_mask = 0;
    /* hash_size-1 */

    this.hash_shift = 0;
    /* Number of bits by which ins_h must be shifted at each input
     * step. It must be such that after MIN_MATCH steps, the oldest
     * byte no longer takes part in the hash key, that is:
     *   hash_shift * MIN_MATCH >= hash_bits
     */

    this.block_start = 0;
    /* Window position at the beginning of the current output block. Gets
     * negative when the window is moved backwards.
     */

    this.match_length = 0;
    /* length of best match */

    this.prev_match = 0;
    /* previous match */

    this.match_available = 0;
    /* set if previous match exists */

    this.strstart = 0;
    /* start of string to insert */

    this.match_start = 0;
    /* start of matching string */

    this.lookahead = 0;
    /* number of valid bytes ahead in window */

    this.prev_length = 0;
    /* Length of the best match at previous step. Matches not greater than this
     * are discarded. This is used in the lazy match evaluation.
     */

    this.max_chain_length = 0;
    /* To speed up deflation, hash chains are never searched beyond this
     * length.  A higher limit improves compression ratio but degrades the
     * speed.
     */

    this.max_lazy_match = 0;
    /* Attempt to find a better match only when the current match is strictly
     * smaller than this value. This mechanism is used only for compression
     * levels >= 4.
     */
    // That's alias to max_lazy_match, don't use directly
    //this.max_insert_length = 0;

    /* Insert new strings in the hash table only if the match length is not
     * greater than this length. This saves time but degrades compression.
     * max_insert_length is used only for compression levels <= 3.
     */

    this.level = 0;
    /* compression level (1..9) */

    this.strategy = 0;
    /* favor or force Huffman coding*/

    this.good_match = 0;
    /* Use a faster search when the previous match is longer than this */

    this.nice_match = 0;
    /* Stop searching when current match exceeds this */

    /* used by trees.c: */

    /* Didn't use ct_data typedef below to suppress compiler warning */
    // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
    // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
    // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
    // Use flat array of DOUBLE size, with interleaved fata,
    // because JS does not support effective

    this.dyn_ltree = new common.Buf16(HEAP_SIZE$1 * 2);
    this.dyn_dtree = new common.Buf16((2 * D_CODES$1 + 1) * 2);
    this.bl_tree = new common.Buf16((2 * BL_CODES$1 + 1) * 2);
    zero$1(this.dyn_ltree);
    zero$1(this.dyn_dtree);
    zero$1(this.bl_tree);
    this.l_desc = null;
    /* desc. for literal tree */

    this.d_desc = null;
    /* desc. for distance tree */

    this.bl_desc = null;
    /* desc. for bit length tree */
    //ush bl_count[MAX_BITS+1];

    this.bl_count = new common.Buf16(MAX_BITS$1 + 1);
    /* number of codes at each bit length for an optimal tree */
    //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */

    this.heap = new common.Buf16(2 * L_CODES$1 + 1);
    /* heap used to build the Huffman trees */

    zero$1(this.heap);
    this.heap_len = 0;
    /* number of elements in the heap */

    this.heap_max = 0;
    /* element of largest frequency */

    /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
     * The same heap array is used to build all trees.
     */

    this.depth = new common.Buf16(2 * L_CODES$1 + 1); //uch depth[2*L_CODES+1];

    zero$1(this.depth);
    /* Depth of each subtree used as tie breaker for trees of equal frequency
     */

    this.l_buf = 0;
    /* buffer index for literals or lengths */

    this.lit_bufsize = 0;
    /* Size of match buffer for literals/lengths.  There are 4 reasons for
     * limiting lit_bufsize to 64K:
     *   - frequencies can be kept in 16 bit counters
     *   - if compression is not successful for the first block, all input
     *     data is still in the window so we can still emit a stored block even
     *     when input comes from standard input.  (This can also be done for
     *     all blocks if lit_bufsize is not greater than 32K.)
     *   - if compression is not successful for a file smaller than 64K, we can
     *     even emit a stored file instead of a stored block (saving 5 bytes).
     *     This is applicable only for zip (not gzip or zlib).
     *   - creating new Huffman trees less frequently may not provide fast
     *     adaptation to changes in the input data statistics. (Take for
     *     example a binary file with poorly compressible code followed by
     *     a highly compressible string table.) Smaller buffer sizes give
     *     fast adaptation but have of course the overhead of transmitting
     *     trees more frequently.
     *   - I can't count above 4
     */

    this.last_lit = 0;
    /* running index in l_buf */

    this.d_buf = 0;
    /* Buffer index for distances. To simplify the code, d_buf and l_buf have
     * the same number of elements. To use different lengths, an extra flag
     * array would be necessary.
     */

    this.opt_len = 0;
    /* bit length of current block with optimal trees */

    this.static_len = 0;
    /* bit length of current block with static trees */

    this.matches = 0;
    /* number of string matches in current block */

    this.insert = 0;
    /* bytes at end of window left to insert */

    this.bi_buf = 0;
    /* Output buffer. bits are inserted starting at the bottom (least
     * significant bits).
     */

    this.bi_valid = 0;
    /* Number of valid bits in bi_buf.  All bits above the last valid bit
     * are always zero.
     */
    // Used for window memory init. We safely ignore it for JS. That makes
    // sense only for pointers and memory check tools.
    //this.high_water = 0;

    /* High water mark offset in window for initialized bytes -- bytes above
     * this are set to zero in order to avoid memory check warnings when
     * longest match routines access bytes past the input.  This is then
     * updated to the new high water mark.
     */
  }

  function deflateResetKeep(strm) {
    var s;

    if (!strm || !strm.state) {
      return err(strm, Z_STREAM_ERROR);
    }

    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN$1;
    s = strm.state;
    s.pending = 0;
    s.pending_out = 0;

    if (s.wrap < 0) {
      s.wrap = -s.wrap;
      /* was made negative by deflate(..., Z_FINISH); */
    }

    s.status = s.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
    : 1; // adler32(0, Z_NULL, 0)

    s.last_flush = Z_NO_FLUSH;

    trees._tr_init(s);

    return Z_OK;
  }

  function deflateReset(strm) {
    var ret = deflateResetKeep(strm);

    if (ret === Z_OK) {
      lm_init(strm.state);
    }

    return ret;
  }

  function deflateSetHeader(strm, head) {
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }

    if (strm.state.wrap !== 2) {
      return Z_STREAM_ERROR;
    }

    strm.state.gzhead = head;
    return Z_OK;
  }

  function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
    if (!strm) {
      // === Z_NULL
      return Z_STREAM_ERROR;
    }

    var wrap = 1;

    if (level === Z_DEFAULT_COMPRESSION) {
      level = 6;
    }

    if (windowBits < 0) {
      /* suppress zlib wrapper */
      wrap = 0;
      windowBits = -windowBits;
    } else if (windowBits > 15) {
      wrap = 2;
      /* write gzip wrapper instead */

      windowBits -= 16;
    }

    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED$1) {
      return err(strm, Z_STREAM_ERROR);
    }

    if (windowBits === 8) {
      windowBits = 9;
    }
    /* until 256-byte window bug fixed */


    var s = new DeflateState();
    strm.state = s;
    s.strm = strm;
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH$1 - 1) / MIN_MATCH$1);
    s.window = new common.Buf8(s.w_size * 2);
    s.head = new common.Buf16(s.hash_size);
    s.prev = new common.Buf16(s.w_size); // Don't need mem init magic for JS.
    //s.high_water = 0;  /* nothing written to s->window yet */

    s.lit_bufsize = 1 << memLevel + 6;
    /* 16K elements by default */

    s.pending_buf_size = s.lit_bufsize * 4; //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
    //s->pending_buf = (uchf *) overlay;

    s.pending_buf = new common.Buf8(s.pending_buf_size); // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
    //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);

    s.d_buf = 1 * s.lit_bufsize; //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;

    s.l_buf = (1 + 2) * s.lit_bufsize;
    s.level = level;
    s.strategy = strategy;
    s.method = method;
    return deflateReset(strm);
  }

  function deflateInit(strm, level) {
    return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
  }

  function deflate(strm, flush) {
    var old_flush, s;
    var beg, val; // for gzip header write only

    if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
      return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
    }

    s = strm.state;

    if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
      return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
    }

    s.strm = strm;
    /* just in case */

    old_flush = s.last_flush;
    s.last_flush = flush;
    /* Write the header */

    if (s.status === INIT_STATE) {
      if (s.wrap === 2) {
        // GZIP header
        strm.adler = 0; //crc32(0L, Z_NULL, 0);

        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);

        if (!s.gzhead) {
          // s->gzhead == Z_NULL
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, OS_CODE);
          s.status = BUSY_STATE;
        } else {
          put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
          put_byte(s, s.gzhead.time & 0xff);
          put_byte(s, s.gzhead.time >> 8 & 0xff);
          put_byte(s, s.gzhead.time >> 16 & 0xff);
          put_byte(s, s.gzhead.time >> 24 & 0xff);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, s.gzhead.os & 0xff);

          if (s.gzhead.extra && s.gzhead.extra.length) {
            put_byte(s, s.gzhead.extra.length & 0xff);
            put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
          }

          if (s.gzhead.hcrc) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
          }

          s.gzindex = 0;
          s.status = EXTRA_STATE;
        }
      } else // DEFLATE header
        {
          var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
          var level_flags = -1;

          if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
            level_flags = 0;
          } else if (s.level < 6) {
            level_flags = 1;
          } else if (s.level === 6) {
            level_flags = 2;
          } else {
            level_flags = 3;
          }

          header |= level_flags << 6;

          if (s.strstart !== 0) {
            header |= PRESET_DICT;
          }

          header += 31 - header % 31;
          s.status = BUSY_STATE;
          putShortMSB(s, header);
          /* Save the adler32 of the preset dictionary: */

          if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 0xffff);
          }

          strm.adler = 1; // adler32(0L, Z_NULL, 0);
        }
    } //#ifdef GZIP


    if (s.status === EXTRA_STATE) {
      if (s.gzhead.extra
      /* != Z_NULL*/
      ) {
          beg = s.pending;
          /* start of bytes to update crc */

          while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              flush_pending(strm);
              beg = s.pending;

              if (s.pending === s.pending_buf_size) {
                break;
              }
            }

            put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
            s.gzindex++;
          }

          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }

          if (s.gzindex === s.gzhead.extra.length) {
            s.gzindex = 0;
            s.status = NAME_STATE;
          }
        } else {
        s.status = NAME_STATE;
      }
    }

    if (s.status === NAME_STATE) {
      if (s.gzhead.name
      /* != Z_NULL*/
      ) {
          beg = s.pending;
          /* start of bytes to update crc */
          //int val;

          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              flush_pending(strm);
              beg = s.pending;

              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            } // JS specific: little magic to add zero terminator to end of string


            if (s.gzindex < s.gzhead.name.length) {
              val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
            } else {
              val = 0;
            }

            put_byte(s, val);
          } while (val !== 0);

          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }

          if (val === 0) {
            s.gzindex = 0;
            s.status = COMMENT_STATE;
          }
        } else {
        s.status = COMMENT_STATE;
      }
    }

    if (s.status === COMMENT_STATE) {
      if (s.gzhead.comment
      /* != Z_NULL*/
      ) {
          beg = s.pending;
          /* start of bytes to update crc */
          //int val;

          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              flush_pending(strm);
              beg = s.pending;

              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            } // JS specific: little magic to add zero terminator to end of string


            if (s.gzindex < s.gzhead.comment.length) {
              val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
            } else {
              val = 0;
            }

            put_byte(s, val);
          } while (val !== 0);

          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }

          if (val === 0) {
            s.status = HCRC_STATE;
          }
        } else {
        s.status = HCRC_STATE;
      }
    }

    if (s.status === HCRC_STATE) {
      if (s.gzhead.hcrc) {
        if (s.pending + 2 > s.pending_buf_size) {
          flush_pending(strm);
        }

        if (s.pending + 2 <= s.pending_buf_size) {
          put_byte(s, strm.adler & 0xff);
          put_byte(s, strm.adler >> 8 & 0xff);
          strm.adler = 0; //crc32(0L, Z_NULL, 0);

          s.status = BUSY_STATE;
        }
      } else {
        s.status = BUSY_STATE;
      }
    } //#endif

    /* Flush as much pending output as possible */


    if (s.pending !== 0) {
      flush_pending(strm);

      if (strm.avail_out === 0) {
        /* Since avail_out is 0, deflate will be called again with
         * more output space, but possibly with both pending and
         * avail_in equal to zero. There won't be anything to do,
         * but this is not an error situation so make sure we
         * return OK instead of BUF_ERROR at next call of deflate:
         */
        s.last_flush = -1;
        return Z_OK;
      }
      /* Make sure there is something to do and avoid duplicate consecutive
       * flushes. For repeated and useless calls with Z_FINISH, we keep
       * returning Z_STREAM_END instead of Z_BUF_ERROR.
       */

    } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
      return err(strm, Z_BUF_ERROR);
    }
    /* User must not provide more input after the first FINISH: */


    if (s.status === FINISH_STATE && strm.avail_in !== 0) {
      return err(strm, Z_BUF_ERROR);
    }
    /* Start a new block or continue the current one.
     */


    if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
      var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);

      if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
        s.status = FINISH_STATE;
      }

      if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          /* avoid BUF_ERROR next call, see above */
        }

        return Z_OK;
        /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
         * of deflate should use the same flush parameter to make sure
         * that the flush is complete. So we don't have to output an
         * empty block here, this will be done at next call. This also
         * ensures that for a very small output buffer, we emit at most
         * one empty block.
         */
      }

      if (bstate === BS_BLOCK_DONE) {
        if (flush === Z_PARTIAL_FLUSH) {
          trees._tr_align(s);
        } else if (flush !== Z_BLOCK) {
          /* FULL_FLUSH or SYNC_FLUSH */
          trees._tr_stored_block(s, 0, 0, false);
          /* For a full flush, this empty block will be recognized
           * as a special marker by inflate_sync().
           */


          if (flush === Z_FULL_FLUSH) {
            /*** CLEAR_HASH(s); ***/

            /* forget history */
            zero$1(s.head); // Fill with NIL (= 0);

            if (s.lookahead === 0) {
              s.strstart = 0;
              s.block_start = 0;
              s.insert = 0;
            }
          }
        }

        flush_pending(strm);

        if (strm.avail_out === 0) {
          s.last_flush = -1;
          /* avoid BUF_ERROR at next call, see above */

          return Z_OK;
        }
      }
    } //Assert(strm->avail_out > 0, "bug2");
    //if (strm.avail_out <= 0) { throw new Error("bug2");}


    if (flush !== Z_FINISH) {
      return Z_OK;
    }

    if (s.wrap <= 0) {
      return Z_STREAM_END;
    }
    /* Write the trailer */


    if (s.wrap === 2) {
      put_byte(s, strm.adler & 0xff);
      put_byte(s, strm.adler >> 8 & 0xff);
      put_byte(s, strm.adler >> 16 & 0xff);
      put_byte(s, strm.adler >> 24 & 0xff);
      put_byte(s, strm.total_in & 0xff);
      put_byte(s, strm.total_in >> 8 & 0xff);
      put_byte(s, strm.total_in >> 16 & 0xff);
      put_byte(s, strm.total_in >> 24 & 0xff);
    } else {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 0xffff);
    }

    flush_pending(strm);
    /* If avail_out is zero, the application will call deflate again
     * to flush the rest.
     */

    if (s.wrap > 0) {
      s.wrap = -s.wrap;
    }
    /* write the trailer only once! */


    return s.pending !== 0 ? Z_OK : Z_STREAM_END;
  }

  function deflateEnd(strm) {
    var status;

    if (!strm
    /*== Z_NULL*/
    || !strm.state
    /*== Z_NULL*/
    ) {
        return Z_STREAM_ERROR;
      }

    status = strm.state.status;

    if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
      return err(strm, Z_STREAM_ERROR);
    }

    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
  }
  /* =========================================================================
   * Initializes the compression dictionary from the given byte
   * sequence without producing any compressed output.
   */


  function deflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var s;
    var str, n;
    var wrap;
    var avail;
    var next;
    var input;
    var tmpDict;

    if (!strm
    /*== Z_NULL*/
    || !strm.state
    /*== Z_NULL*/
    ) {
        return Z_STREAM_ERROR;
      }

    s = strm.state;
    wrap = s.wrap;

    if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
      return Z_STREAM_ERROR;
    }
    /* when using zlib wrappers, compute Adler-32 for provided dictionary */


    if (wrap === 1) {
      /* adler32(strm->adler, dictionary, dictLength); */
      strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
    }

    s.wrap = 0;
    /* avoid computing Adler-32 in read_buf */

    /* if dictionary would fill window, just replace the history */

    if (dictLength >= s.w_size) {
      if (wrap === 0) {
        /* already empty otherwise */

        /*** CLEAR_HASH(s); ***/
        zero$1(s.head); // Fill with NIL (= 0);

        s.strstart = 0;
        s.block_start = 0;
        s.insert = 0;
      }
      /* use the tail */
      // dictionary = dictionary.slice(dictLength - s.w_size);


      tmpDict = new common.Buf8(s.w_size);
      common.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
      dictionary = tmpDict;
      dictLength = s.w_size;
    }
    /* insert dictionary into window and hash */


    avail = strm.avail_in;
    next = strm.next_in;
    input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);

    while (s.lookahead >= MIN_MATCH$1) {
      str = s.strstart;
      n = s.lookahead - (MIN_MATCH$1 - 1);

      do {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH$1 - 1]) & s.hash_mask;
        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
      } while (--n);

      s.strstart = str;
      s.lookahead = MIN_MATCH$1 - 1;
      fill_window(s);
    }

    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH$1 - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK;
  }

  var deflateInit_1 = deflateInit;
  var deflateInit2_1 = deflateInit2;
  var deflateReset_1 = deflateReset;
  var deflateResetKeep_1 = deflateResetKeep;
  var deflateSetHeader_1 = deflateSetHeader;
  var deflate_2 = deflate;
  var deflateEnd_1 = deflateEnd;
  var deflateSetDictionary_1 = deflateSetDictionary;
  var deflateInfo = 'pako deflate (from Nodeca project)';
  /* Not implemented
  exports.deflateBound = deflateBound;
  exports.deflateCopy = deflateCopy;
  exports.deflateParams = deflateParams;
  exports.deflatePending = deflatePending;
  exports.deflatePrime = deflatePrime;
  exports.deflateTune = deflateTune;
  */

  var deflate_1 = {
    deflateInit: deflateInit_1,
    deflateInit2: deflateInit2_1,
    deflateReset: deflateReset_1,
    deflateResetKeep: deflateResetKeep_1,
    deflateSetHeader: deflateSetHeader_1,
    deflate: deflate_2,
    deflateEnd: deflateEnd_1,
    deflateSetDictionary: deflateSetDictionary_1,
    deflateInfo: deflateInfo
  };

  //
  // - apply(Array) can fail on Android 2.2
  // - apply(Uint8Array) can fail on iOS 5.1 Safari
  //


  var STR_APPLY_OK = true;
  var STR_APPLY_UIA_OK = true;

  try {
    String.fromCharCode.apply(null, [0]);
  } catch (__) {
    STR_APPLY_OK = false;
  }

  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (__) {
    STR_APPLY_UIA_OK = false;
  } // Table with utf8 lengths (calculated by first byte of sequence)
  // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
  // because max possible codepoint is 0x10ffff


  var _utf8len = new common.Buf8(256);

  for (var q = 0; q < 256; q++) {
    _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
  }

  _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
  // convert string to array (typed, when possible)

  var string2buf = function (str) {
    var buf,
        c,
        c2,
        m_pos,
        i,
        str_len = str.length,
        buf_len = 0; // count binary size

    for (m_pos = 0; m_pos < str_len; m_pos++) {
      c = str.charCodeAt(m_pos);

      if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);

        if ((c2 & 0xfc00) === 0xdc00) {
          c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
          m_pos++;
        }
      }

      buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    } // allocate buffer


    buf = new common.Buf8(buf_len); // convert

    for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
      c = str.charCodeAt(m_pos);

      if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);

        if ((c2 & 0xfc00) === 0xdc00) {
          c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
          m_pos++;
        }
      }

      if (c < 0x80) {
        /* one byte */
        buf[i++] = c;
      } else if (c < 0x800) {
        /* two bytes */
        buf[i++] = 0xC0 | c >>> 6;
        buf[i++] = 0x80 | c & 0x3f;
      } else if (c < 0x10000) {
        /* three bytes */
        buf[i++] = 0xE0 | c >>> 12;
        buf[i++] = 0x80 | c >>> 6 & 0x3f;
        buf[i++] = 0x80 | c & 0x3f;
      } else {
        /* four bytes */
        buf[i++] = 0xf0 | c >>> 18;
        buf[i++] = 0x80 | c >>> 12 & 0x3f;
        buf[i++] = 0x80 | c >>> 6 & 0x3f;
        buf[i++] = 0x80 | c & 0x3f;
      }
    }

    return buf;
  }; // Helper (used in 2 places)


  function buf2binstring(buf, len) {
    // On Chrome, the arguments in a function call that are allowed is `65534`.
    // If the length of the buffer is smaller than that, we can use this optimization,
    // otherwise we will take a slower path.
    if (len < 65534) {
      if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
        return String.fromCharCode.apply(null, common.shrinkBuf(buf, len));
      }
    }

    var result = '';

    for (var i = 0; i < len; i++) {
      result += String.fromCharCode(buf[i]);
    }

    return result;
  } // Convert byte array to binary string


  var buf2binstring_1 = function (buf) {
    return buf2binstring(buf, buf.length);
  }; // Convert binary string (typed, when possible)


  var binstring2buf = function (str) {
    var buf = new common.Buf8(str.length);

    for (var i = 0, len = buf.length; i < len; i++) {
      buf[i] = str.charCodeAt(i);
    }

    return buf;
  }; // convert array to string


  var buf2string = function (buf, max) {
    var i, out, c, c_len;
    var len = max || buf.length; // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.

    var utf16buf = new Array(len * 2);

    for (out = 0, i = 0; i < len;) {
      c = buf[i++]; // quick process ascii

      if (c < 0x80) {
        utf16buf[out++] = c;
        continue;
      }

      c_len = _utf8len[c]; // skip 5 & 6 byte codes

      if (c_len > 4) {
        utf16buf[out++] = 0xfffd;
        i += c_len - 1;
        continue;
      } // apply mask on first byte


      c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07; // join the rest

      while (c_len > 1 && i < len) {
        c = c << 6 | buf[i++] & 0x3f;
        c_len--;
      } // terminated by end of string?


      if (c_len > 1) {
        utf16buf[out++] = 0xfffd;
        continue;
      }

      if (c < 0x10000) {
        utf16buf[out++] = c;
      } else {
        c -= 0x10000;
        utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
        utf16buf[out++] = 0xdc00 | c & 0x3ff;
      }
    }

    return buf2binstring(utf16buf, out);
  }; // Calculate max possible position in utf8 buffer,
  // that will not break sequence. If that's not possible
  // - (very small limits) return max size as is.
  //
  // buf[] - utf8 bytes array
  // max   - length limit (mandatory);


  var utf8border = function (buf, max) {
    var pos;
    max = max || buf.length;

    if (max > buf.length) {
      max = buf.length;
    } // go back from last position, until start of sequence found


    pos = max - 1;

    while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
      pos--;
    } // Very small and broken sequence,
    // return max, because we should return something anyway.


    if (pos < 0) {
      return max;
    } // If we came to start of buffer - that means buffer is too small,
    // return max too.


    if (pos === 0) {
      return max;
    }

    return pos + _utf8len[buf[pos]] > max ? pos : max;
  };

  var strings = {
    string2buf: string2buf,
    buf2binstring: buf2binstring_1,
    binstring2buf: binstring2buf,
    buf2string: buf2string,
    utf8border: utf8border
  };

  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  function ZStream() {
    /* next input byte */
    this.input = null; // JS specific, because we have no pointers

    this.next_in = 0;
    /* number of bytes available at input */

    this.avail_in = 0;
    /* total number of input bytes read so far */

    this.total_in = 0;
    /* next output byte should be put there */

    this.output = null; // JS specific, because we have no pointers

    this.next_out = 0;
    /* remaining free space at output */

    this.avail_out = 0;
    /* total number of bytes output so far */

    this.total_out = 0;
    /* last error message, NULL if no error */

    this.msg = ''
    /*Z_NULL*/
    ;
    /* not visible by applications */

    this.state = null;
    /* best guess about the data type: binary or text */

    this.data_type = 2
    /*Z_UNKNOWN*/
    ;
    /* adler32 value of the uncompressed data */

    this.adler = 0;
  }

  var zstream = ZStream;

  var toString = Object.prototype.toString;
  /* Public constants ==========================================================*/

  /* ===========================================================================*/

  var Z_NO_FLUSH$1 = 0;
  var Z_FINISH$1 = 4;
  var Z_OK$1 = 0;
  var Z_STREAM_END$1 = 1;
  var Z_SYNC_FLUSH = 2;
  var Z_DEFAULT_COMPRESSION$1 = -1;
  var Z_DEFAULT_STRATEGY$1 = 0;
  var Z_DEFLATED$1 = 8;
  /* ===========================================================================*/

  /**
   * class Deflate
   *
   * Generic JS-style wrapper for zlib calls. If you don't need
   * streaming behaviour - use more simple functions: [[deflate]],
   * [[deflateRaw]] and [[gzip]].
   **/

  /* internal
   * Deflate.chunks -> Array
   *
   * Chunks of output data, if [[Deflate#onData]] not overridden.
   **/

  /**
   * Deflate.result -> Uint8Array|Array
   *
   * Compressed result, generated by default [[Deflate#onData]]
   * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
   * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
   * push a chunk with explicit flush (call [[Deflate#push]] with
   * `Z_SYNC_FLUSH` param).
   **/

  /**
   * Deflate.err -> Number
   *
   * Error code after deflate finished. 0 (Z_OK) on success.
   * You will not need it in real life, because deflate errors
   * are possible only on wrong options or bad `onData` / `onEnd`
   * custom handlers.
   **/

  /**
   * Deflate.msg -> String
   *
   * Error message, if [[Deflate.err]] != 0
   **/

  /**
   * new Deflate(options)
   * - options (Object): zlib deflate options.
   *
   * Creates new deflator instance with specified params. Throws exception
   * on bad params. Supported options:
   *
   * - `level`
   * - `windowBits`
   * - `memLevel`
   * - `strategy`
   * - `dictionary`
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information on these.
   *
   * Additional options, for internal needs:
   *
   * - `chunkSize` - size of generated data chunks (16K by default)
   * - `raw` (Boolean) - do raw deflate
   * - `gzip` (Boolean) - create gzip wrapper
   * - `to` (String) - if equal to 'string', then result will be "binary string"
   *    (each char code [0..255])
   * - `header` (Object) - custom header for gzip
   *   - `text` (Boolean) - true if compressed data believed to be text
   *   - `time` (Number) - modification time, unix timestamp
   *   - `os` (Number) - operation system code
   *   - `extra` (Array) - array of bytes with extra data (max 65536)
   *   - `name` (String) - file name (binary string)
   *   - `comment` (String) - comment (binary string)
   *   - `hcrc` (Boolean) - true if header crc should be added
   *
   * ##### Example:
   *
   * ```javascript
   * var pako = require('pako')
   *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
   *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
   *
   * var deflate = new pako.Deflate({ level: 3});
   *
   * deflate.push(chunk1, false);
   * deflate.push(chunk2, true);  // true -> last chunk
   *
   * if (deflate.err) { throw new Error(deflate.err); }
   *
   * console.log(deflate.result);
   * ```
   **/

  function Deflate(options) {
    if (!(this instanceof Deflate)) return new Deflate(options);
    this.options = common.assign({
      level: Z_DEFAULT_COMPRESSION$1,
      method: Z_DEFLATED$1,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: Z_DEFAULT_STRATEGY$1,
      to: ''
    }, options || {});
    var opt = this.options;

    if (opt.raw && opt.windowBits > 0) {
      opt.windowBits = -opt.windowBits;
    } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
      opt.windowBits += 16;
    }

    this.err = 0; // error code, if happens (0 = Z_OK)

    this.msg = ''; // error message

    this.ended = false; // used to avoid multiple onEnd() calls

    this.chunks = []; // chunks of compressed data

    this.strm = new zstream();
    this.strm.avail_out = 0;
    var status = deflate_1.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);

    if (status !== Z_OK$1) {
      throw new Error(messages[status]);
    }

    if (opt.header) {
      deflate_1.deflateSetHeader(this.strm, opt.header);
    }

    if (opt.dictionary) {
      var dict; // Convert data if needed

      if (typeof opt.dictionary === 'string') {
        // If we need to compress text, change encoding to utf8.
        dict = strings.string2buf(opt.dictionary);
      } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
        dict = new Uint8Array(opt.dictionary);
      } else {
        dict = opt.dictionary;
      }

      status = deflate_1.deflateSetDictionary(this.strm, dict);

      if (status !== Z_OK$1) {
        throw new Error(messages[status]);
      }

      this._dict_set = true;
    }
  }
  /**
   * Deflate#push(data[, mode]) -> Boolean
   * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
   *   converted to utf8 byte sequence.
   * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
   *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
   *
   * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
   * new compressed chunks. Returns `true` on success. The last data block must have
   * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
   * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
   * can use mode Z_SYNC_FLUSH, keeping the compression context.
   *
   * On fail call [[Deflate#onEnd]] with error code and return false.
   *
   * We strongly recommend to use `Uint8Array` on input for best speed (output
   * array format is detected automatically). Also, don't skip last param and always
   * use the same type in your code (boolean or number). That will improve JS speed.
   *
   * For regular `Array`-s make sure all elements are [0..255].
   *
   * ##### Example
   *
   * ```javascript
   * push(chunk, false); // push one of data chunks
   * ...
   * push(chunk, true);  // push last chunk
   * ```
   **/


  Deflate.prototype.push = function (data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;

    var status, _mode;

    if (this.ended) {
      return false;
    }

    _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH$1 : Z_NO_FLUSH$1; // Convert data if needed

    if (typeof data === 'string') {
      // If we need to compress text, change encoding to utf8.
      strm.input = strings.string2buf(data);
    } else if (toString.call(data) === '[object ArrayBuffer]') {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }

    strm.next_in = 0;
    strm.avail_in = strm.input.length;

    do {
      if (strm.avail_out === 0) {
        strm.output = new common.Buf8(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }

      status = deflate_1.deflate(strm, _mode);
      /* no bad return value */

      if (status !== Z_STREAM_END$1 && status !== Z_OK$1) {
        this.onEnd(status);
        this.ended = true;
        return false;
      }

      if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH$1 || _mode === Z_SYNC_FLUSH)) {
        if (this.options.to === 'string') {
          this.onData(strings.buf2binstring(common.shrinkBuf(strm.output, strm.next_out)));
        } else {
          this.onData(common.shrinkBuf(strm.output, strm.next_out));
        }
      }
    } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END$1); // Finalize on the last chunk.


    if (_mode === Z_FINISH$1) {
      status = deflate_1.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK$1;
    } // callback interim results if Z_SYNC_FLUSH.


    if (_mode === Z_SYNC_FLUSH) {
      this.onEnd(Z_OK$1);
      strm.avail_out = 0;
      return true;
    }

    return true;
  };
  /**
   * Deflate#onData(chunk) -> Void
   * - chunk (Uint8Array|Array|String): output data. Type of array depends
   *   on js engine support. When string output requested, each chunk
   *   will be string.
   *
   * By default, stores data blocks in `chunks[]` property and glue
   * those in `onEnd`. Override this handler, if you need another behaviour.
   **/


  Deflate.prototype.onData = function (chunk) {
    this.chunks.push(chunk);
  };
  /**
   * Deflate#onEnd(status) -> Void
   * - status (Number): deflate status. 0 (Z_OK) on success,
   *   other if not.
   *
   * Called once after you tell deflate that the input stream is
   * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
   * or if an error happened. By default - join collected chunks,
   * free memory and fill `results` / `err` properties.
   **/


  Deflate.prototype.onEnd = function (status) {
    // On success - join
    if (status === Z_OK$1) {
      if (this.options.to === 'string') {
        this.result = this.chunks.join('');
      } else {
        this.result = common.flattenChunks(this.chunks);
      }
    }

    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  /**
   * deflate(data[, options]) -> Uint8Array|Array|String
   * - data (Uint8Array|Array|String): input data to compress.
   * - options (Object): zlib deflate options.
   *
   * Compress `data` with deflate algorithm and `options`.
   *
   * Supported options are:
   *
   * - level
   * - windowBits
   * - memLevel
   * - strategy
   * - dictionary
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information on these.
   *
   * Sugar (options):
   *
   * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
   *   negative windowBits implicitly.
   * - `to` (String) - if equal to 'string', then result will be "binary string"
   *    (each char code [0..255])
   *
   * ##### Example:
   *
   * ```javascript
   * var pako = require('pako')
   *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
   *
   * console.log(pako.deflate(data));
   * ```
   **/


  function deflate$1(input, options) {
    var deflator = new Deflate(options);
    deflator.push(input, true); // That will never happens, if you don't cheat with options :)

    if (deflator.err) {
      throw deflator.msg || messages[deflator.err];
    }

    return deflator.result;
  }
  /**
   * deflateRaw(data[, options]) -> Uint8Array|Array|String
   * - data (Uint8Array|Array|String): input data to compress.
   * - options (Object): zlib deflate options.
   *
   * The same as [[deflate]], but creates raw data, without wrapper
   * (header and adler32 crc).
   **/


  function deflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return deflate$1(input, options);
  }
  /**
   * gzip(data[, options]) -> Uint8Array|Array|String
   * - data (Uint8Array|Array|String): input data to compress.
   * - options (Object): zlib deflate options.
   *
   * The same as [[deflate]], but create gzip wrapper instead of
   * deflate one.
   **/


  function gzip(input, options) {
    options = options || {};
    options.gzip = true;
    return deflate$1(input, options);
  }

  var Deflate_1 = Deflate;
  var deflate_2$1 = deflate$1;
  var deflateRaw_1 = deflateRaw;
  var gzip_1 = gzip;
  var deflate_1$1 = {
    Deflate: Deflate_1,
    deflate: deflate_2$1,
    deflateRaw: deflateRaw_1,
    gzip: gzip_1
  };

  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.
  // See state defs from inflate.js

  var BAD = 30;
  /* got a data error -- remain here until reset */

  var TYPE = 12;
  /* i: waiting for type bits, including last-flag bit */

  /*
     Decode literal, length, and distance codes and write out the resulting
     literal and match bytes until either not enough input or output is
     available, an end-of-block is encountered, or a data error is encountered.
     When large enough input and output buffers are supplied to inflate(), for
     example, a 16K input buffer and a 64K output buffer, more than 95% of the
     inflate execution time is spent in this routine.

     Entry assumptions:

          state.mode === LEN
          strm.avail_in >= 6
          strm.avail_out >= 258
          start >= strm.avail_out
          state.bits < 8

     On return, state.mode is one of:

          LEN -- ran out of enough output space or enough available input
          TYPE -- reached end of block code, inflate() to interpret next block
          BAD -- error in block data

     Notes:

      - The maximum input bits used by a length/distance pair is 15 bits for the
        length code, 5 bits for the length extra, 15 bits for the distance code,
        and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
        Therefore if strm.avail_in >= 6, then there is enough input to avoid
        checking for available input while decoding.

      - The maximum bytes that a single length/distance pair can output is 258
        bytes, which is the maximum length that can be coded.  inflate_fast()
        requires strm.avail_out >= 258 for each loop to avoid checking for
        output space.
   */

  var inffast = function inflate_fast(strm, start) {
    var state;

    var _in;
    /* local strm.input */


    var last;
    /* have enough input while in < last */

    var _out;
    /* local strm.output */


    var beg;
    /* inflate()'s initial strm.output */

    var end;
    /* while out < end, enough space available */
    //#ifdef INFLATE_STRICT

    var dmax;
    /* maximum distance from zlib header */
    //#endif

    var wsize;
    /* window size or zero if not using window */

    var whave;
    /* valid bytes in the window */

    var wnext;
    /* window write index */
    // Use `s_window` instead `window`, avoid conflict with instrumentation tools

    var s_window;
    /* allocated sliding window, if wsize != 0 */

    var hold;
    /* local strm.hold */

    var bits;
    /* local strm.bits */

    var lcode;
    /* local strm.lencode */

    var dcode;
    /* local strm.distcode */

    var lmask;
    /* mask for first level of length codes */

    var dmask;
    /* mask for first level of distance codes */

    var here;
    /* retrieved table entry */

    var op;
    /* code bits, operation, extra bits, or */

    /*  window position, window bytes to copy */

    var len;
    /* match length, unused bytes */

    var dist;
    /* match distance */

    var from;
    /* where to copy match from */

    var from_source;
    var input, output; // JS specific, because we have no pointers

    /* copy state to local variables */

    state = strm.state; //here = state.here;

    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257); //#ifdef INFLATE_STRICT

    dmax = state.dmax; //#endif

    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    /* decode literals and length/distances until end-of-block or not enough
       input data or output space */

    top: do {
      if (bits < 15) {
        hold += input[_in++] << bits;
        bits += 8;
        hold += input[_in++] << bits;
        bits += 8;
      }

      here = lcode[hold & lmask];

      dolen: for (;;) {
        // Goto emulation
        op = here >>> 24
        /*here.bits*/
        ;
        hold >>>= op;
        bits -= op;
        op = here >>> 16 & 0xff
        /*here.op*/
        ;

        if (op === 0) {
          /* literal */
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          output[_out++] = here & 0xffff
          /*here.val*/
          ;
        } else if (op & 16) {
          /* length base */
          len = here & 0xffff
          /*here.val*/
          ;
          op &= 15;
          /* number of extra bits */

          if (op) {
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
            }

            len += hold & (1 << op) - 1;
            hold >>>= op;
            bits -= op;
          } //Tracevv((stderr, "inflate:         length %u\n", len));


          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }

          here = dcode[hold & dmask];

          dodist: for (;;) {
            // goto emulation
            op = here >>> 24
            /*here.bits*/
            ;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff
            /*here.op*/
            ;

            if (op & 16) {
              /* distance base */
              dist = here & 0xffff
              /*here.val*/
              ;
              op &= 15;
              /* number of extra bits */

              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;

                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }
              }

              dist += hold & (1 << op) - 1; //#ifdef INFLATE_STRICT

              if (dist > dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break top;
              } //#endif


              hold >>>= op;
              bits -= op; //Tracevv((stderr, "inflate:         distance %u\n", dist));

              op = _out - beg;
              /* max distance in output */

              if (dist > op) {
                /* see if copy from window */
                op = dist - op;
                /* distance back in window */

                if (op > whave) {
                  if (state.sane) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break top;
                  } // (!) This block is disabled in zlib defaults,
                  // don't enable it for binary compatibility
                  //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                  //                if (len <= op - whave) {
                  //                  do {
                  //                    output[_out++] = 0;
                  //                  } while (--len);
                  //                  continue top;
                  //                }
                  //                len -= op - whave;
                  //                do {
                  //                  output[_out++] = 0;
                  //                } while (--op > whave);
                  //                if (op === 0) {
                  //                  from = _out - dist;
                  //                  do {
                  //                    output[_out++] = output[from++];
                  //                  } while (--len);
                  //                  continue top;
                  //                }
                  //#endif

                }

                from = 0; // window index

                from_source = s_window;

                if (wnext === 0) {
                  /* very common case */
                  from += wsize - op;

                  if (op < len) {
                    /* some from window */
                    len -= op;

                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);

                    from = _out - dist;
                    /* rest from output */

                    from_source = output;
                  }
                } else if (wnext < op) {
                  /* wrap around window */
                  from += wsize + wnext - op;
                  op -= wnext;

                  if (op < len) {
                    /* some from end of window */
                    len -= op;

                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);

                    from = 0;

                    if (wnext < len) {
                      /* some from start of window */
                      op = wnext;
                      len -= op;

                      do {
                        output[_out++] = s_window[from++];
                      } while (--op);

                      from = _out - dist;
                      /* rest from output */

                      from_source = output;
                    }
                  }
                } else {
                  /* contiguous in window */
                  from += wnext - op;

                  if (op < len) {
                    /* some from window */
                    len -= op;

                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);

                    from = _out - dist;
                    /* rest from output */

                    from_source = output;
                  }
                }

                while (len > 2) {
                  output[_out++] = from_source[from++];
                  output[_out++] = from_source[from++];
                  output[_out++] = from_source[from++];
                  len -= 3;
                }

                if (len) {
                  output[_out++] = from_source[from++];

                  if (len > 1) {
                    output[_out++] = from_source[from++];
                  }
                }
              } else {
                from = _out - dist;
                /* copy direct from output */

                do {
                  /* minimum length is three */
                  output[_out++] = output[from++];
                  output[_out++] = output[from++];
                  output[_out++] = output[from++];
                  len -= 3;
                } while (len > 2);

                if (len) {
                  output[_out++] = output[from++];

                  if (len > 1) {
                    output[_out++] = output[from++];
                  }
                }
              }
            } else if ((op & 64) === 0) {
              /* 2nd level distance code */
              here = dcode[(here & 0xffff) + (
              /*here.val*/
              hold & (1 << op) - 1)];
              continue dodist;
            } else {
              strm.msg = 'invalid distance code';
              state.mode = BAD;
              break top;
            }

            break; // need to emulate goto via "continue"
          }
        } else if ((op & 64) === 0) {
          /* 2nd level length code */
          here = lcode[(here & 0xffff) + (
          /*here.val*/
          hold & (1 << op) - 1)];
          continue dolen;
        } else if (op & 32) {
          /* end-of-block */
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.mode = TYPE;
          break top;
        } else {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break top;
        }

        break; // need to emulate goto via "continue"
      }
    } while (_in < last && _out < end);
    /* return unused bytes (on entry, bits < 8, so in won't go too far back) */


    len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    /* update state and return */

    strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
  };

  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.


  var MAXBITS = 15;
  var ENOUGH_LENS = 852;
  var ENOUGH_DISTS = 592; //var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

  var CODES = 0;
  var LENS = 1;
  var DISTS = 2;
  var lbase = [
  /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
  var lext = [
  /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
  var dbase = [
  /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
  var dext = [
  /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];

  var inftrees = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
    var bits = opts.bits; //here = opts.here; /* table entry for duplication */

    var len = 0;
    /* a code's length in bits */

    var sym = 0;
    /* index of code symbols */

    var min = 0,
        max = 0;
    /* minimum and maximum code lengths */

    var root = 0;
    /* number of index bits for root table */

    var curr = 0;
    /* number of index bits for current table */

    var drop = 0;
    /* code bits to drop for sub-table */

    var left = 0;
    /* number of prefix codes available */

    var used = 0;
    /* code entries in table used */

    var huff = 0;
    /* Huffman code */

    var incr;
    /* for incrementing code, index */

    var fill;
    /* index for replicating entries */

    var low;
    /* low bits for current root entry */

    var mask;
    /* mask for low root bits */

    var next;
    /* next available space in table */

    var base = null;
    /* base value table to use */

    var base_index = 0; //  var shoextra;    /* extra bits table to use */

    var end;
    /* use base and extra for symbol > end */

    var count = new common.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */

    var offs = new common.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */

    var extra = null;
    var extra_index = 0;
    var here_bits, here_op, here_val;
    /*
     Process a set of code lengths to create a canonical Huffman code.  The
     code lengths are lens[0..codes-1].  Each length corresponds to the
     symbols 0..codes-1.  The Huffman code is generated by first sorting the
     symbols by length from short to long, and retaining the symbol order
     for codes with equal lengths.  Then the code starts with all zero bits
     for the first code of the shortest length, and the codes are integer
     increments for the same length, and zeros are appended as the length
     increases.  For the deflate format, these bits are stored backwards
     from their more natural integer increment ordering, and so when the
     decoding tables are built in the large loop below, the integer codes
     are incremented backwards.
      This routine assumes, but does not check, that all of the entries in
     lens[] are in the range 0..MAXBITS.  The caller must assure this.
     1..MAXBITS is interpreted as that code length.  zero means that that
     symbol does not occur in this code.
      The codes are sorted by computing a count of codes for each length,
     creating from that a table of starting indices for each length in the
     sorted table, and then entering the symbols in order in the sorted
     table.  The sorted table is work[], with that space being provided by
     the caller.
      The length counts are used for other purposes as well, i.e. finding
     the minimum and maximum length codes, determining if there are any
     codes at all, checking for a valid set of lengths, and looking ahead
     at length counts to determine sub-table sizes when building the
     decoding tables.
     */

    /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */

    for (len = 0; len <= MAXBITS; len++) {
      count[len] = 0;
    }

    for (sym = 0; sym < codes; sym++) {
      count[lens[lens_index + sym]]++;
    }
    /* bound code lengths, force root to be within code lengths */


    root = bits;

    for (max = MAXBITS; max >= 1; max--) {
      if (count[max] !== 0) {
        break;
      }
    }

    if (root > max) {
      root = max;
    }

    if (max === 0) {
      /* no symbols to code at all */
      //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
      //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
      //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
      table[table_index++] = 1 << 24 | 64 << 16 | 0; //table.op[opts.table_index] = 64;
      //table.bits[opts.table_index] = 1;
      //table.val[opts.table_index++] = 0;

      table[table_index++] = 1 << 24 | 64 << 16 | 0;
      opts.bits = 1;
      return 0;
      /* no symbols, but wait for decoding to report error */
    }

    for (min = 1; min < max; min++) {
      if (count[min] !== 0) {
        break;
      }
    }

    if (root < min) {
      root = min;
    }
    /* check for an over-subscribed or incomplete set of lengths */


    left = 1;

    for (len = 1; len <= MAXBITS; len++) {
      left <<= 1;
      left -= count[len];

      if (left < 0) {
        return -1;
      }
      /* over-subscribed */

    }

    if (left > 0 && (type === CODES || max !== 1)) {
      return -1;
      /* incomplete set */
    }
    /* generate offsets into symbol table for each length for sorting */


    offs[1] = 0;

    for (len = 1; len < MAXBITS; len++) {
      offs[len + 1] = offs[len] + count[len];
    }
    /* sort symbols by length, by symbol order within each length */


    for (sym = 0; sym < codes; sym++) {
      if (lens[lens_index + sym] !== 0) {
        work[offs[lens[lens_index + sym]]++] = sym;
      }
    }
    /*
     Create and fill in decoding tables.  In this loop, the table being
     filled is at next and has curr index bits.  The code being used is huff
     with length len.  That code is converted to an index by dropping drop
     bits off of the bottom.  For codes where len is less than drop + curr,
     those top drop + curr - len bits are incremented through all values to
     fill the table with replicated entries.
      root is the number of index bits for the root table.  When len exceeds
     root, sub-tables are created pointed to by the root entry with an index
     of the low root bits of huff.  This is saved in low to check for when a
     new sub-table should be started.  drop is zero when the root table is
     being filled, and drop is root when sub-tables are being filled.
      When a new sub-table is needed, it is necessary to look ahead in the
     code lengths to determine what size sub-table is needed.  The length
     counts are used for this, and so count[] is decremented as codes are
     entered in the tables.
      used keeps track of how many table entries have been allocated from the
     provided *table space.  It is checked for LENS and DIST tables against
     the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
     the initial root table size constants.  See the comments in inftrees.h
     for more information.
      sym increments through all symbols, and the loop terminates when
     all codes of length max, i.e. all codes, have been processed.  This
     routine permits incomplete codes, so another loop after this one fills
     in the rest of the decoding tables with invalid code markers.
     */

    /* set up for code type */
    // poor man optimization - use if-else instead of switch,
    // to avoid deopts in old v8


    if (type === CODES) {
      base = extra = work;
      /* dummy value--not used */

      end = 19;
    } else if (type === LENS) {
      base = lbase;
      base_index -= 257;
      extra = lext;
      extra_index -= 257;
      end = 256;
    } else {
      /* DISTS */
      base = dbase;
      extra = dext;
      end = -1;
    }
    /* initialize opts for loop */


    huff = 0;
    /* starting code */

    sym = 0;
    /* starting code symbol */

    len = min;
    /* starting code length */

    next = table_index;
    /* current table to fill in */

    curr = root;
    /* current table index bits */

    drop = 0;
    /* current bits to drop from code for index */

    low = -1;
    /* trigger new sub-table when len > root */

    used = 1 << root;
    /* use root table entries */

    mask = used - 1;
    /* mask for comparing low */

    /* check available table space */

    if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
      return 1;
    }
    /* process all codes and make table entries */


    for (;;) {
      /* create table entry */
      here_bits = len - drop;

      if (work[sym] < end) {
        here_op = 0;
        here_val = work[sym];
      } else if (work[sym] > end) {
        here_op = extra[extra_index + work[sym]];
        here_val = base[base_index + work[sym]];
      } else {
        here_op = 32 + 64;
        /* end of block */

        here_val = 0;
      }
      /* replicate for those indices with low len bits equal to huff */


      incr = 1 << len - drop;
      fill = 1 << curr;
      min = fill;
      /* save offset to next table */

      do {
        fill -= incr;
        table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
      } while (fill !== 0);
      /* backwards increment the len-bit code huff */


      incr = 1 << len - 1;

      while (huff & incr) {
        incr >>= 1;
      }

      if (incr !== 0) {
        huff &= incr - 1;
        huff += incr;
      } else {
        huff = 0;
      }
      /* go to next symbol, update count, len */


      sym++;

      if (--count[len] === 0) {
        if (len === max) {
          break;
        }

        len = lens[lens_index + work[sym]];
      }
      /* create new sub-table if needed */


      if (len > root && (huff & mask) !== low) {
        /* if first time, transition to sub-tables */
        if (drop === 0) {
          drop = root;
        }
        /* increment past last table */


        next += min;
        /* here min is 1 << curr */

        /* determine length of next table */

        curr = len - drop;
        left = 1 << curr;

        while (curr + drop < max) {
          left -= count[curr + drop];

          if (left <= 0) {
            break;
          }

          curr++;
          left <<= 1;
        }
        /* check for enough space */


        used += 1 << curr;

        if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
          return 1;
        }
        /* point entry in root table to sub-table */


        low = huff & mask;
        /*table.op[low] = curr;
        table.bits[low] = root;
        table.val[low] = next - opts.table_index;*/

        table[low] = root << 24 | curr << 16 | next - table_index | 0;
      }
    }
    /* fill in remaining table entry if code is incomplete (guaranteed to have
     at most one remaining entry, since if the code is incomplete, the
     maximum code length that was allowed to get this far is one bit) */


    if (huff !== 0) {
      //table.op[next + huff] = 64;            /* invalid code marker */
      //table.bits[next + huff] = len - drop;
      //table.val[next + huff] = 0;
      table[next + huff] = len - drop << 24 | 64 << 16 | 0;
    }
    /* set return parameters */
    //opts.table_index += used;


    opts.bits = root;
    return 0;
  };

  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.


  var CODES$1 = 0;
  var LENS$1 = 1;
  var DISTS$1 = 2;
  /* Public constants ==========================================================*/

  /* ===========================================================================*/

  /* Allowed flush values; see deflate() and inflate() below for details */
  //var Z_NO_FLUSH      = 0;
  //var Z_PARTIAL_FLUSH = 1;
  //var Z_SYNC_FLUSH    = 2;
  //var Z_FULL_FLUSH    = 3;

  var Z_FINISH$2 = 4;
  var Z_BLOCK$1 = 5;
  var Z_TREES = 6;
  /* Return codes for the compression/decompression functions. Negative values
   * are errors, positive values are used for special but normal events.
   */

  var Z_OK$2 = 0;
  var Z_STREAM_END$2 = 1;
  var Z_NEED_DICT = 2; //var Z_ERRNO         = -1;

  var Z_STREAM_ERROR$1 = -2;
  var Z_DATA_ERROR$1 = -3;
  var Z_MEM_ERROR = -4;
  var Z_BUF_ERROR$1 = -5; //var Z_VERSION_ERROR = -6;

  /* The deflate compression method */

  var Z_DEFLATED$2 = 8;
  /* STATES ====================================================================*/

  /* ===========================================================================*/

  var HEAD = 1;
  /* i: waiting for magic header */

  var FLAGS = 2;
  /* i: waiting for method and flags (gzip) */

  var TIME = 3;
  /* i: waiting for modification time (gzip) */

  var OS = 4;
  /* i: waiting for extra flags and operating system (gzip) */

  var EXLEN = 5;
  /* i: waiting for extra length (gzip) */

  var EXTRA = 6;
  /* i: waiting for extra bytes (gzip) */

  var NAME = 7;
  /* i: waiting for end of file name (gzip) */

  var COMMENT = 8;
  /* i: waiting for end of comment (gzip) */

  var HCRC = 9;
  /* i: waiting for header crc (gzip) */

  var DICTID = 10;
  /* i: waiting for dictionary check value */

  var DICT = 11;
  /* waiting for inflateSetDictionary() call */

  var TYPE$1 = 12;
  /* i: waiting for type bits, including last-flag bit */

  var TYPEDO = 13;
  /* i: same, but skip check to exit inflate on new block */

  var STORED = 14;
  /* i: waiting for stored size (length and complement) */

  var COPY_ = 15;
  /* i/o: same as COPY below, but only first time in */

  var COPY = 16;
  /* i/o: waiting for input or output to copy stored block */

  var TABLE = 17;
  /* i: waiting for dynamic block table lengths */

  var LENLENS = 18;
  /* i: waiting for code length code lengths */

  var CODELENS = 19;
  /* i: waiting for length/lit and distance code lengths */

  var LEN_ = 20;
  /* i: same as LEN below, but only first time in */

  var LEN = 21;
  /* i: waiting for length/lit/eob code */

  var LENEXT = 22;
  /* i: waiting for length extra bits */

  var DIST = 23;
  /* i: waiting for distance code */

  var DISTEXT = 24;
  /* i: waiting for distance extra bits */

  var MATCH = 25;
  /* o: waiting for output space to copy string */

  var LIT = 26;
  /* o: waiting for output space to write literal */

  var CHECK = 27;
  /* i: waiting for 32-bit check value */

  var LENGTH = 28;
  /* i: waiting for 32-bit length (gzip) */

  var DONE = 29;
  /* finished check, done -- remain here until reset */

  var BAD$1 = 30;
  /* got a data error -- remain here until reset */

  var MEM = 31;
  /* got an inflate() memory error -- remain here until reset */

  var SYNC = 32;
  /* looking for synchronization bytes to restart inflate() */

  /* ===========================================================================*/

  var ENOUGH_LENS$1 = 852;
  var ENOUGH_DISTS$1 = 592; //var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

  var MAX_WBITS$1 = 15;
  /* 32K LZ77 window */

  var DEF_WBITS = MAX_WBITS$1;

  function zswap32(q) {
    return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
  }

  function InflateState() {
    this.mode = 0;
    /* current inflate mode */

    this.last = false;
    /* true if processing last block */

    this.wrap = 0;
    /* bit 0 true for zlib, bit 1 true for gzip */

    this.havedict = false;
    /* true if dictionary provided */

    this.flags = 0;
    /* gzip header method and flags (0 if zlib) */

    this.dmax = 0;
    /* zlib header max distance (INFLATE_STRICT) */

    this.check = 0;
    /* protected copy of check value */

    this.total = 0;
    /* protected copy of output count */
    // TODO: may be {}

    this.head = null;
    /* where to save gzip header information */

    /* sliding window */

    this.wbits = 0;
    /* log base 2 of requested window size */

    this.wsize = 0;
    /* window size or zero if not using window */

    this.whave = 0;
    /* valid bytes in the window */

    this.wnext = 0;
    /* window write index */

    this.window = null;
    /* allocated sliding window, if needed */

    /* bit accumulator */

    this.hold = 0;
    /* input bit accumulator */

    this.bits = 0;
    /* number of bits in "in" */

    /* for string and stored block copying */

    this.length = 0;
    /* literal or length of data to copy */

    this.offset = 0;
    /* distance back to copy string from */

    /* for table and code decoding */

    this.extra = 0;
    /* extra bits needed */

    /* fixed and dynamic code tables */

    this.lencode = null;
    /* starting table for length/literal codes */

    this.distcode = null;
    /* starting table for distance codes */

    this.lenbits = 0;
    /* index bits for lencode */

    this.distbits = 0;
    /* index bits for distcode */

    /* dynamic table building */

    this.ncode = 0;
    /* number of code length code lengths */

    this.nlen = 0;
    /* number of length code lengths */

    this.ndist = 0;
    /* number of distance code lengths */

    this.have = 0;
    /* number of code lengths in lens[] */

    this.next = null;
    /* next available space in codes[] */

    this.lens = new common.Buf16(320);
    /* temporary storage for code lengths */

    this.work = new common.Buf16(288);
    /* work area for code table building */

    /*
     because we don't have pointers in js, we use lencode and distcode directly
     as buffers so we don't need codes
    */
    //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */

    this.lendyn = null;
    /* dynamic table for length/literal codes (JS specific) */

    this.distdyn = null;
    /* dynamic table for distance codes (JS specific) */

    this.sane = 0;
    /* if false, allow invalid distance too far */

    this.back = 0;
    /* bits back of last unprocessed length/lit */

    this.was = 0;
    /* initial length of match */
  }

  function inflateResetKeep(strm) {
    var state;

    if (!strm || !strm.state) {
      return Z_STREAM_ERROR$1;
    }

    state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = '';
    /*Z_NULL*/

    if (state.wrap) {
      /* to support ill-conceived Java test suite */
      strm.adler = state.wrap & 1;
    }

    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.dmax = 32768;
    state.head = null
    /*Z_NULL*/
    ;
    state.hold = 0;
    state.bits = 0; //state.lencode = state.distcode = state.next = state.codes;

    state.lencode = state.lendyn = new common.Buf32(ENOUGH_LENS$1);
    state.distcode = state.distdyn = new common.Buf32(ENOUGH_DISTS$1);
    state.sane = 1;
    state.back = -1; //Tracev((stderr, "inflate: reset\n"));

    return Z_OK$2;
  }

  function inflateReset(strm) {
    var state;

    if (!strm || !strm.state) {
      return Z_STREAM_ERROR$1;
    }

    state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
  }

  function inflateReset2(strm, windowBits) {
    var wrap;
    var state;
    /* get the state */

    if (!strm || !strm.state) {
      return Z_STREAM_ERROR$1;
    }

    state = strm.state;
    /* extract wrap request from windowBits parameter */

    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    } else {
      wrap = (windowBits >> 4) + 1;

      if (windowBits < 48) {
        windowBits &= 15;
      }
    }
    /* set number of window bits, free window if different */


    if (windowBits && (windowBits < 8 || windowBits > 15)) {
      return Z_STREAM_ERROR$1;
    }

    if (state.window !== null && state.wbits !== windowBits) {
      state.window = null;
    }
    /* update state and reset the rest of it */


    state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
  }

  function inflateInit2(strm, windowBits) {
    var ret;
    var state;

    if (!strm) {
      return Z_STREAM_ERROR$1;
    } //strm.msg = Z_NULL;                 /* in case we return an error */


    state = new InflateState(); //if (state === Z_NULL) return Z_MEM_ERROR;
    //Tracev((stderr, "inflate: allocated\n"));

    strm.state = state;
    state.window = null
    /*Z_NULL*/
    ;
    ret = inflateReset2(strm, windowBits);

    if (ret !== Z_OK$2) {
      strm.state = null
      /*Z_NULL*/
      ;
    }

    return ret;
  }

  function inflateInit(strm) {
    return inflateInit2(strm, DEF_WBITS);
  }
  /*
   Return state with length and distance decoding tables and index sizes set to
   fixed code decoding.  Normally this returns fixed tables from inffixed.h.
   If BUILDFIXED is defined, then instead this routine builds the tables the
   first time it's called, and returns those tables the first time and
   thereafter.  This reduces the size of the code by about 2K bytes, in
   exchange for a little execution time.  However, BUILDFIXED should not be
   used for threaded applications, since the rewriting of the tables and virgin
   may not be thread-safe.
   */


  var virgin = true;
  var lenfix, distfix; // We have no pointers in JS, so keep tables separate

  function fixedtables(state) {
    /* build fixed huffman tables if first call (may not be thread safe) */
    if (virgin) {
      var sym;
      lenfix = new common.Buf32(512);
      distfix = new common.Buf32(32);
      /* literal/length table */

      sym = 0;

      while (sym < 144) {
        state.lens[sym++] = 8;
      }

      while (sym < 256) {
        state.lens[sym++] = 9;
      }

      while (sym < 280) {
        state.lens[sym++] = 7;
      }

      while (sym < 288) {
        state.lens[sym++] = 8;
      }

      inftrees(LENS$1, state.lens, 0, 288, lenfix, 0, state.work, {
        bits: 9
      });
      /* distance table */

      sym = 0;

      while (sym < 32) {
        state.lens[sym++] = 5;
      }

      inftrees(DISTS$1, state.lens, 0, 32, distfix, 0, state.work, {
        bits: 5
      });
      /* do this just once */

      virgin = false;
    }

    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
  }
  /*
   Update the window with the last wsize (normally 32K) bytes written before
   returning.  If window does not exist yet, create it.  This is only called
   when a window is already in use, or when output has been written during this
   inflate call, but the end of the deflate stream has not been reached yet.
   It is also called to create a window for dictionary data when a dictionary
   is loaded.

   Providing output buffers larger than 32K to inflate() should provide a speed
   advantage, since only the last 32K of output is copied to the sliding window
   upon return from inflate(), and since all distances after the first 32K of
   output will fall in the output data, making match copies simpler and faster.
   The advantage may be dependent on the size of the processor's data caches.
   */


  function updatewindow(strm, src, end, copy) {
    var dist;
    var state = strm.state;
    /* if it hasn't been done already, allocate space for the window */

    if (state.window === null) {
      state.wsize = 1 << state.wbits;
      state.wnext = 0;
      state.whave = 0;
      state.window = new common.Buf8(state.wsize);
    }
    /* copy state->wsize or less output bytes into the circular window */


    if (copy >= state.wsize) {
      common.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
      state.wnext = 0;
      state.whave = state.wsize;
    } else {
      dist = state.wsize - state.wnext;

      if (dist > copy) {
        dist = copy;
      } //zmemcpy(state->window + state->wnext, end - copy, dist);


      common.arraySet(state.window, src, end - copy, dist, state.wnext);
      copy -= dist;

      if (copy) {
        //zmemcpy(state->window, end - copy, copy);
        common.arraySet(state.window, src, end - copy, copy, 0);
        state.wnext = copy;
        state.whave = state.wsize;
      } else {
        state.wnext += dist;

        if (state.wnext === state.wsize) {
          state.wnext = 0;
        }

        if (state.whave < state.wsize) {
          state.whave += dist;
        }
      }
    }

    return 0;
  }

  function inflate(strm, flush) {
    var state;
    var input, output; // input/output buffers

    var next;
    /* next input INDEX */

    var put;
    /* next output INDEX */

    var have, left;
    /* available input and output */

    var hold;
    /* bit buffer */

    var bits;
    /* bits in bit buffer */

    var _in, _out;
    /* save starting available input and output */


    var copy;
    /* number of stored or match bytes to copy */

    var from;
    /* where to copy match bytes from */

    var from_source;
    var here = 0;
    /* current decoding table entry */

    var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
    //var last;                   /* parent table entry */

    var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)

    var len;
    /* length to copy for repeats, bits to drop */

    var ret;
    /* return code */

    var hbuf = new common.Buf8(4);
    /* buffer for gzip header crc calculation */

    var opts;
    var n; // temporary var for NEED_BITS

    var order =
    /* permutation of code lengths */
    [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

    if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
      return Z_STREAM_ERROR$1;
    }

    state = strm.state;

    if (state.mode === TYPE$1) {
      state.mode = TYPEDO;
    }
    /* skip check */
    //--- LOAD() ---


    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits; //---

    _in = have;
    _out = left;
    ret = Z_OK$2;

    inf_leave: // goto emulation
    for (;;) {
      switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          } //=== NEEDBITS(16);


          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          if (state.wrap & 2 && hold === 0x8b1f) {
            /* gzip header */
            state.check = 0
            /*crc32(0L, Z_NULL, 0)*/
            ; //=== CRC2(state.check, hold);

            hbuf[0] = hold & 0xff;
            hbuf[1] = hold >>> 8 & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0); //===//
            //=== INITBITS();

            hold = 0;
            bits = 0; //===//

            state.mode = FLAGS;
            break;
          }

          state.flags = 0;
          /* expect zlib header */

          if (state.head) {
            state.head.done = false;
          }

          if (!(state.wrap & 1) ||
          /* check if zlib header allowed */
          (((hold & 0xff) <<
          /*BITS(8)*/
          8) + (hold >> 8)) % 31) {
            strm.msg = 'incorrect header check';
            state.mode = BAD$1;
            break;
          }

          if ((hold & 0x0f) !==
          /*BITS(4)*/
          Z_DEFLATED$2) {
            strm.msg = 'unknown compression method';
            state.mode = BAD$1;
            break;
          } //--- DROPBITS(4) ---//


          hold >>>= 4;
          bits -= 4; //---//

          len = (hold & 0x0f) +
          /*BITS(4)*/
          8;

          if (state.wbits === 0) {
            state.wbits = len;
          } else if (len > state.wbits) {
            strm.msg = 'invalid window size';
            state.mode = BAD$1;
            break;
          }

          state.dmax = 1 << len; //Tracev((stderr, "inflate:   zlib header ok\n"));

          strm.adler = state.check = 1
          /*adler32(0L, Z_NULL, 0)*/
          ;
          state.mode = hold & 0x200 ? DICTID : TYPE$1; //=== INITBITS();

          hold = 0;
          bits = 0; //===//

          break;

        case FLAGS:
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          state.flags = hold;

          if ((state.flags & 0xff) !== Z_DEFLATED$2) {
            strm.msg = 'unknown compression method';
            state.mode = BAD$1;
            break;
          }

          if (state.flags & 0xe000) {
            strm.msg = 'unknown header flags set';
            state.mode = BAD$1;
            break;
          }

          if (state.head) {
            state.head.text = hold >> 8 & 1;
          }

          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = hold >>> 8 & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0); //===//
          } //=== INITBITS();


          hold = 0;
          bits = 0; //===//

          state.mode = TIME;

        /* falls through */

        case TIME:
          //=== NEEDBITS(32); */
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          if (state.head) {
            state.head.time = hold;
          }

          if (state.flags & 0x0200) {
            //=== CRC4(state.check, hold)
            hbuf[0] = hold & 0xff;
            hbuf[1] = hold >>> 8 & 0xff;
            hbuf[2] = hold >>> 16 & 0xff;
            hbuf[3] = hold >>> 24 & 0xff;
            state.check = crc32_1(state.check, hbuf, 4, 0); //===
          } //=== INITBITS();


          hold = 0;
          bits = 0; //===//

          state.mode = OS;

        /* falls through */

        case OS:
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          if (state.head) {
            state.head.xflags = hold & 0xff;
            state.head.os = hold >> 8;
          }

          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = hold >>> 8 & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0); //===//
          } //=== INITBITS();


          hold = 0;
          bits = 0; //===//

          state.mode = EXLEN;

        /* falls through */

        case EXLEN:
          if (state.flags & 0x0400) {
            //=== NEEDBITS(16); */
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            state.length = hold;

            if (state.head) {
              state.head.extra_len = hold;
            }

            if (state.flags & 0x0200) {
              //=== CRC2(state.check, hold);
              hbuf[0] = hold & 0xff;
              hbuf[1] = hold >>> 8 & 0xff;
              state.check = crc32_1(state.check, hbuf, 2, 0); //===//
            } //=== INITBITS();


            hold = 0;
            bits = 0; //===//
          } else if (state.head) {
            state.head.extra = null
            /*Z_NULL*/
            ;
          }

          state.mode = EXTRA;

        /* falls through */

        case EXTRA:
          if (state.flags & 0x0400) {
            copy = state.length;

            if (copy > have) {
              copy = have;
            }

            if (copy) {
              if (state.head) {
                len = state.head.extra_len - state.length;

                if (!state.head.extra) {
                  // Use untyped array for more convenient processing later
                  state.head.extra = new Array(state.head.extra_len);
                }

                common.arraySet(state.head.extra, input, next, // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len); //zmemcpy(state.head.extra + len, next,
                //        len + copy > state.head.extra_max ?
                //        state.head.extra_max - len : copy);
              }

              if (state.flags & 0x0200) {
                state.check = crc32_1(state.check, input, copy, next);
              }

              have -= copy;
              next += copy;
              state.length -= copy;
            }

            if (state.length) {
              break inf_leave;
            }
          }

          state.length = 0;
          state.mode = NAME;

        /* falls through */

        case NAME:
          if (state.flags & 0x0800) {
            if (have === 0) {
              break inf_leave;
            }

            copy = 0;

            do {
              // TODO: 2 or 1 bytes?
              len = input[next + copy++];
              /* use constant limit because in js we should not preallocate memory */

              if (state.head && len && state.length < 65536
              /*state.head.name_max*/
              ) {
                state.head.name += String.fromCharCode(len);
              }
            } while (len && copy < have);

            if (state.flags & 0x0200) {
              state.check = crc32_1(state.check, input, copy, next);
            }

            have -= copy;
            next += copy;

            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.name = null;
          }

          state.length = 0;
          state.mode = COMMENT;

        /* falls through */

        case COMMENT:
          if (state.flags & 0x1000) {
            if (have === 0) {
              break inf_leave;
            }

            copy = 0;

            do {
              len = input[next + copy++];
              /* use constant limit because in js we should not preallocate memory */

              if (state.head && len && state.length < 65536
              /*state.head.comm_max*/
              ) {
                state.head.comment += String.fromCharCode(len);
              }
            } while (len && copy < have);

            if (state.flags & 0x0200) {
              state.check = crc32_1(state.check, input, copy, next);
            }

            have -= copy;
            next += copy;

            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.comment = null;
          }

          state.mode = HCRC;

        /* falls through */

        case HCRC:
          if (state.flags & 0x0200) {
            //=== NEEDBITS(16); */
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            if (hold !== (state.check & 0xffff)) {
              strm.msg = 'header crc mismatch';
              state.mode = BAD$1;
              break;
            } //=== INITBITS();


            hold = 0;
            bits = 0; //===//
          }

          if (state.head) {
            state.head.hcrc = state.flags >> 9 & 1;
            state.head.done = true;
          }

          strm.adler = state.check = 0;
          state.mode = TYPE$1;
          break;

        case DICTID:
          //=== NEEDBITS(32); */
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          strm.adler = state.check = zswap32(hold); //=== INITBITS();

          hold = 0;
          bits = 0; //===//

          state.mode = DICT;

        /* falls through */

        case DICT:
          if (state.havedict === 0) {
            //--- RESTORE() ---
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits; //---

            return Z_NEED_DICT;
          }

          strm.adler = state.check = 1
          /*adler32(0L, Z_NULL, 0)*/
          ;
          state.mode = TYPE$1;

        /* falls through */

        case TYPE$1:
          if (flush === Z_BLOCK$1 || flush === Z_TREES) {
            break inf_leave;
          }

        /* falls through */

        case TYPEDO:
          if (state.last) {
            //--- BYTEBITS() ---//
            hold >>>= bits & 7;
            bits -= bits & 7; //---//

            state.mode = CHECK;
            break;
          } //=== NEEDBITS(3); */


          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          state.last = hold & 0x01
          /*BITS(1)*/
          ; //--- DROPBITS(1) ---//

          hold >>>= 1;
          bits -= 1; //---//

          switch (hold & 0x03) {
            /*BITS(2)*/
            case 0:
              /* stored block */
              //Tracev((stderr, "inflate:     stored block%s\n",
              //        state.last ? " (last)" : ""));
              state.mode = STORED;
              break;

            case 1:
              /* fixed block */
              fixedtables(state); //Tracev((stderr, "inflate:     fixed codes block%s\n",
              //        state.last ? " (last)" : ""));

              state.mode = LEN_;
              /* decode codes */

              if (flush === Z_TREES) {
                //--- DROPBITS(2) ---//
                hold >>>= 2;
                bits -= 2; //---//

                break inf_leave;
              }

              break;

            case 2:
              /* dynamic block */
              //Tracev((stderr, "inflate:     dynamic codes block%s\n",
              //        state.last ? " (last)" : ""));
              state.mode = TABLE;
              break;

            case 3:
              strm.msg = 'invalid block type';
              state.mode = BAD$1;
          } //--- DROPBITS(2) ---//


          hold >>>= 2;
          bits -= 2; //---//

          break;

        case STORED:
          //--- BYTEBITS() ---// /* go to byte boundary */
          hold >>>= bits & 7;
          bits -= bits & 7; //---//
          //=== NEEDBITS(32); */

          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
            strm.msg = 'invalid stored block lengths';
            state.mode = BAD$1;
            break;
          }

          state.length = hold & 0xffff; //Tracev((stderr, "inflate:       stored length %u\n",
          //        state.length));
          //=== INITBITS();

          hold = 0;
          bits = 0; //===//

          state.mode = COPY_;

          if (flush === Z_TREES) {
            break inf_leave;
          }

        /* falls through */

        case COPY_:
          state.mode = COPY;

        /* falls through */

        case COPY:
          copy = state.length;

          if (copy) {
            if (copy > have) {
              copy = have;
            }

            if (copy > left) {
              copy = left;
            }

            if (copy === 0) {
              break inf_leave;
            } //--- zmemcpy(put, next, copy); ---


            common.arraySet(output, input, next, copy, put); //---//

            have -= copy;
            next += copy;
            left -= copy;
            put += copy;
            state.length -= copy;
            break;
          } //Tracev((stderr, "inflate:       stored end\n"));


          state.mode = TYPE$1;
          break;

        case TABLE:
          //=== NEEDBITS(14); */
          while (bits < 14) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          state.nlen = (hold & 0x1f) +
          /*BITS(5)*/
          257; //--- DROPBITS(5) ---//

          hold >>>= 5;
          bits -= 5; //---//

          state.ndist = (hold & 0x1f) +
          /*BITS(5)*/
          1; //--- DROPBITS(5) ---//

          hold >>>= 5;
          bits -= 5; //---//

          state.ncode = (hold & 0x0f) +
          /*BITS(4)*/
          4; //--- DROPBITS(4) ---//

          hold >>>= 4;
          bits -= 4; //---//
          //#ifndef PKZIP_BUG_WORKAROUND

          if (state.nlen > 286 || state.ndist > 30) {
            strm.msg = 'too many length or distance symbols';
            state.mode = BAD$1;
            break;
          } //#endif
          //Tracev((stderr, "inflate:       table sizes ok\n"));


          state.have = 0;
          state.mode = LENLENS;

        /* falls through */

        case LENLENS:
          while (state.have < state.ncode) {
            //=== NEEDBITS(3);
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
            //--- DROPBITS(3) ---//

            hold >>>= 3;
            bits -= 3; //---//
          }

          while (state.have < 19) {
            state.lens[order[state.have++]] = 0;
          } // We have separate tables & no pointers. 2 commented lines below not needed.
          //state.next = state.codes;
          //state.lencode = state.next;
          // Switch to use dynamic table


          state.lencode = state.lendyn;
          state.lenbits = 7;
          opts = {
            bits: state.lenbits
          };
          ret = inftrees(CODES$1, state.lens, 0, 19, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;

          if (ret) {
            strm.msg = 'invalid code lengths set';
            state.mode = BAD$1;
            break;
          } //Tracev((stderr, "inflate:       code lengths ok\n"));


          state.have = 0;
          state.mode = CODELENS;

        /* falls through */

        case CODELENS:
          while (state.have < state.nlen + state.ndist) {
            for (;;) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              /*BITS(state.lenbits)*/

              here_bits = here >>> 24;
              here_op = here >>> 16 & 0xff;
              here_val = here & 0xffff;

              if (here_bits <= bits) {
                break;
              } //--- PULLBYTE() ---//


              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8; //---//
            }

            if (here_val < 16) {
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits; //---//

              state.lens[state.have++] = here_val;
            } else {
              if (here_val === 16) {
                //=== NEEDBITS(here.bits + 2);
                n = here_bits + 2;

                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//
                //--- DROPBITS(here.bits) ---//


                hold >>>= here_bits;
                bits -= here_bits; //---//

                if (state.have === 0) {
                  strm.msg = 'invalid bit length repeat';
                  state.mode = BAD$1;
                  break;
                }

                len = state.lens[state.have - 1];
                copy = 3 + (hold & 0x03); //BITS(2);
                //--- DROPBITS(2) ---//

                hold >>>= 2;
                bits -= 2; //---//
              } else if (here_val === 17) {
                //=== NEEDBITS(here.bits + 3);
                n = here_bits + 3;

                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//
                //--- DROPBITS(here.bits) ---//


                hold >>>= here_bits;
                bits -= here_bits; //---//

                len = 0;
                copy = 3 + (hold & 0x07); //BITS(3);
                //--- DROPBITS(3) ---//

                hold >>>= 3;
                bits -= 3; //---//
              } else {
                //=== NEEDBITS(here.bits + 7);
                n = here_bits + 7;

                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//
                //--- DROPBITS(here.bits) ---//


                hold >>>= here_bits;
                bits -= here_bits; //---//

                len = 0;
                copy = 11 + (hold & 0x7f); //BITS(7);
                //--- DROPBITS(7) ---//

                hold >>>= 7;
                bits -= 7; //---//
              }

              if (state.have + copy > state.nlen + state.ndist) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD$1;
                break;
              }

              while (copy--) {
                state.lens[state.have++] = len;
              }
            }
          }
          /* handle error breaks in while */


          if (state.mode === BAD$1) {
            break;
          }
          /* check for end-of-block code (better have one) */


          if (state.lens[256] === 0) {
            strm.msg = 'invalid code -- missing end-of-block';
            state.mode = BAD$1;
            break;
          }
          /* build code tables -- note: do not change the lenbits or distbits
             values here (9 and 6) without reading the comments in inftrees.h
             concerning the ENOUGH constants, which depend on those values */


          state.lenbits = 9;
          opts = {
            bits: state.lenbits
          };
          ret = inftrees(LENS$1, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts); // We have separate tables & no pointers. 2 commented lines below not needed.
          // state.next_index = opts.table_index;

          state.lenbits = opts.bits; // state.lencode = state.next;

          if (ret) {
            strm.msg = 'invalid literal/lengths set';
            state.mode = BAD$1;
            break;
          }

          state.distbits = 6; //state.distcode.copy(state.codes);
          // Switch to use dynamic table

          state.distcode = state.distdyn;
          opts = {
            bits: state.distbits
          };
          ret = inftrees(DISTS$1, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts); // We have separate tables & no pointers. 2 commented lines below not needed.
          // state.next_index = opts.table_index;

          state.distbits = opts.bits; // state.distcode = state.next;

          if (ret) {
            strm.msg = 'invalid distances set';
            state.mode = BAD$1;
            break;
          } //Tracev((stderr, 'inflate:       codes ok\n'));


          state.mode = LEN_;

          if (flush === Z_TREES) {
            break inf_leave;
          }

        /* falls through */

        case LEN_:
          state.mode = LEN;

        /* falls through */

        case LEN:
          if (have >= 6 && left >= 258) {
            //--- RESTORE() ---
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits; //---

            inffast(strm, _out); //--- LOAD() ---

            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits; //---

            if (state.mode === TYPE$1) {
              state.back = -1;
            }

            break;
          }

          state.back = 0;

          for (;;) {
            here = state.lencode[hold & (1 << state.lenbits) - 1];
            /*BITS(state.lenbits)*/

            here_bits = here >>> 24;
            here_op = here >>> 16 & 0xff;
            here_val = here & 0xffff;

            if (here_bits <= bits) {
              break;
            } //--- PULLBYTE() ---//


            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8; //---//
          }

          if (here_op && (here_op & 0xf0) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;

            for (;;) {
              here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >>
              /*BITS(last.bits + last.op)*/
              last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 0xff;
              here_val = here & 0xffff;

              if (last_bits + here_bits <= bits) {
                break;
              } //--- PULLBYTE() ---//


              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8; //---//
            } //--- DROPBITS(last.bits) ---//


            hold >>>= last_bits;
            bits -= last_bits; //---//

            state.back += last_bits;
          } //--- DROPBITS(here.bits) ---//


          hold >>>= here_bits;
          bits -= here_bits; //---//

          state.back += here_bits;
          state.length = here_val;

          if (here_op === 0) {
            //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            state.mode = LIT;
            break;
          }

          if (here_op & 32) {
            //Tracevv((stderr, "inflate:         end of block\n"));
            state.back = -1;
            state.mode = TYPE$1;
            break;
          }

          if (here_op & 64) {
            strm.msg = 'invalid literal/length code';
            state.mode = BAD$1;
            break;
          }

          state.extra = here_op & 15;
          state.mode = LENEXT;

        /* falls through */

        case LENEXT:
          if (state.extra) {
            //=== NEEDBITS(state.extra);
            n = state.extra;

            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            state.length += hold & (1 << state.extra) - 1
            /*BITS(state.extra)*/
            ; //--- DROPBITS(state.extra) ---//

            hold >>>= state.extra;
            bits -= state.extra; //---//

            state.back += state.extra;
          } //Tracevv((stderr, "inflate:         length %u\n", state.length));


          state.was = state.length;
          state.mode = DIST;

        /* falls through */

        case DIST:
          for (;;) {
            here = state.distcode[hold & (1 << state.distbits) - 1];
            /*BITS(state.distbits)*/

            here_bits = here >>> 24;
            here_op = here >>> 16 & 0xff;
            here_val = here & 0xffff;

            if (here_bits <= bits) {
              break;
            } //--- PULLBYTE() ---//


            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8; //---//
          }

          if ((here_op & 0xf0) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;

            for (;;) {
              here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >>
              /*BITS(last.bits + last.op)*/
              last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 0xff;
              here_val = here & 0xffff;

              if (last_bits + here_bits <= bits) {
                break;
              } //--- PULLBYTE() ---//


              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8; //---//
            } //--- DROPBITS(last.bits) ---//


            hold >>>= last_bits;
            bits -= last_bits; //---//

            state.back += last_bits;
          } //--- DROPBITS(here.bits) ---//


          hold >>>= here_bits;
          bits -= here_bits; //---//

          state.back += here_bits;

          if (here_op & 64) {
            strm.msg = 'invalid distance code';
            state.mode = BAD$1;
            break;
          }

          state.offset = here_val;
          state.extra = here_op & 15;
          state.mode = DISTEXT;

        /* falls through */

        case DISTEXT:
          if (state.extra) {
            //=== NEEDBITS(state.extra);
            n = state.extra;

            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            state.offset += hold & (1 << state.extra) - 1
            /*BITS(state.extra)*/
            ; //--- DROPBITS(state.extra) ---//

            hold >>>= state.extra;
            bits -= state.extra; //---//

            state.back += state.extra;
          } //#ifdef INFLATE_STRICT


          if (state.offset > state.dmax) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD$1;
            break;
          } //#endif
          //Tracevv((stderr, "inflate:         distance %u\n", state.offset));


          state.mode = MATCH;

        /* falls through */

        case MATCH:
          if (left === 0) {
            break inf_leave;
          }

          copy = _out - left;

          if (state.offset > copy) {
            /* copy from window */
            copy = state.offset - copy;

            if (copy > state.whave) {
              if (state.sane) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD$1;
                break;
              } // (!) This block is disabled in zlib defaults,
              // don't enable it for binary compatibility
              //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
              //          Trace((stderr, "inflate.c too far\n"));
              //          copy -= state.whave;
              //          if (copy > state.length) { copy = state.length; }
              //          if (copy > left) { copy = left; }
              //          left -= copy;
              //          state.length -= copy;
              //          do {
              //            output[put++] = 0;
              //          } while (--copy);
              //          if (state.length === 0) { state.mode = LEN; }
              //          break;
              //#endif

            }

            if (copy > state.wnext) {
              copy -= state.wnext;
              from = state.wsize - copy;
            } else {
              from = state.wnext - copy;
            }

            if (copy > state.length) {
              copy = state.length;
            }

            from_source = state.window;
          } else {
            /* copy from output */
            from_source = output;
            from = put - state.offset;
            copy = state.length;
          }

          if (copy > left) {
            copy = left;
          }

          left -= copy;
          state.length -= copy;

          do {
            output[put++] = from_source[from++];
          } while (--copy);

          if (state.length === 0) {
            state.mode = LEN;
          }

          break;

        case LIT:
          if (left === 0) {
            break inf_leave;
          }

          output[put++] = state.length;
          left--;
          state.mode = LEN;
          break;

        case CHECK:
          if (state.wrap) {
            //=== NEEDBITS(32);
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }

              have--; // Use '|' instead of '+' to make sure that result is signed

              hold |= input[next++] << bits;
              bits += 8;
            } //===//


            _out -= left;
            strm.total_out += _out;
            state.total += _out;

            if (_out) {
              strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
            }

            _out = left; // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too

            if ((state.flags ? hold : zswap32(hold)) !== state.check) {
              strm.msg = 'incorrect data check';
              state.mode = BAD$1;
              break;
            } //=== INITBITS();


            hold = 0;
            bits = 0; //===//
            //Tracev((stderr, "inflate:   check matches trailer\n"));
          }

          state.mode = LENGTH;

        /* falls through */

        case LENGTH:
          if (state.wrap && state.flags) {
            //=== NEEDBITS(32);
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            if (hold !== (state.total & 0xffffffff)) {
              strm.msg = 'incorrect length check';
              state.mode = BAD$1;
              break;
            } //=== INITBITS();


            hold = 0;
            bits = 0; //===//
            //Tracev((stderr, "inflate:   length matches trailer\n"));
          }

          state.mode = DONE;

        /* falls through */

        case DONE:
          ret = Z_STREAM_END$2;
          break inf_leave;

        case BAD$1:
          ret = Z_DATA_ERROR$1;
          break inf_leave;

        case MEM:
          return Z_MEM_ERROR;

        case SYNC:
        /* falls through */

        default:
          return Z_STREAM_ERROR$1;
      }
    } // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

    /*
       Return from inflate(), updating the total counts and the check value.
       If there was no progress during the inflate() call, return a buffer
       error.  Call updatewindow() to create and/or update the window state.
       Note: a memory error from inflate() is non-recoverable.
     */
    //--- RESTORE() ---


    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits; //---

    if (state.wsize || _out !== strm.avail_out && state.mode < BAD$1 && (state.mode < CHECK || flush !== Z_FINISH$2)) {
      if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
    }

    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;

    if (state.wrap && _out) {
      strm.adler = state.check =
      /*UPDATE(state.check, strm.next_out - _out, _out);*/
      state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
    }

    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE$1 ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);

    if ((_in === 0 && _out === 0 || flush === Z_FINISH$2) && ret === Z_OK$2) {
      ret = Z_BUF_ERROR$1;
    }

    return ret;
  }

  function inflateEnd(strm) {
    if (!strm || !strm.state
    /*|| strm->zfree == (free_func)0*/
    ) {
        return Z_STREAM_ERROR$1;
      }

    var state = strm.state;

    if (state.window) {
      state.window = null;
    }

    strm.state = null;
    return Z_OK$2;
  }

  function inflateGetHeader(strm, head) {
    var state;
    /* check state */

    if (!strm || !strm.state) {
      return Z_STREAM_ERROR$1;
    }

    state = strm.state;

    if ((state.wrap & 2) === 0) {
      return Z_STREAM_ERROR$1;
    }
    /* save header structure */


    state.head = head;
    head.done = false;
    return Z_OK$2;
  }

  function inflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var state;
    var dictid;
    var ret;
    /* check state */

    if (!strm
    /* == Z_NULL */
    || !strm.state
    /* == Z_NULL */
    ) {
        return Z_STREAM_ERROR$1;
      }

    state = strm.state;

    if (state.wrap !== 0 && state.mode !== DICT) {
      return Z_STREAM_ERROR$1;
    }
    /* check for correct dictionary identifier */


    if (state.mode === DICT) {
      dictid = 1;
      /* adler32(0, null, 0)*/

      /* dictid = adler32(dictid, dictionary, dictLength); */

      dictid = adler32_1(dictid, dictionary, dictLength, 0);

      if (dictid !== state.check) {
        return Z_DATA_ERROR$1;
      }
    }
    /* copy dictionary to window using updatewindow(), which will amend the
     existing dictionary if appropriate */


    ret = updatewindow(strm, dictionary, dictLength, dictLength);

    if (ret) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }

    state.havedict = 1; // Tracev((stderr, "inflate:   dictionary set\n"));

    return Z_OK$2;
  }

  var inflateReset_1 = inflateReset;
  var inflateReset2_1 = inflateReset2;
  var inflateResetKeep_1 = inflateResetKeep;
  var inflateInit_1 = inflateInit;
  var inflateInit2_1 = inflateInit2;
  var inflate_2 = inflate;
  var inflateEnd_1 = inflateEnd;
  var inflateGetHeader_1 = inflateGetHeader;
  var inflateSetDictionary_1 = inflateSetDictionary;
  var inflateInfo = 'pako inflate (from Nodeca project)';
  /* Not implemented
  exports.inflateCopy = inflateCopy;
  exports.inflateGetDictionary = inflateGetDictionary;
  exports.inflateMark = inflateMark;
  exports.inflatePrime = inflatePrime;
  exports.inflateSync = inflateSync;
  exports.inflateSyncPoint = inflateSyncPoint;
  exports.inflateUndermine = inflateUndermine;
  */

  var inflate_1 = {
    inflateReset: inflateReset_1,
    inflateReset2: inflateReset2_1,
    inflateResetKeep: inflateResetKeep_1,
    inflateInit: inflateInit_1,
    inflateInit2: inflateInit2_1,
    inflate: inflate_2,
    inflateEnd: inflateEnd_1,
    inflateGetHeader: inflateGetHeader_1,
    inflateSetDictionary: inflateSetDictionary_1,
    inflateInfo: inflateInfo
  };

  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  var constants = {
    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,

    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    //Z_MEM_ERROR:     -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,

    /* compression levels */
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,

    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,

    /* The deflate compression method */
    Z_DEFLATED: 8 //Z_NULL:                 null // Use -1 or null inline, depending on var type

  };

  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  function GZheader() {
    /* true if compressed data believed to be text */
    this.text = 0;
    /* modification time */

    this.time = 0;
    /* extra flags (not used when writing a gzip file) */

    this.xflags = 0;
    /* operating system */

    this.os = 0;
    /* pointer to extra field or Z_NULL if none */

    this.extra = null;
    /* extra field length (valid if extra != Z_NULL) */

    this.extra_len = 0; // Actually, we don't need it in JS,
    // but leave for few code modifications
    //
    // Setup limits is not necessary because in js we should not preallocate memory
    // for inflate use constant limit in 65536 bytes
    //

    /* space at extra (only when reading header) */
    // this.extra_max  = 0;

    /* pointer to zero-terminated file name or Z_NULL */

    this.name = '';
    /* space at name (only when reading header) */
    // this.name_max   = 0;

    /* pointer to zero-terminated comment or Z_NULL */

    this.comment = '';
    /* space at comment (only when reading header) */
    // this.comm_max   = 0;

    /* true if there was or will be a header crc */

    this.hcrc = 0;
    /* true when done reading gzip header (not used when writing a gzip file) */

    this.done = false;
  }

  var gzheader = GZheader;

  var toString$1 = Object.prototype.toString;
  /**
   * class Inflate
   *
   * Generic JS-style wrapper for zlib calls. If you don't need
   * streaming behaviour - use more simple functions: [[inflate]]
   * and [[inflateRaw]].
   **/

  /* internal
   * inflate.chunks -> Array
   *
   * Chunks of output data, if [[Inflate#onData]] not overridden.
   **/

  /**
   * Inflate.result -> Uint8Array|Array|String
   *
   * Uncompressed result, generated by default [[Inflate#onData]]
   * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
   * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
   * push a chunk with explicit flush (call [[Inflate#push]] with
   * `Z_SYNC_FLUSH` param).
   **/

  /**
   * Inflate.err -> Number
   *
   * Error code after inflate finished. 0 (Z_OK) on success.
   * Should be checked if broken data possible.
   **/

  /**
   * Inflate.msg -> String
   *
   * Error message, if [[Inflate.err]] != 0
   **/

  /**
   * new Inflate(options)
   * - options (Object): zlib inflate options.
   *
   * Creates new inflator instance with specified params. Throws exception
   * on bad params. Supported options:
   *
   * - `windowBits`
   * - `dictionary`
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information on these.
   *
   * Additional options, for internal needs:
   *
   * - `chunkSize` - size of generated data chunks (16K by default)
   * - `raw` (Boolean) - do raw inflate
   * - `to` (String) - if equal to 'string', then result will be converted
   *   from utf8 to utf16 (javascript) string. When string output requested,
   *   chunk length can differ from `chunkSize`, depending on content.
   *
   * By default, when no options set, autodetect deflate/gzip data format via
   * wrapper header.
   *
   * ##### Example:
   *
   * ```javascript
   * var pako = require('pako')
   *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
   *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
   *
   * var inflate = new pako.Inflate({ level: 3});
   *
   * inflate.push(chunk1, false);
   * inflate.push(chunk2, true);  // true -> last chunk
   *
   * if (inflate.err) { throw new Error(inflate.err); }
   *
   * console.log(inflate.result);
   * ```
   **/

  function Inflate(options) {
    if (!(this instanceof Inflate)) return new Inflate(options);
    this.options = common.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ''
    }, options || {});
    var opt = this.options; // Force window size for `raw` data, if not set directly,
    // because we have no header for autodetect.

    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
      opt.windowBits = -opt.windowBits;

      if (opt.windowBits === 0) {
        opt.windowBits = -15;
      }
    } // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate


    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
      opt.windowBits += 32;
    } // Gzip header has no info about windows size, we can do autodetect only
    // for deflate. So, if window size not set, force it to max when gzip possible


    if (opt.windowBits > 15 && opt.windowBits < 48) {
      // bit 3 (16) -> gzipped data
      // bit 4 (32) -> autodetect gzip/deflate
      if ((opt.windowBits & 15) === 0) {
        opt.windowBits |= 15;
      }
    }

    this.err = 0; // error code, if happens (0 = Z_OK)

    this.msg = ''; // error message

    this.ended = false; // used to avoid multiple onEnd() calls

    this.chunks = []; // chunks of compressed data

    this.strm = new zstream();
    this.strm.avail_out = 0;
    var status = inflate_1.inflateInit2(this.strm, opt.windowBits);

    if (status !== constants.Z_OK) {
      throw new Error(messages[status]);
    }

    this.header = new gzheader();
    inflate_1.inflateGetHeader(this.strm, this.header); // Setup dictionary

    if (opt.dictionary) {
      // Convert data if needed
      if (typeof opt.dictionary === 'string') {
        opt.dictionary = strings.string2buf(opt.dictionary);
      } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
        opt.dictionary = new Uint8Array(opt.dictionary);
      }

      if (opt.raw) {
        //In raw mode we need to set the dictionary early
        status = inflate_1.inflateSetDictionary(this.strm, opt.dictionary);

        if (status !== constants.Z_OK) {
          throw new Error(messages[status]);
        }
      }
    }
  }
  /**
   * Inflate#push(data[, mode]) -> Boolean
   * - data (Uint8Array|Array|ArrayBuffer|String): input data
   * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
   *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
   *
   * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
   * new output chunks. Returns `true` on success. The last data block must have
   * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
   * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
   * can use mode Z_SYNC_FLUSH, keeping the decompression context.
   *
   * On fail call [[Inflate#onEnd]] with error code and return false.
   *
   * We strongly recommend to use `Uint8Array` on input for best speed (output
   * format is detected automatically). Also, don't skip last param and always
   * use the same type in your code (boolean or number). That will improve JS speed.
   *
   * For regular `Array`-s make sure all elements are [0..255].
   *
   * ##### Example
   *
   * ```javascript
   * push(chunk, false); // push one of data chunks
   * ...
   * push(chunk, true);  // push last chunk
   * ```
   **/


  Inflate.prototype.push = function (data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var dictionary = this.options.dictionary;

    var status, _mode;

    var next_out_utf8, tail, utf8str; // Flag to properly process Z_BUF_ERROR on testing inflate call
    // when we check that all output data was flushed.

    var allowBufError = false;

    if (this.ended) {
      return false;
    }

    _mode = mode === ~~mode ? mode : mode === true ? constants.Z_FINISH : constants.Z_NO_FLUSH; // Convert data if needed

    if (typeof data === 'string') {
      // Only binary strings can be decompressed on practice
      strm.input = strings.binstring2buf(data);
    } else if (toString$1.call(data) === '[object ArrayBuffer]') {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }

    strm.next_in = 0;
    strm.avail_in = strm.input.length;

    do {
      if (strm.avail_out === 0) {
        strm.output = new common.Buf8(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }

      status = inflate_1.inflate(strm, constants.Z_NO_FLUSH);
      /* no bad return value */

      if (status === constants.Z_NEED_DICT && dictionary) {
        status = inflate_1.inflateSetDictionary(this.strm, dictionary);
      }

      if (status === constants.Z_BUF_ERROR && allowBufError === true) {
        status = constants.Z_OK;
        allowBufError = false;
      }

      if (status !== constants.Z_STREAM_END && status !== constants.Z_OK) {
        this.onEnd(status);
        this.ended = true;
        return false;
      }

      if (strm.next_out) {
        if (strm.avail_out === 0 || status === constants.Z_STREAM_END || strm.avail_in === 0 && (_mode === constants.Z_FINISH || _mode === constants.Z_SYNC_FLUSH)) {
          if (this.options.to === 'string') {
            next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
            tail = strm.next_out - next_out_utf8;
            utf8str = strings.buf2string(strm.output, next_out_utf8); // move tail

            strm.next_out = tail;
            strm.avail_out = chunkSize - tail;

            if (tail) {
              common.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
            }

            this.onData(utf8str);
          } else {
            this.onData(common.shrinkBuf(strm.output, strm.next_out));
          }
        }
      } // When no more input data, we should check that internal inflate buffers
      // are flushed. The only way to do it when avail_out = 0 - run one more
      // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
      // Here we set flag to process this error properly.
      //
      // NOTE. Deflate does not return error in this case and does not needs such
      // logic.


      if (strm.avail_in === 0 && strm.avail_out === 0) {
        allowBufError = true;
      }
    } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== constants.Z_STREAM_END);

    if (status === constants.Z_STREAM_END) {
      _mode = constants.Z_FINISH;
    } // Finalize on the last chunk.


    if (_mode === constants.Z_FINISH) {
      status = inflate_1.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === constants.Z_OK;
    } // callback interim results if Z_SYNC_FLUSH.


    if (_mode === constants.Z_SYNC_FLUSH) {
      this.onEnd(constants.Z_OK);
      strm.avail_out = 0;
      return true;
    }

    return true;
  };
  /**
   * Inflate#onData(chunk) -> Void
   * - chunk (Uint8Array|Array|String): output data. Type of array depends
   *   on js engine support. When string output requested, each chunk
   *   will be string.
   *
   * By default, stores data blocks in `chunks[]` property and glue
   * those in `onEnd`. Override this handler, if you need another behaviour.
   **/


  Inflate.prototype.onData = function (chunk) {
    this.chunks.push(chunk);
  };
  /**
   * Inflate#onEnd(status) -> Void
   * - status (Number): inflate status. 0 (Z_OK) on success,
   *   other if not.
   *
   * Called either after you tell inflate that the input stream is
   * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
   * or if an error happened. By default - join collected chunks,
   * free memory and fill `results` / `err` properties.
   **/


  Inflate.prototype.onEnd = function (status) {
    // On success - join
    if (status === constants.Z_OK) {
      if (this.options.to === 'string') {
        // Glue & convert here, until we teach pako to send
        // utf8 aligned strings to onData
        this.result = this.chunks.join('');
      } else {
        this.result = common.flattenChunks(this.chunks);
      }
    }

    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  /**
   * inflate(data[, options]) -> Uint8Array|Array|String
   * - data (Uint8Array|Array|String): input data to decompress.
   * - options (Object): zlib inflate options.
   *
   * Decompress `data` with inflate/ungzip and `options`. Autodetect
   * format via wrapper header by default. That's why we don't provide
   * separate `ungzip` method.
   *
   * Supported options are:
   *
   * - windowBits
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information.
   *
   * Sugar (options):
   *
   * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
   *   negative windowBits implicitly.
   * - `to` (String) - if equal to 'string', then result will be converted
   *   from utf8 to utf16 (javascript) string. When string output requested,
   *   chunk length can differ from `chunkSize`, depending on content.
   *
   *
   * ##### Example:
   *
   * ```javascript
   * var pako = require('pako')
   *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
   *   , output;
   *
   * try {
   *   output = pako.inflate(input);
   * } catch (err)
   *   console.log(err);
   * }
   * ```
   **/


  function inflate$1(input, options) {
    var inflator = new Inflate(options);
    inflator.push(input, true); // That will never happens, if you don't cheat with options :)

    if (inflator.err) {
      throw inflator.msg || messages[inflator.err];
    }

    return inflator.result;
  }
  /**
   * inflateRaw(data[, options]) -> Uint8Array|Array|String
   * - data (Uint8Array|Array|String): input data to decompress.
   * - options (Object): zlib inflate options.
   *
   * The same as [[inflate]], but creates raw data, without wrapper
   * (header and adler32 crc).
   **/


  function inflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return inflate$1(input, options);
  }
  /**
   * ungzip(data[, options]) -> Uint8Array|Array|String
   * - data (Uint8Array|Array|String): input data to decompress.
   * - options (Object): zlib inflate options.
   *
   * Just shortcut to [[inflate]], because it autodetects format
   * by header.content. Done for convenience.
   **/


  var Inflate_1 = Inflate;
  var inflate_2$1 = inflate$1;
  var inflateRaw_1 = inflateRaw;
  var ungzip = inflate$1;
  var inflate_1$1 = {
    Inflate: Inflate_1,
    inflate: inflate_2$1,
    inflateRaw: inflateRaw_1,
    ungzip: ungzip
  };

  var assign = common.assign;
  var pako = {};
  assign(pako, deflate_1$1, inflate_1$1, constants);
  var pako_1 = pako;

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var HWPDocument = function HWPDocument(header, info, sections) {
    _classCallCheck(this, HWPDocument);

    _defineProperty(this, "header", void 0);

    _defineProperty(this, "info", void 0);

    _defineProperty(this, "sections", void 0);

    this.header = header;
    this.info = info;
    this.sections = sections;
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @see https://github.com/hahnlee/hwp.js/blob/master/docs/hwp/5.0/FileHeader.md
   */
  var HWPHeader = function HWPHeader(version, signature) {
    _classCallCheck(this, HWPHeader);

    _defineProperty(this, "version", void 0);

    _defineProperty(this, "signature", void 0);

    this.version = version;
    this.signature = signature;
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @see https://github.com/hahnlee/hwp.js/blob/master/docs/hwp/5.0/FileHeader.md#%ED%8C%8C%EC%9D%BC-%EB%B2%84%EC%A0%84
   */
  var HWPVersion = /*#__PURE__*/function () {
    function HWPVersion(major, minor, build, revision) {
      _classCallCheck(this, HWPVersion);

      _defineProperty(this, "major", void 0);

      _defineProperty(this, "minor", void 0);

      _defineProperty(this, "build", void 0);

      _defineProperty(this, "revision", void 0);

      this.major = major;
      this.minor = minor;
      this.build = build;
      this.revision = revision;
    }

    _createClass(HWPVersion, [{
      key: "isCompatible",
      value: function isCompatible(target) {
        return this.major === target.major && this.minor <= target.minor;
      }
    }, {
      key: "gte",
      value: function gte(target) {
        if (this.major > target.major) {
          return true;
        }

        if (this.major < target.major) {
          return false;
        }

        if (this.minor > target.minor) {
          return true;
        }

        if (this.minor < target.minor) {
          return false;
        }

        if (this.build > target.build) {
          return true;
        }

        if (this.build < target.build) {
          return false;
        }

        if (this.revision >= target.revision) {
          return true;
        }

        return false;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "".concat(this.major, ".").concat(this.minor, ".").concat(this.build, ".").concat(this.revision);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.toString();
      }
    }]);

    return HWPVersion;
  }();

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var FillType;

  (function (FillType) {
    FillType[FillType["None"] = 0] = "None";
    FillType[FillType["Single"] = 1] = "Single";
    FillType[FillType["Image"] = 2] = "Image";
    FillType[FillType["Gradation"] = 4] = "Gradation";
  })(FillType || (FillType = {}));

  var FillType$1 = FillType;

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var HWPTAG_BEGIN = 0x10;
  var DocInfoTagID;

  (function (DocInfoTagID) {
    DocInfoTagID[DocInfoTagID["HWPTAG_DOCUMENT_PROPERTIES"] = HWPTAG_BEGIN] = "HWPTAG_DOCUMENT_PROPERTIES";
    DocInfoTagID[DocInfoTagID["HWPTAG_ID_MAPPINGS"] = HWPTAG_BEGIN + 1] = "HWPTAG_ID_MAPPINGS";
    DocInfoTagID[DocInfoTagID["HWPTAG_BIN_DATA"] = HWPTAG_BEGIN + 2] = "HWPTAG_BIN_DATA";
    DocInfoTagID[DocInfoTagID["HWPTAG_FACE_NAME"] = HWPTAG_BEGIN + 3] = "HWPTAG_FACE_NAME";
    DocInfoTagID[DocInfoTagID["HWPTAG_BORDER_FILL"] = HWPTAG_BEGIN + 4] = "HWPTAG_BORDER_FILL";
    DocInfoTagID[DocInfoTagID["HWPTAG_CHAR_SHAPE"] = HWPTAG_BEGIN + 5] = "HWPTAG_CHAR_SHAPE";
    DocInfoTagID[DocInfoTagID["HWPTAG_TAB_DEF"] = HWPTAG_BEGIN + 6] = "HWPTAG_TAB_DEF";
    DocInfoTagID[DocInfoTagID["HWPTAG_NUMBERING"] = HWPTAG_BEGIN + 7] = "HWPTAG_NUMBERING";
    DocInfoTagID[DocInfoTagID["HWPTAG_BULLET"] = HWPTAG_BEGIN + 8] = "HWPTAG_BULLET";
    DocInfoTagID[DocInfoTagID["HWPTAG_PARA_SHAPE"] = HWPTAG_BEGIN + 9] = "HWPTAG_PARA_SHAPE";
    DocInfoTagID[DocInfoTagID["HWPTAG_STYLE"] = HWPTAG_BEGIN + 10] = "HWPTAG_STYLE";
    DocInfoTagID[DocInfoTagID["HWPTAG_DOC_DATA"] = HWPTAG_BEGIN + 11] = "HWPTAG_DOC_DATA";
    DocInfoTagID[DocInfoTagID["HWPTAG_DISTRIBUTE_DOC_DATA"] = HWPTAG_BEGIN + 12] = "HWPTAG_DISTRIBUTE_DOC_DATA";
    DocInfoTagID[DocInfoTagID["RESERVED"] = HWPTAG_BEGIN + 13] = "RESERVED";
    DocInfoTagID[DocInfoTagID["HWPTAG_COMPATIBLE_DOCUMENT"] = HWPTAG_BEGIN + 14] = "HWPTAG_COMPATIBLE_DOCUMENT";
    DocInfoTagID[DocInfoTagID["HWPTAG_LAYOUT_COMPATIBILITY"] = HWPTAG_BEGIN + 15] = "HWPTAG_LAYOUT_COMPATIBILITY";
    DocInfoTagID[DocInfoTagID["HWPTAG_TRACKCHANGE"] = HWPTAG_BEGIN + 16] = "HWPTAG_TRACKCHANGE";
    DocInfoTagID[DocInfoTagID["HWPTAG_MEMO_SHAPE"] = HWPTAG_BEGIN + 76] = "HWPTAG_MEMO_SHAPE";
    DocInfoTagID[DocInfoTagID["HWPTAG_FORBIDDEN_CHAR"] = HWPTAG_BEGIN + 78] = "HWPTAG_FORBIDDEN_CHAR";
    DocInfoTagID[DocInfoTagID["HWPTAG_TRACK_CHANGE"] = HWPTAG_BEGIN + 80] = "HWPTAG_TRACK_CHANGE";
    DocInfoTagID[DocInfoTagID["HWPTAG_TRACK_CHANGE_AUTHOR"] = HWPTAG_BEGIN + 81] = "HWPTAG_TRACK_CHANGE_AUTHOR";
  })(DocInfoTagID || (DocInfoTagID = {}));

  var SectionTagID;

  (function (SectionTagID) {
    SectionTagID[SectionTagID["HWPTAG_PARA_HEADER"] = HWPTAG_BEGIN + 50] = "HWPTAG_PARA_HEADER";
    SectionTagID[SectionTagID["HWPTAG_PARA_TEXT"] = HWPTAG_BEGIN + 51] = "HWPTAG_PARA_TEXT";
    SectionTagID[SectionTagID["HWPTAG_PARA_CHAR_SHAPE"] = HWPTAG_BEGIN + 52] = "HWPTAG_PARA_CHAR_SHAPE";
    SectionTagID[SectionTagID["HWPTAG_PARA_LINE_SEG"] = HWPTAG_BEGIN + 53] = "HWPTAG_PARA_LINE_SEG";
    SectionTagID[SectionTagID["HWPTAG_PARA_RANGE_TAG"] = HWPTAG_BEGIN + 54] = "HWPTAG_PARA_RANGE_TAG";
    SectionTagID[SectionTagID["HWPTAG_CTRL_HEADER"] = HWPTAG_BEGIN + 55] = "HWPTAG_CTRL_HEADER";
    SectionTagID[SectionTagID["HWPTAG_LIST_HEADER"] = HWPTAG_BEGIN + 56] = "HWPTAG_LIST_HEADER";
    SectionTagID[SectionTagID["HWPTAG_PAGE_DEF"] = HWPTAG_BEGIN + 57] = "HWPTAG_PAGE_DEF";
    SectionTagID[SectionTagID["HWPTAG_FOOTNOTE_SHAPE"] = HWPTAG_BEGIN + 58] = "HWPTAG_FOOTNOTE_SHAPE";
    SectionTagID[SectionTagID["HWPTAG_PAGE_BORDER_FILL"] = HWPTAG_BEGIN + 59] = "HWPTAG_PAGE_BORDER_FILL";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT"] = HWPTAG_BEGIN + 60] = "HWPTAG_SHAPE_COMPONENT";
    SectionTagID[SectionTagID["HWPTAG_TABLE"] = HWPTAG_BEGIN + 61] = "HWPTAG_TABLE";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_LINE"] = HWPTAG_BEGIN + 62] = "HWPTAG_SHAPE_COMPONENT_LINE";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_RECTANGLE"] = HWPTAG_BEGIN + 63] = "HWPTAG_SHAPE_COMPONENT_RECTANGLE";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_ELLIPSE"] = HWPTAG_BEGIN + 64] = "HWPTAG_SHAPE_COMPONENT_ELLIPSE";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_ARC"] = HWPTAG_BEGIN + 65] = "HWPTAG_SHAPE_COMPONENT_ARC";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_POLYGON"] = HWPTAG_BEGIN + 66] = "HWPTAG_SHAPE_COMPONENT_POLYGON";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_CURVE"] = HWPTAG_BEGIN + 67] = "HWPTAG_SHAPE_COMPONENT_CURVE";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_OLE"] = HWPTAG_BEGIN + 68] = "HWPTAG_SHAPE_COMPONENT_OLE";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_PICTURE"] = HWPTAG_BEGIN + 69] = "HWPTAG_SHAPE_COMPONENT_PICTURE";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_CONTAINER"] = HWPTAG_BEGIN + 70] = "HWPTAG_SHAPE_COMPONENT_CONTAINER";
    SectionTagID[SectionTagID["HWPTAG_CTRL_DATA"] = HWPTAG_BEGIN + 71] = "HWPTAG_CTRL_DATA";
    SectionTagID[SectionTagID["HWPTAG_EQEDIT"] = HWPTAG_BEGIN + 72] = "HWPTAG_EQEDIT";
    SectionTagID[SectionTagID["RESERVED"] = HWPTAG_BEGIN + 73] = "RESERVED";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_TEXTART"] = HWPTAG_BEGIN + 74] = "HWPTAG_SHAPE_COMPONENT_TEXTART";
    SectionTagID[SectionTagID["HWPTAG_FORM_OBJECT"] = HWPTAG_BEGIN + 75] = "HWPTAG_FORM_OBJECT";
    SectionTagID[SectionTagID["HWPTAG_MEMO_SHAPE"] = HWPTAG_BEGIN + 76] = "HWPTAG_MEMO_SHAPE";
    SectionTagID[SectionTagID["HWPTAG_MEMO_LIST"] = HWPTAG_BEGIN + 77] = "HWPTAG_MEMO_LIST";
    SectionTagID[SectionTagID["HWPTAG_CHART_DATA"] = HWPTAG_BEGIN + 79] = "HWPTAG_CHART_DATA";
    SectionTagID[SectionTagID["HWPTAG_VIDEO_DATA"] = HWPTAG_BEGIN + 82] = "HWPTAG_VIDEO_DATA";
    SectionTagID[SectionTagID["HWPTAG_SHAPE_COMPONENT_UNKNOWN"] = HWPTAG_BEGIN + 99] = "HWPTAG_SHAPE_COMPONENT_UNKNOWN";
  })(SectionTagID || (SectionTagID = {}));

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var BinData = function BinData(extension, payload) {
    _classCallCheck(this, BinData);

    _defineProperty(this, "extension", void 0);

    _defineProperty(this, "payload", void 0);

    this.extension = extension;
    this.payload = payload;
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var ByteReader = /*#__PURE__*/function () {
    function ByteReader(buffer) {
      _classCallCheck(this, ByteReader);

      _defineProperty(this, "view", void 0);

      _defineProperty(this, "offsetByte", 0);

      this.view = new DataView(buffer);
    }

    _createClass(ByteReader, [{
      key: "readUInt32",
      value: function readUInt32() {
        var result = this.view.getUint32(this.offsetByte, true);
        this.offsetByte += 4;
        return result;
      }
    }, {
      key: "readInt32",
      value: function readInt32() {
        var result = this.view.getInt32(this.offsetByte, true);
        this.offsetByte += 4;
        return result;
      }
    }, {
      key: "readInt16",
      value: function readInt16() {
        var result = this.view.getUint16(this.offsetByte, true);
        this.offsetByte += 2;
        return result;
      }
    }, {
      key: "readUInt16",
      value: function readUInt16() {
        var result = this.view.getUint16(this.offsetByte, true);
        this.offsetByte += 2;
        return result;
      }
    }, {
      key: "readInt8",
      value: function readInt8() {
        var result = this.view.getInt8(this.offsetByte);
        this.offsetByte += 1;
        return result;
      }
    }, {
      key: "readUInt8",
      value: function readUInt8() {
        var result = this.view.getUint8(this.offsetByte);
        this.offsetByte += 1;
        return result;
      }
    }, {
      key: "readRecord",
      value: function readRecord() {
        var value = this.readUInt32();
        var tagID = value & 0x3FF;
        var level = value >> 10 & 0x3FF;
        var size = value >> 20 & 0xFFF;

        if (size === 0xFFF) {
          return [tagID, level, this.readUInt32()];
        }

        return [tagID, level, size];
      }
    }, {
      key: "read",
      value: function read(_byte) {
        var result = this.view.buffer.slice(this.offsetByte, this.offsetByte + _byte);
        this.offsetByte += _byte;
        return result;
      }
    }, {
      key: "readString",
      value: function readString() {
        var length = this.readUInt16();
        var result = [];

        for (var i = 0; i < length; i += 1) {
          result.push(String.fromCharCode(this.readUInt16()));
        }

        return result.join('');
      }
    }, {
      key: "remainByte",
      value: function remainByte() {
        return this.view.byteLength - this.offsetByte;
      }
    }, {
      key: "skipByte",
      value: function skipByte(offset) {
        this.offsetByte += offset;
      }
    }, {
      key: "isEOF",
      value: function isEOF() {
        return this.view.byteLength <= this.offsetByte;
      }
    }]);

    return ByteReader;
  }();

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function getBitValue(mask, start, end) {
    var target = mask >> start;
    var temp = 0;

    for (var index = 0; index <= end - start; index += 1) {
      temp <<= 1;
      temp += 1;
    }

    return target & temp;
  }
  function getRGB(colorRef) {
    return [getBitValue(colorRef, 0, 7), getBitValue(colorRef, 8, 15), getBitValue(colorRef, 16, 23)];
  }
  function getFlag(bits, position) {
    var mask = 1 << position;
    return (bits & mask) === mask;
  }

  var CharShape = function CharShape(fontId, fontScale, fontSpacing, fontRatio, fontLocation, fontBaseSize, attr, shadow, shadow2, color, underLineColor, shadeColor, shadowColor) {
    _classCallCheck(this, CharShape);

    _defineProperty(this, "fontId", void 0);

    _defineProperty(this, "fontScale", void 0);

    _defineProperty(this, "fontSpacing", void 0);

    _defineProperty(this, "fontRatio", void 0);

    _defineProperty(this, "fontLocation", void 0);

    _defineProperty(this, "fontBaseSize", void 0);

    _defineProperty(this, "attr", void 0);

    _defineProperty(this, "shadow", void 0);

    _defineProperty(this, "shadow2", void 0);

    _defineProperty(this, "color", void 0);

    _defineProperty(this, "underLineColor", void 0);

    _defineProperty(this, "shadeColor", void 0);

    _defineProperty(this, "shadowColor", void 0);

    _defineProperty(this, "fontBackgroundId", null);

    _defineProperty(this, "strikeColor", null);

    this.fontId = fontId;
    this.fontScale = fontScale;
    this.fontSpacing = fontSpacing;
    this.fontRatio = fontRatio;
    this.fontLocation = fontLocation;
    this.fontBaseSize = fontBaseSize / 100;
    this.attr = attr;
    this.shadow = getRGB(shadow);
    this.shadow2 = getRGB(shadow2);
    this.color = getRGB(color);
    this.underLineColor = getRGB(underLineColor);
    this.shadeColor = getRGB(shadeColor);
    this.shadowColor = getRGB(shadowColor);
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var StartingIndex = function StartingIndex() {
    _classCallCheck(this, StartingIndex);

    _defineProperty(this, "page", 0);

    _defineProperty(this, "footnote", 0);

    _defineProperty(this, "endnote", 0);

    _defineProperty(this, "picture", 0);

    _defineProperty(this, "table", 0);

    _defineProperty(this, "equation", 0);
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var CaratLocation = function CaratLocation() {
    _classCallCheck(this, CaratLocation);

    _defineProperty(this, "listId", 0);

    _defineProperty(this, "paragraphId", 0);

    _defineProperty(this, "charIndex", 0);
  };

  var DocInfo = /*#__PURE__*/function () {
    function DocInfo() {
      _classCallCheck(this, DocInfo);

      _defineProperty(this, "sectionSize", 0);

      _defineProperty(this, "charShapes", []);

      _defineProperty(this, "fontFaces", []);

      _defineProperty(this, "binData", []);

      _defineProperty(this, "borderFills", []);

      _defineProperty(this, "paragraphShapes", []);

      _defineProperty(this, "startingIndex", new StartingIndex());

      _defineProperty(this, "caratLocation", new CaratLocation());
    }

    _createClass(DocInfo, [{
      key: "getCharShpe",
      value: function getCharShpe(index) {
        return this.charShapes[index];
      }
    }]);

    return DocInfo;
  }();

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var FontFace = /*#__PURE__*/function () {
    function FontFace() {
      _classCallCheck(this, FontFace);

      _defineProperty(this, "name", '');

      _defineProperty(this, "alternative", '');

      _defineProperty(this, "default", '');

      _defineProperty(this, "panose", null);
    }

    _createClass(FontFace, [{
      key: "getFontFamily",
      value: function getFontFamily() {
        var result = ["".concat(this.name)];

        if (this.alternative) {
          result.push("\"".concat(this.alternative, "\""));
        }

        if (this["default"]) {
          result.push("\"".concat(this["default"], "\""));
        }

        if (this.panose) {
          var panoseFontFamily = this.panose.getFontFamily();
          result.push(panoseFontFamily);
        }

        return result.join(',');
      }
    }]);

    return FontFace;
  }();

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var ParagraphShape = function ParagraphShape() {
    _classCallCheck(this, ParagraphShape);

    _defineProperty(this, "align", 0);
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var BorderFill = // TODO: (@hahnlee) getter & setter 만들기
  // TODO: (@hahnlee) 그라데이션도 처리하기
  function BorderFill(attribute, style) {
    _classCallCheck(this, BorderFill);

    _defineProperty(this, "attribute", void 0);

    _defineProperty(this, "style", void 0);

    _defineProperty(this, "backgroundColor", null);

    this.attribute = attribute;
    this.style = style;
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Panose 1.0
   * @see https://www.w3.org/Printing/stevahn.html
   */
  var Panose = /*#__PURE__*/function () {
    function Panose() {
      _classCallCheck(this, Panose);

      _defineProperty(this, "family", 0);

      _defineProperty(this, "serifStyle", 0);

      _defineProperty(this, "weight", 0);

      _defineProperty(this, "proportion", 0);

      _defineProperty(this, "contrast", 0);

      _defineProperty(this, "strokeVariation", 0);

      _defineProperty(this, "armStyle", 0);

      _defineProperty(this, "letterForm", 0);

      _defineProperty(this, "midline", 0);

      _defineProperty(this, "xHeight", 0);
    }

    _createClass(Panose, [{
      key: "getFontFamily",
      value: function getFontFamily() {
        if (this.family === 3) {
          return 'cursive';
        }

        if (this.family === 2) {
          if (this.serifStyle > 1 && this.serifStyle < 11) {
            return 'sans';
          }

          if (this.serifStyle > 10 && this.serifStyle < 14) {
            return 'sans-serf';
          }
        }

        return '';
      }
    }]);

    return Panose;
  }();

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var emptyArrayBuffer = new ArrayBuffer(0);

  var HWPRecord = function HWPRecord(tagID, size, parentTagID) {
    var payload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : emptyArrayBuffer;

    _classCallCheck(this, HWPRecord);

    _defineProperty(this, "children", []);

    _defineProperty(this, "payload", void 0);

    _defineProperty(this, "tagID", void 0);

    _defineProperty(this, "size", void 0);

    _defineProperty(this, "parentTagID", void 0);

    this.tagID = tagID;
    this.size = size;
    this.parentTagID = parentTagID;
    this.payload = payload;
  };

  function parseRecordTree(data) {
    var reader = new ByteReader(data.buffer);
    var root = new HWPRecord(0, 0, 0);

    while (!reader.isEOF()) {
      var _reader$readRecord = reader.readRecord(),
          _reader$readRecord2 = _slicedToArray(_reader$readRecord, 3),
          tagID = _reader$readRecord2[0],
          level = _reader$readRecord2[1],
          size = _reader$readRecord2[2];

      var parent = root;
      var payload = reader.read(size);

      for (var i = 0; i < level; i += 1) {
        parent = parent.children.slice(-1).pop();
      }

      parent.children.push(new HWPRecord(tagID, size, parent.tagID, payload));
    }

    return root;
  }

  var DocInfoParser = /*#__PURE__*/function () {
    function DocInfoParser(data, container) {
      var _this = this;

      _classCallCheck(this, DocInfoParser);

      _defineProperty(this, "record", void 0);

      _defineProperty(this, "result", new DocInfo());

      _defineProperty(this, "container", void 0);

      _defineProperty(this, "visit", function (record) {
        switch (record.tagID) {
          case DocInfoTagID.HWPTAG_DOCUMENT_PROPERTIES:
            {
              _this.visitDocumentPropertes(record);

              break;
            }

          case DocInfoTagID.HWPTAG_CHAR_SHAPE:
            {
              _this.visitCharShape(record);

              break;
            }

          case DocInfoTagID.HWPTAG_FACE_NAME:
            {
              _this.visitFaceName(record);

              break;
            }

          case DocInfoTagID.HWPTAG_BIN_DATA:
            {
              _this.visitBinData(record);

              break;
            }

          case DocInfoTagID.HWPTAG_BORDER_FILL:
            {
              _this.visitBorderFill(record);

              break;
            }

          case DocInfoTagID.HWPTAG_PARA_SHAPE:
            {
              _this.visitParagraphShape(record);

              break;
            }
        }

        record.children.forEach(_this.visit);
      });

      this.record = parseRecordTree(data);
      this.container = container;
    }

    _createClass(DocInfoParser, [{
      key: "visitDocumentPropertes",
      value: function visitDocumentPropertes(record) {
        var reader = new ByteReader(record.payload);
        this.result.sectionSize = reader.readUInt16();
        this.result.startingIndex.page = reader.readUInt16();
        this.result.startingIndex.footnote = reader.readUInt16();
        this.result.startingIndex.endnote = reader.readUInt16();
        this.result.startingIndex.picture = reader.readUInt16();
        this.result.startingIndex.table = reader.readUInt16();
        this.result.startingIndex.equation = reader.readUInt16();
        this.result.caratLocation.listId = reader.readUInt32();
        this.result.caratLocation.paragraphId = reader.readUInt32();
        this.result.caratLocation.charIndex = reader.readUInt32();
      }
    }, {
      key: "visitCharShape",
      value: function visitCharShape(record) {
        var reader = new ByteReader(record.payload);
        var charShape = new CharShape([reader.readUInt16(), reader.readUInt16(), reader.readUInt16(), reader.readUInt16(), reader.readUInt16(), reader.readUInt16(), reader.readUInt16()], [reader.readUInt8(), reader.readUInt8(), reader.readUInt8(), reader.readUInt8(), reader.readUInt8(), reader.readUInt8(), reader.readUInt8()], [reader.readInt8(), reader.readInt8(), reader.readInt8(), reader.readInt8(), reader.readInt8(), reader.readInt8(), reader.readInt8()], [reader.readUInt8(), reader.readUInt8(), reader.readUInt8(), reader.readUInt8(), reader.readUInt8(), reader.readUInt8(), reader.readUInt8()], [reader.readInt8(), reader.readInt8(), reader.readInt8(), reader.readInt8(), reader.readInt8(), reader.readInt8(), reader.readInt8()], reader.readInt32(), reader.readUInt32(), reader.readUInt8(), reader.readUInt8(), reader.readUInt32(), reader.readUInt32(), reader.readUInt32(), reader.readUInt32());

        if (record.size > 68) {
          charShape.fontBackgroundId = reader.readUInt16();
        }

        if (record.size > 70) {
          charShape.underLineColor = getRGB(reader.readInt32());
        }

        this.result.charShapes.push(charShape);
      }
    }, {
      key: "visitFaceName",
      value: function visitFaceName(record) {
        var reader = new ByteReader(record.payload);
        var attribute = reader.readUInt8();
        var hasAlternative = getFlag(attribute, 7);
        var hasAttribute = getFlag(attribute, 6);
        var hasDefault = getFlag(attribute, 5);
        var fontFace = new FontFace();
        fontFace.name = reader.readString();

        if (hasAlternative) {
          reader.skipByte(1);
          fontFace.alternative = reader.readString();
        }

        if (hasAttribute) {
          var panose = new Panose();
          panose.family = reader.readInt8();
          panose.serifStyle = reader.readInt8();
          panose.weight = reader.readInt8();
          panose.proportion = reader.readInt8();
          panose.contrast = reader.readInt8();
          panose.strokeVariation = reader.readInt8();
          panose.armStyle = reader.readInt8();
          panose.letterForm = reader.readInt8();
          panose.midline = reader.readInt8();
          panose.xHeight = reader.readInt8();
          fontFace.panose = panose;
        }

        if (hasDefault) {
          fontFace["default"] = reader.readString();
        }

        this.result.fontFaces.push(fontFace);
      }
    }, {
      key: "visitBinData",
      value: function visitBinData(record) {
        var reader = new ByteReader(record.payload);
        reader.readUInt16();
        var id = reader.readUInt16();
        var extension = reader.readString();
        var path = "Root Entry/BinData/BIN".concat("".concat(id.toString(16).toUpperCase()).padStart(4, '0'), ".").concat(extension);
        var payload = cfb.find(this.container, path).content;
        this.result.binData.push(new BinData(extension, pako_1.inflate(payload, {
          windowBits: -15
        })));
      }
    }, {
      key: "visitBorderFill",
      value: function visitBorderFill(record) {
        var reader = new ByteReader(record.payload);
        var borderFill = new BorderFill(reader.readUInt16(), {
          left: {
            type: reader.readUInt8(),
            width: reader.readUInt8(),
            color: getRGB(reader.readUInt32())
          },
          right: {
            type: reader.readUInt8(),
            width: reader.readUInt8(),
            color: getRGB(reader.readUInt32())
          },
          top: {
            type: reader.readUInt8(),
            width: reader.readUInt8(),
            color: getRGB(reader.readUInt32())
          },
          bottom: {
            type: reader.readUInt8(),
            width: reader.readUInt8(),
            color: getRGB(reader.readUInt32())
          }
        });
        reader.skipByte(6);

        if (reader.readUInt32() === FillType$1.Single) {
          borderFill.backgroundColor = getRGB(reader.readUInt32());
        }

        this.result.borderFills.push(borderFill);
      }
    }, {
      key: "visitParagraphShape",
      value: function visitParagraphShape(record) {
        var reader = new ByteReader(record.payload);
        var attribute = reader.readUInt32();
        var shape = new ParagraphShape();
        shape.align = getBitValue(attribute, 2, 4);
        this.result.paragraphShapes.push(shape);
      }
    }, {
      key: "parse",
      value: function parse() {
        this.record.children.forEach(this.visit);
        return this.result;
      }
    }]);

    return DocInfoParser;
  }();

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function makeCtrlID(first, second, third, fourth) {
    var firstCode = first.charCodeAt(0);
    var secondCode = second.charCodeAt(0);
    var thirdCode = third.charCodeAt(0);
    var fourthCode = fourth.charCodeAt(0);
    return firstCode << 24 | secondCode << 16 | thirdCode << 8 | fourthCode;
  }
  var CommonCtrlID;

  (function (CommonCtrlID) {
    CommonCtrlID[CommonCtrlID["Table"] = makeCtrlID('t', 'b', 'l', ' ')] = "Table";
    CommonCtrlID[CommonCtrlID["Line"] = makeCtrlID('$', 'l', 'i', 'n')] = "Line";
    CommonCtrlID[CommonCtrlID["Rectangle"] = makeCtrlID('$', 'r', 'e', 'c')] = "Rectangle";
    CommonCtrlID[CommonCtrlID["Ellipse"] = makeCtrlID('$', 'e', 'l', 'l')] = "Ellipse";
    CommonCtrlID[CommonCtrlID["Arc"] = makeCtrlID('$', 'a', 'r', 'c')] = "Arc";
    CommonCtrlID[CommonCtrlID["Polygon"] = makeCtrlID('$', 'p', 'o', 'l')] = "Polygon";
    CommonCtrlID[CommonCtrlID["Curve"] = makeCtrlID('$', 'c', 'u', 'r')] = "Curve";
    CommonCtrlID[CommonCtrlID["Equation"] = makeCtrlID('e', 'q', 'e', 'd')] = "Equation";
    CommonCtrlID[CommonCtrlID["Picture"] = makeCtrlID('$', 'p', 'i', 'c')] = "Picture";
    CommonCtrlID[CommonCtrlID["OLE"] = makeCtrlID('$', 'o', 'l', 'e')] = "OLE";
    CommonCtrlID[CommonCtrlID["Connected"] = makeCtrlID('$', 'c', 'o', 'n')] = "Connected";
    CommonCtrlID[CommonCtrlID["GenShapeObject"] = makeCtrlID('g', 's', 'o', ' ')] = "GenShapeObject";
  })(CommonCtrlID || (CommonCtrlID = {}));

  var OtherCtrlID;

  (function (OtherCtrlID) {
    OtherCtrlID[OtherCtrlID["Section"] = makeCtrlID('s', 'e', 'c', 'd')] = "Section";
    OtherCtrlID[OtherCtrlID["Column"] = makeCtrlID('c', 'o', 'l', 'd')] = "Column";
    OtherCtrlID[OtherCtrlID["Header"] = makeCtrlID('h', 'e', 'a', 'd')] = "Header";
    OtherCtrlID[OtherCtrlID["Footer"] = makeCtrlID('f', 'o', 'o', 't')] = "Footer";
    OtherCtrlID[OtherCtrlID["Footnote"] = makeCtrlID('f', 'n', ' ', ' ')] = "Footnote";
    OtherCtrlID[OtherCtrlID["Endnote"] = makeCtrlID('e', 'n', ' ', ' ')] = "Endnote";
    OtherCtrlID[OtherCtrlID["AutoNumber"] = makeCtrlID('a', 't', 'n', 'o')] = "AutoNumber";
    OtherCtrlID[OtherCtrlID["NewNumber"] = makeCtrlID('n', 'w', 'n', 'o')] = "NewNumber";
    OtherCtrlID[OtherCtrlID["PageHide"] = makeCtrlID('p', 'g', 'h', 'd')] = "PageHide";
    OtherCtrlID[OtherCtrlID["PageCT"] = makeCtrlID('p', 'g', 'c', 't')] = "PageCT";
    OtherCtrlID[OtherCtrlID["PageNumberPosition"] = makeCtrlID('p', 'g', 'n', 'p')] = "PageNumberPosition";
    OtherCtrlID[OtherCtrlID["Indexmark"] = makeCtrlID('i', 'd', 'x', 'm')] = "Indexmark";
    OtherCtrlID[OtherCtrlID["Bookmark"] = makeCtrlID('b', 'o', 'k', 'm')] = "Bookmark";
    OtherCtrlID[OtherCtrlID["Overlapping"] = makeCtrlID('t', 'c', 'p', 's')] = "Overlapping";
    OtherCtrlID[OtherCtrlID["Comment"] = makeCtrlID('t', 'd', 'u', 't')] = "Comment";
    OtherCtrlID[OtherCtrlID["HiddenComment"] = makeCtrlID('t', 'c', 'm', 't')] = "HiddenComment";
  })(OtherCtrlID || (OtherCtrlID = {}));

  var FieldCtrlID;

  (function (FieldCtrlID) {
    FieldCtrlID[FieldCtrlID["Unknown"] = makeCtrlID('%', 'u', 'n', 'k')] = "Unknown";
    FieldCtrlID[FieldCtrlID["Date"] = makeCtrlID('$', 'd', 't', 'e')] = "Date";
    FieldCtrlID[FieldCtrlID["DocDate"] = makeCtrlID('%', 'd', 'd', 't')] = "DocDate";
    FieldCtrlID[FieldCtrlID["Path"] = makeCtrlID('%', 'p', 'a', 't')] = "Path";
    FieldCtrlID[FieldCtrlID["Bookmark"] = makeCtrlID('%', 'b', 'm', 'k')] = "Bookmark";
    FieldCtrlID[FieldCtrlID["MailMerge"] = makeCtrlID('%', 'm', 'm', 'g')] = "MailMerge";
    FieldCtrlID[FieldCtrlID["CrossRef"] = makeCtrlID('%', 'x', 'r', 'f')] = "CrossRef";
    FieldCtrlID[FieldCtrlID["Formula"] = makeCtrlID('%', 'f', 'm', 'u')] = "Formula";
    FieldCtrlID[FieldCtrlID["ClickHere"] = makeCtrlID('%', 'c', 'l', 'k')] = "ClickHere";
    FieldCtrlID[FieldCtrlID["Summary"] = makeCtrlID('$', 's', 'm', 'r')] = "Summary";
    FieldCtrlID[FieldCtrlID["UserInfo"] = makeCtrlID('%', 'u', 's', 'r')] = "UserInfo";
    FieldCtrlID[FieldCtrlID["HyperLink"] = makeCtrlID('%', 'h', 'l', 'k')] = "HyperLink";
    FieldCtrlID[FieldCtrlID["RevisionSign"] = makeCtrlID('%', 's', 'i', 'g')] = "RevisionSign";
    FieldCtrlID[FieldCtrlID["RevisionDelete"] = makeCtrlID('%', '%', '*', 'd')] = "RevisionDelete";
    FieldCtrlID[FieldCtrlID["RevisionAttach"] = makeCtrlID('%', '%', '*', 'a')] = "RevisionAttach";
    FieldCtrlID[FieldCtrlID["RevisionClipping"] = makeCtrlID('%', '%', '*', 'C')] = "RevisionClipping";
    FieldCtrlID[FieldCtrlID["RevisionSawtooth"] = makeCtrlID('%', '%', '*', 'S')] = "RevisionSawtooth";
    FieldCtrlID[FieldCtrlID["RevisionThinking"] = makeCtrlID('%', '%', '*', 'T')] = "RevisionThinking";
    FieldCtrlID[FieldCtrlID["RevisionPraise"] = makeCtrlID('%', '%', '*', 'P')] = "RevisionPraise";
    FieldCtrlID[FieldCtrlID["RevisionLine"] = makeCtrlID('%', '%', '*', 'L')] = "RevisionLine";
    FieldCtrlID[FieldCtrlID["RevisionSimpleChange"] = makeCtrlID('%', '%', '*', 'c')] = "RevisionSimpleChange";
    FieldCtrlID[FieldCtrlID["RevisionHyperLink"] = makeCtrlID('%', '%', '*', 'h')] = "RevisionHyperLink";
    FieldCtrlID[FieldCtrlID["RevisionLineAttach"] = makeCtrlID('%', '%', '*', 'A')] = "RevisionLineAttach";
    FieldCtrlID[FieldCtrlID["RevisionLineLink"] = makeCtrlID('%', '%', '*', 'i')] = "RevisionLineLink";
    FieldCtrlID[FieldCtrlID["RevisionLineRansfer"] = makeCtrlID('%', '%', '*', 't')] = "RevisionLineRansfer";
    FieldCtrlID[FieldCtrlID["RevisionRightMove"] = makeCtrlID('%', '%', '*', 'r')] = "RevisionRightMove";
    FieldCtrlID[FieldCtrlID["RevisionLeftMove"] = makeCtrlID('%', '%', '*', 'l')] = "RevisionLeftMove";
    FieldCtrlID[FieldCtrlID["RevisionTransfer"] = makeCtrlID('%', '%', '*', 'n')] = "RevisionTransfer";
    FieldCtrlID[FieldCtrlID["RevisionSimpleInsert"] = makeCtrlID('%', '%', '*', 'e')] = "RevisionSimpleInsert";
    FieldCtrlID[FieldCtrlID["RevisionSplit"] = makeCtrlID('%', 's', 'p', 'l')] = "RevisionSplit";
    FieldCtrlID[FieldCtrlID["RevisionChange"] = makeCtrlID('%', '%', 'm', 'r')] = "RevisionChange";
    FieldCtrlID[FieldCtrlID["Memo"] = makeCtrlID('%', '%', 'm', 'e')] = "Memo";
    FieldCtrlID[FieldCtrlID["PrivateInfoSecurity"] = makeCtrlID('%', 'c', 'p', 'r')] = "PrivateInfoSecurity";
    FieldCtrlID[FieldCtrlID["TableOfContents"] = makeCtrlID('%', 't', 'o', 'c')] = "TableOfContents";
  })(FieldCtrlID || (FieldCtrlID = {}));

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var CommonAttribute = function CommonAttribute() {
    _classCallCheck(this, CommonAttribute);

    _defineProperty(this, "vertRelTo", 0);
  };

  var CommonControl = /*#__PURE__*/function () {
    function CommonControl() {
      _classCallCheck(this, CommonControl);

      _defineProperty(this, "id", 0);

      _defineProperty(this, "attribute", new CommonAttribute());

      _defineProperty(this, "verticalOffset", 0);

      _defineProperty(this, "horizontalOffset", 0);

      _defineProperty(this, "width", 0);

      _defineProperty(this, "height", 0);

      _defineProperty(this, "zIndex", 0);

      _defineProperty(this, "margin", [0, 0, 0, 0]);

      _defineProperty(this, "uid", 0);

      _defineProperty(this, "split", 0);
    }

    _createClass(CommonControl, [{
      key: "setAttribute",
      value: function setAttribute(mask) {
        this.attribute.vertRelTo = getBitValue(mask, 3, 4);
      }
    }]);

    return CommonControl;
  }();

  var ShapeControl = /*#__PURE__*/function (_CommonControl) {
    _inherits(ShapeControl, _CommonControl);

    var _super = _createSuper(ShapeControl);

    function ShapeControl() {
      var _this;

      _classCallCheck(this, ShapeControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "type", 0);

      _defineProperty(_assertThisInitialized(_this), "info", null);

      _defineProperty(_assertThisInitialized(_this), "content", []);

      return _this;
    }

    return ShapeControl;
  }(CommonControl);

  var TableControl = /*#__PURE__*/function (_CommonControl) {
    _inherits(TableControl, _CommonControl);

    var _super = _createSuper(TableControl);

    function TableControl() {
      var _this;

      _classCallCheck(this, TableControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "tableAttribute", 0);

      _defineProperty(_assertThisInitialized(_this), "rowCount", 0);

      _defineProperty(_assertThisInitialized(_this), "columnCount", 0);

      _defineProperty(_assertThisInitialized(_this), "borderFillID", 0);

      _defineProperty(_assertThisInitialized(_this), "content", []);

      return _this;
    }

    _createClass(TableControl, [{
      key: "addRow",
      value: function addRow(row, list) {
        if (!this.content[row]) {
          this.content[row] = [];
        }

        this.content[row].push(list);
      }
    }]);

    return TableControl;
  }(CommonControl);

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Section = function Section() {
    _classCallCheck(this, Section);

    _defineProperty(this, "width", 0);

    _defineProperty(this, "height", 0);

    _defineProperty(this, "paddingLeft", 0);

    _defineProperty(this, "paddingRight", 0);

    _defineProperty(this, "paddingTop", 0);

    _defineProperty(this, "paddingBottom", 0);

    _defineProperty(this, "headerPadding", 0);

    _defineProperty(this, "footerPadding", 0);

    _defineProperty(this, "content", []);

    _defineProperty(this, "orientation", 0);

    _defineProperty(this, "bookBindingMethod", 0);
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Paragraph = /*#__PURE__*/function () {
    function Paragraph() {
      _classCallCheck(this, Paragraph);

      _defineProperty(this, "content", []);

      _defineProperty(this, "shapeBuffer", []);

      _defineProperty(this, "controls", []);

      _defineProperty(this, "lineSegments", []);

      _defineProperty(this, "shapeIndex", 0);

      _defineProperty(this, "aligns", 0);

      _defineProperty(this, "textSize", 0);
    }

    _createClass(Paragraph, [{
      key: "getShapeEndPos",
      value: function getShapeEndPos(index) {
        if (index === this.shapeBuffer.length - 1) {
          return this.content.length - 1;
        }

        return this.shapeBuffer[index + 1].pos - 1;
      }
    }, {
      key: "getNextSize",
      value: function getNextSize(index) {
        var next = this.lineSegments[index + 1];

        if (!next) {
          return this.textSize;
        }

        return next.start;
      }
    }]);

    return Paragraph;
  }();

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var ParagraphList = function ParagraphList(attribute, items) {
    _classCallCheck(this, ParagraphList);

    _defineProperty(this, "attribute", void 0);

    _defineProperty(this, "items", []);

    this.attribute = attribute;
    this.items = items;
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var CharType;

  (function (CharType) {
    CharType[CharType["Char"] = 0] = "Char";
    CharType[CharType["Inline"] = 1] = "Inline";
    CharType[CharType["Extened"] = 2] = "Extened";
  })(CharType || (CharType = {}));

  var HWPChar = function HWPChar(type, value) {
    _classCallCheck(this, HWPChar);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "value", void 0);

    this.type = type;
    this.value = value;
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var ShapePointer = function ShapePointer(pos, shapeIndex) {
    _classCallCheck(this, ShapePointer);

    _defineProperty(this, "pos", 0);

    _defineProperty(this, "shapeIndex", 0);

    this.pos = pos;
    this.shapeIndex = shapeIndex;
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var LineSegment = function LineSegment() {
    _classCallCheck(this, LineSegment);

    _defineProperty(this, "start", 0);

    _defineProperty(this, "y", 0);

    _defineProperty(this, "height", 0);

    _defineProperty(this, "textHeight", 0);

    _defineProperty(this, "baseLineGap", 0);

    _defineProperty(this, "lineSpacing", 0);

    _defineProperty(this, "startByte", 0);

    _defineProperty(this, "width", 0);
  };

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var RecordReader = /*#__PURE__*/function () {
    function RecordReader(records) {
      _classCallCheck(this, RecordReader);

      _defineProperty(this, "cursor", void 0);

      _defineProperty(this, "records", void 0);

      this.records = records;
      this.cursor = 0;
    }

    _createClass(RecordReader, [{
      key: "hasNext",
      value: function hasNext() {
        return this.cursor < this.records.length;
      }
    }, {
      key: "current",
      value: function current() {
        return this.records[this.cursor];
      }
    }, {
      key: "read",
      value: function read() {
        var result = this.records[this.cursor];
        this.cursor += 1;
        return result;
      }
    }]);

    return RecordReader;
  }();

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function isTable(control) {
    return control.id === CommonCtrlID.Table;
  }
  function isShape(control) {
    return control.id === CommonCtrlID.GenShapeObject;
  }
  function isPicture(control) {
    return control.type === CommonCtrlID.Picture;
  }

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var ColumnType;

  (function (ColumnType) {
    ColumnType[ColumnType["Normal"] = 0] = "Normal";
    ColumnType[ColumnType["Parallel"] = 1] = "Parallel";
    ColumnType[ColumnType["Justify"] = 2] = "Justify";
  })(ColumnType || (ColumnType = {}));

  var ColumnDirection;

  (function (ColumnDirection) {
    ColumnDirection[ColumnDirection["Left"] = 0] = "Left";
    ColumnDirection[ColumnDirection["Right"] = 1] = "Right";
    ColumnDirection[ColumnDirection["Justify"] = 2] = "Justify";
  })(ColumnDirection || (ColumnDirection = {}));

  var ColumnControl = function ColumnControl() {
    _classCallCheck(this, ColumnControl);

    _defineProperty(this, "id", 0);

    _defineProperty(this, "type", ColumnType.Normal);

    _defineProperty(this, "count", 0);

    _defineProperty(this, "direction", ColumnDirection.Left);

    _defineProperty(this, "isSameWidth", true);

    _defineProperty(this, "gap", 0);

    _defineProperty(this, "widths", []);

    _defineProperty(this, "borderStyle", 0);

    _defineProperty(this, "borderWidth", 0);

    _defineProperty(this, "borderColor", 0);
  };

  var SectionParser = /*#__PURE__*/function () {
    function SectionParser(data) {
      _classCallCheck(this, SectionParser);

      _defineProperty(this, "record", void 0);

      _defineProperty(this, "result", void 0);

      _defineProperty(this, "content", []);

      this.record = parseRecordTree(data);
      this.result = new Section();
    }

    _createClass(SectionParser, [{
      key: "visitPageDef",
      value: function visitPageDef(record) {
        var reader = new ByteReader(record.payload);
        this.result.width = reader.readUInt32();
        this.result.height = reader.readUInt32();
        this.result.paddingLeft = reader.readUInt32();
        this.result.paddingRight = reader.readUInt32();
        this.result.paddingTop = reader.readUInt32();
        this.result.paddingBottom = reader.readUInt32();
        this.result.headerPadding = reader.readUInt32();
        this.result.footerPadding = reader.readUInt32();
        var property = reader.readUInt32();
        this.result.orientation = getBitValue(property, 0, 0);
        this.result.bookBindingMethod = getBitValue(property, 1, 2);
      } // TODO: (@hahnlee) mapper 패턴 사용하기

    }, {
      key: "visitParaText",
      value: function visitParaText(record, paragraph) {
        var reader = new ByteReader(record.payload);
        var readByte = 0;

        while (readByte < record.size) {
          var charCode = reader.readUInt16();

          switch (charCode) {
            // Char
            case 0:
            case 10:
            case 13:
              {
                paragraph.content.push(new HWPChar(CharType.Char, charCode));
                paragraph.textSize += 1;
                readByte += 2;
                break;
              }
            // Inline

            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 19:
            case 20:
              {
                paragraph.content.push(new HWPChar(CharType.Inline, charCode));
                paragraph.textSize += 8;
                reader.skipByte(14);
                readByte += 16;
                break;
              }
            // Extened

            case 1:
            case 2:
            case 3:
            case 11:
            case 12:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 21:
            case 22:
            case 23:
              {
                paragraph.content.push(new HWPChar(CharType.Extened, charCode));
                reader.skipByte(14);
                paragraph.textSize += 8;
                readByte += 16;
                break;
              }

            default:
              {
                paragraph.content.push(new HWPChar(CharType.Char, String.fromCharCode(charCode)));
                paragraph.textSize += 1;
                readByte += 2;
              }
          }
        }
      }
    }, {
      key: "visitCharShape",
      value: function visitCharShape(record, paragraph) {
        var reader = new ByteReader(record.payload);
        var shapePointer = new ShapePointer(reader.readUInt32(), reader.readUInt32());
        paragraph.shapeBuffer.push(shapePointer);
      }
    }, {
      key: "visitCommonControl",
      value: function visitCommonControl(reader, control) {
        control.setAttribute(reader.readUInt32());
        control.verticalOffset = reader.readUInt32();
        control.horizontalOffset = reader.readUInt32();
        control.width = reader.readUInt32();
        control.height = reader.readUInt32();
        control.zIndex = reader.readUInt32();
        control.margin = [reader.readInt16(), reader.readInt16(), reader.readInt16(), reader.readInt16()];
        control.uid = reader.readUInt32();
        control.split = reader.readInt32();
      }
    }, {
      key: "visitTableControl",
      value: function visitTableControl(reader) {
        var tableControl = new TableControl();
        tableControl.id = CommonCtrlID.Table;
        this.visitCommonControl(reader, tableControl);
        return tableControl;
      }
    }, {
      key: "getControl",
      value: function getControl(reader) {
        var ctrlID = reader.readUInt32();

        if (ctrlID === CommonCtrlID.Table) {
          return this.visitTableControl(reader);
        }

        if (ctrlID === CommonCtrlID.GenShapeObject) {
          var shape = new ShapeControl();
          shape.id = ctrlID;
          this.visitCommonControl(reader, shape);
          return shape;
        }

        if (ctrlID === OtherCtrlID.Column) {
          var column = new ColumnControl();
          var attribute = reader.readUInt16();
          column.type = getBitValue(attribute, 0, 1);
          column.count = getBitValue(attribute, 2, 9);
          column.direction = getBitValue(attribute, 10, 11);
          column.isSameWidth = getFlag(attribute, 12);
          column.id = ctrlID;
          column.gap = reader.readUInt16();

          if (!column.isSameWidth) {
            var widths = [];

            for (var i = 0; i < column.count; i += 1) {
              widths.push(reader.readUInt16());
            }

            column.widths = widths;
          }

          reader.readUInt16();
          column.borderStyle = reader.readUInt8();
          column.borderWidth = reader.readUInt8();
          column.borderColor = reader.readUInt32();
          return column;
        }

        return {
          id: ctrlID
        };
      }
    }, {
      key: "visitControlHeader",
      value: function visitControlHeader(record, paragraph) {
        var reader = new ByteReader(record.payload);
        var control = this.getControl(reader);
        var childrenReader = new RecordReader(record.children);

        while (childrenReader.hasNext()) {
          this.visit(childrenReader, paragraph, control);
        }

        paragraph.controls.push(control);
      }
    }, {
      key: "visitCellListHeader",
      value: function visitCellListHeader(reader) {
        var option = {
          column: reader.readUInt16(),
          row: reader.readUInt16(),
          colSpan: reader.readUInt16(),
          rowSpan: reader.readUInt16(),
          width: reader.readUInt32(),
          height: reader.readUInt32(),
          padding: [reader.readUInt16(), reader.readUInt16(), reader.readUInt16(), reader.readUInt16()]
        }; // NOTE: (@hahnlee) 문서에선 필수인데 없는 경우도 있다 리서치 필요

        if (!reader.isEOF()) {
          option.borderFillID = reader.readUInt16() - 1;
        }

        return option;
      }
    }, {
      key: "visitListHeader",
      value: function visitListHeader(record, reader, control) {
        if (!control) {
          throw new Error("Except: control, Recived: ".concat(control));
        }

        var byteReader = new ByteReader(record.payload); // NOTE: (@hahnlee) 한글문서에선 readInt16으로 되어있으나 대부분의 경우 readInt32 으로 읽어야 문제가 없다
        // 리서치 필요

        var paragraphs = record.size === 30 ? byteReader.readInt16() : byteReader.readInt32(); // attribute

        byteReader.readUInt32();
        var items = [];

        for (var i = 0; i < paragraphs; i += 1) {
          var next = reader.read();
          this.visitParagraphHeader(next, items, control);
        }

        if (record.parentTagID === SectionTagID.HWPTAG_CTRL_HEADER) {
          if (isTable(control)) {
            var options = this.visitCellListHeader(byteReader);
            var list = new ParagraphList(options, items);
            control.addRow(options.row, list);
          }
        }

        if (record.parentTagID === SectionTagID.HWPTAG_SHAPE_COMPONENT) {
          if (isShape(control)) {
            control.content.push(new ParagraphList(null, items));
          }
        }
      }
    }, {
      key: "visitTable",
      value: function visitTable(record, control) {
        var reader = new ByteReader(record.payload);

        if (!control) {
          throw new Error('Expect control');
        }

        if (control.id !== CommonCtrlID.Table) {
          throw new Error("Expect: ".concat(CommonCtrlID.Table, ", Recived: ").concat(control.id));
        }

        control.tableAttribute = reader.readUInt32();
        control.rowCount = reader.readUInt16();
        control.columnCount = reader.readUInt16();
        reader.skipByte(10 + 2 * control.rowCount);
        control.borderFillID = reader.readUInt16();
      }
    }, {
      key: "visitShapeComponent",
      value: function visitShapeComponent(record, paragraph, control) {
        var childrenReader = new RecordReader(record.children);

        while (childrenReader.hasNext()) {
          this.visit(childrenReader, paragraph, control);
        }
      }
    }, {
      key: "visitPicture",
      value: function visitPicture(record, control) {
        if (!isShape(control)) {
          throw new Error('Control type not matched');
        }

        var reader = new ByteReader(record.payload);
        reader.skipByte(4 * 17 + 3);
        control.type = CommonCtrlID.Picture;
        control.info = {
          binID: reader.readUInt16() - 1
        };
      }
    }, {
      key: "visitLineSegment",
      value: function visitLineSegment(record, paragraph) {
        var reader = new ByteReader(record.payload);

        while (!reader.isEOF()) {
          var lineSegment = new LineSegment();
          lineSegment.start = reader.readUInt32();
          lineSegment.y = reader.readInt32();
          lineSegment.height = reader.readInt32();
          lineSegment.textHeight = reader.readInt32();
          lineSegment.baseLineGap = reader.readInt32();
          lineSegment.lineSpacing = reader.readInt32();
          lineSegment.startByte = reader.readInt32();
          lineSegment.width = reader.readInt32();
          reader.readUInt32();
          paragraph.lineSegments.push(lineSegment);
        }
      }
    }, {
      key: "visit",
      value: function visit(reader, paragraph, control) {
        var record = reader.read();

        switch (record.tagID) {
          case SectionTagID.HWPTAG_LIST_HEADER:
            {
              this.visitListHeader(record, reader, control);
              break;
            }

          case SectionTagID.HWPTAG_PAGE_DEF:
            {
              this.visitPageDef(record);
              break;
            }

          case SectionTagID.HWPTAG_PARA_TEXT:
            {
              this.visitParaText(record, paragraph);
              break;
            }

          case SectionTagID.HWPTAG_PARA_CHAR_SHAPE:
            {
              this.visitCharShape(record, paragraph);
              break;
            }

          case SectionTagID.HWPTAG_CTRL_HEADER:
            {
              this.visitControlHeader(record, paragraph);
              break;
            }

          case SectionTagID.HWPTAG_TABLE:
            {
              this.visitTable(record, control);
              break;
            }

          case SectionTagID.HWPTAG_SHAPE_COMPONENT:
            {
              this.visitShapeComponent(record, paragraph, control);
              break;
            }

          case SectionTagID.HWPTAG_SHAPE_COMPONENT_PICTURE:
            {
              this.visitPicture(record, control);
              break;
            }

          case SectionTagID.HWPTAG_PARA_LINE_SEG:
            {
              this.visitLineSegment(record, paragraph);
              break;
            }
        }
      }
    }, {
      key: "visitParagraphHeader",
      value: function visitParagraphHeader(record, content, control) {
        var result = new Paragraph();
        var reader = new ByteReader(record.payload);
        reader.skipByte(8);
        result.shapeIndex = reader.readUInt16();
        var childrenRecordReader = new RecordReader(record.children);

        while (childrenRecordReader.hasNext()) {
          this.visit(childrenRecordReader, result, control);
        }

        content.push(result);
      }
    }, {
      key: "traverse",
      value: function traverse(record) {
        var reader = new RecordReader(record.children);

        while (reader.hasNext()) {
          this.visitParagraphHeader(reader.read(), this.content);
        }
      }
    }, {
      key: "parse",
      value: function parse() {
        this.traverse(this.record);
        this.result.content = this.content;
        return this.result;
      }
    }]);

    return SectionParser;
  }();

  var FILE_HEADER_BYTES = 256;
  var SUPPORTED_VERSION = new HWPVersion(5, 1, 0, 0);
  var SIGNATURE = 'HWP Document File';

  function parseFileHeader(container) {
    var fileHeader = cfb.find(container, 'FileHeader');

    if (!fileHeader) {
      throw new Error('Cannot find FileHeader');
    }

    var content = fileHeader.content;

    if (content.length !== FILE_HEADER_BYTES) {
      throw new Error("FileHeader must be ".concat(FILE_HEADER_BYTES, " bytes, Received: ").concat(content.length));
    }

    var signature = String.fromCharCode.apply(String, _toConsumableArray(Array.from(content.slice(0, 17))));

    if (SIGNATURE !== signature) {
      throw new Error("hwp file's signature should be ".concat(SIGNATURE, ". Received version: ").concat(signature));
    }

    var _Array$from$reverse = Array.from(content.slice(32, 36)).reverse(),
        _Array$from$reverse2 = _slicedToArray(_Array$from$reverse, 4),
        major = _Array$from$reverse2[0],
        minor = _Array$from$reverse2[1],
        build = _Array$from$reverse2[2],
        revision = _Array$from$reverse2[3];

    var version = new HWPVersion(major, minor, build, revision);

    if (!version.isCompatible(SUPPORTED_VERSION)) {
      throw new Error("hwp.js only support ".concat(SUPPORTED_VERSION, " format. Received version: ").concat(version));
    }

    return new HWPHeader(version, signature);
  }

  function parseDocInfo(container) {
    var docInfoEntry = cfb.find(container, 'DocInfo');

    if (!docInfoEntry) {
      throw new Error('DocInfo not exist');
    }

    var content = docInfoEntry.content;
    var decodedContent = pako_1.inflate(content, {
      windowBits: -15
    });
    return new DocInfoParser(decodedContent, container).parse();
  }

  function parseSection(container, sectionNumber) {
    var section = cfb.find(container, "Root Entry/BodyText/Section".concat(sectionNumber));

    if (!section) {
      throw new Error('Section not exist');
    }

    var content = section.content;
    var decodedContent = pako_1.inflate(content, {
      windowBits: -15
    });
    return new SectionParser(decodedContent).parse();
  }

  function parse(input, options) {
    var container = cfb.read(input, options);
    var header = parseFileHeader(container);
    var docInfo = parseDocInfo(container);
    var sections = [];

    for (var i = 0; i < docInfo.sectionSize; i += 1) {
      sections.push(parseSection(container, i));
    }

    return new HWPDocument(header, docInfo, sections);
  }

  function splitTable(table, overflowColumns, currentHeight, contentHeight) {
    var targetHeight = currentHeight;
    var tableHeight = 0;
    var splitRowIndex = -1;
    var overflow = overflowColumns;
    var columns = [];
    var rowHeights = [];

    for (var i = 0; i < table.length; i += 1) {
      var row = table[i];
      var rowHeight = Math.min.apply(Math, _toConsumableArray(row.map(function (column) {
        return column.attribute.height;
      })));
      rowHeights.push(rowHeight);
      tableHeight += rowHeight;

      if (targetHeight >= tableHeight) {
        columns.push(row);
      } else {
        splitRowIndex = i;
        break;
      }
    }

    for (var _i = 0; _i < overflow.length; _i += 1) {
      var firstRow = columns[0];
      var column = overflow[_i];

      if (column) {
        firstRow.splice(column.attribute.column, 0, column);
      }
    }

    overflow = [];
    columns.forEach(function (row, rowIndex) {
      row.forEach(function (column) {
        if (column.attribute.height > targetHeight) {
          var columnHeight = column.attribute.height;
          var columnRowSpan = column.attribute.rowSpan;
          var nextRowSpan = columnRowSpan - (splitRowIndex - rowIndex - 2);
          column.attribute.height = targetHeight;
          column.attribute.rowSpan = nextRowSpan;
          overflow[column.attribute.column] = new ParagraphList(_objectSpread2(_objectSpread2({}, column.attribute), {}, {
            row: 0,
            height: columnHeight - targetHeight,
            rowSpan: columnRowSpan - nextRowSpan
          }), []);
        }
      });
      targetHeight -= rowHeights[rowIndex];
    });

    if (splitRowIndex < 0) {
      return [columns];
    }

    var next = splitTable(table.slice(splitRowIndex), overflow, contentHeight, contentHeight);
    return [columns].concat(_toConsumableArray(next));
  }

  var PageBuilder = /*#__PURE__*/function () {
    function PageBuilder(section) {
      var _this = this;

      _classCallCheck(this, PageBuilder);

      _defineProperty(this, "section", void 0);

      _defineProperty(this, "currentSection", void 0);

      _defineProperty(this, "currentParagraph", new Paragraph());

      _defineProperty(this, "readIndex", 0);

      _defineProperty(this, "contentHeight", 0);

      _defineProperty(this, "currentHeight", 0);

      _defineProperty(this, "controlIndex", 0);

      _defineProperty(this, "startChatIndex", 0);

      _defineProperty(this, "endCharIndex", 0);

      _defineProperty(this, "shapeBufferIndex", 0);

      _defineProperty(this, "latestY", 0);

      _defineProperty(this, "result", []);

      _defineProperty(this, "visitParagraph", function (paragraph) {
        _this.readIndex = 0;
        _this.controlIndex = 0;
        _this.startChatIndex = 0;
        _this.endCharIndex = 0;
        _this.shapeBufferIndex = 0;
        _this.currentParagraph = new Paragraph();
        paragraph.lineSegments.forEach(function (lineSegment, index) {
          _this.visitLine(lineSegment, index, paragraph);
        });

        _this.exitParagraph(paragraph);
      });

      this.section = section;
      this.currentSection = this.createSection();
      this.contentHeight = section.height - section.headerPadding - section.footerPadding - section.paddingTop - section.paddingBottom;
    }

    _createClass(PageBuilder, [{
      key: "createSection",
      value: function createSection() {
        var session = new Section();
        session.width = this.section.width;
        session.height = this.section.height;
        session.paddingTop = this.section.paddingTop;
        session.paddingRight = this.section.paddingRight;
        session.paddingBottom = this.section.paddingBottom;
        session.paddingLeft = this.section.paddingLeft;
        session.headerPadding = this.section.headerPadding;
        session.footerPadding = this.section.footerPadding;
        return session;
      }
    }, {
      key: "getLine",
      value: function getLine(lineSegment, index, paragraph) {
        var start = lineSegment.start;
        var nextSize = paragraph.getNextSize(index);
        var line = [];
        var read = start;

        while (read < nextSize) {
          var _char = paragraph.content[this.readIndex];

          if (_char.type === CharType.Char) {
            read += 1;
          } else {
            read += 8;
          }

          line.push(_char);
          this.readIndex += 1;
        }

        return line;
      }
    }, {
      key: "checkoutShpeBuffer",
      value: function checkoutShpeBuffer(paragraph) {
        var endIndex = paragraph.getShapeEndPos(this.shapeBufferIndex);
        var startIndex = 0;

        while (this.endCharIndex <= endIndex && this.shapeBufferIndex < paragraph.shapeBuffer.length - 1) {
          endIndex = paragraph.getShapeEndPos(this.shapeBufferIndex);
          var _shapeBuffer = paragraph.shapeBuffer[this.shapeBufferIndex];
          this.currentParagraph.shapeBuffer.push({
            shapeIndex: _shapeBuffer.shapeIndex,
            pos: startIndex
          });
          startIndex += endIndex - this.startChatIndex - startIndex;
          this.shapeBufferIndex += 1;
        }

        var shapeBuffer = paragraph.shapeBuffer[this.shapeBufferIndex];
        this.currentParagraph.shapeBuffer.push({
          shapeIndex: shapeBuffer.shapeIndex,
          pos: startIndex
        });
      }
    }, {
      key: "exitParagraph",
      value: function exitParagraph(paragraph) {
        this.checkoutShpeBuffer(paragraph);
        this.currentSection.content.push(this.currentParagraph);
      }
    }, {
      key: "exitPage",
      value: function exitPage(paragraph) {
        this.exitParagraph(paragraph);
        this.result.push(this.currentSection); // Reset

        this.currentSection = this.createSection();
        this.currentParagraph = new Paragraph();
        this.currentParagraph.shapeIndex = paragraph.shapeIndex;
        this.currentHeight = 0;
      }
    }, {
      key: "createTable",
      value: function createTable(list, width) {
        var height = list.reduce(function (result, current) {
          var columnHeight = Math.min.apply(Math, _toConsumableArray(current.map(function (c) {
            return c.attribute.height;
          })));
          return result + columnHeight;
        }, 0);
        var control = new TableControl();
        control.id = CommonCtrlID.Table;
        control.width = width;
        control.height = height;
        control.content = list;
        control.rowCount = list.length;
        return control;
      }
    }, {
      key: "visitLine",
      value: function visitLine(lineSegment, index, paragraph) {
        var _this2 = this;

        var line = this.getLine(lineSegment, index, paragraph);

        if (lineSegment.y === 0 || lineSegment.y < this.latestY) {
          this.exitPage(paragraph);
          this.startChatIndex = this.endCharIndex;
          this.currentHeight = 0;
        }

        this.latestY = lineSegment.y;
        this.currentHeight += lineSegment.height + lineSegment.lineSpacing;
        line.forEach(function (content) {
          if (content.type !== CharType.Extened) {
            _this2.currentParagraph.content.push(content);

            _this2.endCharIndex += 1;
            return;
          }

          var control = paragraph.controls[_this2.controlIndex];
          _this2.controlIndex += 1;

          if (!isTable(control)) {
            _this2.currentParagraph.content.push(content);

            _this2.currentParagraph.controls.push(control);

            _this2.endCharIndex += 1;
            return;
          }

          _this2.currentHeight -= lineSegment.height + lineSegment.lineSpacing;
          var tables = splitTable(control.content, [], _this2.contentHeight - _this2.currentHeight, _this2.contentHeight).map(function (table) {
            return _this2.createTable(table, control.width);
          });
          tables.forEach(function (table, tableIndex) {
            _this2.currentParagraph.content.push(content);

            _this2.currentParagraph.controls.push(table);

            if (tables.length > 1 && tableIndex !== tables.length - 1) {
              _this2.exitPage(paragraph);

              _this2.startChatIndex = _this2.endCharIndex;
            }
          });
          _this2.currentHeight += tables[tables.length - 1].height;
          _this2.endCharIndex += 1;
        });
      }
    }, {
      key: "build",
      value: function build() {
        this.section.content.forEach(this.visitParagraph);
        this.result.shift();
        this.result.push(this.currentSection);
        return this.result;
      }
    }]);

    return PageBuilder;
  }();

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  function parsePage(doc) {
    var sections = [];
    doc.sections.forEach(function (section) {
      sections = sections.concat(new PageBuilder(section).build());
    });
    doc.sections = sections;
    return doc;
  }

  /**
   * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * LICENSE FOR https://github.com/szepeshazi/print-elements
   *
   * MIT License
   *
   * Copyright (c) 2019 András Szepesházi
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var hideFromPrintClass = 'hwpjs-pe-no-print';
  var preservePrintClass = 'hwpjs-pe-preserve-print';
  var preserveAncestorClass = 'hwpjs-pe-preserve-ancestor';
  var bodyElementName = 'BODY';

  function walkTree(element, callback) {
    var currentElement = element;
    callback(currentElement, true);
    currentElement = currentElement.parentElement;

    while (currentElement && currentElement.nodeName !== bodyElementName) {
      callback(currentElement, false);
      currentElement = currentElement.parentElement;
    }
  }

  function walkSiblings(element, callback) {
    var sibling = element.previousElementSibling;

    while (sibling) {
      callback(sibling, false);
      sibling = sibling.previousElementSibling;
    }

    sibling = element.nextElementSibling;

    while (sibling) {
      callback(sibling, false);
      sibling = sibling.nextElementSibling;
    }
  }

  function printFrame(elements) {
    var printStyle = "\n    @page {\n      margin: 0;\n    }\n\n    @media print {\n      html, body {\n        width: 100%;\n        height: 100%;\n        background-color: #FFF;\n      }\n\n      .".concat(hideFromPrintClass, " {\n        display: none !important;\n      }\n\n      .").concat(preserveAncestorClass, " {\n        display: block !important;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: none !important;\n        box-shadow: none !important;\n        overflow: visible !important;\n      }\n\n      .").concat(preserveAncestorClass, " > *  {\n        box-shadow: none !important;\n        overflow: visible !important;\n      }\n\n      .").concat(preservePrintClass, " {\n        box-shadow: none !important;\n        height: 100% !important;\n        margin: 0 !important;\n      }\n\n      * {\n        -webkit-print-color-adjust: exact !important;\n        color-adjust: exact !important;\n      }\n    }\n  ");
    var styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = printStyle;
    document.head.appendChild(styleSheet);

    var hide = function hide(element) {
      if (!element.classList.contains(preservePrintClass)) {
        element.classList.add(hideFromPrintClass);
      }
    };

    var preserve = function preserve(element, isStartingElement) {
      element.classList.remove(hideFromPrintClass);
      element.classList.add(preservePrintClass);

      if (!isStartingElement) {
        element.classList.add(preserveAncestorClass);
      }
    };

    var clean = function clean(element) {
      element.classList.remove(hideFromPrintClass);
      element.classList.remove(preservePrintClass);
      element.classList.remove(preserveAncestorClass);
    };

    elements.forEach(function (i) {
      walkTree(i, function (element, isStartingElement) {
        preserve(element, isStartingElement);
        walkSiblings(element, hide);
      });
    });
    window.print();
    elements.forEach(function (i) {
      walkTree(i, function (element) {
        clean(element);
        walkSiblings(element, clean);
      });
    });
    styleSheet.remove();
  }

  var Header = /*#__PURE__*/function () {
    function Header(view, content, pages) {
      var _this = this;

      _classCallCheck(this, Header);

      _defineProperty(this, "pages", void 0);

      _defineProperty(this, "observer", void 0);

      _defineProperty(this, "container", void 0);

      _defineProperty(this, "content", void 0);

      _defineProperty(this, "modal", null);

      _defineProperty(this, "pageNumber", null);

      _defineProperty(this, "infoButton", null);

      _defineProperty(this, "printButton", null);

      _defineProperty(this, "handleModalClick", function (event) {
        if (event.currentTarget !== event.target) return;

        if (_this.modal) {
          _this.modal.style.display = 'none';
        }
      });

      _defineProperty(this, "handleInfoButtionClick", function () {
        if (_this.modal) {
          _this.modal.style.display = 'flex';
        }
      });

      _defineProperty(this, "handlePrintButtionClick", function () {
        printFrame(_this.pages);
      });

      this.content = content;
      this.pages = pages;
      this.container = this.drawContainer(view);
      this.modal = this.drawModal(view);
      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (entry.isIntersecting && entry.target.parentElement) {
              var page = entry.target.getAttribute('data-page-number');
              var pageNumber = Number(page) + 1;

              _this.updatePageNumber(pageNumber);
            }
          }
        });
      }, {
        root: this.content,
        rootMargin: '0px'
      });
      this.pages.forEach(function (page) {
        _this.observer.observe(page.querySelector('.hwpjs-observer'));
      });
      this.draw();

      if (!document.getElementById('hwpjs-header-css')) {
        var buttonStyle = "\n      .hwpjs-header-control {\n        transition: background .2s;\n      }\n      .hwpjs-header-control:hover {\n        background: #DDD;\n      }\n      .hwpjs-header-control:active {\n        background: #AAA;\n      }\n      ";
        var styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.id = 'hwpjs-header-css';
        styleSheet.innerText = buttonStyle;
        document.head.appendChild(styleSheet);
      }
    }

    _createClass(Header, [{
      key: "updatePageNumber",
      value: function updatePageNumber(pageNumber) {
        if (this.pageNumber) {
          this.pageNumber.textContent = pageNumber.toString();
        }
      }
    }, {
      key: "distory",
      value: function distory() {
        var _this2 = this,
            _this$modal,
            _this$infoButton,
            _this$printButton;

        this.pages.forEach(function (page) {
          _this2.observer.unobserve(page);
        });
        (_this$modal = this.modal) === null || _this$modal === void 0 ? void 0 : _this$modal.removeEventListener('click', this.handleModalClick);
        this.modal = null;
        (_this$infoButton = this.infoButton) === null || _this$infoButton === void 0 ? void 0 : _this$infoButton.removeEventListener('click', this.handleInfoButtionClick);
        this.infoButton = null;
        (_this$printButton = this.printButton) === null || _this$printButton === void 0 ? void 0 : _this$printButton.removeEventListener('click', this.handleInfoButtionClick);
        this.printButton = null;
        this.pageNumber = null;
      }
    }, {
      key: "drawContainer",
      value: function drawContainer(container) {
        var header = document.createElement('div');
        header.style.position = 'absolute';
        header.style.zIndex = '1';
        header.style.top = '0';
        header.style.right = '0';
        header.style.left = '0';
        header.style.boxShadow = '0 1px 3px rgba(204, 204, 204, 1)';
        header.style.backgroundColor = 'rgb(249, 249, 250)';
        header.style.height = '32px';
        var content = document.createElement('div');
        content.style.display = 'flex';
        content.style.alignItems = 'center';
        content.style.height = '100%';
        content.style.margin = '0 auto';
        content.style.maxWidth = '1000px';
        content.style.width = '100%';
        content.style.padding = '0 24px';
        header.appendChild(content);
        container.appendChild(header);
        return content;
      }
    }, {
      key: "drawModal",
      value: function drawModal(view) {
        var modal = document.createElement('div');
        modal.style.position = 'absolute';
        modal.style.zIndex = '2';
        modal.style.top = '0';
        modal.style.right = '0';
        modal.style.bottom = '0';
        modal.style.left = '0';
        modal.style.background = 'rgba(0, 0, 0, 0.7)';
        modal.style.display = 'none';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.cursor = 'pointer';
        var content = document.createElement('div');
        content.style.background = '#FFF';
        content.style.borderRadius = '5px';
        content.style.padding = '0 24px';
        content.style.cursor = 'initial';
        content.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        var title = document.createElement('h1');
        var link = document.createElement('a');
        link.href = 'https://github.com/hahnlee/hwp.js';
        link.textContent = 'hwp.js';
        link.target = '_blink';
        link.rel = 'noopener noreferrer';
        title.appendChild(link);
        var description = document.createElement('p');
        description.textContent = '본 제품은 한글과컴퓨터의 한/글 문서 파일(.hwp) 공개 문서를 참고하여 개발하였습니다.';
        var copyright = document.createElement('p');
        copyright.textContent = 'Copyright 2020 Han Lee <hanlee.dev@gmail.com> and other contributors.';
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(copyright);
        modal.appendChild(content);
        view.appendChild(modal);
        modal.addEventListener('click', this.handleModalClick);
        return modal;
      }
    }, {
      key: "drawPageNumber",
      value: function drawPageNumber() {
        this.pageNumber = document.createElement('span');
        this.pageNumber.textContent = '1';
        var totalPages = document.createElement('span');
        totalPages.textContent = "/".concat(this.pages.length, "\uCABD");
        this.container.appendChild(this.pageNumber);
        this.container.appendChild(totalPages);
      }
    }, {
      key: "drawInfoIcon",
      value: function drawInfoIcon() {
        var buttion = document.createElement('div');
        buttion.style.marginLeft = '10px';
        buttion.style.cursor = 'pointer';
        buttion.style.height = '100%';
        buttion.style.padding = '5px';
        buttion.classList.add('hwpjs-header-control');
        buttion.innerHTML = '<svg width="393" height="394" viewBox="0 0 393 394" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden" style="height: 100%;width: auto;"><defs><clipPath id="hwpjs-header-info"><rect x="463" y="144" width="393" height="394"/></clipPath></defs><g clip-path="url(#--hwpjs-header-info)" transform="translate(-463 -144)"><path d="M640.245 292.076 640.245 471.79 678.755 471.79 678.755 292.076ZM640.245 209.21 640.245 247.602 678.755 247.602 678.755 209.21ZM463 144 856 144 856 537 463 537Z" fill-rule="evenodd"/></g></svg>';
        buttion.addEventListener('click', this.handleInfoButtionClick);
        this.container.appendChild(buttion);
        this.infoButton = buttion;
      }
    }, {
      key: "drawPrintIcon",
      value: function drawPrintIcon() {
        var buttion = document.createElement('div');
        buttion.style.cursor = 'pointer';
        buttion.style.height = '100%';
        buttion.style.padding = '5px';
        buttion.classList.add('hwpjs-header-control');
        buttion.innerHTML = '<svg width="284" height="253" viewBox="0 0 284 253" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden" style="height: 100%;width: auto;"><defs><clipPath id="hwpjs-header-print"><rect x="498" y="82" width="284" height="253"/></clipPath></defs><g clip-path="url(#--hwpjs-header-print)" transform="translate(-498 -82)"><rect x="559" y="93" width="162" height="231" stroke="#000000" stroke-width="20" stroke-miterlimit="8" fill="none"/><path d="M756.613 155.95C751.961 155.95 748.189 159.719 748.189 164.368 748.189 169.018 751.961 172.787 756.613 172.787 761.266 172.787 765.038 169.018 765.038 164.368 765.038 159.719 761.266 155.95 756.613 155.95ZM499 140 781 140 781 228.612 781 275 720.698 275 720.698 228.612 559.302 228.612 559.302 275 499 275 499 228.612Z" fill-rule="evenodd"/><path d="M588 286 647.556 286" stroke="#000000" stroke-width="20" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M588 254 670.667 254" stroke="#000000" stroke-width="20" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/></g></svg>';
        buttion.style.marginLeft = 'auto';
        buttion.addEventListener('click', this.handlePrintButtionClick);
        this.container.appendChild(buttion);
        this.printButton = buttion;
      }
    }, {
      key: "draw",
      value: function draw() {
        this.drawPageNumber();
        this.drawPrintIcon();
        this.drawInfoIcon();
      }
    }]);

    return Header;
  }();

  var BORDER_WIDTH = ['0.1mm', '0.12mm', '0.15mm', '0.2mm', '0.25mm', '0.3mm', '0.4mm', '0.5mm', '0.6mm', '0.7mm', '1.0mm', '1.5mm', '2.0mm', '3.0mm', '4.0mm', '5.0mm'];
  var BORDER_STYLE = {
    0: 'none',
    1: 'solid',
    2: 'dashed',
    3: 'dotted',
    8: 'double'
  };
  var TEXT_ALIGN = {
    0: 'justify',
    1: 'left',
    2: 'right',
    3: 'center'
  };

  var HWPViewer = /*#__PURE__*/function () {
    function HWPViewer(container, data) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        type: 'binary'
      };

      _classCallCheck(this, HWPViewer);

      _defineProperty(this, "hwpDocument", new HWPDocument(new HWPHeader(new HWPVersion(5, 0, 0, 0), 'HWP Document File'), new DocInfo(), []));

      _defineProperty(this, "container", void 0);

      _defineProperty(this, "viewer", window.document.createElement('div'));

      _defineProperty(this, "pages", []);

      _defineProperty(this, "header", null);

      this.container = container;
      this.hwpDocument = parsePage(parse(data, option));
      this.draw();
    }

    _createClass(HWPViewer, [{
      key: "distory",
      value: function distory() {
        var _this$header, _this$viewer$parentEl;

        this.pages = [];
        (_this$header = this.header) === null || _this$header === void 0 ? void 0 : _this$header.distory();
        (_this$viewer$parentEl = this.viewer.parentElement) === null || _this$viewer$parentEl === void 0 ? void 0 : _this$viewer$parentEl.removeChild(this.viewer);
      }
    }, {
      key: "createPage",
      value: function createPage(section, index) {
        var page = document.createElement('div');
        page.style.boxShadow = '0 1px 3px 1px rgba(60,64,67,.15)';
        page.style.backgroundColor = '#FFF';
        page.style.margin = '0 auto';
        page.style.position = 'relative';
        page.style.pageBreakAfter = 'always';
        page.style.width = "".concat(section.width / 7200, "in");
        page.style.height = "".concat(section.height / 7200, "in"); // TODO: (@hahnlee) header 정의하기

        page.style.paddingTop = "".concat((section.paddingTop + section.headerPadding) / 7200, "in");
        page.style.paddingRight = "".concat(section.paddingRight / 7200, "in");
        page.style.paddingBottom = "".concat(section.paddingBottom / 7200, "in");
        page.style.paddingLeft = "".concat(section.paddingLeft / 7200, "in");
        page.setAttribute('data-page-number', index.toString());
        var observer = document.createElement('div');
        observer.style.height = '2px';
        observer.style.position = 'absolute';
        observer.style.width = '100%';
        observer.style.top = '50%';
        observer.style.left = '0';
        observer.classList.add('hwpjs-observer');
        observer.setAttribute('data-page-number', index.toString());
        page.appendChild(observer);
        this.pages.push(page);
        return page;
      }
    }, {
      key: "getRGBStyle",
      value: function getRGBStyle(rgb) {
        var _rgb = _slicedToArray(rgb, 3),
            red = _rgb[0],
            green = _rgb[1],
            blue = _rgb[2];

        return "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
      }
    }, {
      key: "drawViewer",
      value: function drawViewer() {
        this.viewer.style.backgroundColor = '#E8EAED';
        this.viewer.style.position = 'relative';
        this.viewer.style.overflow = 'hidden';
        this.viewer.style.width = '100%';
        this.viewer.style.height = '100%';
      }
    }, {
      key: "drawBorderFill",
      value: function drawBorderFill(target, borderFillID) {
        if (borderFillID === undefined) {
          return;
        }

        var borderFill = this.hwpDocument.info.borderFills[borderFillID];
        target.style.borderTopColor = this.getRGBStyle(borderFill.style.top.color);
        target.style.borderRightColor = this.getRGBStyle(borderFill.style.right.color);
        target.style.borderBottomColor = this.getRGBStyle(borderFill.style.bottom.color);
        target.style.borderLeftColor = this.getRGBStyle(borderFill.style.left.color);
        target.style.borderTopWidth = BORDER_WIDTH[borderFill.style.top.width];
        target.style.borderRightWidth = BORDER_WIDTH[borderFill.style.right.width];
        target.style.borderBottomWidth = BORDER_WIDTH[borderFill.style.bottom.width];
        target.style.borderLeftWidth = BORDER_WIDTH[borderFill.style.left.width];
        target.style.borderTopStyle = BORDER_STYLE[borderFill.style.top.type];
        target.style.borderRightStyle = BORDER_STYLE[borderFill.style.right.type];
        target.style.borderBottomStyle = BORDER_STYLE[borderFill.style.bottom.type];
        target.style.borderLeftStyle = BORDER_STYLE[borderFill.style.left.type];

        if (borderFill.backgroundColor) {
          target.style.backgroundColor = this.getRGBStyle(borderFill.backgroundColor);
        }
      }
    }, {
      key: "drawColumn",
      value: function drawColumn(container, paragraphList) {
        var _this = this;

        var column = document.createElement('td');
        var _paragraphList$attrib = paragraphList.attribute,
            width = _paragraphList$attrib.width,
            height = _paragraphList$attrib.height,
            colSpan = _paragraphList$attrib.colSpan,
            rowSpan = _paragraphList$attrib.rowSpan,
            borderFillID = _paragraphList$attrib.borderFillID;
        column.style.width = "".concat(width / 100, "pt");
        column.style.height = "".concat(height / 100, "pt");
        column.colSpan = colSpan;
        column.rowSpan = rowSpan;
        this.drawBorderFill(column, borderFillID);
        paragraphList.items.forEach(function (paragraph) {
          _this.drawParagraph(column, paragraph);
        });
        container.appendChild(column);
      }
    }, {
      key: "drawTable",
      value: function drawTable(container, control) {
        var _this2 = this;

        var table = document.createElement('table');
        table.style.display = 'inline-table';
        table.style.borderCollapse = 'collapse';
        table.style.width = "".concat(control.width / 100, "pt");
        table.style.height = "".concat(control.height / 100, "pt");
        var tbody = document.createElement('tbody');

        var _loop = function _loop(i) {
          var tr = document.createElement('tr');
          control.content[i].forEach(function (paragraphList) {
            _this2.drawColumn(tr, paragraphList);
          });
          tbody.appendChild(tr);
        };

        for (var i = 0; i < control.rowCount; i += 1) {
          _loop(i);
        }

        table.appendChild(tbody);
        container.appendChild(table);
      }
    }, {
      key: "drawShape",
      value: function drawShape(container, control) {
        var _this3 = this;

        var shapeGroup = document.createElement('div');
        shapeGroup.style.width = "".concat(control.width / 100, "pt");
        shapeGroup.style.height = "".concat(control.height / 100, "pt");

        if (control.attribute.vertRelTo === 0) {
          shapeGroup.style.position = 'absolute';
          shapeGroup.style.top = "".concat(control.verticalOffset / 100, "pt");
          shapeGroup.style.left = "".concat(control.horizontalOffset / 100, "pt");
        } else {
          shapeGroup.style.marginTop = "".concat(control.verticalOffset / 100, "pt");
          shapeGroup.style.marginLeft = "".concat(control.horizontalOffset / 100, "pt");
        }

        shapeGroup.style.zIndex = "".concat(control.zIndex);
        shapeGroup.style.verticalAlign = 'middle';
        shapeGroup.style.display = 'inline-block';

        if (isPicture(control)) {
          var image = this.hwpDocument.info.binData[control.info.binID];
          var blob = new Blob([image.payload], {
            type: "images/".concat(image.extension)
          }); // TODO: (@hahnlee) revokeObjectURL을 관리할 수 있도록 하기

          var imageURL = window.URL.createObjectURL(blob);
          shapeGroup.style.backgroundImage = "url(\"".concat(imageURL, "\")");
          shapeGroup.style.backgroundRepeat = 'no-repeat';
          shapeGroup.style.backgroundPosition = 'center';
          shapeGroup.style.backgroundSize = 'contain';
        }

        control.content.forEach(function (paragraphList) {
          paragraphList.items.forEach(function (paragraph) {
            _this3.drawParagraph(shapeGroup, paragraph);
          });
        });
        container.appendChild(shapeGroup);
      }
    }, {
      key: "drawControl",
      value: function drawControl(container, control) {
        if (isTable(control)) {
          this.drawTable(container, control);
          return;
        }

        if (isShape(control)) {
          this.drawShape(container, control);
        }
      }
    }, {
      key: "drawText",
      value: function drawText(container, paragraph, shapePointer, endPos) {
        var _this4 = this;

        var range = paragraph.content.slice(shapePointer.pos, endPos + 1);
        var texts = [];
        var ctrlIndex = 0;
        range.forEach(function (hwpChar) {
          if (typeof hwpChar.value === 'string') {
            texts.push(hwpChar.value);
            return;
          }

          if (hwpChar.type === CharType.Extened) {
            var control = paragraph.controls[ctrlIndex];
            ctrlIndex += 1;

            _this4.drawControl(container, control);
          }

          if (hwpChar.value === 13) {
            texts.push('\n');
          }
        });
        var text = texts.join('');
        var span = document.createElement('div');
        span.textContent = text;
        var charShape = this.hwpDocument.info.getCharShpe(shapePointer.shapeIndex);

        if (charShape) {
          var fontBaseSize = charShape.fontBaseSize,
              fontRatio = charShape.fontRatio,
              color = charShape.color,
              fontId = charShape.fontId;
          var fontSize = fontBaseSize * (fontRatio[0] / 100);
          span.style.fontSize = "".concat(fontSize, "pt");
          span.style.lineBreak = 'anywhere';
          span.style.whiteSpace = 'pre-wrap';
          span.style.color = this.getRGBStyle(color);
          var fontFace = this.hwpDocument.info.fontFaces[fontId[0]];
          span.style.fontFamily = fontFace.getFontFamily();
        }

        container.appendChild(span);
      }
    }, {
      key: "drawParagraph",
      value: function drawParagraph(container, paragraph) {
        var _this5 = this;

        var paragraphContainer = document.createElement('div');
        paragraphContainer.style.margin = '0';
        var shape = this.hwpDocument.info.paragraphShapes[paragraph.shapeIndex];
        paragraphContainer.style.textAlign = TEXT_ALIGN[shape.align];
        paragraph.shapeBuffer.forEach(function (shapePointer, index) {
          var endPos = paragraph.getShapeEndPos(index);

          _this5.drawText(paragraphContainer, paragraph, shapePointer, endPos);
        });
        container.append(paragraphContainer);
      }
    }, {
      key: "drawSection",
      value: function drawSection(container, section, index) {
        var _this6 = this;

        var page = this.createPage(section, index);
        page.style.marginBottom = '20px';
        section.content.forEach(function (paragraph) {
          _this6.drawParagraph(page, paragraph);
        });
        container.appendChild(page);
      }
    }, {
      key: "draw",
      value: function draw() {
        var _this7 = this;

        this.drawViewer();
        var content = document.createElement('div');
        content.style.height = '100%';
        content.style.padding = '52px 24px 24px 24px';
        content.style.overflow = 'auto';
        content.style.position = 'relative';
        content.style.zIndex = '0';
        this.hwpDocument.sections.forEach(function (section, index) {
          _this7.drawSection(content, section, index);
        });
        this.header = new Header(this.viewer, this.container, this.pages);
        this.viewer.appendChild(content);
        this.container.appendChild(this.viewer);
      }
    }]);

    return HWPViewer;
  }();

  exports.Viewer = HWPViewer;
  exports.parse = parse;

  return exports;

}({}));
