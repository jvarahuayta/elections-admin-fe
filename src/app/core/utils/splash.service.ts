import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable()
export class SplashUtil{
    
    preloaderId = 'preloader';
    preloaderElm = null;
    renderer: Renderer2 = null
    isVisible = true;

    constructor(private rendererFactory: RendererFactory2){
        this.renderer = rendererFactory.createRenderer(null, null);
        this.preloaderElm = document.getElementById(this.preloaderId);
        this.renderer.addClass( this.preloaderElm, 'animated' );
    }

    showSplash(){
        if( this.isVisible ){ return; }
        this.renderer.setStyle(this.preloaderElm,'display','block');
        this.renderer.removeClass(this.preloaderElm,'fadeOut');
        this.renderer.addClass(this.preloaderElm,'fadeIn');
        this.isVisible = true;
    }

    hideSplash(){
        if( !this.isVisible ){ return; }
        this.renderer.removeClass(this.preloaderElm,'fadeIn');
        this.renderer.addClass(this.preloaderElm,'fadeOut');
        setTimeout(()=> {
            this.renderer.setStyle(this.preloaderElm,'display','none');
            this.isVisible = false;
        },1000);
    }
}