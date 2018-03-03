import React, { Component } from 'react';

export default class PatientReceiverInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            receiver: null,
            isOnline: false,
        };

        this.handleRefreshCamera = this.handleRefreshCamera.bind(this);
    }

    handleRefreshCamera() {
        this.setState({
            isLoaded: false
        });
        fetch("/api/receivers/"+this.props.receiverid)
            .then(res => res.json())
            .then(
                (result) => {
                    if ('status' in result && 'uuid' in result) {
                        this.setState({
                            isOnline: (result.status == 'available')? true : false,
                            isLoaded: true,
                            receiver: result
                        });
                    } else {
                        this.setState({
                            isLoaded: true,
                            error: {message: 'Error parsing response from /api/receivers'}
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        isOnline: false,
                        error
                    });
                }
            )
    }
    componentDidMount() {
        this.handleRefreshCamera()
    }

    render() {
        const { error, isLoaded, receiver, isOnline } = this.state;
        if (error) {
            return (<div>
                        No Camera Found. Click Below for more details
                        <details>
                            {error.message}
                        </details>
                    </div>);
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else if (isLoaded && !isOnline) {
            return (
                <div>
                    <div>
                        {receiver.name+" is offline"}
                    </div>
                    <div>
                        <button type="button" className="btn btn-info" onClick={this.handleRefreshCamera}>Refresh Camera</button>
                    </div>
                </div>
            );
        } else if (isLoaded && isOnline) {
            return  (
                <div>
                    <div>
                        <a style={{color: 'green'}} target="_blank" href={"/multi/telemedcall.php?deviceid="+receiver.uuid}>Call {receiver.name}</a>
                    </div>
                    <div>
                        <button type="button" className="btn btn-info" onClick={this.handleRefreshCamera}>Refresh Camera</button>
                    </div>
                </div>
            );
        }
    }
}