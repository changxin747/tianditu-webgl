var _DomUtil = L.DomUtil;
var _Util = L.Util;
var _Browser = L.Browser;

T.DomUtil = {
    setPosition: _DomUtil.setPosition,
    create: _DomUtil.create,
    testProp: _DomUtil.testProp,
    addClass: _DomUtil.addClass
};

T.Util = {
    stamp: _Util.stamp
};

T.Browser = {
    any3d: _Browser.any3d
};

window.rbush = rbush;

layerFactory(T);
