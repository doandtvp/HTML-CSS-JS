$(function() {
	$('#checkall').click(function() {
		$checkAll = document.getElementsByName('check');
		for (var i = 0; i < $checkAll.length; i++) {
			$checkAll[i].checked = true;
		}
	});

	$('#unCheckAll').click(function() {
		$unCheckAll = document.getElementsByName('check');
		for (var i = 0; i < $unCheckAll.length; i++) {
			$unCheckAll[i].checked = false;
		}
	});
});
