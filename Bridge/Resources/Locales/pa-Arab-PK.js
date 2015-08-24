﻿Bridge.merge(new Bridge.CultureInfo("pa-Arab-PK", true), {
    englishName: "Punjabi (Pakistan)",
    nativeName: "پنجابی (پاکستان)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "Nan",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 3,
        percentNegativePattern: 9,
        currencySymbol: "Rs",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 9,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 2
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["پير","منگل","بدھ","جمعرات","جمعه","هفته","اتوار"],
        abbreviatedMonthGenitiveNames: ["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر",""],
        abbreviatedMonthNames: ["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر",""],
        amDesignator: "AM",
        dateSeparator: "-",
        dayNames: ["پير","منگل","بدھ","جمعرات","جمعه","هفته","اتوار"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dd MMMM yyyy dddd h.mm.ss tt",
        longDatePattern: "dd MMMM yyyy dddd",
        longTimePattern: "h.mm.ss tt",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر",""],
        monthNames: ["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd-MM-yy",
        shortestDayNames: ["پ","م","ب","ج","ج","ه","ا"],
        shortTimePattern: "h.mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ".",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
