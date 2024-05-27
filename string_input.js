// import usages from './usages.js';

const usages = {
    'source': {
        "0x00090001": { 'name': 'Left button', 'class': 'mouse' },
    },
    0: {
        "0x00090001": { 'name': 'CHANGED', 'class': 'mouse' },
    },
    2: {
        "0x00090001": { 'name': 'Y', 'class': 'mouse' },
    },
    3: {
        "0x00090001": { 'name': 'Square', 'class': 'mouse' },
    },
    4: {
        "0x00090001": { 'name': 'Left stick X', 'class': 'mouse' },
    },
};

const common_target_usages = {
    "0x00000000": { 'name': 'Nothing', 'class': 'other' },
    "0xfff10001": { 'name': 'Layer 1', 'class': 'other' },
    "0xfff10002": { 'name': 'Layer 2', 'class': 'other' },
    "0xfff10003": { 'name': 'Layer 3', 'class': 'other' },
    "0xfff10004": { 'name': 'Layer 4', 'class': 'other' },
    "0xfff10005": { 'name': 'Layer 5', 'class': 'other' },
    "0xfff10006": { 'name': 'Layer 6', 'class': 'other' },
    "0xfff10007": { 'name': 'Layer 7', 'class': 'other' },
    "0xfff20001": { 'name': 'Macro 1', 'class': 'other' },
    "0xfff20002": { 'name': 'Macro 2', 'class': 'other' },
    "0xfff20003": { 'name': 'Macro 3', 'class': 'other' },
    "0xfff20004": { 'name': 'Macro 4', 'class': 'other' },
    "0xfff20005": { 'name': 'Macro 5', 'class': 'other' },
    "0xfff20006": { 'name': 'Macro 6', 'class': 'other' },
    "0xfff20007": { 'name': 'Macro 7', 'class': 'other' },
    "0xfff20008": { 'name': 'Macro 8', 'class': 'other' },
    "0xfff20009": { 'name': 'Macro 9', 'class': 'other' },
    "0xfff2000a": { 'name': 'Macro 10', 'class': 'other' },
    "0xfff2000b": { 'name': 'Macro 11', 'class': 'other' },
    "0xfff2000c": { 'name': 'Macro 12', 'class': 'other' },
    "0xfff2000d": { 'name': 'Macro 13', 'class': 'other' },
    "0xfff2000e": { 'name': 'Macro 14', 'class': 'other' },
    "0xfff2000f": { 'name': 'Macro 15', 'class': 'other' },
    "0xfff20010": { 'name': 'Macro 16', 'class': 'other' },
    "0xfff20011": { 'name': 'Macro 17', 'class': 'other' },
    "0xfff20012": { 'name': 'Macro 18', 'class': 'other' },
    "0xfff20013": { 'name': 'Macro 19', 'class': 'other' },
    "0xfff20014": { 'name': 'Macro 20', 'class': 'other' },
    "0xfff20015": { 'name': 'Macro 21', 'class': 'other' },
    "0xfff20016": { 'name': 'Macro 22', 'class': 'other' },
    "0xfff20017": { 'name': 'Macro 23', 'class': 'other' },
    "0xfff20018": { 'name': 'Macro 24', 'class': 'other' },
    "0xfff20019": { 'name': 'Macro 25', 'class': 'other' },
    "0xfff2001a": { 'name': 'Macro 26', 'class': 'other' },
    "0xfff2001b": { 'name': 'Macro 27', 'class': 'other' },
    "0xfff2001c": { 'name': 'Macro 28', 'class': 'other' },
    "0xfff2001d": { 'name': 'Macro 29', 'class': 'other' },
    "0xfff2001e": { 'name': 'Macro 30', 'class': 'other' },
    "0xfff2001f": { 'name': 'Macro 31', 'class': 'other' },
    "0xfff20020": { 'name': 'Macro 32', 'class': 'other' },
    "0xfff40000": { 'name': 'GPIO 0', 'class': 'other' },
    "0xfff40001": { 'name': 'GPIO 1', 'class': 'other' },
    "0xfff40002": { 'name': 'GPIO 2', 'class': 'other' },
    "0xfff40003": { 'name': 'GPIO 3', 'class': 'other' },
    "0xfff40004": { 'name': 'GPIO 4', 'class': 'other' },
    "0xfff40005": { 'name': 'GPIO 5', 'class': 'other' },
    "0xfff40006": { 'name': 'GPIO 6', 'class': 'other' },
    "0xfff40007": { 'name': 'GPIO 7', 'class': 'other' },
    "0xfff40008": { 'name': 'GPIO 8', 'class': 'other' },
    "0xfff40009": { 'name': 'GPIO 9', 'class': 'other' },
    "0xfff4000a": { 'name': 'GPIO 10', 'class': 'other' },
    "0xfff4000b": { 'name': 'GPIO 11', 'class': 'other' },
    "0xfff4000c": { 'name': 'GPIO 12', 'class': 'other' },
    "0xfff4000d": { 'name': 'GPIO 13', 'class': 'other' },
    "0xfff4000e": { 'name': 'GPIO 14', 'class': 'other' },
    "0xfff4000f": { 'name': 'GPIO 15', 'class': 'other' },
    "0xfff40010": { 'name': 'GPIO 16', 'class': 'other' },
    "0xfff40011": { 'name': 'GPIO 17', 'class': 'other' },
    "0xfff40012": { 'name': 'GPIO 18', 'class': 'other' },
    "0xfff40013": { 'name': 'GPIO 19', 'class': 'other' },
    "0xfff40014": { 'name': 'GPIO 20', 'class': 'other' },
    "0xfff40015": { 'name': 'GPIO 21', 'class': 'other' },
    "0xfff40016": { 'name': 'GPIO 22', 'class': 'other' },
    "0xfff40017": { 'name': 'GPIO 23', 'class': 'other' },
    "0xfff40018": { 'name': 'GPIO 24', 'class': 'other' },
    "0xfff40019": { 'name': 'GPIO 25', 'class': 'other' },
    "0xfff4001a": { 'name': 'GPIO 26', 'class': 'other' },
    "0xfff4001b": { 'name': 'GPIO 27', 'class': 'other' },
    "0xfff4001c": { 'name': 'GPIO 28', 'class': 'other' },
    "0xfff4001d": { 'name': 'GPIO 29', 'class': 'other' },
    "0xfff60000": { 'name': 'Analog 0', 'class': 'other' },
    "0xfff60001": { 'name': 'Analog 1', 'class': 'other' },
    "0xfff60002": { 'name': 'Analog 2', 'class': 'other' },
    "0xfff60003": { 'name': 'Analog 3', 'class': 'other' },
    "0xfff60004": { 'name': 'Analog 4', 'class': 'other' },
    "0xfff60005": { 'name': 'Analog 5', 'class': 'other' },
}

