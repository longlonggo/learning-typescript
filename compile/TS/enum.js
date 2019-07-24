"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 0] = "female";
    Gender[Gender["unknow"] = -1] = "unknow";
})(Gender || (Gender = {}));
var gender = Gender.male;
var obj = {
    gender: Gender.female
};
