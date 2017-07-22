$(document).ready(function() {
	var count = 0;
	var taskArr = [];

	$('#search-button').css('display', 'none');
	$('#add-button').click(enableSettings);
	$('#clear-button').click(enableMain);
	$('#add-task-button').click(addTask);

	function enableSettings() {
		$('.page-main').css('display', 'none');
		$('.page-settings').css('display', 'flex');
		//$('#search-button').css('display', 'none');
		$('#clear-button').css('display', 'block');
	}

	function enableMain() {
		$('.page-settings').css('display', 'none');
		$('.page-main').css('display', 'block');
		$('#clear-button').css('display', 'none');
		//$('#search-button').css('display', 'block');
	}

	function addTask() {
		var name = $('#name-input').val();
		var elemContent = '<section class="task section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp"><h4 class="task__name">' + name + '</h4><label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect task__label mdl-js-ripple-effect--ignore-events is-upgraded" for="checkbox-' + count + '" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="checkbox-' + count + '" class="mdl-checkbox__input task__checkbox"><span class="mdl-checkbox__focus-helper"></span><span class="mdl-checkbox__box-outline"><span class="mdl-checkbox__tick-outline"></span></span><span class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span class="mdl-ripple"></span></span></label></section>';//
		$(elemContent).appendTo('#task-list');
		$('.mdl-checkbox__ripple-container.mdl-js-ripple-effect.mdl-ripple--center').click(function() {
			$(this).parent().toggleClass('is-checked');
		});
		enableMain();
		$('#name-input').val('');
		count++;
	}
});