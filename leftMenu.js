
/*
	Hi, my name is LiangXiao, in this code,it is a menu flexable effect,
	you see,my English is so bad , hope you can apologize,hahahahahaha.
	my code is so bad,you can change it freely,so i can learn your code.
*/
window.onload=function(){
	var contentHeights=new Array();//store all height of menu-content
	var t=new Array();//store all interval Object when click the menu-title
	var menuTitles=document.getElementsByClassName('menu-title');//get menu-title element
	var menuContents=document.getElementsByClassName('menu-content');//get menu-content element
	/*
	store all height of menu-content and 
	set the style height to '0px'
	position to 'static',
	visibility to 'visible'
	*/
	for(var i=0;i<menuContents.length;i++){
		contentHeights[i]=parseInt(menuContents[i].offsetHeight);
		menuContents[i].style.height="0px";
		menuContents[i].style.position="static";
		menuContents[i].style.visibility="visible";
	}
	/*
		add the mounse click event for each menu-title

	*/
	for(var i=0;i<menuTitles.length;i++){
		menuTitles[i].onclick=function(){
			//get the data-index attribute the first is 0,second is 1...
			//because in this field i cannot access the 'i' in the for
			var index=parseInt(this.getAttribute('data-index'));
			//get the offsetHeight attribute that i can judge stretch or shrink
			var h=parseInt(menuContents[index].offsetHeight);
			if(h>0){
				//menuContents[index].style.height="0px";
				transformHeight(index,0);
				this.style.backgroundImage="url(images/up_direct.png)";
			}
			else{
				//menuContents[index].style.height=contentHeight;
				transformHeight(index,contentHeights[index]);
				this.style.backgroundImage="url(images/down_direct.png)";
			}
			

		}
		
	}
	/*
		control the menu-content's height at index,
		I am facing a problem ,
		the speed of element's transform in height 
		i can't work out.sorry,my English is bad.haaaaaaaaa
	*/
	function transformHeight(index,height){
		var obj=menuContents[index];
		var h=parseInt(obj.offsetHeight);
		if(h!=h || h<0){
			h=0;
		}
		if(h!=0){
			clearInterval(t[index]);
			t[index]=setInterval(function(){
				h=h-h/10-0.5;
				obj.style.height=h+"px";
				if(h<=height){
					obj.style.height=height+"px";
					clearInterval(t[index]);
				}
			},10);
		}
		else{
			/*
				in this ,i can't work out the speed,attribute to 
				the effect is not beautiful,but i believe you can.
				change it!
			*/
			var hSpeed=height*0.6;
			clearInterval(t[index]);
			t[index]=setInterval(function(){
				if(h==0){
					h=2;
				}
				h=h+hSpeed/h+1;
				hSpeed=hSpeed/1.1;
				obj.style.height=h+"px";
				if(h>=height){
					obj.style.height=height+"px";
					clearInterval(t[index]);
				}
			},5);
		}
		
	}
	
}

