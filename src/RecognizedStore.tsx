import React from 'react'
import { Subject } from 'rxjs';

export class RecognizedStore extends React.Component
{
    public initialState: string;
    private subject: Subject<string>;
    public state: string;

    constructor(props: any) {
        super(props);

        this.initialState = "empty";
        this.subject = new Subject<string>();
        this.state = this.initialState;
        this.subject.subscribe(newState =>
            this.state = newState
          );
        this.subject.next(this.state);
    }

    public sendMessage(message: string) {
        this.state = message;
        this.subject.next(this.state);
    }

    public clear() {
        this.state = this.initialState;
        this.subject.next(this.state);
    }
}