<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  var typingTimer;                // تأخير الكتابة قبل إرسال طلب البحث
  var doneTypingInterval = 500;  // الوقت الذي ينتظره السكربت قبل إرسال طلب البحث بعد انتهاء الكتابة

  // عند الكتابة في حقل البحث
  $('#searchIn').on('input', function(){
    clearTimeout(typingTimer);  // إذا كان هناك مؤقت تأخير سابق، قم بإلغائه
    if ($('#searchIn').val()) {
      typingTimer = setTimeout(doneTyping, doneTypingInterval); // إعادة ضبط المؤقت
    }
  });

  // عند الانتهاء من الكتابة
  function doneTyping() {
    var searchTerm = $('#searchIn').val().toLowerCase();  // الكلمة المكتوبة في حقل البحث
    $.ajax({
      url: '/feeds/posts/default?q=' + searchTerm + '&alt=json',  // رابط طلب البحث
      type: 'GET',
      success: function(data){
        // عرض النتائج هنا
        // يمكنك استخدام دوال jQuery لتحديد مكان عرض النتائج وإضافتها إليه
        console.log(data); // مثال: طباعة البيانات في وحدة التحكم للتحقق من عملية البحث
      }
    });
  }
});
</script>
