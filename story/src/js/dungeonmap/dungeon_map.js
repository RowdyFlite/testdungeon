Macro.add('DrawDungeonMapNode', {
	skipArgs : true,
	tags: [],
	handler: function(){
		try{
			// https://www.motoslave.net/sugarcube/2/docs/#macrocontext-api
			// .args
		} catch (ex){
			return this.error("Error in DrawDungeonMapNode macro: " + ex.message);
		}
	}
});