import { appModeStore } from './../../stores/app-mode/app-mode.js';
import { AppMode } from '../../domain/models/app-mode.js';

function AppModeService(modeStore){
    console.log('konstruktor',modeStore);
    this.appModeStore = modeStore;
}

AppModeService.prototype.getAppMode = function(){
    return this.appModeStore;
}

AppModeService.prototype.panic = function(){

   this.getAppMode().set(
    new AppMode(AppMode.MODE_PANIC)
   );
}




export let appModeService = new AppModeService(appModeStore);
console.log('instanca', appModeService);
