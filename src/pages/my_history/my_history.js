var util = require('../../utils/util');
var date = util.formatDate(new Date());
Page(
  {
    data: {
      date: date,
      show: false,
      minDate: new Date(2022, 0, 1).getTime(),
      maxDate: new Date(2022,12,31).getTime(),
      total_income: '12312'
    },
    onShow: function(){
      
    },
    onDisplay() {
      this.setData(
        {
        date: date,
        show: true
      });
    },
    onClose() {
      this.setData({
        show: false
      });
    },
    formatDate(date) {
      date = new Date(date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(event) {
      this.setData({
        show: false,
        date: this.formatDate(event.detail),
      });
    },
    
    
  });