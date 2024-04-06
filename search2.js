<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $('#searchIn').on('input', function(){
    var searchTerm = $(this).val().toLowerCase();
    $.ajax({
      url: '/feeds/posts/default?q=' + searchTerm + '&alt=json',
      type: 'GET',
      success: function(data){
        // عرض النتائج هنا
        // يمكنك استخدام دوال jQuery لتحديد مكان عرض النتائج وإضافتها إليه
        console.log(data); // مثال: طباعة البيانات في وحدة التحكم للتحقق من عملية البحث
      }
    });
  });
});
</script>
