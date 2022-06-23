/* ROTATE TEXT ON SCROLL USING VUE JS*/
/*
export default{
    mounted(){
        const dev = {};

        dev.interactions = {
            button: function() {

                let $button = document.querySelector('test');
                gsap.set('$button', {
                    top: Math.floor(Math.random() *(window.innerHeight - $button.offsetHeight)),
                    left: Math.floor(Math.random() * (window.innerWidth - $button.offsetWidth)),
                    opacity: 1
                })

                var rotate  = gsap.timeline({
                    scrollTrigger: {
                        trigger: 'html',
                        scrub: 0.2,
                        start: 'top top',
                        end: '+=10000',
                    }
                }).to($button, {
                    rotation: 360 * 5,
                    duration: 1,
                    ease: 'none'
                });
            }
        };
        dev.interactions.button();
    }
}
*/



/* NAVIGATION SECTION */

function openSlideMenu(){
    document.getElementById("side-menu").style.width = "450px";
    document.getElementById("body").style.marginLeft = "450px";
    document.getElementById("overlay-body").style.display = "block";
    //document.getElementById("worded").style.fontSize = "40px";
}

function closeSideMenu(){
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
    document.getElementById("overlay-body").style.display = "none";
    //document.getElementById("worded").style.fontSize = "50px";
}

//TYPEWRITER EFFECT
class TypeWriter {
    constructor(txtElement, words, wait=5000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

//TYPE METHOD
    type(){
        //CURRENT INDEX OF WORD
        const current = this.wordIndex % this.words.length;
        //GET FULL TEXT OF CURRENT WORD
        const fullTxt = this.words[current];
        //CHECK IF IT'S DELETING
        if(this.isDeleting){
            //REMOVE CHAR
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else {
            //ADD CHAR
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        //INSERT TXT INTO ELEMENTS
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        //INITIAL TYPE SPEED
        let typeSpeed = 40;

        if(this.isDeleting){
            typeSpeed /= 2;
        }
        //IF WORD IS COMPLETE
        if(!this.isDeleting && this.txt === fullTxt){
            //MAKE PAUSE AT THE END
            typeSpeed = this.wait;
            //SET DELETE TO TRUE
            this.isDeleting = true;
        }
        else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        //MOVE TO THE NEXT WORD
        this.wordIndex++;
        //PAUSE BEFORE STARTING TO TYPING
        typeSpeed = 300;
        }
        
        setTimeout(() => this.type(), typeSpeed);
        }
}

//INIT ON DOM LOAD

document.addEventListener('DOMContentLoaded', init);

//INIT APP
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //INIT TYPEWRITER
    new TypeWriter(txtElement, words, wait);
}
//END





