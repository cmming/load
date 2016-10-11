/**
 * Created by Administrator on 2016/10/11.
 */
class ReactDemo extends React.Component {
    constructor() {
        super()
        //定义数据的结构
        this.state = {
            val: '',
            arr: []
        }
    }

//监听input的输入数据
    handleData(e) {
        this.setState({
            val: e.target.value
        })
    }

    //点击按钮后的事件处理
    onButtonClick(e) {
        var val = this.state.val
        this.setState({
            arr: [val, ...this.state.arr]
        })
    }

    //数据的删除
    onDelete(index, e) {
        this.setState({
            arr: this.state.arr.filter((elem, i) => index !== i)
        })
    }

    render() {
        var arr1 = this.state.arr
        return (
            <div>
                <input onChange={this.handleData.bind(this)}/>
                <button onClick={this.onButtonClick.bind(this)}>点击保存</button>
                {arr1.map((i, index) =>(
                    <div onClick={this.onDelete.bind(this,index)}>{i}</div>
                ))}
            </div>
        )
    }
}
ReactDOM.render(<ReactDemo />, document.getElementById('app'))