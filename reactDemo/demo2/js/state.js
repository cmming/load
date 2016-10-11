/**
 * Created by Administrator on 2016/10/11.
 */
var LikeButton = React.createClass({
    getInitialState: function() {
        //this.state 是react自带的状态对象
        return {liked: false};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <p onClick={this.handleClick}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        );
    }
});

ReactDOM.render(
    <LikeButton />,
    document.getElementById('example')
);