var module = (function( $ ) {
    var div = document.getElementById('selectBox');
    var ul = document.createElement('ul');
    var curr_opt;
    ul.id = 'selectMenuBox';
    var data = ["Green",
                "Yellow",
                "Blue",
                "Red",
                ];

    div.appendChild(ul);

    for (var i = 0, ln = data.length; i < ln; i++) {
        var li = document.createElement('li');
        li.id = 'li' + i;
        li.className = 'option';
        li.innerHTML = data[i];
        ul.appendChild(li);
    }



    $.fn.selectbox = function() {
        var selectDefaultHeight = $('#selectBox').height();
        var rotateDefault = "rotate(0deg)";

        $('#selectBox > p.valueTag').click(function() {
            var currentHeight = $('#selectBox').height();
            if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
                $('#selectBox').height("320px");
            }

            if (currentHeight >= 320) {
                $('#selectBox').height(selectDefaultHeight);
            }
        });

        $('li.option').click(function() {
            $('#selectBox').height(selectDefaultHeight);
            $('p.valueTag').text($(this).text());

            const elem = {
              data: $(this).text()
            };

            fetch('send', {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(elem),
            })
            .catch(error => console.log(error));

            returnObject($(this).text());
        });

        function returnObject(name) {
            $('#parId').text(name);
            switch (name) {
                case "Green": $("#my_image").attr("src","images/1.png"); break;
                case "Yellow": $("#my_image").attr("src","images/2.png"); break;
                case "Blue": $("#my_image").attr("src","images/3.png"); break;
                case "Red": $("#my_image").attr("src","images/4.png"); break;
                default: $("#my_image").attr("src","images/0.png"); break;
            }
        }

        $(document).ready(function(e) {
            fetch('data.json')
            .then(data => {
                return data.json();
            })
            .then(data => {
                if (data.data != '') {
                  returnObject(data.data);
                } else {
                  $('#parId').text("Choose your favourite actress: ");
                }
            })
            .catch(error => console.log(error));
        });

        $(document).keypress(function(e) {
            if(e.which == 13) {
              $('#selectBox').height(selectDefaultHeight);
              returnObject("Elsa Jean");
            }
        });

        $(document).keypress(function(e) {
            if(e.which == 27) {
              $('#selectBox').height(selectDefaultHeight);
            }
        });
    };

    return {
        startEditing: function() {
            $('selector').selectbox();
        }
    };

})( jQuery );

module.startEditing();
