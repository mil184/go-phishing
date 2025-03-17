const Email = ({question}) => {
    
    const hoverImage = document.getElementById("hover-image");
    const hoverButton = document.getElementById("hover-button");
    const tooltip = document.getElementById("tooltip");

    if (hoverImage){
        hoverImage.addEventListener("mouseenter", () => {
            tooltip.style.display = "block";
        });
        
        hoverImage.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    }
    
    if (hoverButton){
        hoverButton.addEventListener("mouseenter", () => {
            tooltip.style.display = "block";
        });
        
        hoverButton.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    }

    return (  
        <div className="email">
            <div className="sender">
                <img className="profile-picture" src={"/assets/" + question.profilePicture}></img>
                <div className="sender-details">
                    <div className="sender-name-and-email">
                        <label id="sender-name">{question.senderName}</label>
                        <label id="sender-email">&lt;{question.senderEmail}&gt;</label>
                    </div>
                        <label id="to-me">to me</label>
                </div>
            </div>
        
            { question.body !== "empty" && 
                <div className="file-sharing">
                    <label id="question-header">{question.header}</label>
                    <div className="email-header-sender">
                        <img className="profile-picture" src={"/assets/" + question.profilePicture}></img>
                        <p>{question.senderName} ({question.senderEmail}) те позива да <strong>измениш</strong> следећи документ: </p>
                    </div>
                    <div className="email-body">
                        <p>{question.body}</p>
                        <img className="email-image" id="hover-image" src={"/assets/" + question.image}></img>
                    </div>
                    <button className="email-button" id="hover-button">Отвори</button>
                    <div id="tooltip">{question.url}</div>
                </div>
            }

            { question.body === "empty" && 
                <div className="shopping">
                    <label id="question-header">{question.header}</label>
                    <img className="email-image" src={"/assets/" + question.image}></img>
                    <button className="shopping-button" id="hover-button">PREUZMI PAKET</button>
                    <div id="tooltip">{question.url}</div>
                </div>
            }   
        </div>
     );
}
 
export default Email;