const usages_by_function = {
'Left button': '0x00090001',
 'Right button': '0x00090002',
 'Middle button': '0x00090003',
 'Back': '0x00090004',
 'Forward': '0x00090005',
 'Button 6': '0x00090006',
 'Button 7': '0x00090007',
 'Button 8': '0x00090008',
 'Cursor X': '0x00010030',
 'Cursor Y': '0x00010031',
 'V scroll': '0x00010038',
 'H scroll': '0x000c0238',
 'Left Control': '0x000700e0',
 'Left Shift': '0x000700e1',
 'Left Alt': '0x000700e2',
 'Left GUI': '0x000700e3',
 'Right Control': '0x000700e4',
 'Right Shift': '0x000700e5',
 'Right Alt': '0x000700e6',
 'Right GUI': '0x000700e7',
 'A': '0x00070004',
 'B': '0x00070005',
 'C': '0x00070006',
 'D': '0x00070007',
 'E': '0x00070008',
 'F': '0x00070009',
 'G': '0x0007000a',
 'H': '0x0007000b',
 'I': '0x0007000c',
 'J': '0x0007000d',
 'K': '0x0007000e',
 'L': '0x0007000f',
 'M': '0x00070010',
 'N': '0x00070011',
 'O': '0x00070012',
 'P': '0x00070013',
 'Q': '0x00070014',
 'R': '0x00070015',
 'S': '0x00070016',
 'T': '0x00070017',
 'U': '0x00070018',
 'V': '0x00070019',
 'W': '0x0007001a',
 'X': '0x0007001b',
 'Y': '0x0007001c',
 'Z': '0x0007001d',
 '1': '0x0007001e',
 '2': '0x0007001f',
 '3': '0x00070020',
 '4': '0x00070021',
 '5': '0x00070022',
 '6': '0x00070023',
 '7': '0x00070024',
 '8': '0x00070025',
 '9': '0x00070026',
 '0': '0x00070027',
 'Enter': '0x00070028',
 'Escape': '0x00070029',
 'Backspace': '0x0007002a',
 'Tab': '0x0007002b',
 'Space': '0x0007002c',
 'Caps Lock': '0x00070039',
 'PrintScreen': '0x00070046',
 'Scroll Lock': '0x00070047',
 'Pause': '0x00070048',
 'Insert': '0x00070049',
 'Home': '0x0007004a',
 'PageUp': '0x0007004b',
 'Delete': '0x0007004c',
 'End': '0x0007004d',
 'PageDown': '0x0007004e',
 'Right arrow': '0x0007004f',
 'Left arrow': '0x00070050',
 'Down arrow': '0x00070051',
 'Up arrow': '0x00070052',
 'Num Lock': '0x00070053',
 '- _': '0x0007002d',
 '= +': '0x0007002e',
 '[ {': '0x0007002f',
 '] }': '0x00070030',
 '\\ |': '0x00070031',
 '; :': '0x00070033',
 '‘ “': '0x00070034',
 '` ~': '0x00070035',
 ', <': '0x00070036',
 '. >': '0x00070037',
 '/ ?': '0x00070038',
 'F1': '0x0007003a',
 'F2': '0x0007003b',
 'F3': '0x0007003c',
 'F4': '0x0007003d',
 'F5': '0x0007003e',
 'F6': '0x0007003f',
 'F7': '0x00070040',
 'F8': '0x00070041',
 'F9': '0x00070042',
 'F10': '0x00070043',
 'F11': '0x00070044',
 'F12': '0x00070045',
 'F13': '0x00070068',
 'F14': '0x00070069',
 'F15': '0x0007006a',
 'F16': '0x0007006b',
 'F17': '0x0007006c',
 'F18': '0x0007006d',
 'F19': '0x0007006e',
 'F20': '0x0007006f',
 'F21': '0x00070070',
 'F22': '0x00070071',
 'F23': '0x00070072',
 'F24': '0x00070073',
 'Keypad /': '0x00070054',
 'Keypad *': '0x00070055',
 'Keypad -': '0x00070056',
 'Keypad +': '0x00070057',
 'Keypad Enter': '0x00070058',
 'Keypad 1': '0x00070059',
 'Keypad 2': '0x0007005a',
 'Keypad 3': '0x0007005b',
 'Keypad 4': '0x0007005c',
 'Keypad 5': '0x0007005d',
 'Keypad 6': '0x0007005e',
 'Keypad 7': '0x0007005f',
 'Keypad 8': '0x00070060',
 'Keypad 9': '0x00070061',
 'Keypad 0': '0x00070062',
 'Keypad .': '0x00070063',
 'Keypad =': '0x00070067',
 'Non-US \\ |': '0x00070064',
 'Non-US # ~': '0x00070032',
 'Application': '0x00070065',
 'Power': '0x00070066',
 '\\ _': '0x00070087',
 '¥ |': '0x00070089',
 'Henkan': '0x0007008a',
 'Muhenkan': '0x0007008b',
 'Kana': '0x00070088',
 'Kana (Mac)': '0x00070090',
 'Eisū (Mac)': '0x00070091',
 'Num Lock LED': '0x00080001',
 'Caps Lock LED': '0x00080002',
 'Scroll Lock LED': '0x00080003',
 'Compose LED': '0x00080004',
 'Kana LED': '0x00080005',
 'Volume up': '0x000c00e9',
 'Volume down': '0x000c00ea',
 'Mute': '0x000c00e2',
 'Mic mute': '0x000b002f',
 'Play/pause': '0x000c00cd',
 'Stop': '0x000c00b7',
 'Next track': '0x000c00b5',
 'Previous track': '0x000c00b6',
 'Nothing': '0x00000000',
 'Expression 1': '0xfff30001',
 'Expression 2': '0xfff30002',
 'Expression 3': '0xfff30003',
 'Expression 4': '0xfff30004',
 'Expression 5': '0xfff30005',
 'Expression 6': '0xfff30006',
 'Expression 7': '0xfff30007',
 'Expression 8': '0xfff30008',
 'Register 1': '0xfff50001',
 'Register 2': '0xfff50002',
 'Register 3': '0xfff50003',
 'Register 4': '0xfff50004',
 'Register 5': '0xfff50005',
 'Register 6': '0xfff50006',
 'Register 7': '0xfff50007',
 'Register 8': '0xfff50008',
 'Register 9': '0xfff50009',
 'Register 10': '0xfff5000a',
 'Register 11': '0xfff5000b',
 'Register 12': '0xfff5000c',
 'Register 13': '0xfff5000d',
 'Register 14': '0xfff5000e',
 'Register 15': '0xfff5000f',
 'Register 16': '0xfff50010',
 'Register 17': '0xfff50011',
 'Register 18': '0xfff50012',
 'Register 19': '0xfff50013',
 'Register 20': '0xfff50014',
 'Register 21': '0xfff50015',
 'Register 22': '0xfff50016',
 'Register 23': '0xfff50017',
 'Register 24': '0xfff50018',
 'Register 25': '0xfff50019',
 'Register 26': '0xfff5001a',
 'Register 27': '0xfff5001b',
 'Register 28': '0xfff5001c',
 'Register 29': '0xfff5001d',
 'Register 30': '0xfff5001e',
 'Register 31': '0xfff5001f',
 'Register 32': '0xfff50020',
 'GPIO 0': '0xfff40000',
 'GPIO 1': '0xfff40001',
 'GPIO 2': '0xfff40002',
 'GPIO 3': '0xfff40003',
 'GPIO 4': '0xfff40004',
 'GPIO 5': '0xfff40005',
 'GPIO 6': '0xfff40006',
 'GPIO 7': '0xfff40007',
 'GPIO 8': '0xfff40008',
 'GPIO 9': '0xfff40009',
 'GPIO 10': '0xfff4000a',
 'GPIO 11': '0xfff4000b',
 'GPIO 12': '0xfff4000c',
 'GPIO 13': '0xfff4000d',
 'GPIO 14': '0xfff4000e',
 'GPIO 15': '0xfff4000f',
 'GPIO 16': '0xfff40010',
 'GPIO 17': '0xfff40011',
 'GPIO 18': '0xfff40012',
 'GPIO 19': '0xfff40013',
 'GPIO 20': '0xfff40014',
 'GPIO 21': '0xfff40015',
 'GPIO 22': '0xfff40016',
 'GPIO 23': '0xfff40017',
 'GPIO 24': '0xfff40018',
 'GPIO 25': '0xfff40019',
 'GPIO 26': '0xfff4001a',
 'GPIO 27': '0xfff4001b',
 'GPIO 28': '0xfff4001c',
 'GPIO 29': '0xfff4001d'
 }

