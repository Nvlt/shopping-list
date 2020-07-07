function constructItem(itemName = "misc-item")
{
    //Construct a new item
    if(!itemName)
    {
        itemName = "misc-item";
    }
    return `<li>
    <span class="shopping-item">${itemName}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
}

function main()
{  
    
    //Add button
    $("#js-shopping-list-form").submit(function(e){
        e.preventDefault();
        //Get input value
        let input = $("#js-shopping-list-form input").first();
        
        console.log(input);
        //Add new item
        $(".shopping-list").append(constructItem(input.val()));
        //Clean input
        input.val("");
    });
    
    
    
    //Delete button
    $("html").on("click", ".shopping-item-delete",function(e){
        e.preventDefault();
        
        e.target.closest("li").remove();
    });
    //Check off item button
    $("html").on("click", ".shopping-item-toggle",function(e){
        e.preventDefault();
        let itemName = $($(e.target).parents("li").children()[0]);
        itemName.toggleClass("shopping-item__checked");
    });
}
$(main);
