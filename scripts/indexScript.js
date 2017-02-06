		window.onload = function() {initialisePage()};
		
		function initialisePage() {
			setDefaultScrollPosition()
			currentArticle()

		}

		function setDefaultScrollPosition() {
			/* scroll timeline to newest entry*/
			var timeline = document.getElementById("rootTimeline");
			timeline.scrollLeft = timeline.scrollWidth;
		}
		
		function currentArticle() {
			document.getElementById("content").innerHTML='<object id="currentArticle" type="text/html" data="articles/article001.html" ></object>';
			resizeArticle("articles/article001.html");
		}
		function selectArticle(article) {
			/* Should check if selected articles is the same as already loaded article, no need to reload*/
			document.getElementById("content").innerHTML='<object id="currentArticle" type="text/html"></object>';
			document.getElementById("currentArticle").setAttribute("data", article);
			resizeArticle(article);
		}

		/* Really bad solution to sizing issue */
		function resizeArticle(article) {
			var heightVariable = "1000px"
			switch(article) {
				case "articles/article001.html":
					heightVariable = "2035px";
					break;
				case "articles/article002.html":
					heightVariable = "50px";
					break;
				case "articles/article003.html":
					heightVariable = "50px";
					break;
				case "articles/article004.html":
					heightVariable = "50px";
					break;
				case "articles/article005.html":
					heightVariable = "50px";
					break;
				case "articles/article006.html":
					heightVariable = "50px";
					break;
				case "articles/article007.html":
					heightVariable = "50px";
					break;
				default:
					heightVariable = "1000px";
					break;
			}
			document.getElementById("currentArticle").setAttribute("height", heightVariable);
		}
