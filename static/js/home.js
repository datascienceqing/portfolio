$(function() {
  $(".typed").typed({
    strings: [
      "Qing Zhou<br/>" + 
      "><span class='caret'>$</span> work: Cloud Data Engineering, Machine Learning, Business Intelligence Analysis <br/> ^100" +
      "><span class='caret'>$</span> hobbies: skiing, biking, and camping <br/> ^300" +
      "><span class='caret'>$</span> highlight: <a href='https://github.com/datascienceqing/HeartSound'>Heart Sound Analysis</a>,  <a href='https://github.com/datascienceqing/SparkETL_dbfs/blob/master/songDatabase.ipynb'>ETL in Azure Databricks</a>, <a href='https://youtu.be/5R_c7XdWmZg'>race car simulation</a><br/>" +
      "><span class='caret'>$</span> job:Hudson Data/Machine Learning Engineer  <br/> ^100"     ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
