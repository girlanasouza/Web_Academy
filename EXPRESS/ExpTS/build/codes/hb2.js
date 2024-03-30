"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hb2 = void 0;
const hb2 = (req, res) => {
    res.render("hb2", {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework'
    });
};
exports.hb2 = hb2;
