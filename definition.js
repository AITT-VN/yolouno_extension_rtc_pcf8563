
Blockly.Blocks["pcf8563_settime"] = {
  init: function () {
    this.jsonInit({
      colour: "#006600",
      tooltip: "",
<<<<<<< HEAD
      message0: "cài đặt RTC ngày %1 %2 tháng %3 %4 năm %5 %6 giờ %7 %8 phút %9 %10 giây %11 %12",
=======
      message0: "cài đặt RTC năm %1 %2 tháng %3 %4 ngày %5 %6 giờ %7 %8 phút %9 %10 giây %11 %12",
>>>>>>> fd2942013c44a32b509fa1e041c37b1ae82aac3b
      args0: [
        { type: "input_dummy" },
        {
          type: "input_value",
<<<<<<< HEAD
          name: "DATE",
          check: "Number",
          min: 1,
          max: 31
=======
          name: "YEAR",
          check: "Number"
>>>>>>> fd2942013c44a32b509fa1e041c37b1ae82aac3b
        },
        { type: "input_dummy" },
        {
          type: "input_value",
          name: "MONTH",
          check: "Number",
<<<<<<< HEAD
          min: 1,
=======
          min: 0,
>>>>>>> fd2942013c44a32b509fa1e041c37b1ae82aac3b
          max: 12
        },
        { type: "input_dummy" },
        {
          type: "input_value",
<<<<<<< HEAD
          name: "YEAR",
          check: "Number"
=======
          name: "DATE",
          check: "Number",
          min: 0,
          max: 31
>>>>>>> fd2942013c44a32b509fa1e041c37b1ae82aac3b
        },
        { type: "input_dummy" },
        {
          type: "input_value",
          name: "HOUR",
          check: "Number",
          min: 0,
          max: 24
        },
        { type: "input_dummy" },
        {
          type: "input_value",
          name: "MINUTE",
          check: "Number",
          min: 0,
          max: 60
        },
        { type: "input_dummy" },
        {
          type: "input_value",
          name: "SECOND",
          check: "Number",
          min: 0,
          max: 60
        },
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
<<<<<<< HEAD
  getDeveloperVars: function () {
=======
  getDeveloperVars: function() {
>>>>>>> fd2942013c44a32b509fa1e041c37b1ae82aac3b
    return ['pcf8563'];
  }
};

Blockly.Python["pcf8563_settime"] = function (block) {
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
<<<<<<< HEAD
  Blockly.Python.definitions_["import_pcf8563"] = "from pcf8563 import PCF8563";
=======
  Blockly.Python.definitions_["import_ds1307"] = "from pcf8563 import PCF8563";
>>>>>>> fd2942013c44a32b509fa1e041c37b1ae82aac3b
  Blockly.Python.definitions_["import_create_ds1307"] = "pcf8563 = PCF8563(SoftI2C(scl=SCL_PIN, sda=SDA_PIN))";
  var year = Blockly.Python.valueToCode(block, 'YEAR', Blockly.Python.ORDER_ATOMIC);
  var month = Blockly.Python.valueToCode(block, 'MONTH', Blockly.Python.ORDER_ATOMIC);
  var date = Blockly.Python.valueToCode(block, 'DATE', Blockly.Python.ORDER_ATOMIC);
  var hour = Blockly.Python.valueToCode(block, 'HOUR', Blockly.Python.ORDER_ATOMIC);
  var minute = Blockly.Python.valueToCode(block, 'MINUTE', Blockly.Python.ORDER_ATOMIC);
  var second = Blockly.Python.valueToCode(block, 'SECOND', Blockly.Python.ORDER_ATOMIC);
<<<<<<< HEAD

  // TODO: Assemble Python into code variable.
=======
  
    // TODO: Assemble Python into code variable.
>>>>>>> fd2942013c44a32b509fa1e041c37b1ae82aac3b
  var code = "now = (" + year + "," + month + "," + date + "," + "1" + "," + hour + "," + minute + "," + second + ")\n" + "pcf8563.set_datetime(now)\n";
  return code;
};

Blockly.Blocks["pcf8563_gettime"] = {
<<<<<<< HEAD
  init: function () {
=======
  init: function() {
>>>>>>> fd2942013c44a32b509fa1e041c37b1ae82aac3b
    this.jsonInit({
      message0: " đọc giá trị %1 từ RTC",
      args0: [
        {
          type: "field_dropdown",
          name: "DATA",
          options: [
            ["năm", "NĂM"],
            ["tháng", "THÁNG"],
            ["ngày", "NGÀY"],
            ["giờ", "GIỜ"],
            ["phút", "PHÚT"],
            ["giây", "GIÂY"],
            ["đầy đủ", "ĐẦY ĐỦ"]
          ]
        }
      ],
      output: null,
      colour: "#006600"
    });
  }
};

<<<<<<< HEAD
Blockly.Python["pcf8563_gettime"] = function (block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_pcf8563"] = "from pcf8563 import PCF8563";
=======
Blockly.Python["pcf8563_gettime"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_ds1307"] = "from pcf8563 import PCF8563";
>>>>>>> fd2942013c44a32b509fa1e041c37b1ae82aac3b
  Blockly.Python.definitions_["import_create_ds1307"] = "pcf8563 = PCF8563(SoftI2C(scl=SCL_PIN, sda=SDA_PIN))";
  var code = "";
  if (dropdown_data == "NĂM")
    code = "pcf8563.year()\n";
  else if (dropdown_data == "THÁNG")
    code = "pcf8563.month()\n";
  else if (dropdown_data == "NGÀY")
<<<<<<< HEAD
    code = "pcf8563.date()\n";
  else if (dropdown_data == "ĐẦY ĐỦ")
    code = "''.join([str(x) for x in ['{0:0>2}'.format(pcf8563.date()), '/', '{0:0>2}'.format(pcf8563.month()), '/', '{0:0>2}'.format(pcf8563.year()), ' ', '{0:0>2}'.format(pcf8563.hours()), ':', '{0:0>2}'.format(pcf8563.minutes()), ':', '{0:0>2}'.format(pcf8563.seconds())]])";
  else if (dropdown_data == "GIỜ")
    code = "pcf8563.hours()\n";
=======
    code = "pcf8563.date()\n"; 
  else if (dropdown_data == "ĐẦY ĐỦ")
    code = "''.join([str(x) for x in ['{0:0>2}'.format(pcf8563.date()), '/', '{0:0>2}'.format(pcf8563.month()), '/', '{0:0>2}'.format(pcf8563.year()), ' ', '{0:0>2}'.format(pcf8563.hours()), ':', '{0:0>2}'.format(pcf8563.minutes()), ':', '{0:0>2}'.format(pcf8563.seconds())]])";
  else if (dropdown_data == "GIỜ")
    code =  "pcf8563.hours()\n";
>>>>>>> fd2942013c44a32b509fa1e041c37b1ae82aac3b
  else if (dropdown_data == "PHÚT")
    code = "pcf8563.minutes()\n";
  else if (dropdown_data == "GIÂY")
    code = "pcf8563.seconds()\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
