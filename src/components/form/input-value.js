  $('.search-form-minus').on('click', function(event) {
    event.preventDefault();
    current = +$(this).siblings('input').val();
    input = $(this).siblings('input');
    $(input).val(current - 1);

    if (current < 1) {
      $(input).val(current);
    }
  });

  $('.search-form-plus').on('click', function(event) {
    event.preventDefault();
    current = +$(this).siblings('input').val();
    input = $(this).siblings('input');
    $(input).val(current + 1);
  });

  //* Disabling typing letters in numeric inputs 
  $(":input[class='people-number']").keypress(function(e) { // selector by class is used for IE9 support
    // Allow max 4 digits in input
    if (this.value.length > 3) {
      return false;
    }
  });