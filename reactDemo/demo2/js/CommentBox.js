/**
 * Created by Administrator on 2016/10/11.
 */
//定义组件
var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="CommentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});
//渲染组件
ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')
);