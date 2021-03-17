// V.1.1.

// CHANGELOG:

// v.1.1.
// - No changes to scraping, just to the screensaver web page 
// - Row height is calculated automatically to make sure there are always enough covers to fill the screen vertically.
//   Before this I just set grid rotator's row length to something that would in most cases fill the screen, which 
//   would in some cases make it so you'd have almost a full screen height worth of covers animating outside of 
//   the viewport that you'd never get to see. That would also make it so the animating was more sporadic, 
//   because it didn't all happen inside the viewport.
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
        }
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
          
          $('#ri-grid').shuffle();
          
          // Note, the covers are 500x500px, so if they happen to end up bigger than that due to 
          // the settings, they may start looking pixelated/blurry.
          
          // https://tympanus.net/codrops/2012/08/02/animated-responsive-image-grid/
          $('#ri-grid').gridrotator({
            columns: 8,     // screen width over 1550px = 8 covers side by side
            w1550: {
              columns: 6, // screen width less than 1550px = 6 covers side by side
            },
            w1300: {
              columns: 5, // screen width less than 1300px = 5 covers side by side
            },
            w950: {
              columns: 3, // screen width less than 950px = 4 covers side by side
            },
            w600: {
              columns: 2, // screen width less than 600px = 2 covers side by side
            },
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
          });
        
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