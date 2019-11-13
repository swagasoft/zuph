$(window).load( function(){

	var myGrid;

	function $makeMasonary() {
		if($(window).innerWidth() >= 768){
			myGrid = $('.grid').masonry ({
				itemSelector: '.grid-item',
				gutter: 25,
				fitWidth: true
			});
		}
		else {
			$('.grid').css('width','auto');
			if (myGrid) {
				myGrid.masonry('destroy');
				myGrid = undefined;
			}
		}
	}

	window.onresize = function(){
		clearTimeout(this.rsz);
		this.rsz = setTimeout($makeMasonary, 100);
	};

	$makeMasonary();

});