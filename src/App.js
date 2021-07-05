import React, {Component} from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItemToAdd: '',
            isOpen: true,
            cont: 0,
            list: [],
            size:5,
            name: this.props._initialData
        }

    }

    toggleList = () => {
        this.setState({isOPen: !this.state.isOPen})
    }
    updettToList = (newVal) => {
        this.setState({newItemToAdd: newVal})

    }
    addItems = (item) => {
            if (this.state.cont < 5) {
                let clonedState = this.state.list.slice();
                clonedState.push(this.state.newItemToAdd);
                this.setState({list: clonedState});
                this.state.cont = this.state.cont + 1;
            } else {
                alert("לא ניתן להוסיף פריטים אנא מחק!")
            }
        }
        resetList = () =>{
        let list = this.state.list;
        list = list.filter((props) =>{
            return props.empty
        })
            this.setState({list})
            this.setState({left: this.state.cont=0})
        }
    removeItem = (index) => {
        let list = this.state.list;
        list = list.filter((index) => {
            return index != index
        })
        this.setState({list})
        this.setState({left: this.state.cont = this.state.cont - 1})
    }

    render() {
        return (
            <div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30vw",
                    height: "53vh",
                    position: "absolute",
                    borderStyle:"dashed",
                    left: "40vw",
                    textAlign: "center",
                    background:'#00ccff'
                }}>
                    <h1 style={{color:'blue'}}> Hello Workd! </h1>
                    <p> you have {this.state.size - this.state.cont} tasks </p>

                <input style={{
                    width:"15vw",
                    margin: '10px',
                    marginLeft: '120px',
                    background:'CornflowerBlue',
                    textAlign: "center",
                    borderRadius:"35px"
                }}
                       placeholder={'add' + this.props.title} onChange={e => this.updettToList(e.target.value)}/>
                <button onClick={this.addItems}
                        style={{
                            width: '15vw',
                            margin: '10px',
                            marginLeft: '120px',
                            height: "5vh",
                            wordWrap: 'break-word',
                            color:'blue',
                            background:'white'}}>
                    Add!
                </button>
                </div>
                <div style={{
                    display: "flex",
                    flex:'1',
                    flexDirection: "column",
                    width: "30vw",
                    height: "53vh",
                    position: "absolute",
                    borderStyle:"dotted",
                    top:'26vw',
                    left: "40vw"

                }}>
                <button onClick={this.toggleList}
                        style={{
                            width: '15vw',
                            margin: '10px',
                            marginLeft: '120px',
                            height: "5vh",
                            wordWrap: 'break-word',
                            color:'blue',
                            background:'white'}}>
                    {
                        this.state.isOPen ? 'hide' : 'show'
                    }
                </button>
                {this.state.isOPen ? <ul> <h5>the taks is:</h5>
                    {this.state.list.map((item, index) => <li> <button
                        onClick={
                        this.removeItem
                    }>
                        {

                            'the you task number '+ (index + 1) + ' is '+item
                        }
                    </button>
                    </li>)}
                </ul> : ''}
                <button onClick={this.resetList}
                        style={{
                            width: '15vw',
                            margin: '10px',
                            marginLeft: '120px',
                            height: "5vh",
                            wordWrap: 'break-word',
                            color:'red',
                            background:'white'}}>

                        clers! </button>

            </div></div>
        );
    }
}


export default App;