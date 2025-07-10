"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
//Menu List
var menu = {
    "burger": { price: 5 },
    "pizza": { price: 8 },
    "salad": { price: 4 },
    "pasta": { price: 7 },
    "soda": { price: 2 },
};
//Show menu
console.log("Menu:");
var index = 1;
for (var item in menu) {
    console.log("".concat(index, ". ").concat(item, ": Price:").concat(menu[item].price));
    index++;
}
//Get input form user using interface
var readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//call function for input=>promise
var ask = function (question) {
    return new Promise(function (resolve) { return readLine.question(question, resolve); });
};
//Prepared item
var prepareItem = function (item, price) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("".concat(item, " is ready"));
        });
    });
};
//main function 
var mainProcess = function () { return __awaiter(void 0, void 0, void 0, function () {
    var orders, diffItems, _a, i, item, quantity, _i, orders_1, order, orderPrice, orderItem, total, _b, orders_2, order, price, totalTaka, discount, finalAmount;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                orders = [];
                _c.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                _a = parseInt;
                return [4 /*yield*/, ask("How many different item you want order:")];
            case 2:
                diffItems = _a.apply(void 0, [_c.sent()]);
                if (diffItems < 1) {
                    console.log("Enter a valid number.Please try again.");
                }
                else {
                    return [3 /*break*/, 3];
                }
                return [3 /*break*/, 1];
            case 3:
                i = 1;
                _c.label = 4;
            case 4:
                if (!(i <= diffItems)) return [3 /*break*/, 8];
                return [4 /*yield*/, ask("Enter the item name: ".concat(i, "."))];
            case 5:
                item = _c.sent();
                if (!menu[item]) {
                    console.log("This item is not present in menu.Please try again!");
                    i--;
                    return [3 /*break*/, 7];
                }
                return [4 /*yield*/, ask("Your item order is: ".concat(item, " and quantity of ").concat(item, ":"))];
            case 6:
                quantity = _c.sent();
                if (quantity < 1) {
                    console.log("Invalid quantity.Please try again.");
                    i--;
                    return [3 /*break*/, 7];
                }
                orders.push({ item: item, quantity: quantity });
                _c.label = 7;
            case 7:
                i++;
                return [3 /*break*/, 4];
            case 8:
                readLine.close();
                //Order process
                console.log("\nYours order are preparing...");
                _i = 0, orders_1 = orders;
                _c.label = 9;
            case 9:
                if (!(_i < orders_1.length)) return [3 /*break*/, 12];
                order = orders_1[_i];
                orderPrice = order.quantity * 500;
                return [4 /*yield*/, prepareItem(order.item, orderPrice)];
            case 10:
                orderItem = _c.sent();
                console.log("".concat(orderItem, " and quantity:").concat(order.quantity));
                _c.label = 11;
            case 11:
                _i++;
                return [3 /*break*/, 9];
            case 12:
                total = 0;
                console.log("\nOrder Summary:");
                for (_b = 0, orders_2 = orders; _b < orders_2.length; _b++) {
                    order = orders_2[_b];
                    price = menu[order.item].price;
                    totalTaka = price * order.quantity;
                    total += totalTaka;
                    console.log("".concat(order.item, ":").concat(price, "Tk x").concat(order.quantity, "=").concat(totalTaka, "Tk"));
                }
                discount = 0;
                if (total > 20) {
                    discount = total * 0.1;
                    console.log("You get 10% discount.");
                }
                else {
                    console.log("You not get any discount.");
                }
                finalAmount = 0;
                finalAmount = total - discount;
                console.log("Final amount after discount:".concat(finalAmount.toFixed(2), "tk"));
                return [2 /*return*/];
        }
    });
}); };
mainProcess();
