// V.1.2.

// CHANGELOG:

// v.1.2.
// - Removed scrollbars on Windows mostly, but affects everything. 
//   - Scrollbars caused the grid to break and there was never any need to scroll anyways.
// - Added url params: cols, overlay, overlayColor, overlayOpacity, filter, verticalOffset
//   - More on these in the readme.

// v.1.1.
// - No changes to scraping, just to the screensaver web page 
// - Row height is calculated automatically to make sure there are always enough covers to fill the screen vertically.
//   - Before this I just set grid rotator's row length to something that would in most cases fill the screen, which 
//     would in some cases make it so you'd have almost a full screen height worth of covers animating outside of 
//     the viewport that you'd never get to see. That would also make it so the animating was more sporadic, 
//     because it didn't all happen inside the viewport.
//
// - Covers are shuffled on every page load, where as before it would rotate in random, but the initial covers were 
//   always the same and that got a little boring.


// v.1.0.
// - First version
(function() {
  
  String.prototype.trimAll = function(){
    return this.trim().replace(/\s+/g,' ');
  }
  
  // https://github.com/Mikhus/domurl
  !function(t){"use strict";var y=/^[a-z]+:/,d=/[-a-z0-9]+(\.[-a-z0-9])*:\d+/i,v=/\/\/(.*?)(?::(.*?))?@/,r=/^win/i,g=/:$/,m=/^\?/,q=/^#/,w=/(.*\/)/,A=/^\/{2,}/,I=/(^\/?)/,e=/'/g,o=/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,n=/%([cd][0-9a-f])%([89ab][0-9a-f])/gi,i=/%([0-7][0-9a-f])/gi,s=/\+/g,a=/^\w:$/,C=/[^/#?]/;var p,S="undefined"==typeof window&&"undefined"!=typeof global&&"function"==typeof require,b=!S&&t.navigator&&t.navigator.userAgent&&~t.navigator.userAgent.indexOf("MSIE"),x=S?t.require:null,j={protocol:"protocol",host:"hostname",port:"port",path:"pathname",query:"search",hash:"hash"},z={ftp:21,gopher:70,http:80,https:443,ws:80,wss:443};function E(){return S?p=p||"file://"+(process.platform.match(r)?"/":"")+x("fs").realpathSync("."):"about:srcdoc"===document.location.href?self.parent.document.location.href:document.location.href}function h(t,r,e){var o,n,i;r=r||E(),S?o=x("url").parse(r):(o=document.createElement("a")).href=r;var a,s,p=(s={path:!0,query:!0,hash:!0},(a=r)&&y.test(a)&&(s.protocol=!0,s.host=!0,d.test(a)&&(s.port=!0),v.test(a)&&(s.user=!0,s.pass=!0)),s);for(n in i=r.match(v)||[],j)p[n]?t[n]=o[j[n]]||"":t[n]="";if(t.protocol=t.protocol.replace(g,""),t.query=t.query.replace(m,""),t.hash=F(t.hash.replace(q,"")),t.user=F(i[1]||""),t.pass=F(i[2]||""),t.port=z[t.protocol]==t.port||0==t.port?"":t.port,!p.protocol&&C.test(r.charAt(0))&&(t.path=r.split("?")[0].split("#")[0]),!p.protocol&&e){var h=new L(E().match(w)[0]),u=h.path.split("/"),c=t.path.split("/"),f=["protocol","user","pass","host","port"],l=f.length;for(u.pop(),n=0;n<l;n++)t[f[n]]=h[f[n]];for(;".."===c[0];)u.pop(),c.shift();t.path=("/"!==r.charAt(0)?u.join("/"):"")+"/"+c.join("/")}t.path=t.path.replace(A,"/"),b&&(t.path=t.path.replace(I,"/")),t.paths(t.paths()),t.query=new U(t.query)}function u(t){return encodeURIComponent(t).replace(e,"%27")}function F(t){return(t=(t=(t=t.replace(s," ")).replace(o,function(t,r,e,o){var n=parseInt(r,16)-224,i=parseInt(e,16)-128;if(0==n&&i<32)return t;var a=(n<<12)+(i<<6)+(parseInt(o,16)-128);return 65535<a?t:String.fromCharCode(a)})).replace(n,function(t,r,e){var o=parseInt(r,16)-192;if(o<2)return t;var n=parseInt(e,16)-128;return String.fromCharCode((o<<6)+n)})).replace(i,function(t,r){return String.fromCharCode(parseInt(r,16))})}function U(t){for(var r=t.split("&"),e=0,o=r.length;e<o;e++){var n=r[e].split("="),i=decodeURIComponent(n[0].replace(s," "));if(i){var a=void 0!==n[1]?F(n[1]):null;void 0===this[i]?this[i]=a:(this[i]instanceof Array||(this[i]=[this[i]]),this[i].push(a))}}}function L(t,r){h(this,t,!r)}U.prototype.toString=function(){var t,r,e="",o=u;for(t in this){var n=this[t];if(!(n instanceof Function||void 0===n))if(n instanceof Array){var i=n.length;if(!i){e+=(e?"&":"")+o(t)+"=";continue}for(r=0;r<i;r++){var a=n[r];void 0!==a&&(e+=e?"&":"",e+=o(t)+(null===a?"":"="+o(a)))}}else e+=e?"&":"",e+=o(t)+(null===n?"":"="+o(n))}return e},L.prototype.clearQuery=function(){for(var t in this.query)this.query[t]instanceof Function||delete this.query[t];return this},L.prototype.queryLength=function(){var t=0;for(var r in this.query)this.query[r]instanceof Function||t++;return t},L.prototype.isEmptyQuery=function(){return 0===this.queryLength()},L.prototype.paths=function(t){var r,e="",o=0;if(t&&t.length&&t+""!==t){for(this.isAbsolute()&&(e="/"),r=t.length;o<r;o++)t[o]=!o&&a.test(t[o])?t[o]:u(t[o]);this.path=e+t.join("/")}for(o=0,r=(t=("/"===this.path.charAt(0)?this.path.slice(1):this.path).split("/")).length;o<r;o++)t[o]=F(t[o]);return t},L.prototype.encode=u,L.prototype.decode=F,L.prototype.isAbsolute=function(){return this.protocol||"/"===this.path.charAt(0)},L.prototype.toString=function(){return(this.protocol&&this.protocol+"://")+(this.user&&u(this.user)+(this.pass&&":"+u(this.pass))+"@")+(this.host&&this.host)+(this.port&&":"+this.port)+(this.path&&this.path)+(this.query.toString()&&"?"+this.query)+(this.hash&&"#"+u(this.hash))},t[t.exports?"exports":"Url"]=L}("undefined"!=typeof module&&module.exports?module:window);
  
  var currentPage = 1; var pagesTotal;
  var loading = function( staticText, pageCounter ) {
    var h = ['.  ', '.. ', '...', '   '];
    var i = 0;
    return setInterval(() => {
      i = (i > 3) ? 0 : i;
      console.clear();
      console.log( (pageCounter ? currentPage +'/'+ pagesTotal + ' pages - ' : '') + (staticText ? staticText : 'Loading') + h[i]);
      i++;
    }, 300);
  };
  
  var get = function( url, callback ) {
    var script = document.createElement('script');
    script.onload = function () { callback(); };
    script.src = url;
    document.head.appendChild(script);
  }
  
  
  var sourcePrefix = "https://cdnjs.cloudflare.com/ajax/libs/";
  get( sourcePrefix + "jszip/3.5.0/jszip.min.js", function() {
    get( sourcePrefix + "jszip-utils/0.1.0/jszip-utils.min.js", function() {
      get( "https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js", function() {
        get( sourcePrefix + "lodash.js/4.17.15/lodash.min.js", function() {
          get( sourcePrefix + "axios/0.21.1/axios.min.js", init);
        });
      });
    });
  });
  
  function init() {
    
    
    var inAudible = window.location.hostname.lastIndexOf('www.audible.') > -1;
    var inLibrary = window.location.pathname.lastIndexOf('/library/titles') > -1;
    
    if ( inAudible && inLibrary ) {
      
      var probeTimer = loading('Fetching covers');
      axios.get( getUrl() ).then(function( response ) {
          
        var audible = $($.parseHTML(response.data)).find('div.adbl-main');
        var lastPageNumberEl = audible.find('#pagination-a11y-skiplink-target .pageNumberElement.bc-link:last');
        lastPageNumber = lastPageNumberEl.length > 0 ? parseFloat( lastPageNumberEl.data('value') ) : 1;
        
        pagesTotal = lastPageNumber;
        clearInterval( probeTimer );
        console.clear();
        var pageTimer = loading('Fetching covers', true);
        var pageRange = _.range(1, lastPageNumber+1 );
        
        ajaxios({
          request: _.map( pageRange, function( page ) { return	getUrl( page ); }),
          step: function( response ) {
            
            if (response.status >= 400) {
              console.log( 'something went wrong with this page' );
              console.log( response );
            }
            else {
              
              ++currentPage;
              
              var audible = $($.parseHTML(response.data)).find('div.adbl-main');
              var contentWrapper = audible.find('#adbl-library-content-main');
              var titles = contentWrapper.find('.adbl-library-content-row');
              
              var books = [];
              titles.each(function() {
                var getBooks = fetchBookDetails( $(this) );
                if ( getBooks ) books.push( getBooks );
              });
              
              if ( books.length > 0 ) return books;
              
            }
            
          },
          done: function( responses ) {

            clearInterval( pageTimer );
            console.clear();
            
            let books = _.flatten( responses );
            processOutput( books );
            
          }
        });
        
      });
      
    }
    else {
      console.log("Error: You need to be in your wishlist page, this doesn't seem to be it...");
    }
    
  }
  
  function getUrl( page ) {
    
    var url;
    url = new Url( window.location.href );
    
    url.query.pageSize = 30;
    if ( page ) url.query.page = page;
    else url.query.page = 1;
    
    url = url.toString();
    return url;
    
  }
  
  // Goes through ever row of titles in the current page and fetches relevant data
  function fetchBookDetails( row ) {
    
    var book = {};
    
    var cover = row.find('a > img.bc-image-inset-border');
    if ( cover.length > 0 ) book.cover = cover.attr('src');
    
    var title  = row.find('ul > li:nth-child(1) > a > span');
    if ( title.length > 0 ) book.title = _.kebabCase( title.text().trimAll() );
    
    return (book.title && book.cover) ? book : null;
    
  }
  
  function processOutput( books ) {
    
    // books.length = 40;
    
    var outputTimer = loading('Packing covers into a .zip file (may take a few minutes)');
    
    var zip = new JSZip();
    var coversFolder = zip.folder("covers");
    
    var coversArray = _.map( books, function( book ) {
      return '          <li><a href="#"><img src="'+ ('covers/' + book.title + '.jpg') +'"/></a></li>';
    });
    zip.file("index.html", indexHTML( _.shuffle(coversArray).join('\n') ) );
    
    var additionalFiles = [
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js',
      // 'https://raw.githubusercontent.com/codrops/AnimatedResponsiveImageGrid/master/js/jquery.gridrotator.js', 
      'https://raw.githubusercontent.com/codrops/AnimatedResponsiveImageGrid/master/css/style.css',
      'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js',
    ];
    
    zip.file("grid.rotator.js", gridRotator());
    
    books = books.concat(additionalFiles);
    
    let count = 0;
    _.each( books , function(book) {
      JSZipUtils.getBinaryContent( (_.isString(book) ? book : book.cover), function(err, data) {
        
        if (err) throw err;
        
        if ( data && _.isString(book) ) {
          var url = book;
          var fileName = url.substring(url.lastIndexOf('/') + 1);
          zip.file(fileName, data, { binary: true });
        }
        else if ( data && _.isObject(book) && book.cover && book.title ) {
          coversFolder.file(book.title+'.jpg', data, { binary: true });
        }
        
        count++;
        if (count == books.length) {
          zip.generateAsync({ type: "blob" }).then(function(content) {
            clearInterval( outputTimer );
            console.clear();
            console.log('Cover export completed.');
            saveAs(content, "audible-library-covers.zip");
          }).catch(function( e ) {
            clearInterval( outputTimer );
            console.log( e );
          });
        }
        
      });
    });
    
  }
  
  function ajaxios( options ) {
    
    Promise.all(
      options.request.map( function( url  ) {
        var urlIsObject = _.isObject( url );
        return axios.get( (urlIsObject ? url.cover : url), (options.cofig || {})).then(function( response ) {
          return response ? options.step( response, url ) : null;
        }).catch(function( e ) {
          return e.response ? options.step( e.response, url ) : null;
        });
      })
    ).then( function( response ) {
      options.done( response ); 
    }).catch(function (error) {
      // handle error
      console.log(error);
    });
    
  }
  
  
  function indexHTML( covers ) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    
      <meta charset="UTF-8">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <title>audible library covers</title>
      
      <link href="style.css" rel="stylesheet" />
      <style>
        html {
          width: 100%;
          height: 100%;
        }
        body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: #252525;
          background-image: url("data:image/gif;base64,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");
          background-repeat: no-repeat;
          background-position: center center;
          overflow: hidden;
          transition: filter 2s ease-in-out;
        }
        
        #overlay {
          opacity: 0;
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -999;
          background-color: #151515;
          transition: opacity 2s ease-in-out;
        }
        #overlay.active { 
          opacity: .85;
          z-index: 999;
        };
      </style>
      
    </head>
    <body>
    
      <noscript>This gallery requires javascript to work!</noscript>
      
      <div id="ri-grid" class="ri-grid ri-grid-size-3">
        <ul>
