
import {setPosition,create,testProp,addClass} from "leaflet/src/dom/DomUtil"
import {stamp} from "leaflet/src/core/Util"
import {any3d} from "leaflet/src/core/Browser"
import {layerFactory} from "./canvasIconLayer"
import {rbush} from "rbush"

T.DomUtil = {
    setPosition:setPosition,
    create:create,
    testProp:testProp,
    addClass:addClass
};

T.Util = {
    stamp:stamp
}

T.Browser = {
    any3d:any3d
}

var rbush = require("rbush");
window.rbush = rbush;

layerFactory(T);