app.directive("post", function(){

	return{
		restrict: "E",
		replace: "true",
		templateUrl: "/static/js/src/directives/post/post_directive.html",
		scope:{
			options: "="
		},
		link: function  (scope, elm, attrs) {

			if (!scope.options.imageUrl)
				scope.options.imageUrl = "https://ssl.gstatic.com/android/market/org.renpy.pygame/hi-256-0-f5e1585ebee41805d202108d090517067fdccdfd";

			scope.showSinglePost = function(){
				scope.$emit('disableAllPosts', {postTitle: scope.options.title});

			};
		}
	};
});