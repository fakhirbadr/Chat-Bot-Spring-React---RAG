import {Button, TextField} from "@vaadin/react-components";

export default function Chat(){
    // @ts-ignore
    return(
        <div className="p-m">
            <h3>Chat Bot</h3>
            <div>
                <TextField style={{width:'80%'}}/>
                <Button theme="primary">Send</Button>


            </div>
        </div>
    )
}