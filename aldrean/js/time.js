const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {
    render () {
        return (
          <div class="color-grey">
            <h1>Hello, world!</h1>
            <h1> Its{this.props.date.toLocateTimesSring()}.</h1>
          </div>  
        );
    }
}

function tick() {
    root.render(<Clock date={new date()} />);
}

setInterval(tick, 1000);