var input_string = 'Hello World Lennon'
var usages_array = []

// let repeats_string = input_string.replace(new RegExp("(.)\1"), '$&' +
// "+");
// /(.{5})/g
// str.match(/.{5}/g).join('@')
let repeats_string = input_string.replace(/(.)\1/g, "$1+$1")
// console.log(repeats_string)
let end_string = repeats_string.replace(/([A-Z])/g, "_" + '$&')
// console.log(end_string)
let caps_string = end_string.toUpperCase();
// console.log(caps_string)
let starting_array = caps_string.split('');
// console.log('starting_array: ');
// console.log(starting_array);

for (let i = 0; i < starting_array.length; i++){
  let item = starting_array[i]
  // console.log(item);
  if (item == "_") {
    starting_array[i] = 'Left Shift'
  }
  else if (item == '+') {
    starting_array[i] = 'Nothing'
  }
  else if (item == ' ') {
    starting_array[i] = 'Space'
  }
}
// console.log(starting_array);
// console.log(starting_array.length)

for (let i = 0; i < starting_array.length; i++){
  let c = usages_by_function[starting_array[i]];
  // console.log(c);
  usages_array[i] = (c)
}

// console.log(usages_array);
// console.log(usages_array.length)

result_array = []
temp_array = []

for (let i = 0; i < usages_array.length; i++){
  let c = usages_array[i]
  // console.log(c)
  if (c == '0x000700e1') {  // Left Shift
    temp_array.push(c)
  }
  else {
    temp_array.push(c)
    result_array.push([...temp_array])
    temp_array.length = 0
  }
}

console.log(result_array)

import data from './base JSON.js'
console.log(data)
