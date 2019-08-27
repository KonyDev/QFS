define(['./KonyLogger'], function (KonyLoggerModule) {
  var konymp = konymp || {};
  konymp.calendar = konymp.calendar || {};
  konymp.logger = (new KonyLoggerModule("Date Range Picker")) || function () {};
  var currDate = new Date();
  var NativeController = function (componentInstance, componentName) {

    this.componentInstance = componentInstance;
    this.prevHighlightedYear = null;
    this.prevHighlightedMonth = null;
    this.prevHighlightedDate = null;

    this.dataFor29Days = [{
      "lblRow": {
        "text": ""
      }
    }, {
      "lblRow": {
        "text": ""
      }
    }, {
      "lblRow": {
        "text": "00"
      }
    },
                          {
                            "lblRow": {
                              "text": "01"
                            }
                          },{
                            "lblRow": {
                              "text": "02"
                            }
                          }, {
                            "lblRow": {
                              "text": "03"
                            }
                          }, {
                            "lblRow": {
                              "text": "04"
                            }
                          }, {
                            "lblRow": {
                              "text": "05"
                            }
                          }, {
                            "lblRow": {
                              "text": "06"
                            }
                          }, {
                            "lblRow": {
                              "text": "07"
                            }
                          }, {
                            "lblRow": {
                              "text": "08"
                            }
                          }, {
                            "lblRow": {
                              "text": "09"
                            }
                          }, {
                            "lblRow": {
                              "text": "10"
                            }
                          }, {
                            "lblRow": {
                              "text": "11"
                            }
                          }, {
                            "lblRow": {
                              "text": "12"
                            }
                          }, {
                            "lblRow": {
                              "text": "13"
                            }
                          }, {
                            "lblRow": {
                              "text": "14"
                            }
                          }, {
                            "lblRow": {
                              "text": "15"
                            }
                          }, {
                            "lblRow": {
                              "text": "16"
                            }
                          }, {
                            "lblRow": {
                              "text": "17"
                            }
                          }, {
                            "lblRow": {
                              "text": "18"
                            }
                          }, {
                            "lblRow": {
                              "text": "19"
                            }
                          }, {
                            "lblRow": {
                              "text": "20"
                            }
                          }, {
                            "lblRow": {
                              "text": "21"
                            }
                          }, {
                            "lblRow": {
                              "text": "22"
                            }
                          }, {
                            "lblRow": {
                              "text": "23"
                            }
                          }, {
                            "lblRow": {
                              "text": "24"
                            }
                          }, {
                            "lblRow": {
                              "text": "25"
                            }
                          }, {
                            "lblRow": {
                              "text": "26"
                            }
                          }, {
                            "lblRow": {
                              "text": "27"
                            }
                          }, {
                            "lblRow": {
                              "text": "28"
                            }
                          }, {
                            "lblRow": {
                              "text": "29"
                            }
                          }, 
                          {"lblRow": {"text": "30"}},
                          {"lblRow": {"text": "31"}},
                          {"lblRow": {"text": "32"}},
                          {"lblRow": {"text": "33"}},
                          {"lblRow": {"text": "34"}},
                          {"lblRow": {"text": "35"}},
                          {"lblRow": {"text": "36"}},
                          {"lblRow": {"text": "37"}},
                          {"lblRow": {"text": "38"}},
                          {"lblRow": {"text": "39"}},
                          {"lblRow": {"text": "40"}},
                          {"lblRow": {"text": "41"}},
                          {"lblRow": {"text": "42"}},
                          {"lblRow": {"text": "43"}},
                          {"lblRow": {"text": "44"}},
                          {"lblRow": {"text": "45"}},
                          {"lblRow": {"text": "46"}},
                          {"lblRow": {"text": "47"}},
                          {"lblRow": {"text": "48"}},
                          {"lblRow": {"text": "49"}},
                          {"lblRow": {"text": "50"}},
                          {"lblRow": {"text": "51"}},
                          {"lblRow": {"text": "52"}},
                          {"lblRow": {"text": "53"}},
                          {"lblRow": {"text": "54"}},
                          {"lblRow": {"text": "55"}},
                          {"lblRow": {"text": "56"}},
                          {"lblRow": {"text": "57"}},
                          {"lblRow": {"text": "58"}},
                          {"lblRow": {"text": "59"}},{
                            "lblRow": {
                              "text": ""
                            }
                          }, {
                            "lblRow": {
                              "text": ""
                            }
                          }];
    this.months = {
      '1': '01',
      '2': '02',
      '3': '03',
      '4': '04',
      '5': '05',
      '6': '06',
      '7': '07',
      '8': '08',
      '9': '09',
      '10': '10',
      '11': '11',
      '12': '12'
    };
    this.prevSelectedYearIndex = null;
    this.prevSelectedMonthIndex = null;
    this.prevSelectedDateIndex = null;

  };

  /**
	 * @function setDates
	 * @scope private
	 * @description this function is invoked set dates based on month and year
	 */
  NativeController.prototype.setDates = function () {
    this.componentInstance.view = this.componentInstance.view;
    var year = parseInt(this.componentInstance.view.segYear.data[this.componentInstance.view.segYear.getFirstVisibleRow().rowIndex + 2].lblRow.text);
    var month = this.componentInstance.view.segMonth.data[this.componentInstance.view.segMonth.getFirstVisibleRow().rowIndex + 2].lblRow.text;
    var prevVisibleDate = this.componentInstance.view.segDate.getFirstVisibleRow().rowIndex;
    this.unhighLight();
    this.setDataForDatesSegment(year, this.months[month]);
    this.highLight(this.componentInstance.view.segYear.getFirstVisibleRow().rowIndex + 2, this.componentInstance.view.segMonth.getFirstVisibleRow().rowIndex + 2, prevVisibleDate + 2);
    this.componentInstance.view.segDate.selectedRowIndex = [0, prevVisibleDate];
  };

  /**
	 * @function setYearData
	 * @scope private
	 * @description this function is invoked set data to year
	 */
  NativeController.prototype.setYearData = function(){
    var yearsdata = [{
      "lblRow": {
        "text": ""
      }
    }, {
      "lblRow": {
        "text": ""
      }
    }];
    yearsdata.push({
      "lblRow": {
        "text": "AM"
      }
    });
    yearsdata.push({
      "lblRow": {
        "text": "PM"
      }
    });
    // 			for (var year = parseInt(this.componentInstance._startYear.toFixed(0)); year <= parseInt(this.componentInstance._endYear.toFixed(0)); year++) {
    // 				yearsdata.push({
    // 					"lblRow": {
    // 						"text": year.toFixed(0)
    // 					}
    // 				});
    // 			}
    yearsdata.push({
      "lblRow": {
        "text": ""
      }
    });
    yearsdata.push({
      "lblRow": {
        "text": ""
      }
    });
    var currentYearIndex = 0;
    if (this.prevSelectedYearIndex !== null) {
      yearsdata[this.prevSelectedYearIndex]["lblRow"].skin = this.componentInstance.view.lblBold.skin;
      this.prevHighlightedYear = this.prevSelectedYearIndex;
    } else {
      yearsdata[currentYearIndex + 2]["lblRow"].skin = this.componentInstance.view.lblBold.skin;
      this.prevHighlightedYear = currentYearIndex + 2;
    }
    this.componentInstance.view.segYear.setData(yearsdata);

    this.componentInstance.view.segYear.selectedRowIndex = this.prevSelectedYearIndex === null ? [0, currentYearIndex] : [0, this.prevSelectedYearIndex - 2];
    this.componentInstance.view.segYear.onScrollEnd = function () {
      this.componentInstance.view.segYear.selectedRowIndex = [0, this.componentInstance.view.segYear.getFirstVisibleRow().rowIndex];
      this.setDates();
    }.bind(this);
  };

  /**
	 * @function setMonthsData
	 * @scope private
	 * @description this function is invoked set data to month
	 */
  NativeController.prototype.setMonthsData = function(){
    try
    {
      var monthsData = [{
        "lblRow": {
          "text": ""
        }
      }, {
        "lblRow": {
          "text": ""
        }
      }, {
        "lblRow": {
          "text": "1"
        }
      }, {
        "lblRow": {
          "text": "2"
        }
      }, {
        "lblRow": {
          "text": "3"
        }
      }, {
        "lblRow": {
          "text": "4"
        }
      }, {
        "lblRow": {
          "text": "5"
        }
      }, {
        "lblRow": {
          "text": "6"
        }
      }, {
        "lblRow": {
          "text": "7"
        }
      }, {
        "lblRow": {
          "text": "8"
        }
      }, {
        "lblRow": {
          "text": "9"
        }
      }, {
        "lblRow": {
          "text": "10"
        }
      }, {
        "lblRow": {
          "text": "11"
        }
      }, {
        "lblRow": {
          "text": "12"
        }
      }, {
        "lblRow": {
          "text": ""
        }
      }, {
        "lblRow": {
          "text": ""
        }
      }];

      var currentMonthIndex = new Date().getMonth();
      if (this.prevSelectedMonthIndex !== null) {
        monthsData[this.prevSelectedMonthIndex]["lblRow"].skin = this.componentInstance.view.lblBold.skin;
        this.prevHighlightedMonth = this.prevSelectedDateIndex;
      } else {
        monthsData[currentMonthIndex + 2]["lblRow"].skin = this.componentInstance.view.lblBold.skin;
        this.prevHighlightedMonth = currentMonthIndex + 2;
      }
      this.componentInstance.view.segMonth.setData(monthsData);
      this.componentInstance.view.segMonth.selectedRowIndex = this.prevSelectedMonthIndex === null ? [0, currentMonthIndex] : [0, this.prevSelectedMonthIndex - 2];
      this.prevHighlightedMonth = currentMonthIndex + 2;
      this.componentInstance.view.segMonth.onScrollEnd = function () {
        this.componentInstance.view.segMonth.selectedRowIndex = [0, this.componentInstance.view.segMonth.getFirstVisibleRow().rowIndex];
        this.setDates();
      }.bind(this);
    }catch(err)
    {
      alert(err.message);
    }
  };

  /**
	 * @function setDatesData
	 * @scope private
	 * @description this function is invoked set data to date
	 */
  NativeController.prototype.setDatesData = function () {
    var currentDateIndex = new Date().getDate() - 1;
    this.setDataForDatesSegment(new Date().getFullYear(), new Date().getMonth() + 1);
    var datesData = this.componentInstance.view.segDate.data;
    if (this.prevSelectedDateIndex !== null) {
      datesData[this.prevSelectedDateIndex]["lblRow"].skin = this.componentInstance.view.lblBold.skin;
      this.prevHighlightedDate = this.prevSelectedDateIndex;
    } else {
      datesData[currentDateIndex + 2]["lblRow"].skin = this.componentInstance.view.lblBold.skin;
      this.prevHighlightedDate = currentDateIndex + 2;
    }
    this.componentInstance.view.segDate.setData(datesData);
    this.componentInstance.view.segDate.selectedRowIndex = this.prevSelectedDateIndex === null ? [0, currentDateIndex] : [0, this.prevSelectedDateIndex - 2];
    this.componentInstance.view.segDate.onScrollEnd = function () {
      this.componentInstance.view.segDate.selectedRowIndex = [0, this.componentInstance.view.segDate.getFirstVisibleRow().rowIndex];
      this.unhighLight();
      this.highLight(this.componentInstance.view.segYear.getFirstVisibleRow().rowIndex + 2, this.componentInstance.view.segMonth.getFirstVisibleRow().rowIndex + 2, this.componentInstance.view.segDate.getFirstVisibleRow().rowIndex + 2);
    }.bind(this);
  };
  /**
	 * @function setData
	 * @scope private
	 * @description this function is invoked set data to segments
	 */
  NativeController.prototype.setData = function () {
    this.componentInstance.view.top = "2%";
    this.componentInstance.view.height = "60%";
//     this.componentInstance.view.btnDone.text = "DONE";
    this.componentInstance.view.flxDate.top = "0%";
    this.componentInstance.view.flxDate.height = "100%";
    if (this.componentInstance._displayType === "Year Only") {
      this.componentInstance.view.flxYearColumn.centerX = "50%";
      this.setYearData();
      this.componentInstance.view.flxMonthColumn.isVisible = false;
      this.componentInstance.view.flxDateColumn.isVisible = false;       	
    } else if (this.componentInstance._displayType === "Year and Month") {
      this.componentInstance.view.flxYearColumn.width = "50%";
      this.componentInstance.view.flxMonthColumn.width = "50%";
      this.setYearData();
      this.setMonthsData();
      this.componentInstance.view.flxDateColumn.isVisible = false;         	
    } else {
      try
      {
        this.setYearData();
        this.setMonthsData();
        this.setDatesData();
      }
      catch(err)
      {
        alert(err.message);
      }
    }
    this.componentInstance.view.flxDate.isVisible = true;
    this.componentInstance.view.flxBackground.enable = false;
    this.componentInstance.view.flxHightedBackground.enable = false;
    this.componentInstance.view.flxSelectDate.isVisible = false;
  };

  /**
	 * @function highLight
	 * @scope private
	 * @description this function is invoked highlight year month and date
	 */
  NativeController.prototype.highLight = function (yearIndex, monthIndex, dateIndex) {
    var focusedYearData = this.componentInstance.view.segYear.data[yearIndex];
    focusedYearData["lblRow"].skin = this.componentInstance.view.lblBold.skin;
    this.componentInstance.view.segYear.setDataAt(focusedYearData, yearIndex, 0);
    this.prevHighlightedYear = yearIndex;
    if (this.componentInstance._displayType === "Year and Month" || this.componentInstance._displayType === "Standard") {
      var focusedMonthData = this.componentInstance.view.segMonth.data[monthIndex];
      focusedMonthData["lblRow"].skin = this.componentInstance.view.lblBold.skin;
      this.componentInstance.view.segMonth.setDataAt(focusedMonthData, monthIndex, 0);
      this.prevHighlightedMonth = monthIndex;
    }
    if (this.componentInstance._displayType === "Standard") {
      var focusedDateData = dateIndex >= this.componentInstance.view.segDate.data.length ? this.componentInstance.view.segDate.data[this.componentInstance.view.segDate.data.length - 3] : this.componentInstance.view.segDate.data[dateIndex];
      focusedDateData["lblRow"].skin = this.componentInstance.view.lblBold.skin;
      if (dateIndex >= this.componentInstance.view.segDate.data.length) {
        this.componentInstance.view.segDate.setDataAt(focusedDateData, this.componentInstance.view.segDate.data.length - 3, 0);
        this.prevHighlightedDate = this.componentInstance.view.segDate.data.length - 3;
      } else {
        this.componentInstance.view.segDate.setDataAt(focusedDateData, dateIndex, 0);
        this.prevHighlightedDate = dateIndex;
      }
    }
    this.componentInstance.view.forceLayout();
  };

  /**
	 * @function unhighLight
	 * @scope private
	 * @description this function is invoked unhighLight year month and date
	 */
  NativeController.prototype.unhighLight = function () {
    var focusedYearData = this.componentInstance.view.segYear.data[this.prevHighlightedYear];
    focusedYearData["lblRow"].skin = this.componentInstance.view.lblnormal.skin;
    this.componentInstance.view.segYear.setDataAt(focusedYearData, this.prevHighlightedYear, 0);
    if (this.componentInstance._displayType === "Year and Month" || this.componentInstance._displayType === "Standard") {
      var focusedMonthData = this.componentInstance.view.segMonth.data[this.prevHighlightedMonth];
      focusedMonthData["lblRow"].skin = this.componentInstance.view.lblnormal.skin;
      this.componentInstance.view.segMonth.setDataAt(focusedMonthData, this.prevHighlightedMonth, 0);
    }
    if (this.componentInstance._displayType === "Standard") {
      var focusedDateData = this.componentInstance.view.segDate.data[this.prevHighlightedDate];
      focusedDateData["lblRow"].skin = this.componentInstance.view.lblnormal.skin;
      this.componentInstance.view.segDate.setDataAt(focusedDateData, this.prevHighlightedDate, 0);
    }
    this.componentInstance.view.forceLayout();
  };

  /**
	 * @function nth
	 * @scope private
	 * @param date {number}
	 * @description this function is invoked to get the string to append for date.
	 */
  NativeController.prototype.nth = function (date) {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  /**
	 * @function doneClick
	 * @scope private
	 * @description this function is invoked on click of done button to close calendar
	 */
  NativeController.prototype.doneClick = function () {
    this.prevSelectedYearIndex = this.componentInstance.view.segYear.getFirstVisibleRow().rowIndex + 2;
    this.prevSelectedMonthIndex = this.componentInstance.view.segMonth.getFirstVisibleRow().rowIndex + 2;
    this.prevSelectedDateIndex = this.componentInstance.view.segDate.getFirstVisibleRow().rowIndex + 2;
    if (this.componentInstance._displayType === "Year Only"){
      this.selectedDate = {
        "year": this.componentInstance.view.segYear.data[this.componentInstance.view.segYear.getFirstVisibleRow().rowIndex + 2].lblRow.text
      };
      this.componentInstance.view.lblDate.text = this.componentInstance.view.segYear.data[this.prevSelectedYearIndex]['lblRow'].text;
    }else if(this.componentInstance._displayType === "Year and Month"){
      this.selectedDate = {
        "year": this.componentInstance.view.segYear.data[this.componentInstance.view.segYear.getFirstVisibleRow().rowIndex + 2].lblRow.text,
        "month": this.componentInstance.view.segMonth.data[this.componentInstance.view.segMonth.getFirstVisibleRow().rowIndex + 2].lblRow.text
      };
      this.componentInstance.view.lblDate.text = this.componentInstance.view.segMonth.data[this.prevSelectedMonthIndex]['lblRow'].text + " " + this.componentInstance.view.segYear.data[this.prevSelectedYearIndex]['lblRow'].text;
    }else{
      this.selectedDate = {
        "year": this.componentInstance.view.segYear.data[this.componentInstance.view.segYear.getFirstVisibleRow().rowIndex + 2].lblRow.text,
        "month": this.componentInstance.view.segMonth.data[this.componentInstance.view.segMonth.getFirstVisibleRow().rowIndex + 2].lblRow.text,
        "date": this.componentInstance.view.segDate.data[this.componentInstance.view.segDate.getFirstVisibleRow().rowIndex + 2].lblRow.text,
        "dateString": this.months[this.componentInstance.view.segMonth.data[this.componentInstance.view.segMonth.getFirstVisibleRow().rowIndex + 2].lblRow.text] + "/" +
        this.componentInstance.view.segDate.data[this.componentInstance.view.segDate.getFirstVisibleRow().rowIndex + 2].lblRow.text + "/" +
        this.componentInstance.view.segYear.data[this.componentInstance.view.segYear.getFirstVisibleRow().rowIndex + 2].lblRow.text
      };
      var date = this.componentInstance.view.segDate.data[this.prevSelectedDateIndex]['lblRow'].text;
      this.componentInstance.view.lblDate.text = 
        this.componentInstance.view.segMonth.data[this.prevSelectedMonthIndex]['lblRow'].text +":"+ date+" "+ this.componentInstance.view.segYear.data[this.prevSelectedYearIndex]['lblRow'].text;
      //               date + this.nth(parseInt(date)) + " " + this.componentInstance.view.segMonth.data[this.prevSelectedMonthIndex]['lblRow'].text + " " + this.componentInstance.view.segYear.data[this.prevSelectedYearIndex]['lblRow'].text;
    }
    this.componentInstance.view.flxDate.height = "0%";
    this.componentInstance.view.top = "30%";
    this.componentInstance.view.height = "10%";
    this.componentInstance.view.lblDate.isVisible = true;
    this.componentInstance.view.lblSelectDate.isVisible = false;
    this.componentInstance.view.flxDate.isVisible = false;
    this.componentInstance.view.flxSelectDate.isVisible = true;
    if (this.componentInstance.onDateSelectionDone !== null && this.componentInstance.onDateSelectionDone !== undefined) {
      this.componentInstance.onDateSelectionDone();
    }
  };

  /**
	 * @function setDataForDatesSegment
	 * @scope public
	 * @description this function is invoked to set data for dates segment
	 */
  NativeController.prototype.setDataForDatesSegment = function (year, month) {
    this.componentInstance.view.segDate.setData(this.dataFor29Days);
  };

  /**
	 * @function getSelectedDate
	 * @scope private
	 * @description this function is invoked to get selected date
	 */
  NativeController.prototype.getSelectedDate = function () {
    return this.selectedDate;

  };
  return NativeController;
});