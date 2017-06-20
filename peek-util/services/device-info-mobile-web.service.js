"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var device_info_interface_1 = require("./device-info.interface");
var md5_1 = require("ts-md5/dist/md5");
var DeviceInfoMobileWebService = (function (_super) {
    __extends(DeviceInfoMobileWebService, _super);
    function DeviceInfoMobileWebService() {
        return _super.call(this) || this;
    }
    DeviceInfoMobileWebService.prototype.uuid = function () {
        // We don't need a real good way of getting the UUID, Peek just assigns it a token
        var browser = navigator.userAgent.substr(0, navigator.userAgent.indexOf(' '));
        return md5_1.Md5.hashStr(browser + " " + new Date().toString());
    };
    DeviceInfoMobileWebService.prototype.description = function () {
        return navigator.userAgent;
    };
    DeviceInfoMobileWebService.prototype.deviceType = function () {
        return device_info_interface_1.DeviceType.MOBILE_WEB;
    };
    return DeviceInfoMobileWebService;
}(device_info_interface_1.DeviceInfoService));
DeviceInfoMobileWebService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DeviceInfoMobileWebService);
exports.DeviceInfoMobileWebService = DeviceInfoMobileWebService;
//# sourceMappingURL=/home/peek/project/peek-util/peek-util/services/device-info-mobile-web.service.js.map