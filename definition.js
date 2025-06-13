Blockly.Blocks["pcf8563_settime"] = {
  init: function () {
    this.jsonInit({
      colour: "#006600",
      tooltip: "",
      message0: "cài đặt RTC năm %1 %2 tháng %3 %4 ngày %5 %6 thứ %7 %8 giờ %9 %10 phút %11 %12 giây %13 %14",
      args0: [
        { type: "input_dummy" },
        {
          type: "input_value",
          name: "YEAR",
          check: "Number"
        },
        { type: "input_dummy" },
        {
          type: "input_value",
          name: "MONTH",
          check: "Number",
          min: 0,
          max: 12
        },
        { type: "input_dummy" },
        {
          type: "input_value",
          name: "DATE",
          check: "Number",
          min: 0,
          max: 31
        },
        { type: "input_dummy" },
        {
          type: "input_value",
          name: "DAY",
          check: "Number",
          min: 0,
          max: 31
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
  }
};

Blockly.Python["pcf8563_settime"] = function (block) {
  Blockly.Python.definitions_["import_pcf8563"] = "from pcf8563 import *";
  var year = Blockly.Python.valueToCode(block, 'YEAR', Blockly.Python.ORDER_ATOMIC);
  var month = Blockly.Python.valueToCode(block, 'MONTH', Blockly.Python.ORDER_ATOMIC);
  var date = Blockly.Python.valueToCode(block, 'DATE', Blockly.Python.ORDER_ATOMIC);
  var day = Blockly.Python.valueToCode(block, 'DAY', Blockly.Python.ORDER_ATOMIC);
  var hour = Blockly.Python.valueToCode(block, 'HOUR', Blockly.Python.ORDER_ATOMIC);
  var minute = Blockly.Python.valueToCode(block, 'MINUTE', Blockly.Python.ORDER_ATOMIC);
  var second = Blockly.Python.valueToCode(block, 'SECOND', Blockly.Python.ORDER_ATOMIC);
  
    // TODO: Assemble Python into code variable.
  var code = "pcf8563.set_datetime((" +
    year + ", " +
    month + ", " +
    date + ", " +
    day + ", " +
    hour + ", " +
    minute + ", " +
    second + "))\n";
  return code;
};

Blockly.Blocks["pcf8563_gettime"] = {
  init: function() {
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
            ["thứ", "THỨ"],
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

Blockly.Python["pcf8563_gettime"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_["import_pcf8563"] = "from pcf8563 import *";
  var code = "";
  if (dropdown_data == "NĂM")
    code = "pcf8563.datetime()[0]\n";
  else if (dropdown_data == "THÁNG")
    code = "pcf8563.datetime()[1]\n";
  else if (dropdown_data == "NGÀY")
    code = "pcf8563.datetime()[2]\n"; 
  else if (dropdown_data == "THỨ")
    code = "pcf8563.datetime()[3]\n"; 
  else if (dropdown_data == "ĐẦY ĐỦ")
    code = "''.join([str(x) for x in ['Thứ ', str(pcf8563.datetime()[3]), ' ', '{0:0>2}'.format(pcf8563.datetime()[2]), '/', '{0:0>2}'.format(pcf8563.datetime()[1]), '/', '{0:0>2}'.format(pcf8563.datetime()[0]), ' ', '{0:0>2}'.format(pcf8563.datetime()[4]), ':', '{0:0>2}'.format(pcf8563.datetime()[5]), ':', '{0:0>2}'.format(pcf8563.datetime()[6])]])"
  else if (dropdown_data == "GIỜ")
    code =  "pcf8563.datetime()[4]\n";
  else if (dropdown_data == "PHÚT")
    code = "pcf8563.datetime()[5]\n";
  else if (dropdown_data == "GIÂY")
    code = "pcf8563.datetime()[6]\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};