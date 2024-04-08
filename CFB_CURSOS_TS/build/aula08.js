"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["ter\u00E7a"] = 2] = "ter\u00E7a";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
const day = new Date();
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
    colors["gray"] = "#ccc";
    colors["red"] = "#f00";
    colors["green"] = "#0f0";
    colors["blue"] = "#00f";
})(colors || (colors = {}));
console.log(colors.white);
var typeUser;
(function (typeUser) {
    typeUser["ADMIN"] = "ADMIN";
    typeUser["USER"] = "USER";
    typeUser["SEO"] = "SEO";
})(typeUser || (typeUser = {}));
console.log(typeUser.USER);
