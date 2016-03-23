"use strict"

Date.prototype.yearday = function() {
 let monthdays = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ]
 let month = this.getMonth()
 let yearday = monthdays[month] + this.getDate()
 if(month > 1 && new Date(this.getFullYear(), 1, 29).getMonth() == 1) {
  yearday = yearday + 1
 }
 return(yearday)
}