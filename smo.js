! function (e, t) {
	"undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this.domready = t()
}(0, function () {
	var e, t = [],
		n = document,
		i = n.documentElement.doScroll,
		o = "DOMContentLoaded",
		r = (i ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
	return r || n.addEventListener(o, e = function () {
			for (n.removeEventListener(o, e), r = 1; e = t.shift();) e()
		}),
		function (e) {
			r ? setTimeout(e, 0) : t.push(e)
		}
}),
function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (k, e) {
	"use strict";
	var t = [],
		C = k.document,
		i = Object.getPrototypeOf,
		s = t.slice,
		v = t.concat,
		l = t.push,
		o = t.indexOf,
		n = {},
		r = n.toString,
		p = n.hasOwnProperty,
		a = p.toString,
		u = a.call(Object),
		m = {};

	function g(e, t) {
		var n = (t = t || C).createElement("script");
		n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
	}
	var c = "3.2.1",
		T = function (e, t) {
			return new T.fn.init(e, t)
		},
		d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		f = /^-ms-/,
		h = /-([a-z])/g,
		y = function (e, t) {
			return t.toUpperCase()
		};

	function b(e) {
		var t = !!e && "length" in e && e.length,
			n = T.type(e);
		return "function" !== n && !T.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	T.fn = T.prototype = {
		jquery: c,
		constructor: T,
		length: 0,
		toArray: function () {
			return s.call(this)
		},
		get: function (e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function (e) {
			var t = T.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function (e) {
			return T.each(this, e)
		},
		map: function (n) {
			return this.pushStack(T.map(this, function (e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function () {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: l,
		sort: t.sort,
		splice: t.splice
	}, T.extend = T.fn.extend = function () {
		var e, t, n, i, o, r, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || T.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
			if (null != (e = arguments[s]))
				for (t in e) n = a[t], a !== (i = e[t]) && (u && i && (T.isPlainObject(i) || (o = Array.isArray(i))) ? (r = o ? (o = !1, n && Array.isArray(n) ? n : []) : n && T.isPlainObject(n) ? n : {}, a[t] = T.extend(u, r, i)) : void 0 !== i && (a[t] = i));
		return a
	}, T.extend({
		expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e) {
			throw new Error(e)
		},
		noop: function () {},
		isFunction: function (e) {
			return "function" === T.type(e)
		},
		isWindow: function (e) {
			return null != e && e === e.window
		},
		isNumeric: function (e) {
			var t = T.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		},
		isPlainObject: function (e) {
			var t, n;
			return !(!e || "[object Object]" !== r.call(e) || (t = i(e)) && ("function" != typeof (n = p.call(t, "constructor") && t.constructor) || a.call(n) !== u))
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
		},
		globalEval: function (e) {
			g(e)
		},
		camelCase: function (e) {
			return e.replace(f, "ms-").replace(h, y)
		},
		each: function (e, t) {
			var n, i = 0;
			if (b(e))
				for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
			else
				for (i in e)
					if (!1 === t.call(e[i], i, e[i])) break;
			return e
		},
		trim: function (e) {
			return null == e ? "" : (e + "").replace(d, "")
		},
		makeArray: function (e, t) {
			var n = t || [];
			return null != e && (b(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
		},
		inArray: function (e, t, n) {
			return null == t ? -1 : o.call(t, e, n)
		},
		merge: function (e, t) {
			for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
			return e.length = o, e
		},
		grep: function (e, t, n) {
			for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
			return i
		},
		map: function (e, t, n) {
			var i, o, r = 0,
				a = [];
			if (b(e))
				for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
			else
				for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
			return v.apply([], a)
		},
		guid: 1,
		proxy: function (e, t) {
			var n, i, o;
			if ("string" == typeof t && (n = e[t], t = e, e = n), T.isFunction(e)) return i = s.call(arguments, 2), (o = function () {
				return e.apply(t || this, i.concat(s.call(arguments)))
			}).guid = e.guid = e.guid || T.guid++, o
		},
		now: Date.now,
		support: m
	}), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var x = function (n) {
		var e, h, x, r, o, p, d, v, w, l, u, S, k, a, C, m, s, c, g, T = "sizzle" + 1 * new Date,
			y = n.document,
			A = 0,
			i = 0,
			f = ae(),
			b = ae(),
			E = ae(),
			M = function (e, t) {
				return e === t && (u = !0), 0
			},
			j = {}.hasOwnProperty,
			t = [],
			P = t.pop,
			_ = t.push,
			I = t.push,
			O = t.slice,
			q = function (e, t) {
				for (var n = 0, i = e.length; n < i; n++)
					if (e[n] === t) return n;
				return -1
			},
			B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			F = "[\\x20\\t\\r\\n\\f]",
			D = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			L = "\\[" + F + "*(" + D + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + D + "))|)" + F + "*\\]",
			N = ":(" + D + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|.*)\\)|)",
			R = new RegExp(F + "+", "g"),
			H = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
			z = new RegExp("^" + F + "*," + F + "*"),
			W = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
			$ = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
			V = new RegExp(N),
			U = new RegExp("^" + D + "$"),
			X = {
				ID: new RegExp("^#(" + D + ")"),
				CLASS: new RegExp("^\\.(" + D + ")"),
				TAG: new RegExp("^(" + D + "|[*])"),
				ATTR: new RegExp("^" + L),
				PSEUDO: new RegExp("^" + N),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + B + ")$", "i"),
				needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
			},
			Q = /^(?:input|select|textarea|button)$/i,
			G = /^h\d$/i,
			Y = /^[^{]+\{\s*\[native \w/,
			J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			K = /[+~]/,
			Z = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
			ee = function (e, t, n) {
				var i = "0x" + t - 65536;
				return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ne = function (e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			ie = function () {
				S()
			},
			oe = ye(function (e) {
				return !0 === e.disabled && ("form" in e || "label" in e)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			I.apply(t = O.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
		} catch (e) {
			I = {
				apply: t.length ? function (e, t) {
					_.apply(e, O.call(t))
				} : function (e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}

		function re(e, t, n, i) {
			var o, r, a, s, l, u, c, d = t && t.ownerDocument,
				f = t ? t.nodeType : 9;
			if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
			if (!i && ((t ? t.ownerDocument || t : y) !== k && S(t), t = t || k, C)) {
				if (11 !== f && (l = J.exec(e)))
					if (o = l[1]) {
						if (9 === f) {
							if (!(a = t.getElementById(o))) return n;
							if (a.id === o) return n.push(a), n
						} else if (d && (a = d.getElementById(o)) && g(t, a) && a.id === o) return n.push(a), n
					} else {
						if (l[2]) return I.apply(n, t.getElementsByTagName(e)), n;
						if ((o = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return I.apply(n, t.getElementsByClassName(o)), n
					} if (h.qsa && !E[e + " "] && (!m || !m.test(e))) {
					if (1 !== f) d = t, c = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = T), r = (u = p(e)).length; r--;) u[r] = "#" + s + " " + ge(u[r]);
						c = u.join(","), d = K.test(e) && ve(t.parentNode) || t
					}
					if (c) try {
						return I.apply(n, d.querySelectorAll(c)), n
					} catch (e) {} finally {
						s === T && t.removeAttribute("id")
					}
				}
			}
			return v(e.replace(H, "$1"), t, n, i)
		}

		function ae() {
			var i = [];
			return function e(t, n) {
				return i.push(t + " ") > x.cacheLength && delete e[i.shift()], e[t + " "] = n
			}
		}

		function se(e) {
			return e[T] = !0, e
		}

		function le(e) {
			var t = k.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function ue(e, t) {
			for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
		}

		function ce(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function de(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function fe(n) {
			return function (e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function he(t) {
			return function (e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function pe(a) {
			return se(function (r) {
				return r = +r, se(function (e, t) {
					for (var n, i = a([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ve(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for (e in h = re.support = {}, o = re.isXML = function (e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, S = re.setDocument = function (e) {
				var t, n, i = e ? e.ownerDocument || e : y;
				return i !== k && 9 === i.nodeType && i.documentElement && (a = (k = i).documentElement, C = !o(k), y !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), h.attributes = le(function (e) {
					return e.className = "i", !e.getAttribute("className")
				}), h.getElementsByTagName = le(function (e) {
					return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
				}), h.getElementsByClassName = Y.test(k.getElementsByClassName), h.getById = le(function (e) {
					return a.appendChild(e).id = T, !k.getElementsByName || !k.getElementsByName(T).length
				}), h.getById ? (x.filter.ID = function (e) {
					var t = e.replace(Z, ee);
					return function (e) {
						return e.getAttribute("id") === t
					}
				}, x.find.ID = function (e, t) {
					if (void 0 !== t.getElementById && C) {
						var n = t.getElementById(e);
						return n ? [n] : []
					}
				}) : (x.filter.ID = function (e) {
					var n = e.replace(Z, ee);
					return function (e) {
						var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return t && t.value === n
					}
				}, x.find.ID = function (e, t) {
					if (void 0 !== t.getElementById && C) {
						var n, i, o, r = t.getElementById(e);
						if (r) {
							if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
							for (o = t.getElementsByName(e), i = 0; r = o[i++];)
								if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
						}
						return []
					}
				}), x.find.TAG = h.getElementsByTagName ? function (e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
				} : function (e, t) {
					var n, i = [],
						o = 0,
						r = t.getElementsByTagName(e);
					if ("*" !== e) return r;
					for (; n = r[o++];) 1 === n.nodeType && i.push(n);
					return i
				}, x.find.CLASS = h.getElementsByClassName && function (e, t) {
					if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
				}, s = [], m = [], (h.qsa = Y.test(k.querySelectorAll)) && (le(function (e) {
					a.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + T + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]")
				}), le(function (e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = k.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
				})), (h.matchesSelector = Y.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && le(function (e) {
					h.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", N)
				}), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = Y.test(a.compareDocumentPosition), g = t || Y.test(a.contains) ? function (e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function (e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, M = t ? function (e, t) {
					if (e === t) return u = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === k || e.ownerDocument === y && g(y, e) ? -1 : t === k || t.ownerDocument === y && g(y, t) ? 1 : l ? q(l, e) - q(l, t) : 0 : 4 & n ? -1 : 1)
				} : function (e, t) {
					if (e === t) return u = !0, 0;
					var n, i = 0,
						o = e.parentNode,
						r = t.parentNode,
						a = [e],
						s = [t];
					if (!o || !r) return e === k ? -1 : t === k ? 1 : o ? -1 : r ? 1 : l ? q(l, e) - q(l, t) : 0;
					if (o === r) return ce(e, t);
					for (n = e; n = n.parentNode;) a.unshift(n);
					for (n = t; n = n.parentNode;) s.unshift(n);
					for (; a[i] === s[i];) i++;
					return i ? ce(a[i], s[i]) : a[i] === y ? -1 : s[i] === y ? 1 : 0
				}), k
			}, re.matches = function (e, t) {
				return re(e, null, null, t)
			}, re.matchesSelector = function (e, t) {
				if ((e.ownerDocument || e) !== k && S(e), t = t.replace($, "='$1']"), h.matchesSelector && C && !E[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
					var n = c.call(e, t);
					if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {}
				return 0 < re(t, k, null, [e]).length
			}, re.contains = function (e, t) {
				return (e.ownerDocument || e) !== k && S(e), g(e, t)
			}, re.attr = function (e, t) {
				(e.ownerDocument || e) !== k && S(e);
				var n = x.attrHandle[t.toLowerCase()],
					i = n && j.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
				return void 0 !== i ? i : h.attributes || !C ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}, re.escape = function (e) {
				return (e + "").replace(te, ne)
			}, re.error = function (e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, re.uniqueSort = function (e) {
				var t, n = [],
					i = 0,
					o = 0;
				if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(M), u) {
					for (; t = e[o++];) t === e[o] && (i = n.push(o));
					for (; i--;) e.splice(n[i], 1)
				}
				return l = null, e
			}, r = re.getText = function (e) {
				var t, n = "",
					i = 0,
					o = e.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
					} else if (3 === o || 4 === o) return e.nodeValue
				} else
					for (; t = e[i++];) n += r(t);
				return n
			}, (x = re.selectors = {
				cacheLength: 50,
				createPseudo: se,
				match: X,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function (e) {
						return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function (e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
					},
					PSEUDO: function (e) {
						var t, n = !e[6] && e[2];
						return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(Z, ee).toLowerCase();
						return "*" === e ? function () {
							return !0
						} : function (e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function (e) {
						var t = f[e + " "];
						return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && f(e, function (e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function (n, i, o) {
						return function (e) {
							var t = re.attr(e, n);
							return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(R, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
						}
					},
					CHILD: function (p, e, t, v, m) {
						var g = "nth" !== p.slice(0, 3),
							y = "last" !== p.slice(-4),
							b = "of-type" === e;
						return 1 === v && 0 === m ? function (e) {
							return !!e.parentNode
						} : function (e, t, n) {
							var i, o, r, a, s, l, u = g !== y ? "nextSibling" : "previousSibling",
								c = e.parentNode,
								d = b && e.nodeName.toLowerCase(),
								f = !n && !b,
								h = !1;
							if (c) {
								if (g) {
									for (; u;) {
										for (a = e; a = a[u];)
											if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
										l = u = "only" === p && !l && "nextSibling"
									}
									return !0
								}
								if (l = [y ? c.firstChild : c.lastChild], y && f) {
									for (h = (s = (i = (o = (r = (a = c)[T] || (a[T] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === A && i[1]) && i[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (h = s = 0) || l.pop();)
										if (1 === a.nodeType && ++h && a === e) {
											o[p] = [A, s, h];
											break
										}
								} else if (f && (h = s = (i = (o = (r = (a = e)[T] || (a[T] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === A && i[1]), !1 === h)
									for (;
										(a = ++s && a && a[u] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++h || (f && ((o = (r = a[T] || (a[T] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] = [A, h]), a !== e)););
								return (h -= m) === v || h % v == 0 && 0 <= h / v
							}
						}
					},
					PSEUDO: function (e, r) {
						var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
						return a[T] ? a(r) : 1 < a.length ? (t = [e, e, "", r], x.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
							for (var n, i = a(e, r), o = i.length; o--;) e[n = q(e, i[o])] = !(t[n] = i[o])
						}) : function (e) {
							return a(e, 0, t)
						}) : a
					}
				},
				pseudos: {
					not: se(function (e) {
						var i = [],
							o = [],
							s = d(e.replace(H, "$1"));
						return s[T] ? se(function (e, t, n, i) {
							for (var o, r = s(e, null, i, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
						}) : function (e, t, n) {
							return i[0] = e, s(i, null, n, o), i[0] = null, !o.pop()
						}
					}),
					has: se(function (t) {
						return function (e) {
							return 0 < re(t, e).length
						}
					}),
					contains: se(function (t) {
						return t = t.replace(Z, ee),
							function (e) {
								return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
							}
					}),
					lang: se(function (n) {
						return U.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
							function (e) {
								var t;
								do {
									if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function (e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function (e) {
						return e === a
					},
					focus: function (e) {
						return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: he(!1),
					disabled: he(!0),
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function (e) {
						return !x.pseudos.empty(e)
					},
					header: function (e) {
						return G.test(e.nodeName)
					},
					input: function (e) {
						return Q.test(e.nodeName)
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function (e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: pe(function () {
						return [0]
					}),
					last: pe(function (e, t) {
						return [t - 1]
					}),
					eq: pe(function (e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: pe(function (e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: pe(function (e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: pe(function (e, t, n) {
						for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
						return e
					}),
					gt: pe(function (e, t, n) {
						for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}).pseudos.nth = x.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) x.pseudos[e] = de(e);
		for (e in {
				submit: !0,
				reset: !0
			}) x.pseudos[e] = fe(e);

		function me() {}

		function ge(e) {
			for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i
		}

		function ye(s, e, t) {
			var l = e.dir,
				u = e.next,
				c = u || l,
				d = t && "parentNode" === c,
				f = i++;
			return e.first ? function (e, t, n) {
				for (; e = e[l];)
					if (1 === e.nodeType || d) return s(e, t, n);
				return !1
			} : function (e, t, n) {
				var i, o, r, a = [A, f];
				if (n) {
					for (; e = e[l];)
						if ((1 === e.nodeType || d) && s(e, t, n)) return !0
				} else
					for (; e = e[l];)
						if (1 === e.nodeType || d)
							if (o = (r = e[T] || (e[T] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
							else {
								if ((i = o[c]) && i[0] === A && i[1] === f) return a[2] = i[2];
								if ((o[c] = a)[2] = s(e, t, n)) return !0
							} return !1
			}
		}

		function be(o) {
			return 1 < o.length ? function (e, t, n) {
				for (var i = o.length; i--;)
					if (!o[i](e, t, n)) return !1;
				return !0
			} : o[0]
		}

		function xe(e, t, n, i, o) {
			for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), u && t.push(s)));
			return a
		}

		function we(h, p, v, m, g, e) {
			return m && !m[T] && (m = we(m)), g && !g[T] && (g = we(g, e)), se(function (e, t, n, i) {
				var o, r, a, s = [],
					l = [],
					u = t.length,
					c = e || function (e, t, n) {
						for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
						return n
					}(p || "*", n.nodeType ? [n] : n, []),
					d = !h || !e && p ? c : xe(c, s, h, n, i),
					f = v ? g || (e ? h : u || m) ? [] : t : d;
				if (v && v(d, f, n, i), m)
					for (o = xe(f, l), m(o, [], n, i), r = o.length; r--;)(a = o[r]) && (f[l[r]] = !(d[l[r]] = a));
				if (e) {
					if (g || h) {
						if (g) {
							for (o = [], r = f.length; r--;)(a = f[r]) && o.push(d[r] = a);
							g(null, f = [], o, i)
						}
						for (r = f.length; r--;)(a = f[r]) && -1 < (o = g ? q(e, a) : s[r]) && (e[o] = !(t[o] = a))
					}
				} else f = xe(f === t ? f.splice(u, f.length) : f), g ? g(null, t, f, i) : I.apply(t, f)
			})
		}

		function Se(e) {
			for (var o, t, n, i = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = ye(function (e) {
					return e === o
				}, a, !0), u = ye(function (e) {
					return -1 < q(o, e)
				}, a, !0), c = [function (e, t, n) {
					var i = !r && (n || t !== w) || ((o = t).nodeType ? l(e, t, n) : u(e, t, n));
					return o = null, i
				}]; s < i; s++)
				if (t = x.relative[e[s].type]) c = [ye(be(c), t)];
				else {
					if ((t = x.filter[e[s].type].apply(null, e[s].matches))[T]) {
						for (n = ++s; n < i && !x.relative[e[n].type]; n++);
						return we(1 < s && be(c), 1 < s && ge(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(H, "$1"), t, s < n && Se(e.slice(s, n)), n < i && Se(e = e.slice(n)), n < i && ge(e))
					}
					c.push(t)
				} return be(c)
		}
		return me.prototype = x.filters = x.pseudos, x.setFilters = new me, p = re.tokenize = function (e, t) {
			var n, i, o, r, a, s, l, u = b[e + " "];
			if (u) return t ? 0 : u.slice(0);
			for (a = e, s = [], l = x.preFilter; a;) {
				for (r in n && !(i = z.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(o = [])), n = !1, (i = W.exec(a)) && (n = i.shift(), o.push({
						value: n,
						type: i[0].replace(H, " ")
					}), a = a.slice(n.length)), x.filter) !(i = X[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
					value: n,
					type: r,
					matches: i
				}), a = a.slice(n.length));
				if (!n) break
			}
			return t ? a.length : a ? re.error(e) : b(e, s).slice(0)
		}, d = re.compile = function (e, t) {
			var n, m, g, y, b, i, o = [],
				r = [],
				a = E[e + " "];
			if (!a) {
				for (t || (t = p(e)), n = t.length; n--;)(a = Se(t[n]))[T] ? o.push(a) : r.push(a);
				(a = E(e, (m = r, y = 0 < (g = o).length, b = 0 < m.length, i = function (e, t, n, i, o) {
					var r, a, s, l = 0,
						u = "0",
						c = e && [],
						d = [],
						f = w,
						h = e || b && x.find.TAG("*", o),
						p = A += null == f ? 1 : Math.random() || .1,
						v = h.length;
					for (o && (w = t === k || t || o); u !== v && null != (r = h[u]); u++) {
						if (b && r) {
							for (a = 0, t || r.ownerDocument === k || (S(r), n = !C); s = m[a++];)
								if (s(r, t || k, n)) {
									i.push(r);
									break
								} o && (A = p)
						}
						y && ((r = !s && r) && l--, e && c.push(r))
					}
					if (l += u, y && u !== l) {
						for (a = 0; s = g[a++];) s(c, d, t, n);
						if (e) {
							if (0 < l)
								for (; u--;) c[u] || d[u] || (d[u] = P.call(i));
							d = xe(d)
						}
						I.apply(i, d), o && !e && 0 < d.length && 1 < l + g.length && re.uniqueSort(i)
					}
					return o && (A = p, w = f), c
				}, y ? se(i) : i))).selector = e
			}
			return a
		}, v = re.select = function (e, t, n, i) {
			var o, r, a, s, l, u = "function" == typeof e && e,
				c = !i && p(e = u.selector || e);
			if (n = n || [], 1 === c.length) {
				if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (a = r[0]).type && 9 === t.nodeType && C && x.relative[r[1].type]) {
					if (!(t = (x.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
					u && (t = t.parentNode), e = e.slice(r.shift().value.length)
				}
				for (o = X.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]);)
					if ((l = x.find[s]) && (i = l(a.matches[0].replace(Z, ee), K.test(r[0].type) && ve(t.parentNode) || t))) {
						if (r.splice(o, 1), !(e = i.length && ge(r))) return I.apply(n, i), n;
						break
					}
			}
			return (u || d(e, c))(i, t, !C, n, !t || K.test(e) && ve(t.parentNode) || t), n
		}, h.sortStable = T.split("").sort(M).join("") === T, h.detectDuplicates = !!u, S(), h.sortDetached = le(function (e) {
			return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
		}), le(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || ue("type|href|height|width", function (e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), h.attributes && le(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || ue("value", function (e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), le(function (e) {
			return null == e.getAttribute("disabled")
		}) || ue(B, function (e, t, n) {
			var i;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), re
	}(k);
	T.find = x, T.expr = x.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = x.uniqueSort, T.text = x.getText, T.isXMLDoc = x.isXML, T.contains = x.contains, T.escapeSelector = x.escape;
	var w = function (e, t, n) {
			for (var i = [], o = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (o && T(e).is(n)) break;
					i.push(e)
				} return i
		},
		S = function (e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		A = T.expr.match.needsContext;

	function E(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		j = /^.[^:#\[\.,]*$/;

	function P(e, n, i) {
		return T.isFunction(n) ? T.grep(e, function (e, t) {
			return !!n.call(e, t, e) !== i
		}) : n.nodeType ? T.grep(e, function (e) {
			return e === n !== i
		}) : "string" != typeof n ? T.grep(e, function (e) {
			return -1 < o.call(n, e) !== i
		}) : j.test(n) ? T.filter(n, e, i) : (n = T.filter(n, e), T.grep(e, function (e) {
			return -1 < o.call(n, e) !== i && 1 === e.nodeType
		}))
	}
	T.filter = function (e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, T.fn.extend({
		find: function (e) {
			var t, n, i = this.length,
				o = this;
			if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
				for (t = 0; t < i; t++)
					if (T.contains(o[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, o[t], n);
			return 1 < i ? T.uniqueSort(n) : n
		},
		filter: function (e) {
			return this.pushStack(P(this, e || [], !1))
		},
		not: function (e) {
			return this.pushStack(P(this, e || [], !0))
		},
		is: function (e) {
			return !!P(this, "string" == typeof e && A.test(e) ? T(e) : e || [], !1).length
		}
	});
	var _, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(T.fn.init = function (e, t, n) {
		var i, o;
		if (!e) return this;
		if (n = n || _, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : T.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
		if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
		if (i[1]) {
			if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), M.test(i[1]) && T.isPlainObject(t))
				for (i in t) T.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
			return this
		}
		return (o = C.getElementById(i[2])) && (this[0] = o, this.length = 1), this
	}).prototype = T.fn, _ = T(C);
	var O = /^(?:parents|prev(?:Until|All))/,
		q = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function B(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	T.fn.extend({
		has: function (e) {
			var t = T(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++)
					if (T.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t) {
			var n, i = 0,
				o = this.length,
				r = [],
				a = "string" != typeof e && T(e);
			if (!A.test(e))
				for (; i < o; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
							r.push(n);
							break
						} return this.pushStack(1 < r.length ? T.uniqueSort(r) : r)
		},
		index: function (e) {
			return e ? "string" == typeof e ? o.call(T(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), T.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return w(e, "parentNode")
		},
		parentsUntil: function (e, t, n) {
			return w(e, "parentNode", n)
		},
		next: function (e) {
			return B(e, "nextSibling")
		},
		prev: function (e) {
			return B(e, "previousSibling")
		},
		nextAll: function (e) {
			return w(e, "nextSibling")
		},
		prevAll: function (e) {
			return w(e, "previousSibling")
		},
		nextUntil: function (e, t, n) {
			return w(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n) {
			return w(e, "previousSibling", n)
		},
		siblings: function (e) {
			return S((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return S(e.firstChild)
		},
		contents: function (e) {
			return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
		}
	}, function (i, o) {
		T.fn[i] = function (e, t) {
			var n = T.map(this, o, e);
			return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (q[i] || T.uniqueSort(n), O.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var F = /[^\x20\t\r\n\f]+/g;

	function D(e) {
		return e
	}

	function L(e) {
		throw e
	}

	function N(e, t, n, i) {
		var o;
		try {
			e && T.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && T.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	T.Callbacks = function (i) {
		var e, n;
		i = "string" == typeof i ? (e = i, n = {}, T.each(e.match(F) || [], function (e, t) {
			n[t] = !0
		}), n) : T.extend({}, i);
		var o, t, r, a, s = [],
			l = [],
			u = -1,
			c = function () {
				for (a = a || i.once, r = o = !0; l.length; u = -1)
					for (t = l.shift(); ++u < s.length;) !1 === s[u].apply(t[0], t[1]) && i.stopOnFalse && (u = s.length, t = !1);
				i.memory || (t = !1), o = !1, a && (s = t ? [] : "")
			},
			d = {
				add: function () {
					return s && (t && !o && (u = s.length - 1, l.push(t)), function n(e) {
						T.each(e, function (e, t) {
							T.isFunction(t) ? i.unique && d.has(t) || s.push(t) : t && t.length && "string" !== T.type(t) && n(t)
						})
					}(arguments), t && !o && c()), this
				},
				remove: function () {
					return T.each(arguments, function (e, t) {
						for (var n; - 1 < (n = T.inArray(t, s, n));) s.splice(n, 1), n <= u && u--
					}), this
				},
				has: function (e) {
					return e ? -1 < T.inArray(e, s) : 0 < s.length
				},
				empty: function () {
					return s && (s = []), this
				},
				disable: function () {
					return a = l = [], s = t = "", this
				},
				disabled: function () {
					return !s
				},
				lock: function () {
					return a = l = [], t || o || (s = t = ""), this
				},
				locked: function () {
					return !!a
				},
				fireWith: function (e, t) {
					return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || c()), this
				},
				fire: function () {
					return d.fireWith(this, arguments), this
				},
				fired: function () {
					return !!r
				}
			};
		return d
	}, T.extend({
		Deferred: function (e) {
			var r = [
					["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
					["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
				],
				o = "pending",
				a = {
					state: function () {
						return o
					},
					always: function () {
						return s.done(arguments).fail(arguments), this
					},
					catch: function (e) {
						return a.then(null, e)
					},
					pipe: function () {
						var o = arguments;
						return T.Deferred(function (i) {
							T.each(r, function (e, t) {
								var n = T.isFunction(o[t[4]]) && o[t[4]];
								s[t[1]](function () {
									var e = n && n.apply(this, arguments);
									e && T.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), o = null
						}).promise()
					},
					then: function (t, n, i) {
						var l = 0;

						function u(o, r, a, s) {
							return function () {
								var n = this,
									i = arguments,
								
									t = s ? e : function () {
										try {
											e()
										} catch (e) {
											T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (a !== L && (n = void 0, i = [e]), r.rejectWith(n, i))
										}
									};
								o ? t() : (T.Deferred.getStackHook && (t.stackTrace = T.Deferred.getStackHook()), k.setTimeout(t))
							}
						}
						return T.Deferred(function (e) {
							r[0][3].add(u(0, e, T.isFunction(i) ? i : D, e.notifyWith)), r[1][3].add(u(0, e, T.isFunction(t) ? t : D)), r[2][3].add(u(0, e, T.isFunction(n) ? n : L))
						}).promise()
					},
					promise: function (e) {
						return null != e ? T.extend(e, a) : a
					}
				},
				s = {};
			return T.each(r, function (e, t) {
				var n = t[2],
					i = t[5];
				a[t[1]] = n.add, i && n.add(function () {
					o = i
				}, r[3 - e][2].disable, r[0][2].lock), n.add(t[3].fire), s[t[0]] = function () {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[t[0] + "With"] = n.fireWith
			}), a.promise(s), e && e.call(s, s), s
		},
		when: function (e) {
			var n = arguments.length,
				t = n,
				i = Array(t),
				o = s.call(arguments),
				r = T.Deferred(),
				a = function (t) {
					return function (e) {
						i[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || r.resolveWith(i, o)
					}
				};
			if (n <= 1 && (N(e, r.done(a(t)).resolve, r.reject, !n), "pending" === r.state() || T.isFunction(o[t] && o[t].then))) return r.then();
			for (; t--;) N(o[t], a(t), r.reject);
			return r.promise()
		}
	});
	var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	T.Deferred.exceptionHook = function (e, t) {
		k.console && k.console.warn && e && R.test(e.name) && k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, T.readyException = function (e) {
		k.setTimeout(function () {
			throw e
		})
	};
	var H = T.Deferred();

	function z() {
		C.removeEventListener("DOMContentLoaded", z), k.removeEventListener("load", z), T.ready()
	}
	T.fn.ready = function (e) {
		return H.then(e).catch(function (e) {
			T.readyException(e)
		}), this
	}, T.extend({
		isReady: !1,
		readyWait: 1,
		ready: function (e) {
			(!0 === e ? --T.readyWait : T.isReady) || ((T.isReady = !0) !== e && 0 < --T.readyWait || H.resolveWith(C, [T]))
		}
	}), T.ready.then = H.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? k.setTimeout(T.ready) : (C.addEventListener("DOMContentLoaded", z), k.addEventListener("load", z));
	var W = function (e, t, n, i, o, r, a) {
			var s = 0,
				l = e.length,
				u = null == n;
			if ("object" === T.type(n))
				for (s in o = !0, n) W(e, t, s, n[s], !0, r, a);
			else if (void 0 !== i && (o = !0, T.isFunction(i) || (a = !0), u && (t = a ? (t.call(e, i), null) : (u = t, function (e, t, n) {
					return u.call(T(e), n)
				})), t))
				for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
			return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
		},
		$ = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};

	function V() {
		this.expando = T.expando + V.uid++
	}
	V.uid = 1, V.prototype = {
		cache: function (e) {
			var t = e[this.expando];
			return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function (e, t, n) {
			var i, o = this.cache(e);
			if ("string" == typeof t) o[T.camelCase(t)] = n;
			else
				for (i in t) o[T.camelCase(i)] = t[i];
			return o
		},
		get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][T.camelCase(t)]
		},
		access: function (e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function (e, t) {
			var n, i = e[this.expando];
			if (void 0 !== i) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(T.camelCase) : (t = T.camelCase(t)) in i ? [t] : t.match(F) || []).length;
					for (; n--;) delete i[t[n]]
				}(void 0 === t || T.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function (e) {
			var t = e[this.expando];
			return void 0 !== t && !T.isEmptyObject(t)
		}
	};
	var U = new V,
		X = new V,
		Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		G = /[A-Z]/g;

	function Y(e, t, n) {
		var i, o;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(G, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
				try {
					n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Q.test(o) ? JSON.parse(o) : o)
				} catch (e) {}
				X.set(e, t, n)
			} else n = void 0;
		return n
	}
	T.extend({
		hasData: function (e) {
			return X.hasData(e) || U.hasData(e)
		},
		data: function (e, t, n) {
			return X.access(e, t, n)
		},
		removeData: function (e, t) {
			X.remove(e, t)
		},
		_data: function (e, t, n) {
			return U.access(e, t, n)
		},
		_removeData: function (e, t) {
			U.remove(e, t)
		}
	}), T.fn.extend({
		data: function (n, e) {
			var t, i, o, r = this[0],
				a = r && r.attributes;
			if (void 0 !== n) return "object" == typeof n ? this.each(function () {
				X.set(this, n)
			}) : W(this, function (e) {
				var t;
				if (r && void 0 === e) {
					if (void 0 !== (t = X.get(r, n))) return t;
					if (void 0 !== (t = Y(r, n))) return t
				} else this.each(function () {
					X.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0);
			if (this.length && (o = X.get(r), 1 === r.nodeType && !U.get(r, "hasDataAttrs"))) {
				for (t = a.length; t--;) a[t] && (0 === (i = a[t].name).indexOf("data-") && (i = T.camelCase(i.slice(5)), Y(r, i, o[i])));
				U.set(r, "hasDataAttrs", !0)
			}
			return o
		},
		removeData: function (e) {
			return this.each(function () {
				X.remove(this, e)
			})
		}
	}), T.extend({
		queue: function (e, t, n) {
			var i;
			if (e) return t = (t || "fx") + "queue", i = U.get(e, t), n && (!i || Array.isArray(n) ? i = U.access(e, t, T.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var n = T.queue(e, t),
				i = n.length,
				o = n.shift(),
				r = T._queueHooks(e, t);
			"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
				T.dequeue(e, t)
			}, r)), !i && r && r.empty.fire()
		},
		_queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return U.get(e, n) || U.access(e, n, {
				empty: T.Callbacks("once memory").add(function () {
					U.remove(e, [t + "queue", n])
				})
			})
		}
	}), T.fn.extend({
		queue: function (t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function () {
				var e = T.queue(this, t, n);
				T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				T.dequeue(this, e)
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, t) {
			var n, i = 1,
				o = T.Deferred(),
				r = this,
				a = this.length,
				s = function () {
					--i || o.resolveWith(r, [r])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = U.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
			return s(), o.promise(t)
		}
	});
	var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		K = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
		Z = ["Top", "Right", "Bottom", "Left"],
		ee = function (e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display")
		},
		te = function (e, t, n, i) {
			var o, r, a = {};
			for (r in t) a[r] = e.style[r], e.style[r] = t[r];
			for (r in o = n.apply(e, i || []), t) e.style[r] = a[r];
			return o
		};

	function ne(e, t, n, i) {
		var o, r = 1,
			a = 20,
			s = i ? function () {
				return i.cur()
			} : function () {
				return T.css(e, t, "")
			},
			l = s(),
			u = n && n[3] || (T.cssNumber[t] ? "" : "px"),
			c = (T.cssNumber[t] || "px" !== u && +l) && K.exec(T.css(e, t));
		if (c && c[3] !== u)
			for (u = u || c[3], n = n || [], c = +l || 1; c /= r = r || ".5", T.style(e, t, c + u), r !== (r = s() / l) && 1 !== r && --a;);
		return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
	}
	var ie = {};

	function oe(e, t) {
		for (var n, i, o = [], r = 0, a = e.length; r < a; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = U.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ee(i) && (o[r] = (d = u = l = void 0, u = (s = i).ownerDocument, c = s.nodeName, (d = ie[c]) || (l = u.body.appendChild(u.createElement(c)), d = T.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), ie[c] = d)))) : "none" !== n && (o[r] = "none", U.set(i, "display", n)));
		var s, l, u, c, d;
		for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
		return e
	}
	T.fn.extend({
		show: function () {
			return oe(this, !0)
		},
		hide: function () {
			return oe(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				ee(this) ? T(this).show() : T(this).hide()
			})
		}
	});
	var re = /^(?:checkbox|radio)$/i,
		ae = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		se = /^$|\/(?:java|ecma)script/i,
		le = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function ue(e, t) {
		var n;
		return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? T.merge([e], n) : n
	}

	function ce(e, t) {
		for (var n = 0, i = e.length; n < i; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"))
	}
	le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
	var de, fe, he = /<|&#?\w+;/;

	function pe(e, t, n, i, o) {
		for (var r, a, s, l, u, c, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
			if ((r = e[h]) || 0 === r)
				if ("object" === T.type(r)) T.merge(f, r.nodeType ? [r] : r);
				else if (he.test(r)) {
			for (a = a || d.appendChild(t.createElement("div")), s = (ae.exec(r) || ["", ""])[1].toLowerCase(), l = le[s] || le._default, a.innerHTML = l[1] + T.htmlPrefilter(r) + l[2], c = l[0]; c--;) a = a.lastChild;
			T.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
		} else f.push(t.createTextNode(r));
		for (d.textContent = "", h = 0; r = f[h++];)
			if (i && -1 < T.inArray(r, i)) o && o.push(r);
			else if (u = T.contains(r.ownerDocument, r), a = ue(d.appendChild(r), "script"), u && ce(a), n)
			for (c = 0; r = a[c++];) se.test(r.type || "") && n.push(r);
		return d
	}
	de = C.createDocumentFragment().appendChild(C.createElement("div")), (fe = C.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), de.appendChild(fe), m.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue;
	var ve = C.documentElement,
		me = /^key/,
		ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		ye = /^([^.]*)(?:\.(.+)|)/;

	function be() {
		return !0
	}

	function xe() {
		return !1
	}

	function we() {
		try {
			return C.activeElement
		} catch (e) {}
	}

	function Se(e, t, n, i, o, r) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, s, n, i, t[s], r);
			return e
		}
		if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = xe;
		else if (!o) return e;
		return 1 === r && (a = o, (o = function (e) {
			return T().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = T.guid++)), e.each(function () {
			T.event.add(this, t, o, i, n)
		})
	}
	T.event = {
		global: {},
		add: function (t, e, n, i, o) {
			var r, a, s, l, u, c, d, f, h, p, v, m = U.get(t);
			if (m)
				for (n.handler && (n = (r = n).handler, o = r.selector), o && T.find.matchesSelector(ve, o), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
						return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
					}), u = (e = (e || "").match(F) || [""]).length; u--;) h = v = (s = ye.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), h && (d = T.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = T.event.special[h] || {}, c = T.extend({
					type: h,
					origType: v,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && T.expr.match.needsContext.test(o),
					namespace: p.join(".")
				}, r), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(h, a)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), T.event.global[h] = !0)
		},
		remove: function (e, t, n, i, o) {
			var r, a, s, l, u, c, d, f, h, p, v, m = U.hasData(e) && U.get(e);
			if (m && (l = m.events)) {
				for (u = (t = (t || "").match(F) || [""]).length; u--;)
					if (h = v = (s = ye.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
						for (d = T.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) c = f[r], !o && v !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
						a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || T.removeEvent(e, h, m.handle), delete l[h])
					} else
						for (h in l) T.event.remove(e, h + t[u], n, i, !0);
				T.isEmptyObject(l) && U.remove(e, "handle events")
			}
		},
		dispatch: function (e) {
			var t, n, i, o, r, a, s = T.event.fix(e),
				l = new Array(arguments.length),
				u = (U.get(this, "events") || {})[s.type] || [],
				c = T.event.special[s.type] || {};
			for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
			if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
				for (a = T.event.handlers.call(this, s, u), t = 0;
					(o = a[t++]) && !s.isPropagationStopped();)
					for (s.currentTarget = o.elem, n = 0;
						(r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((T.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, s), s.result
			}
		},
		handlers: function (e, t) {
			var n, i, o, r, a, s = [],
				l = t.delegateCount,
				u = e.target;
			if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
				for (; u !== this; u = u.parentNode || this)
					if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
						for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? -1 < T(o, this).index(u) : T.find(o, this, null, [u]).length), a[o] && r.push(i);
						r.length && s.push({
							elem: u,
							handlers: r
						})
					} return u = this, l < t.length && s.push({
				elem: u,
				handlers: t.slice(l)
			}), s
		},
		addProp: function (t, e) {
			Object.defineProperty(T.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: T.isFunction(e) ? function () {
					if (this.originalEvent) return e(this.originalEvent)
				} : function () {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function (e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function (e) {
			return e[T.expando] ? e : new T.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== we() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === we() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
				},
				_default: function (e) {
					return E(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, T.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, T.Event = function (e, t) {
		return this instanceof T.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? be : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || T.now(), void(this[T.expando] = !0)) : new T.Event(e, t)
	}, T.Event.prototype = {
		constructor: T.Event,
		isDefaultPrevented: xe,
		isPropagationStopped: xe,
		isImmediatePropagationStopped: xe,
		isSimulated: !1,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = be, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = be, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = be, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, T.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function (e) {
			var t = e.button;
			return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, T.event.addProp), T.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, o) {
		T.event.special[e] = {
			delegateType: o,
			bindType: o,
			handle: function (e) {
				var t, n = e.relatedTarget,
					i = e.handleObj;
				return n && (n === this || T.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
			}
		}
	}), T.fn.extend({
		on: function (e, t, n, i) {
			return Se(this, e, t, n, i)
		},
		one: function (e, t, n, i) {
			return Se(this, e, t, n, i, 1)
		},
		off: function (e, t, n) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function () {
				T.event.remove(this, e, n, t)
			});
			for (o in e) this.off(o, t, e[o]);
			return this
		}
	});
	var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Ce = /<script|<style|<link/i,
		Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ae = /^true\/(.*)/,
		Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Me(e, t) {
		return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && T(">tbody", e)[0] || e
	}

	function je(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function Pe(e) {
		var t = Ae.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function _e(e, t) {
		var n, i, o, r, a, s, l, u;
		if (1 === t.nodeType) {
			if (U.hasData(e) && (r = U.access(e), a = U.set(t, r), u = r.events))
				for (o in delete a.handle, a.events = {}, u)
					for (n = 0, i = u[o].length; n < i; n++) T.event.add(t, o, u[o][n]);
			X.hasData(e) && (s = X.access(e), l = T.extend({}, s), X.set(t, l))
		}
	}

	function Ie(n, i, o, r) {
		i = v.apply([], i);
		var e, t, a, s, l, u, c = 0,
			d = n.length,
			f = d - 1,
			h = i[0],
			p = T.isFunction(h);
		if (p || 1 < d && "string" == typeof h && !m.checkClone && Te.test(h)) return n.each(function (e) {
			var t = n.eq(e);
			p && (i[0] = h.call(this, e, t.html())), Ie(t, i, o, r)
		});
		if (d && (t = (e = pe(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
			for (s = (a = T.map(ue(e, "script"), je)).length; c < d; c++) l = e, c !== f && (l = T.clone(l, !0, !0), s && T.merge(a, ue(l, "script"))), o.call(n[c], l, c);
			if (s)
				for (u = a[a.length - 1].ownerDocument, T.map(a, Pe), c = 0; c < s; c++) l = a[c], se.test(l.type || "") && !U.access(l, "globalEval") && T.contains(u, l) && (l.src ? T._evalUrl && T._evalUrl(l.src) : g(l.textContent.replace(Ee, ""), u))
		}
		return n
	}

	function Oe(e, t, n) {
		for (var i, o = t ? T.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || T.cleanData(ue(i)), i.parentNode && (n && T.contains(i.ownerDocument, i) && ce(ue(i, "script")), i.parentNode.removeChild(i));
		return e
	}
	T.extend({
		htmlPrefilter: function (e) {
			return e.replace(ke, "<$1></$2>")
		},
		clone: function (e, t, n) {
			var i, o, r, a, s, l, u, c = e.cloneNode(!0),
				d = T.contains(e.ownerDocument, e);
			if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
				for (a = ue(c), i = 0, o = (r = ue(e)).length; i < o; i++) s = r[i], l = a[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && re.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (r = r || ue(e), a = a || ue(c), i = 0, o = r.length; i < o; i++) _e(r[i], a[i]);
				else _e(e, c);
			return 0 < (a = ue(c, "script")).length && ce(a, !d && ue(e, "script")), c
		},
		cleanData: function (e) {
			for (var t, n, i, o = T.event.special, r = 0; void 0 !== (n = e[r]); r++)
				if ($(n)) {
					if (t = n[U.expando]) {
						if (t.events)
							for (i in t.events) o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
						n[U.expando] = void 0
					}
					n[X.expando] && (n[X.expando] = void 0)
				}
		}
	}), T.fn.extend({
		detach: function (e) {
			return Oe(this, e, !0)
		},
		remove: function (e) {
			return Oe(this, e)
		},
		text: function (e) {
			return W(this, function (e) {
				return void 0 === e ? T.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function () {
			return Ie(this, arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
			})
		},
		prepend: function () {
			return Ie(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Me(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return Ie(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return Ie(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(ue(e, !1)), e.textContent = "");
			return this
		},
		clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return T.clone(this, e, t)
			})
		},
		html: function (e) {
			return W(this, function (e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ce.test(e) && !le[(ae.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = T.htmlPrefilter(e);
					try {
						for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(ue(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var n = [];
			return Ie(this, arguments, function (e) {
				var t = this.parentNode;
				T.inArray(this, n) < 0 && (T.cleanData(ue(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), T.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, a) {
		T.fn[e] = function (e) {
			for (var t, n = [], i = T(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), T(i[r])[a](t), l.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var qe = /^margin/,
		Be = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
		Fe = function (e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = k), t.getComputedStyle(e)
		};

	function De(e, t, n) {
		var i, o, r, a, s = e.style;
		return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (a = T.style(e, t)), !m.pixelMarginRight() && Be.test(a) && qe.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
	}

	function Le(e, t) {
		return {
			get: function () {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}! function () {
		function e() {
			if (a) {
				a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", ve.appendChild(r);
				var e = k.getComputedStyle(a);
				t = "1%" !== e.top, o = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", i = "4px" === e.marginRight, ve.removeChild(r), a = null
			}
		}
		var t, n, i, o, r = C.createElement("div"),
			a = C.createElement("div");
		a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), T.extend(m, {
			pixelPosition: function () {
				return e(), t
			},
			boxSizingReliable: function () {
				return e(), n
			},
			pixelMarginRight: function () {
				return e(), i
			},
			reliableMarginLeft: function () {
				return e(), o
			}
		}))
	}();
	var Ne = /^(none|table(?!-c[ea]).+)/,
		Re = /^--/,
		He = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ze = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		We = ["Webkit", "Moz", "ms"],
		$e = C.createElement("div").style;

	function Ve(e) {
		var t = T.cssProps[e];
		return t || (t = T.cssProps[e] = function (e) {
			if (e in $e) return e;
			for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--;)
				if ((e = We[n] + t) in $e) return e
		}(e) || e), t
	}

	function Ue(e, t, n) {
		var i = K.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
	}

	function Xe(e, t, n, i, o) {
		var r, a = 0;
		for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (a += T.css(e, n + Z[r], !0, o)), i ? ("content" === n && (a -= T.css(e, "padding" + Z[r], !0, o)), "margin" !== n && (a -= T.css(e, "border" + Z[r] + "Width", !0, o))) : (a += T.css(e, "padding" + Z[r], !0, o), "padding" !== n && (a += T.css(e, "border" + Z[r] + "Width", !0, o)));
		return a
	}

	function Qe(e, t, n) {
		var i, o = Fe(e),
			r = De(e, t, o),
			a = "border-box" === T.css(e, "boxSizing", !1, o);
		return Be.test(r) ? r : (i = a && (m.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + Xe(e, t, n || (a ? "border" : "content"), i, o) + "px")
	}

	function Ge(e, t, n, i, o) {
		return new Ge.prototype.init(e, t, n, i, o)
	}
	T.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = De(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function (e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, r, a, s = T.camelCase(t),
					l = Re.test(t),
					u = e.style;
				return l || (t = Ve(s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : u[t] : ("string" === (r = typeof n) && (o = K.exec(n)) && o[1] && (n = ne(e, t, o), r = "number"), void(null != n && n == n && ("number" === r && (n += o && o[3] || (T.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))))
			}
		},
		css: function (e, t, n, i) {
			var o, r, a, s = T.camelCase(t);
			return Re.test(t) || (t = Ve(s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = De(e, t, i)), "normal" === o && t in ze && (o = ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
		}
	}), T.each(["height", "width"], function (e, a) {
		T.cssHooks[a] = {
			get: function (e, t, n) {
				if (t) return !Ne.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, a, n) : te(e, He, function () {
					return Qe(e, a, n)
				})
			},
			set: function (e, t, n) {
				var i, o = n && Fe(e),
					r = n && Xe(e, a, n, "border-box" === T.css(e, "boxSizing", !1, o), o);
				return r && (i = K.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = T.css(e, a)), Ue(0, t, r)
			}
		}
	}), T.cssHooks.marginLeft = Le(m.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(De(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
			marginLeft: 0
		}, function () {
			return e.getBoundingClientRect().left
		})) + "px"
	}), T.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (o, r) {
		T.cssHooks[o + r] = {
			expand: function (e) {
				for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + Z[t] + r] = i[t] || i[t - 2] || i[0];
				return n
			}
		}, qe.test(o) || (T.cssHooks[o + r].set = Ue)
	}), T.fn.extend({
		css: function (e, t) {
			return W(this, function (e, t, n) {
				var i, o, r = {},
					a = 0;
				if (Array.isArray(t)) {
					for (i = Fe(e), o = t.length; a < o; a++) r[t[a]] = T.css(e, t[a], !1, i);
					return r
				}
				return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((T.Tween = Ge).prototype = {
		constructor: Ge,
		init: function (e, t, n, i, o, r) {
			this.elem = e, this.prop = n, this.easing = o || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (T.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = Ge.propHooks[this.prop];
			return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = Ge.propHooks[this.prop];
			return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ge.propHooks._default.set(this), this
		}
	}).init.prototype = Ge.prototype, (Ge.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function (e) {
				T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = Ge.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, T.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, T.fx = Ge.prototype.init, T.fx.step = {};
	var Ye, Je, Ke, Ze, et = /^(?:toggle|show|hide)$/,
		tt = /queueHooks$/;

	function nt() {
		Je && (!1 === C.hidden && k.requestAnimationFrame ? k.requestAnimationFrame(nt) : k.setTimeout(nt, T.fx.interval), T.fx.tick())
	}

	function it() {
		return k.setTimeout(function () {
			Ye = void 0
		}), Ye = T.now()
	}

	function ot(e, t) {
		var n, i = 0,
			o = {
				height: e
			};
		for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = Z[i])] = o["padding" + n] = e;
		return t && (o.opacity = o.width = e), o
	}

	function rt(e, t, n) {
		for (var i, o = (at.tweeners[t] || []).concat(at.tweeners["*"]), r = 0, a = o.length; r < a; r++)
			if (i = o[r].call(n, t, e)) return i
	}

	function at(r, e, t) {
		var n, a, i = 0,
			o = at.prefilters.length,
			s = T.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (a) return !1;
				for (var e = Ye || it(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, o = u.tweens.length; i < o; i++) u.tweens[i].run(n);
				return s.notifyWith(r, [u, n, t]), n < 1 && o ? t : (o || s.notifyWith(r, [u, 1, 0]), s.resolveWith(r, [u]), !1)
			},
			u = s.promise({
				elem: r,
				props: T.extend({}, e),
				opts: T.extend(!0, {
					specialEasing: {},
					easing: T.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: Ye || it(),
				duration: t.duration,
				tweens: [],
				createTween: function (e, t) {
					var n = T.Tween(r, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
					return u.tweens.push(n), n
				},
				stop: function (e) {
					var t = 0,
						n = e ? u.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) u.tweens[t].run(1);
					return e ? (s.notifyWith(r, [u, 1, 0]), s.resolveWith(r, [u, e])) : s.rejectWith(r, [u, e]), this
				}
			}),
			c = u.props;
		for (function (e, t) {
				var n, i, o, r, a;
				for (n in e)
					if (o = t[i = T.camelCase(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = T.cssHooks[i]) && "expand" in a)
						for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
					else t[i] = o
			}(c, u.opts.specialEasing); i < o; i++)
			if (n = at.prefilters[i].call(u, r, c, u.opts)) return T.isFunction(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = T.proxy(n.stop, n)), n;
		return T.map(c, rt, u), T.isFunction(u.opts.start) && u.opts.start.call(r, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
			elem: r,
			anim: u,
			queue: u.opts.queue
		})), u
	}
	T.Animation = T.extend(at, {
		tweeners: {
			"*": [function (e, t) {
				var n = this.createTween(e, t);
				return ne(n.elem, e, K.exec(t), n), n
			}]
		},
		tweener: function (e, t) {
			for (var n, i = 0, o = (e = T.isFunction(e) ? (t = e, ["*"]) : e.match(F)).length; i < o; i++) n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
		},
		prefilters: [function (e, t, n) {
			var i, o, r, a, s, l, u, c, d = "width" in t || "height" in t,
				f = this,
				h = {},
				p = e.style,
				v = e.nodeType && ee(e),
				m = U.get(e, "fxshow");
			for (i in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
					a.unqueued || s()
				}), a.unqueued++, f.always(function () {
					f.always(function () {
						a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
					})
				})), t)
				if (o = t[i], et.test(o)) {
					if (delete t[i], r = r || "toggle" === o, o === (v ? "hide" : "show")) {
						if ("show" !== o || !m || void 0 === m[i]) continue;
						v = !0
					}
					h[i] = m && m[i] || T.style(e, i)
				} if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
				for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = U.get(e, "display")), "none" === (c = T.css(e, "display")) && (u ? c = u : (oe([e], !0), u = e.style.display || u, c = T.css(e, "display"), oe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (f.done(function () {
						p.display = u
					}), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
						p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
					})), l = !1, h) l || (m ? "hidden" in m && (v = m.hidden) : m = U.access(e, "fxshow", {
					display: u
				}), r && (m.hidden = !v), v && oe([e], !0), f.done(function () {
					for (i in v || oe([e]), U.remove(e, "fxshow"), h) T.style(e, i, h[i])
				})), l = rt(v ? m[i] : 0, i, f), i in m || (m[i] = l.start, v && (l.end = l.start, l.start = 0))
		}],
		prefilter: function (e, t) {
			t ? at.prefilters.unshift(e) : at.prefilters.push(e)
		}
	}), T.speed = function (e, t, n) {
		var i = e && "object" == typeof e ? T.extend({}, e) : {
			complete: n || !n && t || T.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !T.isFunction(t) && t
		};
		return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
			T.isFunction(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
		}, i
	}, T.fn.extend({
		fadeTo: function (e, t, n, i) {
			return this.filter(ee).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function (t, e, n, i) {
			var o = T.isEmptyObject(t),
				r = T.speed(e, n, i),
				a = function () {
					var e = at(this, T.extend({}, t), r);
					(o || U.get(this, "finish")) && e.stop(!0)
				};
			return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
		},
		stop: function (o, e, r) {
			var a = function (e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
				var e = !0,
					t = null != o && o + "queueHooks",
					n = T.timers,
					i = U.get(this);
				if (t) i[t] && i[t].stop && a(i[t]);
				else
					for (t in i) i[t] && i[t].stop && tt.test(t) && a(i[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
				!e && r || T.dequeue(this, o)
			})
		},
		finish: function (a) {
			return !1 !== a && (a = a || "fx"), this.each(function () {
				var e, t = U.get(this),
					n = t[a + "queue"],
					i = t[a + "queueHooks"],
					o = T.timers,
					r = n ? n.length : 0;
				for (t.finish = !0, T.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), T.each(["toggle", "show", "hide"], function (e, i) {
		var o = T.fn[i];
		T.fn[i] = function (e, t, n) {
			return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(ot(i, !0), e, t, n)
		}
	}), T.each({
		slideDown: ot("show"),
		slideUp: ot("hide"),
		slideToggle: ot("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (e, i) {
		T.fn[e] = function (e, t, n) {
			return this.animate(i, e, t, n)
		}
	}), T.timers = [], T.fx.tick = function () {
		var e, t = 0,
			n = T.timers;
		for (Ye = T.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || T.fx.stop(), Ye = void 0
	}, T.fx.timer = function (e) {
		T.timers.push(e), T.fx.start()
	}, T.fx.interval = 13, T.fx.start = function () {
		Je || (Je = !0, nt())
	}, T.fx.stop = function () {
		Je = null
	}, T.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, T.fn.delay = function (i, e) {
		return i = T.fx && T.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
			var n = k.setTimeout(e, i);
			t.stop = function () {
				k.clearTimeout(n)
			}
		})
	}, Ke = C.createElement("input"), Ze = C.createElement("select").appendChild(C.createElement("option")), Ke.type = "checkbox", m.checkOn = "" !== Ke.value, m.optSelected = Ze.selected, (Ke = C.createElement("input")).value = "t", Ke.type = "radio", m.radioValue = "t" === Ke.value;
	var st, lt = T.expr.attrHandle;
	T.fn.extend({
		attr: function (e, t) {
			return W(this, T.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function (e) {
			return this.each(function () {
				T.removeAttr(this, e)
			})
		}
	}), T.extend({
		attr: function (e, t, n) {
			var i, o, r = e.nodeType;
			if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === r && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!m.radioValue && "radio" === t && E(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function (e, t) {
			var n, i = 0,
				o = t && t.match(F);
			if (o && 1 === e.nodeType)
				for (; n = o[i++];) e.removeAttribute(n)
		}
	}), st = {
		set: function (e, t, n) {
			return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var a = lt[t] || T.find.attr;
		lt[t] = function (e, t, n) {
			var i, o, r = t.toLowerCase();
			return n || (o = lt[r], lt[r] = i, i = null != a(e, t, n) ? r : null, lt[r] = o), i
		}
	});
	var ut = /^(?:input|select|textarea|button)$/i,
		ct = /^(?:a|area)$/i;

	function dt(e) {
		return (e.match(F) || []).join(" ")
	}

	function ft(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}
	T.fn.extend({
		prop: function (e, t) {
			return W(this, T.prop, e, t, 1 < arguments.length)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[T.propFix[e] || e]
			})
		}
	}), T.extend({
		prop: function (e, t, n) {
			var i, o, r = e.nodeType;
			if (3 !== r && 8 !== r && 2 !== r) return 1 === r && T.isXMLDoc(e) || (t = T.propFix[t] || t, o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = T.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), m.optSelected || (T.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function (e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		T.propFix[this.toLowerCase()] = this
	}), T.fn.extend({
		addClass: function (t) {
			var e, n, i, o, r, a, s, l = 0;
			if (T.isFunction(t)) return this.each(function (e) {
				T(this).addClass(t.call(this, e, ft(this)))
			});
			if ("string" == typeof t && t)
				for (e = t.match(F) || []; n = this[l++];)
					if (o = ft(n), i = 1 === n.nodeType && " " + dt(o) + " ") {
						for (a = 0; r = e[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
						o !== (s = dt(i)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function (t) {
			var e, n, i, o, r, a, s, l = 0;
			if (T.isFunction(t)) return this.each(function (e) {
				T(this).removeClass(t.call(this, e, ft(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof t && t)
				for (e = t.match(F) || []; n = this[l++];)
					if (o = ft(n), i = 1 === n.nodeType && " " + dt(o) + " ") {
						for (a = 0; r = e[a++];)
							for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
						o !== (s = dt(i)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function (o, t) {
			var r = typeof o;
			return "boolean" == typeof t && "string" === r ? t ? this.addClass(o) : this.removeClass(o) : T.isFunction(o) ? this.each(function (e) {
				T(this).toggleClass(o.call(this, e, ft(this), t), t)
			}) : this.each(function () {
				var e, t, n, i;
				if ("string" === r)
					for (t = 0, n = T(this), i = o.match(F) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
				else void 0 !== o && "boolean" !== r || ((e = ft(this)) && U.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : U.get(this, "__className__") || ""))
			})
		},
		hasClass: function (e) {
			var t, n, i = 0;
			for (t = " " + e + " "; n = this[i++];)
				if (1 === n.nodeType && -1 < (" " + dt(ft(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var ht = /\r/g;
	T.fn.extend({
		val: function (n) {
			var i, e, o, t = this[0];
			return arguments.length ? (o = T.isFunction(n), this.each(function (e) {
				var t;
				1 === this.nodeType && (null == (t = o ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = T.map(t, function (e) {
					return null == e ? "" : e + ""
				})), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
			})) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(ht, "") : null == e ? "" : e : void 0
		}
	}), T.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = T.find.attr(e, "value");
					return null != t ? t : dt(T.text(e))
				}
			},
			select: {
				get: function (e) {
					var t, n, i, o = e.options,
						r = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						l = a ? r + 1 : o.length;
					for (i = r < 0 ? l : a ? r : 0; i < l; i++)
						if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
							if (t = T(n).val(), a) return t;
							s.push(t)
						} return s
				},
				set: function (e, t) {
					for (var n, i, o = e.options, r = T.makeArray(t), a = o.length; a--;)((i = o[a]).selected = -1 < T.inArray(T.valHooks.option.get(i), r)) && (n = !0);
					return n || (e.selectedIndex = -1), r
				}
			}
		}
	}), T.each(["radio", "checkbox"], function () {
		T.valHooks[this] = {
			set: function (e, t) {
				if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
			}
		}, m.checkOn || (T.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var pt = /^(?:focusinfocus|focusoutblur)$/;
	T.extend(T.event, {
		trigger: function (e, t, n, i) {
			var o, r, a, s, l, u, c, d = [n || C],
				f = p.call(e, "type") ? e.type : e,
				h = p.call(e, "namespace") ? e.namespace.split(".") : [];
			if (r = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !pt.test(f + T.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[T.expando] ? e : new T.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), c = T.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
				if (!i && !c.noBubble && !T.isWindow(n)) {
					for (s = c.delegateType || f, pt.test(s + f) || (r = r.parentNode); r; r = r.parentNode) d.push(r), a = r;
					a === (n.ownerDocument || C) && d.push(a.defaultView || a.parentWindow || k)
				}
				for (o = 0;
					(r = d[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? s : c.bindType || f, (u = (U.get(r, "events") || {})[e.type] && U.get(r, "handle")) && u.apply(r, t), (u = l && r[l]) && u.apply && $(r) && (e.result = u.apply(r, t), !1 === e.result && e.preventDefault());
				return e.type = f, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !$(n) || l && T.isFunction(n[f]) && !T.isWindow(n) && ((a = n[l]) && (n[l] = null), n[T.event.triggered = f](), T.event.triggered = void 0, a && (n[l] = a)), e.result
			}
		},
		simulate: function (e, t, n) {
			var i = T.extend(new T.Event, n, {
				type: e,
				isSimulated: !0
			});
			T.event.trigger(i, null, t)
		}
	}), T.fn.extend({
		trigger: function (e, t) {
			return this.each(function () {
				T.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var n = this[0];
			if (n) return T.event.trigger(e, t, n, !0)
		}
	}), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
		T.fn[n] = function (e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	}), T.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), m.focusin = "onfocusin" in k, m.focusin || T.each({
		focus: "focusin",
		blur: "focusout"
	}, function (n, i) {
		var o = function (e) {
			T.event.simulate(i, e.target, T.event.fix(e))
		};
		T.event.special[i] = {
			setup: function () {
				var e = this.ownerDocument || this,
					t = U.access(e, i);
				t || e.addEventListener(n, o, !0), U.access(e, i, (t || 0) + 1)
			},
			teardown: function () {
				var e = this.ownerDocument || this,
					t = U.access(e, i) - 1;
				t ? U.access(e, i, t) : (e.removeEventListener(n, o, !0), U.remove(e, i))
			}
		}
	});
	var vt = k.location,
		mt = T.now(),
		gt = /\?/;
	T.parseXML = function (e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new k.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
	};
	var yt = /\[\]$/,
		bt = /\r?\n/g,
		xt = /^(?:submit|button|image|reset|file)$/i,
		wt = /^(?:input|select|textarea|keygen)/i;

	function St(n, e, i, o) {
		var t;
		if (Array.isArray(e)) T.each(e, function (e, t) {
			i || yt.test(n) ? o(n, t) : St(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
		});
		else if (i || "object" !== T.type(e)) o(n, e);
		else
			for (t in e) St(n + "[" + t + "]", e[t], i, o)
	}
	T.param = function (e, t) {
		var n, i = [],
			o = function (e, t) {
				var n = T.isFunction(t) ? t() : t;
				i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
			o(this.name, this.value)
		});
		else
			for (n in e) St(n, e[n], t, o);
		return i.join("&")
	}, T.fn.extend({
		serialize: function () {
			return T.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = T.prop(this, "elements");
				return e ? T.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !T(this).is(":disabled") && wt.test(this.nodeName) && !xt.test(e) && (this.checked || !re.test(e))
			}).map(function (e, t) {
				var n = T(this).val();
				return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
					return {
						name: t.name,
						value: e.replace(bt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(bt, "\r\n")
				}
			}).get()
		}
	});
	var kt = /%20/g,
		Ct = /#.*$/,
		Tt = /([?&])_=[^&]*/,
		At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Et = /^(?:GET|HEAD)$/,
		Mt = /^\/\//,
		jt = {},
		Pt = {},
		_t = "*/".concat("*"),
		It = C.createElement("a");

	function Ot(r) {
		return function (e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, i = 0,
				o = e.toLowerCase().match(F) || [];
			if (T.isFunction(t))
				for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
		}
	}

	function qt(t, o, r, a) {
		var s = {},
			l = t === Pt;

		function u(e) {
			var i;
			return s[e] = !0, T.each(t[e] || [], function (e, t) {
				var n = t(o, r, a);
				return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), u(n), !1)
			}), i
		}
		return u(o.dataTypes[0]) || !s["*"] && u("*")
	}

	function Bt(e, t) {
		var n, i, o = T.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
		return i && T.extend(!0, e, i), e
	}
	It.href = vt.href, T.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: vt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": _t,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": T.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? Bt(Bt(e, T.ajaxSettings), t) : Bt(T.ajaxSettings, e)
		},
		ajaxPrefilter: Ot(jt),
		ajaxTransport: Ot(Pt),
		ajax: function (e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var c, d, f, n, h, i, p, v, o, r, m = T.ajaxSetup({}, t),
				g = m.context || m,
				y = m.context && (g.nodeType || g.jquery) ? T(g) : T.event,
				b = T.Deferred(),
				x = T.Callbacks("once memory"),
				w = m.statusCode || {},
				a = {},
				s = {},
				l = "canceled",
				S = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (p) {
							if (!n)
								for (n = {}; t = At.exec(f);) n[t[1].toLowerCase()] = t[2];
							t = n[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return p ? f : null
					},
					setRequestHeader: function (e, t) {
						return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
					},
					overrideMimeType: function (e) {
						return null == p && (m.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (p) S.always(e[S.status]);
							else
								for (t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function (e) {
						var t = e || l;
						return c && c.abort(t), u(0, t), this
					}
				};
			if (b.promise(S), m.url = ((e || m.url || vt.href) + "").replace(Mt, vt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(F) || [""], null == m.crossDomain) {
				i = C.createElement("a");
				try {
					i.href = m.url, i.href = i.href, m.crossDomain = It.protocol + "//" + It.host != i.protocol + "//" + i.host
				} catch (e) {
					m.crossDomain = !0
				}
			}
			if (m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)), qt(jt, m, t, S), p) return S;
			for (o in (v = T.event && m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Et.test(m.type), d = m.url.replace(Ct, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(kt, "+")) : (r = m.url.slice(d.length), m.data && (d += (gt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(Tt, "$1"), r = (gt.test(d) ? "&" : "?") + "_=" + mt++ + r), m.url = d + r), m.ifModified && (T.lastModified[d] && S.setRequestHeader("If-Modified-Since", T.lastModified[d]), T.etag[d] && S.setRequestHeader("If-None-Match", T.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && S.setRequestHeader("Content-Type", m.contentType), S.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : m.accepts["*"]), m.headers) S.setRequestHeader(o, m.headers[o]);
			if (m.beforeSend && (!1 === m.beforeSend.call(g, S, m) || p)) return S.abort();
			if (l = "abort", x.add(m.complete), S.done(m.success), S.fail(m.error), c = qt(Pt, m, t, S)) {
				if (S.readyState = 1, v && y.trigger("ajaxSend", [S, m]), p) return S;
				m.async && 0 < m.timeout && (h = k.setTimeout(function () {
					S.abort("timeout")
				}, m.timeout));
				try {
					p = !1, c.send(a, u)
				} catch (e) {
					if (p) throw e;
					u(-1, e)
				}
			} else u(-1, "No Transport");

			function u(e, t, n, i) {
				var o, r, a, s, l, u = t;
				p || (p = !0, h && k.clearTimeout(h), c = void 0, f = i || "", S.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
					for (var i, o, r, a, s = e.contents, l = e.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
					if (i)
						for (o in s)
							if (s[o] && s[o].test(i)) {
								l.unshift(o);
								break
							} if (l[0] in n) r = l[0];
					else {
						for (o in n) {
							if (!l[0] || e.converters[o + " " + l[0]]) {
								r = o;
								break
							}
							a || (a = o)
						}
						r = r || a
					}
					if (r) return r !== l[0] && l.unshift(r), n[r]
				}(m, S, n)), s = function (e, t, n, i) {
					var o, r, a, s, l, u = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
					for (r = c.shift(); r;)
						if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
							if ("*" === r) r = l;
							else if ("*" !== l && l !== r) {
						if (!(a = u[l + " " + r] || u["* " + r]))
							for (o in u)
								if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
									!0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));
									break
								} if (!0 !== a)
							if (a && e.throws) t = a(t);
							else try {
								t = a(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: a ? e : "No conversion from " + l + " to " + r
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(m, s, S, o), o ? (m.ifModified && ((l = S.getResponseHeader("Last-Modified")) && (T.lastModified[d] = l), (l = S.getResponseHeader("etag")) && (T.etag[d] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, r = s.data, o = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || u) + "", o ? b.resolveWith(g, [r, u, S]) : b.rejectWith(g, [S, u, a]), S.statusCode(w), w = void 0, v && y.trigger(o ? "ajaxSuccess" : "ajaxError", [S, m, o ? r : a]), x.fireWith(g, [S, u]), v && (y.trigger("ajaxComplete", [S, m]), --T.active || T.event.trigger("ajaxStop")))
			}
			return S
		},
		getJSON: function (e, t, n) {
			return T.get(e, t, n, "json")
		},
		getScript: function (e, t) {
			return T.get(e, void 0, t, "script")
		}
	}), T.each(["get", "post"], function (e, o) {
		T[o] = function (e, t, n, i) {
			return T.isFunction(t) && (i = i || n, n = t, t = void 0), T.ajax(T.extend({
				url: e,
				type: o,
				dataType: i,
				data: t,
				success: n
			}, T.isPlainObject(e) && e))
		}
	}), T._evalUrl = function (e) {
		return T.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, T.fn.extend({
		wrapAll: function (e) {
			var t;
			return this[0] && (T.isFunction(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function (n) {
			return T.isFunction(n) ? this.each(function (e) {
				T(this).wrapInner(n.call(this, e))
			}) : this.each(function () {
				var e = T(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function (t) {
			var n = T.isFunction(t);
			return this.each(function (e) {
				T(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function (e) {
			return this.parent(e).not("body").each(function () {
				T(this).replaceWith(this.childNodes)
			}), this
		}
	}), T.expr.pseudos.hidden = function (e) {
		return !T.expr.pseudos.visible(e)
	}, T.expr.pseudos.visible = function (e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, T.ajaxSettings.xhr = function () {
		try {
			return new k.XMLHttpRequest
		} catch (e) {}
	};
	var Ft = {
			0: 200,
			1223: 204
		},
		Dt = T.ajaxSettings.xhr();
	m.cors = !!Dt && "withCredentials" in Dt, m.ajax = Dt = !!Dt, T.ajaxTransport(function (o) {
		var r, a;
		if (m.cors || Dt && !o.crossDomain) return {
			send: function (e, t) {
				var n, i = o.xhr();
				if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
					for (n in o.xhrFields) i[n] = o.xhrFields[n];
				for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
				r = function (e) {
					return function () {
						r && (r = a = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Ft[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
							binary: i.response
						} : {
							text: i.responseText
						}, i.getAllResponseHeaders()))
					}
				}, i.onload = r(), a = i.onerror = r("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function () {
					4 === i.readyState && k.setTimeout(function () {
						r && a()
					})
				}, r = r("abort");
				try {
					i.send(o.hasContent && o.data || null)
				} catch (e) {
					if (r) throw e
				}
			},
			abort: function () {
				r && r()
			}
		}
	}), T.ajaxPrefilter(function (e) {
		e.crossDomain && (e.contents.script = !1)
	}), T.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (e) {
				return T.globalEval(e), e
			}
		}
	}), T.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), T.ajaxTransport("script", function (n) {
		var i, o;
		if (n.crossDomain) return {
			send: function (e, t) {
				i = T("<script>").prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", o = function (e) {
					i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), C.head.appendChild(i[0])
			},
			abort: function () {
				o && o()
			}
		}
	});
	var Lt, Nt = [],
		Rt = /(=)\?(?=&|$)|\?\?/;
	T.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Nt.pop() || T.expando + "_" + mt++;
			return this[e] = !0, e
		}
	}), T.ajaxPrefilter("json jsonp", function (e, t, n) {
		var i, o, r, a = !1 !== e.jsonp && (Rt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = T.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Rt, "$1" + i) : !1 !== e.jsonp && (e.url += (gt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
			return r || T.error(i + " was not called"), r[0]
		}, e.dataTypes[0] = "json", o = k[i], k[i] = function () {
			r = arguments
		}, n.always(function () {
			void 0 === o ? T(k).removeProp(i) : k[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Nt.push(i)), r && T.isFunction(o) && o(r[0]), r = o = void 0
		}), "script"
	}), m.createHTMLDocument = ((Lt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Lt.childNodes.length), T.parseHTML = function (e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(i)) : t = C), r = !n && [], (o = M.exec(e)) ? [t.createElement(o[1])] : (o = pe([e], t, r), r && r.length && T(r).remove(), T.merge([], o.childNodes)));
		var i, o, r
	}, T.fn.load = function (e, t, n) {
		var i, o, r, a = this,
			s = e.indexOf(" ");
		return -1 < s && (i = dt(e.slice(s)), e = e.slice(0, s)), T.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && T.ajax({
			url: e,
			type: o || "GET",
			dataType: "html",
			data: t
		}).done(function (e) {
			r = arguments, a.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
		}).always(n && function (e, t) {
			a.each(function () {
				n.apply(this, r || [e.responseText, t, e])
			})
		}), this
	}, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		T.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), T.expr.pseudos.animated = function (t) {
		return T.grep(T.timers, function (e) {
			return t === e.elem
		}).length
	}, T.offset = {
		setOffset: function (e, t, n) {
			var i, o, r, a, s, l, u = T.css(e, "position"),
				c = T(e),
				d = {};
			"static" === u && (e.style.position = "relative"), s = c.offset(), r = T.css(e, "top"), l = T.css(e, "left"), o = ("absolute" === u || "fixed" === u) && -1 < (r + l).indexOf("auto") ? (a = (i = c.position()).top, i.left) : (a = parseFloat(r) || 0, parseFloat(l) || 0), T.isFunction(t) && (t = t.call(e, n, T.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : c.css(d)
		}
	}, T.fn.extend({
		offset: function (t) {
			if (arguments.length) return void 0 === t ? this : this.each(function (e) {
				T.offset.setOffset(this, t, e)
			});
			var e, n, i, o, r = this[0];
			return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), n = (e = r.ownerDocument).documentElement, o = e.defaultView, {
				top: i.top + o.pageYOffset - n.clientTop,
				left: i.left + o.pageXOffset - n.clientLeft
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function () {
			if (this[0]) {
				var e, t, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === T.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), E(e[0], "html") || (i = e.offset()), i = {
					top: i.top + T.css(e[0], "borderTopWidth", !0),
					left: i.left + T.css(e[0], "borderLeftWidth", !0)
				}), {
					top: t.top - i.top - T.css(n, "marginTop", !0),
					left: t.left - i.left - T.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
				return e || ve
			})
		}
	}), T.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (t, o) {
		var r = "pageYOffset" === o;
		T.fn[t] = function (e) {
			return W(this, function (e, t, n) {
				var i;
				return T.isWindow(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n)
			}, t, e, arguments.length)
		}
	}), T.each(["top", "left"], function (e, n) {
		T.cssHooks[n] = Le(m.pixelPosition, function (e, t) {
			if (t) return t = De(e, n), Be.test(t) ? T(e).position()[n] + "px" : t
		})
	}), T.each({
		Height: "height",
		Width: "width"
	}, function (a, s) {
		T.each({
			padding: "inner" + a,
			content: s,
			"": "outer" + a
		}, function (i, r) {
			T.fn[r] = function (e, t) {
				var n = arguments.length && (i || "boolean" != typeof e),
					o = i || (!0 === e || !0 === t ? "margin" : "border");
				return W(this, function (e, t, n) {
					var i;
					return T.isWindow(e) ? 0 === r.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? T.css(e, t, o) : T.style(e, t, n, o)
				}, s, n ? e : void 0, n)
			}
		})
	}), T.fn.extend({
		bind: function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), T.holdReady = function (e) {
		e ? T.readyWait++ : T.ready(!0)
	}, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = E, "function" == typeof define && define.amd && define("jquery", [], function () {
		return T
	});
	var Ht = k.jQuery,
		zt = k.$;
	return T.noConflict = function (e) {
		return k.$ === T && (k.$ = zt), e && k.jQuery === T && (k.jQuery = Ht), T
	}, e || (k.jQuery = k.$ = T), T
}),
function (e) {
	"use strict";
	"object" == typeof exports ? e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (n) {
	"use strict";
	var i = function (e) {
		if ("string" != typeof (e = e || "once")) throw new TypeError("The jQuery Once id parameter must be a string");
		return e
	};
	n.fn.once = function (e) {
		var t = "jquery-once-" + i(e);
		return this.filter(function () {
			return !0 !== n(this).data(t)
		}).data(t, !0)
	}, n.fn.removeOnce = function (e) {
		return this.findOnce(e).removeData("jquery-once-" + i(e))
	}, n.fn.findOnce = function (e) {
		var t = "jquery-once-" + i(e);
		return this.filter(function () {
			return !0 === n(this).data(t)
		})
	}
}), window.Drupal = {
		behaviors: {},
		locale: {}
	},
	function (l, u, c) {
		l.throwError = function (e) {
			setTimeout(function () {
				throw e
			}, 0)
		}, l.attachBehaviors = function (t, n) {
			t = t || document, n = n || u;
			var i = l.behaviors;
			Object.keys(i || {}).forEach(function (e) {
				if ("function" == typeof i[e].attach) try {
					i[e].attach(t, n)
				} catch (e) {
					l.throwError(e)
				}
			})
		}, l.detachBehaviors = function (t, n, i) {
			t = t || document, n = n || u, i = i || "unload";
			var o = l.behaviors;
			Object.keys(o || {}).forEach(function (e) {
				if ("function" == typeof o[e].detach) try {
					o[e].detach(t, n, i)
				} catch (e) {
					l.throwError(e)
				}
			})
		}, l.checkPlain = function (e) {
			return e = e.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
		}, l.formatString = function (e, t) {
			var n = {};
			return Object.keys(t || {}).forEach(function (e) {
				switch (e.charAt(0)) {
					case "@":
						n[e] = l.checkPlain(t[e]);
						break;
					case "!":
						n[e] = t[e];
						break;
					default:
						n[e] = l.theme("placeholder", t[e])
				}
			}), l.stringReplace(e, n, null)
		}, l.stringReplace = function (e, t, n) {
			if (0 === e.length) return e;
			if (Array.isArray(n) || (n = Object.keys(t || {})).sort(function (e, t) {
					return e.length - t.length
				}), 0 === n.length) return e;
			var i = n.pop(),
				o = e.split(i);
			if (n.length)
				for (var r = 0; r < o.length; r++) o[r] = l.stringReplace(o[r], t, n.slice(0));
			return o.join(t[i])
		}, l.t = function (e, t, n) {
			return (n = n || {}).context = n.context || "", void 0 !== c && c.strings && c.strings[n.context] && c.strings[n.context][e] && (e = c.strings[n.context][e]), t && (e = l.formatString(e, t)), e
		}, l.url = function (e) {
			return u.path.baseUrl + u.path.pathPrefix + e
		}, l.url.toAbsolute = function (e) {
			var t = document.createElement("a");
			try {
				e = decodeURIComponent(e)
			} catch (e) {}
			return t.setAttribute("href", e), t.cloneNode(!1).href
		}, l.url.isLocal = function (e) {
			var t = l.url.toAbsolute(e),
				n = window.location.protocol;
			"http:" === n && 0 === t.indexOf("https:") && (n = "https:");
			var i = n + "//" + window.location.host + u.path.baseUrl.slice(0, -1);
			try {
				t = decodeURIComponent(t)
			} catch (e) {}
			try {
				i = decodeURIComponent(i)
			} catch (e) {}
			return t === i || 0 === t.indexOf(i + "/")
		}, l.formatPlural = function (e, t, n, i, o) {
			(i = i || {})["@count"] = e;
			var r = u.pluralDelimiter,
				a = l.t(t + r + n, i, o).split(r),
				s = 0;
			return void 0 !== c && c.pluralFormula ? s = e in c.pluralFormula ? c.pluralFormula[e] : c.pluralFormula.default : 1 !== i["@count"] && (s = 1), a[s]
		}, l.encodePath = function (e) {
			return window.encodeURIComponent(e).replace(/%2F/g, "/")
		}, l.theme = function (e) {
			if (e in l.theme) {
				for (var t, n = arguments.length, i = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
				return (t = l.theme)[e].apply(t, i)
			}
		}, l.theme.placeholder = function (e) {
			return '<em class="placeholder">' + l.checkPlain(e) + "</em>"
		}
	}(Drupal, window.drupalSettings, window.drupalTranslations), window.jQuery && jQuery.noConflict(), document.documentElement.className += " js",
	function (e, t, n) {
		e(function () {
			t.attachBehaviors(document, n)
		})
	}(domready, Drupal, window.drupalSettings),
	function (e, t, a) {
		function s(e, t) {
			var n = this,
				i = a(n);
			if (n.value == i.attr("placeholder") && i.hasClass("placeholder"))
				if (i.data("placeholder-password")) {
					if (i = i.hide().next().show().attr("id", i.removeAttr("id").data("placeholder-id")), !0 === e) return i[0].value = t;
					i.focus()
				} else n.value = "", i.removeClass("placeholder"), n == r() && n.select()
		}

		function o() {
			var t, n, i, o, e = a(this),
				r = this.id;
			if ("" == this.value) {
				if ("password" == this.type) {
					if (!e.data("placeholder-textinput")) {
						try {
							t = e.clone().attr({
								type: "text"
							})
						} catch (e) {
							t = a("<input>").attr(a.extend((n = this, i = {}, o = /^jQuery\d+$/, a.each(n.attributes, function (e, t) {
								t.specified && !o.test(t.name) && (i[t.name] = t.value)
							}), i), {
								type: "text"
							}))
						}
						t.removeAttr("name").data({
							"placeholder-password": e,
							"placeholder-id": r
						}).bind("focus.placeholder", s), e.data({
							"placeholder-textinput": t,
							"placeholder-id": r
						}).before(t)
					}
					e = e.removeAttr("id").hide().prev().attr("id", r).show()
				}
				e.addClass("placeholder"), e[0].value = e.attr("placeholder")
			} else e.removeClass("placeholder")
		}

		function r() {
			try {
				return t.activeElement
			} catch (e) {}
		}
		var n, i, l = "[object OperaMini]" == Object.prototype.toString.call(e.operamini),
			u = "placeholder" in t.createElement("input") && !l,
			c = "placeholder" in t.createElement("textarea") && !l,
			d = a.fn,
			f = a.valHooks,
			h = a.propHooks;
		u && c ? (i = d.placeholder = function () {
			return this
		}).input = i.textarea = !0 : ((i = d.placeholder = function () {
			return this.filter((u ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
				"focus.placeholder": s,
				"blur.placeholder": o
			}).data("placeholder-enabled", !0).trigger("blur.placeholder"), this
		}).input = u, i.textarea = c, n = {
			get: function (e) {
				var t = a(e),
					n = t.data("placeholder-password");
				return n ? n[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
			},
			set: function (e, t) {
				var n = a(e),
					i = n.data("placeholder-password");
				return i ? i[0].value = t : n.data("placeholder-enabled") ? ("" == t ? (e.value = t, e != r() && o.call(e)) : n.hasClass("placeholder") && s.call(e, !0, t) || (e.value = t), n) : e.value = t
			}
		}, u || (f.input = n, h.value = n), c || (f.textarea = n, h.value = n), a(function () {
			a(t).delegate("form", "submit.placeholder", function () {
				var e = a(".placeholder", this).each(s);
				setTimeout(function () {
					e.each(o)
				}, 10)
			})
		}), a(e).bind("beforeunload.placeholder", function () {
			a(".placeholder").each(function () {
				this.value = ""
			})
		}))
	}(this, document, jQuery),
	function (d, l, i, o) {
		"use strict";
		! function (e) {
			for (var t = e.length, n = d("head"); t--;) 0 === n.has("." + e[t]).length && n.append('<meta class="' + e[t] + '" />')
		}(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), d(function () {
			"undefined" != typeof FastClick && void 0 !== i.body && FastClick.attach(i.body)
		});
		var e, t, n, r, a, s, u = function (e, t) {
				if ("string" != typeof e) return d(e, t);
				if (t) {
					var n;
					if (t.jquery) {
						if (!(n = t[0])) return t
					} else n = t;
					return d(n.querySelectorAll(e))
				}
				return d(i.querySelectorAll(e))
			},
			c = function (e) {
				var t = [];
				return e || t.push("data"), 0 < this.namespace.length && t.push(this.namespace), t.push(this.name), t.join("-")
			},
			f = function (e) {
				for (var t = e.split("-"), n = t.length, i = []; n--;) 0 !== n ? i.push(t[n]) : 0 < this.namespace.length ? i.push(this.namespace, t[n]) : i.push(t[n]);
				return i.reverse().join("-")
			},
			h = function (t, n) {
				var i = this,
					e = !u(this).data(this.attr_name(!0));
				if (u(this.scope).is("[" + this.attr_name() + "]") ? (u(this.scope).data(this.attr_name(!0) + "-init", d.extend({}, this.settings, n || t, this.data_options(u(this.scope)))), e && this.events(this.scope)) : u("[" + this.attr_name() + "]", this.scope).each(function () {
						var e = !u(this).data(i.attr_name(!0) + "-init");
						u(this).data(i.attr_name(!0) + "-init", d.extend({}, i.settings, n || t, i.data_options(u(this)))), e && i.events(this)
					}), "string" == typeof t) return this[t].call(this, n)
			};
		l.matchMedia = l.matchMedia || (n = (e = i).documentElement, r = n.firstElementChild || n.firstChild, a = e.createElement("body"), (s = e.createElement("div")).id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", a.style.background = "none", a.appendChild(s), function (e) {
				return s.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(a, r), t = 42 === s.offsetWidth, n.removeChild(a), {
					matches: t,
					media: e
				}
			}),
			function (e) {
				for (var t, o = 0, n = ["webkit", "moz"], i = l.requestAnimationFrame, r = l.cancelAnimationFrame, a = void 0 !== jQuery.fx; o < n.length && !i; o++) i = l[n[o] + "RequestAnimationFrame"], r = r || l[n[o] + "CancelAnimationFrame"] || l[n[o] + "CancelRequestAnimationFrame"];

				function s() {
					t && (i(s), a && jQuery.fx.tick())
				}
				i ? (l.requestAnimationFrame = i, l.cancelAnimationFrame = r, a && (jQuery.fx.timer = function (e) {
					e() && jQuery.timers.push(e) && !t && (t = !0, s())
				}, jQuery.fx.stop = function () {
					t = !1
				})) : (l.requestAnimationFrame = function (e) {
					var t = (new Date).getTime(),
						n = Math.max(0, 16 - (t - o)),
						i = l.setTimeout(function () {
							e(t + n)
						}, n);
					return o = t + n, i
				}, l.cancelAnimationFrame = function (e) {
					clearTimeout(e)
				})
			}(jQuery), l.Foundation = {
				name: "Foundation",
				version: "5.4.5",
				media_queries: {
					small: u(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
					medium: u(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
					large: u(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
					xlarge: u(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
					xxlarge: u(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
				},
				stylesheet: d("<style></style>").appendTo("head")[0].sheet,
				global: {
					namespace: o
				},
				init: function (e, t, n, i, o) {
					var r = [e, n, i, o],
						a = [];
					if (this.rtl = /rtl/i.test(u("html").attr("dir")), this.scope = e || this.scope, this.set_namespace(), t && "string" == typeof t && !/reflow/i.test(t)) this.libs.hasOwnProperty(t) && a.push(this.init_lib(t, r));
					else
						for (var s in this.libs) a.push(this.init_lib(s, t));
					return u(l).load(function () {
						u(l).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
					}), e
				},
				init_lib: function (e, t) {
					return this.libs.hasOwnProperty(e) ? (this.patch(this.libs[e]), t && t.hasOwnProperty(e) ? (void 0 !== this.libs[e].settings ? d.extend(!0, this.libs[e].settings, t[e]) : void 0 !== this.libs[e].defaults && d.extend(!0, this.libs[e].defaults, t[e]), this.libs[e].init.apply(this.libs[e], [this.scope, t[e]])) : (t = t instanceof Array ? t : new Array(t), this.libs[e].init.apply(this.libs[e], t))) : function () {}
				},
				patch: function (e) {
					e.scope = this.scope, e.namespace = this.global.namespace, e.rtl = this.rtl, e.data_options = this.utils.data_options, e.attr_name = c, e.add_namespace = f, e.bindings = h, e.S = this.utils.S
				},
				inherit: function (e, t) {
					for (var n = t.split(" "), i = n.length; i--;) this.utils.hasOwnProperty(n[i]) && (e[n[i]] = this.utils[n[i]])
				},
				set_namespace: function () {
					var e = this.global.namespace === o ? d(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
					this.global.namespace = e === o || /false/i.test(e) ? "" : e
				},
				libs: {},
				utils: {
					S: u,
					throttle: function (n, i) {
						var o = null;
						return function () {
							var e = this,
								t = arguments;
							null == o && (o = setTimeout(function () {
								n.apply(e, t), o = null
							}, i))
						}
					},
					debounce: function (i, o, r) {
						var a, s;
						return function () {
							var e = this,
								t = arguments,
								n = r && !a;
							return clearTimeout(a), a = setTimeout(function () {
								a = null, r || (s = i.apply(e, t))
							}, o), n && (s = i.apply(e, t)), s
						}
					},
					data_options: function (e, t) {
						t = t || "options";
						var n, i, o, r, a, s, l = {},
							u = (r = e, 0 < (a = Foundation.global.namespace).length ? r.data(a + "-" + t) : r.data(t));
						if ("object" == typeof u) return u;

						function c(e) {
							return "string" == typeof e ? d.trim(e) : e
						}
						for (n = (o = (u || ":").split(";")).length; n--;) i = [(i = o[n].split(":"))[0], i.slice(1).join(":")], /true/i.test(i[1]) && (i[1] = !0), /false/i.test(i[1]) && (i[1] = !1), s = i[1], isNaN(s - 0) || null === s || "" === s || !1 === s || !0 === s || (-1 === i[1].indexOf(".") ? i[1] = parseInt(i[1], 10) : i[1] = parseFloat(i[1])), 2 === i.length && 0 < i[0].length && (l[c(i[0])] = c(i[1]));
						return l
					},
					register_media: function (e, t) {
						var n;
						Foundation.media_queries[e] === o && (d("head").append('<meta class="' + t + '"/>'), Foundation.media_queries[e] = (("string" == typeof (n = d("." + t).css("font-family")) || n instanceof String) && (n = n.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), n))
					},
					add_custom_rule: function (e, t) {
						t === o && Foundation.stylesheet ? Foundation.stylesheet.insertRule(e, Foundation.stylesheet.cssRules.length) : Foundation.media_queries[t] !== o && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[t] + "{ " + e + " }")
					},
					image_loaded: function (e, t) {
						var n = this,
							i = e.length;
						0 === i && t(e), e.each(function () {
							! function (e, t) {
								function n() {
									t(e[0])
								}
								e.attr("src") ? e[0].complete || 4 === e[0].readyState ? n() : function () {
									if (this.one("load", n), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
										var e = this.attr("src"),
											t = e.match(/\?/) ? "&" : "?";
										t += "random=" + (new Date).getTime(), this.attr("src", e + t)
									}
								}.call(e) : n()
							}(n.S(this), function () {
								0 === (i -= 1) && t(e)
							})
						})
					},
					random_str: function () {
						return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
					}
				}
			}, d.fn.foundation = function () {
				var e = Array.prototype.slice.call(arguments, 0);
				return this.each(function () {
					return Foundation.init.apply(Foundation, [this].concat(e)), this
				})
			}
	}(jQuery, window, window.document),
	function (u, c, d, f) {
		"use strict";
		Foundation.libs.tab = {
			name: "tab",
			version: "5.4.5",
			settings: {
				active_class: "active",
				callback: function () {},
				deep_linking: !1,
				scroll_to_content: !0,
				is_hover: !1
			},
			default_tab_hashes: [],
			init: function (e, t, n) {
				var i = this,
					o = this.S;
				this.bindings(t, n), this.handle_location_hash_change(), o("[" + this.attr_name() + "] > .active > a", this.scope).each(function () {
					i.default_tab_hashes.push(this.hash)
				})
			},
			events: function () {
				var t = this,
					n = this.S,
					e = function (e) {
						n(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init").is_hover && !Modernizr.touch || (e.preventDefault(), e.stopPropagation(), t.toggle_active_tab(n(this).parent()))
					};
				n(this.scope).off(".tab").on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", e).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", e).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function (e) {
					n(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init").is_hover && t.toggle_active_tab(n(this).parent())
				}), n(c).on("hashchange.fndtn.tab", function (e) {
					e.preventDefault(), t.handle_location_hash_change()
				})
			},
			handle_location_hash_change: function () {
				var r = this,
					a = this.S;
				a("[" + this.attr_name() + "]", this.scope).each(function () {
					var e, t = a(this).data(r.attr_name(!0) + "-init");
					if (t.deep_linking)
						if ("" != (e = t.scroll_to_content ? r.scope.location.hash : r.scope.location.hash.replace("fndtn-", ""))) {
							var n = a(e);
							if (n.hasClass("content") && n.parent().hasClass("tab-content")) r.toggle_active_tab(u("[" + r.attr_name() + "] > * > a[href=" + e + "]").parent());
							else {
								var i = n.closest(".content").attr("id");
								i != f && r.toggle_active_tab(u("[" + r.attr_name() + "] > * > a[href=#" + i + "]").parent(), e)
							}
						} else
							for (var o in r.default_tab_hashes) r.toggle_active_tab(u("[" + r.attr_name() + "] > * > a[href=" + r.default_tab_hashes[o] + "]").parent())
				})
			},
			toggle_active_tab: function (e, t) {
				var n = this.S,
					i = e.closest("[" + this.attr_name() + "]"),
					o = e.find("a"),
					r = "#" + e.children("a").first().attr("href").split("#")[1],
					a = n(r),
					s = e.siblings(),
					l = i.data(this.attr_name(!0) + "-init");
				n(this).data(this.data_attr("tab-content")) && (a = n(r = "#" + n(this).data(this.data_attr("tab-content")).split("#")[1])), l.deep_linking && (l.scroll_to_content ? (c.location.hash = t || r, t == f || t == r ? e.parent()[0].scrollIntoView() : n(r)[0].scrollIntoView()) : c.location.hash = t != f ? "fndtn-" + t.replace("#", "") : "fndtn-" + r.replace("#", "")), e.addClass(l.active_class).triggerHandler("opened"), o.attr({
					"aria-selected": "true",
					tabindex: 0
				}), s.removeClass(l.active_class), s.find("a").attr({
					"aria-selected": "false",
					tabindex: -1
				}), a.siblings().removeClass(l.active_class).attr({
					"aria-hidden": "true",
					tabindex: -1
				}).end().addClass(l.active_class).attr("aria-hidden", "false").find(":first-child").attr("tabindex", 0), l.callback(e), a.children().attr("tab-index", 0), a.triggerHandler("toggled", [e]), i.triggerHandler("toggled", [a]), o.on("keydown", function (e) {
					var t, n = u(this),
						i = u(this).parents("li").prev().children('[role="tab"]'),
						o = u(this).parents("li").next().children('[role="tab"]');
					switch (e.keyCode) {
						case 37:
							t = i;
							break;
						case 39:
							t = o;
							break;
						default:
							t = !1
					}
					t.length && (n.attr({
						tabindex: "-1",
						"aria-selected": null
					}), t.attr({
						tabindex: "0",
						"aria-selected": !0
					}).focus()), u('[role="tabpanel"]').attr("aria-hidden", "true"), u("#" + u(d.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
				})
			},
			data_attr: function (e) {
				return 0 < this.namespace.length ? this.namespace + "-" + e : e
			},
			off: function () {},
			reflow: function () {}
		}
	}(jQuery, window, window.document),
	function (e, t) {
		"function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e)
	}("undefined" != typeof global ? global : this.window || this.global, function (b) {
		"use strict";
		var n, t, a, x, i = {},
			o = "querySelector" in document && "addEventListener" in b,
			w = {
				selector: "[data-scroll]",
				selectorHeader: "[data-scroll-header]",
				speed: 500,
				easing: "easeInOutCubic",
				offset: 0,
				updateURL: !0,
				callback: function () {}
			},
			S = function () {
				var n = {},
					i = !1,
					e = 0,
					t = arguments.length;
				"[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (i = arguments[0], e++);
				for (var o = function (e) {
						for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (i && "[object Object]" === Object.prototype.toString.call(e[t]) ? n[t] = S(!0, n[t], e[t]) : n[t] = e[t])
					}; e < t; e++) {
					o(arguments[e])
				}
				return n
			},
			k = function (e) {
				return null === e ? 0 : (t = e, Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight) + e.offsetTop);
				var t
			};
		i.animateScroll = function (s, l, e) {
			var t, n = (t = s ? s.getAttribute("data-options") : null) && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(t) : {},
				u = S(u || w, e || {}, n),
				c = "#" === (l = "#" + function (e) {
					for (var t, n = String(e), i = n.length, o = -1, r = "", a = n.charCodeAt(0); ++o < i;) {
						if (0 === (t = n.charCodeAt(o))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
						r += 1 <= t && t <= 31 || 127 == t || 0 === o && 48 <= t && t <= 57 || 1 === o && 48 <= t && t <= 57 && 45 === a ? "\\" + t.toString(16) + " " : 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(o) : "\\" + n.charAt(o)
					}
					return r
				}(l.substr(1))) ? b.document.documentElement : b.document.querySelector(l),
				d = b.pageYOffset;
			a || (a = b.document.querySelector(u.selectorHeader)), x || (x = k(a));
			var f, h, p, i, o, v = function (e, t, n) {
					var i = 0;
					if (e.offsetParent)
						for (; i += e.offsetTop, e = e.offsetParent;);
					return 0 <= (i = i - t - n) ? i : 0
				}(c, x, parseInt(u.offset, 10)),
				m = v - d,
				g = Math.max(b.document.body.scrollHeight, b.document.documentElement.scrollHeight, b.document.body.offsetHeight, b.document.documentElement.offsetHeight, b.document.body.clientHeight, b.document.documentElement.clientHeight),
				y = 0;
			i = l, o = u.updateURL, b.history.pushState && (o || "true" === o) && "file:" !== b.location.protocol && b.history.pushState(null, null, [b.location.protocol, "//", b.location.host, b.location.pathname, b.location.search, i].join(""));
			var r = function () {
				var e, t, n, i, o, r, a;
				h = 1 < (h = (y += 16) / parseInt(u.speed, 10)) ? 1 : h, p = d + m * (o = u.easing, r = h, "easeInQuad" === o && (a = r * r), "easeOutQuad" === o && (a = r * (2 - r)), "easeInOutQuad" === o && (a = r < .5 ? 2 * r * r : (4 - 2 * r) * r - 1), "easeInCubic" === o && (a = r * r * r), "easeOutCubic" === o && (a = --r * r * r + 1), "easeInOutCubic" === o && (a = r < .5 ? 4 * r * r * r : (r - 1) * (2 * r - 2) * (2 * r - 2) + 1), "easeInQuart" === o && (a = r * r * r * r), "easeOutQuart" === o && (a = 1 - --r * r * r * r), "easeInOutQuart" === o && (a = r < .5 ? 8 * r * r * r * r : 1 - 8 * --r * r * r * r), "easeInQuint" === o && (a = r * r * r * r * r), "easeOutQuint" === o && (a = 1 + --r * r * r * r * r), "easeInOutQuint" === o && (a = r < .5 ? 16 * r * r * r * r * r : 1 + 16 * --r * r * r * r * r), a || r), b.scrollTo(0, Math.floor(p)), e = p, t = v, n = f, i = b.pageYOffset, (e == t || i == t || b.innerHeight + i >= g) && (clearInterval(n), c.focus(), u.callback(s, l))
			};
			0 === b.pageYOffset && b.scrollTo(0, 0), f = setInterval(r, 16)
		};
		var r = function (e) {
				var t = function (e, t) {
					var n, i, o = t.charAt(0),
						r = "classList" in document.documentElement;
					for ("[" === o && 1 < (n = (t = t.substr(1, t.length - 2)).split("=")).length && (i = !0, n[1] = n[1].replace(/"/g, "").replace(/'/g, "")); e && e !== document; e = e.parentNode) {
						if ("." === o)
							if (r) {
								if (e.classList.contains(t.substr(1))) return e
							} else if (new RegExp("(^|\\s)" + t.substr(1) + "(\\s|$)").test(e.className)) return e;
						if ("#" === o && e.id === t.substr(1)) return e;
						if ("[" === o && e.hasAttribute(n[0])) {
							if (!i) return e;
							if (e.getAttribute(n[0]) === n[1]) return e
						}
						if (e.tagName.toLowerCase() === t) return e
					}
					return null
				}(e.target, n.selector);
				t && "a" === t.tagName.toLowerCase() && (e.preventDefault(), i.animateScroll(t, t.hash, n))
			},
			s = function (e) {
				t || (t = setTimeout(function () {
					t = null, x = k(a)
				}, 66))
			};
		return i.destroy = function () {
			n && (b.document.removeEventListener("click", r, !1), b.removeEventListener("resize", s, !1), x = a = t = n = null)
		}, i.init = function (e) {
			o && (i.destroy(), n = S(w, e || {}), a = b.document.querySelector(n.selectorHeader), x = k(a), b.document.addEventListener("click", r, !1), a && b.addEventListener("resize", s, !1))
		}, i
	}),
	function (b, x, w, e) {
		"use strict";
		if (!x.history.pushState) return b.fn.smoothState = function () {
			return this
		}, b.fn.smoothState.options = {};
		if (!b.fn.smoothState) {
			var S = b("html, body"),
				k = x.console,
				C = {
					isExternal: function (e) {
						var t = e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
						return "string" == typeof t[1] && 0 < t[1].length && t[1].toLowerCase() !== x.location.protocol || "string" == typeof t[2] && 0 < t[2].length && t[2].replace(new RegExp(":(" + {
							"http:": 80,
							"https:": 443
						} [x.location.protocol] + ")?$"), "") !== x.location.host
					},
					stripHash: function (e) {
						return e.replace(/#.*/, "")
					},
					isHash: function (e, t) {
						t = t || x.location.href;
						var n = -1 < e.indexOf("#"),
							i = C.stripHash(e) === C.stripHash(t);
						return n && i
					},
					translate: function (e) {
						var t = {
							dataType: "html",
							type: "GET"
						};
						return "string" == typeof e ? b.extend({}, t, {
							url: e
						}) : b.extend({}, t, e)
					},
					shouldLoadAnchor: function (e, t, n) {
						var i = e.prop("href");
						return !(C.isExternal(i) || C.isHash(i) || e.is(t) || e.prop("target") || void 0 !== typeof n && "" !== n && -1 === e.prop("href").search(n))
					},
					clearIfOverCapacity: function (e, t) {
						return Object.keys || (Object.keys = function (e) {
							var t, n = [];
							for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
							return n
						}), Object.keys(e).length > t && (e = {}), e
					},
					storePageIn: function (e, t, n, i) {
						var o = b("<html></html>").append(b(n));
						return e[t] = {
							status: "loaded",
							title: o.find("title").first().text(),
							html: o.find("#" + i),
							doc: n
						}, e
					},
					triggerAllAnimationEndEvent: function (t, e) {
						e = " " + e || "";
						var n = 0;
						t.on("animationstart webkitAnimationStart oanimationstart MSAnimationStart", function (e) {
							b(e.delegateTarget).is(t) && (e.stopPropagation(), n++)
						}), t.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function (e) {
							b(e.delegateTarget).is(t) && (e.stopPropagation(), 0 == --n && t.trigger("allanimationend"))
						}), t.on("allanimationend" + e, function () {
							n = 0, C.redraw(t)
						})
					},
					redraw: function (e) {
						e.height()
					}
				},
				n = function (e, s) {
					var t, l = b(e),
						u = l.prop("id"),
						i = null,
						o = !1,
						c = {},
						n = x.location.href,
						d = function (e) {
							(e = e || !1) && c.hasOwnProperty(e) ? delete c[e] : c = {}, l.data("smoothState").cache = c
						},
						f = function (e, t) {
							t = t || b.noop;
							var n = C.translate(e);
							if (!(c = C.clearIfOverCapacity(c, s.cacheLength)).hasOwnProperty(n.url) || void 0 !== n.data) {
								c[n.url] = {
									status: "fetching"
								};
								var i = b.ajax(n);
								i.done(function (e) {
									C.storePageIn(c, n.url, e, u), l.data("smoothState").cache = c
								}), i.fail(function () {
									void 0 === c[n.url] && (c[n.url] = {}), c[n.url].status = "error"
								}), t && i.always(t)
							}
						},
						h = function (e) {
							var t = "#" + u,
								n = c[e] ? b(c[e].html.html()) : null;
							n.length ? (w.title = c[e].title, l.data("smoothState").href = e, s.loadingClass && S.removeClass(s.loadingClass), s.onReady.render(l, n), l.one("ss.onReadyEnd", function () {
								o = !1, s.onAfter(l, n), s.scroll && function () {
									if (i) {
										var e = b(i, l);
										if (e.length) {
											var t = e.offset().top;
											S.scrollTop(t)
										}
										i = null
									}
								}()
							}), x.setTimeout(function () {
								l.trigger("ss.onReadyEnd")
							}, s.onReady.duration)) : !n && s.debug && k ? k.warn("No element with an id of " + t + " in response from " + e + " in " + c) : x.location = e
						},
						r = function (e, t, n) {
							var i = C.translate(e);
							void 0 === t && (t = !0), void 0 === n && (n = !0);
							var o = !1,
								r = !1,
								a = {
									loaded: function () {
										var e = o ? "ss.onProgressEnd" : "ss.onStartEnd";
										r && o ? r && h(i.url) : l.one(e, function () {
											h(i.url), n || d(i.url)
										}), t && x.history.pushState({
											id: u
										}, c[i.url].title, i.url), r && !n && d(i.url)
									},
									fetching: function () {
										o || (o = !0, l.one("ss.onStartEnd", function () {
											s.loadingClass && S.addClass(s.loadingClass), s.onProgress.render(l), x.setTimeout(function () {
												l.trigger("ss.onProgressEnd"), r = !0
											}, s.onProgress.duration)
										})), x.setTimeout(function () {
											c.hasOwnProperty(i.url) && a[c[i.url].status]()
										}, 10)
									},
									error: function () {
										s.debug && k ? k.log("There was an error loading: " + i.url) : x.location = i.url
									}
								};
							c.hasOwnProperty(i.url) || f(i), s.onStart.render(l), x.setTimeout(function () {
								s.scroll && S.scrollTop(0), l.trigger("ss.onStartEnd")
							}, s.onStart.duration), a[c[i.url].status]()
						},
						a = function (e) {
							var t, n = b(e.currentTarget);
							C.shouldLoadAnchor(n, s.blacklist, s.hrefRegex) && !o && (e.stopPropagation(), t = C.translate(n.prop("href")), t = s.alterRequest(t), f(t))
						},
						p = function (e) {
							var t = b(e.currentTarget);
							if (!e.metaKey && !e.ctrlKey && C.shouldLoadAnchor(t, s.blacklist, s.hrefRegex) && (e.stopPropagation(), e.preventDefault(), !g())) {
								y();
								var n = C.translate(t.prop("href"));
								o = !0, i = t.prop("hash"), n = s.alterRequest(n), s.onBefore(t, l), r(n)
							}
						},
						v = function (e) {
							var t = b(e.currentTarget);
							if (!t.is(s.blacklist) && (e.preventDefault(), e.stopPropagation(), !g())) {
								y();
								var n = {
									url: t.prop("action"),
									data: t.serialize(),
									type: t.prop("method")
								};
								o = !0, "get" === (n = s.alterRequest(n)).type.toLowerCase() && (n.url = n.url + "?" + n.data), s.onBefore(t, l), r(n, void 0, s.allowFormCaching)
							}
						},
						m = 0,
						g = function () {
							var e = null === s.repeatDelay,
								t = parseInt(Date.now()) > m;
							return !(e || t)
						},
						y = function () {
							m = parseInt(Date.now()) + parseInt(s.repeatDelay)
						};
					return s = b.extend({}, b.fn.smoothState.options, s), null === x.history.state && x.history.replaceState({
						id: u
					}, w.title, n), C.storePageIn(c, n, w.documentElement.outerHTML, u), C.triggerAllAnimationEndEvent(l, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), t = l, s.anchors && (t.on("click", s.anchors, p), s.prefetch && t.on(s.prefetchOn, s.anchors, a)), s.forms && t.on("submit", s.forms, v), {
						href: n,
						cache: c,
						clear: d,
						load: r,
						fetch: f,
						restartCSSAnimations: function () {
							var e = l.prop("class");
							l.removeClass(e), C.redraw(l), l.addClass(e)
						}
					}
				};
			x.onpopstate = function (e) {
				if (null !== e.state) {
					var t = x.location.href,
						n = b("#" + e.state.id).data("smoothState");
					n.href === t || C.isHash(t, n.href) || n.load(t, !1)
				}
			}, b.smoothStateUtility = C, b.fn.smoothState = function (t) {
				return this.each(function () {
					var e = this.tagName.toLowerCase();
					this.id && "body" !== e && "html" !== e && !b.data(this, "smoothState") ? b.data(this, "smoothState", new n(this, t)) : !this.id && k ? k.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== e && "html" !== e || !k || k.warn("The smoothstate container cannot be the " + this.tagName + " tag")
				})
			}, b.fn.smoothState.options = {
				debug: !1,
				anchors: "a",
				hrefRegex: "",
				forms: "form",
				allowFormCaching: !1,
				repeatDelay: 500,
				blacklist: ".no-smoothState",
				prefetch: !1,
				prefetchOn: "mouseover touchstart",
				cacheLength: 0,
				loadingClass: "is-loading",
				scroll: !0,
				alterRequest: function (e) {
					return e
				},
				onBefore: function (e, t) {},
				onStart: {
					duration: 0,
					render: function (e) {}
				},
				onProgress: {
					duration: 0,
					render: function (e) {}
				},
				onReady: {
					duration: 0,
					render: function (e, t) {
						e.html(t)
					}
				},
				onAfter: function (e, t) {}
			}
		}
	}(jQuery, window, document),
	function (r, n) {
		"use strict";

		function o(e) {
			var t = r("<div />").html(e.cache[e.href].doc).find('[data-drupal-selector="drupal-settings-json"]');
			null !== t && (window.drupalSettings = JSON.parse(t.text())), n.attachBehaviors(document, window.drupalSettings)
		}
		n.behaviors.smoothstate = {
			attach: function (e, t) {
				r("#page-wrapper").smoothState({
					scroll: !1,
					prefetch: !0,
					prefetchOn: "mouseover",
					blacklist: ".no-smoothState, a[download]",
					forms: null,
					onBefore: function (e, t) {
						var n = r("#page-wrapper").data("smoothState");
						n.$trigger = e, n.internal = !0, t.addClass("smoothing"), r(window).trigger("smoothStateStarted", [n])
					},
					onReady: {
						duration: 0,
						render: function (e, t, n) {
							var i = r("#page-wrapper").data("smoothState");
							switch (void 0 !== i.$trigger && null !== i.$trigger ? i.$trigger.attr("data-smoothanimation") : null) {
								case "slideUp":
									var o = e.clone().insertBefore(e);
									e.html(t), void 0 !== Fullbundle && Fullbundle.screenSize(), o.css({
										height: "auto",
										position: "relative",
										"z-index": 50
									}).find(".region-footer").css({
										position: "relative"
									}), e.css({
										position: "relative",
										"z-index": 100
									}).animate({
										"margin-top": -r(window).height()
									}, 1e3, "easeInOutCubic", function () {
										o.remove(), r(this).css("margin-top", "").removeClass("smoothing").trigger("smoothStateAnimationFinished", [i]), window.scrollTo(0, 0)
									});
									break;
								default:
									e.html(t).removeClass("smoothing").trigger("smoothStateAnimationFinished", [i]), window.scrollTo(0, 0)
							}
							i.$trigger = null
						}
					},
					onAfter: function (e, t) {
						window.ga && ga("send", "pageview", window.location.pathname);
						var n = r("#page-wrapper").data("smoothState");
						r(window).trigger("smoothStateCompleted", [n])
					}
				}), delete n.behaviors.smoothstate
			}
		}, r(document).on("smoothStateAnimationFinished", "#page-wrapper", function (e, i) {
			void 0 === i.cache[i.href] ? (i.fetch(i.href), r(document).ajaxComplete(function (e, t, n) {
				n.url === i.href && o(i)
			})) : o(i)
		})
	}(jQuery, Drupal),
	function (e, t) {
		"function" == typeof define && define.amd ? define([], function () {
			return e.svg4everybody = t()
		}) : "object" == typeof exports ? module.exports = t() : e.svg4everybody = t()
	}(this, function () {
		function p(e, t) {
			if (t) {
				var n = document.createDocumentFragment(),
					i = !e.getAttribute("viewBox") && t.getAttribute("viewBox");
				i && e.setAttribute("viewBox", i);
				for (var o = t.cloneNode(!0); o.childNodes.length;) n.appendChild(o.firstChild);
				e.appendChild(n)
			}
		}

		function v(i) {
			i.onreadystatechange = function () {
				if (4 === i.readyState) {
					var n = i._cachedDocument;
					n || ((n = i._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = i.responseText, i._cachedTarget = {}), i._embeds.splice(0).map(function (e) {
						var t = i._cachedTarget[e.id];
						t || (t = i._cachedTarget[e.id] = n.getElementById(e.id)), p(e.svg, t)
					})
				}
			}, i.onreadystatechange()
		}
		return function (e) {
			var u, c = Object(e);
			u = "polyfill" in c ? c.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537;
			var d = {},
				f = window.requestAnimationFrame || setTimeout,
				h = document.getElementsByTagName("use");
			u && function e() {
				for (var t = 0; t < h.length;) {
					var n = h[t],
						i = n.parentNode;
					if (i && /svg/i.test(i.nodeName)) {
						var o = n.getAttribute("xlink:href");
						if (u && (!c.validate || c.validate(o, i, n))) {
							i.removeChild(n);
							var r = o.split("#"),
								a = r.shift(),
								s = r.join("#");
							if (a.length) {
								var l = d[a];
								l || ((l = d[a] = new XMLHttpRequest).open("GET", a), l.send(), l._embeds = []), l._embeds.push({
									svg: i,
									id: s
								}), v(l)
							} else p(i, document.getElementById(s))
						}
					} else ++t
				}
				f(e, 67)
			}()
		}
	}),
	function r(a, s, l) {
		function u(n, e) {
			if (!s[n]) {
				if (!a[n]) {
					var t = "function" == typeof require && require;
					if (!e && t) return t(n, !0);
					if (c) return c(n, !0);
					var i = new Error("Cannot find module '" + n + "'");
					throw i.code = "MODULE_NOT_FOUND", i
				}
				var o = s[n] = {
					exports: {}
				};
				a[n][0].call(o.exports, function (e) {
					var t = a[n][1][e];
					return u(t || e)
				}, o, o.exports, r, a, s, l)
			}
			return s[n].exports
		}
		for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) u(l[e]);
		return u
	}({
		1: [function (e, t, n) {
			t.exports = function (e) {
				var t = 2.5949095;
				return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
			}
		}, {}],
		2: [function (e, t, n) {
			t.exports = function (e) {
				return e * e * (2.70158 * e - 1.70158)
			}
		}, {}],
		3: [function (e, t, n) {
			t.exports = function (e) {
				return --e * e * (2.70158 * e + 1.70158) + 1
			}
		}, {}],
		4: [function (e, t, n) {
			var i = e("./bounce-out");
			t.exports = function (e) {
				return e < .5 ? .5 * (1 - i(1 - 2 * e)) : .5 * i(2 * e - 1) + .5
			}
		}, {
			"./bounce-out": 6
		}],
		5: [function (e, t, n) {
			var i = e("./bounce-out");
			t.exports = function (e) {
				return 1 - i(1 - e)
			}
		}, {
			"./bounce-out": 6
		}],
		6: [function (e, t, n) {
			t.exports = function (e) {
				var t = e * e;
				return e < 4 / 11 ? 7.5625 * t : e < 8 / 11 ? 9.075 * t - 9.9 * e + 3.4 : e < .9 ? 4356 / 361 * t - 35442 / 1805 * e + 16061 / 1805 : 10.8 * e * e - 20.52 * e + 10.72
			}
		}, {}],
		7: [function (e, t, n) {
			t.exports = function (e) {
				return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
			}
		}, {}],
		8: [function (e, t, n) {
			t.exports = function (e) {
				return 1 - Math.sqrt(1 - e * e)
			}
		}, {}],
		9: [function (e, t, n) {
			t.exports = function (e) {
				return Math.sqrt(1 - --e * e)
			}
		}, {}],
		10: [function (e, t, n) {
			t.exports = function (e) {
				return e < .5 ? 4 * e * e * e : .5 * Math.pow(2 * e - 2, 3) + 1
			}
		}, {}],
		11: [function (e, t, n) {
			t.exports = function (e) {
				return e * e * e
			}
		}, {}],
		12: [function (e, t, n) {
			t.exports = function (e) {
				var t = e - 1;
				return t * t * t + 1
			}
		}, {}],
		13: [function (e, t, n) {
			t.exports = function (e) {
				return e < .5 ? .5 * Math.sin(13 * Math.PI / 2 * 2 * e) * Math.pow(2, 10 * (2 * e - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * e - 1 + 1)) * Math.pow(2, -10 * (2 * e - 1)) + 1
			}
		}, {}],
		14: [function (e, t, n) {
			t.exports = function (e) {
				return Math.sin(13 * e * Math.PI / 2) * Math.pow(2, 10 * (e - 1))
			}
		}, {}],
		15: [function (e, t, n) {
			t.exports = function (e) {
				return Math.sin(-13 * (e + 1) * Math.PI / 2) * Math.pow(2, -10 * e) + 1
			}
		}, {}],
		16: [function (e, t, n) {
			t.exports = function (e) {
				return 0 === e || 1 === e ? e : e < .5 ? .5 * Math.pow(2, 20 * e - 10) : -.5 * Math.pow(2, 10 - 20 * e) + 1
			}
		}, {}],
		17: [function (e, t, n) {
			t.exports = function (e) {
				return 0 === e ? e : Math.pow(2, 10 * (e - 1))
			}
		}, {}],
		18: [function (e, t, n) {
			t.exports = function (e) {
				return 1 === e ? e : 1 - Math.pow(2, -10 * e)
			}
		}, {}],
		19: [function (e, t, n) {
			t.exports = {
				backInOut: e("./back-in-out"),
				backIn: e("./back-in"),
				backOut: e("./back-out"),
				bounceInOut: e("./bounce-in-out"),
				bounceIn: e("./bounce-in"),
				bounceOut: e("./bounce-out"),
				circInOut: e("./circ-in-out"),
				circIn: e("./circ-in"),
				circOut: e("./circ-out"),
				cubicInOut: e("./cubic-in-out"),
				cubicIn: e("./cubic-in"),
				cubicOut: e("./cubic-out"),
				elasticInOut: e("./elastic-in-out"),
				elasticIn: e("./elastic-in"),
				elasticOut: e("./elastic-out"),
				expoInOut: e("./expo-in-out"),
				expoIn: e("./expo-in"),
				expoOut: e("./expo-out"),
				linear: e("./linear"),
				quadInOut: e("./quad-in-out"),
				quadIn: e("./quad-in"),
				quadOut: e("./quad-out"),
				quartInOut: e("./quart-in-out"),
				quartIn: e("./quart-in"),
				quartOut: e("./quart-out"),
				quintInOut: e("./quint-in-out"),
				quintIn: e("./quint-in"),
				quintOut: e("./quint-out"),
				sineInOut: e("./sine-in-out"),
				sineIn: e("./sine-in"),
				sineOut: e("./sine-out")
			}
		}, {
			"./back-in": 2,
			"./back-in-out": 1,
			"./back-out": 3,
			"./bounce-in": 5,
			"./bounce-in-out": 4,
			"./bounce-out": 6,
			"./circ-in": 8,
			"./circ-in-out": 7,
			"./circ-out": 9,
			"./cubic-in": 11,
			"./cubic-in-out": 10,
			"./cubic-out": 12,
			"./elastic-in": 14,
			"./elastic-in-out": 13,
			"./elastic-out": 15,
			"./expo-in": 17,
			"./expo-in-out": 16,
			"./expo-out": 18,
			"./linear": 20,
			"./quad-in": 22,
			"./quad-in-out": 21,
			"./quad-out": 23,
			"./quart-in": 25,
			"./quart-in-out": 24,
			"./quart-out": 26,
			"./quint-in": 28,
			"./quint-in-out": 27,
			"./quint-out": 29,
			"./sine-in": 31,
			"./sine-in-out": 30,
			"./sine-out": 32
		}],
		20: [function (e, t, n) {
			t.exports = function (e) {
				return e
			}
		}, {}],
		21: [function (e, t, n) {
			t.exports = function (e) {
				return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
			}
		}, {}],
		22: [function (e, t, n) {
			t.exports = function (e) {
				return e * e
			}
		}, {}],
		23: [function (e, t, n) {
			t.exports = function (e) {
				return -e * (e - 2)
			}
		}, {}],
		24: [function (e, t, n) {
			t.exports = function (e) {
				return e < .5 ? 8 * Math.pow(e, 4) : -8 * Math.pow(e - 1, 4) + 1
			}
		}, {}],
		25: [function (e, t, n) {
			t.exports = function (e) {
				return Math.pow(e, 4)
			}
		}, {}],
		26: [function (e, t, n) {
			t.exports = function (e) {
				return Math.pow(e - 1, 3) * (1 - e) + 1
			}
		}, {}],
		27: [function (e, t, n) {
			t.exports = function (e) {
				return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
			}
		}, {}],
		28: [function (e, t, n) {
			t.exports = function (e) {
				return e * e * e * e * e
			}
		}, {}],
		29: [function (e, t, n) {
			t.exports = function (e) {
				return --e * e * e * e * e + 1
			}
		}, {}],
		30: [function (e, t, n) {
			t.exports = function (e) {
				return -.5 * (Math.cos(Math.PI * e) - 1)
			}
		}, {}],
		31: [function (e, t, n) {
			t.exports = function (e) {
				var t = Math.cos(e * Math.PI * .5);
				return Math.abs(t) < 1e-14 ? 1 : 1 - t
			}
		}, {}],
		32: [function (e, t, n) {
			t.exports = function (e) {
				return Math.sin(e * Math.PI / 2)
			}
		}, {}],
		33: [function (e, n, i) {
			! function () {
				var e = {},
					y = {};
				! function () {
					var e = 1;
					y.create = function (e) {
						var t = {
								id: O.nextId(),
								type: "body",
								label: "Body",
								angle: 0,
								vertices: M.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
								position: {
									x: 0,
									y: 0
								},
								force: {
									x: 0,
									y: 0
								},
								torque: 0,
								positionImpulse: {
									x: 0,
									y: 0
								},
								constraintImpulse: {
									x: 0,
									y: 0,
									angle: 0
								},
								speed: 0,
								angularSpeed: 0,
								velocity: {
									x: 0,
									y: 0
								},
								angularVelocity: 0,
								isStatic: !1,
								isSleeping: !1,
								motion: 0,
								sleepThreshold: 60,
								density: .001,
								restitution: 0,
								friction: .1,
								frictionAir: .01,
								groupId: 0,
								slop: .05,
								timeScale: 1,
								render: {
									visible: !0,
									sprite: {
										xScale: 1,
										yScale: 1
									},
									lineWidth: 1.5
								}
							},
							n = O.extend(t, e);
						return i(n), n
					}, y.nextGroupId = function () {
						return e++
					};
					var i = function (e) {
						e.axes = e.axes || l.fromVertices(e.vertices), e.area = M.area(e.vertices), e.bounds = E.create(e.vertices), e.mass = e.mass || e.density * e.area, e.inverseMass = 1 / e.mass, e.inertia = e.inertia || M.inertia(e.vertices, e.mass), e.inverseInertia = 1 / e.inertia, e.positionPrev = e.positionPrev || {
							x: e.position.x,
							y: e.position.y
						}, e.anglePrev = e.anglePrev || e.angle, e.render.fillStyle = e.render.fillStyle || (e.isStatic ? "#eeeeee" : O.choose(["#556270", "#4ECDC4", "#C7F464", "#FF6B6B", "#C44D58"])), e.render.strokeStyle = e.render.strokeStyle || O.shadeColor(e.render.fillStyle, -20), M.create(e.vertices, e);
						var t = M.centre(e.vertices);
						M.translate(e.vertices, e.position), M.translate(e.vertices, t, -1), M.rotate(e.vertices, e.angle, e.position), l.rotate(e.axes, e.angle), E.update(e.bounds, e.vertices, e.velocity), y.setStatic(e, e.isStatic), T.set(e, e.isSleeping)
					};
					y.setStatic = function (e, t) {
						(e.isStatic = t) && (e.restitution = 0, e.friction = 1, e.mass = e.inertia = e.density = 1 / 0, e.inverseMass = e.inverseInertia = 0, e.render.lineWidth = 1, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.anglePrev = e.angle, e.angularVelocity = 0, e.speed = 0, e.angularSpeed = 0, e.motion = 0)
					}, y.resetForcesAll = function (e) {
						for (var t = 0; t < e.length; t++) {
							var n = e[t];
							n.force.x = 0, n.force.y = 0, n.torque = 0
						}
					}, y.applyGravityAll = function (e, t) {
						for (var n = 0; n < e.length; n++) {
							var i = e[n];
							i.isStatic || i.isSleeping || (i.force.y += i.mass * t.y * .001, i.force.x += i.mass * t.x * .001)
						}
					}, y.updateAll = function (e, t, n, i, o) {
						for (var r = 0; r < e.length; r++) {
							var a = e[r];
							a.isStatic || a.isSleeping || a.bounds.max.x < o.min.x || a.bounds.min.x > o.max.x || a.bounds.max.y < o.min.y || a.bounds.min.y > o.max.y || y.update(a, t, n, i)
						}
					}, y.update = function (e, t, n, i) {
						var o = Math.pow(t * n * e.timeScale, 2),
							r = 1 - e.frictionAir * n * e.timeScale,
							a = e.position.x - e.positionPrev.x,
							s = e.position.y - e.positionPrev.y;
						e.velocity.x = a * r * i + e.force.x / e.mass * o, e.velocity.y = s * r * i + e.force.y / e.mass * o, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.position.x += e.velocity.x, e.position.y += e.velocity.y, e.angularVelocity = (e.angle - e.anglePrev) * r * i + e.torque / e.inertia * o, e.anglePrev = e.angle, e.angle += e.angularVelocity, e.speed = q.magnitude(e.velocity), e.angularSpeed = Math.abs(e.angularVelocity), M.translate(e.vertices, e.velocity), 0 !== e.angularVelocity && (M.rotate(e.vertices, e.angularVelocity, e.position), l.rotate(e.axes, e.angularVelocity)), E.update(e.bounds, e.vertices, e.velocity)
					}, y.applyForce = function (e, t, n) {
						e.force.x += n.x, e.force.y += n.y;
						var i = t.x - e.position.x,
							o = t.y - e.position.y;
						e.torque += (i * n.y - o * n.x) * e.inverseInertia
					}, y.translate = function (e, t) {
						e.positionPrev.x += t.x, e.positionPrev.y += t.y, e.position.x += t.x, e.position.y += t.y, M.translate(e.vertices, t), E.update(e.bounds, e.vertices, e.velocity)
					}, y.rotate = function (e, t) {
						e.anglePrev += t, e.angle += t, M.rotate(e.vertices, t, e.position), l.rotate(e.axes, t), E.update(e.bounds, e.vertices, e.velocity)
					}, y.scale = function (e, t, n, i) {
						M.scale(e.vertices, t, n, i), e.axes = l.fromVertices(e.vertices), e.area = M.area(e.vertices), e.mass = e.density * e.area, e.inverseMass = 1 / e.mass, M.translate(e.vertices, {
							x: -e.position.x,
							y: -e.position.y
						}), e.inertia = M.inertia(e.vertices, e.mass), e.inverseInertia = 1 / e.inertia, M.translate(e.vertices, {
							x: e.position.x,
							y: e.position.y
						}), E.update(e.bounds, e.vertices, e.velocity)
					}
				}();
				var w = {
						create: function (e) {
							return O.extend({
								id: O.nextId(),
								type: "composite",
								parent: null,
								isModified: !1,
								bodies: [],
								constraints: [],
								composites: [],
								label: "Composite"
							}, e)
						},
						setModified: function (e, t, n, i) {
							if (e.isModified = t, n && e.parent && w.setModified(e.parent, t, n, i), i)
								for (var o = 0; o < e.composites.length; o++) {
									var r = e.composites[o];
									w.setModified(r, t, n, i)
								}
						},
						add: function (e, t) {
							for (var n = [].concat(t), i = 0; i < n.length; i++) {
								var o = n[i];
								switch (o.type) {
									case "body":
										w.addBody(e, o);
										break;
									case "constraint":
										w.addConstraint(e, o);
										break;
									case "composite":
										w.addComposite(e, o);
										break;
									case "mouseConstraint":
										w.addConstraint(e, o.constraint)
								}
							}
							return e
						},
						remove: function (e, t, n) {
							for (var i = [].concat(t), o = 0; o < i.length; o++) {
								var r = i[o];
								switch (r.type) {
									case "body":
										w.removeBody(e, r, n);
										break;
									case "constraint":
										w.removeConstraint(e, r, n);
										break;
									case "composite":
										w.removeComposite(e, r, n);
										break;
									case "mouseConstraint":
										w.removeConstraint(e, r.constraint)
								}
							}
							return e
						},
						addComposite: function (e, t) {
							return e.composites.push(t), t.parent = e, w.setModified(e, !0, !0, !1), e
						},
						removeComposite: function (e, t, n) {
							var i = e.composites.indexOf(t);
							if (-1 !== i && (w.removeCompositeAt(e, i), w.setModified(e, !0, !0, !1)), n)
								for (var o = 0; o < e.composites.length; o++) w.removeComposite(e.composites[o], t, !0);
							return e
						},
						removeCompositeAt: function (e, t) {
							return e.composites.splice(t, 1), w.setModified(e, !0, !0, !1), e
						},
						addBody: function (e, t) {
							return e.bodies.push(t), w.setModified(e, !0, !0, !1), e
						},
						removeBody: function (e, t, n) {
							var i = e.bodies.indexOf(t);
							if (-1 !== i && (w.removeBodyAt(e, i), w.setModified(e, !0, !0, !1)), n)
								for (var o = 0; o < e.composites.length; o++) w.removeBody(e.composites[o], t, !0);
							return e
						},
						removeBodyAt: function (e, t) {
							return e.bodies.splice(t, 1), w.setModified(e, !0, !0, !1), e
						},
						addConstraint: function (e, t) {
							return e.constraints.push(t), w.setModified(e, !0, !0, !1), e
						},
						removeConstraint: function (e, t, n) {
							var i = e.constraints.indexOf(t);
							if (-1 !== i && w.removeConstraintAt(e, i), n)
								for (var o = 0; o < e.composites.length; o++) w.removeConstraint(e.composites[o], t, !0);
							return e
						},
						removeConstraintAt: function (e, t) {
							return e.constraints.splice(t, 1), w.setModified(e, !0, !0, !1), e
						},
						clear: function (e, t, n) {
							if (n)
								for (var i = 0; i < e.composites.length; i++) w.clear(e.composites[i], t, !0);
							return t ? e.bodies = e.bodies.filter(function (e) {
								return e.isStatic
							}) : e.bodies.length = 0, e.constraints.length = 0, e.composites.length = 0, w.setModified(e, !0, !0, !1), e
						},
						allBodies: function (e) {
							for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++) t = t.concat(w.allBodies(e.composites[n]));
							return t
						},
						allConstraints: function (e) {
							for (var t = [].concat(e.constraints), n = 0; n < e.composites.length; n++) t = t.concat(w.allConstraints(e.composites[n]));
							return t
						},
						allComposites: function (e) {
							for (var t = [].concat(e.composites), n = 0; n < e.composites.length; n++) t = t.concat(w.allComposites(e.composites[n]));
							return t
						},
						get: function (e, t, n) {
							var i, o;
							switch (n) {
								case "body":
									i = w.allBodies(e);
									break;
								case "constraint":
									i = w.allConstraints(e);
									break;
								case "composite":
									i = w.allComposites(e).concat(e)
							}
							return i ? 0 === (o = i.filter(function (e) {
								return e.id.toString() === t.toString()
							})).length ? null : o[0] : null
						},
						move: function (e, t, n) {
							return w.remove(e, t), w.add(n, t), e
						},
						rebase: function (e) {
							for (var t = w.allBodies(e).concat(w.allConstraints(e)).concat(w.allComposites(e)), n = 0; n < t.length; n++) t[n].id = O.nextId();
							return w.setModified(e, !0, !0, !1), e
						}
					},
					o = {
						create: function (e) {
							var t = w.create();
							return O.extend(t, {
								label: "World",
								gravity: {
									x: 0,
									y: 1
								},
								bounds: {
									min: {
										x: 0,
										y: 0
									},
									max: {
										x: 800,
										y: 600
									}
								}
							}, e)
						}
					},
					c = {
						create: function (e) {
							return {
								id: c.id(e),
								vertex: e,
								normalImpulse: 0,
								tangentImpulse: 0
							}
						},
						id: function (e) {
							return e.body.id + "_" + e.index
						}
					},
					r = {
						collisions: function (e, t) {
							for (var n = [], i = t.metrics, o = t.pairs.table, r = 0; r < e.length; r++) {
								var a = e[r][0],
									s = e[r][1];
								if (!(a.groupId && s.groupId && a.groupId === s.groupId || (a.isStatic || a.isSleeping) && (s.isStatic || s.isSleeping)) && (i.midphaseTests += 1, E.overlaps(a.bounds, s.bounds))) {
									var l, u = o[h.id(a, s)];
									l = u && u.isActive ? u.collision : null;
									var c = b.collides(a, s, l);
									i.narrowphaseTests += 1, c.reused && (i.narrowReuseCount += 1), c.collided && (n.push(c), i.narrowDetections += 1)
								}
							}
							return n
						},
						bruteForce: function (e, t) {
							for (var n = [], i = t.metrics, o = t.pairs.table, r = 0; r < e.length; r++)
								for (var a = r + 1; a < e.length; a++) {
									var s = e[r],
										l = e[a];
									if (!(s.groupId && l.groupId && s.groupId === l.groupId || (s.isStatic || s.isSleeping) && (l.isStatic || l.isSleeping)) && (i.midphaseTests += 1, E.overlaps(s.bounds, l.bounds))) {
										var u, c = o[h.id(s, l)];
										u = c && c.isActive ? c.collision : null;
										var d = b.collides(s, l, u);
										i.narrowphaseTests += 1, d.reused && (i.narrowReuseCount += 1), d.collided && (n.push(d), i.narrowDetections += 1)
									}
								}
							return n
						}
					},
					v = {};
				! function () {
					v.create = function (e, t) {
						return {
							buckets: {},
							pairs: {},
							pairsList: [],
							bucketWidth: e || 48,
							bucketHeight: t || 48
						}
					}, v.update = function (e, t, n, i) {
						var o, r, a, s, l, u = n.world,
							c = e.buckets,
							d = n.metrics,
							f = !1;
						for (o = d.broadphaseTests = 0; o < t.length; o++) {
							var h = t[o];
							if ((!h.isSleeping || i) && !(h.bounds.max.x < 0 || h.bounds.min.x > u.bounds.width || h.bounds.max.y < 0 || h.bounds.min.y > u.bounds.height)) {
								var p = b(e, h);
								if (!h.region || p.id !== h.region.id || i) {
									d.broadphaseTests += 1, (!h.region || i) && (h.region = p);
									var v = y(p, h.region);
									for (r = v.startCol; r <= v.endCol; r++)
										for (a = v.startRow; a <= v.endRow; a++) {
											s = c[l = x(r, a)];
											var m = r >= p.startCol && r <= p.endCol && a >= p.startRow && a <= p.endRow,
												g = r >= h.region.startCol && r <= h.region.endCol && a >= h.region.startRow && a <= h.region.endRow;
											!m && g && g && s && k(e, s, h), (h.region === p || m && !g || i) && (s || (s = w(c, l)), S(e, s, h))
										}
									h.region = p, f = !0
								}
							}
						}
						f && (e.pairsList = C(e))
					}, v.clear = function (e) {
						e.buckets = {}, e.pairs = {}, e.pairsList = []
					};
					var y = function (e, t) {
							var n = Math.min(e.startCol, t.startCol),
								i = Math.max(e.endCol, t.endCol),
								o = Math.min(e.startRow, t.startRow),
								r = Math.max(e.endRow, t.endRow);
							return s(n, i, o, r)
						},
						b = function (e, t) {
							var n = t.bounds,
								i = Math.floor(n.min.x / e.bucketWidth),
								o = Math.floor(n.max.x / e.bucketWidth),
								r = Math.floor(n.min.y / e.bucketHeight),
								a = Math.floor(n.max.y / e.bucketHeight);
							return s(i, o, r, a)
						},
						s = function (e, t, n, i) {
							return {
								id: e + "," + t + "," + n + "," + i,
								startCol: e,
								endCol: t,
								startRow: n,
								endRow: i
							}
						},
						x = function (e, t) {
							return e + "," + t
						},
						w = function (e, t) {
							return e[t] = []
						},
						S = function (e, t, n) {
							for (var i = 0; i < t.length; i++) {
								var o = t[i];
								if (!(n.id === o.id || n.isStatic && o.isStatic)) {
									var r = h.id(n, o),
										a = e.pairs[r];
									a ? a[2] += 1 : e.pairs[r] = [n, o, 1]
								}
							}
							t.push(n)
						},
						k = function (e, t, n) {
							t.splice(t.indexOf(n), 1);
							for (var i = 0; i < t.length; i++) {
								var o = t[i],
									r = h.id(n, o),
									a = e.pairs[r];
								a && (a[2] -= 1)
							}
						},
						C = function (e) {
							var t, n, i = [];
							t = O.keys(e.pairs);
							for (var o = 0; o < t.length; o++) 0 < (n = e.pairs[t[o]])[2] ? i.push(n) : delete e.pairs[t[o]];
							return i
						}
				}();
				var h = {
						create: function (e, t) {
							var n = e.bodyA,
								i = e.bodyB,
								o = {
									id: h.id(n, i),
									bodyA: n,
									bodyB: i,
									contacts: {},
									activeContacts: [],
									separation: 0,
									isActive: !0,
									timeCreated: t,
									timeUpdated: t,
									inverseMass: n.inverseMass + i.inverseMass,
									friction: Math.min(n.friction, i.friction),
									restitution: Math.max(n.restitution, i.restitution),
									slop: Math.max(n.slop, i.slop)
								};
							return h.update(o, e, t), o
						},
						update: function (e, t, n) {
							var i = e.contacts,
								o = t.supports,
								r = e.activeContacts;
							if (e.collision = t, r.length = 0, t.collided) {
								for (var a = 0; a < o.length; a++) {
									var s = o[a],
										l = c.id(s),
										u = i[l];
									r.push(u || (i[l] = c.create(s)))
								}
								e.separation = t.depth, h.setActive(e, !0, n)
							} else !0 === e.isActive && h.setActive(e, !1, n)
						},
						setActive: function (e, t, n) {
							t ? (e.isActive = !0, e.timeUpdated = n) : (e.isActive = !1, e.activeContacts.length = 0)
						},
						id: function (e, t) {
							return e.id < t.id ? e.id + "_" + t.id : t.id + "_" + e.id
						}
					},
					m = {
						create: function (e) {
							return O.extend({
								table: {},
								list: [],
								collisionStart: [],
								collisionActive: [],
								collisionEnd: []
							}, e)
						},
						update: function (e, t, n) {
							var i, o, r, a, s = e.list,
								l = e.table,
								u = e.collisionStart,
								c = e.collisionEnd,
								d = e.collisionActive,
								f = [];
							for (u.length = 0, c.length = 0, a = d.length = 0; a < t.length; a++)(i = t[a]).collided && (o = h.id(i.bodyA, i.bodyB), f.push(o), (r = l[o]) ? (r.isActive ? d.push(r) : u.push(r), h.update(r, i, n)) : (r = h.create(i, n), l[o] = r, u.push(r), s.push(r)));
							for (a = 0; a < s.length; a++)(r = s[a]).isActive && -1 === f.indexOf(r.id) && (h.setActive(r, !1, n), c.push(r))
						},
						removeOld: function (e, t) {
							var n, i, o, r, a = e.list,
								s = e.table,
								l = [];
							for (r = 0; r < a.length; r++)(i = (n = a[r]).collision).bodyA.isSleeping || i.bodyB.isSleeping ? n.timeUpdated = t : 1e3 < t - n.timeUpdated && l.push(r);
							for (r = 0; r < l.length; r++) delete s[(n = a[o = l[r] - r]).id], a.splice(o, 1)
						},
						clear: function (e) {
							return e.table = {}, e.list.length = 0, e.collisionStart.length = 0, e.collisionActive.length = 0, e.collisionEnd.length = 0, e
						}
					},
					t = {
						ray: function (e, t, n, i) {
							i = i || Number.MIN_VALUE;
							for (var o = q.angle(t, n), r = q.magnitude(q.sub(t, n)), a = .5 * (n.x + t.x), s = .5 * (n.y + t.y), l = p.rectangle(a, s, r, i, {
									angle: o
								}), u = [], c = 0; c < e.length; c++) {
								var d = e[c];
								if (E.overlaps(d.bounds, l.bounds)) {
									var f = b.collides(d, l);
									f.collided && (f.body = f.bodyA = f.bodyB = d, u.push(f))
								}
							}
							return u
						},
						region: function (e, t, n) {
							for (var i = [], o = 0; o < e.length; o++) {
								var r = e[o],
									a = E.overlaps(r.bounds, t);
								(a && !n || !a && n) && i.push(r)
							}
							return i
						}
					},
					g = {
						solvePosition: function (e, t) {
							var n, i, o, r, a, s, l, u, c;
							for (n = 0; n < e.length; n++)(i = e[n]).isActive && (r = (o = i.collision).bodyA, a = o.bodyB, s = o.supports[0], l = o.supportCorrected, u = o.normal, c = q.sub(q.add(a.positionImpulse, s), q.add(r.positionImpulse, l)), i.separation = q.dot(u, c));
							for (n = 0; n < e.length; n++)(i = e[n]).isActive && (r = (o = i.collision).bodyA, a = o.bodyB, u = o.normal, positionImpulse = (.2 * i.separation - i.slop) * t, (r.isStatic || a.isStatic) && (positionImpulse *= 2), r.isStatic || r.isSleeping || (r.positionImpulse.x += u.x * positionImpulse, r.positionImpulse.y += u.y * positionImpulse), a.isStatic || a.isSleeping || (a.positionImpulse.x -= u.x * positionImpulse, a.positionImpulse.y -= u.y * positionImpulse))
						},
						postSolvePosition: function (e) {
							for (var t = 0; t < e.length; t++) {
								var n = e[t];
								(0 !== n.positionImpulse.x || 0 !== n.positionImpulse.y) && (n.position.x += n.positionImpulse.x, n.position.y += n.positionImpulse.y, n.positionPrev.x += n.positionImpulse.x, n.positionPrev.y += n.positionImpulse.y, M.translate(n.vertices, n.positionImpulse), E.update(n.bounds, n.vertices, n.velocity), n.positionImpulse.x *= .6, n.positionImpulse.y *= .6)
							}
						},
						preSolveVelocity: function (e) {
							var t, n, i, o, r, a, s, l, u, c, d, f, h, p, v = {};
							for (t = 0; t < e.length; t++)
								if ((i = e[t]).isActive)
									for (o = i.activeContacts, a = (r = i.collision).bodyA, s = r.bodyB, l = r.normal, u = r.tangent, n = 0; n < o.length; n++) d = (c = o[n]).vertex, f = c.normalImpulse, h = c.tangentImpulse, v.x = l.x * f + u.x * h, v.y = l.y * f + u.y * h, a.isStatic || a.isSleeping || (p = q.sub(d, a.position), a.positionPrev.x += v.x * a.inverseMass, a.positionPrev.y += v.y * a.inverseMass, a.anglePrev += q.cross(p, v) * a.inverseInertia), s.isStatic || s.isSleeping || (p = q.sub(d, s.position), s.positionPrev.x -= v.x * s.inverseMass, s.positionPrev.y -= v.y * s.inverseMass, s.anglePrev -= q.cross(p, v) * s.inverseInertia)
						},
						solveVelocity: function (e, t) {
							for (var n = {}, i = t * t, o = 0; o < e.length; o++) {
								var r = e[o];
								if (r.isActive) {
									var a = r.collision,
										s = a.bodyA,
										l = a.bodyB,
										u = a.normal,
										c = a.tangent,
										d = r.activeContacts,
										f = 1 / d.length;
									s.velocity.x = s.position.x - s.positionPrev.x, s.velocity.y = s.position.y - s.positionPrev.y, l.velocity.x = l.position.x - l.positionPrev.x, l.velocity.y = l.position.y - l.positionPrev.y, s.angularVelocity = s.angle - s.anglePrev, l.angularVelocity = l.angle - l.anglePrev;
									for (var h = 0; h < d.length; h++) {
										var p = d[h],
											v = p.vertex,
											m = q.sub(v, s.position),
											g = q.sub(v, l.position),
											y = q.add(s.velocity, q.mult(q.perp(m), s.angularVelocity)),
											b = q.add(l.velocity, q.mult(q.perp(g), l.angularVelocity)),
											x = q.sub(y, b),
											w = q.dot(u, x),
											S = q.dot(c, x),
											k = Math.abs(S),
											C = O.sign(S),
											T = (1 + r.restitution) * w,
											A = O.clamp(r.separation + w, 0, 1),
											E = S;
										k > A * r.friction * i && (E = A * r.friction * i * C);
										var M = q.cross(m, u),
											j = q.cross(g, u),
											P = f / (r.inverseMass + s.inverseInertia * M * M + l.inverseInertia * j * j);
										if (T *= P, E *= P, w < 0 && 4 * i < w * w) p.normalImpulse = 0, p.tangentImpulse = 0;
										else {
											var _ = p.normalImpulse;
											p.normalImpulse = Math.min(p.normalImpulse + T, 0), T = p.normalImpulse - _;
											var I = p.tangentImpulse;
											p.tangentImpulse = O.clamp(p.tangentImpulse + E, -k, k), E = p.tangentImpulse - I
										}
										n.x = u.x * T + c.x * E, n.y = u.y * T + c.y * E, s.isStatic || s.isSleeping || (s.positionPrev.x += n.x * s.inverseMass, s.positionPrev.y += n.y * s.inverseMass, s.anglePrev += q.cross(m, n) * s.inverseInertia), l.isStatic || l.isSleeping || (l.positionPrev.x -= n.x * l.inverseMass, l.positionPrev.y -= n.y * l.inverseMass, l.anglePrev -= q.cross(g, n) * l.inverseInertia)
									}
								}
							}
						}
					},
					b = {};
				! function () {
					b.collides = function (e, t, n) {
						var i, o, r, a, s = n,
							l = !1;
						if (s) {
							var u = e.speed * e.speed + e.angularSpeed * e.angularSpeed + t.speed * t.speed + t.angularSpeed * t.angularSpeed;
							l = s && s.collided && u < .2, a = s
						} else a = {
							collided: !1,
							bodyA: e,
							bodyB: t
						};
						if (s && l) {
							var c = [s.bodyA.axes[s.axisNumber]];
							if (r = p(s.bodyA.vertices, s.bodyB.vertices, c), a.reused = !0, r.overlap <= 0) return a.collided = !1, a
						} else {
							if ((i = p(e.vertices, t.vertices, e.axes)).overlap <= 0) return a.collided = !1, a;
							if ((o = p(t.vertices, e.vertices, t.axes)).overlap <= 0) return a.collided = !1, a;
							i.overlap < o.overlap ? (r = i, a.bodyA = e, a.bodyB = t) : (r = o, a.bodyA = t, a.bodyB = e), a.axisNumber = r.axisNumber
						}
						a.collided = !0, a.normal = r.axis, a.depth = r.overlap, e = a.bodyA, t = a.bodyB, 0 < q.dot(a.normal, q.sub(t.position, e.position)) && (a.normal = q.neg(a.normal)), a.tangent = q.perp(a.normal), a.penetration = {
							x: a.normal.x * a.depth,
							y: a.normal.y * a.depth
						};
						var d = v(e, t, a.normal),
							f = [d[0]];
						if (M.contains(e.vertices, d[1])) f.push(d[1]);
						else {
							var h = v(t, e, q.neg(a.normal));
							M.contains(t.vertices, h[0]) && f.push(h[0]), f.length < 2 && M.contains(t.vertices, h[1]) && f.push(h[1])
						}
						return a.supports = f, a.supportCorrected = q.sub(d[0], a.penetration), a
					};
					var p = function (e, t, n) {
							for (var i, o, r = {}, a = {}, s = {
									overlap: Number.MAX_VALUE
								}, l = 0; l < n.length; l++) {
								if (o = n[l], u(r, e, o), u(a, t, o), (i = r.min < a.min ? r.max - a.min : a.max - r.min) <= 0) return s.overlap = i, s;
								i < s.overlap && (s.overlap = i, s.axis = o, s.axisNumber = l)
							}
							return s
						},
						u = function (e, t, n) {
							for (var i = q.dot(t[0], n), o = i, r = 1; r < t.length; r += 1) {
								var a = q.dot(t[r], n);
								o < a ? o = a : a < i && (i = a)
							}
							e.min = i, e.max = o
						},
						v = function (e, t, n) {
							for (var i, o, r = Number.MAX_VALUE, a = {
									x: 0,
									y: 0
								}, s = t.vertices, l = e.position, u = s[0], c = s[1], d = 0; d < s.length; d++) o = s[d], a.x = o.x - l.x, a.y = o.y - l.y, (i = -q.dot(n, a)) < r && (r = i, u = o);
							return o = s[0 <= u.index - 1 ? u.index - 1 : s.length - 1], a.x = o.x - l.x, a.y = o.y - l.y, r = -q.dot(n, a), c = o, o = s[(u.index + 1) % s.length], a.x = o.x - l.x, a.y = o.y - l.y, (i = -q.dot(n, a)) < r && (r = i, c = o), [u, c]
						}
				}();
				var x = {
						create: function (e) {
							var t = e;
							t.bodyA && !t.pointA && (t.pointA = {
								x: 0,
								y: 0
							}), t.bodyB && !t.pointB && (t.pointB = {
								x: 0,
								y: 0
							});
							var n = t.bodyA ? q.add(t.bodyA.position, t.pointA) : t.pointA,
								i = t.bodyB ? q.add(t.bodyB.position, t.pointB) : t.pointB,
								o = q.magnitude(q.sub(n, i));
							return t.length = t.length || o || 1e-6, t.render = O.extend({
								visible: !0,
								lineWidth: 2,
								strokeStyle: "#666"
							}, t.render), t.id = t.id || O.nextId(), t.label = t.label || "Constraint", t.type = "constraint", t.stiffness = t.stiffness || 1, t.angularStiffness = t.angularStiffness || 0, t.angleA = t.bodyA ? t.bodyA.angle : t.angleA, t.angleB = t.bodyB ? t.bodyB.angle : t.angleB, t
						},
						solveAll: function (e, t) {
							for (var n = 0; n < e.length; n++) x.solve(e[n], t)
						},
						solve: function (e, t) {
							var n = e.bodyA,
								i = e.bodyB,
								o = e.pointA,
								r = e.pointB;
							n && !n.isStatic && (e.pointA = q.rotate(o, n.angle - e.angleA), e.angleA = n.angle), i && !i.isStatic && (e.pointB = q.rotate(r, i.angle - e.angleB), e.angleB = i.angle);
							var a = o,
								s = r;
							if (n && (a = q.add(n.position, o)), i && (s = q.add(i.position, r)), a && s) {
								var l = q.sub(a, s),
									u = q.magnitude(l);
								0 === u && (u = 1e-6);
								var c = (u - e.length) / u,
									d = q.div(l, u),
									f = q.mult(l, .5 * c * e.stiffness * t * t);
								if (!(Math.abs(1 - u / e.length) < .001 * t)) {
									var h, p, v, m, g, y, b, x;
									b = n && !n.isStatic ? (v = {
										x: a.x - n.position.x + f.x,
										y: a.y - n.position.y + f.y
									}, n.velocity.x = n.position.x - n.positionPrev.x, n.velocity.y = n.position.y - n.positionPrev.y, n.angularVelocity = n.angle - n.anglePrev, h = q.add(n.velocity, q.mult(q.perp(v), n.angularVelocity)), g = q.dot(v, d), n.inverseMass + n.inverseInertia * g * g) : (h = {
										x: 0,
										y: 0
									}, n ? n.inverseMass : 0), x = i && !i.isStatic ? (m = {
										x: s.x - i.position.x - f.x,
										y: s.y - i.position.y - f.y
									}, i.velocity.x = i.position.x - i.positionPrev.x, i.velocity.y = i.position.y - i.positionPrev.y, i.angularVelocity = i.angle - i.anglePrev, p = q.add(i.velocity, q.mult(q.perp(m), i.angularVelocity)), y = q.dot(m, d), i.inverseMass + i.inverseInertia * y * y) : (p = {
										x: 0,
										y: 0
									}, i ? i.inverseMass : 0);
									var w = q.sub(p, h),
										S = q.dot(d, w) / (b + x);
									0 < S && (S = 0);
									var k, C = {
										x: d.x * S,
										y: d.y * S
									};
									n && !n.isStatic && (k = q.cross(v, C) * n.inverseInertia * (1 - e.angularStiffness), T.set(n, !1), k = O.clamp(k, -.01, .01), n.constraintImpulse.x -= f.x, n.constraintImpulse.y -= f.y, n.constraintImpulse.angle += k, n.position.x -= f.x, n.position.y -= f.y, n.angle += k), i && !i.isStatic && (k = q.cross(m, C) * i.inverseInertia * (1 - e.angularStiffness), T.set(i, !1), k = O.clamp(k, -.01, .01), i.constraintImpulse.x += f.x, i.constraintImpulse.y += f.y, i.constraintImpulse.angle -= k, i.position.x += f.x, i.position.y += f.y, i.angle -= k)
								}
							}
						},
						postSolveAll: function (e) {
							for (var t = 0; t < e.length; t++) {
								var n = e[t],
									i = n.constraintImpulse;
								M.translate(n.vertices, i), 0 !== i.angle && (M.rotate(n.vertices, i.angle, n.position), l.rotate(n.axes, i.angle), i.angle = 0), E.update(n.bounds, n.vertices), i.x = 0, i.y = 0
							}
						}
					},
					a = {
						create: function (t, e) {
							var n = t.input.mouse,
								i = {
									type: "mouseConstraint",
									mouse: n,
									dragBody: null,
									dragPoint: null,
									constraint: x.create({
										label: "Mouse Constraint",
										pointA: n.position,
										pointB: {
											x: 0,
											y: 0
										},
										length: .01,
										stiffness: .1,
										angularStiffness: 1,
										render: {
											strokeStyle: "#90EE90",
											lineWidth: 3
										}
									})
								},
								o = O.extend(i, e);
							return k.on(t, "tick", function () {
								var e = w.allBodies(t.world);
								a.update(o, e)
							}), o
						},
						update: function (e, t) {
							var n = e.mouse,
								i = e.constraint;
							if (0 === n.button) {
								if (!i.bodyB)
									for (var o = 0; o < t.length; o++) {
										var r = t[o];
										E.contains(r.bounds, n.position) && M.contains(r.vertices, n.position) && (i.pointA = n.position, i.bodyB = r, i.pointB = {
											x: n.position.x - r.position.x,
											y: n.position.y - r.position.y
										}, i.angleB = r.angle, T.set(r, !1))
									}
							} else i.bodyB = null, i.pointB = null;
							i.bodyB && (T.set(i.bodyB, !1), i.pointA = n.position)
						}
					},
					O = {
						_nextId: 0,
						extend: function (e, t) {
							var n, i, o;
							o = "boolean" == typeof t ? (n = 2, t) : (n = 1, !0), i = Array.prototype.slice.call(arguments, n);
							for (var r = 0; r < i.length; r++) {
								var a = i[r];
								if (a)
									for (var s in a) o && a[s] && a[s].constructor === Object ? e[s] && e[s].constructor !== Object ? e[s] = a[s] : (e[s] = e[s] || {}, O.extend(e[s], o, a[s])) : e[s] = a[s]
							}
							return e
						},
						clone: function (e, t) {
							return O.extend({}, t, e)
						},
						keys: function (e) {
							if (Object.keys) return Object.keys(e);
							var t = [];
							for (var n in e) t.push(n);
							return t
						},
						values: function (e) {
							var t = [];
							if (Object.keys) {
								for (var n = Object.keys(e), i = 0; i < n.length; i++) t.push(e[n[i]]);
								return t
							}
							for (var o in e) t.push(e[o]);
							return t
						},
						shadeColor: function (e, t) {
							var n = parseInt(e.slice(1), 16),
								i = Math.round(2.55 * t),
								o = (n >> 16) + i,
								r = (n >> 8 & 255) + i,
								a = (255 & n) + i;
							return "#" + (16777216 + 65536 * (o < 255 ? o < 1 ? 0 : o : 255) + 256 * (r < 255 ? r < 1 ? 0 : r : 255) + (a < 255 ? a < 1 ? 0 : a : 255)).toString(16).slice(1)
						},
						shuffle: function (e) {
							for (var t = e.length - 1; 0 < t; t--) {
								var n = Math.floor(Math.random() * (t + 1)),
									i = e[t];
								e[t] = e[n], e[n] = i
							}
							return e
						},
						choose: function (e) {
							return e[Math.floor(Math.random() * e.length)]
						},
						isElement: function (t) {
							try {
								return t instanceof HTMLElement
							} catch (e) {
								return "object" == typeof t && 1 === t.nodeType && "object" == typeof t.style && "object" == typeof t.ownerDocument
							}
						},
						clamp: function (e, t, n) {
							return e < t ? t : n < e ? n : e
						},
						sign: function (e) {
							return e < 0 ? -1 : 1
						},
						now: function () {
							var e = window.performance;
							return e ? (e.now = e.now || e.webkitNow || e.msNow || e.oNow || e.mozNow, +e.now()) : +new Date
						},
						random: function (e, t) {
							return e + Math.random() * (t - e)
						},
						colorToNumber: function (e) {
							return 3 == (e = e.replace("#", "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), parseInt(e, 16)
						},
						log: function (e, t) {
							if (console && console.log) {
								var n;
								switch (t) {
									case "warn":
										n = "color: coral";
										break;
									case "error":
										n = "color: red"
								}
								console.log("%c [Matter] " + t + ": " + e, n)
							}
						},
						nextId: function () {
							return O._nextId++
						}
					},
					S = {};
				! function () {
					var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
						window.setTimeout(function () {
							e(O.now())
						}, 1e3 / 60)
					};
					S.create = function (e, t) {
						t = O.isElement(e) ? t : e;
						var n = {
								enabled: !0,
								positionIterations: 6,
								velocityIterations: 4,
								constraintIterations: 2,
								enableSleeping: !1,
								timeScale: 1,
								input: {},
								events: [],
								timing: {
									fps: 60,
									timestamp: 0,
									delta: 1e3 / 60,
									correction: 1,
									deltaMin: 1e3 / 60,
									deltaMax: 1e3 / 30,
									timeScale: 1,
									isFixed: !1
								},
								render: {
									element: e = O.isElement(e) ? e : null,
									controller: j
								}
							},
							i = O.extend(n, t);
						return i.render = i.render.controller.create(i.render), i.world = o.create(i.world), i.pairs = m.create(), i.metrics = i.metrics || C.create(), i.input.mouse = i.input.mouse || s.create(i.render.canvas), i.broadphase = i.broadphase || {
							current: "grid",
							grid: {
								controller: v,
								instance: v.create(),
								detector: r.collisions
							},
							bruteForce: {
								detector: r.bruteForce
							}
						}, i
					}, S.run = function (a) {
						var s, l = 0,
							u = 0,
							c = [],
							d = 1;
						! function e(t) {
							if (f(e), a.enabled) {
								var n, i, o = a.timing,
									r = {
										timestamp: t
									};
								k.trigger(a, "beforeTick", r), o.isFixed ? n = o.delta : (n = t - s || o.delta, s = t, c.push(n), c = c.slice(-60), i = (n = (n = (n = Math.min.apply(null, c)) < o.deltaMin ? o.deltaMin : n) > o.deltaMax ? o.deltaMax : n) / o.delta, o.delta = n), 0 !== d && (i *= o.timeScale / d), 0 === o.timeScale && (i = 0), d = o.timeScale, u += 1, 1e3 <= t - l && (o.fps = u * ((t - l) / 1e3), l = t, u = 0), k.trigger(a, "tick", r), a.world.isModified && a.render.controller.clear(a.render), S.update(a, n, i), p(a), h(a), S.render(a), k.trigger(a, "afterTick", r)
							}
						}()
					}, S.update = function (e, t, n) {
						n = void 0 !== n ? n : 1;
						var i, o = e.world,
							r = e.timing,
							a = e.broadphase[e.broadphase.current],
							s = [];
						r.timestamp += t * r.timeScale, r.correction = n;
						var l = {
							timestamp: e.timing.timestamp
						};
						k.trigger(e, "beforeUpdate", l);
						var u = w.allBodies(o),
							c = w.allConstraints(o);
						for (C.reset(e.metrics), e.enableSleeping && T.update(u), y.applyGravityAll(u, o.gravity), y.updateAll(u, t, r.timeScale, n, o.bounds), i = 0; i < e.constraintIterations; i++) x.solveAll(c, r.timeScale);
						x.postSolveAll(u), s = a.controller ? (o.isModified && a.controller.clear(a.instance), a.controller.update(a.instance, u, e, o.isModified), a.instance.pairsList) : u;
						var d = a.detector(s, e),
							f = e.pairs,
							h = r.timestamp;
						for (m.update(f, d, h), m.removeOld(f, h), e.enableSleeping && T.afterCollisions(f.list), g.preSolveVelocity(f.list), i = 0; i < e.velocityIterations; i++) g.solveVelocity(f.list, r.timeScale);
						for (i = 0; i < e.positionIterations; i++) g.solvePosition(f.list, r.timeScale);
						return g.postSolvePosition(u), C.update(e.metrics, e), y.resetForcesAll(u), o.isModified && w.setModified(o, !1, !1, !0), k.trigger(e, "afterUpdate", l), e
					}, S.render = function (e) {
						var t = {
							timestamp: e.timing.timestamp
						};
						k.trigger(e, "beforeRender", t), e.render.controller.world(e), k.trigger(e, "afterRender", t)
					}, S.merge = function (e, t) {
						if (O.extend(e, t), t.world) {
							e.world = t.world, S.clear(e);
							for (var n = w.allBodies(e.world), i = 0; i < n.length; i++) {
								var o = n[i];
								T.set(o, !1), o.id = O.nextId()
							}
						}
					}, S.clear = function (e) {
						var t = e.world;
						m.clear(e.pairs);
						var n = e.broadphase[e.broadphase.current];
						if (n.controller) {
							var i = w.allBodies(t);
							n.controller.clear(n.instance), n.controller.update(n.instance, i, e, !0)
						}
					};
					var h = function (e) {
							var t = e.input.mouse,
								n = t.sourceEvents;
							n.mousemove && k.trigger(e, "mousemove", {
								mouse: t
							}), n.mousedown && k.trigger(e, "mousedown", {
								mouse: t
							}), n.mouseup && k.trigger(e, "mouseup", {
								mouse: t
							}), s.clearSourceEvents(t)
						},
						p = function (e) {
							var t = e.pairs;
							0 < t.collisionStart.length && k.trigger(e, "collisionStart", {
								pairs: t.collisionStart
							}), 0 < t.collisionActive.length && k.trigger(e, "collisionActive", {
								pairs: t.collisionActive
							}), 0 < t.collisionEnd.length && k.trigger(e, "collisionEnd", {
								pairs: t.collisionEnd
							})
						}
				}();
				var s, k = {
						on: function (e, t, n) {
							for (var i, o = t.split(" "), r = 0; r < o.length; r++) i = o[r], e.events = e.events || {}, e.events[i] = e.events[i] || [], e.events[i].push(n);
							return n
						},
						off: function (e, t, n) {
							if (t) {
								"function" == typeof t && (n = t, t = O.keys(e.events).join(" "));
								for (var i = t.split(" "), o = 0; o < i.length; o++) {
									var r = e.events[i[o]],
										a = [];
									if (n)
										for (var s = 0; s < r.length; s++) r[s] !== n && a.push(r[s]);
									e.events[i[o]] = a
								}
							} else e.events = {}
						},
						trigger: function (e, t, n) {
							var i, o, r, a;
							if (e.events) {
								n || (n = {}), i = t.split(" ");
								for (var s = 0; s < i.length; s++)
									if (o = i[s], r = e.events[o]) {
										(a = O.clone(n, !1)).name = o, a.source = e;
										for (var l = 0; l < r.length; l++) r[l].apply(e, [a])
									}
							}
						}
					},
					C = {};
				C.create = function () {
						return {
							extended: !1,
							narrowDetections: 0,
							narrowphaseTests: 0,
							narrowReuse: 0,
							narrowReuseCount: 0,
							midphaseTests: 0,
							broadphaseTests: 0,
							narrowEff: 1e-4,
							midEff: 1e-4,
							broadEff: 1e-4,
							collisions: 0,
							buckets: 0,
							bodies: 0,
							pairs: 0
						}
					}, C.reset = function (e) {
						e.extended && (e.narrowDetections = 0, e.narrowphaseTests = 0, e.narrowReuse = 0, e.narrowReuseCount = 0, e.midphaseTests = 0, e.broadphaseTests = 0, e.narrowEff = 0, e.midEff = 0, e.broadEff = 0, e.collisions = 0, e.buckets = 0, e.pairs = 0, e.bodies = 0)
					}, C.update = function (e, t) {
						if (e.extended) {
							var n = t.world,
								i = (t.broadphase[t.broadphase.current], w.allBodies(n));
							e.collisions = e.narrowDetections, e.pairs = t.pairs.list.length, e.bodies = i.length, e.midEff = (e.narrowDetections / (e.midphaseTests || 1)).toFixed(2), e.narrowEff = (e.narrowDetections / (e.narrowphaseTests || 1)).toFixed(2), e.broadEff = (1 - e.broadphaseTests / (i.length || 1)).toFixed(2), e.narrowReuse = (e.narrowReuseCount / (e.narrowphaseTests || 1)).toFixed(2)
						}
					},
					function () {
						(s = function (e) {
							var n = this;
							this.element = e || document.body, this.absolute = {
								x: 0,
								y: 0
							}, this.position = {
								x: 0,
								y: 0
							}, this.mousedownPosition = {
								x: 0,
								y: 0
							}, this.mouseupPosition = {
								x: 0,
								y: 0
							}, this.offset = {
								x: 0,
								y: 0
							}, this.scale = {
								x: 1,
								y: 1
							}, this.wheelDelta = 0, this.button = -1, this.sourceEvents = {
								mousemove: null,
								mousedown: null,
								mouseup: null,
								mousewheel: null
							}, this.mousemove = function (e) {
								var t = i(e, n.element);
								e.changedTouches && (n.button = 0, e.preventDefault()), n.absolute.x = t.x, n.absolute.y = t.y, n.position.x = n.absolute.x * n.scale.x + n.offset.x, n.position.y = n.absolute.y * n.scale.y + n.offset.y, n.sourceEvents.mousemove = e
							}, this.mousedown = function (e) {
								var t = i(e, n.element);
								e.changedTouches ? (n.button = 0, e.preventDefault()) : n.button = e.button, n.absolute.x = t.x, n.absolute.y = t.y, n.position.x = n.absolute.x * n.scale.x + n.offset.x, n.position.y = n.absolute.y * n.scale.y + n.offset.y, n.mousedownPosition.x = n.position.x, n.mousedownPosition.y = n.position.y, n.sourceEvents.mousedown = e
							}, this.mouseup = function (e) {
								var t = i(e, n.element);
								e.changedTouches && e.preventDefault(), n.button = -1, n.absolute.x = t.x, n.absolute.y = t.y, n.position.x = n.absolute.x * n.scale.x + n.offset.x, n.position.y = n.absolute.y * n.scale.y + n.offset.y, n.mouseupPosition.x = n.position.x, n.mouseupPosition.y = n.position.y, n.sourceEvents.mouseup = e
							}, this.mousewheel = function (e) {
								n.wheelDelta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)), e.preventDefault()
							}, s.setElement(n, n.element)
						}).create = function (e) {
							return new s(e)
						}, s.setElement = function (e, t) {
							(e.element = t).addEventListener("mousemove", e.mousemove), t.addEventListener("mousedown", e.mousedown), t.addEventListener("mouseup", e.mouseup), t.addEventListener("mousewheel", e.mousewheel), t.addEventListener("DOMMouseScroll", e.mousewheel), t.addEventListener("touchmove", e.mousemove), t.addEventListener("touchstart", e.mousedown), t.addEventListener("touchend", e.mouseup)
						}, s.clearSourceEvents = function (e) {
							e.sourceEvents.mousemove = null, e.sourceEvents.mousedown = null, e.sourceEvents.mouseup = null, e.sourceEvents.mousewheel = null, e.wheelDelta = 0
						}, s.setOffset = function (e, t) {
							e.offset.x = t.x, e.offset.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
						}, s.setScale = function (e, t) {
							e.scale.x = t.x, e.scale.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
						};
						var i = function (e, t) {
							var n, i, o = t.getBoundingClientRect(),
								r = document.documentElement || document.body.parentNode || document.body,
								a = void 0 !== window.pageXOffset ? window.pageXOffset : r.scrollLeft,
								s = void 0 !== window.pageYOffset ? window.pageYOffset : r.scrollTop,
								l = e.changedTouches;
							return i = l ? (n = l[0].pageX - o.left - a, l[0].pageY - o.top - s) : (n = e.pageX - o.left - a, e.pageY - o.top - s), {
								x: n / (t.clientWidth / t.width),
								y: i / (t.clientHeight / t.height)
							}
						}
					}();
				var T = {
						update: function (e) {
							for (var t = 0; t < e.length; t++) {
								var n = e[t],
									i = n.speed * n.speed + n.angularSpeed * n.angularSpeed;
								if (0 < n.force.x || 0 < n.force.y) T.set(n, !1);
								else {
									var o = Math.min(n.motion, i),
										r = Math.max(n.motion, i);
									n.motion = .9 * o + (1 - .9) * r, 0 < n.sleepThreshold && n.motion < .08 ? (n.sleepCounter += 1, n.sleepCounter >= n.sleepThreshold && T.set(n, !0)) : 0 < n.sleepCounter && (n.sleepCounter -= 1)
								}
							}
						},
						afterCollisions: function (e) {
							for (var t = 0; t < e.length; t++) {
								var n = e[t];
								if (n.isActive) {
									var i = n.collision,
										o = i.bodyA,
										r = i.bodyB;
									if (!(o.isSleeping && r.isSleeping || o.isStatic || r.isStatic) && (o.isSleeping || r.isSleeping)) {
										var a = o.isSleeping && !o.isStatic ? o : r,
											s = a === o ? r : o;
										!a.isStatic && .18 < s.motion && T.set(a, !1)
									}
								}
							}
						},
						set: function (e, t) {
							t ? (e.isSleeping = !0, e.sleepCounter = e.sleepThreshold, e.positionImpulse.x = 0, e.positionImpulse.y = 0, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.anglePrev = e.angle, e.speed = 0, e.angularSpeed = 0, e.motion = 0) : (e.isSleeping = !1, e.sleepCounter = 0)
						}
					},
					p = {
						rectangle: function (e, t, n, i, o) {
							o = o || {};
							var r = {
								label: "Rectangle Body",
								position: {
									x: e,
									y: t
								},
								vertices: M.fromPath("L 0 0 L " + n + " 0 L " + n + " " + i + " L 0 " + i)
							};
							if (o.chamfer) {
								var a = o.chamfer;
								r.vertices = M.chamfer(r.vertices, a.radius, a.quality, a.qualityMin, a.qualityMax), delete o.chamfer
							}
							return y.create(O.extend({}, r, o))
						},
						trapezoid: function (e, t, n, i, o, r) {
							r = r || {};
							var a = n * (o *= .5),
								s = a + (1 - 2 * o) * n,
								l = s + a,
								u = {
									label: "Trapezoid Body",
									position: {
										x: e,
										y: t
									},
									vertices: M.fromPath("L 0 0 L " + a + " " + -i + " L " + s + " " + -i + " L " + l + " 0")
								};
							if (r.chamfer) {
								var c = r.chamfer;
								u.vertices = M.chamfer(u.vertices, c.radius, c.quality, c.qualityMin, c.qualityMax), delete r.chamfer
							}
							return y.create(O.extend({}, u, r))
						},
						circle: function (e, t, n, i, o) {
							(i = i || {}).label = "Circle Body", o = o || 25;
							var r = Math.ceil(Math.max(10, Math.min(o, n)));
							return r % 2 == 1 && (r += 1), i.circleRadius = n, p.polygon(e, t, r, n, i)
						},
						polygon: function (e, t, n, i, o) {
							if (o = o || {}, n < 3) return p.circle(e, t, i, o);
							for (var r = 2 * Math.PI / n, a = "", s = .5 * r, l = 0; l < n; l += 1) {
								var u = s + l * r,
									c = Math.cos(u) * i,
									d = Math.sin(u) * i;
								a += "L " + c.toFixed(3) + " " + d.toFixed(3) + " "
							}
							var f = {
								label: "Polygon Body",
								position: {
									x: e,
									y: t
								},
								vertices: M.fromPath(a)
							};
							if (o.chamfer) {
								var h = o.chamfer;
								f.vertices = M.chamfer(f.vertices, h.radius, h.quality, h.qualityMin, h.qualityMax), delete o.chamfer
							}
							return y.create(O.extend({}, f, o))
						}
					},
					A = {
						stack: function (e, t, n, i, o, r, a) {
							for (var s, l = w.create({
									label: "Stack"
								}), u = e, c = t, d = 0, f = 0; f < i; f++) {
								for (var h = 0, p = 0; p < n; p++) {
									var v = a(u, c, p, f, s, d);
									if (v) {
										var m = v.bounds.max.y - v.bounds.min.y,
											g = v.bounds.max.x - v.bounds.min.x;
										h < m && (h = m), y.translate(v, {
											x: .5 * g,
											y: .5 * m
										}), u = v.bounds.max.x + o, w.addBody(l, v), s = v, d += 1
									}
								}
								c += h + r, u = e
							}
							return l
						},
						chain: function (e, t, n, i, o, r) {
							for (var a = e.bodies, s = 1; s < a.length; s++) {
								var l = a[s - 1],
									u = a[s],
									c = l.bounds.max.y - l.bounds.min.y,
									d = l.bounds.max.x - l.bounds.min.x,
									f = u.bounds.max.y - u.bounds.min.y,
									h = {
										bodyA: l,
										pointA: {
											x: d * t,
											y: c * n
										},
										bodyB: u,
										pointB: {
											x: (u.bounds.max.x - u.bounds.min.x) * i,
											y: f * o
										}
									},
									p = O.extend(h, r);
								w.addConstraint(e, x.create(p))
							}
							return e.label += " Chain", e
						},
						mesh: function (e, t, n, i, o) {
							var r, a, s, l, u, c = e.bodies;
							for (r = 0; r < n; r++) {
								for (a = 0; a < t; a++) 0 < a && (s = c[a - 1 + r * t], l = c[a + r * t], w.addConstraint(e, x.create(O.extend({
									bodyA: s,
									bodyB: l
								}, o))));
								for (a = 0; a < t; a++) 0 < r && (s = c[a + (r - 1) * t], l = c[a + r * t], w.addConstraint(e, x.create(O.extend({
									bodyA: s,
									bodyB: l
								}, o))), i && 0 < a && (u = c[a - 1 + (r - 1) * t], w.addConstraint(e, x.create(O.extend({
									bodyA: u,
									bodyB: l
								}, o)))), i && a < t - 1 && (u = c[a + 1 + (r - 1) * t], w.addConstraint(e, x.create(O.extend({
									bodyA: u,
									bodyB: l
								}, o)))))
							}
							return e.label += " Mesh", e
						},
						pyramid: function (l, e, u, c, d, t, f) {
							return A.stack(l, e, u, c, d, t, function (e, t, n, i, o, r) {
								var a = Math.min(c, Math.ceil(u / 2)),
									s = o ? o.bounds.max.x - o.bounds.min.x : 0;
								if (!(a < i || n < (i = a - i) || u - 1 - i < n)) return 1 === r && y.translate(o, {
									x: (n + (u % 2 == 1 ? 1 : -1)) * s,
									y: 0
								}), f(l + (o ? n * s : 0) + n * d, t, n, i, o, r)
							})
						},
						newtonsCradle: function (e, t, n, i, o) {
							for (var r = w.create({
									label: "Newtons Cradle"
								}), a = 0; a < n; a++) {
								var s = p.circle(e + a * i * 1.9, t + o, i, {
										inertia: 99999,
										restitution: 1,
										friction: 0,
										frictionAir: 1e-4,
										slop: .01
									}),
									l = x.create({
										pointA: {
											x: e + a * i * 1.9,
											y: t
										},
										bodyB: s
									});
								w.addBody(r, s), w.addConstraint(r, l)
							}
							return r
						},
						car: function (e, t, n, i, o) {
							var r = y.nextGroupId(),
								a = .5 * -n - 20,
								s = .5 * n - -20,
								l = w.create({
									label: "Car"
								}),
								u = p.trapezoid(e, t, n, i, .3, {
									groupId: r,
									friction: .01,
									chamfer: {
										radius: 10
									}
								}),
								c = p.circle(e + a, t + 0, o, {
									groupId: r,
									restitution: .5,
									friction: .9,
									density: .01
								}),
								d = p.circle(e + s, t + 0, o, {
									groupId: r,
									restitution: .5,
									friction: .9,
									density: .01
								}),
								f = x.create({
									bodyA: u,
									pointA: {
										x: a,
										y: 0
									},
									bodyB: c,
									stiffness: .5
								}),
								h = x.create({
									bodyA: u,
									pointA: {
										x: s,
										y: 0
									},
									bodyB: d,
									stiffness: .5
								});
							return w.addBody(l, u), w.addBody(l, c), w.addBody(l, d), w.addConstraint(l, f), w.addConstraint(l, h), l
						},
						softBody: function (e, t, n, i, o, r, a, s, l, u) {
							l = O.extend({
								inertia: 1 / 0
							}, l), u = O.extend({
								stiffness: .4
							}, u);
							var c = A.stack(e, t, n, i, o, r, function (e, t) {
								return p.circle(e, t, s, l)
							});
							return A.mesh(c, n, i, a, u), c.label = "Soft Body", c
						}
					},
					l = {
						fromVertices: function (e) {
							for (var t = {}, n = 0; n < e.length; n++) {
								var i = (n + 1) % e.length,
									o = q.normalise({
										x: e[i].y - e[n].y,
										y: e[n].x - e[i].x
									}),
									r = 0 === o.y ? 1 / 0 : o.x / o.y;
								t[r = r.toFixed(3).toString()] = o
							}
							return O.values(t)
						},
						rotate: function (e, t) {
							if (0 !== t)
								for (var n = Math.cos(t), i = Math.sin(t), o = 0; o < e.length; o++) {
									var r, a = e[o];
									r = a.x * n - a.y * i, a.y = a.x * i + a.y * n, a.x = r
								}
						}
					},
					E = {
						create: function (e) {
							var t = {
								min: {
									x: 0,
									y: 0
								},
								max: {
									x: 0,
									y: 0
								}
							};
							return e && E.update(t, e), t
						},
						update: function (e, t, n) {
							e.min.x = Number.MAX_VALUE, e.max.x = Number.MIN_VALUE, e.min.y = Number.MAX_VALUE, e.max.y = Number.MIN_VALUE;
							for (var i = 0; i < t.length; i++) {
								var o = t[i];
								o.x > e.max.x && (e.max.x = o.x), o.x < e.min.x && (e.min.x = o.x), o.y > e.max.y && (e.max.y = o.y), o.y < e.min.y && (e.min.y = o.y)
							}
							n && (0 < n.x ? e.max.x += n.x : e.min.x += n.x, 0 < n.y ? e.max.y += n.y : e.min.y += n.y)
						},
						contains: function (e, t) {
							return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
						},
						overlaps: function (e, t) {
							return e.min.x <= t.max.x && e.max.x >= t.min.x && e.max.y >= t.min.y && e.min.y <= t.max.y
						},
						translate: function (e, t) {
							e.min.x += t.x, e.max.x += t.x, e.min.y += t.y, e.max.y += t.y
						},
						shift: function (e, t) {
							var n = e.max.x - e.min.x,
								i = e.max.y - e.min.y;
							e.min.x = t.x, e.max.x = t.x + n, e.min.y = t.y, e.max.y = t.y + i
						}
					},
					q = {
						magnitude: function (e) {
							return Math.sqrt(e.x * e.x + e.y * e.y)
						},
						magnitudeSquared: function (e) {
							return e.x * e.x + e.y * e.y
						},
						rotate: function (e, t) {
							var n = Math.cos(t),
								i = Math.sin(t);
							return {
								x: e.x * n - e.y * i,
								y: e.x * i + e.y * n
							}
						},
						rotateAbout: function (e, t, n) {
							var i = Math.cos(t),
								o = Math.sin(t);
							return {
								x: n.x + ((e.x - n.x) * i - (e.y - n.y) * o),
								y: n.y + ((e.x - n.x) * o + (e.y - n.y) * i)
							}
						},
						normalise: function (e) {
							var t = q.magnitude(e);
							return 0 === t ? {
								x: 0,
								y: 0
							} : {
								x: e.x / t,
								y: e.y / t
							}
						},
						dot: function (e, t) {
							return e.x * t.x + e.y * t.y
						},
						cross: function (e, t) {
							return e.x * t.y - e.y * t.x
						},
						add: function (e, t) {
							return {
								x: e.x + t.x,
								y: e.y + t.y
							}
						},
						sub: function (e, t) {
							return {
								x: e.x - t.x,
								y: e.y - t.y
							}
						},
						mult: function (e, t) {
							return {
								x: e.x * t,
								y: e.y * t
							}
						},
						div: function (e, t) {
							return {
								x: e.x / t,
								y: e.y / t
							}
						},
						perp: function (e, t) {
							return {
								x: (t = !0 === t ? -1 : 1) * -e.y,
								y: t * e.x
							}
						},
						neg: function (e) {
							return {
								x: -e.x,
								y: -e.y
							}
						},
						angle: function (e, t) {
							return Math.atan2(t.y - e.y, t.x - e.x)
						}
					},
					M = {
						create: function (e, t) {
							for (var n = 0; n < e.length; n++) e[n].index = n, e[n].body = t
						},
						fromPath: function (e) {
							var i = [];
							return e.replace(/L\s*([\-\d\.]*)\s*([\-\d\.]*)/gi, function (e, t, n) {
								i.push({
									x: parseFloat(t, 10),
									y: parseFloat(n, 10)
								})
							}), i
						},
						centre: function (e) {
							for (var t, n, i, o = M.area(e, !0), r = {
									x: 0,
									y: 0
								}, a = 0; a < e.length; a++) i = (a + 1) % e.length, t = q.cross(e[a], e[i]), n = q.mult(q.add(e[a], e[i]), t), r = q.add(r, n);
							return q.div(r, 6 * o)
						},
						area: function (e, t) {
							for (var n = 0, i = e.length - 1, o = 0; o < e.length; o++) n += (e[i].x - e[o].x) * (e[i].y + e[o].y), i = o;
							return t ? n / 2 : Math.abs(n) / 2
						},
						inertia: function (e, t) {
							for (var n, i, o = 0, r = 0, a = e, s = 0; s < a.length; s++) i = (s + 1) % a.length, o += (n = Math.abs(q.cross(a[i], a[s]))) * (q.dot(a[i], a[i]) + q.dot(a[i], a[s]) + q.dot(a[s], a[s])), r += n;
							return t / 6 * (o / r)
						},
						translate: function (e, t, n) {
							var i;
							if (n)
								for (i = 0; i < e.length; i++) e[i].x += t.x * n, e[i].y += t.y * n;
							else
								for (i = 0; i < e.length; i++) e[i].x += t.x, e[i].y += t.y
						},
						rotate: function (e, t, n) {
							if (0 !== t)
								for (var i = Math.cos(t), o = Math.sin(t), r = 0; r < e.length; r++) {
									var a = e[r],
										s = a.x - n.x,
										l = a.y - n.y;
									a.x = n.x + (s * i - l * o), a.y = n.y + (s * o + l * i)
								}
						},
						contains: function (e, t) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n],
									o = e[(n + 1) % e.length];
								if (0 < (t.x - i.x) * (o.y - i.y) + (t.y - i.y) * (i.x - o.x)) return !1
							}
							return !0
						},
						scale: function (e, t, n, i) {
							if (1 === t && 1 === n) return e;
							i = i || M.centre(e);
							for (var o, r, a = 0; a < e.length; a++) o = e[a], r = q.sub(o, i), e[a].x = i.x + r.x * t, e[a].y = i.y + r.y * n;
							return e
						},
						chamfer: function (e, t, n, i, o) {
							(t = t || [8]).length || (t = [t]), n = void 0 !== n ? n : -1, i = i || 2, o = o || 14;
							for (var r = (M.centre(e), []), a = 0; a < e.length; a++) {
								var s = e[0 <= a - 1 ? a - 1 : e.length - 1],
									l = e[a],
									u = e[(a + 1) % e.length],
									c = t[a < t.length ? a : t.length - 1];
								if (0 !== c) {
									var d = q.normalise({
											x: l.y - s.y,
											y: s.x - l.x
										}),
										f = q.normalise({
											x: u.y - l.y,
											y: l.x - u.x
										}),
										h = Math.sqrt(2 * Math.pow(c, 2)),
										p = q.mult(O.clone(d), c),
										v = q.normalise(q.mult(q.add(d, f), .5)),
										m = q.sub(l, q.mult(v, h)),
										g = n; - 1 === n && (g = 1.75 * Math.pow(c, .32)), (g = O.clamp(g, i, o)) % 2 == 1 && (g += 1);
									for (var y = Math.acos(q.dot(d, f)) / g, b = 0; b < g; b++) r.push(q.add(q.rotate(p, y * b), m))
								} else r.push(l)
							}
							return r
						}
					},
					j = {};
				! function () {
					j.create = function (e) {
						var t = {
								controller: j,
								element: null,
								canvas: null,
								options: {
									width: 800,
									height: 600,
									background: "#fafafa",
									wireframeBackground: "#222",
									hasBounds: !1,
									enabled: !0,
									wireframes: !0,
									showSleeping: !0,
									showDebug: !1,
									showBroadphase: !1,
									showBounds: !1,
									showVelocity: !1,
									showCollisions: !1,
									showAxes: !1,
									showPositions: !1,
									showAngleIndicator: !1,
									showIds: !1,
									showShadows: !1
								}
							},
							n = O.extend(t, e);
						return n.canvas = n.canvas || i(n.options.width, n.options.height), n.context = n.canvas.getContext("2d"), n.textures = {}, n.bounds = n.bounds || {
							min: {
								x: 0,
								y: 0
							},
							max: {
								x: n.options.width,
								y: n.options.height
							}
						}, j.setBackground(n, n.options.background), O.isElement(n.element) ? n.element.appendChild(n.canvas) : O.log('No "render.element" passed, "render.canvas" was not inserted into document.', "warn"), n
					}, j.clear = function () {}, j.setBackground = function (e, t) {
						if (e.currentBackground !== t) {
							var n = t;
							/(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"), e.canvas.style.background = n, e.canvas.style.backgroundSize = "contain", e.currentBackground = t
						}
					}, j.world = function (e) {
						var t, n = e.render,
							i = e.world,
							o = n.canvas,
							r = n.context,
							a = n.options,
							s = w.allBodies(i),
							l = w.allConstraints(i),
							u = [],
							c = [];
						a.wireframes ? j.setBackground(n, a.wireframeBackground) : j.setBackground(n, a.background), r.globalCompositeOperation = "source-in", r.fillStyle = "transparent", r.fillRect(0, 0, o.width, o.height), r.globalCompositeOperation = "source-over";
						var d = n.bounds.max.x - n.bounds.min.x,
							f = n.bounds.max.y - n.bounds.min.y,
							h = d / n.options.width,
							p = f / n.options.height;
						if (a.hasBounds) {
							for (t = 0; t < s.length; t++) {
								var v = s[t];
								E.overlaps(v.bounds, n.bounds) && u.push(v)
							}
							for (t = 0; t < l.length; t++) {
								var m = l[t],
									g = m.bodyA,
									y = m.bodyB,
									b = m.pointA,
									x = m.pointB;
								g && (b = q.add(g.position, m.pointA)), y && (x = q.add(y.position, m.pointB)), b && x && (E.contains(n.bounds, b) || E.contains(n.bounds, x)) && c.push(m)
							}
							r.scale(1 / h, 1 / p), r.translate(-n.bounds.min.x, -n.bounds.min.y)
						} else c = l, u = s;
						!a.wireframes || e.enableSleeping && a.showSleeping ? j.bodies(e, u, r) : j.bodyWireframes(e, u, r), a.showBounds && j.bodyBounds(e, u, r), (a.showAxes || a.showAngleIndicator) && j.bodyAxes(e, u, r), a.showPositions && j.bodyPositions(e, u, r), a.showVelocity && j.bodyVelocity(e, u, r), a.showIds && j.bodyIds(e, u, r), a.showCollisions && j.collisions(e, e.pairs.list, r), j.constraints(c, r), a.showBroadphase && "grid" === e.broadphase.current && j.grid(e, e.broadphase[e.broadphase.current].instance, r), a.showDebug && j.debug(e, r), a.hasBounds && r.setTransform(1, 0, 0, 1, 0, 0)
					}, j.debug = function (e, t) {
						var n = t,
							i = e.world,
							o = e.render,
							r = o.options,
							a = w.allBodies(i),
							s = "    ";
						if (500 <= e.timing.timestamp - (o.debugTimestamp || 0)) {
							var l = "";
							l += "fps: " + Math.round(e.timing.fps) + s, e.metrics.extended && (l += "delta: " + e.timing.delta.toFixed(3) + s, l += "correction: " + e.timing.correction.toFixed(3) + s, l += "bodies: " + a.length + s, e.broadphase.controller === v && (l += "buckets: " + e.metrics.buckets + s), l += "\n", l += "collisions: " + e.metrics.collisions + s, l += "pairs: " + e.pairs.list.length + s, l += "broad: " + e.metrics.broadEff + s, l += "mid: " + e.metrics.midEff + s, l += "narrow: " + e.metrics.narrowEff + s), o.debugString = l, o.debugTimestamp = e.timing.timestamp
						}
						if (o.debugString) {
							n.font = "12px Arial", n.fillStyle = r.wireframes ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";
							for (var u = o.debugString.split("\n"), c = 0; c < u.length; c++) n.fillText(u[c], 50, 50 + 18 * c)
						}
					}, j.constraints = function (e, t) {
						for (var n = t, i = 0; i < e.length; i++) {
							var o = e[i];
							if (o.render.visible && o.pointA && o.pointB) {
								var r = o.bodyA,
									a = o.bodyB;
								r ? (n.beginPath(), n.moveTo(r.position.x + o.pointA.x, r.position.y + o.pointA.y)) : (n.beginPath(), n.moveTo(o.pointA.x, o.pointA.y)), a ? n.lineTo(a.position.x + o.pointB.x, a.position.y + o.pointB.y) : n.lineTo(o.pointB.x, o.pointB.y), n.lineWidth = o.render.lineWidth, n.strokeStyle = o.render.strokeStyle, n.stroke()
							}
						}
					}, j.bodyShadows = function (e, t, n) {
						for (var i = n, o = e.render, r = (o.options, 0); r < t.length; r++) {
							var a = t[r];
							if (a.render.visible) {
								if (a.circleRadius) i.beginPath(), i.arc(a.position.x, a.position.y, a.circleRadius, 0, 2 * Math.PI), i.closePath();
								else {
									i.beginPath(), i.moveTo(a.vertices[0].x, a.vertices[0].y);
									for (var s = 1; s < a.vertices.length; s++) i.lineTo(a.vertices[s].x, a.vertices[s].y);
									i.closePath()
								}
								var l = a.position.x - .5 * o.options.width,
									u = a.position.y - .2 * o.options.height,
									c = Math.abs(l) + Math.abs(u);
								i.shadowColor = "rgba(0,0,0,0.15)", i.shadowOffsetX = .05 * l, i.shadowOffsetY = .05 * u, i.shadowBlur = 1 + 12 * Math.min(1, c / 1e3), i.fill(), i.shadowColor = null, i.shadowOffsetX = null, i.shadowOffsetY = null, i.shadowBlur = null
							}
						}
					}, j.bodies = function (e, t, n) {
						var i, o = n,
							r = e.render,
							a = r.options;
						for (i = 0; i < t.length; i++) {
							var s = t[i];
							if (s.render.visible)
								if (s.render.sprite && s.render.sprite.texture && !a.wireframes) {
									var l = s.render.sprite,
										u = d(r, l.texture);
									a.showSleeping && s.isSleeping && (o.globalAlpha = .5), o.translate(s.position.x, s.position.y), o.rotate(s.angle), o.drawImage(u, -.5 * u.width * l.xScale, -.5 * u.height * l.yScale, u.width * l.xScale, u.height * l.yScale), o.rotate(-s.angle), o.translate(-s.position.x, -s.position.y), a.showSleeping && s.isSleeping && (o.globalAlpha = 1)
								} else {
									if (s.circleRadius) o.beginPath(), o.arc(s.position.x, s.position.y, s.circleRadius, 0, 2 * Math.PI);
									else {
										o.beginPath(), o.moveTo(s.vertices[0].x, s.vertices[0].y);
										for (var c = 1; c < s.vertices.length; c++) o.lineTo(s.vertices[c].x, s.vertices[c].y);
										o.closePath()
									}
									a.wireframes ? (o.lineWidth = 1, o.strokeStyle = "#bbb", a.showSleeping && s.isSleeping && (o.strokeStyle = "rgba(255,255,255,0.2)")) : (o.fillStyle = a.showSleeping && s.isSleeping ? O.shadeColor(s.render.fillStyle, 50) : s.render.fillStyle, o.lineWidth = s.render.lineWidth, o.strokeStyle = s.render.strokeStyle, o.fill()), o.stroke()
								}
						}
					}, j.bodyWireframes = function (e, t, n) {
						var i, o, r = n;
						for (r.beginPath(), i = 0; i < t.length; i++) {
							var a = t[i];
							if (a.render.visible) {
								for (r.moveTo(a.vertices[0].x, a.vertices[0].y), o = 1; o < a.vertices.length; o++) r.lineTo(a.vertices[o].x, a.vertices[o].y);
								r.lineTo(a.vertices[0].x, a.vertices[0].y)
							}
						}
						r.lineWidth = 1, r.strokeStyle = "#bbb", r.stroke()
					}, j.bodyBounds = function (e, t, n) {
						var i = n,
							o = e.render.options;
						i.beginPath();
						for (var r = 0; r < t.length; r++) {
							var a = t[r];
							a.render.visible && i.rect(a.bounds.min.x, a.bounds.min.y, a.bounds.max.x - a.bounds.min.x, a.bounds.max.y - a.bounds.min.y)
						}
						i.strokeStyle = o.wireframes ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)", i.lineWidth = 1, i.stroke()
					}, j.bodyAxes = function (e, t, n) {
						var i, o, r = n,
							a = e.render.options;
						for (r.beginPath(), i = 0; i < t.length; i++) {
							var s = t[i];
							if (s.render.visible)
								if (a.showAxes)
									for (o = 0; o < s.axes.length; o++) {
										var l = s.axes[o];
										r.moveTo(s.position.x, s.position.y), r.lineTo(s.position.x + 20 * l.x, s.position.y + 20 * l.y)
									} else r.moveTo(s.position.x, s.position.y), r.lineTo((s.vertices[0].x + s.vertices[s.vertices.length - 1].x) / 2, (s.vertices[0].y + s.vertices[s.vertices.length - 1].y) / 2)
						}
						r.strokeStyle = a.wireframes ? "indianred" : "rgba(0,0,0,0.3)", r.lineWidth = 1, r.stroke()
					}, j.bodyPositions = function (e, t, n) {
						var i, o, r = n,
							a = e.render.options;
						for (r.beginPath(), o = 0; o < t.length; o++)(i = t[o]).render.visible && (r.arc(i.position.x, i.position.y, 3, 0, 2 * Math.PI, !1), r.closePath());
						for (r.fillStyle = a.wireframes ? "indianred" : "rgba(0,0,0,0.5)", r.fill(), r.beginPath(), o = 0; o < t.length; o++)(i = t[o]).render.visible && (r.arc(i.positionPrev.x, i.positionPrev.y, 2, 0, 2 * Math.PI, !1), r.closePath());
						r.fillStyle = "rgba(255,165,0,0.8)", r.fill()
					}, j.bodyVelocity = function (e, t, n) {
						var i = n;
						e.render.options, i.beginPath();
						for (var o = 0; o < t.length; o++) {
							var r = t[o];
							r.render.visible && (i.moveTo(r.position.x, r.position.y), i.lineTo(r.position.x + 2 * (r.position.x - r.positionPrev.x), r.position.y + 2 * (r.position.y - r.positionPrev.y)))
						}
						i.lineWidth = 3, i.strokeStyle = "cornflowerblue", i.stroke()
					}, j.bodyIds = function (e, t, n) {
						for (var i = n, o = 0; o < t.length; o++) {
							var r = t[o];
							r.render.visible && (i.font = "12px Arial", i.fillStyle = "rgba(255,255,255,0.5)", i.fillText(r.id, r.position.x + 10, r.position.y - 10))
						}
					}, j.collisions = function (e, t, n) {
						var i, o, r, a, s = n,
							l = e.render.options;
						for (s.beginPath(), r = 0; r < t.length; r++)
							for (o = (i = t[r]).collision, a = 0; a < i.activeContacts.length; a++) {
								var u = i.activeContacts[a].vertex;
								s.rect(u.x - 1.5, u.y - 1.5, 3.5, 3.5)
							}
						for (s.fillStyle = l.wireframes ? "rgba(255,255,255,0.7)" : "orange", s.fill(), s.beginPath(), r = 0; r < t.length; r++)
							if (o = (i = t[r]).collision, 0 < i.activeContacts.length) {
								var c = i.activeContacts[0].vertex.x,
									d = i.activeContacts[0].vertex.y;
								2 === i.activeContacts.length && (c = (i.activeContacts[0].vertex.x + i.activeContacts[1].vertex.x) / 2, d = (i.activeContacts[0].vertex.y + i.activeContacts[1].vertex.y) / 2), s.moveTo(c - 8 * o.normal.x, d - 8 * o.normal.y), s.lineTo(c, d)
							} s.strokeStyle = l.wireframes ? "rgba(255,165,0,0.7)" : "orange", s.lineWidth = 1, s.stroke()
					}, j.grid = function (e, t, n) {
						var i = n,
							o = e.render.options;
						i.strokeStyle = o.wireframes ? "rgba(255,180,0,0.1)" : "rgba(255,180,0,0.5)", i.beginPath();
						for (var r = O.keys(t.buckets), a = 0; a < r.length; a++) {
							var s = r[a];
							if (!(t.buckets[s].length < 2)) {
								var l = s.split(",");
								i.rect(.5 + parseInt(l[0], 10) * t.bucketWidth, .5 + parseInt(l[1], 10) * t.bucketHeight, t.bucketWidth, t.bucketHeight)
							}
						}
						i.lineWidth = 1, i.stroke()
					}, j.inspector = function (e, t) {
						var n, i = e.engine,
							o = (i.input.mouse, e.selected),
							r = i.render,
							a = r.options;
						if (a.hasBounds) {
							var s = r.bounds.max.x - r.bounds.min.x,
								l = r.bounds.max.y - r.bounds.min.y,
								u = s / r.options.width,
								c = l / r.options.height;
							t.scale(1 / u, 1 / c), t.translate(-r.bounds.min.x, -r.bounds.min.y)
						}
						for (var d = 0; d < o.length; d++) {
							var f = o[d].data;
							switch (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.9)", t.setLineDash([1, 2]), f.type) {
								case "body":
									n = f.bounds, t.beginPath(), t.rect(Math.floor(n.min.x - 3), Math.floor(n.min.y - 3), Math.floor(n.max.x - n.min.x + 6), Math.floor(n.max.y - n.min.y + 6)), t.closePath(), t.stroke();
									break;
								case "constraint":
									var h = f.pointA;
									f.bodyA && (h = f.pointB), t.beginPath(), t.arc(h.x, h.y, 10, 0, 2 * Math.PI), t.closePath(), t.stroke()
							}
							t.setLineDash([0]), t.translate(-.5, -.5)
						}
						null !== e.selectStart && (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.6)", t.fillStyle = "rgba(255,165,0,0.1)", n = e.selectBounds, t.beginPath(), t.rect(Math.floor(n.min.x), Math.floor(n.min.y), Math.floor(n.max.x - n.min.x), Math.floor(n.max.y - n.min.y)), t.closePath(), t.stroke(), t.fill(), t.translate(-.5, -.5)), a.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
					};
					var i = function (e, t) {
							var n = document.createElement("canvas");
							return n.width = e, n.height = t, n.oncontextmenu = function () {
								return !1
							}, n.onselectstart = function () {
								return !1
							}, n
						},
						d = function (e, t) {
							var n = e.textures[t];
							return n || ((n = e.textures[t] = new Image).src = t, n)
						}
				}();
				var u = {};
				! function () {
					u.create = function (e) {
						var t = {
								controller: u,
								element: null,
								canvas: null,
								options: {
									width: 800,
									height: 600,
									background: "#fafafa",
									wireframeBackground: "#222",
									enabled: !0,
									wireframes: !0,
									showSleeping: !0,
									showDebug: !1,
									showBroadphase: !1,
									showBounds: !1,
									showVelocity: !1,
									showCollisions: !1,
									showAxes: !1,
									showPositions: !1,
									showAngleIndicator: !1,
									showIds: !1,
									showShadows: !1
								}
							},
							n = O.extend(t, e);
						return n.context = new PIXI.WebGLRenderer(800, 600, n.canvas, !1, !0), n.canvas = n.context.view, n.stage = new PIXI.Stage, n.textures = {}, n.sprites = {}, n.primitives = {}, n.spriteBatch = new PIXI.SpriteBatch, n.stage.addChild(n.spriteBatch), O.isElement(n.element) ? n.element.appendChild(n.canvas) : O.log('No "render.element" passed, "render.canvas" was not inserted into document.', "warn"), n.canvas.oncontextmenu = function () {
							return !1
						}, n.canvas.onselectstart = function () {
							return !1
						}, n
					}, u.clear = function (e) {
						for (var t = e.stage, n = e.spriteBatch; t.children[0];) t.removeChild(t.children[0]);
						for (; n.children[0];) n.removeChild(n.children[0]);
						var i = e.sprites["bg-0"];
						e.textures = {}, e.sprites = {}, e.primitives = {}, (e.sprites["bg-0"] = i) && n.addChildAt(i, 0), e.stage.addChild(e.spriteBatch), e.currentBackground = null
					}, u.setBackground = function (e, t) {
						if (e.currentBackground !== t) {
							var n = t.indexOf && -1 !== t.indexOf("#"),
								i = e.sprites["bg-0"];
							if (n) {
								var o = O.colorToNumber(t);
								e.stage.setBackgroundColor(o), i && e.spriteBatch.removeChild(i)
							} else if (!i) {
								var r = a(e, t);
								(i = e.sprites["bg-0"] = new PIXI.Sprite(r)).position.x = 0, i.position.y = 0, e.spriteBatch.addChildAt(i, 0)
							}
							e.currentBackground = t
						}
					}, u.world = function (e) {
						var t, n = e.render,
							i = e.world,
							o = n.context,
							r = n.stage,
							a = n.options,
							s = w.allBodies(i),
							l = w.allConstraints(i);
						for (a.wireframes ? u.setBackground(n, a.wireframeBackground) : u.setBackground(n, a.background), t = 0; t < s.length; t++) u.body(e, s[t]);
						for (t = 0; t < l.length; t++) u.constraint(e, l[t]);
						o.render(r)
					}, u.constraint = function (e, t) {
						var n = e.render,
							i = t.bodyA,
							o = t.bodyB,
							r = t.pointA,
							a = t.pointB,
							s = n.stage,
							l = t.render,
							u = "c-" + t.id,
							c = n.primitives[u];
						return c || (c = n.primitives[u] = new PIXI.Graphics), l.visible && t.pointA && t.pointB ? (-1 === s.children.indexOf(c) && s.addChild(c), c.clear(), c.beginFill(0, 0), c.lineStyle(l.lineWidth, O.colorToNumber(l.strokeStyle), 1), i ? c.moveTo(i.position.x + r.x, i.position.y + r.y) : c.moveTo(r.x, r.y), o ? c.lineTo(o.position.x + a.x, o.position.y + a.y) : c.lineTo(a.x, a.y), void c.endFill()) : void c.clear()
					}, u.body = function (e, t) {
						var n = e.render,
							i = t.render;
						if (i.visible)
							if (i.sprite && i.sprite.texture) {
								var o = "b-" + t.id,
									r = n.sprites[o],
									a = n.spriteBatch;
								r || (r = n.sprites[o] = c(n, t)), -1 === a.children.indexOf(r) && a.addChild(r), r.position.x = t.position.x, r.position.y = t.position.y, r.rotation = t.angle
							} else {
								var s = "b-" + t.id,
									l = n.primitives[s],
									u = n.stage;
								l || ((l = n.primitives[s] = d(n, t)).initialAngle = t.angle), -1 === u.children.indexOf(l) && u.addChild(l), l.position.x = t.position.x, l.position.y = t.position.y, l.rotation = t.angle - l.initialAngle
							}
					};
					var c = function (e, t) {
							var n = t.render.sprite.texture,
								i = a(e, n),
								o = new PIXI.Sprite(i);
							return o.anchor.x = .5, o.anchor.y = .5, o
						},
						d = function (e, t) {
							var n = t.render,
								i = e.options,
								o = new PIXI.Graphics;
							o.clear(), i.wireframes ? (o.beginFill(0, 0), o.lineStyle(1, O.colorToNumber("#bbb"), 1)) : (o.beginFill(O.colorToNumber(n.fillStyle), 1), o.lineStyle(t.render.lineWidth, O.colorToNumber(n.strokeStyle), 1)), o.moveTo(t.vertices[0].x - t.position.x, t.vertices[0].y - t.position.y);
							for (var r = 1; r < t.vertices.length; r++) o.lineTo(t.vertices[r].x - t.position.x, t.vertices[r].y - t.position.y);
							return o.lineTo(t.vertices[0].x - t.position.x, t.vertices[0].y - t.position.y), o.endFill(), (i.showAngleIndicator || i.showAxes) && (o.beginFill(0, 0), i.wireframes ? o.lineStyle(1, O.colorToNumber("#CD5C5C"), 1) : o.lineStyle(1, O.colorToNumber(t.render.strokeStyle)), o.moveTo(0, 0), o.lineTo((t.vertices[0].x + t.vertices[t.vertices.length - 1].x) / 2 - t.position.x, (t.vertices[0].y + t.vertices[t.vertices.length - 1].y) / 2 - t.position.y), o.endFill()), o
						},
						a = function (e, t) {
							var n = e.textures[t];
							return n || (n = e.textures[t] = PIXI.Texture.fromImage(t)), n
						}
				}(), o.add = w.add, o.remove = w.remove, o.addComposite = w.addComposite, o.addBody = w.addBody, o.addConstraint = w.addConstraint, o.clear = w.clear, e.Body = y, e.Composite = w, e.World = o, e.Contact = c, e.Detector = r, e.Grid = v, e.Pairs = m, e.Pair = h, e.Resolver = g, e.SAT = b, e.Constraint = x, e.MouseConstraint = a, e.Common = O, e.Engine = S, e.Metrics = C, e.Mouse = s, e.Sleeping = T, e.Bodies = p, e.Composites = A, e.Axes = l, e.Bounds = E, e.Vector = q, e.Vertices = M, e.Render = j, e.RenderPixi = u, e.Events = k, e.Query = t, void 0 !== i && (void 0 !== n && n.exports && (i = n.exports = e), i.Matter = e), "function" == typeof define && define.amd && define("Matter", [], function () {
					return e
				}), "object" == typeof window && "object" == typeof window.document && (window.Matter = e)
			}()
		}, {}],
		34: [function (e, t, n) {
			"use strict";

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var o = function () {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function (e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				r = i(e("./Sprite")),
				a = i(e("./Rect")),
				s = function (e) {
					function t() {
						(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, t),
						function (e, t, n) {
							for (var i = !0; i;) {
								var o = e,
									r = t,
									a = n;
								i = !1, null === o && (o = Function.prototype);
								var s = Object.getOwnPropertyDescriptor(o, r);
								if (void 0 !== s) {
									if ("value" in s) return s.value;
									var l = s.get;
									if (void 0 === l) return;
									return l.call(a)
								}
								var u = Object.getPrototypeOf(o);
								if (null === u) return;
								e = u, t = r, n = a, i = !0, s = u = void 0
							}
						}(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.element = null, this.bounds = new a.default, this.frame = new a.default
					}
					return function (e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, r["default"]), o(t, [{
						key: "draw",
						value: function (e) {
							this.element && e.drawImage(this.element, this.frame.x, this.frame.y, this.frame.w, this.frame.h, this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h)
						}
					}, {
						key: "load",
						value: function (e) {
							var t = this,
								n = new Image;
							n.src = e, n.complete ? this._onLoadComplete(n) : n.onload = function () {
								t._onLoadComplete(n)
							}
						}
					}, {
						key: "_onLoadComplete",
						value: function (e) {
							this.element = e, this.bounds.w = e.width, this.bounds.h = e.height, this.frame.w = e.width, this.frame.h = e.height
						}
					}]), t
				}();
			n.default = s, t.exports = n.default
		}, {
			"./Rect": 36,
			"./Sprite": 37
		}],
		35: [function (e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i, o = function () {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function (e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				r = e("./Sprite"),
				a = (i = r) && i.__esModule ? i : {
					default: i
				},
				s = function (e) {
					function t() {
						(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, t),
						function (e, t, n) {
							for (var i = !0; i;) {
								var o = e,
									r = t,
									a = n;
								i = !1, null === o && (o = Function.prototype);
								var s = Object.getOwnPropertyDescriptor(o, r);
								if (void 0 !== s) {
									if ("value" in s) return s.value;
									var l = s.get;
									if (void 0 === l) return;
									return l.call(a)
								}
								var u = Object.getPrototypeOf(o);
								if (null === u) return;
								e = u, t = r, n = a, i = !0, s = u = void 0
							}
						}(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.size = 20, this.family = "Arial", this.weight = "normal", this.color = "#000000", this.baseline = "top", this.align = "left", this.lineSpace = void 0, this._text = "", this._lines = []
					}
					return function (e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, a["default"]), o(t, [{
						key: "draw",
						value: function (e) {
							if (e.font = this.weight + " " + this.size + "pt " + this.family, e.textBaseline = this.baseline, e.textAlign = this.align, e.fillStyle = this.color, this._multiline)
								for (var t = 0, n = this._lines.length; t < n; t++) {
									var i = void 0 !== this.lineSpace ? this.lineSpace : this.size + 8;
									e.fillText(this._lines[t], 0, t * i)
								} else e.fillText(this._text, 0, 0)
						}
					}, {
						key: "text",
						get: function () {
							return this._text
						},
						set: function (e) {
							e !== this._text && (this._text = e, this._lines = this._text.split("\n"), this._multiline = 0 < this._lines.length)
						}
					}]), t
				}();
			n.default = s, t.exports = n.default
		}, {
			"./Sprite": 37
		}],
		36: [function (e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			n.default = function e() {
				(function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				})(this, e), this.x = 0, this.y = 0, this.w = 0, this.h = 0
			}, t.exports = n.default
		}, {}],
		37: [function (e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i = function () {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function (e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				o = function (e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.default = e, t
				}(e("./matrix")),
				r = function () {
					function e() {
						(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, e), this.x = 0, this.y = 0, this.alpha = 1, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.enabled = !0, this.children = [], this.parent = null, this.transform = o.create(), this._alpha = 1
					}
					return i(e, [{
						key: "add",
						value: function (e) {
							e.remove(), (e.parent = this).children.push(e)
						}
					}, {
						key: "remove",
						value: function (e) {
							var t = this.children.indexOf(e);
							0 <= t && (this.children.splice(t, 1), e.parent = null)
						}
					}, {
						key: "removeFromParent",
						value: function () {
							this.parent && this.parent.remove(this)
						}
					}, {
						key: "removeChildren",
						value: function () {
							for (var e = 0, t = this.children.length; e < t; e++) this.children[e].parent = null;
							this.children = []
						}
					}, {
						key: "render",
						value: function (e) {
							if (!(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1] || this.enabled && this.parent) {
								this._alpha = this.alpha, o.identity(this.transform), 0 !== this.rotation && o.rotate(this.transform, this.rotation), (1 !== this.scaleX || 1 !== this.scaleY) && o.scale(this.transform, this.scaleX, this.scaleY), (0 !== this.x || 0 !== this.y) && o.translate(this.transform, this.x, this.y), this.parent && (this._alpha *= this.parent._alpha, o.multiply(this.transform, this.parent.transform, this.transform)), e.globalAlpha = this._alpha, e.setTransform(this.transform[0], this.transform[1], this.transform[3], this.transform[4], this.transform[6], this.transform[7]), this.draw && this.draw(e);
								for (var t = 0, n = this.children.length; t < n; t++) this.children[t].render(e)
							}
						}
					}]), e
				}();
			n.default = r, t.exports = n.default
		}, {
			"./matrix": 40
		}],
		38: [function (e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i, o = function () {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function (e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				r = function (e, t, n) {
					for (var i = !0; i;) {
						var o = e,
							r = t,
							a = n;
						i = !1, null === o && (o = Function.prototype);
						var s = Object.getOwnPropertyDescriptor(o, r);
						if (void 0 !== s) {
							if ("value" in s) return s.value;
							var l = s.get;
							if (void 0 === l) return;
							return l.call(a)
						}
						var u = Object.getPrototypeOf(o);
						if (null === u) return;
						e = u, t = r, n = a, i = !0, s = u = void 0
					}
				},
				a = e("./Sprite"),
				s = (i = a) && i.__esModule ? i : {
					default: i
				},
				l = {
					antialias: !0,
					color: "#000000"
				},
				u = function (e) {
					function n(e) {
						var t = arguments.length <= 1 || void 0 === arguments[1] ? l : arguments[1];
						(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, n), r(Object.getPrototypeOf(n.prototype), "constructor", this).call(this), this.canvas = e, this.ctx = e.getContext("2d"), this.ctx.imageSmoothingEnabled = t.antialias, this.ctx.mozImageSmoothingEnabled = t.antialias, this.color = t.color
					}
					return function (e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(n, s["default"]), o(n, [{
						key: "render",
						value: function () {
							this.ctx.save(), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), r(Object.getPrototypeOf(n.prototype), "render", this).call(this, this.ctx, !0), this.ctx.restore()
						}
					}, {
						key: "color",
						get: function () {
							return this._color
						},
						set: function (e) {
							this._color = e, this.canvas.style.backgroundColor = e
						}
					}]), n
				}();
			n.default = u, t.exports = n.default
		}, {
			"./Sprite": 37
		}],
		39: [function (e, t, n) {
			"use strict";

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var o = i(e("./Sprite")),
				r = i(e("./Label")),
				a = i(e("./Img")),
				s = i(e("./Rect")),
				l = i(e("./Stage")),
				u = {};
			u.Sprite = o.default, u.Label = r.default, u.Img = a.default, u.Rect = s.default, u.Stage = l.default, window && (window.CS = u), n.default = u, t.exports = n.default
		}, {
			"./Img": 34,
			"./Label": 35,
			"./Rect": 36,
			"./Sprite": 37,
			"./Stage": 38
		}],
		40: [function (e, t, n) {
			"use strict";

			function i(e) {
				e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1
			}
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.create = function () {
				var e = new Float32Array(9);
				return i(e), e
			}, n.identity = i, n.copy = function (e, t) {
				for (var n in t) e[n] = t[n]
			}, n.multiply = function (e, t, n) {
				var i = t[0],
					o = t[1],
					r = t[2],
					a = t[3],
					s = t[4],
					l = t[5],
					u = t[6],
					c = t[7],
					d = t[8],
					f = n[0],
					h = n[1],
					p = n[2],
					v = n[3],
					m = n[4],
					g = n[5],
					y = n[6],
					b = n[7],
					x = n[8];
				e[0] = i * f + o * v + r * y, e[1] = i * h + o * m + r * b, e[2] = i * p + o * g + r * x, e[3] = a * f + s * v + l * y, e[4] = a * h + s * m + l * b, e[5] = a * p + s * g + l * x, e[6] = u * f + c * v + d * y, e[7] = u * h + c * m + d * b, e[8] = u * p + c * g + d * x
			}, n.translate = function (e, t, n) {
				e[6] += t, e[7] += n
			}, n.scale = function (e, t, n) {
				e[0] *= t, e[4] *= n, e[3] *= t, e[1] *= n, e[6] *= t, e[7] *= n
			}, n.rotate = function (e, t) {
				var n = Math.cos(t),
					i = Math.sin(t),
					o = e[0],
					r = e[3],
					a = e[6];
				e[0] = o * n - e[1] * i, e[1] = o * i + e[1] * n, e[3] = r * n - e[4] * i, e[4] = r * i + e[4] * n, e[6] = a * n - e[7] * i, e[7] = a * i + e[7] * n
			}
		}, {}],
		41: [function (e, t, n) {
			"use strict";

			function i(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return t.default = e, t
			}

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function r(e, t, n, i) {
				var o = u.default.Bodies.rectangle(e, t, n, i, {
					isStatic: !0
				});
				return o.render.visible = !1, o
			}

			function a(e, t, n) {
				var i = e.position;
				u.default.Body.translate(e, {
					x: -i.x,
					y: -i.y
				}), u.default.Body.translate(e, {
					x: t,
					y: n
				})
			}
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var s = function () {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function (e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				l = o(e("../cs/cs.js")),
				u = o(e("matter-js")),
				c = o(e("./Shape")),
				d = o(e("./Bird")),
				f = o(e("../tweener/Tweener")),
				h = i(e("./math")),
				p = i(e("./utils")),
				v = o(e("./config")),
				m = function () {
					function e() {
						(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, e), this.config = v.default
					}
					return s(e, [{
						key: "init",
						value: function (e, t, n) {
							this.canvas || (this.tweener = new f.default, this.time = 0, this.delta = 0, p.bodyEventFix(), this.initGraphics(e, t, n), this.initEngine(), this.initEvents(), this.createBounds(), this.createShapes(), this.render())
						}
					}, {
						key: "resize",
						value: function (e, t) {
							this.onResize(e, t)
						}
					}, {
						key: "destroy",
						value: function () {
							this.canvas && (this.destroyEvents(), this.destroyGraphics(), this.destroyEngine())
						}
					}, {
						key: "initGraphics",
						value: function (e, t, n) {
							this.skipFrame = !1, this.canvas = e, this.container = e.parentElement, e.width = t || this.container.offsetWidth, e.height = n || this.container.offsetHeight, this.config.preRender ? (this.ctx = e.getContext("2d"), this._rc = document.createElement("canvas"), this._rc.width = this.canvas.width, this._rc.height = this.canvas.height, this.stage = new l.default.Stage(this._rc, {
								antialias: this.config.antialias,
								color: this.config.bgcolor
							})) : this.stage = new l.default.Stage(e, {
								antialias: this.config.antialias,
								color: this.config.bgcolor
							})
						}
					}, {
						key: "destroyGraphics",
						value: function () {
							this._raf && (cancelAnimationFrame(this._raf), this._raf = null), this.canvas = null
						}
					}, {
						key: "initEngine",
						value: function () {
							this.bounds = [], this.squares = [], this.triangles = [], this.physicsSkip = this.config.physicsFrameRate;
							var e, t = u.default.Engine.create({
								render: {
									controller: (e = {
										create: function () {
											return {
												controller: e
											}
										},
										world: function () {},
										clear: function () {}
									}, e),
									enabled: !1,
									options: {
										width: this.canvas.width,
										height: this.canvas.height
									}
								}
							});
							this.engine = t, this.root = u.default.Composite.create(), this.engine.world.bounds.max.x = this.canvas.width, this.engine.world.bounds.max.y = this.canvas.height, this.engine.world.gravity.y = this.config.gravity, u.default.World.add(this.engine.world, this.root)
						}
					}, {
						key: "destroyEngine",
						value: function () {
							u.default.Engine.clear(this.engine), this.root = null, this.engine = null
						}
					}, {
						key: "initEvents",
						value: function () {
							this.mouse = {
								x: 0,
								y: 0,
								dx: 0,
								dy: 0
							}, this.moving = !1, this.events = {}, this.events.onResize = this.onResize.bind(this), this.events.onClick = this.onClick.bind(this), this.events.onMove = this.onMove.bind(this), this.events.onTouch = this.onTouch.bind(this), this.events.onTouchMove = this.onTouchMove.bind(this), p.isMobile() ? (window.addEventListener("touchend", this.events.onTouch), window.addEventListener("touchmove", this.events.onTouchMove)) : (window.addEventListener("click", this.events.onClick), window.addEventListener("mousemove", this.events.onMove)), this.config.autoResize && window.addEventListener("resize", this.events.onResize)
						}
					}, {
						key: "destroyEvents",
						value: function () {
							window.removeEventListener("click", this.events.onClick), window.removeEventListener("mousemove", this.events.onMove), window.removeEventListener("touchend", this.events.onTouch), window.removeEventListener("touchmove", this.events.onTouchMove), window.removeEventListener("resize", this.events.onResize), this.events = {}
						}
					}, {
						key: "onResize",
						value: function (e, t) {
							var n = this.canvas.parentElement,
								i = n.offsetWidth,
								o = n.offsetHeight;
							e && t && !isNaN(e) && (i = e, o = t), this.canvas.width = i, this.canvas.height = o, this.engine.world.bounds.max.x = i, this.engine.world.bounds.max.y = o, a(this.bounds[0], i / 2, o + this.borderSize / 2 - 10), a(this.bounds[1], 0 - this.borderSize / 2 + 10, o / 2), a(this.bounds[2], i + this.borderSize / 2 - 10, o / 2), this.config.preRender && (this._rc.width = i, this._rc.height = o)
						}
					}, {
						key: "onTouch",
						value: function (e) {
							var t = e.changedTouches[0];
							this.onClick(t)
						}
					}, {
						key: "onTouchMove",
						value: function (e) {
							var t = e.changedTouches[0];
							this.onMove(t)
						}
					}, {
						key: "updateMouse",
						value: function (e) {
							var t = this.canvas.getBoundingClientRect(),
								n = e.clientX - t.left,
								i = e.clientY - t.top;
							this.mouse.dx = n - this.mouse.x, this.mouse.dy = i - this.mouse.y, this.mouse.x = n, this.mouse.y = i
						}
					}, {
						key: "onClick",
						value: function (e) {
							if (this.updateMouse(e), !(this.mouse.x < 0 || this.mouse.y < 0 || this.mouse.x > this.canvas.width || this.mouse.y > this.canvas.height)) {
								var t = this.mouse.x,
									n = this.mouse.y,
									i = Math.floor(Math.random() * this.squares.length),
									o = this.squares.splice(i, 1)[0],
									r = this.triangles.splice(i, 1)[0];
								o.move(t, n), r.move(t, n, this.spawnBird.bind(this))
							}
						}
					}, {
						key: "onMove",
						value: function (e) {
							this.updateMouse(e), this.moving = !0
						}
					}, {
						key: "createBounds",
						value: function () {
							this.borderSize = 200;
							var e = this.canvas.width,
								t = this.canvas.height;
							this.bounds = [], this.bounds.push(r(e / 2, t + this.borderSize / 2 - 10, 5e3, this.borderSize)), this.bounds.push(r(0 - this.borderSize / 2 + 10, t / 2, this.borderSize, 5e3)), this.bounds.push(r(e + this.borderSize / 2 - 10, t / 2, this.borderSize, 5e3)), u.default.World.add(this.engine.world, this.bounds)
						}
					}, {
						key: "createShapes",
						value: function () {
							this.triangles = [], this.squares = [];
							for (var e = this.config.maxShapes; e--;) this.spawnShapes()
						}
					}, {
						key: "spawnShapes",
						value: function () {
							this.spawnSquare(this.canvas.width, this.canvas.height), this.spawnTriangle(this.canvas.width, this.canvas.height)
						}
					}, {
						key: "spawnSquare",
						value: function (e, t) {
							var n = Math.random() * e / 2 + 10,
								i = Math.random() * t - t,
								o = new c.default("square", n, i);
							this.squares.push(o)
						}
					}, {
						key: "spawnTriangle",
						value: function (e, t) {
							var n = e / 2 + Math.random() * e / 2 - 10,
								i = Math.random() * t - t,
								o = new c.default("triangle", n, i);
							this.triangles.push(o)
						}
					}, {
						key: "spawnBird",
						value: function (e, t) {
							var n = new d.default(e, t);
							n.onDismiss = this.spawnShapes.bind(this), n.fly()
						}
					}, {
						key: "render",
						value: function () {
							var e = p.getTime(),
								t = e - this.time,
								n = 1;
							0 < this.config.fixedDeltaTime && (t = this.config.fixedDeltaTime), 100 < t && (t = 100), this.config.frameSkip && (n = 2), this.time = e, this.delta = t, d.default.delta = t * n, null !== this.canvas && (this.physicsSkip >= this.config.physicsFrameRate && (this.update(t * this.config.physicsFrameRate), this.physicsSkip = 0), this.physicsSkip += 1, this.tweener.update(t * n / 1e3), this.skipFrame || this.stage.render(), this.config.renderFrameSkip && (this.skipFrame ? this.skipFrame = !1 : this.skipFrame = !0), this.config.preRender && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.drawImage(this._rc, 0, 0)), this._raf = requestAnimationFrame(this.render.bind(this)))
						}
					}, {
						key: "update",
						value: function (e) {
							u.default.Engine.update(this.engine, e);
							for (var t = u.default.Matter.Composite.allBodies(this.root), n = t.length, i = 0; i < n; i++) {
								var o = t[i];
								0 < this.config.regroupForce && this.regroup(o), this.moving && this.applyMouseForce(o)
							}
							this.moving = !1
						}
					}, {
						key: "applyMouseForce",
						value: function (e) {
							var t = this.mouse.x,
								n = this.mouse.y + 30,
								i = 100 / this.config.physicsFrameRate * 5e-7,
								o = 0,
								r = 0;
							h.distance(e.position, {
								x: t,
								y: n
							}) < 110 && (o += (e.position.x - t) * i, r += (e.position.y - n) * i, u.default.Body.applyForce(e, this.mouse, {
								x: o,
								y: r
							}))
						}
					}, {
						key: "regroup",
						value: function (e) {
							var t = this.canvas.width,
								n = this.canvas.height,
								i = e.position.x,
								o = 0,
								r = 0,
								a = 5e-5 * this.config.regroupForce;
							void 0 === e.will && (e.will = 1), "triangle" === e.label && i < t / 2 + 10 ? (o += a * e.will, r -= a, e.will += .01 * this.config.physicsFrameRate) : "square" === e.label && t / 2 - 10 < i ? (o -= a * e.will, r -= a, e.will += .01 * this.config.physicsFrameRate) : e.will = 1, (0 !== o || 0 !== r) && u.default.Body.applyForce(e, {
								x: t / 2,
								y: n
							}, {
								x: o,
								y: r
							})
						}
					}]), e
				}();
			n.default = m, t.exports = n.default
		}, {
			"../cs/cs.js": 39,
			"../tweener/Tweener": 49,
			"./Bird": 42,
			"./Shape": 43,
			"./config": 44,
			"./math": 45,
			"./utils": 46,
			"matter-js": 33
		}],
		42: [function (e, t, n) {
			"use strict";

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var r = function () {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function (e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				a = i(e("../cs/cs.js")),
				s = i(e("eases")),
				l = i(e("matter-js")),
				u = null,
				o = function () {
					function o(e, t) {
						(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, o), u = window.app, this.size = 20, this.obj = this.getBody(e, t), this.view = new a.default.Sprite, this.view.draw = this.draw.bind(this), this.view.x = this.x, this.view.y = this.y, this.color = u.config.colorC, this.wingPos = {
							x: 0,
							y: 0
						}, this.count = 0, this.type = 0, this.invertColors = Math.random() < .5, u.stage.add(this.view)
					}
					return r(o, [{
						key: "getBody",
						value: function (e, t) {
							var n = l.default.Bodies.circle(e, t, this.size / 2);
							return n.render.fillStyle = this.color, n.render.lineWidth = 0, n.render.strokeStyle = "rgba(0, 0, 0, 0)", l.default.Composite.add(u.root, n), l.default.Body.setStatic(n, !0), n
						}
					}, {
						key: "draw",
						value: function (e) {
							var t = this.x,
								n = this.y,
								i = this.a;
							e.fillStyle = this.color, e.fillRect(-this.size / 2, -this.size / 2, this.size, this.size), this.view.x = t, this.view.y = n, this.view.rotation = i, this.drawWing(e, 1, this.invertColors ? u.config.colorA : u.config.colorB), this.drawWing(e, -1, this.invertColors ? u.config.colorB : u.config.colorA), this.update()
						}
					}, {
						key: "drawWing",
						value: function (e, t, n) {
							e.fillStyle = n, e.beginPath(), e.moveTo(-this.size / 2 * t, -this.size / 2), e.lineTo(-this.size / 2 * t, this.size / 2), e.lineTo(1.5 * -this.size * t, this.wingPos.y), e.fill(), e.closePath()
						}
					}, {
						key: "fly",
						value: function () {
							this.type = Math.floor(2 * Math.random()), this.type = 1, this.speed = 2 + 4 * Math.random(), this.torque = .3 + 3 * Math.random(), this.wingSpeed = .2 + .8 * Math.random(), this.scaleSpeed = .005 * (.4 * Math.random() - .3), this.changeDirection()
						}
					}, {
						key: "changeDirection",
						value: function () {
							if (this.y < -100) this.dismiss();
							else {
								var e = .5 * -Math.PI + Math.random() * Math.PI,
									t = e - this.a;
								u.tweener.add(this).to({
									a: e
								}, Math.abs(t) * this.torque, s.default.linear).then(this.changeDirection.bind(this))
							}
						}
					}, {
						key: "update",
						value: function () {
							this.count += o.delta / 16, this.wingPos.y = 10 * Math.sin(this.count * this.wingSpeed);
							var e = this.a,
								t = this.speed * (o.delta / 16),
								n = Math.sin(e) * t,
								i = -Math.cos(e) * t;
							this.x += n, this.y += i, this.view.scaleX += this.scaleSpeed, this.view.scaleY = this.view.scaleX
						}
					}, {
						key: "dismiss",
						value: function () {
							l.default.Composite.remove(u.root, this.obj), this.view.removeFromParent(), this.view.draw = null, this.onDismiss && (this.onDismiss(), this.onDismiss = null)
						}
					}, {
						key: "updatePosition",
						value: function (e, t) {
							l.default.Body.translate(this.obj, {
								x: e - this.obj.position.x,
								y: t - this.obj.position.y
							})
						}
					}, {
						key: "updateAngle",
						value: function (e) {
							l.default.Body.rotate(this.obj, e - this.obj.angle)
						}
					}, {
						key: "x",
						get: function () {
							return this.obj.position.x
						},
						set: function (e) {
							this.updatePosition(e, this.y)
						}
					}, {
						key: "y",
						get: function () {
							return this.obj.position.y
						},
						set: function (e) {
							this.updatePosition(this.x, e)
						}
					}, {
						key: "a",
						get: function () {
							return this.obj.angle
						},
						set: function (e) {
							this.updateAngle(e)
						}
					}]), o
				}();
			(n.default = o).delta = 0, t.exports = n.default
		}, {
			"../cs/cs.js": 39,
			eases: 19,
			"matter-js": 33
		}],
		43: [function (e, t, n) {
			"use strict";

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e, t) {
				var n = document.createElement("canvas");
				n.width = t, n.height = t, n.size = t, n.halfSize = t / 2;
				var i = n.getContext("2d");
				return i.fillStyle = e, i
			}
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var o = function () {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function (e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				s = i(e("../cs/cs.js")),
				r = i(e("eases")),
				l = i(e("matter-js")),
				u = null,
				a = function () {
					function a(e, t, n) {
						(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, a), u = window.app, this.type = e, this.obj = "square" === e ? this.getSquare(t, n) : this.getTriangle(t, n), this.obj.label = e, this.obj.friction = u.config.friction, this.obj.sleepThreshold = 60, this.moving = !1, l.default.Body.applyForce(this.obj, {
							x: t,
							y: n
						}, {
							x: 0,
							y: .002 * Math.random()
						}), this.color = this.obj.render.fillStyle, this.vertices = [];
						for (var i = this.obj.vertices.length, o = 0; o < i; o++) {
							var r = this.obj.vertices[o];
							this.vertices[o] = {
								x: r.x,
								y: r.y
							}
						}
						this.view = new s.default.Sprite, this._img = "square" === e ? function (e, t) {
							if (f) return f;
							var n = c(e, t);
							return n.fillStyle = e, n.fillRect(0, 0, t, t), f = n.canvas
						}(this.color, 20) : function (e, t) {
							if (d) return d;
							var n = c(e, t);
							n.fillStyle = e, n.beginPath();
							for (var i = t / 2, o = 2 * Math.PI / 3, r = .5 * o, a = 0; a < 3; a += 1) {
								var s = r + a * o,
									l = Math.cos(s) * i + t / 2,
									u = Math.sin(s) * i + t / 2;
								0 === a ? n.moveTo(l, u) : n.lineTo(l, u)
							}
							return n.fill(), n.closePath(), d = n.canvas
						}(this.color, 30), this.mode = u.config.cacheShapeDraw ? "image" : "vertice", "image" === this.mode ? (this.view.x = t, this.view.y = n, this.view.draw = this.drawImage.bind(this)) : this.view.draw = this.drawVertices.bind(this), u.stage.add(this.view)
					}
					return o(a, [{
						key: "getSquare",
						value: function (e, t) {
							var n = l.default.Bodies.rectangle(e, t, 20, 20);
							return n.render.fillStyle = u.config.colorA, n.render.lineWidth = 0, n.render.strokeStyle = "rgba(0, 0, 0, 0)", l.default.Composite.add(u.root, n), n
						}
					}, {
						key: "getTriangle",
						value: function (e, t) {
							var n = l.default.Bodies.polygon(e, t, 3, 15);
							return n.render.fillStyle = u.config.colorB, n.render.lineWidth = 0, n.render.strokeStyle = "rgba(0, 0, 0, 0)", l.default.Composite.add(u.root, n), n
						}
					}, {
						key: "move",
						value: function (e, t, n) {
							this.moving = !0;
							var i = this;
							u.tweener.add(this).to({
								x: e
							}, .5, r.default.quadIn).then(function () {
								i.dismiss(), n && n(e, t)
							}), u.tweener.add(this).to({
								y: t
							}, .5, r.default.sinOut)
						}
					}, {
						key: "dismiss",
						value: function () {
							l.default.Composite.remove(u.root, this.obj), this.view.removeFromParent(), this.view.draw = null
						}
					}, {
						key: "updatePosition",
						value: function (e, t) {
							l.default.Body.setStatic(this.obj, !0), l.default.Body.translate(this.obj, {
								x: e - this.obj.position.x,
								y: t - this.obj.position.y
							})
						}
					}, {
						key: "drawImage",
						value: function (e) {
							var t = this.moving ? .9 : .4;
							this.view.x -= (this.view.x - this.obj.position.x) * t, this.view.y -= (this.view.y - this.obj.position.y) * t, this.view.rotation -= (this.view.rotation - this.obj.angle) * t, e.drawImage(this._img, -this._img.halfSize, -this._img.halfSize, this._img.size, this._img.size), this.updateScreenCoords()
						}
					}, {
						key: "drawVertices",
						value: function (e) {
							var t = this.moving ? .9 : .4;
							e.fillStyle = this.color, e.beginPath();
							for (var n = this.obj.vertices.length, i = 0; i < n; i++) {
								var o = this.obj.vertices[i],
									r = this.vertices[i];
								r.x -= (r.x - o.x) * t, r.y -= (r.y - o.y) * t, 0 === i ? e.moveTo(r.x, r.y) : e.lineTo(r.x, r.y)
							}
							e.fill(), e.closePath(), this.updateScreenCoords()
						}
					}, {
						key: "updateScreenCoords",
						value: function () {
							this.obj.torque = .007 * -this.obj.angularVelocity;
							var e = this.x,
								t = this.y;
							if (e < 0 || e > u.canvas.width || t > u.canvas.height)
								if (e = Math.random() * u.canvas.width, t = -Math.random() * u.canvas.height - 30, l.default.Body.translate(this.obj, {
										x: -this.obj.position.x + e,
										y: -this.obj.position.y + t
									}), "image" === this.mode) this.view.x = e, this.view.y = t;
								else
									for (var n = this.obj.vertices.length, i = 0; i < n; i++) {
										var o = this.obj.vertices[i];
										this.vertices[i] = {
											x: o.x,
											y: o.y
										}
									}
						}
					}, {
						key: "x",
						get: function () {
							return this.obj.position.x
						},
						set: function (e) {
							this.updatePosition(e, this.y)
						}
					}, {
						key: "y",
						get: function () {
							return this.obj.position.y
						},
						set: function (e) {
							this.updatePosition(this.x, e)
						}
					}]), a
				}();
			n.default = a;
			var d = null,
				f = null;
			t.exports = n.default
		}, {
			"../cs/cs.js": 39,
			eases: 19,
			"matter-js": 33
		}],
		44: [function (e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			n.default = {
				gravity: .5,
				friction: .05,
				maxShapes: 100,
				physicsFrameRate: 1,
				regroupForce: 1,
				autoResize: !0,
				cacheShapeDraw: !1,
				renderFrameSkip: !1,
				fixedDeltaTime: 1e3 / 60,
				preRender: !1,
				antialias: !0,
				bgcolor: "rgba(0, 0, 0, 0)",
				colorA: "#991A5A",
				colorB: "#FF247B",
				colorC: "#FFFFFF"
			}, t.exports = n.default
		}, {}],
		45: [function (e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.clamp = function (e, t, n) {
				return e < t ? t : n < e ? n : e
			}, n.distance = function (e, t) {
				var n = t.x - e.x,
					i = t.y - e.y;
				return Math.sqrt(n * n + i * i)
			}, n.sign = function (e) {
				return e < 0 ? -1 : 0 < e ? 1 : 0
			}
		}, {}],
		46: [function (e, t, n) {
			"use strict";

			function i(e) {
				e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
				return null !== t && (t = decodeURIComponent(t[1].replace(/\+/g, " "))), t
			}
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.getParam = i, n.updateWithParams = function (e) {
				for (var t in e) {
					var n = i(t);
					null !== n && (e[t] = n)
				}
			}, n.bodyEventFix = function () {
				document.body.addEvt || (document.body.addEvt = document.body.addEventListener, document.body.addEventListener = function (e, t, n) {
					e.match("mouse") || e.match("touch") || e.match("DOMMouse") || document.body.addEvt(e, t, n)
				})
			}, n.isMobile = function () {
				var e, t = !1;
				return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
			}, n.getTime = function () {
				return (new Date).getTime()
			}
		}, {}],
		47: [function (e, t, n) {
			"use strict";

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = i(e("./fullbundle/Application.js")),
				r = function (e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.default = e, t
				}(e("./fullbundle/utils.js")),
				a = i(e("./fullbundle/config"));
			window.positionImpulse = null, r.updateWithParams(a.default), window.app = new o.default, window.fbanim = window.app
		}, {
			"./fullbundle/Application.js": 41,
			"./fullbundle/config": 44,
			"./fullbundle/utils.js": 46
		}],
		48: [function (e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i = function () {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function (e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				o = function () {
					function t() {
						var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
						(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, t), this._ref = e, this._lastState = e, this._target = e, this._queue = [], this._length = 0, this._current = 0
					}
					return i(t, [{
						key: "_getParams",
						value: function () {
							var e = {
								tgt: arguments.length <= 0 || void 0 === arguments[0] ? this._target : arguments[0],
								dur: arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
								pos: 0,
								ez: arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
								fr: null,
								to: null,
								cb: null
							};
							return this._queue[this._length] = e, this._length += 1, e
						}
					}, {
						key: "_getProps",
						value: function (e, t) {
							var n = {};
							for (var i in t) n[i] = void 0 !== e[i] ? e[i] : this._target[i];
							return n
						}
					}, {
						key: "add",
						value: function (e) {
							return this._target = e, this._lastState = e, this
						}
					}, {
						key: "to",
						value: function (e, t, n) {
							var i = this._getParams(this._target, t, n);
							return i.fr = this._getProps(this._lastState, e), i.to = e, this._lastState = e, this
						}
					}, {
						key: "from",
						value: function (e, t, n) {
							var i = this._getParams(this._target, t, n);
							return i.fr = e, i.to = this._getProps(this._lastState, e), this
						}
					}, {
						key: "wait",
						value: function (e) {
							return this._getParams().dur = e, this
						}
					}, {
						key: "then",
						value: function (e) {
							var t = this._queue[this._length - 1];
							return t ? t.cb = e : e(), this
						}
					}, {
						key: "update",
						value: function (e) {
							var t = this._queue[this._current];
							if (!t) return !0;
							var n = 1,
								i = !1;
							if (t.pos += e, 0 < t.dur && t.pos < t.dur && (n = t.ez ? t.ez(t.pos / t.dur) : t.pos / t.dur), t.to && t.tgt)
								for (var o in t.to) {
									var r = t.fr[o],
										a = t.to[o];
									t.tgt[o] = r + (a - r) * n
								}
							return t.pos >= t.dur && (t.cb && t.cb(), this._current += 1, this._current >= this._length && (i = !0)), i
						}
					}]), t
				}();
			n.default = o, t.exports = n.default
		}, {}],
		49: [function (e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i, o = function () {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function (e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				r = e("./Tween"),
				a = (i = r) && i.__esModule ? i : {
					default: i
				},
				s = function () {
					function t() {
						var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
						(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, t), this.debug = !1, this.tweens = [], this._interval = null, this.setAutoUpdateRate(e)
					}
					return o(t, [{
						key: "dispose",
						value: function () {
							clearInterval(this._interval), this._interval = null, this.tweens = null
						}
					}, {
						key: "setAutoUpdateRate",
						value: function (e) {
							clearInterval(this._interval), this._interval = null, 0 < e && (this._time = this.getTime(), this._interval = setInterval(this._autoUpdate.bind(this), 1e3 * e))
						}
					}, {
						key: "_autoUpdate",
						value: function () {
							var e = this.getTime(),
								t = e - this._time;
							this._time = e, this.update(t)
						}
					}, {
						key: "add",
						value: function (e) {
							var t = new a.default(e);
							return this.tweens.push(t), t
						}
					}, {
						key: "remove",
						value: function (e) {
							for (var t = this.tweens.length; t--;) {
								this.tweens[t]._ref === e && this.tweens.splice(t, 1)
							}
						}
					}, {
						key: "update",
						value: function (e) {
							for (var t = this.tweens.length; t--;) {
								this.tweens[t].update(e) && this.tweens.splice(t, 1)
							}
						}
					}, {
						key: "getTime",
						value: function () {
							return (new Date).getTime() / 1e3
						}
					}]), t
				}();
			n.default = s, t.exports = n.default
		}, {
			"./Tween": 48
		}]
	}, {}, [47]);
var Fullbundle = {},
	localStorageFallback = {},
	sessionStorageFallback = {};
! function (s, e, r, a, l, u) {
	"use strict";
	e.behaviors.fullbundle = {
		attach: function (e) {
			var t = s(window),
				n = s("#page-wrapper").data("smoothState");
			void 0 !== n.internal && n.internal || document.referrer.match(/fullbundle\.com/i);
			if (s.fn.load = function (e) {
					s(window).on("load", e)
				}, s(document).foundation(), t.on("resize orientationchange", function () {
					u.screenSize()
				}).resize(), window.location.hash && smoothScroll.animateScroll(null, window.location.hash, {
					easing: "easeInOutQuad"
				}), smoothScroll.init({
					updateURL: !1
				}), r.objectfit || s(".node.node--type-project .screen-size .field--name-field-image").each(function () {
					var e = s(this),
						t = e.find("img"),
						n = t.attr("src") || t.attr("srcset");
					n && e.css("backgroundImage", "url(" + n + ")")
				}), svg4everybody(), s("[data-track]").once("track").each(function () {
					var t = s(this);
					t.on(t.attr("data-track"), function (e) {
						u.sendGAEvent("Track", u.capitalize(e.type), t.text())
					})
				}), s("#contact-message-contact-form").submit(function () {
					u.sendGAEvent("Form", "Submit", "Contact Form")
				}), void 0 !== l) {
				var i = s("#creativitylogic");
				l.config.autoResize = !1, matchMedia(a.media_queries.medium).matches || (l.config.physicsFrameRate = 2, l.config.maxShapes = 70, l.config.regroupForce = 0, l.config.renderFrameSkip = !1, l.config.preRender = !0), 0 < s("#homeanimation").length && l.init(s("#homeanimation")[0]), t.smartresize(function () {
					0 < s("#homeanimation").length && l.resize(i.outerWidth(), i.outerHeight())
				}), t.on("smoothStateStarted", function () {
					0 < s("#homeanimation").length && l.destroy()
				})
			}
			var o = 0;
			t.smartscroll(function () {
				var e = s(this).scrollTop(),
					t = e <= o || e <= 250;
				s("body").toggleClass("scrolling-up", t), u.resetScollingTimeout(t), o = e
			}), s(".page > header").on("click", function () {
				u.resetScollingTimeout(!1)
			}), 0 < s(".projects").length && s(".projects").slick({
				slide: "article",
				infinite: !1,
				adaptiveHeight: !0,
				prevArrow: s(".project-nav .previous a"),
				nextArrow: s(".project-nav .next a")
			}), u.dynamicBlockquoteBrandline(), t.smartresize(function () {
				u.dynamicBlockquoteBrandline()
			}), s("[data-toggle-slides]").on("click", function (e) {
				s(this).parents("[data-slides]").children().toggleClass("active")
			}), s(".readmore").on("click", function () {
				var e = s(this),
					t = e.prev(".more");
				t.hasClass("show") ? (t.removeClass("show"), e.text("More...")) : (t.addClass("show"), e.text("Less..."))
			})
		}
	}, localStorageFallback = {}, u.Local = "undefined" != typeof Storage ? {
		get: function (e) {
			try {
				return localStorage.getItem(e)
			} catch (e) {}
		},
		set: function (e, t) {
			try {
				localStorage.setItem(e, t)
			} catch (e) {}
		},
		remove: function (e) {
			try {
				localStorage.removeItem(e)
			} catch (e) {}
		}
	} : {
		get: function (e) {
			return localStorageFallback[e]
		},
		set: function (e, t) {
			localStorageFallback[e] = t
		},
		remove: function (e) {
			delete localStorageFallback[e]
		}
	}, sessionStorageFallback = {}, u.Session = "undefined" != typeof Storage ? {
		get: function (e) {
			try {
				return sessionStorage.getItem(e)
			} catch (e) {}
		},
		set: function (e, t) {
			try {
				sessionStorage.setItem(e, t)
			} catch (e) {}
		},
		remove: function (e) {
			try {
				sessionStorage.removeItem(e)
			} catch (e) {}
		}
	} : {
		get: function (e) {
			return sessionStorageFallback[e]
		},
		set: function (e, t) {
			sessionStorageFallback[e] = t
		},
		remove: function (e) {
			delete sessionStorageFallback[e]
		}
	}, u.sendGAEvent = function (e, t, n) {
		return "function" == typeof ga && (ga("send", {
			hitType: "event",
			eventCategory: e,
			eventAction: t,
			eventLabel: n,
			transport: "beacon"
		}), !0)
	}, u.renderedBlockquoteLineHeight = function () {
		var e = s("<blockquote>").css({
				width: "50px",
				position: "absolute",
				left: "-2000px",
				padding: "0px",
				margin: "0px"
			}).html("A<br />B<br />C<br />D<br />E<br />").appendTo("body"),
			t = e.height() / 5;
		return e.remove(), t
	}, u.dynamicBlockquoteBrandline = function () {
		var n = this.renderedBlockquoteLineHeight();
		s("blockquote.line").each(function () {
			var e = s(this),
				t = e.clone();
			t.css({
				position: "absolute",
				left: "-2000px",
				height: "auto",
				padding: "0px",
				margin: "0px",
				width: e.width() + "px"
			}).removeClass("line").insertAfter(e), s(this).attr("data-lines", Math.round(t.height() / n)), t.remove()
		})
	}, u.screenSize = function () {
		s(".screen-size").each(function () {
			var e = s(window),
				t = s(this),
				n = e.width() - parseInt(t.css("padding-left")) - parseInt(t.css("padding-right")),
				i = e.height() - parseInt(t.css("padding-top")) - parseInt(t.css("padding-bottom")),
				o = t.find("[data-minheight]"),
				r = o.outerHeight();
			"" === o.attr("data-minheight") && o.attr("data-minheight", r).css("height", "100%");
			var a = o.attr("data-minheight");
			t.width(n).height(i < a ? a : i), t.trigger("screenSizeComplete", [t.outerWidth(), t.outerHeight()])
		})
	}, u.setScollingTimeout = function () {
		u.scollingTimeout = setTimeout(function () {
			0 < s(window).scrollTop() && s("body").removeClass("scrolling-up")
		}, 5e3)
	}, u.resetScollingTimeout = function (e) {
		u.scollingTimeout && clearTimeout(u.scollingTimeout), e && this.setScollingTimeout()
	}, u.capitalize = function (e) {
		return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
	}, u.inViewport = function (e) {
		var t = e.outerHeight(),
			n = s(window).height(),
			i = e[0].getBoundingClientRect(),
			o = i.top,
			r = i.bottom;
		return Math.max(0, 0 < o ? Math.min(t, n - o) : r < n ? r : n)
	};
	var t = function (n, i, o) {
		var r;
		return function () {
			var e = this,
				t = arguments;
			r ? clearTimeout(r) : o && n.apply(e, t), r = setTimeout(function () {
				o || n.apply(e, t), r = null
			}, i || 50)
		}
	};
	jQuery.fn.smartresize = function (e) {
		return e ? this.bind("resize", t(e)) : this.trigger("smartresize")
	}, jQuery.fn.smartscroll = function (e) {
		return e ? this.bind("scroll", t(e, 20)) : this.trigger("smartscroll")
	}, s.extend(s.easing, {
		easeInOutCubic: function (e, t, n, i, o) {
			return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
		}
	})
}(jQuery, Drupal, Modernizr, Foundation, fbanim, Fullbundle);