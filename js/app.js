const LikeButton = React.createClass({
    getInitialState: function() {
        return {name: 'peter'};
    },
    componentWillMount:function () {
        console.log(this.state.name + "1");
        this.setState({name:'mark'},function () {
            console.log(this.state.name + "2");
        })
    },
    componentDidMount:function () {
        console.log(this.state.name + "1");
        this.setState({name:'mary'},function () {
            console.log(this.state.name + "2");
        })
    },
    render: function() {

        return (
            <div>
                hello,{this.state.name}
                <Default />
            </div>
        );
    }
});

const Default = React.createClass({
     getDefaultProps: function() {
         return {
             value: 'default value'
         }
     },
     render:function() {
     return <div>{this.props.value}</div>
     }
 });

ReactDOM.render(
    <LikeButton />,
    document.getElementById('content')
);