${ covers }
        </ul>
      </div>
      
      <script src="jquery.min.js"></script>
      <script src="modernizr.min.js"></script>
      <script src="grid.rotator.js"></script>
      
      <script>
        $(function() {
          
          $.fn.shuffle = function() {
      
              var allElems = this.get(),
                  getRandom = function(max) {
                      return Math.floor(Math.random() * max);
                  },
                  shuffled = $.map(allElems, function(){
                      var random = getRandom(allElems.length),
                          randEl = $(allElems[random]).clone(true)[0];
                      allElems.splice(random, 1);
                      return randEl;
                });
      
              this.each(function(i){
                  $(this).replaceWith($(shuffled[i]));
              });
      
              return $(shuffled);
      
          };
          
          $('#ri-grid > ul > li').shuffle();
          
          var gridConfig = {
            interval: 3000,
            // animation type
            // showHide || fadeInOut || slideLeft || 
            // slideRight || slideTop || slideBottom || 
            // rotateLeft || rotateRight || rotateTop || 
            // rotateBottom || scale || rotate3d || 
            // rotateLeftScale || rotateRightScale || 
            // rotateTopScale || rotateBottomScale || random
            animType: 'random',
            // animation speed
            animSpeed: 900,
            // step: number of items that are replaced at the same time
            // random || [some number]
            // note: for performance issues, the number should not be > options.maxStep
            step   : 'random',
            maxStep: 3,
          }
          
          var paramCols = getUrlParam(window.location.href, 'cols') || getUrlParam(window.location.href, 'columns');
          if ( paramCols && parseInt( paramCols, 10) > 0 ) {
            gridConfig.columns = paramCols;
          }
          else {
            gridConfig.columns = 8;               // screen width over 1550px = 8 covers side by side
            gridConfig.w1550   = { columns: 6 };  // screen width less than 1550px = 6 covers side by side
            gridConfig.w1300   = { columns: 4 };  // screen width less than 1300px = 5 covers side by side
            gridConfig.w950    = { columns: 3 };  // screen width less than 950px = 4 covers side by side
            gridConfig.w600    = { columns: 2 };  // screen width less than 600px = 2 covers side by side
          }
          
          // Note, the covers are 500x500px, so if they happen to end up bigger than that due to 
          // the settings, they may start looking pixelated/blurry.
          
          // https://tympanus.net/codrops/2012/08/02/animated-responsive-image-grid/
          $('#ri-grid').gridrotator( gridConfig );
          
          var paramOverlay = getUrlParam(window.location.href, 'overlay');
          if ( paramOverlay ) {
            var overlay = $('#overlay');
            overlay.addClass('active');
            
            var paramOverlayOpacity = getUrlParam(window.location.href, 'overlayOpacity');
            if ( paramOverlayOpacity ) overlay.css({ opacity: paramOverlayOpacity });
            
            var paramOverlayColor = getUrlParam(window.location.href, 'overlayColor');
            if ( paramOverlayColor ) overlay.css({ 'background-color': paramOverlayColor });
            
          }
          
          var paramFilter = getUrlParam(window.location.href, 'filter');
          if ( paramFilter ) $('body').css({ filter: paramFilter });
          
          var paramVerticalOffset = getUrlParam(window.location.href, 'verticalOffset');
          if ( paramVerticalOffset ) $('#ri-grid').css({ bottom: paramVerticalOffset + 'px' });
          
          function getUrlVars( url ) {
            var vars = {};
            var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
              vars[key] = value;
            });
            return vars;
          }     
          function getUrlParam(url, parameter, defaultvalue){
            var urlparameter = defaultvalue;
            if(url.indexOf(parameter) > -1){
              urlparameter = getUrlVars( url )[parameter];
            }
            return urlparameter;
          }
          
        
        });
      </script>
      
    </body>
    </html>
    `;
  }
  
  function gridRotator() {
    return `
    /**
     * jquery.gridrotator.js v1.1.0
     * http://www.codrops.com
     *
     * Licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     *
     * Copyright 2012, Codrops
     * http://www.codrops.com
     */
    ;( function( $, window, undefined ) {
    
      'use strict';
    
      /*
      * debouncedresize: special jQuery event that happens once after a window resize
      *
      * latest version and complete README available on Github:
      * https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
      *
      * Copyright 2011 @louis_remi
      * Licensed under the MIT license.
      */
      var $event = $.event,
      $special,
      resizeTimeout;
    
      $special = $event.special.debouncedresize = {
        setup: function() {
          $( this ).on( "resize", $special.handler );
        },
        teardown: function() {
          $( this ).off( "resize", $special.handler );
        },
        handler: function( event, execAsap ) {
          // Save the context
          var context = this,
            args = arguments,
            dispatch = function() {
              // set correct event type
              event.type = "debouncedresize";
              $event.dispatch.apply( context, args );
            };
    
          if ( resizeTimeout ) {
            clearTimeout( resizeTimeout );
          }
    
          execAsap ?
            dispatch() :
            resizeTimeout = setTimeout( dispatch, $special.threshold );
        },
        threshold: 100
      };
    
      // http://www.hardcode.nl/subcategory_1/article_317-array-shuffle-function
      function shuffle(a) {
        var i=a.length,p,t;
        while (i--) {
          p = Math.floor(Math.random()*a.length);
          t = a[i];
          a[i]=a[p];
          a[p]=t;
        }
      }
    
      // HTML5 PageVisibility API
      // http://www.html5rocks.com/en/tutorials/pagevisibility/intro/
      // by Joe Marini (@joemarini)
      function getHiddenProp(){
        var prefixes = ['webkit','moz','ms','o'];
    
        // if 'hidden' is natively supported just return it
        if ('hidden' in document) return 'hidden';
    
        // otherwise loop over all the known prefixes until we find one
        for (var i = 0; i < prefixes.length; i++){
          if ((prefixes[i] + 'Hidden') in document)
            return prefixes[i] + 'Hidden';
        }
    
        // otherwise it's not supported
        return null;
      }
      function isHidden() {
        var prop = getHiddenProp();
        if (!prop) return false;
    
        return document[prop];
      }
    
      function isEmpty( obj ) {
        return Object.keys(obj).length === 0;
      }
    
      // global
      var $window = $( window ),
        Modernizr = window.Modernizr;
    
      $.GridRotator = function( options, element ) {
    
        this.$el = $( element );
        if( Modernizr.backgroundsize ) {
    
          var self = this;
          this.$el.addClass( 'ri-grid-loading' );
          this._init( options );
    
        }
    
      };
    
      // the options
      $.GridRotator.defaults = {
        // number of rows
        rows : 4,
        // number of columns
        columns : 10,
        // step: number of items that are replaced at the same time
        // random || [some number]
        // note: for performance issues, the number "can't" be > options.maxStep
        step : 'random',
        // change it as you wish..
        maxStep : 3,
        // prevent user to click the items
        preventClick : true,
        // animation type
        // showHide || fadeInOut ||
        // slideLeft || slideRight || slideTop || slideBottom ||
        // rotateBottom || rotateLeft || rotateRight || rotateTop ||
        // scale ||
        // rotate3d ||
        // rotateLeftScale || rotateRightScale || rotateTopScale || rotateBottomScale ||
        // random
        animType : 'random',
        // animation speed
        animSpeed : 800,
        // animation easings
        animEasingOut : 'linear',
        animEasingIn: 'linear',
        // the item(s) will be replaced every 3 seconds
        // note: for performance issues, the time "can't" be < 300 ms
        interval : 3000,
        // if false the animations will not start
        // use false if onhover is true for example
        slideshow : true,
        // if true the items will switch when hovered
        onhover : false,
        // ids of elements that shouldn't change
        nochange : [],
        // callback function when drawn
        onDraw : function(){},
        // Height to Width Ratio (Height/Width). A 0.5 ratio would be used for an image that is twice as large as it's height. Default is 1 (square images).
        heightToWidthRatio : 1,
        subImg : false
      };
    
      $.GridRotator.prototype = {
    
        _init : function( options ) {
    
          // options
          this.options = $.extend( true, {}, $.GridRotator.defaults, options );
          // cache some elements + variables
          this._config();
    
        },
        _config : function() {
    
          var self = this,
            transEndEventNames = {
              'WebkitTransition' : 'webkitTransitionEnd',
              'MozTransition' : 'transitionend',
              'OTransition' : 'oTransitionEnd',
              'msTransition' : 'MSTransitionEnd',
              'transition' : 'transitionend'
            };
    
          // support CSS transitions and 3d transforms
          this.supportTransitions = Modernizr.csstransitions;
          this.supportTransforms3D = Modernizr.csstransforms3d;
    
          this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.gridrotator';
    
          // all animation types for the random option
          this.animTypes = this.supportTransforms3D ? [
            'fadeInOut',
            'slideLeft',
            'slideRight',
            'slideTop',
            'slideBottom',
            'rotateLeft',
            'rotateRight',
            'rotateTop',
            'rotateBottom',
            'scale',
            'rotate3d',
            'rotateLeftScale',
            'rotateRightScale',
            'rotateTopScale',
            'rotateBottomScale' ] :
            [ 'fadeInOut', 'slideLeft', 'slideRight', 'slideTop', 'slideBottom' ];
    
          this.animType = this.options.animType;
    
          if( this.animType !== 'random' && !this.supportTransforms3D && $.inArray( this.animType, this.animTypes ) === -1 && this.animType !== 'showHide' ) {
    
            // fallback to 'fadeInOut' if user sets a type which is not supported
            this.animType = 'fadeInOut';
    
          }
    
          this.animTypesTotal	= this.animTypes.length;
    
          // the <ul> where the items are placed
          this.$list = this.$el.children( 'ul' );
          // remove images and add background-image to anchors
          // preload the images before
          var loaded = 0,
            subbed = 0,
            $imgs = this.$list.find( 'img' ),
            count = $imgs.length,
            subColors = ["#D92727", "#FFE433", "#0DB8B5"];
    
    
          // Check if the substitute image is available
          if( self.options.subImg ) {
    
            $( '<img/>' ).error( function() {
    
              self.options.subImg = false;
    
            } ).attr('src', self.options.subImg);
    
          }
    
          $imgs.each( function() {
    
            var $img = $( this ), src = $img.attr( 'src' );
    
            $( '<img/>' ).load( function() {
    
              ++loaded;
              $img.parent().css( 'background-image', 'url(' + src + ')' );
    
              /*This conditional block should be moved out to remove redundancy =)*/
              if( loaded + subbed === count ) {
    
                $imgs.remove();
                self.$el.removeClass( 'ri-grid-loading' );
                // the items
                self.$items = self.$list.children( 'li' );
                // make a copy of the items
                self.$itemsCache = self.$items.clone();
                // total number of items
                self.itemsTotal = self.$items.length;
                // the items that will be out of the grid
                // actually the item's child (anchor element)
                self.outItems= [];
                self._layout( function() {
                  self._initEvents();
                } );
                // replace [options.step] items after [options.interval] time
                // the items that go out are randomly chosen, while the ones that get in
                // follow a "First In First Out" logic
                self._start();
    
              }
    
            } ).attr( 'src', src );
    
            // If something is wrong with the image…
            $( '<img/>' ).error( function() {
    
              ++subbed;
    
              // Are there any substitute images?
              if( self.options.subImg ) {
    
                $img.parent().css( 'background-image', 'url(' + self.options.subImg + ')' );
    
              }
    
              else {
    
                var color = Math.floor(Math.random() * 3)
                $img.parent().css( 'background', subColors[color] );
    
              }
    
              // console.log(self.options)
    
              /*This conditional block should be moved out to remove redundancy =)*/
              if( loaded + subbed === count ) {
    
                $imgs.remove();
                self.$el.removeClass( 'ri-grid-loading' );
                // the items
                self.$items = self.$list.children( 'li' );
                // make a copy of the items
                self.$itemsCache = self.$items.clone();
                // total number of items
                self.itemsTotal = self.$items.length;
                // the items that will be out of the grid
                // actually the item's child (anchor element)
                self.outItems= [];
                self._layout( function() {
                  self._initEvents();
                } );
                // replace [options.step] items after [options.interval] time
                // the items that go out are randomly chosen, while the ones that get in
                // follow a "First In First Out" logic
                self._start();
    
              }
    
            }	).attr( 'src', src );
    
    
    
          } );
    
        },
        _layout : function( callback ) {
    
          var self = this;
    
          // sets the grid dimentions based on the container's width
          this._setGridDim();
    
          // reset
          this.$list.empty();
          this.$items = this.$itemsCache.clone().appendTo( this.$list );
    
          var $outItems = this.$items.filter( ':gt(' + ( this.showTotal - 1 ) + ')' ),
            $outAItems = $outItems.children( 'a' );
    
          this.outItems.length = 0;
    
          $outAItems.each( function( i ) {
            self.outItems.push( $( this ) );
          } );
    
          $outItems.remove();
    
            // container's width
          var containerWidth = ( document.defaultView ) ? parseInt( document.defaultView.getComputedStyle( this.$el.get( 0 ), null ).width ) : this.$el.width(),
            // item's width
            itemWidth = Math.floor( containerWidth / this.columns ),
            // calculate gap
            gapWidth = containerWidth - ( this.columns * Math.floor( itemWidth ) );
    
          for( var i = 0; i < this.rows; ++i ) {
    
            for( var j = 0; j < this.columns; ++j ) {
    
              var idx = this.columns * i + j,
                $item = this.$items.eq( idx );
    
              $item.css( {
                width : j < Math.floor( gapWidth ) ? itemWidth + 1 : itemWidth,
                height : Math.floor( itemWidth * this.options.heightToWidthRatio )
              } );
    
              if( $.inArray( idx, this.options.nochange ) !== -1 ) {
                $item.addClass( 'ri-nochange' ).data( 'nochange', true );
              }
    
            }
    
          }
    
          if( this.options.preventClick ) {
    
            this.$items.children().css( 'cursor', 'default' ).on( 'click.gridrotator', false );
    
          }
    
          if( callback ) {
            callback.call();
          }
    
          this.options.onDraw.call(this);
    
        },
        // set the grid rows and columns
        _setGridDim	 : function() {
    
          // container's width
          var c_w = this.$el.width();
    
          // we will choose the number of rows/columns according to the container's width and the values set in the plugin options
          switch( true ) {
            case ( c_w < 600  ) : this.columns = this.options.w600  ? this.options.w600.columns  : this.options.columns; break;
            case ( c_w < 950  ) : this.columns = this.options.w950  ? this.options.w950.columns  : this.options.columns; break;
            case ( c_w < 1200 ) : this.columns = this.options.w1300 ? this.options.w1300.columns : this.options.columns; break;
            case ( c_w < 1550 ) : this.columns = this.options.w1550 ? this.options.w1550.columns : this.options.columns; break;
            default : this.columns = this.options.columns; break;
          }
          
          var calculateRows = function( cols ) {
            var coverWidth = ($(window).width()/cols);
            var rows = Math.ceil( $(window).height() / coverWidth );
            return rows;
          };
          
          this.rows = calculateRows( this.columns );
          
          this.showTotal = this.rows * this.columns;
    
        },
        // init window resize event
        _initEvents : function() {
    
          var self = this;
    
          $window.on( 'debouncedresize.gridrotator', function() {
            self._layout();
          } );
    
          // use the property name to generate the prefixed event name
          var visProp = getHiddenProp();
    
          // HTML5 PageVisibility API
          // http://www.html5rocks.com/en/tutorials/pagevisibility/intro/
          // by Joe Marini (@joemarini)
          if (visProp) {
    
            var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() { self._visChange(); } );
    
          }
    
          if( !Modernizr.touch && this.options.onhover ) {
    
            self.$items.on( 'mouseenter.gridrotator', function() {
    
              var $item = $( this );
              if( !$item.data( 'active' ) && !$item.data( 'hovered' ) && !$item.data( 'nochange' ) ) {
                $item.data( 'hovered', true );
                self._replace( $item );
              }
    
            } ).on( 'mouseleave.gridrotator', function() {
    
              $( this ).data( 'hovered', false );
    
            } );
    
          }
    
        },
        _visChange : function() {
    
          isHidden() ? clearTimeout( this.playtimeout ) : this._start();
    
        },
        // start rotating elements
        _start : function() {
    
          if( this.showTotal < this.itemsTotal && this.options.slideshow ) {
            this._showNext();
          }
    
        },
        // get which type of animation
        _getAnimType : function() {
    
          return this.animType === 'random' ? this.animTypes[ Math.floor( Math.random() * this.animTypesTotal ) ] : this.animType;
    
        },
        // get css properties for the transition effect
        _getAnimProperties : function( $out ) {
    
          var startInProp = {}, startOutProp = {}, endInProp = {}, endOutProp = {},
            animType = this._getAnimType(), speed, delay = 0;
    
          switch( animType ) {
    
            case 'showHide' :
    
              speed = 0;
              endOutProp.opacity = 0;
              break;
    
            case 'fadeInOut' :
    
              endOutProp.opacity = 0;
              break;
    
            case 'slideLeft' :
    
              startInProp.left = $out.width();
              endInProp.left = 0;
              endOutProp.left = -$out.width();
              break;
    
            case 'slideRight' :
    
              startInProp.left = -$out.width();
              endInProp.left = 0;
              endOutProp.left = $out.width();
              break;
    
            case 'slideTop' :
    
              startInProp.top = $out.height();
              endInProp.top = 0;
              endOutProp.top = -$out.height();
              break;
    
            case 'slideBottom' :
    
              startInProp.top = -$out.height();
              endInProp.top = 0;
              endOutProp.top = $out.height();
              break;
    
            case 'rotateLeft' :
    
              speed = this.options.animSpeed / 2;
              startInProp.transform = 'rotateY(90deg)';
              endInProp.transform = 'rotateY(0deg)';
              delay = speed;
              endOutProp.transform = 'rotateY(-90deg)';
              break;
    
            case 'rotateRight' :
    
              speed = this.options.animSpeed / 2;
              startInProp.transform = 'rotateY(-90deg)';
              endInProp.transform = 'rotateY(0deg)';
              delay = speed;
              endOutProp.transform = 'rotateY(90deg)';
              break;
    
            case 'rotateTop' :
    
              speed = this.options.animSpeed / 2;
              startInProp.transform= 'rotateX(90deg)';
              endInProp.transform = 'rotateX(0deg)';
              delay = speed;
              endOutProp.transform = 'rotateX(-90deg)';
              break;
    
            case 'rotateBottom' :
    
              speed = this.options.animSpeed / 2;
              startInProp.transform = 'rotateX(-90deg)';
              endInProp.transform = 'rotateX(0deg)';
              delay = speed;
              endOutProp.transform = 'rotateX(90deg)';
              break;
    
            case 'scale' :
    
              speed = this.options.animSpeed / 2;
              startInProp.transform = 'scale(0)';
              startOutProp.transform = 'scale(1)';
              endInProp.transform = 'scale(1)';
              delay = speed;
              endOutProp.transform = 'scale(0)';
              break;
    
            case 'rotateLeftScale' :
    
              startOutProp.transform = 'scale(1)';
              speed = this.options.animSpeed / 2;
              startInProp.transform = 'scale(0.3) rotateY(90deg)';
              endInProp.transform = 'scale(1) rotateY(0deg)';
              delay = speed;
              endOutProp.transform = 'scale(0.3) rotateY(-90deg)';
              break;
    
            case 'rotateRightScale' :
    
              startOutProp.transform = 'scale(1)';
              speed = this.options.animSpeed / 2;
              startInProp.transform = 'scale(0.3) rotateY(-90deg)';
              endInProp.transform = 'scale(1) rotateY(0deg)';
              delay = speed;
              endOutProp.transform = 'scale(0.3) rotateY(90deg)';
              break;
    
            case 'rotateTopScale' :
    
              startOutProp.transform = 'scale(1)';
              speed = this.options.animSpeed / 2;
              startInProp.transform = 'scale(0.3) rotateX(90deg)';
              endInProp.transform = 'scale(1) rotateX(0deg)';
              delay = speed;
              endOutProp.transform = 'scale(0.3) rotateX(-90deg)';
              break;
    
            case 'rotateBottomScale' :
    
              startOutProp.transform = 'scale(1)';
              speed = this.options.animSpeed / 2;
              startInProp.transform = 'scale(0.3) rotateX(-90deg)';
              endInProp.transform = 'scale(1) rotateX(0deg)';
              delay = speed;
              endOutProp.transform = 'scale(0.3) rotateX(90deg)';
              break;
    
            case 'rotate3d' :
    
              speed = this.options.animSpeed / 2;
              startInProp.transform = 'rotate3d( 1, 1, 0, 90deg )';
              endInProp.transform = 'rotate3d( 1, 1, 0, 0deg )';
              delay = speed;
              endOutProp.transform = 'rotate3d( 1, 1, 0, -90deg )';
              break;
    
          }
    
          return {
            startInProp : startInProp,
            startOutProp : startOutProp,
            endInProp : endInProp,
            endOutProp : endOutProp,
            delay : delay,
            animSpeed : speed != undefined ? speed : this.options.animSpeed
          };
    
        },
        // show next [option.step] elements
        _showNext : function( time ) {
    
          var self = this;
    
          clearTimeout( this.playtimeout );
    
          this.playtimeout = setTimeout( function() {
    
            var step = self.options.step, max= self.options.maxStep, min = 1;
    
            if( max > self.showTotal ) {
              max = self.showTotal;
            }
    
              // number of items to swith at this point of time
            var nmbOut	= step === 'random' ? Math.floor( Math.random() * max + min ) : Math.min( Math.abs( step ) , max ) ,
              // array with random indexes. These will be the indexes of the items we will replace
              randArr	= self._getRandom( nmbOut, self.showTotal );
    
            for( var i = 0; i < nmbOut; ++i ) {
    
              // element to go out
              var $out = self.$items.eq( randArr[ i ] );
    
              // if element is active, which means it is currently animating,
              // then we need to get different positions..
              if( $out.data( 'active' ) || $out.data( 'nochange' ) ) {
    
                // one of the items is active, call again..
                self._showNext( 1 );
                return false;
    
              }
    
              self._replace( $out );
    
            }
    
            // again and again..
            self._showNext();
    
          }, time || Math.max( Math.abs( this.options.interval ) , 300 ) );
    
        },
        _replace : function( $out ) {
    
          $out.data( 'active', true );
    
          var self = this,
            $outA = $out.children( 'a:last' ),
            newElProp = {
              width : $outA.width(),
              height : $outA.height()
            };
    
          // element stays active
          $out.data( 'active', true );
    
          // get the element (anchor) that will go in (first one inserted in this.outItems)
          var $inA = this.outItems.shift();
    
          // save element that went out
          this.outItems.push( $outA.clone().css( 'transition', 'none' ) );
    
          // prepend in element
          $inA.css( newElProp ).prependTo( $out );
    
          var animProp = this._getAnimProperties( $outA );
    
          $inA.css( animProp.startInProp );
          $outA.css( animProp.startOutProp );
    
          this._setTransition( $inA, 'all', animProp.animSpeed, animProp.delay, this.options.animEasingIn );
          this._setTransition( $outA, 'all', animProp.animSpeed, 0, this.options.animEasingOut );
    
          this._applyTransition( $inA, animProp.endInProp, animProp.animSpeed, function() {
    
            var $el = $( this ),
              t = animProp.animSpeed === self.options.animSpeed && isEmpty( animProp.endInProp ) ? animProp.animSpeed : 0;
    
            setTimeout( function() {
    
              if( self.supportTransitions ) {
                $el.off( self.transEndEventName );
              }
    
              $el.next().remove();
              $el.parent().data( 'active', false );
    
            }, t );
    
          }, animProp.animSpeed === 0 || isEmpty( animProp.endInProp ) );
          this._applyTransition( $outA, animProp.endOutProp, animProp.animSpeed );
    
        },
        _getRandom : function( cnt, limit ) {
    
          var randArray = [];
    
          for( var i = 0; i < limit; ++i ) {
            randArray.push( i )
          }
    
          shuffle(randArray);
    
          return randArray.slice( 0, cnt );
    
        },
        _setTransition : function( el, prop, speed, delay, easing ) {
    
          setTimeout( function() {
            el.css( 'transition', prop + ' ' + speed + 'ms ' + delay + 'ms ' + easing );
          }, 25 );
    
        },
        _applyTransition : function( el, styleCSS, speed, fncomplete, force ) {
    
          var self = this;
          setTimeout( function() {
            $.fn.applyStyle = self.supportTransitions ? $.fn.css : $.fn.animate;
    
            if( fncomplete && self.supportTransitions ) {
    
              el.on( self.transEndEventName, fncomplete );
    
              if( force ) {
                fncomplete.call( el );
              }
    
            }
    
            fncomplete = fncomplete || function() { return false; };
    
            el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms', complete : fncomplete } ) );
          }, 25 );
    
        }
    
      };
    
      var logError = function( message ) {
    
        if ( window.console ) {
    
          window.console.error( message );
    
        }
    
      };
    
      $.fn.gridrotator = function( options ) {
    
        var instance = $.data( this, 'gridrotator' );
    
        if ( typeof options === 'string' ) {
    
          var args = Array.prototype.slice.call( arguments, 1 );
    
          this.each(function() {
    
            if ( !instance ) {
    
              logError( "cannot call methods on gridrotator prior to initialization; " +
              "attempted to call method '" + options + "'" );
              return;
    
            }
    
            if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
    
              logError( "no such method '" + options + "' for gridrotator instance" );
              return;
    
            }
    
            instance[ options ].apply( instance, args );
    
          });
    
        }
        else {
    
          this.each(function() {
    
            if ( instance ) {
    
              instance._init();
    
            }
            else {
    
              instance = $.data( this, 'gridrotator', new $.GridRotator( options, this ) );
    
            }
    
          });
    
        }
    
        return instance;
    
      };
    
    } )( jQuery, window );
    `
  }
  
}());