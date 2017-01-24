/*
 * jQuery formatDateTime Plugin
 *
 * Copyright 2012 Adam Gschwender
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function($) {

    var defaults = {
        monthNames: ['January','February','March','April','May','June',
                     'July','August','September','October','November',
                     'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                          'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                   'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ampmNames: ['AM', 'PM'],
        attribute: 'data-datetime'
    };

    var ticksTo1970 = (((1970 - 1) * 365 + Math.floor(1970 / 4)
                        - Math.floor(1970 / 100)
                        + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000);

    var formatDateTime = function(format, date, settings) {
        var output = '';
        var literal = false;
        var iFormat = 0;

        // Check whether a format character is doubled
        var lookAhead = function(match) {
            var matches = (iFormat + 1 < format.length
                           && format.charAt(iFormat + 1) == match);
            if (matches) {
                iFormat++;
            }
            return matches;
        };

        // Format a number, with leading zero if necessary
        var formatNumber = function(match, value, len) {
            var num = '' + value;
            if (lookAhead(match)) {
                while (num.length < len) {
                    num = '0' + num;
                }
            }
            return num;
        };

        // Format a name, short or long as requested
        var formatName = function(match, value, shortNames, longNames) {
            return (lookAhead(match) ? longNames[value] : shortNames[value]);
        };

        for (iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
                if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                    literal = false;
                }
                else {
                    output += format.charAt(iFormat);
                }
            } else {
                switch (format.charAt(iFormat)) {
                case 'a':
                    output += date.getHours() < 12
                        ? settings.ampmNames[0]
                        : settings.ampmNames[1];
                    break;
                case 'd':
                    output += formatNumber('d', date.getDate(), 2);
                    break;
                case 'D':
                    output += formatName('D',
                                         date.getDay(),
                                         settings.dayNamesShort,
                                         settings.dayNames);
                    break;
                case 'o':
                    var end = new Date(date.getFullYear(),
                                       date.getMonth(),
                                       date.getDate()).getTime();
                    var start = new Date(date.getFullYear(), 0, 0).getTime();
                    output += formatNumber(
                        'o', Math.round((end - start) / 86400000), 3);
                    break;
                case 'g':
                    var hour = date.getHours() % 12;
                    output += formatNumber('g', (hour === 0 ? 12 : hour), 2);
                    break;
                case 'h':
                    output += formatNumber('h', date.getHours(), 2);
                    break;
                case 'u':
                    output += formatNumber('u', date.getMilliseconds(), 3);
                    break;
                case 'i':
                    output += formatNumber('i', date.getMinutes(), 2);
                    break;
                case 'm':
                    output += formatNumber('m', date.getMonth() + 1, 2);
                    break;
                case 'M':
                    output += formatName('M',
                                         date.getMonth(),
                                         settings.monthNamesShort,
                                         settings.monthNames);
                    break;
                case 's':
                    output += formatNumber('s', date.getSeconds(), 2);
                    break;
                case 'y':
                    output += (lookAhead('y')
                               ? date.getFullYear()
                               : (date.getYear() % 100 < 10 ? '0' : '')
                               + date.getYear() % 100);
                    break;
                case '@':
                    output += date.getTime();
                    break;
                case '!':
                    output += date.getTime() * 10000 + ticksTo1970;
                    break;
                case "'":
                    if (lookAhead("'")) {
                        output += "'";
                    } else {
                        literal = true;
                    }
                    break;
                default:
                    output += format.charAt(iFormat);
                }
            }
        }
        return output;
    };

    $.fn.formatDateTime = function(format, settings) {
        settings = $.extend({}, defaults, settings);
        var date = $(this).attr(settings.attribute);

        if (typeof date === 'undefined' || date === false) {
            date = $(this).text();
        }

        if (date === '') {
            $(this).text('');
        } else {
            $(this).text(formatDateTime(format, new Date(date), settings));
        }

        return this;
    };

    /**
       Format a date object into a string value.
       The format can be combinations of the following:
       a - Ante meridiem and post meridiem
       d  - day of month (no leading zero)
       dd - day of month (two digit)
       o  - day of year (no leading zeros)
       oo - day of year (three digit)
       D  - day name short
       DD - day name long
       g  - 12-hour hour format of day (no leading zero)
       gg - 12-hour hour format of day (two digit)
       h  - 24-hour hour format of day (no leading zero)
       hh - 24-hour hour format of day (two digit)
       u  - millisecond of second (no leading zeros)
       uu - millisecond of second (three digit)
       i  - minute of hour (no leading zero)
       ii - minute of hour (two digit)
       m  - month of year (no leading zero)
       mm - month of year (two digit)
       M  - month name short
       MM - month name long
       s  - second of minute (no leading zero)
       ss - second of minute (two digit)
       y  - year (two digit)
       yy - year (four digit)
       @  - Unix timestamp (ms since 01/01/1970)
       !  - Windows ticks (100ns since 01/01/0001)
       '...' - literal text
       '' - single quote

       @param  format    string - the desired format of the date
       @param  date      Date - the date value to format
       @param  settings  Object - attributes include:
           ampmNames        string[2] - am/pm (optional)
           dayNamesShort    string[7] - abbreviated names of the days
                                        from Sunday (optional)
           dayNames         string[7] - names of the days from Sunday (optional)
           monthNamesShort  string[12] - abbreviated names of the months
                                         (optional)
           monthNames       string[12] - names of the months (optional)
           attribute        string - Attribute which stores datetime, defaults
                                     to data-datetime, only valid when called
                                     on dom element(s). If not present,
                                     uses text.
       @return  string - the date in the above format
    */
    $.formatDateTime = function(format, date, settings) {
        settings = $.extend({}, defaults, settings);
        if (!date) { return ''; }
        return formatDateTime(format, date, settings);
    };

})(jQuery);
