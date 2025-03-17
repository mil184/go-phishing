const TextMessage = ({question}) => {
    return ( 
        <div className="text-message">
            <img className="text-message-image" src={"/assets/" + question.image}></img>
        </div>
     );
}
 
export default TextMessage;