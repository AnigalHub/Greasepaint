export const scroll = {
    data(){
        return {
            isExpanded: false,
        }
    },
    methods:{
        scrollToTop(){
            window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        },
        scrollToId(event){
            let offsetY = 50;
            if(this.isExpanded){
                let nav = document.getElementById(("Nav"));
                let bounds =  nav.getBoundingClientRect();
                offsetY = bounds.height;
            }
            let element = document.getElementById(event.target.hash.replace("#", ""));
            window.scrollTo({top: element.offsetTop - offsetY, left: 0, behavior: 'smooth'});
            event.preventDefault();
        }
    }
}
