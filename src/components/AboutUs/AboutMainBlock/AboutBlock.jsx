import '../../../css/AboutUs/AboutMainBlock/AboutBlockStyle.css';
export const AboutBlock =(props)=>{

    const {AboutBlockH1, AboutBlockText, AboutBlockImg, isImgLeft} = props;
    return <div class="AboutBlock">

        {(() => {
                if (isImgLeft) {
                    return (
                        <div class="AboutBlockContainer">
                            <img src={AboutBlockImg} class="AboutBlockImg"/> 
                            <h1 class="AboutBlockH1">{AboutBlockH1}</h1>
                            <p class="AboutBlockText">{AboutBlockText}</p>
                        </div>
                    );
                } 
                else {
                    return (
                        <div class="AboutBlockContainer">
                            <h1 class="AboutBlockH1">{AboutBlockH1}</h1>
                            <p class="AboutBlockText">{AboutBlockText}</p>
                            <img src={AboutBlockImg} class="AboutBlockImg"/> 
                        </div>
                    );
                }
            })()}
        
    </div>
}