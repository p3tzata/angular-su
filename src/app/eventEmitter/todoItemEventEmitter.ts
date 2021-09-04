type SubscriptionFN = (data:any) => void;

interface ISubscriptions {

    [eventName:string] : (SubscriptionFN)[];

    //eventName:string;
    //eventNameFn:SubscriptionFN;

}

class todoItemEventEmitter {
    subsctiptions: ISubscriptions={};
    //subsctiptions: ISubscriptions[]=[];

    subscube(eventName:string, cb:SubscriptionFN) : void {
        //this.subsctiptions[eventName] - This will return false if it's undefinded. In this case it will use [] 
        this.subsctiptions[eventName] = (this.subsctiptions[eventName] || []).concat(cb);

    }


    emit(eventName:string, data: any) {
        (this.subsctiptions[eventName] || []).forEach( cb=> cb(data) );
    }

}


const MyTodoItemEventEmitter = new todoItemEventEmitter();

MyTodoItemEventEmitter.subscube("add", ( data => console.log("added_1 " + data)));
MyTodoItemEventEmitter.subscube("add", ( data => console.log("added_2 " + data)));

MyTodoItemEventEmitter.subscube("edit", ( data => console.log("edited_1 " + data)));
MyTodoItemEventEmitter.subscube("edit", ( data => console.log("edited_2 " + data)));




setTimeout(
    () => { MyTodoItemEventEmitter.emit("Connected",{"param":"test123"}) },
    5000
);
console.log(MyTodoItemEventEmitter);