'use babel';

import VisManager from './visManager';

export default class EditorManager {

    constructor(id) {
        this.id = id;
        //this.editor = editor;
        //this.editorView = atom.views.getView(editor);
        this.viewActive = false;

        console.log(`EditorManager ${this.id} created`);
    }

    toggleView() {
        this.viewActive = !this.viewActive;

        console.log(`EditorManager ${this.id} view toggled`);
    }

}


/*
var d1 = textEditor.onDidChange( (what)=> {
    //important not to perform any expensive operations via this method
    console.log('onDidChange');
    //console.log(what);
});

var d2 = textEditor.onDidStopChanging( (what)=> {
    //Event emitted asynchronously 300ms after the last buffer change.
    //Good place to handle changes to the buffer without compromising typing performance.
    console.log('onDidStopChanging');
    //console.log(what);

    var contents = textEditor.getText();
    //this is just to see if it works. Might be better to change to an event based system
    this.ElementModel.updateTree(contents);
});

var d3 = textEditor.onDidChangeCursorPosition( (what) => {
    //Calls your callback when a Cursor is moved
    //If there are multiple cursors, your callback will be called for each cursor.
    console.log('onDidChangeCursorPosition');
    //console.log(what);
});

var d4 = textEditor.onDidDestroy( (what) => {
    //Invoke the given callback when the editor is destroyed.
    console.log('onDidDestroy');
    //console.log(what);

    //not sure if this is correct, but these events should be disposed of when textEditor is removed!
    d1.dispose();
    d2.dispose();
    d3.dispose();
    d4.dispose();
});
*/