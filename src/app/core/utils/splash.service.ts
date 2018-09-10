import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable()
export class SplashUtil{
    
    preloaderId = 'preloader';
    preloaderElm = null;
    renderer: Renderer2 = null

    constructor(private rendererFactory: RendererFactory2){
        this.renderer = rendererFactory.createRenderer(null, null);
        this.preloaderElm = document.getElementById(this.preloaderId);
        this.renderer.addClass( this.preloaderElm, 'animated' );
    }

    showSplash(){
        this.renderer.setStyle(this.preloaderElm,'display','block');
        this.renderer.addClass(this.preloaderElm,'fadeIn');
    }

    hideSplash(){
        this.renderer.addClass(this.preloaderElm,'fadeOut');
        setTimeout(()=> {
            this.renderer.setStyle(this.preloaderElm,'display','none');
        },1000);
    }
}