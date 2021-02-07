import React, {Component} from 'react';
import './ImageGallery.css';


//the parent component to the navbar
class ImageGallery extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        };
    }

visible = () => {
    var x = document.getElementsByClassName("gallery");
    x.style.display = "block";
}

render(){
    if (this.state.visible){
        this.visible();
    }
    return(
        <p className="gallery">Gallery</p>
    );
}

}

export default ImageGallery;