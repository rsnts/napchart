/*
This module is the core of the application.
It handles low level storing of the current schedule

*/

window.napchartCore=(function(){
	//private:
	var scheduleData={

	}

	//public:
	return {

		setSchedule:function(data){
			console.dir(data);
			scheduleData=JSON.parse(JSON.stringify(data));

			//draw
			draw.drawFrame(scheduleData);
		},

		getSchedule:function(){
			return scheduleData;
		},

		addToSchedule:function(name,obj){
			if(typeof scheduleData[name]=='undefined'){
				scheduleData[name]=[];
			}

			scheduleData[name].push(obj);
			this.setSchedule(scheduleData);
		},

		removeFromSchedule:function(name,index){
			scheduleData[name].splice(index,1);
		},

		start:function(){

		},

		howMany:function(name){
			if(typeof scheduleData[name]=='undefined'){
				scheduleData[name]=[];
			}
			return scheduleData[name].length;
		},

		lastElement:function(name){
			if(typeof scheduleData[name]=='undefined'){
				console.warn('lastElement received an undefined name')
				return false;
			}

			return scheduleData[name][scheduleData[name].length-1];
		}
	}

}());