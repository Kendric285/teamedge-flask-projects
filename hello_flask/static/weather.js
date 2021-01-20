$(document).ready(function() {
	start();
	$("#enter").fadeOut();
	$("#enter").fadeIn();
	$("#findBtn").click(subBTN);
	$("#enter").click(enterButton);
	console.log("begin btn pressed")
	$("#another").click(reset);
	$("#s").click(clothesHover);
	$("#clothes").click(clothesButton);
	$("#c").click(newState);

	function enterButton() {
		$("#enter").remove();
		$("body").css("background-image", "url(https://media.giphy.com/media/UOdoMz3baCENO/giphy.gif)");
		$("#finder").fadeIn();
		$("#findBtn").fadeIn();
	}

	function newState() {
		$("#another").fadeIn();
		$("#clothes").fadeOut();
		console.log("newstate");
		$("#c").fadeOut();
		$("#s").fadeIn();
	}

	function inOut() {
		$(".info").animate({
			backgroundPositionX: "+=100px",
			backgroundPositionY: "+=200px"
		});
		$(".info").animate({
			backgroundPositionX: "0px",
			backgroundPositionY: "0px"
		});
	}
	// hides all elements that need to 
	function start() {
		$("#state-name").hide();
		$("#finder").hide();
		$("#findBtn").hide();
		$("#another").hide();
		$("#clothes").hide();
		$("#s").hide();
		$("#c").hide();
		$(".wrapper").hide();
		$(".header").hide();
		$("#newC").hide();
		$(".weather").hide();
	}
	//function that reloads the page(mainly to get new area);
	function reset() {
		console.log("reset button pressed")
		location.reload();
	}

	function clothesHover() {
		$("#clothes").fadeIn();
		$("#another").fadeOut();
		$("#s").fadeOut();
		$("#c").show();
	}
	// button to choose clothes
	function clothesButton() {
		$("body").css("background-image", "url(https://cdn-images-1.medium.com/max/1600/0*4Gzjgh9Y7Gu8KEtZ.gif)");
		$("#state-name").hide();
		$("#finder").hide();
		$("#findBtn").hide();
		$("#another").hide();
		$("#clothes").hide();
		$("#s").hide();
		$("#c").hide();
		$(".wrapper").hide();
		$("#newC").hide();
		$(".info").hide();
		$(".header").show();
		setTimeout(function() {
			//
			let state = $("input:text").val();
			$(".info").hide();
			$("#clothes").hide();
			$(".wrapper").show();
			$("#another").fadeIn();
			$("body").css("background-image", "url(https://png.pngtree.com/thumb_back/fw800/back_pic/00/14/53/165660479a5d335.jpg)");
			$(".header").hide();
			//getting the city or area key
			$.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=WgWCsW328fzBKdm4t3Aoci34y8ooI2ft&q=${state}`, function(city) {
				let statekey = city[0].Key;
				let state = $("input:text").val();
				console.log(city[0].Key);
				console.log(city);
				//getting city or area weather information 
				$.get(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${statekey}?apikey=WgWCsW328fzBKdm4t3Aoci34y8ooI2ft`, function(weather) {
					let minimumValue = weather.DailyForecasts[0].Temperature.Minimum.Value;
					let maximumValue = weather.DailyForecasts[0].Temperature.Maximum.Value;
					let summary = weather.Headline.Text
					let dayPrecipitation = weather.DailyForecasts[0].Day.HasPrecipitation;
					let nightPrecipitation = weather.DailyForecasts[0].Night.HasPrecipitation;
					let precipitationTypeDay = weather.DailyForecasts[0].Day.PrecipitationType
					let precipitationTypeNight = weather.DailyForecasts[0].Night.PrecipitationType
					let iconNum = weather.DailyForecasts[0].Day.Icon
					let iconPhrase = weather.DailyForecasts[0].Day.IconPhrase
					console.log(iconNum);
					if (iconNum == 1) {
						console.log(iconPhrase)
						console.log("jeans, shorts, dress, Sneakers, flip-flops, T-shirt , Sunglasses , ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<p>No Jackets</p>');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 2) {
						console.log(iconPhrase)
						console.log("jeans, shorts, dress, Sneakers, flip-flops, T-shirt , Sunglasses , ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<p>No Jackets</p>');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 3) {
						console.log(iconPhrase)
						console.log("jeans, shorts, dress, Sneakers, flip-flops, T-shirt , Sunglasses , ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<p>No Jackets</p>');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 4) {
						console.log(iconPhrase);
						console.log("jeans, dress, Sneakers, T-shirt , long sleeve, Sweater, Jean Jacket, boots, windbreaker ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://scheels.scene7.com/is/image/Scheels/88722963937?wid=600&hei=600&qlt=75" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6469dd3d/images/hi-res/25542_BCW.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16104514/Jeans-Jacket-Transparent-Background-PNG.png" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 5) {
						console.log(iconPhrase);
						console.log("jeans, dress, Sneakers, T-shirt , long sleeve, Sweater, Jean Jacket,");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://scheels.scene7.com/is/image/Scheels/88722963937?wid=600&hei=600&qlt=75" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6469dd3d/images/hi-res/25542_BCW.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16104514/Jeans-Jacket-Transparent-Background-PNG.png" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 6) {
						console.log(iconPhrase);
						console.log("jeans, Sneakers, T-shirt ,long sleeve, Sweater, Jean Jacket,jacket");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://scheels.scene7.com/is/image/Scheels/88722963937?wid=600&hei=600&qlt=75" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6469dd3d/images/hi-res/25542_BCW.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16104514/Jeans-Jacket-Transparent-Background-PNG.png" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 7) {
						console.log(iconPhrase);
						console.log("jeans, dress, Sneakers, T-shirt , long sleeve, Sweater, Jean Jacket, boots ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://scheels.scene7.com/is/image/Scheels/88722963937?wid=600&hei=600&qlt=75" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6469dd3d/images/hi-res/25542_BCW.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16104514/Jeans-Jacket-Transparent-Background-PNG.png" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 8) {
						console.log(iconPhrase);
						console.log("jeans, Sneakers, T-shirt,long sleeve, Sweater, Jean Jacket, boots ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51NmVOdNE4L._UX342_.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://scheels.scene7.com/is/image/Scheels/88722963937?wid=600&hei=600&qlt=75" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6469dd3d/images/hi-res/25542_BCW.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16104514/Jeans-Jacket-Transparent-Background-PNG.png" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 11) {
						console.log(iconPhrase);
						console.log("jeans, Sneakers, T-shirt ,long sleeve, Sweater, Jean Jacket, boots, windbreaker  ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51NmVOdNE4L._UX342_.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://scheels.scene7.com/is/image/Scheels/88722963937?wid=600&hei=600&qlt=75" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6469dd3d/images/hi-res/25542_BCW.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16104514/Jeans-Jacket-Transparent-Background-PNG.png" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/41CJvqmdcFL._SX395_QL70_.jpg" width = "100" height = "100">');
					} else if (iconNum == 12) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket,  Rain boots, Poncho, Umbrella ");
						// img for pants
						$("#pants").append('<img src = "https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansnavy-blue-1421526362794kpmhb.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://www.rustyzipper.com/full/251816.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://workingperson.com/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_44791.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 13) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket, Rain boots, Poncho, Umbrella ");
						// img for pants
						$("#pants").append('<img src = "https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansnavy-blue-1421526362794kpmhb.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://www.rustyzipper.com/full/251816.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://workingperson.com/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_44791.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 14) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket, rain boots, Poncho, Umbrella ");
						// img for pants
						$("#pants").append('<img src = "https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansnavy-blue-1421526362794kpmhb.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://www.rustyzipper.com/full/251816.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://workingperson.com/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_44791.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 15) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket,  rain boots, Poncho, Umbrella ");
						// img for pants
						$("#pants").append('<img src = "https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansnavy-blue-1421526362794kpmhb.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://www.rustyzipper.com/full/251816.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://workingperson.com/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_44791.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 16) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket, rain boots, Poncho, Umbrella ");
						// img for pants
						$("#pants").append('<img src = "https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansnavy-blue-1421526362794kpmhb.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://www.rustyzipper.com/full/251816.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://workingperson.com/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_44791.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 17) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket, rain boots, Poncho, Umbrella ");
						// img for pants
						$("#pants").append('<img src = "https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansnavy-blue-1421526362794kpmhb.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://www.rustyzipper.com/full/251816.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://workingperson.com/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_44791.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 18) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket, rain boots, Poncho, Umbrella ");
						// img for pants
						$("#pants").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwced3090d/images/hi-res/68495_BLK.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edbtp03001_relayboypt,w_ggy0_frt1.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://ayoqq.org/images/pants-drawing-snow-pants-14.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 19) {
						console.log(iconPhrase);
						console.log("jeans,long sleeve,Jacket, boots, Scarf, hat, Coat ");
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 20) {
						console.log(iconPhrase);
						console.log("jeans,long sleeve,Jacket, boots, Scarf, hat, Coat ");
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 21) {
						console.log(iconPhrase);
						console.log("jeans,long sleeve, Jacket, boots, Scarf, hat ");
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 22) {
						console.log(iconPhrase);
						console.log("Snow Pants, jeans,long sleeve, Jacket, Snow boots, Scarf, hat, gloves, long Johns ");
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 23) {
						console.log(iconPhrase);
						console.log("Snow Pants, jeans,T-shirt ,long sleeve, Jacket, Snow boots, Scarf, hat, gloves, long johns ");
						// img for pants
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 24) {
						console.log(iconPhrase);
						console.log("Snow Pants,jeans,long sleeve, Jacket, Snow boots, Scarf, hat, gloves ");
						// img for pants
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 25) {
						console.log(iconPhrase);
						console.log(" Snow Pants,jeans,long sleeve, Jacket, Snow boots, Scarf, hat, gloves ");
						// img for pants
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 26) {
						console.log(iconPhrase);
						console.log(" Snow Pants,jeans,long sleeve, Jacket, Snow boots, Scarf, hat, gloves ");
						// img for pants
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 29) {
						console.log(iconPhrase);
						console.log(" Snow Pants,jeans,long sleeve, Jacket, Snow boots, Scarf, hat, gloves ");
						// img for pants
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 30) {
						console.log(iconPhrase)
						console.log("jeans, shorts, dress, Sneakers, flip-flops, T-shirt , Sunglasses , ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<p>No Jackets</p>');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 31) {
						console.log(iconPhrase);
						console.log(" Snow Pants,jeans,long sleeve, Jacket, Snow boots, Scarf, hat, gloves ");
						// img for pants
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 32) {
						console.log(iconPhrase);
						console.log("jeans, Sneakers, T-shirt ,long sleeve, Sweater, Jean Jacket, boots, windbreaker  ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://scheels.scene7.com/is/image/Scheels/88722963937?wid=600&hei=600&qlt=75" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6469dd3d/images/hi-res/25542_BCW.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16104514/Jeans-Jacket-Transparent-Background-PNG.png" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 33) {
						console.log(iconPhrase);
						console.log("jeans, Sneakers, T-shirt ,long sleeve, Sweater, Jean Jacket, boots, windbreaker  ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://scheels.scene7.com/is/image/Scheels/88722963937?wid=600&hei=600&qlt=75" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6469dd3d/images/hi-res/25542_BCW.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16104514/Jeans-Jacket-Transparent-Background-PNG.png" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 34) {
						console.log(iconPhrase);
						console.log("jeans, Sneakers, T-shirt ,long sleeve, Sweater, Jean Jacket, boots, windbreaker  ");
						// img for pants
						$("#pants").append('<img src = "https://scubasanmateo.com/images/jeans-clipart-transparent-background-10.png" width = "100" height = "100">');
						$("#pants").append('<img src = "http://www.pngnames.com/files/3/Shorts-For-Men-Free-Desktop-Background.png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://i.pinimg.com/736x/ff/16/1b/ff161bc3731bd234fd3a84c42fd9e4e3--vintage-levis-vintage-shorts.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoR_kkPfMaBTWTo1UhlmIGaNWF1y9JK4239QAOZzMmHSNq7-fsA" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://res.cloudinary.com/teepublic/image/private/s--C2QW8iFH--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-116,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-511,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505510079/production/designs/1902917_1.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61IZXzt8BzL._UX385_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.bally.com/dw/image/v2/AAWE_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dw68c20015/images/original/Tops_&_Shirts_M5CC265F_7S182_750F.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_VIVIENNE_BLACK_SMOKE_FRONT_450x.jpg?v=1550564377" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0350/5401/products/Ice_Blue_Mirror_Front-Edit-1200.jpg?v=1556809129" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_f6999d29-6e38-4506-a046-2c4a9c52a432?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://scheels.scene7.com/is/image/Scheels/88722963937?wid=600&hei=600&qlt=75" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6469dd3d/images/hi-res/25542_BCW.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16104514/Jeans-Jacket-Transparent-Background-PNG.png" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images.puma.net/images/362624/16/sv01/fnd/PNA/w/600/h/600/" width = "100" height = "100">');
						$("#shoes").append('<img src = "http://www.thinkgeek.com/images/products/zoom/knit_black_panther_sneaker.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://reef.scene7.com/is/image/Reef/RF001660_TQA_HERO?$WC-FULLIMAGE$" width = "100" height = "100">');
					} else if (iconNum == 35) {
						console.log(iconPhrase);
						console.log("jeans, Sneakers, T-shirt ,long sleeve, Sweater, Jean Jacket, boots, windbreaker  ");
						// img for pants
						$("#pants").append('<img src = "https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_jpg,h_581,q_85,w_581/v1/i/f725922f_538f.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://www.jollysoftair.com/9141-large_default/emersongear-blue-label-g3-tactical-pants-ranger-green-medium-size-emb9319rg-m.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://www.rei.com/media/product/104485" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://de9luwq5d40h2.cloudfront.net/catalog/product/large_image/00_406456.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g6-M01-81-87-rBVaSFuFGCeAavyDAAD9ewctw2I435.jpg/2019-summer-t-shirt-women-039-s-casual-cute.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://content.backcountry.com/images/items/900/MHW/MHW00PS/PHOBL.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "data:image/jpeg;base64,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" width = "100" height = "100">');
						$("#a").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsTr5KOvO_Z2A9VlW4CE-lF_ktYRIYG2Nk-te1Xw-iRgv7-_g" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/2166/8231/products/17_11_22_Teddy_Fresh_20516_2000x.jpg?v=1528483630" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOyfKv2hXVdfEGIV3osLyaqZoKQeUtFg_7Whgicq2XcO29xHasQ" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1540837275-1505507422-llbean-ultrawarm-coat-1-1540837260.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/oLYUAkngRJaiWHu6MMiW" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61dsCr5Z1cL._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1540322045-10039575_fpx.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/719SfnU0-wL._UY395_.jpg" width = "100" height = "100">');
					} else if (iconNum == 36) {
						console.log(iconPhrase);
						console.log("jeans, Sneakers, T-shirt ,long sleeve, Sweater, Jean Jacket, boots, windbreaker  ");
						// img for pants
						$("#pants").append('<img src = "https://kmd-assets.imgix.net/catalog/product/a/0/a0502_510_nduropant_w_a.jpg?auto=format&fit=crop&q=30&dpr=2" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.thenorthface.com/is/image/TheNorthFace/NF0A2TCT_T5C_hero" width = "100" height = "100">');
						$("#pants").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_3b87166b-f21e-495d-bdd9-68de920288e9?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/41J5JlB0HQL._SX342_QL70_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://cdn.shopify.com/s/files/1/1508/2966/products/product-image-216687369_1024x1024.jpg?v=1511380679" width = "100" height = "100">');
						$("#shirt").append('<img src = ""https://besthiking.net/wp-content/uploads/2017/06/1.-SmartWool-Merino-150.jpg width = "100" height = "100">');
						// img for accessories
						$("#a").append('<p>No accessories</p>');
						// img for jackets
						$("#jackets").append('<img src = "https://ae01.alicdn.com/kf/HTB1iUjnKaSWBuNjSsrbq6y0mVXa9/ZAN-STYLE-Winter-Spring-Women-Color-Block-Hooded-Windbreaker-Jacket-Casual-Zip-Up-Pocket-Contrast-Coat.jpg_640x640.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.rei.com/media/product/878406" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://cdn.shopify.com/s/files/1/0594/7693/products/WOMAN_occams_razer_black_front.jpg?v=1533427045" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://www.lulus.com/images/product/xlarge/3102550_381342.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/6b3a81c4e9ed4e5a926fa99000ff547e_9366/Falcon_Shoes_Pink_BD7825_01_standard.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://assets.adidas.com/images/w_600,f_auto,q_auto/6d7c82250e0e4011bbf1a91300e00d64_9366/Falcon_Shoes_Black_B28129_01_standard.jpg" width = "100" height = "100">');
					} else if (iconNum == 37) {
						console.log(iconPhrase);
						console.log("jeans, Sneakers, T-shirt ,long sleeve, Sweater, Jean Jacket, boots, windbreaker  ");
						// img for pants
						$("#pants").append('<img src = "https://kmd-assets.imgix.net/catalog/product/a/0/a0502_510_nduropant_w_a.jpg?auto=format&fit=crop&q=30&dpr=2" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.thenorthface.com/is/image/TheNorthFace/NF0A2TCT_T5C_hero" width = "100" height = "100">');
						$("#pants").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_3b87166b-f21e-495d-bdd9-68de920288e9?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/41J5JlB0HQL._SX342_QL70_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://cdn.shopify.com/s/files/1/1508/2966/products/product-image-216687369_1024x1024.jpg?v=1511380679" width = "100" height = "100">');
						$("#shirt").append('<img src = ""https://besthiking.net/wp-content/uploads/2017/06/1.-SmartWool-Merino-150.jpg width = "100" height = "100">');
						// img for accessories
						$("#a").append('<p>No accessories</p>');
						// img for jackets
						$("#jackets").append('<img src = "https://ae01.alicdn.com/kf/HTB1iUjnKaSWBuNjSsrbq6y0mVXa9/ZAN-STYLE-Winter-Spring-Women-Color-Block-Hooded-Windbreaker-Jacket-Casual-Zip-Up-Pocket-Contrast-Coat.jpg_640x640.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.rei.com/media/product/878406" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://cdn.shopify.com/s/files/1/0594/7693/products/WOMAN_occams_razer_black_front.jpg?v=1533427045" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://www.lulus.com/images/product/xlarge/3102550_381342.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/6b3a81c4e9ed4e5a926fa99000ff547e_9366/Falcon_Shoes_Pink_BD7825_01_standard.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://assets.adidas.com/images/w_600,f_auto,q_auto/6d7c82250e0e4011bbf1a91300e00d64_9366/Falcon_Shoes_Black_B28129_01_standard.jpg" width = "100" height = "100">');
					} else if (iconNum == 38) {
						console.log(iconPhrase);
						console.log("jeans, Sneakers, T-shirt ,long sleeve, Sweater, Jean Jacket, boots, windbreaker  ");
						// img for pants
						$("#pants").append('<img src = "https://kmd-assets.imgix.net/catalog/product/a/0/a0502_510_nduropant_w_a.jpg?auto=format&fit=crop&q=30&dpr=2" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.thenorthface.com/is/image/TheNorthFace/NF0A2TCT_T5C_hero" width = "100" height = "100">');
						$("#pants").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_3b87166b-f21e-495d-bdd9-68de920288e9?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/41J5JlB0HQL._SX342_QL70_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://cdn.shopify.com/s/files/1/1508/2966/products/product-image-216687369_1024x1024.jpg?v=1511380679" width = "100" height = "100">');
						$("#shirt").append('<img src = ""https://besthiking.net/wp-content/uploads/2017/06/1.-SmartWool-Merino-150.jpg width = "100" height = "100">');
						// img for accessories
						$("#a").append('<p>No accessories</p>');
						// img for jackets
						$("#jackets").append('<img src = "https://ae01.alicdn.com/kf/HTB1iUjnKaSWBuNjSsrbq6y0mVXa9/ZAN-STYLE-Winter-Spring-Women-Color-Block-Hooded-Windbreaker-Jacket-Casual-Zip-Up-Pocket-Contrast-Coat.jpg_640x640.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://www.rei.com/media/product/878406" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://cdn.shopify.com/s/files/1/0594/7693/products/WOMAN_occams_razer_black_front.jpg?v=1533427045" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://www.lulus.com/images/product/xlarge/3102550_381342.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/6b3a81c4e9ed4e5a926fa99000ff547e_9366/Falcon_Shoes_Pink_BD7825_01_standard.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://assets.adidas.com/images/w_600,f_auto,q_auto/6d7c82250e0e4011bbf1a91300e00d64_9366/Falcon_Shoes_Black_B28129_01_standard.jpg" width = "100" height = "100">');
					} else if (iconNum == 39) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket, Rain boots, Poncho, Umbrella ");
						// img for pants
						$("#pants").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwced3090d/images/hi-res/68495_BLK.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edbtp03001_relayboypt,w_ggy0_frt1.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://ayoqq.org/images/pants-drawing-snow-pants-14.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 40) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket, Rain boots, Poncho, Umbrella ");
						/// img for pants
						$("#pants").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwced3090d/images/hi-res/68495_BLK.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edbtp03001_relayboypt,w_ggy0_frt1.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://ayoqq.org/images/pants-drawing-snow-pants-14.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 41) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket, Rain boots, Poncho, Umbrella ");
						/// img for pants
						$("#pants").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwced3090d/images/hi-res/68495_BLK.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edbtp03001_relayboypt,w_ggy0_frt1.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://ayoqq.org/images/pants-drawing-snow-pants-14.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 42) {
						console.log(iconPhrase);
						console.log("jeans,T-shirt ,long sleeve,Rain Jacket, Rain boots, Poncho, Umbrella ");
						// img for pants
						$("#pants").append('<img src = "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwced3090d/images/hi-res/68495_BLK.jpg?sw=750&sh=750&sm=fit&sfrm=png" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edbtp03001_relayboypt,w_ggy0_frt1.jpg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://ayoqq.org/images/pants-drawing-snow-pants-14.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://m.media-amazon.com/images/I/91oxpfsIHxL._SR400,500_.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.majalahbakaba.com/images/xintupian/shirt-mens-superdry-navy-winter-washbasket-lincoln-superdry-shirts-63QO.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-C7-rBVaSVujAE-AUkpuAAOrzDfZMAE912.jpg/2018-new-women-039-s-fashionable-winter-shirts.jpg" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://images.homedepot-static.com/productImages/76299625-ff58-4c0a-bf20-36e4be558bf7/svn/black-firm-grip-rain-umbrellas-38124-64_1000.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://mmtcdn.blob.core.windows.net/084395e6770c4e0ebc5612f000acae8f/mmtcdn/Products12621-640x640--1337286234.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_cf21de96-8217-46b1-ba05-05107fc7f7fd" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/51FO3gjgZ5L._SX425_.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://i.pinimg.com/736x/fa/cb/6a/facb6a13d94b1c328de8745219559e05.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://sc01.alicdn.com/kf/UTB86thoBVfFXKJk43Otq6xIPFXan/Customized-logo-Wholesale-bubble-winter-jackets-pakistan.jpg_350x350.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://dimg.dillards.com/is/image/DillardsZoom/zoom/hunter-boots-original-play-tall-rain-boot/05464304_zi_black.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://cdn1.thehunt.com/app/public/system/note_images/4072800/note_view/9809f4a166ac0eb9346325ac9ed566f5.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://media.tractorsupply.com/is/image/TractorSupplyCompany/6356077?$456$" width = "100" height = "100">');
					} else if (iconNum == 43) {
						console.log(iconPhrase);
						console.log("jeans,long sleeve,Jacket, boots, Scarf, hat, Coat ");
						//img for pants
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else if (iconNum == 44) {
						console.log(iconPhrase);
						console.log("Snow Pants, jeans,long sleeve, Jacket, Snow boots, Scarf, hat, gloves, long Johns ");
						//img for pants
						$("#pants").append('<img src = "https://cdnb.lystit.com/520/650/n/photos/sunspel/337c3e1a/sunspel-White-Mens-Thermal-Long-Johns-In-White.jpeg" width = "100" height = "100">');
						$("#pants").append('<img src = "https://cdn.shopify.com/s/files/1/0744/3943/products/57_5bea9f75-f26c-4b8a-b06a-d24fe6d3c8f0.jpg?v=1522445572" width = "100" height = "100">');
						$("#pants").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edjtp03017_vivapnt,w_bsn6_frt1.jpg" width = "100" height = "100">');
						// img for shirts
						$("#shirt").append('<img src = "https://www.farmandhomesupply.com/media/catalog/product/cache/image/460x460/e9c3970ab036de70892d86c6d221abfe/i/n/indera-800ls.jpg" width = "100" height = "100">');
						$("#shirt").append('<img src = "https://c.shld.net/rpx/i/s/pi/mp/10166776/prod_8598709330?src=http%3A%2F%2Fwww.clothingbigandtall.com%2FIndera_Shirts%2F773_Black.JPG&d=49636f117709eeca57261779994c83987218ef09&hei=345&wid=345&op_sharpen=1&qlt=85" width = "100" height = "100">');
						$("#shirt").append('<img src = "http://www.tshirtelephant.com/images/tshirts/images/products/1401/products/4930R/White/front/500.png" width = "100" height = "100">');
						// img for accessories
						$("#a").append('<img src = "https://cdn2.bigcommerce.com/server3100/1a4f5/products/146/images/318/HH14__POP4__65691.1315697762.356.300.jpg?c=2" width = "100" height = "100">');
						$("#a").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71g1hljYsQL._UY550_.jpg" width = "100" height = "100">');
						$("#a").append('<img src = "https://cdn.shopify.com/s/files/1/0666/2615/products/F2-6100.76_Dove_Grey_1280x1280.jpg?v=1517353364" width = "100" height = "100">');
						// img for jackets
						$("#jackets").append('<img src = "https://images.boardriders.com/global/quiksilver-products/all/default/medium-large/eqytj03177_horizonjk,v_cre0_frt1.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/61Hoax2AEwL._AC._SR360,460.jpg" width = "100" height = "100">');
						$("#jackets").append('<img src = "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/edytj03074_rampartjkt,v_cjz6_frt1.jpg" width = "100" height = "100">');
						// img for shoes
						$("#shoes").append('<img src = "https://images-na.ssl-images-amazon.com/images/I/71nT0jqRp0L._UY395_.jpg" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://images.timberland.com/is/image/timberland/10073009-HERO" width = "100" height = "100">');
						$("#shoes").append('<img src = "https://target.scene7.com/is/image/Target/GUEST_14d8db8c-02fa-43f9-b2b0-71e44eee16c1?wid=488&hei=488&fmt=pjpeg" width = "100" height = "100">');
					} else {
						console.log("Hello");
						location.reload();
					}
				});
			});
		}, 2500)
	}

	function subBTN() {
		$("body").css("background-image", "url(https://media.giphy.com/media/PLJzdMVafDLTW/giphy.gif)");
		$("#state-name").hide();
		$("#finder").hide();
		$("#findBtn").hide();
		$("#another").hide();
		$("#clothes").hide();
		$("#s").hide();
		$("#c").hide();
		$(".wrapper").hide();
		$("#newC").hide();
		$(".info").hide();
		$(".header").hide();
		$(".weather").show();
		setTimeout(function() {
			$("#s").show();
			$(".info").show();
			$(".weather").hide();
			$("#finder").hide();
			$("#findBtn").hide();
			$("#another").show();
			$("#state-name").show();
			$("#c").hide();
			console.log("Submit btn pressed");
			let state = $("input:text").val();
			$.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=WgWCsW328fzBKdm4t3Aoci34y8ooI2ft&q=${state}`, function(city) {
				let statekey = city[0].Key;
				console.log(city[0].Key);
				console.log(city);
				$.get(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${statekey}?apikey=WgWCsW328fzBKdm4t3Aoci34y8ooI2ft`, function(weather) {
					let minimumvalue = weather.DailyForecasts[0].Temperature.Minimum.Value;
					let maximumvalue = weather.DailyForecasts[0].Temperature.Maximum.Value;
					let summary = weather.Headline.Text
					let dayPrecipitation = weather.DailyForecasts[0].Day.HasPrecipitation;
					let nightPrecipitation = weather.DailyForecasts[0].Night.HasPrecipitation;
					let precipitationTypeDay = weather.DailyForecasts[0].Day.PrecipitationType
					let precipitationTypeNight = weather.DailyForecasts[0].Night.PrecipitationType
					let iconNum = weather.DailyForecasts[0].Day.Icon
					let iconPhrase = weather.DailyForecasts[0].Day.IconPhrase
					console.log(minimumvalue)
					console.log(maximumvalue)
					console.log(summary);
					console.log(statekey);
					console.log(dayPrecipitation);
					console.log(nightPrecipitation);
					$("#high").append(`<h5>High of ${maximumvalue}</h5>`)
					$("#low").append(`<h5>Low of ${minimumvalue}</h5>`)
					$("#summary").append(`<h5>Day Summary: ${iconPhrase}</h5>`)
					if (iconNum == 1) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png)");
					} else if (iconNum == 2) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png)");
					} else if (iconNum == 3) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png)");
					} else if (iconNum == 4) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png)");
					} else if (iconNum == 5) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png)");
					} else if (iconNum == 6) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png)");
					} else if (iconNum == 7) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png)");
					} else if (iconNum == 8) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png)");
					} else if (iconNum == 11) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-06-512.png)");
					} else if (iconNum == 12) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-31-512.png)");
					} else if (iconNum == 13) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-03-512.png)");
					} else if (iconNum == 14) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-03-512.png)");
					} else if (iconNum == 15) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-23-512.png)");
					} else if (iconNum == 16) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-23-512.png)");
					} else if (iconNum == 17) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-23-512.png)");
					} else if (iconNum == 18) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-32-512.png)");
					} else if (iconNum == 19) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png)");
					} else if (iconNum == 20) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png)");
					} else if (iconNum == 21) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png)");
					} else if (iconNum == 22) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-24-512.png)");
					} else if (iconNum == 23) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-05-512.png)");
					} else if (iconNum == 24) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png)");
					} else if (iconNum == 25) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png)");
					} else if (iconNum == 26) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png)");
					} else if (iconNum == 29) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png)");
					} else if (iconNum == 30) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-21-512.png)");
					} else if (iconNum == 31) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-24-512.png)");
					} else if (iconNum == 32) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-512.png)");
					} else if (iconNum == 33) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-512.png)");
					} else if (iconNum == 34) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-512.png)");
					} else if (iconNum == 35) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-512.png)");
					} else if (iconNum == 36) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-512.png)");
					} else if (iconNum == 37) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-512.png)");
					} else if (iconNum == 38) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-512.png)");
					} else if (iconNum == 39) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-14-512.png)");
					} else if (iconNum == 40) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-14-512.png)");
					} else if (iconNum == 41) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-12-512.png)");
					} else if (iconNum == 42) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-12-512.png)");
					} else if (iconNum == 43) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-13-512.png)");
					} else if (iconNum == 44) {
						$("body").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-13-512.png)");
					} else {
						console.log("Hello");
						location.reload();
					}
				});
			});
		}, 1500)
	}
});