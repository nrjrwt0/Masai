var price_item1 = 80;
var price_item2 = 140;

var quant_item1 = 6;
var quant_item2 = 3;

var tax_percent = 5;
var discount_percent = 8;
var tip = 50;

var total_bill_amount =
  (price_item1 * quant_item1 + price_item2 * quant_item2) *
    ((100 - discount_percent) / 100) *
    ((100 + tax_percent) / 100) +
  tip;

console.log("Total bill amount = " + total_bill_amount);
