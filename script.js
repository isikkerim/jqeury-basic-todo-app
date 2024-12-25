$(document).ready(function() {
    // Yeni görev ekleme
    $('#add-btn').click(function() {
      let todoText = $('#todo-input').val();
      if (todoText !== "") {
        let todoItem = `
          <li>
            <span class="todo-text">${todoText}</span>
            <div class="actions">
              <button class="delete">Sil</button>
            </div>
          </li>
        `;
        $('#todo-list').append(todoItem);
        $('#todo-input').val(''); // inputu temizle
      }
    });
  
    // Görev silme
    $(document).on('click', '.delete', function() {
      $(this).closest('li').fadeOut(300, function() {
        $(this).remove();
      });
    });
  
  
  });
  