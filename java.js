    function tsetX(){
        var name = window.txt.value;
        if(name == 7272626829714842724139){
            alert('تم الحقق من بريدك بنجاح  ستعتر على رمز الهدية بالاسفل');
	        document.getElementById("CD").innerHTML = "DE8V T4EV DFI9";
        	}
	    else{
	         alert('الرمز غير صحيح تحقق من بريدك');
    	}
    }

    function tset(){
		  document.getElementById("US").innerHTML = "GFHE E4RV SF5C";
		  alert('تهانينا  لقد حصلت على كود الجائزة  قم بنسخ الكود و الضغط على زر اسفله  لاستبداله و اكتشاف الجائزة');
	}
	
	function tset1(){
		  document.getElementById("US").innerHTML = "FR4T VFVZ 5FH9";
		  alert('تهانينا  لقد حصلت على كود الجائزة  قم بنسخ الكود و الضغط على زر اسفله  لاستبداله و اكتشاف الجائزة');
	}
	
	function tset2(){
		  document.getElementById("US").innerHTML = "ACRF FHY5 DF3T";
		  alert('تهانينا  لقد حصلت على كود الجائزة  قم بنسخ الكود و الضغط على زر اسفله  لاستبداله و اكتشاف الجائزة');
	}
	
	function tset3(){
		  document.getElementById("US").innerHTML = "DFV5 RFYB 9DF4";
		  alert('تهانينا  لقد حصلت على كود الجائزة  قم بنسخ الكود و الضغط على زر اسفله  لاستبداله و اكتشاف الجائزة');
	}
	
	function tset4(){
		  document.getElementById("US").innerHTML = "VRMP 5CR8 DFH1";
		  alert('تهانينا  لقد حصلت على كود الجائزة  قم بنسخ الكود و الضغط على زر اسفله  لاستبداله و اكتشاف الجائزة');
	}
	
	function tset5(){
		  document.getElementById("US").innerHTML = "CDZE V78Z DG5Y";
		  alert('تهانينا  لقد حصلت على كود الجائزة  قم بنسخ الكود و الضغط على زر اسفله  لاستبداله و اكتشاف الجائزة');
	}
	
	
	
	var pArray = ['عزيزي  الناجي ' , 'بمناسبة شهر رمضان', 'نحن نوزع اكواد الهدايا مجانا', 'لتحصل على الكود اضغط على الزر اسفله'],
	textContainer = document.querySelector("#text_container > p"),
	s,
	mainCouner = 0,
	elementCouneter = 0;
	window.onload = chooseElement;
	function chooseElement(){
		textWrite(pArray[mainCouner].split(""));
	}

	function textWrite(item){
		clearTimeout(s);
		if (elementCouneter < item.length){
			textContainer.textContent += item[elementCouneter];
			elementCouneter ++;
			s = setTimeout(function(){textWrite(item)}, 100);
		}
		else{
			s = setTimeout(function(){textDelete(item)}, 1000);
		}
	}

	function textDelete(item){
		if(item.length >= 1){
			item.pop();
			elementCouneter--;
			textContainer.textContent = item.join("");
			s = setTimeout(function(){textDelete(item)}, 50);
		}
		else{
			clearTimeout(s);
			mainCouner ++;
			if (mainCouner >= pArray.length){
				mainCouner = 0;
				s = setTimeout(chooseElement, 2000);
			}
			else{
				s = setTimeout(chooseElement, 2000);
			}
		}
	}