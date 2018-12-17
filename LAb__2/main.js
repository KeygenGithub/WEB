var module = (function ($) {

    var div = document.getElementById('selectBox');
    var ul = document.createElement('ul');
    var curr_opt;
    ul.id = 'selectMenuBox';
    var data = ["Green",
                "Yellow",
                "Blue",
                "Red",
              ]

    div.appendChild(ul);


    for (var i = 0, ln = data.length; i < ln; i++) {
        var li = document.createElement('li');
        li.id = 'li' + i;
        li.className = 'option';
        li.innerHTML = data[i];
        ul.appendChild(li);
    }


    $.fn.selectbox = function () {

        var selectDefaultHeight = $('#selectBox').height();
        var rotateDefault = "rotate(0deg)";

        $('#selectBox > p.valueTag').click(function () {
            var currentHeight = $('#selectBox').height();
            if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
                $('#selectBox').height("320px");
            }

            if (currentHeight >= 320) {
                $('#selectBox').height(selectDefaultHeight);
            }
        });

        $('li.option').click(function () {
            $('#selectBox').height(selectDefaultHeight);
            $('p.valueTag').text($(this).text());
            if ($(this).text() == "Green") {
                $("#my_image").attr("src", "src/1.png");
            }
            if ($(this).text() == "Yellow") {
                $("#my_image").attr("src", "src/2.png");
            }
            if ($(this).text() == "Blue") {
                $("#my_image").attr("src", "src/3.png");
            }
            if ($(this).text() == "Red") {
                $("#my_image").attr("src", "src/4.png");
            }
        });


        $(document).keypress(function (e) {
            if (e.which == 13) {
                $('#selectBox').height(selectDefaultHeight);
                $('#parId').text("Elsa Jean");
            }
        });

        $(document).keypress(function (e) {
            if (e.which == 27) {
                $('#selectBox').height(selectDefaultHeight);
            }
        });
    };

    return {
        startEditing: function () {
            $('selector').selectbox();
        }
    };

})(jQuery);

//$('selector').selectbox();
module.startEditing();
